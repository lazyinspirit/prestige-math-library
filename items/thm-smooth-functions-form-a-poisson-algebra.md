---
id: thm-smooth-functions-form-a-poisson-algebra
kind: theorem
title: Smooth functions form a Poisson algebra
status: published
origin: pipeline
deps: ["thm-poisson-bracket-satisfies-the-jacobi-identity", "prop-poisson-bracket-is-bilinear-skew-and-a-derivation-in-each-entry"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 18, Definition 18.7 and conclusion, p. 109
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

$C^\infty(M)$, with pointwise multiplication and the symplectic Poisson
bracket, is a real Poisson algebra.

## Facts & Assumptions

**Given:** A symplectic manifold $(M,\omega)$.

[F1] The Poisson bracket is bilinear, skew, and a derivation in each entry. [[prop-poisson-bracket-is-bilinear-skew-and-a-derivation-in-each-entry]].

[F2] It satisfies the Jacobi identity. [[thm-poisson-bracket-satisfies-the-jacobi-identity]].

## Proof

**Proof technique:** direct.

1.1 Pointwise addition and multiplication make $C^\infty(M)$ a commutative associative real algebra with unit, and [F1] supplies a bilinear skew biderivation. [F1, given]

2.1 By [F2] that bracket is a Lie bracket. These are exactly the Poisson-algebra axioms, so the claimed structure follows. [F2, step 1.1] ∎
