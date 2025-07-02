import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Navigation Bar */}
      <nav id="navbar" className="fixed top-0 w-full z-50 transition-all duration-300 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#home" className="text-xl font-bold text-white hover:text-primary-400 transition-colors flex items-center">
                <i className="fas fa-code text-primary-500 mr-2"></i>
                Hritik Raj
              </a>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="nav-link text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                <a href="#about" className="nav-link text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
                <a href="#skills" className="nav-link text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Skills</a>
                <a href="#projects" className="nav-link text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Projects</a>
                <a href="#experience" className="nav-link text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Experience</a>
                <a href="#contact" className="nav-link text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>
            {/* Mobile menu button (placeholder, JS needed for full functionality) */}
            <div className="md:hidden">
              <button className="relative p-3 text-gray-400 hover:text-white focus:outline-none transition-colors duration-300">
                <div className="hamburger-lines w-6 h-5 flex flex-col justify-between">
                  <span className="hamburger-line block w-full h-0.5 bg-current transition-all duration-300 ease-in-out transform origin-center"></span>
                  <span className="hamburger-line block w-full h-0.5 bg-current transition-all duration-300 ease-in-out transform origin-center"></span>
                  <span className="hamburger-line block w-full h-0.5 bg-current transition-all duration-300 ease-in-out transform origin-center"></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-16 flex flex-col items-center justify-center min-h-[60vh] text-center overflow-hidden animate-fade-in">
        {/* Right-side background image */}
        <div className="hidden md:block absolute right-0 top-10 bottom-0 w-1/2 pointer-events-none select-none z-0 animate-float">
          <Image
            src="/images/coding.png"
            alt="Decorative Coding"
            fill
            style={{ objectFit: 'contain', opacity: 0.18 }}
            className="object-contain h-full w-full"
            aria-hidden="true"
            priority
          />
        </div>
        <div className="relative z-10 flex flex-col items-center w-full animate-slide-up">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary-500 shadow-lg mb-6 bg-gray-900/80 animate-float">
            <Image src="https://avatars.githubusercontent.com/u/109974819?s=400&u=894821e431bad63d3c7e9751f48a0e460baf2c09&v=4" alt="Hritik Raj" width={160} height={160} className="object-cover w-full h-full" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4 transition-all duration-700 hover:scale-105 animate-fade-in">Hritik Raj</h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-2 animate-fade-in">Backend Developer | B.Tech CSE Student</p>
          <p className="text-md text-gray-400 mb-4 animate-fade-in">Ghaziabad, Uttar Pradesh</p>
          {/* Contact/Social Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4 animate-fade-in w-full max-w-2xl mx-auto">
            {/* Email Card */}
            <a href="mailto:hritikraj723@gmail.com" className="glass rounded-xl p-4 flex flex-col items-center gap-2 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <i className="fas fa-envelope text-2xl text-primary-400"></i>
              <span className="font-semibold">Email</span>
              <span className="text-primary-100 text-sm break-all">hritikraj723@gmail.com</span>
            </a>
            {/* Phone Card */}
            <div className="glass rounded-xl p-4 flex flex-col items-center gap-2 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <i className="fas fa-phone text-2xl text-primary-400"></i>
              <span className="font-semibold">Phone</span>
              <span className="text-primary-100 text-sm">+91-9457718488</span>
            </div>
            {/* LinkedIn Card */}
            <a href="https://www.linkedin.com/in/hritik-raj-paradox/" target="_blank" rel="noopener noreferrer" className="glass rounded-xl p-4 flex flex-col items-center gap-2 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <i className="fab fa-linkedin text-2xl text-primary-400"></i>
              <span className="font-semibold">LinkedIn</span>
              <span className="text-primary-100 text-sm">/in/hritik-raj-paradox</span>
            </a>
            {/* GitHub Card */}
            <a href="https://github.com/HritikRaj2" target="_blank" rel="noopener noreferrer" className="glass rounded-xl p-4 flex flex-col items-center gap-2 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <i className="fab fa-github text-2xl text-primary-400"></i>
              <span className="font-semibold">GitHub</span>
              <span className="text-primary-100 text-sm">@HritikRaj2</span>
            </a>
            {/* Codeforces Card */}
            <a href="https://codeforces.com/profile/illogicalCoder" target="_blank" rel="noopener noreferrer" className="glass rounded-xl p-4 flex flex-col items-center gap-2 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <i className="fas fa-code text-2xl text-primary-400"></i>
              <span className="font-semibold">Codeforces</span>
              <span className="text-primary-100 text-sm">illogicalCoder</span>
            </a>
            {/* LeetCode Card */}
            <a href="https://leetcode.com/u/illogicalCoder20/" target="_blank" rel="noopener noreferrer" className="glass rounded-xl p-4 flex flex-col items-center gap-2 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <i className="fas fa-code text-2xl text-primary-400"></i>
              <span className="font-semibold">LeetCode</span>
              <span className="text-primary-100 text-sm">illogicalCoder20</span>
            </a>
          </div>
          <p className="max-w-2xl text-gray-200 mt-2 animate-fade-in">Aspiring backend developer with a passion for building scalable systems and solving real-world problems. Experienced in Java, Spring Boot, and modern web technologies. Always eager to learn and contribute to impactful projects.</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-3xl mx-auto py-12 animate-slide-up">
        <h2 className="text-3xl font-bold text-primary-400 mb-4 transition-all duration-700 hover:scale-105 animate-fade-in">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 animate-fade-in">
            <p className="text-gray-200 text-lg mb-4">
              Hi! I&apos;m Hritik Raj, a Computer Science student and backend developer passionate about scalable systems, clean code, and impactful technology. I enjoy working with Java, Spring Boot, and modern web stacks, and I&apos;m always looking for new challenges and learning opportunities.
            </p>
            <ul className="list-disc list-inside text-gray-300 animate-fade-in">
              <li>Languages: Java, C, Python, SQL</li>
              <li>Frameworks: Spring Boot, React, MongoDB, JDBC, REST APIs</li>
              <li>Tools: VS Code, IntelliJ, Eclipse, Jupyter Notebook, Canva</li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center animate-float">
            <Image src="/images/coding.gif" alt="Coding" width={500} height={500} className="rounded-xl shadow-xl" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-5xl mx-auto py-12 animate-slide-up">
        <h2 className="text-3xl font-bold text-primary-400 mb-4 text-center transition-all duration-700 hover:scale-105 animate-fade-in">Technical Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {/* Java */}
          <span className="flex items-center gap-2 bg-primary-700/80 text-primary-100 px-4 py-2 rounded-full text-md font-semibold shadow portfolio-card transition-transform duration-300 hover:scale-110 animate-fade-in">
            <i className="devicon-java-plain colored text-2xl"></i> Java
          </span>
          {/* C */}
          <span className="flex items-center gap-2 bg-primary-700/80 text-primary-100 px-4 py-2 rounded-full text-md font-semibold shadow portfolio-card transition-transform duration-300 hover:scale-110 animate-fade-in">
            <i className="devicon-c-plain colored text-2xl"></i> C
          </span>
          {/* Python */}
          <span className="flex items-center gap-2 bg-primary-700/80 text-primary-100 px-4 py-2 rounded-full text-md font-semibold shadow portfolio-card transition-transform duration-300 hover:scale-110 animate-fade-in">
            <i className="devicon-python-plain colored text-2xl"></i> Python
          </span>
          {/* SQL (MySQL) */}
          <span className="flex items-center gap-2 bg-primary-700/80 text-primary-100 px-4 py-2 rounded-full text-md font-semibold shadow portfolio-card transition-transform duration-300 hover:scale-110 animate-fade-in">
            <i className="devicon-mysql-plain colored text-2xl"></i> SQL
          </span>
          {/* HTML5 */}
          <span className="flex items-center gap-2 bg-primary-700/80 text-primary-100 px-4 py-2 rounded-full text-md font-semibold shadow portfolio-card transition-transform duration-300 hover:scale-110 animate-fade-in">
            <i className="devicon-html5-plain colored text-2xl"></i> HTML5
          </span>
          {/* CSS3 */}
          <span className="flex items-center gap-2 bg-primary-700/80 text-primary-100 px-4 py-2 rounded-full text-md font-semibold shadow portfolio-card transition-transform duration-300 hover:scale-110 animate-fade-in">
            <i className="devicon-css3-plain colored text-2xl"></i> CSS3
          </span>
          {/* React */}
          <span className="flex items-center gap-2 bg-primary-700/80 text-primary-100 px-4 py-2 rounded-full text-md font-semibold shadow portfolio-card transition-transform duration-300 hover:scale-110 animate-fade-in">
            <i className="devicon-react-original colored text-2xl"></i> React
          </span>
          {/* MongoDB */}
          <span className="flex items-center gap-2 bg-primary-700/80 text-primary-100 px-4 py-2 rounded-full text-md font-semibold shadow portfolio-card transition-transform duration-300 hover:scale-110 animate-fade-in">
            <i className="devicon-mongodb-plain colored text-2xl"></i> MongoDB
          </span>
          {/* SpringBoot */}
          <span className="flex items-center gap-2 bg-primary-700/80 text-primary-100 px-4 py-2 rounded-full text-md font-semibold shadow portfolio-card transition-transform duration-300 hover:scale-110 animate-fade-in">
            <i className="devicon-spring-plain colored text-2xl"></i> SpringBoot
          </span>
          {/* JDBC (Java icon) */}
          <span className="flex items-center gap-2 bg-primary-700/80 text-primary-100 px-4 py-2 rounded-full text-md font-semibold shadow portfolio-card transition-transform duration-300 hover:scale-110 animate-fade-in">
            <i className="devicon-java-plain colored text-2xl"></i> JDBC
          </span>
          {/* REST APIs (use Font Awesome globe) */}
          <span className="flex items-center gap-2 bg-primary-700/80 text-primary-100 px-4 py-2 rounded-full text-md font-semibold shadow portfolio-card transition-transform duration-300 hover:scale-110 animate-fade-in">
            <i className="fas fa-globe text-2xl text-primary-200"></i> REST APIs
          </span>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-5xl mx-auto py-12 animate-slide-up">
        <h2 className="text-3xl font-bold text-primary-400 mb-4 text-center transition-all duration-700 hover:scale-105 animate-fade-in">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="glass rounded-xl p-6 portfolio-card transition-transform duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in">
            <div className="flex items-center gap-4 mb-2">
              <Image src="/images/code.gif" alt="Project" width={48} height={48} className="rounded animate-float" />
              <span className="font-bold text-lg text-white">GDG Community Blog Platform</span>
            </div>
            <p className="text-gray-300 mb-2">Spring Boot, MySQL</p>
            <p className="text-gray-400 text-sm mb-2">Developed a scalable backend for a social media platform using Spring Boot and MySQL, focusing on high availability and efficient database design. Implemented RESTful APIs and Spring Security for secure authentication.</p>
            <a href="https://github.com/HritikRaj2/GDG_SOCIAL_MEDIA/tree/main/Blog_Platform/GDG_Community_Blog_Platform" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline text-sm transition-colors duration-300">View on GitHub</a>
          </div>
          {/* Project 2 */}
          <div className="glass rounded-xl p-6 portfolio-card transition-transform duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in">
            <div className="flex items-center gap-4 mb-2">
              <Image src="/images/assignmento_.gif" alt="Project" width={48} height={48} className="rounded animate-float" />
              <span className="font-bold text-lg text-white">Note Nest</span>
            </div>
            <p className="text-gray-300 mb-2">Spring Boot, MongoDB</p>
            <p className="text-gray-400 text-sm mb-2">Built a cloud-based note-taking app leveraging MongoDB&apos;s flexible data model for seamless organization and retrieval. Learned more about CRUD operations.</p>
            <a href="https://github.com/HritikRaj2/Note_Nest" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline text-sm transition-colors duration-300">View on GitHub</a>
          </div>
          {/* Project 3 */}
          <div className="glass rounded-xl p-6 portfolio-card transition-transform duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in">
            <div className="flex items-center gap-4 mb-2">
              <Image src="/images/star.png" alt="Project" width={48} height={48} className="rounded animate-float" />
              <span className="font-bold text-lg text-white">Bank Management System</span>
            </div>
            <p className="text-gray-300 mb-2">Java, Swing, JDBC, SQL</p>
            <p className="text-gray-400 text-sm mb-2">Created an ATM-like system for banking transactions using Swing and SQL. Built user-friendly interfaces with Swing and AWT. Explored multiple aspects of software development while solving real-world problems.</p>
            <a href="https://github.com/HritikRaj2/Bank-Mangement" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline text-sm transition-colors duration-300">View on GitHub</a>
          </div>
          {/* Project 4 */}
          <div className="glass rounded-xl p-6 portfolio-card transition-transform duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in">
            <div className="flex items-center gap-4 mb-2">
              <Image src="/images/googlePlay.gif" alt="Project" width={48} height={48} className="rounded animate-float" />
              <span className="font-bold text-lg text-white">Plant Disease Detection System</span>
            </div>
            <p className="text-gray-300 mb-2">Python, TensorFlow</p>
            <p className="text-gray-400 text-sm mb-2">Developed a machine learning model to detect plant diseases, participated in Code Cubicle 2.0. Trained this model on an extensive dataset of over 17,000 images, covering more than 30 plant species.</p>
            <a href="https://github.com/HritikRaj2/plant_disease_detection" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline text-sm transition-colors duration-300">View on GitHub</a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="max-w-3xl mx-auto py-12">
        <h2 className="text-3xl font-bold text-primary-400 mb-4 text-center">Experience</h2>
        <div className="glass rounded-xl p-6 mb-4">
          <div className="flex items-center gap-4 mb-2">
            <i className="fas fa-briefcase text-primary-400 text-2xl"></i>
            <span className="font-bold text-lg text-white">Web Developer at Google Developer Group Akgec</span>
          </div>
          <p className="text-gray-300 mb-2">June 2025 - Present | Ghaziabad, India</p>
          <p className="text-gray-400 text-sm">Built and maintained RESTful APIs using Spring Boot for internal tools and community projects. Collaborated with frontend and design teams to ensure seamless integration and performance. Contributed to open-source GDG initiatives and improved backend code quality through best practices.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-3xl mx-auto py-12 text-center">
        <h2 className="text-3xl font-bold text-primary-400 mb-4">Contact</h2>
        <p className="text-gray-200 mb-4">Feel free to reach out for collaboration, project inquiries, or just to connect!</p>
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <a href="mailto:hritikraj723@gmail.com" className="btn-hover-grow bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-full font-semibold transition">Email Me</a>
          <a href="https://linkedin.com/in/hritikraj723" target="_blank" rel="noopener noreferrer" className="btn-hover-grow bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-full font-semibold transition">LinkedIn</a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="btn-hover-grow bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-full font-semibold transition">GitHub</a>
        </div>
      </section>
    </>
  );
}
