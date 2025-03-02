import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Macéo",
  lastName: "Bonalair",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Développeur Backend",
  avatar: "/images/avatar.jpg",
  location: "Europe/Paris", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Français", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Zeyrin",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/mbonalair/",
  },
  // {
  //   name: "X",
  //   icon: "x",
  //   link: "",
  // },
  {
    name: "Email",
    icon: "email",
    link: "mailto:maceo.bonalair@gmail.com",
  },
];

const home = {
  label: "Acceuil",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: (
    <>
      {person.firstName} {person.lastName}{" "}
    </>
  ),
  subline: (
    <>
      Je suis un développeur backend et accompagnateur pédagogique à{" "}
      <a target="_blank" href="https://www.epitech.eu/">
        <InlineCode>Epitech</InlineCode>
      </a>
      , où je crée des projets et solutions intuitives et ancrées dans la
      réalité.
      <br />
      Dans mon temps libre, je crée mes propres projets.
    </>
  ),
};

const about = {
  label: "À propos",
  title: "À propos de moi",
  description: `Découvrez ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Ingénieur backend basé à Paris, je maîtrise l'art de transformer des
        défis complexes en solutions simples et efficaces. Mon expertise s'étend
        à la conception d'architectures avancées, la création d'expériences
        interactives et l'harmonisation des interactions entre l'utilisateur et
        la technologie.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Éxperiences Professionelles",
    experiences: [
      {
        company: "Epitech",
        timeframe: "Actuel",
        role: "Accompagnateur Pédagogique",
        achievements: [
          <>
            Enseignement de la programmation pour des étudiants de Licence 1 à
            Master 2, avec un focus sur le développement web et les technologies
            modernes.
          </>,
          <>
            Conception et animation de cours spécialisés en PHP et Laravel,
            couvrant les fondamentaux (MVC, routing, migrations) ainsi que des
            concepts avancés (API REST, middleware, optimisation des
            performances).
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/c.jpg",
            alt: "Epitech Bordeaux",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "DataAnnotationTech",
        timeframe: "2024 1+ An",
        role: "Développeur IA Backend",
        achievements: [
          <>
            Développement de scripts en PHP et autres langages pour l'annotation
            et le traitement de données destinées à la formation de modèles IA,
            avec un focus sur la création de solutions backend robustes.
          </>,
          <>
            Formation de modèles IA pour la génération de code en PHP,
            Javascript, Python, avec un focus sur l'amélioration continue des
            algorithmes.
          </>,
          <>
            Contribution à des modèles IA (Meta, OpenAI) précis et performants,
            avec une expertise renforcée en intégration IA.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/DataTechAcceuil.jpg",
            alt: "NagraVision",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "NagraVision - Kudelski Group",
        timeframe: "2023 - 6 Mois",
        role: "Test Engineer Trainee",
        achievements: [
          <>
            Développement et maintien d’un outil d’analyse d'une flotte de tests
            de certification lors de la pré-intégration de notre solution de TV
            satellite. Immersion dans une culture d'excellence, influençant ma
            vision de l'ingénierie et présentation des projets auprès des
            Stakeholders.
          </>,
          <>
            Affinage des compétences techniques Backend dans un environnement
            international de pointe intégralement en anglais.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/Nagra.jpg",
            alt: "NagraVision",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Networth Platform",
        timeframe: "2023 - 4 Mois",
        role: "Chef de Projet Backend",
        achievements: [
          <>
            Direction stratégique d'une équipe de développeurs Backend pour la
            mise en œuvre d'une plateforme de gestion du marketing international
            de marques de luxe prestigieuses (Chanel, COTY).
          </>,
          <>
            Développement et optimisation de la plateforme pour répondre aux
            besoins spécifiques des marques.
          </>,
          <>
            Perfectionnement des compétences en leadership, gestion de projet,
            communication et résolution de problèmes
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/Networth.jpg",
            alt: "NagraVision",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Jots",
        timeframe: "2022 - 3 Mois",
        role: "Développeur Mobile",
        achievements: [
          <>
            Réalisation d'une recherche approfondie pour comprendre le public
            cible et ses besoins.
          </>,
          <>
            Utilisation de Figma pour concevoir des maquettes et des wireframes
            afin de traduire les fonctionnalités de l'application en designs
            visuellement attractifs et interactifs.
          </>,
          <>
            Collaboration étroite avec des spécialistes en IA pour intégrer des
            fonctionnalités intelligentes dans l'application.
          </>,
          <>
            Maintien d'une communication ouverte et d'une approche
            collaborative, ce qui m'a permis de résoudre rapidement et
            efficacement les problèmes.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/Jots.jpg",
            alt: "Jots",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Bodyo",
        timeframe: "2021 - 4 Mois",
        role: "Développeur Mobile",
        achievements: [
          "Création d'une feuille de route définissant les objectifs, les jalons et les délais du projet.",
          "Mise en place d'une infrastructure agile, impliquant l'établissement de cycles de développement itératifs et la réalisation de réunions quotidiennes.",
          "Contribution active à la conception et à l'implémentation des fonctionnalités de l'application en collaboration étroite avec les designers et les développeurs.",
        ],
        images: [
          {
            src: "/images/projects/project-01/Bodyo.jpg",
            alt: "Bodyo",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Ellcie Healthy",
        timeframe: "2017 - 6 Mois",
        role: "Développeur - Data Scientist",
        achievements: [
          "Développement d'algorithmes pour analyser le comportement oculaire et conception de systèmes de détection du sommeil de pointe pour les conducteurs.",
          "Intégration de ces algorithmes dans des lunettes connectées intelligentes et extension de leur application en les utilisant avec un simulateur de conduite.",
        ],
        images: [
          {
            src: "/images/projects/project-01/Ellcie.jpg",
            alt: "Ellcie Healthy",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Formation",
    institutions: [
      {
        name: "Epitech l’école de l’excellence informatique.",
        description: (
          <>
            Langages de programmation, ingénierie logicielle, cybersécurité et
            intelligence artificielle. Des expériences d'apprentissage
            pratiques, mettant l'accent sur la gestion de projets et la
            résolution de problèmes en autonomie.
          </>
        ),
      },
      {
        name: "Une internationalisation",
        description: (
          <>
            Une année à Barcelone, alliant une éducation de premier plan à la
            scène technologique dynamique de la ville. J'ai acquis une
            exposition internationale, développé des compétences variées et
            adopté le mode de vie enchanteur de Barcelone.
          </>
        ),
      },
      {
        name: "Une expertise",
        description: (
          <>
            Spécialisation en développement backend, avec une maîtrise
            approfondie de PHP et Laravel. Conception et optimisation de
            solutions robustes, évolutives et performantes pour répondre aux
            besoins des utilisateurs.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Compétences techniques",
    skills: [
      {
        title: "PHP",
        description: (
          <>
            Développement backend avec PHP, création de solutions robustes et
            évolutives, maîtrise des concepts MVC, routing, et migrations.
          </>
        ),
        images: [],
      },
      {
        title: "Laravel",
        description: (
          <>
            Spécialisation en Laravel pour la création d'applications web
            modernes, intégration d'API REST, gestion de bases de données, et
            optimisation des performances.
          </>
        ),
        images: [],
      },
      {
        title: "MySQL & PostgreSQL",
        description: (
          <>
            Gestion de bases de données relationnelles avec MySQL et PostgreSQL,
            optimisation des requêtes et gestion de la persistance des données
            avec Eloquent ORM.
          </>
        ),
        images: [],
      },
      {
        title: "Firebase",
        description: (
          <>
            Intégration de Firebase pour la gestion de bases de données en temps
            réel et l'authentification d'utilisateurs dans des applications
            backend.
          </>
        ),
        images: [],
      },
      {
        title: "Git & CI/CD",
        description: (
          <>
            Gestion de versions avec Git, mise en place de pipelines CI/CD pour
            automatiser les tests, déploiements et intégration continue des
            applications.
          </>
        ),
        images: [],
      },
      {
        title: "Docker",
        description: (
          <>
            Utilisation de Docker pour containeriser les applications et
            garantir leur portabilité, ainsi que pour simplifier le déploiement
            dans des environnements de production.
          </>
        ),
        images: [],
      },
      {
        title: "AWS & Azure",
        description: (
          <>
            Expérience avec les plateformes cloud AWS et Azure pour déployer des
            applications et gérer des services en ligne.
          </>
        ),
        images: [],
      },
      {
        title: "REST API",
        description: (
          <>
            Création d'APIs RESTful robustes et sécurisées, facilitant la
            communication entre différents services web et l'intégration avec
            des applications frontend.
          </>
        ),
        images: [],
      },
      {
        title: "Test Driven Development (TDD)",
        description: (
          <>
            Application de la méthode Test Driven Development pour garantir la
            qualité du code avec des tests unitaires automatisés et une
            couverture maximale des fonctionnalités.
          </>
        ),
        images: [],
      },
      {
        title: "HTML, CSS, JS",
        description: (
          <>
            Maîtrise des langages front-end HTML, CSS et JavaScript pour
            construire des interfaces web modernes et réactives, en garantissant
            une expérience utilisateur optimale.
          </>
        ),
        images: [],
      },
      {
        title: "Leadership & Gestion de Projet",
        description: (
          <>
            Direction stratégique d'équipes de développement, gestion de projets
            complexes et optimisation des processus pour livrer des solutions
            respectant les délais et le budget.
          </>
        ),
        images: [],
      },
      {
        title: "Adaptabilité & Travail à Distance",
        description: (
          <>
            Grande capacité à s'adapter à différents environnements de travail,
            en particulier en télétravail, avec un focus sur la collaboration,
            l'autonomie et l'efficacité.
          </>
        ),
        images: [],
      },
      {
        title: "Veille Technologique",
        description: (
          <>
            Passionné par l'innovation, l'IA, et l'écosystème open source, avec
            une participation active à des groupes comme Station F pour échanger
            sur les dernières tendances technologiques.
          </>
        ),
        images: [
          {
            src: "/images/projects/project-01/Stationf.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Figma",
        description:
          ((
            <>
              Création de prototypes interactifs et de wireframes pour divers
              projets.
            </>
          ),
          (
            <>
              Utilisation de Figma pour faciliter la communication entre les
              équipes en offrant un outil de conception collaborative et en
              temps réel.
            </>
          )),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/Figma.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],

    // skills: [
    //
    //   {
    //     title: "Next.js",
    //     description: (
    //       <>Building next gen apps with Next.js + Once UI + Supabase.</>
    //     ),
    //     // optional: leave the array empty if you don't want to display images
    //     images: [
    //       {
    //         src: "/images/projects/project-01/cover-04.jpg",
    //         alt: "Project image",
    //         width: 16,
    //         height: 9,
    //       },
    //     ],
    //   },
    // ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/projects/project-01/c.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/project-01/DataTechAcceuil.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/project-01/Nagra.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/project-01/Networth.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/project-01/Jots.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/project-01/Bodyo.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/project-01/Ellcie.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
