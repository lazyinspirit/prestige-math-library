---
id: cor-determinant-is-a-polynomial-in-the-matrix-entries
kind: corollary
title: "For every fixed finite size at least one, the determinant of a real square matrix is a polynomial in its matrix entries"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-determinant-of-a-square-matrix, def-multivariate-polynomial-ring-by-iteration, thm-universal-property-of-a-polynomial-ring, thm-reals-field, lem-field-is-a-commutative-ring]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "P. Massot, Structures algébriques fondamentales, §6.4"
      url: "https://www.imo.universite-paris-saclay.fr/~patrick.massot/enseignement/poly_alg/cha-algebres.html"
pipeline_run: null
---

## Statement

For each fixed $n\ge1$, the function $\det:M_n(\mathbb R)\to\mathbb R$ is evaluation of the polynomial
$$P_n:=\sum_{\sigma\in S_n}\operatorname{sgn}(\sigma)\prod_{i<n}x_{\sigma(i),i}$$
in the $n^2$ commuting variables $x_{ri}$.

## Facts & Assumptions

**Given:** A fixed natural $n\ge1$ and commuting indeterminates $x_{ri}$ for $r,i<n$.

[L1] The determinant is the finite Leibniz sum $\sum_{\sigma}\operatorname{sgn}(\sigma)\prod_i a_{\sigma(i),i}$ ([[def-determinant-of-a-square-matrix]]).

[L2] Iteration constructs a polynomial ring in any finite list of commuting indeterminates over a commutative ring ([[def-multivariate-polynomial-ring-by-iteration]]).

[L3] The real numbers form a field ([[thm-reals-field]]).

[L4] Every field is a commutative ring with the same operations ([[lem-field-is-a-commutative-ring]]).

[L5] Evaluation at a ring element is a unital ring homomorphism, so it respects finite sums and products ([[thm-universal-property-of-a-polynomial-ring]]).

## Proof

**Proof technique:** direct.

1.1 By [L2]–[L4], the displayed finite sum of signed monomials is an element $P_n$ of the real polynomial ring in the $n^2$ variables $x_{ri}$. [L2, L3, L4]

2.1 Iterate [L5] through the finite list of variables, sending each $x_{ri}$ to $a_{ri}$. The resulting homomorphism sends each monomial to $\prod_{i<n}a_{\sigma(i),i}$ and therefore sends $P_n$ to the Leibniz sum $\det(A)$ from [L1]. [step 1.1, L1, L2, L5, algebra]

3.1 Hence determinant is the polynomial function given by this explicit finite sum of finite products in the matrix entries. [step 2.1] ∎
