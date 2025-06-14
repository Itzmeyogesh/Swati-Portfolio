import { motion } from 'framer-motion';
import { FaLaptopCode, FaChartBar, FaGraduationCap } from 'react-icons/fa';

const About = () => {
  return (
    <section
      id="about"
      className="relative px-4 py-10 sm:py-12 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent mb-4">
          About Me
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
          I’m <span className="text-white font-semibold">Swati Gadekar</span>, a passionate
          <span className="text-accent font-semibold"> Data Analyst</span> based in Pune,
          Maharashtra. With hands-on experience in Python, SQL, Power BI, and machine learning,
          I turn raw data into powerful business insights. My goal is to make data-driven decisions
          accessible and actionable for every organization.
        </p>

        {/* About Info Cards */}
        <div className="grid gap-6 md:grid-cols-3 text-left">
          {/* Education */}
          <div className="bg-primary rounded-xl p-5 shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center gap-3 mb-3">
              <FaGraduationCap className="text-accent text-xl" />
              <h3 className="text-lg font-semibold text-white">Education</h3>
            </div>
            <ul className="text-gray-300 text-sm space-y-2 pl-1 list-disc list-inside">
              <li>
                <span className="font-medium text-white">MCA (Master of Computer Applications)</span><br />
                Vivekanand College, Aurangabad<br />
                <span className="text-xs text-gray-400">July 2023 – June 2025</span>
              </li>
              <li>
                <span className="font-medium text-white">BCA (Bachelor of Computer Applications)</span><br />
                Deogiri College, Aurangabad<br />
                <span className="text-xs text-gray-400">July 2019 – April 2022</span>
              </li>
            </ul>
          </div>

          {/* Technical Skills */}
          <div className="bg-primary rounded-xl p-5 shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center gap-3 mb-3">
              <FaLaptopCode className="text-accent text-xl" />
              <h3 className="text-lg font-semibold text-white">Technical Skills</h3>
            </div>
            <ul className="text-gray-300 text-sm space-y-2 list-disc pl-4">
              <li><strong className="text-white">Python & Pandas:</strong> Data manipulation, analysis, and scripting</li>
              <li><strong className="text-white">SQL:</strong> Advanced querying, joins, subqueries, and optimization</li>
              <li><strong className="text-white">Power BI & Tableau:</strong> Creating dashboards and visual analytics</li>
              <li><strong className="text-white">Scikit-learn:</strong> Implementing ML models and evaluation techniques</li>
              <li><strong className="text-white">Excel:</strong> Formulas, pivot tables, charts, and data cleaning</li>
              <li><strong className="text-white">Azure:</strong> Cloud data tools like Azure Data Factory</li>
              <li><strong className="text-white">Flask:</strong> Building lightweight data applications</li>
            </ul>
          </div>

          {/* Projects & Experience */}
          <div className="bg-primary rounded-xl p-5 shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center gap-3 mb-3">
              <FaChartBar className="text-accent text-xl" />
              <h3 className="text-lg font-semibold text-white">Projects & Experience</h3>
            </div>
            <ul className="text-gray-300 text-sm space-y-2 list-disc pl-4">
              <li><strong className="text-white">House Price Prediction:</strong> Used linear regression to model prices from Kaggle dataset, achieved high accuracy.</li>
              <li><strong className="text-white">Sentiment Analysis:</strong> Analyzed Amazon reviews using NLP and classification models.</li>
              <li><strong className="text-white">HR Dashboard:</strong> Built Power BI dashboards for HR metrics and attrition analysis.</li>
              <li><strong className="text-white">Data Analyst Intern:</strong> At Code Spyder Technology (Jan–Jun 2023) – Gathered, cleaned, modeled and deployed real-world prediction solutions.</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
