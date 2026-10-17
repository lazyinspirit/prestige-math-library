---
id: thm-product-chaos-and-spatial-density-in-bochner-l2
kind: theorem
title: Tensor products are dense in Bochner L2 under scalar and spatial density
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-finite-input-bochner-l2-space
  - def-chaos-orthonormal-tensor-basis
  - thm-independent-polynomial-chaos-tensors-are-orthonormal
  - thm-dominated-convergence
  - def-strongly-measurable-banach-valued-function
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: No choice axiom is used; one supplied simple approximation sequence is truncated, followed by finitely many scalar and spatial approximations.
verification: {}
sources:
  references:
    - title: Christian Clason, Introduction to Finite Element Methods, Chapter 11
      url: https://arxiv.org/pdf/1709.08618v2.pdf
    - title: Bruno Sudret, Polynomial Chaos Expansions and Stochastic Finite Element Methods, §§3–4
      url: https://ethz.ch/content/dam/ethz/special-interest/baug/ibk/risk-safety-and-uncertainty-dam/publications/reports/RSUQ-2015-008.pdf
---

## Statement

Let $\mathcal S$ be the scalar linear span of a declared polynomial-chaos
family in $L^2(\rho)$ and let $V_0$ be a linear subspace dense in the separable
real Hilbert space $V$. Assume separately that $\mathcal S$ is dense in
$L^2(\rho)$; this law-specific completeness hypothesis is not inferred from
finite moments. Then the algebraic tensor span
$$\operatorname{span}\{\,s(\cdot)v:s\in\mathcal S,\ v\in V_0\,\}$$
is dense in $L^2_\rho(V)$.

## Facts & Assumptions

**Given:** A finite product probability space, the stated scalar density hypothesis, and a dense linear spatial subspace $V_0\subseteq V$.

[F1] [[def-finite-input-bochner-l2-space]] defines $L^2_\rho(V)$ using strongly measurable square-integrable maps.

[F2] [[thm-dominated-convergence]] gives convergence of scalar integrals for pointwise almost-everywhere convergence under an integrable measurable majorant.

[F3] Scalar density of $\mathcal S$ in $L^2(\rho)$ is an explicit hypothesis in **Given**, not a conclusion of the finite-basis orthonormality theorem.

[F4] Density of $V_0$ in $V$ is an explicit hypothesis in **Given**.

[F5] [[def-strongly-measurable-banach-valued-function]] characterizes strong measurability through simple-map approximation; a scalar measurable function times a fixed vector is strongly measurable.

## Proof

1.1 Fix $U\in L^2_\rho(V)$ and $\varepsilon>0$. By [F1] and [F5], choose a simple approximation sequence and replace it and $U$ by zero on their measurable null exceptional set. Write $S_n$ for the resulting simple maps, which converge everywhere to the Borel representative $U$. Set $T_n=S_n\mathbf1_{\{\|S_n\|_V\le2\|U\|_V\}}$. The truncation sets are measurable and $T_n$ is finite-valued simple. At $U=0$ it is zero; at every other point it eventually equals $S_n$, so $T_n\to U$. Since $\|T_n-U\|_V^2\le9\|U\|_V^2$, [F2] gives $\|T_n-U\|_{L^2_\rho(V)}\to0$. Choose one such map $S=\sum_{k=1}^m\mathbf1_{E_k}v_k$ with error below $\varepsilon/2$, taking $m\ge1$ by allowing a zero value. It remains to approximate its finitely many terms with total error below $\varepsilon/2$. [F1, F2, F5, given, choose]

2.1 For each $k$, use [F3] and [F4] to choose $s_k\in\mathcal S$ and $w_k\in V_0$ with $\|\mathbf1_{E_k}-s_k\|_{L^2(\rho)}\|v_k\|_V+ \|s_k\|_{L^2(\rho)}\|v_k-w_k\|_V<\varepsilon/(2m)$. Such choices are possible by first making the scalar error arbitrarily small, which bounds $\|s_k\|_2\le\|\mathbf1_{E_k}\|_2+\|\mathbf1_{E_k}-s_k\|_2$, and then making the vector error small. The product norm estimate $\|\mathbf1_{E_k}v_k-s_kw_k\|_{L^2_\rho(V)} \le\|\mathbf1_{E_k}-s_k\|_2\|v_k\|_V+\|s_k\|_2\|v_k-w_k\|_V$ follows pointwise from the triangle inequality and then from scalar square-integral estimation. Each product is strongly measurable by [F5], so these are legitimate Bochner-space norms. [F1, F3, F4, F5, step 1.1, algebra]

3.1 The finite sum $\sum_{k=1}^m s_kw_k$ belongs to the displayed algebraic tensor span, and the triangle inequality with step 2.1 gives distance less than $\varepsilon/2$ from $S$. Together with step 1.1 its distance from $U$ is less than $\varepsilon$. Since $U$ and $\varepsilon$ were arbitrary, the span is dense. [step 1.1, step 2.1, algebra] ∎