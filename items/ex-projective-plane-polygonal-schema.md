---
id: ex-projective-plane-polygonal-schema
kind: example
title: "Projective plane crosscap polygon"
status: draft
origin: pipeline
deps: [def-polygonal-schema-and-edge-pairing, def-quotient-topology, thm-initial-and-final-characteristic-properties, def-euclidean-spheres-and-closed-balls, def-subspace-topology-top, thm-heine-borel-rn, thm-compactness-under-continuous-maps, def-euler-characteristic-of-a-finite-cw-complex, def-r-orientation-of-a-topological-manifold, def-orientation-local-system-and-orientation-cover, thm-product-universal-property, lem-algebra-of-continuous-real-maps-on-a-space, thm-of-square-roots, thm-continuous-inverse, lem-continuity-is-local-and-pastes]
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Gallier and Xu, A Guide to the Classification Theorem for Compact Surfaces"
      url: "https://www.cis.upenn.edu/~jean/surfclassif-root.pdf"
      locator: "Chapter 1 §1.2 and Chapter 6 §6.2, printed pp.9–12 and 89–91"
    - title: "Koch, Classification of Surfaces"
      url: "https://pages.uoregon.edu/koch/math431/Surfaces.pdf"
      locator: "§3 Theorem 3, printed pp.4–5"
pipeline_run: frontier-36-complete
---

## Example

The digon whose two sides are paired in the same boundary direction — the
one-polygon word $a\,a$ — realizes the real projective plane
$\mathbb{RP}^2$, taken here as the antipodal quotient $S^2/(x\sim -x)$,
equivalently as the closed upper hemisphere with antipodal boundary points
identified. It is nonorientable and has $V=1$, $E=1$, $F=1$, so
$\chi(\mathbb{RP}^2)=1-1+1=1$
([[def-euler-characteristic-of-a-finite-cw-complex]]). This direct finite
quotient uses no choice axiom.

## Facts & Assumptions

**Given:** The closed unit disk $D^2\subset\mathbb R^2$ whose boundary circle is
divided into its two closed semicircles, paired by the antipodal map
$u\mapsto -u$; the one-polygon schema with boundary word $a\,a$; and the unit
sphere $S^2\subset\mathbb R^3$.

[L1] A polygonal schema is finite data of oriented nondegenerate closed disks
with sides paired by specified homeomorphisms, and its realization is the
quotient; a connected surface schema has each edge class incident with exactly
two face-sides and a single cyclic link at each vertex class, and its
realization is then a nonempty compact connected Hausdorff second-countable
boundaryless surface whose finite CW cells are the vertex classes, the edge
pairs and the face disks; a pair of sides with equal exponents is twisted, one
with opposite exponents is orientation compatible, and cyclic rotation,
reversal and relabelling give homeomorphic quotients
([[def-polygonal-schema-and-edge-pairing]]).

[L2] The realization carries the quotient topology, for which a map out of the
quotient is continuous exactly when its composite with the quotient map is
continuous ([[def-quotient-topology]],
[[thm-initial-and-final-characteristic-properties]]).

[L3] The unit sphere is $S^2=S_2(0,1)$ with its subspace topology
([[def-euclidean-spheres-and-closed-balls]],
[[def-subspace-topology-top]]), and a subset of $\mathbb R^3$ is compact exactly
when it is closed and bounded ([[thm-heine-borel-rn]]); continuous images of
compact spaces are compact ([[thm-compactness-under-continuous-maps]]).

[L4] A continuous bijection from a compact space onto a Hausdorff space is a
homeomorphism ([[thm-compactness-under-continuous-maps]]).

[L5] The Euler characteristic of a space with finitely many cells is
$\chi(X)=\sum_n(-1)^n c_n(X)$ ([[def-euler-characteristic-of-a-finite-cw-complex]]).

[L6] An integral orientation is a continuous section of the local homology
system whose value generates every fiber; over a coordinate ball the system is
trivialized and a continuous generator section is locally constant, so its
values are preserved by transport along paths
([[def-r-orientation-of-a-topological-manifold]],
[[def-orientation-local-system-and-orientation-cover]]).

