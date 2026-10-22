---
id: alg-ip-conditional-flow-matching
kind: algorithm
title: Conditional flow matching for inverse posteriors
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-ip-misfit-evidence-and-posterior-law
  - def-conditional-law-given-a-random-element
  - def-conditional-expectation-given-a-sigma-algebra
  - thm-conditional-expectation-is-the-l2-orthogonal-projection
  - cor-conditional-expectation-as-a-measurable-function-of-the-conditioning-variable
  - lem-finite-euclidean-space-is-standard-borel
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - lem-ip-lipschitz-ode-triangular-flow-and-c1-density
  - thm-ip-exact-triangular-transport-disintegrates-to-posterior
  - def-ip-posterior-computation-error-budget
justified_by: []
forward_refs: []
proof_strategy: direct
axiom_use: >-
  AC supplies the conditional-expectation L2 projection and standard-Borel
  posterior kernel interfaces. Its consequences Countable Choice and
  Dependent Choice supply the ODE-flow and density clauses when their stated
  regularity hypotheses hold. No claim that finite-sample fitting or numerical
  integration is exact is made.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jan Blechschmidt, Oliver G. Ernst, Moritz Poguntke, and Björn Sprungk, Flow Matching for Fast Posterior Sampling in Bayesian Inverse Problems"
      url: "https://arxiv.org/pdf/2610.02377"
      locator: "§§3.1–3.2 and Algorithms 2–4 in Appendix B: triangular transport, conditional linear-path regression, joint prior-predictive sampling, and online ODE sampling. The local algorithm makes finite optimizer and solver statuses explicit."
    - title: "Yaron Lipman, Ricky T. Q. Chen, Heli Ben-Hamu, Maximilian Nickel, and Matt Le, Flow Matching for Generative Modeling, Transactions on Machine Learning Research (2024)"
      url: "https://arxiv.org/pdf/2302.00482"
      locator: "§3, Theorem 3.2 and §3.2: conditional vector-field regression and the linear interpolation target $X_1-X_0$."
    - title: "Percy S. Zhai, So Won Jeong, and Veronika Ročková, Conditional Flow Matching for Bayesian Posterior Inference"
      url: "https://arxiv.org/pdf/2510.09534"
      locator: "§3.1, Theorem 1 and Assumptions 1–2: finite-dimensional posterior Wasserstein accuracy under a learned-field objective error and flow regularity; §3.2, Theorem 2: consistency under compact bounded domains and Sobolev regularity."
---

## Definition

Assume the Axiom of Choice. Let $d,m,n,B\ge1$, let $\eta$ be a reference probability on $\mathbb R^d$, and let $\pi$ be the proper joint law of an unknown $X_1\in\mathbb R^d$ and data $Y\in\mathbb R^m$ in a specified Bayesian inverse model. Write $\pi_Y$ for the data marginal and $\pi_y$ for a posterior-kernel version of the conditional law of $X_1$ given $Y=y$. Assume
$$\int_{\mathbb R^d\times\mathbb R^m}|x_1|^2\,\pi(dx_1,dy)+\int_{\mathbb R^d}|x_0|^2\,\eta(dx_0)<\infty.$$

