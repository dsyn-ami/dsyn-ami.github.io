let img = document.querySelector("img");
img.onclick = () =>
{
    let src = img.getAttribute("src");
    if(src == "DropItem/智慧之书.png")
    {
        img.setAttribute("src", "DropItem/瓜瓜.png");
    }
    else
    {
        img.setAttribute("src", "DropItem/智慧之书.png");
    }
};

let btn = document.querySelector("button");
let head = document.querySelector("h1");

function setUserName()
{
    let name = prompt("请输入你的名字")
    localStorage.setItem("name", name)
    head.textContent = "Mozilla cool, " + name
}

if(!localStorage.getItem("name"))
{
    setUserName();
}
else
{
    let storedName = localStorage.getItem("name")
    head.textContent = "Mozilla cool, " + storedName
}

btn.onclick = () =>
{
    setUserName()
}
