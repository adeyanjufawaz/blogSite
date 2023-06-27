import { Link } from "react-router-dom"
import img1 from "../../img/mainMan.png"
import img2 from "../../img/staff1.png"
import img3 from "../../img/staff2.png"
import img4 from "../../img/staff3.png"
function Reviews() {
  return (
    <>
      <div className='grid gap-16 bg-[rgba(235,202,208,.7)] p-[3rem] lg:p-20 grid-cols-1 lg:grid-cols-[1fr,2fr]'>
        <div>
          <img src={img1} alt="mainMa" className="rounded-[50%] mb-8 lg:mb-0 h-[15rem] w-[15rem] mx-auto" />
        </div>
        <div className="flex flex-col justify-center items-start">
          <h2 className="mb-8 lg:mb-16">"Chatter has become an integral part of my online experience. As a user of this incredible blogging platform, I have discovered a vibrant community of individuals who are passionate about sharing their ideas and engaging in thoughtful discussions.”</h2>
          <h3 className="mb-8"><span className="text-[1.1rem] font-bold">Adebobola Muhydeen</span>, Software developer at Apple </h3>
          <Link to="/login" className="border py-3 rounded-lg text-white bg-blue-800 px-6">Join chatter</Link>
        </div>

      </div>
      <div className="grid gap-16 p-[3rem] lg:p-20 grid-cols-[.5fr,1] lg:grid-cols-[1fr,3fr] ">
        <div className="img--box relative mx-auto w-full md:w-1/2  lg:w-full min-h-[300px]">
          <img src={img4} alt="" className="rounded-[50%] absolute top-0 left- w-[7rem] h-[7rem]" />
          <img src={img2} alt="" className="rounded-[50%] absolute top-[30%] right-[5%] w-[7rem] h-[7rem]" />
          <img src={img3} alt="" className="rounded-[50%] absolute bottom-0 left-0- w-[7rem] h-[7rem]" />
        </div>
        <div className="lg:w-[70%] mx-auto">
          <h2 className="text-[2rem] mb-8 font-bold leading-[3rem] tracking-wide">Write, read and connect with great minds on chatter</h2>
          <h3 className="my-8 text-[1.1rem]">
            Share people your great ideas, and also read write-ups based on your interests. connect with people of same interests and goals
          </h3>
          <Link to="/login" className="border py-3 rounded-lg text-white bg-blue-800 px-6">Get started</Link>
        </div>
      </div>
    </>

  )
}

export default Reviews