---
id: def-knot-planar-code
kind: definition
title: "Finite planar codes for oriented knot diagrams"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [def-oriented-link-in-s-three-and-ambient-isotopy,
       def-regular-oriented-link-diagram]
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Danny Calegari, Introduction to Knot Theory, §4.2, pp. 34–36"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
    - title: "Cole Charbonneau, Computing the Wirtinger Presentation of a Knot Group from a Knot Diagram, §§1.2–3.2"
      url: "https://site.uvm.edu/cmcharbo/files/2021/12/knot-group-1.pdf"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Definition

Work with smooth oriented knots in the standard oriented three-sphere; a knot is a one-component oriented link. A **finite planar code for an oriented knot diagram** consists of finite vertex and edge sets, incidence data, a cyclic order of the four half-edges at every crossing vertex, a pairing of opposite half-edges into the two local branches, an orientation of each edge, and a choice of which branch is over at each crossing. Every other vertex is a bend vertex of valence two. The code includes a finite plane-drawing certificate: rational coordinates for the vertices and bends, and a finite polygonal path for every edge. The certificate must realize the incidences and cyclic orders, have no edge self-intersection, and have pairwise disjoint edge interiors except at the specified bend and crossing vertices; at a crossing the two branches must be transverse. These conditions are checked by finitely many exact segment-intersection tests. Edge orientations must join coherently across each paired branch and each bend vertex, and following the edges through the crossing pairings and the degree-two bend vertices must give one oriented circle. Thus an admissible code represents a connected regular oriented diagram of a single knot. If there are no crossing vertices, the code is one oriented polygonal circle and has one arc. Smooth each bend in a small disk disjoint from all crossings and other edges; the resulting smooth diagram has the same crossing data.

An **under-arc** is a maximal portion of the oriented circle between consecutive points where the knot passes under at a crossing; the over branch is not cut. With no crossings the entire circle is the unique under-arc. A **positive meridian** of an oriented branch is the oriented boundary of a small normal disk, with disk orientation chosen so that the oriented tangent to the branch followed by the disk orientation agrees with the ambient orientation of $S^3$. Planarity, incidence, orientation consistency, one-component tracing and the over/under data are input validity conditions; a procedure receiving an invalid finite record must report invalid input rather than repair it. The code stores no algebraic crossing sign: the oriented plane and the direction of the over branch determine which incident under branch is on its left and which is on its right.

## Definition references

[[def-oriented-link-in-s-three-and-ambient-isotopy|Smooth oriented links in the standard three-sphere and the one-component knot convention]]

[[def-regular-oriented-link-diagram|Finite transverse double points, strand orientations, and over/under data in a regular oriented diagram]]
