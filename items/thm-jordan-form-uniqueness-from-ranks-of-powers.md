---
id: thm-jordan-form-uniqueness-from-ranks-of-powers
kind: theorem
title: "Ranks of shifted powers determine Jordan form up to block order"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-jordan-canonical-form, thm-power-ranks-determine-nilpotent-jordan-blocks, prop-generalised-eigenspaces-and-algebraic-multiplicity, def-rank-and-nullity, def-internal-direct-sum]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
sources:
  scraped: []
  references:
    - title: "S. Treil, Linear Algebra Done Wrong, Chapter 9, Sections 4.3-4.4"
      url: "https://www.math.brown.edu/streil/papers/LADW/LADW_2017-09-04.pdf"
pipeline_run: null
---

## Statement

Let $T$ have split characteristic polynomial. For each eigenvalue $\lambda$, put
$$\rho_k(\lambda)=\operatorname{rank}(T-\lambda I)^k\qquad(k\ge0).$$
Then for every $k\ge1$, the number of Jordan blocks for $\lambda$ of size exactly $k$ is
$$\rho_{k-1}(\lambda)-2\rho_k(\lambda)+\rho_{k+1}(\lambda).$$
Consequently the ranks of all shifted powers determine the Jordan form uniquely up to permutation of its blocks. On the zero space the rank data and block multiset are empty.

## Facts & Assumptions

**Given:** A finite-dimensional endomorphism $T$ whose characteristic polynomial splits.

[L1] The space is the direct sum of generalised eigenspaces $G_\mu$, and $N_\mu=(T-\mu I)|_{G_\mu}$ is nilpotent ([[prop-generalised-eigenspaces-and-algebraic-multiplicity]]).

[L2] For a nilpotent operator, $\operatorname{rank}N^{k-1}-2\operatorname{rank}N^k+\operatorname{rank}N^{k+1}$ is the number of blocks of size exactly $k$ ([[thm-power-ranks-determine-nilpotent-jordan-blocks]]).

[L3] Rank is the dimension of the image ([[def-rank-and-nullity]]).

[L4] An internal direct sum gives unique componentwise decompositions ([[def-internal-direct-sum]]).

## Proof

**Proof technique:** direct.

1.1 Fix an eigenvalue $\lambda$. On $G_\lambda$, $T-\lambda I=N_\lambda$. On $G_\mu$ with $\mu\ne\lambda$, it is $(\mu-\lambda)I+N_\mu$, which is invertible because the finite geometric series in $-N_\mu/(\mu-\lambda)$ is an inverse up to the nonzero scalar $\mu-\lambda$. [L1, algebra]

2.1 By the direct sum in [L1] and uniqueness in [L4], for every $k\ge0$ the rank on the non-$\lambda$ summands is their constant total dimension $c_\lambda$, while the rank on $G_\lambda$ is $\operatorname{rank}N_\lambda^k$; hence $\rho_k(\lambda)=c_\lambda+\operatorname{rank}N_\lambda^k$. [step 1.1, L1, L3, L4]

3.1 The constant $c_\lambda$ cancels from the second difference, and [L2] then gives the displayed exact-size block count. Varying $k$ and $\lambda$ recovers the entire block multiset. [step 2.1, L2, algebra]

4.1 By the definition of Jordan form, a block multiset determines the block diagonal matrix up to block order; for $V=0$ there are no eigenvalues or blocks. [step 3.1, L1] ∎
