function changeValue()
{

    // Initializing variables with the box element and input field element
    let box = document.getElementById("box");
    let inputvalue = document.getElementById("inpvalue");


    //Assing the box background color field with the provided input color value
    //This happens every time the input value is changed.(Even the single character is added or deleted.) 
    //This is because, I mentioned to oninput event in the input field.
    //"oninput" event occurs when the value of the element changed.
    box.style.backgroundColor = inputvalue.value;
}