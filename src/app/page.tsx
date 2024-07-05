import Link from "next/link";

const socialLinks = [
  { href: "https://www.linkedin.com/in/tammyliutm/", text: "LinkedIn" },
  { href: "https://github.com/tammy", text: "Github" },
];

function CustomLink({
  href,
  className = "",
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
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

function SocialLink({ href, text }: { href: string; text: string }) {
  return (
    <CustomLink className="m-2 font-mono" href={href}>
      {text.toLowerCase()}
    </CustomLink>
  );
}

function Title() {
  const goalsUrl = "https://asana.com/features/goals-reporting/goals";

  return (
    <h1 className="flex">
      <p>
        Tammy is building{" "}
        <CustomLink className="underline underline-offset-4" href={goalsUrl}>
          Goals at Asana
        </CustomLink>
      </p>
    </h1>
  );
}

function SubTitle() {
  const figureSkatingUrl = "https://www.instagram.com/tamz.on.ice";
  return (
    <h4 className="flex">
      <p>
        senior software engineer by daylight ☀️,{" "}
        <CustomLink className="underline" href={figureSkatingUrl}>
          figure skater
        </CustomLink>{" "}
        by moonlight &#127769;
      </p>
    </h4>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between space-y-4 p-10">
      <header className="flex flex-col w-full justify-center space-y-8">
        <Title />
        <SubTitle />
      </header>
      <SocialsSection />
    </main>
  );
}
