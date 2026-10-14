---
id: thm-lasso-basic-inequality
kind: theorem
title: "Lasso basic inequality and cone constraint"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps:
  - def-lasso-estimator
  - def-restricted-eigenvalue-condition
  - def-subgaussian-fixed-design-regression-model
  - lem-lasso-objective-has-minimizer
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 2, Section 2.4"
      url: "https://arxiv.org/pdf/2310.19244v1"
    - title: "Peter J. Bickel, Ya'acov Ritov and Alexandre B. Tsybakov, Simultaneous Analysis of Lasso and Dantzig Selector, Appendix B"
      url: "https://www.stat.berkeley.edu/~bickel/BickelRitovTsybakov2009aos.pdf"
---

## Statement

Let $Y=X\theta^\ast+\varepsilon$ be the fixed-design model of [[def-subgaussian-fixed-design-regression-model]], let $S=\{j:\theta^\ast_j\ne0\}$, and let $\hat\theta$ be any minimizer of the objective in [[def-lasso-estimator]] with $\tau>0$. Write $\Delta=\hat\theta-\theta^\ast$. If
$$\left\|X^{\mathsf T}\varepsilon/n\right\|_\infty\le\tau/2,$$
then
$$\frac{\|X\Delta\|_2^2}{n}+\tau\|\Delta_{S^c}\|_1\le3\tau\|\Delta_S\|_1.$$
In particular, $\|\Delta_{S^c}\|_1\le3\|\Delta_S\|_1$, so $\Delta\in\mathcal C(S)$ for the cone in [[def-restricted-eigenvalue-condition]].

## Facts & Assumptions

**Given:** A deterministic design $X$, response $Y=X\theta^\ast+\varepsilon$, $\tau>0$, and a Lasso minimizer $\hat\theta$, which exists by [[lem-lasso-objective-has-minimizer]].

[F1] The Lasso objective is $n^{-1}\|Y-X\theta\|_2^2+2\tau\|\theta\|_1$ ([[def-lasso-estimator]]).

[F2] The response has the form $Y=X\theta^\ast+\varepsilon$ ([[def-subgaussian-fixed-design-regression-model]]).

[F3] The $\ell_1$ norm is the sum of absolute coordinates ([[def-restricted-eigenvalue-condition]]).

[F4] For every response the Lasso minimizer set is nonempty ([[lem-lasso-objective-has-minimizer]]).

[F5] The cone $\mathcal C(S)$ is defined by $\|\Delta_{S^c}\|_1\le3\|\Delta_S\|_1$ ([[def-restricted-eigenvalue-condition]]).

[A1] The score bound $\|X^{\mathsf T}\varepsilon/n\|_\infty\le\tau/2$.

## Proof

1.1 By [F4] choose any minimizer $\hat\theta$. Comparison with $\theta^\ast$ in [F1] and substitution from [F2] give $\frac{\|X\Delta\|_2^2}{n}+2\tau(\|\hat\theta\|_1-\|\theta^\ast\|_1)\le\frac{2}{n}\langle\varepsilon,X\Delta\rangle.$ This follows by expanding $\|\varepsilon-X\Delta\|_2^2$ and cancelling $\|\varepsilon\|_2^2$. [given, F1, F2, F4, algebra]

2.1 By [A1], writing $g=X^{\mathsf T}\varepsilon/n$, the finite-coordinate calculation $|\langle g,\Delta\rangle|\le\sum_j|g_j||\Delta_j|\le(\max_j|g_j|)\sum_j|\Delta_j|=\|g\|_\infty\|\Delta\|_1$ bounds the right side of step 1.1 by $\tau(\|\Delta_S\|_1+\|\Delta_{S^c}\|_1)$. For $j\in S$, the scalar triangle inequality $|\theta_j^\ast|=|\hat\theta_j-\Delta_j|\le|\hat\theta_j|+|\Delta_j|$ gives $|\hat\theta_j|-|\theta_j^\ast|\ge-|\Delta_j|$; for $j\notin S$, $\theta_j^\ast=0$ and $|\hat\theta_j|=|\Delta_j|$. Summing by [F3] gives $\|\hat\theta\|_1-\|\theta^\ast\|_1\ge-\|\Delta_S\|_1+\|\Delta_{S^c}\|_1$. Substitution and rearrangement yield the displayed bound. Since $\|X\Delta\|_2^2/n\ge0$ and $\tau>0$, it implies $\|\Delta_{S^c}\|_1\le3\|\Delta_S\|_1$, which is precisely $\Delta\in\mathcal C(S)$ by [F5]. [A1, F3, F5, step 1.1, algebra] ∎
