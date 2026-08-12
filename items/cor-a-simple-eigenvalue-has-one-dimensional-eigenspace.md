---
id: cor-a-simple-eigenvalue-has-one-dimensional-eigenspace
kind: corollary
title: 'An eigenvalue of algebraic multiplicity one has a one-dimensional eigenspace'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-algebraic-and-geometric-multiplicity-of-an-eigenvalue, thm-geometric-multiplicity-does-not-exceed-algebraic-multiplicity]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'H. Pinkham, Linear Algebra, §12.2'
      url: 'https://www.math.columbia.edu/department/pinkham/HCP_LinearAlgebra.pdf'
pipeline_run: null
---

## Statement

If $\lambda$ is an eigenvalue of a finite-dimensional endomorphism and has algebraic multiplicity $1$, then $\dim E_\lambda(T)=1$.

## Facts & Assumptions

**Given:** An eigenvalue $\lambda$ of $T$ whose algebraic multiplicity is $1$.

[L1] The geometric multiplicity is $\dim E_\lambda(T)$, and an eigenvalue has a nonzero eigenspace ([[def-algebraic-and-geometric-multiplicity-of-an-eigenvalue]]).

[L2] Geometric multiplicity is at most algebraic multiplicity ([[thm-geometric-multiplicity-does-not-exceed-algebraic-multiplicity]]).

## Proof

**Proof technique:** direct.

1.1 Since $E_\lambda(T)$ contains an eigenvector, it is nonzero and its finite dimension is at least $1$. [L1, given]

1.2 By [L2] and the given algebraic multiplicity, $\dim E_\lambda(T)\le1$. [L1, L2, given]

2.1 Combining steps 1.1 and 1.2 gives $\dim E_\lambda(T)=1$. [step 1.1, step 1.2, algebra] ∎
