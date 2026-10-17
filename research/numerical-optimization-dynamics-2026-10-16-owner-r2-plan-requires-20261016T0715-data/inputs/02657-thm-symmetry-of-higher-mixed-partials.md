---
id: thm-symmetry-of-higher-mixed-partials
kind: theorem
title: "Continuous mixed partials of order $k$ are invariant under permutations"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-clairaut-schwarz-mixed-partials, def-ck-and-multi-index-notation-in-several-variables]
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Mixed partial derivatives (Eremenko)"
      url: "https://www.math.purdue.edu/~eremenko/dvi/mixedpartial.pdf"
pipeline_run: null
---

## Statement

Let $k\ge2$. If $f\in C^k(U)$ for an open $U\subseteq\mathbb R^m$, then every iterated derivative of $f$ of order $k$ is unchanged by any permutation of its coordinate differentiations.

## Facts & Assumptions

**Given:** A $C^k$ scalar field on $U$ and a word of $k$ coordinate indices.

[L1] Adjacent second coordinate derivatives commute under the $C^2$ hypotheses ([[thm-clairaut-schwarz-mixed-partials]]).

[L2] A $C^k$ field has every *ordered* iterated partial derivative through length $k$, continuously on $U$ ([[def-ck-and-multi-index-notation-in-several-variables]]).

## Proof

**Proof technique:** induction.

1.1 Label the $k$ differentiation positions and count inversions of a permutation of these labels. A permutation with zero inversions is the identity, so it leaves the derivative unchanged. [base, algebra]

1.2 Assume every reordering with at most $n$ inversions leaves the derivative unchanged. [ih]

2.1 A reordering with $n+1$ inversions has an adjacent inverted pair; exchanging that pair reduces its inversion count by one. If that pair occupies positions $r,r+1$ in the sequence of differentiation operations, first apply only the operations in positions $1,\ldots,r-1$ and call the resulting field $g$. Every ordered partial of $g$ through order two is an ordered partial of $f$ of length at most $k$, hence is continuous by [L2]; thus $g\in C^2(U)$ and [L1] swaps precisely the operations in positions $r,r+1$. Apply the remaining outer operations in positions $r+2,\ldots,k$ to this equality; their existence is again supplied by [L2]. [step 1.2, L1, L2, algebra]

3.1 The induction hypothesis applies after the swap in step 2.1, so the original reordering leaves the derivative unchanged. Induction on inversion number proves the claim for every finite permutation. [step 1.1, step 1.2, step 2.1, discharge-induction] ∎
