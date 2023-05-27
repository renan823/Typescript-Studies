enum Situation {
    ERROR = 'Error',
    WARNING = 'Warning',
    INFO = 'Info',
    SUCCESS = 'Success',
    WAITING = 'Waiting'
}

class City {

    private name: string;
    private country: string;
    private lat: number;
    private lon: number;

    constructor(name: string, country: string, lat: number, lon: number) {
        this.name = name;
        this.country = country;
        this.lat = lat;
        this.lon = lon;
    }
}

class Travel {

    private code: string;
    private situation: string;
    private origin: City;
    private destination: City;

    constructor(code: string, situation: string, origin: City, destination: City) {
        this.code = code;
        this.situation = situation;
        this.origin = origin;
        this.destination = destination;
    }

    public getCode(): string {
        return this.code;
    }
}

let city: City = new City("São Paulo", "Brasil", 27.890, 20.566);
let travel: Travel = new Travel("1234567890", Situation.WAITING , city, city);

console.log(travel);