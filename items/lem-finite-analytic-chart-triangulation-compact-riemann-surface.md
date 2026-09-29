---
id: lem-finite-analytic-chart-triangulation-compact-riemann-surface
kind: lemma
title: Finite chartwise triangulation of a compact Riemann surface
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-riemann-surface-and-holomorphic-atlas
  - def-topological-manifold-without-boundary
  - thm-heine-borel-rn
  - cor-jacobian-determinant-of-a-holomorphic-map
  - cor-injective-holomorphic-derivative-nonzero
  - cor-holomorphic-functions-are-real-analytic-and-smooth
  - lem-planar-piecewise-analytic-region-triangulation
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: construct
sources:
  references:
    - title: "Jürgen Jost, Compact Riemann Surfaces: An Introduction to Contemporary Mathematics"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/jost.pdf"
      locator: "§2.3.A, Theorem 2.3.A.1, printed pp. 37–39 (PDF pp. 49–51): a compact surface is triangulated along finitely many arcs in general position; the argument keeps the triangulation inside coordinate charts after the fact. This item instead chooses the cover discs generically and uses the planar slab lemma face by face."
    - title: "Curtis T. McMullen, Riemann Surfaces, Math 213b course notes (2026)"
      url: "https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf"
      locator: "Ch. 2, the complex structure as an orientation, and Ch. 3, local normal forms; used as a cross-check that holomorphic transitions preserve orientation and that triangulations of compact surfaces are finite."
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Let $X$ be a compact Riemann surface in the sense of
[[def-riemann-surface-and-holomorphic-atlas]], and let $F\subseteq X$ be finite.
An **oriented chart cellulation** of $X$ subordinate to $F$ consists of
finitely many closed topological triangles $D_1,\dots,D_m$ covering $X$,
with disjoint interiors. Each lies in one holomorphic chart and its chart
image is, up to an orientation-preserving similarity, a graph-bounded
curvilinear triangle as in
[[lem-planar-piecewise-analytic-region-triangulation]]. Its boundary arcs are
piecewise Puiseux-analytic and rectifiable. The boundary arcs admit a finite
common subdivision into **subedges** such that each subedge belongs to exactly
two cells and their induced boundary orientations on it are opposite. Every
point of $F$ lies in the interior of one cell.

**Lemma.** For every compact Riemann surface $X$ and finite $F\subseteq X$
there is an oriented chart cellulation subordinate to $F$. It has a finite
face-to-face topological triangulation refining its cells, with each refined
triangle still contained in one chart and every point of $F$ in a refined
face interior. The refined edges are only asserted to be topological arcs;
the Puiseux and graph-bounded conclusions concern the original cells. No
choice axiom is used.

## Facts & Assumptions

**Given:** A compact Riemann surface $X$ with holomorphic atlas, and a finite set $F\subseteq X$.

[F1] A Riemann surface is a nonempty connected Hausdorff second-countable topological $2$-manifold without boundary together with a holomorphic atlas; charts are homeomorphisms onto open subsets of $\mathbb C$ and transitions in both directions are holomorphic ([[def-riemann-surface-and-holomorphic-atlas]]).

[F2] A topological $n$-manifold without boundary is locally homeomorphic to $\mathbb R^n$, hence locally path connected and locally compact ([[def-topological-manifold-without-boundary]]).

[F3] In $\mathbb C=\mathbb R^2$ a subset is compact exactly when it is closed and bounded ([[thm-heine-borel-rn]]).

[F4] The Jacobian determinant of a holomorphic function is $|f'(z)|^2\ge0$ at every point, and is positive exactly where $f'(z)\ne0$ ([[cor-jacobian-determinant-of-a-holomorphic-map]]). An injective holomorphic map on a plane domain has nonzero derivative everywhere ([[cor-injective-holomorphic-derivative-nonzero]]); chart transitions have this property.

[F5] Holomorphic functions on open subsets of $\mathbb C$ are real analytic and smooth ([[cor-holomorphic-functions-are-real-analytic-and-smooth]]).

[F6] Let $R\subseteq\mathbb C$ be compact and the closure of a bounded connected open set whose boundary is a finite disjoint union of piecewise real-analytic simple closed curves, and let $P\subseteq\operatorname{int}R$ be finite. Then $R$ is a finite union of curvilinear triangles with piecewise Puiseux-analytic rectifiable edges that are pairwise interior-disjoint and meet only in full edges or common vertices, with no point of $P$ on an edge; the construction is choice free ([[lem-planar-piecewise-analytic-region-triangulation]]).



