---
id: thm-conjugate-gradient-is-the-krylov-galerkin-method-and-minimizes-the-energy-error
kind: theorem
title: "CG is the Krylov Galerkin method, and the $m$th iterate uniquely minimizes the $A$-norm of the error over $x_0+K_m(A,r_0)$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-krylov-galerkin-iterate-for-a-hermitian-positive-definite-system,
       prop-galerkin-orthogonality-for-a-krylov-galerkin-iterate,
       thm-conjugate-gradient-residuals-are-orthogonal-and-search-directions-are-a-conjugate,
       thm-hermitian-positive-definite-linear-system-has-a-unique-energy-minimizer]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Magnus R. Hestenes and Eduard Stiefel, Methods of Conjugate Gradients for Solving Linear Systems"
      url: "https://math.nist.gov/mcsd/Reports/2002/hestenes-steifel-52.pdf"
    - title: "Jonathan Richard Shewchuk, An Introduction to the Conjugate Gradient Method Without the Agonizing Pain"
      url: "https://www.cs.cmu.edu/~quake-papers/painless-conjugate-gradient.pdf"
---

## Statement

Let $A$ be Hermitian positive definite, let $Ax=b$, let $x_0$ be an initial
guess, let $x_*$ be the exact solution of $Ax=b$, and let $x_m$ be the $m$th
conjugate-gradient iterate with initial residual $r_0=b-Ax_0$. Then $x_m$ is
the unique Krylov Galerkin iterate in $x_0+K_m(A,r_0)$, and for every
$x\in x_0+K_m(A,r_0)$,

$$\|x_*-x_m\|_A\le \|x_*-x\|_A,$$

with equality only when $x=x_m$.

## Facts & Assumptions

**Given:** A Hermitian positive-definite system $Ax=b$, an initial guess $x_0$, the exact solution $x_*$, the initial residual $r_0=b-Ax_0$, and the $m$th CG iterate $x_m$.

[F1] A Krylov Galerkin iterate is an element of $x_0+K_m(A,r_0)$ whose residual is orthogonal to $K_m(A,r_0)$ ([[def-krylov-galerkin-iterate-for-a-hermitian-positive-definite-system]]).

[L1] Residual orthogonality to $K_m(A,r_0)$ is equivalent to $A$-orthogonality of the error, and such an iterate is unique ([[prop-galerkin-orthogonality-for-a-krylov-galerkin-iterate]]).

[L2] In exact arithmetic, the residuals are mutually orthogonal and the search directions are $A$-conjugate ([[thm-conjugate-gradient-residuals-are-orthogonal-and-search-directions-are-a-conjugate]]).

[L3] For every $x$, the energy identity is $$\phi(x)-\phi(x_*)=\tfrac12\|x-x_*\|_A^2,$$ where $\phi$ is the quadratic energy ([[thm-hermitian-positive-definite-linear-system-has-a-unique-energy-minimizer]]).

## Proof
**Proof technique:** direct.

1.1 The CG recurrence gives $x_m-x_0$ as a linear combination of $p_0,\dots,p_{m-1}$, so $x_m\in x_0+\operatorname{span}\{p_0,\dots,p_{m-1}\}$. Also each residual satisfies $r_j=r_0-A(x_j-x_0)$, so $r_j\in K_{j+1}(A,r_0)\subseteq K_m(A,r_0)$ for $j<m$, and each $p_j=r_j+\beta_{j-1}p_{j-1}$ therefore also lies in $K_m(A,r_0)$. By [L2], the nonzero residuals $r_0,\dots,r_{m-1}$ are mutually orthogonal, hence linearly independent; since they all lie in the $m$-generated space $K_m(A,r_0)$, they form a basis of that space, and so do $p_0,\dots,p_{m-1}$ by the triangular relation $p_j\in r_j+\operatorname{span}\{r_0,\dots,r_{j-1}\}$. Thus $x_m\in x_0+K_m(A,r_0)$. [L2, algebra]

2.1 By [L2], the residual $r_m$ is orthogonal to each earlier residual. Since step 1.1 shows that $p_0,\dots,p_{m-1}$ form a basis of $K_m(A,r_0)$ and each $p_j$ lies in $\operatorname{span}\{r_0,\dots,r_j\}$, the same orthogonality implies $r_m$ is orthogonal to $K_m(A,r_0)$. Therefore $x_m$ is a Krylov Galerkin iterate by [F1], and [L1] makes it unique. [F1, L1, L2, step 1.1]

3.1 Let $x\in x_0+K_m(A,r_0)$ and put $v:=x-x_m\in K_m(A,r_0)$. By [L1] and step 2.1, the error $x_*-x_m$ is $A$-orthogonal to $v$, so $$\|x_*-x\|_A^2=\|(x_*-x_m)-v\|_A^2=\|x_*-x_m\|_A^2+\|v\|_A^2.$$ Hence $\|x_*-x_m\|_A\le\|x_*-x\|_A$, with equality only if $v=0$, that is, $x=x_m$. Using [L3], this is equivalent to saying that $x_m$ also uniquely minimizes the quadratic energy over the same affine Krylov space. [L1, L3, step 2.1, algebra] ∎
