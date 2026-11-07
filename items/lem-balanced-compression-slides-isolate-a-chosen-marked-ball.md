---
id: lem-balanced-compression-slides-isolate-a-chosen-marked-ball
kind: lemma
title: "Balanced compression slides isolate a chosen marked ball"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-countable-choice
  - def-admissible-pointed-heegaard-floer-data
  - lem-marked-planar-cut-surface-regions-are-realized-by-disk-slides
  - lem-smooth-jordan-disk-boundary-maps-extend-to-diffeomorphisms
  - thm-collar-neighborhood-theorem
  - lem-supported-neat-proper-isotopies-extend-boundary-preservingly
  - lem-broad-compression-comparisons-preserve-retained-disks-and-smooth-local-moves
  - lem-simultaneous-bridge-witnesses-can-avoid-a-compression-disk-system
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Manolescu, Ozsvath and Sarkar, A combinatorial description of knot Floer homology"
      url: "https://arxiv.org/pdf/math/0607691"
      locator: "Lemma2.4, printed9–10, reduction of A1 and B1 to disks by slides; finite cut-ball face proof supplied here"
---

## Statement

Assume Countable Choice. Take either compression system of a balanced multipointed knot diagram in $S^3$, with $k>1$ and the actual disks and trivial arcs of the balanced pointed-diagram definition. Fix one of its cut balls $B$ and its two marked endpoints. A finite sequence of handleslides and isotopies of this system, avoiding all marks, makes the surface complementary component containing these endpoints a disk. Each completed slide preserves the balanced diagram, its actual oriented knot and simultaneous boundary-parallelism. The genus, number of pairs and number of curves are unchanged. The other attaching system is left unchanged, apart from transverse perturbations of the moving curves if needed.

Consequently, given one $w$ point in a balanced diagram with $k>1$, slides of the two systems make both complementary components containing it disks. This is the first reduction of the MOS local pair-isolation argument; it does not yet reduce the intersections of those disks to a single marked bigon.

## Statement references

[[def-admissible-pointed-heegaard-floer-data]]

## Facts & Assumptions

**Given:** A connected handlebody cut into $k>1$ balls by its actual balanced disks, and the chosen ball with its marked trivial arc.

[F1] [[def-admissible-pointed-heegaard-floer-data]] supplies the ball decomposition and the marked arcs, with exactly one arc in each ball.

[F2] [[lem-marked-planar-cut-surface-regions-are-realized-by-disk-slides]] constructs marked-point-free bands on a specified planar cut-boundary region, with the disk and arc preservation proof and transverse perturbation.

[F3] A smooth planar Jordan region is a disk with prescribed boundary collars ([[lem-smooth-jordan-disk-boundary-maps-extend-to-diffeomorphisms]]); smooth boundary collars exist ([[thm-collar-neighborhood-theorem]]), under Countable Choice.

[F5] Neat proper disk isotopies, with interior in the manifold interior and boundary in its boundary, extend to boundary-preserving ambient isotopies with prescribed support ([[lem-supported-neat-proper-isotopies-extend-boundary-preservingly]]). Before applying the smooth-boundary extension theorem to a cut manifold, round its finitely many disk-face corners in small product collars, away from marks and actual arcs, transporting the band and face coordinates through this rounding. The local rounding is a monotone smoothing of the quadrant corner in its two normal coordinates and is the identity outside those collars. All proper compression-disk isotopies below are chosen product-neat in the resulting boundary collars. For a bridge-boundary path change, first extend its isotopy on the boundary surface and then through a thin product collar; it is stationary near its marked endpoints, so that collar support can miss the actual knot arcs.

[F6] Broad original compression witnesses are first compared with neat disks by a boundary-pointwise-fixing homeomorphism, smooth away from the old rim curves. Compact objects off those rims have a genuine smooth comparison. Completed parallel band sums may miss the ENTIRE old family, so their smooth pullbacks restore retained ORIGINAL disks exactly. Bridge witnesses are first cleaned of all disk intersections, including for extended empty-ball systems. Neat proper-disk isotopies below occur ONLY in that auxiliary comparison. ([[lem-broad-compression-comparisons-preserve-retained-disks-and-smooth-local-moves]], [[lem-simultaneous-bridge-witnesses-can-avoid-a-compression-disk-system]])

