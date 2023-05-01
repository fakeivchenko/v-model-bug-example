<template>
    <UserComponent v-slot="user" :promise="this.getUser()">
        <h3>{{ user }}</h3>
        <h3>{{ user.login }}</h3>
    </UserComponent>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-facing-decorator';
import User from "./models/User.ts";
import UserComponent from "./components/UserComponent.vue";

@Component({
    components: {UserComponent}
})
export default class App extends Vue {
    getUser() {
        return new Promise<User>(resolve => {
            const user = new User("user@example.com", true);
            console.log(user)
            resolve(user)
        })
    }
}
</script>