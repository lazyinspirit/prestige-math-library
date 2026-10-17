---
id: thm-fem-control-proximal-gradient-residual-distance-bound
kind: theorem
title: A certified projected-gradient residual bounds distance to the control-mesh optimum
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - alg-fem-control-proximal-gradient-certified-residual
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - def-countable-choice
  - def-linear-elliptic-pde-constrained-control-problem
  - lem-fem-control-gradient-residual-bound
  - lem-p0-box-projection-is-clipped-cell-average
  - thm-euclidean-semicontinuous-extreme-value-theorem
  - thm-linear-elliptic-reduced-control-gradient-and-hessian
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Michael Hinze, A Variational Discretization Concept in Control Constrained Optimization
      url: "https://www.math.uni-hamburg.de/home/hinze/Psfiles/COAP0204.pdf"
      locator: "§§2–3, printed pp. 3–7: strongly convex reduced control objectives and finite-element discretization context."
---

## Statement

Assume Countable Choice. Let $U_h$ be a finite-dimensional cellwise-constant control space with nonempty box $Q_h$, and restrict the exact reduced objective $\widehat J$ of [[def-linear-elliptic-pde-constrained-control-problem]] to $Q_h$. Let $q_h^*$ be its minimizer and let $L_h\ge\|S|_{U_h}\|^2+\alpha$, where $S$ is the linear part of the continuous state-to-observation map and $\alpha>0$. The finite-budget algorithm [[alg-fem-control-proximal-gradient-certified-residual]] terminates after at most $N$ evaluations, returning \texttt{inconclusive}, \texttt{budget-exhausted}, or \texttt{certified}. Every \texttt{certified} return at $q\in Q_h$ with reported bound $\rho=\tilde\rho+\delta/L_h$ satisfies $\|q-P_{Q_h}(q-\nabla\widehat J(q)/L_h)\|_U\le\rho\le\tau$, and consequently $\|q-q_h^*\|_U\le(L_h/\alpha)\rho=(L_h/\alpha)\tilde\rho+\delta/\alpha$. This bounds distance to the control-mesh minimizer of the exact PDE objective; it is not an error estimate between that minimizer and the unrestricted PDE optimum.

## Facts & Assumptions

**Given:** Countable Choice; a nonempty finite-dimensional cellwise-constant box $Q_h$; the exact reduced objective; $\alpha>0$; a valid $L_h$; and the finite algorithm's stated data and residual evaluation rules.

[F1] The FE state and adjoint residuals imply $\|g(q_k)-\tilde g_k\|_U\le\delta_k$ ([[lem-fem-control-gradient-residual-bound]]).

[F2] The projection onto the cellwise box clips cell averages and is nonexpansive ([[lem-p0-box-projection-is-clipped-cell-average]]).

[F3] The exact reduced objective has gradient $g=\nabla\widehat J$ and Hessian $S^*S+\alpha I$ ([[thm-linear-elliptic-reduced-control-gradient-and-hessian]]).

[F4] The Hessian bound in [F3] implies $\alpha$-strong convexity of $\widehat J$ ([[thm-linear-elliptic-reduced-control-gradient-and-hessian]]).

[F5] A continuous function on a compact finite-dimensional box attains its minimum ([[thm-euclidean-semicontinuous-extreme-value-theorem]]).

[F6] A self-adjoint endomorphism of a finite-dimensional real-inner-product space has an orthonormal eigenbasis ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]).

[F7] The algorithm issues \texttt{certified} only when the computed residual plus the adjoint-gradient error bound is at most $\tau$ ([[alg-fem-control-proximal-gradient-certified-residual]]).

[F8] The algorithm performs at most $N$ evaluations and returns the stated failure or exhaustion status when the certificate test does not succeed ([[alg-fem-control-proximal-gradient-certified-residual]]).

[A1] Countable Choice is used through the state-adjoint well-posedness and Hilbert-space Riesz results in [F1] and [F3] ([[def-countable-choice]]).

## Proof

1.1 Put $g=\nabla\widehat J$, $T(q)=P_{Q_h}(q-g(q)/L_h)$, and $\widetilde T_k=P_{Q_h}(q_k-\tilde g_k/L_h)$. By [F1] and nonexpansiveness [F2], $\|T(q_k)-\widetilde T_k\|_U\le\delta_k/L_h$. Since $\tilde\rho_k=\|q_k-\widetilde T_k\|_U$, the triangle inequality gives $\|q_k-T(q_k)\|_U\le\tilde\rho_k+\delta_k/L_h=\rho_k$. [A1, F1, F2, given, algebra]

1.2 Let $P_{U_h}$ be the orthogonal projection onto cellwise constants. The clipped-cell-average formula [F2] gives $P_{Q_h}(w)=P_{Q_h}(P_{U_h}w)$. For $x,y\in U_h$, [F3] yields $g(x)-g(y)=(S^*S+\alpha I)(x-y)$, so applying $P_{U_h}$ gives $H_h(x-y)$, where $H_h=P_{U_h}(S^*S+\alpha I)|_{U_h}$. Its Rayleigh quotients lie in $[\alpha,L_h]$; [F6] therefore implies $\|I-H_h/L_h\|\le1-\alpha/L_h$. Nonexpansiveness now gives $\|T(x)-T(y)\|_U\le(1-\alpha/L_h)\|x-y\|_U$. [A1, F2, F3, F6, given, algebra]

1.3 Since $Q_h$ is a nonempty compact box in finite-dimensional $U_h$, [F5] gives a minimizer, and $\alpha$-strong convexity [F4] makes it unique. For any $v\in Q_h$, the feasible segment from $q_h^*$ to $v$ and differentiability imply $(g(q_h^*),v-q_h^*)_U\ge0$. Set $w=q_h^*-g(q_h^*)/L_h$. Then $\|w-v\|_U^2-\|w-q_h^*\|_U^2=\|v-q_h^*\|_U^2+(2/L_h)(g(q_h^*),v-q_h^*)_U\ge0$. Thus $q_h^*$ is the unique nearest point in $Q_h$ to $w$, so $T(q_h^*)=q_h^*$. [A1, F3, F4, F5, given, algebra]

2.1 By [F7], a \texttt{certified} return is issued only when $\rho_k\le\tau$, so step 1.1 proves the reported bound for the exact mapping residual. By [F8], each evaluation is finite and at most $N$ are performed; the algorithm therefore terminates with one of its stated statuses. [F7, F8, step 1.1, given, algebra]

2.2 For $r=\|q-T(q)\|_U$, steps 1.2–1.3 and the triangle inequality imply $\|q-q_h^*\|_U\le r+\|T(q)-T(q_h^*)\|_U\le r+(1-\alpha/L_h)\|q-q_h^*\|_U$. Rearranging yields $\|q-q_h^*\|_U\le(L_h/\alpha)r$. [step 1.2, step 1.3, algebra]

3.1 On a \texttt{certified} return, step 1.1 gives $r\le\rho=\tilde\rho+\delta/L_h$; substituting into step 2.2 proves both displayed distance bounds. [step 1.1, step 2.2, algebra] ∎
## Remarks

The objective in this theorem uses the exact continuous PDE state map and optimizes only over the finite-dimensional control box. Its finite-element state/adjoint solves are gradient approximations certified by the full Strang ledger in [[lem-fem-control-gradient-residual-bound]].
