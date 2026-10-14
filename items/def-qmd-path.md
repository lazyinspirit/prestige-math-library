---
id: def-qmd-path
kind: definition
title: Quadratic-mean differentiability at a parameter
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps:
  - def-dominated-statistical-experiment
  - def-parametric-statistical-model
  - def-measure-with-density
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
    - title: "Peter Bartlett, Theoretical Statistics, Stat 210B Lecture 22, PDF pp. 8–10"
      url: "https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/22notes.pdf"
    - title: "Yen-Chi Chen, STAT 581 Chapter 3: M-estimation and the maximum likelihood estimator, QMD section"
      url: "https://faculty.washington.edu/yenchic/26A_stat581/Lec3_Mest.html"
---

## Definition

Let $\mathsf P:\Theta\to\mathcal P(\mathcal X,\mathcal A)$ be a parametric
model, let $\Theta$ be open in $\mathbb R^d$, and let a supplied sigma-finite
measure $\mu$ dominate every $P_\theta$
([[def-parametric-statistical-model]], [[def-dominated-statistical-experiment]]).
Supply as part of the setup a family of nonnegative finite-valued measurable
functions $p_\theta:\mathcal X\to[0,\infty)$ satisfying
$P_\theta(A)=\int_Ap_\theta\,d\mu$ for every $A\in\mathcal A$
([[def-measure-with-density]]). Thus each $p_\theta$ integrates to one.
The density family is supplied, rather than selected from domination alone;
no choice principle, joint measurability in $(\theta,x)$, or common
exceptional null set is asserted. A supplied extended-valued probability
density can be made finite-valued by setting it to zero on its measurable
infinite-value set, which has measure zero because its integral is one.
The QMD condition is unchanged by replacing any supplied density by an
almost-everywhere equal version: for each fixed $h$, the norm in the
condition below changes only on the union of two null sets.
At an interior point $\theta_0$, the model is
**quadratic-mean differentiable (QMD)** with score $s_{\theta_0}$ if
$s_{\theta_0}:\mathcal X\to\mathbb R^d$ is measurable,
$\mathbb E_{\theta_0}\|s_{\theta_0}(X)\|^2<\infty$, and
$$
\int\left(\sqrt{p_{\theta_0+h}}-\sqrt{p_{\theta_0}}- \tfrac12 h^Ts_{\theta_0}\sqrt{p_{\theta_0}}\right)^2d\mu=o(\|h\|^2)
$$
as $h\to0$ with $\theta_0+h\in\Theta$. Values of the score on
$\{p_{\theta_0}=0\}$ do not affect this condition. The Fisher information
associated with this QMD score is
$I_{\theta_0}=\mathbb E_{\theta_0}[s_{\theta_0}s_{\theta_0}^T]$; it may be
singular. QMD is an $L^2(\mu)$ condition and does not assert pointwise
differentiability of $p_\theta$ or local mutual absolute continuity of
$P_\theta$ and $P_{\theta_0}$.

