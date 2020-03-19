<template>
    <div>
        <button type="submit" class="btn btn-success btn-sm" @click.stop.prevent="redirectToWsapp()" style="margin-right: 5px;">
            <font-awesome-icon icon="people-carry"/> Book a Service
        </button>
    </div>
</template>

<script>
    export default {
        name: "WhatsappConnect",
        methods: {
            redirectToWsapp() {
                const wsappLink = 'https://wa.me/94768593729?text=Hi%20mm%20randika%20mata%20pissu';
                window.location.href = wsappLink;
            }
        }
    }
</script>

<style scoped>

</style>
