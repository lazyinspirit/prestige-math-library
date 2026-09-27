---
id: cor-a-closed-oriented-manifold-has-no-top-form-with-nonzero-integral-that-is-exact
title: "Nonzero total integral obstructs exactness on a closed manifold"
kind: corollary
status: published
origin: pipeline
deps: ["lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes", "thm-multidimensional-integral-properties"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-04-maintenance-receipts.jsonl (cor-a-closed-oriented-manifold-has-no-top-form-with-nonzero-integral-that-is-exact). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: "Lee Corollary 16.13; Merry Corollary 27.2 proof (nonexactness consequence without cohomology terminology)"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Statement

Let $M^n$ be compact, oriented, and boundaryless, $n\geq1$. A smooth top form $\omega$ with $\int_M\omega\neq0$ is not exact. In particular every positive smooth top form on a nonempty such $M$ is not exact.
Here $\int_M$ is the choice-free finite-chart integral of
[[lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes]],
which agrees with the general compact-support integral wherever that is
defined.

## Facts & Assumptions

[F1] [[lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes]] defines an intrinsic integral on compactly supported top forms of an oriented boundaryless manifold using finitely many nonnegative chart cutoffs, and gives $\int_Md\eta=0$ for compactly supported $(n-1)$-forms.

[F2] [[thm-multidimensional-integral-properties]] gives monotonicity and finite additivity for the Riemann integrals of chart coefficients.

## Proof

**Given:** The objects and hypotheses in the statement above.

1.1 If $\omega=d\eta$, compactness of $M$ makes the primitive compactly supported. The exact-integral vanishing result gives $\int_M\omega=0$. Thus a nonzero integral excludes exactness. [F1]

2.1 Let $\omega$ be positive on nonempty $M$. Choose $p\in M$; then $\omega_p$ is positive on the oriented determinant ray. In the finite nonnegative localization of [F1], some cutoff $\chi_i$ is positive at $p$, since their sum is one there. Its signed coefficient is continuous and positive on a small coordinate ball about $p$, so it is bounded below by some $c>0$ on a nondegenerate closed rectangle inside that ball. By [F2], this chart contribution is strictly positive, while every other contribution is nonnegative. Thus $\int_M\omega>0$, and step 1.1 excludes exactness. On the empty manifold every integral is zero, so the nonzero-integral hypothesis cannot hold; the positive-form conclusion explicitly assumes nonempty $M$. [F1, F2, step 1.1] ∎
