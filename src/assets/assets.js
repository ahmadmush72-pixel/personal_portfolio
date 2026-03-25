import Me from "./img/me.jpg";
import Saas from "./img/saas.jpg";
import pg from "./img/pg.jpg";
import sn from "./img/sn.jpg";

const assets = {
  Me,
  Saas,
  sn,
  pg,
};
 export const projects = [
  {
    title: "NexuAnalytics SaaS",
    desc: "Real-time data visualization platform with multi-tenant support and Stripe integration.",
    languages: ["React", "Laravel"],
    category: "Saas",
    image: assets.Saas,
  },
  {
    title: "SyncCode IDE",
    desc: "Browser-based collaborative code editor with real-time compilation and chat features.",
    languages: ["Node.js", "SQL"],
    category: "Web App",
    image: assets.pg,
  },
  {
    title: "PayShield Gateway",
    desc: "Highly secure payment gateway API handling 10k+ requests per second with 99.9% uptime.",
    languages: ["PHP", "Laravel"],
    category: "API",
    image: assets.Me,
  },
];
export default assets;


