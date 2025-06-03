export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full relative z-10 object-cover",
    titleClassName: "justify-end",
    img: "/gregbateham.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm always available to collaborate.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack!",
    description: "A small view of...",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Graduate student with a passion for tech.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Creating an Intelligent Database Schema Recommendation System.",
    description: "What am I up to?",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/grid.svg",
    spareImg: "/b5.svg",
  },
  {
    id: 6,
    title: "Need to reach me?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "NetSpider - Web-Scraping Application",
    des: "Scrape specific web pages in search for posts containing keywords that have been linked to human trafficking.",
    img: "/hsi.svg",
    iconLists: ["/re.svg", "/j4v4script.svg", "/python.svg", "/selenium.svg", "/pandas.svg"],
    link: "https://github.com/PauloDrefahl/NetspiderHSI",
  },
  {
    id: 2,
    title: "PAT - AI Patent Checker",
    des: "Simplify the process of making your patent original with PAT, an AI-powered patent comparison tool.",
    img: "/patlogo.svg",
    iconLists: ["/re.svg", "/dock.svg", "/pytorch.svg", "/tensorflow.svg", "/aws.svg"],
    link: "https://github.com/zesutton2619/PAT",
  },
  {
    id: 3,
    title: "Wiki4Anything - Community Wiki",
    des: "Create an account and upload or edit articles on any topic you can think of. View articles as a guest or member!",
    img: "/wiki4anything.svg",
    iconLists: ["/re.svg", "/nodemon.svg", "/jwt.svg", "/mysql.svg", "/jest.svg"],
    link: "https://github.com/gdxbs/Wiki",
  },
  {
    id: 4,
    title: "Reddit Automated Testing",
    des: "Tinker with various functions of Reddit's UI and interactivity using the power of automation.",
    img: "/reddit.svg",
    iconLists: ["/selenium.svg", "/intellij.svg", "/python.svg", "/j4v4script.svg", "/xml.svg"],
    link: "https://github.com/zesutton2619/Software-Testing-Reddit",
  },
  {
    id: 5,
    title: "Local Barbershop Website",
    des: "Created for Cut It Forward, a local barbershop in Lutz.",
    img: "/barbershop.webp",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/next.svg"],
    link: "https://cutitforwardlutz.com/",
  },
  {
    id: 6,
    title: "Ford's Garage Concept",
    des: "Created a 3D Museum-esqe dedication to Ford's Garage with inclusions of famous contributors to the Ford and Firestone brand.",
    img: "/ford.svg",
    iconLists: ["/re.svg", "/vite.svg", "/three.svg", "/j4v4script.svg", "/dock.svg"],
    link: "https://youtu.be/3AQQHcmlGAI",
  },
  {
    id: 7,
    title: "CuttingEdgeAI (New!)",
    des: "Contributed to a computer vision system that analyzes garment patterns and cloth materials using deep learning.",
    img: "/cuttingedge.svg",
    iconLists: ["/re.svg", "/vite.svg", "/three.svg", "/j4v4script.svg", "/dock.svg"],
    link: "https://github.com/gdxbs/CuttingEdge",
  },
  {
    id: 8,
    title: "Project 23 (New!)",
    des: "In the process of creating a PWA for 23 Restaurants, app is still in development.",
    img: "/23rs.svg",
    iconLists: ["/next.svg", "/re.svg", "/three.svg", "/j4v4script.svg", "/supabase.svg"],
    link: "https://github.com/gdxbs/23",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Freelance Web Developer",
    desc: "Led the development of a website for a local barbershop, from initial concept to deployment.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 2,
    title: "Software Engineer Intern",
    desc: "Worked with Homeland Security Investigations for 9 months to develop a web-scraping application as part of FGCU's senior project.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp1.svg",
  },
  {
    id: 3,
    title: "JavaScript Foundations Professional Certificate",
    desc: "Sponsored by Mozilla, this certificate is designed to help developers learn the fundamentals of JavaScript.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/j4v4script.svg",
  },
  {
    id: 4,
    title: "Docker Foundations Professional Certificate",
    desc: "Sponsored by Docker, this certificate is designed to help developers learn the fundamentals of Docker.",
    className: "md:col-span-2",
    thumbnail: "/dock.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/gdxbs"
  },
  {
    id: 2,
    img: "/insta.svg",
    link: "https://www.instagram.com/bateham/?hl=en"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/gbateham/"
  },
];