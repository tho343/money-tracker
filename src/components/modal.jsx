import React, { Fragment, useRef } from 'react'
import { GrClose } from 'react-icons/gr'
import { useTracker } from '../context/TrackerContext';
export default function Modal(props) {
    const nameRef = useRef();
    const amountRef = useRef();
    const dateRef = useRef();
    const categoryIdRef = useRef();
    const { addIncome, addExpense, categories } = useTracker();
    const { show, onCloseHandle, name, onCloseHanle } = props;
    const handleSubmitIncome = (e) => {
        e.preventDefault();
        addIncome({
            name: nameRef.current.value,
            amount: parseFloat(amountRef.current.value),
            date: dateRef.current.value
        })

    }
    const handleSubmitExpense = (e) => {
        e.preventDefault();

        addExpense({
            name: nameRef.current.value,
            amount: parseFloat(amountRef.current.value),
            date: dateRef.current.value,
            categoryId: categoryIdRef.current.value
        })

    }
    return (
        <div className={show ? "modal-overlay open-modal" : "modal-overlay"}>
            <div className="modal-container">
                <div className="form-container card">
                    <form onSubmit={name === "income" ? handleSubmitIncome : handleSubmitExpense}>

                        <h1>Add {name}</h1>
                        <label for="name">name</label>
                        <input type="text" ref={nameRef} required></input>
                        <label for="amount">amount</label>
                        <input type="number" ref={amountRef} name="amount" min={0} step={0.01} required></input>
                        <label for="date">Date</label>
                        <input type="date" name="date" ref={dateRef} required></input>
                        {name === "expense" && (
                            <Fragment>
                                <label>Category</label>
                                <select ref={categoryIdRef}>
                                    {categories.map(category => {
                                        return <option key={category.id} value={category.id}>{category.name}</option>
                                    })}
                                </select>
                            </Fragment>

                        )}
                        <button type="submit" onClick={onCloseHandle}>submit</button>

                    </form>
                    <button className="close-btn" onClick={onCloseHandle} >
                        <GrClose className='close-icon' />
                    </button>
                </div>


            </div>
        </div>
    )
}
