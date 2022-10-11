import Header from "./pages/Header";
import AddProductForm from "./productComponent/AddProductForm";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import AddCategoryForm from "./productComponent/AddCategoryForm";
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import AddUserForm from "./userComponent/AddUserForm";
import UserLoginForm from "./userComponent/UserLoginForm";
import MyCart from "./userComponent/MyCart";
import AddCardDetails from "./pages/AddCardDetails";
import MyOrder from "./userComponent/MyOrder";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/home/all/product/categories" element={<HomePage />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="/product" element={<Product />} />
        <Route path="/user/register" element={<AddUserForm />} />
        <Route path="/user/login" element={<UserLoginForm />} />
        <Route
          path="/home/product/category/:categoryId/:categoryName"
          element={<HomePage />}
        />
        <Route
          path="/product/:productId/category/:categoryId"
          element={<Product />}
        />
        <Route path="/user/mycart" element={<MyCart />} />
        <Route path="/user/order/payment" element={<AddCardDetails />} />
        <Route path="/user/myorder" element={<MyOrder />} />
      </Routes>
    </div>
  );
}

export default App;
