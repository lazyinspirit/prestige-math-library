---
id: lem-energy-based-density-is-a-probability-measure
kind: lemma
title: An admissibly normalized energy density is a probability measure
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps: [def-energy-based-density-and-partition-function, def-measure-with-density, def-probability-measure, def-real-exponential-function-and-e, lem-exponential-series-has-infinite-radius, cor-power-series-sums-are-continuous, thm-continuous-preimages-of-borel-sets-are-borel, thm-composition-with-borel-functions-preserves-measurability, cor-exponential-reciprocal-and-positivity]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Aapo Hyvärinen, Estimation of Non-Normalized Statistical Models by Score Matching, Sections 1–2"
      url: "https://jmlr.csail.mit.edu/papers/volume6/hyvarinen05a/hyvarinen05a.pdf"
    - title: "Kevin P. Murphy, Probabilistic Machine Learning: Advanced Topics, Chapter 24"
      url: "https://github.com/probml/pml2-book/releases/download/2025-dec-10/book2.pdf"
---

## Statement

For every measure space $(X,\mathcal A,\mu)$, measurable real energy $E_\theta$,
and parameter $\theta$ with $0<Z_\theta:=\int_X e^{-E_\theta}\,d\mu<\infty$,
the normalized measure
$$P_\theta(A):=Z_\theta^{-1}\int_A e^{-E_\theta(x)}\,d\mu(x),\qquad A\in\mathcal A,$$
is a probability measure on $(X,\mathcal A)$.

## Statement references

[[def-energy-based-density-and-partition-function]] supplies the notation $Z_\theta$ and $P_\theta$.

[[def-measure-with-density]] identifies the nonnegative density integral as a measure.

[[def-probability-measure]] defines a probability measure by total mass one.

## Facts & Assumptions

**Given:** A measure space $(X,\mathcal A,\mu)$, a measurable real energy $E_\theta$, and $0<Z_\theta<\infty$.

[F1] [[def-energy-based-density-and-partition-function]]: $P_\theta(A)=Z_\theta^{-1}\int_A e^{-E_\theta}\,d\mu$ and admissibility requires $0<Z_\theta<\infty$.

[F2] [[def-measure-with-density]]: if $f\ge0$ is measurable, then $A\mapsto\int_A f\,d\mu$ is a measure.

[F3] [[def-probability-measure]]: a measure on $(X,\mathcal A)$ with total mass one is a probability measure.

[F4] [[def-real-exponential-function-and-e]] and [[lem-exponential-series-has-infinite-radius]]: the real exponential is the power-series sum $\exp(t)=\sum_{n\ge0}t^n/\iota(n!)$, with infinite radius of convergence.

[F5] [[cor-power-series-sums-are-continuous]]: a power-series sum is continuous at every point strictly inside its radius of convergence.

[F6] [[thm-continuous-preimages-of-borel-sets-are-borel]]: a continuous real map has Borel preimages of Borel sets.

[F7] [[thm-composition-with-borel-functions-preserves-measurability]]: a measurable map composed with a Borel measurable outer map is measurable.

[F8] [[cor-exponential-reciprocal-and-positivity]]: $\exp(t)>0$ for every real $t$.

## Proof

1.1 Define $\phi(t):=\exp(-t)$. By [F4], $\phi(t)=\sum_{n\ge0}(-1)^nt^n/\iota(n!)$ is a power-series sum with infinite radius, so [F5] makes $\phi$ continuous on $\mathbb R$. Thus [F6] makes it Borel measurable, and [F7] with the measurable energy from [F1] makes $x\mapsto\exp(-E_\theta(x))$ measurable. Its values are positive by [F8], hence nonnegative. Put $M_\theta(A):=\int_A e^{-E_\theta}\,d\mu$. Now [F2] makes $M_\theta$ a measure and $M_\theta(X)=Z_\theta$. Thus $P_\theta(\varnothing)=Z_\theta^{-1}M_\theta(\varnothing)=0$. For any pairwise disjoint sequence $(A_n)_{n\ge0}$, [F2] and finite-sum homogeneity give $P_\theta(\bigcup_{n\ge0}A_n)=Z_\theta^{-1}\sum_{n\ge0}M_\theta(A_n)=\lim_{N\to\infty}\sum_{n=0}^N Z_\theta^{-1}M_\theta(A_n)=\sum_{n\ge0}P_\theta(A_n)$. Therefore $P_\theta$ is a measure. [given, F1, F2, F4, F5, F6, F7, F8, algebra]

2.1 Its total mass is $P_\theta(X)=Z_\theta^{-1}M_\theta(X)=1$, so [F3] makes $P_\theta$ a probability measure. [F1, F3, step 1.1, algebra] ∎
