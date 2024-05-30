import Nav from './components/Moléculas/nav'
import Imgperfiles from './components/Moléculas/imgperfiles'
import './App.css'
import Appliedstudies from './components/Organismos/ appliedstudies'
import Carousel from './components/Moléculas/Technology'
import Conponentcontats from './components/Moléculas/componentcontact'

import Formulario from './components/Átomos/contactfrom'
import Footer from './components/Átomos/footer'


export default function App() {
   return (
      <>
         <Nav />
         <Imgperfiles />
         <Appliedstudies />
         <Carousel />
         <Conponentcontats />
         <Formulario />
         <Footer/>
      </>
   )
}