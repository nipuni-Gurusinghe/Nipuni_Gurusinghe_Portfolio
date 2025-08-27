import GitHubSkills from "../components/GitHubSkills";

export default function Home() {
  return (
    <>
      {}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '2rem',
        minHeight: 'calc(100vh - 100px)'
      }}>
        <div className="grid" style={{ gap: 24 }}>
          {}
          <section className="header">
            <div>
              <h1 className="hero-title">
                Hello, I'm <span style={{ color: "#60a5fa" }}>Nipuni Gurusinghe</span>
              </h1>
              <p className="hero-sub">
                A passionate software engineering student based in Sri Lanka — I love
                building clean, user-focused web apps, exploring cloud (AWS/Azure),
                and learning data science basics. I enjoy sharing what I learn
                through blogs and projects.
              </p>

              {}
              <div
                style={{
                  display: "flex",
                  gap: 12,
                  marginTop: 16,
                  flexWrap: "wrap",
                }}
              >
                <a className="btn" href="/cv/Nipuni Gurusinghe.pdf" download>
                  Download my CV
                </a>
              </div>
            </div>

            {}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src="/assets/nipu.jpg"
                alt="Nipuni portrait"
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  borderRadius: "24px",
                  border: "2px solid #475569",
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
                }}
              />
            </div>
          </section>

          {}
          <hr className="sep" />

          {}
          <section>
            <h2 className="section-title">My Skills</h2>
            <div className="grid cards">
              <GitHubSkills username="nipuni-Gurusinghe" />
            </div>
          </section>
        </div>
      </div>

    </>
  );
}