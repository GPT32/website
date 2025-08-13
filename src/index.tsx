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
const SHIELD_CONFIG_DOWNLOAD = new URLSearchParams({
  label: "Windows",
  logo: "mingww64",
  sort: "semver",
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
              src={`https://img.shields.io/github/downloads/${appName}/application/latest/${fileName}?${SHIELD_CONFIG_DOWNLOAD}`}
            />
          </a>
          <a
            title="View the source code"
            href={AppInfo.homepage}
            target="_blank"
          >
            <img
              alt="view on github"
              src={`https://img.shields.io/badge/view_on-github-black?${SHIELD_CONFIG_VIEW}`}
            />
          </a>
        </article>
        <p>
          <a
            href={`${AppInfo.homepage}/application/milestones`}
            target="_blank"
          >
            🚀 View the roadmap!
          </a>
        </p>
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
