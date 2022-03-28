import {useState} from 'react'
import DepositModel from './DepositModal'
import WithdrawModal from './WithdrawModal'

const UserAccount = () => {
    const [openDepositModal, setOpenDepositModal] = useState(false);
    const [openWithdrawModal, setOpenWithdrawModal] = useState(false);
    return (
        <>
            <div>
                <h4>Hello User,</h4>
                <h5>Account Balance: $15,000</h5>
                <button type="submit" onClick={() => {setOpenDepositModal(true)}}>Deposit</button>
                <button type="submit" onClick={() => {setOpenWithdrawModal(true)}}>Withdraw</button>
                {openDepositModal && <DepositModel closeModal={setOpenDepositModal}/>}
                {openWithdrawModal && <WithdrawModal closeModal={setOpenWithdrawModal}/>}
            </div>
        </>
    )
}

export default UserAccount