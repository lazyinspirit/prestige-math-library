---
id: def-federated-objective-and-client-sampling
kind: definition
title: Federated objectives and client sampling
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: []
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "H. Brendan McMahan et al., Communication-Efficient Learning of Deep Networks from Decentralized Data, §§1–4"
      url: https://proceedings.mlr.press/v54/mcmahan17a/mcmahan17a.pdf
    - title: "Sai Praneeth Karimireddy et al., SCAFFOLD: Stochastic Controlled Averaging for Federated Learning, §§2–3"
      url: https://cs.nyu.edu/~mohri/pub/scaffold.pdf
---

## Definition

Let $N,d\ge1$, let each client $i\in\{1,\ldots,N\}$ have a positive integer
sample count $n_i$, and put $n=\sum_{i=1}^N n_i$. For differentiable client
objectives $F_i:\mathbb R^d\to\mathbb R$, the sample-count-weighted deployment
objective is
$$ f_{\rm wt}(w)=\sum_{i=1}^N\frac{n_i}{n}F_i(w). $$
For differentiable client objectives $f_i:\mathbb R^d\to\mathbb R$, the
equal-client objective is
$$ f(w)=\frac1N\sum_{i=1}^N f_i(w). $$
The symbols $F_i$ and $f_i$ denote separate families; they are not identified
unless an application states $F_i=f_i$. In general, $f_{\rm wt}$ and $f$ are
different objectives.

For integers $1\le S\le N$, a uniform fixed-size client sample is a random
subset $\mathcal S\subseteq\{1,\ldots,N\}$ of cardinality $S$ for which every
$S$-element subset has probability $\binom NS^{-1}$. This is sampling without
replacement. When several communication rounds are used, the sampled subsets
are independent across rounds unless a theorem states a different sampling
law.

## Definition references

[McMahan et al., PMLR 54 (2017), §§1–4](https://proceedings.mlr.press/v54/mcmahan17a/mcmahan17a.pdf)

[Karimireddy et al., SCAFFOLD, §§2–3](https://cs.nyu.edu/~mohri/pub/scaffold.pdf)

[Yuan, Optimization for Deep Learning, Lecture 14: Federated Learning, slides 7–8](https://github.com/kunyuan827/kunyuan827.github.io/raw/master/resources/Lec14_FL.pdf)
