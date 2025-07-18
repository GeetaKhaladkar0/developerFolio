import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Geeta Khaladkar",
  title: "Hi all, I'm Geeta",
  subTitle: emoji(
    "AWS Certified Cloud & DevOps Engineer ☁️ with 4+ years of experience in building scalable, secure infrastructures and CI/CD pipelines using Jenkins, Docker, and automation with Python, Terraform & Shell scripting. Skilled in container orchestration with Kubernetes and monitoring with Prometheus & Grafana."
  ),
  resumeLink: "/Geeta_Khaladkar_Resume.pdf",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/GeetaKhaladkar0",
  linkedin: "https://www.linkedin.com/in/geeta-khaladkar/",
  gmail: "geeta.khaladkar@gmail.com",
  display: true
};

const skillsSection = {
  title: "What I Do",
  subTitle: "DevOps | Cloud | Monitoring | Automation 🚀",
  skills: [
    emoji("⚡ Automate CI/CD pipelines using Jenkins, Shell scripting & GitHub Actions"),
    emoji("⚡ Provision infrastructure using Terraform, CloudFormation & AWS CLI"),
    emoji("⚡ Deploy & orchestrate containers with Docker & Kubernetes"),
    emoji("⚡ Monitor systems with Prometheus, Grafana, and AWS CloudWatch")
  ],
  softwareSkills: [
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Terraform", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Jenkins", fontAwesomeClassname: "fab fa-jenkins" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Kubernetes", fontAwesomeClassname: "fas fa-network-wired" },
    { skillName: "Shell", fontAwesomeClassname: "fas fa-terminal" },
    { skillName: "Prometheus", fontAwesomeClassname: "fas fa-bullseye" },
    { skillName: "Grafana", fontAwesomeClassname: "fas fa-chart-line" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git" },
    { skillName: "Linux", fontAwesomeClassname: "fab fa-linux" },
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" }
  ],
  display: true
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Cloud Engineer",
      company: "Blazeclan Technologies",
      date: "Nov 2021 – Feb 2023",
      desc: "Built and managed CI/CD pipelines using Jenkins, Docker, and Terraform. Automated AWS infrastructure deployments and monitoring with Prometheus and Grafana."
    },
    {
      role: "Jr. Software Developer",
      company: "Quiesta Technologies",
      date: "Jan 2019 – Nov 2021",
      desc: "Developed web applications using Python Django, integrated with PostgreSQL and deployed on cloud platforms."
    },
    {
      role: "Jr.Testing Engineer",
      company: "Qualitas Global",
      date: "Mar 2018 – Nov 2018",
      desc: "Labeled and annotated 50,000+ images for German driverless car vision datasets, improving model accuracy by 15%."
    }
  ]
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Pune University",
      subHeader: "B.E. in Information Technology",
      duration: "2014 - 2017",
      desc: "Graduated with Distinction"
    },
    {
      schoolName: "MSBTE",
      subHeader: "Diploma in Information Technology",
      duration: "2011 - 2014",
      desc: "Completed with First Class"
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "AWS & DevOps", progressPercentage: "90%" },
    { Stack: "Python/Django", progressPercentage: "80%" },
    { Stack: "CI/CD & Terraform", progressPercentage: "85%" },
    { Stack: "Container Orchestration (Kubernetes)", progressPercentage: "75%" }
  ],
  displayCodersrank: false
};

const bigProjects = {
  title: "Projects",
  subtitle: "Cloud-native, automated and monitored applications",
  projects: [
    {
      projectName: "Wanderlust : Travel Blog",
      projectDesc:
        "Deploy an end to end three tier MERN stack application on EKS cluster.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/GeetaKhaladkar0/Wanderlust-Mega-Project.git"
        }
      ]
    },
    {
      projectName: "CloudCodeOps",
      projectDesc: "A simple Todo app built with Django which executes via CI/CD Pipeline.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/GeetaKhaladkar0/CICD_Django"
        },
        {
          name: "Documentation",
          url: "https://docs.google.com/document/d/1FETomIDLMUucURpqEN0eruiFhGQmiXty/view"
        }
      ]
    },
    {
      projectName: "Wanderlust : Travel Blog",
      projectDesc:
        "Deploy an end to end three tier MERN stack application.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/GeetaKhaladkar0/wanderlust.git"
        }
      ]
    },
    {
      projectName: "FlaskApp",
      projectDesc:
        "A simple Flask app that stores user messages in a MySQL database and displays them on the frontend.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/GeetaKhaladkar0/two-tier-flask-app.git"
        }
      ]
    },
    {
      projectName: "NotesApp",
      projectDesc:
        "A simple notes app built with React and Django.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/GeetaKhaladkar0/Notesapp_Nginix.git"
        },
        {
          name: "Documentation",
          url: "https://docs.google.com/document/d/1KkzNzQf707xjczQUNtnkz5Q3MFnI8SSq/view"
        }
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Certifications 🏆"),
  subtitle: "Recognized for cloud, DevOps, and automation expertise",
  achievementsCards: [
    {
      title: "AWS Certified Solutions Architect",
      subtitle: "Credential ID: HEQ2V3Q1Y14EQZG8 (Valid: 2022–2025)",
      image: require("./assets/images/badge (1).png"),
      imageAlt: "AWS Certificate",
      certificateLink: "https://drive.google.com/file/d/1Rucr0KlWGfd12WPZ3QE8bgjLUXCHmoBV/view"
    },
    {
      title: "DevOps Bootcamp – TrainWithShubham",
      subtitle: "Automated end-to-end pipelines & deployments",
      image: require("./assets/images/badge (1).png"),
      imageAlt: "DevOps Bootcamp Certificate",
      certificateLink: "https://drive.google.com/file/d/1nBYBDxSvksLwBT60iPouc_krVnbIPgjy/view?usp=sharing"
    },
    {
      title: "Python for DevOps – TrainWithShubham",
      subtitle: "Built CLI tools and scripts for CI/CD & monitoring",
      image: require("./assets/images/badge (1).png"),
      imageAlt: "Python for DevOps Certificate",
      certificateLink: "https://drive.google.com/file/d/1fW7wILvyqv1I5SIePxfCWx6HxPib9CKi/view?usp=sharing"
      
    }
  ],
  display: true
};


