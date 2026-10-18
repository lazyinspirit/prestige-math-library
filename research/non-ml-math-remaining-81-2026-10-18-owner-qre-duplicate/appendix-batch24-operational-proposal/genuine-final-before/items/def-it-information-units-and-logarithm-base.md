---
id: def-it-information-units-and-logarithm-base
kind: definition
title: "Information units and logarithm-base convention"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [def-natural-logarithm, thm-natural-logarithm-laws]
justified_by: []
aliases: []
axiom_use: "No choice axiom is used."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Robert M. Gray, Entropy and Information Theory, corrected first edition"
      url: https://ee.stanford.edu/~gray/it.pdf
      locator: "Chapter 2, §2.2, printed pp. 18–20; finite-alphabet entropy and nats/bits conventions."
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, author prepublication"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
      locator: "Chapter 1, §1.1, printed pp. 9–12; entropy conventions and base-2 units."
---

## Definition

Write $\ln$ for the natural logarithm $\log$ of [[def-natural-logarithm]]. Unless a base is displayed, every information quantity on this page uses $\ln$ and is measured in **nats**. For a base $b>1$ and $t>0$, define
$$\log_b t:=\frac{\ln t}{\ln b}.$$
The denominator is positive: $b>1$, $\ln$ is strictly increasing, and $\ln 1=0$ by [[thm-natural-logarithm-laws]]. A base-$b$ entropy or divergence is obtained by replacing each $\ln$ in the finite formulas below by $\log_b$; use $0\log_b0:=0$ and assign $+\infty$ to a positive numerator over a zero denominator. The case $b=2$ measures **bits**; $b=e$ gives nats.

## Remarks

All entropies, mutual informations, and conditional mutual informations in this finite-alphabet page are finite. A finite KL divergence can be $+\infty$ only when the numerator law has positive mass where the reference law has zero mass. The unit-conversion theorem proves that every base-$b$ version is the natural-log value divided by $\ln b$; no expression subtracts two infinite quantities.
