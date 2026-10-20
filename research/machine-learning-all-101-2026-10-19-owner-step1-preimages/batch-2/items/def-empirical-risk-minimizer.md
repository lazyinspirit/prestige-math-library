---
id: def-empirical-risk-minimizer
kind: definition
title: "Empirical risk minimizers"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-supervised-learning-problem
  - def-population-and-empirical-risk
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Shai Shalev-Shwartz and Shai Ben-David, Understanding Machine Learning: From Theory to Algorithms, Chapter 2 §2.2 and Chapter 3 §3.2.2"
      url: "https://www.inf.u-szeged.hu/~turan/ML-Konyv.pdf"
    - title: "Mehryar Mohri, Afshin Rostamizadeh, and Ameet Talwalkar, Foundations of Machine Learning, 2nd ed., Chapter 2 §§2.1–2.2"
      url: "https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1"
---

## Definition

Fix a sample $S$ and a nonempty class $\mathcal F$ of predictors. Its **empirical minimum** is $\widehat R_S^*(\mathcal F):=\inf_{f\in\mathcal F}\widehat R_S(f)\in[0,+\infty]$. An **exact empirical risk minimizer** is a predictor $f\in\mathcal F$ with $\widehat R_S(f)=\widehat R_S^*(\mathcal F)$. If the infimum is finite but is not attained, no exact minimizer exists. If the infimum is $+\infty$, nonemptiness implies that every member has infinite empirical risk and is an exact minimizer.

For finite $\eta\ge0$, a predictor is an **$\eta$-approximate empirical risk minimizer** if either the empirical minimum is $+\infty$ and the predictor is an exact minimizer, or the empirical minimum is finite and the predictor has finite empirical risk at most $\widehat R_S^*(\mathcal F)+\eta$. Thus the definition never forms $+\infty+\eta$. When $\eta=0$ and the finite infimum is not attained, no such predictor exists.

For a fixed sample size $m$, a **measurable prediction rule** with class $\mathcal F$ is a jointly measurable evaluation map from the sample space $((\mathsf X\times\mathsf Y)^m, (\Sigma_X\otimes\Sigma_Y)^{\otimes m})$ and a new instance in $\mathsf X$ to $\mathsf A$, whose slice at each sample belongs to $\mathcal F$. It is an exact or approximate ERM rule when every slice satisfies the corresponding samplewise definition above. This definition asserts no existence of a measurable selector for an arbitrary class.

## Definition references

[[def-supervised-learning-problem]]: fixes the measurable observation and predictor spaces.

[[def-population-and-empirical-risk]]: defines the samplewise empirical risk being minimized.
