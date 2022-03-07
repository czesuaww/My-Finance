const incomeSection = document.querySelector(".incomeArea");
const expensesSection = document.querySelector(".expensesArea");
const availableMoney = document.querySelector(".options__head-text");

const addTransactionPanel = document.querySelector(".addTransactionPanel");
const nameImput = document.querySelector("#name");
const amountImput = document.querySelector("#amount");
const categorySelect = document.querySelector("#category");

const addTransactionBtn = document.querySelector(".options__controls-addTransaction");
const saveBtn = document.querySelector(".addTransactionPanel__panelButtons-save");
const cancelBtn = document.querySelector(".addTransactionPanel__panelButtons-cancel");
const deleteTransactionsAll = document.querySelector(".options__controls-deleteAll");

const changeColor = document.querySelector(".brush");

const closeStylePanel = document.querySelector(".options__styleSelection-cancel");
const changeToLigh = document.querySelector(".options__styleSelection-colorButtons-light");
const changeToDark = document.querySelector(".options__styleSelection-colorButtons-dark");

let root = document.documentElement;

let ID = 0;
let categoryIcon;
let selectedCategory;
let moneyArray = [0];

const showPanel = () => (addTransactionPanel.style.display = "flex");

const hidePanel = () => (addTransactionPanel.style.display = "none");

addTransactionBtn.addEventListener("click", showPanel);
cancelBtn.addEventListener("click", hidePanel);
