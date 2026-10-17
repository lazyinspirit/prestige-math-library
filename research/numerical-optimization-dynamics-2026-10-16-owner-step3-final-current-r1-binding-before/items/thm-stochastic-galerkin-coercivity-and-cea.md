---
id: thm-stochastic-galerkin-coercivity-and-cea
kind: theorem
title: Stochastic Galerkin coercivity and Cea quasi-optimality
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-uniformly-elliptic-affine-random-diffusion
  - lem-affine-form-integrable-on-bochner-l2
  - thm-affine-random-diffusion-solution-is-bochner
  - thm-finite-input-bochner-l2-is-hilbert
  - def-strongly-measurable-banach-valued-function
  - def-chaos-orthonormal-tensor-basis
  - thm-independent-polynomial-chaos-tensors-are-orthonormal
  - thm-cea-quasi-optimality-for-conforming-galerkin-approximations
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: Countable Choice is required by the Bochner Hilbert and Céa suppliers; no stronger choice axiom is used.
verification: {}
sources:
  references:
    - title: Bruno Sudret, Polynomial Chaos Expansions and Stochastic Finite Element Methods, Chapter 6, §§3–4
      url: https://ethz.ch/content/dam/ethz/special-interest/baug/ibk/risk-safety-and-uncertainty-dam/publications/reports/RSUQ-2015-008.pdf
    - title: Ivo Babuška, Fabio Nobile, and Raúl Tempone, A Stochastic Collocation Method for Elliptic Partial Differential Equations with Random Input Data, §§1–2
      url: https://www.ices.utexas.edu/media/reports/2005/0547.pdf
---

## Statement

Assume Countable Choice and the affine diffusion hypotheses of
[[def-uniformly-elliptic-affine-random-diffusion]]. Let $p$ be the selected
admissible cutoff vector of the finite product-law input, and let
$\Lambda\subseteq\{\alpha\in\mathbb N_0^d:0\le\alpha_j\le p_j\text{ for all }j\}$
be finite. Let $V_h\subset V$ be any
finite-dimensional conforming spatial subspace. Define the stochastic
Galerkin space
$$\mathcal V_{\Lambda,h}:= \operatorname{span}\{\,\psi_\alpha(\cdot)v: \alpha\in\Lambda,\ v\in V_h\,\}\subset L^2_\rho(V).$$
The Bochner form is continuous with constant $a^*$ and coercive with constant
$a_*$. There is a unique $U_{\Lambda,h}\in\mathcal V_{\Lambda,h}$ satisfying
$$\mathcal A(U_{\Lambda,h},W_h)=\mathcal F(W_h) \qquad(W_h\in\mathcal V_{\Lambda,h}),$$
and, for the exact solution $u$ of
[[thm-affine-random-diffusion-solution-is-bochner]],
$$\|u-U_{\Lambda,h}\|_{L^2_\rho(V)} \le\frac{a^*}{a_*}\inf_{W_h\in\mathcal V_{\Lambda,h}} \|u-W_h\|_{L^2_\rho(V)}.$$
No stochastic-basis completeness or spectral-rate claim is part of this
finite-dimensional estimate.

## Facts & Assumptions

**Given:** The real affine diffusion model, Countable Choice, a finite chaos index set contained in the selected admissible cutoff box, and a finite-dimensional conforming spatial subspace.

[F1] [[lem-affine-form-integrable-on-bochner-l2]] gives a well-defined bounded coercive real bilinear form with constants $a^*$ and $a_*$ and a bounded linear functional $\mathcal F$.

[F2] [[thm-affine-random-diffusion-solution-is-bochner]] gives the exact $u\in L^2_\rho(V)$ satisfying $\mathcal A(u,W)=\mathcal F(W)$ for all $W$.

[F3] [[thm-finite-input-bochner-l2-is-hilbert]] makes $L^2_\rho(V)$ a real Hilbert space.

[F4] [[thm-independent-polynomial-chaos-tensors-are-orthonormal]] gives $\|\psi_\alpha\|_{L^2(\rho)}=1$, so $\psi_\alpha v\in L^2_\rho(V)$ for every $v\in V$.

[F5] [[def-strongly-measurable-banach-valued-function]] characterizes strong measurability by almost-everywhere limits of finite-valued measurable simple maps.

[F6] [[thm-cea-quasi-optimality-for-conforming-galerkin-approximations]] gives existence, uniqueness, and the $M/\alpha$ error bound for finite-dimensional conforming subspaces under Countable Choice.

## Proof

1.1 Each $\psi_\alpha$ is a continuous scalar polynomial. Approximate it pointwise by finite-valued measurable simple real functions; multiplying those functions by a fixed $v\in V$ gives simple $V$-valued maps converging to $\psi_\alpha v$. Thus $\psi_\alpha v$ is strongly measurable by [F5] and has Bochner norm $\|\psi_\alpha\|_{L^2(\rho)}\|v\|_V=\|v\|_V$ by [F4]. A finite basis of $V_h$ and finite $\Lambda$ therefore generate $\mathcal V_{\Lambda,h}$ from finitely many members of $L^2_\rho(V)$, making it finite-dimensional and conforming. [F3, F4, F5, given]

2.1 The model form and load satisfy the boundedness and coercivity hypotheses in [F6] by [F1], and the ambient space is Hilbert by [F3]. The finite-dimensional subspace condition is step 1.1. Apply [F6] with $M=a^*$ and $\alpha=a_*$; it gives the unique discrete solution and $\|u-U_{\Lambda,h}\|\le(a^*/a_*)\inf_{W_h\in\mathcal V_{\Lambda,h}}\|u-W_h\|$. This is the claimed estimate. [F1, F2, F3, F6, step 1.1, given] ∎
