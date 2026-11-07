---
id: lem-finite-standard-arc-collapse-of-balanced-spans-is-a-union-of-spheres
kind: lemma
title: "Finite standard-arc collapse of balanced spans gives spheres"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-standard-intersection-arcs-admit-locally-flat-ambient-collapse
  - lem-four-page-arc-collapse-is-a-disk-for-opposite-end-pairings
  - lem-compact-c2-surfaces-admit-finite-cellulations-relative-to-a-finite-embedded-graph
  - thm-euler-poincare-formula-for-finite-cw-complexes
  - thm-classification-of-compact-connected-surfaces
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is inherited from the actual locally flat arc-collapse and compact surface classification suppliers. The cell counts, component inequalities and finite composition introduce no additional choice."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joshua Evan Greene, Alternating links and definite surfaces, proof of Theorem 1.1, PDF pp.7–8; disconnected balanced version and actual local-flatness details supplied here"
      url: "https://people.maths.ox.ac.uk/lackenby/Fox.pdf"
    - title: "Thomas Kindred, A geometric proof of the flyping theorem, Procedure 2.20 and Figure 6, PDF pp.10–11"
      url: "https://arxiv.org/pdf/2008.06490v3"
---

## Statement

Assume full AC. Let $F_0,F_1\subset S^3$ be compact smooth embedded surfaces with the same nonempty boundary link $L$, with no closed components and with supplied radial collars around $L$. Suppose their entire intersection is $L$ together with $n$ pairwise disjoint smooth arcs $A_1,\ldots,A_n$ whose distinct endpoints lie on $L$. Each arc is the isolated radial extension of a proper transverse common arc in the link exterior; the two boundary curves on the surrounding tori cross transversely at its endpoints, with equal ordered intersection signs when the tori are oriented outward toward the exterior. Thus every arc is standard. No intersection circles occur.

Write $b_i=\operatorname{rank}H_1(F_i;\mathbb Z)$ and suppose $c(F_0)=c(F_1)=p$ and $n=b_0+b_1$. There is a continuous surjection $q:S^3\to S^3$ whose only nonsingleton fibers are exactly the arcs $A_j$, supported in any prescribed disjoint neighborhoods of those arcs. Its image $S=q(F_0\cup F_1)$ is a disjoint union of exactly $p$ locally flat embedded topological two-spheres. Each component of $S$ contains the images of exactly one component of each $F_i$. The conclusion includes $n=0$ and allows nonorientable or disconnected spanning surfaces. It does not assert smoothness of these quotient spheres or reconstruct a link diagram.

## Statement references

[[def-axiom-of-choice]]

[[lem-standard-intersection-arcs-admit-locally-flat-ambient-collapse]]

## Facts & Assumptions

**Given:** Full AC, the surface pair, radial collars, finite disjoint standard arcs, and the two numerical balance assumptions.

[F1] Each such arc has an actual ambient collapse in an arbitrarily small smooth ball: the ball is preserved, its boundary and outside are fixed, and the image of the two surface pieces is a standard ball-disk pair. Its only nonsingleton fiber is that arc. ([[lem-standard-intersection-arcs-admit-locally-flat-ambient-collapse]])

[F2] Collapsing disjoint arc subcomplexes of a finite cell complex preserves Euler characteristic: a subdivided interval with $v$ vertices and $e=v-1$ edges is replaced by one vertex, changing the alternating cell count by $1-v+e=0$. ([[lem-four-page-arc-collapse-is-a-disk-for-opposite-end-pairings]])

[F3] Under countable choice a compact $C^2$ surface has a finite triangular cellulation relative to any finite embedded regular $C^2$ graph in its interior, including prescribed circle edges after subdivision. The cell maps give the actual surface topology. ([[lem-compact-c2-surfaces-admit-finite-cellulations-relative-to-a-finite-embedded-graph]])

[F4] For a finite CW complex, the alternating cell count equals the alternating integral homology rank sum. In particular this count is invariant under homeomorphisms between finite CW complexes. ([[thm-euler-poincare-formula-for-finite-cw-complexes]])

[F5] Under full AC every connected compact boundaryless topological surface is a sphere, a connected sum of $g\ge1$ tori, or a connected sum of $k\ge1$ projective planes, with the explicit polygonal models stated there. ([[thm-classification-of-compact-connected-surfaces]])

## Proof

