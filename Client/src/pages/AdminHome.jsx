import AdminProductList from "../features/admin/components/AdminProductList";
import Footer from "../features/common/Footer";
import Navbar from "../features/navbar/Navbar";

function AdminHome() {
  return (
    <div>
      <Navbar>
        <AdminProductList></AdminProductList>
      </Navbar>
      <Footer />
    </div>
  );
}

export default AdminHome;
