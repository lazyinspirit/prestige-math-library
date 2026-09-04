---
id: def-abscissae-dirichlet-series
kind: definition
title: "The convergence and absolute-convergence abscissae of a Dirichlet series"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-dirichlet-series, def-extended-reals]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Definition 2.3"
      url: "https://kskedlaya.org/ant/part-1-3.html"
    - title: "Leonard Tomczak, Analytic Number Theory, Theorems 3.3 and 3.4"
      url: "https://math.berkeley.edu/~ltomczak/notes/Mich2022/AnaNT_Notes.pdf"
pipeline_run: null
---

## Definition

For a Dirichlet series $D(s)=\sum_{n \ge 1} a_n n^{-s}$, define its
**abscissa of convergence** and **abscissa of absolute convergence** by

$$\sigma_c := \inf\{\sigma \in \overline{\mathbb R} : D(s) \text{ converges for every } \Re s > \sigma\},$$

and

$$\sigma_a := \inf\{\sigma \in \overline{\mathbb R} : D(s) \text{ converges absolutely for every } \Re s > \sigma\}.$$

The infima are taken in the extended real line of [[def-extended-reals]], so the
values $\pm \infty$ are allowed.