## Proof

**Proof technique:** take a finite cover by round coordinate discs, choose their radii generically so that the boundary circles form a finite embedded graph in general position avoiding the given finite set, show that each face has constant disc membership and closure inside one chart, apply the planar slab triangulation lemma in that chart, take a common finite subdivision of the rectifiable cell boundaries, and cone separately to a face-to-face topological refinement. The complex atlas supplies the orientation.

1.1 (A finite cover by round coordinate discs.) Consider all triples $(\varphi:U\to\mathbb C,p,R)$ in which $\varphi$ is a chart, $R>1$, and $\overline{D(p,R)}\subseteq\varphi(U)$; include with each triple its open disc $V^0=\varphi^{-1}(D(p,1))$. These discs cover $X$: for each $x\in X$, an individual chart around $x$ can be translated and scaled so that $\varphi(x)=0$ and $\overline{D(0,2)}\subseteq\varphi(U)$. Compactness supplies finitely many of the indexed triples whose discs cover $X$, without selecting a chart simultaneously at every point. Write their charts as $\varphi_i:U_i\to\mathbb C$, centres as $p_i$, and outer radii as $R_i>\rho_i=1$. Then $X=V_1^0\cup\cdots\cup V_N^0$, and $\overline{D(p_i,r)}\subseteq\varphi_i(U_i)$ for every $r<R_i$. [F1, F2, given]

2.1 (Exceptional radii are finite.) For each $i$ fix once and for all $R_i'$ with $\rho_i<R_i'<R_i$; it suffices to choose $r_i$ in the smaller interval $I_i=(\rho_i,R_i')$, because $r_i>\rho_i$ will preserve the cover. Suppose $r_1,\dots,r_{i-1}$ have been fixed and write $\gamma_j=\varphi_j^{-1}(\partial D(p_j,r_j))$. The closed chart annulus $K_i=\varphi_i^{-1}(\{z:\rho_i\le|z-p_i|\le R_i'\})$ is compact and lies in $U_i$. On a neighbourhood of $\gamma_j\cap K_i$ the function $h_i(x)=|\varphi_i(x)-p_i|^2$ is real analytic along the real-analytic circle $\gamma_j$ [F5]. A radius $r\in I_i$ gives a nontransverse meeting of $\gamma_i(r)$ with $\gamma_j$ precisely at a critical point of this restricted function with value $r^2$. Its derivative along $\gamma_j$ is analytic. By the isolated-zero alternative, finitely many compact analytic neighbourhoods covering $\gamma_j\cap K_i$ contain only finitely many isolated critical points, except where that derivative vanishes identically on an arc; on any such arc $h_i$ is constant, yielding only one critical radius. Thus each earlier circle contributes finitely many tangency radii. A common arc of $\gamma_i(r)$ and $\gamma_j$ also has constant $h_i=r^2$ and is included in these exceptional radii. The additional forbidden radii are $|\varphi_i(z)-p_i|$ for $z$ in the finite set $F\cap K_i$ or in the finite set of intersections of pairs of earlier circles lying in $K_i$; the latter is finite by the induction hypothesis that the earlier circles meet transversally and share no arc. Their union with the tangency radii is a finite set $B_i\subset I_i$. Notice that the distance values of *all* points of an earlier circle need not be finite; only these critical and prescribed-point values are excluded. [F3, F5, step 1.1]

3.1 (Choice of radii.) Choose $r_1\in I_1\setminus B_1$ and then, inductively for $i=2,\dots,N$, a radius $r_i\in I_i\setminus B_i$ where $B_i$ is the finite exceptional set of step 2.1 for the already chosen radii. Set $V_i=\varphi_i^{-1}(D(p_i,r_i))$ and $\gamma_i=\partial V_i$. Since $r_i>\rho_i$, the $V_i$ still cover $X$. The construction is a finite induction with finitely many choices at each stage, and by the choice of the radii: the circles $\gamma_i$ are pairwise transverse, no three of them meet, no two share an arc, and no circle contains a point of $F$. Put $\Gamma=\gamma_1\cup\cdots\cup\gamma_N$. [step 2.1, given, choose]

