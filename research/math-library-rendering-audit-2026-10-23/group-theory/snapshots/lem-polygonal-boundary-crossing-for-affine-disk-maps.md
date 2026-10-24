---
id: "lem-polygonal-boundary-crossing-for-affine-disk-maps"
kind: "lemma"
title: "Polygonal boundary crossing forces coverage by affine triangles"
status: published
origin: "pipeline"
deps: ["def-bounded-edge-coarse-triangular-filling", "def-complete-ordered-field", "cor-cauchy-reals-lub-complete"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Drutu–Kapovich, Geometric Group Theory — §9.7.4, proof of Propositions 9.103–9.104, PDF pp. 350–352; the crossing and finite-area argument is supplied here"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
pipeline_run: "phase-2-hg-prerequisite"
proof_strategy: direct
---

## Statement

Let a finite triangulated closed disk map to $\mathbb R^2$, affinely on every triangle. Its boundary is marked into three successive arcs. The first two map into the two nonnegative coordinate axes and meet at the origin. The third maps into $\{(s,t):\max(s,t)\geq h\}$ and has endpoints on the axes at coordinates at least $h$. For $h>0$ the image contains $(0,h)^2$. (For $h\leq0$ that open square is empty.) If both coordinate differences along each edge of every image triangle are at most $r\geq0$, the area of their union is at most $Nr^2$, where $N$ is the number of domain triangles. In particular, for $h>0$, $h^2\leq Nr^2$. Area here is ordinary finite polygonal area, with overlaps counted only once.

## Facts & Assumptions

**Given:** Fix the finite disk, its affine map, marked arcs, and numbers $h,r$.

[F1] The domain is a finite triangulated topological disk with three boundary arcs. ([[def-bounded-edge-coarse-triangular-filling]]).

[F2] Real arithmetic and order allow finite determinants and affine inequalities. ([[def-complete-ordered-field]]).

[F3] The real line has the least-upper-bound property, in particular the interval and limit properties used below. ([[cor-cauchy-reals-lub-complete]]).

## Proof

**Proof technique:** direct.

1.1 Orient the disk triangles consistently, so their internal edges have opposite orientations in the two incident triangles. Fix $z$ away from all image-edge supporting lines. Choose a ray from $z$ that contains no image vertex and is parallel to no image edge; only finitely many directions are forbidden. At each transverse intersection with an oriented edge give sign $+1$ when the edge crosses the ray from its right to its left, and $-1$ for the reverse. Reversing an edge reverses its contribution. For an oriented nondegenerate triangle, a ray beginning outside meets either no edges or two edges with opposite signs, since the intersection with the convex triangle is an interval. A ray beginning inside meets one edge, with sign fixed by the triangle orientation. A degenerate triangle contributes zero, because its collinear directed segments cancel. [F1, F2]

1.2 Suppose $z\in(0,h)^2$. Clamp each coordinate of each boundary point to $[0,h]$. Subdivide boundary segments wherever a coordinate is $0$ or $h$, and also where the third-arc segment changes between the halfplanes $s\geq h$ and $t\geq h$. This is a finite subdivision: along a segment each inequality describes an interval, and their union is the whole segment in the third arc. Each resulting third-arc segment and its clamped segment lie in the same closed halfplane, which misses $z$. Join its endpoints to their clamped endpoints and triangulate the resulting quadrilateral as two affine triangles; both lie in that convex halfplane. For the first two arcs these swept triangles lie on their axes and also miss $z$. [F2]

1.3 The area of a triangle with edge vectors $(a,b),(c,d)$ at a vertex is $|ad-bc|/2$. If all edge coordinate differences are at most $r$, then $|a|,|b|,|c|,|d|\leq r$ and its area is at most $(r^2+r^2)/2=r^2$. The formula gives zero for a degenerate triangle. [F2]

2.1 Sum these counts over all domain triangles, counting image triangles with their induced orientations, even when the affine map reverses orientation. Internal edges cancel exactly, leaving the count of the mapped boundary. Thus a nonzero boundary count forces $z$ to belong to at least one image triangle. We compute this boundary count without assuming injectivity of the boundary map. [step 1.1]

2.2 Apply the cancellation identity of step 1.1 to each swept quadrilateral. Its triangles miss $z$, so its boundary count is zero. On adding the identities the joining segments at consecutive boundary vertices cancel. Therefore the original boundary and the clamped boundary have equal counts. The first two clamped arcs run on the axes between the origin and $(h,0),(0,h)$, with possible reversals. The third runs on the two sides $s=h$ or $t=h$ of the square between those endpoints. Parameterize that L-shaped path by length along it. In this real interval any directed piecewise linear path between its endpoints has, at every interior regular parameter value, net signed crossings equal to one: each upward crossing changes the indicator of being above that value by $+1$, and each downward crossing by $-1$, so their sum telescopes to the final indicator minus the initial one. Hence reversals contribute zero net crossings. The same observation applies to the axis arcs. The clamped loop consequently has the crossing count of the square boundary, namely $+1$ or $-1$ according to orientation. [step 1.1, step 1.2]

2.3 Here is finite polygonal subadditivity in the needed form. Draw all the image-edge supporting lines inside a bounding rectangle, also drawing the rectangle edges. Successively cutting convex polygons by these finitely many lines produces finitely many convex cells with disjoint interiors. Each triangle and the union of the triangles consist of closures of some of those cells, together with zero-area edges. The determinant area of a convex polygon equals the sum of areas of its triangles obtained by joining an interior point to successive vertices: the signed determinant terms involving that point cancel. Cutting a convex polygon by a line preserves this sum, since the new common boundary segment occurs twice with opposite orientations in the determinant boundary sum. Thus each triangle area is the sum of the areas of its cells. Every cell in the union is counted at least once in the sum over triangles, proving that the union area is at most the sum of their areas. All cell areas are nonnegative by their convex orientations. [step 1.3, F2]

3.1 For a generic $z$ as in step 1.1 and a generic ray, step 2.1 and step 2.2 prove coverage. Every other $z\in(0,h)^2$ is a limit of such points: within any small open square about $z$ choose a horizontal coordinate avoiding the finitely many vertical supporting lines and then a vertical coordinate avoiding their finitely many remaining intersections. A closed triangle is closed, as an intersection of three closed affine halfplanes; a degenerate one is a closed segment or point. A finite union of these closed sets is closed. It therefore contains those limits and covers the entire open square. [step 2.1, step 2.2, F3]

4.1 For $0<a<h/2$, add the four supporting lines of $[a,h-a]^2$ to the subdivision in step 2.3. Coverage in step 3.1 implies that every interior cell of this square is in an image triangle. Therefore $(h-2a)^2\leq\sum_T\operatorname{area}(T)\leq Nr^2$. Let $a$ decrease to zero; the explicit expansion $h^2-4ha+4a^2$ tends to $h^2$, so $h^2\leq Nr^2$. This uses only real order limits and finite polygonal area, and completes the proof. [step 3.1, step 1.3, step 2.3, F3] ∎
