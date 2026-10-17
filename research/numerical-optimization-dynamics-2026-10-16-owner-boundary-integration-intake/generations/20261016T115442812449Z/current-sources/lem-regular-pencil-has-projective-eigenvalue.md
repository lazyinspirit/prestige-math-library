---
id: lem-regular-pencil-has-projective-eigenvalue
kind: lemma
title: "Every regular complex pencil has a homogeneous eigenvalue pair"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-regular-generalized-eigenvalue-pencil
  - lem-projective-determinant-is-homogeneous-and-scale-invariant
  - thm-fundamental-theorem-of-algebra-minimum-modulus-proof
  - thm-leibniz-determinant-is-alternating-multilinear-and-normalized
justified_by: []
proof_strategy: cases
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Peter Arbenz, Lecture Notes on Solving Large Scale Eigenvalue Problems, §12.9"
      url: "https://people.inf.ethz.ch/arbenz/ewp/Lnotes/lsevp.pdf"
    - title: "LAPACK Users' Guide, Generalized Nonsymmetric Eigenproblems"
      url: "https://www.netlib.org/lapack/lug/node35.html"
---

## Statement

Every regular finite square pencil $(A,B)$ over $\mathbb R$ or $\mathbb C$ has
at least one homogeneous generalized eigenvalue pair $[\alpha:\beta]$ over
$\mathbb C$.

## Facts & Assumptions

**Given:** $n\ge1$ and a regular pencil $A-\lambda B$ with
$A,B\in\mathbb F^{n\times n}$, $\mathbb F\in\{\mathbb R,\mathbb C\}$.

[F1] [[def-regular-generalized-eigenvalue-pencil]]: regularity means
$f(\lambda)=\det(A-\lambda B)$ is not the zero polynomial, and a homogeneous
eigenvalue pair is a nonzero projective zero of $p(\alpha,\beta)$.

[F2] [[lem-projective-determinant-is-homogeneous-and-scale-invariant]]:
$p(\alpha,\beta)=\beta^n f(\alpha/\beta)$ when $\beta\ne0$.

[F3] [[thm-fundamental-theorem-of-algebra-minimum-modulus-proof]]: every
nonconstant complex polynomial has a complex root.

[F4] [[thm-leibniz-determinant-is-alternating-multilinear-and-normalized]]:
the determinant is multilinear in its columns.

## Proof

1.1 By the Leibniz formula in [F1], every term of $f(\lambda)=\det(A-\lambda B)$ is a product of $n$ entries affine in $\lambda$. Thus $f$ has degree at most $n$; regularity makes it a nonzero polynomial. [given, F1, algebra]

2.1 If $\deg f=n$, [F3] gives $\lambda_0\in\mathbb C$ with $f(\lambda_0)=0$. Set $[\alpha:\beta]=[\lambda_0:1]$; [F2] gives $p(\alpha,\beta)=0$. [step 1.1, F2, F3, construct, assume-case degree]

2.2 If $\deg f<n$, its coefficient of $\lambda^n$ is $(-1)^n\det B$: in the Leibniz expansion this coefficient is obtained by choosing the $-\lambda B$ entry in every column, and [F4] factors out $(-1)^n$. Hence $\det B=0$. Setting $[\alpha:\beta]=[1:0]$ gives $p(1,0)=\det(-B)=(-1)^n\det B=0$, so this is an infinite homogeneous eigenvalue pair. [step 1.1, F1, F4, algebra, construct, assume-case lower]

3.1 The two degree cases exhaust the nonzero polynomial $f$ and each produces a nonzero projective pair with $p(\alpha,\beta)=0$. [step 2.1, step 2.2, cases-exhaustive] ∎
