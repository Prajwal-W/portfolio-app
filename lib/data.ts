import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import cryptoExplorer from "@/public/cryptoExplorer.png";
import sneakerHeads from "@/public/sneakerHeads.png";
import studentPortal from "@/public/studentPortal.png";

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
    title: "Graduated PG-Diploma",
    location: "Pune, MH",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a Back-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Back-End Developer",
    location: "Pune, MH",
    description:
      "I worked as a Back-end developer for 9 months, used Node.Js, Serverless framework and AWS. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Pune, MH",
    description:
      "I'm now a full-stack developer. My stack includes React, Nest.js, TypeScript, Material-UI, ContentStack and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "SneakerHeads",
    description:
      "A e-commerce website for buying and renting exclusive and high-end sneakers.",
    tags: ["React", "Java", "SpringBoot", "MySQL"],
    imageUrl: sneakerHeads,
  },
  {
    title: "Crypto Explorer",
    description:
      "This is a Project for getting current market data of Cryptos. Also can see the current chart for market patterns.",
    tags: ["React","Chart.Js"],
    imageUrl: cryptoExplorer,
  },
  {
    title: "Student faculty interaction portal",
    description:
      "A simple portal to connect with faculties and students, after school hours for queries and discussions.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: studentPortal,
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "HTML",
  "CSS",
  "Next.js",
  "Redux",
  "Node.js",
  "Serverless",
  "AWS",
  "NestJS",
  "Express",
  "Java",
  "Hibernate",
  "SpringBoot",
  "Git",
  "Material-UI",
  "Tailwind",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Framer Motion",
] as const;
