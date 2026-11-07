---
id: lem-finite-algebraic-gluing-certificates-descend-without-choice
kind: lemma
title: Finite algebraic gluing and covering certificates descend without choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-filtered-category-and-filtered-colimit
  - lem-equality-in-a-filtered-colimit-of-sets-is-eventual
  - def-locally-finite-presentation-morphism
proof_strategy: direct
axiom_use: No choice principle is assumed; the input explicitly supplies all finite witnesses.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: The Stacks Project, Limits of Schemes, Proposition 32.9.6
      url: https://stacks.math.columbia.edu/tag/01ZJ
      locator: The displayed finite-presentation context was read in the earlier A5 authoring; the explicit finite-certificate formulation and proof here are local.
---

## Statement

In ZF, let $(A_i)$ be a filtered system of commutative rings with colimit $A$. Suppose a specified finite algebraic diagram over $A$ is given by finitely many polynomial presentations, localizations, homomorphisms on generators, and finitely many equations, inverses, cocycle identities and unit-ideal identities. Then the entire diagram and every specified identity descend simultaneously to one stage $A_j$. This includes a finite affine gluing diagram with explicitly supplied algebraic overlap-cover identities, a finitely presented morphism and its specified inverse, or a finite standard-étale diagram with an explicitly supplied finite algebraic covering certificate. The conclusion does not assert that topological coverage of spectra automatically supplies such an identity in ZF.

## Statement references

[[def-filtered-category-and-filtered-colimit]]

[[lem-equality-in-a-filtered-colimit-of-sets-is-eventual]]

[[def-locally-finite-presentation-morphism]]

## Facts & Assumptions

**Given:** The filtered ring diagram, its colimit, and the one finite algebraic diagram with all specified identities and certificates.

[F1] For two specified elements in a filtered colimit, equality holds precisely when their representatives become equal at a common later stage. [[lem-equality-in-a-filtered-colimit-of-sets-is-eventual]]

[F2] Filteredness gives a common later stage for any specified finite family of stages and comparison maps. [[def-filtered-category-and-filtered-colimit]]

[F3] Finite presentation is specified by finitely many algebra generators and relations. [[def-locally-finite-presentation-morphism]]

## Proof

**Proof technique:** descend the finite coefficient list and all finite equality witnesses.

1.1 Choose representatives in some stages for the finitely many coefficients appearing in the presentations, maps and certificates. By [F2], choose one common later stage. Every inverse in the finite list is represented by its own coefficient and a specified equation asserting that its product is one. Each localization, map on generators and polynomial relation is now a finite expression at that stage. [F2, F3, given, construct, algebra]

2.1 For each listed identity, rewrite it as equality of two finitely represented ring elements. If it is an equality in a localization, clear the specified finite powers of its denominator; if it is an equality modulo a finitely generated presentation ideal, include its finitely many explicit multipliers. These multipliers exist because the finite identity is part of the given algebraic certificate. By [F1], each equality becomes exact at some later stage. The list is finite, so [F2] gives one stage at which all of them hold simultaneously. [F1, F2, step 1.1, given, construct, algebra]

3.1 In particular, a given unit-ideal certificate $\sum_j a_j f_j=1$ descends with its actual coefficients, as do all finite inverse and cocycle equations. The standard affine gluing construction therefore applies to the descended finite presentations and overlap identities; pulling it back to $A$ recovers the supplied diagram. A monic standard-étale equation and its inverse derivative descend by the same finite equations. The argument uses no conversion of pointwise spectrum coverage into a unit ideal and makes no claim that such a conversion follows from ZF. [F1, F2, step 2.1, given, construct, algebra] ∎
