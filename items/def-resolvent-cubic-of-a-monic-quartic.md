---
id: def-resolvent-cubic-of-a-monic-quartic
kind: definition
title: "The resolvent cubic of a monic quartic"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [cor-symmetric-polynomial-values-on-roots-lie-in-the-base-field, def-polynomials-that-split-and-splitting-fields]
justified_by: [prop-resolvent-cubic-formula-and-discriminant]
aliases: []
landmark: false
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
    - title: "K. Conrad, Galois Groups of Cubics and Quartics, Definition 3.1"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/cubicquartic.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Quartic polynomials"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Definition

Let

$$f(x)=x^4+ax^3+bx^2+cx+d\in F[x]$$

be monic, and let $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ be its roots in a
splitting field ([[def-polynomials-that-split-and-splitting-fields]]). Put

$$\beta_1=\alpha_1\alpha_2+\alpha_3\alpha_4,\quad \beta_2=\alpha_1\alpha_3+\alpha_2\alpha_4,\quad \beta_3=\alpha_1\alpha_4+\alpha_2\alpha_3.$$

The **resolvent cubic** of $f$ is

$$R_f(y):=(y-\beta_1)(y-\beta_2)(y-\beta_3).$$

Permuting the four roots permutes the set of pairings, so the coefficients are
symmetric expressions in the roots and lie in $F$ by
[[cor-symmetric-polynomial-values-on-roots-lie-in-the-base-field]]. The explicit
coefficient formula and its discriminant identity are proved in
[[prop-resolvent-cubic-formula-and-discriminant]].
