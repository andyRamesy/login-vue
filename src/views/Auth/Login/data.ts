interface Ilogin{
    id:number,
    placeholder: string,
    label?: string,
    name: string
}

export const loginData: Ilogin [] = [
    {
        id: 0,
        placeholder: "username",
        name: "username"
    },
    {
        id: 1,
        placeholder: "password",
        name: "password"
    }
] ;