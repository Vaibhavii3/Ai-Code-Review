// const Code = () => {
//     return (
//         <div className="text-center mt-10">
//             <h1 className="text-3xl font-bold">CodeEditor</h1>
//             <p className="mt-4 text-lg">
//                 Analyse your code with AI for quality, performance, and security.
//             </p>
//         </div>
//     );
// };

// export default Code;

import React, { useState } from 'react';

const Code = () => {
    const [code, setCode] = useState('');
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    const handleAnalyze = async () => {
        setIsAnalyzing(true);
        
        const response = await fetch("http://localhost:5000/analyze", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ code, language: "javascript" })
        });
    
        const data = await response.json();
        if (data.reportId) {
            window.location.href = `/review/${data.reportId}`;
        }
    
        setIsAnalyzing(false);
    };

    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%)',
            color: 'white',
            padding: '4rem 1rem',
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
            }}>
                {/* Header Section */}
                <div style={{
                    textAlign: 'center',
                    marginBottom: '3rem',
                }}>
                    <h1 style={{
                        fontSize: '2.5rem',
                        fontWeight: '800',
                        background: 'linear-gradient(45deg, #FF3366, #FF6B6B, #4ECDC4)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '1rem',
                    }}>
                        Code Editor
                    </h1>
                    <p style={{
                        fontSize: '1.125rem',
                        color: '#E2E8F0',
                        maxWidth: '600px',
                        margin: '0 auto',
                        lineHeight: '1.6',
                    }}>
                        Analyze your code with AI for quality, performance, and security insights
                    </p>
                </div>

                {/* Editor Section */}
                <div style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '1rem',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    padding: '2rem',
                    backdropFilter: 'blur(10px)',
                }}>
                    <textarea
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        placeholder="Paste your code here..."
                        style={{
                            width: '100%',
                            minHeight: '400px',
                            background: 'rgba(0, 0, 0, 0.2)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '0.5rem',
                            padding: '1rem',
                            color: '#E2E8F0',
                            fontSize: '1rem',
                            fontFamily: 'monospace',
                            resize: 'vertical',
                            outline: 'none',
                        }}
                    />

                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        gap: '1rem',
                        marginTop: '1rem',
                    }}>
                        <button
                            onClick={() => setCode('')}
                            style={{
                                padding: '0.75rem 1.5rem',
                                borderRadius: '0.5rem',
                                background: 'rgba(255, 255, 255, 0.1)',
                                color: 'white',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                            }}
                            onMouseOver={(e) => {
                                e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                            }}
                        >
                            Clear
                        </button>
                        <button
                            onClick={handleAnalyze}
                            disabled={isAnalyzing || !code.trim()}
                            style={{
                                padding: '0.75rem 2rem',
                                borderRadius: '0.5rem',
                                background: 'linear-gradient(45deg, #FF3366, #FF6B6B)',
                                color: 'white',
                                border: 'none',
                                cursor: code.trim() ? 'pointer' : 'not-allowed',
                                opacity: code.trim() ? 1 : 0.5,
                                transition: 'all 0.3s ease',
                                boxShadow: '0 4px 15px rgba(255, 51, 102, 0.3)',
                            }}
                            onMouseOver={(e) => {
                                if (code.trim()) {
                                    e.target.style.transform = 'translateY(-2px)';
                                    e.target.style.boxShadow = '0 6px 20px rgba(255, 51, 102, 0.4)';
                                }
                            }}
                            onMouseOut={(e) => {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = '0 4px 15px rgba(255, 51, 102, 0.3)';
                            }}
                        >
                            {isAnalyzing ? 'Analyzing...' : 'Analyze Code'}
                        </button>
                    </div>
                </div>

                {/* Features List */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem',
                    marginTop: '4rem',
                }}>
                    {[
                        'Real-time syntax highlighting',
                        'Performance optimization suggestions',
                        'Security vulnerability detection',
                        'Code quality assessment',
                    ].map((feature, index) => (
                        <div
                            key={index}
                            style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                padding: '1.5rem',
                                borderRadius: '0.75rem',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                color: '#E2E8F0',
                            }}
                        >
                            {feature}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Code;