[L7] The radial map $\varphi(u)=(u,\sqrt{1-\lVert u\rVert^2})$ from $D^2$ onto
the closed upper hemisphere is continuous with continuous inverse the
coordinate projection: coordinate projections are continuous
([[thm-product-universal-property]]), sums, products and compositions of
continuous real maps are continuous
([[lem-algebra-of-continuous-real-maps-on-a-space]],
[[lem-continuity-is-local-and-pastes]]). The square map on $[0,\infty)$ is
continuous by that algebra, strictly increasing, and onto $[0,\infty)$ by
[[thm-of-square-roots]]; its inverse, the square root, is continuous by
[[thm-continuous-inverse]].

## Verification

**Proof technique:** direct.

1.1 On the disk $D^2$ the antipodal pairing $u\mapsto-u$ pairs the two closed semicircles, so there is one edge class with two incident face-sides, and it pairs the two corners $(1,0)$ and $(-1,0)$, so there is one vertex class; the two corner sectors join under the two side-germ pairings in a single cyclic link. Hence the digon is a connected surface schema with $V=1$, $E=1$, $F=1$ whose realization $Y$ is a nonempty compact connected Hausdorff boundaryless surface; traversing the boundary circle once covers the single edge class twice in the same direction, which is the word $a\,a$. [L1]

1.2 The closed upper hemisphere $H=\{x\in S^2: x_3\ge 0\}$ is closed and bounded in $\mathbb R^3$, hence compact by Heine–Borel; let $P:=H/\!\sim$ be the quotient that identifies $x$ with $-x$ for $x$ in the equator, the standard model of $\mathbb R P^2$; $P$ is compact as the continuous image of $H$ under the quotient map. [L3]

1.3 The radial map $\varphi:D^2\to H$, $\varphi(u)=(u,\sqrt{1-\lVert u\rVert^2})$, is a homeomorphism: it is continuous because the coordinate functions and the square root are continuous, it is bijective with inverse the coordinate projection $(x_1,x_2,x_3)\mapsto(x_1,x_2)$, which is continuous, and $\lVert\varphi(u)\rVert=1$ holds for every $u$ in $D^2$; on the boundary circle $\varphi(-u)=-\varphi(u)$, so $\varphi$ conjugates the antipodal pairing of the disk boundary to the antipodal pairing of the equator and induces a continuous bijection $P\to Y$ by the characteristic property of the quotient. [L2, L7]

2.1 The quotient $P$ is compact by step 1.2 and $Y$ is Hausdorff by step 1.1, so the continuous bijection $P\to Y$ of step 1.3 is a homeomorphism by [L4]; hence the word $a\,a$ realizes $\mathbb R P^2$, with $Y\cong P$. [L4, step 1.1, step 1.2, step 1.3]

2.2 The antipodal boundary map is a half-turn, so it preserves boundary direction. Take two small collars around paired noncorner boundary points. On each collar choose coordinates $(t,r)$, where $t$ increases in the induced boundary direction and $r\geq0$ points inward; these give the same face orientation on both collars. The pairing identifies $(t,0)$ on the first with $(t,0)$ on the second. A chart across the seam therefore uses $(t,r)$ on the first collar and $(t,-r)$ on the second. Reflection of the second coordinate changes the sign of a plane local homology generator: the boundary of a small oriented disk is a generator in degree one, and the reflection reverses its cyclic orientation. Thus a single generator on the seam chart agrees with the face generator on one collar and with its negative on the other. Its restrictions are a consistent local section; it is their signs relative to the face orientation that differ. [L1, L6, step 1.1]

3.1 The cell counts of step 1.1 give $\chi(Y)=V-E+F=1-1+1=1$ by [L5], and step 2.1 transfers this value to $\mathbb R P^2$. [L5, step 1.1, step 2.1]

4.1 Join points in the two collar interiors by a path in the open disk, and close it by crossing the seam once. Along the interior path the face orientation gives a constant generator section. Across the seam step 2.2 changes its sign relative to that section, so the resulting loop transports a generator to its negative. A global integral orientation would be preserved along every path by [L6], contradicting this loop since a generator of an infinite cyclic group is not its negative. Hence $Y\cong\mathbb RP^2$ is nonorientable. All constructions and pairings are finite; no choice axiom is used. [L6, step 2.1, step 2.2] ∎

## Remarks

The digon is one of the two degenerate one-polygon presentations named in
[[def-polygonal-schema-and-edge-pairing]]; the same quotient is the connected
sum of one projective plane, later written as the one-crosscap square word
$c_1c_1$ on the A page.
