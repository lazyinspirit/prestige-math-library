---
id: lem-regular-pencil-has-no-common-kernel-vector
kind: lemma
title: "A regular pencil has no nonzero vector in both kernels"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-regular-generalized-eigenvalue-pencil
  - def-determinant-of-a-square-matrix
  - thm-root-bound-for-polynomials-over-a-domain
  - thm-operator-invertible-iff-determinant-nonzero
justified_by: []
proof_strategy: contradiction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Daniel Kressner, Numerical Methods and Software for General and Structured Eigenvalue Problems (PhD dissertation, 2004), Chapter 2: The QZ Algorithm"
      url: "https://pages.mtu.edu/~struther/Courses/OLD/Other/Sp2012/5627/BlockQR/Work/kressner_daniel.pdf"
    - title: "LAPACK Users' Guide, Generalized Nonsymmetric Eigenproblems"
      url: "https://www.netlib.org/lapack/lug/node35.html"
---

## Statement

If $(A,B)$ is a regular pencil and $x\in\mathbb C^n$ satisfies $Ax=0$ and
$Bx=0$, then $x=0$.

## Facts & Assumptions

**Given:** A regular pencil $A-\lambda B$ of order $n\ge1$.

[F1] [[def-regular-generalized-eigenvalue-pencil]]: regularity means $\det(A-\lambda B)$ is a nonzero polynomial.

[F2] [[def-determinant-of-a-square-matrix]]: determinant is defined by the finite Leibniz sum.

[F3] [[thm-root-bound-for-polynomials-over-a-domain]]: a nonzero polynomial of degree $d$ over an integral domain has at most $d$ distinct roots.

[F4] [[thm-operator-invertible-iff-determinant-nonzero]]: a finite-dimensional operator is invertible exactly when its determinant is nonzero.

## Proof

1.1 Suppose $x\ne0$ and $Ax=Bx=0$. Then $(A-\lambda B)x=0$ for every $\lambda\in\mathbb C$, so $A-\lambda B$ is not invertible. By [F4], $f(\lambda)=\det(A-\lambda B)=0$ for every complex $\lambda$. [given, F1, F4, algebra, assume-contra]

2.1 By [F2], $f$ has degree at most $n$. If $f$ were nonzero, [F3] would bound its number of distinct complex roots by $n$, while step 1.1 gives every $\lambda\in\mathbb C$ as a root. In particular, the $n+1$ distinct numbers $0,1,\ldots,n$ would all be roots, contradicting [F1]. [given, F1, F2, F3, step 1.1, contradiction, discharge-contradiction] ∎
