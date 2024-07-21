<script lang="ts">
    import { useProject } from "src/hooks/useProject.svelte.ts";
    import ProjectsSidebar from "../components/ProjectsSidebar.svelte";
    import EllipsisHorizontal from "src/components/icons/EllipsisHorizontal.svelte";

    const project = useProject();
</script>

<div class="flex h-full overflow-hidden">
    <ProjectsSidebar />
    <main class="w-full">
        {#if !project.current}
            <div class="h-full flex justify-center align-center">
                <p>Select a project to start working on it.</p>
            </div>
        {:else}
            <div class="flex flex-column gap-6">
                <div class="flex align-center px-6 py-4">
                    <p class="font-medium mr-auto">{project.current.name}</p>
                    <button class="btn btn--small btn--circle btn--plain">
                        <EllipsisHorizontal />
                    </button>
                </div>
                <p>{project.current.description}</p>
            </div>
        {/if}
    </main>
</div>
