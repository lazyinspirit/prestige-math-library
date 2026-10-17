---
id: thm-fem-control-active-set-sqp-finite-budget-certificate
kind: theorem
title: Finite SQP status is sound and the exact local branch inherits OPT6 conditions
status: published
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

Every `active-kkt-residual-certified` return of [[alg-fem-control-active-set-sqp-with-finite-residual-status]] with reported bound $\eta$ satisfies the exact active linear solve residual bound $\|K s+F_A(z)\|_2\le\eta\le\tau$. For a quadratic FE reduced objective with affine equality constraints and affine active inequalities, in particular a program constrained only by a box, this also bounds the exact active KKT residual of the returned next point. On a nonlinear reduced problem, if the true active set is identified and the OPT6 hypotheses hold, exact-arithmetic full steps started sufficiently close converge quadratically to the active KKT pair. The finite-precision residual bound alone does not imply forward error, box optimality, or an SQP accuracy rate.

## Facts & Assumptions
**Given:** A returned finite-budget status and its active set, computed residual upper bound, and, for the separate local convergence statement, a nonlinear program satisfying the stated OPT6 conditions.

[F1] The finite algorithm returns the finite-precision QR vector as its step and reports `active-kkt-residual-certified` only after checking $\eta\le\tau$; it does not label box feasibility or global optimality ([[alg-fem-control-active-set-sqp-with-finite-residual-status]]).

[F2] The OPT6 QR certificate bounds the exact residual of its active KKT linear system; the corresponding solution error additionally depends on $\|K^{-1}\|$ ([[thm-sqp-finite-precision-kkt-residual-certificate-sound]]).

[F3] The exact Hessian/local branch has quadratic convergence under identified active set, LICQ, strict complementarity, positive reduced curvature, locally Lipschitz Jacobian, and a sufficiently close start ([[thm-sqp-exact-hessian-local-quadratic-convergence]]).


[A1] The QR residual certificate’s floating-point assumptions and no-overflow checks hold on any returned certified branch.

## Proof

1.1 By [F1], a certified return contains a computed linear solve residual bound $\eta\le\tau$. Applying [F2] gives the exact inequality $\|Ks+F_A(z)\|_2\le\eta\le\tau$. The theorem supplies no smaller bound unless the reported $\eta$ is smaller. [A1, F1, F2, given, algebra]

2.1 Write the quadratic objective as $\phi(x)=\tfrac12x^TQx+c^Tx+c_0$ with symmetric $Q$, and stack all equalities and active inequalities as $c_A(x)=Gx-d$. With their stacked multiplier $\mu$, the algorithm's convention gives $F_A(x,\mu)=(Qx+c+G^T\mu,Gx-d)$ and $K=\left[\begin{smallmatrix}Q&G^T\\G&0\end{smallmatrix}\right]$. Thus $F_A$ is affine in the combined primal-dual variable and $F_A(z+s)=F_A(z)+Ks$. Step 1.1 therefore bounds the returned point's active KKT residual. Affine box inequalities alone do not give this identity when an equality constraint is nonlinear. [F1, step 1.1, given, algebra]

3.1 In the separate exact local branch, the hypotheses listed in [F3] imply the active KKT Jacobian is nonsingular and locally Lipschitz. The cited OPT6 Newton theorem then applies to the exact full-step active-system iteration started sufficiently near its root and gives quadratic convergence. This conclusion is conditional on those hypotheses and is independent of finite-budget status. [F3, given, algebra] ∎

## Remarks

The exact local convergence conclusion remains conditional on the OPT6 hypotheses and is independent of this finite-budget residual status. No exact-solve status implies a small forward error without a bound on the inverse active KKT matrix.
