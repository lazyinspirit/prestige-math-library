---
id: ex-singular-b-yields-an-infinite-generalized-eigenvalue
kind: example
title: "A singular B can give a regular pencil with an infinite generalized eigenvalue"
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
sources:
  references:
    - title: "Peter Arbenz, Lecture Notes on Solving Large Scale Eigenvalue Problems, §§12.8–12.9"
      url: "https://people.inf.ethz.ch/arbenz/ewp/Lnotes/lsevp.pdf"
    - title: "LAPACK Users' Guide, Generalized Nonsymmetric Eigenproblems"
      url: "https://www.netlib.org/lapack/lug/node35.html"
---

## Example

Take $A=I_2$ and $B=\operatorname{diag}(1,0)$. The matrix $B$ is singular,
but the pencil is regular and has one finite eigenvalue and one infinite
eigenvalue.

## Facts & Assumptions

**Given:** The pair $(A,B)$ and the homogeneous eigenvalue convention of
[[def-regular-generalized-eigenvalue-pencil]].

[F1] [[def-regular-generalized-eigenvalue-pencil]]: regularity means
$\det(A-\lambda B)$ is not identically zero, and homogeneous eigenpairs solve
$\det(\beta A-\alpha B)=0$ with $(\alpha,\beta)\ne(0,0)$.

## Verification

1.1 Direct calculation gives $\det(A-\lambda B)=1-\lambda$, a nonzero polynomial, so the pencil is regular although $\det B=0$. [given, F1, algebra]

2.1 The homogeneous determinant is $\det(\beta A-\alpha B)=\det\begin{pmatrix}\beta-\alpha&0\\0&\beta\end{pmatrix} =\beta(\beta-\alpha).$ Its projective roots are $[1:1]$, the finite eigenvalue $1$, and $[1:0]$, the infinite eigenvalue. [F1, step 1.1, algebra] ∎
