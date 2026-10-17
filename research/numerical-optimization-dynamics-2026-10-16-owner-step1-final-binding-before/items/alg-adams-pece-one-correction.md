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
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: pass
sources:
  references:
    - title: "Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I: Nonstiff Problems, 2nd ed., Chapter III.5 and DEABM PECE implementation, pp. 397–401, 423–424"
      url: "https://moodle.utc.fr/file.php/336/Hairer_Noersett_Wanner._Solving_ordinary_differential_equations_vol.1._Nonstiff_problems_2ed._revised_Springer_2008_ISBN_3540566708_593s_MNd_.pdf"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, §6.6"
      url: "https://fncbook.com/multistep/"
---

## Definition

Input an integer $k\ge1$, a strictly increasing finite grid $t_0<\cdots<t_N$ with $N\ge k$, starting states $Y_0,\ldots,Y_{k-1}\in\mathbb R^d$, and a vector field $f$ defined at every requested evaluation. On a dimension mismatch or a grid with repeated or decreasing nodes, return `invalid-input` or `invalid-grid`. Evaluate and store $F_j=f(t_j,Y_j)$ for $j=0,\ldots,k-1$; an undefined evaluation returns `evaluation-failure` with the valid prefix.

For $n=k-1,\ldots,N-1$, construct the predictor weights $b_j^n$ and corrector weights $\widehat b_j^n$ from the actual nodes as in [[lem-variable-step-adams-lagrange-weights]], then do the following:

1. Predict $Y_{n+1}^P=Y_n+\sum_{j=0}^{k-1}b_j^nF_{n-j}$.
2. Evaluate $F_{n+1}^P=f(t_{n+1},Y_{n+1}^P)$. If undefined, return `evaluation-failure` with phase `predictor`.
3. Correct once by setting $Y_{n+1}=Y_n+\widehat b_0^nF_{n+1}^P+\sum_{j=1}^{k}\widehat b_j^nF_{n+1-j}$.
4. Evaluate and store $F_{n+1}=f(t_{n+1},Y_{n+1})$ for the next predictor. If undefined, return `evaluation-failure` with phase `post-corrector` and the computed $Y_{n+1}$.

After all steps return `completed` with the states. This is one predictor and one corrector pass; it does not solve the fully implicit Adams corrector equation and asserts no convergence, stability, or error bound.

## Facts & Assumptions

**Given:** The finite strictly increasing grid, starting values, vector field evaluations, and Adams coefficients in the algorithm statement.

[F1] [[lem-variable-step-adams-lagrange-weights]] defines the predictor and fully implicit corrector weights by integrating Lagrange bases on the distinct actual nodes.

[F2] [[def-first-order-ode-initial-value-problem-and-solution]] fixes the domain convention for a first-order vector field and its solution.

[A1] The input satisfies $k\ge1$, $N\ge k$, $t_0<\cdots<t_N$, and all successful evaluations of $f$ return vectors in $\mathbb R^d$.

## Proof

1.1 The initial evaluation loop has exactly $k$ iterations. At each index either $f(t_j,Y_j)$ is defined and stores an element of $\mathbb R^d$, or the algorithm returns `evaluation-failure` with the values computed so far; therefore the stored prefix is valid. [given, A1, F2, algebra]

1.2 For each $n=k-1,\ldots,N-1$, all predictor and corrector nodes are distinct by [A1]. Thus [F1] supplies finite interpolation weights. The predictor is a finite vector sum; if its endpoint evaluation is undefined, the algorithm returns with phase `predictor`, and otherwise it obtains $F_{n+1}^P$. [A1, F1, algebra]

2.1 The correction uses the stored historical derivatives and $F_{n+1}^P$, so it is a defined vector whenever those inputs exist; it does not evaluate $f$ at the unknown corrected value to solve an implicit equation. The final evaluation either returns `evaluation-failure` with the computed corrected state or stores $F_{n+1}$ for the next predictor. [F1, F2, step 1.2, algebra]

3.1 The outer loop has $N-k+1$ iterations. If no failure occurs, each iteration appends one state and one corrected derivative, so after the last iteration the returned state list is $(Y_0,\ldots,Y_N)$. The stated procedure makes no convergence or stability assertion. [A1, step 1.1, step 1.2, step 2.1, algebra] ∎