## Proof

1.1 First use [F6] to clean witnesses and prepare a neat auxiliary cut-ball model, fixing the surface, all actual attaching curves, marked arcs and face labels. Record the reconstruction of the handlebody from its cut balls as a finite connected graph: a vertex for each ball, and an edge for each compression disk, joining the balls on its two faces; an edge can be a loop. It is connected because regluing faces in different graph components cannot join them, whereas the handlebody is connected. Since $k>1$, the chosen vertex has an edge to a different vertex: otherwise it would be an isolated graph component. Choose its disk as an anchor $D_0$, its chosen-ball face as $E_0$, and its other ball as $B'$. Write $d$ for the number of faces incident to $B$, counting both faces of each loop. If $d=1$, the component of the attaching-complement surface belonging to $B$ is the boundary sphere of $B$ minus the one disk face, hence is a disk by [F3], and there is nothing to do. [F6, F1, F3, given, construct, cases]

2.1 If $d>1$, choose any other incident face $E$ of a disk $D_j\ne D_0$. Such a face exists because the anchor is not a loop. Join $E_0$ to $E$ by an embedded band in the rest of the boundary sphere of $B$, avoiding all other disk faces and both marks. For completeness, remove the interiors of the finitely many disjoint faces and the two points from that sphere. It is connected: choose a plane chart whose missing point avoids all these closed disks and endpoints, join two chosen boundary-collar points by a polygonal path, reroute its finitely many disk crossings along their exterior collars, and detour around its finitely many point obstacles. Erase loops and smooth corners in smaller collars to give the band core. A sufficiently thin band misses all forbidden sets. The union of $E_0$, this band and $E$ is a disk $Q$ by [F3]. Its complement of the two face interiors is the disk-with-two-holes region of [F2], so sliding the anchor over $D_j$ along this band is permitted. [F2, F3, step 1.1, construct]

3.1 Track the distinguished ball as follows. The disk of the new anchor is the boundary sum of the old anchor with a parallel of $D_j$ along the band, as in [F6, F2]. In the cut picture, take a thin inward boundary cap over $Q$ in $B$, disjoint from its knot arc. Cutting along the new anchor instead of the old one transfers this cap to the ball across the anchor face. The new boundary of the retained core of $B$ has the two old faces $E_0,E$ replaced by the single new anchor face. This description follows directly by tracing the boundary sum: its three pieces are the old anchor disk with its band interval removed, the parallel disk with its interval removed, and the two sides of the band; these are exactly the inward frontier of that cap after the two old face openings are joined. The old ball $B'$ gains the cap through the old anchor opening. A ball minus a thin boundary cap, or a ball with such a cap added along one disk, is a ball: flatten the cap graph in its boundary collar as in [F3]. All actual arcs lie outside the thin cap and keep their endpoints. The other face of $D_j$ is untouched. If it was also incident to $B$, it remains there; if it belonged to a third ball, that ball is untouched. In each case the new anchor still joins the retained core of $B$ to $B'$, and the incidence count at the chosen core decreases from $d$ to $d-1$. Thus this operation handles one face at a time, including the two separate faces of a loop disk. The full disk/arc and bridge conditions follow from [F2]. Its [F6] construction chooses the new anchor disk disjoint even from its old moving disk, pulls that completed disk and the cap-avoiding bridge witnesses back smoothly, and restores all other actual disks exactly. Thus the incidence computation in the neat comparison is also the actual incidence computation, through its boundary-fixed cut homeomorphism; no initial tangential face was treated as a product face. [F6, F1, F2, F3, step 2.1, construct]

4.1 Repeat step3.1 until the positive integer $d$ becomes one. The anchor remains nonloop at every step, so the construction remains available. After exactly its initial $d-1$ iterations, the chosen ball boundary has one disk face. Removing that face leaves a disk containing precisely its original two endpoints. Every intermediate stage is a balanced knot diagram by [F2], and no genus, marking or disk count changed. Apply this argument first to the $\alpha$ ball containing a specified $w$, and then to the $\beta$ ball containing it. Slides of the second system do not change the first system or its disk complementary component. This proves the two-system conclusion. All choices and iterations were finite, and Countable Choice enters only through the stated suppliers. [F1, F2, F3, step 1.1, step 3.1, construct] ∎
