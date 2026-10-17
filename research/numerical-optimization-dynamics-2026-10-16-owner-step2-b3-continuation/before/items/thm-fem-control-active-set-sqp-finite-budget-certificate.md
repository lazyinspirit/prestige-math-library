---
id: thm-fem-control-active-set-sqp-finite-budget-certificate
kind: theorem
title: Finite SQP status is sound and the exact local branch inherits OPT6 conditions
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 8
deps:
  - alg-fem-control-active-set-sqp-with-finite-residual-status
  - thm-sqp-exact-hessian-local-quadratic-convergence
  - thm-sqp-finite-precision-kkt-residual-certificate-sound
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, 2nd ed."
      url: "https://www.ime.unicamp.br/~pulino/MT404/TextosOnline/NocedalJ.pdf"
      locator: "Chapter 18 §18.1 and Theorem 18.4, printed pp. 528–530 and 563–564 / PDF pp. 546–548 and 581–582: Newton–SQP KKT system and conditional local quadratic convergence; finite-precision residual claims come from the explicit OPT6 suppliers."
---

## Statement

Every `active-kkt-residual-certified` return of [[alg-fem-control-active-set-sqp-with-finite-residual-status]] with reported bound $\eta$ satisfies the exact active linear solve residual bound $\|K s+F_A(z)\|_2\le\eta\le\tau$. For a quadratic FE reduced objective and affine box constraints, this also bounds the exact active KKT residual of the returned next point. On a nonlinear reduced problem, if the true active set is identified and the OPT6 hypotheses hold, exact-arithmetic full steps started sufficiently close converge quadratically to the active KKT pair. The finite-precision residual bound alone does not imply forward error, box optimality, or an SQP accuracy rate.

## Facts & Assumptions
**Given:** A returned finite-budget status and its active set, computed residual upper bound, and, for the separate local convergence statement, a nonlinear program satisfying the stated OPT6 conditions.

[F1] The finite algorithm reports `certified` only after checking $\eta\le\tau$ and does not label box feasibility or global optimality ([[alg-fem-control-active-set-sqp-with-finite-residual-status]]).

[F2] The OPT6 QR certificate bounds the exact residual of its active KKT linear system; the corresponding solution error additionally depends on $\|K^{-1}\|$ ([[thm-sqp-finite-precision-kkt-residual-certificate-sound]]).

[F3] For an affine KKT map $F_A$, $F_A(z+s)=F_A(z)+K s$; the exact Hessian/local branch has quadratic convergence only under identified active set, LICQ, strict complementarity, positive reduced curvature, locally Lipschitz Jacobian, and a sufficiently close start ([[thm-sqp-exact-hessian-local-quadratic-convergence]]).


[A1] The QR residual certificate’s floating-point assumptions and no-overflow checks hold on any returned certified branch.

## Proof

1.1 By [F1], a certified return contains a computed linear solve residual bound $\eta\le\tau$. Applying [F2] gives the exact inequality $\|Ks+F_A(z)\|_2\le\eta\le\tau$. The theorem supplies no smaller bound unless the reported $\eta$ is smaller. [A1, F1, F2, given, algebra]

2.1 If the reduced objective is quadratic and active constraints are affine, then the active KKT map is affine with Jacobian $K$. Therefore $F_A(z+s)=F_A(z)+Ks$, and step 1.1 is exactly a bound for the returned point’s active-system residual. [F3, step 1.1, given, algebra]

3.1 In the separate exact local branch, the hypotheses listed in [F3] imply the active KKT Jacobian is nonsingular and locally Lipschitz. The cited OPT6 Newton theorem then applies to the exact full-step active-system iteration started sufficiently near its root and gives quadratic convergence. This conclusion is conditional on those hypotheses and is independent of finite-budget status. [F3, given, algebra] ∎

## Remarks

The assigned design explicitly imports the conditions of [[thm-sqp-exact-hessian-local-quadratic-convergence]], while this batch’s declared `requires` omits its owning page. The implementation is therefore escalated for the owner’s dependency reconciliation. No exact-solve status implies a small forward error without a bound on the inverse active KKT matrix.
