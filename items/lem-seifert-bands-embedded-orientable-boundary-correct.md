---
id: lem-seifert-bands-embedded-orientable-boundary-correct
kind: lemma
title: "Seifert disks and bands form an embedded oriented spanning surface"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - alg-seifert-surface-from-diagram
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - def-oriented-seifert-surface
  - def-seifert-smoothing-and-seifert-circles-of-an-oriented-link-diagram
  - lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
  - thm-higher-dimensional-spheres-are-simply-connected
  - def-countable-choice
dependency_level: 1
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Danny Calegari, Introduction to Knot Theory, §3.2, pp.24–26"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
      locator: "Seifert circles, nested disks, twisted bands, and boundary"
    - title: "Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes, §4.3, pp.21–23"
      url: "https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf"
      locator: "The disk-height and twisted-band construction; local proof gaps are supplied in this item"
---

## Statement

Assume the Axiom of Countable Choice. Let $D$ be a finite regular oriented diagram of a single knot, and let the Seifert algorithm supply its finite disk-and-band construction data. These disks and bands can be realized in $S^3$ as a connected compact smooth oriented embedded surface $F$ with exactly one boundary component, whose oriented boundary is the knot represented by $D$. The bands can be chosen mutually disjoint and disjoint from disk interiors except at their attaching intervals.

## Statement references

[[def-seifert-smoothing-and-seifert-circles-of-an-oriented-link-diagram|Oriented smoothing and Seifert circles]]

[[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups|Embedded disk regions for nullhomotopic circles under countable choice]]

[[thm-higher-dimensional-spheres-are-simply-connected|Simple connectivity of the projection sphere]]

[[alg-seifert-surface-from-diagram|The finite disk-and-band construction data]]

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a regular oriented knot diagram $D$, and the finite output data of the Seifert algorithm.

[F1] At each crossing the unique noncrossing pairing compatible with the strand orientations is used; performing this at all crossings gives a finite disjoint union of oriented simple closed curves in $S^2$. ([[def-seifert-smoothing-and-seifert-circles-of-an-oriented-link-diagram]])

[F2] Under $\mathrm{AC}_\omega$, every regular embedded $C^2$ nullhomotopic circle in an oriented surface without boundary bounds an embedded compact disk region; in a sphere component both complementary disk regions are available. ([[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]])

[F3] The sphere $S^2$ is simply connected. ([[thm-higher-dimensional-spheres-are-simply-connected]])

[F4] For each crossing the algorithm records one band between the two oriented smoothing arcs, and it uses one disk record for each Seifert circle. ([[alg-seifert-surface-from-diagram]])

[F5] A Seifert surface is a connected compact smooth oriented embedded surface in $S^3$ whose oriented boundary is the given knot. ([[def-oriented-seifert-surface]])

[A1] The Axiom of Countable Choice is the sequence principle stated in the item. ([[def-countable-choice]])

## Proof

1.1 By [F1], the smoothing gives finitely many disjoint embedded circles in the projection sphere. Choose a point $q$ outside them. By [F3], each circle is nullhomotopic; [F2] and [A1] supply both complementary disk regions, so for each circle choose the region not containing $q$ and orient it to induce the Seifert-circle orientation. Disjoint Jordan circles have disk regions that are nested or disjoint, so their finite strict-inclusion order admits a linear extension. Place nested disks at distinct nearby heights in that order; their interiors are then pairwise disjoint as subsets of $S^3$. [F1, F2, F3, A1, choose, construct]

2.1 Choose pairwise disjoint crossing neighborhoods small enough to avoid all other Seifert-circle boundaries. Put the two projected tangent lines on the coordinate axes. Up to reversing both orientations and exchanging axes, the strand directions are east-and-north or east-and-south. In the first case the orientation-compatible noncrossing pairings are west-to-north and south-to-east; in the second they are north-to-east and west-to-south. Thus in each case the two smoothing arcs are locally parallel and equally directed. Any disk region for a third circle whose interior meets this crossing neighborhood contains the neighborhood and both affected circles, so it is an ancestor of each; its assigned height is lower than their disk heights. Raise narrow collars of both attaching intervals into a local slab above every disk sheet meeting the neighborhood. Attach a rectangle along those intervals with one half-twist. Of the two twist directions, choose the one whose long sides project to the original overpassing and underpassing branches. The equal arrow directions on the smoothing arcs permit opposite boundary parameterizations at the two attaching edges of the rectangle, so its orientation extends the orientations of both disks across the gluing. The crossing neighborhoods are disjoint; finiteness lets all collars and bands be thin enough to avoid every other disk sheet and one another. [F1, F4, step 1.1, construct]

3.1 Gluing the finitely many rectangles to disjoint boundary intervals of the disks and rounding the collar corners gives a smooth embedded compact two-manifold. The orientations agree along each attaching interval, so the surface is oriented. Outside a crossing neighborhood its boundary follows the original diagram arcs; inside each neighborhood the two long sides of the half-twisted band restore the specified crossing and its orientation. Hence the boundary is exactly the original oriented knot. [F1, F4, step 2.1, construct]

4.1 Every disk has an unused boundary arc because only finitely many short attaching intervals were chosen; each band attachment replaces two boundary intervals by its two long sides, so no component of the resulting disk-and-band surface becomes closed. Each connected surface component therefore contributes at least one boundary component. Step 3.1 gives a total boundary consisting of the one knot component, so the surface has exactly one connected component and satisfies [F5]. [F4, F5, step 3.1, given, construct] ∎
