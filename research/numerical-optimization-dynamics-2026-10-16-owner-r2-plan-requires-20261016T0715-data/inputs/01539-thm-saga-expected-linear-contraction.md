---
id: thm-saga-expected-linear-contraction
kind: theorem
title: SAGA expected linear contraction with a memory-scaled step size
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-saga-finite-sum-method
  - lem-saga-estimator-and-table-recurrence
  - lem-finite-sum-gradient-is-average
  - def-finite-sum
  - def-lipschitz-holder-contraction
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - lem-l-smoothness-descent-inequality
  - def-strong-convex-composite-objective
  - lem-strong-convexity-implies-strong-monotonicity-of-gradient
  - def-euclidean-inner-product
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Aaron Defazio, Francis Bach, and Simon Lacoste-Julien, SAGA: A Fast Incremental Gradient Method With Support for Non-Strongly Convex Composite Objectives, NeurIPS 2014"
      url: https://proceedings.neurips.cc/paper_files/paper/2014/file/937964195d6fb3a55cd7cc578165f058-Paper.pdf
      locator: Section 2, Theorem 1 and its complete Lyapunov proof.
    - title: "Robert M. Gower and Alexandre Gramfort, Optimization for Data Science: Stochastic Variance Reduced Gradient Methods, complete lecture-note deck"
      url: https://gowerrobert.github.io/pdf/M2_statistique_optimisation/optimization_IV_variance_reduced-expanded.pdf
      locator: Slides 57–59, SAGA estimator and convergence comparison.
---

## Statement

Let $n,d\ge1$, and let $f_i:\mathbb R^d\to\mathbb R$ be convex, continuously differentiable, with $L$-Lipschitz gradients for a common $L>0$. Put $F=n^{-1}\sum_i f_i$, assume $F$ is $\mu$-strongly convex with $\mu>0$, and let $x^*$ satisfy $\nabla F(x^*)=0$. Run SAGA [[alg-saga-finite-sum-method]] from a deterministic $x_0$ and its stated initialized gradient table. For

$$0<\eta\le\min\left\{\frac1{3L},\frac{\mu}{13L^2},\frac1{7\mu n}\right\},$$

define $V_k=\|x_k-x^*\|_2^2$, $S_k=n^{-1}\sum_i\|\alpha_i^k-\nabla f_i(x^*)\|_2^2$, and $\mathcal L_k=V_k+7\eta^2nS_k$. Then for every $k\ge0$,

$$\mathbb E[\mathcal L_{k+1}]\le(1-\mu\eta)\mathbb E[\mathcal L_k].$$

**Contract discrepancy:** the controlling STO2 contract omits an $n$-dependent step-size restriction while requiring this same Lyapunov function and factor. For the standard SAGA initialization with $n=100$, $L=\mu=1$, $x_0=1$, and $\eta=1/13$, one obtains $\mathcal L_1/\mathcal L_0=844/869>12/13$, refuting that unamended claim. The added condition $\eta\le1/(7\mu n)$ is sufficient for this local proof; it is not claimed necessary or optimal. This corrected local theorem is not represented as proof of the unamended contract.

## Facts & Assumptions

**Given:** The functions, $x^*$, SAGA initialization and independent uniform sampling in the Statement, with AC for conditional-expectation classes. Finite-time moments exist because for each finite $k$ the algorithm has finitely many index histories and each gradient evaluation is finite.

[F1] [[alg-saga-finite-sum-method]]: $x_{k+1}=x_k-\eta v_k$, then the sampled table entry is replaced by $\nabla f_{I_k}(x_k)$ using the pre-update iterate.

[F2] [[lem-saga-estimator-and-table-recurrence]]: conditionally on the history, $\mathbb E[v_k\mid\mathcal F_k]=\nabla F(x_k)$, $\mathbb E[\|v_k\|_2^2\mid\mathcal F_k]\le6L(F(x_k)-F(x^*))+6S_k$, and $\mathbb E[S_{k+1}\mid\mathcal F_k]\le(1-1/n)S_k+(2L/n)(F(x_k)-F(x^*))$.

[F3] [[lem-finite-sum-gradient-is-average]]: $\nabla F(w)=n^{-1}\sum_i\nabla f_i(w)$.

