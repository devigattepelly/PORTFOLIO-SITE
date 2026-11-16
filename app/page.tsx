import { Download } from "lucide-react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { certifications, confirmedSkills, education, experience, site, skills } from "@/data/site";

export default function Home() {
  return (
    <>
      <Hero />
      <Section id="about" title="About">
        <div className="max-w-2xl space-y-4 text-lg leading-relaxed text-muted">
          {site.about.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <ol className="space-y-4 border-l border-line pl-6">
          {experience.map((e, i) => (
            <li key={i}>
              <details open={i === 0} className="group rounded-lg border border-line bg-card p-4">
                <summary className="cursor-pointer list-none">
                  <span className="font-semibold">{e.title}</span>
                  <span className="text-muted"> · {e.company}</span>
                  <span className="block text-sm text-muted">{e.dates}</span>
                </summary>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-muted">{e.points.map((p, j) => <li key={j}>{p}</li>)}</ul>
                <ul className="mt-3 flex flex-wrap gap-2">{e.tech.map((t) => <li key={t} className="rounded bg-bg px-2 py-0.5 text-xs text-muted">{t}</li>)}</ul>
              </details>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="projects" title="Projects"><Projects /></Section>

      <Section id="skills" title="Skills">
        <p className="mb-6 text-sm text-muted">Solid outline: confirmed. Dashed outline: suggested placeholder, edit in data/site.ts.</p>
        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(skills).map(([cat, items]) => (
            <div key={cat}>
              <h3 className="mb-2 font-medium">{cat}</h3>
              <ul className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <li key={s} className={`rounded border px-2 py-1 text-sm ${confirmedSkills.includes(s) ? "border-accent" : "border-dashed border-line text-muted"}`}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="education" title="Education and certifications">
        {education.map((e, i) => <p key={i}><span className="font-medium">{e.degree}</span>, {e.school}, {e.year}</p>)}
        <p className="mt-4 text-muted">{certifications.length ? certifications.join(" · ") : "[Add certifications in data/site.ts]"}</p>
        <a href={site.resume} download className="mt-8 inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm hover:border-accent">
          <Download size={16} /> Download resume (PDF)
        </a>
      </Section>

      <Section id="contact" title="Contact"><Contact /></Section>
      <footer className="border-t border-line py-8 text-center text-sm text-muted">© {new Date().getFullYear()} {site.name}</footer>
    </>
  );
}
