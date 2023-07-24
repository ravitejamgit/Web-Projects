function convert()
{
    let n = Number(document.getElementById("data").value);
    let k = Number(document.getElementById("baseValue").value);

    if(k == 2)
    {
        convertToBinary(n, k);
    }
    else
    {
        let res = 0;
        while (n != 0)
            res *= 10,
            res += n % k,
            n = ~~(n/k);

        document.getElementById("solution").style.display="block";
        document.getElementById("solution").value = reverseString(res.toString());
    }
}


function convertToBinary(x, base) 
{
    let bin = 0;
    let rem, i = 1, step = 1;
    while (x != 0) 
    {
        rem = x % base;
        x = parseInt(x / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    document.getElementById("solution").style.display="block";
    document.getElementById("solution").value = bin.toString();
}

function reverseString(str) 
{
    const arrayStrings = str.split("");
    const reverseArray = arrayStrings.reverse();
    const joinArray = reverseArray.join("");
    return joinArray;
}