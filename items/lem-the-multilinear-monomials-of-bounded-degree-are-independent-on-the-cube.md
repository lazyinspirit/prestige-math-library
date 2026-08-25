---
id: lem-the-multilinear-monomials-of-bounded-degree-are-independent-on-the-cube
kind: lemma
title: "The functions $\\{0,1\\}^{n}\\to F$ obtained from $x_T$ with $\\lvert T\\rvert\\le s$ are linearly independent, so they span a space of dimension $\\sum_{i=0}^{s}\\binom{n}{i}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-multilinear-polynomial-and-multilinear-reduction, lem-every-polynomial-agrees-on-the-cube-with-its-multilinear-reduction, def-monomials-multidegree-and-total-degree, def-linear-independence, def-dimension, def-binomial-coefficient, thm-sum-rule, def-sum-over-a-finite-index-set, def-vector-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Matousek, Thirty-three Miniatures, Miniature 17"
      url: "https://users.math.cas.cz/~matousek/mini.ps"
pipeline_run: null
---

## Statement

Fix $s\le n$. The functions $\{0,1\}^n\to F$ obtained by restricting the
multilinear monomials $x_T$ with $\lvert T\rvert\le s$ are linearly independent.
Consequently they span a vector space of dimension

$$\sum_{i=0}^{s}\binom{n}{i}.$$

## Facts & Assumptions

**Given:** an integer $s$ with $0\le s\le n$.

[L1] A multilinear polynomial agreeing with the zero function on the cube is the zero polynomial ([[lem-every-polynomial-agrees-on-the-cube-with-its-multilinear-reduction]]).

[F1] The monomial expansion of a polynomial is unique ([[def-monomials-multidegree-and-total-degree]]).

[F2] The subsets of $[n]$ of size at most $s$ number $\sum_{i=0}^{s}\binom{n}{i}$ ([[def-binomial-coefficient]], [[thm-sum-rule]]).

## Proof

**Proof technique:** direct.

1.1 Suppose a linear combination of the restricted functions $x_T$ with $\lvert T\rvert\le s$ vanishes on the whole cube. The same coefficients then define a multilinear polynomial vanishing on the cube, so [L1] makes that polynomial the zero polynomial. [L1, assume-contra]

2.1 By uniqueness of monomial expansion [F1], every coefficient in that polynomial is $0$. Hence the restricted functions are linearly independent. [F1, step 1.1, discharge-contradiction]

3.1 Their number is the sum in [F2], so the span has exactly that dimension. [F2, step 2.1] ∎
