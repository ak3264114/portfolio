export const CGPA = 8.38

export const projects = [
    {
        id: 1,
        name: "EventStream",
        description: "A full-stack event management platform that allows event managers to create, post, and manage events, while crew members can apply to gigs with a cover letter.",
        imageUrl: "/EventStreamImage.png",
        liveUrl: "https://event-stream.vercel.app/",
        frontend: "https://github.com/ak3264114/event-stream-ui",
        backend: "https://github.com/ak3264114/event-stream-backend",
        tags: ["Next.js", "React.js", "Node.js", "MongoDB", "Tailwind CSS", "AdminJS"],
        highlights: [
            "Implemented role-based dashboards for event managers and crew members",
            "Integrated Google Places API for location-based search",
            "Used AdminJS for managing admin tasks in the backend"
        ]
    },
    {
        id: 2,
        name: "CodeMore",
        description: "A web app for coders to compete and compare performance with friends based on LeetCode profiles.",
        imageUrl: "/CodeMoreImage.png",
        liveUrl: "https://code-more-frontend.vercel.app/",
        frontend: "https://github.com/ak3264114/code-more-frontend",
        backend: "https://github.com/ak3264114/code-more-backend",
        tags: ["React.js", "Node.js", "MongoDB", "Bootstrap", "GraphQL"],
        highlights: [
            "Integrated LeetCode GraphQL API to fetch and display user data",
            "Designed performance dashboards for visual comparison",
            "Implemented user authentication for secure access"
        ]
    },
    {
        id: 3,
        name: "AuctionIt",
        description: "A real-time auction platform where users can list items, place bids, and buy/sell products.",
        imageUrl: "/AuctionItImage.png",
        liveUrl: "https://auction-it-liard.vercel.app/",
        frontend: "https://github.com/ak3264114/auction-it-frontend",
        backend: "https://github.com/ak3264114/auction-it-backend",
        tags: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "WebSockets"],
        highlights: [
            "Enabled real-time bidding using WebSockets",
            "Built item listing and filtering functionality",
            "Integrated secure user authentication"
        ]
    },
    {
        id: 4,
        name: "Mini Notes",
        description: "An AI-powered note-taking application that allows users to write, organize, and summarize notes efficiently.",
        imageUrl: "/MiniNotesImage.png",
        liveUrl: "https://mini-notes-one.vercel.app/",
        frontend: "https://github.com/ak3264114/mini-notes-frontend", // if exists
        backend: "", // if applicable
        tags: ["React.js", "OpenAI API", "Tailwind CSS"],
        highlights: [
            "Integrated OpenAI API for note summarization",
            "Created minimal, distraction-free writing interface",
            "Deployed for seamless access and usability"
        ]
    }
];
