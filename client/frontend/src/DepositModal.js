const DepositModal = ({closeModal}) => {
    return (
        <div>
            <button onClick={() => {closeModal(false)}}> X </button>
            <h4>How much would you like to deposit?</h4>
            <input type="text"/>
            <button>Deposit</button>
        </div>
    )
}

export default DepositModal;