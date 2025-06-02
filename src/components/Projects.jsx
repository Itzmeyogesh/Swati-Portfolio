import { motion } from 'framer-motion';
import InsightPulseImg from '../assets/insightpulse.jpg';
import CineMatchImg from '../assets/cinematch.jpg';
import BertSentimentImg from '../assets/bert-sentiment.jpg';

const projects = [
  {
    title: 'InsightPulse – Real-Time Business Dashboard',
    description:
      'Built a real-time Tableau dashboard integrating SQL and Python to unify data from multiple sources. Designed custom KPIs and visualizations for non-technical users. Reduced reporting time by 70% and improved revenue by 15%.',
    techStack: 'Tech Stack: Tableau, SQL, Python, Excel',
    image: InsightPulseImg,
  },
  {
    title: 'CineMatch: Smart Movie Recommendation System',
    description:
      'Developed a personalized movie recommendation engine using Python and NLP. Integrated TMDB API for real-time data and built a Flask-based UI for seamless user interaction.',
    techStack: 'Tech Stack: Python, NLP, Flask, TMDB API, HTML/CSS, SQLite',
    image: CineMatchImg,
  },
  {
    title: 'Real-Time Sentiment Analysis & Text Classification using BERT',
    description:
      'Built an NLP pipeline using BERT for real-time sentiment analysis and text classification. Included model fine-tuning, preprocessing, and deployment via Flask API.',
    techStack: 'Tech Stack: Python, Hugging Face, TensorFlow, Scikit-learn, Flask',
    image: BertSentimentImg,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen px-6 py-16 bg-secondary">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-accent mb-12 text-center">Projects</h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-primary rounded-2xl overflow-hidden shadow-md transition-shadow duration-300"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{proj.title}</h3>
                <p className="text-gray-300 text-sm mb-2">{proj.description}</p>
                <p className="text-sm text-accent italic">{proj.techStack}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
