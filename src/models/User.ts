export default class User {
    login: string
    active: boolean

    constructor(login: string, active: boolean) {
        this.login = login;
        this.active = active;
    }
}