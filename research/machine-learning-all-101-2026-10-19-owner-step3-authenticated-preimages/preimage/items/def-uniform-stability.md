---
id: def-uniform-stability
kind: definition
title: Uniform stability for randomized learning rules
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-supervised-learning-problem
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Moritz Hardt, Benjamin Recht, and Yoram Singer, Train faster, generalize better: Stability of stochastic gradient descent, Definition 2.1"
      url: "https://arxiv.org/pdf/1509.01240"
      locator: "§2.2, Definition 2.1; expectation over the algorithm's internal randomness"
    - title: "Nikolai Matni, ESE680 Lecture 16: Algorithmic Stability and Stochastic Gradient Descent, Definition 1"
      url: "https://nikolaimatni.github.io/courses/ese680-fall2019/scribe-notes/lecture16.pdf"
      locator: "§3, PDF p. 3"
---

## Definition

Fix a supervised prediction problem with observation space $\mathsf Z=\mathsf X\times\mathsf Y$, measurable predictor class $\mathcal F$, and nonnegative measurable loss $\ell$. Write $L_f(x,y)=\ell(f(x),y)$ for $f\in\mathcal F$. Fix a sample size $n\ge1$. A randomized learning rule at this sample size consists of internal randomness $U_n$ with law $Q_n$, independent of the sample, and an output $A_n(S,U_n)\in\mathcal F$ for every ordered sample $S\in\mathsf Z^n$. Assume the expected test losses below are finite. For $\varepsilon\ge0$, the rule has **uniform replacement stability at level $\varepsilon$** if, for every pair $S,S'\in\mathsf Z^n$ differing in at most one coordinate, and every test observation $z\in\mathsf Z$,

$$\left|\mathbb E_{U_n}L_{A_n(S,U_n)}(z)-\mathbb E_{U_n}L_{A_n(S',U_n)}(z)\right|\le\varepsilon.$$

The absolute value is outside expectation over the internal randomness. No permutation-invariance condition is imposed on the learning rule.

## Definition references

Hardt, Recht, and Singer, Definition 2.1: [full arXiv paper](https://arxiv.org/pdf/1509.01240).

Matni, Lecture 16, Definition 1: [full lecture notes](https://nikolaimatni.github.io/courses/ese680-fall2019/scribe-notes/lecture16.pdf).
