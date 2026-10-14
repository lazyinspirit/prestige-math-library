---
id: def-series-spline-least-squares
kind: definition
title: Series least squares with a spline basis
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps: [def-b-spline-space-and-basis, thm-spline-polynomial-reproduction, def-orthogonal-projection, thm-orthogonal-projection-is-the-unique-nearest-point, def-fixed-design-projection-estimator]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Whitney K. Newey, Nonparametric and Semiparametric Estimation, MIT OCW 14.385, Fall 2007, §6, PDF pp. 9–11
      url: https://ocw.mit.edu/courses/14-385-nonlinear-econometric-analysis-fall-2007/655fcef1b4192f40d80edea3c1dd85ce_notes_nonsemi.pdf
---

## Definition

Let $n,K\ge1$, let $p_K(x)=(s_1(x),\ldots,s_K(x))^T$ be a specified $K$-dimensional spline basis on the data domain, and let $(X_i,Y_i)_{i=1}^n$ be observed real-valued data with inputs in that domain. In particular, one may specify the degree-$p$ B-spline basis $p_K(x)=(B_{1,p,\xi}(x),\ldots,B_{K,p,\xi}(x))^T$. Form the design matrix $P\in\mathbb R^{n\times K}$ with row $p_K(X_i)^T$. The **series least-squares fitted training vector** is
$$\widehat{\mathbf g}_K=\Pi_{\operatorname{col}(P)}\mathbf Y,$$
the orthogonal projection of $\mathbf Y=(Y_1,\ldots,Y_n)^T$ onto the column space of $P$. Conditional on the realized design, this is the fixed-design least-squares fitted vector of [[def-fixed-design-projection-estimator]]. Equivalently, it is $P\widehat\beta$ for any minimizer $\widehat\beta$ of $\|\mathbf Y-P\beta\|_2^2$; all such minimizers have the same fitted training vector. The training prediction loss relative to a specified target vector $\mathbf g_0=(g_0(X_1),\ldots,g_0(X_n))^T$ is $n^{-1}\|\widehat{\mathbf g}_K-\mathbf g_0\|_2^2$. This definition specifies training fitted values and makes no test-risk assertion.
