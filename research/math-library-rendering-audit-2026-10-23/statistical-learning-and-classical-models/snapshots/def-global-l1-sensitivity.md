---
id: def-global-l1-sensitivity
kind: definition
title: Global L1 sensitivity
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-differential-privacy-and-adjacency
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: No choice axiom is used.
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Cynthia Dwork and Aaron Roth, The Algorithmic Foundations of Differential Privacy"
      url: https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf
    - title: "Salil Vadhan, The Complexity of Differential Privacy, 2017 manuscript"
      url: https://salil.seas.harvard.edu/sites/g/files/omnuum4266/files/salil/files/manuscript_2017.pdf
---

## Definition

Let $d\ge1$ and let $f:\mathcal D\to\mathbb R^d$ be a query on databases with the add/remove adjacency relation. Write $\|x\|_1=\sum_{j=1}^d|x_j|$. When the set of adjacent-pair differences has an attained finite maximum, the global $L^1$ sensitivity of $f$ is

$$
\Delta_1 f=\max_{D\sim D'}\|f(D)-f(D')\|_1.
$$

The sensitivity is finite when this maximum is finite.

## Definition references

[[def-differential-privacy-and-adjacency|Add/remove adjacency for one record occurrence]]

[Dwork and Roth, *The Algorithmic Foundations of Differential Privacy*, Definition 3.1, printed pp. 31–32.](https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf)

[Vadhan, *The Complexity of Differential Privacy*, §1.5, PDF pp. 6–8.](https://salil.seas.harvard.edu/sites/g/files/omnuum4266/files/salil/files/manuscript_2017.pdf)
