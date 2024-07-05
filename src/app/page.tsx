import Link from "next/link";

const socialLinks = [
  { href: "https://www.linkedin.com/in/tammyliutm/", text: "LinkedIn" },
  { href: "https://github.com/tammy", text: "Github" },
];

function CustomLink({ href, className = "", children }) {
  return (
    <Link
      className={`underline-offset-auto	hover:text-yellow-gold hover:transition-colors ease-in-out duration-200 ${className}`}
      href={href}
    >
      {children}
    </Link>
  );
}

function SocialsSection() {
  return (
    <div className="flex">
      {socialLinks.map((link) => (
        <SocialLink key={link.href} {...link} />
      ))}
    </div>
  );
}

function SocialLink({ href, text }) {
  return (
    <CustomLink className="m-2 font-mono" href={href}>
      {text.toLowerCase()}
    </CustomLink>
  );
}

function Title() {
  const goalsUrl = "https://asana.com/features/goals-reporting/goals";

  return (
    <header className="flex w-full justify-center">
      <h1 className="flex">
        <p>
          Tammy is building{" "}
          <CustomLink className="underline underline-offset-4" href={goalsUrl}>
            Goals at Asana
          </CustomLink>
        </p>
      </h1>
    </header>
  );
}

function SubTitle() {
  const figureSkatingUrl = "https://www.instagram.com/tamz.on.ice";
  return (
    <div className="flex w-full justify-center mb-28">
      <h4>
        senior software engineer by daylight ☀️,{" "}
        <CustomLink className="underline" href={figureSkatingUrl}>
          figure skater
        </CustomLink>{" "}
        by moonlight &#127769;
      </h4>
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Title />
      <SubTitle />
      <SocialsSection />
    </main>
  );
}
