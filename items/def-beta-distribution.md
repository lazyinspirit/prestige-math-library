---
id: def-beta-distribution
kind: definition
title: "Beta distribution"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - lem-beta-density-normalization
  - def-countable-choice
justified_by: []
proof_strategy: definition
axiom_use: "Its normalization inherits Countable Choice from [[lem-beta-density-normalization]]."
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
    - title: "Gelman et al., Bayesian Data Analysis, 3rd ed., §2.1"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
    - title: "Johnson, Ott & Dogucu, Bayes Rules!, Chapter 3, §3.1"
      url: "https://www.bayesrulesbook.com/chapter-3"
---

## Definition

Assume Countable Choice. For $\alpha,\beta>0$, the **Beta distribution** $\operatorname{Beta}(\alpha,\beta)$ is the probability measure on $(0,1)$ with density
$$f_{\alpha,\beta}(p)=\frac{p^{\alpha-1}(1-p)^{\beta-1}}{B(\alpha,\beta)}$$
relative to Lebesgue measure. The finite positive normalization follows from
[[lem-beta-density-normalization]]. The open interval is the parameter domain;
no endpoint atoms are included.
