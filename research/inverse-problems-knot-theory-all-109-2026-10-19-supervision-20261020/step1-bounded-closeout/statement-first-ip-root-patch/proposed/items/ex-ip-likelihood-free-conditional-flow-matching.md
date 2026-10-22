---
id: ex-ip-likelihood-free-conditional-flow-matching
kind: example
title: Likelihood-free conditional flow matching without an MH correction
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - thm-ip-exact-triangular-transport-disintegrates-to-posterior
  - def-ip-misfit-evidence-and-posterior-law
  - lem-ip-lipschitz-ode-triangular-flow-and-c1-density
  - lem-metropolis-hastings-density-ratio
  - def-axiom-of-choice
justified_by: []
forward_refs: []
proof_strategy: direct
axiom_use: >-
  AC is required only for the general conditional-posterior and
  density-based Metropolis–Hastings interfaces. The stated simulator interface
  makes no likelihood evaluation or unbiased likelihood estimator available;
  it does not rule out a different interface that supplies such an estimator.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jan Blechschmidt, Oliver G. Ernst, Moritz Poguntke, and Björn Sprungk, Flow Matching for Fast Posterior Sampling in Bayesian Inverse Problems"
      url: "https://arxiv.org/pdf/2610.02377"
      locator: "§3.1–§3.2, especially Remark 3.1 (PDF pp. 5–9): conditional training and sampling use joint prior-predictive samples without likelihood evaluation; §3.3–§3.4 and §4.4: independent-MH correction and diagnostics require an unnormalized posterior density, and the stochastic Lotka–Volterra example has no likelihood."
    - title: "Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 11 §11.4"
      url: "https://artowen.su.domains/mc/Ch-MCMC.pdf"
      locator: "Independent Metropolis–Hastings accepts by the target-to-proposal density ratio, which requires an evaluable unnormalized target density when used for a correction."
---

## Example

Assume the Axiom of Choice. Let a proper prior and forward simulator define a joint prior-predictive law $\pi$ for an unknown $X_1$ and data $Y$. Suppose the available interface can draw independent pairs $(X_1,Y)\sim\pi$ and reference states $X_0\sim\eta$, but supplies neither an evaluable likelihood density $L(x_1;y)$ nor an auxiliary nonnegative random estimate $\widehat L(x_1;y,U)$ with $\mathbb E_U\widehat L(x_1;y,U)=L(x_1;y)$, where the expectation is over auxiliary randomness $U$. Conditional flow matching can train from these joint and reference samples and an independent $t\sim\operatorname{Unif}[0,1]$ using the linear path $X_t=(1-t)X_0+tX_1$ and target velocity $X_1-X_0$, without evaluating $L$. For a fixed query datum, suppose the finite-dimensional prior has density $p_0$ with respect to Lebesgue measure $\lambda$ on $\mathbb R^d$, the reference law $\eta$ has a Lebesgue density, and the learned flow satisfies the separate C$^1$ hypotheses of the ODE lemma, so its proposal has the available density $q_y$ with respect to $\lambda$. Write $\widetilde p_y(x)=p_0(x)L(x;y)$ for the unnormalized posterior density. For pairs with positive forward proposal-flow density $\widetilde p_y(x)q_y(z)$, the density-based independent-Metropolis–Hastings acceptance probability is
$$\alpha_y(x,z)=\min\!\left\{1,\frac{\widetilde p_y(z)q_y(x)}{\widetilde p_y(x)q_y(z)}\right\}.$$
The stated sampling interface does not in general supply this ratio, so it does not by itself give an evaluable density-based correction. In a specified special model the likelihood ratio may cancel or be otherwise known without separate likelihood evaluations; such a case needs no missing likelihood oracle. This example concerns the general limitation of the specified density-based correction; it does not rule out pseudo-marginal correction if an appropriate likelihood estimator is supplied, nor other correction methods with different inputs.

## Example references

[[thm-ip-exact-triangular-transport-disintegrates-to-posterior|An exact joint triangular transport gives the posterior conditional law without a likelihood evaluation.]]

[[def-ip-misfit-evidence-and-posterior-law|The likelihood-weighted evidence and posterior density are required to form a fixed-data density-based correction.]]

[[lem-metropolis-hastings-density-ratio|The density-based Metropolis–Hastings acceptance uses the target and proposal density ratio.]]

[[lem-ip-lipschitz-ode-triangular-flow-and-c1-density|The separate C$^1$ clause supplies a flow proposal density by change of variables when its hypotheses hold.]]

[Blechschmidt et al., §§3.1–3.4 and §4.4](https://arxiv.org/pdf/2610.02377)

[Owen, Chapter 11 §11.4](https://artowen.su.domains/mc/Ch-MCMC.pdf)

## Facts & Assumptions

**Given:** A proper prior-predictive simulator for $\pi$, independent reference sampling from $\eta$, no evaluable likelihood density and no unbiased nonnegative likelihood estimator, and the density-based independent-MH correction specified in the Statement.

[A1] Assume the Axiom of Choice for the posterior-kernel and density-based Metropolis–Hastings interfaces. [[def-axiom-of-choice]], [[lem-metropolis-hastings-density-ratio]]

[F1] Blechschmidt et al. specify that conditional flow matching trains from prior-predictive joint samples and reference draws using a conditional velocity regression objective without evaluating the likelihood. [Blechschmidt et al., §3.2 and Remark 3.1](https://arxiv.org/pdf/2610.02377)

[F2] The density-based independent-MH correction requires the unnormalized target posterior density in its target/proposal ratio. [[lem-metropolis-hastings-density-ratio]], [Owen, Chapter 11 §11.4](https://artowen.su.domains/mc/Ch-MCMC.pdf)

[F3] Under the stated dominated model, the unnormalized posterior density is prior density times likelihood; evidence normalization does not remove the likelihood from an MH ratio. [[def-ip-misfit-evidence-and-posterior-law]]

[F4] The C$^1$ flow clause can supply a proposal density by the Jacobian formula, independently of whether the likelihood density is available. [[lem-ip-lipschitz-ode-triangular-flow-and-c1-density]]

[F5] If a distinct exact triangular map satisfies the joint pushforward identity, conditional transport can yield the posterior without evaluating that density; the identity is a separate exactness hypothesis. [[thm-ip-exact-triangular-transport-disintegrates-to-posterior]]

## Verification

**Given:** [F1]–[F5] and the simulator access limitations in the Statement.

1.1 Every training quantity in [F1] is formed from $X_0$, $(X_1,Y)$, independent time, the interpolant and its endpoint difference. These are all available under the specified sampling interface, so no likelihood value is needed to form a CFM training example. [F1, given, algebra]

1.2 The density-based MH acceptance ratio in [F2] contains the unnormalized posterior target. By [F3] its likelihood contribution is the ratio of likelihoods, which sampling access alone does not supply in general; [F4]'s proposal density does not supply it either. This is an interface limitation rather than an impossibility in every specified model: if the likelihood is independent of the parameter, its ratio is one wherever the forward flow is positive, and the prior and proposal ratios suffice. Thus additional knowledge of an evaluable ratio can permit this correction even without separate likelihood evaluations. [A1, F2, F3, F4, given, algebra]

2.1 [F5] is a separate route: if the exact joint transport identity is established, the disintegration theorem gives the posterior fiber law. The present example makes no claim that finite training establishes that identity, and supplying a likelihood estimator would change the MH interface. [A1, F5, step 1.1, step 1.2, given] ∎
