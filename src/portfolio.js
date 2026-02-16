/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import newSplashAnimation from "./assets/lottie/modular-mini-cubes.json"; // Rename to your file name for custom animation
// import resume from "./assets/Elisha_Karanja_Software_Engineer.pdf";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: newSplashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Elisha Karanja", // Your name, this is also used in the page title ELISHA KARANJA
  title: "Hi, I'm Elisha",
  subTitle:
    "I’m a backend-focused software engineer building RESTful APIs, transactional systems, and full-stack applications using Python, Flask, SQL, and React. I care about clean data models, secure authentication flows, and predictable API behavior.\n\nRecently, I’ve been working on AI-enabled backend systems, including Retrieval-Augmented Generation pipelines, with a focus on grounding model outputs in reliable data sources rather than generic LLM responses.",
  resumeLink:
    "https://docs.google.com/document/d/1AApTxl271D6yN0353xkNTsrvkx2Slb-GAma3mPX5mTU/edit?usp=sharing", // optional, can be Google Drive link or GitHub PDF
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/elishakaranja",
  linkedin: "https://www.linkedin.com/in/elisha-karanja-b12337285", // or leave blank if not available
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
    "Backend-focused Full Stack developer with a passion for AI-driven applications, secure backend systems, and scalable full-stack solutions. I work across JavaScript/React and Python/Django/Flask/FastAPI, while leveraging tools like Docker, Git, and cloud services to deliver production-ready software.",
  skills: [
    emoji("• Backend and API development using Python, Flask, and FastAPI"),
    emoji(
      "• Integrating React frontends with backend services through clean REST APIs"
    ),
    emoji("• Designing relational data models using PostgreSQL and SQL"),
    emoji(
      "• Adding AI capabilities to applications using Azure OpenAI and RAG pipelines"
    ),
    emoji(
      "• Deploying containerized applications with Docker and managing version control with Git"
    ),
    emoji(
      "• Maintaining readable, testable codebases in collaborative environments"
    )
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
      duration: "Nov - jul 2025",
      desc: "Focused on full-stack development, Flask, React, database systems, and teamwork in group projects.",
      grade: "Passed",
      descBullets: [
        "Completed multiple full-stack projects using Flask + React",
        "Led backend dev for ambulance request group project"
      ]
    },
    {
      schoolName: "Oracle Generative AI Certification",
      // logo: require("./assets/images/oracle.png"),
      subHeader: "Professional Certification",
      duration: "2025",
      desc: "Completed the Oracle Generative AI Professional Certification, gaining expertise in large language models, prompt engineering, and building generative AI solutions on Oracle Cloud Infrastructure.",
      descBullets: [
        "Mastered the fundamentals of generative AI and large language models.",
        "Learned to apply generative AI for various use cases, including content generation, summarization, and conversational AI."
      ]
    },
    {
      schoolName: "Oracle AI Foundations",
      // logo: require("./assets/images/oracle.png"),
      subHeader: "Certification in AI Foundations",
      duration: "2025",
      desc: "Learned the basics of machine learning, neural networks, and ethical AI development using Python and Oracle Cloud.",
      descBullets: ["Covered deep learning and Python AI frameworks"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend ",
      progressPercentage: "85%"
    },
    {
      Stack: "Frontend (React)",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "AI / ML (in progress)",
      progressPercentage: "40%"
    },
    {
      Stack: "Database",
      progressPercentage: "75%"
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
      date: "",
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
      date: "",
      desc: "Worked in a team to build an emergency ambulance dispatch platform using Flask and React.",
      descBullets: [
        "Led backend architecture, models, and JWT authentication",
        "Coordinated data flow between frontend and backend with secure APIs",
        "Helped integrate ambulance locations into the map view"
      ],
      footerLink: [
        {
          name: "View Code",
          url: "https://github.com/fahmy-dev/ambulance-app"
        }
      ]
    },
    {
      role: "Full-Stack Developer",
      company: "Ticketi",
      // companylogo: require("./assets/images/ticketi.png"),
      date: "",
      desc: "Creating a full-stack event ticketing app using React for the frontend and Flask for the backend.",
      descBullets: [
        "Supports event creation, listing, and ticket purchase",
        "Uses JWT for authentication and secure user sessions",
        "Handles multiple user roles (organizer, attendee)"
      ],
      footerLink: [
        {
          name: "View Code",
          url: "https://github.com/elishakaranja/ticketi"
        }
      ]
    },
    {
      role: "Frontend Developer",
      company: "Mshigana - Group Project",
      // companylogo: require("./assets/images/mshigana.png"),
      date: "",
      desc: "Contributed to a peer-to-peer money transfer platform with a user-friendly interface.",
      descBullets: [
        "Designed and implemented frontend in React",
        "Collaborated on user authentication and dashboard features",
        "Worked closely with backend team to integrate wallet features"
      ],
      footerLink: [
        {
          name: "Watch Demo",
          url: "https://www.loom.com/share/bdf59220680c4ddc8b2f5330a39fbd5c?sid=feae19d4-90e7-4fd9-ba66-1015ede192c3"
        },
        {
          name: "View Code",
          url: "https://github.com/Steamgx/M-SHIGANA"
        }
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
      // image: require("./assets/images/mindset-coach.webp"),  // optional; placeholder ok
      projectName: "Mindset Coach",
      projectDesc:
        "An AI powered mindset-coach that bases its answers on scientific research using RAG.",
      footerLink: [
        {
          name: "View Code",
          url: "https://github.com/elishakaranja/Mindset_coach"
        }
      ]
    },
    {
      // image: require("./assets/images/ticketi.webp"), // optional; placeholder ok
      projectName: "Ticketi",
      projectDesc:
        "A full-stack event ticketing app using React, Flask, and JWT authentication.",
      footerLink: [
        {
          name: "View Code",
          url: "https://github.com/elishakaranja/ticketi"
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

// Case Studies Section

const caseStudies = {
  display: true,
  title: "Experience",
  subtitle: "Analyzing and optimizing complex systems for operational impact",
  stories: [
    {
      title: "Software Engineer",
      organization: "Pharmacy and Poisons Board (Kenya)",
      overview:
        "Worked on extracting structure from dense regulatory material to design a 6-stage renewal workflow, simplifying complex policy into a usable compliance checklist.",
      narrative:
        "### Context\n\nThe Pharmacy and Poisons Board provides national guidelines for the renewal and re-registration of marketing authorization for medicines and vaccines. These guidelines define the documentation, compliance evidence, and procedural requirements that pharmaceutical companies must meet to maintain product approval.\n\nThe challenge was not technical development — it was structural clarity.\n\nThe documentation is dense, policy-driven, and compliance-heavy. My role was to break it down into something operational and usable.\n\n### Problem\n\nRegulatory guidelines are written for legal and compliance purposes — not for operational execution.\n\nThis creates friction:\n\n- Teams may misinterpret submission requirements.\n- Missing documentation leads to rejection or delays.\n- Delays can affect product availability and revenue continuity.\n- There is often no clear internal workflow aligning documentation review, compliance validation, and submission tracking.\n\nIn short: the information existed, but it was not structured for execution.\n\n### Approach\n\nI approached the guideline as a systems problem.\n\n1. Extracted all submission requirements into categorized components (administrative, technical, GMP, post-market surveillance).\n2. Converted policy language into a structured compliance checklist.\n3. Designed a simplified 6-stage renewal workflow:\n   - Documentation intake\n   - Requirement validation\n   - Compliance evidence verification\n   - Gap identification\n   - Submission preparation\n   - Tracking & follow-up\n4. Identified bottlenecks where incomplete documentation could delay approval.\n5. Produced structured implementation notes translating policy into operational steps.\n\nRather than treating the document as static regulation, I treated it as a process blueprint.\n\n### Outcome\n\nThe result was a structured renewal framework that:\n\n- Reduced ambiguity around submission requirements.\n- Provided a clear operational checklist.\n- Improved accountability by mapping stages to responsible roles.\n- Reduced the risk of incomplete submissions.\n- Connected compliance readiness with business continuity.\n\nThis project reinforced my ability to:\n\n- Work with complex, high-accountability documentation.\n- Extract structure from dense material.\n- Design process-oriented systems.\n- Think about operational risk and commercial impact.\n\n### Why This Matters to My Work\n\nWhether building APIs, designing workflows, or modernizing digital systems, the principle is the same:\n\nStructure reduces friction.\nClarity reduces risk.\nProcess drives results.\n\nThis project strengthened my systems thinking — the same mindset I apply to backend architecture and digital optimization work."
    }
  ]
};

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
  resumeSection,
  caseStudies
};
