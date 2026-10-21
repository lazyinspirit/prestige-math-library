---
id: lem-regular-projection-admits-finite-planar-code
kind: lemma
title: Every regular knot projection admits a finite rational planar code
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-knot-planar-code
  - def-regular-oriented-link-diagram
  - lem-every-oriented-link-admits-a-regular-projection
  - def-countable-choice
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - thm-isotopy-extension
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Cole Charbonneau, Computing the Wirtinger Presentation of a Knot Group from a Knot Diagram"
      url: "https://site.uvm.edu/cmcharbo/files/2021/12/knot-group-1.pdf"
      locator: "§§1.2–2, printed pp. 2–4, finite planar diagrams and code data"
    - title: "Danny Calegari, Introduction to Knot Theory"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
      locator: "§§4.1–4.2, printed pp. 32–36, finite diagram conventions"
---

## Statement

Assume the Axiom of Countable Choice. Every smooth oriented knot in $S^3$ has an admissible finite planar code whose rational polygonal drawing certificate represents a regular oriented diagram of that knot.

## Statement references

[[def-knot-planar-code|The finite rational polygonal code requirements]]

[[def-regular-oriented-link-diagram|Regular projections, transverse double points, and over/under data]]

[[lem-every-oriented-link-admits-a-regular-projection|Existence of a regular projection under countable choice]]

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and a smooth oriented knot $K\subset S^3$.

[A1] The Axiom of Countable Choice, written $\mathrm{AC}_\omega$. [[def-countable-choice]]

[F1] Under $\mathrm{AC}_\omega$, the knot can be moved off infinity and projected regularly; the projection has finitely many transverse double points and no triple points. [[lem-every-oriented-link-admits-a-regular-projection]]

[F2] A finite planar code records a rational polygonal path for every edge, exact incidence and over/under data, transverse crossing vertices, and one oriented component. [[def-knot-planar-code]]

[F3] Regularity is the condition that the projected knot is an immersion with only finitely many transverse double points and no higher multiple points. [[def-regular-oriented-link-diagram]]

[F4] An isotopy of embeddings of a compact circle extends to an ambient isotopy under AC$_\omega$. [[def-oriented-link-in-s-three-and-ambient-isotopy]], [[thm-isotopy-extension]]

## Proof

**Given:** AC$_\omega$ and a smooth oriented knot $K\subset S^3$.


1.1 Apply [F1] and list the finitely many crossings of the resulting projection. Around each crossing choose a closed disk meeting the image in exactly two transverse arcs, with all such disks pairwise disjoint. Subdivide the remaining compact arcs into finitely many subarcs contained in planar coordinate disks where each arc is a graph over a line interval and where nonincident pieces are separated. Compactness and finiteness give a positive minimum for the separations between the disjoint pieces. [A1, F1, F3, given, construct]

2.1 In each crossing disk, choose a nearby rational point $q$ and move the crossing there by a small planar isotopy supported in that disk. Choose two linearly independent rational direction vectors close to the two tangent directions there. Small rational multiples in both signs give four rational endpoints about $q$, in the same cyclic order as the branch germs. Replace the branches near $q$ by the two straight diameters through these endpoints, joining back inside the corresponding four disjoint sectors; this is a small isotopy of the crossing. Outside these disks, approximate each graph arc from step 1.1 by a sufficiently fine polygonal graph and perturb its finitely many vertices to rational coordinates. Choose all perturbations smaller than one third of the positive separation bound, so distinct nonincident pieces remain disjoint and every adjacent segment stays in its graph chart. [F2, step 1.1, construct]

3.1 Orient the polygonal edges by the original circle parameter, pair the four crossing half-edges as on the original branches, and retain each crossing's over/under label. In each graph chart interpolate linearly between the original graph and the rational polygonal graph; the graphs remain embedded, their boundary endpoints agree, and their disjoint neighborhoods prevent new intersections. In each crossing disk the two interpolated branches keep the same four sectors and nonzero crossing determinant at the fixed rational point. Smooth each bend inside a smaller disk disjoint from all crossings. This gives an isotopy through diagrams with exactly the original crossing data. Lift the over/under heights continuously; strict height inequalities at each crossing persist, so this is an isotopy of embedded circles, which extends to an ambient isotopy by [F4]. The resulting rational polygonal data satisfy all clauses of [F2]. [A1, F2, F3, F4, step 1.1, step 2.1, construct] ∎

## Sources

[[def-knot-planar-code]]

[[lem-every-oriented-link-admits-a-regular-projection]]
