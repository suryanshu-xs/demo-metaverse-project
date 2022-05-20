import React, { useState } from 'react'
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import WatchLaterRoundedIcon from '@mui/icons-material/WatchLaterRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';

const Navbar = ({ isMenuOn }) => {

  const [pageSelected, setPageSelected] = useState(0)

  const styles = {
    wrapper: 'bg-white min-h-[calc(100vh_-_55px)] md:min-h-[calc(100vh_-_70px)] lg:min-h-[calc(100vh_-_75px)] w-[60px] md:w-[90px] lg:w-[90px] md:min-w-[90px] transition-all md:translate-x-[0px] py-[25px] flex flex-col absolute md:relative',
    iconContainer:'flex items-center justify-center h-[40px] hover:bg-[#f7f7f7] transition-all md:h-[55px] lg:py-[10px] mb-[25px]',
    iconStyle:'text-[22px] md:text-[26px]',
    headerIconContainer:'flex items-center justify-center h-[40px] hover:bg-[#f7f7f7] transition-all md:h-[45px] lg:py-[10px] mb-[5px]',
    headerIconStyle:'text-[24px] md:text-[25px]  text-[#c9c9c9]',
    navBottomIconContainer:'flex items-center justify-center h-[40px] hover:bg-[#f7f7f7] transition-all md:h-[45px] lg:py-[10px] mb-[5px]',
    navBottomIconStyle:'text-[24px] md:text-[25px]  text-[#c9c9c9]'
  }

  return (
    <div className={` ${isMenuOn ? 'translate-x-[0px]' : 'translate-x-[-60px]'} ${styles.wrapper}  `} >

      <div className=' flex-1' >

        <div
          className={styles.iconContainer}
          onClick={() => setPageSelected(0)}
          style={{
            borderRightColor: '#790ebc',
            borderRightWidth: pageSelected === 0 ? 3 : 0
          }}
        >

          <HomeRoundedIcon className={styles.iconStyle} style={{
            color: pageSelected === 0 ? '#790ebc' : '#c9c9c9'
          }} />

        </div>

        <div className={styles.iconContainer} onClick={() => setPageSelected(1)}
          style={{
            borderRightColor: '#790ebc',
            borderRightWidth: pageSelected === 1 ? 3 : 0
          }} >

          <WatchLaterRoundedIcon className={styles.iconStyle} style={{
            color: pageSelected === 1 ? '#790ebc' : '#c9c9c9'
          }} />

        </div>

        <div className={styles.iconContainer} onClick={() => setPageSelected(2)} style={{
          borderRightColor: '#790ebc',
          borderRightWidth: pageSelected === 2 ? 3 : 0
        }} >

          <AccountBalanceWalletRoundedIcon className={styles.iconStyle} style={{
            color: pageSelected === 2 ? '#790ebc' : '#c9c9c9'
          }} />

        </div>

        <div className={styles.iconContainer} onClick={() => setPageSelected(3)} style={{
          borderRightColor: '#790ebc',
          borderRightWidth: pageSelected === 3 ? 3 : 0
        }} >

          <AccountCircleRoundedIcon className={styles.iconStyle}
            style={{
              color: pageSelected === 3 ? '#790ebc' : '#c9c9c9'
            }}
          />

        </div>


      </div>


      <div >

        <div className='md:hidden' >

          <div className={styles.headerIconContainer} >
            <NotificationsRoundedIcon className={styles.headerIconStyle} />
          </div>

          <div className={styles.headerIconContainer} >
            <LogoutRoundedIcon className={styles.headerIconStyle} />
          </div>

        </div>

        <div  >

          <div className={styles.navBottomIconContainer} >
            <SettingsRoundedIcon className={styles.navBottomIconStyle} />
          </div>

          <div className={styles.navBottomIconContainer}  >
            <HelpRoundedIcon className={styles.navBottomIconStyle} />
          </div>

        </div>

      </div>


    </div>
  )
}

export default Navbar