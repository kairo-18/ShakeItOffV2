const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const num = document.querySelector(".num");
const ordersWrapper = document.querySelector(".orders-wrapper");
var orders = [];
var addons = [];
var size = [];
var quantity = [];
var price = [];
var x = 0;
let totalPrice = 0;

let a = 1;

plus.addEventListener("click", () => {
    a++;
    num.innerText = a;
});

minus.addEventListener("click", () => {
    if (a > 1) {
        a--;
        num.innerText = a;
    }
});

function showShakes() {
    document.getElementById("Shakes").style.display = "grid";
    document.getElementById("Milktea").style.display = "none";
    document.getElementById("FruitTea").style.display = "none";
    document.getElementById("FruitShake").style.display = "none";

    document.getElementById("title-label").innerText = "Shakes";
}

function showMilktea() {
    document.getElementById("Shakes").style.display = "none";
    document.getElementById("Milktea").style.display = "grid";
    document.getElementById("FruitTea").style.display = "none";
    document.getElementById("FruitShake").style.display = "none";

    document.getElementById("title-label").innerText = "Milktea";
}

function showFruitTea() {
    document.getElementById("Shakes").style.display = "none";
    document.getElementById("Milktea").style.display = "none";
    document.getElementById("FruitTea").style.display = "grid";
    document.getElementById("FruitShake").style.display = "none";

    document.getElementById("title-label").innerText = "FruitTea";
}

function showFruitShake() {
    document.getElementById("Shakes").style.display = "none";
    document.getElementById("Milktea").style.display = "none";
    document.getElementById("FruitTea").style.display = "none";
    document.getElementById("FruitShake").style.display = "grid";

    document.getElementById("title-label").innerText = "FruitShake";
}

function addOrderValueToArray(val) {
    orders[x] = val;
}
function addSizeValueToArray(val) {
    size[x] = val;
}
var temp = "";

function addAddonsValueToString(val) {
    if (temp === "") {
        temp = val;
        document.getElementById("addonsText").innerHTML = "Addons: " + temp;
    } else {
        temp += "," + val;
        document.getElementById("addonsText").innerHTML += "," + val;
    }
}

function addAddonsValueToArray() {
    addons[x] = temp;
}

function addQuantityValueToArray() {
    quantity[x] = a;
    DisplayArray();
}

function DisplayArray() {

    price[x] = 0;
    computeOrderAndSizePrices();
    computePriceWithQuantity();
    if (addons[x] != "") {
        computerAddonsPrices();
    }
    writeTotalPrice();

    var order =
        "" +
        orders[x] +
        " <strong>Size:</strong> " +
        size[x] +
        " <strong>Adns:</strong> " +
        addons[x] +
        " <strong>Qty:</strong> " +
        quantity[x] +
        "<strong> Price: </strong>" +
        price[x];
    ordersWrapper.innerHTML += "<span class='order'>" + order + "</span>";
    num.innerText = 1;
    document.getElementById("addonsText").innerHTML = "Addons: ";


    a = 1;
    x++;
    temp = "";
}

