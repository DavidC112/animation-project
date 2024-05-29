let db= 0
function Change()
{
    db++;
    if(db%2 == 1)
    {
    const container = document.getElementById("container");
    const window1 = document.getElementById("window1");
    const window2 = document.getElementById("window2");
    container.style.backgroundColor = "black";
    container.style.transition = "15s";
    const sun = document.getElementById("sun");
    sun.style.backgroundColor = "orange";
    sun.style.transition = "margin-left 10s, background-color 10s";
    sun.style.marginLeft = "90%";
    sun.addEventListener("transitionend", () => {
            sun.style.visibility = "hidden";
            sun.style.backgroundColor="lightgrey";
            sun.style.marginLeft="0%"
            sun.style.visibility="visible";
            sun.style.transition = "0s";
            window1.style.backgroundColor="yellow";
            window2.style.backgroundColor="yellow";
        }, );
    }

    else if(db %2 == 0)
    {
        Moon();
    }
    console.log(db);
}


function Moon()
{
    const container = document.getElementById("container");
    const window1 = document.getElementById("window1");
    const window2 = document.getElementById("window2");
    container.style.backgroundColor = "darksalmon";
    container.style.transition = "15s";
    const sun = document.getElementById("sun");
    sun.style.transition = "margin-left 10s";
    sun.style.marginLeft = "90%";
    sun.addEventListener("transitionend", () => {
            sun.style.visibility = "hidden";
            sun.style.backgroundColor="yellow";
            sun.style.marginLeft="0%"
            sun.style.visibility="visible";
            sun.style.transition = "0s";
            container.style.backgroundColor = "aqua";
            container.style.transition = "0s"
            window1.style.backgroundColor="lightblue";
            window2.style.backgroundColor="lightblue";
        }, );
}