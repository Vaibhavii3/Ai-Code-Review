// import { Link } from "react-router-dom";

// const Home = () => {
//     return (
//         <div className="text-center mt-10">
//             <h1 className="text-3xl font-bold">Welcome to AI Code Review</h1>
//             <p className="mt-4 text-lg">
//                 Analyse your code with AI for quality, performance, and security.
//             </p>
//             <Link
//                 to="/editor"
//                 className="mt-6 inline-block bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition"
//             >
//                 Start Reviewing
//             </Link>
//         </div>
//     );
// };

// export default Home;

import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeIn = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'all 0.8s ease-out',
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%)',
      color: 'white',
      padding: '6rem 1rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background Animation */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)',
        animation: 'pulse 8s infinite',
      }} />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Hero Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '6rem',
          ...fadeIn,
        }}>
          <h1 style={{
            fontSize: '4rem',
            fontWeight: '800',
            background: 'linear-gradient(45deg, #FF3366, #FF6B6B, #4ECDC4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '2rem',
            textShadow: '0 0 40px rgba(255,51,102,0.3)',
          }}>
            AI Code Review
          </h1>
          <p style={{
            fontSize: '1.5rem',
            color: '#E2E8F0',
            marginBottom: '3rem',
            maxWidth: '700px',
            margin: '0 auto 3rem',
            lineHeight: '1.6',
          }}>
            Elevate your code quality with next-generation AI-powered analysis
          </p>
          <Link
            to="/editor"
            style={{
              display: 'inline-block',
              padding: '1rem 3rem',
              borderRadius: '50px',
              background: 'linear-gradient(45deg, #FF3366, #FF6B6B)',
              color: 'white',
              fontWeight: '600',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(255, 51, 102, 0.3)',
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 20px rgba(255, 51, 102, 0.4)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(255, 51, 102, 0.3)';
            }}
          >
            Start Reviewing
          </Link>
        </div>

        {/* Features Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          margin: '4rem 0',
          ...fadeIn,
          transitionDelay: '0.2s',
        }}>
          {[
            {
              title: 'Smart Analysis',
              description: 'Advanced AI algorithms analyze your code for patterns, anti-patterns, and best practices',
              gradient: 'linear-gradient(135deg, #FF3366 0%, #FF6B6B 100%)',
            },
            {
              title: 'Performance Tips',
              description: 'Get actionable insights to optimize your code\'s performance and efficiency',
              gradient: 'linear-gradient(135deg, #4ECDC4 0%, #2ECC71 100%)',
            },
            {
              title: 'Security Checks',
              description: 'Identify potential security vulnerabilities and receive guided fixes',
              gradient: 'linear-gradient(135deg, #A78BFA 0%, #818CF8 100%)',
            }
          ].map((feature, index) => (
            <div key={index} style={{
              padding: '2rem',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '1rem',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              textAlign: 'left',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                marginBottom: '1rem',
                background: feature.gradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>{feature.title}</h3>
              <p style={{
                color: '#CBD5E1',
                fontSize: '1rem',
                lineHeight: '1.6',
              }}>{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div style={{
          textAlign: 'center',
          marginTop: '6rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          ...fadeIn,
          transitionDelay: '0.4s',
        }}>
          {[
            { value: '99%', label: 'Accuracy Rate', color: '#FF3366' },
            { value: '50+', label: 'Language Support', color: '#4ECDC4' },
            { value: '24/7', label: 'Instant Analysis', color: '#818CF8' }
          ].map((stat, index) => (
            <div key={index} style={{
              padding: '2rem',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '1rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}>
              <p style={{
                fontSize: '2.5rem',
                fontWeight: '800',
                color: stat.color,
                marginBottom: '0.5rem',
              }}>{stat.value}</p>
              <p style={{
                color: '#E2E8F0',
                fontSize: '1.125rem',
              }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;