function computeOrderAndSizePrices() {
    if (orders[x] === "Milo Bits" && size[x] === "S") {
        price[x] += 35;
    } else if (orders[x] === "Milo Bits" && size[x] === "M") {
        price[x] += 55;
    } else if (orders[x] === "Milo Bits" && size[x] === "L") {
        price[x] += 65;
    } else if (orders[x] === "Cookies n' Cream" && size[x] === "S") {
        price[x] += 35;
    } else if (orders[x] === "Cookies n' Cream" && size[x] === "M") {
        price[x] += 55;
    } else if (orders[x] === "Cookies n' Cream" && size[x] === "L") {
        price[x] += 65;
    } else if (orders[x] === "Strawberry Jam" && size[x] === "S") {
        price[x] += 35;
    } else if (orders[x] === "Strawberry Jam" && size[x] === "M") {
        price[x] += 55;
    } else if (orders[x] === "Strawberry Jam" && size[x] === "L") {
        price[x] += 65;
    } else if (orders[x] === "Choco Mousse" && size[x] === "S") {
        price[x] += 35;
    } else if (orders[x] === "Choco Mousse" && size[x] === "M") {
        price[x] += 55;
    } else if (orders[x] === "Choco Mousse" && size[x] === "L") {
        price[x] += 65;
    } else if (orders[x] === "Cappuccino" && size[x] === "S") {
        price[x] += 35;
    } else if (orders[x] === "Cappuccino" && size[x] === "M") {
        price[x] += 55;
    } else if (orders[x] === "Cappuccino" && size[x] === "L") {
        price[x] += 65;
    } else if (orders[x] === "Coffee Jelly" && size[x] === "S") {
        price[x] += 35;
    } else if (orders[x] === "Coffee Jelly" && size[x] === "M") {
        price[x] += 55;
    } else if (orders[x] === "Coffee Jelly" && size[x] === "L") {
        price[x] += 65;
    } else if (orders[x] === "Cheesy Mango Graham" && size[x] === "S") {
        price[x] += 40;
    } else if (orders[x] === "Cheesy Mango Graham" && size[x] === "M") {
        price[x] += 60;
    } else if (orders[x] === "Cheesy Mango Graham" && size[x] === "L") {
        price[x] += 70;
    } else if (orders[x] === "Cheesy Mango Cheesecake" && size[x] === "S") {
        price[x] += 40;
    } else if (orders[x] === "Cheesy Mango Cheesecake" && size[x] === "M") {
        price[x] += 60;
    } else if (orders[x] === "Cheesy Mango Cheesecake" && size[x] === "L") {
        price[x] += 70;
    } else if (orders[x] === "Cheesy Cheesecake" && size[x] === "S") {
        price[x] += 40;
    } else if (orders[x] === "Cheesy Cheesecake" && size[x] === "M") {
        price[x] += 60;
    } else if (orders[x] === "Cheesy Cheesecake" && size[x] === "L") {
        price[x] += 70;
    } else if (orders[x] === "Strawberry Cheesecake" && size[x] === "S") {
        price[x] += 40;
    } else if (orders[x] === "Strawberry Cheesecake" && size[x] === "M") {
        price[x] += 60;
    } else if (orders[x] === "Strawberry Cheesecake" && size[x] === "L") {
        price[x] += 70;
    } else if (orders[x] === "Cheesy Graham" && size[x] === "S") {
        price[x] += 40;
    } else if (orders[x] === "Cheesy Graham" && size[x] === "M") {
        price[x] += 60;
    } else if (orders[x] === "Cheesy Graham" && size[x] === "L") {
        price[x] += 70;
    } else if (orders[x] === "Strawberry Cheesy Cheesecake" && size[x] === "S") {
        price[x] += 40;
    } else if (orders[x] === "Strawberry Cheesy Cheesecake" && size[x] === "M") {
        price[x] += 60;
    } else if (orders[x] === "Strawberry Cheesy Cheesecake" && size[x] === "L") {
        price[x] += 70;
    } //Milktea
    else if (orders[x] === "Wintermelon" && size[x] === "S") {
        price[x] += 35;
    } else if (orders[x] === "Wintermelon" && size[x] === "M") {
        price[x] += 55;
    } else if (orders[x] === "Wintermelon" && size[x] === "L") {
        price[x] += 65;
    } else if (orders[x] === "Okinawa" && size[x] === "S") {
        price[x] += 35;
    } else if (orders[x] === "Okinawa" && size[x] === "M") {
        price[x] += 55;
    } else if (orders[x] === "Okinawa" && size[x] === "L") {
        price[x] += 65;
    } else if (orders[x] === "Dark Choco" && size[x] === "S") {
        price[x] += 35;
    } else if (orders[x] === "Dark Choco" && size[x] === "M") {
        price[x] += 55;
    } else if (orders[x] === "Dark Choco" && size[x] === "L") {
        price[x] += 65;
    } else if (orders[x] === "Red Velvet" && size[x] === "S") {
        price[x] += 35;
    } else if (orders[x] === "Red Velvet" && size[x] === "M") {
        price[x] += 55;
    } else if (orders[x] === "Red Velvet" && size[x] === "L") {
        price[x] += 65;
    } else if (orders[x] === "Matcha" && size[x] === "S") {
        price[x] += 35;
    } else if (orders[x] === "Matcha" && size[x] === "M") {
        price[x] += 55;
    } else if (orders[x] === "Matcha" && size[x] === "L") {
        price[x] += 65;
    } else if (orders[x] === "Taro" && size[x] === "S") {
        price[x] += 35;
    } else if (orders[x] === "Taro" && size[x] === "M") {
        price[x] += 55;
    } else if (orders[x] === "Taro" && size[x] === "L") {
        price[x] += 65;
    } // Fruit Tea
    else if (orders[x] === "Green Apple" && size[x] === "S") {
        price[x] += 35;
    } else if (orders[x] === "Green Apple" && size[x] === "M") {
        price[x] += 55;
    } else if (orders[x] === "Green Apple" && size[x] === "L") {
        price[x] += 65;
    } else if (orders[x] === "Blueberry" && size[x] === "S") {
        price[x] += 35;
    } else if (orders[x] === "Blueberry" && size[x] === "M") {
        price[x] += 55;
    } else if (orders[x] === "Blueberry" && size[x] === "L") {
        price[x] += 65;
    } else if (orders[x] === "Kiwi" && size[x] === "S") {
        price[x] += 35;
    } else if (orders[x] === "Kiwi" && size[x] === "M") {
        price[x] += 55;
    } else if (orders[x] === "Kiwi" && size[x] === "L") {
        price[x] += 65;
    } else if (orders[x] === "Lychee" && size[x] === "S") {
        price[x] += 35;
    } else if (orders[x] === "Lychee" && size[x] === "M") {
        price[x] += 55;
    } else if (orders[x] === "Lychee" && size[x] === "L") {
        price[x] += 65;
    } else if (orders[x] === "Strawberry" && size[x] === "S") {
        price[x] += 35;
    } else if (orders[x] === "Strawberry" && size[x] === "M") {
        price[x] += 55;
    } else if (orders[x] === "Strawberry" && size[x] === "L") {
        price[x] += 65;
    } else if (orders[x] === "Passion Fruit" && size[x] === "S") {
        price[x] += 35;
    } else if (orders[x] === "Passion Fruit" && size[x] === "M") {
        price[x] += 55;
    } else if (orders[x] === "Passion Fruit" && size[x] === "L") {
        price[x] += 65;
    } // Fresh Fruit
    else if (orders[x] === "Papaya" && size[x] === "S") {
        price[x] += 35;
    } else if (orders[x] === "Papaya" && size[x] === "M") {
        price[x] += 55;
    } else if (orders[x] === "Papaya" && size[x] === "L") {
        price[x] += 65;
    } else if (orders[x] === "Melon" && size[x] === "S") {
        price[x] += 35;
    } else if (orders[x] === "Melon" && size[x] === "M") {
        price[x] += 55;
    } else if (orders[x] === "Melon" && size[x] === "L") {
        price[x] += 65;
    } else if (orders[x] === "Avocado" && size[x] === "S") {
        price[x] += 35;
    } else if (orders[x] === "Avocado" && size[x] === "M") {
        price[x] += 55;
    } else if (orders[x] === "Avocado" && size[x] === "L") {
        price[x] += 65;
    } else if (orders[x] === "Mango" && size[x] === "S") {
        price[x] += 35;
    } else if (orders[x] === "Mango" && size[x] === "M") {
        price[x] += 55;
    } else if (orders[x] === "Mango" && size[x] === "L") {
        price[x] += 65;
    } else if (orders[x] === "Buko" && size[x] === "S") {
        price[x] += 35;
    } else if (orders[x] === "Buko" && size[x] === "M") {
        price[x] += 55;
    } else if (orders[x] === "Buko" && size[x] === "L") {
        price[x] += 65;
    } else if (orders[x] === "Dragon Fruit" && size[x] === "S") {
        price[x] += 35;
    } else if (orders[x] === "Dragon Fruit" && size[x] === "M") {
        price[x] += 55;
    } else if (orders[x] === "Dragon Fruit" && size[x] === "L") {
        price[x] += 65;
    } else if (orders[x] === "Mixed Fruit" && size[x] === "S") {
        price[x] += 45;
    } else if (orders[x] === "Mixed Fruit" && size[x] === "M") {
        price[x] += 65;
    } else if (orders[x] === "Mixed Fruit" && size[x] === "L") {
        price[x] += 80;
    }
}

