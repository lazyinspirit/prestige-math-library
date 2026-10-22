---
id: lem-essential-pl-disks-admit-normal-replacements
kind: lemma
title: Essential PL disks admit normal disk replacements
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-normal-surface-coordinate-box
  - thm-polygonal-jordan-curve
  - thm-simple-polygon-admits-a-triangulation
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: William Jaco and J. Hyam Rubinstein, 0-efficient triangulations of
        3-manifolds
      url: https://arxiv.org/pdf/math/0207158
      locator: §3.1, printed pp.12–16, the local normalization moves and lexicographic
        shrinking complexity. The disk-replacement version below permits
        replacement rather than claiming isotopy in a reducible manifold.
dependency_level: 1
---

## Statement

Let $M$ be a compact PL three-manifold with a finite simplicial triangulation. If $M$ contains a properly embedded PL disk whose boundary is not null-homotopic in $\partial M$, then it contains a normal disk with that property. No orientability, irreducibility or projective-plane hypothesis is required. The construction is allowed to replace disk pieces and to change the isotopy class of the original disk; it asserts existence of a normal replacement.

## Statement references

[[def-normal-surface-coordinate-box]] — normal triangle and quadrilateral disks.

[[thm-polygonal-jordan-curve]] — the finite planar disk and cap constructions.

[[thm-simple-polygon-admits-a-triangulation]] — the finite planar disk and cap constructions.

## Facts & Assumptions

**Given:** The finite triangulation and an essential-boundary proper PL disk $D$.

[F1] Finite simple planar polygons bound polygonal disk regions and those regions admit finite triangulations. The same finite disk facts apply to polygonal curves on the boundary of a tetrahedron: truncate a vertex disjoint from the curves, take a planar Schlegel diagram of the resulting convex polyhedron, and triangulate the two sides. ([[thm-polygonal-jordan-curve]], [[thm-simple-polygon-admits-a-triangulation]])

[F2] A normal tetrahedral disk has boundary meeting each tetrahedral edge at most once, and is of triangle or quadrilateral type. ([[def-normal-surface-coordinate-box]])

## Proof

1.1 Put $D$ in finite PL general position: it misses vertices, meets edges transversely in finitely many points, and meets faces in finitely many arcs and circles. This is obtained by finite subdivision and small generic vertex displacements, choosing each displacement outside finitely many forbidden affine planes and lines. Preserve its proper boundary in the boundary faces. Every component $P$ of its intersection with a tetrahedron is a compact planar surface, because it is a subsurface of a disk. Components have nonempty boundary; an entire closed component in a tetrahedron would be a closed component of $D$. Put $w(D)=|D\cap T^{(1)}|$ and $\lambda(D)=\sum_P(1-\chi(P))$. A connected planar piece with $b\ge1$ boundary curves has $1-\chi(P)=b-1\ge0$, as is seen by cutting it along $b-1$ disjoint connecting arcs to a disk and counting the cuts. Thus $(w,\lambda)$ is a pair of nonnegative integers. [given, F1, construct]

2.1 We first record the permitted disk replacement inside a tetrahedron. Whenever a new cap is disjoint from the other pieces, a disk piece may be replaced, fixing its boundary and a smaller attaching collar, by that cap just inside its chosen boundary disk region. This preserves the topology of the entire surface: two disk parametrizations with the same boundary identification are homeomorphic relative to that boundary, extending the circle map radially. It is enough to choose the new cap disjoint from the other pieces. If all the pieces in question are disks, choose a point away from their boundary curves and take the disk side not containing that point for each curve. These disks are nested or disjoint by [F1]. Put the caps at successively deeper levels for successively larger nested regions, rounding their finite collar corners PL. This realizes all those disk pieces by disjoint caps. The same construction works in a boundary disk region containing only boundary curves of disk pieces, with other pieces kept outside its collar. The chosen depth intervals can be arbitrarily small. Boundary curves, edge intersections and the planar Euler deficits are unchanged. No assertion that the old disk is isotopic to the cap in the tetrahedron is needed. [F1, step 1.1, construct]

3.1 If $\lambda>0$, select in some tetrahedron a boundary circle $c$ of a non-disk piece $P$ that is innermost among such boundary circles, using either fixed planar diagram of the boundary sphere. All boundary circles in its inner disk region are boundaries of disk pieces. Move those disk pieces to nested boundary-parallel caps as in step 2.1, at shallower collar depths. A copy of the inner boundary disk placed deeper than those caps, with boundary on a curve just inside the collar of $c$ in $P$, is then an embedded compressing disk disjoint from all other pieces. Its boundary is essential in $P$, since $P$ is planar with at least two boundary circles. Compress along it. Locally this splits off a disk and replaces $P$ by a planar piece with one fewer boundary circle, so $\lambda$ decreases by one, while $w$ is unchanged. Globally compression of a disk along an interior simple circle gives a disk with the original boundary and a sphere. Keep the disk and discard the sphere; discarding pieces cannot increase $w$ or $\lambda$. The boundary of the retained disk is still essential. [F1, step 2.1, construct]

