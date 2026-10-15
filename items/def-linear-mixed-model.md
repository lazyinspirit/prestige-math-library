---
id: def-linear-mixed-model
kind: definition
title: "Finite-dimensional linear mixed model with explicit longitudinal roles"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-scientific-statistical-model-contract
  - def-fixed-design-linear-regression-model
  - def-random-element-and-real-random-variable
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-moments-variance-and-covariance
  - def-independent-random-elements
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
    - title: "Fan Li, STA610 Lecture 6: Linear Mixed-Effects Models, PDF pp. 4–5"
      url: "https://stat.duke.edu/~fl35/teaching/610-26F/Lec6-LME.pdf"
    - title: "Duchateau, Janssen, and Rowlands, Linear Mixed Models, Chapter 2 §§2.3.1–2.3.3"
      url: "https://biometrics.ilri.org/Publication/Full%20Text/Linear_Mixed_Models/Chapter2_2_1to2_2.htm"
    - title: "Fan Li, STA610 Lecture 7: The Longitudinal Linear Mixed Model, PDF pp. 2–5"
      url: "https://stat.duke.edu/~fl35/teaching/610-26F/Lec7-LLME.pdf"
---

## Definition

Let $n,p\ge1$ and $q\ge0$ be finite integers. A **finite-dimensional linear mixed model** on one probability space consists of fixed matrices $X\in\mathbb R^{n\times p}$ and $Z\in\mathbb R^{n\times q}$, a fixed parameter $\beta\in\mathbb R^p$, and square-integrable random vectors $b\in\mathbb R^q$ and $\varepsilon\in\mathbb R^n$ such that
$$Y=X\beta+Zb+\varepsilon,\qquad \mathbb E b=0,\qquad \mathbb E\varepsilon=0,\qquad \operatorname{Cov}(b)=G,\qquad \operatorname{Cov}(\varepsilon)=R,$$
where $b$ and $\varepsilon$ are independent random elements. Here $G$ and $R$ are the resulting symmetric positive-semidefinite covariance matrices. The fixed-design convention for $X$ and the first-moment regression model is that of [[def-fixed-design-linear-regression-model]]. The explicit scientific record of units, quantities, observation mechanism, and adequacy assumptions is required by [[def-scientific-statistical-model-contract]].

For longitudinal data, let $j$ index subjects and let $i\in S_j$ index the visits scheduled for subject $j$. A row of $Y$, $X$, and $Z$ corresponds to one observed subject–visit pair $(j,i)$; the time $t_{ji}$ is measured from a stated origin. Blocks of $b$ may represent subject-specific latent effects, while $R$ records the residual covariance across observed rows. If a visit pattern is fixed or conditioned on, the corresponding rows are selected from the scheduled vectors and matrices. If the pattern is random, its observation mechanism is specified separately; the displayed model does not assert that this mechanism is independent of the full outcomes or ignorable for likelihood inference.

The definition imposes no Gaussianity, no identical visit schedule, and no claim that a scientific application satisfies the proposed mean or covariance structure.

## Remarks

The vector $b$ is a latent random effect in the stated probability model; this definition gives it no Bayesian interpretation. Singular $G$ and singular $R$ are allowed here. In later results, positive definiteness of the marginal covariance $V=ZGZ^T+R$ is an additional hypothesis when an inverse is used.
