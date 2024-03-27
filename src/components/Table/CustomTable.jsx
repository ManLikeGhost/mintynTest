import {
	Table as AntdTable,
	Typography,
	Avatar,
	Button,
	Dropdown,
	Menu,
	Input,
	Space,
} from 'antd';
import { SearchOutlined, DownOutlined } from '@ant-design/icons';

const items = [
	{
		label: 'All',
		key: '0',
	},
	{
		label: 'Reconcilled',
		key: '1',
	},
	
	{
		label: 'Un-reconcilled',
		key: '3',
  },
  {
		label: 'Settled',
		key: '4',
  },
  {
		label: 'Unsettled',
		key: '5',
	},
];

const CustomTable = () => {
	const userMenu = (
		<Menu className='!rounded-xl border-2 border-novelgray-60 !p-2 !left-[-25%]'>
			{/* <Menu.Item className="!rounded-xl" onClick={() => setOpenViewUserModal(true)}> */}
			<Menu.Item className='!rounded-xl'>
				<div className='flex items-center px-2 py-1 space-x-2'>
					{/* <span>{icons.eyeIcon()}</span> */}
					<Typography.Text className='text-sm font-light text-[#f9c204]'>
						Pending
					</Typography.Text>
				</div>
			</Menu.Item>

			{/* <Menu.Item className="!rounded-xl" onClick={() => setOpenEditUserModal(true)}> */}
			<Menu.Item className='!rounded-xl'>
				<div className='flex items-center px-2 py-1 space-x-2'>
					{/* <span>{icons.editIcon()}</span> */}
					<Typography.Text className='text-sm font-light text-[#27AE60]'>
						Reconcilled
					</Typography.Text>
				</div>
			</Menu.Item>
			{/* <Menu.Item className="!rounded-xl" onClick={() => setOpenDeleteUserModal(true)}> */}
			<Menu.Item className='!rounded-xl'>
				<div className='flex items-center px-2 py-1 space-x-2'>
					{/* <span>{icons.delIconRed()}</span> */}
					<Typography.Text className='text-sm font-light text-[#C4C4C4]'>
						Un-reconcilled
					</Typography.Text>
				</div>
      </Menu.Item>
      <Menu.Item className='!rounded-xl'>
				<div className='flex items-center px-2 py-1 space-x-2'>
					{/* <span>{icons.delIconRed()}</span> */}
					<Typography.Text className='text-sm font-light text-[#BC1B06]'>
						Unsettled
					</Typography.Text>
				</div>
      </Menu.Item>
      <Menu.Item className='!rounded-xl'>
				<div className='flex items-center px-2 py-1 space-x-2'>
					{/* <span>{icons.delIconRed()}</span> */}
					<Typography.Text className='text-sm font-light text-[#2860ec]'>
          Settled
					</Typography.Text>
				</div>
			</Menu.Item>
		</Menu>
	);
	const dataInfo = [
		{
			TransacNo: '1234567890',
			key: '1',
			Price: '$73430',
			ItemType: 'Apple Mac Book 15” 250 SSD 12GB',
			Time: '12:30',
			staffId: '12345',
			status: 'Active',
		},
		{
			TransacNo: '1234567890',
			key: '2',
			Price: '$73430',
			ItemType: 'Apple Mac Book 15” 250 SSD 12GB',
			Time: '12:30',
			staffId: '12345',
			status: 'Active',
		},
		{
			TransacNo: '1234567890',
			key: '3',
			Price: '$73430',
			ItemType: 'Apple Mac Book 15” 250 SSD 12GB',
			Time: '12:30',
			staffId: '12345',
			status: 'Inactive',
		},
		{
			TransacNo: '1234567890',
			key: '4',
			Price: '$73430',
			ItemType: 'Apple Mac Book 15” 250 SSD 12GB',
			Time: '12:30',
			staffId: '12345',
			status: 'Active',
		},
		{
			TransacNo: '1234567890',
			key: '5',
			Price: '$73430',
			ItemType: 'Apple Mac Book 15” 250 SSD 12GB',
			Time: '12:30',
			staffId: '12345',
			status: 'Inactive',
		},
		{
			TransacNo: '1234567890',
			key: '6',
			Price: '$73430',
			ItemType: 'Apple Mac Book 15” 250 SSD 12GB',
			Time: '12:30',
			staffId: '12345',
			status: 'Inactive',
		},
	];
	return (
		<>
			<div className='space-y-4'>
				<div className=''>
					<div className='flex justify-between'>
						<div>
							<Typography>
								Showing <span className='text-blue-400'>20</span> out of 500
								payments
							</Typography>
						</div>
						<div className='w-6/12 flex items-center ml-12 border-b'>
							<Input
								placeholder='Search'
								prefix={
									<SearchOutlined
										style={{ fontSize: '16px', color: '#647787' }}
									/>
								}
								className='w-full text-major-color font-light'
								variant='borderless'
							/>
						</div>
						<div className=''>
							<Dropdown
								menu={{
									items,
								}}
								trigger={['click']}
							>
								<div onClick={(e) => e.preventDefault()}>
									<Space>
										<Typography className='font-light'>Show</Typography>
										<DownOutlined />
									</Space>
								</div>
							</Dropdown>
						</div>
					</div>
				</div>

				<div className='rounded-2xl overflow-hidden no-scrollbar mb-[250px]'>
					<AntdTable
						columns={[
							{
								title: 'Item Type',
								dataIndex: 'ItemType',
								key: 'itemT',
								render: (text) => (
									<div className='flex space-x-2'>
										<Avatar style={{ backgroundColor: '#7F8FA4' }}>vw</Avatar>
										<p className='p-1 font-light'>{text}</p>
									</div>
								),
							},
							{
								title: 'Price',
								dataIndex: 'Price',
								key: 'Price',
								render: (text) => <p className='text-major-color font-light'>{text}</p>,
							},
							{
								title: 'Transaction No',
								dataIndex: 'TransacNo',
								key: 'TransacNo',
								render: (text) => <p className='text-major-color font-light'>{text}</p>,
							},
							{
								title: 'Time',
								dataIndex: 'Time',
								key: 'Time',
								render: (text) => <p className='text-major-color font-light'>{text}</p>,
							},
							{
								dataIndex: 'action',
								key: 'action',
								render: () => (
									<div className='flex'>
										<Dropdown overlay={userMenu} trigger={['click']}>
											<Button className='text-xs text-major-color flex items-center text-color-yellow font-light'>
                        pending{' '}
                        <DownOutlined />
											</Button>
										</Dropdown>
									</div>
								),
								title: 'Action',
								width: 150,
							},
						]}
						dataSource={dataInfo}
						scroll={{ x: 'max-content' }}
						pagination={true}
						className='border rounded-2xl overflow-hidden'
					/>
				</div>
			</div>
		</>
	);
};

export default CustomTable;
