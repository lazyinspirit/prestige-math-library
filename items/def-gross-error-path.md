---
id: def-gross-error-path
kind: definition
title: "Gross-error contamination path"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps:
  - def-probability-measure
  - lem-convex-mixture-of-probability-laws
  - def-dirac-measure
  - prop-dirac-measure-is-a-probability-measure
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "P. B. Stark, Statistics 240 Lecture Notes, Part 9: Robustness and Related Topics, §1.2, PDF pp. 10–12"
      url: "https://www.stat.berkeley.edu/~stark/Teach/S240/Notes/ch9.pdf"
    - title: "Mengjie Chen, Chao Gao and Zhao Ren, Robust Covariance and Scatter Matrix Estimation under Huber’s Contamination Model, §1"
      url: "https://arxiv.org/pdf/1506.00691"
---

## Definition

For probability measures $F,H$ on a common measurable space $(X,\mathcal A)$ ([[def-probability-measure]]) and $0\le\epsilon\le1$, the gross-error path is $F_{\epsilon,H}=(1-\epsilon)F+\epsilon H$, a probability measure by [[lem-convex-mixture-of-probability-laws]]. For any $x\in X$, its point-contamination direction at $x$ is the specialization $H=\delta_x$ ([[def-dirac-measure]], [[prop-dirac-measure-is-a-probability-measure]]). The path is used for a derivative at $\epsilon=0$; the definition alone gives no uniform-in-$H$ remainder.

