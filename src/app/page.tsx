import Link from "next/link";
import styles from "@/app/page.module.css";

const socialLinks = [
  { href: "https://github.com/tammy", text: "Github" },
  { href: "https://www.linkedin.com/in/tammyliutm", text: "LinkedIn" },
  { href: "mailto:tammy.liu.x@gmail.com", text: "Email" },
];

function CustomLink({ href, children, className = "", ...props }) {
  return (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  );
}

function Title() {
  const goalsUrl = "https://asana.com/features/goals-reporting/goals";

  return (
    <header className={styles.center}>
      <h1>
        Tammy is building{" "}
        <CustomLink href={goalsUrl}>Goals at Asana.</CustomLink>
      </h1>
    </header>
  );
}

function SocialLink({ href, text }) {
  return (
    <CustomLink className={styles.card} href={href}>
      {text.toLowerCase()}
    </CustomLink>
  );
}

export default function Home() {
  return (
    <main className={styles.main}>
      <Title />
      <div>
        {socialLinks.map((link) => (
          <SocialLink key={link.href} {...link} />
        ))}
      </div>
    </main>
  );
}
