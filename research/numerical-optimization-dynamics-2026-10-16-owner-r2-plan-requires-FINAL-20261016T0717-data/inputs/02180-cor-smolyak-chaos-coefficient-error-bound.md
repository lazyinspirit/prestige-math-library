---
id: cor-smolyak-chaos-coefficient-error-bound
kind: corollary
title: Smolyak mixed-regularity bounds control chaos coefficient error
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - thm-chaos-quadrature-coefficient-error-split
  - def-chaos-quadrature-coefficient-estimator
  - def-chaos-orthonormal-tensor-basis
  - def-smolyak-cubature
  - thm-smolyak-isotropic-mixed-smoothness-work-error-rate
  - lem-smolyak-mixed-simpson-detail-decay
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: No choice axiom is used; the bound combines finitely many scalar cubature estimates.
verification: {}
sources:
  references:
    - title: Dongbin Xiu, Fast Numerical Methods for Stochastic Computations, §§4–5
      url: https://publications.sci.utah.edu/publications/xiu09/Xiu_CiCP2009.pdf
    - title: Bruno Sudret, Polynomial Chaos Expansions and Stochastic Finite Element Methods, §§3.4.2–3.4.3
      url: https://ethz.ch/content/dam/ethz/special-interest/baug/ibk/risk-safety-and-uncertainty-dam/publications/reports/RSUQ-2015-008.pdf
---

## Statement

Assume $\rho$ is uniform product probability on $[0,1]^d$, so its integral is
$I_d$ in [[thm-smolyak-isotropic-mixed-smoothness-work-error-rate]]. Let
$Q_{\Lambda_n}$ be that theorem's dyadic Simpson Smolyak rule, with
$n\ge2d$. For every $\alpha\in\Lambda$, suppose the coefficient integrand
$g_\alpha=u\psi_\alpha$ has the continuous mixed fourth derivatives and
finite bounds $M_{\alpha,S}$ required by
[[lem-smolyak-mixed-simpson-detail-decay]]. Define
$$E_{\alpha,n}:=C_d\|g_\alpha\|_{\mathrm{mix},d}W_{n,d}^{-4}
(\log(2+W_{n,d}))^{5(d-1)},$$
with the constants and mixed norm of the sparse-grid theorem. Then
$$\left(\sum_{\alpha\in\Lambda}
|Q_{\Lambda_n}(u\psi_\alpha)-\langle u,\psi_\alpha\rangle|^2\right)^{1/2}
\le\left(\sum_{\alpha\in\Lambda}E_{\alpha,n}^2\right)^{1/2}.$$
The error-split theorem consequently bounds the L2 coefficient contribution
by the right-hand side; this claim is restricted to the stated cube law and
mixed regularity.

## Facts & Assumptions

**Given:** Uniform product measure on $[0,1]^d$, a finite chaos basis, and the stated mixed-derivative hypotheses for each coefficient integrand.

[F1] [[thm-smolyak-isotropic-mixed-smoothness-work-error-rate]] bounds each scalar Smolyak integration error by $E_{\alpha,n}$ under its displayed hypotheses.

[F2] [[lem-smolyak-mixed-simpson-detail-decay]] supplies the exact mixed-derivative and endpoint convention required by [F1].

[F3] [[def-smolyak-cubature]] defines $Q_{\Lambda_n}$ as a finite cubature functional.

[F4] [[thm-chaos-quadrature-coefficient-error-split]] identifies the Euclidean coefficient-error norm as the L2 quadrature contribution.

## Proof

1.1 For each $\alpha$, apply [F1] to $g_\alpha=u\psi_\alpha$. Its assumptions are exactly the mixed-derivative bounds and cube domain in **Given**, with [F2] supplying the theorem's specified mixed norm. Thus $|Q_{\Lambda_n}(g_\alpha)-\int g_\alpha\,d\rho|\le E_{\alpha,n}$. The integral equals $\langle u,\psi_\alpha\rangle$ by the uniform product law. [F1, F2, F3, given]

2.1 Square the finitely many nonnegative inequalities from step 1.1, sum over $\alpha$, and take square roots; monotonicity of the square root gives the stated Euclidean bound. [step 1.1, algebra]

3.1 Apply [F4] with these coefficient errors. Its exact orthogonal error decomposition leaves the projection residual unchanged and adds the bounded Euclidean coefficient term, which proves the final assertion. [F4, step 2.1] ∎