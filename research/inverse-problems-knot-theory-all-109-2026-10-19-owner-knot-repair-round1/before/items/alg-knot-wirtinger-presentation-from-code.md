---
id: alg-knot-wirtinger-presentation-from-code
kind: algorithm
title: "Wirtinger presentation from a finite diagram code"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps: [def-knot-planar-code, lem-wirtinger-local-meridian-conjugacy, def-group-presentation]
justified_by: []
aliases: []
proof_strategy: direct
provenance: {statement: literature-derived, proof: ai-generated}
sources:
  references:
    - title: "Cole Charbonneau, Computing the Wirtinger Presentation of a Knot Group from a Knot Diagram, §§2–3"
      url: "https://site.uvm.edu/cmcharbo/files/2021/12/knot-group-1.pdf"
    - title: "Danny Calegari, Introduction to Knot Theory, §4.2, printed pp. 34–36"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
verification: {precheck: pass}
---

## Statement

Define a finite procedure $\mathsf{Wirtinger}(D,a_0)$ on a finite planar code $D$ for one oriented knot and a designated under-arc $a_0$ as follows. First check all incidence, valence, branch-pairing, crossing over/under, edge-orientation, and one-component conditions in the code. For each pair of rational line segments in the drawing certificate, compute the determinant of their direction vectors. If it is nonzero, solve the two-coordinate linear intersection equations and check whether the solution lies on both closed segments. If the determinant is zero, test collinearity and overlap by exact rational determinant and endpoint-order comparisons. Accept an intersection only when it is a shared declared bend or crossing vertex with the recorded incidence, and at a crossing verify that the two branch direction vectors have nonzero determinant. Reject self-intersections and all unrecorded intersections. If any check fails, return `invalid-input`. Otherwise traverse the oriented knot once starting at $a_0$, label the maximal under-arcs $a_1,\ldots,a_m$, and introduce one symbol $x_i$ for the positive meridian of each $a_i$. For each crossing $v$, read from its oriented local chart the over-arc $a_o$, the incoming and outgoing under-arcs $a_L,a_R$, and the conjugation direction supplied by the local meridian-conjugacy rule; append the single relator $x_o x_L x_o^{-1}x_R^{-1}$ or $x_o^{-1}x_Lx_ox_R^{-1}$ accordingly. Once a complement basepoint and basing paths to the meridians are fixed, interpret $x_i$ as the corresponding based positive meridian. Return the finite group presentation with generators $x_1,\ldots,x_m$ and this one relator per crossing. The procedure uses only finite scans and terminates.

## Statement references

[[def-knot-planar-code|Finite planar code and under-arc convention]]

[[lem-wirtinger-local-meridian-conjugacy|Oriented local meridian-conjugacy rule]]

[[def-group-presentation|Group presentation as a quotient of a free group by a relator normal closure]]

## Facts & Assumptions

**Given:** A finite planar code and a designated under-arc.

[F1] A valid code contains finite incidence, crossing, orientation, component, and planar-embedding data, with one under-arc between successive underpassing points; the crossing-free code has one under-arc. [[def-knot-planar-code]]

[F2] At every crossing, the incoming and outgoing under-meridians are related by conjugation by the over-meridian, with direction determined by the oriented chart. [[lem-wirtinger-local-meridian-conjugacy]]

[F3] A finite group presentation is a quotient of the free group on its finite generator list by the normal closure of its finite relator list. [[def-group-presentation]]

## Proof

1.1 Every validation pass and the oriented traversal operate on finite vertex, edge, and half-edge sets. Coherent opposite-half-edge pairing makes the traversal return to its starting arc after finitely many steps; the explicit one-component check rejects a record with more than one cycle. Thus validation and labeling terminate, and the labels are exactly the maximal under-arcs in [F1]. [given, F1, algebra]

2.1 The crossing scan visits each crossing exactly once. By [F2], its local chart selects one of the two displayed conjugacy relators, and no other relation is appended. The resulting generator and relator lists are finite, so [F3] defines the returned presentation; its generator assignment is the meridian assignment stated in the procedure. [F1, F2, F3, step 1.1, algebra] ∎
