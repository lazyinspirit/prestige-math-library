---
id: lem-connected-alternating-link-is-nonsplit
kind: lemma
title: Connected alternating diagrams represent nonsplit links
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-split-link
  - def-reduced-alternating-link-diagram
  - lem-alternating-checkerboard-normal-pairing-is-definite
  - lem-definite-normal-pairing-forces-nonsplit-boundary
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Choice-free: the checkerboard surface and its definite pairing are
  finite disk-and-band constructions; the nonsplitting obstruction uses finite
  rational homology and disk surgery."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Joshua E. Greene, Alternating links and definite surfaces, §§2–3 and §5,
        especially Corollary 3.2 and Theorem 5.1
      url: https://people.maths.ox.ac.uk/lackenby/Fox.pdf
    - title: Thomas Kindred, A geometric proof of the flyping theorem, §2.1, Fact 2.4
      url: https://arxiv.org/pdf/2008.06490v3
---

## Statement

If a regular link diagram on $S^2$ is connected and alternating, then the represented link is nonsplit.

## Statement references

[Greene, *Alternating links and definite surfaces*, Corollary 3.2 and Theorem 5.1](https://people.maths.ox.ac.uk/lackenby/Fox.pdf)

[Kindred, *A geometric proof of the flyping theorem*, Fact 2.4](https://arxiv.org/pdf/2008.06490v3)

## Facts & Assumptions

**Given:** A connected alternating regular diagram $D$ and its represented link $L$.

[F1] Connectedness and alternation are properties of the projection and its crossing visits; a connected crossingless diagram consists of one circle. ([[def-reduced-alternating-link-diagram]])

[F2] The checkerboard construction gives a connected embedded surface $F$ with boundary $L$, a finite disk-and-band presentation, and a definite quadratic form on $H_1(F;\mathbb Q)$ satisfying $q([c])=\operatorname{lk}(c,\tau c)$ for all oriented rational multicurves. This also includes the zero-dimensional form of a crossingless spanning disk. ([[lem-alternating-checkerboard-normal-pairing-is-definite]])

[F3] A connected spanning surface with that definite normal-pairing property has nonsplit boundary. ([[lem-definite-normal-pairing-forces-nonsplit-boundary]])

[F4] A link is split if a sphere disjoint from it has link points on both complementary sides. ([[def-split-link]])

## Proof

1.1 Apply [F2] to the supplied connected alternating diagram. The resulting surface $F$ is connected, has the represented link as its entire boundary, and carries the stated definite normal pairing. If the diagram has no crossings, [F1] identifies it as a single circle and [F2] uses a spanning disk, so the same supplied-surface conclusions hold. [given, F1, F2, construct]

2.1 The surface from step 1.1 satisfies every hypothesis of [F3], which therefore says that no sphere of the kind in [F4] splits its boundary $L$. Thus $L$ is nonsplit, with no reduction or choice assumption required. [F3, F4, step 1.1] ∎
