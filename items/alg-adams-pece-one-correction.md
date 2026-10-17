---
id: alg-adams-pece-one-correction
kind: algorithm
title: "Variable-step Adams predictor-evaluate-correct-evaluate procedure"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
  - def-linear-multistep-method-consistency-order-and-root-condition
  - lem-variable-step-adams-lagrange-weights
  - def-first-order-ode-initial-value-problem-and-solution
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I: Nonstiff Problems, 2nd ed., Chapter III.5 and DEABM PECE implementation, pp. 397–401, 423–424"
      url: "https://moodle.utc.fr/file.php/336/Hairer_Noersett_Wanner._Solving_ordinary_differential_equations_vol.1._Nonstiff_problems_2ed._revised_Springer_2008_ISBN_3540566708_593s_MNd_.pdf"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, §6.6"
      url: "https://fncbook.com/multistep/"
dependency_level: 1
---

## Definition

Input an integer $k\ge1$, a finite grid $t_0,\ldots,t_N$ with $N\ge k$, starting states $Y_0,\ldots,Y_{k-1}\in\mathbb R^d$, and a vector field $f:U\to\mathbb R^d$ on its evaluation domain $U$. Before evaluating $f$, if any starting state has dimension different from $d$, return `invalid-input`; otherwise, if the grid is not strictly increasing, return `invalid-grid`. Evaluate and store $F_j=f(t_j,Y_j)$ for $j=0,\ldots,k-1$; an undefined evaluation outside $U$ returns `evaluation-failure` with the valid prefix.

For $n=k-1,\ldots,N-1$, construct the predictor weights $b_j^n$ and corrector weights $\widehat b_j^n$ from the actual nodes as in [[lem-variable-step-adams-lagrange-weights]], then do the following:

1. Predict $Y_{n+1}^P=Y_n+\sum_{j=0}^{k-1}b_j^nF_{n-j}$.
2. Evaluate $F_{n+1}^P=f(t_{n+1},Y_{n+1}^P)$. If undefined, return `evaluation-failure` with phase `predictor`.
3. Correct once by setting $Y_{n+1}=Y_n+\widehat b_0^nF_{n+1}^P+\sum_{j=1}^{k}\widehat b_j^nF_{n+1-j}$.
4. Evaluate and store $F_{n+1}=f(t_{n+1},Y_{n+1})$ for the next predictor. If undefined, return `evaluation-failure` with phase `post-corrector` and the computed $Y_{n+1}$.

After all steps return `completed` with the states. This is one predictor and one corrector pass; it does not solve the fully implicit Adams corrector equation and asserts no convergence, stability, or error bound.

