---
id: thm-relative-pl-markings-over-finite-injective-hierarchies-are-homeomorphisms
kind: theorem
title: Relative PL markings over finite injective hierarchies are homeomorphisms
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-aspherical-pl-targets-admit-incompressible-surface-preimages
  - thm-pi-one-injective-finite-pl-surface-maps-are-covers-or-annular-collapses
  - lem-finite-injective-surface-hierarchies-give-aspherical-pieces-and-annulus-map-control
  - lem-finite-pi1-injective-surface-cuts-preserve-three-manifold-irreducibility
  - lem-nullhomotopic-circles-on-finite-oriented-pl-surfaces-bound-pl-disks
  - lem-finite-polygonal-disk-and-collar-surgery
  - lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar
  - thm-relative-simplicial-approximation-after-subdivision
  - prop-relative-cw-inclusions-are-cofibrations
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Friedhelm Waldhausen, On irreducible 3-manifolds which are sufficiently large
      url: https://homepages.math.uic.edu/~kauffman/Waldhausen.pdf
      locator: Theorem6.1 boundary case printed77–79; the actual globally fixed boundary-homeomorphism case is proved directly through the full supplied hierarchy
---

## Statement

Assume AC. Let $M,N$ be compact connected orientable irreducible PL three-manifolds, with supplied finite triangulations and nonempty boundary. Suppose $M$ has an actual finite hierarchy whose cutting surfaces are connected two-sided properly embedded finite PL surfaces with nonempty boundary and injective face and piece groups, and whose final pieces are parametrized PL balls. Let $f:(N,\partial N)\to(M,\partial M)$ be continuous, injective on fundamental groups, and suppose its boundary restriction is a PL homeomorphism $\partial N\to\partial M$.

Then $f$ is homotopic through maps of pairs, with its entire boundary restriction pointwise fixed throughout, to a PL homeomorphism $N\to M$. No fibered, genus, separating-surface or negative-Euler restriction is imposed. In particular an actual injective marking with the given boundary homeomorphism is realized, not merely some unmarked homeomorphism between the manifolds.

The supplied-hierarchy formulation is the interface of this theorem, not an additional premise silently placed on original knot hyperbolization: using it there requires the separate proved hierarchy construction and an actual marking map satisfying these boundary data.

## Facts & Assumptions

**Given:** AC, the finite PL manifolds, irreducibility, the actual injective hierarchy and the injective continuous marking with its specified PL boundary homeomorphism.

[A1] Full choice is [[def-axiom-of-choice]].

[F1] Every target piece in this hierarchy has contractible universal cover. Maps to such targets can be made product-transverse to the next cut with no spherical preimage and all preimage components injective, fixing their supplied boundary product. [[lem-finite-injective-surface-hierarchies-give-aspherical-pieces-and-annulus-map-control]], [[lem-aspherical-pl-targets-admit-incompressible-surface-preimages]]

[F2] An injective finite PL surface map of pairs with nontrivial source group is homotopic to a finite covering or an annular boundary collapse, fixing its boundary whenever it is already locally homeomorphic. [[thm-pi-one-injective-finite-pl-surface-maps-are-covers-or-annular-collapses]]

[F3] Cutting an irreducible finite PL manifold along injective two-sided surfaces with no spherical closed components preserves irreducibility and injects piece groups; its face maps inject as well. [[lem-finite-pi1-injective-surface-cuts-preserve-three-manifold-irreducibility]]

[F4] Nullhomotopic polygonal circles on finite surfaces bound PL disks; a compact simply connected oriented surface with boundary is a disk. PL disk boundary homeomorphisms extend, and compatible finite collars exist. Relative finite simplicial approximation fixes a prescribed PL subcomplex and finite CW pairs have homotopy extension. [[lem-nullhomotopic-circles-on-finite-oriented-pl-surfaces-bound-pl-disks]], [[lem-finite-polygonal-disk-and-collar-surgery]], [[lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar]], [[thm-relative-simplicial-approximation-after-subdivision]], [[prop-relative-cw-inclusions-are-cofibrations]]

## Proof

1.1 First make $f$ PL relative to its given boundary using [F4]. It can be made a product over that homeomorphism on a source boundary collar, with no other inverse image of $\partial M$. Here is the relative collar operation. On a sufficiently small source collar the image lies in a target collar by compactness. Homotope its tangential coordinate to the given boundary value by first retracting the source collar onto its boundary, extending by homotopy extension across a slightly larger collar. Replace its target inward height there by the source inward height, interpolating on the outer collar. On the remaining compact interior push every target boundary height a small positive distance inward, with a positive PL function on source interior vanishing on the fixed source boundary. In product coordinates use the maximum of the former height and that function, with a cutoff before the outer end of the target collar. The endpoint has strictly positive target height at every interior point. All operations are PL after finite subdivisions and fix the prescribed boundary. A continuous preliminary collar homotopy, if used, is made PL at its endpoint relative to the fixed collar by [F4]; the compact interior maps into an open interior set, so sufficiently fine local approximations retain that property. Finally shrink the target collar below the positive minimum boundary-distance of the image of the compact source complement of the product collar. Its full preimage is then exactly the smaller source product collar; there is no extra interior sheet over the initial processed region. [F4, given, construct]

2.1 We induct through the target hierarchy, keeping $f$ a homeomorphism over the union $V$ of the original boundary collar and all previously processed cut collars, and making no further change there. At the start this holds by step 1.1. The boundary of every current target piece lies in this already processed region, with labeled face corners rounded or subdivided in their product charts. Thus its whole preimage boundary maps HOMEOMORPHICALLY to it, not merely locally homeomorphically. Indeed this is a restriction of the single homeomorphism over $V$, with the same face labels. Every source current piece is irreducible and injects its group into $N$ by [F3], once prior cuts have been processed. The corresponding target piece injects into $M$. Therefore its restricted map is injective on groups: a loop killed in that target piece is killed in $M$, hence in $N$ by injectivity of $f_*$, and hence in its source piece by the prior cut injections. [F3, step 1.1, given, induction]

