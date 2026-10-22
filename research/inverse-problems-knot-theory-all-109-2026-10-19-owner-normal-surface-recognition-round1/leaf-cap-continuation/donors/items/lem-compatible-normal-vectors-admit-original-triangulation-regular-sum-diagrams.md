---
id: lem-compatible-normal-vectors-admit-original-triangulation-regular-sum-diagrams
kind: lemma
title: "Compatible normal vectors admit regular sum diagrams in the original triangulation"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-normal-surface-coordinate-box
  - lem-normal-coordinate-matching-equations-and-finite-bounds
  - lem-compatible-normal-disk-boundary-paths-have-a-unique-type-preserving-switch
  - lem-compatible-normal-surfaces-admit-finite-circle-free-tetrahedral-position
  - lem-triangular-normal-arcs-admit-braid-position-stable-under-partial-regular-switches
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "William Jaco and Jeffrey L. Tollefson, Algorithms for the complete decomposition of a closed 3-manifold, Illinois Journal of Mathematics39 (1995),358–406"
      url: "https://www.researchgate.net/profile/William-Jaco/publication/242529283_Algorithms_for_the_complete_decomposition_of_a_closed_3-manifold/links/5437e7a80cf2590375c56442/Algorithms-for-the-complete-decomposition-of-a-closed-3-manifold.pdf"
      locator: "§2, printed pp.363–366, proper exchange systems and local regular switches. The finite face-braid and seven-type argument transferring them to the original coordinates is supplied below."
    - title: "Wolfgang Haken, Theorie der Normalflächen, Acta Mathematica105 (1961),245–375"
      url: "https://archive.ymsc.tsinghua.edu.cn/pacm_download/117/5921-11511_2007_Article_BF02559591.pdf"
      locator: "Chapter4 Hauptsatz4, printed pp.356–360, compatibility of partial regular switches. No identification of its adapted coordinates with the original seven coordinates is assumed here."
---

## Statement

Let $T$ be a finite simplicial triangulation of a compact PL three-manifold. Let $x,y\in\mathbb Z_{\ge0}^{7t}$ be admissible normal-coordinate vectors such that $x+y$ satisfies the quadrilateral condition. There are embedded proper normal surfaces $X,Y$ with vectors $x,y$, a finite transverse double-curve diagram $X\cup Y$ disjoint from $T^{(1)}$, and pairwise disjoint switching neighborhoods with these properties:

1. In each tetrahedron all double arcs join distinct faces. At every such arc the chosen regular switch preserves the unordered pair of normal disk types.
2. The choices agree through every crossed face and hence along each entire double circle or proper double arc.
3. Any partial selection of whole-curve regular switches gives a finite immersed normal-disk diagram with only the unswitched double curves and no branch points. Its total vector is $x+y$. Switches in disjoint neighborhoods commute.
4. Switching all curves gives an embedded proper normal surface $F$ with $v(F)=x+y$ and $w(F)=w(X)+w(Y)$.

The realization of an admissible vector determines its abstract surface and its boundary curves up to PL homeomorphism of the surface and homotopy of the corresponding boundary curves in $\partial M$. In particular, if $x+y=v(D)$ for a connected essential normal disk $D$, then $F$ is a connected essential normal disk. Thus every nontrivial coordinate decomposition of such a disk has an actual regular normal-sum diagram of this kind in the original triangulation.

No irreducibility, orientability, sphere-separation or choice hypothesis is required. The assertion concerns these explicitly constructed realizations, without claiming an ambient isotopy between arbitrary prior realizations.

## Statement references

[[lem-compatible-normal-disk-boundary-paths-have-a-unique-type-preserving-switch]] — the finite seven-type calculation.

[[lem-triangular-normal-arcs-admit-braid-position-stable-under-partial-regular-switches]] — face position and every partial face resolution.

[[lem-compatible-normal-surfaces-admit-finite-circle-free-tetrahedral-position]] — tetrahedral circle elimination by finite disk replacements.

## Facts & Assumptions

**Given:** The admissible compatible vectors and the original finite simplicial triangulation.

[F1] Admissible vectors have embedded normal realizations by [[lem-normal-coordinate-matching-equations-and-finite-bounds]], steps 1.1–1.2. This is the finite placement of compatible disk copies and ordered face-side gluings, not an existence theorem about essential disks.

[F2] [[lem-triangular-normal-arcs-admit-braid-position-stable-under-partial-regular-switches]] constructs each face from three monotone strips and one central normal chord per arc. Every partial regular reconnection consists of embedded normal arcs of unchanged type counts, and no remaining crossing is a self-crossing of an arc. Its local regular choice is characterized uniquely by preservation of the two normal arc types, including after a partial reconnection.

[F3] [[lem-compatible-normal-disk-boundary-paths-have-a-unique-type-preserving-switch]] gives exactly one pairing of two normal disk boundary paths, cut at distinct common faces, which preserves their two original disk types. The five cases in that proof are entirely in the original tetrahedron.

[F4] The cap placement and circle elimination in [[lem-compatible-normal-surfaces-admit-finite-circle-free-tetrahedral-position]], steps 2.1–7.1, require the face-arc systems to be embedded within each family, transverse between families, and to have at most one crossing per pair. They use straightness only to establish that last property in step 4.1. Thus the very same cap and replacement construction applies to the face-braid systems of [F2], which have all three properties. It preserves the vectors, the abstract disk-side gluing data and the boundary homotopies.

