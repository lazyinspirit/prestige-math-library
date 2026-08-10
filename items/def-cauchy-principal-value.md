---
id: def-cauchy-principal-value
kind: definition
title: "Cauchy principal values at a finite singularity and on the real line"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: n/a
deps: [def-improper-integral-at-infinity,
       def-improper-integral-at-a-finite-endpoint, def-one-sided-limits,
       def-limits-at-infinity, def-oriented-integral, def-darboux-integral]
justified_by: []
aliases: []
landmark: false
proof_strategy: n/a
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, Section 8.4"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Statement

Let $f$ be properly Riemann integrable on compact subintervals of $[a,b]\setminus\{c\}$, where $a<c<b$. Its Cauchy principal value at $c$ is
$$\operatorname{PV}\!\int_a^b f:=\lim_{\varepsilon\downarrow0}
\left(\int_a^{c-\varepsilon}f+\int_{c+\varepsilon}^bf\right),$$
provided this coupled limit is finite.

For a locally Riemann-integrable function on the real line, define
$$\operatorname{PV}\!\int_{-\infty}^{\infty}f:=
\lim_{R\to\infty}\int_{-R}^{R}f,$$
again only for a finite limit. A principal value couples the two truncations; it does not assert that the two one-sided improper integrals converge separately.
