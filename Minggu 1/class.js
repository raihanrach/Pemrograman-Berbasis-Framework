//super class
class Holday {
    constructor(destination, days){
        this.destination = destination;
        this.days = days;
    }

    info(){
        alert(`${this.destination} will take ${this.days} days.`);
    }
}

//sub class
class Expedition extends Holday {
    constructor(destination, days, gear) {
        super(destination, days);
        this.gear = gear;
    }

    info(){
        super.info();
        alert(`Bring your ${this.gear.join(' and your ')}`);
    }
}

const tripWithGear = new Expedition('Semeru', 10, ['Sunglasses', 'Flags', 'Camera']);
tripWithGear.info();