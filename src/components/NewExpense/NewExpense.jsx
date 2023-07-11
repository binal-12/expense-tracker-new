import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

    const [isEditing, setIsEdiitng] = useState(false);

    const saveExpenseHandler = (enterdExpenseData) => {
        const expenseData = {
            ...enterdExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }

    const startEditing = () => {
        setIsEdiitng(true)
    }

    const stopEditing = () => {
        setIsEdiitng(false)
    }

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditing}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseHandler} onStopEditing={stopEditing} />}
        </div>
    )
}

export default NewExpense