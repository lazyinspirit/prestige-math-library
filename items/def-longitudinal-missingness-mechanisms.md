---
id: def-longitudinal-missingness-mechanisms
kind: definition
title: "Longitudinal observation patterns and missingness mechanisms"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-linear-mixed-model
  - def-scientific-statistical-model-contract
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Fan Li, STA610 Lecture 7: The Longitudinal Linear Mixed Model, PDF pp. 16–18"
      url: "https://stat.duke.edu/~fl35/teaching/610-26F/Lec7-LLME.pdf"
    - title: "Fan Li, STA610 Lecture 1: The Problem of Correlated Data, PDF pp. 4–6"
      url: "https://stat.duke.edu/~fl35/teaching/610-26F/Lecture1_ProblemOfCorrelatedData.pdf"
---

## Definition

Let $m=\sum_j|S_j|$ and let $Y^*\in\mathbb R^m$ be the complete scheduled response vector for subjects $j$ and visits $i$. Let the declared observed covariates take values in a measurable space $(\mathcal X,\mathcal A)$. The finite set of observation patterns is $\mathcal R=\{0,1\}^m$; $r_{ji}=1$ means visit $(j,i)$ is observed. A missingness mechanism is a function $g:\mathcal R\times\mathbb R^m\times\mathcal X\to[0,1]$ such that, for every $(y^*,x)$, $\sum_{r\in\mathcal R}g(r\mid y^*,x)=1$, and, for each fixed $r$, $(y^*,x)\mapsto g(r\mid y^*,x)$ is measurable for $\mathcal B(\mathbb R^m)\otimes\mathcal A$. Thus $g(\cdot\mid y^*,x)$ is a probability mass function on $\mathcal R$, and its dependence on the full data state is the finite-output kernel specified by the observation-mechanism field in [[def-scientific-statistical-model-contract]], which requires a probability measure at each state and measurable state dependence. For a pattern $r$, write $Y_{\mathrm{obs}}(r)$ for the subvector of $Y^*$ at coordinates with $r_{ji}=1$.

The mechanism is **missing completely at random (MCAR)** if, for each pattern $r$, $g(r\mid y^*,x)$ does not depend on $y^*$. It is **missing at random (MAR)** if, for each $r$, it depends on the full response vector only through $Y_{\mathrm{obs}}(r)$ and $x$. It is **missing not at random (MNAR)** relative to this partition if the MAR condition fails for at least one pattern on the declared support. **Monotone dropout** means that, within each subject, observed visits form an initial segment of the scheduled visits, possibly empty or complete.

These are properties of the declared observation kernel. A mixed-model mean or covariance equation does not specify the kernel or imply MCAR, MAR, or MNAR.

## Remarks

For an LMM written on observed rows, $O_j=\{i:r_{ji}=1\}$ determines which coordinates and design rows are retained. If $r$ depends on the full scheduled outcomes, the distribution of the selected rows conditional on that pattern need not equal the corresponding unselected marginal subvector law.
