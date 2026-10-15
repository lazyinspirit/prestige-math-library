---
id: def-empirical-measure
kind: definition
title: "Empirical measure of observed units"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps: [def-measurable-space, def-dirac-measure]
justified_by: [lem-empirical-measure-is-a-probability-measure]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Bradley Efron and Robert Tibshirani, The Bootstrap Method for Assessing Statistical Accuracy, Behaviormetrika 12 (1985), §§1–2, pp. 1–5"
      url: "https://link.springer.com/content/pdf/10.2333/bhmk.12.17_1.pdf"
    - title: "B. Efron and R. Tibshirani, The Bootstrap Method for Assessing Statistical Accuracy, Stanford LCS Technical Report 19 / BIO 101 (October 1985; full-text report copy)"
      url: "https://stacks.stanford.edu/file/xv648rw7816/xv648rw7816_LCS-19.pdf"
    - title: "P.B. Stark, Statistics 240 Lecture Notes, Part 8: Resampling Methods, §1.1, PDF pp. 2–3"
      url: "https://www.stat.berkeley.edu/~stark/Teach/S240/Notes/ch8.pdf"
---

## Definition

Let $(\mathcal Z,\mathcal F)$ be a measurable unit space ([[def-measurable-space]]), let $n\ge1$, and fix an observed ordered tuple $z_1,\ldots,z_n\in\mathcal Z$. Its **empirical measure** is the set function
$$P_n:=\frac1n\sum_{i=1}^n\delta_{z_i},\qquad P_n(A)=\frac1n\sum_{i=1}^n1\{z_i\in A\}\quad(A\in\mathcal F),$$
where $\delta_{z_i}$ is the Dirac set function from [[def-dirac-measure]]. Repeated observations contribute once for each index at which they occur. The statement that $P_n$ is a probability measure is established in [[lem-empirical-measure-is-a-probability-measure]].
