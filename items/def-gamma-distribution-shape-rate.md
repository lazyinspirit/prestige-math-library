---
id: def-gamma-distribution-shape-rate
kind: definition
title: "Shape-rate Gamma distribution"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - lem-gamma-density-normalization
  - def-countable-choice
justified_by: []
proof_strategy: definition
axiom_use: "Its Lebesgue normalization inherits Countable Choice from [[lem-gamma-density-normalization]]."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Johnson, Ott & Dogucu, Bayes Rules!, Chapter 5, §§5.2.1–5.2.2"
      url: "https://www.bayesrulesbook.com/chapter-5"
    - title: "Gelman et al., Bayesian Data Analysis, 3rd ed., §2.4"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
---

## Definition

Assume Countable Choice. For shape $a>0$ and rate $b>0$, the **shape-rate Gamma distribution**
$\operatorname{Gamma}(a,b)$ is the probability measure on $(0,\infty)$ with
density
$$f_{a,b}(\lambda)=\frac{b^a}{\Gamma(a)}\lambda^{a-1}e^{-b\lambda}$$
relative to Lebesgue measure. Its normalization is proved in
[[lem-gamma-density-normalization]]. The second argument is a rate, not a scale.
