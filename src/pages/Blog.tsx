import { useEffect } from 'react'

export default function Blog(){
  useEffect(()=>{
    // Immediately redirect to Medium blogs in a new tab, but keep this page with a link too
    window.open('https://medium.com/@nipunigurusinghe','_blank')
  },[])

  return (
    <div>
      <h2 className="section-title">Blog</h2>
      <p className="small">Your Medium page should open in a new tab. If it didn't, <a className="btn" href="https://medium.com/@nipunigurusinghe" target="_blank">open Medium</a>.</p>
    </div>
  )
}
