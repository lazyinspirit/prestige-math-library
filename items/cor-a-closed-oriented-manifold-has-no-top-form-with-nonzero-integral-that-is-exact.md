---
id: cor-a-closed-oriented-manifold-has-no-top-form-with-nonzero-integral-that-is-exact
title: "Nonzero total integral obstructs exactness on a closed manifold"
kind: corollary
status: published
origin: pipeline
deps: ["cor-integral-of-an-exact-compactly-supported-top-form-on-a-boundaryless-manifold-is-zero", "prop-positive-compactly-supported-top-forms-have-positive-integral"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lee Corollary 16.13; Merry Corollary 27.2 proof (nonexactness consequence without cohomology terminology)"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Statement

Let $M^n$ be compact, oriented, and boundaryless, $n\geq1$. A smooth top form $\omega$ with $\int_M\omega\neq0$ is not exact. In particular every positive smooth top form on a nonempty such $M$ is not exact.

## Facts & Assumptions

[F1] [[cor-integral-of-an-exact-compactly-supported-top-form-on-a-boundaryless-manifold-is-zero]]: If $M^n$ is oriented and boundaryless, $n\geq1$, and $\eta\in\Omega_c^{n-1}(M)$, then $\int_Md\eta=0$. In particular, on a compact such manifold every exact smooth top form has zero integral. The compact-support assumption is on the primitive $\eta$, not merely on $d\eta$.

[F2] [[prop-positive-compactly-supported-top-forms-have-positive-integral]]: Let $\omega\in\Omega_c^n(M)$ be nonnegative on the positive determinant ray of an oriented smooth manifold. Then $\int_M\omega\geq0$, and $\omega\neq0$ implies $\int_M\omega>0$.

## Proof

**Given:** The objects and hypotheses in the statement above.

1.1 If $\omega=d\eta$, compactness of $M$ makes the primitive compactly supported. The exact-integral vanishing result gives $\int_M\omega=0$. Thus a nonzero integral excludes exactness. [F1]

2.1 For a positive form on nonempty $M$, positivity implies it is nonzero, and its integral is strictly positive. Apply the preceding implication. On the empty manifold every integral is zero, so the nonzero-integral hypothesis cannot hold; the positive-form conclusion explicitly assumed nonempty $M$. [F2, step 1.1] ∎
