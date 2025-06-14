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
    <section
      id="projects"
      className="min-h-[50vh] px-4 py-12 sm:py-16 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-accent mb-10 text-center">Projects</h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-primary rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-44 sm:h-48 object-cover"
              />
              <div className="p-5 sm:p-6 space-y-3">
                <h3 className="text-lg sm:text-xl font-semibold text-white">{proj.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{proj.description}</p>
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
