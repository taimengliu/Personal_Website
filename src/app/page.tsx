import Link from "next/link";

const socialLinks = [
  { href: "https://github.com/tammy", text: "Github" },
  { href: "https://www.linkedin.com/in/tammyliutm", text: "LinkedIn" },
  { href: "mailto:tammy.liu.x@gmail.com", text: "Email" },
];

function CustomLink({ href, children, className = "", ...props }) {
  return (
    <Link href={href} className={`${className}`} {...props}>
      {children}
    </Link>
  );
}

function Header() {
  const goalsUrl = "https://asana.com/features/goals-reporting/goals";

  return (
    <header className="">
      <p>
        Tammy is building{" "}
        <CustomLink href={goalsUrl}>Goals at Asana.</CustomLink>
      </p>
    </header>
  );
}

export default function Home() {
  return (
    <main className="">
      <Header />
      <p>
        {socialLinks.map((link) => (
          <CustomLink key={link.href} href={link.href}>
            {link.text.toLowerCase()}
          </CustomLink>
        ))}
      </p>
    </main>
  );
}
