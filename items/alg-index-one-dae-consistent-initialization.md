---
id: alg-index-one-dae-consistent-initialization
title: "Finite-budget index-one DAE consistent initialization"
kind: algorithm
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-semi-explicit-index-one-dae-and-consistent-initial-data
  - thm-index-one-dae-implicit-function-reduction
  - alg-finite-budget-newton-for-vector-residuals
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Ernst Hairer and Gerhard Wanner, Solving Ordinary Differential Equations II, Chapter VI §VI.1, Solving Index 1 Problems, pp. 372–381"
      url: "https://isy.gitlab-pages.liu.se/fs/phd-courses/simulation/Papers/HairerWanner_VI_1_clean.pdf"
      locator: "§VI.1, printed pp. 374–375: consistent data lie on the selected algebraic manifold."
    - title: "Kendall Atkinson, Weimin Han, and David Stewart, Numerical Solution of Ordinary Differential Equations, Chapter 10 §10.1"
      url: "https://homepage.math.uiowa.edu/~atkinson/papers/NAODE_Book.pdf"
      locator: "Chapter 10, printed pp. 165–166: algebraic equations and their required initial values."
---

## Definition

Let $f,g$ define a regular index-one DAE and let $U\times V$ be a selected local branch chart from [[thm-index-one-dae-implicit-function-reduction]], so $g(t,x,z)=0$ is equivalent to $z=\psi(t,x)$ there. Input $t_0,x_0$, a seed $z_{\mathrm{seed}}\in V$, an algebraic residual tolerance $\varepsilon_a\ge0$, and a finite Newton-correction budget $N\in\mathbb N_0$. If $(t_0,x_0)\notin U$, $g(t_0,x_0,\cdot)$ is undefined at the seed, or dimensions do not match, return invalid-input.

Call [[alg-finite-budget-newton-for-vector-residuals]] on the square residual $G(z)=g(t_0,x_0,z)$, with initial value $z_{\mathrm{seed}}$, tolerance $\varepsilon_a$, and budget $N$, restricting evaluations to the chart's open $z$-domain. Write $z_0$ for its returned last valid iterate. If it reports root, reevaluate $G(z_0)$ once: if that residual is exactly zero, return $(x_0,z_0,\texttt{exact-consistent})$; otherwise return $(x_0,z_0,\texttt{approximate-consistent})$ and its norm. Map singular-jacobian, invalid-trial, and iteration-budget-exhausted to the corresponding initialization statuses and return the last valid iterate.

The procedure makes no arbitrary-start convergence claim. approximate-consistent records a residual bound; it is not relabeled as exact consistency. Under the index-one branch hypotheses an exact consistent value exists locally, by [[thm-index-one-dae-implicit-function-reduction]], but the finite Newton budget may fail to find it.

The solve has $m$ algebraic unknowns. Record residual queries, Jacobian assemblies and correction solves separately. Their costs depend on the chosen backend.
