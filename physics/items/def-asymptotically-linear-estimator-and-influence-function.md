---
id: def-asymptotically-linear-estimator-and-influence-function
kind: definition
title: Asymptotically linear estimators and influence functions
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps: [def-mean-zero-square-integrable-space]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "A. W. van der Vaart, Semiparametric Statistics, Lecture Notes in Mathematics 1781, Lecture 2 (Springer, 2002)"
      url: "https://sites.stat.washington.edu/jaw/COURSES/EPWG/stflour.pdf"
    - title: "Edward H. Kennedy, Semiparametric theory, arXiv:1709.06418v1 (2017)"
      url: "https://arxiv.org/pdf/1709.06418"
---

## Definition

Fix a law $P$ and an iid sample $X_1,\ldots,X_n\sim P$. For a measurable vector function $\varphi:\mathcal X\to\mathbb R^k$, write $P\varphi=E_P[\varphi(X)]$ and $P_n\varphi=n^{-1}\sum_{i=1}^n\varphi(X_i)$, where $P_n=n^{-1}\sum_{i=1}^n\delta_{X_i}$ is the empirical measure. For a vector remainder $R_n$, $R_n=o_P(n^{-1/2})$ means $\sqrt n R_n\to0$ in $P$-probability.

A measurable estimator sequence $\widehat\psi_n$ of $\psi(P)\in\mathbb R^k$ is **asymptotically linear at $P$** with **estimator influence function** $\varphi$ if

$$\widehat\psi_n-\psi(P)=(P_n-P)\varphi+o_P(n^{-1/2}),$$

where $\varphi\in L^2_0(P)^k$: $E_P\varphi=0$ and $E_P\|\varphi\|^2<\infty$. The space $L^2_0(P)$ and its almost-sure equivalence convention are as in [[def-mean-zero-square-integrable-space]]. This definition alone does not assert regularity under local alternatives, pathwise differentiability of $\psi$, or asymptotic normality.

## Remarks

The term “influence function” here describes an estimator expansion. The neighboring pathwise-differentiability definition describes a functional's derivative along model paths. The two notions are distinct, though they can coincide for a particular estimator and target.
