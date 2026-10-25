---
id: thm-conjugate-gradient-terminates-by-the-relative-grade-in-exact-arithmetic
kind: theorem
title: "In exact arithmetic, CG terminates no later than the relative grade and hence in at most $n$ steps"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-conjugate-gradient-is-the-krylov-galerkin-method-and-minimizes-the-energy-error,
       cor-for-invertible-a-the-exact-solution-enters-the-krylov-space-at-the-grade,
       def-grade-and-relative-minimal-polynomial-of-a-start-vector]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Magnus R. Hestenes and Eduard Stiefel, Methods of Conjugate Gradients for Solving Linear Systems"
      url: "https://math.nist.gov/mcsd/Reports/2002/hestenes-steifel-52.pdf"
---

## Statement

Let $A\in M_n(\mathbb C)$ be Hermitian positive definite, let $Ax=b$, let $x_0$
be an initial guess, let $r_0=b-Ax_0$, and let $\nu=\nu(A,r_0)$ be the grade of
$r_0$. Then exact-arithmetic conjugate gradients reaches the exact solution no
later than step $\nu$. In particular, $\nu\le n$, so CG terminates in at most
$n$ steps.

## Facts & Assumptions

**Given:** A Hermitian positive-definite system $Ax=b$, an initial guess $x_0$, the initial residual $r_0=b-Ax_0$, the grade $\nu=\nu(A,r_0)$, and the exact solution $x_*$.

[F1] The grade $\nu(A,r_0)$ is the degree of the monic polynomial of least degree that annihilates $r_0$, and it is $0$ when $r_0=0$ ([[def-grade-and-relative-minimal-polynomial-of-a-start-vector]]).

[L1] If $A$ is invertible, then the exact solution of $Ae=r_0$ lies in $K_\nu(A,r_0)$ ([[cor-for-invertible-a-the-exact-solution-enters-the-krylov-space-at-the-grade]]).

[L2] The $m$th CG iterate uniquely minimizes the $A$-norm of the error over $x_0+K_m(A,r_0)$ ([[thm-conjugate-gradient-is-the-krylov-galerkin-method-and-minimizes-the-energy-error]]).

## Proof
**Proof technique:** direct.

1.1 If $r_0=0$, then $Ax_0=b$, so CG has already reached the exact solution at step $0=\nu$ by [F1]. Assume now that $r_0\ne0$. The initial error $e_0:=x_*-x_0$ satisfies $Ae_0=r_0$, so [L1] gives $e_0\in K_\nu(A,r_0)$. Therefore $$x_*=x_0+e_0\in x_0+K_\nu(A,r_0).$$ [F1, L1, algebra]

2.1 If CG has already reached $x_*$ at some step $m<\nu$, then it has certainly terminated no later than step $\nu$. Otherwise the recurrence defines the $\nu$th iterate, so [L2] applies with $m=\nu$. Since $x_*$ itself belongs to the admissible affine space from step 1.1 and has zero error, the minimal $A$-norm error over that space is $0$. Hence the unique minimizer is $x_\nu=x_*$, so CG terminates no later than step $\nu$. [L2, step 1.1]

3.1 Because $A$ is $n\times n$, the $n+1$ vectors $r_0,Ar_0,\dots,A^nr_0$ are linearly dependent. Thus some nonzero polynomial of degree at most $n$ annihilates $r_0$, and the minimal possible degree in [F1] therefore satisfies $\nu\le n$. Combining this with step 2.1 gives termination in at most $n$ steps. [F1, step 2.1, algebra] ∎
