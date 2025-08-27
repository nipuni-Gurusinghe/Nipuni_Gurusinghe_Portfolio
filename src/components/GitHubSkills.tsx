import { useEffect, useState } from "react";

type GitHubSkillsProps = {
  username: string;
};

type Skill = {
  name: string;
  imageUrl: string;
};

export default function GitHubSkills({ username }: GitHubSkillsProps) {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://raw.githubusercontent.com/${username}/${username}/main/README.md`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch README.md");
        return res.text();
      })
      .then((data) => {
        const match = data.match(/<h3.*?>Languages and Tools:.*?<\/h3>([\s\S]*?)(<h3|$)/i);
        if (!match) {
          setError("No skills found in README.");
          setLoading(false);
          return;
        }

        const images = [...match[1].matchAll(/<img.*?src="(.*?)".*?alt="(.*?)".*?>/g)].map((m) => ({
          imageUrl: m[1],
          name: m[2],
        }));

        setSkills(images);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching skills:", err);
        setError("Unable to load skills.");
        setLoading(false);
      });
  }, [username]);

  if (loading) return <p className="small">⏳ Loading skills...</p>;
  if (error) return <p className="small text-red-500">{error}</p>;

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(90px, 1fr))',
      gap: '1.5rem',
      padding: '1rem 0'
    }}>
      {skills.map((skill, idx) => (
        <div
          key={idx}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            padding: '1.25rem 0.75rem',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            transition: 'all 0.3s ease',
            cursor: 'default'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
            e.currentTarget.style.borderColor = 'rgba(96, 165, 250, 0.3)';
            e.currentTarget.style.transform = 'translateY(-4px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <img
            src={skill.imageUrl}
            alt={skill.name}
            style={{
              height: '28px',
              width: '28px',
              objectFit: 'contain',
              marginBottom: '0.75rem',
              filter: 'brightness(0.95)'
            }}
          />
          <span style={{ 
            fontSize: '0.7rem', 
            color: '#e5e7eb', 
            fontWeight: '500',
            textAlign: 'center',
            lineHeight: '1.3',
            letterSpacing: '0.02em'
          }}>
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  );
}