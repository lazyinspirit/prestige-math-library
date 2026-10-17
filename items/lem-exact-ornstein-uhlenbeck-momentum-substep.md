---
id: lem-exact-ornstein-uhlenbeck-momentum-substep
kind: lemma
title: "Exact Ornstein–Uhlenbeck momentum transition and covariance"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-underdamped-langevin-equation-and-canonical-gibbs-density
  - def-axiom-of-choice
  - def-multivariate-normal-law
  - thm-non-negative-square-root-exists-and-is-unique
  - thm-multidimensional-ito-formula-for-brownian-driven-processes
  - cor-deterministic-ito-integrals-are-gaussian
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Jean-Noël Roux, Stéphane Rodts, and Gabriel Stoltz, Introduction à la physique statistique et à la physique quantique, §5.2.2, pp. 85–87"
      url: "https://cermics.enpc.fr/~stoltz/poly_phys_stat_quantique.pdf"
    - title: "Benedict Leimkuhler and Charles Matthews, Rational Construction of Stochastic Numerical Methods for Molecular Sampling, §2 and Appendix"
      url: "https://arxiv.org/pdf/1203.5428"
---

## Statement

For the O subproblem $dP_t=-\gamma P_t\,dt+\sqrt{2\gamma\beta^{-1}}M^{1/2}dW_t$ over a step $h>0$, with $P_0$ measurable at the start of the step and Brownian increments independent of the starting sigma algebra,
$$P_h=e^{-\gamma h}P_0+\sqrt{\beta^{-1}(1-e^{-2\gamma h})}\,M^{1/2}\xi,$$
where $\xi\sim N_d(0,I_d)$ is independent of the starting sigma algebra. In particular, conditionally on $P_0$, the transition is Gaussian with mean $e^{-\gamma h}P_0$ and covariance $\beta^{-1}(1-e^{-2\gamma h})M$.

## Facts & Assumptions

**Given:** The model data in [[def-underdamped-langevin-equation-and-canonical-gibbs-density]], a deterministic step $h>0$, and the O subproblem.

[F1] [[def-underdamped-langevin-equation-and-canonical-gibbs-density]]: $M$ is symmetric positive definite and the O subproblem has friction $\gamma$ and noise covariance $2\gamma\beta^{-1}M$.

[F2] [[cor-deterministic-ito-integrals-are-gaussian]]: a finite vector of deterministic It\^o integrals against Brownian increments is jointly centered Gaussian, with covariance entries given by the integrals of products of their deterministic integrands; future increments are independent of the starting sigma algebra.

[F3] [[thm-multidimensional-ito-formula-for-brownian-driven-processes]]: the It\^o product rule applies to a continuously differentiable deterministic scalar factor times a Brownian It\^o process.

[F4] [[thm-non-negative-square-root-exists-and-is-unique]]: $M$ has a unique symmetric positive square root.

[A1] [[def-axiom-of-choice]]: AC is inherited from the deterministic It\^o integral and Gaussian-law interfaces [F2]; no further choice is used.

## Proof

**Given:** The assumptions above.

1.1 Put $S=\sqrt{2\gamma\beta^{-1}}M^{1/2}$. Multiplying the O equation by the deterministic integrating factor $e^{\gamma t}$ and applying [F3] componentwise gives $d(e^{\gamma t}P_t)=e^{\gamma t}S\,dW_t$. Integrating from $0$ to $h$ and multiplying by $e^{-\gamma h}$ yields [F1, F2, F3, A1, given, algebra]
$$P_h=e^{-\gamma h}P_0+\int_0^h e^{-\gamma(h-s)}S\,dW_s.$$
The integrand is deterministic and square-integrable. By [F2] the integral is centered Gaussian, independent of the starting sigma algebra, with covariance
$$\int_0^h e^{-2\gamma(h-s)}SS^T\,ds=2\gamma\beta^{-1}M\int_0^h e^{-2\gamma(h-s)}ds=\beta^{-1}(1-e^{-2\gamma h})M.$$
[F1, F2, F3, A1, given, algebra]

2.1 By [F4], the displayed covariance has square root $\sqrt{\beta^{-1}(1-e^{-2\gamma h})}M^{1/2}$. A centered Gaussian vector with this covariance has the same law as that matrix times $\xi\sim N_d(0,I_d)$; [F2] gives independence from the starting sigma algebra. This proves the exact transition and conditional moments. [F1, F2, F4, step 1.1, given, algebra] ∎
