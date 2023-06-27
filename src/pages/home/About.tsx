import img1 from "../../img/children.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Font Awesome Typescript preset
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
import {
  IconLookup,
  IconDefinition,
  findIconDefinition
} from '@fortawesome/fontawesome-svg-core'

const graphLookup: IconLookup = { prefix: 'fas', iconName: 'chart-line' }
const graphIconDefinition: IconDefinition = findIconDefinition(graphLookup)

const teamsLookup: IconLookup = { prefix: 'fas', iconName: 'people-group' }
const teamsIconDefinition: IconDefinition = findIconDefinition(teamsLookup)

const newsPaperLookup: IconLookup = { prefix: 'fas', iconName: 'newspaper' }
const newsPaperIconDefinition: IconDefinition = findIconDefinition(newsPaperLookup)



function About() {
  return (
    <div className="py-16">
      <div className='grid grid-cols-1 lg:grid-cols-[1.3fr,1fr] justify-center items-start gap-16 p-12 lg:gap-[6rem] lg:py-[3rem] lg:px-[6rem] mt-5 flex-wrap'>
        <div className="flex flex-col  justify-start items-start">
          <h1 className="lg:text-[48px] text-[32px] mb-6 font-bold">About Chatter</h1>
          <p className="text-[14px] lg:text-[18px]">
            Chatter is a multi-functional platform where authors and readers can have access to their own content. It aims to be a traditional bookworm’s heaven and a blog to get access to more text based content. Our vision is to foster an inclusive and vibrant community where diversity is celebrated. We encourage open-mindedness and respect for all individuals, regardless of their backgrounds or beliefs. By promoting dialogue and understanding, we strive
          </p>
        </div>
        <img src={img1} alt="group of children" className="mx-auto w-full" />
      </div>

      <div className="flex justify-center items-center flex-col px-[13%] py-8 mx-auto ">
        <h2 className="lg:text-[48px] text-[32px] mb-6 font-bold mx-8">
          Why you should join chatter
        </h2>
        <h3 className="text-[18px] lg:text-[18px] mx-4 ">
          Our goal is to make writers and readers see our platform as their next heaven for blogging, ensuring ease in interactions, connecting with like-minded peers, have access to favorite content based on interests and able to communicate your great ideas with people
        </h3>

        <div className="grid grid-cols-1 items-center lg:grid-cols-3 w-[90%] justify-center mt-16 gap-10">
          <div className="min-h-[300px] p-5 border-[grey] border rounded-[7px]">
            <div >
              <FontAwesomeIcon icon={graphIconDefinition} className="fa-x bg-[#b8b5b5] p-6 rounded-[50%] " fade />
            </div>
            <h2 className="font-bold py-3 text-[1.5rem] ">Analytics</h2>
            <p className=" text-[1rem]">
              Analytics to track the number of views, likes and comment and also analyze the performance of your articles over a period of time
            </p>
          </div>
          <div className="min-h-[300px] p-5 border-[grey] border rounded-[7px]">
            <div >
              <FontAwesomeIcon icon={teamsIconDefinition} className="fa-x bg-[#b8b5b5] p-6 rounded-[50%] " fade />
            </div>
            <h2 className="font-bold py-3 text-[1.5rem] ">Social Interactions</h2>
            <p className=" text-[1rem]">
              Users on the platform can interact with posts they like, comment and engage in discussions
            </p>
          </div>
          <div className="min-h-[300px] p-5 border-[grey] border rounded-[7px]">
            <div >
              <FontAwesomeIcon icon={newsPaperIconDefinition} className="fa-x bg-[#b8b5b5] p-6 rounded-[50%] " fade />
            </div>
            <h2 className="font-bold py-3 text-[1.5rem] ">Content creation</h2>
            <p className=" text-[1rem]">
              Write nice and appealing with our in-built markdown, a rich text editor
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About