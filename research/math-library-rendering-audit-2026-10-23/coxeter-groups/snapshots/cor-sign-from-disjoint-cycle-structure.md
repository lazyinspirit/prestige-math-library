---
id: cor-sign-from-disjoint-cycle-structure
kind: corollary
title: 'A $k$-cycle has sign $(-1)^{k-1}$, and $\operatorname{sgn}(\sigma)=(-1)^{n-c(\sigma)}$ when fixed points are counted as cycles'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-sign-is-a-homomorphism, thm-disjoint-cycle-decomposition,
       thm-transpositions-generate-the-symmetric-group]
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
    - title: 'J. S. Milne, Group Theory, Corollary 4.27'
      url: 'https://www.jmilne.org/math/CourseNotes/GT.pdf'
pipeline_run: null
---

## Statement

A cycle of length $k$ has sign $(-1)^{k-1}$. If $\sigma\in S_n$ and
$c(\sigma)$ is the number of cycles after every fixed point is included as a
one-cycle, then

$$\operatorname{sgn}(\sigma)=(-1)^{n-c(\sigma)}.$$

## Facts & Assumptions

**Given:** A natural $n$ and a permutation $\sigma\in S_n$.

[L1] Sign is a homomorphism, every finite permutation has a disjoint-cycle decomposition, and a $k$-cycle is a product of $k-1$ transpositions ([[thm-sign-is-a-homomorphism]], [[thm-disjoint-cycle-decomposition]], [[thm-transpositions-generate-the-symmetric-group]]).

## Proof

**Proof technique:** direct.

1.1 The standard factorisation of a $k$-cycle has $k-1$ transpositions, so [L1] gives sign $(-1)^{k-1}$. [given, L1]

2.1 Write the disjoint-cycle decomposition of $\sigma$ with lengths $k_1,\ldots,k_r$. Multiplicativity of sign and step 1.1 give $\operatorname{sgn}(\sigma)=(-1)^{\sum_i(k_i-1)}$. [step 1.1, L1]

3.1 Insert each fixed point as a one-cycle. Then the cycle lengths sum to $n$, the number of cycles is $c(\sigma)$, and $\sum_i(k_i-1)=n-c(\sigma)$, which gives the formula. [step 2.1, L1] ∎
