
    export interface Name {
        first: string;
        last: string;
    }

    export interface User {
        name: Name;
        location: string;
        department: string;
        motto: string;
        email: string;
        phone: string;
        guid: string;
    }

    export interface IEmployee {
        users: User[];
    }
    
    export interface Pair {
        giver: User;
        receiver: User;
    }