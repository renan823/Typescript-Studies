class Plane {
    private code: string;
    private model: string;
    private maxPassengers: number;
    private maxCargo: number;

    constructor(code: string, model: string, passengers: number, cargo: number){
        this.code = code;
        this.model = model;
        this.maxPassengers = passengers;
        this.maxCargo = cargo;
    }

    getCode(): string {
        return this.code;
    }
}

class CityL {
    private name: string;
    private country: string;
    private lat: number;
    private lon: number;

    constructor(name: string, country: string, lat: number, lon: number){
        this.name = name;
        this.country = country;
        this.lat = lat;
        this.lon = lon;
    }
}

class Airport {
    private name: string;
    private code: string;
    private location: CityL;
    private planes: Plane[];

    constructor(name: string, code: string, location: CityL) {
        this.name = name;
        this.code = code;
        this.location = location;
        this.planes = [];
    }

    addPlane(plane: Plane): void {
        this.planes.push(plane);
    }

    getPlanes(): Plane[] {
        return this.planes;
    }

    removePlane(code: string): void {
        this.planes = this.planes.filter(plane => plane.getCode() !== code);
    }
}

const moscow: CityL = new CityL("Moscow", "Russia", 45.123, 23.987);
const london: CityL = new CityL("London", "United Kingdom", 51.507, -12.123);

const MA: Airport = new Airport("Moscow airport", "123", moscow);
const LA: Airport = new Airport("London airport", "456", london);

let boeing: Plane = new Plane("123", "Boeing 747", 110, 50);

LA.addPlane(boeing);
console.log(LA);