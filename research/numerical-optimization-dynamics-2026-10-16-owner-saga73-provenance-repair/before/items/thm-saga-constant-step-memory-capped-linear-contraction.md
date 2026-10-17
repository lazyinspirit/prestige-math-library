---
id: thm-saga-constant-step-memory-capped-linear-contraction
kind: theorem
title: SAGA constant-step linear contraction with a memory-capped factor
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
  statement: ai-generated
  proof: ai-generated
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

Assume AC. Let $n,d\ge1$ and let $f_i:\mathbb R^d\to\mathbb R$ be convex, continuously differentiable, with $L$-Lipschitz gradients for a common $L>0$. Set $F=n^{-1}\sum_i f_i$, assume $F$ is $\mu$-strongly convex for $\mu>0$, and let $x^*$ satisfy $\nabla F(x^*)=0$. Run [[alg-saga-finite-sum-method]] from deterministic $x_0$ with its standard initialized table and independent uniform component draws. For any constant $0<\eta\le1/(10L)$, define
$$V_k=\|x_k-x^*\|_2^2,\qquad S_k=\frac1n\sum_i\|\alpha_i^k-\nabla f_i(x^*)\|_2^2,\qquad \mathcal L_k=V_k+7\eta^2nS_k,$$
$$\delta=\min\{\mu\eta,1/(7n)\},\qquad q=1-\delta.$$
Then $0<\delta<1$, and for every $k\ge0$,
$$\mathbb E[\mathcal L_{k+1}\mid\mathcal F_k]\le q\mathcal L_k,\qquad \mathbb E[\mathcal L_k]\le q^k\mathcal L_0,\qquad \mathbb E[F(x_k)-F(x^*)]\le\frac L2q^k\mathcal L_0.$$
In particular $\eta=1/(10L)$ is allowed independently of $n$, with $\delta=\min\{\mu/(10L),1/(7n)\}$. When additionally $\mu\eta\le1/(7n)$ the factor is $1-\mu\eta$; no such faster factor is asserted without that condition. These are expectation bounds for the exact SAGA recurrence, not almost-sure convergence or finite-oracle success claims.

## Facts & Assumptions

**Given:** The functions, $x^*$, SAGA initialization and independent uniform sampling in this Statement, with AC for conditional-expectation classes. Finite-time moments exist because for each finite $k$ the algorithm has finitely many index histories and each gradient evaluation is finite.

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

1.1 Put $\Delta_k=F(x_k)-F(x^*)$ and $e_k=x_k-x^*$. By [F5] at $x_k$ with $y=x^*$, $\langle\nabla F(x_k),e_k\rangle\ge\Delta_k+(\mu/2)V_k$. By [F5] at $x^*$, $\Delta_k\ge(\mu/2)V_k\ge0$. Averaging [F4] at $x^*$ and using [F3] and $\nabla F(x^*)=0$ also gives $\Delta_k\le(L/2)V_k$. [F3, F4, F5, given, algebra]

1.2 The average gradient is $L$-Lipschitz: by [F3], [F7], [F8] and [F10], $\|\nabla F(x)-\nabla F(y)\|_2^2\le n^{-1}\sum_i\|\nabla f_i(x)-\nabla f_i(y)\|_2^2\le L^2\|x-y\|_2^2$. The strong-monotonicity consequence of [F5] and Cauchy–Schwarz [F8] imply $\mu\le L$, since $d\ge1$ allows $x\ne y$. Thus $0<\mu\eta\le1/10$ and $0<\delta\le1/(7n)\le1/7<1$. [F3, F5, F7, F8, F10, given, algebra]

2.1 Expand [F1] and condition on the current history. Unbiasedness and the second-moment bound in [F2], followed by the gap-retaining inner-product estimate in step 1.1, give $\mathbb E[V_{k+1}\mid\mathcal F_k]\le V_k-2\eta\langle\nabla F(x_k),e_k\rangle+\eta^2(6L\Delta_k+6S_k)\le(1-\mu\eta)V_k+(-2\eta+6L\eta^2)\Delta_k+6\eta^2S_k$. Finite-time moments exist as stated in the Given paragraph, so all conditional quantities are integrable. [A1, F1, F2, F6, step 1.1, given, algebra]

3.1 Multiply the table recurrence in [F2] by $7\eta^2n$ and add step 2.1. This yields $\mathbb E[\mathcal L_{k+1}\mid\mathcal F_k]\le(1-\mu\eta)V_k+(-2\eta+20L\eta^2)\Delta_k+(7n-1)\eta^2S_k$. Since $\eta\le1/(10L)$, the gap coefficient is nonpositive; since $\Delta_k\ge0$, it can be dropped. [A1, F2, step 1.1, step 2.1, given, algebra]

4.1 By definition $\delta\le\mu\eta$ and $\delta\le1/(7n)$. Hence $(1-\mu\eta)V_k\le(1-\delta)V_k$ and $(7n-1)\eta^2S_k=7\eta^2n(1-1/(7n))S_k\le7\eta^2n(1-\delta)S_k$. Apply these two inequalities to step 3.1 to obtain $\mathbb E[\mathcal L_{k+1}\mid\mathcal F_k]\le q\mathcal L_k$. The positivity from step 1.2 gives $q\in(0,1)$. [step 1.2, step 3.1, given, algebra]

5.1 Apply the tower property and order preservation in [F9] to step 4.1. Induction gives $\mathbb E[\mathcal L_k]\le q^k\mathcal L_0$, beginning with equality at $k=0$. Step 1.1 and $V_k\le\mathcal L_k$ give the objective bound after taking expectations. Substituting $\eta=1/(10L)$ gives the advertised constant-step factor; if $\mu\eta\le1/(7n)$, the minimum defining $\delta$ is $\mu\eta$. [A1, F9, step 1.1, step 4.1, given, induction, algebra] ∎

## Remarks

The initialized table costs $n$ component-gradient evaluations, and each further exact update uses one component gradient and $O(d)$ vector arithmetic with a maintained table mean; storage is $O(nd)$, as specified in [[alg-saga-finite-sum-method]]. Thus $k$ updates cost $n+k$ component-gradient evaluations. The cost of evaluating an individual component gradient is not bounded here. At $\eta=1/(10L)$, $1/\delta=\max\{10L/\mu,7n\}$ describes the geometric-rate scale; it is not a total runtime bound.

The separate memory-scaled theorem and the standard-initialization counterexample remain unchanged. The counterexample refutes omitting the memory cap from the faster factor, not the present capped rate. This local proof retains the gap term supplied by strong convexity instead of discarding it before combining iterate and table recurrences.
