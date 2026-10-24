---
id: alg-multiple-shooting-for-nonlinear-bvps
kind: algorithm
title: "Finite-budget multiple shooting for a nonlinear two-point BVP"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-nonlinear-two-point-bvp-and-boundary-residual
  - def-certified-ivp-approximation-and-sensitivity-interface
  - prop-multiple-shooting-residual-block-jacobian
  - alg-finite-budget-newton-for-vector-residuals
  - alg-newton-correction-for-vector-residuals
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "R. Verfürth, Numerical Methods and Stochastics, Part I: Numerical Methods, Lecture Notes"
      url: "https://homepages.rub.de/ruediger.verfuerth/files/lectures/NMS.pdf"
verification:
  precheck: pending
---

## Definition

Fix a mesh $a=t_0<\cdots<t_N=b$, $N\ge1$, and an open product domain of segment starts $(s_0,\ldots,s_N)$ on which $B$ and every certified segment endpoint map are $C^1$, meaning they are totally differentiable with continuous derivative entries. Inputs are an initial tuple in this domain, a residual tolerance $\tau\ge0$, and a correction budget $M\in\mathbb N_0$. Each evaluator supplies an approximate endpoint map $\widetilde\Phi_i$ and its derivative. Form the computed square residual with rows $\widetilde\Phi_i(s_i)-s_{i+1}$ for $0\le i<N$ and $B(s_0,s_N)$; its block Jacobian is the matrix in [[prop-multiple-shooting-residual-block-jacobian]]. For $k=0,1,\ldots,M$, in this order:

1. Evaluate the residual, its Jacobian, and the approximate segment trajectories. If any evaluator fails, return the last valid tuple with status evaluator-failure and no residual certificate.
2. If the Euclidean norm of the residual is at most $\tau$, return the tuple and trajectories with status root-tolerance-met.
3. If $k=M$, return status iteration-budget-exhausted.
4. Solve the Newton correction equation with the displayed square Jacobian using [[alg-newton-correction-for-vector-residuals]]. A singular Jacobian returns status singular-jacobian.
5. If the proposed tuple is outside the open product domain, return the last tuple with status invalid-trial; otherwise accept it as the next iterate.

The procedure applies the finite-budget Newton checks to the $(N+1)d$ variables. Its residual-tolerance status concerns the approximate map that was evaluated. It does not certify that the segment approximations join, that an exact BVP solution exists, or that the procedure converges from arbitrary starts.
