const nameElement = document.getElementById("name")
const image = document.getElementById("image")

displaySkin("mnrmax")

function displaySkin(name) {
    let rawData = get(`https://api.mojang.com/users/profiles/minecraft/${name}`)
    let data = JSON.parse(rawData)
    
}
function get(url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}