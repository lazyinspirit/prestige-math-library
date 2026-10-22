---
id: prop-ip-discrete-adjoint-gradient-and-residual-status
kind: proposition
title: Certified discrete-adjoint residuals give sound finite statuses
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-ip-pde-solver-admissibility-contract
  - lem-ip-finite-element-reduced-gradient-from-discrete-adjoint
  - lem-ip-linear-finite-element-solve-residual-controls-state-error
  - def-euclidean-inner-product
  - def-operator-norm
  - thm-nearest-point-in-a-nonempty-closed-convex-set
  - lem-projection-onto-closed-convex-set-is-nonexpansive
  - thm-cauchy-schwarz-and-the-euclidean-norm
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The finite-dimensional certificate and projection argument is choice-free once the model supplies its state and adjoint error bounds."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Hannes Meinlschmidt, Optimization with Partial Differential Equations, complete lecture notes, §3.2"
      url: "https://hannes.meinlschmidt.eu/lecture_notes/pde_opt.pdf"
    - title: "Michael Hinze, A Variational Discretization Concept in Control Constrained Optimization: The Linear-Quadratic Case, §§1–3"
      url: "https://www.math.uni-hamburg.de/home/hinze/Psfiles/COAP0204.pdf"
    - title: "Fernando Gaspoz, Christian Kreuzer, Andreas Veeser, and Winnifried Wollner, A Posteriori Error Analysis for Optimization with PDE Constraints"
      url: "https://arxiv.org/pdf/2503.13170"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: pass
---

## Statement

Let $Q_h\subseteq\mathbb R^m$ be a nonempty closed convex set and let $q\in Q_h$. Write $u=S_h(q)$, $p=p_h(q)$, and $g_h(q)=\nabla\Phi_h(q)$ for the exact finite-element state, exact discrete adjoint, and exact discrete-objective gradient. Suppose a solver supplies $\widetilde u,\widetilde p$, a forward output $\widetilde F_h=G_h(q,\widetilde u)$, and a computed gradient $\widetilde g_h=\nabla_qJ_h(q,\widetilde u)-(D_qR_h(q,\widetilde u))^T\widetilde p$. It also supplies finite nonnegative bounds $\eta_u,\eta_p,P,L_{J,u},L_{R,u},M_q,L_{G,u}$ satisfying
$$
\|u-\widetilde u\|_{V_h}\le\eta_u,\quad \|p-\widetilde p\|_{V_h}\le\eta_p,\quad \|p\|_{V_h}\le P,
$$
$$
\|\nabla_qJ_h(q,u)-\nabla_qJ_h(q,\widetilde u)\|\le L_{J,u}\eta_u,
$$
$$
\|(D_qR_h(q,u))^T-(D_qR_h(q,\widetilde u))^T\|\le L_{R,u}\eta_u,\quad \|(D_qR_h(q,\widetilde u))^T\|\le M_q,
$$
and $\|G_h(q,u)-G_h(q,\widetilde u)\|_{Y_h}\le L_{G,u}\eta_u$. Define
$$
\varepsilon_g:=(L_{J,u}+L_{R,u}P)\eta_u+M_q\eta_p,\qquad \varepsilon_F:=L_{G,u}\eta_u.
$$
Then $\|\widetilde g_h-g_h(q)\|\le\varepsilon_g$ and $\|\widetilde F_h-F_h(q)\|_{Y_h}\le\varepsilon_F$. For $L>0$, define
$$
G_L(q):=L\bigl(q-P_{Q_h}(q-g_h(q)/L)\bigr),\qquad \widetilde G_L(q):=L\bigl(q-P_{Q_h}(q-\widetilde g_h/L)\bigr).
$$
Then $$\|G_L(q)\|_2\le\|\widetilde G_L(q)\|_2+\varepsilon_g,\qquad \|F_h(q)-y^\delta\|_{Y_h}\le\|\widetilde F_h-y^\delta\|_{Y_h}+\varepsilon_F.$$
Thus the finite-element algorithm may certify discrete projected stationarity and discrete discrepancy from these bounds. The state and adjoint residuals must first be converted to valid $\eta_u,\eta_p$ bounds under the chosen model's hypotheses; raw residuals alone do not imply the asserted gradient or mesh error.

## Statement references

[[def-ip-pde-solver-admissibility-contract|Finite-element state, adjoint, and error-bound contract]]

[[lem-ip-finite-element-reduced-gradient-from-discrete-adjoint|Exact reduced gradient from the finite-element discrete adjoint]]

[[lem-ip-linear-finite-element-solve-residual-controls-state-error|Linear finite-element residual-to-error certificate]]

[[thm-nearest-point-in-a-nonempty-closed-convex-set|Existence and uniqueness of Euclidean nearest-point projection]]

[[lem-projection-onto-closed-convex-set-is-nonexpansive|Nonexpansiveness of Euclidean projection]]

[[def-operator-norm|Induced operator norm bound]]

[[thm-cauchy-schwarz-and-the-euclidean-norm|Euclidean norm and triangle inequality]]

