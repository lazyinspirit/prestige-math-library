---
id: prop-positive-compactly-supported-top-forms-have-positive-integral
title: "Positivity of the oriented integral"
kind: proposition
status: published
origin: pipeline
deps: ["lem-finite-chart-localization-for-compactly-supported-forms-on-manifolds-with-boundary"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-04-maintenance-receipts.jsonl (prop-positive-compactly-supported-top-forms-have-positive-integral). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: "Lee Proposition 16.6(c), pp.407–408 (nonnegative version by the same proof)"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Statement

Let $\omega\in\Omega_c^n(M)$ be nonnegative on the positive determinant ray
of an oriented smooth manifold. Then $\int_M\omega\geq0$, and $\omega\neq0$
implies $\int_M\omega>0$. Here the compact-support integral is the
choice-free finite-chart value, equal to the global partition value whenever
that construction is available.

## Facts & Assumptions

[F1] [[lem-finite-chart-localization-for-compactly-supported-forms-on-manifolds-with-boundary]] constructs a finite nonnegative chart localization near any compact support, proves its signed chart sum independent of that localization, and proves nonnegativity and strict positivity for a nonzero nonnegative top form, including genuine boundary and dimension zero. Its value agrees with the global partition integral under countable choice.

## Proof

**Given:** The objects and hypotheses in the statement above.

1.1 Apply the finite localization of [F1] to $K=\operatorname{supp}\omega$. In every chart its nonnegative weight multiplies a nonnegative signed coefficient, so each chart integral is nonnegative and so is their finite sum. [F1]

2.1 If $n\geq1$ and $\omega_p\neq0$, at least one finite weight is positive at $p$. Its signed coefficient is continuous and positive there, hence bounded below by some $c>0$ on a small interior rectangle of positive volume, including when $p$ lies on a genuine boundary face. Its chart integral is positive; the other terms are nonnegative. [F1, step 1.1]

3.1 For $n=0$ every signed point summand is nonnegative and a nonzero form has a strictly positive summand. The zero form and the empty manifold give zero. Agreement with the global integral when it is constructed by a partition follows from [F1]. [F1, step 1.1, step 2.1] ∎
