function getRandom()
{
    let min = document.getElementById("min-value").value;
    let max = document.getElementById("max-value").value;
    let gotValue = Math.floor(Math.random() * (max - min) + min-1);
    document.getElementById("answer").value = gotValue;
}

function clearAll()
{
    document.getElementById("min-value").value = "";
    document.getElementById("max-value").value = "";
    document.getElementById("answer").value = "";
}