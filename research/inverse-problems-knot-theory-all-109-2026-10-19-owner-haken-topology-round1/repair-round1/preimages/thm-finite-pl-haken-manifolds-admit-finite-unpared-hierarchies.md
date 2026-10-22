---
id: thm-finite-pl-haken-manifolds-admit-finite-unpared-hierarchies
kind: theorem
title: "Finite PL Haken manifolds admit finite unpared hierarchies"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-finite-pl-haken-finiteness-and-maximal-closed-surface-families
  - lem-relative-pl-homology-classes-have-superincompressible-representatives
  - lem-finite-pl-irreducible-manifolds-admit-finite-boundary-disk-decompositions
  - lem-incompressible-surfaces-in-injective-pl-product-regions-are-horizontal-or-vertical
  - lem-finite-pi1-injective-surface-cuts-preserve-three-manifold-irreducibility
  - lem-finite-pl-two-sided-incompressibility-is-pi-one-injectivity
  - lem-nullhomotopic-circles-on-finite-oriented-pl-surfaces-bound-pl-disks
  - lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar
  - lem-parametrized-pl-balls-absorb-standard-boundary-windows
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bruno Martelli, An Introduction to Geometric Topology, Version 4, September 2025"
      url: https://people.dm.unipi.it/martelli/Geometric_topology.pdf
      locator: "Theorem9.4.12 and full necessary preceding9.4.1–9.4.4, printed pp.296–300. This proof retains the final disk cuts as an explicitly terminating finite sequence rather than assuming a simultaneous complete disk system."
axiom_use: "Full AC is inherited from the local homology, duality and finite-cut suppliers; finite maxima and the finite genus-decreasing disk sequence add no infinite-choice use."
---

## Statement

Assume full AC. Let $M$ be a compact connected oriented PL three-manifold with a supplied finite simplicial manifold triangulation. Suppose every interior locally flat PL sphere bounds an interior PL ball, and every proper PL disk cobounds a PL ball with a disk in $\partial M$. If $\partial M\ne\varnothing$, suppose every boundary component has positive genus. If $\partial M=\varnothing$, suppose instead that $M$ contains a connected closed orientable two-sided locally flat PL surface of positive genus injective on fundamental groups. All surfaces below are supplied with the finite compatible PL triangulations and product collars obtained by subdivision and cutting.

Then $M$ has a finite hierarchy to a finite disjoint union of parametrized PL balls. Its first stage cuts along a finite disjoint pairwise nonparallel family $S_0$ of connected closed positive-genus incompressible orientable two-sided surfaces. Its second stage cuts every component of $M\mathbin{\|}S_0$ along a finite properly embedded orientable family $S_1$ which meets every boundary component in a homologically nonzero boundary class and has no sphere or disk components, no compressing or boundary-compressing disks, and no compressing annulus with an essential non-boundary-parallel loop on that family. The remaining finitely many cuts are along proper essential PL disks. Every intermediate piece is irreducible and injects on fundamental groups into $M$, and every cutting surface injects into its incident pieces.

For the triangulation of $M$ with $t$ tetrahedra one may take $|\pi_0(S_0)|\le10t+\dim_{\mathbb F_2}H_2(M,\partial M;\mathbb F_2)$. After the first two stages, write $C$ for the components and $X$ for their boundary surfaces. The number of subsequent disk cuts is at most $\sum_C\sum_{X\subset\partial C}\max(0,2g(X)-1)$. No assertion of superincompressibility for $S_0$, or of compatibility with a prescribed pared locus or boundary pattern, is made. This is an unpared hierarchy theorem in a given finite PL structure, with no smooth or arbitrary topological triangulation transport.

## Statement references

[[lem-finite-pl-haken-finiteness-and-maximal-closed-surface-families]]

[[lem-relative-pl-homology-classes-have-superincompressible-representatives]]

[[lem-finite-pl-irreducible-manifolds-admit-finite-boundary-disk-decompositions]]

