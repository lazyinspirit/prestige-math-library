---
id: ex-nonidentifiable-targets-preclude-consistency
kind: example
title: "The same Bernoulli law with two different targets"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 6
deps: [def-consistency-in-probability, def-estimand-on-a-statistical-model, def-estimator-sequence-in-iid-experiments, def-identifiability-of-an-estimand, def-measurable-space, def-measure, lem-real-line-is-a-metric-space, def-observational-equivalence, def-parametric-statistical-model, def-probability-measure, def-sigma-algebra, def-statistical-experiment, thm-nonidentifiability-precludes-simultaneous-consistency, thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Peter Bartlett, Theoretical Statistics, Stat 210B Lecture 15, PDF pp. 6–8"
      url: "https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/15notes.pdf"
    - title: "John Duchi, Theory of Statistics, Stats 300B Lecture 3, Winter 2018, PDF pp. 3–4"
      url: "https://web.stanford.edu/class/stats300b/ScribeNotes/2021/lecture-03.pdf"
---

## Example

Let $\mathcal X=\{0,1\}$ with its power-set sigma-algebra and $\Theta=[0,1]^2$. For $(u,v)\in\Theta$, let $P_{(u,v)}$ be the Bernoulli law with $P_{(u,v)}(\{1\})=u$ and $P_{(u,v)}(\{0\})=1-u$, and take the target $\psi(u,v)=v$ with its usual metric. The two parameters $\theta_0=(1/2,0)$ and $\theta_1=(1/2,1)$ have the same observation law and different target values. Thus the target is not identifiable and no estimator sequence is consistent in probability at both parameters.

## Facts & Assumptions

**Given:** The finite observation space, model family, target and two parameters in the example.

[F1] [[def-sigma-algebra]]: The power set of a set is a sigma-algebra.

[F2] [[def-measurable-space]]: A measurable space is a set equipped with a sigma-algebra.

[F3] [[def-measure]]: A measure is countably additive on pairwise disjoint measurable sets and assigns measure zero to the empty set.

[F4] [[def-probability-measure]]: A probability measure is a measure with total mass one.

[F5] [[def-statistical-experiment]]: An experiment is a measurable observation space and a parameter-indexed family of probability measures on it.

[F6] [[def-parametric-statistical-model]]: A parametric model is the map from parameter labels to their sampling laws; it need not be injective.

[F7] [[def-estimand-on-a-statistical-model]]: An estimand is a specified target-valued function on the parameter set.

[F8] [[def-observational-equivalence]]: Two parameters are observationally equivalent exactly when their probability measures on the observation space are equal.

[F9] [[def-identifiability-of-an-estimand]]: An estimand is identifiable when observationally equivalent parameters have equal target values.

[F10] [[lem-real-line-is-a-metric-space]]: The usual distance on the real target satisfies the triangle inequality.

[F11] [[def-estimator-sequence-in-iid-experiments]]: An estimator sequence is a measurable map on each finite IID product sample space.

[F12] [[def-consistency-in-probability]]: Pointwise consistency at a parameter means the estimation-error probability under its IID sample laws tends to zero for every positive tolerance.

[F13] [[thm-nonidentifiability-precludes-simultaneous-consistency]]: If two observationally equivalent parameters have distinct targets in a metric space, no estimator sequence can be consistent at both.

[F14] [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]: The finite product measure assigns a measurable rectangle the product of its factor probabilities.

## Verification

1.1 The power set on $\mathcal X$ is a sigma-algebra by [F1], so $(\mathcal X,\mathcal P(\mathcal X))$ is a measurable space by [F2]. For every $u\in[0,1]$, the two singleton masses $u$ and $1-u$ are nonnegative and sum to one. Any disjoint sequence of subsets of $\mathcal X$ has at most two nonempty members, so the assignment is countably additive and gives zero to the empty set by [F3]; hence each $P_{(u,v)}$ is a probability measure by [F4]. This defines the experiment and model in [F5]–[F6], and $\psi$ is the target in [F7]. [F1, F2, F3, F4, F5, F6, F7, given]

1.2 At $\theta_0=(1/2,0)$ and $\theta_1=(1/2,1)$, both laws assign probability $1/2$ to each singleton and therefore are equal as measures on the power set. The target values are $0$ and $1$, whose distance is $1>0$. Thus [F8] makes the parameters observationally equivalent, while [F7] and [F9] show the target is not identifiable. [F7, F8, F9, F10, given, algebra]

2.1 By [F11]–[F12], estimators are measurable maps on the IID sample spaces and consistency is pointwise under those sample laws. Apply [F13] to the pair from step 1.2: no estimator sequence is consistent in probability at both $\theta_0$ and $\theta_1$. For the finite check at sample size $n=2$, [F14] gives mass $(1/2)^2=1/4$ to each ordered pair under both product laws, confirming that the observation distributions remain identical. [F11, F12, F13, F14, given, step 1.2] ∎