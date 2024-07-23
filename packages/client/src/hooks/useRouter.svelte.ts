import type { RouterState } from 'src/lib/router';
import router from 'src/lib/router';

export function useRouter() {
    let route = $state(router.state);

    $effect(() => {
        const onRouteChange = (state: RouterState) => {
            route = state;
        };
        router.onRouteChange.addListener(onRouteChange);

        return () => router.onRouteChange.removeListener(onRouteChange);
    });

    return {
        get route() {
            return route;
        }
    };
}
