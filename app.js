const initialPrice = document.querySelector('#initial-price');
const stocksQty = document.querySelector('#stocks-quantity');
const currPrice = document.querySelector('#current-price');
const submitbtn = document.querySelector('#submit-btn');
const outputEl = document.querySelector('#output-box');

submitbtn.addEventListener("click", submitHandeler);


function submitHandeler() {
    var ip = initialPrice.value;
    var qty = stocksQty.value;
    var curr = currPrice.value;

    calcPL(ip, qty, curr)

}

function calcPL(initial, quantity, current) {
    if (initial > current) {
        // loss
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;
        showOutput(`Loss is ${loss} and the percentage is ${lossPercentage}`)
    }
    else if (current > initial) {
        // profit
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;

        showOutput(`Profit is ${profit} and the pecentage  is ${profitPercentage}`);

    }
    else {
        // nill
        showOutput("no pain no gain, no gain no pain")
    }

};

function showOutput(msg) {
    outputEl.innerHTML = msg;
}



