class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }

  addPlayer() {
    var playerIndex = "players/player" + this.index;

    if (this.index === 1) {
      this.positionX = width / 2 - 100;
    } else {
      this.positionX = width / 2 + 100;
    }

    database.ref(playerIndex).set({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY
    });
  }
// read values from db
  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", (data) => {
      playerCount = data.val();
    });
  }
// update values into the db
  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    });
  }

  static getPlayersInfo() {
    var playerInfoRef=database.ref("players")
    playerCountRef.on("value",(data)=>{
      allPlayers=data.val()
    }) 
  }
}


// two things we do use from a database
// one is read position
// second one is update position

// readPOsition=we do 3 things
// 1) go to the location using .ref()
// 2) listen to the value using .on("value")
// 3) get the value using .val()

// updatePosition=we do 2 things
// 1) go to the location using .ref()
// 2) update the location using JSON format by .update({})
