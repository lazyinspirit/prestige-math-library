---
id: lem-boundary-incompressible-pl-surfaces-have-injective-doubles-and-boundary-lift-trees
kind: lemma
title: "Boundary incompressible PL surfaces have injective doubles and boundary lift trees"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-finite-pl-two-sided-incompressibility-is-pi-one-injectivity
  - lem-nullhomotopic-circles-on-finite-oriented-pl-surfaces-bound-pl-disks
  - lem-finite-pl-peripheral-multicurves-admit-minimal-annular-position
  - lem-finite-injective-surface-hierarchies-give-aspherical-pieces-and-annulus-map-control
  - thm-universal-cover-existence
  - thm-covering-maps-inject-fundamental-groups
  - thm-deck-group-of-a-universal-cover-is-the-fundamental-group
  - lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar
  - lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: https://pi.math.cornell.edu/~hatcher/3M/3M.pdf
      locator: "Corollary3.3 and complete proof, printed48, actualfullpassage read. This supplies the surface Loop criterion; the doubling and lifted-boundary arguments are proved locally below."
---

## Statement

Let $M$ be a compact connected oriented finite PL three-manifold such that every boundary component injects on fundamental groups. Let $F$ be a connected two-sided compact proper oriented locally flat finite PL surface, neither a disk nor a sphere, with nonempty boundary and a product collar. Suppose $F$ injects on fundamental groups, its boundary circles are essential in $\partial M$, and it has no boundary-compressing disk whose surface arc is essential. Then the closed surface $DF$, obtained by doubling $F$ along its boundary, injects on fundamental groups into the double $DM$ of $M$ along $\partial M$.

Let $X\to M$ be the universal cover. Every connected lift of $F$ meets any one connected lift of a boundary component of $M$ in at most one boundary line. The graph dual to the boundary lines inside that boundary lift embeds as a subtree of the graph dual to all the lifts of $F$ in $X$. The latter is the cut tree described in [[lem-finite-injective-surface-hierarchies-give-aspherical-pieces-and-annulus-map-control]]; its tree and stabilizer construction requires only the surface and piece injections, not a pared axiom. Every lift and every group assertion here uses the given finite PL structures, with no arbitrary topological triangulation assumption.

## Facts & Assumptions

**Given:** The boundary-injective finite PL manifold and actual surface with the properties in the Statement.

[F1] A two-sided finite PL surface fails to inject only if it has an actual embedded compressing disk. The same criterion supplies face and cut-piece injections. [[lem-finite-pl-two-sided-incompressibility-is-pi-one-injectivity]]

[F2] Nullhomotopic embedded circles on finite oriented PL surfaces bound disks; boundary circles of a nondisk surface have infinite order. The full finite bigon-cleaning and empty-bigon isotopies for two multicurves are proved in the peripheral-position source. [[lem-nullhomotopic-circles-on-finite-oriented-pl-surfaces-bound-pl-disks]] [[lem-finite-pl-peripheral-multicurves-admit-minimal-annular-position]]

[F3] Universal covers, their deck groups and injections on fundamental groups have the usual path-lifting descriptions. A positive-genus closed oriented surface has universal plane; the compact-core construction is proved in the peripheral-position source. [[thm-universal-cover-existence]] [[thm-covering-maps-inject-fundamental-groups]] [[thm-deck-group-of-a-universal-cover-is-the-fundamental-group]] [[lem-finite-pl-peripheral-multicurves-admit-minimal-annular-position]]

[F4] The actual cut tree in a universal cover, its vertex/edge stabilizers and lack of inversions are constructed in [[lem-finite-injective-surface-hierarchies-give-aspherical-pieces-and-annulus-map-control]], Proof2.1–3.1. PL collars and finite subdivisions apply to the supplied embedded faces. [[lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar]] [[lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation]]

## Proof

1.1 Form $DM$ with the reversed orientation on its second copy and form the closed embedded two-sided $DF$. Product collar subdivisions give their finite PL structures. Write $\Sigma$ for the seam $\partial M$ and $C=\partial F$ for its intersection with $DF$. Folding both copies of $DM$ onto the first copy is a retraction, so $\pi_1M\to\pi_1DM$ is injective; consequently every seam component injects by the hypothesis. Folding $DF$ onto $F$ likewise injects $\pi_1F$ into $\pi_1DF$. Thus every component of $C$ is essential in $DF$ by [F2], as well as essential in $\Sigma$ by hypothesis. [F2, F4, given, construct]