## Facts & Assumptions

**Given:** The compact finite PL manifold with the hypotheses in the Statement.

[F1] The normal-isotopy and normal-family bound give an explicit finite bound for pairwise nonparallel incompressible families and a maximum-cardinality finite closed family extending any specified such finite family. Every disjoint closed injective positive-genus surface is then parallel in $M$ to a member. [[lem-finite-pl-haken-finiteness-and-maximal-closed-surface-families]]

[F2] In a finite irreducible PL manifold with the boundary disk-ball property and positive-genus boundary, there is an orientable properly embedded surface family whose boundary class is nonzero on every boundary component and which has no sphere or disk components and no compressing disk, boundary-compressing disk, or compressing annulus of the stated non-boundary-parallel kind. [[lem-relative-pl-homology-classes-have-superincompressible-representatives]]

[F3] Finite injective surface cuts preserve irreducibility and piece-group injectivity, and give injective face maps. For two-sided finite PL surfaces, ordinary incompressibility is equivalent to injectivity on fundamental groups. [[lem-finite-pi1-injective-surface-cuts-preserve-three-manifold-irreducibility]] [[lem-finite-pl-two-sided-incompressibility-is-pi-one-injectivity]]

[F4] In an injective closed-surface product region inside an irreducible ambient finite PL manifold, an incompressible boundary-incompressible orientable surface is horizontal or a vertical annulus. In particular a nonempty proper boundary cannot lie on only one horizontal face; every closed injective positive-genus surface inside the product is parallel to its boundary faces. [[lem-incompressible-surfaces-in-injective-pl-product-regions-are-horizontal-or-vertical]]

[F5] An irreducible compact finite PL manifold with nonempty boundary either contains a closed injective positive-genus orientable two-sided surface or has a finite essential disk-cut sequence to balls. Its disk count is bounded by the boundary genus sum in the Statement, and all piece groups inject. [[lem-finite-pl-irreducible-manifolds-admit-finite-boundary-disk-decompositions]]

[F6] Nullhomotopic PL circles bound PL disks. PL boundary collars exist; two parametrized balls glued along prescribed boundary disk windows are parametrized balls. [[lem-nullhomotopic-circles-on-finite-oriented-pl-surfaces-bound-pl-disks]] [[lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar]] [[lem-parametrized-pl-balls-absorb-standard-boundary-windows]]

[A1] Full AC is inherited from [F1], [F2], [F3] and [F5]. [[def-axiom-of-choice]]

## Proof

**Given:** The data in the Statement; all cuts retain the two labeled faces and the original product collar identifications.

1.1 Each original boundary component $X$ injects into $M$. Push it inward to $X'$ through a boundary collar. A compression disk for $X'$ on the collar side contradicts the collar retraction and the PL circle-disk assertion in [F6]. On the other side it gives, by joining its boundary to $X$ along the collar, a proper essential disk in $M$, contradicting the boundary disk-ball hypothesis. Thus $X'$ has no compression disk and is injective by [F3]. The collar identifies its map with the original boundary map. If the boundary is nonempty, its positive-genus parallel copy therefore supplies a closed injective positive-genus surface. If the boundary is empty, one was supplied in the hypotheses. Fix one such surface in either case. [F3, F6, given, construct, choose]

2.1 Apply [F1] to obtain a maximum finite pairwise nonparallel closed incompressible family $S_0$ extending this one surface. It is nonempty, and its component count has the stated bound. Put $M_1=M\mathbin{\|}S_0$. Every connected component $C$ is irreducible and injects into $M$ by [F3]. It has nonempty boundary: a component with no cut face would be an open and closed part of the original connected $M$, contradicting that a nonempty family was cut. Every boundary component of $C$ is either an original boundary component or a copy of a component of $S_0$. It has positive genus and injects into $C$, using step 1.1 for the former and [F3] for the latter. Consequently a proper disk in $C$ has nullhomotopic boundary on its incident boundary surface. By [F6] this bounds a disk there, and the two disks cobound a ball: push their seam inward in a boundary collar, use the irreducibility sphere-ball property, and attach back the boundary disk collar using the ball-window union. This verifies the boundary disk-ball property in each $C$, with the finite PL triangulations inherited from the cuts. [F1, F3, F6, step 1.1, construct]

