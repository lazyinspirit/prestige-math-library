---
id: def-one-sided-empirical-rademacher-complexity
kind: definition
title: "One-sided empirical Rademacher complexity"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps: [def-empirical-process-and-rademacher-process]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Mehryar Mohri, Afshin Rostamizadeh, and Ameet Talwalkar, Foundations of Machine Learning, 2nd ed., Definition 3.1"
      url: "https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1"
    - title: "David Pollard, Empirical Processes: Theory and Applications, Chapter 5"
      url: "http://www.stat.yale.edu/~pollard/Books/Iowa/Iowa-notes.pdf"
---

## Definition

Let $m\ge1$, let $S=(z_1,\ldots,z_m)$ be a fixed sample in a measurable space $\mathcal X$, and let $\mathcal F$ be a nonempty finite or countable class of measurable real functions such that the displayed supremum is finite and measurable on the finite sign space. Let $\sigma_1,\ldots,\sigma_m$ be independent uniform signs. The **one-sided empirical Rademacher complexity** is

$$\widehat{\mathfrak R}_S(\mathcal F):=\frac1m\,\mathbb E_\sigma\sup_{f\in\mathcal F}\sum_{i=1}^m\sigma_i f(z_i).$$

There is no absolute value in this definition and $0$ need not belong to $\mathcal F$. It differs from the absolute-value complexity $m^{-1}\mathbb E_\sigma\sup_{f\in\mathcal F}|\sum_i\sigma_i f(z_i)|$.

## Remarks

This convention is the one used in [[thm-one-sided-coordinate-rademacher-contraction]].
