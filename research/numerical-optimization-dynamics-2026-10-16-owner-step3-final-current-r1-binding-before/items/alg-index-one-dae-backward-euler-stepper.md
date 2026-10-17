---
id: alg-index-one-dae-backward-euler-stepper
title: "Finite-budget coupled backward Euler for an index-one DAE"
kind: algorithm
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-semi-explicit-index-one-dae-and-consistent-initial-data
  - alg-index-one-dae-consistent-initialization
  - thm-index-one-dae-implicit-function-reduction
  - def-backward-euler-step-equation
  - def-implicit-residual-and-algebraic-error-units
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
      locator: "§VI.1, printed pp. 379–381: applying an implicit method to the differential equation and enforcing the algebraic constraint."
    - title: "Kendall Atkinson, Weimin Han, and David Stewart, Numerical Solution of Ordinary Differential Equations, Chapter 10 §10.2"
      url: "https://homepage.math.uiowa.edu/~atkinson/papers/NAODE_Book.pdf"
      locator: "Chapter 10, printed p. 168: the coupled backward-Euler DAE equations."
---

## Definition

Input $f,g$, a constant grid $t_n=t_0+nh$ with $h>0$ and $N_t\in\mathbb N$, an initial pair $(X_0,Z_0)$, and a selected open tube $\mathcal T\subset\Omega$ inside the local branch chart of [[thm-index-one-dae-implicit-function-reduction]], where $g(t,x,z)=0$ is equivalent to $z=\psi(t,x)$. For each time $t$, write $\mathcal T_t=\{(X,Z):(t,X,Z)\in\mathcal T\}$ for the open state slice used as the Newton evaluation domain. Also input positive residual tolerances $\eta_d,\eta_a$, a finite Newton-correction budget $B\in\mathbb N_0$, and an initial algebraic-residual bound $\eta_{a,0}\ge0$. Return invalid-grid if $h\le0$ or $N_t=0$, and invalid-input for incompatible dimensions, data outside the function domains, or $(X_0,Z_0)\notin\mathcal T_{t_0}$. Compute the starting algebraic residual once; return inconsistent-initial-data if $\|g(t_0,X_0,Z_0)\|_2>\eta_{a,0}$.

For $n=1,\ldots,N_t$, form the coupled update residual

$$
R_n(X,Z)=\bigl(X-X_{n-1}-h f(t_n,X,Z),\ g(t_n,X,Z)\bigr)
$$

and the scaled square residual

$$
\mathcal R_n(X,Z)=\left(\frac{X-X_{n-1}-h f(t_n,X,Z)}{h\eta_d},\ \frac{g(t_n,X,Z)}{\eta_a}\right).
$$

Use $(X_{n-1},Z_{n-1})$ as the Newton seed. Before calling Newton, if $(X_{n-1},Z_{n-1})\notin\mathcal T_{t_n}$, return invalid-trial with the already computed prefix. Otherwise call [[alg-finite-budget-newton-for-vector-residuals]] on $\mathcal R_n$ with residual tolerance $1$, budget $B$, and $\mathcal T_{t_n}$ as its evaluation domain. If the returned status is root and the candidate lies in $\mathcal T_{t_n}$, reevaluate $R_n$ once to retain both unscaled residuals, then append the candidate. Otherwise return the corresponding singular-Jacobian, invalid-trial, or iteration-budget-exhausted status and the already computed prefix. The input functions are defined on the selected tube, so no separate evaluation-failure branch is needed. If every step is accepted, return completed and the state sequence.

For recording, define the derivative residual $r^d_n=(X_n-X_{n-1})/h-f(t_n,X_n,Z_n)$ and the algebraic residual $r^a_n=g(t_n,X_n,Z_n)$. root means only that the scaled residual tolerance was met; it does not assert an exact zero, uniqueness, Newton convergence from an arbitrary seed, or a discretization error bound.

Use the coupled $(d+m)$-dimensional residual and its current block Jacobian. Record residual queries, Jacobian assemblies and correction solves separately; backend costs are not specified.
