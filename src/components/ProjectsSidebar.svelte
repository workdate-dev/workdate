<script lang="ts">
    import Plus from "../components/icons/Plus.svelte";
    import { projects, addProject } from "../stores/projects.svelte.ts";

    const defaultSidebarWidth = "26%";
</script>

{#snippet sidebaritem(id, icon, name, description)}
    <a href={`#p${id}`} class="px-6 py-4 flex align-center sidebar__item">
      <div class="btn btn--circle btn--plain mr-4">{icon}</div>
        <div class="overflow-hidden">
            <p class="font-medium">{name}</p>
            <p class="txt-small txt-secondary ellipsis">{description}</p>
        </div>
    </a>
{/snippet}

<nav class="flex h-full flex-column border-r sidebar no-scroll" style="width: {defaultSidebarWidth}">
    {#each projects as project}
        {@render sidebaritem(project.id, project.icon, project.name, project.description)}
    {/each}
    <div class="px-6 py-4">
        <button class="btn btn--circle btn--plain" onclick={addProject}>
            <Plus />
        </button>
    </div>
</nav>

<style>
    .sidebar {
        overflow-y: scroll;
    }

    .sidebar__item {
        &:hover {
            background-color: var(--color-bg-light);
        }
    }
</style>
