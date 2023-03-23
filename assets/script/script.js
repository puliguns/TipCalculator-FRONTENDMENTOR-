// DECLARACIÓN DE VARIABLES
//   
const $BillInput = document.getElementById("bill-input");
const $Buttons = document.getElementById("percent-buttons");

const $CustomButton = document.getElementById("Custom-button");
const $PeopleQuantity = document.getElementById("people-input");
const $TipAmount = document.getElementById("TipAmount");
const $TotalAmount = document.getElementById("TotalAmount");
const $ResetButton = document.getElementById("reset-button");


let percent = 1;
$CustomButton.setAttribute("placeholder", "Custom");

$TipAmount.insertAdjacentText("afterbegin", "0.00");
$TotalAmount.insertAdjacentText("afterbegin", "0.00");

// FUNCIONES Y VALIDACIONES
// 









const refreshTotals = () => {
    let TipAmount = ($BillInput.value * percent) / $PeopleQuantity.value;
    let TotalAmount = $BillInput.value / $PeopleQuantity.value + TipAmount;

    $TotalAmount.textContent = TotalAmount.toFixed(2)
    $TipAmount.textContent = TipAmount.toFixed(2)
        // 
    if (!isFinite($TipAmount.textContent)) {
        $TipAmount.textContent = "0.00 ";
    }
    if (!isFinite($TotalAmount.textContent)) { $TotalAmount.textContent = "0.00"; }

};








// BILL INPUT

$BillInput.addEventListener("input", (e) => {
        refreshTotals()
    }

)


// TIP SELECTOR %

// $Buttons.forEach(el =>
//     el.addEventListener("click", (e) => {
//         percent = parseInt(e.target.textContent) / 100;
//         console.log(`El valor de percent es ${percent}`);
//         refreshTotals()
//         return;
//     }))

$Buttons.addEventListener("click", (e) => {

    if (e.target.getAttribute("id") === "percent-button") {
        let ButtonClass = e.target.getAttribute("class");


        console.log(e.target.textContent);
        percent = parseInt(e.target.textContent) / 100;
        console.log(`El valor de percent es ${percent}`);
        refreshTotals();

    }



})

// CUSTOM BUTTON 


$CustomButton.addEventListener("input", (e) => {
            percent = (e.target.value) / 100;
            refreshTotals()

        }

    )
    //PEOPLE QUANTITY SELECTOR


$PeopleQuantity.addEventListener("input", (e) => {
    console.log($PeopleQuantity.value);
    refreshTotals()
})


// RESULTS SECTION 


$BillInput.addEventListener("input", () => {
    console.log($BillInput.value, percent, $PeopleQuantity.value)

})



// RESET BUTTON

$ResetButton.addEventListener("click", () => {

    $BillInput.value = 0;
    $PeopleQuantity.value = 0;
    percent = 1;
    $CustomButton.value = null;
    $CustomButton.setAttribute("placeholder", "Custom");
    refreshTotals()

})