4.1 ($\Gamma$ is a finite embedded graph.) Two transverse circles meet in finitely many points: otherwise the intersection points would accumulate on the compact circle $\gamma_i$, and in a chart of a limit point the two real-analytic curves would agree on a nondegenerate arc, contradicting step 3.1. With finitely many circles and pairs, $\Gamma$ has finitely many vertices, where a vertex is a point at which two circles meet. On each circle insert three additional distinct vertices away from all crossing points and from $F$; this is a finite selection from nonempty open arcs. Cutting each circle at its crossings and these auxiliary vertices produces finitely many embedded closed arcs with distinct endpoints; the arcs meet only at common endpoints, so $\Gamma$ is a finite embedded graph. An auxiliary vertex has degree two and lies on one circle only. The complement $X\setminus\Gamma$ is open, and its connected components are the faces. [step 3.1]

5.1 (Faces have constant disc membership and lie in one chart.) Let $O$ be a face. For each $i$ the value of ``$O$ meets $V_i$'' is constant: if $O$ met $V_i$ and met $X\setminus V_i$, then by connectedness of $O$ and [F2] there would be a path in $O$ from a point of $V_i$ to a point outside $V_i$, and it would cross the boundary $\partial V_i=\gamma_i\subseteq\Gamma$, contradicting $O\subseteq X\setminus\Gamma$. Since $V_1,\dots,V_N$ cover $X$ and $O$ is nonempty, there is an index $i$ with $O\subseteq V_i$; then the closure satisfies $\overline O\subseteq\overline{V_i}\subseteq U_i$, because $\overline{V_i}$ is compact and contained in the chart domain $U_i$, and every limit point of $O$ lies in $\overline{V_i}$. In particular $\varphi_i(\overline O)$ is compact and bounded, and $\varphi_i(O)$ is a bounded connected open subset of $\mathbb C$ whose closure is $\varphi_i(\overline O)$. [F2, F3, step 3.1, step 4.1]

6.1 (Face boundaries are piecewise real-analytic simple closed curves.) Assign to each $x\in X\setminus\Gamma$ the sign vector $(\mathbf 1_{x\in V_1},\dots,\mathbf 1_{x\in V_N})$, which is locally constant and hence constant on each face. At a crossing vertex exactly two circles meet, by step 3.1, and the four local sectors have four different sign vectors, because the two coordinates belonging to the crossing circles differ; hence four different faces meet there, and a single face occupies exactly one sector. At an auxiliary degree-two vertex one circle divides a small disk into two sectors with different sign vectors, so again a face occupies at most one sector. Walking around a face along the edges of $\Gamma$ therefore visits every vertex at most once. Each edge separates local points with different signs in the coordinate of its circle, so its two sides belong to different faces and each edge is traversed once by the boundary walk of each of the two faces it borders. Consequently the boundary of a face is a disjoint union of finitely many simple closed curves in $\Gamma$, one for each boundary walk, and each such curve is a finite union of edges that meet only at their endpoints. Each edge lies in some circle $\gamma_j$; in the chart of a face containing it, its image is the image of a round circle arc under the transition $\varphi_i\circ\varphi_j^{-1}$, a holomorphic and hence real-analytic map [F5], so the edge is a real-analytic arc. Thus the boundary of each face is a finite disjoint union of piecewise real-analytic simple closed curves in the sense of [F6]. [F5, step 3.1, step 4.1, step 5.1]

7.1 (The planar lemma applies to the closure of every face.) Let $O$ be a face and let $i$ be an index with $O\subseteq V_i$, so that $\overline O\subseteq U_i$ by step 5.1. In the chart $\varphi_i$ the set $R=\varphi_i(\overline O)$ is compact and is the closure of the bounded connected open set $\varphi_i(O)$; its boundary is the image of the boundary of $O$, hence by step 6.1 a finite disjoint union of piecewise real-analytic simple closed curves. The set $P=\varphi_i(F\cap O)$ is finite and lies in $\operatorname{int}R=\varphi_i(O)$, because no point of $F$ lies on $\Gamma$, hence none lies on the boundary of $O$. The planar lemma [F6] applied in $\mathbb C$ to $R$ and $P$ gives finitely many curvilinear triangles with piecewise Puiseux-analytic rectifiable edges covering $R$, pairwise interior-disjoint, meeting only in full edges or vertices, with no point of $P$ on an edge. Transporting them back by $\varphi_i^{-1}$ gives finitely many closed topological triangles in $X$, all contained in the single chart $U_i$, whose edges are piecewise Puiseux-analytic and rectifiable in that chart, covering $\overline O$, meeting only in full edges or common vertices, and with no point of $F\cap O$ on an edge. [step 5.1, step 6.1, F6, given]