function computerAddonsPrices() {
    let addonsArray = addons[x].split(",");
    let addonsPrice = 0;

    for (var i = 0; i < addonsArray.length; i++) {
        if (addonsArray[i] == "Cream Cheese") {
            addonsPrice += 10;
        } else {
            addonsPrice += 9;
        }
    }

    price[x] += addonsPrice;
}

function computePriceWithQuantity() {
    price[x] = price[x] * quantity[x];
}

function writeTotalPrice() {
    totalPrice += price[x];
    document.getElementById("totalText").innerHTML = "Total: ₱" + totalPrice;
}

function showSizes() {
    document.querySelector(".popupSize").style.visibility = "visible";
}

function showQuantity() {
    document.querySelector(".popupAddons").style.visibility = "hidden";
    document.querySelector(".popupQuantity").style.visibility = "visible";
}

function showAddons() {
    document.querySelector(".popupSize").style.visibility = "hidden";
    document.querySelector(".popupAddons").style.visibility = "visible";
}

function hideQuantity() {
    document.querySelector(".popupQuantity").style.visibility = "hidden";
}

function cancelOrder() {
    orders.splice(0, orders.length);
    size.splice(0, size.length);
    addons.splice(0, addons.length);
    quantity.splice(0, quantity.length);
    price.splice(0, price.length);

    document.getElementById("totalText").innerHTML = "Total: ₱";
    ordersWrapper.innerHTML = "<h2 style='margin-left: 5px;'>Orders</h2>";
    a = 1;
    x = 0;
    temp = "";
    num.innerText = 1;
    totalPrice = 0;
    cashInput.value = "";
}

