const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 5, suffix: "+", label: "Satisfied Clients" },
  { value: 6, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "Teacher in JavaScript",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "JavaScript Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "Teacher in Javascript",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "JavaScript Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Maxkam brought creativity and technical expertise to the education, greatly enhancing the learning performance for students. His leadership skills were crucial in delivering a faster and more seamless learning experience.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/teacher5.webp",
    title: "Teacher in JavaScript | Freelance",
    company: "Private Students",
    location: "London & Online",
    date: "Apr 2024 - Present",
    responsibilities: [
      "Introduce students to tools aligned with current industry practices and assess their projects.",
      "Provided individualized lessons in web development using modern technologies.",
      "Design timetables, lesson plans, scheme of work and deliver peer-to-peer tutoring via Zoom, MS Teams, and messaging platforms.",
    ],
  },
  {
    review: "Maxkam has made valuable contributions to the website, consistently approaching challenges with a thoughtful and problem-solving mindset.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/prime-chauffeuring.png",
    title: "Project Manager",
    company: "Prime Chauffeuring",
    location: "London, UK",
    date: "Oct 2022 - Present",
    responsibilities: [
      "Directed project planning and execution aligned with company goals.",
      "Analyzed industry standards and generating market level design sketch with development plan process.",
      "Compiled and analyzed weekly performance reports to inform decision-making.",
    ],
  },
  {
    review: "Maxkam contributed to the stability of business with a strong focus on quality and efficiency, delivering solutions that enhanced user experience and exceeded client expectations.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/project-manager6.png",
    title: "Project Manager",
    company: "Spark A2Z Ltd",
    location: "London, UK",
    date: "Oct 2019 - Present",
    responsibilities: [
      "Managed the day-to-day IT operations, networks and computer systems.",
      "Managed vendor relationships with a focus on data security and compliance.",
      "Implemented post-project maintenance protocols and troubleshooting procedures.",
    ],
  },
];

const expLogos = [
  {
    name: "teacher5",
    imgPath: "/images/teacher5.webp",
  },
  {
    name: "prime-chauffeuring",
    imgPath: "/images/prime-chauffeuring.png",
  },
  {
    name: "project-manager6",
    imgPath: "/images/project-manager6.png",
  },
];

const testimonials = [
  {
    name: "Abduzar Khabibullaev",
    mentions: "@https://t.me/abduzarrr",
    review:
      "Maxkam is an exceptional developer. He transformed our website into a modern, user-friendly platform that has significantly improved our online presence. His attention to detail and commitment to quality are unmatched.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Nuriddin Toirov",
    mentions: "https://t.me/Nuriddin_Toirov",
    review:
      "Working with Maxkam was a game-changer for our project. His expertise in web development and design helped us create a stunning website that not only looks great but also performs exceptionally well. Highly recommend!",
    imgPath: "/images/client2.png",
  },
  {
    name: "Aziza Islamova",
    mentions: "",
    review:
      "Maxkam’s work on our website was outstanding. He took our vision and turned it into a reality, delivering a site that is both visually appealing and highly functional. His professionalism and dedication are truly commendable.",
    imgPath: "/images/client0.webp",
  },
  {
    name: "Shakhzod Kuchimov",
    mentions: "@https://t.me/Shakh1706",
    review:
      "Maxkam is a talented developer who consistently delivers high-quality work. He revamped our website with a fresh design and improved functionality, resulting in a better user experience. His skills in both frontend and backend development are impressive.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Fahim Sheikh",
    mentions: "",
    review:
      "Maxkam is a true professional. He worked closely with us to understand our needs and delivered a website that exceeded our expectations. His ability to combine aesthetics with functionality is remarkable.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Yasin Mamatiminov",
    mentions: "https://wa.me/447407537058",
    review:
      "Maxkam’s expertise in web development is evident in the quality of his work. He transformed our site into a modern, responsive platform that has greatly enhanced our online presence. His attention to detail and commitment to excellence are truly impressive.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "https://www.instagram.com/learntry/",
    imgPath: "/images/insta.png",
  },
  {
    name: "https://www.facebook.com/maxkamjon1602",
    imgPath: "/images/fb.png",
  },
  {
    name: "https://x.com/maxkamjon1602",
    imgPath: "/images/x.png",
  },
  {
    name: "https://www.linkedin.com/in/maxkamjon1602/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
