---
id: alg-variable-step-bdf2-with-selected-implicit-branch
kind: algorithm
title: "Variable-step BDF2 with an explicit local implicit-branch rule"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
  - def-linear-multistep-method-consistency-order-and-root-condition
  - lem-variable-step-bdf2-interpolation-and-local-defect
  - def-first-order-ode-initial-value-problem-and-solution
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: pass
sources:
  references:
    - title: "Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I: Nonstiff Problems, 2nd ed., Chapter III.5, pp. 397–401"
      url: "https://moodle.utc.fr/file.php/336/Hairer_Noersett_Wanner._Solving_ordinary_differential_equations_vol.1._Nonstiff_problems_2ed._revised_Springer_2008_ISBN_3540566708_593s_MNd_.pdf"
    - title: "G. Söderlind, I. Fekete, and I. Faragó, On the zero-stability of multistep methods on smooth nonuniform grids, §4"
      url: "https://real.mtak.hu/85237/1/B111_BIT.pdf"
dependency_level: 2
---

## Definition

Input a vector field $f(t,y)$, a finite grid $t_0,\ldots,t_N$, starting states $Y_0,Y_1\in\mathbb R^d$ (so $N\ge1$), and for each later step a prescribed closed ball $B_{n+1}\subset\mathbb R^d$ that specifies the admissible implicit branch. Before any evaluation, if either starting state has dimension different from $d$, return `invalid-input`; otherwise, if any time increment is nonpositive, return `invalid-grid`. Set $h_n=t_{n+1}-t_n$ and $r_n=h_n/h_{n-1}$ for $1\le n<N$.

Also supply an exact branch oracle $\mathcal O$ for the step equations below. On input $(f,t_{n+1},h_n,r_n,Y_{n-1},Y_n,B_{n+1})$, it returns `evaluation-failure` if $f(t_{n+1},\cdot)$ is not defined throughout $B_{n+1}$. Otherwise it returns `no-root` if the equation has no root in that ball, `ambiguous-branch` if it has more than one, or $(\texttt{unique-root},Z)$ with the exact root if it has exactly one. Oracle calls are returning primitives; a realization of this procedure must supply an oracle meeting this contract for every call it reaches. This is an algorithm relative to that oracle; the vector field and ball alone do not provide a general exact root-counting or root-solving procedure.

For $n=1,\ldots,N-1$, form the equation and call $\mathcal O$ with the current history and prescribed ball:

$$\frac{(1+2r_n)Z-(1+r_n)^2Y_n+r_n^2Y_{n-1}}{h_n(1+r_n)}=f(t_{n+1},Z).$$

On $(\texttt{unique-root},Z)$, set $Y_{n+1}=Z$ and continue. On any of the three failure statuses, return that status with the computed prefix. On reaching $N$, return `completed` and $(Y_0,\ldots,Y_N)$. The procedure admits arbitrary positive adjacent step ratios; no convergence or accuracy property is part of this algorithm.

The coefficients are those obtained from the quadratic interpolation derivative in [[lem-variable-step-bdf2-interpolation-and-local-defect]]. A separate theorem gives the uniform ratio hypotheses needed for second-order convergence; they are not part of this algorithm.

