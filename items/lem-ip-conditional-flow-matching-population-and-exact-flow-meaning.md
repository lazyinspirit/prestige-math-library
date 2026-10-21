---
id: lem-ip-conditional-flow-matching-population-and-exact-flow-meaning
kind: lemma
title: Population regression and exact-flow meaning of conditional flow matching
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - alg-ip-conditional-flow-matching
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
axiom_use: AC supplies the conditional-expectation projection and standard-Borel posterior interfaces; its CC/DC consequences supply the ODE flow hypotheses.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Blechschmidt et al., Flow Matching for Fast Posterior Sampling in Bayesian Inverse Problems"
      url: "https://arxiv.org/pdf/2610.02377"
      locator: "Section 3.2, equations (12)–(15), and Theorem 3.1; local proof uses the declared projection, product-integration, ODE and disintegration suppliers."
---

## Statement

Assume the Axiom of Choice. Let $d,m,n\ge1$, let $\eta$ be a probability measure on $\mathbb R^d$, and let $\pi$ be a proper Bayesian joint law on $\mathbb R^d\times\mathbb R^m$ with data marginal $\pi_Y$ and posterior-kernel version $\pi_y$. Assume $\int|x_0|^2\eta(dx_0)+\int|x_1|^2\pi(dx_1,dy)<\infty$. Let $t$, $X_0$ and $(X_1,Y)$ be independent with law $\operatorname{Unif}[0,1]\otimes\eta\otimes\pi$, where $X_t=(1-t)X_0+tX_1$, and $V=X_1-X_0$ has finite second moment. Write $\mathcal L(v):=\mathbb E|v(t,X_t,Y)-V|^2$ and let $\widehat{\mathcal L}_n(v)$ be the empirical mean of this squared residual over $n\ge1$ independent training triples. Then the conditional-expectation class $v^*(t,X_t,Y)=\mathbb E[V\mid\sigma(t,X_t,Y)]$ admits a measurable representative in $(t,x,y)$ and uniquely minimizes $\mathcal L$ over square-integrable predictors measurable in these coordinates, up to almost-sure equality. For every fixed measurable candidate $v$ with finite population loss,
$$\mathbb E[\widehat{\mathcal L}_n(v)]=\mathcal L(v).$$
This expectation identity is for a fixed candidate, not a data-dependent fitted field.

If a fitted field satisfies all hypotheses of the global ODE flow lemma, it has an exact triangular terminal map $T(x,y)=(T_y(x),y)$. If also $T_{\#}(\eta\otimes\pi_Y)=\pi$, then $T_y{}_{\#}\eta=\pi_y$ as probability measures outside one $\pi_Y$-null set. These conclusions make no assertion that finite training or numerical solver success establishes the exact joint pushforward identity.

## Statement references

[[alg-ip-conditional-flow-matching|Conditional flow matching supplies the training law and empirical objective.]]

[Blechschmidt et al., section 3.2 and Theorem 3.1](https://arxiv.org/pdf/2610.02377)

## Facts & Assumptions

**Given:** The hypotheses, training law, independent triples and fixed candidate in the Statement; the algorithm supplies the empirical-objective convention.

[A1] AC is assumed for the conditional-expectation projection and standard-Borel posterior-kernel interfaces. Its implications include Countable Choice and Dependent Choice for the flow lemma. [[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]], [[thm-conditional-expectation-is-the-l2-orthogonal-projection]], [[def-ip-misfit-evidence-and-posterior-law]]

[F1] In a proper Bayesian model, $\pi$ is the joint unknown/data law and $\pi_y$ is a version of the posterior conditional law; values on a $\pi_Y$-null set are not fixed by the conditional identity. [[def-ip-misfit-evidence-and-posterior-law]], [[def-conditional-law-given-a-random-element]]

[F2] For a square-integrable target, the conditional expectation given $\sigma(t,X_t,Y)$ is the unique $L^2$ minimizer of the population squared prediction loss, coordinatewise. [[def-conditional-expectation-given-a-sigma-algebra]], [[thm-conditional-expectation-is-the-l2-orthogonal-projection]]

[F3] Under AC, a conditional expectation given a random element in a standard Borel space has a measurable representative as a function of that conditioning element; the identity with the conditional expectation holds almost surely. [[cor-conditional-expectation-as-a-measurable-function-of-the-conditioning-variable]], [[lem-finite-euclidean-space-is-standard-borel]]

[F4] Independent sampling from $\operatorname{Unif}[0,1]$, $\eta$, and $\pi$ gives the stated product training law; product probabilities have the rectangle formula, and the expectation of a finite sum of integrable losses is the sum of their expectations. [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]]

[F5] A fitted field satisfying the integrable spatial-Lipschitz and origin-growth assumptions has a unique global flow and a continuous terminal map; these facts do not certify that its output law is the target. [[lem-ip-lipschitz-ode-triangular-flow-and-c1-density]]

[F6] If the exact triangular terminal map has joint pushforward $\pi$, its exact conditional fibers push $\eta$ to $\pi_y$ for $\pi_Y$-almost every datum; this needs the joint identity as a separate hypothesis. [[thm-ip-exact-triangular-transport-disintegrates-to-posterior]]

[F7] The six-term posterior-computation budget is a telescoping ledger and supplies no learned-flow regression or optimizer bound. [[def-ip-posterior-computation-error-budget]]

[F0] The training law, empirical objective and procedure are as specified in [[alg-ip-conditional-flow-matching]].

## Proof

**Given:** The hypotheses in the Statement and the empirical-objective convention [F0].

1.1 The inequality $|V|^2\le2|X_1|^2+2|X_0|^2$ makes $V$ square-integrable. By [A1] and [F2], coordinatewise conditional expectation uniquely minimizes the sum of squared prediction errors among square-integrable predictors measurable with respect to $\sigma(t,X_t,Y)$, up to almost-sure equality. Apply [F3] with the finite-dimensional random elements $V$ and $(t,X_t,Y)$ to obtain a measurable representative $v^*(t,x,y)$. For a fixed measurable $v$ with finite loss, every sampled squared residual has expectation $\mathcal L(v)$ under the specified product law. Linearity in [F4] therefore gives $\mathbb E[\widehat{\mathcal L}_n(v)]=n^{-1}\sum_{i=1}^n\mathcal L(v)=\mathcal L(v)$. This does not apply to substituting a data-dependent fitted field into the fixed-candidate expectation identity. [A1, F0, F2, F3, F4, given, algebra]

2.1 For a fitted field satisfying all stated ODE hypotheses, [F5] gives its exact flow, joint continuity of the terminal map and bijective fibers. If that map also satisfies the exact joint pushforward hypothesis, [F1] and [F6] identify its image of $\eta$ with the posterior kernel outside one $\pi_Y$-null set. A finite optimizer status or a solver-success response supplies neither that joint identity nor an exact numerical endpoint. The bookkeeping budget in [F7] supplies no missing regression or optimizer estimate. [F1, F5, F6, F7, given] ∎
