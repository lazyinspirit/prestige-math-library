---
id: rem-normalization-not-resolution-higher-dimension
kind: remark
title: Normalization need not resolve singularities in dimension at least two
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 3
justified_by: []
aliases: []
forward_refs: [cex-normal-not-smooth-quadric-cone]
deps: [def-axiom-of-choice, def-normalization-affine-variety, cor-normalization-resolves-singularities-of-curves, thm-normal-curve-is-nonsingular]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "J. S. Milne, Algebraic Geometry (2025 version), Ch. 8 Summary 8.13 and Aside 9.39: the cone z^2 = xy is normal but not factorial, hence normal with an isolated singularity"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
---

## Remarks

Assume the Axiom of Choice, as in the curve suppliers ([[def-axiom-of-choice]]).

For curves over a perfect field, normalization removes all singularities:
[[thm-normal-curve-is-nonsingular]] shows that a normal curve is nonsingular,
For projective curves, [[cor-normalization-resolves-singularities-of-curves]] constructs the finite projective normalization over the actual perfect field.

In dimension at least two this fails. A normal variety can still be singular:
the quadric cone $xy=z^2$ over an algebraically closed field of characteristic
not two is normal with an isolated singular point, as the companion
counterexample [[cex-normal-not-smooth-quadric-cone]] shows. Since that cone
is already normal, its normalization is the identity by
[[def-normalization-affine-variety]] and does not remove the singularity.

Normalization therefore only removes the non-normal locus, not the singular
locus in general, and resolution of singularities in dimension at least two is
a separate subject. This remark records the boundary of the curve theorem and
asserts no resolution statement.
