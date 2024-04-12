export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  payload: expense,
});

export const deleteExpense = (expenseId) => ({
  type: 'DELETE_EXPENSE',
  payload: expenseId,
});

export const updateExpense = (expense) => ({
  type: 'UPDATE_EXPENSE',
  payload: expense,
});
