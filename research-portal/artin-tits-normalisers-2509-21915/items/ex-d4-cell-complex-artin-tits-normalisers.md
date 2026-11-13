---
id: ex-d4-cell-complex-artin-tits-normalisers
kind: example
title: The D4 groupoid and the spherical cell complex
status: draft
domain: mathematics
origin: pipeline
deps:
  - ex-d4-universal-wall-graph-artin-tits-normalisers
  - ex-d4-atomic-relations-artin-tits-normalisers
  - lem-author-d4ce11000001-spherical-arrangement-cells
  - lem-author-d4ce11000001-flag-dual-sphere
  - lem-author-d4ce11000001-local-dual-polygons
  - lem-author-d4ce11000001-directed-bigon-sphere
  - lem-author-d4ce11000001-sphere-vertex-groupoid
  - math:def-fundamental-groupoid-of-a-space
  - math:def-cell-attachment-by-a-characteristic-map
  - math:thm-higher-dimensional-spheres-are-simply-connected
  - math:def-subcategory-and-full-subcategory
  - math:def-equivalence-and-adjoint-equivalence-of-categories
  - math:def-homeomorphism-and-open-maps
  - math:def-functor-and-contravariant-functor
  - math:prop-category-isomorphisms-are-bijective-on-objects-and-morphisms
  - math:def-natural-transformation
  - math:def-vertical-composition-of-natural-transformations
  - math:def-natural-isomorphism
dependency_roles:
  ex-d4-universal-wall-graph-artin-tits-normalisers: mathematical-premise
  ex-d4-atomic-relations-artin-tits-normalisers: mathematical-premise
  lem-author-d4ce11000001-spherical-arrangement-cells: mathematical-premise
  lem-author-d4ce11000001-flag-dual-sphere: mathematical-premise
  lem-author-d4ce11000001-local-dual-polygons: mathematical-premise
  lem-author-d4ce11000001-directed-bigon-sphere: mathematical-premise
  lem-author-d4ce11000001-sphere-vertex-groupoid: mathematical-premise
  math:def-fundamental-groupoid-of-a-space: mathematical-premise
  math:def-cell-attachment-by-a-characteristic-map: mathematical-premise
  math:thm-higher-dimensional-spheres-are-simply-connected: mathematical-premise
  math:def-subcategory-and-full-subcategory: mathematical-premise
  math:def-equivalence-and-adjoint-equivalence-of-categories: mathematical-premise
  math:def-homeomorphism-and-open-maps: mathematical-premise
  math:def-functor-and-contravariant-functor: mathematical-premise
  math:prop-category-isomorphisms-are-bijective-on-objects-and-morphisms: mathematical-premise
  math:def-natural-transformation: mathematical-premise
  math:def-vertical-composition-of-natural-transformations: mathematical-premise
  math:def-natural-isomorphism: mathematical-premise
proof_strategy: explicit
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p.30, §7.2.1, paragraph after (7.2)
      statement: The source describes attaching two-cells to inverse two-cycles and
        polygon faces including the outermost hexagon, and identifies the
        resulting adjacency-graph filling with a two-sphere and its groupoid
        with the universal wall groupoid.
      hypotheses: The D4 arrangement with central J={2}, with both wall-crossing
        directions and all polygon faces included.
      reading_limits: Read the extracted passage after (7.2) on PDF p.30 and inspected
        the original page-30 image, including that complete paragraph. This
        reference supplies attribution only. The topology and groupoid
        deductions use the declared mathematical suppliers and the local
        argument below.
dependency_level: 26
formulation_deps:
  - ex-d4-universal-wall-graph-artin-tits-normalisers
  - ex-d4-atomic-relations-artin-tits-normalisers
  - lem-author-d4ce11000001-spherical-arrangement-cells
  - lem-author-d4ce11000001-flag-dual-sphere
  - lem-author-d4ce11000001-local-dual-polygons
  - lem-author-d4ce11000001-directed-bigon-sphere
  - math:def-fundamental-groupoid-of-a-space
  - math:def-cell-attachment-by-a-characteristic-map
  - math:def-subcategory-and-full-subcategory
  - math:def-homeomorphism-and-open-maps
  - math:def-functor-and-contravariant-functor
  - math:prop-category-isomorphisms-are-bijective-on-objects-and-morphisms
