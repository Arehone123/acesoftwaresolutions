import React, { useState } from "react";
import { ref, push } from "firebase/database";
import { database } from "./firebase.js";
import { GoogleGenerativeAI } from "@google/generative-ai";

const SoftwareRequestForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        softwareType: "",
        description: "",
        platform: "",
        meetingDate: "",
        meetingTime: "",
    });
// Then access like this:

    const [status, setStatus] = useState("");
    const [aiSuggestion, setAiSuggestion] = useState("");
    const [aiError, setAiError] = useState("");
    const [loadingAI, setLoadingAI] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const dataToSubmit = {
                ...formData,
                submittedAt: new Date().toISOString(),
            };

            const requestsRef = ref(database, "softwareRequests");
            await push(requestsRef, dataToSubmit);

            setStatus("Request submitted successfully!");
            setFormData({
                fullName: "",
                email: "",
                phone: "",
                softwareType: "",
                description: "",
                platform: "",
                meetingDate: "",
                meetingTime: "",
            });
            setAiSuggestion("");
        } catch (err) {
            console.error("Firebase error:", err);
            setStatus(`Error: ${err.message}`);
        }
    };



    const handleAIRefine = async () => {


        const genAI = new GoogleGenerativeAI("AIzaSyDPpZWakHDWYj0-qiREzA_B6AjdfuLQtYQ");


        setAiError("");
        setAiSuggestion("");
        setLoadingAI(true);

        try {
            const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
            const prompt = `explain this application idea to the developer and be a little bit more technical with up to 6-8 sentences( please do not mention developer just go straight to the point )\n"${formData.description}"`;

            const result = await model.generateContent(prompt);
            const refined = result.response.text().trim();
            setAiSuggestion(refined);
        } catch (err) {
            setAiError("AI refinement failed. Please try again.");
            console.error("Gemini API error:", err);
        } finally {
            setLoadingAI(false);
        }


    };

    return (
        <div style={styles.pageWrapper}>
            <style>{cssStyles}</style>
            <div style={styles.formWrapper}>
                <h2 style={styles.header}>Request Software & Book a Meeting</h2>
                <form onSubmit={handleSubmit}>
                    {/* Row 1: Full Name & Email */}
                    <div className="grid-2">

                    <Input label="Full Name *" name="fullName" type="text" value={formData.fullName} onChange={handleChange} placeholder="Enter your full name" required />
                        <Input label="Email Address *" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" required />
                    </div>

                    {/* Row 2: Phone & Software Type */}
                    <div className="grid-2">
                    <Input label="Phone Number *" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+27 XX XXX XXXX" required />
                        <Input label="Software Type *" name="softwareType" type="text" value={formData.softwareType} onChange={handleChange} placeholder="e.g., CRM, Mobile App" required />
                    </div>

                    {/* Project Description & AI Button */}
                    <div className="input-group" style={{ marginBottom: "25px" }}>
                        <label className="form-label">Project Description *</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="form-input"
                            placeholder="Describe your software requirements, key features, and business goals..."
                            rows={4}
                            required
                            style={{ resize: "vertical", minHeight: "120px" }}
                        />
                        <button
                            type="button"
                            className="submit-button"
                            onClick={handleAIRefine}
                            disabled={loadingAI || !formData.description}
                            style={{ marginTop: "12px" }}
                        >
                            {loadingAI ? "Refining..." : "Refine with AI"}
                        </button>

                        {aiSuggestion && (
                            <div style={styles.aiSuggestionBox}>
                                <p><strong>AI Suggestion:</strong><br />{aiSuggestion}</p>
                                <div style={styles.aiButtons}>
                                    <button type="button" className="submit-button" style={{ background: "#059669" }} onClick={() => setFormData({ ...formData, description: aiSuggestion })}>Use This Description</button>
                                    <button type="button" className="submit-button" style={{ background: "#dc2626" }} onClick={() => setAiSuggestion("")}>close</button>
                                </div>
                            </div>
                    )}



                        {aiError && <p style={{ color: "red", marginTop: "10px" }}>{aiError}</p>}
                    </div>

                    {/* Platform */}
                    <div className="input-group" style={{ marginBottom: "25px" }}>
                        <label className="form-label">Target Platform *</label>
                        <select name="platform" value={formData.platform} onChange={handleChange} required className="form-input">
                            <option value="">-- Select Platform --</option>
                            <option value="web">Web Application</option>
                            <option value="mobile">Mobile (Android/iOS)</option>
                            <option value="desktop">Desktop Application</option>
                            <option value="cross-platform">Cross-Platform Solution</option>
                        </select>
                    </div>

                    {/* Meeting Date & Time */}
                    <div className="grid-2">

                    <Input label="Preferred Meeting Date *" name="meetingDate" type="date" value={formData.meetingDate} onChange={handleChange} required min={new Date().toISOString().split('T')[0]} />
                        <Input label="Preferred Meeting Time *" name="meetingTime" type="time" value={formData.meetingTime} onChange={handleChange} required />
                    </div>

                    <button type="submit" className="submit-button" disabled={status === "Sending..."}>
                        {status === "Sending..." ? "Submitting Request..." : "Submit Request & Schedule Meeting"}
                    </button>

                    {status && (
                        <div className={`status-message ${status.includes("Error") ? "status-error" : "status-success"}`}>
                            {status}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

const Input = ({ label, ...props }) => (
    <div className="input-group" style={{ marginBottom: "25px" }}>
        <label className="form-label">{label}</label>
        <input {...props} className="form-input" />
    </div>
);

const styles = {
    pageWrapper: {
        minHeight: "100vh",
        padding: "40px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Poppins, sans-serif"
    },
    formWrapper: {
        maxWidth: "800px",
        width: "100%",
        padding: "40px",
        borderRadius: "20px",
        background: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
        animation: "slideIn 0.8s ease-out"
    },
    header: {
        marginBottom: "30px",
        textAlign: "center",
        fontSize: "2.2rem",
        fontWeight: "700",
        background: "linear-gradient(45deg, #04636c, #0891b2)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text"
    },
    grid2: {
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "20px",
        marginBottom: "20px",
    },

// We'll override this with media query below

    aiSuggestionBox: {
        marginTop: "15px",
        background: "#f0fdf4",
        padding: "12px",
        borderRadius: "10px",
        border: "1px solid #bbf7d0"
    },
    aiButtons: {
        display: "flex",
        gap: "10px",
        flexWrap: "wrap"
    }
};

const cssStyles = `
@keyframes slideIn {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}
.form-input {
    width: 100%;
    padding: 15px 20px;
    border: 2px solid #e1e5e9;
    border-radius: 12px;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    transition: all 0.3s ease;
    background: rgba(255, 255, 255, 0.9);
}
.form-input:focus {
    outline: none;
    border-color: #04636c;
    box-shadow: 0 0 0 3px rgba(4, 99, 108, 0.1);
    transform: translateY(-2px);
    background: white;
}
.form-label {
    margin-bottom: 8px;
    font-weight: 600;
    color: #374151;
    font-size: 0.95rem;
}
.submit-button {
    background: linear-gradient(45deg, #04636c, #0891b2);
    color: white;
    padding: 16px 32px;
    width: 100%;
    font-size: 1.1rem;
    font-weight: 600;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: 0.3s;
    font-family: 'Poppins', sans-serif;
}
.submit-button:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(4, 99, 108, 0.3);
}
.submit-button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}
.status-message {
    margin-top: 20px;
    padding: 15px;
    border-radius: 8px;
    font-weight: 500;
    text-align: center;
    animation: slideIn 0.5s ease-out;
}
.status-success {
    background: rgba(34, 197, 94, 0.1);
    color: #059669;
    border: 1px solid rgba(34, 197, 94, 0.2);
}
.status-error {
    background: rgba(239, 68, 68, 0.1);
    color: #dc2626;
    border: 1px solid rgba(239, 68, 68, 0.2);
}
@media (min-width: 768px) {
  .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 20px;
  }
}
@media (max-width: 480px) {
  .submit-button {
    font-size: 0.95rem;
    padding: 12px 20px;
  }
}


`;

export default SoftwareRequestForm;
