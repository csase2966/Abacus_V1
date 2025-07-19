// src/components/Courses.jsx
import useAnimated from '../hooks/useAnimated';


function Courses() {
    useAnimated('.course-card');

  const courses = [
    {
      icon: '🧮',
      title: 'Abacus Mental Arithmetic',
      desc: 'Master the ancient art of abacus calculation and develop lightning-fast mental math skills.',
      features: ['8 comprehensive levels', 'Live online classes', 'Individual attention', 'Practice worksheets', 'Progress tracking'],
    },
    {
      icon: '🧠',
      title: 'Vedic Mathematics',
      desc: 'Learn ancient Indian mathematical techniques that make complex calculations simple and enjoyable.',
      features: ['16 powerful sutras', 'Speed calculation techniques', 'Interactive online sessions', 'Real-world applications', 'Exam preparation support'],
    },
    {
      icon: '📖',
      title: 'Bhagavad Gita Life Lessons',
      desc: 'Timeless wisdom from the Bhagavad Gita presented in an engaging, child-friendly format.',
      features: ['Age-appropriate content', 'Moral value education', 'Character development', 'Interactive storytelling', 'Life skill enhancement'],
    },
    {
      icon: '🧘',
      title: 'Yoga & Meditation',
      desc: 'Physical and mental wellness through age-appropriate yoga practices and meditation techniques.',
      features: ['Kid-friendly yoga poses', 'Breathing exercises', 'Mindfulness techniques', 'Stress management', 'Physical flexibility'],
    },
    {
      icon: '🎯',
      title: 'I-Sense Development',
      desc: 'Innovative sensory training program to enhance cognitive abilities and concentration power.',
      features: ['Sensory enhancement', 'Concentration improvement', 'Memory development', 'Cognitive skill building', 'Brain development activities'],
    }
  ];

  return (
    <section className="courses" id="courses">
      <div className="container">
        <div className="section-title">
          <h2>Our Comprehensive Courses</h2>
          <p>Choose from our wide range of courses designed for holistic child development</p>
        </div>

        <div className="courses-grid">
          {courses.map((course, idx) => (
            <div className="course-card" key={idx}>
              <div className="course-image">{course.icon}</div>
              <div className="course-content">
                <h3>{course.title}</h3>
                <p>{course.desc}</p>
                <ul className="course-features">
                  {course.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
                <a href="#trial" className="btn btn-primary">Start Learning</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
