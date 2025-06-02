import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import profileImg from '../assets/Swati.jpg'; // Add your image in /assets folder

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen text-center text-white px-4 py-20 overflow-hidden bg-gradient-to-br from-[#1e3a8a] via-[#312e81] to-[#1e3a8a]"
    >
      {/* Animated stars layer */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,_#ffffff10,_transparent)] animate-pulse opacity-20 pointer-events-none z-0" />

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl"
      >
        {/* Profile Image */}
        <img
          src={profileImg}
          alt="Swati Gadekar"
          className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-accent shadow-xl object-cover"
        />

        {/* Name & Role */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Swati Gadekar</h1>
        <h2 className="text-2xl md:text-3xl text-accent mb-6">
          <Typewriter
            options={{
              strings: ['Data Analyst', 'Python Developer', 'Power BI Specialist'],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>

        {/* Bio */}
        <p className="text-gray-300 max-w-xl mx-auto mb-8">
          Passionate Data Analyst with hands-on experience in Python, SQL, and Power BI.
          I specialize in transforming complex data into actionable insights and building
          end-to-end data solutions.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap mb-6">
          <a
            href="#contact"
            className="bg-accent text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-accent-dark transition"
          >
            Connect with Me
          </a>
          <a
            href="/Swati_Gadekar_Resume.pdf"
            download
            className="border border-accent text-accent px-6 py-3 rounded-full font-semibold hover:bg-accent hover:text-white transition"
          >
            Download CV
          </a>
        </div>

        {/* Socials */}
        <div className="flex justify-center gap-6 text-2xl text-white">
          <a
            href="https://www.linkedin.com/in/swatigadekar09"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/SWATIG01"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent transition"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:gadekarswati502@gmail.com"
            className="hover:text-accent transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
