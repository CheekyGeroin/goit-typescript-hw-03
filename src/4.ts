class Key {
  private signature: number = Math.random();

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;
  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  public door: boolean = false;
  public key: Key;
  public tenants: Person[] = [];

    constructor(key:Key) {
      this.key = key
  }

  comeIn(person:Person):void {
      if (this.door) {
        this.tenants.push(person)
      console.log("Welcome home!");
    } else {
        console.log("The door is closed")
    }
  }

  abstract openDoor(key: Key):void
}

class MyHouse extends House {
  openDoor(key: Key): void {
      if (key.getSignature() === this.getHouseKey().getSignature()) {
          this.door= true
      }
  }
    getHouseKey():Key {
        return (this as any).key
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};