---
id: lem-single-saddle-bubble-word-forces-an-opposite-repeat
kind: lemma
title: "A single-saddle bubble word forces an opposite-sphere repeat"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-flype-crossing-ball-and-alternating-tangle-data
  - lem-explicit-quadrilateral-saddle-foliation-of-a-crossing-ball
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Choice-free: the proof is the four-corner pairing in one supplied saddle disk."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "William Menasco, Closed incompressible surfaces in alternating knot and link complements, Topology 23 (1984), 37–44, Lemma 2, printed p.41, Figure 7(a)"
      url: "https://doi.org/10.1016/0040-9383(84)90023-5"
---

## Statement

Supply a closed surface in finite crossing-ball saddle position whose disks are levels of the explicit quadrilateral model, transverse to the link and to the two shifted spheres, with compatible equatorial corner charts. Suppose a component of its upper intersection has a bubble word with exactly one $S$, and any number of $P$'s. Then some component of its lower intersection meets that same crossing ball in at least two arcs. The reflected statement also holds. Consequently a surface in bubble standard position has no bubble word of the form $P^iS$ for any $i\ge0$, without requiring alternation of the diagram.

## Statement references

[[def-flype-crossing-ball-and-alternating-tangle-data]]

## Facts & Assumptions

**Given:** The finite saddle-position surface, its shifted-sphere intersections and a circle with one saddle visit.

[F1] A bubble word records one $S$ for each saddle arc of its shifted-sphere circle. Bubble standard position excludes a repeated crossing ball on any such circle. ([[def-flype-crossing-ball-and-alternating-tangle-data]])

[F2] A quadrilateral model saddle has four equatorial corners in cyclic order northwest, northeast, southeast and southwest. Its upper arcs pair northwest to northeast and southwest to southeast; its lower arcs pair northeast to southeast and northwest to southwest. ([[lem-explicit-quadrilateral-saddle-foliation-of-a-crossing-ball]])

## Proof

1.1 Write $\sigma$ for the visited saddle. Its chosen upper arc joins, for example, the northwest and northeast corners; the other case is reflected. Removing the interior of this arc from the upper intersection circle leaves a path $\gamma$ joining those two corners which traverses no crossing ball, because the word has only one $S$ by [F1]. It lies entirely in the common projection face, apart from its endpoints. Punctures on it do not change that path. [given, F1, F2, construct]

2.1 The same path $\gamma$ is part of the lower intersection, since the two shifted spheres agree outside the crossing balls. At its northeast endpoint the lower intersection continues along the northeast-to-southeast arc of $\sigma$; at its northwest endpoint it continues along the northwest-to-southwest arc. These are distinct lower arcs in the same crossing ball by [F2]. Both belong to the one lower intersection component containing the connected path $\gamma$. Hence that component repeats the crossing ball. [step 1.1, F2, construct]

3.1 Reflection exchanges the two shifted spheres and gives the opposite conclusion. In bubble standard position the repeat in step 2.1 is forbidden by [F1], so no word with one $S$ occurs. This is exactly the stated $P^iS$ exclusion, for every puncture count including zero. [step 2.1, F1, F2] ∎
