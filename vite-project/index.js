const nameElement = document.getElementById("name")
const ign = document.getElementById("ign")
const submit = document.getElementById("submit")
const image = document.getElementById("image")

submit.addEventListener

function displaySkin(name) {
    console.log('test')
    let rawData = get(`https://api.ashcon.app/mojang/v2/user/${name}`)
    let data = JSON.parse(rawData)
    console.log()
    image.setAttribute('src', `https://crafatar.com/avatars/${data.uuid}?overlay&default=MHF_SAlex`)
}
function get(url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}