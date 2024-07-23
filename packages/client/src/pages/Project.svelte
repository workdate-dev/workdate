<script lang="ts">
    import { useProject } from 'src/hooks/useProject.svelte.ts';
    import ProjectsSidebar from '../components/ProjectsSidebar.svelte';
    import EllipsisHorizontalCircle from 'src/components/icons/EllipsisHorizontalCircle.svelte';

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
                    <div class="" style="height: 24px; width: 24px;">
                        <EllipsisHorizontalCircle />
                    </div>
                </div>
                <p>{project.current.description}</p>
            </div>
        {/if}
    </main>
</div>
