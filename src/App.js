import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addExpense } from './actions/expenseActions';
import ExpenseList from './ExpenseList';
import AddExpenseForm from './AddExpenseForm';
import TotalExpense from './TotalExpense';
import './index.css';

const App = () => {
  const expenses = useSelector(state => state.expenses);
  const dispatch = useDispatch();

  const handleAddExpense = expense => {
    dispatch(addExpense(expense));
  };

  const calculateTotal = () => {
    return expenses.reduce((total, expense) => total + parseInt(expense.amount), 0);
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <AddExpenseForm addExpense={handleAddExpense} />
      <ExpenseList expenses={expenses} />
      <TotalExpense total={calculateTotal()} />
    </div>
  );
};

export default App;
