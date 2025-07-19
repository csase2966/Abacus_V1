// src/components/Features.jsx

import useAnimated from '../hooks/useAnimated';



function Features() {
    useAnimated('.feature-card');
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-title">
          <h2>Why Choose The Bright Future?</h2>
          <p>Discover what makes our online learning platform the perfect choice for your child's holistic development</p>
        </div>

        <div className="features-grid">
          {[
            { icon: '🧮', title: 'Expert Abacus Training', desc: 'Comprehensive abacus programs designed to enhance mental calculation skills and boost mathematical confidence in children of all ages.' },
            { icon: '🧠', title: 'Vedic Mathematics', desc: 'Ancient Indian mathematical techniques that make complex calculations simple and fun, improving speed and accuracy dramatically.' },
            { icon: '📱', title: 'Online Interactive Classes', desc: 'Live online sessions with certified instructors, interactive learning tools, and personalized attention for every student.' },
            { icon: '🏠', title: 'Learn from Home', desc: 'Flexible scheduling and comfortable home-based learning environment that fits perfectly into your family\'s routine.' },
            { icon: '🧘', title: 'Holistic Development', desc: 'Complete personality development through yoga, meditation, and life lessons from the Bhagavad Gita for mental wellness.' },
            { icon: '🎯', title: 'I-Sense Training', desc: 'Innovative sensory development programs that enhance cognitive abilities, concentration, and overall brain development.' },
          ].map((feature, idx) => (
            <div className="feature-card" key={idx}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
