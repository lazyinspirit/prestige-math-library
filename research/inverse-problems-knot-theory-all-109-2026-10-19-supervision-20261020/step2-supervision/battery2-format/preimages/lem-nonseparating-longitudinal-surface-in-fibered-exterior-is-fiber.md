---
id: lem-nonseparating-longitudinal-surface-in-fibered-exterior-is-fiber
kind: lemma
title: A nonseparating longitudinal surface in a fibered exterior is a fiber
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-knot-exterior
  - def-knot-meridian-and-preferred-longitude
  - def-boundary-slope-of-an-incompressible-surface
  - def-incompressibility-seifert-fibration-and-jsj-system
  - thm-knot-exterior-homology-and-longitude
  - def-axiom-of-choice
  - thm-smooth-loop-theorem-and-incompressibility-criterion-in-orientable-three-manifolds
  - lem-compact-smooth-boundary-preimage-surfaces-admit-neat-embedding-isotopies
  - lem-angular-boundary-neatification-preserves-smooth-disk-obstructions
  - lem-choice-free-smooth-torus-curves-and-annulus-strips
  - thm-pi-one-injective-finite-pl-surface-maps-are-covers-or-annular-collapses
  - lem-compact-c2-surfaces-admit-finite-cellulations-relative-to-a-finite-embedded-graph
  - thm-finite-simplicial-approximation-for-maps-of-pairs
  - thm-classification-of-connected-covering-spaces
  - thm-covering-space-lifting-criterion
  - lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
  - thm-relative-cellular-homology-computes-relative-singular-homology
  - thm-boundary-relative-homotopic-incompressible-surfaces-in-fibered-exteriors-are-isotopic
  - thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations
  - thm-poincare-lefschetz-duality
  - thm-universal-coefficient-theorem-for-cohomology-over-a-pid
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: John A. Baldwin and Steven Sivek, Torus knots, the A-polynomial, and SL(2,C), Proposition 4.7
      url: https://arxiv.org/pdf/2405.19197v2
    - title: F. Waldhausen, On irreducible 3-manifolds which are sufficiently large, Annals of Mathematics 87 (1968), Corollary 5.5
      url: https://doi.org/10.2307/1970594
---

## Statement

Assume the Axiom of Choice. Let $K\subset S^3$ be a fibered knot with exterior $E_K$ and fiber surface $F$. If $S\subset E_K$ is a connected, orientable, nonseparating, incompressible properly embedded surface whose boundary is a nonempty union of longitudes, then $S$ is isotopic to $F$. After their boundary curves are identified by an isotopy in the boundary torus and this alignment is extended across a collar, the concluding isotopy may be taken relative to the aligned boundary.

## Statement references

