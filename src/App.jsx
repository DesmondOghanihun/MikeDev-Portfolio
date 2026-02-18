import { useState } from 'react';
import './App.css';

// 1. Reusable Card Component (Keep this outside the App)
const ProjectCard = ({ project }) => (
  <div className="card">
    <div className="card-badge">New</div>
    <h3>{project.title}</h3>
    <p>{project.description}</p>
    <div className="tech-stack">
      {project.tech.map((item, index) => (
        <span key={index} className="tag">{item}</span>
      ))}
    </div>
  </div>
);

// 2. Data Array
const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Luxe",
    description: "A high-end fashion interface with seamless transitions.",
    tech: ["React", "Vite", "Framer Motion"],
  },
  {
    id: 2,
    title: "Analytics Dashboard",
    description: "Visualizing complex data with interactive charts.",
    tech: ["Recharts", "CSS Modules"],
  },
  {
    id: 3,
    title: "Neural Network UI",
    description: "A dark-themed interface for AI model monitoring.",
    tech: ["React", "Three.js"],
    
  }
];

function App() {
  // --- FORM LOGIC ---
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email.includes('@')) {
      alert("Please enter a valid email!");
      return;
    }
    console.log("Form Submitted:", formData);
    alert("Message sent successfully!");
  };

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">MIKE.DEV</div>
        <div className="links">
          <span>Work</span>
          <button className="cta-btn">Contact</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h1 className="gradient-text">Portfolio <br/> Highlights</h1>
        <p className="subtitle">Selected works crafted with precision and modern tools.</p>
      </header>

      {/* Gallery Grid */}
      <section className="gallery">
        {PROJECTS.map((item) => (
          <ProjectCard key={item.id} project={item} />
        ))}
      </section>

      {/* Contact Form Section */}
      <section className="contact-section">
        <h2 className="gradient-text">Get In Touch</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="input-group">
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="input-group">
            <textarea 
              name="message" 
              placeholder="Your Message" 
              rows="5"
              value={formData.message} 
              onChange={handleChange} 
              required 
            ></textarea>
          </div>
          <button type="submit" className="primary-btn">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default App;