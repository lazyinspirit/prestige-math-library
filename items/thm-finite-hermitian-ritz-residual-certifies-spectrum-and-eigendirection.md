---
id: thm-finite-hermitian-ritz-residual-certifies-spectrum-and-eigendirection
kind: theorem
title: A Hermitian Ritz residual certifies spectral proximity and a gap-conditioned direction
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
  - def-countable-choice
  - def-compact-linear-operator
  - def-hilbert-space
  - def-real-and-complex-inner-product-space
  - thm-heine-borel-rn
  - thm-spectral-theorem-for-compact-self-adjoint-operators
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Finite Element Methods, Fall 2025, Chapter 46
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap46.pdf
      locator: "§§46.1.3–46.2.1, compact self-adjoint spectral expansion; finite residual identities are derived locally."
    - title: Bertrand Mercier, Topics in Finite Element Solution of Elliptic Problems, Chapter 8
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr63.pdf
      locator: "§§8.5–8.6, printed pp. 132–136, spectral clusters and eigenspace estimates; the finite residual calculation is proved locally."
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-17}}
---

## Statement

Assume Countable Choice. Let $A$ be a Hermitian operator on a nonzero
finite-dimensional real or complex Hilbert space. Let $u$ be a unit vector,
$\mu:=(Au,u)$ its Rayleigh quotient, and
$\rho:=\|(A-\mu I)u\|$. Let $\Sigma(A)$ be the finite set of eigenvalues of
$A$ and, for a nonempty finite set $S\subseteq\mathbb R$, define
$\operatorname{dist}(x,S):=\min_{\nu\in S}|x-\nu|$. Then
$$\operatorname{dist}(\mu,\Sigma(A))\le\rho.$$
If a specified target eigenvalue $\lambda\in\Sigma(A)$ is simple, let $e$ be
any unit eigenvector for it. If $\Sigma(A)\setminus\{\lambda\}$ is nonempty,
assume the certified separation
$$\Delta:=\min_{\nu\in\Sigma(A)\setminus\{\lambda\}}|\mu-\nu|>0.$$
Then the phase-invariant angle satisfies
$$\sin\angle(u,e):=\sqrt{1-| (u,e) |^2}\le\rho/\Delta.$$
If the target is the only eigenvalue, simplicity implies the Hilbert space is
one-dimensional and the angle is zero.
The residual alone does not identify which eigenvalue is nearby, in particular
it does not certify that the target is the lowest eigenvalue.

## Facts & Assumptions

**Given:** Countable Choice, a finite-dimensional Hilbert space, a Hermitian
operator $A$, a unit vector $u$, its real Rayleigh quotient $\mu$, and the
residual norm $\rho$.

[F1] A compact self-adjoint operator has real eigenvalues and an orthogonal
spectral expansion; in finite dimension its eigenspaces span the whole space
([[thm-spectral-theorem-for-compact-self-adjoint-operators]],
[[def-countable-choice]]).

[F2] The inner product is linear in its first argument, conjugate-linear in
its second, and positive definite
([[def-real-and-complex-inner-product-space]], [[def-hilbert-space]]).

[F3] A finite-dimensional inner product space has an orthonormal basis; in
finite-dimensional coordinates closed bounded sets are compact; and the
closed-unit-ball criterion characterizes compact operators
([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]],
[[thm-heine-borel-rn]], [[def-compact-linear-operator]]).

## Proof
**Proof technique:** direct.

**Given:** Countable Choice, the finite-dimensional Hilbert space, $A,u,\mu,\rho$
as in the statement, and the inner-product convention in [F2].

1.1 Choose an orthonormal basis $f_1,\ldots,f_N$ by [F3]. For $x=\sum_jc_jf_j$ with $\|x\|\le1$, orthonormality gives $|c_j|\le1$, so the triangle inequality yields $\|Ax\|\le\sum_j\|Af_j\|$. Thus $A$ maps the closed unit ball to a bounded set. Its closure is closed and bounded in finite-dimensional coordinates, hence compact by [F3]. The compact-operator unit-ball criterion in [F3] makes $A$ compact; Hermitian symmetry makes it self-adjoint. [F3, given, algebra]

2.1 Apply [F1] to the compact self-adjoint operator from step 1.1 to obtain an orthonormal eigenbasis $(e_j)_{j=1}^N$ with real eigenvalues $\lambda_j$. Expand $u=\sum_{j=1}^N c_je_j$, where $c_j=(u,e_j)$ and $\sum_j|c_j|^2=\|u\|^2=1$ by [F2]. Hence $\mu=\sum_j\lambda_j|c_j|^2\in\mathbb R$. [F1, F2, step 1.1, given]

3.1 Orthogonality gives $\rho^2=\|(A-\mu I)u\|^2=\sum_{j=1}^N|\lambda_j-\mu|^2|c_j|^2\ge\operatorname{dist}(\mu,\Sigma(A))^2\sum_j|c_j|^2$. Since the coefficient squares sum to one by step 2.1, taking nonnegative square roots proves the spectral-proximity bound. [F1, step 2.1, algebra]

4.1 If there is no eigenvalue other than the simple target, then $N=1$ and $u$ is a unit multiple of $e$, so the angle is zero. Otherwise choose the indexing so $e_k=e$ and $\lambda_k=\lambda$. The phase-invariant angle obeys $\sin^2\angle(u,e)=1-|c_k|^2=\sum_{j\ne k}|c_j|^2$. For each $j\ne k$, $|\lambda_j-\mu|\ge\Delta$ by definition. Therefore $\rho^2=\sum_j|\lambda_j-\mu|^2|c_j|^2\ge\Delta^2\sum_{j\ne k}|c_j|^2=\Delta^2\sin^2\angle(u,e)$. Taking square roots proves the directional estimate; if the target is the only eigenvalue, simplicity gives the zero-angle branch already handled. [F1, step 2.1, step 3.1, given, algebra]

5.1 The proximity estimate minimizes over the entire spectrum and contains no ordering or target label. It only says that some eigenvalue lies within $\rho$ of $\mu$; without an additional spectral-location certificate it does not identify that eigenvalue as the lowest one. [step 3.1, given] ∎

## Remarks

This is a finite-dimensional Hermitian statement. For an unbounded
compact-resolvent form operator, a residual must be defined in the correct
operator or form-dual norm and requires its own domain and regularity proof;
the finite-matrix formula is not transferred to that setting here. Repeated
eigenvalues are compared as invariant subspaces using
[[lem-compact-self-adjoint-residual-controls-invariant-subspace-gap]], not by
choosing a canonical eigenvector.