[Baldwin and Sivek, Proposition 4.7](https://arxiv.org/pdf/2405.19197v2)

[Waldhausen, Corollary 5.5](https://doi.org/10.2307/1970594)

## Facts & Assumptions

**Given:** The surface and fibered exterior in the Statement, with full AC as authorized for their homology and geometric suppliers. This is not a claimed choice-free proof.

[A1] Full AC implies the countable-choice assumptions used in the smooth surface and isotopy suppliers. [[def-axiom-of-choice]]

[F1] The exterior-homology theorem gives $H_1(E_K;\mathbb Z)=\mathbb Z[\mu]$ and identifies the kernel of $H_1(\partial E_K)\to H_1(E_K)$ as $\mathbb Z[\lambda]$; it does not itself state the required relative group. Let $\pi:E_K\to S^1$ be the bundle projection with connected fiber $F$. Since $F$ is a fiber surface of a knot, its boundary is the single binding-parallel circle, of degree one on the knot. The boundary restriction is a circle bundle with fiber $\partial F$, which maps to zero in $H_1(E_K)$, so $[\partial F]=\pm[\lambda]$. The induced map $H_1(\partial E_K)\to H_1(S^1)$ is onto with kernel $\mathbb Z[\lambda]$, hence sends $[\mu]$ to $\pm1$. It factors through the inclusion into $H_1(E_K)$, so $\pi_*:H_1(E_K)\to H_1(S^1)$ is an isomorphism. The universal coefficient theorem, with $H_0(E_K;\mathbb Z)$ free on path components and $H_1(E_K;\mathbb Z)=\mathbb Z[\mu]$, identifies $H^1(E_K;\mathbb Z)$ with $\operatorname{Hom}(H_1(E_K),\mathbb Z)$; thus $\pi^*[S^1]$ generates it. Poincaré–Lefschetz duality identifies this generator with the relative class of a regular fiber, up to orientation sign: in a local product chart transverse to $F$, the degree-one base class caps with the oriented exterior class to give $[F]$. Therefore $H_2(E_K,\partial E_K;\mathbb Z)=\mathbb Z[F]$, and its intersection-dual meridian class generates $H^1(E_K;\mathbb Z)$. [[thm-knot-exterior-homology-and-longitude]] [[thm-universal-coefficient-theorem-for-cohomology-over-a-pid]] [[thm-poincare-lefschetz-duality]]

[F2] Geometric incompressibility of a neat two-sided smooth surface is equivalent to fundamental-group injectivity. Broad smooth boundary-preimage surfaces first admit a boundary-fixed embedding neatification, and their actual smooth disk obstructions pass to that representative. [[thm-smooth-loop-theorem-and-incompressibility-criterion-in-orientable-three-manifolds]], [[lem-compact-smooth-boundary-preimage-surfaces-admit-neat-embedding-isotopies]], [[lem-angular-boundary-neatification-preserves-smooth-disk-obstructions]]

[F3] A finite disjoint family of essential longitude curves on a smooth torus admits a simultaneous smooth normalization to the corresponding parallel affine circles. Its isotopy extends into the boundary collar by applying its time parameter times a collar cutoff. [[lem-choice-free-smooth-torus-curves-and-annulus-strips]]

[F4] An injective map of compact finite PL oriented surfaces with nontrivial source group is homotopic to a finite covering or to an annular boundary collapse. A boundary local homeomorphism can be fixed throughout. The actual thirteen-row proof gives subgroup cores, the boundary orientation-chain calculation, cutting-arc normalization and disk extension. Smooth compact surfaces have compatible finite cellulations; relative finite simplicial approximation gives the PL map in this interface, preserving an already matched boundary triangulation. [[thm-pi-one-injective-finite-pl-surface-maps-are-covers-or-annular-collapses]], [[lem-compact-c2-surfaces-admit-finite-cellulations-relative-to-a-finite-embedded-graph]], [[thm-finite-simplicial-approximation-for-maps-of-pairs]]

[F5] Connected subgroup covers and their map-lifting criterion exist. Finite surface graph thickenings give the disk conclusion for a simply connected compact surface with nonempty boundary; cellular relative homology computes the orientation-chain degree. [[thm-classification-of-connected-covering-spaces]], [[thm-covering-space-lifting-criterion]], [[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]], [[thm-relative-cellular-homology-computes-relative-singular-homology]]

[F6] The actual boundary-relative homotopic-surface theorem supplies a downstairs embedded family-innermost product patch and the intersection-reducing isotopy. Its proof includes the relative half-product normalization and verifies the boundary-complement injections in the cut fiber product; it does not project an arbitrary cover isotopy. [[thm-boundary-relative-homotopic-incompressible-surfaces-in-fibered-exteriors-are-isotopic]]

[F7] Compact smooth manifolds with corners admit finite compatible triangulations relative to admissible triangulated boundary faces and protected collar neighborhoods. Cutting the smooth pair at its transverse surface faces gives exactly these compatible corner data; paired face subdivisions are matched before regluing. [[thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations]]

## Proof

1.1 Use [F2] to take a neat representative, preserving boundary and incompressibility. Nonseparation is preserved by its ambient topological extension. A short oriented transverse segment through $S$ closes through its connected complement to a loop intersecting $S$ once. Thus the intersection-dual cohomology class of $S$ is primitive. By [F1], $[S]=\pm[F]$ in $H_2(E_K,\partial E_K;\mathbb Z)$. Every loop in $S$ may be represented in its interior and pushed slightly into its two-sided normal product, so its intersection with $S$ is zero. Its value under the fiber's meridian homomorphism is consequently zero. Therefore the inclusion lifts to the infinite cyclic fiber cover $\widetilde E_K=F\times\mathbb R$. The lift is an embedding, since equality of two lifted image points would imply equality of their projected points on the embedded $S$. [A1, F1, F2, given, construct, algebra]

2.1 Align the finitely many longitude boundary curves by [F3] with distinct fiber-boundary levels in the torus, extending across its collar. In the infinite cyclic cover their lifts are horizontal circles in $\partial F\times\mathbb R$. Straighten the neat surface's smaller boundary collars to the product collars using their simultaneous half-space coordinates, fixed on the boundary curves. The projection of the lifted inclusion is now a proper map $p:(S,\partial S)\to(F,\partial F)$ equal to a product near boundary; every boundary restriction is a diffeomorphism. Its fundamental-group map is injective: the lifted inclusion is injective on fundamental groups by [F2] and covering injection, and $F\times\mathbb R\to F$ is a homotopy equivalence. The relative fundamental class of $F\times\{t\}$ generates $H_2(F\times\mathbb R,\partial F\times\mathbb R)$ and pushes to $[F]$ downstairs. Consequently $[S]=\pm[F]$ from step 1.1 makes the relative degree of $p$ equal to $\pm1$. [F1, F2, F3, step 1.1, construct, algebra]

3.1 Give the compact smooth surfaces the finite triangulations of [F4], choosing matched boundary subdivisions through the actual boundary diffeomorphisms. On their product collars retain the boundary map and its linear collar coordinate; relatively approximate the remaining compact map by a finite PL map. Interior compact separation and sufficiently fine approximation keep it in the target interior, so this is a homotopy of pairs fixed on the original boundary. If $\pi_1S\ne1$, apply the full actual classifier [F4]. Its annular-collapse alternative induces zero on relative $H_2$, contrary to the degree $\pm1$ in step 2.1. Its finite covering alternative has absolute relative degree equal to its number of sheets, by summing the lifted oriented triangles. Thus it has one sheet and is a homeomorphism $h:S\to F$, homotopic to $p$ relative to the aligned boundary. If $\pi_1S=1$, [F5] makes $S$ a disk. Lift $p$ to the cover of $F$ for its trivial image subgroup. An infinite-sheeted cover has relative top homology zero: all coefficients of a finite two-cycle on adjacent oriented triangles agree, and connectedness forces a single coefficient on infinitely many triangles, which must vanish by finite support. A finite-sheeted cover pushes its fundamental class to its sheet number times $[F,\partial F]$. Nonzero degree $\pm1$ therefore forces this cover to have one sheet. Hence $F$ is simply connected and also a disk; its boundary map extends to a disk homeomorphism, homotopic to $p$ relative boundary by convex interpolation in disk coordinates. In either case $S$ has one boundary component. The height coordinate of its lifted inclusion can now separately be homotoped linearly to its one constant boundary height, fixed there. Combine these homotopies in $F\times\mathbb R$ and project to get an actual homotopy of the parametrized inclusion of $S$ to the corresponding fiber, relative to the aligned boundary. This asserts a homotopy of maps, not a projection of an arbitrary embedding isotopy. [F4, F5, step 1.1, step 2.1, construct, algebra]

4.1 The homeomorphism and actual boundary-relative homotopy in step 3.1 meet [F6]. Use [F7] on the pair cut along its transverse smooth surface faces and protected product collars, matching paired face subdivisions before regluing; this gives compatible finite structures retaining the already matched boundary triangulations. That theorem constructs an empty embedded product patch in the actual cut fiber product, verifies that the patch meets only one fiber face so embeds downstairs, and reduces the finite intersection system until the patch is the whole surface. Hence its ambient boundary-relative isotopy carries $S$ to the original marked fiber $F$. Restore the preliminary boundary-torus alignment and neatification if necessary. This proves both the isotopy assertion and its relative aligned-boundary refinement under the authorized AC assumptions. [A1, F2, F3, F4, F6, F7, step 1.1, step 2.1, step 3.1, construct] ∎
