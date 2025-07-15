"use strict";
exports.__esModule = true;
exports.metadata = void 0;
require("./globals.css");
var link_1 = require("next/link");
exports.metadata = {
    title: "Donoban Andrés Peralta Gutierrez",
    description: "Informacion Personal y Proyectos"
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "es" },
        React.createElement("body", null,
            React.createElement("header", { className: "centered-page" },
                React.createElement("h1", { style: { fontSize: "2rem", fontWeight: "bold" } }, "Donoban Andr\u00E9s Peralta Gutierrez"),
                React.createElement("p", { style: { fontSize: "1.1rem" } }, "Estudiante de Ingenier\u00EDa en Sistemas"),
                React.createElement("nav", { style: { marginTop: "1.5rem" } },
                    React.createElement(link_1["default"], { href: "/", style: { margin: "0 1rem" } }, "Inicio"),
                    React.createElement(link_1["default"], { href: "/contact", style: { margin: "0 1rem" } }, "Contacto"),
                    React.createElement(link_1["default"], { href: "/projects", style: { margin: "0 1rem" } }, "Proyectos"))),
            React.createElement("main", { className: "centered-page" }, children))));
}
exports["default"] = RootLayout;
