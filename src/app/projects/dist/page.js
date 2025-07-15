"use strict";
exports.__esModule = true;
var projects = [
    { name: "Administrador de Tareas con Python", description: "Este proyecto Python proporciona una manera simple de gestionar tareas." },
    { name: "Yani´s Kitchen", description: "Aplicación web de un restaurante" },
];
function ProjectsPage() {
    return (React.createElement("div", null,
        React.createElement("h1", null, "Mis Proyectos"),
        React.createElement("ul", null, projects.map(function (p, i) { return (React.createElement("li", { key: i },
            React.createElement("strong", null, p.name),
            ": ",
            p.description)); }))));
}
exports["default"] = ProjectsPage;
