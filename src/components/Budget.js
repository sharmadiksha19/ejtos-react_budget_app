    import React, { useContext, useState } from 'react';
    import { AppContext } from '../context/AppContext';

    const Budget = () => {
        //changes introduced for task 2 and task 5
        //aaded currency
        const { budget, expenses, dispatch, currency} = useContext(AppContext);
        //created newbudget and setNewBudget
        const [newBudget, setNewBudget] = useState(budget);

        const handleBudgetChange = (event) => {
            const value = parseInt(event.target.value);
            if (value > 20000) {
                //validation
                alert("Budget cannot exceed £20,000");
            } else if (value < getTotalExpenses()) {
                //validation
                alert("Budget cannot be lower than total expenses");
            } else {
                setNewBudget(value);
                dispatch({
                    type: 'SET_BUDGET',
                    payload: value,
                });
            }
        };

        const getTotalExpenses = () => {
            return expenses.reduce((total, expense) => total + expense.cost, 0);
        };
        //introduced changes in the return function
        return (
            <div className='alert alert-secondary'>
                <span>
                Budget: {currency}
                <input
                    required='required'
                    type="number"
                    value={newBudget}
                    style={{ marginLeft: '2rem', size: 10 }}
                    onChange={handleBudgetChange}
                    min="0"
                    max="20000"
                    step="10"
                />
            </span>
            </div>
        );
    };

    export default Budget;