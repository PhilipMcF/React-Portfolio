import { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Importing icons

function Footer() {
  // Type the state as string or null
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  // Styles for the footer and icons
  const styles = {
    footer: {
      backgroundColor: 'rgba(49, 52, 61, 1)',
      padding: '10px 0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 'auto',
    },
    iconContainer: {
      display: 'flex',
      gap: '40px',
    },
    icon: {
      color: '#fff',
      textDecoration: 'none',
      transition: 'opacity 0.3s ease-in-out', // Smooth transition
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.iconContainer}>
        {/* GitHub Icon */}
        <a
          href="https://github.com/PhilipMcF"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...styles.icon,
            opacity: hoveredIcon === 'github' ? 1 : 0.5, // Change opacity based on hover state
          }}
          onMouseEnter={() => setHoveredIcon('github')} // Set hovered icon
          onMouseLeave={() => setHoveredIcon(null)} // Reset on leave
        >
          <FaGithub size={40} />
        </a>

        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/philip-mcfarland-aa3b4a191/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...styles.icon,
            opacity: hoveredIcon === 'linkedin' ? 1 : 0.5, // Change opacity based on hover state
          }}
          onMouseEnter={() => setHoveredIcon('linkedin')} // Set hovered icon
          onMouseLeave={() => setHoveredIcon(null)} // Reset on leave
        >
          <FaLinkedin size={40} />
        </a>

        {/* Twitter Icon */}
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...styles.icon,
            opacity: hoveredIcon === 'twitter' ? 1 : 0.5, // Change opacity based on hover state
          }}
          onMouseEnter={() => setHoveredIcon('twitter')} // Set hovered icon
          onMouseLeave={() => setHoveredIcon(null)} // Reset on leave
        >
          <FaTwitter size={40} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
