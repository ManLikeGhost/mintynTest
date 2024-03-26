import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
const index = () => {
	return (
		<>
			<Navbar />
			<div className='bg-[#f7f8fa]'>
				<Sidebar />
			</div>
		</>
	);
};

export default index;
