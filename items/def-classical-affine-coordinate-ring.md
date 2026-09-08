---
id: "def-classical-affine-coordinate-ring"
kind: "definition"
title: "The coordinate ring of a classical affine algebraic set"
status: published
origin: "pipeline"
deps: ["def-classical-vanishing-ideal", "def-quotient-ring", "thm-quotient-ring-laws"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry v6.10, §2i p. 48"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
landmark: false
---

## Definition

For any affine algebraic set $X\subseteq k^n$, its coordinate ring is $$k[X]=k[x_1,\ldots,x_n]/I(X).$$ Write $\bar x_i$ for the coordinate classes. The quotient operations and identity are those of [[def-quotient-ring]] and [[thm-quotient-ring-laws]]. The structure map sends $c\in k$ to its constant class; all $k$-algebras and maps are unital, with the zero algebra allowed. Thus $k[\varnothing]=0$, where $0=1$. Since $I(X)$ is radical by [[def-classical-vanishing-ideal]], $k[X]$ is reduced: $\bar f^{\,m}=0$ implies $f^m\in I(X)$ and hence $f\in I(X)$, so $\bar f=0$. The finite coordinate classes generate it as a $k$-algebra.

## Sources

Source comparison: Milne, *Algebraic Geometry*, v6.10, §2i p. 48. Conventions here distinguish arbitrary affine algebraic sets from nonempty irreducible varieties.
