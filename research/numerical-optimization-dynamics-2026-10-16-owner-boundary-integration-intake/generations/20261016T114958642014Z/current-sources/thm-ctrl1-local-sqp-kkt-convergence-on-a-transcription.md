---
id: thm-ctrl1-local-sqp-kkt-convergence-on-a-transcription
kind: theorem
title: "Exact-Hessian SQP converges locally to a regular transcription KKT point"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 10
deps: [def-ctrl1-smooth-transcription-data, alg-ctrl1-runge-kutta-shooting-and-collocation-transcription, alg-ctrl1-finite-budget-transcription-solver-dispatch, def-inequality-constrained-program-and-kkt-geometry, thm-second-order-sufficient-condition-on-the-critical-cone, alg-sqp-exact-hessian-newton-step, thm-sqp-exact-hessian-local-quadratic-convergence, cor-finite-dimensional-normed-spaces-are-banach, thm-banach-fixed-point]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, 2nd ed."
      url: "https://www.ime.unicamp.br/~pulino/MT404/TextosOnline/NocedalJ.pdf"
      locator: "Chapter 18 §§18.1–18.2 and §18.10, printed pp. 528–537 and 562–563: Newton SQP equations and exact-Hessian local convergence conditions."
    - title: "S. Gros and M. Diehl, Numerical Optimal Control, draft course manuscript, Chapter 13 §13.4"
      url: "https://www.syscop.de/files/2019ss/NOC/book-NOCSE.pdf"
      locator: "Printed pp. 244–248: local NLP solution methods for direct optimal-control transcriptions."
---

## Statement

Fix a mesh and a finite transcription generated from the pointwise smooth data in [[def-ctrl1-smooth-transcription-data]]. Suppose its NLP functions have continuous derivatives through order three on an open neighborhood of a KKT point $(z_*,\mu_*)$, LICQ holds there, every active inequality multiplier is strictly positive, and the second-order sufficient condition holds on the critical cone. Then, after the correct active set is identified, the exact-Hessian full-step branch using [[alg-sqp-exact-hessian-newton-step]] is well-defined from a sufficiently close primal-dual start and converges quadratically to $(z_*,\mu_*)$. The finite-budget dispatch of [[alg-ctrl1-finite-budget-transcription-solver-dispatch]] may terminate before this local convergence is realized.

This also has the following conditional mesh-family conclusion. For each mesh index $N$, let $\mathcal K_N:Z_N\to Y_N$ be the square active-set KKT residual map of a finite transcription, with finite-dimensional normed spaces $Z_N,Y_N$, and let $z_N^0\in Z_N$ be a reference primal-dual pair. Let $Z$ be a common Banach space containing the continuous primal and multiplier fields, with bounded linear reconstruction maps $E_N:Z_N\to Z$ that use the same fixed norms and satisfy $\sup_N\|E_N\|\le C_E$. Suppose a continuous KKT pair $z^\dagger\in Z$ and mesh-consistent constraints satisfy $\|E_Nz_N^0-z^\dagger\|_Z\to0$ and $\|\mathcal K_N(z_N^0)\|_{Y_N}\le\varepsilon_N\to0$. Suppose the discrete sensitivity maps $D\mathcal K_N(z_N^0):Z_N\to Y_N$ are invertible with $\|D\mathcal K_N(z_N^0)^{-1}\|\le\beta$ uniformly, and $D\mathcal K_N$ is $L$-Lipschitz on a common radius $r$ about each $z_N^0$, with constants independent of $N$. For all sufficiently large $N$, require $2\beta\varepsilon_N\le r$ and $2\beta^2L\varepsilon_N\le\frac12$. Then there is a unique active-set KKT root $z_N^*$ in the radius-$2\beta\varepsilon_N$ ball, and $\|E_Nz_N^*-z^\dagger\|_Z\le\|E_Nz_N^0-z^\dagger\|_Z+2C_E\beta\varepsilon_N\to0$. If these roots satisfy LICQ, strict complementarity, SOSC, and a common local full-step basin for exact-Hessian SQP, then the exact-Hessian iterates from starts in that basin converge quadratically to $z_N^*$ for each such mesh. The varying systems are compared through the reconstruction maps and their fixed norms; this conclusion makes no global optimizer, path-feasibility, or finite-budget convergence claim.

## Facts & Assumptions

**Given:** A fixed smooth finite transcription, a KKT pair, LICQ, strict complementarity, the second-order sufficient condition, a correct identified active set, and an initial primal-dual point sufficiently close to the KKT pair.

