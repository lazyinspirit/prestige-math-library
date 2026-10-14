---
id: def-local-polynomial-estimator
kind: definition
title: Local-polynomial estimator
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-regression-target-version
  - def-statistic-and-estimator
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
    - title: "Whitney K. Newey, Locally Linear Regression, MIT course notes"
      url: "https://ocw.mit.edu/courses/14-385-nonlinear-econometric-analysis-fall-2007/40cac15c5fb98b5bf72b8cfaab90c273_local_lin_reg.pdf"
    - title: "Ryan Tibshirani, Nonparametric Regression: Nearest Neighbors and Kernels"
      url: "https://www.stat.berkeley.edu/~ryantibs/statlearn-s24/lectures/nn_kernels.pdf"
---

## Definition

Assume AC as in [[def-regression-target-version]]. Fix $n\ge1$, a point
$x\in\mathbb R$, bandwidth $h>0$, degree $p\in\mathbb N_0$, a finite-valued
nonnegative Borel function $K$, and fallback $a_0\in\mathbb R$. Set
$u_i=(x-X_i)/h$, $r_p(u)=(1,u,\ldots,u^p)^\mathsf T$, let $Z$ be the matrix
whose $i$th row is $r_p(u_i)^\mathsf T$, let
$W=\operatorname{diag}(K(u_1),\ldots,K(u_n))$, and put
$M=Z^\mathsf TWZ$. If $M$ is nonsingular, define
$$\widehat\beta=M^{-1}Z^\mathsf TW(Y_1,\ldots,Y_n)^\mathsf T,\qquad \widehat m_{p,h}(x)=\widehat\beta_0.$$
If $M$ is singular, define $\widehat m_{p,h}(x)=a_0$. For fixed $x,h,n,p$
and Borel $K$, this is a real statistic on $(\mathbb R^2)^n$ with its product
Borel sigma-algebra: the matrix entries are Borel, the nonsingular-matrix set
is Borel, matrix inversion is continuous there, and the fixed fallback gives
the other branch. In any statistical experiment on this sample space whose
pointwise regression estimand is $\psi_x(\theta)=m_\theta(x)$, with
$m_\theta$ the selected version from [[def-regression-target-version]], it
estimates $\psi_x$ in the sense of [[def-statistic-and-estimator]]. The case
$p=1$ is the **local-linear estimator**. No claim that $M$ is nonsingular for
a given sample is implicit in this definition.

## Source notes

Newey, “Locally Linear Regression,” PDF pp. 1–4; Tibshirani, §3.1, PDF p. 6.
