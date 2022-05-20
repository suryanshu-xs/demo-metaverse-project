import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';

const getRandom = () => {
  let arr = []
  for (let i = 0; i < 7; i++) {
    arr.push(Math.floor(Math.random() * 6000))
  }
  return arr
}
const Analytics = () => {

  const [selectedTime, setSelectedTime] = useState('1M')
  const [dataArrayObj, setDataArrayObj] = useState({
    data1: getRandom(),
    data2: getRandom(),
    data3: getRandom(),
  })



  useEffect(() => {
    setDataArrayObj({
      data1: getRandom(),
      data2: getRandom(),
      data3: getRandom(),
    })
  }, [selectedTime])

  const styles = {
    wrapper: 'flex-1 min-w-full md:min-w-[400px] md:max-w-full max-w-[350px] max-h-[280px] lg:max-h-[350px] pt-[12px] pb-[12px] bg-white rounded-3xl lg:mx-[25px]',
    body: 'flex items-center justify-between px-[18px]',
    headingContainer: 'flex items-center',
    headingIcon: 'text-[#7c09ad] mr-[12px]',
    heading: 'text-[14px] text-[#787878]',
    timeSelectorContainer: 'mr-[10px] flex  flex-1 items-center justify-end',
    timeSelectorButton: 'text-[11px]  px-[15px] py-[2px] mx-[6px] md:mx-[16px] rounded-full transition-colors font-[500]'

  }

  return (
    <div className={styles.wrapper} >


      <div className={styles.body} >
        <span className={styles.headingContainer}>
          <InsightsRoundedIcon className={styles.headingIcon} />
          <span className={styles.heading} >Analytics</span>
        </span>

        <span className={styles.timeSelectorContainer}>

          {
            ['1W', '1M', '6M', '1Y'].map((time, index) => <button key={index} className={styles.timeSelectorButton} style={{
              background: selectedTime === time ? '#7c09ad' : 'white',
              color: selectedTime === time ? 'white' : '#7c09ad'
            }} onClick={() => setSelectedTime(time)} > {time} </button>)
          }



        </span>

      </div>

      <Line
        height={400}
        width={600}

        data={{
          labels: ['Jan', 'Mar', 'May', 'July', 'Sept', 'Nov'],
          datasets: [
            {
              label: 'Wallet 1',
              data: dataArrayObj.data1,
              backgroundColor: '#13ba3f',
              borderColor: '#13ba3f',
              borderWidth: 2,
              tension: 0.5

            },
            {
              label: 'Wallet 2',
              data:dataArrayObj.data2,
              backgroundColor: '#949494',
              borderColor: '#949494',
              borderWidth: 2,
              tension: 0.5,

            },
            {
              label: 'Wallet 3',
              data: dataArrayObj.data3,
              backgroundColor: '#e02482',
              borderColor: '#e02482',
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
              // display:false
              ticks: {
                display: true
              },
              grid: {
                display: false
              }
            },
            x: {
              beginAtZero: true,
              // display:false
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
          layout: {
            padding: 15
          },
          plugins: {
            legend: {
              display: false
            }
          }


        }}
      />



    </div>
  )
}

export default Analytics