---
id: thm-na-diagonal-diffusion-stencil-consistency
kind: theorem
title: Smooth consistency of the diagonal-diffusion Bellman stencil
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps: [alg-na-explicit-diagonal-diffusion-hjb-grid-step, def-na-periodic-diagonal-controlled-diffusion-hjb-problem, cor-taylor-remainder-bound]
justified_by: []
aliases: []
dependency_level: 4
proof_strategy: direct
axiom_base: No choice principle is used; the proof is a uniform Taylor estimate.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Kristian Debrabant and Espen R. Jakobsen, Semi-Lagrangian schemes for linear and fully non-linear Hamilton-Jacobi-Bellman equations"
      url: https://arxiv.org/pdf/1403.1217
      locator: "§2, Taylor consistency conditions for controlled diffusion stencils, printed pp. 2–3."
    - title: "Guy Barles and Panagiotis E. Souganidis, Convergence of approximation schemes for fully nonlinear second order equations"
      url: https://benjaminmoll.com/wp-content/uploads/2021/04/barles-souganidis.pdf
      locator: "§2, test-function consistency requirement for second-order schemes, printed pp. 274–276."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume the coefficients are bounded and periodic and a periodic test function
$\phi$ is smooth with bounded derivatives $\phi_{tt}$, $\phi_{x_jx_j}$, and
$\phi_{x_jx_jx_jx_j}$, and the coefficients are bounded. For the scheme of
[[alg-na-explicit-diagonal-diffusion-hjb-grid-step]], define the normalized
local residual
$$R_{h,\tau}(x_i,t_n)=\frac{\phi(x_i,t_n+\tau)-S_{h,\tau}\phi(\cdot,t_n)_i}{\tau}.$$
Then
$$R_{h,\tau}=\phi_t-\max_{a\in A}\left\{ \sum_j(\alpha_j^a\phi_{x_jx_j}+b_j^a\phi_{x_j})+f^a\right\} +O\left(\tau+\max_j\left[\alpha_{j,\max}h_j^2\|\phi_{x_j^4}\|_\infty+ |b_j|_{\max}h_j\|\phi_{x_jx_j}\|_\infty\right]\right),$$
where $\alpha_{j,\max}:=\sup_{a,x,t}\alpha_j^a(x,t)$ and
$|b_j|_{\max}:=\sup_{a,x,t}|b_j^a(x,t)|$. The bound is uniform over nodes and
times before the terminal step. The $O(\cdot)$ is a
smooth-test residual estimate, not a solution-error rate.

## Facts & Assumptions

**Given:** The finite-control diagonal diffusion scheme, the coefficient bounds,
and a periodic smooth test function with the stated derivative bounds.

[F1] The time update is
$$U^{n+1}=U^n+\tau\max_a\left\{\sum_j(\alpha_j^aD_{jj}^hU+b_j^aD_{j,a}^{up}U)+f^a\right\}$$
with the derivative conventions of the algorithm
([[alg-na-explicit-diagonal-diffusion-hjb-grid-step]]).

[F2] A Taylor remainder of order $m$ is bounded by the $(m+1)$st derivative
supremum times the segment length to that power divided by $(m+1)!$
([[cor-taylor-remainder-bound]]).

[F3] The continuous operator is
$u_t-\max_a\{\sum_j(\alpha_j^a u_{x_jx_j}+b_j^a u_{x_j})+f^a\}=0$
([[def-na-periodic-diagonal-controlled-diffusion-hjb-problem]]).

## Proof

1.1 Applying [F2] at $x_i\pm h_je_j$ and cancelling the odd terms gives $$D_{jj}^h\phi(x_i,t_n)=\phi_{x_jx_j}(x_i,t_n)+O(h_j^2\|\phi_{x_j^4}\|_\infty).$$ Applying [F2] to the one-sided difference in [F1] gives $$D_{j,a}^{up}\phi(x_i,t_n)=\phi_{x_j}(x_i,t_n)+O(h_j\|\phi_{x_jx_j}\|_\infty)$$ for either sign of $b_j^a$. The coefficient bounds make these estimates uniform over the finite action and coordinate sets. [F1, F2, given, algebra]

2.1 Taylor expansion in time gives $$\frac{\phi(x_i,t_n+\tau)-\phi(x_i,t_n)}{\tau} =\phi_t(x_i,t_n)+O(\tau\|\phi_{tt}\|_\infty).$$ Substitute the spatial estimates of step 1.1 into the update in [F1]. Since $|\max_a X_a-\max_aY_a|\le\max_a|X_a-Y_a|$, the uniform spatial residual is bounded by the sum displayed in the statement. Combining with the time estimate gives its formula and its explicit smoothness dependence. [F1, F2, step 1.1, F3, algebra]

3.1 The mesh consistency residual tends to zero when $\tau\to0$ and $h_{\max}\to0$ with bounded coefficients. It supplies the local consistency input for the half-relaxed-limit result and makes no assertion of a universal convergence rate. [step 2.1] ∎