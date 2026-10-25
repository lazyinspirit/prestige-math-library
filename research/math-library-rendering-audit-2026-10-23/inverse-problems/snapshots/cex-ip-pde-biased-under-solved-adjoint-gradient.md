---
id: cex-ip-pde-biased-under-solved-adjoint-gradient
kind: counterexample
title: An unchecked under-solved adjoint can reverse the reduced gradient
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - alg-ip-finite-element-pde-tikhonov
  - thm-ip-finite-element-pde-tikhonov-status-soundness-and-termination
  - def-ip-pde-solver-admissibility-contract
  - lem-ip-finite-element-reduced-gradient-from-discrete-adjoint
  - prop-ip-discrete-adjoint-gradient-and-residual-status
proof_strategy: direct
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: pass
---

## Statement refuted

False claim: In every finite-dimensional state-residual Tikhonov model, solving the state exactly guarantees that substituting any approximate adjoint vector preserves the sign of the exact reduced gradient, even when no adjoint-equation residual is checked.

## Statement references

[[def-ip-pde-solver-admissibility-contract|State, adjoint, and residual contract]]

[[lem-ip-finite-element-reduced-gradient-from-discrete-adjoint|Exact reduced-gradient formula from an implicit state equation]]

## Facts & Assumptions

**Given:** Take $\Theta_h=V_h=Y_h=O_h=Q_h=\mathbb R$, residual $R_h(q,u)=u-q$, observation $G_h(q,u)=u$, datum $y^\delta=1$, reference parameter $q_0=0$, penalty $\alpha=1$, and evaluation at $q=0$. The state branch is $S_h(q)=q$, so $D_uR_h=1$ is invertible and the exact state at $q=0$ is $u=0$.

[F1] In the finite-element residual contract, $p$ solves $(D_uR)^Tp=\nabla_uJ(q,u)$ and the exact reduced gradient is $\nabla_qJ(q,u)-(D_qR)^Tp$ ([[def-ip-pde-solver-admissibility-contract]], [[lem-ip-finite-element-reduced-gradient-from-discrete-adjoint]]).

[F2] The inversion algorithm accepts a state/adjoint result only when its certified residual bounds meet their declared tolerances; otherwise it returns `linear-solve-failed` ([[alg-ip-finite-element-pde-tikhonov]]).

[F3] The proposition's status guarantee requires a valid bound on the approximate gradient error ([[prop-ip-discrete-adjoint-gradient-and-residual-status]]).

[F4] The status theorem asserts that `linear-solve-failed` is returned only on the corresponding failed solver or solver-certificate checks ([[thm-ip-finite-element-pde-tikhonov-status-soundness-and-termination]]).

## Counterexample

1.1 At $q=0$, the unique state is $u=0$ because $R(0,u)=u=0$. Its state residual is $|R(0,0)|=0$, so the state solve is exact. Also $D_uR=1$ and $D_qR=-1$. [given, F1, algebra]

2.1 Here $J(q,u)=\frac12(u-1)^2+\frac12q^2$, so $\nabla_uJ(0,0)=-1$ and $\nabla_qJ(0,0)=0$. The exact adjoint equation is $p=-1$. By [F1], the exact reduced gradient is $0-(-1)(-1)=-1$. The same value follows by differentiating $\Phi(q)=\tfrac12(q-1)^2+\tfrac12q^2$. [F1, step 1.1, algebra]

2.2 If an unchecked iterative adjoint returns $\widetilde p=1$, its computed reduced gradient is $\widetilde g=\nabla_qJ(0,0)-(D_qR)^T\widetilde p=0-(-1)(1)=1$, the opposite sign. Its exact adjoint-equation residual is $|(D_uR)^T\widetilde p-\nabla_uJ(0,0)|=|1-(-1)|=2$. [given, F1, step 1.1, algebra]

3.1 With declared adjoint residual tolerance $\tau_p=1$, the residual in step 2.2 exceeds tolerance. By [F2], the algorithm rejects this vector as a solver result with status `linear-solve-failed`; it cannot receive `converged`. Step 2.2 nevertheless exhibits opposite gradient signs when the unchecked vector is substituted. Thus an exact state solve alone does not determine the gradient sign. Treating $\widetilde p$ as a contract-valid solver result would violate the adjoint-residual requirement. The gradient-error certificate [F3] remains valid: take $\eta_u=0$, $\eta_p=2$, $P=M_q=L_{G,u}=1$, and $L_{J,u}=L_{R,u}=0$, which satisfy all the proposition's bounds and give $\varepsilon_g=2=|\widetilde g-\nabla\Phi(0)|$. This error bound permits the observed sign reversal. [F2, F3, step 2.2, algebra] ∎
