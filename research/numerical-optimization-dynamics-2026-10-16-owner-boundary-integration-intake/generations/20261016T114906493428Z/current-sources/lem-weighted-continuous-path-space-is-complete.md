---
id: lem-weighted-continuous-path-space-is-complete
kind: lemma
title: Completeness of the weighted continuous trajectory space
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-euclidean-inner-product
  - def-complete-metric-space
  - def-countable-choice
  - thm-euclidean-space-complete
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
proof_strategy: direct
axiom_use: Countable Choice selects measurable representatives of the countable sequence of equivalence classes; least-index subsequence selection is choice-free.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: François Golse, Mean-Field Limits in Statistical Dynamics, Lecture 1
      url: https://metaphor.ethz.ch/x/2022/fs/401-4820-22L/notes/Mean-Field_Limits_in_Statistical_Dynamics_Golse.pdf
---

## Statement

Assume Countable Choice. Let $(E,\mathcal A,\mu)$ be a probability space, $T>0$, and $d\ge1$. Use the Euclidean norm of [[def-euclidean-inner-product]]. Let $\mathcal X$ be the space, modulo equality $\mu$-almost everywhere, of jointly measurable maps $X:[0,T]\times E\to\mathbb R^d$ whose paths are continuous for almost every label and whose time-supremum function is measurable, and for which
$$\|X\|_{\mathcal X}:=\int_E\sup_{0\le t\le T}|X_t(z)|d\mu(z)<\infty.$$
The seminorm identifies maps equal almost everywhere, and the induced distance $d_{\mathcal X}(X,Y)=\|X-Y\|_{\mathcal X}$ is a metric on the quotient; it is complete.

## Facts & Assumptions

**Given:** Countable Choice, a probability space $(E,\mathcal A,\mu)$, $T>0$, and the norm and equivalence convention in the Statement.

[F1] Euclidean $\mathbb R^d$ is complete for $d\ge1$ ([[thm-euclidean-space-complete]]).

[F2] Tonelli's theorem passes a sum of nonnegative measurable functions through the integral ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F3] Completeness means every Cauchy sequence converges in the metric ([[def-complete-metric-space]]).

[A1] Countable Choice permits choosing one measurable representative for each member of a countable sequence of equivalence classes ([[def-countable-choice]]).

[F4] The Euclidean norm has the triangle inequality, and the nonnegative integral preserves pointwise order and finite sums ([[thm-cauchy-schwarz-and-the-euclidean-norm]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

## Proof
1.1 Let $(X_n)$ be Cauchy in $d_{\mathcal X}$. By [A1] choose measurable representatives. Choose increasing indices $n_k$ successively as the least indices large enough that $\|X_m-X_n\|_{\mathcal X}\le2^{-k}$ whenever $m,n\ge n_k$. Then $\int_E\sum_{k=1}^\infty\sup_t|X_{n_{k+1}}(t,z)-X_{n_k}(t,z)|d\mu(z)\le\sum_{k=1}^\infty2^{-k}<\infty$ by [F2]. Hence for almost every $z$ the displayed series of sup norms is finite, and $X_{n_k}(\cdot,z)$ is uniformly Cauchy on $[0,T]$. [given, A1, F2, choose]

2.1 For each such $z$, uniform convergence in the complete Euclidean space [F1] gives a continuous path $X(\cdot,z)$. Set $X(\cdot,z)=0$ on the measurable exceptional set. Pointwise limits show joint measurability. The tail of the integrable series in step 1.1 bounds $\|X-X_{n_k}\|_{\mathcal X}$ and tends to zero; since $X_{n_k}$ has finite norm, the triangle inequality gives $\|X\|_{\mathcal X}<\infty$. [F1, F2, step 1.1]

3.1 Since the original sequence is Cauchy and its subsequence converges to $X$, the triangle inequality gives $\|X_n-X\|_{\mathcal X}\to0$: for any $\epsilon>0$, first take $k$ with $\|X_{n_k}-X\|<\epsilon/2$, then take $n$ beyond the Cauchy index so $\|X_n-X_{n_k}\|<\epsilon/2$. Thus every Cauchy sequence converges, which is completeness by [F3]. [F3, F4, step 2.1, algebra] ∎
