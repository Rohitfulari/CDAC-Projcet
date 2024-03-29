import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import DisplayCategary from './DisplayCategary';
import UpdateCategary from './UpdateCategary';
import DeleteCategary from './DeleteCategary';
import CategaryMasters from './CategaryMasters';
import PostCategaryMasters from './PostCategaryMasters';
import FormPage from './FormPage';
import Search from './Search';
import HomePage from './HomePage';
import Itineraries from './Itineraries'
//import NavigationBar from './Navbar';
import Home from './Home';
import Register from './Register';
import LoginModal from './LoginModal';
import LoginForm from './LoginForm';
import { NavigationBar } from './Navbartrial';
import ContentSearch from './ContentSearch';
import ContentSearchTrial from './ContentSearchTrial';
import BookingPage from './BookingPage';
import Passenger from './Passenger';
import BookingPageTrial from './PassengerForm'
import PassengerForm from './PassengerForm';
import DisplaySelected from './DisplaySelected';
import DeleteSelected from './DeleteSelected';
import UpdateSelected from './UpdateSelected';
import LinkData from './LinkData';
import Invoice from './Invoice';



function Routetable() {
  return (
    <div>
       
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}>
         <Route index element={<HomePage/>}/>
         <Route path="displayCategary/:code" element={<DisplayCategary/>}/>
        <Route path="updateCategary/:code" element={<UpdateCategary/>}/>
        <Route path="deleteCategary/:code" element={<DeleteCategary/>}/>
        <Route path="deleteCategary/:code" element={<DeleteCategary/>}/>
        <Route path="displaySelected/:url/:code" element={<DisplaySelected/>}/>
        <Route path="deleteSelected/:url/:code" element={<DeleteSelected/>}/>
         <Route path="updateSelected/:url/:code" element={<UpdateSelected/>}/> 
        <Route path="LinkData/" element={<LinkData/>}/>
        <Route path="categaryMasters" element={<CategaryMasters/>}/>
        <Route path="Search" element={<Search/>}/>
         <Route path="Search/:code" element={<Search/>}/>
        <Route path="HomePage" element={<HomePage/>}/>
        <Route path="PostCategaryMasters" element={<PostCategaryMasters/>}/>
        <Route path="FormPage" element={<FormPage/>}/> 
        <Route path="Itineraries/:code" element={<Itineraries/>}/> ?
        <Route path="Itineraries" element={<Itineraries/>}/>
        <Route path="Register" element={<Register/>}/>
        <Route path="LoginModal" element={<LoginModal/>}/>
        <Route path="LoginForm" element={<LoginForm/>}/>
        <Route path="ContentSearch" element={<ContentSearch/>}/>
        <Route path="ContentSearchTrial" element={<ContentSearchTrial/>}/>
        <Route path="Itineraries" element={<Itineraries/>}/>
        <Route path="BookingPage" element={<BookingPage/>}/>
        <Route path="Passenger" element={<Passenger/>}/>
        <Route path="PassengerForm" element = {<PassengerForm/>}/>
        <Route path="Invoice" element = {<Invoice/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    
    </div>
  )
}
export default Routetable;
