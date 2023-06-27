import {db} from "./firebasecinfig"
import { useEffect, useState } from "react"
import {DocumentData,collection, onSnapshot, QuerySnapshot} from "firebase/firestore"
// import { NewBlogType } from "./types/blog"

interface NewBlogType {
    author?: string
    content?: string
    id?:string
    minsPerRead?:number
    occupation?: string
    timeOfPublishing?:string
    title?:string
}

function Test () {
    const [blogs, setBlogs] = useState<NewBlogType[]>([])
    const blogsCollectionRef = collection(db, "blogs")
    useEffect(() => {
      onSnapshot(blogsCollectionRef, (snapshot: QuerySnapshot<DocumentData>) => {
        setBlogs(
          snapshot.docs.map(cur => {
            return{
             id: cur.id,
             ...cur.data()
            }
           })
        )
      })
      
    }, [])
    console.log(blogs)
  return (
    <div className="Test">
      
      <h1 className='text-[60px]'>Hello</h1>
    </div>
  )
}

export default Test