---
id: def-approximate-bayesian-computation
kind: definition
title: Approximate Bayesian computation and the tolerance-conditioned target
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-bayesian-model-as-prior-and-sampling-kernel
  - def-probability-measure
  - def-standard-borel-space
  - def-statistic-and-estimator
  - def-measure-kernel-and-probability-kernel
  - lem-prior-and-model-kernel-define-joint-law
  - thm-change-of-variables-for-expectation
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Jarno Lintusaari, Michael U. Gutmann, Ritabrata Dutta, Samuel Kaski, and Jukka Corander, Fundamentals and Recent Developments in Approximate Bayesian Computation"
      url: https://www.pure.ed.ac.uk/ws/files/27977065/Lintusaari2016b.pdf
    - title: "Martin, Kumar, and Lao, Bayesian Modeling and Computation in Python, Chapter 8"
      url: https://bayesiancomputationbook.com/markdown/chp_08.html
    - title: "Aki Honkela, Computational Statistics I, Chapter 9"
      url: https://www.cs.helsinki.fi/u/ahonkela/teaching/compstats1/book/further-monte-carlo-techniques-and-approximate-bayesian-computation-abc.html
---

## Definition

Let $(\Theta,\mathcal T)$ and $(\mathsf Y,\mathcal Y)$ be standard Borel spaces. Let $\Pi$ be a prior probability measure on $(\Theta,\mathcal T)$ and let $K$ be a probability kernel from $(\Theta,\mathcal T)$ to $(\mathsf Y,\mathcal Y)$, as in [[def-bayesian-model-as-prior-and-sampling-kernel]]. Let $S:\mathsf Y\to\mathbb R^d$ be a measurable statistic for a fixed integer $d\ge1$, and fix an observed summary $s_0\in\mathbb R^d$. The Euclidean norm is $\|x\|_2=(\sum_{j=1}^d x_j^2)^{1/2}$.

Under the prior-simulator joint law, first draw $\theta\sim\Pi$ and then $Y\sim K(\theta,\cdot)$. The summary-predictive probability measure $M$ on $\Theta\times\mathbb R^d$ is the law of $(\theta,S(Y))$; on measurable rectangles it is
$$M(A\times C)=\int_A K(\theta,S^{-1}(C))\,\Pi(d\theta).$$
The prior and simulator define a joint law by [[lem-prior-and-model-kernel-define-joint-law]], and the change-of-variables formula identifies $M$ as the law after applying $S$ ([[thm-change-of-variables-for-expectation]]).

For $\epsilon\ge0$, define the closed tolerance ball
$$B_\epsilon(s_0)=\{s\in\mathbb R^d:\|s-s_0\|_2\le\epsilon\}.$$
Its prior-predictive acceptance probability is
$$p_\epsilon(s_0):=M(\Theta\times B_\epsilon(s_0))\in[0,1].$$
Only when $p_\epsilon(s_0)>0$ define the indicator ABC target by
$$\Pi_\epsilon(A\mid s_0):=\frac{M(A\times B_\epsilon(s_0))}{p_\epsilon(s_0)}\qquad(A\in\mathcal T).$$
This is exactly the conditional law of $\theta$ under the augmented event $S(Y)\in B_\epsilon(s_0)$. The denominator is finite because $M$ is a probability, and no quotient is assigned when the event has probability zero. This target is the posterior given a tolerance event, not in general the full-data posterior or the posterior given the exact summary.

## Remarks

A positive tolerance separates summary information loss from tolerance bias; using finitely many accepted draws adds a separate Monte Carlo error. At a null summary value, a regular-conditional version may be changed there without affecting its defining identities, so its value is not determined by conditioning alone. The density regularity in [[thm-abc-zero-tolerance-target-is-summary-posterior-under-density-regularity]] selects the particular density-based target obtained as the positive-tolerance limit.