argument_deps:
  - ex-d4-universal-wall-graph-artin-tits-normalisers
  - ex-d4-atomic-relations-artin-tits-normalisers
  - lem-author-d4ce11000001-spherical-arrangement-cells
  - lem-author-d4ce11000001-flag-dual-sphere
  - lem-author-d4ce11000001-local-dual-polygons
  - lem-author-d4ce11000001-directed-bigon-sphere
  - lem-author-d4ce11000001-sphere-vertex-groupoid
  - math:def-fundamental-groupoid-of-a-space
  - math:def-cell-attachment-by-a-characteristic-map
  - math:thm-higher-dimensional-spheres-are-simply-connected
  - math:def-subcategory-and-full-subcategory
  - math:def-equivalence-and-adjoint-equivalence-of-categories
  - math:def-homeomorphism-and-open-maps
  - math:def-functor-and-contravariant-functor
  - math:prop-category-isomorphisms-are-bijective-on-objects-and-morphisms
  - math:def-natural-transformation
  - math:def-vertical-composition-of-natural-transformations
  - math:def-natural-isomorphism
---

## Statement

For the $D_4$ example with central $J=\{2\}$, fill every polygonal face of the undirected chamber adjacency graph, including the outermost hexagon in its planar drawing. The resulting space $D$ is homeomorphic to $S^2$. Equivalently, retain two distinct directed edges per adjacency, attach one disk along each inverse two-cycle, and attach one polygon disk per cyclic face, using coherent boundary orientations as below. This doubled complex $K$ is also homeomorphic to $S^2$. The universal wall groupoid is isomorphic, on its 32 chamber objects, to $\Pi_1(K;V)$ and to $\Pi_1(D;V)$.

Here $V$ is the set of chamber vertices, and $\Pi_1(-;V)$ means the full subgroupoid of the fundamental groupoid whose objects are precisely $V$. A geometric face is filled once, regardless of the choice of a starting vertex or orientation of its boundary word. This makes the attachment convention explicit.

## Statement references

[[ex-d4-universal-wall-graph-artin-tits-normalisers]]

[[ex-d4-atomic-relations-artin-tits-normalisers]]

[[lem-author-d4ce11000001-spherical-arrangement-cells]]

[[lem-author-d4ce11000001-flag-dual-sphere]]

[[lem-author-d4ce11000001-local-dual-polygons]]

[[lem-author-d4ce11000001-directed-bigon-sphere]]

[[lem-author-d4ce11000001-sphere-vertex-groupoid]]

[[math:def-fundamental-groupoid-of-a-space]]

[[math:def-cell-attachment-by-a-characteristic-map]]

[[math:thm-higher-dimensional-spheres-are-simply-connected]]

[[math:def-subcategory-and-full-subcategory]]

[[math:def-equivalence-and-adjoint-equivalence-of-categories]]

[[math:def-homeomorphism-and-open-maps]]

[[math:def-functor-and-contravariant-functor]]

[[math:prop-category-isomorphisms-are-bijective-on-objects-and-morphisms]]

[[math:def-natural-transformation]]

[[math:def-vertical-composition-of-natural-transformations]]

[[math:def-natural-isomorphism]]

## Facts & Assumptions

[F1] [[ex-d4-universal-wall-graph-artin-tits-normalisers]] gives the doubled generating graph and the universal groupoid with one arrow between every ordered pair of chamber objects. [[ex-d4-atomic-relations-artin-tits-normalisers]] gives the square/hexagon atomic relations and their local rank-two flats.

[F2] The five supporting constructions [[lem-author-d4ce11000001-spherical-arrangement-cells]], [[lem-author-d4ce11000001-flag-dual-sphere]], [[lem-author-d4ce11000001-local-dual-polygons]], [[lem-author-d4ce11000001-directed-bigon-sphere]] and [[lem-author-d4ce11000001-sphere-vertex-groupoid]] give the spherical cellulation, its dual, the atomic polygon correspondence, the directed bigon model and its thin fundamental groupoid. The topological groupoid convention is [[math:def-fundamental-groupoid-of-a-space]].

[F3] Disk attachment uses the quotient construction in [[math:def-cell-attachment-by-a-characteristic-map]]: attach a disk to a graph by identifying each boundary point with its image under the prescribed boundary loop, and use the quotient topology. Apply this construction to all the finitely many polygon and bigon disks.

[F4] [[math:thm-higher-dimensional-spheres-are-simply-connected]] at $n=2$ says that $S^2$ is simply connected: it is nonempty and path-connected, and its fundamental group at every point is trivial.

[F5] A full subcategory retains all morphisms between its chosen objects, as in [[math:def-subcategory-and-full-subcategory]]. An equivalence consists of functors in both directions and natural isomorphisms from each composite to the appropriate identity (or in the reverse direction), as in [[math:def-equivalence-and-adjoint-equivalence-of-categories]].

[F6] A homeomorphism is a continuous bijection with continuous inverse, and two spaces are homeomorphic when such a map exists, as in [[math:def-homeomorphism-and-open-maps]].

[F7] A functor assigns objects and arrows with their specified endpoints and preserves identities and composition, as in [[math:def-functor-and-contravariant-functor]]. An isomorphism of categories means a functor with a two-sided inverse functor, as defined in [[math:prop-category-isomorphisms-are-bijective-on-objects-and-morphisms]].

