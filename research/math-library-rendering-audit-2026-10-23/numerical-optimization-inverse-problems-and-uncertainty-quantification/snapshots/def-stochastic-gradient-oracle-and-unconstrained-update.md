---
id: def-stochastic-gradient-oracle-and-unconstrained-update
kind: definition
title: "Filtration-adapted stochastic-gradient oracles and Robbins–Monro updates"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-filtration-and-filtered-probability-space
  - def-random-element-and-real-random-variable
  - def-adapted-and-integrable-stochastic-process
  - def-conditional-expectation-as-an-ae-class
  - def-conditional-variance
  - lem-conditional-variance-is-well-defined-and-has-the-second-moment-formula
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-euclidean-inner-product
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Léon Bottou, Frank E. Curtis, and Jorge Nocedal, Optimization Methods for Large-Scale Machine Learning, SIAM Review 60(2) (2018), §4.1"
      url: "https://leon.bottou.org/publications/pdf/tr-optml-2016.pdf"
      locator: "§4.1, Algorithm 4.1 and the adapted-process qualification in footnote 4"
    - title: "Sébastien Bubeck, Convex Optimization: Algorithms and Complexity, §§6.1–6.2"
      url: "https://arxiv.org/pdf/1405.4980"
      locator: "§§6.1–6.2, projected SGD and the stochastic oracle hypotheses"
verification:
  repair: research/machine-learning-all-101-2026-10-19-owner-step4-published-alert-repair/application/receipts/def-stochastic-gradient-oracle-and-unconstrained-update.json
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Definition

Fix a finite dimension $d\ge1$ and a discrete filtered probability space $(\Omega,\mathcal F,(\mathcal F_k)_{k\ge0},P)$ as in Filtration and filtered probability space. A sequence $x_k:\Omega\to\mathbb R^d$ is an iterate process when each coordinate is $\mathcal F_k$-measurable; a sequence $G_k:\Omega\to\mathbb R^d$ is an oracle process when each coordinate is $\mathcal F_{k+1}$-measurable. These are coordinatewise instances of Random elements and real random variables and Adapted and integrable stochastic process. Assume the coordinates used in a conditional moment are square-integrable.

For deterministic stepsizes $\alpha_k>0$, the unconstrained Robbins–Monro/SGD update is
$$x_{k+1}=x_k-\alpha_kG_k.$$
For a differentiable objective $f:\mathbb R^d\to\mathbb R$, the oracle is conditionally unbiased when $\mathbb E[G_k\mid\mathcal F_k]=\nabla f(x_k)$ coordinatewise almost surely; it has conditional bias $b_k$ when $\mathbb E[G_k\mid\mathcal F_k]=\nabla f(x_k)+b_k$. The conditional variance of a vector is the sum of the scalar conditional variances of its coordinates, using Conditional variance. By Conditional variance is well-defined and has the second-moment formula, it satisfies
$$\mathbb E[\|G_k\|_2^2\mid\mathcal F_k]=\|\mathbb E[G_k\mid\mathcal F_k]\|_2^2+\operatorname{Var}(G_k\mid\mathcal F_k)$$
almost surely. All conditional expectations are coordinatewise instances of Conditional expectation as an ae class, whose existence assumes the The Axiom of Choice. No independence across iterations is part of this definition.

The conditional second-moment bound $\mathbb E[\|G_k\|_2^2\mid\mathcal F_k]\le M_k^2$ and the conditional variance bound $\operatorname{Var}(G_k\mid\mathcal F_k)\le\sigma_k^2$ are distinct hypotheses; the latter combines with conditional unbiasedness through the displayed identity.

## Definition references

[[def-filtration-and-filtered-probability-space]]

[[def-random-element-and-real-random-variable]]

[[def-adapted-and-integrable-stochastic-process]]

[[def-conditional-variance]]

[[lem-conditional-variance-is-well-defined-and-has-the-second-moment-formula]]

[[def-conditional-expectation-as-an-ae-class]]

[[def-axiom-of-choice]]

