import ResumePDF from "./Aenosh_Rajora_Resume.pdf";
import default_avatar from "../../assets/images/baseImages/default_avatar.svg";
import KloudGin from ".././../assets/images/data/KloudGin.png";
import Freelance from ".././../assets/images/data/Freelance.png";
import coincent from ".././../assets/images/data/coincent.png";

const user = {
	firstName: "Aenosh",
	lastName: "Rajora",
	userImage: default_avatar,
	resume: ResumePDF,
	email: "aenoshrajora79@gmail.com",
	linkedIn: "in/aenosh-rajora",
	gitHub: "aenoshrajora",
	twitter: "aenoshr",
	aboutMe: {
		intro: " I'm a Penetration Tester from India.",
		description:
			"I’m a Penetration Tester who loves testing for vulnerabilities and  building cool UI effects, dynamic webpages with amazing animations and creating intuitive, dynamic user experiences.I also love to reach out to new opportunities across the globe that will enhance my skills and get the opportunity to work with other Hackers as well",
		outro: "When I'm not hacking any app  , you will find me programming on web apps and algorithms ",
	},

	experiences: [
		{
			organization:"Coincent",
			organizationPicture: coincent,
			startDate: "Sep 2022",
			isCurrent: true,
			positions:[
				{
					positionName: "Internship",
					startDate: "Sep 2022",
					endDate: "Present",
					isCurrent: true,
					description: "Developed and implemented new network system and application security policies and procedures to prevent corporate data from being stolen. Monitored and analyzed network traffic, investigated and documented any security incidents, and provided advice and recommendations to managers on any ITrelated issues"
				},
			]
		},
		{
			organization: "Corizo",
			organizationPicture: KloudGin,
			startDate: "Jun 2022",
			endDate:  "Nov 2022",
			positions: [
				{
					positionName: "Internship",
					startDate: "Sep 2022",
					endDate: " Dec 2022",
					isCurrent: true,
					description:
						"Developed and implemented new network system and application security policies and procedures to prevent corporate data from being stolen. Monitored and analyzed network traffic, investigated and documented any security incidents, and provided advice and recommendations to managers on any IT related issues",
				},

			],
		},
		{
			organization: "Freelance",
			organizationPicture: Freelance,
			startDate: "2020",
			endDate: "2022",
			positions: [
				{
					positionName: "Internship",
					startDate: "Sep 2020",
					endDate: " Dec 2022",
					isCurrent: true,
					description:
						"Created and managed using modern web technologies while providing excellent customer service and support. Personally consult clients with design suggestions and hosting recommendations.",
				},

			],
		},
	],
	education: [
		{
			instituteName:
				"Rameshwaram Institute of Technology & Management",
			degree: "Bachelor's Degree in Computer Science and Engineering",
			year: "Present",
			id: 1,
		},
		{
			instituteName: "A.P.S. Academy",
			degree: "Intermediate",
			year: "2022",
			id: 2,
		},
		{
			instituteName: "A.P.S. Academy",
			degree: "High School",
			year: "2019",
			id: 3,
		},
	],
	projects: [
		{
			projectName: "Corona Tracker",
			description:
				"Real Time corona case tracker",
			madeWith: ["Android", "React.js", "Chart.js", "Material UI"],
			link: "https://github.com/aenoshrajora/corona-tracker",
		},
		{
			projectName: "KeepNote",
			description:
				"A light weight efficient note takng app  ",
			madeWith: ["Electron", "Typescript"],
			link: "https://keepnote.vercel.app",
		},
		{
			projectName: "Online Code Editor",
			description:
				"A minimal code editor that supports html, css, and javascript for learning and quickly testing",
			madeWith: [
				"HTML",
				"Css",
				"Javascript",
				"codemirror",
				"react-codemirror2",
			],
			link: "https://online-code-editor-react-opal.vercel.app/",
		},
		
	],
	skills: [
		{
			name: "Language Proficiency",
			values: [
				"Python",
				"C/C++",
				"JavaScript",
				"ReactJS",
				"PHP",
				"HTML",
				"CSS",
			],
		},
		{
			name: "Tools Proficiency",
			values: ["Git", "msfconsole", "nmap", "maltego", "VS Code"],
		},
		{
			name: "Database Proficiency",
			values: ["MySQL", "MongoDB"],
		},
	],
};

export default user;
