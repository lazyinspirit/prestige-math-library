---
id: def-differential-privacy-and-adjacency
kind: definition
title: Differential privacy, databases, and add/remove adjacency
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-measurable-space
  - def-probability-measure
  - def-measure-kernel-and-probability-kernel
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

Let $U$ be a nonempty set of possible records and let $\mathbb N_0=\{0,1,2,\ldots\}$. A database is a function $D:U\to\mathbb N_0$ with finite support $\operatorname{supp}(D)=\{u\in U:D(u)\ne0\}$; $D(u)$ is the number of occurrences of record $u$. Let $\mathcal D$ be the set of databases and equip it with the power-set sigma-algebra. For $u\in U$, let $\mathbf 1_{\{u\}}$ be the function that is one at $u$ and zero elsewhere. Two databases $D,D'\in\mathcal D$ are neighbors, written $D\sim D'$, when $D'=D+\mathbf 1_{\{u\}}$ or $D=D'+\mathbf 1_{\{u\}}$ for some $u\in U$.

A randomized mechanism with output measurable space $(Y,\mathcal B)$ is a probability kernel $K$ from $\mathcal D$ to $Y$: for each $D\in\mathcal D$, $A\mapsto K(D,A)$ is a probability measure on $(Y,\mathcal B)$, and for each $A\in\mathcal B$, $D\mapsto K(D,A)$ is measurable. Given $\varepsilon\ge0$ and $0\le\delta\le1$, the mechanism is $(\varepsilon,\delta)$-differentially private if, for every ordered neighboring pair $D\sim D'$ and every output event $A\in\mathcal B$,

$$
K(D,A)\le e^{\varepsilon}K(D',A)+\delta.
$$

The mechanism is $\varepsilon$-differentially private, or pure $\varepsilon$-differentially private, when $\delta=0$. The ordered-pair quantifier includes both directions because $\sim$ is symmetric.

## Definition references

[[def-measurable-space|Measurable spaces and sigma-algebras]]

[[def-probability-measure|Probability measures have total mass one]]

[[def-measure-kernel-and-probability-kernel|Probability-kernel conditions for randomized mechanisms]]

[Dwork and Roth, *The Algorithmic Foundations of Differential Privacy*, Definition 2.4, printed pp. 17–18.](https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf)

[Vadhan, *The Complexity of Differential Privacy*, Definition 1.4, PDF pp. 8–9.](https://salil.seas.harvard.edu/sites/g/files/omnuum4266/files/salil/files/manuscript_2017.pdf)
