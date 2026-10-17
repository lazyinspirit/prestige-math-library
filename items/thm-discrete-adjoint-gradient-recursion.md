---
id: thm-discrete-adjoint-gradient-recursion
kind: theorem
title: The reverse recursion is the exact gradient of a finite state-step objective
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps: [def-parameterized-finite-state-step-objective, alg-reverse-mode-automatic-differentiation, thm-reverse-mode-computes-gradient, thm-chain-rule-for-total-derivatives]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "William W. Hager, Runge-Kutta methods in optimal control and the transformed adjoint system, §3"
      url: "https://people.clas.ufl.edu/hager/files/rk.pdf"
    - title: "Michael B. Giles and Niles A. Pierce, An Introduction to the Adjoint Approach to Design, §2.4"
      url: "https://www.its.caltech.edu/~niles/refs/giles00.pdf"
---

## Statement

Use the setting of [[def-parameterized-finite-state-step-objective]]. Write $A_n=D_x\Psi_n(x_n,\theta)$, $B_n=D_\theta\Psi_n(x_n,\theta)$, and let $S_n=D_\theta x_n$. Then
$$S_0=D x_0(\theta),\qquad S_{n+1}=A_nS_n+B_n.$$
Define $p_N=D_x\phi(x_N,\theta)^T$ and, backward for $n=N-1,\ldots,0$,
$$p_n=D_x\ell_n(x_n,\theta)^T+A_n^Tp_{n+1}.$$
The exact gradient of the finite objective is
$$\nabla_\theta J=D_\theta\phi(x_N,\theta)^T+S_0^Tp_0+\sum_{n=0}^{N-1}\bigl(D_\theta\ell_n(x_n,\theta)^T+B_n^Tp_{n+1}\bigr).$$
The recursion is the reverse derivative of the finite graph in exact real arithmetic; it makes no convergence claim about an iteration used to choose $\theta$.

## Facts & Assumptions

**Given:** The open finite state-step graph, its $C^1$ maps, objective, trajectory and parameter in the Statement.

[F1] [[def-parameterized-finite-state-step-objective]]: $x_{n+1}=\Psi_n(x_n,\theta)$ and $J=\phi(x_N,\theta)+\sum_{n<N}\ell_n(x_n,\theta)$ with all displayed maps $C^1$.

[F2] [[alg-reverse-mode-automatic-differentiation]]: reverse mode accumulates each primitive pullback $D_k\phi_j^T\bar z_j$ at every parent slot in reverse topological order.

[F3] [[thm-reverse-mode-computes-gradient]]: reverse mode returns the exact gradient of the finite $C^1$ real-arithmetic graph.

[F4] [[thm-chain-rule-for-total-derivatives]]: the derivative of a composition is the composition of its derivatives.

## Proof

1.1 By the chain rule [F4] applied to $x_{n+1}(\theta)=\Psi_n(x_n(\theta),\theta)$, $S_{n+1}=A_nS_n+B_n$; differentiating the initial map gives $S_0=Dx_0(\theta)$. These are the forward tangent equations for this finite composition. [F1, F4]

1.2 Apply the reverse accumulation rule [F2] to the finite graph of states and objective summands in [F1]. The terminal contribution seeds $p_N=D_x\phi^T$; at each state node $x_n$, its local running-cost edge contributes $D_x\ell_n^T$, while its state-transition edge contributes $A_n^Tp_{n+1}$. Thus the accumulated state cotangent is exactly $p_n$ as defined in the Statement, and the direct parameter edges contribute $D_\theta\phi^T$ and $D_\theta\ell_n^T+B_n^Tp_{n+1}$. By [F3], reverse mode returns the exact derivative of this finite C1 graph. [F1, F2, F3]

2.1 Differentiate the objective in [F1] using the forward sensitivities in step 1.1. The chain rule gives $$\nabla_\theta J=D_\theta\phi^T+S_N^TD_x\phi^T+\sum_{n=0}^{N-1}(D_\theta\ell_n^T+S_n^TD_x\ell_n^T).$$ This is the direct tangent expression, with all derivatives evaluated along the trajectory. [F1, F4, step 1.1]

3.1 The adjoint equation gives $p_n^TS_n=D_x\ell_nS_n+p_{n+1}^TA_nS_n$. Since $S_{n+1}=A_nS_n+B_n$, rearranging yields $$D_x\ell_nS_n=p_n^TS_n-p_{n+1}^TS_{n+1}+p_{n+1}^TB_n.$$ Summing over $n$ telescopes; $p_N=D_x\phi^T$ cancels the terminal tangent term in step 2.1 and leaves $S_0^Tp_0+\sum_n B_n^Tp_{n+1}$. Adding the direct parameter derivatives from step 2.1 gives the displayed adjoint formula. [F1, step 1.1, step 2.1, algebra] ∎

