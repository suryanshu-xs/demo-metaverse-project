import React from 'react'
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';

const coinDetails = [
  {
    name: 'BTC',
    price: -0.5
  },
  {
    name: 'ETH',
    price: 12.5
  },
  {
    name: 'SOL',
    price: 25
  }
]

const styles = {
  wrapper: 'min-w-full md:min-w-[400px] max-w-[350px] md:max-w-full  py-[12px] px-[16px] lg:mx-[25px] bg-white rounded-3xl my-[5px] flex-1 lg:flex lg:flex-col lg:justify-between',
  headingContainer: 'flex items-center ',
  headingIcon: 'text-[green] mr-[12px]',
  headingText: 'text-[14px] text-[#787878]',
  basketItem: 'py-[10px]  my-[5px] bg-[#d677ff40] rounded-2xl px-[5px] flex justify-between',
  basketNameContainer: 'max-w-[38%] md:max-w-[140px] border-2 flex flex-col',
  basketName: 'text-[18px] font-[500] text-[#7c09ad]',
  coinDetailsContainer: ' flex justify-between max-w-[250px]',
  coinDetailsItem: 'flex flex-col justify-between py-[5px] mx-[5px] ',
  nftImagesContainer: 'hidden md:flex ml-[5px] flex-1 items-center justify-end',
  nftImageWrapper: 'w-[40px] h-[40px] rounded-full mr-[5px] lg:mr-[15px]',
  nftImage: 'w-[40px] object-cover h-[40px] rounded-full',
  buttonContainer: 'flex justify-end',
  button: 'text-[13px] font-[500] py-[7px] px-[17px] rounded-[20px] w-fit md:rounded-[10px] transition-all md:text-[14px] md:py-[7px] md:px-[30px] md:font-[400] lg:text-[15px] lg:py-[10px] lg:px-[40px]'
}

const nftImages = ['https://www.nftculture.com/wp-content/uploads/2022/02/cyber-broker-294x300.png', 'https://s.yimg.com/uu/api/res/1.2/PeAoPnwMI9Ypif2kbidqVw--~B/aD0xMjY0O3c9MTE4NDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/globenewswire.com/db6aa27e2d1ab000453d61ec317e3a4c', 'https://lh3.googleusercontent.com/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI=s0', 'https://nftcalendar.io/storage/uploads/2022/02/16/mascot_02162022200802620d59a23c801.png', 'https://www.highsnobiety.com/static-assets/thumbor/d0haxcfCZFHRRRQ9otc4FtC-V80=/1600x1068/www.highsnobiety.com/static-assets/wp-content/uploads/2022/02/21102733/invisible-friends-nft-mint-interview-feat.jpg',]

const Baskets = () => {
  return (
    <div className={styles.wrapper}>

      <div className={styles.headingContainer} >
        <ShoppingBasketRoundedIcon className={styles.headingIcon} />
        <span className={styles.headingText} >My Baskets</span>
      </div>


      <div className='my-[10px] ' >
        {
          ['NFT', 'Metaverse', 'Metaverse'].map((basket, index) => <div className={styles.basketItem} key={index} >

            <div className={styles.basketNameContainer} >
              <span className={styles.basketName} > {basket} </span>
              <span className='text-[11px]' > Lorem ipsum dolor sit  elit. Culpa, veritatis?</span>
            </div>


            <div className={styles.coinDetailsContainer} >


              {
                coinDetails.map((coin, index) => <div className={styles.coinDetailsItem} key={index} >

                  <span className='' > {coin.name} </span>
                  <span style={{
                    color: coin.price > 0 ? '#249909' : '#de0b0b',
                    fontWeight: 500,
                    fontSize: 14
                  }} > {coin.price > 0 ? '+' + coin.price + '%' : coin.price + '%'} </span>

                </div>)
              }

            </div>


            <div className={styles.nftImagesContainer} >

              {
                nftImages.map((nft, index) => <div key={index} className={styles.nftImageWrapper} >

                  <img src={nft} alt="" className={styles.nftImage} />

                </div>
                )
              }

            </div>

          </div>)
        }
      </div>


      <div className={styles.buttonContainer} >
        <button
          className={styles.button}

          style={{
            backgroundColor: '#8710d1',
            color: 'white'
          }}
        > See More </button>
      </div>

    </div>
  )
}

export default Baskets