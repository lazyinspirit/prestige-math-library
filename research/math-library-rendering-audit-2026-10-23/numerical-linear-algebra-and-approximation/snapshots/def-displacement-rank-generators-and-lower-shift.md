---
id: def-displacement-rank-generators-and-lower-shift
kind: definition
title: "Lower-shift displacement rank and generator pairs"
status: published
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
    - title: "Daniel Kressner and Robert Luce, Fast computation of the matrix
        exponential for a Toeplitz matrix, §2.1"
      url: "https://www.epfl.ch/labs/mathicse/wp-content/uploads/2018/10/23.2016_DK-R\
        L.pdf"
verification:
  precheck: n/a
---

## Definition

For $A\in\mathbb C^{n\times n}$, $n\ge1$, let $Z=Z_n$ be the lower shift with $Z_{i+1,i}=1$ for $0\le i<n-1$ and all other entries zero. Its lower-shift (Stein) displacement is
$$\nabla_Z(A):=A-ZAZ^*.$$
The **displacement rank** of $A$ with respect to this fixed shift is $\operatorname{rank}(\nabla_Z(A))$. A pair of matrices $G,H\in\mathbb C^{n\times r}$ is a **generator of width $r$** when
$$\nabla_Z(A)=GH^*.$$
Such a factorization is a representation of the displacement, not a factorization of $A$ itself. The term **Toeplitz-like** refers to matrices whose displacement rank is small relative to $n$; the rank bound $r$ must be specified rather than unrestricted. For a family of growing dimensions, a uniform bound means that $r$ is independent of $n$. This definition makes no conditioning, pivot-growth, or numerical-stability assertion.
