<script lang="ts">
import {Component} from "vue-facing-decorator";
import BaseComponent from "./BaseComponent.vue";
import User from "../models/User.ts";

@Component({
    name: "UserComponent",
    mixins: [BaseComponent]
})
export default class UserComponent extends BaseComponent<User>{
}
</script>
