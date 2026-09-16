"use client";

import { useRef } from "react";
import { useApp } from "@/components/providers/AppProvider";
import { ALL_APPS, APP_STORE_DEVELOPER, FEATURED, appIcon, appShot, findApp } from "@/lib/apps";
import { THEMES } from "@/lib/projects";
import { ArrowUpRight, ArrowRight } from "@/components/ui/Icons";
import { SplitText } from "@/components/ui/SplitText";
import { asset } from "@/lib/paths";
import styles from "./Work.module.css";

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M16.4 12.6c0-2.4 2-3.6 2.1-3.7-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9-.8 0-1.9-.9-3.2-.8-1.6 0-3.1 1-4 2.4-1.7 3-.4 7.3 1.2 9.7.8 1.2 1.8 2.5 3 2.4 1.2 0 1.7-.8 3.2-.8s1.9.8 3.2.8c1.3 0 2.2-1.2 3-2.4.9-1.4 1.3-2.7 1.3-2.8 0 0-2.6-1-2.6-3.8ZM14 5.4c.7-.8 1.1-1.9 1-3-1 0-2.1.7-2.8 1.5-.6.7-1.2 1.8-1 2.9 1.1.1 2.1-.5 2.8-1.4Z" />
  </svg>
);

export function Work() {
  const { t, lang } = useApp();
  const stripRef = useRef<HTMLDivElement>(null);

  const scrollStrip = (dir: 1 | -1) => {
    const el = stripRef.current;
    if (!el) return;
    const rtl = document.documentElement.dir === "rtl";
    el.scrollBy({ left: (rtl ? -dir : dir) * Math.min(el.clientWidth * 0.8, 720), behavior: "smooth" });
  };

  return (
    <section id="work" className={`section ${styles.work}`}>
      <div className="container">
        <div className={styles.head}>
          <div>
            <p className="label" data-reveal="fade">
              {t.work.label}
            </p>
            <h2 className={`h-display ${styles.title}`} key={lang}>
              <SplitText text={t.work.title} as="span" />
            </h2>
          </div>
          <p className={`lead ${styles.intro}`} data-reveal>
            {t.work.intro}
          </p>
        </div>

        {/* Featured client apps — App Store artwork as poster cards */}
        <ul className={styles.featured} aria-label={t.work.featuredLabel}>
          {FEATURED.map((f, i) => {
            const a = findApp(f.id);
            return (
              <li key={f.id} className={styles.poster} data-reveal style={{ "--delay": `${(i % 3) * 90}ms` } as React.CSSProperties}>
                <a href={a.url} target="_blank" rel="noopener" className={styles.posterLink} aria-label={`${a.name} — App Store`}>
                  <span className={styles.art}>
                    <img src={asset(appShot(f.id))} alt="" width={600} height={1067} loading={i < 3 ? "eager" : "lazy"} decoding="async" />
                  </span>
                  <span className={styles.posterBody}>
                    <span className={styles.posterIcon}>
                      <img src={asset(appIcon(f.id))} alt="" width={256} height={256} loading="lazy" decoding="async" />
                    </span>
                    <span className={styles.posterText}>
                      <span className={styles.posterName}>{a.name}</span>
                      <span className={styles.posterTag}>{f.tagline[lang]}</span>
                    </span>
                    <span className={styles.posterGet}>
                      <AppleIcon />
                    </span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Everything else — compact shelf */}
        <div className={styles.shelfHead}>
          <p className="label" data-reveal="fade">
            {t.work.allLabel}
          </p>
        </div>
        <ul className={styles.apps} aria-label={t.work.allLabel}>
          {ALL_APPS.filter((a) => !FEATURED.some((f) => f.id === a.id)).map((a, i) => (
            <li key={a.id} className={styles.app} data-reveal style={{ "--delay": `${Math.min(i, 8) * 30}ms` } as React.CSSProperties}>
              <a href={a.url} target="_blank" rel="noopener" className={styles.appLink} aria-label={`${a.name} — App Store`}>
                <span className={styles.appIcon}>
                  <img src={asset(appIcon(a.id))} alt="" width={256} height={256} loading="lazy" decoding="async" />
                </span>
                <span className={styles.appBody}>
                  <span className={styles.appName}>{a.name}</span>
                  <span className={styles.appGenre}>{a.genre[lang]}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.foot} data-reveal="fade">
          <a href={APP_STORE_DEVELOPER} target="_blank" rel="noopener" className="btn btn--accent">
            <AppleIcon />
            {t.work.more}
            <ArrowUpRight className="arrow" />
          </a>
        </div>
      </div>

      <div className={styles.themes}>
        <div className={`container ${styles.themesHead}`}>
          <div>
            <p className="label" data-reveal="fade">
              {t.work.themesLabel}
            </p>
            <h3 className={`h-section ${styles.themesTitle}`} data-reveal>
              {t.work.themesTitle}
            </h3>
          </div>
          <div className={styles.stripNav}>
            <button type="button" onClick={() => scrollStrip(-1)} aria-label="previous" className={styles.stripBtn}>
              <ArrowRight />
            </button>
            <button type="button" onClick={() => scrollStrip(1)} aria-label="next" className={styles.stripBtn}>
              <ArrowRight />
            </button>
          </div>
        </div>
        <div className={styles.strip} ref={stripRef}>
          {THEMES.map((th, i) => (
            <a key={th.slug} href={th.href} target="_blank" rel="noopener" className={styles.theme} style={{ "--i": i } as React.CSSProperties}>
              <span className={styles.themeMedia}>
                <img src={asset(th.image)} alt={th.name[lang]} width={900} height={1200} loading="lazy" decoding="async" />
              </span>
              <span className={styles.themeCap}>
                <span className={styles.themeName}>{th.name[lang]}</span>
                <span className={`num ${styles.themeIdx}`}>{String(i + 1).padStart(2, "0")}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
