---
id: thm-sqp-finite-precision-kkt-residual-certificate-sound
kind: theorem
title: "The computed KKT residual certificate bounds the exact linear-system residual"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - alg-sqp-finite-precision-kkt-qr-solve-and-residual-check
  - lem-rounded-linear-and-normal-residual-certificates
  - thm-computed-full-rank-least-squares-backward-stability
  - lem-sqp-kkt-matrix-nonsingularity-under-reduced-curvature
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, 2nd ed."
      url: https://www.ime.unicamp.br/~pulino/MT404/TextosOnline/NocedalJ.pdf
      locator: "Chapter 18 §18.1, SQP KKT systems, printed pp. 528–530 / PDF pp. 546–548; finite-precision bounds are derived from the cited suppliers."
---

## Statement

Suppose [[alg-sqp-finite-precision-kkt-qr-solve-and-residual-check]]
successfully returns $\widehat z$ and a certified $\eta$ for a nonsingular
square matrix $K$ and vector $b$. Then
$$\|K\widehat z-b\|_2\le\eta.$$
If $z_*=K^{-1}b$, then also
$$\|\widehat z-z_*\|_2\le\|K^{-1}\|_2\eta.$$
The certificate may be large; the theorem makes no accuracy claim without
an additional bound on $\|K^{-1}\|_2$ and a small certified $\eta$.

## Facts & Assumptions

**Given:** The operationwise arithmetic hypotheses, successful reduced QR
and residual computation, and the returned certificate $\eta$.

[F1] [[alg-sqp-finite-precision-kkt-qr-solve-and-residual-check]] returns
the minimum of the rounded-residual and QR backward-error bounds.

[F2] [[lem-rounded-linear-and-normal-residual-certificates]] bounds the
difference between the exact residual and the computed rounded residual.

[F3] [[thm-computed-full-rank-least-squares-backward-stability]] supplies
the QR backward representation and its perturbation bounds.

[F4] [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]
specifies the arithmetic assumptions required by [F2] and [F3].

[F5] [[lem-sqp-kkt-matrix-nonsingularity-under-reduced-curvature]] provides
nonsingularity for a full-row-rank active KKT matrix with positive reduced
curvature.

[A1] The KKT matrix has full-row-rank constraints and positive curvature on
their null space; all successful-operation hypotheses hold, and the stated
certificate is computed without overflow.

## Proof

1.1 By [F1], a successful return includes successful exact-storage admission, so its stored $K,b$ equal the intended data. By [F5], $K$ is nonsingular. Put $r=K\widehat z-b$ for those same intended data. By [F2], $\|r\|_2\le\|\widehat r\|_2+W$. By [F3], $r=\delta b-\Delta K\widehat z$, so $\|r\|_2\le\beta_b\|b\|_2+\beta_K\|K\|_F\|\widehat z\|_2$. These are precisely the two bounds in [F1]. [A1, F1, F2, F3, F4, F5, algebra]

2.1 Since [F1] returns their minimum, $\|K\widehat z-b\|_2\le\eta$. The exact solution satisfies $Kz_*=b$, hence $K(\widehat z-z_*)=r$; multiplying by $K^{-1}$ gives $\|\widehat z-z_*\|_2\le\|K^{-1}\|_2\|r\|_2\le\|K^{-1}\|_2\eta$. [F1, step 1.1, algebra] ∎
