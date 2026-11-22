// Edit this file to update the whole site.
import { FaPython, FaJs, FaJava, FaTerminal, FaDatabase, FaAws, FaDocker, FaLinux, FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaGitAlt, FaGithub, FaPlug, FaExchangeAlt, FaCode } from 'react-icons/fa'
import { SiCplusplus, SiKubernetes, SiTerraform, SiJenkins, SiGithubactions, SiDjango, SiExpress, SiMongodb, SiMysql, SiPostgresql, SiPycharm, SiIntellijidea, SiCanva } from 'react-icons/si'

export const profile = {
  name: 'Subhashree Manjari Jena',
  role: 'Software Developer / Full-Stack Engineer',
  typing: 'Full-Stack Developer | Django • React • AWS • Docker',
  pitch: 'I build fast, reliable web apps and ship them with Docker, AWS and CI/CD.',
  bio: [
    "I'm a software developer focused on full-stack development, cloud deployment and DevOps. I like taking an idea from API design to a production release.",
    'Through REST API optimization, Docker containerization, AWS services and CI/CD automation, I have sped up application response times, shortened release cycles and cut operational overhead.',
  ],
  location: 'Puri, Odisha, India',
  locationShort: 'Odisha, India',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Odisha,+India',
  email: 'manjarisubhashree@gmail.com',
  phone: '+91-9348387198',
  phoneTel: 'tel:+919348387198',
  whatsapp: 'https://wa.me/919348387198?text=Hi%20Subhashree%2C%20I%20saw%20your%20portfolio.',
  linkedin: 'https://www.linkedin.com/in/subhashree-manjari-jena-aa2822193',
  github: 'https://github.com/Subhashree',
  photo: '/photo.jpg', // swap for '/photo-alt.jpg' to use the other picture
  resume: '/Subhashree_Manjari_Jena_Resume.pdf',
}

export const stats = [
  { value: 30, suffix: '%', label: 'Faster response time' },
  { value: 40, suffix: '%', label: 'Faster release cycles' },
  { value: 25, suffix: '%', label: 'Lower operational overhead' },
  { value: 8.1, suffix: '', decimals: 1, label: 'MCA CGPA' },
]

export const skills = [
  { group: 'Languages', items: [['Python', FaPython], ['C++', SiCplusplus], ['JavaScript', FaJs], ['Java', FaJava], ['SQL', FaDatabase], ['Shell/Bash', FaTerminal]] },
  { group: 'Cloud & DevOps', items: [['AWS', FaAws], ['Docker', FaDocker], ['Kubernetes', SiKubernetes], ['Terraform', SiTerraform], ['Jenkins', SiJenkins], ['GitHub Actions', SiGithubactions], ['Linux', FaLinux]] },
  { group: 'Frontend & Backend', items: [['HTML5', FaHtml5], ['CSS3', FaCss3Alt], ['React', FaReact], ['Django', SiDjango], ['Django REST Framework', SiDjango], ['Express', SiExpress], ['MongoDB', SiMongodb], ['MySQL', SiMysql], ['PostgreSQL', SiPostgresql], ['Bootstrap', FaBootstrap], ['REST APIs', FaExchangeAlt], ['WebSockets', FaPlug]] },
  { group: 'Tools', items: [['VS Code', FaCode], ['PyCharm', SiPycharm], ['IntelliJ', SiIntellijidea], ['Git', FaGitAlt], ['GitHub', FaGithub], ['Canva', SiCanva]] },
]

export const experience = [
  {
    title: 'Software Engineer / Software Developer',
    company: 'Akiko Sherman Infotech Pvt. Ltd.',
    place: 'Delhi, India',
    period: 'Dec 2024 – Mar 2026',
    bullets: [
      'Developed and maintained scalable web apps with Django, React and MySQL.',
      'Built a Live Stock Market Dashboard (AlphaVantage/IEX Cloud APIs, Django REST Framework, React, WebSockets), deployed on AWS with Docker.',
      'Created a Real-Time Chat App using Django Channels, React and MySQL.',
      'Set up CI/CD pipelines with GitHub Actions and Git workflows.',
    ],
  },
]

// Replace '#' with your real repository / demo links.
export const projects = [
  { name: 'Live Stock Market Dashboard', desc: 'Real-time market data from AlphaVantage/IEX Cloud, pushed to the browser over WebSockets. Deployed on AWS with Docker.', tech: ['Django REST', 'React', 'WebSockets', 'AWS', 'Docker'], github: '#', demo: '#' },
  { name: 'Real-Time Chat Application', desc: 'Instant messaging with Django Channels for WebSocket support and MySQL for message history.', tech: ['Django Channels', 'React', 'MySQL'], github: '#', demo: '#' },
  { name: 'Court Case Management System', desc: '98% record accuracy and 99% system reliability using validation checks, RBAC and structured workflows.', tech: ['Java', 'Spring Boot', 'MySQL'], github: '#', demo: '#' },
  { name: 'Court Digital File Tracking System', desc: '97% file-movement tracking accuracy and 30% fewer file-handling errors through automated status monitoring.', tech: ['PHP', 'Java', 'Node.js', 'MySQL'], github: '#', demo: '#' },
  { name: 'Village Development System', desc: 'Web portal for village services and citizen records. 85% better data-management efficiency and 10–12 new features.', tech: ['React', 'Spring Boot', 'PostgreSQL'], github: '#', demo: '#' },
]

export const education = { school: 'GIET University, Gunupur', degree: 'MCA (Master of Computer Applications)', period: '2022 – 2024', score: 'CGPA 8.1' }
export const certifications = [{ name: 'Generative AI and Agentic AI', issuer: 'Ashok IT, Hyderabad, Telangana', date: 'Apr 2026' }]
export const navLinks = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact']
