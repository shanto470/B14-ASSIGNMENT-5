import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import { Suspense, useState } from "react"
import Technologies from "./Components/ExploreSection/Technologies"
import type { Itechnology } from "./Type/Technology"
import Footer from "./Components/Footer"


const technologiesFetch = async (): Promise<Itechnology[]> => {
  const res = await fetch("../public/data.json")
  const data = await res.json()
  return data
}

function App() {

  const [technologiesPromise] = useState(() => technologiesFetch())
  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={<p className="text-center text-4xl text-blue-600 font-bold ">Technologies Loading....</p>}>
        <Technologies technologiesPromise={technologiesPromise}></Technologies>
      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App
