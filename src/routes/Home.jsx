import React, { useState } from 'react'
import AddExpenseForm from '../components/addExpenseForm'
import AddIncomeForm from '../components/addIncomeForm'
import BalanceCard from '../components/balance-card.component'
import ChartCard from '../components/chart-card.component'
import Modal from '../components/modal'
export default function Home() {
  const [showModalAddIncome, setShowModalAddIncome] = useState(false);
  const [showModalAddExpense, setShowModalAddExpense] = useState(false);
  return (
    <div className="main">


      <div className="container">
        <BalanceCard />
        <div className="btns-container">
          <div className="add-balance btn" onClick={() => { setShowModalAddIncome(true); console.log(showModalAddIncome) }}>Add Income</div>
          <div className="add-expense btn" onClick={() => { setShowModalAddExpense(true) }}>Add Expense</div>
        </div>
        <ChartCard />

      </div>
      <AddIncomeForm show={showModalAddIncome} onCloseHandle={() => setShowModalAddIncome(false)} />
      <AddExpenseForm show={showModalAddExpense} onCloseHandle={() => setShowModalAddExpense(false)} />

    </div>
  )
}