4.1 Repeat step 3.1 until $\lambda=0$ unless a preceding sphere discard has already decreased $w$; in that event restart with the smaller weight. At $\lambda=0$ every tetrahedral intersection piece is a disk. We may rearrange these disk pieces as boundary-parallel caps by step 2.1, without changing $w$ or $\lambda$. This rearrangement is only preparation for the next simplifying move, so it introduces no infinite sequence of equal-complexity moves. [step 2.1, step 3.1, construct]

5.1 Suppose some disk boundary meets a tetrahedral edge $e$ more than once. The finite disjoint boundary circles on the tetrahedral sphere then admit an edge-return interval $\beta\subset e$ with endpoints on the same boundary circle and interior disjoint from all the boundary circles. To verify this, the complementary regions of finitely many disjoint circles on a sphere have a tree as their incidence graph: each added circle separates one region into two, by [F1]. The edge $e$ traces a walk in that tree. Crossing one circle more than once repeats a tree edge; any such walk has an immediate backtrack. The two consecutive crossings of that backtrack are the required endpoints of $\beta$. Choose the cap side of its disk piece containing $\beta$ and use the compatible nested cap arrangement of step 2.1. The strip between $\beta$ and its parallel arc $\alpha$ on this cap is a disk $E$ with $E\cap D=\alpha$, $\partial E=\alpha\cup\beta$, and interior disjoint from all pieces: inner caps miss $\beta$ and outer caps lie deeper. This is an actual embedded edge-compressing disk. [F1, step 2.1, step 4.1, construct]

6.1 If $e$ is an interior edge of $M$, slide the strip of $D$ adjacent to $\alpha$ across $E$ and beyond $\beta$ into the other sectors of the edge star. In the local product of an edge interval and a normal disk this is the elementary removal of a bigon; it removes precisely the two intersections at the ends of $\beta$ and creates no new edge intersections. It is an isotopy supported in that edge star and preserves the global boundary. Hence $w$ decreases. The new disk may have a larger local Euler deficit, which does not matter because the first complexity coordinate has decreased. [step 5.1, construct]

6.2 If $e\subset\partial M$, the same disk $E$ gives a boundary compression. Cutting the global disk along the proper arc $\alpha$ and adding the two parallel copies of $E$ gives two proper disks. At least one has essential boundary. Indeed, after choosing a base point and whiskers in $\partial M$, the old boundary loop is the product of the two new boundary loops, with one conjugated by the connecting arc $\beta$. If both new loops were nullhomotopic, so would be the old one. Keep an essential-boundary disk. The total edge intersection number of the two new disks is smaller than the old one by two, so the retained disk has strictly smaller $w$. Again any increase of $\lambda$ is permitted. [given, step 5.1, construct]

7.1 Each compression macro-move of step 3.1 either decreases $w$ or leaves it fixed and decreases $\lambda$; each edge macro-move decreases $w$. The intervening cap preparations are finite. Lexicographic descent in $\mathbb N^2$ therefore terminates with an essential-boundary proper disk all of whose tetrahedral pieces are disks and all of whose boundary circles meet each tetrahedral edge at most once. A circle of intersection with an interior face would now be the entire boundary of a disk piece on either side, making a sphere component of the global disk. A circle on a boundary face would be the boundary of a disk lying entirely in one tetrahedron and would be nullhomotopic in that face. Both are impossible. Each face intersection is therefore an arc, and an arc returning to the same edge would violate the just established edge condition. [F1, step 3.1, step 6.1, step 6.2, construct]

8.1 Each tetrahedral boundary circle meets an edge, since otherwise it would lie in one face and would have been excluded in step 7.1. It separates the four vertices into two subsets. An edge with endpoints on opposite sides must be crossed, and one with endpoints on the same side must be crossed an even number of times, hence not at all. The crossing set is consequently either the three edges separating one vertex from the other three, or the four edges separating two vertices from the other two. The boundary is thus a triangle or quadrilateral normal curve. Replace the finitely many disk pieces by standard parallel normal disks with those same boundary matchings; disjoint boundary curves permit only one quadrilateral type in a tetrahedron. Their finite gluing has exactly the same abstract surface topology and boundary essentiality as the retained disk. It is the required normal disk. This proof used only finite planar disk constructions and preserves essentiality at every retained-disk step. [F1, F2, step 7.1, construct] ∎
