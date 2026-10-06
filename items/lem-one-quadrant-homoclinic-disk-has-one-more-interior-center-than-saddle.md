---
id: lem-one-quadrant-homoclinic-disk-has-one-more-interior-center-than-saddle
kind: lemma
title: "A one-quadrant homoclinic disk contains a center"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-characteristic-disk-center-saddle-index-count, lem-finitely-cornered-regular-plane-curve-separates-without-choice, lem-c2-saddle-function-has-c1-morse-coordinates, thm-hopf-turning-tangent-theorem, def-rotation-index-of-a-regular-closed-plane-curve, def-degree-of-a-circle-loop, def-transversely-oriented-codimension-one-foliation, lem-characteristic-disk-map-can-be-put-in-generic-position-rel-boundary, prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps, thm-simple-polygon-admits-a-triangulation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 4
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "S. P. Novikov, The Topology of Foliations (English translation by J. A. Zilber)"
      url: "https://homepage.mi-ras.ru/~snovikov/23.pdf"
      locator: "\u00a76, printed pp. 16-19 (index bookkeeping for one-sector homoclinic disks); the local corner rounding and turning argument are supplied locally"
---

## Statement

Let $X$ be the characteristic $C^1$ field of a $C^2$ characteristic disk with
finitely many nondegenerate centers and saddles. Let $K$ be the bounded source
disk of a simple directed homoclinic circuit through a saddle $q$, and suppose
$K$ occupies precisely one of the four local saddle sectors of $X$ at $q$. If
$c_K$ and $s_K$ count the centers and saddles strictly inside $K$, then
$$c_K-s_K=1 .$$
In particular $K$ contains a center. The saddle $q$ is not included in $s_K$.

## Facts & Assumptions

**Given:** A characteristic $C^1$ field $X$ on a source disk with finitely many nondegenerate centers and saddles, a saddle $q$, and the bounded source disk $K$ of a simple directed homoclinic circuit through $q$ occupying one local saddle sector at $q$.

[F1] A characteristic field is, in a foliation chart with transverse function $u$, of the form $X=f\,J\nabla u$ with $f\neq0$ and $J$ the quarter turn; hence on the regular part the trajectories of $X$ are exactly the level sets of $u$, the zeros of $X$ are the critical points of $u$, and a nondegenerate zero of definite Hessian is a center while an indefinite Hessian gives a saddle ([[def-transversely-oriented-codimension-one-foliation]], [[lem-characteristic-disk-map-can-be-put-in-generic-position-rel-boundary]], [[lem-characteristic-disk-center-saddle-index-count]]).

[F2] Near a nondegenerate saddle of a $C^2$ function $u$ there are $C^1$ coordinates $(x,y)$ with $u-u(q)=xy$ ([[lem-c2-saddle-function-has-c1-morse-coordinates]]); in these coordinates the local stable and unstable branches of $X$ are the two coordinate axes and the four local sectors are the four quadrants.

[F3] A simple closed piecewise-$C^2$ regular plane curve with finitely many corners and distinct one-sided tangents at each corner bounds exactly two components, one bounded and one unbounded ([[lem-finitely-cornered-regular-plane-curve-separates-without-choice]]).

[F4] For a simple closed piecewise-$C^2$ regular plane curve bounding a positively oriented disk region, the directed unit tangent is a circle loop and its rotation index is $1$: the total signed turning of the tangent equals $2\pi$ ([[thm-hopf-turning-tangent-theorem]], [[def-rotation-index-of-a-regular-closed-plane-curve]]).

[F5] For an oriented loop in $S^1$ the degree adds under composition with the antipodal map trivially: the antipodal map of $S^1$ has degree $1$, so a loop $t\mapsto-T(t)$ has the same degree as $t\mapsto T(t)$ ([[def-degree-of-a-circle-loop]], [[prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps]]).

## Proof

**Proof technique:** direct.

1.1 The saddle q is the only zero on the homoclinic boundary: a nonconstant trajectory cannot pass through another zero. Choose orientation-preserving C¹ Morse coordinates near q, and replace X by −X if necessary, so the sector occupied by K is $x,y\ge0$ and $X=c(x,y)(x,-y)$ with $c>0$. Replacing X by its negative does not change local or boundary degrees. Choose a small quarter disk in this sector whose closure contains no other zero. [given, F1, F2, F5]

2.1 Cut off that quarter disk by the arc $x^2+y^2=\varepsilon^2$, directed from $(0,\varepsilon)$ to $(\varepsilon,0)$. Its endpoints are on the zero-level separatrices, and its interior is inside K. Its inverse image in the original plane is a regular C¹ arc. On the arc, both its directed tangent and X have positive x-component and negative y-component in the open quadrant; at each endpoint they are perpendicular rather than opposite. After applying the invertible derivative of the coordinate change they remain never opposite. Replace this compact C¹ arc by a sufficiently C¹-close regular C² arc with the same endpoints, staying inside the sector and retaining that nonopposition. Such an approximation is elementary in finitely many graph charts: convolve each C¹ graph with a smooth compactly supported kernel, whose function and derivative converge uniformly; finite endpoint corrections fix the endpoints and tangent directions, and a thin graph strip preserves embedding. This gives a simple piecewise-C² curve C′ formed with the retained orbit arc. Its bounded region K′ lies in K and removes q and no interior zero. [F2, F3, step 1.1, construct]

3.1 Orient C′ by the homoclinic direction and the new cut arc; the retained region is on its left in the chosen sector, so this is its positive boundary orientation. On the orbit part, the normalized X equals the directed tangent. On the cut arc it is never opposite to that tangent. At the two corners interpolate between the one-sided tangents by their nonzero convex combinations; X is never opposite to this corner interpolation, since before the approximation the two tangents and X occupy the same closed pointed quadrant, and this persists after a sufficiently small approximation. Thus normalization of $(1-v)X+vT$ gives a homotopy from X/|X| along C′ to its tangent loop with the prescribed short corner turns. By the turning theorem that tangent loop has degree one. [F4, step 2.1]

4.1 To compute the index sum, approximate C′ inside a zero-free thin collar by a simple inscribed polygon, using finitely many local graph strips; projection in those strips gives a boundary homotopy through nonzero fields. Choose disjoint small squares around every interior zero. Choose a direction with distinct projections of all outer-polygon and square vertices. Between consecutive projections the boundary edges are ordered affine graphs; the zero-free region is a finite union of bands between consecutive graphs. Subdivide their vertical walls at all edge intersections, and split each convex triangle or quadrilateral band into triangles, as in the finite polygonal subdivision of [[thm-simple-polygon-admits-a-triangulation]]. On each zero-free cell the normalized field extends across the cell, so its boundary degree is zero. Summing the boundary degrees cancels every common oriented edge, and gives outer degree equal to the sum of the small-square degrees. The local calculation in [[lem-characteristic-disk-center-saddle-index-count]], in its local-degree paragraph, gives +1 for a center and −1 for a saddle; this calculation and the cancellation argument do not require its outer-boundary alternatives once the outer degree has been computed directly. Hence $c_K-s_K=\deg(X/|X|\text{ on }C\prime)=1$. [F1, step 1.1, step 2.1, step 3.1]

5.1 All original interior zeros are inside K′ and q was cut off, so the count in step 4.1 is exactly the stated strict-interior count. It implies $c_K\ge1$. Only finitely many charts, approximations and polygonal cells were used. [step 2.1, step 4.1] ∎
