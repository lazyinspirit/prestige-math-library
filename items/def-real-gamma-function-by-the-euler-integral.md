---
id: def-real-gamma-function-by-the-euler-integral
kind: definition
title: 'The real Gamma function by Euler''s integral'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-improper-integral-at-a-finite-endpoint, def-improper-integral-at-infinity, def-real-power]
justified_by: [thm-real-gamma-euler-integral-convergence]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "University of Toronto MAT237Y1, The Gamma Function and the Beta Function, §1"
      url: "https://www.math.toronto.edu/campesat/ens/1920/gamma-beta.pdf"
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 6 §1"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
pipeline_run: null
---

## Definition

For $s>0$, define $\Gamma(s)=\int_0^\infty t^{s-1}e^{-t}\,dt$.

The integral is improper at both $0$ and $+\infty$. Its convergence for every $s>0$, and its failure for $s\le0$, are proved in [[thm-real-gamma-euler-integral-convergence]], which justifies the definition on exactly the displayed domain. The integrand is positive, so $\Gamma(s)>0$ throughout $(0,\infty)$.
