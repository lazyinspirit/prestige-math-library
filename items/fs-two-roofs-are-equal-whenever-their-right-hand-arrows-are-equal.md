---
id: "fs-two-roofs-are-equal-whenever-their-right-hand-arrows-are-equal"
kind: "false-statement"
deps: ["thm-the-calculus-of-fractions-constructs-the-localization", "prop-cohomology-factors-through-the-derived-category"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf"
      title: "Boundary check against the licensed construction"
provenance:
  statement: ai-altered
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Two roofs between the same objects are equal in the derived category whenever their right-hand arrows are equal.

## Facts & Assumptions

**Given:** Two roofs between the same objects are equal in the derived category whenever their right-hand arrows are equal.

[F1] A roof represents numerator composed with the inverse of its denominator ([[thm-the-calculus-of-fractions-constructs-the-localization]]).

[F2] Cohomology factors through localization ([[prop-cohomology-factors-through-the-derived-category]]).

## Refutation

1.1 On $X=\mathbb Z[0]$, compare $(X\xleftarrow1X\xrightarrow1X)$ and $(X\xleftarrow{-1}X\xrightarrow1X)$. Both denominators are quasi-isomorphisms and the numerator in each is the identity. The roof formula gives the morphisms $1$ and $-1$ respectively. All other degrees are zero. [F1, algebra]

2.1 The functor $H^0$ sends the two morphisms to $1$ and $-1$ on $\mathbb Z$, unequal at the element $1$. Hence the roofs are unequal despite identical numerators. The denominator is essential data. [F2, step 1.1, algebra] ∎
