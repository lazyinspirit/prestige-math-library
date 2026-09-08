---
id: "def-classical-regular-function-on-open-set"
kind: "definition"
title: "A regular function on an open subset of a classical affine variety"
status: "draft"
origin: "pipeline"
deps: ["def-classical-affine-coordinate-ring", "thm-classical-polynomial-functions-equal-coordinate-ring", "lem-classical-principal-opens-form-affine-basis"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry v6.10, Definition 3.8, p. 61"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
landmark: false
---

## Definition

Let $U$ be open in an affine algebraic set $X$ and $A=k[X]$. A function $s:U\to k$ is regular if for each $x\in U$ there are an open neighbourhood $W\subseteq U$ of $x$ and $g,h\in A$ with $h(y)\ne0$ for every $y\in W$ such that $s(y)=g(y)/h(y)$ there. Write $\mathcal O_X(U)$ for these functions. The quotient need only hold locally; no single fraction on all of $U$ is required. On the empty open the unique empty function is regular. Constants are regular by $c=c/1$.

## Sources

Source comparison: Milne, *Algebraic Geometry*, v6.10, Definition 3.8, p. 61. Conventions here distinguish arbitrary affine algebraic sets from nonempty irreducible varieties.
