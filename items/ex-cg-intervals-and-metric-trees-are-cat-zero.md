---
id: ex-cg-intervals-and-metric-trees-are-cat-zero
kind: example
title: "Intervals and metric trees are CAT(0)"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 10
deps: [def-cg-cat-zero-cat-one-and-local-geodesic, lem-cg-comparison-convexity-and-model-spaces, def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric, thm-cg-polyhedral-chain-metric-topology-and-properness, def-cycles-trees-and-forests-in-a-simple-graph, thm-a-simple-graph-is-a-tree-exactly-when-every-two-vertices-are-joined-by-a-unique-path, def-geodesic-and-geodesic-metric-space, def-interval, def-metric-space, lem-real-line-is-a-metric-space, def-metric-continuity]
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: "2026-10-08"
  precheck: pass
sources:
  references:
    - title: "Martin R. Bridson and André Haefliger, Metric Spaces of Non-Positive Curvature (Springer Grundlehren 319, 1999; author-hosted PDF)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bridsonhaefligerx.pdf"
      locator: "I.1.9, printed pp. 8–9 (metric graphs and trees); II.1.7 and II.1.9, printed pp. 159–163 (the hinged and midpoint forms of the CAT(0) inequality); I.7.6, printed p. 100 (the chain metric of a metric simplicial complex)"
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, 2007-2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Appendix I.2, printed p. 504 (Lemma I.2.15, the CAT(0) inequality as a quadratic inequality)"
---

## Example

**(i) Intervals.** Every interval $I\subseteq\mathbb R$ ([[def-interval]]) with the subspace metric of [[lem-real-line-is-a-metric-space]] is CAT(0): each pair of points is joined by the unique interval between them, every geodesic triangle is degenerate, and a degenerate geodesic triangle is congruent to its Euclidean comparison triangle, so the CAT(0) inequality holds with equality ([[def-cg-cat-zero-cat-one-and-local-geodesic]]).

**(ii) Metric trees.** Let $\Gamma$ be a finite tree with at least one edge ([[def-cycles-trees-and-forests-in-a-simple-graph]]) and let $\ell_e>0$ be edge lengths. Realize each edge by the interval $[0,\ell_e]$ and glue the intervals at their endpoints according to the incidence of $\Gamma$, with the chain metric of [[def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric]]; write $X_\Gamma$ for the resulting space, which is a compact, complete, geodesic length space by [[thm-cg-polyhedral-chain-metric-topology-and-properness]] and the explicit path argument below. Then:

(a) every two points of $X_\Gamma$ are joined by exactly one geodesic segment; for three points $x,y,z$ the three pairwise geodesics have exactly one common point $o$ (the median), the three sides are $[x,y]=[x,o]\cup[o,y]$, $[y,z]=[y,o]\cup[o,z]$, $[z,x]=[z,o]\cup[o,x]$, and every point of the triangle lies on at least two of the sides;

(b) every geodesic triangle in $X_\Gamma$ satisfies the CAT(0) inequality, so $X_\Gamma$ is CAT(0).

The Bruhat–Tits midpoint inequality $2d(q,p)^2+2d(r,p)^2\ge4d(m,p)^2+d(q,r)^2$ is a consequence of (b) at $t=1/2$ ([[lem-cg-comparison-convexity-and-model-spaces]] clause (iv)(d)).

## Facts & Assumptions

**Given:** A finite tree $\Gamma$ with at least one edge and edge lengths $\ell_e>0$, its realization $X_\Gamma$ as the isometric polyhedral gluing of the intervals $[0,\ell_e]$ along the incidence of $\Gamma$, with the chain metric $d$; in (i) an interval $I\subseteq\mathbb R$.

[F1] An interval $I\subseteq\mathbb R$ with the subspace metric of the usual metric of $\mathbb R$ is a metric space, its geodesic segments are its subintervals, and it is isometric to a subset of $\mathbb R$ ([[def-interval]], [[lem-real-line-is-a-metric-space]], [[def-geodesic-and-geodesic-metric-space]], [[def-metric-space]]).

[F2] The gluing $X_\Gamma$ is an isometric polyhedral gluing with cells the edges and vertices of $\Gamma$, satisfies (H1)–(H3) of [[def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric]] (finite connected shape poset, local finiteness, finitely many shapes); the distance formulas on edges and reduced paths are established below ([[def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric]], [[thm-a-simple-graph-is-a-tree-exactly-when-every-two-vertices-are-joined-by-a-unique-path]]).

[F3] Under (H1)–(H3) the chain metric is a metric inducing the weak topology, and the space is compact when it has finitely many cells, complete and proper ([[thm-cg-polyhedral-chain-metric-topology-and-properness]]); geodesics are constructed below without a choice assumption.

[F4] Hinged criterion: a geodesic space is CAT(0) if and only if for every geodesic triangle and every pair (vertex, point of the opposite side) the comparison inequality holds; equivalently, if for every geodesic triangle with vertices $z,x,y$ and every $t\in[0,1]$ the point $p_t$ on $[x,y]$ at distance $t\,d(x,y)$ from $x$ satisfies $d(z,p_t)^2\le(1-t)d(z,x)^2+t\,d(z,y)^2-t(1-t)d(x,y)^2$; and the Bruhat–Tits midpoint inequality is the case $t=1/2$ ([[lem-cg-comparison-convexity-and-model-spaces]] clauses (iv)(c) and (iv)(d)).

