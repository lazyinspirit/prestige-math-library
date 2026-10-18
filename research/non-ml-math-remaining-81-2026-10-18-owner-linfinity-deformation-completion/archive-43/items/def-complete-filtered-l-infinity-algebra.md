---
id: def-complete-filtered-l-infinity-algebra
kind: definition
title: "Complete filtered L∞-algebra"
status: draft
dependency_level: 5
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-shifted-coalgebra-l-infinity-algebra
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Jean-Louis Loday and Bruno Vallette, Algebraic Operads, §13.2"
      url: "https://www.math.univ-paris13.fr/~vallette/Operads.pdf"
    - title: "Tom Lada and Jim Stasheff, Introduction to sh Lie algebras for physicists, §§2–3"
      url: "https://arxiv.org/pdf/hep-th/9209099"
---

## Definition

Let $(V,Q)$ be an L∞-algebra in the shifted convention of
[[def-shifted-coalgebra-l-infinity-algebra]], with $W=V[1]$ and corestrictions
$q_n:S^n(W)\to W$. A **complete filtered L∞-algebra** is this data together
with a descending filtration by graded subspaces

$$F^1W\supseteq F^2W\supseteq F^3W\supseteq\cdots$$

such that both of the following conditions hold:

1. The natural map from $W$ to the set of compatible cosets
   $$(w_r+F^rW)_{r\ge1},\qquad w_{r+1}-w_r\in F^rW,$$
   is a bijection. Thus the filtration is separated and complete.
2. For every $n\ge1$ and positive integers $r_1,\ldots,r_n$,
   $$q_n(F^{r_1}W,\ldots,F^{r_n}W) \subseteq F^{r_1+\cdots+r_n}W.$$

This definition imposes an algebraic filtration topology only; it makes no
analytic convergence assertion. The next theorem proves that the
Maurer–Cartan series converges for each $w\in F^1W^0$.
