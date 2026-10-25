---
id: "def-classical-vanishing-ideal"
kind: "definition"
title: "The classical vanishing ideal"
status: published
origin: "pipeline"
deps: ["def-classical-affine-algebraic-set-with-empty-boundaries", "lem-ideal-criterion-and-intersections"]
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
    - title: "J. S. Milne, Algebraic Geometry v6.10, §2e pp. 40–42"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
landmark: false
---

## Definition

For any subset $E\subseteq k^n$, define $$I(E)=\{f\in k[x_1,\ldots,x_n]:f(a)=0\text{ for every }a\in E\}.$$ This is the vanishing ideal. Indeed $0\in I(E)$, $(f-g)(a)=0-0=0$ for $f,g\in I(E)$, and $(rf)(a)=r(a)0=0$ for any polynomial $r$. These verify [[lem-ideal-criterion-and-intersections]]. Also $f^m\in I(E)$, $m\ge1$, implies $f(a)^m=0$ and hence $f(a)=0$ for every $a\in E$; thus $I(E)$ is radical. Vacuous quantification gives $I(\varnothing)=R$.

## Sources

Source comparison: Milne, *Algebraic Geometry*, v6.10, §2e pp. 40–42. Conventions here distinguish arbitrary affine algebraic sets from nonempty irreducible varieties.
