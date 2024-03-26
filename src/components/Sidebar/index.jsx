import React from 'react'
import { Menu, Typography } from 'antd';
import OverviewIcon from '../../assets/images/OverviewIcon.svg'

const index = () => {
  return (
    <div className="top-0 left-0 h-screen w-[260px] bg-white shadow-md overflow-hidden">
      <Menu mode="vertical" style={{ height: 'calc(100vh - 60px)' }}> {/* Adjust height for navbar */}
        <Menu.Item key="1">
          <div className='flex flex-row'>
            <img src={OverviewIcon} alt='dashboard Icon' />
            <Typography>Overview</Typography>
          </div>
        </Menu.Item>
        <Menu.Item key="2">
          <div>Item 2</div>
        </Menu.Item>
        {/* Add remaining Menu.Items for other items (up to 10) */}
        <Menu.Divider />
      </Menu>
    </div>
  )
}

export default index