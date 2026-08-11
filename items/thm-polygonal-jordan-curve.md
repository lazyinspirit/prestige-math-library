---
id: thm-polygonal-jordan-curve
kind: theorem
title: "Polygonal Jordan curve theorem: a polygon has exactly two complementary regions and is the frontier of each"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-polygonal-crossing-parity-is-locally-constant, lem-polygonal-ray-general-position, def-plane-region-and-frontier, cor-components-of-open-subsets-of-rn-are-polygonally-connected]
justified_by: []
aliases: []
landmark: true
short: "Polygonal Jordan curve theorem"
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
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

for each of them. Regions and frontiers are from [[def-plane-region-and-frontier]]. The proof uses only polygonal crossing parity from [[lem-polygonal-crossing-parity-is-locally-constant]], general-position rays from [[lem-polygonal-ray-general-position]], and polygonal connectedness of open components from [[cor-components-of-open-subsets-of-rn-are-polygonally-connected]].

## Facts & Assumptions

**Given:** A polygon $P$.

[L1] The parity of transverse ray crossings with a polygon is locally constant on its complement ([[lem-polygonal-crossing-parity-is-locally-constant]]).

[L2] Every connected component of an open subset $U\subseteq\mathbb{R}^n$ is open in $\mathbb{R}^n$ and polygonally connected ([[cor-components-of-open-subsets-of-rn-are-polygonally-connected]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the even and odd crossing classes are disjoint open unions of complementary regions. A point outside a large rectangle containing $P$ has a ray missing $P$ and hence even parity. Points sufficiently close to the two sides of the relative interior of any polygon edge have parities differing by one, so both classes are nonempty. [L1]

2.1 Let $x,y$ have equal parity. By [L2], begin with a polygonal path in the plane and perturb it to meet $P$ transversely at finitely many nonvertex points. Its number of crossings is even, because the parity changes once at each transverse crossing and agrees at the endpoints. Pair consecutive crossings along the path; for each pair, replace the intervening segment by a sufficiently close polygonal offset of one of the two polygon arcs between the crossing points. Finite, successively smaller disjoint neighbourhoods make all replacements avoid $P$. The resulting polygonal path joins $x$ to $y$ in the complement. [step 1.1, L1, L2]

3.1 Step 2.1 shows each parity class is connected, while step 1.1 shows both are nonempty and no connected subset meets both. They are therefore exactly the two regions. The even class contains the exterior of a large rectangle and is unbounded; the odd class lies inside that rectangle and is bounded. [step 1.1, step 2.1]

4.1 At every point of an edge interior, arbitrarily small points on its two local sides have opposite parity. The same holds at vertices by using the two incident edges and a small sector. Thus every point of $P$ lies in the frontier of both regions. Conversely, local constancy in [L1] gives every point off $P$ a neighbourhood contained in one region, so no such point lies in either frontier. Hence both frontiers equal $P$. [step 1.1, step 3.1, L1] ∎

