---
id: def-data-assimilation-problem
kind: definition
title: Finite-dimensional data assimilation, forecasts, analyses, filtering, and smoothing
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-borel-sigma-algebra
  - def-measurable-function-between-measurable-spaces
  - def-state-space-filtering-laws
  - thm-state-space-filtering-and-smoothing-laws-exist
  - def-fixed-interval-gaussian-smoothing-law
axiom_use: The conditional-law conventions inherit the Axiom of Choice use recorded by the cited existence theorem; the finite-dimensional forecast and analysis notation adds none.
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "K. J. H. Law, A. M. Stuart, and K. C. Zygalakis, Data Assimilation: A Mathematical Introduction, Chapter 2 §§2.1–2.7"
      url: "https://arxiv.org/pdf/1506.07825v1"
    - title: "Geir Evensen, Femke C. Vossepoel, and Peter Jan van Leeuwen, Data Assimilation Fundamentals, Chapters 2–6"
      url: "https://link.springer.com/content/pdf/10.1007/978-3-030-96709-3.pdf"
---

## Definition

Fix a finite horizon $T\ge0$, state dimensions $d_t\ge1$, observation dimensions $p_t\ge1$ for $1\le t\le T$, and forecast maps $\Psi_{t-1}:\mathbb R^{d_{t-1}}\to\mathbb R^{d_t}$ and observation maps $G_t:\mathbb R^{d_t}\to\mathbb R^{p_t}$ that are measurable for the Borel sigma-algebras: inverse images of Borel sets are Borel ([[def-measurable-function-between-measurable-spaces]], [[def-borel-sigma-algebra]]). A deterministic model trajectory satisfies $x_t=\Psi_{t-1}(x_{t-1})$; an additive-error model instead has $X_t=\Psi_{t-1}(X_{t-1})+q_t$. Observations have the form $Y_t=G_t(X_t)+r_t$. A **forecast** at time $t$ is information about $X_t$ formed from the model and observations through time $t-1$, before using $Y_t$; an **analysis** at time $t$ is information after using $Y_t$. In the state-space terminology of [[def-state-space-filtering-laws]], a filtering law is the conditional law of $X_t$ given $Y_{1:t}$ and a predictive law is the conditional law of $X_t$ given $Y_{1:t-1}$. A fixed-interval smoothing law conditions a state, or the full state path, on observations through the terminal time, as in [[def-fixed-interval-gaussian-smoothing-law]]. Under that page's standard-Borel hypotheses, the filtering, predictive, and full-path smoothing conditional kernels exist by [[thm-state-space-filtering-and-smoothing-laws-exist]]; conditional versions may differ on null observation histories.

For a symmetric positive-definite matrix $M$, write $\|v\|_{M^{-1}}^2:=v^TM^{-1}v$. In a finite-dimensional Gaussian 3DVAR update, the forecast mean is $m^f$, its fixed background covariance is $B\succ0$, the linear observation map is $H$, the datum is $y$, and the observation-error covariance is $\Gamma\succ0$. The objective is
$$J_{3D}(u)=\tfrac12\|u-m^f\|_{B^{-1}}^2+\tfrac12\|y-Hu\|_{\Gamma^{-1}}^2.$$
It returns one analysis point; the fixed background covariance is not an analysis posterior covariance.
