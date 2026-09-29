---
id: lem-a-finite-short-geodesic-network-gives-a-curvilinear-polygon-cellulation
kind: lemma
title: Finite short-geodesic polygon cellulation from curvilinear triangles
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - lem-a-compact-riemannian-surface-has-a-uniform-short-geodesic-radius
  - def-curvilinear-triangulation-of-a-compact-surface
  - thm-finite-curvilinear-triangulation-of-a-compact-riemannian-surface
  - def-axiom-of-choice
  - def-countable-choice
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf"
      locator: "Chapter 9, §The Gauss–Bonnet Theorem, printed pp. 167–172 (PDF pp. 183–188), Problem 9-5: outline of the finite convex cover, the short-geodesic net, and the subdivision of the resulting polygonal faces. The outline is not a complete construction."
    - title: "Jürgen Jost, Compact Riemann Surfaces: An Introduction to Contemporary Mathematics"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/jost.pdf"
      locator: "§2.3.A, Lemmas 2.3.A.1–2.3.A.3, Corollary 2.3.A.1 and Theorem 2.3.A.1, printed pp. 31–39 (PDF pp. 43–52): a uniform short-geodesic scale, a finite geodesic network with finitely many intersections, and the subdivision of its polygon faces for closed surfaces. The boundary, corner and convex-chart subordination of this item are supplied locally."
    - title: "Ved Datar, Lectures on Riemannian Geometry"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Theorem 18.0.1 and §18.2, printed pp. 133–138 (PDF pp. 141–146): existence and local minimality of short geodesics used through the referenced uniform-radius lemma."
---

## Statement

Assume the axiom of choice. Let $M$ be a compact smooth surface with smooth
boundary and a Riemannian metric extended to a neighbourhood in its smooth
double, or a compact regular oriented surface region with finitely many
ordinary corners in a supplied boundaryless ambient Riemannian surface.
Supply the finite strongly convex ambient coordinate cover and scale $r>0$ of
[[lem-a-compact-riemannian-surface-has-a-uniform-short-geodesic-radius]].
Then $M$ has a finite face-to-face polygonal closed-disk cellulation whose
nonboundary edges are embedded ambient minimizing geodesic segments of length
less than $r$, whose boundary edges are prescribed regular $C^2$ boundary arcs
or their subarcs, and whose every closed face lies compactly in a strongly convex ambient
coordinate disk $U$ contained in a member of the supplied cover and satisfying
$\int_U|K|\,\mu_g<\pi$. Every face has only ordinary corners. The
boundary arcs are retained rather than replaced by ambient geodesics.
For a cornered region this means explicit face, edge, and link data, not an
application of the smooth-boundary curvilinear-triangulation definition.

## Facts & Assumptions

**Given:** The compact region and supplied finite strongly convex cover and
uniform scale of the Statement.

[A1] Full AC is assumed because [F1] uses arbitrary-Jordan-curve graph
suppliers ([[def-axiom-of-choice]]); countable choice used by [F2] follows
from it ([[def-countable-choice]]).

[F1] There is a finite regular $C^2$ curvilinear triangulation for a smooth-boundary $M$, or finite triangular face, edge, and link data for a cornered $M$, preserving the boundary and subordinate to any supplied strongly convex ambient cover. Each face has ordinary corners and lies compactly inside its assigned cover member ([[thm-finite-curvilinear-triangulation-of-a-compact-riemannian-surface]]).

[F2] The supplied scale $r$ and strongly convex ambient cover give a unique short minimizing geodesic between sufficiently close points in each member ([[lem-a-compact-riemannian-surface-has-a-uniform-short-geodesic-radius]]).

[F3] The smooth-boundary curvilinear-triangulation definition gives regular $C^2$ embedded edges, triangular Jordan-disk faces, full-edge or vertex intersections, and circle or interval vertex links; the cornered analogue is explicitly asserted in [F1] ([[def-curvilinear-triangulation-of-a-compact-surface]]).

## Proof

**Proof technique:** finely subdivide the finite regular edge graph of [F1], replace each interior edge subarc by its short minimizing ambient geodesic chord, and use the quantitative $C^1$ approximation and positive vertex sectors to preserve its embedding and disk faces.

1.1 By compactness and bounded ambient curvature near $M$, refine the supplied finite strongly convex cover to finitely many small strongly convex normal coordinate disks $U_j$ covering $M$, each with closure in a supplied cover member and $\int_{U_j}|K|\,\mu_g<\pi$. Apply [F1] subordinate to this refined cover. For every closed face $P$, choose its assigned small disk $U(P)$ and its containing supplied cover member $V(P)$. Since there are finitely many faces and each $P$ is compact, each has a positive chart margin inside $U(P)$ and $V(P)$. The original finite graph has regular $C^2$ edges, finitely many vertices, and pairwise distinct incident tangent rays; every sector occupied by a face has a positive opening. At a smooth boundary vertex the two boundary germs delimit the inward half-plane, and each incident interior edge germ has a strict inward angle. At an ordinary corner the corresponding sector is the supplied wedge. These assertions follow from the face sector and link clauses of [F1]–[F3], including the strict sectors in [F1]'s construction. [A1, F1, F3, given]

