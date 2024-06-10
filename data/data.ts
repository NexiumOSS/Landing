const currentYear = new Date().getFullYear();
const data = {
    sitename: "Nexium",
    sitetagline: "Are you a Discord server owner in search of exceptional moderators and talented developers? Look no further! Nexium is here to revolutionize the way you connect with top-notch talent in the Discord community.",
    siteurl: "https://discord.gg/3jubZ9uSTD",
    sitelogo: "",
    title: "See you soon 😉",
    description: "We can't wait to show you what we've been working on. Stay tuned for our live updates!",
    newsletterheading: "Stay tuned for our live updates!",
    copyrightText: `Copyright © ${currentYear} - Toxic Development`,
    socialIconsHeading: "Follow Us 📣",
    hideSubscribeForm: true,
    socialIcons: [
        {
            icon: "discord",
            link: "https://discord.gg/3jubZ9uSTD",
        },
        {
            icon: "github",
            link: "https://github.com/NexiumOSS",
        },
        {
            icon: "twitter",
            link: "https://x.com/NexiumApp",
        },
    ],
    hide :{
        subscribeForm: true,         
        header: false,
        content: false,
        footer: false,
    }
}

export default data;
