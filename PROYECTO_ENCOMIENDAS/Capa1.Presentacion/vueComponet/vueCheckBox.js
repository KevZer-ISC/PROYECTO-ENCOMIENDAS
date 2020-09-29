Vue.component('vue-checkbox', {
    data: function () {
        return {
            isActivea: this.isActive
        }
    },

    props: {
        isActive: { type: Boolean, required: true, default: false }
    },
    computed: {
        Activo() {
            this.$emit('update:isActive', this.isActivea);
            if (this.isActivea) {
                return 'btn active btn-success';
            } else {
                return 'btn btn-default';
            }
        },
        InActivo() {
            //this.isActive = false;   
            this.$emit('update:isActive', this.isActivea);
            if (!this.isActivea) {
                return 'btn active btn-danger';
            } else {
                return 'btn btn-default';
            }
        }
    },
    template: '<div class="btn-group vue-checkbox" tabindex="0"><a v-on:click="isActivea=true" v-bind:class="[Activo]" > SI</a><a v-on:click="isActivea=false" v-bind:class="[InActivo]">NO</a></div >'
})
