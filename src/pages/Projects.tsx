import { useEffect, useState } from 'react'

type Repo = {
  id: number
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  language: string | null
  updated_at: string
}

export default function Projects(){
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    async function run(){
      try{
        const resp = await fetch('https://api.github.com/users/nipuni-Gurusinghe/repos?per_page=100&sort=updated')
        const data: Repo[] = await resp.json()
        setRepos(data.filter(r => !r.name.startsWith('.')))
      }finally{
        setLoading(false)
      }
    }
    run()
  },[])

  return (
    <div>
      <h2 className="section-title">Projects </h2>
      {loading && <div className="small">Loading projects…</div>}
      <div className="list">
        {repos.map(r=>(
          <div className="card project" key={r.id}>
            <div className="meta">
              <h3 style={{margin:'0 0 4px 0'}}>{r.name}</h3>
              <div className="small">{r.description || 'No description'}</div>
              <div className="small">Language: {r.language || '—'} • Updated {new Date(r.updated_at).toLocaleDateString()}</div>
            </div>
            <div>
              <a className="btn" href={r.html_url} target="_blank" rel="noreferrer">View on GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
