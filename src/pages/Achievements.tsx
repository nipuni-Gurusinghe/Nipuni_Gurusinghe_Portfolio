import data from '../../data/achievements.json'

type Item = {
  title: string
  issuer: string
  date: string
  link?: string
  image?: string
}

export default function Achievements(){
  const items: Item[] = data.items
  
  return (
    <div>
      <h2 className="section-title">Achievements & Badges</h2>
      <div className="grid cards">
        {items.map((it, idx) => (
          <div className="card" key={idx}>
            {}
            {it.image && (
              <div style={{ 
                textAlign: 'center', 
                marginBottom: '16px',
                height: '120px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src={it.image} 
                  alt={it.title}
                  style={{ 
                    maxHeight: '100%', 
                    maxWidth: '100%',
                    borderRadius: '8px',
                    objectFit: 'contain'
                  }}
                />
              </div>
            )}
            
            <h3>{it.title}</h3>
            <div className="small">{it.issuer} • {it.date}</div>
            
            <div style={{ marginTop: '16px' }}>
              <a 
                className="btn secondary" 
                href={it.link || 'https://www.linkedin.com/in/nipuni-gurusinghe-b22a28283/'} 
                target="_blank" 
                rel="noreferrer"
              >
                View Credential
              </a>
            </div>
          </div>
        ))}
      </div>
      
     
    </div>
  )
}