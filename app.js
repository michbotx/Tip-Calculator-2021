const buttons = document.querySelectorAll('.tipButtons');
const resetButton = document.querySelector("#resetButton");
const inputForm = document.querySelectorAll("input");
const zeroSpan = document.querySelector("#zero")
const billInput = document.querySelector("#bill");
const numInput = document.querySelector("#numPeople");
const tipAmount = document.querySelector(".tipAmount");
const tipTotal = document.querySelector(".tipTotal");
const customTip = document.querySelector('.customTip')
const tipNum = document.querySelectorAll(".tipNum")

//what i learned: How to remove class properties a way to reset styles upon event listeners.

//alerts//
zeroSpan.hidden = true;

//run app//


//tip Buttons //

for (let button of buttons) {
    button.addEventListener("click", function(e) {
        e.preventDefault();
        resetActiveButton();
        if (button.classList.contains("customTip")) {
            button.classList.add("customtipActive")
            updateTipAmt();
        } else {
            button.classList.add("active")
            button.classList.remove("customtipActive")
        }
        activeResetBtn();
        updateTipAmt();
    });
}

for (let form of inputForm) {
    form.addEventListener("input", function () {
        activeResetBtn();
    });
}

//number input // 

numInput.addEventListener("change", function() {
    let req = false;
    if (numInput.value <= 0) {
        numInput.style.border = "1px solid red";
        zeroSpan.hidden = false;
    } else {
        numInput.style.border = "none"
        req = true;
        zeroSpan.hidden = true;
    }
    
})

// //reset calculator//
resetButton.addEventListener("click", function() {
    resetButton.disabled = true;
    resetButton.style.opacity = "0.3";
    billInput.value = '';
    numInput.value = '';
    tipAmount.innerText = "$0.00";
    tipTotal.innerText = "$0.00"
    resetActiveButton();
    customTip.value = "";
});

function resetActiveButton() {
    document.querySelectorAll(".active").forEach((button) => {
        button.classList.remove("active");
    });
    customTip.value = "";  
}

let activeResetBtn = function () {
    resetButton.style.opacity = "1";
    resetButton.disabled = false;
}

function updateTipAmt () {
    let billVal = parseInt(billInput.value);
    let tipVal = 0;
    let numVal = parseInt(numInput.value);
    
    if (customTip.value === "") {
        for (let btn of buttons) {
            if (btn.classList.contains("active")) {
                tipVal = parseInt(btn.innerText.slice(0,-1));
            }
        }
    } else {
        tipVal = parseInt(customTip.value);
    }
    if (billVal && numVal) {
        const finalTip = ((billVal*(tipVal/100)) / numVal);
        const finalTotal = ((billVal/numVal) + finalTip);
        tipAmount.innerText = `$${Math.round(finalTip*100) / 100}`;
        tipTotal.innerText = `$${Math.round(finalTotal*100) / 100}`;
    }
    
}

numInput.addEventListener("mouseout", updateTipAmt);
billInput.addEventListener("mouseout", updateTipAmt);
