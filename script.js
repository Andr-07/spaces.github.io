new Vue({
    el: '#app',
    methods: {
        scrollTo(sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
});
