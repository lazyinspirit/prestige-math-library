---
id: prop-riccati-dense-work-and-acceptance-diagnostics
kind: proposition
title: "Dense Riccati work counts and numerical acceptance require equation-level diagnostics"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - alg-finite-budget-schur-qz-riccati-candidate-extraction
  - alg-finite-budget-stable-block-reordering-for-schur-and-qz
  - thm-finite-budget-stable-block-reordering-correctness-and-status
  - alg-finite-budget-newton-kleinman-policy-iteration
  - alg-finite-budget-structure-preserving-doubling-for-dare
  - alg-finite-budget-francis-schur-reduction
  - thm-finite-budget-francis-schur-termination-and-status
  - alg-finite-budget-qz-iteration-with-deflation-and-residual
  - prop-finite-budget-qz-iteration-terminates-and-preserves-pencil-equivalence
  - thm-computed-qz-pair-has-certified-backward-error
  - alg-bartels-stewart-sylvester-equation
  - thm-bartels-stewart-finite-status-and-local-pivot-uniqueness
  - def-standard-continuous-and-discrete-riccati-equations
  - def-frobenius-matrix-norm
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Valeria Simoncini, Computational Methods for Linear Matrix Equations"
      url: "https://www.dm.unibo.it/~simoncin/matrixeq.pdf"
      locator: "§§2–3, dense Sylvester/Lyapunov equation algorithms and arithmetic work"
    - title: "Peter Benner and Lihong Feng, Model Reduction for Dynamical Systems, Lecture 8"
      url: "https://www.mpi-magdeburg.mpg.de/2943737/lecture8.pdf"
      locator: "slides 26–29, Schur-vector and Newton-Kleinman methods"
---

## Statement

In the dense arithmetic model, a single-matrix Schur reduction or regular-pair QZ reduction of order $n$ with at most $s$ Francis/QZ sweeps has core work $O(n^3+sn^2)$: the initial Hessenberg or Hessenberg-triangular reduction costs $O(n^3)$ and each full bulge-chasing sweep costs $O(n^2)$. Forming a graph candidate by solving $XU_1=U_2$ with dense $n\times n$ factorization, $n$ right-hand sides, and residual multiplication costs $O(n^3)$.

After an order-$d$ reduction, finite stable-block reordering with $k$ actual attempts costs $O(d^2+kd)$ scalar operations. If the form has $b$ diagonal blocks and $I$ complementary-before-selected inversions, then $I\le b(b-1)/2$; successful ordering requires $K\ge I$ and enough scalar/evaluator budget $W$ for the entire execution, including validation, label and inversion scans, all $I$ swaps, and the final ordering scan. For a Riccati pencil or Hamiltonian with $d=2n$, successful reordering, graph solve and equation-level residual multiplication preserve the $O(n^3+sn^2)$ scalar-core bound. This exact postprocessing count excludes algebraic bit cost, evaluator implementation cost beyond its declared unit budget, dense product-factor evaluation, and any additional dense residual multiplication. It is not a fixed-precision floating-point flop or structured backward-stability bound.

One dense Bartels–Stewart Lyapunov solve in its specified cubic branch costs $O(n^3)$; $J$ exact Newton-Kleinman policy evaluations therefore cost $O(m^3+Jn^3+J(n^2m+nm^2))$ for state dimension $n$ and input dimension $m$, charging one factorization of $R$ of order $m$ once. One SDA step costs $O(n^3)$, so $N$ exact steps cost $O(Nn^3)$.

Every computed candidate still requires its actual CARE/DARE residual and Hermitian symmetry defect. A DARE candidate also requires a positive lower bound for $R+B^*XB$; both equations require an independently certified closed-loop Hurwitz/Schur condition before the stabilizing branch is accepted. A computed QZ backward error for an unstructured nearby pencil does not certify nearby Hamiltonian/symplectic structure or positive $Q,R$.

## Facts & Assumptions

**Given:** Dense scalar arithmetic, finite Schur/QZ sweep budgets, dense direct factors and solves, and exact matrix dimensions.

[F1] [[alg-finite-budget-schur-qz-riccati-candidate-extraction]]: candidate extraction calls finite Schur/QZ reductions and exact stable-block reordering, solves $XU_1=U_2$, and reports actual Riccati residual, symmetry defect, positivity, and closed-loop stability data.

[F2] [[alg-finite-budget-francis-schur-reduction]]: Francis reduction first reduces to Hessenberg form and then performs bounded QR bulge-chasing sweeps.

[F3] [[alg-finite-budget-qz-iteration-with-deflation-and-residual]]: QZ iteration first reduces a regular pair to Hessenberg-triangular form and then performs bounded QZ sweeps.

[F4] [[alg-bartels-stewart-sylvester-equation]]: its cubic branch sets $N_A\le c_0m$ and $N_B\le c_0n$ for the two Schur reductions, then solves the resulting triangular Sylvester equation.

[F5] [[alg-finite-budget-newton-kleinman-policy-iteration]]: each exact Newton-Kleinman update performs one Lyapunov solve and one gain update.

