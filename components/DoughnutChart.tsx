'use client';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


const DoughnutChart = ({accounts}: DoughnutChartProps) => {
  const data = {
    datasets :[
      {
        label: 'Banks',
        data: [24000, 27899, 40000],
        backgroundColor: ['#0eb31e', '#a42c2c', '#9bc758']

      }
    ],
    labels: ['Mpesa', 'Equity', 'KCB']
  }
  return <Doughnut 
  data={data}
  options={{
    cutout: '60%',
    plugins: {
      legend: {
        display: false
      }
    }
  }}
  
  />
}

export default DoughnutChart