2.1 Suppose $DF$ has a compressing disk $D$ in $DM$. First isotope its simple boundary curve on $DF$ to minimize its number of crossings with $C$. A least attainable integer exists. This isotopy extends across the product collar of $DF$; use the time parameter $\min(t,\tau(r))$ for a PL collar cutoff $\tau$, so the extension is a PL ambient isotopy. Any subarc of the resulting boundary in one half $F$ which cut off a disk on that half with an arc in $C$ would give a bigon. The innermost-arc cleaning of [F2] gives an empty bigon for the two whole curve families, and removes two crossings, contradicting minimality. Therefore every component of $\partial D\setminus C$ is an essential proper arc of its half $F$, when crossings occur. Put the interior of $D$ transverse to $\Sigma$. [F2, F4, step 1.1, given, construct]

3.1 Remove all circular components of $D\cap\Sigma$. Each is nullhomotopic in $DM$ because it bounds a subdisk of $D$, so injectivity of the seam makes it nullhomotopic in its seam component. It bounds a seam disk by [F2]. That disk contains no component of $C$: those circles are essential in the seam and disjoint from its boundary. Choose an innermost one of these disks with respect to the other intersection circles. It contains no intersection arc either, since such an arc has its endpoints in $C$ and cannot cross its boundary. Its interior consequently misses both $D$ and $DF$. Replace the subdisk of $D$ by this seam disk and push it slightly off the seam in a collar. This is an embedded disk with the same essential boundary, fewer seam circles and no new ones; the finite disk surgery is supported away from $DF$. Repeat until there are no circles. [F2, F4, step 1.1, step 2.1, given, construct]

4.1 If there is now an intersection arc, an outermost one on $D$ cuts off a disk whose other boundary arc is one component of $\partial D\setminus C$. Its interior misses the seam and $DF$, and that surface arc is essential by step2.1. In its half $M$ it is therefore a forbidden boundary-compression disk for $F$. If there is no arc, $D$ is entirely in one half and gives an ordinary compression of $F$: its boundary cannot bound a disk in $F$, since then it would also bound one in $DF$. This contradicts injectivity of $F$. No compressing disk of $DF$ exists. Apply [F1] in the finite PL double, which requires no irreducibility of $DM$, to conclude that $DF$ injects into $DM$. [F1, step 2.1, step 3.1, given, construct]

5.1 A lift $L$ of $F$ in $X$ is its universal cover by injectivity, and a boundary lift $B$ is the universal cover of its boundary component. That boundary component has positive genus, since a sphere component has no nontrivial essential $C$ circle; components not meeting $F$ are irrelevant. Thus $B$ is a plane by [F3], and the boundary components of $L$ on $B$ are proper lines, since the corresponding $C$ circles have infinite order in the boundary. Suppose two different boundary lines $l_0,l_1$ of the same $L$ lie on $B$. Choose a path $\alpha$ in $L$ between them, with interior in $\operatorname{int}L$, and a path $\beta$ in $B$ with the same endpoints. Double $X$ by gluing its two copies along every boundary lift, and double $L$ along all its boundary lines. These are covering spaces of $DM$ and $DF$: their original evenly covered half-collars pair to full collars at every seam. [F1, F3, F4, step 4.1, given, construct]

6.1 The loop consisting of $\alpha$ in the first $L$ and its reverse in the second is nontrivial in the doubled $L$. To verify this without a relative marking theorem, map the interiors of the two copies to two vertices and each boundary-line collar to the corresponding half of an edge joining those vertices. The two matching half-collars give one edge for each boundary line. Boundary collars are disjoint and locally finite, so the map is continuous. Our loop maps to the nonbacktracking cycle using the two different edges $l_0,l_1$; it is nontrivial in that graph's free edge-path group. But the same loop is nullhomotopic in the doubled $X$: in either simply connected $X$ copy, $\alpha$ is homotopic relative endpoints to $\beta$, and the two copies of $\beta$ are identical on the common seam $B$. Projection would therefore kill a nontrivial loop from a covering of $DF$ in $DM$, contradicting step4.1 and covering injection in [F3]. Thus $L\cap B$ has at most one line. [F2, F3, F4, step 4.1, step 5.1, given, construct]

7.1 The proper disjoint boundary lines separate the plane $B$, and their dual graph is a tree, by the same crossing argument as [F4]. Each edge maps to the global edge corresponding to its unique lifted surface. Step6.1 makes all these edge images distinct. The map takes adjacent regions to their incident cut components in $X$. If two different vertices had the same image, their finite connecting path would map to a nonempty closed walk with no repeated edge in the global tree, impossible. The boundary dual graph therefore embeds, and its image is a connected subtree. All lift and stabilizer identifications use the actual collars and covering maps, not an assumed peripheral graph. [F3, F4, step 5.1, step 6.1, given, construct] ∎

## Scope

This proves the necessary lifted-boundary control on boundary-injective pieces, exactly the nondisk branch of the accepted disk-first hierarchy. The disk branch is treated separately in the pared-cut theorem. No general three-dimensional relative Waldhausen or peripheral-marking theorem is asserted.
