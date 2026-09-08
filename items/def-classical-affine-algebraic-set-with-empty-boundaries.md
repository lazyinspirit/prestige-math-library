---
id: "def-classical-affine-algebraic-set-with-empty-boundaries"
kind: "definition"
title: "Classical affine algebraic sets, including the empty boundaries"
status: "draft"
origin: "pipeline"
deps: ["def-multivariate-polynomial-ring-by-iteration", "def-polynomial-evaluation-and-root", "def-algebraically-closed-field"]
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
    - title: "J. S. Milne, Algebraic Geometry v6.10, §2a, pp. 36–37"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
landmark: false
---

## Definition

Fix an algebraically closed field $k$ and $n\ge0$. Write $R=k[x_1,\ldots,x_n]$ for the iterated polynomial ring of [[def-multivariate-polynomial-ring-by-iteration]]. Algebraic closure has the meaning of [[def-algebraically-closed-field]]. For any $S\subseteq R$, define $$V(S)=\{a\in k^n:\text{for every }f\in S,\ f(a)=0\}.$$ An affine algebraic set is any such subset, including the empty set. Here $k^0=\{()\}$ and $R=k$ when $n=0$. With the abbreviations $V(0):=V(\{0\})$ and $V(1):=V(\{1\})$, one has $V(\varnothing)=V(0)=k^n$ and $V(1)=\varnothing$: an empty list of equations imposes no condition, whereas $1(a)=1\ne0$. Evaluation, as in [[def-polynomial-evaluation-and-root]], is performed successively in the finitely many variables.

## Sources

Source comparison: Milne, *Algebraic Geometry*, v6.10, §2a, pp. 36–37. Conventions here distinguish arbitrary affine algebraic sets from nonempty irreducible varieties.