Choose a jointly measurable parameterized vector-field family $v_\theta:[0,1]\times\mathbb R^d\times\mathbb R^m\to\mathbb R^d$ whose candidates have finite population squared loss. For $i=1,\ldots,n$, draw independent triples
$$(t_i,X_{0i},(X_{1i},Y_i))\sim\operatorname{Unif}[0,1]\otimes\eta\otimes\pi,$$
where $\operatorname{Unif}[0,1]$ is Lebesgue probability on the unit interval, and set
$$X_{t_i}=(1-t_i)X_{0i}+t_iX_{1i},\qquad V_i=X_{1i}-X_{0i}.$$
Fit the field by minimizing, over the chosen model class, the empirical squared regression loss
$$\widehat{\mathcal L}_n(\theta)=\frac1n\sum_{i=1}^n\bigl|v_\theta(t_i,X_{t_i},Y_i)-V_i\bigr|^2.$$
Declare a finite maximum optimizer-step budget $M$, a tolerance $\varepsilon_{\rm opt}>0$, and a named stopping statistic $S$ computed from the finite training objective. Stop with status **converged** when $S\le\varepsilon_{\rm opt}$; return **budget-exhausted** if $M$ steps are used first and **failed** if the objective or optimizer becomes nonfinite. The optimizer returns the fitted field $\widehat v$, achieved training loss, value of $S$, tolerance, step budget and status; this finite-data stopping rule does not certify $\widehat v=v^*$.
The population least-squares target is the conditional-expectation class
$$v^*(t,x,y)=\mathbb E[X_1-X_0\mid\sigma(t,X_t,Y)]$$
coordinatewise, evaluated at $(t,x,y)$ through a chosen measurable representative. A conditional expectation is only an almost-sure equivalence class, so this formula does not specify an off-support pointwise extension.

