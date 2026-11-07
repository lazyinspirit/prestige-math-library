---
id: lem-good-prime-isogeny-correspondence-extends-to-smooth-curve-compactification
kind: lemma
title: Good-prime isogeny correspondence extends over a smooth curve compactification
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- lem-good-prime-cyclic-isogeny-correspondence-on-fine-modular-curves
- thm-integral-closure-finite-finite-type-domain-over-field
- lem-rational-map-smooth-curve-to-proper-scheme-extends
- thm-proper-quasi-finite-is-finite
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: J. S. Milne, Modular Functions and Modular Forms
    url: https://www.jmilne.org/math/CourseNotes/MF.pdf
    locator: Chapter 5, Hecke correspondences; the curve-level extension is constructed below.
dependency_level: 4
proof_strategy: direct
axiom_use: AC is assumed by the named geometry inputs.
---

## Statement

Assume AC. Let k be a perfect field, let N≥3 and let q be a prime with q∤N and Nq invertible in k. Let Y/k be a smooth fine full-level-N modular curve, let `Y⊂X` be a dense open immersion into a smooth projective k-curve with finite complement, and let `Y←H_q→Y` be the good-prime cyclic-isogeny correspondence. There is a smooth projective k-curve H̄ containing H_q densely, with finite complement, such that both arrows extend uniquely to finite flat maps `X←H̄→X` of degree q+1. This is a compactified correspondence over k; it does not assert an integral model over a mixed-characteristic base or construct a cohomological Hecke action.

## Facts & Assumptions

**Given:** AC, the perfect field k, N, q, the fine modular curve Y and its smooth projective compactification X as in the Statement.

[F1] The good-prime cyclic-isogeny correspondence has both projections finite étale of degree q+1. [[lem-good-prime-cyclic-isogeny-correspondence-on-fine-modular-curves]]

[F2] The integral closure of a finite-type domain over a field in its fraction field is finite. [[thm-integral-closure-finite-finite-type-domain-over-field]]

[F3] A rational map from a smooth curve to a proper scheme extends uniquely. [[lem-rational-map-smooth-curve-to-proper-scheme-extends]]

[F4] A proper quasi-finite morphism is finite. [[thm-proper-quasi-finite-is-finite]]

[F5] AC is assumed. [[def-axiom-of-choice]]

## Proof

**Proof technique:** normalize the first compactification and extend the second map.

1.1 By [F1], H_q is smooth over k and finite étale over Y via its first projection. For each integral component of H_q, normalize the corresponding component of X in its finite function-field extension. On an affine chart Spec A of X, finitely many field generators can be multiplied by nonzero elements of A to become integral over A; their finite A-algebra has the full extension as fraction field, and [F2] makes its normalization finite. These finite normalizations commute with localization and glue to a curve H̄ finite over X. Over Y they are H_q itself, because H_q is finite over Y and normal. [F1, F2, F5, given, construct, algebra]

2.1 Each component of H̄ is projective, being finite over projective X. Its one-dimensional normal local rings are DVRs and hence regular; k is perfect, so these finite-type curves are smooth. The complement H̄\H_q is finite because it lies over X\Y under a finite map. The first extension `H̄→X` is finite by construction and has degree q+1 over the dense open Y. [F1, F2, F5, step 1.1, given, algebra]

3.1 The second projection `H_q→Y⊂X` is a rational map from each smooth component of H̄ to the proper curve X, so [F3] extends it uniquely. It is nonconstant on each component because its restriction is finite étale; hence its fibres are finite and [F4] makes it finite. At every point of the regular target curve X, the corresponding finite module is torsion-free over a DVR and therefore free. Thus both extensions are finite flat; their ranks are q+1 because they restrict to degree-q+1 finite étale maps on Y. This constructs the compactified correspondence without asserting a cohomological action. [F1, F3, F4, F5, step 2.1, given, algebra] ∎

## Source and authoring record

This is a curve-level compactification over a perfect field. Mixed-characteristic integral extension, the characteristic-p correspondence, and cohomological Hecke actions remain separate.
