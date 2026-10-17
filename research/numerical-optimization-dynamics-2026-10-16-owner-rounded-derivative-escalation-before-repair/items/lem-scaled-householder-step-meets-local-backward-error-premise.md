---
id: lem-scaled-householder-step-meets-local-backward-error-premise
kind: lemma
title: "The scaled computed Householder step satisfies the local backward error premise"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-scaled-householder-reflector-formation-and-application
  - def-standard-relative-floating-point-model-and-unit-roundoff
  - thm-floating-point-dot-product-componentwise-and-normwise-error-bounds
  - lem-product-of-one-plus-deltas-gives-theta-n
  - thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries
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

For a successful real active step of row dimension m, the required missing contract is that the exact reflector H-hat associated with the stored vector is orthogonal and there exists E_k with H-hat(A^(k)+E_k)=A^(k+1), ||E_k||_F<=3gamma_m||A^(k)||_F. In the zero-column branch, H-hat=I and E_k=0. The nonzero formation and rank-one-update estimate is unresolved.

## Facts & Assumptions

**Given:** a successful scaled reflector formation and application.

[F1] [[alg-scaled-householder-reflector-formation-and-application]]: the algorithm stores rounded vector and coefficient values, applies a rounded rank-one update, and uses the identity in the zero-column branch.

[F2] [[thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries]]: an exact Householder reflector is orthogonal.

[F3] [[thm-floating-point-dot-product-componentwise-and-normwise-error-bounds]]: successful real dot products have an explicit rounding bound.

[F4] [[lem-product-of-one-plus-deltas-gives-theta-n]]: accumulated relative errors are bounded by gamma_m when mu<1.

[F5] [[def-standard-relative-floating-point-model-and-unit-roundoff]]: each successful basic operation has a relative error bounded by the unit roundoff on its normal-range exact result.

## Proof

1.1 On the zero-column branch, the returned action is the identity; choose H-hat=I and E_k=0, which gives the displayed equation and bound. [given, F1, algebra]

1.2 For a nonzero column [F2] makes the exact reflector associated with the stored nonzero vector orthogonal, but it does not bound the combined errors from scaling, norm evaluation, vector formation, coefficient formation, and rank-one application. [F1, F2, F3, F4, F5]

## Owner escalation

The plan requires exactly the local 3gamma_m premise for this implementation. The full-text source treatments reviewed provide broader stability statements or cite a theorem, not this derivation. The nonzero estimate in step 1.2 is unresolved. Keep the QR stability and least-squares consumers escalated pending a complete proof.
