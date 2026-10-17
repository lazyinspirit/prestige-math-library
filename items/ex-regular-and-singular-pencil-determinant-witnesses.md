---
id: ex-regular-and-singular-pencil-determinant-witnesses
kind: example
title: "A regular pencil and an identically singular determinant pencil"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-regular-generalized-eigenvalue-pencil]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Daniel Kressner, Numerical Methods and Software for General and Structured Eigenvalue Problems (PhD dissertation, 2004), Chapter 2: The QZ Algorithm"
      url: "https://pages.mtu.edu/~struther/Courses/OLD/Other/Sp2012/5627/BlockQR/Work/kressner_daniel.pdf"
    - title: "LAPACK Users' Guide, Generalized Nonsymmetric Eigenproblems"
      url: "https://www.netlib.org/lapack/lug/node35.html"
---

## Example

The pair $(I_2,0)$ is regular and has only infinite generalized eigenvalues.
The pair $(\operatorname{diag}(1,0),0)$ has an identically zero determinant
pencil and is singular. Thus a singular second matrix is compatible with
regularity, while the determinant polynomial decides pencil regularity.

## Facts & Assumptions

**Given:** The regularity definition for finite square pencils in
[[def-regular-generalized-eigenvalue-pencil]].

[F1] [[def-regular-generalized-eigenvalue-pencil]]: a pencil is regular
exactly when $\det(A-\lambda B)$ is not the zero polynomial.

## Verification

1.1 For $(A,B)=(I_2,0)$, $\det(A-\lambda B)=\det I_2=1$, so the pencil is regular. Its homogeneous determinant is $\det(\beta I_2)=\beta^2$, which vanishes only at $[1:0]$, the infinite eigenvalue pair. [given, F1, algebra]

2.1 For $(A,B)=(\operatorname{diag}(1,0),0)$, $\det(A-\lambda B)=\det A=0$ for every $\lambda$, so the determinant polynomial is identically zero and the pencil is singular. [F1, step 1.1, algebra] ∎