const resumeSection = {
  title: "Resume",
  subtitle: "Click below to view or download my resume",
  display: true,
  resumeLink: "/Geeta_Khaladkar_Resume.pdf"
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Open to work — let's connect and build something amazing!",
  number: "+91 9273484491",
  email_address: "geeta.khaladkar@gmail.com"
};

const twitterDetails = {
  userName: "",
  display: false
};

const openSource = {
  showGithubProfile: true,
  display: true
};

/*const blogSection = {
  title: "Blogs",
  subtitle: "I occasionally write about DevOps and Cloud.",
  displayMediumBlogs: true,
  blogs: [],
  display: true
};
*/

const blogSection = {
  title: "InfraSetup",
  subtitle: "Step-by-step setup guides for essential DevOps tools",
  displayMediumBlogs: false,
  blogs: [
    {
      url: "https://docs.google.com/document/d/1RYAgvKg9QfiJDodyQrkFsBcdutIUi030/edit?usp=sharing&ouid=111188496208160667087&rtpof=true&sd=true",
      title: "Git",
      description: "Learn how to install Git and configure version control on your machine."
    },
    {
      url: "https://docs.google.com/document/d/1RYAgvKg9QfiJDodyQrkFsBcdutIUi030/edit?usp=sharing&ouid=111188496208160667087&rtpof=true&sd=true",
      title: "GitHub",
      description: "Step-by-step guide to creating GitHub repositories and managing projects."
    },
    {
      url: "https://docs.google.com/document/d/1-j5MG1d-ekeeQ_xjKoYB0Copevkz2o1l/edit?usp=drive_link&ouid=111188496208160667087&rtpof=true&sd=true",
      title: "Docker",
      description: "Install Docker and run your first containerized app."
    },
    {
      url: "https://docs.google.com/document/d/1ct6BqhiwThj_r-40X19fmQRog96KaRpx/edit?usp=drive_link&ouid=111188496208160667087&rtpof=true&sd=true",
      title: "Jenkins",
      description: "Set up Jenkins and build your first CI/CD pipeline."
    },
    {
      url: "https://docs.google.com/document/d/18IeSY9fILBPGp1QiUgfVw4UL4Or4uQ_r/edit?usp=drive_link&ouid=111188496208160667087&rtpof=true&sd=true",
      title: "Terraform",
      description: "Install Terraform and automate infrastructure provisioning."
    },
    {
      url: "https://docs.google.com/document/d/1dTJgem5ZexdJKab_JvyxLNxrGwR4FK96/view",
      title: "Kubernetes",
      description: "Beginner-friendly guide to install Kubernetes using Minikube, KIND, kubeadm, and k3s."
    },
    {
      url: "https://docs.google.com/document/d/1fJHHx4z5lDqvE3xOaFq1X6U2t1RunPoF/edit?usp=drive_link&ouid=111188496208160667087&rtpof=true&sd=true",
      title: "Prometheus",
      description: "Monitor metrics with Prometheus and scrape data from your apps."
    },
    {
      url: "https://docs.google.com/document/d/1P3D7FVnCuXaCPEdzqKFh9P32_x0T1-y_/edit?usp=drive_link&ouid=111188496208160667087&rtpof=true&sd=true",
      title: "Grafana",
      description: "Visualize data using Grafana dashboards."
    },
    {
      url: "https://docs.google.com/document/d/1rVfrsBBlKe0p2-ZrcxyrNu8gbx4mDerf/edit?usp=drive_link&ouid=111188496208160667087&rtpof=true&sd=true",
      title: "Linux",
      description: "Install Linux and learn basic terminal commands for DevOps use."
    },
    {
      url: "https://docs.google.com/document/d/1LZV9paIBavy_qATZABfS6eHTL72nZatU/edit?usp=drive_link&ouid=111188496208160667087&rtpof=true&sd=true",
      title: "Python",
      description: "Install Python and use it for automation scripts."
    },
    {
      url: "https://docs.google.com/document/d/1TyEMQVjVmhpEvAksn8ahIhysNqm8TSwE/edit?usp=drive_link&ouid=111188496208160667087&rtpof=true&sd=true",
      title: "Shell",
      description: "Learn shell scripting basics for automation and provisioning."
    },
    {
      url: "https://docs.google.com/document/d/1MuXI-92iSBintUB6TXNyN9OlrbMr9GEH/edit?usp=drive_link&ouid=111188496208160667087&rtpof=true&sd=true",
      title: "AWS CLI",
      description: "Install AWS CLI and interact with AWS services from the terminal."
    }
  ],
  display: true
};



const talkSection = {
  title: "Talks",
  subtitle: "Tech meetups and sessions",
  talks: [],
  display: false
};

const podcastSection = {
  title: "Podcast",
  subtitle: "I like to talk tech",
  podcast: [],
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  workExperiences,
  educationInfo,
  techStack,
  bigProjects,
  achievementSection,
  resumeSection,
  contactInfo,
  twitterDetails,
  isHireable,
  openSource,
  blogSection,
  talkSection,
  podcastSection
};
