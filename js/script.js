const incomeSection = document.querySelector(".incomeArea");
const expensesSection = document.querySelector(".expensesArea");
const availableMoney = document.querySelector(".options__head-text");

const addTransactionPanel = document.querySelector(".addTransactionPanel");
const nameInput = document.querySelector("#name");
const amountImput = document.querySelector("#amount");
const categorySelect = document.querySelector("#category");

const addTransactionBtn = document.querySelector(".options__controls-addTransaction");
const saveBtn = document.querySelector(".addTransactionPanel__panelButtons-save");
const cancelBtn = document.querySelector(".addTransactionPanel__panelButtons-cancel");
const deleteTransactionsAll = document.querySelector(".options__controls-deleteAll");

const changeColor = document.querySelector(".brush");
const showColorPanel = document.querySelector(".options__styleSelection");
const closeStylePanel = document.querySelector(".options__styleSelection-cancel");
const changeToLigh = document.querySelector(".options__styleSelection-colorButtons-light");
const changeToDark = document.querySelector(".options__styleSelection-colorButtons-dark");

let root = document.documentElement;

let ID = 0;
let categoryIcon;
let selectedCategory;
let moneyArray = [0];

const showPanel = () => (addTransactionPanel.style.display = "flex");

const hidePanel = () => {
  addTransactionPanel.style.display = "none";
  clearInputs();
};

const showChangeColor = () => (showColorPanel.style.visibility = "visible");

const hideChangeColor = () => (showColorPanel.style.visibility = "hidden");

const checkForms = () => {
  // selectedCategory = categorySelect.options[categorySelect.selectedIndex].value;
  if (nameInput.value !== "" && amountImput.value !== "" && categorySelect.value !== "none") {
    createNewTransaction();
  } else {
    alert("Uzupełnij wszystkie pola!");
  }
};

const clearInputs = () => {
  nameInput.value = "";
  amountImput.value = "";
  categorySelect.value = "none";
};

const createNewTransaction = () => {
  const newTransaction = document.createElement("div");
  newTransaction.classList.add("transaction");
  newTransaction.setAttribute("id", ID);
  checkCategory(selectedCategory);

  newTransaction.innerHTML = `
  <p class="transactionName">${categoryIcon} ${nameInput.value}</p>
  <p class="transactionAmount">
  ${amountImput.value} zł
  <button class="delete" onclick="deleteTransaction(${ID})">
    <i class="fas fa-times"></i>
  </button>
  </p>`;

  if (amountImput.value > 0) {
    incomeSection.appendChild(newTransaction);
    newTransaction.classList.add("income");
  } else {
    expensesSection.appendChild(newTransaction);
    newTransaction.classList.add("expenses");
  }

  moneyArray.push(parseFloat(amountImput.value));
  countMoney(moneyArray);

  hidePanel();
  ID++;
  clearInputs();
};

const selectCategory = () => (selectedCategory = categorySelect.options[categorySelect.selectedIndex].text);

const checkCategory = transaction => {
  switch (transaction) {
    case "[ + ] Income":
      categoryIcon = '<i class="fas fa-money-bill-wave"></i>';
      break;
    case "[ - ] Shopping":
      categoryIcon = '<i class="fas fa-cart-arrow-down"></i>';
      break;
    case "[ - ] Food":
      categoryIcon = '<i class="fas fa-hamburger"></i>';
      break;
    case "[ - ] Cinema":
      categoryIcon = '<i class="fas fa-film"></i>';
      break;
  }
};

const countMoney = money => {
  const newMoney = money.reduce((a, b) => a + b);
  availableMoney.textContent = `${newMoney} zł`;
};

const deleteTransaction = id => {
  const transactionToDelete = document.getElementById(id);
  const transactionAmount = parseFloat(transactionToDelete.childNodes[3].outerText);
  const indexOfTransaction = moneyArray.indexOf(transactionAmount);

  console.log(transactionAmount);
  moneyArray.splice(indexOfTransaction, 1);

  if (transactionToDelete.classList.contains("income")) {
    incomeSection.removeChild(transactionToDelete);
  } else {
    expensesSection.removeChild(transactionToDelete);
  }
  countMoney(moneyArray);
};

const deleteAllTransaction = () => {
  incomeSection.innerHTML = '<h3 class="incomeArea__income-heading income-heading">Income:</h3>';
  expensesSection.innerHTML = '<h3 class="expensesArea__income-heading income-heading">Expenses:</h3>';
  availableMoney.text = "0 zł";
  moneyArray = [0];
};

const changeStyleToLight = () => {
  root.style.setProperty("--first-color", "#14161f");
  root.style.setProperty("--second-color", "#f9f9f9");
  root.style.setProperty("--border-color", "rgba(0, 0, 0, .2)");
  root.style.setProperty("--brush-color", "#000");
  root.style.setProperty("--brush-color-hover", "rgb(148, 142, 142)");
};

const changeStyleToDark = () => {
  root.style.setProperty("--first-color", "#f9f9f9");
  root.style.setProperty("--second-color", "#14161f");
  root.style.setProperty("--border-color", "rgba(241, 236, 236, 0.2)");
  root.style.setProperty("--brush-color", "#ddd");
  root.style.setProperty("--brush-color-hover", "rgb(122, 117, 117)");
};

changeColor.addEventListener("click", showChangeColor);
closeStylePanel.addEventListener("click", hideChangeColor);
addTransactionBtn.addEventListener("click", showPanel);
cancelBtn.addEventListener("click", hidePanel);
saveBtn.addEventListener("click", checkForms);
deleteTransactionsAll.addEventListener("click", deleteAllTransaction);
deleteTransactionsAll.addEventListener("click", deleteAllTransaction);
deleteTransactionsAll.addEventListener("click", deleteAllTransaction);
changeToLigh.addEventListener("click", changeStyleToLight);
changeToDark.addEventListener("click", changeStyleToDark);
