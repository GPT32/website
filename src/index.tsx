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
import { Image } from "@app/components";

/** @constant */
const MILESTONE_ID = 1;

/** @constant */
const SHIELD_CONFIG_DOWNLOAD = new URLSearchParams({
  style: "for-the-badge",
  logo: "github",
  label: "Download",
  sort: "semver",
  display_name: "tag",
});

/** @constant */
const SHIELD_CONFIG_ROADMAP = new URLSearchParams({
  style: "for-the-badge",
  logo: "rocket",
  logoColor: "white",
  label: "View the Roadmap",
});

/** @constant */
const SHIELD_CONFIG_VIEW = new URLSearchParams({
  style: "for-the-badge",
  logo: "github",
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
    <main className="grid w-full grid-cols-1 gap-5 md:w-2/3 lg:grid-cols-2">
      <section>
        <Image
          alt="screenshot"
          className="h-auto w-full shadow-lg"
          src={AppInfo.homepage + "/.github/blob/main/assets/demo.gif?raw=true"}
        />
      </section>
      <section className="prose flex flex-col justify-center">
        <h1>{appName}</h1>
        <p>{AppInfo.description}</p>
        <article className="gap-4 md:flex">
          <a
            title="Download the latest release"
            href={`${AppInfo.homepage}/application/releases/latest/download/${fileName}`}
          >
            <img
              alt="download"
              src={`https://img.shields.io/github/v/release/${appName}/application?${SHIELD_CONFIG_DOWNLOAD}`}
              className="shadow-lg"
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
              className="shadow-lg"
            />
          </a>
          <a
            title="View the roadmap"
            href={`${AppInfo.homepage}/application/milestones`}
            target="_blank"
          >
            <img
              alt="view the roadmap"
              src={`https://img.shields.io/github/milestones/progress-percent/${appName}/application/${MILESTONE_ID}?${SHIELD_CONFIG_ROADMAP}`}
              className="shadow-lg"
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
