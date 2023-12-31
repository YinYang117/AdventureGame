const { Food } = require('./food');

class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
    }

    move(direction) {

        const nextRoom = this.currentRoom.getRoomInDirection(direction);

        // If the next room is valid, set the player to be in that room
        if (nextRoom) {
            this.currentRoom = nextRoom;

            nextRoom.printRoom(this);
        } else {
            console.log("You cannot move in that direction");
        }
    }

    printInventory() {
        if (this.items.length === 0) {
            console.log(`${this.name} is not carrying anything.`);
        } else {
            console.log(`${this.name} is carrying:`);
            for (let i = 0 ; i < this.items.length ; i++) {
                console.log(`  ${this.items[i].name}`);
            }
        }
    }

    takeItem(itemName) {
        // Picks up an item from the current room into the player's inventory
        let item = this.currentRoom.getItemByName(itemName);
        if(item) this.items.push(item)
    }

    dropItem(itemName) {
        let item = this.getItemByName(itemName);
        if (item) this.currentRoom.items.push(item)
    }

    eatItem(itemName) {
        let item = this.getItemByName(itemName)
        if (!(item instanceof Food)) { // If not food
            this.items.push(item) // Don't eat
        }
    }

    getItemByName(name) {
        for (let i = 0; i < this.items.length; i++) {
            let item = this.items[i]
            if (item.name === name) {
               return this.items.splice(i, 1)[0]
            }
        }
    }
}

module.exports = {
  Player,
};
