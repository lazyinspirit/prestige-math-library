---
id: def-pe03-euler-positive-margin-domain
kind: definition
title: Positive-margin admissible states for ideal-gas Euler
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-ideal-gas-euler-state-and-pressure]
justified_by: [prop-pe03-euler-state-and-margin-domains-are-convex-and-closed]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "X. Zhang and C.-W. Shu, On Positivity-Preserving High Order Discontinuous Galerkin Schemes for Compressible Euler Equations on Rectangular Meshes"
      url: "https://www.math.purdue.edu/~zhan1966/research/paper/euler.pdf"
      locator: "§2, positivity-preserving Euler admissible set and limiter, PDF pp. 5–9; complete 34-page article read"
---

## Definition

Fix $\gamma>1$ and $\varepsilon>0$, and use the state variables and internal
energy density from [[def-ideal-gas-euler-state-and-pressure]]. Define the
**positive-margin set**
$$K_{\gamma,\varepsilon}:=\left\{(\rho,m,E):\rho\ge\varepsilon,\quad E-\frac{m^2}{2\rho}\ge\varepsilon\right\}.$$
Every member has positive density and positive pressure. Closedness and
convexity are proved in
[[prop-pe03-euler-state-and-margin-domains-are-convex-and-closed]]; those properties are not
being inferred from this definition alone.