1.1 Apply [F1] in pairwise disjoint balls $B_j$ inside the prescribed neighborhoods. Compose the finitely many resulting maps. They preserve their respective balls and are the identity outside them, so their supports do not interfere. The composite $q$ is onto, and its nonsingleton fibers are precisely the $A_j$; it induces a homeomorphism from the ambient quotient onto $S^3$, since the quotient is compact and the target Hausdorff. At each collapsed point the entire local image of $F_0\cup F_1$ is the disk in [F1]. Away from the arcs, a point of just one surface has its ordinary smooth disk chart. At a point of $L$ away from arc endpoints, the radial collars give two distinct rays in each normal disk. They are distinct because equality would give a common radial segment not contained in the listed arcs. Locally along a short interval of $L$, choose continuous angular lifts of those two rays. The increasing piecewise-linear angular map sending them to angles zero and $\pi$, linear on each of the two intervening angular intervals, gives a homeomorphism of the normal disk, continuous along the interval and at its center. Thus their two half-sheets form a locally flat disk. These charts cover the image, which is consequently a compact locally flat embedded closed topological surface $S$. [given, F1, construct]

1.2 Produce compatible finite cells before computing Euler characteristic. Double each $F_i$ along its boundary using its smooth collar. On the boundaryless double the graph $G=L\cup\bigcup_j A_j$ is a finite embedded regular graph: put vertices at every arc endpoint and at least one on every remaining link circle. The arcs meet the boundary transversely in the original surface boundary charts, and the graph is contained in the interior of the double. Apply [F3] with the whole double as its compact subsurface. Since $L$ lies in the resulting one-skeleton, the triangles on either side of $L$ restrict to a finite cellulation of the original $F_i$, relative to $G$. Refine the two finite subdivisions of each common graph edge to their union, extending a boundary-edge subdivision across each incident triangle by a finite fan. Both cellulations then restrict to the same cells on the actual graph. Glue them using their actual pointwise identification on $G$. The resulting finite disk attachments give a finite CW structure on $K=F_0\cup F_1$: the quotient of the disjoint compact surfaces by these identifications is homeomorphic to their Hausdorff embedded union. No claim of smooth or affine gluing at a vertex is needed. [given, F3, construct]

2.1 For each connected component of either $F_i$, its triangulation has a boundary edge. In a cellular integral two-cycle, the coefficient of the incident triangle must vanish, because that boundary edge has only one incident triangle. Across an interior edge the two incident coefficients differ only by an orientation sign, so vanishing propagates across it. The dual adjacency graph of the triangles is connected: paths between triangle interiors in the connected surface can be perturbed in finitely many local disk or half-disk charts to avoid the finite vertices and to cross edges finitely many times. Hence all coefficients vanish. There are no cells above dimension two, so $H_2(F_i;\mathbb Z)=0$, and all higher homology vanishes as well. Its zeroth homology has rank $p$. Formula [F4] gives $\chi(F_i)=p-b_i$, with no orientability assumption. [step 1.2, F4, construct, algebra]

2.2 Let $k$ be the number of connected components of $K$. It is finite because $K$ is a union of finitely many connected surface components. Every such component contains a component of each $F_i$: any component of either $F_i$ has a boundary circle in the common $L$, and that circle belongs also to a component of the other surface. Thus $k\le p$. Collapsing an arc does not join distinct components, since that arc lies wholly in one component; the images of the finitely many disjoint compact components remain disjoint compact sets. Consequently $S$ also has exactly $k$ components. [given, step 1.1, construct]

3.1 The graph $G$ is obtained from the disjoint link circles, whose Euler characteristic is zero, by attaching the $n$ arc edges at existing vertices, allowing further subdivisions without changing the count. Thus $\chi(G)=-n$. The compatible cell structures in step 1.2 count cells of $G$ twice in $F_0$ and $F_1$ and once in their union. Therefore $\chi(K)=\chi(F_0)+\chi(F_1)-\chi(G)=2p-b_0-b_1+n=2p$. Each $A_j$ is an arc subcomplex, and the compact surface image $S$ is exactly their quotient in $K$. By [F2] it has a finite CW structure with $\chi(S)=\chi(K)=2p$. [given, step 1.2, step 2.1, F2, algebra]

4.1 Each component $S_a$ is a connected compact boundaryless topological surface by step 1.1. Its type in [F5] has Euler characteristic at most two, with equality only for the sphere. Explicitly the sphere digon has two vertices, one paired edge and one face, giving two; the genus-$g$ one-face polygon has one vertex and $2g$ edges, giving $2-2g$; the $k'$-crosscap polygon has one vertex and $k'$ edges, giving $2-k'$. These finite polygonal counts agree with the finite cell count of $S_a$ by [F4]. Combining the component inequalities and step 3.1 gives $2p=\sum_a\chi(S_a)\le2k\le2p$. Equality forces $k=p$ and $\chi(S_a)=2$ for every $a$. Thus all $S_a$ are spheres. Since each component already contains at least one component of each $F_i$ and there are exactly $p$ available on each side, it contains exactly one of each. All local-flatness and support assertions were proved in step 1.1; for $n=0$ the same proof uses the identity map and an empty collapse list. [step 1.1, step 3.1, step 2.2, F4, F5, algebra] ∎
