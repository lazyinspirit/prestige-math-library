---
id: def-euler-characteristic-of-a-finite-complex-of-finite-rank-free-abelian-groups
kind: definition
title: "Euler characteristic of a finite complex of finite-rank free abelian groups"
status: draft
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-bounded-bounded-below-and-bounded-above-complex,
       def-invariant-basis-number-and-rank-of-a-free-module]
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "P. Hekmati, Homological Algebra, section 3.1"
      url: "https://www.math.auckland.ac.nz/~hekmati/HomologicalAlgebra.pdf"
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-24
---

## Definition

Let $C_\bullet$ be a bounded chain complex of abelian groups such that every
$C_n$ is free of finite rank. Its **Euler characteristic** is
$$\chi(C):=\sum_{n\in\mathbb Z}(-1)^n\operatorname{rank}(C_n).$$

Boundedness makes the sum finite, and
[[def-invariant-basis-number-and-rank-of-a-free-module]] supplies the meaning
of $\operatorname{rank}$ for each term.
