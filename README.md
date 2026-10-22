# Badis Labbedi — Portfolio

A complete static academic portfolio. No build step, dependency installation, credentials, or server-side service is required.

## Content

- `index.html`: biography, education, current and past projects, Society of Physics Students talk, original abstract, and profile links.
- `styles.css`: layout, portrait, typography, and responsive styles.
- `app.js`: mobile navigation and active section indicator.
- `assets/`: portrait, favicon, locally hosted fonts, and font licenses.

Serve this directory with any static web server to preview it. All asset paths are relative and work beneath the `/portfolio/` project path. The canonical and Open Graph URL are configured for the planned GitHub Pages project address; update both if you later choose a custom domain or rename the repository.

## Publishing — prepared, not enabled

The repository remains private. GitHub Pages has not been enabled and the publishing workflow has not been run.

The workflow in `.github/workflows/publish-pages.yml` has only a manual `workflow_dispatch` trigger. Commits and pull requests cannot trigger publication. Its `publish` checkbox defaults to false; a manual run with that checkbox unchecked skips the publishing job.

When you decide to publish:

1. Confirm that your plan supports Pages for a private repository, or deliberately change the repository visibility to public. GitHub Free supports Pages for public repositories; Pages on private repositories requires an eligible plan.
2. In repository **Settings → Pages**, choose **GitHub Actions** as the publishing source.
3. In **Actions → Publish portfolio → Run workflow**, select `main`, check **Publish the portfolio to GitHub Pages**, and run the workflow.
4. Use the deployment URL returned by the successful workflow.

No GitHub Pages or repository visibility settings were changed as part of this preparation.

Official guide: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages

## Fonts

The EB Garamond and Courier Prime font licenses are included in `assets/`. The portrait is supplied by the site owner.
