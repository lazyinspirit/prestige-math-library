---
id: def-exponential-mechanism-utility-sensitivity
kind: definition
title: Exponential-mechanism utility sensitivity
status: draft
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

Let $\mathcal D$ be the finite-support count functions on a nonempty record universe, with add/remove-one-occurrence adjacency. Let $R$ be a nonempty finite set independent of the database, and let $u:\mathcal D\times R\to\mathbb R$ be a real-valued utility. When the set of adjacent-pair utility differences has an attained finite maximum, the global utility sensitivity of $u$ is
$$
\Delta_u=\max_{D\sim D',\,r\in R}|u(D,r)-u(D',r)|.
$$
The sensitivity is positive when $\Delta_u>0$; the exponential mechanism on this page uses that positive-sensitivity case.

## Definition references

[[def-differential-privacy-and-adjacency|The database domain and add/remove adjacency]]

[Dwork and Roth, *The Algorithmic Foundations of Differential Privacy*, Definition 3.4, printed pp. 36–37.](https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf)

[Vadhan, *The Complexity of Differential Privacy*, Proposition 4.2, PDF pp. 33–34.](https://salil.seas.harvard.edu/sites/g/files/omnuum4266/files/salil/files/manuscript_2017.pdf)