[F5] If all three chosen sides of a geodesic triangle are subsegments of one geodesic, the triangle is congruent to its Euclidean comparison triangle: an isometric parametrization of that geodesic places all side occurrences on a Euclidean line with their prescribed distances, and comparison uniqueness identifies this configuration with the comparison triangle. This applies to collinear vertices in a uniquely geodesic space; collinearity alone does not constrain the chosen sides in a general geodesic space ([[def-cg-cat-zero-cat-one-and-local-geodesic]], [[lem-cg-comparison-convexity-and-model-spaces]] clause (i)).

## Proof

1.1 (i). Every interval $I$ is a convex subset of $\mathbb R$; for $x<y$ in $I$ the interval $[x,y]\subseteq I$ with its usual parametrization is a geodesic segment from $x$ to $y$ by [F1], and it is the only one, since a distance-preserving map into $\mathbb R$ from an interval is determined by its values at the endpoints and is monotone. A geodesic triangle with vertices in $I$ has its three vertices in a common interval and the sum of two of its side lengths equal to the third, so it is degenerate and by [F5] it is congruent to its Euclidean comparison triangle; hence the CAT(0) inequality holds with equality. [F1, F5, given]

1.2 Reduced paths compute the metric. Subdivide edges at the finitely many points under discussion. Subdivision preserves connectedness and cannot create a cycle: a cycle in the subdivided graph would traverse each inserted degree-two vertex straight through and collapse to a cycle in $\Gamma$. Thus the subdivided graph is still a finite tree, and any two of its vertices $x,y$ have a unique edge path $P$. Traverse $P$ at unit speed, with length $D$ equal to the sum of its edge lengths. Define $f:X_\Gamma\to[0,D]$ to be distance along $P$ on $P$, and constant on each branch attached to $P$. Each component off $P$ attaches at exactly one vertex; two attachment vertices would create a second path between them and hence a cycle. Consequently $f$ is well defined, continuous, and $1$-Lipschitz on every edge. For any chain, summing edgewise inequalities gives $|f(x)-f(y)|=D\le\ell(\text{chain})$. The path $P$ gives the reverse bound, so $d(x,y)=D$. Taking $x,y$ on a single edge also proves that edge's metric is its interval metric. [F1, F2, algebra, construct]

2.1 Geodesics and uniqueness. Apply step 1.2 after subdividing at any two points $x,y$. Unit-speed traversal of their reduced path is distance preserving on every subinterval, again by the reduced-path formula, so is a geodesic. If $w$ lies off that path, its unique attachment point $v$ satisfies $d(x,w)+d(w,y)=d(x,y)+2d(v,w)>d(x,y)$. Every point of any minimizing segment must instead satisfy equality in this sum. Thus the segment lies on the reduced path, where its distance from $x$ fixes its position, proving uniqueness. The geodesic is a path of length $d(x,y)$, so the space is a length space. Its finite union of compact interval cells is compact: each cell inclusion is $1$-Lipschitz for the chain metric, so the preimages of any open cover have finite subcovers; taking their finite union covers the entire finite gluing. Completeness is [F3]. [step 1.2, F1, F2, F3, construct]

3.1 The median. Subdivide at $x,y,z$. The paths from $x$ to $y$ and from $x$ to $z$ have a common initial path: if they separated and later met, their two portions between the first separation and reunion would contradict unique paths in the tree. Let $o$ be the last vertex of that common initial path. The remaining paths from $o$ to $y$ and from $o$ to $z$ have no vertex in common except $o$, so their concatenation is the unique path from $y$ to $z$. Hence the triple intersection of the three paths is exactly $\{o\}$, including the cases of repeated points, and each side is the union of the corresponding two arms. Every point of an arm lies on its two incident sides. [step 1.2, step 2.1, F2, construct]

4.1 (ii)(b). Fix a geodesic triangle with vertices $x,y,z$, let $o$ be its median from step 3.1 and put $L:=d(y,z)>0$ if $y\ne z$ (if two vertices coincide, uniqueness from step 2.1 makes the two nonconstant sides coincide, so [F5] applies). Parametrize the geodesic $[y,z]$ by $\gamma:[0,1]\to X_\Gamma$ with $\gamma(t_o)=o$, so that $d(x,\gamma(t))=h+L|t-t_o|$ with $h:=d(x,o)$, $d(x,y)=h+Lt_o$ and $d(x,z)=h+L(1-t_o)$. Substituting into the squared right-hand side of [F4], the difference
$$(1-t)d(x,y)^2+t\,d(x,z)^2-t(1-t)L^2-d(x,\gamma(t))^2$$
equals $4hLt(1-t_o)\ge0$ for $t\le t_o$ and $4hL(1-t)t_o\ge0$ for $t\ge t_o$; this is a direct expansion, and the two cases are interchanged by $t\leftrightarrow1-t$, $y\leftrightarrow z$. By [F4] the hinged inequality at the vertex $x$ holds; the same computation with $x$ replaced by $y$ and by $z$, using the median description of step 3.1, gives the hinged inequality at the other two vertices. [step 2.1, step 3.1, F4, F5, algebra]

5.1 (ii)(b), conclusion. Every geodesic triangle in $X_\Gamma$ has all three hinged inequalities at its vertices, and by [F4] (the vertex-opposite-side criterion) it satisfies the CAT(0) inequality for all pairs of its points; hence $X_\Gamma$ is CAT(0), and the Bruhat–Tits inequality is its case $t=1/2$. [step 4.1, F4] ∎
