---
id: lem-order-four-point-normalizes-a-weierstrass-equation
kind: lemma
title: An order-four point normalizes a tangent Weierstrass equation
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
    locator: Chapter III, Weierstrass equations and chord-tangent formulas; the displayed normalization is calculated below.
dependency_level: 0
proof_strategy: direct
---

## Statement

Let A be a commutative ring in which 2 is a unit. Suppose the displayed projective equation defines an elliptic curve E/A with its usual chord-tangent group law, identity O=[0:1:0], and a section P=(0,0) satisfying `4P=O` over A and having exact order four on every geometric fibre:

`y²z+a₁xyz+a₃yz²=x³+a₂x²z`.

Assume its discriminant is a unit. Then a₁, a₂ and a₃ are units, `a₃=a₁a₂`, and the coordinate substitution `x=a₁²x'`, `y=a₁³y'` produces the unique equation

`y'²z+x'y'z−b y'z²=x'³−b x'²z`, with `b=−a₂/a₁²`.

Both b and `1+16b` are units. The uniqueness is among changes `x=u²x'+r`, `y=u³y'+su²x'+t` with u a unit, preserving O, P, its tangent line y=0, and the coefficient of x'y'z equal to one. This result assumes the given presentation and group law; it does not construct a Weierstrass presentation or a moduli space.

## Facts & Assumptions

**Given:** A and the elliptic curve, equation, point, group law, and discriminant hypotheses of the Statement.

[F1] A is a commutative ring with identity. [[def-commutative-ring]]

## Proof

**Proof technique:** explicit tangent and coordinate calculations.

1.1 At P the x-partial derivative of the affine equation vanishes and the y-partial derivative is a₃. Smoothness of E/A at its section P makes a₃ a unit: otherwise its image is zero in some residue field and both fibre derivatives vanish. The tangent line is therefore y=0. Its intersection divisor on a fibre is `2P+Q`, with `Q=(−a₂,0)`; equivalently the group law gives `2P=−Q=(−a₂,a₁a₂−a₃)`. This formula remains valid in families because the tangent and inverse formulas are polynomial and the tangent construction is defined over A. [F1, given, construct, algebra]

2.1 The inverse of `(x,y)` on the given Weierstrass equation is `(x,−y−a₁x−a₃)`. Since P has exact order four on every geometric fibre, 2P is a nonzero 2-torsion section on every geometric fibre; the group-scheme equality `4P=O` follows because P is a section of E[4]. Thus 2P equals its inverse. Comparing the y-coordinates gives `a₁a₂−a₃=0`: indeed their difference is precisely `a₁a₂−a₃`. Since a₃ is a unit, both factors a₁ and a₂ are units. [step 1.1, given, algebra]

3.1 Substitute `x=a₁²x'`, `y=a₁³y'` and divide the homogeneous equation by a₁⁶. The resulting coefficients are `1`, `a₂/a₁²` and `a₃/a₁³=a₂/a₁²`, hence the normalized equation with `b=−a₂/a₁²`; b is a unit. Direct expansion of the usual Weierstrass discriminant gives `Δ=a₁²a₂⁴(a₁²−16a₂)=a₁¹² b⁴(1+16b)`. Since Δ, a₁ and b are units, `1+16b` is a unit. [step 2.1, given, algebra]

4.1 An admissible Weierstrass change preserving O has the form `x=u²x'+r`, `y=u³y'+s u²x'+t` with u a unit. Preserving P forces r=t=0, and preserving the tangent y=0 forces s=0. The transformed coefficient of x'y'z is a₁/u, so requiring it to be 1 forces u=a₁ and thus the same b. [step 3.1, given, algebra] ∎

## Source and authoring record

This algebraic normalization is conditional on an existing tangent Weierstrass model and an established elliptic group law. Relative Weierstrass construction, existence of the group law for the universal model, moduli representability and compactification remain separate.
