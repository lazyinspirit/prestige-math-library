---
id: alg-index-one-dae-bdf2-stepper
title: "Finite-budget coupled constant-step BDF2 for an index-one DAE"
kind: algorithm
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-semi-explicit-index-one-dae-and-consistent-initial-data
  - alg-index-one-dae-consistent-initialization
  - thm-index-one-dae-implicit-function-reduction
  - alg-variable-step-bdf2-with-selected-implicit-branch
  - lem-variable-step-bdf2-interpolation-and-local-defect
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
      locator: "§VI.1, printed pp. 374–375, for the index-one state-space reduction; the constant-step BDF2 equation is stated locally and independently verified from quadratic interpolation."
    - title: "Kendall Atkinson, Weimin Han, and David Stewart, Numerical Solution of Ordinary Differential Equations, Chapter 10 §10.4"
      url: "https://homepage.math.uiowa.edu/~atkinson/papers/NAODE_Book.pdf"
      locator: "Chapter 10, printed pp. 172–174: BDF equations for index-one DAEs and algebraic residual sensitivity."
---

## Definition

Input $f,g$, a constant grid $t_n=t_0+nh$ with $h>0$ and $N_t\ge2$, two starting pairs $(X_0,Z_0),(X_1,Z_1)$, and a selected open tube $\mathcal T\subset\Omega$ inside the local branch chart of [[thm-index-one-dae-implicit-function-reduction]], where $g(t,x,z)=0$ is equivalent to $z=\psi(t,x)$. For each time $t$, write $\mathcal T_t=\{(X,Z):(t,X,Z)\in\mathcal T\}$ for the open state slice used as the Newton evaluation domain. Also input positive residual tolerances $\eta_d,\eta_a$, a finite Newton-correction budget $B\in\mathbb N_0$, and two starting algebraic-residual bounds $\eta_{a,0},\eta_{a,1}\ge0$. Return invalid-grid for a nonpositive step or fewer than two starting states, and invalid-input for incompatible dimensions, data outside the function domains, or $(X_j,Z_j)\notin\mathcal T_{t_j}$ for either $j=0,1$. Compute $r^a_j=g(t_j,X_j,Z_j)$ for both $j=0,1$; if $\|r^a_j\|_2>\eta_{a,j}$ for either start, return inconsistent-initial-data.

For $n=2,\ldots,N_t$, form

$$
R_n(X,Z)=\bigl(3X-4X_{n-1}+X_{n-2}-2h f(t_n,X,Z),\ g(t_n,X,Z)\bigr)
$$

and

$$
\mathcal R_n(X,Z)=\left(\frac{3X-4X_{n-1}+X_{n-2}-2h f(t_n,X,Z)}{2h\eta_d},\ \frac{g(t_n,X,Z)}{\eta_a}\right).
$$

Use $(2X_{n-1}-X_{n-2},Z_{n-1})$ as the Newton seed. Before calling Newton, if $(2X_{n-1}-X_{n-2},Z_{n-1})\notin\mathcal T_{t_n}$, return invalid-trial with the computed prefix. Otherwise call [[alg-finite-budget-newton-for-vector-residuals]] on $\mathcal R_n$ with tolerance $1$, budget $B$, and $\mathcal T_{t_n}$ as the evaluation domain. Append a candidate only when Newton reports root and the candidate lies in $\mathcal T_{t_n}$; reevaluate $R_n$ once to record its unscaled residual blocks. Otherwise return the corresponding singular-Jacobian, invalid-trial, or iteration-budget-exhausted status with the computed prefix. The input functions are defined on the selected tube, so no separate evaluation-failure branch is needed. If all steps are accepted, return completed.

For an accepted step, the constant-step BDF2 derivative residual is
$$
r^d_n=\frac{3X_n-4X_{n-1}+X_{n-2}}{2h}-f(t_n,X_n,Z_n),
$$
and the algebraic residual is $r^a_n=g(t_n,X_n,Z_n)$. The scaling ensures $\|r^d_n\|_2\le\eta_d$ and $\|r^a_n\|_2\le\eta_a$. The procedure makes no claim that Newton finds a root or that an accepted state is the exact selected branch root.

Each step solves a coupled block system with $d+m$ unknowns. At most $B$ Newton corrections and $B+1$ Newton residual evaluations are made per attempted step, plus at most one residual reevaluation to record the unscaled blocks after a root status. Each correction uses one solve with the current $(d+m)$-dimensional block Jacobian. Work per residual, Jacobian assembly, and linear solve depends on the backend.
