---
id: lem-os-first-differential-is-reduced-khovanov
kind: lemma
title: "The first surgery differential is the reduced Khovanov TQFT differential"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - lem-os-link-surgery-filtered-complex-and-triangle
  - lem-os-unlink-resolution-covers-and-floer-tqft
  - def-reduced-khovanov-cohomology-of-a-based-link-over-f2
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Ozsváth and Szabó, On the Heegaard Floer homology of branched double-covers, §6, Propositions 6.1–6.2"
      url: "https://arxiv.org/pdf/math/0309170v1"
    - title: "Lipshitz, Heegaard Floer Homologies, §5.3"
      url: "https://floer.wiki/more/courses/floer-homology/2024/lipshitz_heegaard_floer_homology.pdf"
---

## Statement

Fix a link projection and its surgery multi-diagram. Identify each first-page vertex group with the reduced state space of the corresponding crossingless resolution. For every cube edge, the induced first differential is the mod-two map assigned by the saddle: multiplication when two resolution circles merge and comultiplication when one resolution circle splits, with the marked-circle quotient at the basepoint. Under these identifications the direct sum of edge maps is the reduced Khovanov differential of the mirror diagram in the Ozsváth–Szabó smoothing convention.

## Statement references

[[lem-os-link-surgery-filtered-complex-and-triangle|Surgery cube and first differential]]

[[lem-os-unlink-resolution-covers-and-floer-tqft|Unlink Floer groups and saddle maps]]

[[def-reduced-khovanov-cohomology-of-a-based-link-over-f2|Based reduced Khovanov cube]]

[Ozsváth and Szabó, *On the Heegaard Floer homology of branched double-covers*, §6, Propositions 6.1–6.2](https://arxiv.org/pdf/math/0309170v1)

[Lipshitz, *Heegaard Floer Homologies*, §5.3](https://floer.wiki/more/courses/floer-homology/2024/lipshitz_heegaard_floer_homology.pdf)

## Facts & Assumptions

**Given:** A fixed link projection, its surgery cube, and the mod-two Heegaard Floer groups and edge maps for every crossingless resolution.

[F1] The surgery complex has the vertex groups and edge filtration described in [[lem-os-link-surgery-filtered-complex-and-triangle]].

[F2] The unlink vertex groups and all marked/unmarked saddle maps must be identified as the reduced Frobenius TQFT ([[lem-os-unlink-resolution-covers-and-floer-tqft]]).

[F3] The reduced Khovanov complex uses precisely the marked-circle quotient and merge/split maps in [[def-reduced-khovanov-cohomology-of-a-based-link-over-f2]].

## Proof

1.1 For a cube edge, the two smoothing states differ by one local saddle, so the target cobordism map is the corresponding edge component of the surgery differential. [F1, given]

1.2 If the local Floer vertex and cobordism identifications in [F2] are established, the edge map becomes multiplication or comultiplication, and [F3] specifies the marked-circle reduction. The current source argument invokes those identifications but does not prove the disk and polygon counts, so the claimed equality has no complete local derivation from available suppliers. Escalated obligations are the TQFT map computation, its marked cases, and compatibility of every edge identification with the surgery filtration and mirror-smoothing convention. [F2, F3, step 1.1]
