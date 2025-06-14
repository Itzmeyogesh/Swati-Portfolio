import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-[20vh] px-4 py-12 sm:py-16 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-accent text-center mb-10">
          Experience
        </h2>

        {/* Experience Card */}
        <div className="bg-primary rounded-2xl border border-white/10 shadow-lg hover:shadow-2xl transition-all p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
            <div className="flex items-center gap-3">
              <Briefcase className="text-accent w-6 h-6" />
              <div>
                <h3 className="text-xl font-semibold text-white">Data Analyst Intern</h3>
                <p className="text-sm text-gray-400">Code Spyder Technology, Pune</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-2 sm:mt-0">Jan 2023 – Jun 2023</p>
          </div>

          <ul className="list-disc list-inside text-sm text-gray-300 space-y-2">
            <li>
              Gathered and integrated historical house price data from platforms like Zillow and Kaggle.
            </li>
            <li>
              Cleaned and preprocessed data, handled missing values, and applied feature engineering techniques.
            </li>
            <li>
              Built and evaluated linear regression models to predict house prices with high accuracy.
            </li>
            <li>
              Optimized model performance and deployed applications for real-world use.
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
