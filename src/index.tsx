/**
 * The application's index file.
 *
 * @module
 */
import "@fontsource-variable/montserrat";
import "@fontsource-variable/jetbrains-mono";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import AppInfo from "package.json";
import { cx } from "@app/lib";
import { Image } from "@app/components";

/** @constant */
const SHIELD_CONFIG_DOWNLOAD = new URLSearchParams({
  display_name: "tag",
  label: "Download",
  logo: "github",
  sort: "semver",
  style: "for-the-badge",
});

/** @constant */
const SHIELD_CONFIG_ROADMAP = new URLSearchParams({
  logo: "rocket",
  logoColor: "white",
  style: "for-the-badge",
});

/** @constant */
const SHIELD_CONFIG_VIEW = new URLSearchParams({
  logo: "github",
  style: "for-the-badge",
});

/**
 * The root component.
 *
 * @function
 */
function Root() {
  const appName = React.useMemo(
    () => AppInfo.homepage.split("/").slice(-1)[0],
    [],
  );
  const fileName = React.useMemo(() => appName + ".exe", []);

  return (
    <main
      className={cx("grid w-full grid-cols-1 gap-8", "sm:w-2/3 xl:grid-cols-2")}
    >
      <section>
        <Image
          alt="screenshot"
          className="h-auto w-full shadow-lg"
          src={AppInfo.homepage + "/.github/blob/main/assets/demo.gif?raw=true"}
        />
      </section>
      <section
        className={cx(
          "prose flex max-w-none flex-col items-center justify-center",
          "xl:items-start",
        )}
      >
        <h1>{appName}</h1>
        <p>{AppInfo.description}</p>
        <article
          className={cx(
            "flex w-full flex-col items-center justify-center gap-4",
            "sm:flex-row xl:justify-start",
            "[&_img]:my-0 [&_img]:shadow-lg",
          )}
        >
          <a
            title="Download the latest release"
            href={`${AppInfo.homepage}/application/releases/latest/download/${fileName}`}
          >
            <img
              alt="download"
              src={`https://img.shields.io/github/v/release/${appName}/application?${SHIELD_CONFIG_DOWNLOAD}`}
            />
          </a>
          <a
            title="View the source code"
            href={AppInfo.homepage}
            target="_blank"
          >
            <img
              alt="view the source code"
              src={`https://img.shields.io/badge/view_on-github-black?${SHIELD_CONFIG_VIEW}`}
            />
          </a>
          <a
            title="View the roadmap"
            href={`${AppInfo.homepage}/application/milestones`}
            target="_blank"
          >
            <img
              alt="view the roadmap"
              src={`https://img.shields.io/badge/view_the-roadmap-blue?${SHIELD_CONFIG_ROADMAP}`}
            />
          </a>
        </article>
      </section>
    </main>
  );
}

/**
 * The index component
 *
 * @function
 */
function Index() {
  return (
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  );
}

/**
 * React bootstrapping logic.
 *
 * @name anonymous
 * @function
 */
(() => {
  // grab the root container
  const container = document.getElementById("root");

  if (!container) {
    throw new Error("Failed to find the root element.");
  }

  // render the react application
  ReactDOM.createRoot(container).render(<Index />);
})();
