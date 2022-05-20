import React from 'react'
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';

const Message = () => {

  const styles = {
    wrapper:'max-w-[500px] md:max-w-[620px] m-auto flex flex-col lg:max-w-[100%] min-w-full md:min-w-[400px]  py-[12px] px-[16px] lg:mx-[8px] bg-[#900ee1] rounded-3xl mt-[5px] mb-[20px]',
    headingContainer:'flex items-center',
    headingIcon:'mr-[10px] text-white',
    headingText:'text-white',
    message:'text-[12px] mt-[10px] text-white'
  }

  return (
    <div className={styles.wrapper} >

      <div className={styles.headingContainer} >
        <HelpRoundedIcon className={styles.headingIcon}  />
        <span className={styles.headingText} >Did You Know?</span>
      </div>

      <p className={styles.message} >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nostrum dolor soluta harum commodi? Deserunt quod illum possimus obcaecati delectus, corporis repellat enim vitae iste error corrupti deleniti magni quis dolorum? Sit qui impedit aperiam enim hic? Quam, quod cupiditate.
      </p>


    </div>
  )
}

export default Message