[F1] The transcription is a finite NLP with the objective and constraints returned by [[alg-ctrl1-runge-kutta-shooting-and-collocation-transcription]]. The C3 regularity of these actual reduced functions on the stated neighborhood is an explicit hypothesis; smooth data alone do not certify a differentiable implicit-stage solve branch ([[def-ctrl1-smooth-transcription-data]]).

[F2] The KKT convention is $g_i\le0$ with nonnegative active multipliers ([[def-inequality-constrained-program-and-kkt-geometry]]).

[F3] The exact-Hessian local SQP theorem gives quadratic convergence for a $C^2$ NLP with LICQ, strict complementarity, SOSC, and locally Lipschitz active-KKT Jacobian ([[thm-sqp-exact-hessian-local-quadratic-convergence]]).

[F4] The strict second-order sufficient condition used here is positivity of the Lagrangian Hessian on every nonzero critical-cone direction ([[thm-second-order-sufficient-condition-on-the-critical-cone]]).

[F5] The actual NLP functions are $C^3$ by [F1]. On a closed ball compactly contained in their open $C^3$ neighborhood, their third derivatives are bounded, so their Hessians and the active KKT Jacobian are locally Lipschitz.

[F6] The active-set KKT Jacobian and full-step exact-Hessian SQP branch have the local properties stated in the fixed-system theorem ([[thm-sqp-exact-hessian-local-quadratic-convergence]]).

[F7] Each finite-dimensional normed space $Z_N$ is complete ([[cor-finite-dimensional-normed-spaces-are-banach]]). A closed ball in $Z_N$ is complete: every Cauchy sequence in the ball converges in $Z_N$, and continuity of the norm keeps its limit in the ball. A contraction of a nonempty closed ball into itself therefore has a unique fixed point by [[thm-banach-fixed-point]].

[A1] For the mesh-family conclusion, the reconstruction, residual-consistency, uniform inverse, uniform Jacobian-Lipschitz, active-set, and common-basin assumptions in the Statement hold.

## Proof

1.1 A fixed transcription has finitely many decision variables. By the regularity hypothesis in the Statement and [F1], its actual objective and constraint functions have continuous derivatives through order three on a neighborhood of the KKT point. For an implicit-stage transcription this hypothesis includes the selected local stage-solve branch; no differentiability of that branch is inferred from the smooth-data definition alone. [F1, given]

1.2 For the mesh-family branch, set $A_N=D\mathcal K_N(z_N^0)$ and $T_N(z)=z-A_N^{-1}\mathcal K_N(z)$. If $\varepsilon_N=0$, $z_N^0$ is already a root. Otherwise take the closed ball of radius $R_N=2\beta\varepsilon_N$. The residual bound gives $\|T_N(z_N^0)-z_N^0\|\le\beta\varepsilon_N=R_N/2$. For $z$ in that ball, the uniform Lipschitz bound gives $\|DT_N(z)\|=\|I-A_N^{-1}D\mathcal K_N(z)\|\le\beta L R_N\le1/2$. Thus $T_N$ maps the ball into itself and is a contraction. Completeness [F7] gives its unique fixed point $z_N^*$, which is exactly the unique root of $\mathcal K_N$ there and satisfies $\|z_N^*-z_N^0\|\le R_N$. [A1, F7, algebra]

2.1 The KKT map for the identified active set is built from the first derivatives of those objective and constraint functions. Its Jacobian is locally Lipschitz by continuity and local boundedness of their third derivatives in [F5]. The assumed LICQ, strict complementarity, and SOSC from [F4] are exactly the remaining hypotheses of [F3]. [F2, F3, F4, F5, given, step 1.1]

3.1 Apply [F3] to the active KKT system. It provides a neighborhood in which exact-Hessian full Newton steps are defined and converge quadratically from a sufficiently close start, which is the asserted fixed-mesh branch. The dispatcher has a finite outer cap, so it can stop before the local sequence converges. [F3, given, step 2.1, algebra]

4.1 By boundedness of $E_N$, $\|E_Nz_N^*-z^\dagger\|_Z\le C_E\|z_N^*-z_N^0\|+\|E_Nz_N^0-z^\dagger\|_Z\le2C_E\beta\varepsilon_N+\|E_Nz_N^0-z^\dagger\|_Z$, which tends to zero. The assumed LICQ, strict complementarity, SOSC, local Lipschitz conditions, and common basin let [F6] apply at each $z_N^*$; hence each exact-Hessian full-step sequence from that basin converges quadratically. [A1, F6, step 1.2, algebra] ∎