2.1 For each regular interior edge choose a finite subdivision by arclength with mesh at most $h$. For $h$ small enough, every subarc and its two endpoints lie in a common strongly convex normal coordinate disk of the ambient metric, so [F2] gives its unique minimizing geodesic chord $c$. Subdivide further to make every chord length less than $r$; uniform continuity of the finitely many edges makes this a finite operation. Leave boundary edges fixed, except that their existing marked endpoints may be retained as subdivision points. [F1, F2, step 1.1, construct]

3.1 The approximation has explicit uniform bounds. Parametrize an original subarc $gamma:[0,h]\to N$ by arclength and its chord $c:[0,h]\to N$ proportionally to arclength. In one of finitely many normal-coordinate disks covering the original graph, the coordinate acceleration of $gamma$ is bounded by a fixed $A_0$, and $c$ satisfies $c''^k=-\Gamma^k_{ij}(c)c'^ic'^j$ with uniformly bounded Christoffel symbols and speed, hence $|c''|\le A_1$. The two curves have the same endpoints. Applying the one-dimensional endpoint Green-function estimate to $c-\gamma$ gives $\sup|c-\gamma|\le A h^2$ and $\sup|c'-\gamma'|\le A h$, with a common $A$ over the finite edge family after reducing $h$. These coordinate bounds are independent of the subdivisions and include the one-sided tangents at subarc endpoints. [F2, step 2.1, algebra]

4.1 Choose disjoint small ambient disks about the finitely many original vertices. By step 1.1, their incident edge germs occupy pairwise disjoint narrow cones and, at a boundary vertex, every interior germ cone lies strictly inside the inward half-plane or supplied corner wedge. Choose the disks small enough that each germ is a graph over its tangent ray there. Outside these vertex disks, disjoint original edges and the boundary have positive separation after deleting their common endpoint neighbourhoods; each original edge has a narrow embedded tubular strip in which its arclength projection is a coordinate. Reduce $h$ so the errors of step 3.1 are smaller than one quarter of every such separation, chart margin, and cone-angle margin. Then consecutive chords of one edge are graphs with strictly increasing arclength projection, chords on different edges cannot cross outside the vertex disks, and chords of distinct incident edges stay in their disjoint cones inside those disks. At a boundary vertex each interior chord initially points into the strict inward sector, and its $C^1$-close continuation cannot meet the fixed boundary arc in the vertex disk; away from boundary vertices the separation margin prevents boundary crossings. This directly covers a smooth boundary that oscillates under an unrelated straight line: each chosen chord is controlled relative to its own old interior edge. [step 1.1, step 3.1, construct]

5.1 The new finite graph is embedded in $M$ with the same incidence and cyclic order as the old one. In each edge strip, the old and new arcs are graphs over the same longitudinal coordinate; interpolation of their transverse graph functions, multiplied by a cutoff that vanishes at the strip boundary, gives an ambient isotopy of that strip. In each vertex disk the disjoint ordered germs admit the analogous radial interpolation inside their strict cones, fixed near the disk boundary; on a boundary disk keep the boundary germs fixed. These finitely many local isotopies agree as the identity off their disjoint supports and extend to a homeomorphism of $M$ carrying the old graph to the new graph. Therefore the complements still have finitely many closed polygonal Jordan-disk faces, the same circle/interval links and full-cell intersections, and ordinary positive face sectors. A former face $P$ and its new image remain in $U(P)\subset V(P)$ by the chart margins chosen in step 1.1. [step 1.1, step 4.1, construct]

6.1 Split each original triangular face boundary at the inserted edge vertices. Its image under the homeomorphism of step 5.1 is a polygonal disk: each interior side is a finite chain of short ambient minimizing geodesic chords and each boundary side is a prescribed regular $C^2$ arc or subarc. The family remains face-to-face, with each shared old edge given the same subdivision and chords from both incident faces. Its finitely many vertices, edges and faces supply the claimed cellulation. In the empty case use the empty cellulation. Full AC is used only through [F1]; the subdivisions, uniform estimates and isotopies are finite. [A1, F1, step 2.1, step 5.1] ∎

## Source locator

Lee, *Riemannian Manifolds*, Chapter 9, Problem 9-5, printed pp. 171–172 (PDF pp. 187–188), outlines short-geodesic polygon decompositions. Jost, *Compact Riemann Surfaces*, §2.3.A, Theorem 2.3.A.1, printed pp. 37–39 (PDF pp. 50–52), constructs a short-geodesic network for closed metric surfaces. Neither source proves this boundary-compatible cellulation. Here it follows from the boundary-compatible curvilinear triangulation [[thm-finite-curvilinear-triangulation-of-a-compact-riemannian-surface]] by the explicit $C^1$ chord estimates and graph isotopy in steps 3.1–5.1. The separate geodesic *triangulation* of the resulting polygonal cells is not asserted here.
