function foundWaldo() {
    window.scrollTo(0, 0);
    document.getElementById("endText").style = "background-color:aquamarine;border:dashed;text-align:center";
    document.getElementById("endText").innerText = "✅Level Solved!";
    alert("Congratulations! You found Waldo!")
    return false;
}