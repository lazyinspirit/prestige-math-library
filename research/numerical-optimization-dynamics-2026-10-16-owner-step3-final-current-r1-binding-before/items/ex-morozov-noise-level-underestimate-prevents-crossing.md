---
id: ex-morozov-noise-level-underestimate-prevents-crossing
kind: example
title: Underestimated noise can put the Morozov target below every residual
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
dependency_level: 4
deps:
  - alg-morozov-discrepancy-bracketing-and-bisection
  - lem-tikhonov-data-residual-continuity-monotonicity-and-limits
  - def-compact-spectral-filter-and-qualification
  - def-square-summable-family-on-an-arbitrary-index-set
  - lem-square-summable-sequences-form-a-hilbert-space
  - def-hilbert-space
  - def-countable-choice
  - lem-finite-rank-operators-are-compact
  - thm-norm-limit-of-compact-operators-is-compact
  - def-hilbert-space-adjoint
  - def-inner-product-space
aliases: []
proof_strategy: direct
sources:
  references:
    - title: "Per Christian Hansen, Introduction to Inverse Problems, Chapter 5: Regularization Parameter Choice"
      url: https://people.compute.dtu.dk/pcha/DIP/chap5.pdf
      locator: Complete 27-slide chapter; slide 8 defines the discrepancy principle and warns it requires a reliable noise estimate.
    - title: "Guido Clason, Regularization of Inverse Problems, full lecture notes"
      url: https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf
      locator: Chapter 4, Theorem 4.7 and discrepancy discussion, PDF pp. 34–35.
---

## Example

Assume Countable Choice and write $\mathbb N_+=\{1,2,\ldots\}$. For declared noise $\delta>0$ and $\tau=3/2$, let
$A e_1=0$ and $A e_n=n^{-1}e_n$ for $n\ge2$ on real $\ell^2$. Take exact
solution $x^\dagger=0$ and observed datum $y_\delta=2\delta e_1$. The actual
noise has norm $2\delta$, twice the declared level. Every Tikhonov residual
is $2\delta$, so the Morozov target $\tau\delta$ is never attained.

## Facts & Assumptions

**Given:** Countable Choice, the real sequence Hilbert space $\ell^2(\mathbb N_+,\mathbb R)$, its standard basis $(e_n)$, $\delta>0$, $A e_1=0$, $A e_n=n^{-1}e_n$ for $n\ge2$, exact solution $x^\dagger=0$, datum $y_\delta=2\delta e_1$, and $\tau=3/2$.

[F1] [[def-square-summable-family-on-an-arbitrary-index-set]]: The coordinate vectors are orthonormal, and the norm square is the supremum of finite sums of coordinate squares.

[F2] [[lem-square-summable-sequences-form-a-hilbert-space]]: Real $\ell^2$ is complete.

[F3] [[lem-finite-rank-operators-are-compact]]: Bounded finite-rank operators are compact.

[F4] [[thm-norm-limit-of-compact-operators-is-compact]]: A norm limit of compact operators into a Banach space is compact.

[F5] [[def-compact-spectral-filter-and-qualification]]: The Tikhonov solution is $(A^*A+\lambda I)^{-1}A^*y_\delta$.

[F6] [[lem-tikhonov-data-residual-continuity-monotonicity-and-limits]]: The residual tends to $\operatorname{dist}(y_\delta,\overline{\operatorname{Ran}A})$ as $\lambda\downarrow0$ and is nondecreasing.

[F7] [[alg-morozov-discrepancy-bracketing-and-bisection]]: The finite search takes exact certified endpoint inputs $d=\operatorname{dist}(y_\delta, \overline{\operatorname{Ran}A})$ and $G=\|y_\delta\|$, and rejects them when $d<\tau\delta<G$ fails.

[F8] [[def-hilbert-space-adjoint]]: $\langle Ax,z\rangle =\langle x,A^*z\rangle$.

[F9] [[def-inner-product-space]]: The inner product is positive definite.

[F10] [[def-hilbert-space]]: A complete inner-product space is a Hilbert space.

## Verification
1.1 Relabelling coordinates by $k\mapsto k+1$ is an isometry from the complete space $\ell^2(\mathbb N,\mathbb R)$ in [F2] to $\ell^2(\mathbb N_+,\mathbb R)$, so the latter is Hilbert. Truncate $A$ after coordinate $M\ge1$. Each diagonal multiplier has modulus at most one, so both $A$ and its finite-rank truncation are bounded by one; the operator-norm error is $1/(M+1)$. By [F3]–[F4] and [F2], [F10], $A$ is compact on the Hilbert space [F1]. Its range is contained in $e_1^\perp$. Given $z\in e_1^\perp$ and $\varepsilon>0$, choose a finite $F\subset\{2,3,\ldots\}$ with $\sum_{n\notin F}|z_n|^2<\varepsilon^2$ using the finite-subsum definition in [F1]. The truncation $z_F=\sum_{n\in F}z_ne_n$ lies in $\operatorname{Ran}A$, since $A(\sum_{n\in F}nz_ne_n)=z_F$, and $\|z-z_F\|<\varepsilon$. Thus $\overline{\operatorname{Ran}A}=e_1^\perp$. [given, F1, F2, F3, F4, F10, algebra]

2.1 The datum $y_\delta=2\delta e_1$ is orthogonal to $\overline{\operatorname{Ran}A}$, so $\operatorname{dist}(y_\delta,\overline{\operatorname{Ran}A})=2\delta$ and $\|y_\delta\|=2\delta$. For every $x$, the first coordinate of $Ax$ is zero, so $\langle Ax,e_1\rangle=0$. By [F8], $\langle x,A^*e_1\rangle=0$ for all $x$; taking $x=A^*e_1$ and using [F9] gives $A^*e_1=0$. Thus [F5] gives $x_\lambda=0$ and the residual is exactly $2\delta$ for every $\lambda>0$. [F1, F5, F8, F9, step 1.1, algebra]

3.1 The exact endpoint inputs are $d=G=2\delta$, while the declared target is $\tau\delta=3\delta/2$. The compatibility condition in [F7] fails, and the target is below the residual floor from step 2.1. Thus no exact discrepancy crossing exists and the finite routine reports `incompatible-endpoints`, not a parameter. [F6, F7, step 2.1, algebra] ∎
