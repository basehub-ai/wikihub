import { Pump } from "basehub/react-pump";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <Pump
      queries={[
        {
          settings: {
            logo: { url: true, alt: true, width: true, height: true },
            logoDark: { url: true, alt: true, width: true, height: true },
          },
          index: { title: true },
        },
      ]}
    >
      {async ([{ settings, index }]) => {
        "use server";

        return (
          <div className={styles.page}>
            <main className={styles.main}>
              <Image
                className={styles.logo}
                src={settings.logo.url}
                alt={settings.logo.alt ?? ""}
                width={settings.logo.width}
                height={settings.logo.height}
                priority
              />

              <Image
                className={styles.logoDark}
                src={settings.logoDark.url}
                alt={settings.logoDark.alt ?? ""}
                width={settings.logoDark.width}
                height={settings.logoDark.height}
                priority
              />

              <h1>{index.title}</h1>

              <div className={styles.ctas}>
                <a
                  className={styles.primary}
                  href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className={styles.logo}
                    src="/vercel.svg"
                    alt="Vercel logomark"
                    width={20}
                    height={20}
                  />
                  Deploy now
                </a>
                <a
                  href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondary}
                >
                  Read our docs
                </a>
              </div>
            </main>
            <footer className={styles.footer}>
              <a
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  aria-hidden
                  src="/file.svg"
                  alt="File icon"
                  width={16}
                  height={16}
                />
                Learn
              </a>
              <a
                href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  aria-hidden
                  src="/window.svg"
                  alt="Window icon"
                  width={16}
                  height={16}
                />
                Examples
              </a>
              <a
                href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  aria-hidden
                  src="/globe.svg"
                  alt="Globe icon"
                  width={16}
                  height={16}
                />
                Go to nextjs.org →
              </a>
            </footer>
          </div>
        );
      }}
    </Pump>
  );
}
