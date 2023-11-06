import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import { Outlet } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { setDataProduct } from "./redux/productSlide";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch()
  const productData = useSelector((state)=>state.product)
 
  useEffect(()=>{
    (async()=>{
      const res = await fetch(`https://food-app-mern-production.up.railway.app/product`)
      const resData = await res.json()
      console.log(res);
      dispatch(setDataProduct(resData))
    })()
  },[])

  return (
    <>
      <Toaster />
      <div>
        <Header />
        <main className="pt-16 bg-slate-100 min-h-[calc(100vh)]">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
