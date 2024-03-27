import { Card, Typography } from 'antd';
import cardChart from '../../assets/images/cardChart.svg';
import CustomTable from '../Table/CustomTable';
import ApexBarChart from '../Chart/ApexChart';

const transactionData = [
	{
		id: 1,
		name: 'Daily Transaction Volume',
		qty: '2,342',
	},
	{
		id: 2,
		name: 'Daily Transaction Value',
		qty: '₦4,000,000',
	},
	{
		id: 3,
		name: 'Total Transaction Volume',
		qty: '452,000',
	},
	{
		id: 4,
		name: 'Total Transaction Value',
		qty: '₦4,000,000',
	},
];

const index = () => {
	return (
		<div className=''>
			{/* card display */}
			<div className='flex justify-between space-x-4'>
				{transactionData.map(({ id, name, qty }) => (
					<Card key={id} style={{ width: '30%' }}>
						<div className='flex justify-between'>
							<div>
								<p className='text-major-color text-xs font-light'>{name}</p>
								<p className='text-lg'>{qty}</p>
							</div>
							<div className=''>
								<img src={cardChart} alt='' />
							</div>
						</div>
					</Card>
				))}
			</div>
			{/* card display */}

			{/* chart display */}
     
        <ApexBarChart />
      
			{/* chart display */}

			{/* table with pagination display */}
			<div className=' my-2'><Typography className='text-4xl font-light'>Payments</Typography></div>
			<CustomTable />
			{/* table with pagination display */}
		</div>
	);
};

export default index;