## Proof

1.1 Realize $x,y$ by [F1]. Choose disjoint intersection-point sets on every triangulation edge, moving points of one family slightly while preserving their orders. Put the two normal arc systems on each face into the position [F2], retaining those endpoints and their individual types. Apply [F4] separately inside each tetrahedron. We obtain normal surfaces $X,Y$ with their original vectors and with only proper transverse tetrahedral intersection arcs. Each such arc joins distinct faces, since two endpoints in one face would be two crossings of the same pair of face arcs, excluded by [F2]. Globally these arcs form finitely many double circles and proper double arcs, missing the edges. [given, F1, F2, F4, construct]

1.2 Let $F_1,F_2$ be any two embedded normal realizations of the same vector. On each global edge their numbers of points agree: the local edge count is a sum of the prescribed disk coordinates, and face matching identifies this count around the edge star. Match the points in their linear order, after fixing an orientation of that edge. On a face, arcs cutting off a fixed vertex form the endpoint blocks nearest that vertex on its two sides, with the same nested ordering. Thus the ordered point matching determines the arc matching. It determines the same entire boundary circles on each tetrahedral sphere, and therefore a bijection of the normal disk pieces attached to those circles. Map each disk to its counterpart with these boundary maps; a boundary map of a PL disk extends over it by coning a finite subdivision of its polygonal parametrization. These maps agree on all glued sides and points. Their finite gluing and its inverse give a PL homeomorphism $F_1\to F_2$. Its boundary maps are homotopies in $\partial M$: move the matched edge points monotonically along their edges and join the corresponding arc maps by homotopies inside each convex boundary face. These homotopies agree at their endpoints and concatenate around each boundary circle. [given, F1, construct]

2.1 Along a tetrahedral intersection arc choose the local switch prescribed by [F3]. At each endpoint on a face it induces the type-preserving uncrossing of its two face arcs: the two resulting disk boundary words have the same normal disk types, so their face arcs have the original two arc types and no edge return. By uniqueness in [F2], this is exactly that face's chosen monotone-strip reconnection. The adjacent tetrahedron prescribes the same reconnection, because its two face arc types are the same matched types. The local switches therefore continue consistently across faces and around each full double curve. Choose sufficiently small pairwise disjoint neighborhoods of the finitely many curves, missing $T^{(1)}$, and perform these local reconnecting strips there. Their local definitions agree on overlaps by the established endpoint agreement. [F2, F3, step 1.1, construct]

3.1 We prove that any partial choice preserves normal disk pieces. It is enough first to work in one tetrahedron, allowing any subset of its intersection arcs; its face systems are then partial resolutions of the face braid. Order the chosen local arcs arbitrarily and use induction. Initially all pieces are embedded normal disks. Suppose this holds before processing the next remaining arc $\alpha$. Its two branches lie in distinct current disk pieces. Otherwise an endpoint of $\alpha$ on a face would be a transverse self-intersection of that disk's unique arc in the face. But every current face parametrizing arc is embedded by [F2]. This is impossible. [F2, step 1.1, step 2.1, induction, contradiction]

4.1 Cut the two distinct disks along $\alpha$. Each becomes two disks, since the arc is proper. Reconnecting them crosswise by either switch gives two abstract disks, each obtained by gluing one cut disk from each original disk along their cut boundary interval. Their current types are still compatible: the induction has preserved the original multiset of types. Apply [F3] to them. Its unique type-preserving choice agrees at both face endpoints with [F2], hence with the fixed switch in step 2.1. The two new disk boundary words consequently have their previous triangle or quadrilateral types, each with a single arc on every face it meets. [F2, F3, step 2.1, step 3.1, construct]

5.1 These new disk pieces are embedded. Local strip reconnection creates no new double points and removes just $\alpha$; all remaining double arcs are among the previous ones, still joining faces. If both branches of one belonged to the same new disk, its face endpoint would self-intersect that disk's unique face arc, again forbidden by [F2]. Thus no new disk has a self-intersection. There are no other singularities, since the original diagram was transverse and every switching neighborhood replaces two crossing sheets by two disjoint strips. This completes the induction for all partial local choices and proves that the local normal disk-type multiset is unchanged. [F2, step 1.1, step 3.1, step 4.1, induction, construct]

6.1 For a subset of whole global double curves, the partial face reconnections match from both incident tetrahedra by step 2.1. Thus their normal disk diagrams glue into a proper immersed surface, with only the unswitched curves and no branch points. Every tetrahedral multiset is unchanged by step 5.1, so its total vector is $x+y$. Disjoint switching neighborhoods commute because each map changes only its own neighborhood. When all curves are switched, no double curves remain and the surface $F$ is embedded and normal. All neighborhoods miss the edges, hence $w(F)=w(X)+w(Y)$. [F2, step 2.1, step 5.1, construct]

7.1 If $x+y=v(D)$ for a connected essential normal disk, apply step 1.2 to $F,D$. It makes $F$ a connected disk, and its boundary homotopic to that of $D$, hence essential. If both $x,y$ are nonzero then their realizations are nonempty. The preceding construction is then an actual regular sum diagram for the decomposition of $D$ with every property asserted. It has used only finite original-tetrahedron disk words, face braids, cap replacements and ordered gluings; no transfer from a different normal-coordinate system was made. [given, step 1.1, step 2.1, step 6.1, step 1.2, construct] ∎
