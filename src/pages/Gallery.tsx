const items = [
  { src: '/assets/gallery/Postman.png', title:'Tech Meetup', desc:'Postman 101 workshop @NIBM.This session was an incredible opportunity to dive deeper into the power of APIs'},
  { src: '/assets/gallery/Pieces.png', title:'Hackathon', desc:'Pieces Swag Winner at the API & GenAI Tour Sri Lanka 2025 '},
  { src: '/assets/gallery/DipFinalProject.png', title:'Projects', desc:'Diploma level final HungryMe-online food ordering system  presentation'},
  { src: '/assets/gallery/WSO2.jpg', title:'Field visit', desc:'Field visit to WSO2 '},
   { src: '/assets/gallery/IEEE.png', title:'IEEE', desc:'IEEE Student branch '},
]

export default function Gallery(){
  return (
    <div>
      <h2 className="section-title">Gallery</h2>
      <div className="grid cards">
        {items.map((it,i)=>(
          <div className="card" key={i}>
            <img src={it.src} alt={it.title} style={{width:'100%', borderRadius:12, border:'1px solid #1f2430'}}/>
            <h3>{it.title}</h3>
            <p className="small">{it.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
