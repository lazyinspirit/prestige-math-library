---
id: thm-csm-frontier-inverse-posterior
kind: theorem
title: Posterior kernel and dominated formula for a latent Gibbs observation
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-csm-frontier-latent-gibbs-observation
  - def-axiom-of-choice
  - def-standard-borel-space
  - def-measure-kernel-and-probability-kernel
  - thm-standard-borel-bayesian-posterior-kernel-exists
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
dependency_roles:
  def-csm-frontier-latent-gibbs-observation: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-standard-borel-space: mathematical-premise
  def-measure-kernel-and-probability-kernel: mathematical-premise
  thm-standard-borel-bayesian-posterior-kernel-exists: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
justified_by: []
aliases: []
physical_scope: null
axiom_use: "Assumes AC exactly as the standard-Borel posterior-kernel supplier does; no additional choice principle is used."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Alicia A. Johnson, Miles Q. Ott, and Mine Dogucu, Bayes Rules!, Chapter 2"
      url: "https://www.bayesrulesbook.com/chapter-2.html"
      locator: "§§2.1.1–2.1.2 and 2.3.5–2.4, full chapter: the prior, likelihood, marginal normalizer, and normalized posterior formula in the finite/data-density case."
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Choice. Let the parameter and data spaces $(\Theta,\mathcal T)$ and $(\mathsf Y,\mathcal Y)$ of a finite latent Gibbs observation model both be standard Borel, and let $\Pi$ be its proper prior. Let $J$ be the joint prior-predictive probability determined by $\Pi$ and the marginal sampling kernel $Q$, and let $J_Y$ be its data marginal. There exists a data-indexed probability kernel $y\mapsto\Pi_y$ satisfying
$$J(A\times B)=\int_B\Pi_y(A)\,J_Y(dy)\qquad(A\in\mathcal T,\ B\in\mathcal Y),$$
and any two such posterior kernels agree as probability measures for $J_Y$-almost every $y$.

In the dominated case with data measure $\nu$ and joint likelihood density $L(\theta,y)=\sum_{x\in X}\pi_\theta(x)k(y\mid\theta,x)$, define
$$m(y):=\int_\Theta L(\theta,y)\,\Pi(d\theta).$$
Then $m$ is measurable, $\int_{\mathsf Y}m\,d\nu=1$, and for $\nu$-almost every $y$ with $0<m(y)<\infty$ the posterior has the version
$$\Pi_y(A)=\frac{\int_A L(\theta,y)\,\Pi(d\theta)}{m(y)}\qquad(A\in\mathcal T).$$
The prior-predictive law gives zero mass to the set where $m=0$ or $m=\infty$; the conditional identities do not determine pointwise posterior values there.

## Statement references

[[def-csm-frontier-latent-gibbs-observation]]

[[def-axiom-of-choice]]

[[def-standard-borel-space]]

[[def-measure-kernel-and-probability-kernel]]

[[thm-standard-borel-bayesian-posterior-kernel-exists]]

[[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

## Facts & Assumptions

**Given:** A proper prior $\Pi$, its finite latent Gibbs sampling kernel, standard-Borel parameter and data spaces, AC, and, for the dominated clause, a sigma-finite measure $\nu$ and jointly measurable normalized density $k$.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; AC is an explicit hypothesis of the posterior-kernel result used below.

[F1] [[def-csm-frontier-latent-gibbs-observation]]: summing the finite latent state law against the observation kernel gives a parameter-measurable probability kernel $Q$; in the dominated case $L(\theta,y)=\sum_x\pi_\theta(x)k(y\mid\theta,x)$ is its joint likelihood density.

[F2] [[def-standard-borel-space]]: a measurable space is standard Borel when it is measurably isomorphic to the Borel space of a Polish topology; both parameter and data measurable structures are assumed to have this property.

[F3] [[thm-standard-borel-bayesian-posterior-kernel-exists]]: under AC, a proper prior and parameter-measurable probability kernel on standard-Borel parameter and data spaces give a data-indexed posterior probability kernel satisfying the rectangle identity, unique as a probability measure outside one data-marginal null set.

[F4] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: for a nonnegative product-measurable function on two sigma-finite measure spaces, section integrals are measurable and either iterated integral equals the product integral.

[F5] [[def-measure-kernel-and-probability-kernel]]: a probability kernel is a measurable family of probability measures, with total mass one at every source point.

## Proof

**Given:** The hypotheses and notation in the Statement.

1.1 By [F1], the prior and $Q$ form a proper Bayesian model. The parameter and data spaces are standard Borel by [F2], and AC holds by [A1]. Therefore [F3] supplies the posterior probability kernel and its $J_Y$-almost-everywhere uniqueness, with the exact rectangle identity in the Statement. [given, A1, F1, F2, F3]

2.1 In the dominated case, $L$ is nonnegative and jointly measurable by its finite-sum definition. The prior $\Pi$ is finite and hence sigma-finite; $\nu$ is sigma-finite by the Definition. Apply [F4] to $L$ on their product. It gives measurability of $m(y)=\int_\Theta L(\theta,y)\Pi(d\theta)$ and
$\int_{\mathsf Y}m(y)\nu(dy)=\int_\Theta\sum_x\pi_\theta(x)\left(\int_{\mathsf Y}k(y\mid\theta,x)\nu(dy)\right)\Pi(d\theta)=\int_\Theta\sum_x\pi_\theta(x)\Pi(d\theta)=1$.
For each $B\in\mathcal Y$, the same calculation with $\mathbf1_B(y)L(\theta,y)$ gives $J_Y(B)=\int_Bm(y)\nu(dy)$. Here the finite sum and each normalized observation density are those of [F1]. [given, F1, F4, algebra]

3.1 The set $\{m=\infty\}$ has $\nu$-measure zero because $m\ge0$ has integral one, and the set $\{m=0\}$ has zero data-marginal mass because $J_Y(dy)=m(y)\nu(dy)$ by step 2.1. For each $A\in\mathcal T$, the numerator $n_A(y)=\int_A L(\theta,y)\Pi(d\theta)$ is measurable by [F4]. Define $\widehat\Pi_y(A)=n_A(y)/m(y)$ when $0<m(y)<\infty$, and set $\widehat\Pi_y=\Pi$ otherwise. On valid $y$, the measure induced by the nonnegative density $L(y,\cdot)$ has total mass $n_\Theta(y)=m(y)$, so after division it is a probability measure; on the exceptional set it is the prior. Thus each section is a probability measure, and its evaluations are measurable, so it is a probability kernel by [F5]. [given, F1, F4, F5, step 2.1]

4.1 For every $A\in\mathcal T$ and $B\in\mathcal Y$, Tonelli and the data-marginal density established in step 2.1 give
$\int_B\widehat\Pi_y(A)J_Y(dy)=\int_B n_A(y)\nu(dy)=\int_{A\times B}L(\theta,y)(\Pi\times\nu)(d\theta,dy)=J(A\times B)$;
the exceptional values contribute zero because their $J_Y$-measure is zero. Thus the displayed ratio is a posterior version on its stated domain, and the general uniqueness assertion remains only $J_Y$-almost everywhere. [F1, F3, F4, step 2.1, step 3.1, algebra] ∎

---

## Remarks

The prior is part of this mathematical model, and the posterior is conditional on it and on the stated likelihood kernel. This theorem proves neither posterior concentration nor computational efficiency. It does not report data or establish that any Gibbs model describes a physical system.
