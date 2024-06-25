import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export let singlePage = false;

export const info = {
    firstName: "Sirisha",
    lastName: "Vedamurthy",
    initials: "SV", 
    position: "a DevOps Engineer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in India'
        },
        {
            emoji: "💼",
            text: "Software Engineer I at Worldpay from FIS"
        },
        {
            emoji: "📧",
            text: "Sirisha.v2000@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://linkedin.com/sirishavedamurthy",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },


    ],
    bio: "Hello! I'm Sirisha Vedamurthy. I'm a DevOps engineer with 3 years of experience at Worldpay FIS. I have Expertise in building and integrating CI/CD pipelines, automating cloud infrastructure, and managing containerized applications. Strong background in Linux environments, scripting. Adept at collaborating with cross-functional teams to drive efficiency and innovation. Passionate about pushing automation capabilities beyond current standards and enhancing engineering productivity. I studied Computer Science at REVA University, I enjoy Reading books",
    skills:
        {
            proficientWith: [ 'CI/CD', 'git', 'github adminstration','shell scipting', 'Ansible', 'html', 'css', 'JS'],
            exposedTo: ["CI/CD Tools: Jenkins, Azure, Scripting: Python, Shell Scripting, Groovy, Containerization: Docker, Kubernetes"]
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },

        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }

    ],
    portfolio: [ 
        {
            title: "OneView - Web-Based Tool to Monitor Server Status and Transaction",
            description: <p>"Contributed to developing a internal monitoring utiility OneView to monitor server status and card transactions across various environments, Developed a UI page for OneView to help user view the server data in readable and understabdable format to help in easily view details of servers across environments"</p>,
            technologies: "HTML, CSS, JS",
            image: mock1
        },
        {
            title: "Monitoring and notifiying Utilities",
            description: <p>"Created environment monitoring utilities using shell scripts and Python, which monitor servers, run test transactions, and update health notifications via Teams and outlook emails. This utility will notify users on Teams and Outlook about issues when identified in any environment."</p>,
            technologies: "Shell scripts, Webhooks.",
            image: mock2
        },
        {
            title: "ASK Wallis - GenAI DevOps and SRE Workflow Engine",
            description: <p>"To develop an intelligent, AI-powered workflow engine that automates 
            repetitive and template-based CI/CD tasks for applications, 
            middleware, and infrastructure which significantly reduce operational 
            overhead for engineering, DevOps, and SRE teams." <li>"InnovateIn48 Global "Top 10" Finalist - FIS innovation idea"</li> </p>,
            technologies: "Microsoft Bot Composer with TeamsIntegration, Azure DevOps, Azure Open AI Service and API,Function App, Logic App, REST API, Azure Cloud, Azure Cognitive Service.",
            image: mock3
        },
    ]
}