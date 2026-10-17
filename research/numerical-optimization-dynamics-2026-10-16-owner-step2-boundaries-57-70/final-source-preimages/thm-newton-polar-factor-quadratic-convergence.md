---
id: thm-newton-polar-factor-quadratic-convergence
kind: theorem
title: "Newton polar iterates converge quadratically under an explicit norm condition"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 7
deps:
  - alg-newton-polar-factor-iteration
  - thm-polar-decomposition
  - thm-non-negative-square-root-exists-and-is-unique
  - thm-spectral-resolution-and-polynomial-spectral-projections
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Nicholas J. Higham, Computing the Polar Decomposition—with Applications"
      url: "https://eprints.maths.manchester.ac.uk/694/1/high86p.pdf"
    - title: "Jan Zur, Matrix Functions, TU Berlin full lecture notes"
      url: "https://www.tu.berlin/fileadmin/www/40000110/Dauer-Wimis/Jan_Zur/matrix_functions_zur.pdf"
---

## Statement

Let $A\in\mathbb C^{n\times n}$ be nonsingular, write its polar decomposition
$A=UH$ with $U$ unitary and $H$ positive definite, and define the exact Newton
iterates
$$X_0=A,\qquad X_{k+1}=\frac12(X_k+X_k^{-*}),\quad X_k^{-*}:=(X_k^{-1})^*.$$
Then every iterate is defined, $X_k\to U$, and for every $k\ge1$,
$$\|X_{k+1}-U\|_2\le\frac12\|X_k-U\|_2^2.$$
This is a theorem about the exact sequence, not a rounding-error guarantee for
[[alg-newton-polar-factor-iteration]].

## Facts & Assumptions

**Given:** A nonsingular complex matrix $A$ and its exact Newton sequence.

[F1] A nonsingular matrix has a polar factorization $A=UH$ with $U$ unitary
and $H=\sqrt{A^*A}$ positive definite
([[thm-polar-decomposition]],
[[thm-non-negative-square-root-exists-and-is-unique]]).

[F2] A positive self-adjoint matrix has an orthonormal eigenbasis with positive
eigenvalues when it is positive definite
([[thm-spectral-resolution-and-polynomial-spectral-projections]]).

[F3] The exact iteration is $X_{k+1}=(X_k+X_k^{-*})/2$
([[alg-newton-polar-factor-iteration]]).

## Proof

1.1 By [F1] and [F2], choose a unitary basis in which $H=\operatorname{diag}(\sigma_1,\ldots,\sigma_n)$ with $\sigma_i>0$. Inductively write $X_k=U g_k(H)$, where $g_0(t)=t$ and $g_{k+1}(t)=(g_k(t)+g_k(t)^{-1})/2$. If this holds at $k$, then $X_k^{-*}=U g_k(H)^{-1}$ because $U^*U=I$ and $g_k(H)$ is positive diagonal; substituting into [F3] proves the next formula and shows every iterate is invertible. [F1, F2, F3, construct]

2.1 For each scalar $\sigma_i>0$, $g_1(\sigma_i)-1=(\sigma_i-1)^2/(2\sigma_i)\ge0$, so $g_1(\sigma_i)\ge1$. If $y\ge1$, then $\frac12(y+y^{-1})\le y$, and $\frac12(y+y^{-1})-1=(y-1)^2/(2y)$. Hence each sequence $g_k(\sigma_i)$ for $k\ge1$ decreases to a limit $y\ge1$ satisfying $y=(y+y^{-1})/2$, so $y=1$. The displayed identity also gives $|g_{k+1}(\sigma_i)-1|\le |g_k(\sigma_i)-1|^2/2$ for $k\ge1$. [step 1.1, algebra]

3.1 Since $U$ is unitary and $g_k(H)$ is diagonal, $\|X_k-U\|_2=\max_i|g_k(\sigma_i)-1|$. Taking maxima in step 2.1 proves $X_k\to U$ and the stated quadratic bound. [step 2.1, algebra] ∎
