---
id: alg-three-dimensional-variational-assimilation
kind: algorithm
title: Finite-dimensional 3DVAR analysis
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-data-assimilation-problem
  - thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique
justified_by:
  - thm-three-dimensional-variational-analysis-is-gaussian-map-update
axiom_use: The finite-dimensional minimization and linear solves use no choice principle.
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "K. J. H. Law, A. M. Stuart, and K. C. Zygalakis, Data Assimilation: A Mathematical Introduction, Chapter 4 §4.2.1"
      url: "https://arxiv.org/pdf/1506.07825v1"
    - title: "Geir Evensen, Femke C. Vossepoel, and Peter Jan van Leeuwen, Data Assimilation Fundamentals, Chapter 6 §6.2"
      url: "https://link.springer.com/content/pdf/10.1007/978-3-030-96709-3.pdf"
---

## Definition

For integers $d,p\ge1$, given a forecast mean $m^f\in\mathbb R^d$, fixed background covariance $B\in\mathbb R^{d\times d}$, linear observation matrix $H\in\mathbb R^{p\times d}$, datum $y\in\mathbb R^p$, and observation-error covariance $\Gamma\in\mathbb R^{p\times p}$, require $B$ and $\Gamma$ symmetric positive definite. Define the 3DVAR objective
$$J(u)=\tfrac12(u-m^f)^TB^{-1}(u-m^f)+\tfrac12(y-Hu)^T\Gamma^{-1}(y-Hu).$$
Form $S=HBH^T+\Gamma$. It is positive definite because for every $z\ne0$,
$$z^TSz=(H^Tz)^TB(H^Tz)+z^T\Gamma z>0.$$
Factor $S=LL^T$ with the unique positive-diagonal Cholesky factor from [[thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]]. Solve $LW=HB$ and $L^TK^T=W$; thus $K^T=S^{-1}HB$ without explicitly forming $S^{-1}$. Return the analysis point
$$m^a=m^f+K(y-Hm^f).$$
For a sequential 3DVAR filter, first set $m^f_{j+1}=\Psi_j(m^a_j)$, then apply this update with the fixed matrices $B,H,\Gamma$ and observation $y_{j+1}$. The routine returns a point estimate only. Its unique-minimizer and Gaussian-MAP properties are established separately; no analysis covariance is returned.
