
const categorys = ['Expenses','Income', 'Groceries', 'Myself', 'Eating Out', 'Misc', 'Gas']
/*const expenses = [{name: 'Mortgage', amount: 900,},
{name: 'Netflix', amount: 16},
{name: 'Cell Bill', amount: 100},
{name: 'NV Energy', amount: 52},
{name: 'SW Gas', amount: 10},
{name: 'Truck Fuel', amount: 0},
{name: 'Water Bill', amount: 0},
{name: 'Centruylink', amount: 28},
{name: 'State Farm', amount: 100},
{name: 'HOA', amount: 21},
{name: 'HSA Home Warranty', amount: 28},
{name: 'Groceries', amount: 0},
{name: 'Brinks', amount: 16},
{name: 'Trash', amount: 0},
{name: 'Apple', amount: 25},
{name: 'Gym', amount: 16},
{name: 'Misc', amount: 0},
{name: 'Kids Savings', amount: 40},
{name: 'Eating Out', amount: 0},
{name: 'Aspens eye drops', amount: 40},
{name: 'Myself', amount: 0},
]*/
const expenses = []
const income = [{name: 'Check 1', amount: 0},
 {name: 'Check 2', amount: 0},
 {name: 'Check 3', amount: 0}];
const tips = []
const groceries = [];
const eatingOut = [];
const myself = [];
const gas = [];
const misc = [];


/* creating table function */
function addTable(array) {
    let info = ``
    let id = 0
    for(let i =0;i < array.length; i++) {
       id ++
       info +=`<tr><td class='tableData'</td>${array[i].name}<td id='id${id}' class='tableData'>$${array[i].amount}</td></tr>`
    }
    return info
}




/* calling function to create tables*/
/* Expenses Table */
const expenseTable = document.querySelector('#expensesTable')
const addExpense = addTable(expenses)
expenseTable.innerHTML = addExpense

/* income table */
const incomeTable = document.querySelector('#incomeTable');
const addIncome = addTable(income)
incomeTable.innerHTML = addIncome

/* Tips Table */
const tipsTable = document.querySelector('#tipTable');
addTips = addTable(tips)
tipsTable.innerHTML = addTips

/* groceries table */
const groceryTable = document.querySelector('#groceryTable');
addGroceries = addTable(groceries)
groceryTable.innerHTML = addGroceries

/* myslef Table */
const myselfTable = document.querySelector('#myselfTable')
addMyself = addTable(myself)
myselfTable.innerHTML = addMyself

/* Eating out table */
const eatingOutTable = document.querySelector('#eatingOutTable');
addEatingOut = addTable(eatingOut)
eatingOutTable.innerHTML = addEatingOut

/* Misc Table */
const miscTable = document.querySelector('#miscTable');
addMisc = addTable(misc)
miscTable.innerHTML = addMisc

/* gas Table */
const gasTable = document.querySelector('#gasTable')
addGas = addTable(gas)
gasTable.innerHTML = addGas





    




/* creates total for tables */
function total(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum = sum + array[i].amount
    }
    return '$' + sum
}


/* Total for expense table */
const expenseTotal = document.querySelector('#expenseTotal');
expenseTotal.textContent = total(expenses)
/* Total for Income tabel */
const incomeTotal= document.querySelector('#incomeTotal')
incomeTotal.textContent = total(income);
/* Total for Tips tabel */
const tipTotal = document.querySelector('#tipTotal');
tipTotal.textContent = total(tips)
/* total for Groceries */
const groceryTotal = document.querySelector('#groceryTotal');
groceryTotal.textContent = total(groceries)
/* total for Myself */
const myselfTotal = document.querySelector('#myselfTotal')
myselfTotal.textContent = total(myself)
/* total for Eating out */
const eatingOutTotal = document.querySelector('#eatingOutTotal')
eatingOutTotal.textContent = total(eatingOut)
/* total for Misc */
const miscTotal = document.querySelector('#miscTotal');
miscTotal.textContent = total(misc)
/* total for gas */
const gasTotal = document.querySelector('#gasTotal');
gasTotal.textContent = total(gas)








