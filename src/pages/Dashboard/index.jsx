import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import DashboardContent from '../../components/DashboardContent'
const index = () => {
	return (
		<>
			<Navbar />
      <div className="flex bg-[#f7f8fa]"> 
        <Sidebar />
        <div className="flex-grow p-4"> 
          <DashboardContent />
        </div>
      </div>
		</>
	);
};

export default index;


