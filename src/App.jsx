import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FiGithub as Github, FiLinkedin as Linkedin, FiInstagram as Instagram, FiMail as Mail, FiDownload as Download } from 'react-icons/fi';
import { FaHtml5, FaCss3Alt, FaReact, FaFigma, FaPhp, FaNodeJs, FaGitAlt, FaLaravel, FaPython } from 'react-icons/fa6';
import { SiFlutter, SiDart, SiFirebase, SiJavascript, SiMysql } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import Lanyard from './components/Lanyard/Lanyard';
import BorderGlow from './components/BorderGlow/BorderGlow';
import SideRays from './components/SideRays/SideRays';
import './index.css';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const projectsData = [
  {
    id: 'entin',
    title: "E'ntin",
    description: "Aplikasi Kantin Online yang dibangun menggunakan Flutter.",
    image: "/images/new-arrival-1.jpg",
    gallery: [
      "/images/new-arrival-1.jpg",
      "/images/app-1/entin-1.png",
      "/images/app-1/entin-2.png"
    ],
    tags: ["Flutter", "Mobile", "Rest API", "Laravel"],
    github: "https://github.com/umarfakhr4y"
  },
  {
    id: 'kaufen',
    title: "Kaufen",
    description: "Aplikasi Koperasi Online yang dibangun menggunakan Flutter",
    image: "/images/new-arrival-2.jpg",
    tags: ["Flutter", "Mobile", "Rest API", "Laravel"],
    github: "https://github.com/umarfakhr4y"
  },
  {
    id: 'vocasia',
    title: "Vocasia",
    description: "Aplikasi E-Learning yang dibangun menggunakan Flutter",
    image: "/images/new-arrival-3.jpg",
    tags: ["Flutter", "Mobile", "Rest API"],
    github: "https://github.com/umarfakhr4y"
  }
];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sections = ['home', 'about', 'skills', 'portfolio', 'contact'];

  const aboutRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { amount: 0.2 });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 });

    sections.forEach(sec => {
      const el = document.getElementById(sec);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-wrapper">
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
          opacity: activeSection === 'home' ? 0 : 0.8,
          transition: 'opacity 0.8s ease-in-out'
        }}
      >
        <SideRays rayColor1="#2563eb" rayColor2="#38bdf8" intensity={1.5} origin="top-left" />
      </div>

      <div className="scroll-indicators" style={{ zIndex: 100 }}>
        {sections.map(sec => (
          <div
            key={sec}
            className={`indicator-dot ${activeSection === sec ? 'active' : ''}`}
            onClick={() => scrollTo(sec)}
            title={sec}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section id="home" className="snap-section">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={staggerContainer}
            className="hero-content-shift"
          >
            <motion.p variants={fadeIn} style={{ color: 'var(--accent)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Hi, Welcome
            </motion.p>
            <motion.h1 className="hero-title" variants={fadeIn}>
              I'm <span className="text-gradient">Umar Fakhriy.</span><br />
              Mobile & Web Developer.
            </motion.h1>
            <motion.p className="hero-subtitle" variants={fadeIn}>
              Mahasiswa Akhir S1 Sistem Informasi di UNJ. Saya merancang dan membangun pengalaman digital premium yang fungsional menggunakan Flutter dan teknologi web modern.
            </motion.p>
            <motion.div variants={fadeIn} style={{ display: 'flex', gap: '1rem' }}>
              <button onClick={() => scrollTo('portfolio')} className="btn-primary">Lihat Karya Saya</button>
              <a href="https://drive.google.com/file/d/1gIBzCTFgFmIQkoPGCBsVIBOO-ObNuju7/view?usp=sharing" target="_blank" rel="noreferrer" className="btn-primary" style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', boxShadow: 'none' }}>
                <Download size={18} /> Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About & Skills Bento Grid */}
      <section id="about" ref={aboutRef} className="snap-section container" style={{ position: 'relative' }}>

        {/* Lanyard Decoration Floating on Full Screen */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
          <div style={{ pointerEvents: 'auto', width: '100%', height: '100%' }}>
            {isAboutInView && (
              <Lanyard position={[0, -2.5, 12]} gravity={[0, -40, 0]} transparent={true} frontImage="/images/aku-lanyard.jpg" backImage="/images/aku-lanyard.jpg" />
            )}
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={fadeIn}
          style={{ position: 'relative', zIndex: 2, pointerEvents: 'none' }}
        >
          <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
        </motion.div>

        <div className="bento-grid" style={{ position: 'relative', zIndex: 2, pointerEvents: 'none' }}>
          <motion.div className="about-text-card" initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeIn} style={{ gridColumn: '1 / -1', pointerEvents: 'auto' }}>
            <BorderGlow className="glass-card" glowColor="217 91 60" backgroundColor="rgba(255, 255, 255, 0.05)" colors={['#38bdf8', '#3b82f6', '#2563eb']} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
                Saya adalah seorang Pengembang Web & Mobile yang berdedikasi, saat ini sedang menempuh pendidikan S1 Sistem Informasi di UNJ.
                Perjalanan saya di industri teknologi didorong oleh semangat untuk menciptakan pengalaman digital yang menawan dan sangat fungsional.
                Dengan keahlian yang mencakup pengembangan <i>frontend</i>, arsitektur <i>backend</i>, hingga desain grafis, saya mengerjakan setiap proyek dengan pola pikir holistik guna memastikan kualitas yang sempurna untuk kebutuhan bisnis modern.
              </p>
              <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
                <li style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.3rem' }}>Lokasi</span>
                  <strong style={{ fontSize: '1.1rem' }}>Jakarta & Subang, Indonesia</strong>
                </li>
                <li style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.3rem' }}>Email</span>
                  <strong style={{ fontSize: '1.1rem' }}>umarfakhr4y@gmail.com</strong>
                </li>
                <li style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.3rem' }}>Peran Saat Ini</span>
                  <strong style={{ fontSize: '1.1rem' }}>Freelancer</strong>
                </li>
              </ul>
            </BorderGlow>
          </motion.div>
        </div>
      </section>

      {/* Skills / Arsenal Section */}
      <section id="skills" className="snap-section container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-100px" }} variants={fadeIn}>
          <h2 className="section-title">Tools & <span className="text-gradient">Tech Stack</span></h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '600px' }}>
            Saya menggunakan beragam tumpukan <i>tools</i> dan <i>framework</i> modern untuk mewujudkan ide menjadi kenyataan. Berikut adalah teknologi utama yang saya gunakan sehari-hari.
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeIn} transition={{ delay: 0.2 }}>
          <BorderGlow className="glass-card" glowColor="217 91 60" backgroundColor="rgba(255, 255, 255, 0.05)" colors={['#38bdf8', '#3b82f6', '#2563eb']} style={{ padding: '3rem', textAlign: 'center' }}>
            <motion.div
              className="tech-bubbles-container"
              style={{ gap: '2rem' }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-50px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn}><div className="tech-bubble" data-name="Flutter" tabIndex="0"><SiFlutter /></div></motion.div>
              <motion.div variants={fadeIn}><div className="tech-bubble" data-name="Dart" tabIndex="0"><SiDart /></div></motion.div>
              <motion.div variants={fadeIn}><div className="tech-bubble" data-name="React" tabIndex="0"><FaReact /></div></motion.div>
              <motion.div variants={fadeIn}><div className="tech-bubble" data-name="HTML5" tabIndex="0"><FaHtml5 /></div></motion.div>
              <motion.div variants={fadeIn}><div className="tech-bubble" data-name="CSS3" tabIndex="0"><FaCss3Alt /></div></motion.div>
              <motion.div variants={fadeIn}><div className="tech-bubble" data-name="JavaScript" tabIndex="0"><SiJavascript /></div></motion.div>
              <motion.div variants={fadeIn}><div className="tech-bubble" data-name="Figma" tabIndex="0"><FaFigma /></div></motion.div>
              <motion.div variants={fadeIn}><div className="tech-bubble" data-name="PHP" tabIndex="0"><FaPhp /></div></motion.div>
              <motion.div variants={fadeIn}><div className="tech-bubble" data-name="Laravel" tabIndex="0"><FaLaravel /></div></motion.div>
              <motion.div variants={fadeIn}><div className="tech-bubble" data-name="Python" tabIndex="0"><FaPython /></div></motion.div>
              <motion.div variants={fadeIn}><div className="tech-bubble" data-name="Node.js" tabIndex="0"><FaNodeJs /></div></motion.div>
              <motion.div variants={fadeIn}><div className="tech-bubble" data-name="Firebase" tabIndex="0"><SiFirebase /></div></motion.div>
              <motion.div variants={fadeIn}><div className="tech-bubble" data-name="MySQL" tabIndex="0"><SiMysql /></div></motion.div>
              <motion.div variants={fadeIn}><div className="tech-bubble" data-name="REST API" tabIndex="0"><TbApi /></div></motion.div>
              <motion.div variants={fadeIn}><div className="tech-bubble" data-name="Git" tabIndex="0"><FaGitAlt /></div></motion.div>
            </motion.div>
          </BorderGlow>
        </motion.div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="snap-section container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeIn}>
          <h2 className="section-title">Featured <span className="text-gradient">Project</span></h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>Jelajahi proyek-proyek terbaru saya di bidang pengembangan aplikasi mobile, web, dan desain.</p>
        </motion.div>

        <motion.div
          className="bento-grid"
          style={{ marginTop: '0' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          variants={staggerContainer}
        >
          {projectsData.map(project => (
            <motion.div
              key={project.id}
              variants={fadeIn}
              onClick={() => {
                setSelectedProject(project);
                setCurrentImageIndex(0);
              }}
              style={{ display: 'flex', height: '100%' }}
            >
              <BorderGlow
                className="glass-card project-card"
                glowColor="217 91 60"
                backgroundColor="rgba(255, 255, 255, 0.05)"
                colors={['#38bdf8', '#3b82f6', '#2563eb']}
                style={{ width: '100%', cursor: 'pointer' }}
              >
                <img src={project.image} alt={project.title} className="project-img" />
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>{project.description}</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {project.tags.map(tag => (
                    <span key={tag} className="skill-tag">{tag}</span>
                  ))}
                </div>
              </BorderGlow>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="snap-section container">
        <motion.div style={{ margin: '0 auto', maxWidth: '800px' }} initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeIn}>
          <BorderGlow
            className="glass-card"
            glowColor="217 91 60"
            backgroundColor="rgba(255, 255, 255, 0.05)"
            colors={['#38bdf8', '#3b82f6', '#2563eb']}
            style={{ textAlign: 'center', padding: '4rem 2rem' }}
          >
            <h2 className="section-title">Mari Bekerja <span className="text-gradient">Sama</span></h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem auto' }}>
              Sedang mencari developer untuk mewujudkan ide Anda? Saat ini saya terbuka untuk proyek freelance dan peluang menarik lainnya.
            </p>
            <a href="mailto:umarfakhr4y@gmail.com" className="btn-primary" style={{ padding: '15px 35px', fontSize: '1.1rem', margin: '0 auto' }}>
              <Mail size={20} /> Hubungi Saya
            </a>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '3rem' }}>
              <a href="https://www.linkedin.com/in/umarfakhriy/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }}><Linkedin size={24} /></a>
              <a href="https://www.instagram.com/umarfakhriy/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }}><Instagram size={24} /></a>
              <a href="https://github.com/umarfakhr4y" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }}><Github size={24} /></a>
            </div>
          </BorderGlow>
        </motion.div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)', borderTop: '1px solid var(--card-border)' }}>
        <p>&copy; {new Date().getFullYear()} Umar Fakhriy. Built with React & Framer Motion.</p>
      </footer>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="modal-content glass-card"
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setSelectedProject(null)}>×</button>

              <div className="modal-grid">
                <div style={{ position: 'relative' }}>
                  {selectedProject.gallery ? (
                    <>
                      <div style={{ overflow: 'hidden', borderRadius: '12px', width: '100%' }}>
                        <motion.div
                          style={{ display: 'flex' }}
                          animate={{ x: `-${currentImageIndex * 100}%` }}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                          {selectedProject.gallery.map((img, idx) => (
                            <img key={idx} src={img} alt={`${selectedProject.title} ${idx + 1}`} className="modal-img" style={{ flexShrink: 0, width: '100%' }} />
                          ))}
                        </motion.div>
                      </div>

                      {selectedProject.gallery.length > 1 && (
                        <>
                          <button
                            onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(prev => prev === 0 ? selectedProject.gallery.length - 1 : prev - 1); }}
                            style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.6)', color: 'white', border: 'none', width: '35px', height: '35px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}
                          >
                            &#10094;
                          </button>
                          <button
                            onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(prev => prev === selectedProject.gallery.length - 1 ? 0 : prev + 1); }}
                            style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.6)', color: 'white', border: 'none', width: '35px', height: '35px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}
                          >
                            &#10095;
                          </button>

                          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '1rem' }}>
                            {selectedProject.gallery.map((_, idx) => (
                              <button
                                key={idx}
                                onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                                style={{
                                  width: '10px',
                                  height: '10px',
                                  borderRadius: '50%',
                                  background: currentImageIndex === idx ? 'var(--accent)' : 'rgba(255,255,255,0.3)',
                                  border: 'none',
                                  cursor: 'pointer',
                                  padding: 0
                                }}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    <img src={selectedProject.image} alt={selectedProject.title} className="modal-img" />
                  )}
                </div>
                <div>
                  <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', lineHeight: '1.2' }}>{selectedProject.title}</h3>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.7' }}>{selectedProject.description}</p>

                  <div style={{ marginBottom: '2.5rem' }}>
                    <h4 style={{ marginBottom: '1rem', fontSize: '1.1rem', color: 'white' }}>Teknologi:</h4>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {selectedProject.tags.map(tag => (
                        <span key={tag} className="skill-tag">{tag}</span>
                      ))}
                    </div>
                  </div>

                  <a href={selectedProject.github} target="_blank" rel="noreferrer" className="btn-primary" style={{ width: 'fit-content' }}>
                    <Github /> Github Repository
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
