// src/components/About.jsx
function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About The Bright Future</h2>
            <p>We are a premier online learning platform dedicated to providing comprehensive education that goes beyond traditional academics. Our mission is to nurture young minds through a perfect blend of ancient wisdom and modern teaching methodologies.</p>
            <p>Located in Hyderabad, we serve students globally through our innovative online platform, offering flexible learning schedules that fit into busy family routines while maintaining the highest standards of educational excellence.</p>
            <p>Our certified instructors bring years of experience in their respective fields, ensuring that every child receives personalized attention and guidance throughout their learning journey.</p>
            <a href="#contact" className="btn btn-primary">Get Started Today</a>
          </div>
          <div className="about-image">
            <div style={{
              width: '100%',
              height: '300px',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              borderRadius: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '2rem'
            }}>
              🎓 Excellence in Education 🌟
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
