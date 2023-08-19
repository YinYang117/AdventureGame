const { Room } = require('./room');
const { Item } = require('./item');
const { Food } = require('./food');

class World {
    constructor() {
        this.rooms = {};
    }

    loadWorld(worldData) {

        const roomList = worldData.rooms;
        const itemList = worldData.items;

        // Instantiate new room objects
        // Get name, id and description from room data
        for (let i = 0; i < roomList.length; i++) {

            let roomData = roomList[i];
            let newRoom = new Room(roomData.name, roomData.description);

            this.rooms[roomData.id] = newRoom;
        }

        // Connect rooms by ID
        // Note that all rooms must be created before they can be connected
        for (let i = 0; i < roomList.length; i++) {

            let roomID = roomList[i].id;
            let roomConnections = roomList[i].exits;

            for (const direction in roomConnections) {
                let connectedRoomID = roomConnections[direction];
                let roomToConnect = this.rooms[connectedRoomID];
                this.rooms[roomID].connectRooms(direction, roomToConnect);
            }

        }

        // Use items in itemList to create item Instances
        for (let i = 0; i < itemList.length; i++) {
            let item = itemList[i];
            if (item.isFood) {
                let food = new Food(item.name, item.description)
                this.rooms[item.room].items.push(food)
            } else {
                let nonFoodItem = new Item(item.name, item.description)
                this.rooms[item.room].items.push(nonFoodItem)
            }
        }
    }
}

module.exports = {
    World,
};
