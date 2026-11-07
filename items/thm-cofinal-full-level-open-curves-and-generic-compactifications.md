---
id: thm-cofinal-full-level-open-curves-and-generic-compactifications
kind: theorem
title: Cofinal full-level curves and generic compactifications
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- lem-full-level-three-punctured-projective-line-integral-model
- lem-full-level-refinement-is-finite-etale
- lem-smooth-finite-line-curves-over-perfect-fields-have-smooth-completions
- thm-integral-closure-finite-finite-type-domain-over-field
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: J. S. Milne, Modular Functions and Modular Forms
    url: https://www.jmilne.org/math/CourseNotes/MF.pdf
    locator: Chapter 5, modular curves; the cofinal open and generic models are assembled below.
dependency_level: 3
proof_strategy: direct
axiom_use: AC is assumed by the named geometry inputs.
---

## Statement

Assume AC and put `k=Q[a]/(a²−a+1)`. For each positive integer M divisible by 3 there is a fine full-level-M elliptic moduli curve Y(M) over Q, representing the functor on locally Noetherian Q-schemes, and a smooth projective Q-curve X(M) containing Y(M) as a dense open with finite complement. For 3|N|M the forgetful map `Y(M)→Y(N)` is finite étale and extends uniquely to a finite map `X(M)→X(N)`; these maps compose. The levels divisible by 3 are cofinal under divisibility among all positive levels. This theorem does not assert Hecke correspondences, cohomological transition maps, or good integral reduction at the higher levels.

## Facts & Assumptions

**Given:** AC and the field k of the Statement.

[F1] The fine level-three curve over Q is `P¹_k` minus four disjoint sections, with the universal elliptic curve and full frame. [[lem-full-level-three-punctured-projective-line-integral-model]]

[F2] For N|M, refinement of an existing fine level-N curve to level M is a finite étale surjection, and the forgetful maps compose. [[lem-full-level-refinement-is-finite-etale]]

[F3] A smooth curve finite over an affine-line open over a perfect field has a smooth projective completion, constructed by normalization of the projective line. [[lem-smooth-finite-line-curves-over-perfect-fields-have-smooth-completions]]

[F4] The normalization of a finite-type domain over a field is finite. [[thm-integral-closure-finite-finite-type-domain-over-field]]

[F5] AC is assumed. [[def-axiom-of-choice]]

## Proof

**Proof technique:** finite étale level refinement and compatible normalization.

1.1 By [F1], Y(3) over Q is the open `U=P¹_k\{0,∞,1,b}` with b=1−a, and k is a finite separable extension of Q. For each M divisible by 3, apply [F2] with B=Spec Q: Y(M) exists and is finite étale over U. For N|M with both divisible by 3, the transition maps are finite étale and compose by [F2]. These statements include disconnected schemes and all locally Noetherian test bases. [F1, F2, F5, given, construct, algebra]

2.1 The field k is perfect. Each Y(M) is a smooth k-curve finite over the affine-line open U, so [F3] gives its smooth projective completion by normalizing `P¹_k` separately in the function fields of its finitely many connected components. The complement is finite. Viewing these projective curves as Q-schemes preserves smoothness and properness because k/Q is finite étale; the finite composite of a projective k-curve with Spec k→Spec Q is projective over Q. [F1, F2, F3, F5, step 1.1, given, construct, algebra]

3.1 For 3|N|M, each component of Y(M) maps to a component of Y(N), inducing a finite extension of their function fields. On every affine chart of `P¹_k`, the integral closure for X(N) embeds into the integral closure for X(M). By [F4] these rings are finite over the chart ring, so the latter is finite over the former. The inclusions glue to a finite map X(M)→X(N) extending the open transition. It is unique because the source is reduced and the target separated and the open is dense. Ring inclusions compose, so the extensions compose. For any positive L, the integer 3L is divisible by both 3 and L, proving cofinality. [F2, F3, F4, F5, step 1.1, step 2.1, given, construct, algebra] ∎

## Source and authoring record

This constructs the cofinal open level tower and its generic smooth projective compactifications. It does not establish Hecke correspondences, parabolic cohomology maps or higher-level integral good reduction.
