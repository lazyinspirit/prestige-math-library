---
id: rem-stirling-number-and-egf-conventions
kind: remark
title: "This page fixes the Stirling-sign and exponential-generating-function conventions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Philippe Flajolet and Robert Sedgewick, Analytic Combinatorics — Symbolic Combinatorics"
      url: "https://algo.inria.fr/flajolet/Publications/FlSe02.pdf"
    - title: "Herbert S. Wilf, generatingfunctionology, 2nd ed."
      url: "https://www2.math.upenn.edu/~wilf/gfologyLinked2.pdf"
    - title: "Andrew Lin, 18.212 Algebraic Combinatorics, Lecture 11: Stirling numbers and more"
      url: "https://ocw.mit.edu/courses/18-212-algebraic-combinatorics-spring-2019/c65777fbaa1e5af6aaa3e6ab8cbdf255_MIT18_212S19_lec11.pdf"
pipeline_run: null
---

On this page:

- $S(n,k)$ denotes the Stirling numbers of the second kind.
- $c(n,k)$ denotes the signless Stirling numbers of the first kind, so
  $c(n,k)$ counts permutations of $[n]$ with exactly $k$ cycles.
- $s(n,k):=(-1)^{n-k}c(n,k)$ denotes the signed first-kind numbers used in the
  inversion formulas.

All exponential generating functions are taken in a commutative
$\mathbb{Q}$-algebra, so the coefficients $1/n!$ and the formal operations
$\exp$ and $\log$ of [[def-formal-exponential-logarithm-and-powers]] are
available. The page uses this hypothesis exactly where factorial denominators
or formal exponential and logarithmic identities appear.
