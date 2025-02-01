import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navStyles = {
        nav: {
            background: scrolled ? 'rgba(10, 10, 10, 0.1)' : 'transparent',
            backdropFilter: scrolled ? 'blur(15px)' : 'none',
            padding: '1.5rem',
            transition: 'all 0.3s ease',
            position: 'fixed',
            width: '100%',
            top: 0,
            zIndex: 1000,
        },
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        logo: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #FF3366, #FF6B6B, #4ECDC4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 20px rgba(255,51,102,0.3)',
        },
        linksContainer: {
            display: 'flex',
            gap: '2rem',
            alignItems: 'center',
            '@media (max-width: 768px)': {
                display: isMenuOpen ? 'flex' : 'none',
                flexDirection: 'column',
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                background: 'rgba(0, 0, 0, 0.9)',
                backdropFilter: 'blur(10px)',
                padding: '2rem',
            }
        },
        button: {
            background: 'linear-gradient(45deg, #FF3366, #FF6B6B)',
            border: 'none',
            padding: '0.5rem 1.5rem',
            borderRadius: '50px',
            color: 'white',
            cursor: 'pointer',
            transition: 'transform 0.3s ease',
            boxShadow: '0 4px 15px rgba(255, 51, 102, 0.3)',
            display: 'none',
            '@media (max-width: 768px)': {
                display: 'block',
            }
        }
    };

    const CustomLink = ({ to, children }) => {
        const [isHovered, setIsHovered] = useState(false);

        const linkStyles = {
            position: 'relative',
            color: 'white',
            textDecoration: 'none',
            padding: '0.5rem 1rem',
            transition: 'all 0.3s ease',
            background: isHovered ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
            borderRadius: '8px',
        };

        const indicatorStyles = {
            position: 'absolute',
            bottom: '-2px',
            left: '50%',
            width: isHovered ? '100%' : '0%',
            height: '2px',
            background: 'linear-gradient(45deg, #FF3366, #FF6B6B)',
            transition: 'all 0.3s ease',
            transform: 'translateX(-50%)',
            borderRadius: '4px',
        };

        return (
            <Link 
                to={to} 
                style={linkStyles}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {children}
                <span style={indicatorStyles} />
            </Link>
        );
    };

    return (
        <nav style={navStyles.nav}>
            <div style={navStyles.container}>
                <h1 style={navStyles.logo}>AI Code Review</h1>
                
                <button 
                    style={navStyles.button}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    Menu
                </button>

                <div style={navStyles.linksContainer}>
                    <CustomLink to="/">Home</CustomLink>
                    <CustomLink to="/editor">Code Editor</CustomLink>
                    <CustomLink to="/results">Results</CustomLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;