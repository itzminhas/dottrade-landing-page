# Dot e-store

A responsive, accessible static landing page for [dottrade.co.uk](https://dottrade.co.uk), built with semantic HTML, modern CSS and a small amount of vanilla JavaScript.

## Local preview

No build step or dependencies are required. From the repository root:

```powershell
python -m http.server 8080
```

Then open `http://localhost:8080`.

## GitHub Pages

The workflow in `.github/workflows/pages.yml` deploys the repository root whenever `main` is updated. In **Settings → Pages**, set **Source** to **GitHub Actions**. The `CNAME` file configures the custom apex domain as `dottrade.co.uk`.

## DNS setup

DNS must be configured with the domain registrar; repository settings alone cannot update it. Point the apex (`@`) to GitHub Pages with these records:

| Type | Host | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |

Optional: add a `CNAME` record for `www` pointing to `itzminhas.github.io`. Avoid wildcard DNS records for the domain. DNS propagation and certificate provisioning can take up to 24 hours; enable **Enforce HTTPS** in Pages settings once the certificate is available.

## Content

Contact and newsletter actions intentionally open the visitor's email application. This static site does not claim to store or submit data to a backend.
