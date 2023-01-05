Vue.createApp({
    data() {
        return {
            perspective: 100,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            currentStyle: `
                transform: perspective(${this.perspective}px)
                rotateX(${this.rotateX}deg)
                rotateY(${this.rotateY}deg)
                rotateZ(${this.rotateZ}deg)
            `,
        }
    },

    methods: {
        reset() {
            this.perspective = 100;
            this.rotateX = 0;
            this.rotateY = 0;
            this.rotateZ = 0;
        },

        async copy() {
            let text = `transform: ${this.box.transform};`
            await navigator.clipboard.writeText(text);

            alert('Copied!')
        },
    },

    computed: {
        perspectiveValue() {
            return `${this.perspective}px;`
        },
        rotateXValue() {
            return `${this.rotateX}deg;`
        },
        rotateYValue() {
            return `${this.rotateY}deg;`
        },
        rotateZValue() {
            return `${this.rotateZ}deg;`
        },
        box() {
            return {
                transform: `perspective(${this.perspective}px)
                    rotateX(${this.rotateX}deg)
                    rotateY(${this.rotateY}deg)
                    rotateZ(${this.rotateZ}deg)
                `
            }
        }
    }
}).mount('#app');