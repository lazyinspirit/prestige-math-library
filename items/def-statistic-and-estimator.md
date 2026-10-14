---
id: def-statistic-and-estimator
kind: definition
title: "Statistics and estimators"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 3
deps:
  - def-statistical-experiment
  - def-estimand-on-a-statistical-model
  - def-measurable-function-between-measurable-spaces
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
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory, §5.1, PDF pp. 100–102"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
    - title: "Peter Hoff, Statistical Decision Problems, §2, PDF pp. 2–3"
      url: "https://www2.stat.duke.edu/~pdh10/Teaching/581/LectureNotes/intro.pdf"
---

## Definition

Let $\mathsf E=((\mathcal X,\mathcal A),\Theta,(P_\theta)_{\theta\in\Theta})$
be an experiment ([[def-statistical-experiment]]). A **statistic** with target
measurable space $(\mathcal Y,\mathcal B)$ is a measurable map
$T:(\mathcal X,\mathcal A)\to(\mathcal Y,\mathcal B)$, where measurability
means that $T^{-1}(B)\in\mathcal A$ for every $B\in\mathcal B$
([[def-measurable-function-between-measurable-spaces]]). If
$\psi:\Theta\to\mathcal Y$ is an estimand ([[def-estimand-on-a-statistical-model]])
and its target set $\mathcal Y$ is equipped with $\mathcal B$, a statistic
$\widehat\psi$ with this same target space is an **estimator of $\psi$**.
The value $\widehat\psi(x)$ is the estimate at observed data $x$. Giving
$\mathcal Y$ a measurable structure is an additional choice; this definition
does not assert that $\psi$ is measurable as a function of the parameter.
