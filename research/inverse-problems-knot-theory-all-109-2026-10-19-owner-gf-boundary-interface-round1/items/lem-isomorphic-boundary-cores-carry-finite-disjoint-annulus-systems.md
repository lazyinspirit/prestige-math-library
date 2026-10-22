---
id: lem-isomorphic-boundary-cores-carry-finite-disjoint-annulus-systems
kind: lemma
title: Isomorphic boundary cores carry finite disjoint annulus systems
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-finite-annulus-cuts-preserve-isomorphic-boundary-piece-groups
  - thm-incompressible-pl-boundary-surfaces-with-common-loops-have-embedded-annuli
  - lem-finite-subpolyhedra-have-compact-pl-manifold-neighborhoods
  - thm-finite-simplicial-approximation-for-maps-of-pairs
  - lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar
proof_strategy: direct
axiom_use: Full AC is inherited from the finite cut-comparison normal forms. No TOP triangulation-existence or PL-to-smooth compatibility assertion is used.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Albert Marden, The geometry of finitely generated Kleinian groups
      url: https://www.maths.gla.ac.uk/~mpowell/Marden-on-Mostow-rigidity-GeometryFinitelyGenerated-1974.pdf
      locator: Printed412, Section5.4. The finite simultaneous-cylinder operation is proved here using compact neighborhoods, without the noncompact half-space assertion.
---

## Statement

Assume AC. Let $N$ be a connected orientable three-manifold with a GIVEN locally finite PL manifold triangulation and boundary collars. Let $S$ be a connected closed PL boundary subsurface inducing an isomorphism $\pi_1(S)\to\pi_1(N)$. Suppose $S$ has a supplied compact finite PL core $S^c$ and finitely many disjoint product ends $S^1\times[0,\infty)$ attached to its boundary circles, with their PL parameters; thus $S$ retracts onto $S^c$. Allow zero ends and allow unglued boundary circles of $S^c$.

Let $\beta_1,\ldots,\beta_l$ be a finite disjoint family of embedded PL circles in the interior of $\partial N\setminus S$, with supplied annular boundary neighborhoods, whose classes have infinite order in $\pi_1(N)$. There is a pairwise disjoint family of compact proper locally flat PL annuli $C_i\subset N$ with one rim EXACTLY $\beta_i$ and the other in $\operatorname{int}S$. Their fundamental groups inject into $N$. They have boundary quadrant and two-sided product collars. Every cut-manifold piece contains exactly one cut piece of $S$, with isomorphic fundamental group.

This is a conclusion for the supplied PL category and actual finite-type boundary core. It asserts neither that the other rim realizes a specified conjugacy class with a prescribed transverse path, nor compatibility of an arbitrary PL marking with a smooth structure.

## Facts & Assumptions

**Given:** The supplied PL structures, finite end parameters, group isomorphism and finite ordered family of circles.

[F1] Finite disjoint injective annuli with exactly one rim on a fundamental-group-isomorphic boundary surface preserve the exact bijection and fundamental-group isomorphism of cut pieces. [[lem-finite-annulus-cuts-preserve-isomorphic-boundary-piece-groups]]

[F2] The compact finite PL annulus theorem needs only disjoint compact injective boundary subsurfaces and an annulus map with infinite-order core. It retains a specified first rim when that marked subsurface is annular. No irreducibility of the compact target is required. [[thm-incompressible-pl-boundary-surfaces-with-common-loops-have-embedded-annuli]]

[F3] Finite-source maps admit PL approximations as maps of pairs. Finite subpolyhedra in a compact triangulated manifold have manifold neighborhoods given by the barycentric level construction, with boundary trace, local quadrant charts and finite triangulations. The construction is local on the finite star of the subpolyhedron. Compact locally collared PL boundary faces have collars. [[thm-finite-simplicial-approximation-for-maps-of-pairs]] [[lem-finite-subpolyhedra-have-compact-pl-manifold-neighborhoods]] [[lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar]]

[A1] Full choice is [[def-axiom-of-choice]].

## Proof

