import { useEffect } from 'react'

export default function Blog(){
  useEffect(()=>{
    
    window.open('https://medium.com/@nipunigurusinghe','_blank')
  },[])

  return (
    <div>
      <h2 className="section-title">Blog</h2>
      <p className="small"> <a className="btn" href="https://medium.com/@nipunigurusinghe" target="_blank">open Medium</a>.</p>
    </div>
  )
}
