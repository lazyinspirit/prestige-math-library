---
id: thm-jordan-form-exists-iff-the-characteristic-polynomial-splits
kind: theorem
title: "Jordan form over the base field exists exactly when the characteristic polynomial splits"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-jordan-canonical-form, prop-generalised-eigenspaces-and-algebraic-multiplicity, thm-nilpotent-jordan-string-basis, lem-characteristic-polynomial-of-block-triangular-matrix]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Results 8.42-8.46"
      url: "https://linear.axler.net/LADR4e.pdf"
    - title: "S. Treil, Linear Algebra Done Wrong, Chapter 9, Section 5"
      url: "https://www.math.brown.edu/streil/papers/LADW/LADW_2017-09-04.pdf"
pipeline_run: null
---

## Statement

An endomorphism of a finite-dimensional $F$-vector space has a Jordan canonical form over $F$ if and only if its characteristic polynomial splits into linear factors over $F$. This includes the zero space, where the characteristic polynomial is $1$ and the Jordan form is empty.

## Facts & Assumptions

**Given:** An endomorphism $T$ of a finite-dimensional $F$-vector space $V$.

[L1] If $\chi_T$ splits, $V$ is the direct sum of invariant generalised eigenspaces $G_\lambda$, and $(T-\lambda I)|_{G_\lambda}$ is nilpotent ([[prop-generalised-eigenspaces-and-algebraic-multiplicity]]).

[L2] Every finite-dimensional nilpotent endomorphism has a basis of Jordan strings ([[thm-nilpotent-jordan-string-basis]]).

[L3] The characteristic polynomial of a block triangular matrix is the product of the characteristic polynomials of its diagonal blocks, including empty blocks ([[lem-characteristic-polynomial-of-block-triangular-matrix]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $\chi_T$ splits. For every $G_\lambda$ from [L1], apply [L2] to $N_\lambda=(T-\lambda I)|_{G_\lambda}$; its nilpotent strings are Jordan strings for $T$ at $\lambda$, and concatenating their bases across the direct sum gives a Jordan basis of $V$. [L1, L2, construct]

1.2 Conversely, if $T$ has a Jordan basis, its matrix is block diagonal with blocks $J_m(\lambda)$ for $\lambda\in F$; [L3] gives $\chi_T=\prod(x-\lambda)^m$, which splits over $F$. [L3, algebra]

2.1 Steps 1.1 and 1.2 prove both directions; the empty direct sum and empty product prove the zero-space case. [step 1.1, step 1.2] ∎
