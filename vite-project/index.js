import * as Hypixel from "hypixel"
const client = new Hypixel({ key: '3a8f73f9-b39a-493d-8d5e-44698b00af8a' });

client.getFriends("MNRMax", (err, friends) => {
    console.log(friends)
 });    
