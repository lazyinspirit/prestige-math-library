---
id: def-projective-space-points
kind: definition
title: "projective space points"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Michael Artin, Algebraic Geometry, Chapter 3"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
verification:
  audited: 2026-09-06
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Definition

Fix an algebraically closed field $k$. For $n\ge0$, define $\mathbf P_k^n=(k^{n+1}\setminus\{0\})/\sim$, where $a\sim b$ exactly when $b=\lambda a$ for some $\lambda\in k^\times$. Write a class as $[a_0:\cdots:a_n]$. Thus $\mathbf P_k^0=\{[1]\}$.

