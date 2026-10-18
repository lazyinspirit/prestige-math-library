---
id: lem-discrete-memoryless-channel-information-density-concentration
kind: lemma
title: "Uniform concentration around the capacity output divergence bound"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps: [def-discrete-memoryless-channel, lem-discrete-memoryless-channel-block-kernels-are-stochastic, lem-discrete-memoryless-channel-capacity-achieving-output-divergence-bound, def-finite-kullback-leibler-divergence, def-natural-logarithm, def-finite-stochastic-kernel, def-finite-probability-vector]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all alphabets and variance sums are finite."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 22 §22.1"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf"
    - title: "MIT 6.441 Information Theory, Lecture 8, maximizing DMC capacity"
      url: "https://web.mit.edu/6.441/spring05/lectures/6441Lecture8.pdf"
---

## Statement

Let $P_X^*$ attain $C(W)$ and $Q^*=P_X^*W$. There is a finite constant $V\ge0$ such that, for every $n\ge1$, every $x^n\in\mathcal X^n$, and every $\delta>0$, under output law $W^n(\cdot\mid x^n)$,
$$\Pr\left[\ln\frac{W^n(Y^n\mid x^n)}{(Q^*)^n(Y^n)}>n(C(W)+\delta)\right]\le\frac{V}{n\delta^2}.$$
The likelihood ratio is evaluated only on the support of $W^n(\cdot\mid x^n)$.

## Facts & Assumptions

**Given:** A finite DMC $W$, a capacity-achieving input law $P_X^*$, and the associated output law $Q^*$.

[F1] [[lem-discrete-memoryless-channel-capacity-achieving-output-divergence-bound]]: every row $W(\cdot\mid x)$ is supported on $Q^*$ and has mean log likelihood ratio $D(W(\cdot\mid x)\|Q^*)\le C(W)$.

[F2] [[def-finite-kullback-leibler-divergence]] and [[def-natural-logarithm]]: the row divergence uses the natural-log likelihood ratio $\ln(W(y\mid x)/Q^*(y))$, evaluated only where $W(y\mid x)>0$.

[F3] [[def-discrete-memoryless-channel]] and [[lem-discrete-memoryless-channel-block-kernels-are-stochastic]]: conditional on a fixed input word, the output law is the product of the corresponding row laws.

## Proof

1.1 For each $x\in\mathcal X$, the random variable $Z_x:=\ln(W(Y\mid x)/Q^*(Y))$ under row law $W(\cdot\mid x)$ is finite on its support by [F1]. Its mean is $D(W(\cdot\mid x)\|Q^*)\le C(W)$, and it has finite variance because it takes only finitely many values. Thus $V:=\max_{x\in\mathcal X}\operatorname{Var}(Z_x)$ is finite. [F1, F2, given]

2.1 Fix $x^n$. By [F3], the coordinate log likelihoods are independent. Their sum $S_n$ therefore has mean at most $nC(W)$ and variance at most $nV$. On the event $S_n>n(C(W)+\delta)$ one has $|S_n-\mathbb ES_n|>n\delta$, so the squared deviation is at least $n^2\delta^2$. Taking expectations bounds the event probability by $\mathbb E[(S_n-\mathbb ES_n)^2]/(n^2\delta^2)\le V/(n\delta^2)$. [F1, F2, F3, step 1.1, algebra] ∎
