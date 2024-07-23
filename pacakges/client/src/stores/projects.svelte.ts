export interface Project {
    id: number;
    name: string;
    description: string;
    icon: string;
}

export let projects: Project[] = $state([
    {
        id: 1,
        name: "Workdate",
        description: "A simple project management tool",
        icon: "🛠️",
    },
    {
        id: 2,
        name: "Tauri",
        description: "A toolkit for building web apps with Rust",
        icon: "🦀",
    },
    { id: 3, name: "Svelte", description: "A frontend framework", icon: "🦡" },
    { id: 4, name: "Vite", description: "A frontend build tool", icon: "⚡" },
]);

export function addProject() {
    projects.push({
        id: projects.length + 1,
        name: "New Project",
        description: "A new project",
        icon: "🆕",
    });
}
