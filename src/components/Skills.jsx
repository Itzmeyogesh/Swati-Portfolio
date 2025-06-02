import { motion } from 'framer-motion';
import { useState } from 'react';

const skills = [
  { name: 'Python', desc: 'Data manipulation, ML, scripting' },
  { name: 'SQL', desc: 'Querying, joins, and data aggregation' },
  { name: 'Power BI', desc: 'Interactive dashboards & reports' },
  { name: 'Excel', desc: 'Data cleaning, pivot tables, formulas' },
  { name: 'Matplotlib', desc: '2D plotting for data visualization' },
  { name: 'Seaborn', desc: 'Statistical data visualization' },
  { name: 'PySpark', desc: 'Big data processing using Python' },
  { name: 'Azure Data Factory', desc: 'Data orchestration on cloud' },
  { name: 'GitHub', desc: 'Version control and collaboration' },
  { name: 'MongoDB', desc: 'NoSQL database for flexible storage' },
];

const SkillCard = ({ skill }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-32 perspective"
      onClick={() => setFlipped(!flipped)}
    >
      <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${flipped ? 'rotate-y-180' : ''}`}>
        {/* Front */}
        <div className="absolute inset-0 bg-secondary text-white rounded-xl flex items-center justify-center font-semibold text-lg shadow-lg backface-hidden">
          {skill.name}
        </div>
        {/* Back */}
        <div className="absolute inset-0 bg-accent text-black rounded-xl flex items-center justify-center text-center p-2 text-sm font-medium shadow-lg rotate-y-180 backface-hidden">
          {skill.desc}
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen p-10 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-accent mb-10 text-center">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <SkillCard key={i} skill={skill} />
          ))}
        </div>
        <p className="text-center mt-8 text-gray-400 text-sm">Click any skill to know more</p>
      </motion.div>
    </section>
  );
};

export default Skills;
