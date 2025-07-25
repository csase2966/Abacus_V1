// src/components/Courses.jsx
import useAnimated from '../hooks/useAnimated';
import bhagvad from '../images/bhagvad-gita.jpg';
import vedic from '../images/vedic.png';
import yoga from '../images/yoga.jpg';
import first from '../images/first.png';
import lsense from '../images/Isense.jpeg';
import abacus from '../images/abacus.jpg';
import rubik from '../images/rubik.webp';
import OIP from '../images/OIP.webp';
import pd from '../images/pd.jpg';
import pd1 from '../images/pd1.webp';

function Courses() {
    useAnimated('.course-card');

  const courses = [
    // {
    //   icon: '🧮',
    //   title: 'Abacus Mental Arithmetic',
    //   desc: 'Master the ancient art of abacus calculation and develop lightning-fast mental math skills.',
    //   features: ['8 comprehensive levels', 'Live online classes', 'Individual attention', 'Practice worksheets', 'Progress tracking'],
    // },
    // {
    //   icon: '🧠',
    //   title: 'Vedic Mathematics',
    //   desc: 'Learn ancient Indian mathematical techniques that make complex calculations simple and enjoyable.',
    //   features: ['16 powerful sutras', 'Speed calculation techniques', 'Interactive online sessions', 'Real-world applications', 'Exam preparation support'],
    // },
    // {
    //   icon: '📖',
    //   title: 'Bhagavad Gita Life Lessons',
    //   desc: 'Timeless wisdom from the Bhagavad Gita presented in an engaging, child-friendly format.',
    //   features: ['Age-appropriate content', 'Moral value education', 'Character development', 'Interactive storytelling', 'Life skill enhancement'],
    // },
    // {
    //   icon: '🧘',
    //   title: 'Yoga & Meditation',
    //   desc: 'Physical and mental wellness through age-appropriate yoga practices and meditation techniques.',
    //   features: ['Kid-friendly yoga poses', 'Breathing exercises', 'Mindfulness techniques', 'Stress management', 'Physical flexibility'],
    // },
    // {
    //   icon: '🎯',
    //   title: 'I-Sense Development',
    //   desc: 'Innovative sensory training program to enhance cognitive abilities and concentration power.',
    //   features: ['Sensory enhancement', 'Concentration improvement', 'Memory development', 'Cognitive skill building', 'Brain development activities'],
    // }


     {
      icon:  bhagvad,
      title: 'Lessons of Bhagavad Gita',
      desc: 'Timeless wisdom from the Bhagavad Gita presented in an engaging, child-friendly format for moral and character development.',
      features: [
        'Age-appropriate spiritual content',
        'Moral value education and ethics',
        'Character development programs', 
        'Interactive storytelling methods',
        'Life skill enhancement',
        'Cultural heritage preservation',
        'Wisdom-based learning approach',
        'Holistic personality development'
      ],       
    },
    {
      // icon: '🧠',
      icon: vedic,
      title: 'Vedic Mathematics',
      desc: 'Ancient Indian mathematical techniques with personality development for fast arithmetic and competitive exam preparation.',
      features: [
        'Fast Arithmetic Techniques in Addition, Subtraction, Multiplication and Division',
        'Improves Speed and Accuracy in Calculation',
        'Improves Memory Power',
        'Improves Analytical and Logical Thinking',
        'Develops Decision Making Capacity',
        'Ice Breaker and Maths Techniques',
        'Stress, Fear and Anger Detox',
        '6 levels over 8 months (6th to 10th Grade)'
      ],
    },
    {
      // icon: '🧮',
      icon: abacus,
      title: 'Abacus',
      desc: 'Century-old tool for whole brain and cognitive skills development to improve mental calculations and mathematical abilities.',
      features: [
        'Improves Listening and Observation skills',
        'Improves Concentration and Memory',
        'Improves Reading and Learning Skills',
        'Enhances Visualization and Imagination',
        'Amplifies Speed and Accuracy in Calculations',
        'Boosts Creativity and Self-Confidence',
        'Reduces Stress and develops Emotional Balance',
        'Jr.Abacus (UKG to 1st) & Regular Abacus (2nd to 5th Class)'
      ],
    },
    {
      // icon: '🧘',
            icon: yoga,
      title: 'Yoga & Meditation',
      desc: 'Physical and mental wellness through traditional yoga practices, meditation techniques, and holistic healing therapies.',
      features: [
        'Traditional Yoga poses and Asanas',
        'Breathing exercises and Pranayama',
        'Meditation and Mindfulness techniques',
        'Stress management and relaxation',
        'Physical flexibility and strength building',
        'Mental peace and emotional balance',
        'Polarity Therapy and Healing Therapies',
        'Holistic health and well-being promotion'
      ],
    },
    {
      // icon: '🎯',
      icon: lsense,
      title: 'I-Sense Development',
      desc: 'Brain Wave Entrainment Pedagogy for developing brain skills, memory enhancement, and intuitive level improvement.',
      features: [
        'Improves Listening and Observation skills',
        'Improves Concentration and Memory',
        'Improves Reading and Learning Skills', 
        'Enhances Visualization and Vivid Imagination',
        'Improves Intuition Levels',
        'Boosts Creativity and Self-Confidence',
        'Develops Analytical and Logical Thinking',
        '2 levels with 9 sessions per level (2nd to 12th Grade)'
      ],
    },
    {
      // icon: '🧩',
      icon: rubik,
      title: 'Rubik\'s Cube Course',
      desc: 'Master the world\'s most popular puzzle cube to enhance problem-solving skills, memory, and logical thinking abilities.',
      features: [
        'Step-by-step solving techniques',
        'Pattern recognition and algorithms',
        'Improved Problem-solving abilities',
        'Enhanced Memory and Concentration',
        'Logical and Analytical thinking development',
        'Patience and Persistence building',
        'Speed cubing techniques',
        'Competition preparation and strategies'
      ],
    },
    {
      // icon: '🎓',
      icon: pd,
      title: 'Vidya Vardhan',
      desc: 'Comprehensive 2-day training program for educators to enhance teaching skills, methodologies and classroom management.',
      features: [
        'Upgrade Teaching Skills with modern techniques',
        'Enhance Classroom Management abilities',
        'Foster Inclusive Education strategies',
        'Integrate Technology in teaching practices',
        'Promote Collaborative Learning approaches',
        'Interactive Sessions and hands-on activities',
        'Personalised Feedback from facilitators',
        '2 levels with 10 sessions over 5 months'
      ],
    },
    {
      // icon: '📚',
      icon: pd1,
      title: 'Swadhyaya Course',
      desc: 'Comprehensive Personal Development Workshop for self-management, emotional regulation, and memory enhancement techniques.',
      features: [
        'Self-Management and Time Management',
        'Guruvandana (Teacher\'s Reverence)',
        'Stress Detoxification techniques',
        'Emotion Regulation (Fear and Anger management)',
        'Science of Memory with Enhancement Techniques',
        'Improved Self-Discipline development',
        'Better Emotional Regulation skills',
        '8 sessions over 8 months (6th to 10th Grade)'
      ],
    },
    {
      // icon: '🎨',
           icon: OIP,
      title: 'Origami Course (Japanese Paper Folding)',
      desc: 'Learn the traditional Japanese art of paper folding to develop creativity, patience, and fine motor coordination skills.',
      features: [
        'Traditional Japanese paper folding techniques',
        'Improved Fine Motor Skills development',
        'Enhanced Spatial intelligence',
        'Creativity and Artistic expression',
        'Patience and Focus development',
        'Mathematical concepts through folding',
        'Cultural appreciation and learning',
        'Therapeutic and stress-relieving activity'
      ],
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
              <div className="course-image">
                <img src={course.icon} alt={course.title} 
                style={{width: '100%', height: '100%', objectFit: 'contain'}} 
                />
              </div>
              <div className="course-content">
                <h3>{course.title}</h3>
                <p>{course.desc}</p>
                <ul className="course-features">
                  {course.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
                {/* <a href="#trial" className="btn btn-primary">Start Learning</a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;

      
     
     
    

      
    
   
   
    
   
  
  