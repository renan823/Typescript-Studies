class Person{

    private name: string;
    private age: number;
    private married: boolean;

    constructor(name: string, age: number, married: boolean) {
        this.name = name;
        this.age = age;
        this.married = married;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }

    public getAge(): number {
        return this.age;
    }

    public setAge(age: number) {
        this.age = age;
    }

    public getMarried(): boolean {
        return this.married;
    }

    public setMarried(married: boolean) {
        this.married = married
    }
}

let person: Person = new Person("John", 35, false);
console.log(person.getName());
