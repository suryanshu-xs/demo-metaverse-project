import React from 'react'
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';


const Investements = () => {


  const styles = {
    wrapper: "py-[12px] px-[16px] bg-white rounded-3xl my-[5px] mx-[7px]",
    headingContainer: 'flex items-center',
    headingIcon: 'text-[green] mr-[12px] ',
    headingText: 'text-[14px] text-[#787878]',
    messageContainer: 'flex flex-col items-center justify-center my-[18px]',
    message1: 'text-[12px] font-[500] text-[#3d3d3d] ',
    message2: 'text-[34px] my-[2px] font-[600] text-[#2b2b2b]',
    message3: 'text-[12px] font-[500] text-[#3d3d3d]',
    buttonStyle: 'text-[13px] font-[500] py-[7px] px-[17px] rounded-[20px] w-full md:rounded-[10px] transition-all md:text-[14px] md:py-[7px] md:px-[30px] md:font-[400] mr-[10px] lg:mr-[20px] lg:text-[15px] lg:py-[10px] lg:px-[40px]'
  }

  return (
    <div className={styles.wrapper} >

      <div className={styles.headingContainer}>
        <AccountBalanceWalletRoundedIcon className={styles.headingIcon} />
        <span className={styles.headingText} >Investement</span>
      </div>

      <div className={styles.messageContainer} >

        <p className={styles.message1} >You have invested in </p>
        <h1 className={styles.message2} > 1 of 3 </h1>
        <p className={styles.message3}> Available Portfolios. </p>

      </div>

      <button
        className={styles.buttonStyle}

        style={{
          backgroundColor: '#8710d1',
          color: 'white'
        }}
      > Suggest New Portfolio </button>



    </div>
  )
}

export default Investements