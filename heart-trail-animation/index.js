const bodyEl = document.querySelector("body")

bodyEl.addEventListener("mousemove", (event)=>{
    // console.log("event.offsetX");
    const xPos  = event.offsetX;
    const yPos = event.offsetY;
    const spanEl = document.createElement("span");
    spanEl.style.left= xPos +"px";
    spanEl.style.top= yPos +"px";
    const size =Math.random()*100;
    spanEl.style.width =size +"px";
    spanEl.style.height =size +"px";
    bodyEl.appendChild(spanEl);
    setTimeout(()=>{
        spanEl.remove();

    },3000)
}
// 👉 Was passiert:

// Jedes Mal, wenn du die Maus bewegst, wird ein neues <span> (Herz) erstellt.

// Es erscheint genau an der Mausposition.

// Die Herzgröße ist zufällig (0–100px).

// Nach 3 Sekunden wird das Herz aus dem DOM entfernt (um Speicher zu sparen).

// 💖 Endeffekt

// Wenn du die Seite öffnest und mit der Maus bewegst:

// erscheinen kleine Herzen an der Mausposition,

// fliegen nach oben,

// verändern ihre Farbe leicht,

// verschwinden nach einiger Zeit.

// Es ist also eine "Herzspur" (Heart Trail) Animation 🎨✨

);