[F4] [[lem-l-smoothness-descent-inequality]]: each $f_i$ satisfies its $L$-smooth upper descent inequality.

[F5] [[lem-strong-convexity-implies-strong-monotonicity-of-gradient]]: $F(y)\ge F(x)+\langle\nabla F(x),y-x\rangle+(\mu/2)\|y-x\|_2^2$.

[F6] [[def-euclidean-inner-product]]: the Euclidean inner product is bilinear and $\|z\|_2^2=\langle z,z\rangle$.

[F7] [[def-lipschitz-holder-contraction]]: an $L$-Lipschitz gradient satisfies $\|\nabla f_i(x)-\nabla f_i(y)\|_2\le L\|x-y\|_2$.

[F8] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $|\langle z,w\rangle|\le\|z\|_2\|w\|_2$; applying Cauchy–Schwarz to the finite vector of component norms bounds an average by its root-mean-square norm.

[F9] [[thm-basic-algebra-and-order-properties-of-conditional-expectation]]: conditional expectation preserves order and $\mathbb E[\mathbb E[X\mid\mathcal F_k]]=\mathbb E[X]$ for integrable $X$.

[F10] [[def-finite-sum]]: the finite average is the recursively defined finite sum scaled by $1/n$.

[A1] [[def-axiom-of-choice]]: AC is assumed by the conditional-expectation interface [F2].

## Proof

**Given:** The objects and assumptions in the Statement.

1.1 Put $\Delta_k=F(x_k)-F(x^*)$. Averaging [F4] from $x^*$ to $x_k$, and using [F3] and $\nabla F(x^*)=0$, gives $\Delta_k\le(L/2)V_k$. Applying [F5] from $x^*$ to $x_k$ also gives $\Delta_k\ge(\mu/2)V_k\ge0$. [F3, F4, F5, given, algebra]

2.1 Expand [F1] and condition on the current history. The unbiased part of [F2] gives cross term $-2\eta\langle\nabla F(x_k),x_k-x^*\rangle\le-2\mu\eta V_k$ by [F5]. The second-moment bound in [F2] and step 1.1 then give $\mathbb E[V_{k+1}\mid\mathcal F_k]\le(1-2\mu\eta+3\eta^2L^2)V_k+6\eta^2S_k$. [A1, F1, F2, F5, F6, step 1.1, given, algebra]

2.2 The table recurrence in [F2], followed by step 1.1, gives $\mathbb E[S_{k+1}\mid\mathcal F_k]\le(1-1/n)S_k+(L^2/n)V_k$. [A1, F2, step 1.1, given, algebra]

3.1 Multiply step 2.2 by $7\eta^2n$ and add step 2.1. The coefficient of $V_k$ is $1-2\mu\eta+10\eta^2L^2$, and the coefficient of $S_k$ is $(7n-1)\eta^2$. Since $\eta\le\mu/(13L^2)$, the first coefficient is at most $1-\mu\eta$; since $\eta\le1/(7\mu n)$, the second is at most $7\eta^2n(1-\mu\eta)$. Thus $\mathbb E[\mathcal L_{k+1}\mid\mathcal F_k]\le(1-\mu\eta)\mathcal L_k$. [A1, step 2.1, step 2.2, given, algebra]

4.1 By [F3], [F7], [F8], [F10], and finite Cauchy–Schwarz, $\|\nabla F(x)-\nabla F(y)\|_2^2\le n^{-1}\sum_i\|\nabla f_i(x)-\nabla f_i(y)\|_2^2\le L^2\|x-y\|_2^2$. For $x\ne y$, [F5] and [F8] now give $\mu\|x-y\|_2^2\le\langle\nabla F(x)-\nabla F(y),x-y\rangle\le L\|x-y\|_2^2$, so $\mu\le L$. Thus $1-\mu\eta\ge2/3>0$ by the step-size bound. Apply [F9] to take expectations in the conditional inequality from step 3.1; this proves the stated contraction. [A1, F3, F5, F7, F8, F9, F10, step 3.1, given, algebra] ∎

## Remarks

The refutation of the unamended SAGA factor from the standard initialization is proved in [[cex-saga-linear-factor-fails-under-standard-initialization]]. This theorem proves the corrected sufficient-step-size statement above.
