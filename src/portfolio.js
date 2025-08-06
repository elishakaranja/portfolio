/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Elisha Karanja", // Your name, this is also used in the page title ELISHA KARANJA
  title: "Hi, I'm Elisha ",
  subTitle:
    "I’m a software developer who builds scalable Flask APIs and dynamic React UIs. With a strong Python background, I’m now diving into AI Engineering—exploring language models and intelligent agents—while staying ready to pick up new tools and tackle fresh challenges.",
  resumeLink:
    "https://drive.google.com/file/d/1wSVKWgtHts2dQPgOXMZITpPdiPHvICnb/view?usp=sharing", // optional, can be Google Drive link or GitHub PDF
  displayGreeting: true
  };


// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/elishakaranja",
  linkedin: "https://www.linkedin.com/in/your-linkedin-here", // or leave blank if not available
  gmail: "elishadominic74@gmail.com",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Backend-focused developer with a strong passion for building secure, scalable APIs and full-stack apps using Flask, React, and modern architecture principles.",
  skills: [
    emoji("⚡ Architect and build RESTful APIs with Flask, Python, and JWT-based authentication"),
    emoji("⚡ Design responsive, user-friendly UIs in React with effective state management"),
    emoji("⚡ Model, query, and optimize relational data using SQLAlchemy and database design principles"),
    emoji("⚡ Lead backend architecture and integrate secure frontend-backend communication"),
    emoji("⚡ Deliver maintainable, production-ready code with a focus on clean structure and testing"),
  ],
  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Flask",
      fontAwesomeClassname: "fas fa-flask"
    },
    {
      skillName: "SQLite",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    }
  ],
  display: true
};
  
  

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */
 

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Moringa School",
      // logo: require("./assets/images/moringa.png"), // optional
      subHeader: "Software Engineering Certificate",
      duration: "Jan 2025 - Sept 2025",
      desc: "Focused on full-stack development, Flask, React, database systems, and teamwork in group projects.",
      grade: "Passed",
      descBullets: [
        "Completed multiple full-stack projects using Flask + React",
        "Led backend dev for ambulance request group project",
      ],
    },
    {
      schoolName: "Oracle AI Foundations",
      // logo: require("./assets/images/oracle.png"),
      subHeader: "Certification in AI Foundations",
      duration: "2025 (In Progress)",
      desc: "Learned the basics of machine learning, neural networks, and ethical AI development using Python and Oracle Cloud.",
      descBullets: ["Covered deep learning and Python AI frameworks"],
    }
  ],
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend ",
      progressPercentage: "85%",
    },
    {
      Stack: "Frontend (React)",
      progressPercentage: "70%",
    },
    {
      Stack: "Programming", 
      progressPercentage: "80%",
    },
    {
      Stack: "AI / ML (in progress)",
      progressPercentage: "40%",
    },
    {
      Stack: "Database",
      progressPercentage: "75%",
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // set to false to hide
  experience: [
    {
      role: "Frontend Developer",
      company: "Microsoft JavaScript Buildathon",
      // companylogo: require("./assets/images/microsoft.png"),
      date: "May 2025",
      desc: "Participated in a Microsoft-hosted buildathon where we built a company staff support chatbot using JavaScript, Azure OpenAI, and Azure Cognitive Services as part of the Microsoft JavaScript AI Buildathon. .",
      descBullets: [
        "Deployed AI models to Azure and used AI agents",
        "Integrated an AI assistant powered by Azure OpenAI for answering waste management queries",
        "Implimented RAG "
      ]
    },
    {
      role: "Backend Developer",
      company: "Ambulance Request App (Group Project)",
      // companylogo: require("./assets/images/group.png"),
      date: "April 2025",
      desc: "Worked in a team to build an emergency ambulance dispatch platform using Flask and React.",
      descBullets: [
        "Led backend architecture, models, and JWT authentication",
        "Coordinated data flow between frontend and backend with secure APIs",
        "Helped integrate ambulance locations into the map view"
      ]
    },
    {
      role: "Full-Stack Developer",
      company: "Libro (Personal Project)",
      // companylogo: require("./assets/images/libro.png"),
      date: "Feb 2025",
      desc: "Developed a personal book management app using Flask for the backend and simple HTML/CSS for the frontend.",
      descBullets: [
        "Built CRUD APIs using Flask and SQLite",
        "Implemented user-friendly book catalog interface"
      ]
    },
    {
      role: "Full-Stack Developer",
      company: "Ticketi (Ongoing)",
      // companylogo: require("./assets/images/ticketi.png"),
      date: "2025 (in progress)",
      desc: "Creating a full-stack event ticketing app using React for the frontend and Flask for the backend.",
      descBullets: [
        "Supports event creation, listing, and ticket purchase",
        "Uses JWT for authentication and secure user sessions",
        "Handles multiple user roles (organizer, attendee)"
      ]
    },
    {
      role: "Frontend Developer",
      company: "Mshigana - Group Project",
      // companylogo: require("./assets/images/mshigana.png"),
      date: "March 2025",
      desc: "Contributed to a peer-to-peer money transfer platform with a user-friendly interface.",
      descBullets: [
        "Designed and implemented frontend in React",
        "Collaborated on user authentication and dashboard features",
        "Worked closely with backend team to integrate wallet features"
      ]
    }
  ]
};
  


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Highlighted Projects",
  subtitle: "Projects that helped me gain experience and solve real problems",
  projects: [
    {
     // image: require("./assets/images/ambulance-app.webp"),  // optional; placeholder ok
      projectName: "Ambulance Request App",
      projectDesc:
        "School-based group project enabling users to request ambulances via maps and tracking with JWT-authentication.",
      footerLink: [
        {
          name: "View Code",
          url: "https://github.com/fahmy-dev/ambulance-app"
        }
      ]
    },
    {
     // image: require("./assets/images/libro-LLM.webp"), // optional; placeholder ok
      projectName: "Libro LLM",
      projectDesc:
        "Command‑line library management app powered by a generative OpenAI assistant—search, add, and interact conversationally with book data.",
      footerLink: [
        {
          name: "View Code",
          url: "https://github.com/elishakaranja/libro-LMS"
        }
      ]
    }
    // You can add your Buildathon JS project later here
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+254 708708894",
  email_address: "elishadominic74@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
