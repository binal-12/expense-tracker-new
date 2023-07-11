import React, { useState } from 'react'
import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

  const [year, setYear] = useState('2022');

  const dropDownHandler = (selectedYear) => {
    setYear(selectedYear);
  }

  const expenses = props.items.filter(expense => expense.date.getFullYear().toString() === year)

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={year} onDropDownSelect={dropDownHandler} />
        <ExpensesChart expenses={expenses} />
        <ExpensesList items={expenses} />
      </Card>
    </div>
  )
}

export default Expenses