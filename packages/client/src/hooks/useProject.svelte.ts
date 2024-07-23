import { useRouter } from 'src/hooks/useRouter.svelte';
import { projects } from 'src/stores/projects.svelte';

export function useProject() {
    const router = useRouter();

    const current = $derived.by(() => {
        if (!router.route.projectId) {
            return undefined;
        }

        return projects.find(project => project.id === router.route.projectId);
    });

    return {
        get current() {
            return current;
        }
    };
}
