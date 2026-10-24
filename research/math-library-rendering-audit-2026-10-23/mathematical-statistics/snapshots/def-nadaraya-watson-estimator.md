---
id: def-nadaraya-watson-estimator
kind: definition
title: Nadaraya–Watson estimator
status: published
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
    - title: "Whitney K. Newey, Nonparametric and Semiparametric Estimation, MIT course notes"
      url: "https://ocw.mit.edu/courses/14-385-nonlinear-econometric-analysis-fall-2007/655fcef1b4192f40d80edea3c1dd85ce_notes_nonsemi.pdf"
    - title: "Ryan Tibshirani, Nonparametric Regression: Nearest Neighbors and Kernels"
      url: "https://www.stat.berkeley.edu/~ryantibs/statlearn-s24/lectures/nn_kernels.pdf"
---

## Definition

Assume AC as in [[def-regression-target-version]]. Fix a sample size $n\ge1$,
a prediction point $x\in\mathbb R$, a bandwidth $h>0$, a finite-valued
nonnegative Borel function $K:\mathbb R\to[0,\infty)$, and a fixed fallback
$a_0\in\mathbb R$. For data $(X_i,Y_i)_{i=1}^n$, put
$$D_{n,h}(x)=\sum_{i=1}^n K((x-X_i)/h).$$
The **Nadaraya–Watson estimator** of the pointwise target $m(x)$ is
$$\widehat m_{\mathrm{NW},h}(x)= \begin{cases} \dfrac{\sum_{i=1}^n K((x-X_i)/h)Y_i}{D_{n,h}(x)},&D_{n,h}(x)>0,\\[6pt] a_0,&D_{n,h}(x)=0. \end{cases}$$
For fixed $x,h,n$, this is a Borel statistic on $(\mathbb R^2)^n$ with its
product Borel sigma-algebra: each weight, product, and finite sum is Borel;
the positive-denominator set is Borel, and division is continuous there. In
any statistical experiment on this sample space whose pointwise regression
estimand is $\psi_x(\theta)=m_\theta(x)$, with $m_\theta$ the selected
version from [[def-regression-target-version]], it is an estimator of
$\psi_x$ in the sense of [[def-statistic-and-estimator]]. The fallback is
part of the definition. Kernel regularity and bandwidth assumptions used for
bias or variance results are stated in those results.
