import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
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
            text: "Software Engineer II at Worldpay"
        },
        {
            emoji: "📧",
            text:  "Sirisha.v2000@gmail.com"
        }
    ],
    socials: [
        {
            link: "www.linkedin.com/in/sirisha-vedamurthy",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
    ],
    bio: "Hello! I'm Sirisha Vedamurthy. I'm a DevOps engineer with 3+ years of experience at Worldpay FIS. I have expertise in building and integrating CI/CD pipelines, automating cloud infrastructure, and managing containerized applications. Strong background in Linux environments and scripting. Adept at collaborating with cross-functional teams to drive efficiency and innovation. Passionate about pushing automation capabilities beyond current standards and enhancing engineering productivity. I studied B.Tech Computer Science at REVA University. I enjoy reading books.",
    skills: {
        proficientWith: ['CI/CD', 'Git', 'GitHub Administration', 'Shell Scripting', 'Ansible', 'HTML', 'CSS', 'JS', 'Azure DevOps', 'OpenShift', 'Microservice Architecture Deployment'],
        exposedTo: ['CI/CD Tools: Jenkins, Azure', 'Scripting: Python, Shell Scripting, Groovy', 'Containerization: Docker, Kubernetes']
    },
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
            title: "OneView - Web-Based Tool to Monitor Server Status and Transactions",
            description: <p>Contributed to developing an internal monitoring utility, OneView, to monitor server status and card transactions across various environments. Developed a UI page for OneView to help users view the server data in a readable and understandable format, making it easy to view details of servers across environments.</p>,
            technologies: "HTML, CSS, JS",
            image: mock1
        },
        {
            title: "Monitoring and Notifying Utilities",
            description: <p>Created environment monitoring utilities using shell scripts and Python, which monitor servers, run test transactions, and update health notifications via Teams and Outlook emails. This utility notifies users on Teams and Outlook about issues identified in any environment.</p>,
            technologies: "Shell scripts, Webhooks",
            image: mock2
        },
        {
            title: "ASK Wallis - GenAI DevOps and SRE Workflow Engine",
            description: <p>Developed an intelligent, AI-powered workflow engine that automates repetitive and template-based CI/CD tasks for applications, middleware, and infrastructure, significantly reducing operational overhead for engineering, DevOps, and SRE teams. <li>InnovateIn48 Global "Top 10" Finalist - FIS innovation idea</li></p>,
            technologies: "Microsoft Bot Composer with Teams Integration, Azure DevOps, Azure Open AI Service and API, Function App, Logic App, REST API, Azure Cloud, Azure Cognitive Service",
            image: mock3
        },
    ]
};
