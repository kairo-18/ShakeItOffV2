<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>ShakeItOffV2</title>
  <link rel="stylesheet" href="style.css" />
</head>

<body>
  <div class="container">

    <div class="nav"></div>

    <div class="content-wrapper">
      <div class="column1">
        <div class="orders-wrapper">
          <h2 style="margin-left: 5px;">Orders</h2>

        </div>
        <div class="total-price">
          <span class="totalText" id="totalText">Total: $150</span>
        </div>

        <div class="pay-buttons">
          <button id="paycash-button">PAY CASH</button>

          <button id="cancel-button">X</button>
        </div>

      </div>
      <div class="column2">
        <div id="shakesBtn" onclick="showShakes()" class="row"><label>Shakes</label></div>
        <div id="milkteaBtn" onclick="showMilktea()" class="row"><label>Milktea</label></div>
        <div id="fruitteaBtn" onclick="showFruitTea()" class="row"><label>FruitTea</label></div>
        <div id="fruitshakeBtn" onclick="showFruitShake()" class="row"><label>FruitShake</label></div>
      </div>

      <div class="column3">
        <h2 id="title-label">Shakes</h2>
        <div id="Shakes" class="Shakes">
          <?php
          $shakes = array(
            "Milo Bits",
            "Cookies n' Cream",
            "Strawberry Jam",
            "Choco Mousse",
            "Cappuccino",
            "Coffee Jelly",
            "Cheesy Mango Graham",
            "Cheesy Mango Cheesecake",
            "Cheesy Cheesecake",
            "Strawberry Cheesecake",
            "Cheesy Graham",
            "Strawberry Cheesecake"
          );
          foreach ($shakes as $shake) {
            echo '<button class="btn menu-item" value="' . $shake . '" onclick="showSizes();addOrderValueToArray(this.value);">' . $shake . '</button>';
          }
          ?>
        </div>

        <div id="Milktea" class="Milktea">
          <?php
          $milktea = array("Wintermelon", "Okinawa", "Dark Choco", "Red Velvet", "Matcha", "Taro");
          foreach ($milktea as $tea) {
            echo '<button class="btn menu-item" value="' . $tea . '" onclick="showSizes();addOrderValueToArray(this.value);">' . $tea . '</button>';
          }
          ?>
        </div>

        <div id="FruitTea" class="FruitTea">
          <?php
          $fruitTea = array("Green Apple", "Blueberry", "Kiwi", "Lychee", "Strawberry", "Passion Fruit");
          foreach ($fruitTea as $tea) {
            echo '<button class="btn menu-item" value="' . $tea . '" onclick="showSizes();addOrderValueToArray(this.value);">' . $tea . '</button>';
          }
          ?>
        </div>

        <div id="FruitShake" class="FruitShake">
          <?php
          $freshFruit = array("Papaya", "Melon", "Avocado", "Mango", "Buko", "Dragon Fruit", "Mixed Fruit");
          foreach ($freshFruit as $fruit) {
            echo '<button class="btn menu-item" value="' . $fruit . '" onclick="showSizes();addOrderValueToArray(this.value);">' . $fruit . '</button>';
          }
          ?>
        </div>

      </div>


    </div>

    <div class="popupSize">
      <button value="S" onclick="showAddons(); addSizeValueToArray(this.value);" id="small">S</button>
      <button value="M" onclick="showAddons(); addSizeValueToArray(this.value);" id="medium">M</button>
      <button value="L" onclick="showAddons(); addSizeValueToArray(this.value);" id="large">L</button>
    </div>


    <div class="popupAddons">
      <label id="addonsText">Addons: </label>
      <button value="Pearl" onclick="addAddonsValueToString(this.value);">Pearl</button>
      <button value="Crystal/Nata" onclick="addAddonsValueToString(this.value);">Crystal/Nata</button>
      <button value="Oreo" onclick="addAddonsValueToString(this.value);">Oreo</button>
      <button value="Graham" onclick="addAddonsValueToString(this.value);">Graham</button>
      <button value="Cream Cheese" onclick="addAddonsValueToString(this.value);">Cream Cheese</button>
      <button value="Others" onclick="addAddonsValueToString(this.value);">Others</button>

      <button onclick="addAddonsValueToArray(this.value); showQuantity()">Confirm</button>

    </div>

    <div class="popupQuantity">
      <div class="quantity">
        <span class="minus">-</span>
        <span class="num">1</span>
        <span class="plus">+</span>
      </div>

      <button onclick="hideQuantity(); addQuantityValueToArray();" id="confirmQuantity">Confirm</button>
    </div>

  </div>



  <script src="index.js"></script>
</body>

</html>