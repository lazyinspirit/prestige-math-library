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
provenance: {statement: literature-derived, proof: not-applicable}
sources:
  references:
    - title: "Cole Charbonneau, Computing the Wirtinger Presentation of a Knot Group from a Knot Diagram, §§2–3"
      url: "https://site.uvm.edu/cmcharbo/files/2021/12/knot-group-1.pdf"
    - title: "Danny Calegari, Introduction to Knot Theory, §4.2, printed pp. 34–36"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
verification: {precheck: pass}
---

## Definition

Define a procedure $\mathsf{Wirtinger}(D,a_0)$ on a finite planar code $D$ for one oriented knot and a designated under-arc $a_0$ as follows. First check all incidence, valence, branch-pairing, crossing over/under, edge-orientation, and one-component conditions in the code. For each pair of rational line segments in the drawing certificate, compute the determinant of their direction vectors. If it is nonzero, solve the two-coordinate linear intersection equations and check whether the solution lies on both closed segments. If the determinant is zero, test collinearity and overlap by exact rational determinant and endpoint-order comparisons. Accept an intersection only when it is a shared declared bend or crossing vertex with the recorded incidence, and at a crossing verify that the two branch direction vectors have nonzero determinant. Reject self-intersections and all unrecorded intersections. If any check fails, return `invalid-input`. Otherwise traverse the oriented knot once starting at $a_0$, label the maximal under-arcs $a_1,\ldots,a_m$, and introduce one symbol $x_i$ for the positive meridian of each $a_i$. For each crossing $v$, read its oriented over-tangent and positive in-plane normal. Let $a_s$ be the under-side from which that normal points and $a_t$ the side toward which it points, and read the over-arc $a_o$. Append exactly the relator $x_o^{-1}x_sx_ox_t^{-1}$. Equivalently, if the incoming under-tangent follows that normal, append $x_o^{-1}x_{\rm in}x_ox_{\rm out}^{-1}$; otherwise append $x_ox_{\rm in}x_o^{-1}x_{\rm out}^{-1}$. The orientation of a positive meridian is fixed locally by requiring the knot tangent followed by the normal-disk orientation to give the ambient orientation. Once a complement basepoint and basing paths to the meridians are fixed, interpret $x_i$ as the corresponding based positive meridian. Return the finite group presentation with generators $x_1,\ldots,x_m$ and this one relator per crossing.

## Definition references

[[def-knot-planar-code|Finite planar code and under-arc convention]]

[[lem-wirtinger-local-meridian-conjugacy|Oriented local meridian-conjugacy rule]]

[[def-group-presentation|Group presentation as a quotient of a free group by a relator normal closure]]

