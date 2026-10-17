---
id: thm-scaled-householder-qr-backward-stability
kind: theorem
title: "The scaled Householder QR implementation is backward stable"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - lem-scaled-householder-step-meets-local-backward-error-premise
  - thm-householder-qr-is-backward-stable-in-the-standard-floating-point-model
  - thm-successive-householder-or-givens-transformations-produce-full-and-reduced-qr-with-operation-counts
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  precheck: pending
sources:
  references:
    - title: "Fundamentals of Numerical Computation, floating-point arithmetic"
      url: https://fncbook.com/floating-point/
    - title: "Fundamentals of Numerical Computation, Householder triangularization"
      url: https://fncbook.com/house/
    - title: "Fundamentals of Numerical Computation, QR factorization and least squares"
      url: https://fncbook.com/qr/
    - title: "Stuart and Voss, Matrix Analysis and Algorithms, Warwick lecture notes"
      url: https://www.seehuhn.de/publications/StuaVo08/numlinalg.pdf
---

## Statement

Let $A\in\mathbb R^{m\times n}$, $m\ge n$, be processed successfully and set $\gamma_m=mu/(1-mu)$ with $mu<1$. If every step satisfies [[lem-scaled-householder-step-meets-local-backward-error-premise]], then the computed factors satisfy
$$A+\Delta A=\widehat Q\widehat R,\qquad
\|\Delta A\|_F\le\bigl((1+3\gamma_m)^n-1\bigr)\|A\|_F.$$
This is conditional; the local premise remains under escalation.
## Facts & Assumptions

**Given:** the local perturbation premise at every successful step.

[F1] [[lem-scaled-householder-step-meets-local-backward-error-premise]]: each step has an exact orthogonal reflector and local perturbation at most 3gamma_m||A^(k)||_F.

[F2] [[thm-householder-qr-is-backward-stable-in-the-standard-floating-point-model]]: under precisely this premise, the global Frobenius factorization bound holds.

[F3] [[thm-successive-householder-or-givens-transformations-produce-full-and-reduced-qr-with-operation-counts]]: successive exact transformations produce the full and reduced QR forms.

## Proof

1.1 At every step [F1] supplies the local equation, orthogonality, and the exact 3gamma_m bound, which are the hypotheses of [F2]. [given, F1, F2]

1.2 Apply [F2] to obtain the stated factor equation and global bound. [F3] identifies the reduced factors as the first n orthonormal columns and upper triangular block. [step 1.1, F2, F3] ∎

## Readiness

The argument is conditional on the local lemma. Its formation/update estimate is unresolved, so this item cannot be ready for acceptance.
