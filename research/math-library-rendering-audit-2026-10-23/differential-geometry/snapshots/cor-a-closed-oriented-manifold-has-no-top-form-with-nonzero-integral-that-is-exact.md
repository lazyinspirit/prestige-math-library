---
id: cor-a-closed-oriented-manifold-has-no-top-form-with-nonzero-integral-that-is-exact
title: "Nonzero total integral obstructs exactness on a closed manifold"
kind: corollary
status: published
origin: pipeline
deps: ["lem-finite-chart-localization-for-compactly-supported-forms-on-manifolds-with-boundary", "lem-euclidean-stokes-for-a-compactly-supported-form", "lem-exterior-and-cartan-calculus-extend-to-manifolds-with-boundary"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-04-maintenance-receipts.jsonl (cor-a-closed-oriented-manifold-has-no-top-form-with-nonzero-integral-that-is-exact). Final finite-chart Euclidean-Stokes proof read by root. No independent judge or whole-closure certification.
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
[[lem-finite-chart-localization-for-compactly-supported-forms-on-manifolds-with-boundary]],
which agrees with the general compact-support integral wherever that is
defined.

## Facts & Assumptions

[F1] [[lem-finite-chart-localization-for-compactly-supported-forms-on-manifolds-with-boundary]] constructs the intrinsic finite signed-chart integral for compactly supported top forms, gives finite linearity and the single-chart formula for chart-supported forms, and gives strict positivity for a nonzero nonnegative form. Its construction is choice-free and applies to the boundaryless $M$ here.

[F2] [[lem-euclidean-stokes-for-a-compactly-supported-form]] gives $\int_{\mathbb R^n}d\zeta=0$ for every compactly supported smooth $(n-1)$-form $\zeta$ and $n\geq1$.

[F3] [[lem-exterior-and-cartan-calculus-extend-to-manifolds-with-boundary]] gives linearity and chart-pullback naturality of exterior differentiation and support containment for $d$.

## Proof

**Given:** The objects and hypotheses in the statement above.

1.1 If $\omega=d\eta$, compactness of $M$ makes $\eta$ compactly supported. Take the finite nonnegative chart cutoffs $\chi_i$ from [F1] near $\operatorname{supp}\eta$. They satisfy $\eta=\sum_i\chi_i\eta$ globally, so [F3] gives $d\eta=\sum_i d(\chi_i\eta)$. Each $\chi_i\eta$ has compact support inside a boundaryless chart. Pull it into that chart and extend it by zero to a smooth compactly supported $(n-1)$-form on $\mathbb R^n$; its support stays away from the artificial chart edge. Chart-pullback naturality and [F2] make the signed chart integral of $d(\chi_i\eta)$ zero. By the single-chart formula and finite linearity of [F1], $\int_M\omega=\sum_i\int_Md(\chi_i\eta)=0$. Thus a nonzero integral excludes exactness. [F1, F2, F3]

2.1 Let $\omega$ be positive on nonempty $M$. It is then a nonzero nonnegative compactly supported top form, so the strict-positivity clause of [F1] gives $\int_M\omega>0$. Step 1.1 excludes exactness. On the empty manifold every integral is zero, so the nonzero-integral hypothesis cannot hold; the positive-form conclusion explicitly assumes nonempty $M$. [F1, step 1.1] ∎
