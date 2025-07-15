const projects = [
  { name: "Administrador de Tareas con Python", description: "Este proyecto Python proporciona una manera simple de gestionar tareas." },
  { name: "Yani´s Kitchen", description: "Aplicación web de un restaurante" },
];

export default function ProjectsPage() {
  return (
    <div>
      <h1>Mis Proyectos</h1>
      <ul>
        {projects.map((p, i) => (
          <li key={i}>
            <strong>{p.name}</strong>: {p.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
