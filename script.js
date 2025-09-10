function openLogin() {
    document.getElementById("loginPopup").style.display = "block";
}

function closeLogin() {
    document.getElementById("loginPopup").style.display = "none";
}
function flipToRegister() {
    document.getElementById("flipCard").classList.add("flipped");
}
function flipToLogin() {
    document.getElementById("flipCard").classList.remove("flipped");
}

for (let i = 1; i <= 10; i++) {
    const btn = document.getElementById(`submit${i}`);
    const lab = document.getElementById(`lab${i}`);
    btn.onclick = function ()
     {
        let count = Number(lab.textContent);
        count++;
        lab.textContent = count;
    }
}  