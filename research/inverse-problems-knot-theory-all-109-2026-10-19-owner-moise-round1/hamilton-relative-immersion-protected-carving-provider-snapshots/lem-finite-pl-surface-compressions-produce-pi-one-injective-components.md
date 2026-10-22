---
id: lem-finite-pl-surface-compressions-produce-pi-one-injective-components
kind: lemma
title: "Finite piecewise linear surface compression produces fundamental-group-injective components"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [thm-loop-theorem-for-finitely-triangulated-orientable-pl-three-manifolds, thm-finite-simplicial-approximation-for-maps-of-pairs, lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar, lem-finite-polygonal-disk-and-collar-surgery, lem-finite-convex-cell-complexes-admit-compatible-triangulations, thm-relative-cellular-homology-computes-relative-singular-homology]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Printed p.48, Corollary3.3; full finite cut-side Loop-theorem argument and termination count supplied below."
---

## Statement

Let $M$ be a compact connected orientable PL three-manifold with a supplied finite compatible triangulation, and let $F\subset M$ be a finite orientable two-sided properly embedded PL surface. There is a finite sequence of compressions along embedded disks whose interiors miss the current surface, giving a finite orientable properly embedded surface $F'$ with the same boundary and with every component fundamental-group-injective in $M$. Sphere components may be retained. Each new component's fundamental-group image is, up to a basepath conjugation, a subgroup of the image of an original component.

With coherent orientations, the original and final relative two-cycles differ by the boundary of a finite three-chain supported in the compression neighborhoods. Thus the compression preserves the relative homology class. Only finite choices are used; no choice hypothesis is introduced.

## Facts & Assumptions

**Given:** The finite PL manifold and proper orientable two-sided surface.

[F1] The finite orientable PL Loop theorem applies to marked compact boundary subsurfaces after cutting ([[thm-loop-theorem-for-finitely-triangulated-orientable-pl-three-manifolds]]).

[F2] Continuous disk maps of finite pairs admit finite simplicial approximations ([[thm-finite-simplicial-approximation-for-maps-of-pairs]]).

[F3] Compact locally collared PL subpolyhedra have PL collars ([[lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar]]).

[F4] Finite polygonal disk and arc parameters and prescribed-boundary extensions are available ([[lem-finite-polygonal-disk-and-collar-surgery]]).

[F5] Finite convex cell decompositions admit compatible triangulations; relative cellular chains compute relative homology ([[lem-finite-convex-cell-complexes-admit-compatible-triangulations]], [[thm-relative-cellular-homology-computes-relative-singular-homology]]).

## Proof

**Given:** The pair $(M,F)$.

1.1 At an interior surface point its simple link circle splits the ambient standard link sphere into two polygonal disks; at a boundary point its link arc splits the half-sphere disk into two disks. A tetrahedral planar chart and [F4] give finite parameters for these disks, and coning gives the local plane and half-plane pair charts. The coherent normal orientation labels the two sides. Split the finite triangulation along these labels to cut open $M$ along $F$; the result is a finite orientable manifold with boundary copies of $F$. Collars from [F3] on the two sides give its bicollar, with the side over $\partial F$ in $\partial M$ because those are exactly the boundary sides of the local quadrant charts. These finite constructions apply also to every surface obtained below by surgery. [given, F3, F4, F5, construct]

2.1 Suppose a component $S$ is not fundamental-group-injective. Represent a nontrivial kernel element by a loop in $\operatorname{Int}S$ and a nullhomotopy disk in $M$. Push the map off $\partial M$ using its collar, keeping that compact loop fixed. In a source boundary collar prescribe the map to leave $S$ on one chosen side of its bicollar. Approximate the remaining disk by [F2] and perturb its finitely many interior vertices relative to that collar so it is transverse to $F$: in the normal coordinate of each surface chart avoid zero vertex values and extend over a finite triangulation. A zero slice through a mixed source edge or triangle is then an ordinary polygonal arc, so the interior inverse image of $F$ is a finite disjoint union of circles. The perturbations fit by finite local vertex pushes; earlier nonzero values and disjoint compact pieces are retained by taking later shifts small. [F2, step 1.1, construct]

3.1 Remove the circles whose image loops are nullhomotopic in their respective surface components. For an innermost such source circle, replace its disk by a nullhomotopy in that surface component, pushed to the side occupied just outside the source circle. A small push of the seam to the same side removes the circle and introduces no others. If there are interior circles inside the chosen disk, the replacement discards them too; thus the number strictly drops. This replacement concerns maps of disks, not embedded disks, so the nullhomotopy in the surface need not be embedded. After finitely many removals, if any interior circle remains, take an innermost one; its image is essential in a component of $F$, and its enclosed disk maps with interior disjoint from $F$. If none remains, use the original boundary circle, which was essential in $S$. In either case the disk map lifts to one component of the cut manifold of step 1.1, with boundary in the interior of a marked boundary copy of a component of $F$ and essential there. Apply [F1] with trivial normal subgroup. Its embedded proper disk descends to a compression disk in $M$: its interior misses $F$, and its boundary is an essential simple curve of $F$. [F1, step 1.1, step 2.1, construct]

4.1 Compress along that disk by deleting its boundary annulus in $F$ and inserting the two parallel disk copies. A small product neighborhood of the disk is obtained by cutting along it and applying [F3] on its two sides; along its boundary the quadrant charts keep its side collar in $F$. The new surface is embedded, orientable, has exactly the original boundary, and agrees with the old one outside this neighborhood. Its component fundamental-group images are subgroups of those of the former components: a loop on the compressed surface can be pushed off the inserted disk interiors to their boundary circles, then viewed as a loop in the original surface. The basepath adjustment only conjugates the image. With compatible triangulations the two oriented patches differ by the boundary of this disk-times-interval neighborhood. Hence the relative two-cycles differ by a finite three-boundary, as interpreted by [F5]. [F3, F5, step 3.1, construct]

5.1 This process terminates. For a component of genus $g$ with $b>0$ boundary circles assign weight $2g+b-1$; for a closed component of positive genus assign $2g-1$; assign zero to a sphere. These are nonnegative integers, and disks also have weight zero. A nonseparating compression lowers genus by one and lowers the total weight by two, except that a torus becomes a sphere and lowers it by one. A separating compression preserves total genus and total boundary count but adds one component; it lowers total weight by one. A resulting sphere from a separating compression would mean that the cutting curve bounded a disk in the old surface and was not essential, so does not occur. These counts follow directly by cutting the surface annulus and capping its two resulting circles, or by the finite polygonal disk-and-band model. The initial finite total weight therefore bounds the number of compressions. At the last stage there is no compression disk; step 3.1 then implies that every component is fundamental-group-injective. The subgroup and chain-boundary assertions persist by finite induction using step 4.1. No infinite sequence of selections or choice principle is used. [given, step 3.1, step 4.1, algebra] ∎