For a query datum $y$, check all hypotheses of the cited ODE flow lemma, including joint continuity of the fitted field and its integrable global spatial-Lipschitz and origin-growth bounds on compact data-parameter sets containing $y$. If this check fails, return a field-regularity failure status. Otherwise draw $B$ independent initial states $Z_0^j\sim\eta$ and give each to a declared numerical ODE solver with a finite step or tolerance budget for
$$\dot Z_t^j=\widehat v(t,Z_t^j,y),\qquad Z_0^j\sim\eta.$$
Return terminal approximations only for successful integrations, together with the field, optimizer and solver statuses and any certified solver error estimate. Return a failure status for an integration that does not meet its declared stopping rule. If the exact triangular flow of $\widehat v$ were known to satisfy $T_{\#}(\eta\otimes\pi_Y)=\pi$, the exact transport theorem would imply $T_y{}_{\#}\eta=\pi_y$ for $\pi_Y$-almost every $y$; finite regression loss, optimizer termination, and solver success alone do not establish this joint pushforward identity or exact posterior sampling.

Record posterior model, discretization, kernel, burn-in, Monte Carlo and solver components under the declared posterior-computation error budget when applicable. The budget does not supply a learned-flow regression or optimizer-error estimate; report those as separate measured or certified quantities, and mark unavailable quantities unquantified rather than zero.

## Definition references

[[def-ip-misfit-evidence-and-posterior-law|A proper prior and likelihood model induce a joint prior-predictive law whose data-indexed conditional kernel is the posterior version.]]

[[def-conditional-expectation-given-a-sigma-algebra|Conditional expectation is the measurable integrable representative characterized by its integrals on the conditioning sigma-algebra.]]

[[thm-conditional-expectation-is-the-l2-orthogonal-projection|Under AC, conditional expectation is the unique almost-sure least-squares minimizer in the conditioning $L^2$ space.]]

[[cor-conditional-expectation-as-a-measurable-function-of-the-conditioning-variable|On standard Borel conditioning coordinates, a conditional expectation is represented by a measurable function of those coordinates.]]

[[lem-ip-lipschitz-ode-triangular-flow-and-c1-density|The integrable global Lipschitz and growth hypotheses give a unique global ODE flow and quantitative bi-Lipschitz bounds.]]

[[thm-ip-exact-triangular-transport-disintegrates-to-posterior|An exact joint triangular pushforward gives the conditional posterior pushforward almost everywhere.]]

[[def-ip-posterior-computation-error-budget|The posterior error ledger has six adjacent model, solver, discretization, invariant-kernel, burn-in and Monte Carlo terms, but no learned-flow training term.]]

[Blechschmidt et al., §§3.1–3.2 and Appendix B](https://arxiv.org/pdf/2610.02377)

[Tong et al., Theorem 3.2 and §3.2](https://arxiv.org/pdf/2302.00482)

[Zhai et al., §§3.1–3.2](https://arxiv.org/pdf/2510.09534)

## Facts & Assumptions

**Given:** AC; proper joint posterior law $\pi$ on finite-dimensional unknown/data spaces; independent reference law $\eta$; finite second moments; a chosen measurable vector-field family with finite squared population loss; finite optimizer and ODE budgets; and a numerical solver that returns either an endpoint or an explicit status.

[A1] AC is assumed for the conditional-expectation projection and standard-Borel posterior-kernel interfaces. Its implications include Countable Choice and Dependent Choice for the flow lemma. [[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]], [[thm-conditional-expectation-is-the-l2-orthogonal-projection]], [[def-ip-misfit-evidence-and-posterior-law]]

[F1] In a proper Bayesian model, $\pi$ is the joint unknown/data law and $\pi_y$ is a version of the posterior conditional law; values on a $\pi_Y$-null set are not fixed by the conditional identity. [[def-ip-misfit-evidence-and-posterior-law]], [[def-conditional-law-given-a-random-element]]

[F2] For a square-integrable target, the conditional expectation given $\sigma(t,X_t,Y)$ is the unique $L^2$ minimizer of the population squared prediction loss, coordinatewise. [[def-conditional-expectation-given-a-sigma-algebra]], [[thm-conditional-expectation-is-the-l2-orthogonal-projection]]

[F3] Under AC, a conditional expectation given a random element in a standard Borel space has a measurable representative as a function of that conditioning element; the identity with the conditional expectation holds almost surely. [[cor-conditional-expectation-as-a-measurable-function-of-the-conditioning-variable]], [[lem-finite-euclidean-space-is-standard-borel]]

[F4] Independent sampling from $\operatorname{Unif}[0,1]$, $\eta$, and $\pi$ gives the stated product training law; product probabilities have the rectangle formula, and the expectation of a finite sum of integrable losses is the sum of their expectations. [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]]

[F5] A fitted field satisfying the integrable spatial-Lipschitz and origin-growth assumptions has a unique global flow and a continuous terminal map; these facts do not certify that its output law is the target. [[lem-ip-lipschitz-ode-triangular-flow-and-c1-density]]

[F6] If the exact triangular terminal map has joint pushforward $\pi$, its exact conditional fibers push $\eta$ to $\pi_y$ for $\pi_Y$-almost every datum; this needs the joint identity as a separate hypothesis. [[thm-ip-exact-triangular-transport-disintegrates-to-posterior]]

[F7] The six-term posterior-computation budget is a telescoping ledger and supplies no learned-flow regression or optimizer bound. [[def-ip-posterior-computation-error-budget]]

## Verification

**Given:** The hypotheses and procedure in the Definition.

1.1 The sampled variables have joint law $\operatorname{Unif}[0,1]\otimes\eta\otimes\pi$ by the algorithm's independent-draw specification and [F4]. Since $\pi$ is the proper Bayesian prior-predictive joint law, [F1] identifies its selected conditional kernel as a posterior version. The moment assumption makes $V=X_1-X_0$ square-integrable, so [F2] identifies its unique population squared-loss regression class and [F3] represents that class measurably in the coordinates $(t,X_t,Y)$. Each empirical loss is a finite sum of finite residuals; for an integrable candidate loss, [F4] gives $\mathbb E[\widehat{\mathcal L}_n(\theta)]=\mathcal L(\theta)$. This establishes the regression target and population meaning of the empirical objective without claiming the finite optimizer attains the population minimum or that the stopping statistic bounds population error. [A1, F1, F2, F3, F4, given, algebra]

2.1 If the fitted field passes the stated regularity check, [F5] supplies the exact mathematical ODE flow and terminal map. If that exact map also satisfies the distinct joint pushforward hypothesis in [F6], the exact transport theorem gives the posterior fiber law. The algorithm instead returns numerical endpoints only when the solver reports success, so its actual finite-budget output remains an approximation unless an error certificate establishes otherwise. By [F7], a missing training or optimizer term in the posterior ledger remains separately reported rather than inferred as zero. [F5, F6, F7, given] ∎
