import React, { useState, useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    // text and amound already in state and handled by form value
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000), // cleaner to use uuid
      text,
      amount: +amount // or parseInt
    }

    addTransaction(newTransaction);
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit} >
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
          >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}