/* submit buttons */
// tips
const button = document.querySelector('.submitBtn')
// groceries 
const button1 = document.querySelector('.submitBtn1')
//myself
const button2 = document.querySelector('.submitBtn2')
//eating out
const button3 = document.querySelector('.submitBtn3')
// misc
const button4 = document.querySelector('.submitBtn4')
// gas
const button5 = document.querySelector('.submitBtn5')
// expenses
const button6 = document.querySelector('.submitBtn6')
// income
const button7 = document.querySelector('.submitBtn7')


const dropDown = document.querySelector('#category-dropdown')
const expenseDiv = document.querySelector('.expenses')
const tipDiv = document.querySelector('.tips')
const groceryDiv = document.querySelector('.groceries')
const myselfDiv = document.querySelector('.myself')
const eatingOutDiv = document.querySelector('.eatingOut')
const miscDiv = document.querySelector('.misc')
const gasDiv = document.querySelector('.gas')
const incomeDiv = document.querySelector('.income')

dropDown.addEventListener('change', function() {
    let selectedItem = dropDown.options[dropDown.selectedIndex].value
    if(selectedItem === 'tips') {
        gasDiv.style.display = 'none'
        miscDiv.style.display = 'none'
        eatingOutDiv.style.display = 'none'
        myselfDiv.style.display = 'none'
        tipDiv.style.display = 'block'
        groceryDiv.style.display = 'none'
        expenseDiv.style.display = 'none'
        incomeDiv.style.display = 'none'
        
        button.addEventListener('click', function() {
            let value = document.querySelector('#tipAmount').value
            let content = document.querySelector('#tipDate').value
            tips.push({name: content, amount: Number(value)})
            let tips2 = []
            tips2 = tips
            tipsTable.innerHTML = addTable(tips2)
            tipTotal.textContent = total(tips)
            document.querySelector('#tipAmount').value = ''
            document.querySelector('#tipDate').value = ''
            addIncome(tips2)
            
        })
    } else if(selectedItem === 'groceries') {
        gasDiv.style.display = 'none'
        miscDiv.style.display = 'none'
        eatingOutDiv.style.display = 'none'
        myselfDiv.style.display = 'none'
        tipDiv.style.display = 'none'
        groceryDiv.style.display = 'block'
        expenseDiv.style.display = 'none'
        incomeDiv.style.display = 'none'
        button1.addEventListener('click', function() {
            let value = document.querySelector('#grocPrice').value
            let content = document.querySelector('#grocLocation').value
            groceries.push({name: content, amount: Number(value)})
            let groceries2 = []
            groceries2 = groceries
            groceryTable.innerHTML = addTable(groceries2);
            groceryTotal.textContent = total(groceries)
            document.querySelector('#grocPrice').value = ''
            document.querySelector('#grocLocation').value = ''
        })
    } else if (selectedItem === 'myself') {
        gasDiv.style.display = 'none'
        miscDiv.style.display = 'none'
        eatingOutDiv.style.display = 'none'
        myselfDiv.style.display = 'block'
        tipDiv.style.display = 'none'
        groceryDiv.style.display = 'none'
        expenseDiv.style.display = 'none'
        incomeDiv.style.display = 'none'
        button2.addEventListener('click', function() {
            let value = document.querySelector('#thePrice').value
            let content = document.querySelector('#theStuff').value
            myself.push({name: content, amount: Number(value)})
            let myself2 = [];
            myself2 = myself
            myselfTable.innerHTML = addTable(myself2)
            myselfTotal.textContent = total(myself)
            document.querySelector('#thePrice').value = ''
            document.querySelector('#theStuff').value = ''
            
        })
    } else if (selectedItem === 'eating-out') {
        gasDiv.style.display = 'none'
        miscDiv.style.display = 'none'
        eatingOutDiv.style.display = 'block'
        myselfDiv.style.display = 'none'
        tipDiv.style.display = 'none'
        groceryDiv.style.display = 'none'
        expenseDiv.style.display = 'none'
        incomeDiv.style.display = 'none'
        button3.addEventListener('click', function() {
            let value = document.querySelector('#foodPrice').value;
            let content = document.querySelector('#foodStuff').value;
            eatingOut.push({name: content, amount: Number(value)})
            let eatingOut2 = [];
            eatingOut2 = eatingOut
            eatingOutTable.innerHTML = addTable(eatingOut2);
            eatingOutTotal.textContent = total(eatingOut);
            document.querySelector('#foodPrice').value = ''
            document.querySelector('#foodStuff').value = ''
        })
    } else if (selectedItem === 'misc') {
        gasDiv.style.display = 'none'
        miscDiv.style.display = 'block'
        eatingOutDiv.style.display = 'none'
        myselfDiv.style.display = 'none'
        tipDiv.style.display = 'none'
        groceryDiv.style.display = 'none'
        expenseDiv.style.display = 'none'
        incomeDiv.style.display = 'none'
        button4.addEventListener('click', function() {
            let value = document.querySelector('#miscPrice').value;
            let content = document.querySelector('#miscStuff').value;
            misc.push({name: content, amount: Number(value)});
            let misc2 = [];
            misc2 = misc
            miscTable.innerHTML = addTable(misc2);
            miscTotal.textContent = total(misc)
            document.querySelector('#miscPrice').value = '';
            document.querySelector('#miscStuff').value = '';
        })
    } else if (selectedItem === 'gas') {
        gasDiv.style.display = 'block'
        miscDiv.style.display = 'none'
        eatingOutDiv.style.display = 'none'
        myselfDiv.style.display = 'none'
        tipDiv.style.display = 'none'
        groceryDiv.style.display = 'none'
        expenseDiv.style.display = 'none'
        incomeDiv.style.display = 'none'
        button5.addEventListener('click', function() {
            let value = document.querySelector('#gasPrice').value;
            let content = document.querySelector('#gasDate').value;
            gas.push({name: content, amount: Number(value)});
            let gas2 = [];
            gas2 = gas
            gasTable.innerHTML = addTable(gas2);
            gasTotal.textContent = total(gas)
            document.querySelector('#gasPrice').value = ''
            document.querySelector('#gasDate').value = ''
        })
    } else if (selectedItem === 'expenses') {
        expenseDiv.style.display = 'block'
        gasDiv.style.display = 'none'
        miscDiv.style.display = 'none'
        eatingOutDiv.style.display = 'none'
        myselfDiv.style.display = 'none'
        tipDiv.style.display = 'none'
        groceryDiv.style.display = 'none'
        incomeDiv.style.display = 'none'
        button6.addEventListener('click', function() {
        let value = document.querySelector('#expenseCost').value;
        let content = document.querySelector('#newExpense').value
        expenses.push({name: content, amount: Number(value)})
        let expenses2 = []
        expenses2 = expenses
        expenseTable.innerHTML = addTable(expenses2)
        expenseTotal.textContent = total(expenses)
        document.querySelector('#expenseCost').value = ''
        document.querySelector('#newExpense').value = ''
    })

    } else if(selectedItem === 'income'){
        expenseDiv.style.display = 'none'
        gasDiv.style.display = 'none'
        miscDiv.style.display = 'none'
        eatingOutDiv.style.display = 'none'
        myselfDiv.style.display = 'none'
        tipDiv.style.display = 'none'
        groceryDiv.style.display = 'none'
        incomeDiv.style.display = 'block'
        button7.addEventListener('click', function() {
            let value = document.querySelector('#newIncome').value;
            let content = document.querySelector('#incomeAmount')
            income.push({name: content, amount: Number(value)});
            let income2 = []
            income2 = income
            incomeTable.innerHTML = addTable(income2)
            incomeTotal.textContent = total(income)
            document.querySelector('#newIncome').value = ''
            document.querySelector('#incomeAmount').value = ''
        })
    }
})

// adding to income table

