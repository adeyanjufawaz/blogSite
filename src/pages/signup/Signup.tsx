import Header from "../../components/Header"
import img1 from "../../img/signp.png"

function Signup() {
  return (
    <>
    <Header/>
    <div className='hidden lg:flex gap-10 '>
      <img src={img1} alt="signpIg" className="h-[100vh] w-1/3" />
      
    </div>
    </>
    
  )
}

export default Signup