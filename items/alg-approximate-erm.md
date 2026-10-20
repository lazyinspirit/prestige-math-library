---
id: alg-approximate-erm
kind: algorithm
title: "Approximate empirical risk minimization with a supplied selector"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-supervised-learning-problem
  - def-population-and-empirical-risk
  - def-empirical-risk-minimizer
  - lem-population-and-empirical-risk-are-measurable
justified_by: []
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

Fix a positive sample size $m$, a nonempty predictor class $\mathcal F$, and a finite tolerance $\eta\ge0$. The input includes a supplied jointly measurable evaluation map $A_\eta: (\mathsf X\times\mathsf Y)^m\times\mathsf X\to\mathsf A$ such that every sample slice $A_\eta(S,\cdot)$ belongs to $\mathcal F$. For each sample $S$, require that the slice is an exact empirical risk minimizer if $\widehat R_S^*(\mathcal F)=+\infty$, and otherwise has finite empirical risk at most $\widehat R_S^*(\mathcal F)+\eta$. The procedure returns the predictor $A_\eta(S,\cdot)$ on input $S$. Its selector is an explicit input; this procedure asserts no existence or construction of such a selector for an arbitrary class. In particular, $\eta=0$ requires attainment whenever the empirical minimum is finite.

## Definition references

[[def-supervised-learning-problem]]: fixes the measurable sample and predictor spaces.

[[def-population-and-empirical-risk]]: defines the sample objective.

[[def-empirical-risk-minimizer]]: defines exact and approximate ERM without forming $+\infty+\eta$.

[[lem-population-and-empirical-risk-are-measurable]]: establishes measurability of the sample objective for a fixed predictor.
