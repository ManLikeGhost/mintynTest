import { useState } from "react";
import { Menu, Typography, Button } from 'antd';
import OverviewIcon from '../../assets/images/OverviewIcon.svg'
import AllOrders from '../../assets/images/AllOrders.svg'
import AllPayments from '../../assets/images/AllPayments.svg'
import ManSettlement from '../../assets/images/ManSettlement.svg'
import MerchantProfile from '../../assets/images/MerchantProfile.svg'
import UnRecPayments from '../../assets/images/UnRecPayments.svg'
import PendOrders from '../../assets/images/PendOrders.svg'
import RecOrders from '../../assets/images/RecOrders.svg'
import RecPayments from '../../assets/images/RecPayments.svg'
// import { Link } from 'react-router-dom';

const Sidebar = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activeKey, setActiveKey] = useState('1'); 

  const handleClick = (key) => {
    setActiveKey(key);
  };
  return (
    <div className="top-0 left-0 h-screen w-[260px] bg-white shadow-md overflow-hidden xs:hidden">
      <Menu mode="vertical" >
        <Button type="Primary" shape="round" size='large' className='bg-[#34ae60] text-white m-4 font-light'>GENERATE INVOICE</Button>
        <div className="flex justify-start m-6 ">
          <Typography className="text-major-color font-light">Main</Typography>
        </div>
        <Menu.Item
          key="1"
          className={activeKey === '1' ? 'active-menu-item' : ''} 
          onClick={() => handleClick('1')}
        >
          {/* <Link to="/">  */}
            <div className="flex items-center space-x-4 p-2">
              <img src={OverviewIcon} alt='dashboard Icon' />
              <Typography className="text-major-color font-light">Overview</Typography>
            </div>
          {/* </Link> */}
        </Menu.Item>
        <div className="flex justify-start m-6 ">
          <Typography className="text-major-color font-light">Payments</Typography>
        </div>
        <Menu.Item
          key="2"
          className={activeKey === '2' ? 'active-menu-item' : ''}
          onClick={() => handleClick('2')}
        >
          {/* <Link to="/payments">  */}
            <div className="flex items-center space-x-4 p-2">
              <img src={AllPayments} alt='dashboard Icon' />
              <Typography className="text-major-color font-light">All Payments</Typography>
            </div>
          {/* </Link> */}
        </Menu.Item>
        <Menu.Item key="1">
          <div className="flex items-center space-x-4 p-2">
            <img src={RecPayments} alt='dashboard Icon' />
            <Typography className="text-major-color font-light">Reconcilled Payments</Typography>
          </div>
        </Menu.Item>
        <Menu.Item key="1">
          <div className="flex items-center space-x-4 p-2">
            <img src={UnRecPayments} alt='dashboard Icon' />
            <Typography className="text-major-color font-light">Un-Reconcilled Payments</Typography>
          </div>
        </Menu.Item>
        <Menu.Item key="1">
          <div className="flex items-center space-x-4 p-2">
            <img src={ManSettlement} alt='dashboard Icon' />
            <Typography className="text-major-color font-light">Manual Settlement</Typography>
          </div>
        </Menu.Item>
        <div className="flex justify-start m-6 "><Typography className="text-major-color font-light">Orders</Typography></div>
        <Menu.Item key="1">
          <div className="flex items-center space-x-4 p-2">
            <img src={AllOrders} alt='dashboard Icon' />
            <Typography className="text-major-color font-light">All Orders</Typography>
          </div>
        </Menu.Item>
        <Menu.Item key="1">
          <div className="flex items-center space-x-4 p-2">
            <img src={PendOrders} alt='dashboard Icon' />
            <Typography className="text-major-color font-light">Pending Orders</Typography>
          </div>
        </Menu.Item>
        <Menu.Item key="1">
          <div className="flex items-center space-x-4 p-2">
            <img src={RecOrders} alt='dashboard Icon' />
            <Typography className="text-major-color font-light">Reconcilled Orders</Typography>
          </div>
        </Menu.Item>
        <Menu.Item
          key="8"
          className={activeKey === '8' ? 'active-menu-item' : ''}
          onClick={() => handleClick('8')}
        >
          {/* <Link to="/profile">  */}
            <div className="flex items-center space-x-4 p-2">
              <img src={MerchantProfile} alt='dashboard Icon' />
              <Typography className="text-major-color font-light">Merchant Profile</Typography>
            </div>
          {/* </Link> */}
        </Menu.Item> 
      </Menu>
    </div>
  )
}

export default Sidebar






  
        