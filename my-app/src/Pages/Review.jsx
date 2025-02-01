// import React, { useState } from 'react';

// const ReviewCard = ({ title, status, description, suggestions }) => (
//     <div style={{
//         background: 'rgba(255, 255, 255, 0.03)',
//         borderRadius: '1rem',
//         border: '1px solid rgba(255, 255, 255, 0.1)',
//         padding: '1.5rem',
//         marginBottom: '1.5rem',
//         cursor: 'pointer',
//         transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//     }}
//     onMouseOver={(e) => {
//         e.target.style.transform = 'translateY(0)';
//         e.target.style.boxShadow = 'none';
//     }}
//     onMouseOut={(e) => {
//         e.target.style.transform = 'translateY(0)';
//         e.target.style.boxShadow = 'none';
//     }}>
//         <div style={{
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             marginBottom: '1rem',
//         }}>
//             <h3 style={{ 
//                 fontSize: '1.25rem',
//                 fontWeight: '600',
//                 color: '#E2E8F0',
//             }}>{title}</h3>
//             <span style={{
//                 padding: '0.5rem 1rem',
//                 borderRadius: '2rem',
//                 fontSize: '0.875rem',
//                 background: status === 'Good' ? 'rgba(34, 197, 94, 0.2)' : 
//                            status === 'Warning' ? 'rgba(234, 179, 8, 0.2)' : 
//                            'rgba(239, 68, 68, 0.2)',
//                 color: status === 'Good' ? '#4ade80' : 
//                        status === 'Warning' ? '#fbbf24' : 
//                        '#f87171',
//             }}>
//                 {status}
//             </span>
//         </div>
//         <p style={{
//             color: '#94A3B8',
//             marginBottom: '1rem',
//             lineHeight: '1.6',
//         }}>{description}</p>
//         {suggestions && (
//             <div style={{
//                 background: 'rgba(0, 0, 0, 0.2)',
//                 padding: '1rem',
//                 borderRadius: '0.5rem',
//                 marginTop: '1rem',
//             }}>
//                 <h4 style={{
//                     color: '#E2E8F0',
//                     marginBottom: '0.5rem',
//                     fontSize: '0.875rem',
//                     fontWeight: '600',
//                 }}>Suggestions:</h4>
//                 <ul style={{
//                     listStyle: 'none',
//                     padding: 0,
//                     margin: 0,
//                 }}>
//                     {suggestions.map((suggestion, index) => (
//                         <li key={index} style={{
//                             color: '#94A3B8',
//                             fontSize: '0.875rem',
//                             marginBottom: '0.5rem',
//                             paddingLeft: '1rem',
//                             position: 'relative',
//                         }}>
//                             • {suggestion}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         )}
//     </div>
// );

// const Review = () => {
//     const [activeTab, setActiveTab] = useState('all');
    
//     const reviewData = [
//         {
//             title: 'Code Quality',
//             status: 'Warning',
//             description: 'Some code quality issues were detected that could be improved.',
//             suggestions: [
//                 'Consider extracting repeated logic into helper functions',
//                 'Add comments to explain complex business logic',
//                 'Use more descriptive variable names'
//             ]
//         },
//         {
//             title: 'Performance',
//             status: 'Good',
//             description: 'Code performance meets best practices with minor optimization opportunities.',
//             suggestions: [
//                 'Consider memoizing expensive calculations',
//                 'Optimize array operations for large datasets'
//             ]
//         },
//         {
//             title: 'Security',
//             status: 'Critical',
//             description: 'Several security vulnerabilities were identified that need attention.',
//             suggestions: [
//                 'Sanitize user input before processing',
//                 'Implement proper authentication checks',
//                 'Use environment variables for sensitive data'
//             ]
//         }
//     ];

//     return (
//         <div style={{
//             minHeight: '100vh',
//             background: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%)',
//             color: 'white',
//             padding: '4rem 1rem',
//         }}>
//             <div style={{
//                 maxWidth: '1000px',
//                 margin: '0 auto',
//             }}>
//                 {/* Header Section */}
//                 <div style={{
//                     textAlign: 'center',
//                     marginBottom: '3rem',
//                 }}>
//                     <h1 style={{
//                         fontSize: '2.5rem',
//                         fontWeight: '800',
//                         background: 'linear-gradient(45deg, #FF3366, #FF6B6B, #4ECDC4)',
//                         WebkitBackgroundClip: 'text',
//                         WebkitTextFillColor: 'transparent',
//                         marginBottom: '1rem',
//                     }}>
//                         Review Results
//                     </h1>
//                     <p style={{
//                         fontSize: '1.125rem',
//                         color: '#E2E8F0',
//                         maxWidth: '600px',
//                         margin: '0 auto',
//                         lineHeight: '1.6',
//                     }}>
//                         Comprehensive analysis of your code quality, performance, and security
//                     </p>
//                 </div>

//                 {/* Filters */}
//                 <div style={{
//                     display: 'flex',
//                     justifyContent: 'center',
//                     gap: '1rem',
//                     marginBottom: '2rem',
//                 }}>
//                     {['all', 'critical', 'warnings', 'good'].map((tab) => (
//                         <button
//                             key={tab}
//                             onClick={() => setActiveTab(tab)}
//                             style={{
//                                 padding: '0.5rem 1.5rem',
//                                 borderRadius: '2rem',
//                                 background: activeTab === tab ? 
//                                     'linear-gradient(45deg, #FF3366, #FF6B6B)' : 
//                                     'rgba(255, 255, 255, 0.1)',
//                                 border: 'none',
//                                 color: 'white',
//                                 cursor: 'pointer',
//                                 transition: 'all 0.3s ease',
//                             }}
//                         >
//                             {tab.charAt(0).toUpperCase() + tab.slice(1)}
//                         </button>
//                     ))}
//                 </div>

//                 {/* Review Cards */}
//                 <div>
//                     {reviewData.map((review, index) => (
//                         <ReviewCard key={index} {...review} />
//                     ))}
//                 </div>

//                 {/* Summary Section */}
//                 <div style={{
//                     background: 'rgba(255, 255, 255, 0.03)',
//                     borderRadius: '1rem',
//                     border: '1px solid rgba(255, 255, 255, 0.1)',
//                     padding: '2rem',
//                     marginTop: '3rem',
//                     textAlign: 'center',
//                 }}>
//                     <h2 style={{
//                         fontSize: '1.5rem',
//                         fontWeight: '600',
//                         marginBottom: '1rem',
//                         color: '#E2E8F0',
//                     }}>Overall Assessment</h2>
//                     <p style={{
//                         color: '#94A3B8',
//                         lineHeight: '1.6',
//                     }}>
//                         Your code has been analyzed across multiple dimensions. 
//                         While there are some areas that need attention, particularly in security, 
//                         the overall structure is solid with good performance characteristics.
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Review;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Review = () => {
    const { id } = useParams();
    const [report, setReport] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/reports/${id}`)
            .then((res) => res.json())
            .then((data) => setReport(data))
            .catch((err) => console.error(err));
    }, [id]);

    return (
        <div>
            <h1>Code Review</h1>
            {report ? (
                <pre>{JSON.stringify(report.analysisResult, null, 2)}</pre>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Review;
