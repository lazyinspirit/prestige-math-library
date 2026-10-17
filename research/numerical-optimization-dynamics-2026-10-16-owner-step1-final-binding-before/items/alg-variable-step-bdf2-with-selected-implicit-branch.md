---
id: alg-variable-step-bdf2-with-selected-implicit-branch
kind: algorithm
title: "Variable-step BDF2 with an explicit local implicit-branch rule"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
  - def-linear-multistep-method-consistency-order-and-root-condition
  - lem-variable-step-bdf2-interpolation-and-local-defect
  - def-first-order-ode-initial-value-problem-and-solution
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: pass
sources:
  references:
    - title: "Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I: Nonstiff Problems, 2nd ed., Chapter III.5, pp. 397–401"
      url: "https://moodle.utc.fr/file.php/336/Hairer_Noersett_Wanner._Solving_ordinary_differential_equations_vol.1._Nonstiff_problems_2ed._revised_Springer_2008_ISBN_3540566708_593s_MNd_.pdf"
    - title: "G. Söderlind, L. Wang, and S. Zhang, On the zero-stability of multistep methods on smooth nonuniform grids, §4"
      url: "https://real.mtak.hu/85237/1/B111_BIT.pdf"
---

## Definition

Input a vector field $f(t,y)$, a finite strictly increasing grid $t_0<\cdots<t_N$, starting states $Y_0,Y_1\in\mathbb R^d$ (so $N\ge1$), and for each later step a prescribed closed ball $B_{n+1}\subset\mathbb R^d$ that specifies the admissible implicit branch. Set $h_n=t_{n+1}-t_n$ and $r_n=h_n/h_{n-1}$ for $1\le n<N$. If a time increment is nonpositive or the starting dimensions do not agree, return `invalid-grid` or `invalid-input`.

For $n=1,\ldots,N-1$, form the equation

$$\frac{(1+2r_n)Z-(1+r_n)^2Y_n+r_n^2Y_{n-1}}{h_n(1+r_n)}=f(t_{n+1},Z).$$

If this equation has exactly one root $Z$ in $B_{n+1}$, set $Y_{n+1}=Z$ and continue. If it has no root there, return `no-root` with the computed prefix; if it has more than one root there, return `ambiguous-branch` with the computed prefix. If an evaluation of $f$ is undefined, return `evaluation-failure` with the prefix. On reaching $N$, return `completed` and $(Y_0,\ldots,Y_N)$. The procedure is defined for arbitrary positive adjacent step ratios; no convergence or accuracy property is part of this algorithm.

The coefficients are those obtained from the quadratic interpolation derivative in [[lem-variable-step-bdf2-interpolation-and-local-defect]]. A separate theorem gives the uniform ratio hypotheses needed for second-order convergence; they are not part of this algorithm.

## Facts & Assumptions

**Given:** A finite grid, compatible starting values, a vector field with the stated evaluation domain, and the prescribed branch balls.

[F1] [[lem-variable-step-bdf2-interpolation-and-local-defect]] derives the BDF2 coefficients and gives the denominator $h_n(1+r_n)$ for positive steps and ratios.

[F2] [[def-first-order-ode-initial-value-problem-and-solution]] fixes the domain convention for the first-order vector field.

[A1] The input has $N\ge1$, finite states in $\mathbb R^d$, and prescribed closed balls for all computed endpoints.

## Proof

1.1 The grid check ensures every increment $h_n=t_{n+1}-t_n$ is positive, so each ratio $r_n=h_n/h_{n-1}$ is positive. Therefore $h_n(1+r_n)>0$, and the step equation is well-defined wherever the requested evaluation of $f$ is defined; [F1] identifies its coefficients with the quadratic-interpolation BDF2 formula. [given, A1, F1, F2, algebra]

1.2 At each step, if the equation has exactly one root in the prescribed ball, selecting it gives the next state. If it has no root, multiple roots, or an undefined evaluation, the corresponding explicit status is returned together with the already computed prefix; no unselected root is used. [given, A1, F2, cases]

2.1 The loop index runs from $1$ through $N-1$, so there are finitely many steps. If each step has exactly one evaluable root in its ball, induction stores $Y_2,\ldots,Y_N$ and returns `completed`; existence or uniqueness is not claimed outside the stated branch test, and no convergence assertion follows from the algorithm. [A1, step 1.1, step 1.2, induction] ∎
