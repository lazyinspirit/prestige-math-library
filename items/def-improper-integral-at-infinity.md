---
id: def-improper-integral-at-infinity
kind: definition
title: "Improper integrals over unbounded intervals"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-limits-at-infinity, def-oriented-integral,
       def-darboux-integral, def-interval]
justified_by: []
aliases: []
landmark: false
proof_strategy: n/a
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, Section 3.4"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Statement

Let $f$ be Riemann integrable on every compact interval $[a,R]$ with $R>a$. The improper integral over the right-unbounded interval is
$$\int_a^\infty f(x)\,dx:=\lim_{R\to\infty}\int_a^R f(x)\,dx,$$
provided this limit exists as a finite real number. In that case the improper integral **converges**; otherwise it diverges. In particular, a limit of $+\infty$ or $-\infty$ is divergence, not convergence to an extended-real value.

If $f$ is Riemann integrable on every $[R,b]$ with $R<b$, define
$$\int_{-\infty}^b f(x)\,dx:=\lim_{R\to-\infty}\int_R^b f(x)\,dx$$
under the same finite-limit convention. All finite integrals use the oriented convention.
