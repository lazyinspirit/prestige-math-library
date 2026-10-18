---
id: thm-filtered-l-infinity-maurer-cartan-series-converges
kind: theorem
title: "The Maurer–Cartan series converges in a complete filtered L∞-algebra"
status: draft
dependency_level: 6
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-complete-filtered-l-infinity-algebra
  - def-field
  - def-ring-characteristic
  - lem-field-is-a-commutative-ring
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-18}}
sources:
  references:
    - title: "Jean-Louis Loday and Bruno Vallette, Algebraic Operads, §13.2"
      url: "https://www.math.univ-paris13.fr/~vallette/Operads.pdf"
---

## Statement

Let $W$ be the shifted graded space of a complete filtered L∞-algebra over a
characteristic-zero field, and let $w\in F^1W^0$. Then the series

$$\sum_{n\ge1}\frac{1}{n!}q_n(w,\ldots,w)$$

converges uniquely in the filtration topology to an element of $W^1$.

## Facts & Assumptions

**Given:** A complete filtered L∞-algebra over a characteristic-zero field
and an element $w\in F^1W^0$.

[F1] [[def-complete-filtered-l-infinity-algebra]]: the filtration is
complete and $q_n(F^{r_1},\ldots,F^{r_n})\subseteq F^{r_1+\cdots+r_n}$.

[F2] [[def-field]], [[def-ring-characteristic]], and
[[lem-field-is-a-commutative-ring]]: in characteristic zero, each $n!$ is
nonzero in the field and therefore invertible.

## Proof

1.1 For every $n\ge1$, [F1] with each $r_i=1$ gives $q_n(w,\ldots,w)\in F^nW$. Since $q_n$ has degree $+1$ and $w$ has degree zero, each term lies in $F^nW^1$. By [F2], division by $n!$ is defined and does not change the filtration level. [given, F1, F2]

2.1 Fix $r\ge1$. If $n\ge r$, then $F^nW\subseteq F^rW$, so every term of index $n\ge r$ vanishes in $W/F^rW$. Therefore the partial sums stabilize modulo $F^rW$ once the upper index is at least $r-1$. [F1, step 1.1, algebra]

3.1 These stabilized residues are compatible under the quotient maps $W/F^{r+1}W\to W/F^rW$, because they come from the same nested partial sums. All residues have degree one, so degreewise completeness in [F1] gives a unique element of $W^1$ having all these residues. The partial sums converge to it in the filtration topology. [F1, step 2.1, construct] ∎

