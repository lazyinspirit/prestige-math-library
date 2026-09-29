---
id: lem-finite-frameable-decomposition-of-a-regular-disk-region
kind: lemma
title: Finite frameable decomposition of a regular disk region
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - def-oriented-riemannian-surface-and-positive-quarter-turn
  - def-regular-oriented-surface-region-with-piecewise-smooth-boundary
  - thm-finite-curvilinear-triangulation-of-a-compact-riemannian-surface
justified_by: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf"
      locator: "Chapter 9, §The Gauss–Bonnet Formula, printed pp. 165–167 (PDF pp. 181–183): the local formula is proved in a single positively oriented orthonormal frame on a coordinate chart, so a disk region must first be subdivided into chart pieces. Problem 9-5, printed pp. 171–172, outlines the convex cover used for that subdivision."
    - title: "Ved Datar, Lectures on Riemannian Geometry"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Lecture 2, §2.1–2.2, printed pp. 11–15 (PDF pp. 18–22): the local Gauss–Bonnet proof is carried out on a chart with an oriented orthonormal frame obtained from the coordinate frame by Gram–Schmidt. The finite chart decomposition of a disk region is constructed here."
---

## Statement

Assume the axiom of choice. Let $(M,g)$ be an oriented Riemannian surface and let $D\subseteq M$ be a
compact regular oriented disk region with finitely many ordinary corners. Then
$D$ admits a finite face-to-face subdivision into regular triangular closed-disk
pieces whose vertices, edges and faces form a finite regular CW structure on
$D$, such that each piece is contained in an oriented coordinate chart of $M$, carries a
smooth positively oriented $g$-orthonormal frame, and has only ordinary corners
after finite subdivision. Every new edge is piecewise smooth; the relative
interior of each new edge that is not a supplied boundary subarc lies in
$\operatorname{Int}D$, while its endpoints may lie on $\partial D$.

## Facts & Assumptions

**Given:** The oriented ambient Riemannian surface and compact regular disk region $D$ with ordinary corners. Full AC is assumed because [F1] uses the arbitrary-Jordan-curve planar suppliers ([[def-axiom-of-choice]]).

[F1] A compact regular cornered region has finite triangular closed-disk face, edge, and link data preserving its boundary; every face lies in a coordinate disk carrying a smooth orthonormal frame after choosing a local orientation ([[thm-finite-curvilinear-triangulation-of-a-compact-riemannian-surface]]).

[F2] On an oriented surface, Gram–Schmidt applied to a positive coordinate basis gives a smooth positively oriented orthonormal frame ([[def-oriented-riemannian-surface-and-positive-quarter-turn]]).

[F3] The regular-region boundary convention gives ordinary sector corners and the outward-normal-first orientation ([[def-regular-oriented-surface-region-with-piecewise-smooth-boundary]]).

## Proof

**Proof technique:** specialize the finite curvilinear face data to the oriented disk and orient each local frame positively.

1.1 Apply [F1] to $D$ in the supplied ambient surface. It gives finitely many face-to-face triangular closed disks, each in an ambient coordinate disk, with regular $C^2$ edges, ordinary sector corners, full-edge intersections, and the original boundary arcs retained up to subdivision. Every added edge has relative interior in $\operatorname{Int}D$. [F1, F3, given]

2.1 Since the ambient surface is oriented, choose the positive coordinate orientation on each face chart and apply [F2]. The resulting smooth positive $g$-orthonormal frame is defined on an open neighbourhood of each closed face. Give each face the orientation induced from $D$; its sector corners remain ordinary by [F3]. The triangular closed cells of step 1.1 have full-edge or vertex intersections and nonzero sector links, so [F1]'s regular-CW conclusion applies to their vertices, edges and faces. Thus they form the asserted frameable disk decomposition. The exact full-AC use is inherited solely through [F1]'s planar Jordan/graph construction. [F1, F2, F3, step 1.1] ∎

## Source locator
Lee, *Riemannian Manifolds*, Chapter 9, printed pp. 165–172, proves the local formula in a positive chart frame and outlines finite subdivision in Problem 9-5. The actual finite corner-compatible subdivision is supplied by [[thm-finite-curvilinear-triangulation-of-a-compact-riemannian-surface]]; positive frame construction is Gram–Schmidt.
