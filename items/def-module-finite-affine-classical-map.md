---
id: "def-module-finite-affine-classical-map"
kind: "definition"
title: "Module-finite affine maps for the quasi-finite comparison"
deps: ["thm-affine-morphisms-coordinate-ring-anti-equivalence"]
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Milne §8c Definition 8.17, affine case, p.181"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
status: "draft"
origin: "pipeline"
---

## Definition

For affine classical algebraic sets $X,Y$, call a morphism $f:X\to Y$ module-finite if $k[X]$, via pullback, is a finitely generated $k[Y]$-module. This is the affine module criterion. Empty affine sets are allowed, with zero coordinate ring; the definition does not assert a global affine-preimage criterion for arbitrary varieties.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.
