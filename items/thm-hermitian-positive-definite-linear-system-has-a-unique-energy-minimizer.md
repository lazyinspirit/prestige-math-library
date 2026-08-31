---
id: thm-hermitian-positive-definite-linear-system-has-a-unique-energy-minimizer
kind: theorem
title: "For Hermitian positive-definite $A$, the exact solution of $Ax=b$ is the unique minimizer of the quadratic energy"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-quadratic-energy-of-a-hermitian-positive-definite-linear-system,
       def-energy-inner-product-and-norm-for-a-hermitian-positive-definite-matrix,
       thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Jonathan Richard Shewchuk, An Introduction to the Conjugate Gradient Method Without the Agonizing Pain"
      url: "https://www.cs.cmu.edu/~quake-papers/painless-conjugate-gradient.pdf"
---

## Statement

Let $A\in M_n(\mathbb C)$ be Hermitian positive definite, let $b\in\mathbb C^n$,
and let $\phi$ be the quadratic energy from
[[def-quadratic-energy-of-a-hermitian-positive-definite-linear-system]]. Then
the system $Ax=b$ has a unique solution $x_*$, and for every $x\in\mathbb C^n$
one has

$$\phi(x)-\phi(x_*)=\tfrac12\|x-x_*\|_A^2.$$

In particular, $x_*$ is the unique minimizer of $\phi$.

## Facts & Assumptions

**Given:** A Hermitian positive-definite matrix $A\in M_n(\mathbb C)$, a vector
$b\in\mathbb C^n$, and the quadratic energy $\phi(x)$.

[F1] The quadratic energy is
$$\phi(x)=\tfrac12\langle Ax,x\rangle-\operatorname{Re}\langle b,x\rangle$$
([[def-quadratic-energy-of-a-hermitian-positive-definite-linear-system]]).

[L1] The energy norm is defined by
$$\|u\|_A^2=\langle Au,u\rangle$$
for Hermitian positive-definite $A$
([[def-energy-inner-product-and-norm-for-a-hermitian-positive-definite-matrix]]).

[L2] A matrix is Hermitian positive definite if and only if it has a Cholesky
factorization $A=LL^*$ with positive diagonal, and that factor is unique
([[thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]]).

## Proof
**Proof technique:** direct.

1.1 By [L2], there is a lower-triangular matrix $L$ with positive diagonal such that $A=LL^*$. Hence $L$ and $L^*$ are invertible, so $A$ is invertible and the system $Ax=b$ has the unique solution $x_*:=A^{-1}b$. [L2, algebra]

2.1 Since $Ax_*=b$, [F1] gives $$\phi(x)-\phi(x_*)=\tfrac12\langle A(x-x_*),x-x_*\rangle+\operatorname{Re}\!\left(\tfrac12\langle Ax_*,x-x_*\rangle-\tfrac12\langle A(x-x_*),x_*\rangle\right).$$ Because $A$ is Hermitian, $\langle Ax_*,x-x_*\rangle=\langle x_*,A(x-x_*)\rangle$ is the complex conjugate of $\langle A(x-x_*),x_*\rangle$, so the real part in parentheses vanishes. Therefore $$\phi(x)-\phi(x_*)=\tfrac12\langle A(x-x_*),x-x_*\rangle=\tfrac12\|x-x_*\|_A^2.$$ [F1, L1, step 1.1, algebra]

3.1 By [L1], the quantity $\|x-x_*\|_A^2$ is nonnegative and is zero only when $x=x_*$. Step 2.1 therefore shows $\phi(x)\ge\phi(x_*)$ for every $x$, with equality only at $x_*$. Hence $x_*$ is the unique minimizer of $\phi$. [L1, step 2.1] ∎
