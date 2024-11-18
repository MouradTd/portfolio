import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Mourad Arejdal",
  initials: "MA",
  url: "https://mourad-t.me",
  location: "Rabat ,Maroc",
  locationLink: "https://www.google.com/maps/place/rabat",
  description: "",
  summary:
    "En tant que développeur full-stack basé à Rabat, Maroc. Mes compétences incluent PHP, Laravel, Symfony, Node.js, SQL Server, MySQL, MongoDB, Java, Python, Git, Docker et Postman. J'ai développé et maintenu des applications ERP utilisant Laravel et Vue.js, en me concentrant sur la création d'APIs robustes, assurant une communication fluide entre le frontend et le backend, et en maintenant des standards élevés de qualité de code, de sécurité et de fiabilité. J'ai également une expérience dans le développement d'architectures microservices avec Java Spring Boot, utilisant des technologies comme Apache Kafka pour la messagerie asynchrone et Netflix Eureka pour la découverte de services. J'ai contribué aussi à des projets de développement web utilisant Symfony et AngularJS.",
  avatarUrl: "/logo.png",
  skills: [
    "VueJS",
    "React.js",
    "Angular.js",
    "Typescript",
    "Node.js",
    "Python",
    "Php",
    "Laravel",
    "MySQL",
    "Docker",
    "Java",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "mourad.arejdal@gmail.com",
    tel: "+212 628 952 624",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/MouradTd",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mourad-arejdal-216621226/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "NewEraCom",
      href: "https://neweracom.ma/",
      badges: [],
      location: "On Site",
      title: "Développeur Full Stack",
      logoUrl: "/logonec.webp",
      start: "Nov 2023",
      end: "Présent",
      description:
        "Développement et maintenance d'une application ERP utilisant les technologies Laravel et Vue.js, création de points d'accès API robustes, réalisation de tests approfondis pour la fiabilité et la fonctionnalité, et garantie de la conformité aux normes de codage et aux protocoles de sécurité.",
    },
    {
      company: "Proxisoft",
      badges: [],
      href: "https://www.proxisoft.ma/",
      location: "On Site",
      title: "Stagiaire Développeur Full Stack",
      logoUrl: "/proxisoft.png",
      start: "Mai 2023",
      end: "Aoû 2023",
      description:
        "Au sein de Proxisoft, j'ai joué un rôle significatif dans l'équipe, en intervenant activement dans divers tâches et projets. J'ai été particulièrement impliqué dans un projet où nous avons développé une application utilisant Symfony et AngularJS. Mes contributions ont aidé l'équipe à atteindre ses objectifs, et j'ai collaboré de manière étroite avec les autres pour assurer le succès du projet.",
    },
    {
      company: "ONSSA",
      badges: [],
      href: "https://www.onssa.gov.ma/",
      location: "On Site",
      title: "Stagiaire Développeur Full Stack",
      logoUrl: "/logo_onssa.jpg",
      start: "Avr 2022",
      end: "Mai 2022",
      description:
        "Au sein de l'ONSSA, j'ai conçu et développé une application de gestion de stock visant à suivre les produits et à automatiser les actions de chaîne logistique, y compris les transferts entre magasins. J'ai mis en place un système de suivi des emplacements des produits et de surveillance de leur statut de consommation, assurant une gestion de stock efficace et des opérations simplifiées.",
    },
  ],
  education: [
    {
      school: "Ismagi",
      href: "https://ismagi.ma",
      degree: "Ingenieur d'état en Informatique",
      logoUrl: "/ismagi.png",
      start: "2023",
      end: "2025",
    },
    {
      school: "Ismagi",
      href: "https://ismagi.ma",
      degree: "License en developpement web et mobile",
      logoUrl: "/ismagi.png",
      start: "2022",
      end: "2023",
    },
    {
      school: "ISTA",
      href: "https://www.ofppt.ma/",
      degree: "Technicien Spécialisé en Développement Informatique",
      logoUrl: "/ista.png",
      start: "2020",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "ISMAGI HUB",
      href: "",
      dates: "Jun 2024 - Aug 2024",
      active: true,
      description:
        "La plateforme joue un rôle central dans l'apprentissage, permettant aux enseignants de partager des ressources pédagogiques, et aux étudiants d'accéder aisément aux cours, de télécharger des documents et de participer à des activités participatives.Grâce à Cloudinary, la plateforme gère et stocke les ressources pédagogiques, offrant ainsi aux enseignants la possibilité de télécharger aisément leurs documents et aux étudiants d'y accéder rapidement en ligne.",
      technologies: [
        "Vuejs",
        "Javascript",
        "MongoDB",
        "Mongoose",
        "Bootstrap",
        "Cloudinary",
        "PrimeVue",
      ],
      links: [
        {
          type: "Repository",
          href: "https://github.com/MouradTd/ISMAGI-HUB",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/image.png",
      video: "",
    },
    {
      title: "MARSAM",
      href: "",
      dates: "Mar 2024 - Apr 2024",
      active: true,
      description:
        "A mobile application for managing student absences offers features such as automatic attendance tracking, data centralization, direct submission of justifications, automatic notifications, reporting tools, and an intuitive user interface. These features reduce time spent on absence management, improve data accuracy, and reduce the risk of document loss.",
      technologies: [
        "Ionic",
        "Typescript",
        "MySQL",
        "Laravel",
        "PHP",
        "Docker",
      ],
      links: [
        {
          type: "Source ionic",
          href: "https://github.com/MouradTd/ionic",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Source laravel",
          href: "https://github.com/MouradTd/ionic-back",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/marsam.png",
      video: "",
    },
    {
      title: "Gestion de Vente",
      href: "",
      dates: "Jun 2022 - Jul 2022",
      active: true,
      description:
        "Le but de l'application est de fournir aux gestionnaires des outils pour gérer leurs établissements et aux vendeurs un moyen d'obtenir des informations sur les produits et les prix pour faciliter le processus d'achat.",
      technologies: ["C#", "SQL Server", "WinForms"],
      links: [
        {
          type: "Source",
          href: "https://github.com/MouradTd/Gestion-de-vente-1.0",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/vente.jpeg",
      video: "",
    },
    {
      title: "Note App",
      href: "",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Cette application vous permet d'écrire toutes vos tâches quotidiennes et de ne plus jamais vous soucier de les oublier. C'est parce que notre système est conçu avec un système d'authentification.",
      technologies: ["AngularJs", "Typescript", "MongoDB", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://github.com/MouradTd",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/noteapp.jpeg",
      video: "",
    },
    {
      title: "Java Microservices",
      href: "",
      dates: "October 2024 - Present",
      active: true,
      description:
        "Ce projet est une architecture microservices implémentée avec Java, Spring Boot, Spring Cloud, Docker, Eureka et Kafka. Il comprend un service utilisateur, un service produit et un service de notification, chacun avec sa propre base de données et ses points d'accès API RESTful.",
      technologies: [
        "Java",
        "Spring Boot",
        "Spring Cloud",
        "Docker",
        "Eureka",
        "Kafka",
      ],
      links: [
        {
          type: "Repository",
          href: "https://github.com/MouradTd",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/java-microservice.png",
      video: "",
    },
  ],
} as const;
