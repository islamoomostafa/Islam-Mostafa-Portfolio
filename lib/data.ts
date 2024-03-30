import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { FaNodeJs } from "react-icons/fa";
import { PiFigmaLogoThin } from "react-icons/pi";

import FayrouzKhan from "@/public/FayrouzKhan.png";
import PomodoroTimer from "@/public/PomodoroTimer.png";
import UrlShortner from "@/public/UrlShortner.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Ui Designer - Graphic Designer",
    location: "Freelancer",
    description:
      "I have been working as a graphic designer since 2015, continually enhancing my skills in Photoshop for UI design, utilizing Figma.",
    icon: React.createElement(PiFigmaLogoThin),
    date: "2021",
  },
  {
    title: "Graduated",
    location: "Alexandria, Egypt",
    description:
      "I graduated from  Faculty of Engineering at Alexandria University after studying computer engineering and communications.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Social Media designer",
    location: "Elsawy Culturewheel, Giza, Egypt",
    description:
      "Social media designer for 2 years. I also upskilled to be a full stack developer.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Freelancer",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes Next.js, TypeScript, Tailwind, Node.js and MongoDB. I'm open to full-time opportunities. I'm also upskilling my experience in the field of Linux and Docker.",
    icon: React.createElement(FaNodeJs),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Fayrouz Khan E-Commerce Website",
    description:
      "A Full-stack project and I used Next.js for Front-End and for Back-End I used Clerk for auth., Strapi for the DB and Stripe as a payment getway.",
    tags: ["React.js", "Next.js" , "Strapi & Clerck", "Stripe"],
    imageUrl: FayrouzKhan,
    demo: "fayrouzkhan.vercel.app",
  },
  {
    title: "Pomodoro Timer",
    description:
      "Pomodoro Timer is a simple and customizable timer application designed to help you boost your productivity using the Pomodoro Technique.",
    tags: [, "HTML", "CSS", "JavaScript"],
    imageUrl: PomodoroTimer,
    demo: "https://pomodoro-timer-six-green.vercel.app/",
  },
  {
    title: "URL Shortener",
    description:
      "This is a simple URL shortener web application that allows you to shorten long URLs.",
    tags: [, "HTML", "CSS", "JavaScript"],
    imageUrl: UrlShortner,
    demo: "https://url-shortener-hazel-ten.vercel.app/",
  },
] as const;

export const skillsData = [
  { name: "HTML", imageUrl: "/Icons/html.svg" },
  { name: "CSS", imageUrl: "/Icons/css.svg" },
  { name: "Saas", imageUrl: "/Icons/saas.svg" },
  { name: "JavaScript", imageUrl: "/Icons/javascript.svg" },
  { name: "TypeScript", imageUrl: "/Icons/typescript.svg" },
  { name: "React", imageUrl: "/Icons/react.svg" },
  { name: "Next.js", imageUrl: "/Icons/nextjs.svg" },
  { name: "Node.js", imageUrl: "/Icons/nodejs.svg" },
  { name: "Express.js", imageUrl: "/Icons/express.svg" },
  { name: "MongoDB", imageUrl: "/Icons/mongodb.svg" },
  { name: "Linux.js", imageUrl: "/Icons/linux.svg" },
  { name: "Docker.js", imageUrl: "/Icons/docker.svg" },
  { name: "SQL", imageUrl: "/Icons/sql.svg" },
  { name: "Git", imageUrl: "/Icons/git.svg" },
  { name: "Tailwind", imageUrl: "/Icons/tailwind.svg" },
  { name: "Bootstrap", imageUrl: "/Icons/bootstrap.svg" },
  { name: "Figma", imageUrl: "/Icons/figma.svg" },
  { name: "Photoshop", imageUrl: "/Icons/photoshop.svg" },
  { name: "Canva", imageUrl: "/Icons/canva.svg" },
] as const;

const social_media = [
  {
    id: 1,
    name: "facebook",
  },
  {
    id: 2,
    name: "instagram",
  },
  {
    id: 3,
    name: "tiktok",
  },
  {
    id: 4,
    name: "whatsapp",
  },
];

export default social_media;
