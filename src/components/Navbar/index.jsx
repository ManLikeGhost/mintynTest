import TransMonitor from '../../assets/images/TransMonitor.svg';
import { Input, Badge, Avatar } from 'antd';
import { SearchOutlined, BellOutlined } from '@ant-design/icons';
const index = () => {
	return (
		<nav className="h-16 bg-white shadow-md flex items-center justify-between px-4">
      <div className="flex items-center">
        <img src={TransMonitor} alt="TransMonitor Logo" width={153} height={29} />
        <div className="w-full flex items-center ml-28">
          <Input
            placeholder="Search"
            prefix={<SearchOutlined style={{ fontSize: '16px', color:'#647787' }} />}
            className="w-full text-major-color font-light" 
            variant="borderless"
          />
        </div>
      </div>
      <div className="flex items-center space-x-12">
        <h6 className='text-major-color text-sm font-light' >Support</h6>
        <h6 className='text-major-color text-sm font-light' >FAQ</h6>
        <Badge count={8} color='blue' size="small"> 
          <BellOutlined />
        </Badge>
        <div className="flex items-center space-x-2">
          <h6 className='text-major-color text-sm font-light'>Hello,<br></br> Oluwaleke Ojo</h6>
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size='large'/>
        </div>  
      </div>
    </nav>
	);
};

export default index;