[F6] [[alg-finite-budget-structure-preserving-doubling-for-dare]]: each SDA update solves with $I+G_jH_j$ and forms three dense matrix updates.

[F7] [[thm-computed-qz-pair-has-certified-backward-error]]: the QZ backward-error statement certifies the computed pair against an unstructured nearby pencil.

[F8] [[def-standard-continuous-and-discrete-riccati-equations]]: the acceptance quantities are the CARE/DARE residuals, symmetry, DARE matrix $R+B^*XB$, and the corresponding closed-loop matrices.

[F9] [[alg-finite-budget-stable-block-reordering-for-schur-and-qz]]: the exact reordering has initial form-validation work, bounded-size local solves, whole-panel updates, and separate finite $K,W$ budgets.

[F10] [[thm-finite-budget-stable-block-reordering-correctness-and-status]]: each accepted adjacent inversion swap reduces the count by one and the exact factors transport existing unstructured residual norms.

[F11] [[thm-bartels-stewart-finite-status-and-local-pivot-uniqueness]]: the admitted finite solve terminates with a declared status and every successful local pivot is unique.

[A1] Dense reductions and equation solves use classical dense multiplication, factorization, and triangular solve costs. Reordering counts exact scalar primitives and declared evaluator units; algebraic bit cost, evaluator implementation cost, factor evaluation, and any uncounted enclosure work remain separate.

## Proof

1.1 In a Householder Hessenberg reduction, there are at most $n$ reflectors. At each stage a reflector updates a trailing block with at most $n^2$ entries using matrix-vector and rank-one operations, so the initialization costs $O(n^3)$. In a Francis or QZ bulge-chasing sweep, there are $O(n)$ rotations/reflections; each is applied to $O(n)$ entries in the active matrix and accumulated factor, hence a sweep costs $O(n^2)$. The finite budgets in [F2]–[F3] therefore give $O(n^3+sn^2)$ core work. [A1, F2, F3, given, algebra]

2.1 Dense LU factorization of $U_1$ costs $O(n^3)$; applying its factors to $n$ right-hand sides costs $O(n^3)$. The residual product $(XU_1-U_2)$ is also $O(n^3)$, yielding the candidate solve count in [F1]. In the Lyapunov branch, [F4] imposes $N_A,N_B\le c_0n$. By step 1.1, each of its two dense Schur reductions therefore costs $O(n^3)$; exact certificate checks and factor transformations are also $O(n^3)$. Triangular substitution for $n^2$ unknown entries with $O(n)$ work per entry costs $O(n^3)$, so one solve in this cubic branch costs $O(n^3)$. The fixed controller is bounded there; arbitrary-terminating-controller work is separate. [A1, F1, F4, F11, step 1.1, algebra]

3.1 Let $d$ be the reduction order, $b$ its diagonal block count and $I$ its initial inversion count. The reordering validation scan costs $O(d^2)$. Each local system has order at most eight, and each exact factor update touches $O(d)$ panel entries, so $k$ attempts cost $O(d^2+kd)$ by [F9]. On success, [F10] gives $k=I\le b(b-1)/2\le d(d-1)/2$, so the worst-case reordering core is $O(d^3)$; this success path also requires $K\ge I$ and sufficient $W$ for the entire execution through its final ordering scan. For a Riccati matrix of order $2n$, combining reduction, reordering, graph solve and dense equation residual multiplication preserves $O(n^3+sn^2)$ scalar-core work. Exact algebraic bit cost, evaluator implementation, dense factor-product evaluation and any additional dense residual multiplication are separate costs. [A1, F1, F9, F10, step 1.1, step 2.1, algebra]

3.2 Each exact Newton-Kleinman pass has one Bartels–Stewart solve by [F5], costing $O(n^3)$ by step 2.1. Factorizing $R$ once costs $O(m^3)$. With $m$ controls, forming $B^*X$ and the gain uses $O(n^2m+m^2n)$ arithmetic including triangular solves with this pre-factored $R$; forming $K^*RK$ and $A-BK$ is bounded by the same $O(n^2m+nm^2)$ term. Summing over $J$ passes gives $O(m^3+Jn^3+J(n^2m+nm^2))$. Each SDA step uses one dense $n\times n$ solve and a fixed number of dense products, each $O(n^3)$; [F6] therefore gives $O(Nn^3)$ over $N$ steps. [A1, F5, F6, step 2.1, algebra]

4.1 A small backward error for a computed QZ pair, as supplied by [F7], is a statement about an unstructured nearby pencil. It contains no premise that the perturbation preserves Hamiltonian or symplectic block relations, nor that it preserves positive definiteness of $Q$ or $R$. Consequently acceptance must separately compute the equation residual and symmetry defect, check $R+B^*XB\succ0$ for DARE, and certify the closed-loop stability property in [F8]; [F1] explicitly reports these quantities. Neither ordering a computed form nor its unstructured backward error establishes a structured pencil perturbation or an equation-level stabilizing certificate. [F1, F7, F8, given, algebra] ∎
