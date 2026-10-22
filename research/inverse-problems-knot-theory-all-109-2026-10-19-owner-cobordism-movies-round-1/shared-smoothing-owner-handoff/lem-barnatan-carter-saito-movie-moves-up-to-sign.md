---
id: lem-barnatan-carter-saito-movie-moves-up-to-sign
kind: lemma
title: "The even Khovanov map is unchanged up to sign by each movie move"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-barnatan-tangle-cobordism-category
  - def-countable-choice
  - def-generic-movie-of-an-oriented-knot-cobordism
  - def-khovanov-cobordism-map-up-to-sign
  - lem-khovanov-frobenius-tqft-respects-barnatan-relations
  - lem-khovanov-reidemeister-chain-homotopies
dependency_level: 9
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Assumes AC_omega through the link-level Khovanov groups. The local algebraic checks of the movie moves use no additional choice principle."
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Dror Bar-Natan, Khovanov's homology for tangles and cobordisms, §8.3 and Theorem 5"
      url: "https://arxiv.org/pdf/math/0410495v2"
      locator: "Printed pp.1475–1480; classification into three move types and the local up-to-homotopy checks"
    - title: "Magnus Jacobsson, An invariant of link cobordisms from Khovanov homology, Lemmas 5.1–5.2"
      url: "https://arxiv.org/pdf/math/0206303"
      locator: "Printed pp.1236–1244; distant critical points and the fifteen Carter–Saito move calculations"
    - title: "Mikhail Khovanov, A categorification of the Jones polynomial, §7"
      url: "https://arxiv.org/pdf/math/9908171v2"
      locator: "§7.1; the movie-level map construction and local algebra maps"
---

## Statement

Assume countable choice. For each Carter–Saito movie move, the two movie segments have the same incoming and outgoing oriented link diagrams and represent isotopic portions of an oriented surface cobordism relative to their boundary collars. The induced maps on the integral even Khovanov homology groups of those diagrams differ by multiplication by a single overall sign. The same conclusion holds when two disjoint critical points of the height function are interchanged.

## Statement references

[[def-khovanov-cobordism-map-up-to-sign|The map associated to a fixed generic movie]]

[[lem-khovanov-frobenius-tqft-respects-barnatan-relations|The Frobenius TQFT and the S, T, and four-tube relations]]

[[lem-khovanov-reidemeister-chain-homotopies|Chain homotopy equivalences for Reidemeister moves]]

[Bar-Natan, *Khovanov's homology for tangles and cobordisms*, §8.3 and Theorem 5](https://arxiv.org/pdf/math/0410495v2)

[Jacobsson, *An invariant of link cobordisms from Khovanov homology*, Lemmas 5.1–5.2](https://arxiv.org/pdf/math/0206303)

[Khovanov, *A categorification of the Jones polynomial*, §7](https://arxiv.org/pdf/math/9908171v2)

## Unresolved proof obligations

The complete local verification for all fifteen moves has not been authored. Bar-Natan groups the checks into inverse Reidemeister clips, reversible circular clips, and five nonreversible clips. The reversible-clip argument requires the Kh-simplicity lemmas for crossingless tangles and their preservation under adding/removing crossings; those helper results are not local dependencies in this pair. The nonreversible clips require explicit chain maps and homotopies, including local four-tube reductions. Jacobsson provides case-by-case calculations, but the carrier does not reproduce and verify every map, sign, and homotopy. No proof of the blanket statement is claimed.
