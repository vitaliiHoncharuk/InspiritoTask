const myForm = document.getElementById("myForm");
const cancelBtn = document.getElementById("cancelBtn");


myForm.addEventListener("submit", e => {
    e.preventDefault();
});


cancelBtn.onclick = function () {
    let myArr = [...myForm.elements];
    myArr.filter(el => el.localName === "input").map(e => e.value = null);
    myArr.find(el => el.localName === "input")
};

function validateForm(form) {
    let myArr = [...form.elements];
    const [name, address, address2, city, state, zip] = form.elements;
    const inputsArray = myArr.filter(
        el => el.localName === "input" && el.id !== "inputAddress2"
    );
    const selectState = myArr.find(e => e.id === "inputState");  //State Field


    removeBorders(myArr);
    removeTextErrors(form.querySelectorAll('.form-group'));
    // Outuputing errors on empty fields
    if (selectState.value === "Choose...") textError("Please, select you State", selectState);
    inputsArray.filter(
        el => el.localName === "input" && el.id !== "inputAddress2"
    )
        .map(el => {
            if (el.value === '' || el.value === undefined) {
                textError(`Please,enter your ${el.name}`, el);
            }
        });

    //checking ranges
    function checkRanges(element, elementRangeMin, elementRangeMax) {
        if (element.value.length < elementRangeMin || element.value.length > elementRangeMax)
            textError(`Out of range! Expected range is ${elementRangeMin} - ${elementRangeMax}`, element);
    }

    checkRanges(name, 1, 100);
    checkRanges(address, 1, 100);
    checkRanges(address2, 1, 100);
    checkRanges(city, 1, 50);
    checkRanges(zip, 5, 5);


    if (myArr.find(el => (el.classList.contains('errorBorder') || el.classList.contains('textError'))) === undefined) {
        alert("Everything was fine, message send.");
    }


    function textError(text, elem) {
        let errorSpanElement = document.createElement('span');
        errorSpanElement.classList.add('textError');
        errorSpanElement.innerHTML = text;
        elem.classList.add('errorBorder');
        elem.parentElement.appendChild(errorSpanElement);
    }


    function removeTextErrors(formElements) {
        for (let i = 0; i < formElements.length; i++) {
            const textError = formElements[i].querySelector('.textError');
            if (textError) formElements[i].removeChild(textError);

        }
    }

    function removeBorders(formElements) {
        for (let i = 0; i < formElements.length; i++) {
            if (formElements[i].classList.contains('errorBorder'))
                formElements[i].classList.remove('errorBorder');
        }
    }

}
