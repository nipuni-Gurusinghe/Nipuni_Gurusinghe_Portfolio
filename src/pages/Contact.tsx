export default function Contact(){
  const phone = '+94701424978' // <-- replace with your WhatsApp number in international format without +
  return (
    <div>
      <h2 className="section-title">Contact Me</h2>
      <p className="small">Click the button below to chat via WhatsApp.</p>
      <a className="btn" href={`https://wa.me/${phone}`} target="_blank" rel="noreferrer">Message on WhatsApp</a>
      <hr className="sep"/>
      <form onSubmit={(e)=>{e.preventDefault(); const form = e.target as HTMLFormElement; const data = new FormData(form); const subject = encodeURIComponent('Portfolio Contact'); const body = encodeURIComponent(Array.from(data.entries()).map(([k,v])=>`${k}: ${v}`).join('\n')); window.location.href = `mailto:nipuni@example.com?subject=${subject}&body=${body}`}}>
        <div className="grid" style={{gridTemplateColumns:'1fr 1fr'}}>
          <div><label>Name<br/><input name="name" required/></label></div>
          <div><label>Email<br/><input type="email" name="email" required/></label></div>
        </div>
        <div style={{marginTop:8}}><label>Message<br/><textarea name="message" rows={5} required/></label></div>
        <div style={{marginTop:12}}><button className="btn" type="submit">Send Email</button></div>
      </form>
    </div>
  )
}
