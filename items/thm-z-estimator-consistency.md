---
id: thm-z-estimator-consistency
kind: theorem
title: "Consistency of Z-estimators under a uniform law"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps: [def-consistency-in-probability, def-op-and-little-op-stochastic-bounds, def-z-estimator]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Peter Bartlett, Theoretical Statistics, Stat 210B Lecture 15, Theorem and proof, PDF pp. 8–10"
      url: "https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/15notes.pdf"
    - title: "Aad W. van der Vaart, Semiparametric Statistics, Lecture 5 §5.3, Theorem 5.10 and proof, PDF p. 56"
      url: "https://sites.stat.washington.edu/jaw/COURSES/EPWG/stflour.pdf"
    - title: "Yen-Chi Chen, UW STAT 581, Chapter 3, lines 110–118"
      url: "https://faculty.washington.edu/yenchic/26A_stat581/Lec3_Mest.html"
---

## Statement

Let $(\Theta,d)$ be a metric space, let $X_1,\ldots,X_n$ be IID with law $P$, and let $\psi_\theta$ be jointly measurable and integrable as an $\mathbb R^q$-valued function for a fixed finite $q\ge1$. Write $\Psi_n(\theta)=P_n\psi_\theta$ and $\Psi(\theta)=P\psi_\theta$, using a fixed norm on $\mathbb R^q$. Fix $\theta_0\in\Theta$. Assume the displayed suprema and estimator evaluations are measurable. If

1. $\sup_{\theta\in\Theta}\|\Psi_n(\theta)-\Psi(\theta)\|=o_P(1)$;

2. $\Psi(\theta_0)=0$ and, for every $\varepsilon>0$, $b_\varepsilon=\inf\{\|\Psi(\theta)\|:d(\theta,\theta_0)\ge\varepsilon\}>0$, with $\inf\varnothing=+\infty$;

3. $\|\Psi_n(\hat\theta_n)\|=o_P(1)$ for a measurable estimator $\hat\theta_n$,

then $\hat\theta_n$ is consistent in probability for $\theta_0$.

## Facts & Assumptions

**Given:** The IID sampling law, finite-dimensional estimating functions, measurable estimator, and the three displayed hypotheses.

[F1] [[def-z-estimator]]: A Z-estimator is an exact or $o_P(1)$-approximate root of $\Psi_n(\theta)=P_n\psi_\theta$.

[F2] [[def-op-and-little-op-stochastic-bounds]]: For fixed finite $q$, $o_P(1)$ means the norm exceeds every fixed positive threshold with probability tending to zero.

[F4] [[def-consistency-in-probability]]: Consistency at $\theta_0$ is convergence in probability in the metric $d$.

[A1] The parameter space $(\Theta,d)$ is a metric space, the data are IID with law $P$, $\psi_\theta$ is integrable, and all displayed evaluations and suprema are measurable.

[A2] The uniform equation error $\sup_\theta\|\Psi_n(\theta)-\Psi(\theta)\|$ is $o_P(1)$.

[A3] $\Psi(\theta_0)=0$, and each displayed separation bound $b_\varepsilon$ is positive.

[A4] The root residual $\|\Psi_n(\hat\theta_n)\|$ is $o_P(1)$.

## Proof



1.1 Fix $\varepsilon>0$. If $\{\theta:d(\theta,\theta_0)\ge\varepsilon\}$ is empty, the corresponding metric-error event is empty and its probability is zero for every $n$. Otherwise $b=b_\varepsilon$ is finite and positive: [A3] gives positivity, and any point in this nonempty set has a finite population equation norm by integrability in [A1]. Put $V_n=\sup_\theta\|\Psi_n(\theta)-\Psi(\theta)\|$ and $R_n=\|\Psi_n(\hat\theta_n)\|$. Both are measurable, and $V_n=o_P(1)$ and $R_n=o_P(1)$ by [A2] and [A4]. The remaining steps treat this nonempty case. [A1, A2, A3, A4, F2, choose, F1]

2.1 On the event $d(\hat\theta_n,\theta_0)\ge\varepsilon$, separation and the triangle inequality give $$b\le\|\Psi(\hat\theta_n)\|\le\|\Psi(\hat\theta_n)-\Psi_n(\hat\theta_n)\|+\|\Psi_n(\hat\theta_n)\|\le V_n+R_n.$$ Thus the metric-error event is contained in $\{V_n+R_n\ge b\}$. This uses the equation error itself, with no representation of the nonlinear quantity $-\|P_n\psi_\theta\|$ as an empirical average of a fixed criterion. [A1, A3, step 1.1, algebra]

3.1 Since $b>0$, the union bound gives $P^{\otimes n}(V_n+R_n\ge b)\le P^{\otimes n}(V_n>b/3)+P^{\otimes n}(R_n>b/3)\to0$ by [F2] and step 1.1. Step 2.1 therefore implies $P^{\otimes n}\{d(\hat\theta_n,\theta_0)\ge\varepsilon\}\to0$, and hence the same holds with strict inequality. Together with the empty case of step 1.1, this proves consistency for every $\varepsilon>0$ by [F4]. [F2, F4, step 1.1, step 2.1, given] ∎

