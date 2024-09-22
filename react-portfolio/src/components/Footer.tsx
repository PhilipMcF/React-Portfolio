import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Importing icons

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.iconContainer}>
        {/* GitHub Icon */}
        <a href="https://github.com/PhilipMcF" target="_blank" rel="noopener noreferrer" style={styles.icon}>
          <FaGithub size={30} />
        </a>

        {/* LinkedIn Icon */}
        <a href="https://linkedin.com/in/philip" target="_blank" rel="noopener noreferrer" style={styles.icon}>
          <FaLinkedin size={30} />
        </a>

        {/* Twitter Icon */}
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
          <FaTwitter size={30} />
        </a>
      </div>
    </footer>
  );
};

// Styles for the footer and icons
const styles = {
  footer: {
    backgroundColor: '#333',
    padding: '10px 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    display: 'flex',
    gap: '20px',
  },
  icon: {
    color: '#fff',
    textDecoration: 'none',
    transition: 'transform 0.2s',
  },
};

export default Footer;
