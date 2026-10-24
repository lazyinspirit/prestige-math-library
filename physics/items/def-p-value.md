---
id: def-p-value
kind: definition
title: "Valid p-values"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 4
deps:
  - def-statistical-experiment
  - def-statistic-and-estimator
  - def-measurable-function-between-measurable-spaces
  - def-probability-measure
justified_by: []
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
    - title: "Karl B. Gregory, USC STAT 713 Lecture 10: Tests of Hypotheses, Size, Power, and p-values, PDF pp. 17–20"
      url: "https://people.stat.sc.edu/gregorkb/STAT_713_sp_2023/STAT_713_Lec_10_slides_annotated.pdf"
---

## Definition

Let $\mathsf E=((\mathcal X,\mathcal A),\Theta,(P_\theta)_{\theta\in\Theta})$
be a statistical experiment ([[def-statistical-experiment]]). A **p-value
statistic** is a statistic $p:\mathcal X\to[0,1]$, where $[0,1]$ carries the
trace of the Borel sigma-algebra, meaning
$\{B\cap[0,1]:B\in\mathcal B(\mathbb R)\}$
([[def-statistic-and-estimator]],
[[def-measurable-function-between-measurable-spaces]]).

For a nonempty null hypothesis $\Theta_0\subseteq\Theta$, the statistic is a
**valid p-value for $\Theta_0$** if it is superuniform under every null law:
$$P_\theta(\{x:p(x)\le u\})\le u\qquad\text{for every }\theta\in\Theta_0\text{ and }u\in[0,1].$$
The variable $p(X)$ is the observed p-value when the data are $X$. The
validity condition is distributional; measurability alone does not imply it.

## Remarks

A discrete valid p-value may be conservative, so equality need not hold in
the superuniform bound. Validity is required under every parameter in a
composite null.