3.1 Let $F$ be the next target surface in its current target piece $C$. Apply [F1] on every source piece mapping to $C$. The resulting finite preimage system $G$ is injective and non-spherical, and the map is product-transverse to $F$, still fixed on $V$. Each restriction $G_i\to F$ is injective on groups: its composite into $M$ factors through the injection of $G_i$ into $N$ and the injection of $f_*$, while $F\to M$ is injective by the target hierarchy. More explicitly a kernel loop is killed in $M$, hence in $N$, hence in $G_i$. A closed positive-genus $G_i$ cannot occur: [F2] would give a finite covering of $F$, which has boundary, or an annulus collapse, both impossible for a closed source. There is no sphere by [F1]. Thus all $G_i$ have boundary. [F1, F2, F3, step 2.1, given, construct]

4.1 For a $G_i$ with nontrivial group apply [F2] relative to its boundary maps, which are local homeomorphisms by the fixed homeomorphism on the current piece boundary. An annular collapse is impossible: its two source boundary circles would map into the SAME target boundary circle, whereas the boundary map of the entire current source system is injective by step 2.1. Thus it is homotopic relative boundary to a finite covering of $F$. A simply connected $G_i$ is a disk by [F4]; its boundary circle maps homeomorphically to a component of $\partial F$, again by that global boundary injectivity. This circle is nullhomotopic in $F$ via $G_i$; the boundary-circle assertion of [F4] forces $F$ to be a disk. Extend its boundary homeomorphism over $G_i$, and homotope the original disk map to this extension relative boundary in a convex disk parametrization. This handles the trivial-group case without applying the nontrivial-group surface theorem to it. [F2, F4, step 2.1, step 3.1, construct]

5.1 There is exactly one $G_i$, and its finite covering has degree one. The boundary of $F$ is nonempty. Each point on it has exactly one inverse image in the current source boundary by step 2.1, and product transversality makes that point belong to the boundary of some $G_i$. A covering of $F$ has the same degree at every boundary point; the existing unique inverse image forces its degree to be one and leaves no boundary point for another component. Each $G_i$ has boundary by step 3.1, so there is no additional component hidden from this count. Consequently the map can be made a homeomorphism on this unique preimage surface. Perform its relative-boundary homotopy on a source normal collar, with a taper in the normal parameter: if $H_s$ is the surface homotopy and $t$ the unchanged normal coordinate, use $(x,t)\mapsto(H_{s\beta(t)}(x),t)$, where $\beta=1$ on the middle collar and $0$ near its outer ends. Its endpoint is a homeomorphism on a smaller full collar of $F$, and remains unchanged on $V$. The inverse image of that smaller target collar is exactly this collar: outside the original product neighborhood compactness supplies a positive distance from $F$. Thus the induction extends the homeomorphism over the new processed collar. [F1, F2, F4, step 3.1, step 4.1, construct]

6.1 Cut the source along this injective preimage surface and continue. Irreducibility and piece-group injections for every new piece follow from [F3], since there are no closed sphere components. The target surfaces and collars of subsequent cuts are carried with the labeled current pieces; nothing resets the given hierarchy. There are finitely many cuts, and step 5.1 performs each one while fixing all earlier processed collars and the original boundary. The induction therefore reaches the final target ball pieces, with the map already a homeomorphism over the full preimage of their boundary collars. [F3, step 2.1, step 5.1, induction]

7.1 Every remaining source piece has a nonempty spherical boundary mapping homeomorphically to the boundary of its target ball. It is irreducible by step 6.1. A connected irreducible compact manifold with a sphere boundary component is itself a ball: push that sphere into its collar, fill it by the interior ball supplied by irreducibility, and observe that the ball lies on the side away from the original boundary. Adding the boundary collar gives a ball with no interior frontier in the connected piece, so it is the whole piece. Thus there can be no further boundary component. Choose a ball parametrization; the specified sphere boundary homeomorphism extends over the ball by coning after finite subdivision. The old and new ball maps into the target ball are homotopic relative boundary by convex interpolation in a ball parametrization. Do this on each of the finitely many source pieces. Their homotopies agree on all fixed collars, so they glue to a homotopy relative the original boundary. [F4, step 6.1, given, construct]

8.1 The resulting global map is a proper local PL homeomorphism: on the balls it is a homeomorphism, on their glued face collars it is the already fixed product homeomorphism, and at boundary/corner sectors those same compatible products supply the local model. Its image is nonempty, open by these models and closed by compactness, hence all of connected $M$. A proper local homeomorphism is a finite covering: each fiber is compact discrete and finite, take the intersection of its finitely many image neighborhoods, and use compactness of the remaining source to exclude extra inverse images after shrinking. Path lifting gives a constant degree. On the nonempty target boundary that degree is one because the original boundary homeomorphism was fixed. Hence the covering has degree one and is a PL homeomorphism. This proves the exact relative realization. All hierarchy and marking inputs have been used explicitly; neither a general homotopy-to-homeomorphism theorem nor an unproved plane-unknotting assertion was used as a supplier. [step 1.1, step 5.1, step 7.1, given, construct] ∎

## Authoring status

This is an unfrozen proof-development theorem, held with the entire surface-map/preimage/relative-marking dependency chain. The next consolidated review must check the actual preimage-surgery supplier, the global frontier homeomorphism induction and every relative extension. No original knot-hyperbolization application, pared marking map existence or canonical readiness is claimed.
