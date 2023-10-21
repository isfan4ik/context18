/* eslint-disable react/prop-types */
import Footer from "../components/HomePage/Footer/Footer";
import Header from "../components/HomePage/Header/Header";
// import Category from "../components/MilkProducts/Category/Category";
import Products from "../components/Products/Products";
import { useGlobalContext } from "../context";

export default function AllProducts() {
  const { goToaddCard } = useGlobalContext();
  return (
    <div>
      <Header/>
      <Products goToaddCard={goToaddCard}/>
      {/* <Category/> */}
      <Footer/>
    </div>
  )
}