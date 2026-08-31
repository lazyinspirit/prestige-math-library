---
id: prop-galerkin-orthogonality-for-a-krylov-galerkin-iterate
kind: proposition
title: "Galerkin orthogonality turns residual orthogonality into $A$-orthogonality of the error, and the Galerkin iterate is unique"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-krylov-galerkin-iterate-for-a-hermitian-positive-definite-system,
       def-energy-inner-product-and-norm-for-a-hermitian-positive-definite-matrix]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Magnus R. Hestenes and Eduard Stiefel, Methods of Conjugate Gradients for Solving Linear Systems"
      url: "https://math.nist.gov/mcsd/Reports/2002/hestenes-steifel-52.pdf"
---

## Statement

Let $A$ be Hermitian positive definite, let $Ax=b$, let $x_0$ be an initial
guess, let $r_0=b-Ax_0$, let $x_*$ be the exact solution of $Ax=b$, and let
$x_m\in x_0+K_m(A,r_0)$. Then the following are equivalent:

1. $b-Ax_m$ is orthogonal to $K_m(A,r_0)$ in the standard inner product.
2. $x_*-x_m$ is orthogonal to $K_m(A,r_0)$ in the energy inner product.

When these conditions hold, the vector $x_m$ is the unique element of
$x_0+K_m(A,r_0)$ with that property.

## Facts & Assumptions

**Given:** A Hermitian positive-definite system $Ax=b$, an initial guess $x_0$, $r_0=b-Ax_0$, the exact solution $x_*$, and a vector $x_m\in x_0+K_m(A,r_0)$.

[F1] A Krylov Galerkin iterate is an element of $x_0+K_m(A,r_0)$ whose residual is orthogonal to $K_m(A,r_0)$ ([[def-krylov-galerkin-iterate-for-a-hermitian-positive-definite-system]]).

[L1] The energy inner product is $$\langle u,v\rangle_A=\langle Au,v\rangle$$ ([[def-energy-inner-product-and-norm-for-a-hermitian-positive-definite-matrix]]).

## Proof
**Proof technique:** direct.

1.1 For every $v\in K_m(A,r_0)$, the identity $Ax_*=b$ gives $$\langle b-Ax_m,v\rangle=\langle A(x_*-x_m),v\rangle=\langle x_*-x_m,v\rangle_A$$ by [L1]. Hence the residual is orthogonal to $K_m(A,r_0)$ if and only if the error is $A$-orthogonal to $K_m(A,r_0)$. [F1, L1, algebra]

2.1 Suppose $x_m$ and $y_m$ both lie in $x_0+K_m(A,r_0)$ and both satisfy the equivalent conditions from step 1.1. Then $d:=x_m-y_m$ lies in $K_m(A,r_0)$, and both errors are $A$-orthogonal to $d$. Subtracting the two orthogonality relations gives $$0=\langle x_*-x_m,d\rangle_A-\langle x_*-y_m,d\rangle_A=\langle y_m-x_m,d\rangle_A=-\langle d,d\rangle_A.$$ Positive definiteness of the energy inner product therefore forces $d=0$, so $x_m=y_m$. [L1, step 1.1, algebra] ∎
