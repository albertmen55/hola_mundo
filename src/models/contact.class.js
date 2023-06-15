export class Contact {
    name = '';
    subname = '';
    email = '';
    conected = false;

    constructor(name, subname, email, conected) {
        this.name = name;
        this.subname = subname;
        this.conected = conected;
        this.email = email;
    }
}