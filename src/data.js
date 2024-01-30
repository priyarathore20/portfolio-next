import htmlImg from './assets/html.png'
import cssIcon from './assets/css-3.png'
import jsIcon from "./assets/js.png"
import reactIcon from './assets/atom.png'
import nextIcon from './assets/nextjs.png'
import firebaseIcon from './assets/firebase.svg'
import instaImg from './assets/instagram-1.png'
import dukaanIcon from './assets/dukaanIcon.png'
import weatherImg from './assets/weather-removebg-preview.png'
import cartImg from './assets/cart-removebg-preview.png'
import booksImg from './assets/books-png.png'
import linkedIn from './assets/linkedin-icon.png'
import git from './assets/github-icon.png'
import mail from './assets/mail.png'
import tailwindIcon from './assets/tailwind.png'

export const data = {
  introSection: {
    salutation: "Hello,",
    name: "Priya",
    designation: "Web Developer",
    description: [
      "I am a dedicated developer on an unceasing journey", "of self-improvement, committed to deepening", "my expertise and pushing the boundaries of my field", "to achieve the highest level of excellence.",
    ]
  },

  aboutSection: {
    title: "What I do?",
    description:
      "Here's the spark that fuels my boundless curiosity :",
    card1: {
      title: "UI/UX Designer",
      text: "As a passionate and motivated UI/UX design student, I approach design challenges with creativity and user-centricity. Through coursework and personal projects, I've honed my skills in wireframing, prototyping, and problem-solving. My portfolio showcases my dedication to creating intuitive, aesthetically pleasing digital experiences."
      ,
    },
    card2: {
      title: "Web Developer",
      text: "As a dedicated frontend web developer, I specialize in crafting visually stunning and highly responsive user interfaces. My proficiency in HTML, CSS, and JavaScript, along with a keen eye for design, allows me to create seamless and engaging web experiences. Explore my portfolio to see my commitment to creating captivating and user-friendly websites.",
    },
  },

  skillSection: {
   title: 'Skills',
   text: "",
   skills: [
      {
         label: 'HTML',
         img: htmlImg
      },
      {
         label: 'CSS',
         img: cssIcon
      },
      {
         label: "JAVASCRIPT",
         img: jsIcon
      },
      { 
         label: "REACT JS",
         img: reactIcon
      },
      {
        label: 'NEXT JS',
        img: nextIcon
     },
     {
      label: 'TAILWIND CSS',
      img: tailwindIcon
   },
      {
         label: "FIREBASE",
         img: firebaseIcon
      },

   ]
  },

  workSection: {
    title: "My Portfolio",
    text: "I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. i am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.",
  
  projects:[
    {
      img: dukaanIcon,
      color: "#fff",
      hover: "#167043",
      name: "Dukaan dashboard",
      desc: "I meticulously translated design concepts into a pixel-perfect, static website, ensuring every detail was flawlessly captured.",
      git: "https://github.com/priyarathore20/payouts",
      vercel: "https://payouts-nu.vercel.app/"
    },
    {
      img: instaImg,
      color: "#d87696",
      // color: "#DFBDC5",
      hover: "#a95470",
      name: "Instagram clone",
      desc: "A social media platform mimicking the key features of Instagram, facilitating photo with friends",
      git: "https://github.com/priyarathore20/Instagram-clone",
      vercel: "https://instagram-clone-one-lime.vercel.app/"
    },
    {
      img: cartImg,
      color: "#224e8a",
      hover: "#456795",
      name: "Shopping cart",
      desc: "An e-commerce shopping cart system for users to add, view, and purchase selected products.",
      git: "https://github.com/priyarathore20/Shopping-Cart",
      vercel: "https://shopping-cart-two-chi.vercel.app/"
    },
    {
      img: weatherImg,
      color: "#AF73AE",
      hover: "rgb(60,60,60)",
      name: "Weather forecast",
      desc: "I attempted to create a static replica of Netflix's homepage.",
      git: "https://github.com/priyarathore20/weather-forecast",
      vercel: "https://weather-forecast-chi-lac.vercel.app/"
    },
    {
      img: booksImg,
      color: "#df645a",
      hover: "#852119",
      name: "Google books API",
      desc: "A project using the Google Book API to access and display book-name on search.",
      git: "https://github.com/priyarathore20/Books-app",
      vercel: "https://books-app-beta.vercel.app/"
    }
  ]
  },

  footer: [
   {href : "https://www.linkedin.com/in/priya-rathore20", img: linkedIn},
   {href : "https://github.com/priyarathore20", img: git},
   {href:'mailto:rathorepriya1705@gmail.com', img: mail} 
  ]
};