const cashInput = document.getElementById("CashIn");

function writeToCash(val) {
    cashInput.value = val;
}

function showPopUpCash() {
    if (orders.length != 0) {
        const popUpCash = document.getElementById("popupPayCash");
        popUpCash.style.visibility = "visible";
        cashInput.value = "Amount of Cash";
    } else {
        alert("Order First");
    }

}

function hidePopUpCash() {
    const popUpCash = document.getElementById("popupPayCash");
    popUpCash.style.visibility = "hidden";
}

function calculateChange() {
        let change = cashInput.value - totalPrice;
        return change;
}

function popupChange(change) {
    if (cashInput.value < totalPrice) {
        alert("Insufficient cash");
        return false;
    }else{
        document.getElementById("cashText").innerText = "Cash Inputted: " + cashInput.value;
        document.getElementById("changeText").innerText = "Change: " + change;
    
        document.getElementById("popupChange").style.visibility = "visible";
        hidePopUpCash();
    }

}

function jsArrayToPhp() {
    if (
        orders.length === 0 &&
        size.length === 0 &&
        addons.length === 0 &&
        quantity.length === 0
    ) {
        alert("No orders added. Please add orders first.");
        return false; // Prevent form submission
    }

    // If 'names' array is not empty, proceed with form submission
    document.getElementById("hiddenOrders").value = JSON.stringify(orders);
    document.getElementById("hiddenSize").value = JSON.stringify(size);
    document.getElementById("hiddenAddons").value = JSON.stringify(addons);
    document.getElementById("hiddenQuantity").value = JSON.stringify(quantity);
    document.getElementById("hiddenPrice").value = JSON.stringify(price);
    return true; // Allow form submission
}

function hideDonePopup(){
    document.getElementById("popupChange").style.visibility = "hidden";
}