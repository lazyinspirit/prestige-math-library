---
id: thm-polygonal-jordan-curve
kind: theorem
title: "Polygonal Jordan curve theorem: a polygon has exactly two complementary regions and is the frontier of each"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-polygonal-arc-and-polygon, lem-polygonal-crossing-parity-is-locally-constant, def-plane-region-and-frontier]
justified_by: []
aliases: []
landmark: true
short: "Polygonal Jordan curve theorem"
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-09-29
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Chapter 4, Section 4.1"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch4.pdf"
pipeline_run: null
---

## Statement

If $P\subseteq\mathbb R^2$ is a polygon, then $\mathbb R^2\setminus P$ has exactly two regions, one bounded and one unbounded, and

$$\operatorname{Fr}(U)=P$$

for each of them. Regions and frontiers are from [[def-plane-region-and-frontier]]. The proof uses the finite simple edge cycle of [[def-polygonal-arc-and-polygon]] and polygonal crossing parity from [[lem-polygonal-crossing-parity-is-locally-constant]].

## Facts & Assumptions

**Given:** A polygon $P$.

[L1] The parity of transverse ray crossings with a polygon is locally constant on its complement ([[lem-polygonal-crossing-parity-is-locally-constant]]).

[L2] A polygon is a finite simple closed chain of straight edges: nonincident closed edges are disjoint, and adjacent edges meet only at their shared vertex ([[def-polygonal-arc-and-polygon]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the even and odd crossing classes are disjoint open unions of complementary regions. A point outside a large rectangle containing $P$ has a ray missing $P$ and hence even parity. Points sufficiently close to the two sides of the relative interior of any polygon edge have parities differing by one, so both classes are nonempty. [L1]

2.1 Let $x,y\notin P$ have equal parity. First construct two connected side networks near $P$. Orient its finite edge cycle. Choose pairwise disjoint small closed disks about its vertices, each meeting $P$ only in the two incident initial straight edge pieces. Those pieces divide the open disk into two sectors; the left-side germs of the entering and leaving oriented edges lie in the same sector, and likewise on the right. Each sector is polygonally connected by short radial pieces and a polygonal approximation to a circular arc about the vertex. Choose smaller concentric disks and, on each compact edge portion outside them, a sufficiently thin open strip split by the edge into left and right half-strips. The strip may extend into the larger vertex disks, where its half-strips meet the matching sectors. Its width can be chosen below the positive distance from that compact truncated edge portion to each of the finitely many other full edges, including adjacent edges, so it meets $P$ only along its central edge portion by [L2]. Thus successive half-strips and vertex sectors form a polygonally connected left-side network disjoint from $P$, and similarly a right-side network. All selections are finite. By [L1], parity is constant on each network; the two parities differ because points on opposite sides of any edge have opposite parity. Now choose a bend point $z\notin P$ outside the finitely many lines through $x$ or $y$ and a vertex and the lines through $x$ or $y$ parallel to an edge. The two-segment path $xzy$ misses every polygon vertex, contains no edge piece, and meets $P$ only in finitely many transverse edge-interior crossings. If $x=y$, use the constant path. Otherwise list the crossings in path order as $c_1,\dots,c_N$. Parity switches at each crossing, so $N$ is even. For each consecutive pair $c_{2j-1},c_{2j}$ choose points $a_j,b_j$ on the path just before the first and just after the second crossing, close enough to lie in the matching side half-strip or vertex sector and to make these parameter intervals disjoint. The two points have equal parity, hence lie in the same one of the globally connected side networks; join them there by a polygonal path disjoint from $P$. Replace each of the finitely many disjoint path intervals from $a_j$ to $b_j$ by that side path. The untouched pieces contain no crossings and the inserted pieces avoid $P$, giving a polygonal path from $x$ to $y$ in the complement. [step 1.1, L1, L2]

3.1 Step 2.1 shows each parity class is connected, while step 1.1 shows both are nonempty and no connected subset meets both. They are therefore exactly the two regions. The even class contains the exterior of a large rectangle and is unbounded; the odd class lies inside that rectangle and is bounded. [step 1.1, step 2.1]

4.1 At every point of an edge interior, arbitrarily small points on its two local sides have opposite parity. The same holds at vertices by using the two incident edges and a small sector. Thus every point of $P$ lies in the frontier of both regions. Conversely, local constancy in [L1] gives every point off $P$ a neighbourhood contained in one region, so no such point lies in either frontier. Hence both frontiers equal $P$. [step 1.1, step 3.1, L1] ∎