[F8] A natural transformation is a family of component arrows whose naturality squares commute, as in [[math:def-natural-transformation]]. Vertical composition is componentwise composition, and the identity transformation has identity components, as in [[math:def-vertical-composition-of-natural-transformations]]. A natural isomorphism is a natural transformation with a two-sided inverse under this composition, as in [[math:def-natural-isomorphism]].

## Proof

**Given:** The data in the Statement and the exact supplier facts above.

**Goal:** Establish the Statement.

1.1 Use the dual sphere of [F2] for $D$, with disk attachments interpreted as in [F3]. Its one-skeleton is exactly the chamber adjacency graph, and every dual two-cell is an atomic square or hexagon. Conversely every atomic polygon is one of these cyclic faces. Thus filling all faces, including whichever face becomes outermost after removing a point for a planar drawing, gives this entire sphere. Omitting the outermost disk would remove a disk from this model, so it must be included in the stated spherical construction. [F1, F2, F3]

2.1 For genuinely distinct opposite directed edges, use the directed bigon construction of [F2], with the quotient topology of [F3]. Its polygon attaching loops use a coherent sphere orientation, with the two adjacent polygons using opposite directed copies of each shared edge. The bigon imposes that the two crossing arrows are inverses. A polygon disk identifies its two opposite geodesic arcs after these inverse identifications, exactly the codimension-two relation in [F1]. The construction therefore has the specified directed attaching maps and is homeomorphic to $S^2$. [F1, F2, F3, step 1.1]

3.1 For either $X=D$ or $X=K$, steps 1.1 and 2.1 give a homeomorphism $h:X\to S^2$. By [F6], both $h$ and $h^{-1}$ are continuous. For any $a,b\in X$, compose a path from $h(a)$ to $h(b)$ with $h^{-1}$; such a path exists by [F4]. Every loop in $X$ at $a$ maps under $h$ to a loop at $h(a)$, which is homotopic to the constant loop with basepoint fixed by [F4]; composing that homotopy with $h^{-1}$ gives the corresponding homotopy in $X$. If $p,q:a\to b$ are path classes, then $q^{-1}\circ p$ is therefore the identity at $a$. The groupoid inverse laws in [F2] imply $p=q$. Thus the fundamental groupoid has exactly one arrow between every ordered pair of points, for both spaces; in particular this agrees with the supplied vertex conclusion for $K$. [F2, F4, F6, step 1.1, step 2.1]

4.1 For each $X\in\{D,K\}$ send each chamber object to its corresponding vertex, and its unique universal wall-groupoid arrow to the unique path class between those endpoints in $X$. By [F1] and step 3.1 this is bijective on objects and on each hom-set. It preserves identities and composition because the relevant hom-sets are singletons; its inverse on objects and arrows is a functor for the same reason. The two functors are inverse on every object and arrow, so their composites are the identity functors. Hence it is an isomorphism in the sense of [F7] to the full vertex subgroupoid of [F5]. Each generating crossing maps to the actual crossing-edge path class, since that class has the required endpoints. [F1, F2, F5, F7, step 3.1]

5.1 Fix one chamber vertex $v_0\in V$. For each $X\in\{D,K\}$ let $I:\Pi_1(X;V)\to\Pi_1(X)$ be the inclusion and let $R:\Pi_1(X)\to\Pi_1(X;V)$ send every object to $v_0$ and every arrow to its identity. These preserve endpoints, identities and composition, so are functors by [F7]. Define the component at $v\in V$ of $1\Rightarrow RI$ to be the unique arrow $v\to v_0$, and the component at $x\in X$ of $IR\Rightarrow1$ to be the unique arrow $v_0\to x$. These arrows exist by step 3.1 and are invertible by [F2]. Every naturality square commutes because the two composites have the same endpoints and there is only one arrow between them. For each of these component families, the inverse component arrows also form a natural transformation: their naturality squares commute by the same uniqueness of arrows with specified endpoints. Both vertical composites have identity components by the inverse laws, so the families are natural isomorphisms by [F8]. Thus $I$ and $R$ give the claimed equivalence by [F5]. Together with step 4.1 this proves all groupoid claims, with the asserted isomorphisms using precisely the 32 chamber objects. [F1, F2, F5, F7, F8, step 3.1, step 4.1] ∎

## Source notes

The original article is attribution only. The five local supporting lemmas supply the global topology and the compatibility with directed arrow attachments; the declared library inputs and local argument supply the path-class transfer and categorical equivalences. Each inverse two-cycle means one cyclic bigon; reversing its cyclic parametrisation does not request an additional disk. The repaired gaps concern the generated draft, and no original-article defect is asserted.
