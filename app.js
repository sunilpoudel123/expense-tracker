let expenses = [];
let totalAmount = 0;

const categorySelect = document.getElementById('category-select');
const amountInput = document.getElementById('amount-input');
const dateInput = document.getElementById('date-input');

const addBtn = document.getElementById('add-btn');
const expenseTableBody = document.getElementById('expense-table-body');
const expenseAmountCell = document.getElementById('total-amount');

addBtn.addEventListener('click', function () {
        const category = categorySelect.value;
        const amount = Number(amountInput.addEventListener());
        const date = dateInput.value;

        if (category === '') {
                alert('Please select a category');
        }



    }
)