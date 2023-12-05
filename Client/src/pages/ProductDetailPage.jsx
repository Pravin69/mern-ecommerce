import ProductDetails from "../features/product/components/ProductDetails";
import Navbar from "../features/navbar/Navbar";
import Footer from "../features/common/Footer";

function ProductDetailPage() {
  return (
    <div>
      <Navbar>
        <ProductDetails />
      </Navbar>
      <Footer />
    </div>
  );
}

export default ProductDetailPage;
