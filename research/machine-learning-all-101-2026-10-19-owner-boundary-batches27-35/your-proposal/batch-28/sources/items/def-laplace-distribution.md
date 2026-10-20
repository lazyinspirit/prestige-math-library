---
id: def-laplace-distribution
kind: definition
title: Laplace noise distribution
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-countable-choice
  - def-borel-sigma-algebra
  - cor-continuous-functions-are-borel-measurable
  - thm-exponential-and-weibull-survival-laws
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: Countable Choice is inherited from the published real exponential probability-law construction; no full Axiom of Choice is used.
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

For $b>0$, let $\mu_b$ be the probability measure on $\mathbb R$ supported on $(0,+\infty)$ with Lebesgue density $x\mapsto b^{-1}e^{-x/b}$ there and zero elsewhere. For every Borel set $A\subseteq\mathbb R$, define

$$
\operatorname{Lap}(b)(A)=\frac12\mu_b(A\cap(0,+\infty))+\frac12\mu_b(\{x>0:-x\in A\}).
$$

Thus $\operatorname{Lap}(b)$ is the equal mixture of the positive exponential law and its reflection in the origin. Define $\operatorname{Lap}(0)$ to be the point mass at $0$.

## Definition references

[[thm-exponential-and-weibull-survival-laws|The exponential probability law with its density]]

[[cor-continuous-functions-are-borel-measurable|Reflection is Borel measurable]]

[Dwork and Roth, *The Algorithmic Foundations of Differential Privacy*, Definition 3.2, printed p. 34.](https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf)

[Vadhan, *The Complexity of Differential Privacy*, §1.5, PDF pp. 7–8.](https://salil.seas.harvard.edu/sites/g/files/omnuum4266/files/salil/files/manuscript_2017.pdf)