1.1 Start with the empty family of annuli. At any finite stage suppose annuli for the earlier circles have been constructed. By [F1], cutting along them gives a manifold piece $N_a$ containing the next circle $\beta$, with exactly one boundary piece $S_a$ and $\pi_1(S_a)\to\pi_1(N_a)$ an isomorphism. Choose the original end truncations far enough out that all the finitely many existing rims in $S$ lie in the interior of the truncated compact core. Cutting this core along those rims gives a compact core in each $S_a$: attaching back its remaining half-infinite annuli changes neither components nor fundamental groups, since each end retracts along its supplied product coordinate. Push each boundary face of this core which lies on $\partial S_a$ a little into its supplied collar. Removing that thin product collar does not change its fundamental group; truncate the ends a little farther out if necessary. The resulting compact subsurface $B$ lies in $\operatorname{int}S_a$ and still has fundamental group isomorphic to that of $S_a$. Its group injects into $N_a$ and surjects there. The circle $\beta$ represents an infinite-order element in $\pi_1(N_a)$, since the piece group injects into $\pi_1(N)$ by [F1]. Hence there is a loop in $\operatorname{int}B$ freely homotopic to $\beta$ in $N_a$, giving an actual continuous annulus map. Choose a closed annular neighborhood $F_0$ of $\beta$ in the untouched boundary, disjoint from $B$ and all old faces, and set $F_1=B$. Both marked surface groups inject into $N_a$; for $F_0$ its generator has infinite order, and for $B$ use the core injection. [A1, F1, given, construct]

2.1 Localize the map without assuming compactness of $N_a$. A compact subset of a locally finite triangulated space meets only finitely many simplices: each point has a neighborhood meeting finitely many, and a finite subcover of the compact set gives the assertion. Use [F3] on the finite image neighborhood to make the annulus map PL as a map of pairs, retaining its boundary loops in $\operatorname{int}F_0$ and $\operatorname{int}F_1$. The union $P$ of its image with these two finite marked surfaces is a connected finite subpolyhedron after common subdivision. The barycentric neighborhood construction of [F3] applies unchanged in this noncompact triangulated ambient manifold: the closed star of the finite complex $P$ is finite by local finiteness, and after a subdivision making $P$ full assign value one to its vertices and zero to every other vertex. The set where the piecewise linear value is at least $1/2$ lies in that finite star and is compact. The local mixed-vertex coordinates and the normalized barycentric deformation in [F3]'s proof give exactly a compact manifold $V$, with $P\subset\operatorname{Int}_{N_a}V$ and with its trace on $\partial N_a$ a subsurface. The local quadrant charts also give its finite manifold triangulation. In particular $F_0,F_1$ are disjoint subsurfaces of $\partial V$, with collars and the required open boundary-image containment. Their maps to $\pi_1(V)$ are injective because their composites to $\pi_1(N_a)$ are injective. The core class has infinite order in $V$, since its image has infinite order in $N_a$. This supplies ALL compact-target hypotheses of [F2]. No compact core of the THREE-manifold has been assumed. [F3, step 1.1, construct]

3.1 Apply [F2] in this actual compact $V$. Since $F_0$ is the prescribed annular neighborhood of $\beta$, its first rim is exactly $\beta$ and its second lies in $\operatorname{int}B$. The resulting proper PL annulus has interior in $\operatorname{int}V\subset\operatorname{int}N_a$; its only boundary points are the two marked rims on the ORIGINAL boundary of $N_a$. It therefore misses all old cut faces. The output of [F2] has infinite-order core in $V$; more specifically its first rim is $\beta$, so its core has infinite-order image in $N_a$ and in $N$. Its group is infinite cyclic, making the inclusion into $N$ injective. The product-cross constructions of the finite PL annulus theorem give locally flat surface and boundary quadrant charts; finitely many such charts and [F3] supply the two-sided and boundary collars. Orientability makes the normal line bundle trivial: transporting the annulus orientation and the ambient orientation fixes its normal sign on overlaps. [F2, F3, step 1.1, step 2.1, construct]

4.1 Reglue the previous cut faces. Since the new compact annulus misses them and their boundary seams, it embeds in $N$, disjoint from all earlier annuli and with its other rim in the uncut interior of $S$. Nothing changes the earlier family. Repeat this operation for the next of the finitely many circles. This is finite induction, including the empty family. It produces the whole disjoint annulus system and all its exact first rims. Finally [F1] applies to the complete family, giving the claimed matched pieces and actual isomorphisms of their fundamental groups. No noncompact annulus theorem, smooth parameter conversion or prescribed-conjugator conclusion was used. [F1, step 1.1, step 3.1, construct, induction] ∎