[Hannes Meinlschmidt, *Optimization with Partial Differential Equations*, complete lecture notes](https://hannes.meinlschmidt.eu/lecture_notes/pde_opt.pdf)

[Michael Hinze, *A Variational Discretization Concept in Control Constrained Optimization: The Linear-Quadratic Case*](https://www.math.uni-hamburg.de/home/hinze/Psfiles/COAP0204.pdf)

[Fernando Gaspoz, Christian Kreuzer, Andreas Veeser, and Winnifried Wollner, *A Posteriori Error Analysis for Optimization with PDE Constraints*](https://arxiv.org/pdf/2503.13170)

## Facts & Assumptions

**Given:** The finite-element model, $q\in Q_h$, exact state $u=S_h(q)$, exact adjoint $p=p_h(q)$, the solver estimates and constants in the Statement, data $y^\delta$, and $L>0$.

[A1] The model contract supplies $\|u-\widetilde u\|\le\eta_u$, $\|p-\widetilde p\|\le\eta_p$, $\|p\|\le P$, the derivative bounds $L_{J,u},L_{R,u},M_q$, and the observation bound $L_{G,u}\eta_u$ ([[def-ip-pde-solver-admissibility-contract]]).

[F1] The exact reduced gradient is $g_h(q)=\nabla_qJ_h(q,u)-(D_qR_h(q,u))^Tp$ ([[lem-ip-finite-element-reduced-gradient-from-discrete-adjoint]]).

[F2] Every point in a nonempty closed convex subset of finite-dimensional Euclidean space has a unique nearest point ([[thm-nearest-point-in-a-nonempty-closed-convex-set]]).

[F3] Euclidean projection onto a nonempty closed convex set is nonexpansive ([[lem-projection-onto-closed-convex-set-is-nonexpansive]]).

[F4] For a bounded linear map $T$, the induced operator norm gives $\|Tx\|\le\|T\|\|x\|$ ([[def-operator-norm]]).

[F5] Euclidean norms satisfy the triangle inequality ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[F6] For linear finite-element state and adjoint systems, residual upper bounds and separately certified inverse-norm bounds imply the error estimates $\eta_u,\eta_p$; nonlinear systems require a separate model-specific stability argument ([[lem-ip-linear-finite-element-solve-residual-controls-state-error]]).

## Proof

1.1 By [F1], the exact discrete gradient has the stated adjoint formula. In a linear finite-element state/adjoint branch, [F6] supplies one residual-to-error path for the contract's $\eta_u,\eta_p$ values when inverse-norm bounds are certified; a nonlinear model needs its own stability argument. Using the contract estimates in [A1], $g_h(q)-\widetilde g_h=\nabla_qJ_h(q,u)-\nabla_qJ_h(q,\widetilde u)-(D_qR_h(q,u))^Tp+(D_qR_h(q,\widetilde u))^T\widetilde p$. Add and subtract $(D_qR_h(q,\widetilde u))^Tp$. The first objective-gradient difference has norm at most $L_{J,u}\eta_u$ by [A1]. The derivative-matrix difference term has norm at most $L_{R,u}\eta_u\|p\|\le L_{R,u}P\eta_u$ by [A1] and [F4]. The remaining term has norm at most $M_q\|p-\widetilde p\|\le M_q\eta_p$ by [A1] and [F4]. Summing these three bounds gives $\|\widetilde g_h-g_h(q)\|\le\varepsilon_g$. The observation certificate in [A1] directly gives $\|\widetilde F_h-F_h(q)\|\le\varepsilon_F$. [A1, F1, F4, F6, algebra]

2.1 By [F2], the projections in $G_L(q)$ and $\widetilde G_L(q)$ exist and are unique. Put $x=q-\widetilde g_h/L$ and $z=q-g_h(q)/L$. Nonexpansiveness [F3] and step 1.1 give $\|\widetilde G_L(q)-G_L(q)\|_2=L\|P_{Q_h}(x)-P_{Q_h}(z)\|_2\le L\|x-z\|_2=\|\widetilde g_h-g_h(q)\|_2\le\varepsilon_g$. The triangle inequality [F5] now gives $\|G_L(q)\|_2\le\|\widetilde G_L(q)\|_2+\varepsilon_g$. [F2, F3, F5, step 1.1, algebra]

3.1 The triangle inequality [F5] and step 1.1 give $\|F_h(q)-y^\delta\|_{Y_h}\le\|F_h(q)-\widetilde F_h\|_{Y_h}+\|\widetilde F_h-y^\delta\|_{Y_h}\le\varepsilon_F+\|\widetilde F_h-y^\delta\|_{Y_h}$. Together with step 2.1, this proves both certificate inequalities. [F5, step 1.1, step 2.1, algebra] ∎

## Remarks

The certificates $\eta_u,\eta_p$ are model-specific consequences of residuals and stability constants; they must be justified before this proposition is applied. The published linear elliptic finite-element residual result has its own continuous-objective and full Strang hypotheses; it is not substituted for the discrete target error bounds above.
