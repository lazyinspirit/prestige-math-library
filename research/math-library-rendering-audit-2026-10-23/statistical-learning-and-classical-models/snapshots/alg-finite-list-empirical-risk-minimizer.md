---
id: alg-finite-list-empirical-risk-minimizer
kind: algorithm
title: "Finite-list empirical risk minimization"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-supervised-learning-problem
  - def-population-and-empirical-risk
  - def-empirical-risk-minimizer
  - lem-population-and-empirical-risk-are-measurable
justified_by:
  - lem-finite-list-empirical-risk-selector-is-measurable
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Shai Shalev-Shwartz and Shai Ben-David, Understanding Machine Learning: From Theory to Algorithms, Chapter 2 §2.2"
      url: "https://www.inf.u-szeged.hu/~turan/ML-Konyv.pdf"
    - title: "Mehryar Mohri, Afshin Rostamizadeh, and Ameet Talwalkar, Foundations of Machine Learning, 2nd ed., Chapter 2 §2.2"
      url: "https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1"
---

## Definition

Given a sample $S$ of length $m\ge1$, an ordered finite nonempty list of measurable predictors $(f_1,\ldots,f_n)$, and a finite tolerance $\eta\ge0$, compute $r_j:=\widehat R_S(f_j)$ for each $j\in\{1,\ldots,n\}$. If every $r_j=+\infty$, return index $1$. Otherwise set $r_*:=\min_{1\le j\le n}r_j$ and return the least index $j$ for which $r_j<+\infty$ and $r_j\le r_*+\eta$. The output index denotes the selected predictor from the supplied list. When $\eta=0$, the output is a first exact minimizer, including the all-infinite case. The algorithm evaluates only a finite number of empirical risks and makes no population-risk guarantee.

## Definition references

[[def-supervised-learning-problem]]: fixes the measurable observation and predictor spaces.

[[def-population-and-empirical-risk]]: defines each empirical risk evaluated by the procedure.

[[def-empirical-risk-minimizer]]: defines exact and approximate ERM, including the all-infinite branch.

[[lem-population-and-empirical-risk-are-measurable]]: the sample objective for each listed predictor is measurable.
