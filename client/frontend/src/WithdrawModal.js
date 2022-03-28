const WithdrawModal = ({closeModal}) => {
    return (
        <div>
            <button onClick={() => {closeModal(false)}}> X </button>
            <h4>How much would you like to withdraw?</h4>
            <input type="text"/>
            <button>Withdraw</button>
        </div>
    )
}
export default WithdrawModal