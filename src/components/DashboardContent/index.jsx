import React from 'react'
import { Card } from 'antd';


const transactionData = [
  {
    id: 1,
    name: 'Daily Transaction Volume',
    qty: '2342'
  },
  {
    id: 2,
    name: 'Daily Transaction Value',
    qty: '4,000,000'
  },
  {
    id: 3,
    name: 'Total Transaction Volume',
    qty: '452,000'
  },
  {
    id: 4,
    name: 'Total Transaction Value',
    qty: '4,000,000'
  },
]




const index = () => {
  return (
    <div className=''>
     <div className='flex justify-between space-x-4'>
      {transactionData.map( ( { id, name, qty } ) => 
        <Card key={id} style={{ width: '50%' }}>
        <p>{name}</p>
        <p>{qty}</p>
      </Card>
        )}
        </div>
    </div>
  )
}

export default index