8.1 (Orientation and a common boundary subdivision.) For charts $\varphi_i,\varphi_j$ the transition $\varphi_j\circ\varphi_i^{-1}$ is holomorphic and has nonzero derivative at every point, so its real Jacobian determinant is $\left|(\varphi_j\circ\varphi_i^{-1})'\right|^2>0$ by [F4]. The chart-induced orientations agree on overlaps. Each cell of step 7.1 inherits this orientation. The cells within one face meet face to face by [F6]; cells from distinct faces meet along arcs of $\Gamma$ or its vertices. Collect all cell-boundary vertices on every edge of $\Gamma$, including those supplied by the two adjacent faces, and split that graph edge at their union. This is a finite subdivision. On each resulting open subedge the two adjacent cells are constant: within each face its planar triangles meet face to face, so a boundary point away from their finite vertices belongs to exactly one cell on that side. The two cells lie on opposite sides of the common arc in an orientation-preserving chart, and therefore induce opposite boundary orientations. Interior edges of the planar subdivisions already have the same property. Subdividing them at any additional boundary vertices yields a finite common subedge system. [F4, F6, step 4.1, step 6.1, step 7.1]

9.1 (The rectifiable cells.) A finite embedded graph on a compact surface has finitely many complementary components: insert its finitely many vertices and edges successively; each new open arc can split at most one component. Thus $\Gamma$ has finitely many faces, each contributing finitely many cells by step 7.1. Their interiors are disjoint and their union is $X$. Every point of $F$ lies in exactly one face and, by step 7.1, in one cell interior. The common boundary subdivision of step 8.1 proves the oriented chart cellulation assertion, without claiming that independently chosen cells on opposite sides of $\Gamma$ already share full sides. [step 4.1, step 5.1, step 7.1, step 8.1]

10.1 (A face-to-face topological refinement.) Regard each cell $D$ as a closed topological triangle, and list in cyclic order the finitely many vertices of the common subedge system on $\partial D$. Choose a homeomorphism $H$ from a standard Euclidean closed triangle onto $D$ carrying its three corners to the three original cell corners. The inverse images of the boundary vertices give finitely many marked points on the Euclidean triangle boundary. Choose an interior point $q$ outside the finite union of lines through one boundary mark and one point of $H^{-1}(F\cap D)$, and outside $H^{-1}(F\cap D)$ itself. Cone $q$ to every boundary mark. The Euclidean triangle splits into finitely many closed triangles, one for each consecutive pair of boundary marks; transporting them by $H$ gives closed topological triangles inside the same chart as $D$. The choice of $q$ ensures that no point of $F$ lies on a new spoke. Each new triangle meets the boundary of $D$ in exactly one full common subedge. Within $D$ the fan triangles meet in full spokes or at vertices; across two original cells their refined triangles meet in the full shared subedge or a common vertex by step 8.1. Hence the assembled finite refinement is face to face, chart-contained and avoids $F$ on its edges. Its inherited orientations agree across the surface. The finitely many choices in the construction require no choice axiom; no regularity of the new spokes is asserted. [step 7.1, step 8.1, step 9.1] ∎

## Source locator

Jost, *Compact Riemann Surfaces*, §2.3.A, Theorem 2.3.A.1, printed pp. 37–39
(PDF pp. 49–51), proves triangulability of a compact metric surface by choosing
a finite geodesic net in general position and subdividing the resulting
polygonal faces. The present lemma supplies two compatible outputs: rectifiable
chart cells for the residue theorem and a topological face-to-face refinement
for the Riemann–Hurwitz formula. It replaces the geodesic net with generically
chosen boundary circles of round coordinate discs and obtains the cells from
the planar slab lemma [[lem-planar-piecewise-analytic-region-triangulation]].
