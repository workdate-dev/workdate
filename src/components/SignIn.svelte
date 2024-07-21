<script lang="ts">
    import SignIn from "./icons/SignIn.svelte";
</script>

<main class="mt-18 txt-large">
    <div class="page page--small">
        <h1 class="txt-align-center">Sign in to Workdate</h1>
        <p class="txt-secondary txt-align-center txt-small">
            Enter your email address and we'll send you a link to sign in.
        </p>
        <form class="flex flex-column gap-6 mt-9">
            <input
                class="input"
                placeholder="Email"
                type="email"
                id="email"
                name="email"
                required
            />
            <div class="center">
                <button class="btn btn--positive btn--circle" type="submit">
                    <SignIn />
                </button>
            </div>
        </form>
    </div>
</main>