3.1 Apply [F2] in each of the finitely many components of $M_1$ to obtain a family meeting every boundary component in a homologically nonzero boundary class. Their finite union is $S_1$. The complete incompressibility and annular-exclusion assertions are those of [F2], not an inference from injectivity alone. Ordinary incompressibility makes each component injective by [F3]. Closed components, if present at this point, have positive genus because spheres were excluded. Thus [F3] applies to cutting all of $S_1$: every component of $M_2=M_1\mathbin{\|}S_1$ is irreducible and injects into its component of $M_1$ and hence into $M$. Every component of $M_2$ has nonempty boundary: cutting properly embedded surfaces cannot remove all boundary faces of a component, and a component disjoint from the cut surfaces retains its old boundary. [F2, F3, step 2.1, construct]

4.1 Suppose a component of $M_2$ contained a closed injective orientable two-sided surface $T$ of positive genus, in its interior. Under the collar identifications it gives a surface in $M$, disjoint from $S_0\cup S_1$, still injective by step 3.1. Maximality of $S_0$ in [F1] implies that $T$ and some component $F$ of $S_0$ cobound an embedded collared product $P\cong F\times[0,1]$ in $\operatorname{int}M$. This product's interior contains no other component of $S_0$. Indeed each other connected component of $S_0$ misses both boundary faces of $P$, so is wholly inside or outside. If inside, its injection into $M$ permits [F4], which makes it parallel to $F$ in $M$, contradicting pairwise nonparallelness of $S_0$. Thus $P$ lifts to one component of $M_1$, with the $F$ end a boundary face and the $T$ end in the interior. [F1, F3, F4, step 2.1, step 3.1, construct, algebra]

5.1 The family $S_1$ meets this $F$ boundary face, by its homologically nonzero boundary class. A component $U$ incident to that face is contained in $P$: it cannot cross $T$, which is disjoint from $S_1$, and it cannot leave through $F$, which is a boundary face of $M_1$. There is no other boundary face of $M_1$ inside $P$, by step 4.1 and because $P\subset\operatorname{int}M$. Therefore $\partial U$ is nonempty and lies entirely on the $F$ end. The surface $U$ is injective into $P$, since its composite into $M_1$ is injective by step 3.1; hence it is incompressible there. It is boundary-incompressible there as well: the boundary arc of any boundary-compression disk in $P$ must lie on the same horizontal face $F$ as its endpoints, since the two horizontal faces are disjoint components of $\partial P$. Such a disk would boundary-compress $S_1$ in $M_1$, contrary to step 3.1. Now [F4], applied in the ambient $M$, forbids this surface with nonempty boundary on only one product end. This contradiction proves that no component of $M_2$ contains such a closed injective positive-genus surface. [F2, F3, F4, step 3.1, step 4.1, algebra]

6.1 Apply [F5] to each component of $M_2$. The closed-surface alternative was excluded in step 5.1, so finitely many essential disk cuts turn each component into balls. The total number of these cuts has the explicit boundary genus bound in the Statement. All their intermediate pieces remain irreducible and inject into $M_2$, and thus into $M$; disk groups are trivial and inject into their incident pieces. The two initial stages were finite by [F1] and [F2], and the remaining stages terminate by the strictly decreasing genus integer in [F5]. Thus the concatenated hierarchy is genuinely finite, with all asserted surface and group properties. Its initial closed family was not asserted to exclude compressing annuli, and no prescribed pared locus was used at any stage. [F1, F2, F3, F5, step 2.1, step 3.1, step 5.1, construct, algebra] ∎
