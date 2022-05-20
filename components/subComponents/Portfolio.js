import React from 'react'
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto';



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

const Portfolio = () => {

  const styles = {
    wrapper: 'my-[5px] mx-[7px] py-[12px] px-[16px] bg-white rounded-3xl',
    headingContainer: 'flex items-center',
    headingIcon: 'text-[green] mr-[12px]',
    headingText: 'text-[14px] text-[#787878]',
    body: 'py-[15px] px-[10px]',
    portfolioHeading: 'text-center text-[38px] font-[500] text-[#3b3b3b] flex items-center justify-center',
    portfolioGrowth: 'text-[#c2c2c2] text-[28px] ml-[5px] font-[400]',
    chartContainer: 'max-h-[70px] my-[15px] border-2 rounded-3xl border-gray-300 px-[25px]',
    coinDetails:'flex flex-col text-center',
    coinName:'text-[14px] font-[500] text-[#aaaaaa]'
  }

  return (
    <div className={styles.wrapper} >

      <div className={styles.headingContainer} >
        <WorkRoundedIcon className={styles.headingIcon} />
        <span className={styles.headingText} >Portfolio Value</span>
      </div>

      <div className={styles.body} >

        <h1 className={styles.portfolioHeading} >
          <span className='text-[#790ebc]' >$5500</span>

          <span className={styles.portfolioGrowth} >(+ $60)</span>
        </h1>

        <div className={styles.chartContainer}>
          <Line
            height={200}
            width={600}

            data={{
              labels: ['Jan', 'Mar', 'May', 'July', 'Sept', 'Nov'],
              datasets: [
                {
                  label: 'Wallet 1',
                  data: [2500, 1000, 2500, 3500, 2500, 1000, 2000, 1000, 2000],
                  backgroundColor: '#0793f0',
                  borderColor: '#0793f0',
                  borderWidth: 2,
                  tension: 0.5

                },
                {
                  label: 'Wallet 2',
                  data: [1300, 1200, 2200, 2000, 2500, 3200, 2200, 3200, 2200],
                  backgroundColor: '#ed0e5c',
                  borderColor: '#ed0e5c',
                  borderWidth: 2,
                  tension: 0.5,

                }
              ]
            }}

            options={{
              maintainAspectRatio: false,

              scales: {
                y: {
                  beginAtZero: true,
                  display: false,
                  ticks: {
                    display: false
                  },
                  grid: {
                    display: false
                  }
                },
                x: {
                  beginAtZero: true,
                  display: false,
                  ticks: {
                    display: false
                  },
                  grid: {
                    display: false
                  }
                }
              },
              elements: {
                point: {
                  radius: 0
                }
              },
              plugins: {
                legend: {
                  display: false
                }
              }


            }}
          />
        </div>

        <div className='px-[25px] flex justify-between' >


          {
            coinDetails.map((coin, index) => <div className={styles.coinDetails} key={index} >

              <span className={styles.coinName} > {coin.name} </span>
              <span style={{
                color: coin.price > 0 ? '#249909' : '#de0b0b',
                fontWeight: 500,
                fontSize: 15
              }} > {coin.price > 0 ? '+' + coin.price + '%' : coin.price + '%'} </span>

            </div>)
          }

        </div>

        <div className='border-4 mt-[15px] h-[200px] w-[200px] m-auto rounded-full' >



        </div>



      </div>

    </div>
  )
}

export default Portfolio