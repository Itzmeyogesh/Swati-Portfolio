import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaLaptopCode, FaChartBar } from 'react-icons/fa';

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen px-6 py-16 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-accent mb-6">About Me</h2>

        <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
          I’m <span className="text-white font-semibold">Swati Gadekar</span>, a passionate
          <span className="text-accent font-semibold"> Data Analyst </span> based in Pune,
          Maharashtra. With hands-on experience in Python, SQL, Power BI, and machine learning,
          I turn raw data into powerful business insights. My goal is to make data-driven decisions
          accessible and actionable for every organization.
        </p>

        {/* About Info Cards */}
        <div className="grid gap-6 md:grid-cols-3 text-left">
          {/* Location */}
          <div className="bg-primary rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center gap-4 mb-4">
              <FaMapMarkerAlt className="text-accent text-2xl" />
              <h3 className="text-xl font-semibold text-white">Location</h3>
            </div>
            <p className="text-gray-300">Pune, Maharashtra, India</p>
          </div>

          {/* Skills */}
          <div className="bg-primary rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center gap-4 mb-4">
              <FaLaptopCode className="text-accent text-2xl" />
              <h3 className="text-xl font-semibold text-white">Technical Skills</h3>
            </div>
            <p className="text-gray-300">
              Python, SQL, Power BI, Scikit-learn, Pandas, Excel, Tableau, Azure, Flask
            </p>
          </div>

          {/* Experience */}
          <div className="bg-primary rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center gap-4 mb-4">
              <FaChartBar className="text-accent text-2xl" />
              <h3 className="text-xl font-semibold text-white">Projects & Experience</h3>
            </div>
            <p className="text-gray-300">
              Built real-world apps like house price prediction, Amazon sentiment analysis, and HR dashboards.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
