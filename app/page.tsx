import Image from "next/image";

const CAL_URL = "https://cal.com/ahat-rawjani/15min";
const GOOGLE_FORM_EMBED_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdsnVNnD0Hm9fcXqkoqDUlJBg7oBvH7AtUMpLLSBFo4ocUw5Q/viewform?embedded=true"; // TODO: replace

const colleges = [
  "UPenn",
  "Duke",
  "Brown",
  "Carnegie Mellon",
  "UC Berkeley",
  "Georgia Tech",
  "UVA",
];

const services = [
  {
    title: "Extracurriculars",
    body:
      "Stop padding your resume with clubs. We help you start projects, win at real competitions, and turn scattered interests into a story admissions officers actually remember.",
  },
  {
    title: "Essays",
    body:
      "Personal statements and supplements that sound like you — not a tutor and not ChatGPT. Line-by-line edits on Common App, every quirky supplement, and the 'Why Us' nobody knows how to write.",
  },
  {
    title: "Test Prep",
    body:
      "SAT, ACT, and AP strategy from people who scored in the top 1%. Targeted drills, real-test pacing, and a score plan that fits your timeline — not a generic 12-week boot camp.",
  },
];

const team = [
  {
    name: "Taha Rawjani",
    role: "Co-founder · UPenn CS '30",
    blurb:
      "Engineer & researcher. Cofounder of Moby Labs (AI whale tracking, patent-pending). Believer that the best applications start with the best projects.",
    accomplishments: [
      "Admitted to UPenn (Engineering, CS)",
      "1540 SAT · 4.63 GPA (Summa Cum Laude) · 16 AP exams, all 5s",
      "Regeneron ISEF Grand Award (4th Place) + Presidential Scholarship",
      "Cofounder & CTO, Moby Labs — patent-pending tech",
      "SWE Intern at Maximus & Janelia HHMI (2 of 45 selected)",
      "USACO Platinum · Codeforces Candidate Master",
      "Wrote Neo OS from scratch in C++/assembly",
      "Honored on the U.S. House floor for whale conservation research",
    ],
  },
  {
    name: "Shaurya Jeevegan",
    role: "Co-founder · UPenn Math '30",
    blurb:
      "Researcher & builder. ML for healthcare, physics-informed AI, and the kind of nonprofit work that actually scales.",
    accomplishments: [
      "Co-authored research accepted to IEEE 2025 Int'l Conf. on Engineering & Computing Technologies",
      "1590 SAT · 4.7 GPA · 15 AP exams, all 5s",
      "Built GaitGuard, an ML-based fall risk detector — 4 awards including IEEE Tech Achievement & MIT Club of DC",
      "Research Intern at Harvard Undergraduate OpenBio Lab — physics-informed AI for PM2.5 air pollution",
      "Cofounder & Lead Instructor, Code4All — taught 1,000+ elementary students Java across 45+ classes",
      "Virginia Governor's School for Math, Science & Tech — 1 of 159 selected statewide",
    ],
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-background text-foreground">
      <Header />
      <Hero />
      <CollegeMarquee />
      <Services />
      <About />
      <SignupForm />
      <FinalCta />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <Crest />
          <span className="font-serif text-lg tracking-tight text-ivy-deep">
            Creighton Consulting
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
          <a href="#services" className="hover:text-foreground">Services</a>
          <a href="#about" className="hover:text-foreground">About</a>
          <a href="#signup" className="hover:text-foreground">Sign up</a>
        </nav>
        <a
          href={CAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-ivy px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-ivy-deep"
        >
          Book free call
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.3fr_1fr] md:items-center md:py-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs uppercase tracking-[0.18em] text-ivy">
            <span className="size-1.5 rounded-full bg-accent" />
            First call always free
          </span>
          <h1 className="mt-5 font-serif text-5xl leading-[1.02] tracking-tight text-ivy-deep md:text-6xl">
            Get into the school
            <br />
            <em className="font-normal italic text-accent">you actually want.</em>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            We're two seniors who got into Penn, Duke, Brown, CMU, Berkeley, Georgia Tech,
            and UVA — and we'll walk you through extracurriculars, essays, and test prep
            the way we wish someone had walked us through it.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-ivy px-6 text-sm font-medium text-background transition-colors hover:bg-ivy-deep"
            >
              Book your free call
              <span aria-hidden>→</span>
            </a>
            <a
              href="#services"
              className="inline-flex h-11 items-center rounded-full border border-line bg-surface px-6 text-sm font-medium text-foreground transition-colors hover:border-ivy"
            >
              See how we help
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.16em] text-muted">
            <span>1:1, never group</span>
            <span aria-hidden className="text-line">•</span>
            <span>Built by students, for students</span>
          </div>
        </div>
        <HeroPhoto />
      </div>
    </section>
  );
}

