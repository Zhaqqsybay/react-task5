import React from 'react';


const ExpenseList = ({ expenses, deleteExpense, updateExpense }) => {
  return (
    <div>
      <h2>Expense List</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            <div>{expense.name}</div>
            <div>{expense.amount}</div>
            <div>{expense.date}</div>
            <button onClick={() => deleteExpense(expense.id)}>Delete</button>
            <button onClick={() => updateExpense(expense)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
