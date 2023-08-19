class Item {
  constructor(name, description){
    this.name = name;
    this.description = description;
  }


}

module.exports = {
  Item,
};

/*
Item
    4) player.takeItem - Picks up an item from the current room into the player's inventory
    5) player.takeItem - When an item is taken, it is removed from the current room
    6) player.dropItem - Drops an item the player is holding into their current room
    7) player.dropItem - When an item is dropped, the player no longer has it

  Food
    8) Food should have name and description attributes
    9) A food should be an instance of Item and Food
    10) A food item can be eaten by a player
    ✔ An item cannot be eaten by a player if not a food item

  World
    11) loadWorld - A non-food item should be instantiated as an instance of the `Item` class
    12) loadWorld - A food item should be instantiated as an instance of the `Food` class
*/
