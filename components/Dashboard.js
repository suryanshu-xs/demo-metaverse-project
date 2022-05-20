import React, { useState } from 'react'
import Investements from './subComponents/Investement'
import Analytics from './subComponents/Analytics'
import Baskets from './subComponents/Baskets'
import Portfolio from './subComponents/Portfolio'

import Message from './subComponents/Message'

const Dashboard = () => {

    const [isDemoOn, setIsDemoOn] = useState(false)
    const styles = {
        wrapper:'flex-1 min-h-full px-[10px] md:px-[20px] lg:px-[60px] lg:max-w-[calc(100vw_-_120px)] mx-auto',
        demoButtonContainer:'my-[15px] flex items-center justify-end',
        demoMode:'text-[12px] font-[500] mr-[8px] md:text-[14px] ',
        demoModeButton:'border-[2px]  bg-[#790ebc] flex min-w-[44px] rounded-full',
        demoButtonSlider:'h-[13px] w-[13px] bg-white rounded-2xl m-[3px]  transition-transform ',
        bodyWrapper:'max-w-[500px] md:max-w-[620px] m-auto lg:flex lg:max-w-[100%]',
        box1:'lg:max-w-[330px]',
        box2:'flex-1 md:min-w-[500px] lg:flex lg:flex-col'
    }

    return (
        <div className={styles.wrapper} >


            <div className={styles.demoButtonContainer} >

                <span className={styles.demoMode} >Demo Mode</span>

                <span className={styles.demoModeButton} onClick={() => setIsDemoOn(!isDemoOn)} >

                    <span className={styles.demoButtonSlider} style={{
                        transform: isDemoOn ? 'translateX(24px)' : 'translateX(0px)',

                    }} >

                    </span>
                </span>

            </div>

            <div className={styles.bodyWrapper} >

                <div className={styles.box1} >
                    <Investements />
                    <Portfolio />
                </div>

                <div className={styles.box2} >
                    <Analytics />
                    <Baskets />

                </div>

               

            </div>

            <Message />

        </div>
    )
}

export default Dashboard