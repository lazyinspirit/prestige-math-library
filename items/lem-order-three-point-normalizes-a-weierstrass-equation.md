---
id: lem-order-three-point-normalizes-a-weierstrass-equation
kind: lemma
title: An order-three point normalizes a tangent Weierstrass equation
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-commutative-ring
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: J. S. Milne, Elliptic Curves
    url: https://www.jmilne.org/math/Books/ectext6.pdf
    locator: Chapter II, generalized Weierstrass equations and tangent formulas; the normalization is calculated below.
dependency_level: 0
proof_strategy: direct
---

## Statement

Let A be a commutative ring in which 3 is a unit. Suppose the displayed projective equation defines an elliptic curve E/A with its usual chord-tangent group law, identity O=[0:1:0], and a section P=(0,0) satisfying `3P=O` over A and of exact order three on every geometric fibre:

`y²z+a₁xyz+a₃yz²=x³+a₂x²z`.

Assume its discriminant is a unit. Then a₃ is a unit and a₂=0. The A-algebra `A[u]/(u³−a₃)` is finite étale and faithfully flat, and after this base change the scaling `x=u²x'`, `y=u³y'` yields

`y'²z+t x'y'z+y'z²=x'³`, with `t=a₁/u` and `t³−27` a unit.

Any other normalization of the specified form differs by a scaling with cube equal to one. This result assumes an existing tangent Weierstrass model and group law; it does not construct a modular curve.

## Facts & Assumptions

**Given:** A and the elliptic curve, equation, section, group law, and discriminant hypotheses of the Statement.

[F1] A is a commutative ring with identity. [[def-commutative-ring]]

## Proof

**Proof technique:** explicit tangent, discriminant and finite étale root calculations.

1.1 The x-partial derivative of the affine equation at P is zero and the y-partial is a₃. Smoothness at P forces a₃ to be a unit, and the tangent is y=0. The tangent intersection is `2P+Q` with `Q=(−a₂,0)`, so the chord-tangent law gives `2P=−Q`. Since `3P=O` as a section, also `2P=−P`; hence Q=P and comparing x-coordinates yields a₂=0. [F1, given, construct, algebra]

2.1 Put `A'=A[u]/(u³−a₃)`. It is finite free with basis `1,u,u²`, and u is a unit because a₃=u³ is a unit. Its derivative `3u²` is a unit, so A'/A is finite étale. Its positive constant rank makes it faithfully flat. The indicated scaling transforms the equation into `y'²+t x'y'+y'=x'³` with t=a₁/u. [F1, step 1.1, given, construct, algebra]

3.1 Direct substitution in the standard Weierstrass discriminant gives `Δ=a₃³(a₁³−27a₃)=u¹²(t³−27)`. The original discriminant and u are units, so `t³−27` is a unit. If a second scaling by v also makes the y'-coefficient one, then `v³=a₃=u³`; consequently v/u is a unit with cube one. Conversely every such factor preserves that coefficient. [F1, step 2.1, given, algebra] ∎

## Source and authoring record

This algebraic normalization presupposes a tangent model and group law. The moduli quotient and compactification remain separate.
