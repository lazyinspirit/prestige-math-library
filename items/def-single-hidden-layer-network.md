---
id: def-single-hidden-layer-network
kind: definition
title: "Single-hidden-layer network realization"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps: [def-feedforward-neural-network]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Leshno, Lin, Pinkus, and Schocken, Multilayer Feedforward Networks With a Non-Polynomial Activation Function Can Approximate Any Function, §2"
      url: "https://archive.nyu.edu/bitstream/2451/14329/1/IS-92-13.pdf"
    - title: "Hornik, Approximation Capabilities of Multilayer Feedforward Networks, §2"
      url: "https://web.njit.edu/~usman/courses/cs675_fall18/hornik-nn-1991.pdf"
---

## Definition

Let $d\ge1$ and let $\sigma:\mathbb R\to\mathbb R$ be an activation function. For a finite width $m\in\mathbb N_0$, output weights $a_1,\ldots,a_m\in\mathbb R$, input weights $w_1,\ldots,w_m\in\mathbb R^d$, hidden biases $b_1,\ldots,b_m\in\mathbb R$, and output bias $c\in\mathbb R$, the scalar single-hidden-layer realization is

$$N(x)=c+\sum_{j=1}^{m}a_j\sigma(w_j\cdot x+b_j),\qquad x\in\mathbb R^d.$$

The family $\mathcal N_\sigma^{(d)}$ consists of all such functions as $m$ and the real parameters vary; $m=0$ is allowed and gives constant functions. This is the scalar-output, one-hidden-layer specialization of a layered multilayer perceptron with linear output.

## Definition references

[[def-feedforward-neural-network]]

[Leshno et al., §2: network realization formula and parameter conventions](https://archive.nyu.edu/bitstream/2451/14329/1/IS-92-13.pdf)

[Hornik, §2: one hidden layer with linear output](https://web.njit.edu/~usman/courses/cs675_fall18/hornik-nn-1991.pdf)
