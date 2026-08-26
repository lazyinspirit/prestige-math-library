---
id: def-singularity-at-infinity
kind: definition
title: "Isolated singularities at infinity"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
aliases: []
landmark: false
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Jean-Baptiste Campesato, MAT334 course page and notes index"
      url: "https://www.math.toronto.edu/campesat/mat334.html"
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 5 §1.3"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Definition

Let $f$ be holomorphic on an exterior region $|z|>R$. Write

$$g(w):=f(1/w)$$

for $0<|w|<1/R$. Then $f$ is said to have an **isolated singularity at
infinity** when $g$ has an isolated singularity at $0$.

The singularity at infinity is:

- **removable** when $g$ is removable at $0$;
- a **pole of order $m$** when $g$ has a pole of order $m$ at $0$;
- **essential** when $g$ is essential at $0$.

## Remarks

This is the singularity-type dictionary at infinity only. The later residue
theorem page introduces the separate residue-at-infinity convention used in
global contour formulas.
