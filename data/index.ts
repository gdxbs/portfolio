export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Work Experience", link: "#experience" },
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
    img: "/me.png",
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
    title: "Tech enthusiast with a passion for innovation.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Freelancing!",
    description: "What am I up to?",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/grid.svg",
    spareImg: "/b5.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
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
    img: "/hsi.webp",
    iconLists: ["/re.svg", "/javascript.webp","/flask.webp", "/bootstrap.webp", "/python.webp", "/selenium.webp", "/pandas.webp"],
    link: "https://github.com/PauloDrefahl/NetspiderHSI",
  },
  {
    id: 2,
    title: "PAT - AI Patent Checker",
    des: "Simplify the process of making your patent original with PAT, an AI-powered patent checker.",
    img: "/pat.webp",
    iconLists: ["/re.svg", "/tail.svg", "/dock.svg", "/huggingface.webp", "/node.webp", "/pytorch.svg", "/tensorflow.webp", "/flask.webp", "/aws.webp"],
    link: "https://github.com/zesutton2619/PAT",
  },
  {
    id: 3,
    title: "Wiki4Anything - Wikipedia Clone",
    des: "Create an account and upload or edit articles on any topic you can think of. Currently undergoing revisions.",
    img: "/wiki.webp",
    iconLists: ["/re.svg", "/bootstrap.webp", "/nodemon.webp", "/jwt.svg", "/mysql.webp", "/antd.webp", "/jest.webp", "/babel.webp"],
    link: "https://github.com/gdxbs/Wiki",
  },
  {
    id: 4,
    title: "Reddit Automated Testing",
    des: "Tinker with various functions of Reddit's UI and interactivity using the power of automation.",
    img: "/reddit.webp",
    iconLists: ["/selenium.webp", "/intellij.webp", "/python.webp", "/javascript.webp", "/xml.svg"],
    link: "https://github.com/zesutton2619/Software-Testing-Reddit",
  },
  {
    id: 5,
    title: "Local Barbershop Website",
    des: "This project is currently in development. Created for Cut It Forward, a local barbershop in Lutz.",
    img: "/barbershop.webp",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg", "/next.svg"],
    link: "https://github.com/gdxbs/barbershop-website",
  },
  {
    id: 6,
    title: "StreamLine - Banking Platform",
    des: "This project is currently in development. Streamline your banking experience with this full-stack platform.",
    img: "/streamline.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg", "/appwrite.webp", "/plaid.webp", "/dwolla.webp", "/react-hook-form.webp", "/chartjs.webp"],
    link: "https://github.com/gdxbs/banking_app",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Freelance Web Developer",
    desc: "Leading the development of a website for a local barbershop, from initial concept to deployment.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 2,
    title: "Frontend Engineer Intern",
    desc: "Worked with Homeland Security Investigations for 9 months to develop a web-scraping application as part of FGCU's senior project.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp1.svg",
  },
  {
    id: 3,
    title: "JavaScript Foundations Professional Certificate",
    desc: "Sponsored by Mozilla, this certificate is designed to help developers learn the fundamentals of JavaScript.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/javascript.webp",
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
    img: "/twit.svg",
    link: "https://x.com/BatehamGregory"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/gbateham/"
  },
];