function HeroPhoto() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -inset-3 rounded-[2rem] bg-ivy/10" aria-hidden />
      <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-surface">
        <Image
          src="/team.png"
          alt="Taha Rawjani and Shaurya Jeevegan, co-founders of Creighton Consulting"
          width={1400}
          height={1100}
          priority
          className="h-auto w-full object-cover"
        />
      </div>
      <div className="absolute -bottom-3 -right-3 hidden rounded-full border border-line bg-background px-4 py-2 text-xs uppercase tracking-[0.18em] text-ivy-deep shadow-sm md:block">
        <span className="text-accent">●</span>{" "}Class of 2026
      </div>
    </div>
  );
}

function CollegeMarquee() {
  const loop = [...colleges, ...colleges, ...colleges];
  return (
    <section
      aria-label="Where our students get in"
      className="marquee overflow-hidden border-b border-line bg-ivy-deep py-7 text-background"
    >
      <div className="mx-auto mb-4 flex max-w-6xl items-center justify-between px-6 text-xs uppercase tracking-[0.22em] text-background/70">
        <span>Our acceptances · Class of '26</span>
        <span className="hidden sm:inline">Always spinning ↻</span>
      </div>
      <div className="flex w-max marquee-track">
        {loop.map((c, i) => (
          <div
            key={i}
            className="flex shrink-0 items-center gap-10 px-10 font-serif text-2xl tracking-tight md:text-3xl"
          >
            <span>{c}</span>
            <span aria-hidden className="text-accent">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-ivy-deep md:text-5xl">
            Three things,
            <em className="font-normal italic text-accent"> done well.</em>
          </h2>
          <p className="max-w-md text-sm text-muted md:text-base">
            No 80-page packets. No empty pep talks. We focus on what actually moves the
            needle on an application.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="rounded-2xl border border-line bg-surface p-7 transition-colors hover:border-ivy"
            >
              <span className="font-mono text-xs text-muted">0{i + 1}</span>
              <h3 className="mt-3 font-serif text-2xl tracking-tight text-ivy-deep">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-b border-line bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-ivy-deep md:text-5xl">
            Who you'd be working with.
          </h2>
          <span className="text-xs uppercase tracking-[0.2em] text-muted">
            The two of us · est. 2026
          </span>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {team.map((m) => (
            <article
              key={m.name}
              className="flex flex-col rounded-2xl border border-line bg-background p-7"
            >
              <div className="flex items-start gap-4">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-ivy font-serif text-xl text-background">
                  {m.name
                    .split(" ")
                    .map((p) => p[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <h3 className="font-serif text-2xl leading-tight tracking-tight text-ivy-deep">
                    {m.name}
                  </h3>
                  <p className="mt-0.5 text-xs uppercase tracking-[0.16em] text-accent">
                    {m.role}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{m.blurb}</p>
                </div>
              </div>
              <ul className="mt-6 space-y-2.5 text-sm leading-relaxed text-foreground">
                {m.accomplishments.map((a) => (
                  <li key={a} className="flex gap-3">
                    <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SignupForm() {
  return (
    <section id="signup" className="border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1fr_1.3fr] md:items-start">
        <div className="md:sticky md:top-8">
          <span className="text-xs uppercase tracking-[0.22em] text-accent">
            Step one
          </span>
          <h2 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-ivy-deep md:text-5xl">
            Tell us a bit
            <br />
            <em className="font-normal italic">about you.</em>
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted md:text-base">
            Fill this out and we'll reach out within 24 hours to set up a free intro
            call. Prefer to skip the form?{" "}
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-ivy underline decoration-accent decoration-2 underline-offset-4 hover:text-ivy-deep"
            >
              Book directly here
            </a>
            .
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-line bg-surface">
          <iframe
            src={GOOGLE_FORM_EMBED_URL}
            title="Sign up"
            width="100%"
            height="780"
            className="block w-full"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bg-ivy-deep text-background">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-14 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-serif text-3xl leading-tight tracking-tight md:text-4xl">
            Your first call is on us.
          </h2>
          <p className="mt-2 max-w-lg text-sm text-background/70 md:text-base">
            Thirty minutes. No pitch. Bring your list, your essays, your worries — leave
            with a plan.
          </p>
        </div>
        <a
          href={CAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 items-center gap-2 rounded-full bg-background px-7 text-sm font-medium text-ivy-deep transition-transform hover:-translate-y-0.5"
        >
          Book on Cal.com
          <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line/60 bg-ivy-deep text-background/70">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 py-6 text-xs md:flex-row md:items-center">
        <div className="flex items-center gap-2">
          <Crest light />
          <span className="font-serif text-base text-background">
            Creighton Consulting
          </span>
        </div>
        <span>© {new Date().getFullYear()} · Built by students, for students.</span>
      </div>
    </footer>
  );
}

function Crest({ light = false }: { light?: boolean }) {
  return (
    <span
      aria-hidden
      className={`flex size-7 items-center justify-center rounded-full font-serif text-sm ${
        light ? "bg-background text-ivy-deep" : "bg-ivy text-background"
      }`}
    >
      C
    </span>
  );
}
