---
id: def-displacement-rank-generators-and-lower-shift
kind: definition
title: "Lower-shift displacement rank and generator pairs"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-matrix-product-and-identity-matrix
  - def-toeplitz-circulant-and-displacement-notation
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Daniel Kressner and Robert Luce, Fast computation of the matrix exponential for a Toeplitz matrix, §2.1"
      url: "https://www.epfl.ch/labs/mathicse/wp-content/uploads/2018/10/23.2016_DK-RL.pdf"
---

## Definition

For $A\in\mathbb C^{n\times n}$, $n\ge1$, let $Z=Z_n$ be the lower shift with $Z_{i+1,i}=1$ for $0\le i<n-1$ and all other entries zero. Its lower-shift (Stein) displacement is
$$\nabla_Z(A):=A-ZAZ^*.$$
The **displacement rank** of $A$ with respect to this fixed shift is $\operatorname{rank}(\nabla_Z(A))$. A pair of matrices $G,H\in\mathbb C^{n\times r}$ is a **generator of width $r$** when
$$\nabla_Z(A)=GH^*.$$
Such a factorization is a representation of the displacement, not a factorization of $A$ itself. A matrix with displacement rank at most $r$ is called Toeplitz-like (relative to this shift). This definition makes no conditioning, pivot-growth, or numerical-stability assertion.
