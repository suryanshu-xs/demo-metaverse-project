import React, { useState } from 'react'
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { style } from '@mui/system';


const Header = ({ setIsMenuOn, isMenuOn }) => {

    const styles = {
        wrapper: 'h-[55px] md:h-[70px] lg:h-[75px] bg-white px-2 md:px-4 flex items-center md:pr-[0px]',
        logoContainer: 'h-[60px] w-[60px] hidden md:block mr-[20px] lg:mr-[30px]',
        logo: 'h-[55px] w-[55px]',
        menu: 'cursor-pointer mr-[15px] md:hidden w-[40px] h-[35px] flex items-center justify-center hover:bg-[#e6e6e6] transition-all',
        heading: 'text-[16px] md:text-[20px] uppercase font-[400] lg:text-[22px]',
        bodyWrapper: 'flex flex-1 items-center h-[100%] justify-end',
        depositButton: 'text-[12px] font-[500] py-[5px] px-[17px] rounded-[20px] md:rounded-[10px] transition-all md:text-[14px] md:py-[7px] md:px-[30px] md:font-[400] mr-[10px] lg:mr-[20px] lg:text-[15px] lg:py-[10px] lg:px-[40px]',
        withdrawButton: 'text-[12px] font-[500] py-[5px] px-[17px]  rounded-[20px] md:rounded-[10px] transition-all md:text-[14px] md:py-[7px] md:px-[30px] md:font-[400] lg:text-[15px] lg:py-[10px] lg:px-[40px]',
        iconsContainer: ' items-center justify-end hidden md:flex',
        iconStyle: 'flex items-center justify-center md:h-[70px] md:w-[70px] lg:h-[80px] lg:w-[80px] border-l-[3px] cursor-pointer hover:bg-[#f7f7f7] transition-all',
        icon:'text-[#bababa] text-[28px]'

    }


    const [isDeposit, setIsDeposit] = useState(true)


    return (
        <div className={styles.wrapper} >



            <div className={styles.logoContainer} >
                <img src="logo.png" alt="Logo" className={styles.logo} />
            </div>



            <div className={styles.menu} onClick={() => setIsMenuOn(!isMenuOn)} >
                <MenuRoundedIcon />
            </div>

            <h1 className={styles.heading}>Home</h1>

            <div className={styles.bodyWrapper} >

                <div className='md:mr-[20px]' >
                    <button
                        className={styles.depositButton}

                        style={{
                            backgroundColor: isDeposit ? '#8710d1' : 'white',
                            color: isDeposit ? 'white' : '#8710d1',
                        }}

                        onClick={() => setIsDeposit(true)}
                    > Deposit </button>

                    <button className={styles.withdrawButton}

                        style={{
                            backgroundColor: isDeposit ? 'white' : '#8710d1',
                            color: isDeposit ? '#8710d1' : 'white'
                        }}
                        onClick={() => setIsDeposit(false)} > Withdraw </button>
                </div>

                <div className={styles.iconsContainer} >

                    <div className={styles.iconStyle} >
                        <NotificationsRoundedIcon className={styles.icon} />
                    </div>

                    <div className={styles.iconStyle} >
                        <LogoutRoundedIcon className={styles.icon}  />
                    </div>

                </div>

            </div>


        </div>
    )
}

export default Header