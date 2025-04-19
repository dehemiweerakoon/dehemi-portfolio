/* eslint-disable react-refresh/only-export-components */
import { HoverEffect } from "../ui/card-hover-effect";
export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Diabetes Detection System",
    description:
      "Full-stack System using Django for the backend and React for the frontend. The system analyzes patient health data to predict diabetes risk using machine learning algorithms, enhancing early diagnosis capabilities.",
    link: "https://diabetes-prediction-using-ml-front-end-master.vercel.app/",
    img:"p01.png"
  },
  {
    title: "Point of Sale (POS) System",
    description:
      "Designed and implemented a robust POS system with Spring Boot and MySQL backend, featuring JWT-based authentication, item and stock management, category handling, and Swagger-documented REST APIs. Integrated React for a modern, responsive frontend.",
    link: "https://github.com/dehemiweerakoon/pos-ijse-system",
     img:"p02.png"
  },
  {
    title: "Student Marking System",
    description:
      "Built a web application using React and Vite for efficient student performance tracking, providing user-friendly interfaces for entering, viewing, and managing student marks in real-time.",
    link: "https://github.com/dehemiweerakoon/student-marking-front",
     img:"p03.png"
  },
  {
    title: "Library Management System (C#)",
    description:
      "Desktop-based System in C# to handle book inventory, patron records, and loan transactions. Included features for adding and removing books, managing user accounts, tracking borrowed and returned items, and generating reports.",
    link: "https://github.com/dehemiweerakoon/Library-app",
     img:"p04.png"
  },
  {
    title: "Go API with File-based DB on Kubernetes",
    description:
      "Designed an API in Go that uses a text file as a database and deployed it on a local Kubernetes cluster using Minikube Kind on Windows. Demonstrate the skills in containerization, orchestration, and lightweight API design.",
    link: "https://github.com/dehemiweerakoon/Go-API-Design",
     img:"p05.png"
  },
  {
    title: "Movie App using Node JS with Mongo DB",
    description:
      "Built a RESTful movie management application using Node.js, Express, and MongoDB with Mongoose. The app allows users to perform CRUD operations on movie data, including adding, updating, deleting, and retrieving movie details with schema validation.",
    link: "https://github.com/dehemiweerakoon/final-node-genres",
     img:"p06.png"
  },
];

const Projects = () => {
  return (
    <>
      <div className="h-auto">
        <CardHoverEffectDemo />
      </div>
    </>
  );
};

export default Projects;
