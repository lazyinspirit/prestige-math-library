---
id: ex-landweber-semiconvergence-on-a-compact-diagonal-operator
kind: example
title: Landweber semiconvergence for diagonal noisy data
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-landweber-iteration-with-discrepancy-stopping
  - lem-landweber-filter-and-residual-identities
  - def-compact-linear-operator
  - lem-finite-rank-operators-are-compact
  - thm-norm-limit-of-compact-operators-is-compact
  - lem-square-summable-sequences-form-a-hilbert-space
  - def-square-summable-family-on-an-arbitrary-index-set
  - def-hilbert-space-adjoint
  - def-countable-choice
  - def-operator-norm
  - def-natural-numbers
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems, full lecture notes"
      url: "https://arxiv.org/pdf/2001.00617"
      locator: "Chapter 7, discussion after Theorem 7.2, printed pp. 67–68 / PDF pp. 79–80: un-stopped noisy Landweber iterates may diverge."
    - title: "Per Christian Hansen, Introduction to Inverse Problems, Chapter 6: Iterative Methods"
      url: "https://people.compute.dtu.dk/pcha/DIP/chap6.pdf"
      locator: "Slides 3–5: iteration number as regularization parameter and semi-convergence."
---

## Example

Let $I=\{j\in\mathbb N:j\ge1\}$ and $X=Y=\ell^2(I,\mathbb R)$, let $Ae_j=2^{-j}e_j$ for the standard unit
vectors $e_j$, and take $\omega=1$, exact solution $x^\dagger=0$, and exact
data $y=0$. For $\delta>0$ let
$y^\delta_j=\delta\,2^{-j/2}$, so $\|y^\delta-y\|=\delta$. The un-stopped
Landweber residual tends to zero, but the reconstruction norms are unbounded
along the subsequence $k_j=4^j$.

## Facts & Assumptions

**Given:** The diagonal operator, exact solution and noisy data in the Example. Here $e_j$ is the sequence with coordinate $1$ at $j$ and $0$ elsewhere. Let $x_k^\delta$ be the associated infinite mathematical path of [[alg-landweber-iteration-with-discrepancy-stopping]], with discrepancy and finite-budget tests suppressed.

[A1] [[def-countable-choice]]: Countable Choice is assumed by the Hilbert-adjoint and compact spectral-filter suppliers used here.

[F1] [[alg-landweber-iteration-with-discrepancy-stopping]]: Its infinite mathematical path satisfies $x_{k+1}=x_k+A^*(y^\delta-Ax_k)$ when $\omega=1$.

[F2] [[lem-landweber-filter-and-residual-identities]]: $x_k=g_k(A^*A)A^*y^\delta$ and $y^\delta-Ax_k=(I-AA^*)^ky^\delta$.

[F3] [[lem-finite-rank-operators-are-compact]]: Every bounded linear operator between normed spaces whose range has an ordered basis of finite length is compact.

[F4] [[thm-norm-limit-of-compact-operators-is-compact]]: An operator-norm limit of compact operators is compact.

[F5] [[def-operator-norm]]: The operator norm is the supremum of $\|Tx\|$ over vectors with $\|x\|\le1$.

[F6] [[def-hilbert-space-adjoint]]: $\langle Ax,y\rangle=\langle x,A^*y\rangle$ for all $x,y\in\ell^2$.

[F7] [[lem-square-summable-sequences-form-a-hilbert-space]]: The real square-summable sequence space with its canonical inner product is a Hilbert space.

[F8] [[def-square-summable-family-on-an-arbitrary-index-set]]: $\|x\|_2^2=\sum_j|x_j|^2$, and $\ell^2$ uses the canonical coordinate inner product.

## Verification

**Given:** The hypotheses above and $k_j=4^j$.

1.1 Reindexing by $n\mapsto n+1$ is a linear isometry from $\ell^2(I,\mathbb R)$ onto $\ell^2(\mathbb N,\mathbb R)$, so [F7] makes $X=Y$ Hilbert spaces. All coordinates below are indexed by $j\ge1$, and $(Ax)_j=2^{-j}x_j$. By [F8], $\|Ax\|^2=\sum_{j\ge1}4^{-j}|x_j|^2\le\tfrac14\|x\|^2$, with equality at $e_1$; hence $A$ is bounded linear and [F5] gives $\|A\|=1/2$. The truncation $(A_Nx)_j=2^{-j}x_j$ for $j\le N$ and $0$ otherwise satisfies $\|A_Nx\|^2=\sum_{j=1}^N4^{-j}|x_j|^2\le\tfrac14\|x\|^2$. It is bounded linear with range having ordered basis $e_1,\ldots,e_N$ (the empty basis if $N=0$), so [F3] makes it compact. Also $\|A-A_N\|=\sup_{j>N}2^{-j}=2^{-(N+1)}\to0$, so [F4] makes $A$ compact. Thus $0<\omega=1<2/\|A\|^2=8$. The data norm is $\|y^\delta\|^2=\delta^2\sum_{j=1}^{\infty}2^{-j}=\delta^2$. [F3, F4, F5, F7, F8, given, algebra]

1.2 By [F6] and [F8], $A^*e_j=2^{-j}e_j$: for every $x$, $\langle Ax,e_j\rangle=2^{-j}x_j=\langle x,2^{-j}e_j\rangle$, and the adjoint is unique. Thus $AA^*e_j=4^{-j}e_j$, and the un-stopped path from [F1] has residual coordinates given by [F2]: $\delta2^{-j/2}(1-4^{-j})^k$. Their squared sum is dominated termwise by $\delta^2 2^{-j}$, whose tail tends to zero by the geometric-series formula. Given $\epsilon>0$, choose a finite initial segment with omitted bound below $\epsilon$; on that finite segment every residual coordinate tends to zero. Hence the full squared residual sum tends to zero. Each coordinate factor also decreases with $k$, so the residual norm is nonincreasing. [A1, F1, F2, F6, F8, given, choose, algebra]

2.1 Here $A^*A e_j=4^{-j}e_j$. Substituting into [F2] gives $x_{k,j}^\delta=\delta2^{j/2}\bigl(1-(1-4^{-j})^k\bigr)$. For an integer $n\ge2$, Bernoulli's inequality gives $(1+1/(n-1))^n\ge1+n/(n-1)>2$, hence $(1-1/n)^n<1/2$. Taking $n=4^j$ shows $|x_{k_j,j}^\delta|\ge\delta2^{j/2}/2$, which tends to infinity. Thus $\|x_{k_j}^\delta-x^\dagger\|\to\infty$ although the residual tends to zero; this is semiconvergence and shows why the method needs an explicit stopping rule. [A1, F2, given, algebra] ∎
