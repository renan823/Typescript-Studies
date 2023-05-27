class Item<T> {

    private value: T | undefined;

    constructor(value: T) {
        this.value = value;
    }

    public getValue(): T | undefined {
        return this.value;
    }

    public setValue(value: T): void{
        this.value = value;
    }

    public toString(): string {
        return `${this.value} é do tipo ${typeof(this.value)}`;
    }
}

let item: Item<string> = new Item("Jãozinho");
console.log(item.toString());

let item2: Item<number> = new Item(101);
console.log(item2.toString());