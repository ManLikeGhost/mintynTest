import { Component } from 'react';
import Chart from 'react-apexcharts';
import { Card, Typography } from 'antd';
import LoadingOption from '../../assets/images/loaderOption.svg';

class ApexCharts extends Component {
	constructor(props) {
		super(props);

		this.state = {
			options: {
				chart: {
					id: 'basic-bar',
				},
				xaxis: {
					categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
				},
			},
			series: [
				{
					name: 'series-1',
					data: [30, 40, 45, 50, 49, 60, 70, 91],
				},
			],
		};
	}

	render() {
		return (
			<div className='mt-3'>
				<div className='flex'>
					<div className='chart w-8/12 mr-4'>
						<Chart
							options={this.state.options}
							series={this.state.series}
							type='area'
							width='100%'
							height='400'
						/>
					</div>
					<div className='card flex-grow'>
						<div className='space-y-1'>
							<Card style={{height:192}}>
								<Typography className='font-bold space-y-1'>Orders</Typography>
                <img className='my-2' src={LoadingOption} alt='' />
                <ul className='space-y-1'>
                  <li>Pending Orders: <span className='text-color-yellow'>20</span></li>
                  <li>Reconcilled Orders: <span className='text-color-green'>80</span></li>
                  <li>Total Orders: <span className='text-color-blue'>100</span></li>
                </ul>
							</Card>
							<Card style={{height:192}}>
								<Typography className='font-bold space-y-1 '>Payments</Typography>
                <img className='my-2'  src={LoadingOption} alt='' />
                <ul className='space-y-1'>
                  <li>Un-reconcilled Payments: <span className='text-color-yellow'>20</span></li>
                  <li>Reconcilled Payments: <span className='text-color-green'>80</span></li>
                  <li>Total Payments: <span className='text-color-blue'>100</span></li>
                </ul>
							</Card>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ApexCharts;
