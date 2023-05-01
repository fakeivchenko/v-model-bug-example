<template>
    <slot v-if="this.response" :.="this.response.result"/>
</template>

<script lang="ts">
import {Vue, ComponentBase, Prop} from 'vue-facing-decorator';

@ComponentBase
export default class BaseComponent<T> extends Vue {
    @Prop promise: Promise<T>
    private response!: {
        error: any
        result: T
    } = {}

    beforeMount() {
        this.promise
            .then(value => {
                this.response.result = value
            })
            .catch(error => this.response.error = error)
    }
}
</script>