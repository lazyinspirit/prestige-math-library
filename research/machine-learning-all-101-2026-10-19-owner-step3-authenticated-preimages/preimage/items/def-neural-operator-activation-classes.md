---
id: def-neural-operator-activation-classes
kind: definition
title: "Activation classes for neural-operator universality"
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
sources:
  references:
    - title: "Kovachki et al., Neural Operator: Learning Maps Between Function Spaces With Applications to PDEs"
      url: "https://arxiv.org/pdf/2108.08481"
      locator: "Definitions 5–7, §8.3"
---

## Definition

Fix an input dimension $q\ge1$ and an integer $m\ge0$. Let $\mathcal A_m^{(q)}$ be the class of continuous scalar activations $\sigma:\mathbb R\to\mathbb R$ for which there is one depth $n\in\mathbb N$ such that, for every compact $K\subset\mathbb R^q$, the scalar-output depth-$n$ multilayer perceptrons with activation $\sigma$ are dense in $C^m(K)$ in the $C^m$ norm. For vector outputs, stack scalar-output networks of that same depth. The source notation $\mathcal A_m$ suppresses the input dimension fixed by the finite-dimensional network under consideration. Let $\mathcal A_m^{L,(q)}$ be the subclass whose members are Borel measurable and have at most linear growth, meaning
$$\sup_{s\in\mathbb R}\frac{|\sigma(s)|}{1+|s|}<\infty.$$
For an integer $q\ge1$, define $\mathrm{BA}_q$ to consist of those $\sigma\in\mathcal A_0^{(q)}$ for which, for every compact $K\subset\mathbb R^q$, every $\varepsilon>0$, and every $C\ge\operatorname{diam}_2(K)$, there is a finite multilayer perceptron $f:\mathbb R^q\to\mathbb R^q$ with
$$|f(x)-x|_2\le\varepsilon\quad(x\in K),\qquad |f(x)|_2\le C\quad(x\in\mathbb R^q).$$
Here $\operatorname{diam}_2(K)=\sup_{x,y\in K}|x-y|_2$. The diameter-based global bound is part of this definition and is retained verbatim; its nonemptiness is checked separately.

## Definition references
[[def-feedforward-neural-network|feedforward neural network]]

[Kovachki et al., Definitions 5–7: activation classes $\mathcal A_m$, $\mathcal A_m^L$, and BA](https://arxiv.org/pdf/2108.08481)

