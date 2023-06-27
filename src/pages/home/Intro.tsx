import "./Intro.css" 

function Intro() {
  return (
    <div className="intro__section  flex items-center justify-center px-6 py-40">
      <div className="flex flex-col mx-auto w-full lg:w-1/2">
        <h1 className="text-white font-bold text-[2rem] my-3">
        Welcome to Chatter: A Haven for Text-Based Content
        </h1>
        <h2 className=" text-[1.2rem] font-normal text-white my-3">
        Unleash the Power of Words, Connect with Like-minded Readers and Writers
        </h2>
        <button className="my-4 bg-[#543EE0] py-2 rounded-sm font-bold text-white px-4 self-start ">Get started</button>
      </div>
    </div>
  )
}

export default Intro