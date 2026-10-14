---
id: def-adversarial-sample-replacement
kind: definition
title: "Adversarial sample replacement"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps:
  - def-statistical-experiment
  - def-identically-distributed-and-iid-random-variables
  - def-random-element-and-real-random-variable
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "P. B. Stark, Statistics 240 Lecture Notes, Part 9: Robustness and Related Topics, §1.2, PDF pp. 10–12"
      url: "https://www.stat.berkeley.edu/~stark/Teach/S240/Notes/ch9.pdf"
---

## Definition

For a statistical experiment $\{P_\theta\}$ from [[def-statistical-experiment]], sample size $N\ge1$, and replacement fraction $0\le\eta\le1$, equip $\mathcal X^N$ with its finite product sigma-algebra ([[def-product-sigma-algebra-and-finite-product-sigma-algebras]]). A sample-replacement coupling is a pair of $\mathcal X^N$-valued random elements on a common probability space ([[def-random-element-and-real-random-variable]]) $(X,Y)$ such that $X_1,\ldots,X_N$ are iid with law $P_\theta$ under [[def-identically-distributed-and-iid-random-variables]] and
$$
\sum_{i=1}^N\mathbf1\{X_i\ne Y_i\}\le\lfloor\eta N\rfloor
$$
almost surely. Assume the diagonal $\Delta_{\mathcal X}=\{(x,x):x\in\mathcal X\}$ belongs to the product sigma-algebra $\mathcal A\otimes\mathcal A$ ([[def-product-sigma-algebra-and-finite-product-sigma-algebras]]), so each mismatch indicator is measurable. The joint law may depend on the entire clean sample; the observed vector $Y$ need not be iid.

