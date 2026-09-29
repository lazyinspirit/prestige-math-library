---
id: thm-finite-geodesic-triangulation-of-a-compact-riemannian-surface
kind: theorem
title: Finite geodesic triangulation of a compact Riemannian surface
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - lem-a-finite-short-geodesic-network-gives-a-curvilinear-polygon-cellulation
  - lem-a-compact-riemannian-surface-has-a-uniform-short-geodesic-radius
  - def-geodesic-triangulation
  - def-curvilinear-triangulation-of-a-compact-surface
  - def-oriented-riemannian-surface-and-positive-quarter-turn
  - def-axiom-of-choice
  - def-countable-choice
justified_by: []
landmark: true
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf"
      locator: "Chapter 9, The Gauss-Bonnet Theorem, printed pp. 156-172 (PDF pp. 173-188); Theorem 9.1, Lemma 9.2, Theorem 9.3, Theorem 9.7 and Problem 9-5."
    - title: "Jurgen Jost, Compact Riemann Surfaces: An Introduction to Contemporary Mathematics"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/jost.pdf"
      locator: "Section 2.3.A, Theorem 2.3.A.1, printed pp. 37-39 (PDF pp. 50-52), proves the closed-surface case, not the prescribed-boundary construction."
    - title: "Emil Saucan, A Note on a Theorem of Munkres (2004), arXiv:math/0403055v2"
      url: "https://arxiv.org/pdf/math/0403055"
      locator: "Theorem 2.9 (PDF p. 4) quotes the C^r boundary-triangulation extension; Corollary 5.1 (PDF p. 14) states its fat version, and the collar proof (PDF pp. 5-6) keeps the boundary subcomplex and uses C^r embeddings. The geodesic and corner steps are local here."
    - title: "James R. Munkres, Elementary Differential Topology, revised edition (1966)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/munkresdiff.pdf"
      locator: "Section 8, Definitions 8.1–8.3, printed pp. 79–81 (PDF pp. 84–86), defines a C^r map on a complex simplexwise, its differential at each simplex point, and a C^r triangulation as an immersion homeomorphism onto the manifold; Theorem 10.6, printed pp. 103–104 (PDF pp. 108–109), extends any C^r boundary triangulation to the manifold while retaining the boundary subcomplex."
---

## Statement

Assume the axiom of choice. Let $M$ be either a compact smooth surface with
smooth boundary carrying a Riemannian metric $g$, together with the
metric-extension open neighbourhood of $M$ in its smooth double, or a compact
regular oriented surface region with finitely many ordinary corners inside a
supplied boundaryless ambient Riemannian surface. In the smooth-boundary
case, $M$ carries a finite face-to-face curvilinear triangulation
$\mathcal T=(V,E,F,\phi)$ in the sense of
[[def-curvilinear-triangulation-of-a-compact-surface]] that is a geodesic
triangulation in the sense of [[def-geodesic-triangulation]]. In the cornered
case, it carries analogous explicit finite triangular closed-disk face, edge,
and circle/interval link data, with ordinary face sectors and every prescribed
corner retained as a vertex; the smooth-boundary definitions are not applied
to that region. In either case:

(i) every edge not contained in $\partial M$ is a regular $C^2$ embedding whose
interior is an affinely parametrized geodesic segment of the interior metric;

(ii) every edge contained in $\partial M$ is a prescribed regular $C^2$
boundary arc or a subarc of one;

(iii) every closed face lies in a strongly convex coordinate chart of the
ambient surface carrying a smooth positive orthonormal frame.

Full AC is inherited from the network supplier and its arbitrary-Jordan-curve inputs; the uniform-radius supplier needs only its countable-choice consequence.

## Facts & Assumptions

**Given:** The compact metric-extended smooth-boundary surface or the regular cornered region of the Statement, and full AC.

[A1] Full AC is assumed through [F1]'s network supplier and its Jordan inputs; the uniform-radius supplier needs only its countable-choice consequence ([[def-axiom-of-choice]], [[def-countable-choice]]).

[F1] The supplied boundary is a finite union of prescribed regular $C^2$ arcs, and there is a finite strongly convex ambient normal-coordinate cover with a common short minimizing-geodesic scale ([[lem-a-finite-short-geodesic-network-gives-a-curvilinear-polygon-cellulation]], [[lem-a-compact-riemannian-surface-has-a-uniform-short-geodesic-radius]]).

[F2] A geodesic triangulation retains prescribed boundary arcs and makes every other edge an affinely parametrized interior geodesic. Its underlying curvilinear triangulation has triangular Jordan-disk faces, full-cell intersections, ordinary sectors and the specified vertex links ([[def-geodesic-triangulation]], [[def-curvilinear-triangulation-of-a-compact-surface]]).

[A2] Munkres, *Elementary Differential Topology*, §8, Definitions 8.1–8.3, printed pp. 79–81 (PDF pp. 84–86), defines a $C^r$ map of a complex simplexwise and a $C^r$ triangulation as an immersion homeomorphism onto the manifold; the differential and its injectivity are required at every point of each closed simplex, including vertices. Its Theorem 10.6, printed pp. 103–104 (PDF pp. 108–109), extends any prescribed $C^r$ boundary triangulation to one of the manifold, retaining the boundary as a subcomplex. Saucan, *A Note on a Theorem of Munkres*, Theorem 2.9 (PDF p. 4), quotes this extension; Corollary 5.1 (PDF p. 14) gives a fat version. We use only Munkres' relative $C^2$ simplex interface; physical shape bounds and geodesic edges are established below.

[A3] Jost, *Compact Riemann Surfaces*, §2.3.A, Theorem 2.3.A.1, printed pp. 37–39, proves closed-surface triangulation. It does not assert the relative boundary and corner construction below.



## Proof

**Proof technique:** use a boundary-relative $C^2$ triangulation; smooth original corners temporarily, replace a small star of each by controlled geodesic caps, refine the remaining finite $C^2$ triangles conformingly, and straighten only their interior edges by short minimizing chords.

1.1 If $M$ is empty, take the empty complex and stop; assume it is nonempty below. Mark every prescribed boundary corner and arc endpoint, putting three marks on a closed boundary component with none. The finite regular arcs of [F1] between these marks form a $C^2$ boundary triangulation. In dimension one all its nondegenerate edges are fat. In the smooth-boundary case [A2] extends it to a locally finite $C^2$ triangulation, which is finite by compactness: finitely many neighbourhoods, each meeting only finitely many simplices, cover the surface. The source's $C^r$ embedding interface supplies nonsingular $C^2$ maps on the closed reference simplices and keeps the chosen boundary subcomplex. [A2, F1, given]

1.2 For a corner $p$, choose ambient normal polar coordinates. Its two regular $C^2$ boundary germs are angular graphs $\alpha_-(r),\alpha_+(r)$ with opening $\theta_p\in(0,2\pi)$, and $\alpha_\pm(r)=\alpha_\pm(0)+c_\pm r+o(r)$, $\alpha_\pm'(r)=c_\pm+o(1)$, $r\alpha_\pm''(r)\to0$. In a small disk straighten the wedge to a half-disk by a bilipschitz angular homeomorphism, equal to the identity near the disk rim. Near $p$ its inverse is
$$
(r,\beta)\longmapsto\bigl(r,\alpha_-(r)+\tfrac{\beta}{\pi}(\alpha_+(r)-\alpha_-(r))\bigr),\qquad 0\le\beta\le\pi.
$$
Use a radial cutoff in the transition annulus; shrinking the disk keeps the angular derivative strictly positive. The transformed region has $C^2$ smooth boundary; give it any smooth positive metric, carry the boundary marks across, apply [A2], and pull its finite complex back. The pullback is a nonsingular $C^2$ simplex map away from the original corners. A source $C^2$ regular edge germ $y(t)=tv+\tfrac12t^2a+o(t^2)$ at a smoothed corner pulls back to a regular one-sided $C^2$ germ: its radius is $|v|t+O(t^2)$, its angle is $\beta_0+bt+o(t)$, and the displayed formula with $r\alpha_\pm''(r)\to0$ gives a continuous second derivative and a nonzero first derivative at zero. Boundary edges pull back to the prescribed arcs. [A2, F1, step 1.1, construct]

2.1 First barycentrically subdivide the source complex. Every resulting reference triangle has at most one original corner among its vertices, and all shared source edges receive identical midpoint marks. At each original corner $p$, incident pulled-back edges have distinct tangent rays because the source simplex embeddings are nondegenerate and the angular map strictly increases angle. In each reference triangle incident to $p$, insert finitely many straight rays from $p$ to distinct interior points of its opposite side so that every pulled-back sector angle lies in $(\eta,\pi-\eta)$ for some common $\eta>0$; insert an interior ray between the two boundary germs if needed. On every shared old side take the union of the finitely many new marks proposed by its two incident triangles. A side containing $p$ is shared only with another triangle containing $p$ or lies on the boundary; both incident corner triangles place new marks only on their *opposite* sides, so this union adds no interior mark to a $p$-incident side. In each triangle containing an original corner $p$, connect $p$ to every mark on its opposite side, retaining its prescribed rays. In each triangle without an original corner, choose one generic interior hub and connect it by straight segments to every cyclic boundary mark; no two spokes cross. These finite fans induce identical subdivisions on shared sides, and no triangle has two competing corner fans. The resulting source refinement has nondegenerate $C^2$ simplex maps away from original corners, and every triangle meeting an original corner has only one cap sector bounded by two incident edges. Its pulled-back new corner rays are regular one-sided $C^2$ by step 1.2. Choose one sufficiently small $\varepsilon>0$ for all finitely many original corners so their radius-$\varepsilon$ circles meet each incident edge exactly once and transversely, meet no nonincident edge, and lie in disjoint strongly convex ambient charts. Radial distance is strictly increasing along each regular germ near $p$, while the finite nonincident graph has positive distance. [F1, step 1.2, construct]

3.1 Write the successive circle marks at one corner as $a_0,u_1,\ldots,u_{m-1},a_m$, with $a_0,a_m$ on the prescribed boundary arcs. Join consecutive marks by minimizing ambient geodesics and join $p$ only to the *interior* marks $u_j$ by radial minimizing geodesics. Retain the original curved subarcs $p a_0,p a_m$; a geodesic from $p$ to a boundary mark can leave $M$ and is not used. This makes a finite cap of triangular disks. After scaling normal coordinates by $1/\varepsilon$, every incident edge and boundary germ converges in $C^1$ to its tangent ray and every short geodesic chord differs from its Euclidean chord by $O(\varepsilon)$ in scaled $C^1$ norm. A unit-radius Euclidean chord between rays separated by at most $\pi-\eta$ has radial distance at least $\cos((\pi-\eta)/2)>0$, stays inside the strict sector except at endpoints, and meets the two rays transversely. The two extreme limiting triangles, with one boundary-ray side each, have minimum angle bounded below by a positive number depending on the fixed finite star. The $C^1$ errors tend to zero, preserving disjointness, strict inward directions and ordinary corners. Thus the cap lies inside $M$ and in one convex chart. [F1, step 2.1, construct]

4.1 Each cap cross-section chord cuts its refined corner triangle in one regular arc between the two incident sides. Its pullback to the reference triangle is a $C^2$ radial graph $\rho=f(\beta)>0$ for sufficiently small $\varepsilon$: the source simplex map is nonsingular at the smoothed corner, the inverse angular map strictly increases angle, and the limiting Euclidean chord has strictly monotone polar angle in a sector narrower than $\pi$. The graph radius is comparable to $\varepsilon$. The source triangle outside the cap is therefore a compact curvilinear quadrilateral at positive distance from $p$. Let $\rho_0(\beta)$ be the straight reference segment joining the same two side marks and let $R(\beta)$ be the radial graph of the opposite source-triangle side. Both $f$ and $\rho_0$ agree at their two endpoint rays and lie strictly below $R$. On the truncated reference quadrilateral define the radial reparametrization $\rho\mapsto f(\beta)+\frac{R(\beta)-f(\beta)}{R(\beta)-\rho_0(\beta)}(\rho-\rho_0(\beta))$. It maps the straight cross-section to the curved preimage, fixes the opposite side and both incident sides, and has strictly positive radial derivative. Splitting the straight reference quadrilateral by a diagonal and composing with this map yields finite closed $C^2$ reference-triangle embeddings that agree on parametrized shared old sides; parametrize each new cap cross-section once and use that same parametrization on its outer and cap sides. Together with unchanged triangles away from corners, these maps have a common positive lower singular-value bound $m$, common upper first- and second-derivative bounds $M,A$, and a common positive image-angle bound: each follows by continuity on finitely many compact closed domains at positive corner distance. No such physical bounds are imported from [A2]. [A2, step 1.2, step 3.1, construct]

5.1 Red-refine all these reference triangles at a common dyadic depth, using the shared side parametrizations from step 4.1. This is a conforming subdivision, including its marks on cap cross-sections. With $h=2^{-k}$, the bounds of step 4.1 and fixed reference minimum angles give constants $c,C>0$, independent of $k$, such that every outer physical small triangle has diameter at most $Ch$, altitude at least $ch$, and incident edge-germ angles at least $c$. Boundary edges remain prescribed subarcs. Refinement stays outside the fixed radius-$\varepsilon$ caps, so none of these derivative bounds grows like $1/r$ as $h\downarrow0$. [step 4.1, construct]

6.1 Keep every prescribed boundary subarc and cap cross-section geodesic subsegment fixed. Replace every other refined outer edge by the unique ambient minimizing geodesic with the same endpoints. For $h$ small, [F1] puts every old edge and its chord in one convex normal chart and makes every chord short. Parameterize them on a common interval of size comparable to $h$. The old arc has uniformly bounded coordinate acceleration by step 4.1; the chord has uniformly bounded acceleration from the geodesic equation and the finite chart Christoffel bounds. The endpoint Green-function estimate gives common positional error $\le C_1h^2$ and tangent error $\le C_1h$, independent of the growing number of refined edges. [F1, step 4.1, step 5.1, algebra]

6.2 The outer refinement may mark a cap cross-section edge at many new points. Subdivide the same geodesic edge at those marks. A pure interior cap sector is a small geodesic triangle based at $p$; its cross-section is a strictly monotone radial graph in normal coordinates centred at $p$, so radial minimizing geodesics from $p$ to all new marks form a disjoint interior fan. In an extreme cap, one side $p a_0$ or $p a_m$ is curved, so choose an interior hub $q$ instead. After scaling by $1/\varepsilon$, its three sides converge in $C^1$ to a fixed Euclidean triangle of minimum angle $\eta'>0$. Choose $q$ with fixed positive barycentric distance from all limiting sides. Segments from $q$ to every point of every limiting side have a uniformly positive inward normal component at open-side endpoints and lie in uniformly strict tangent cones at vertices. Uniform scaled $C^1$ convergence of the sides and of short minimizing geodesics preserves these signs for all side points at once. Hence the geodesics from $q$ to the vertices and all new cross-section marks lie inside the extreme cap and form a disjoint fan. Its curved boundary side stays intact. All cap and outer faces share exactly the same full cross-section subedges. [F1, step 3.1, step 5.1, construct]

7.1 The shape bounds of step 5.1 give $ch$ clearance between nonincident edges in nearby refined stars and a fixed positive angle between incident germs; compact separation handles distant stars. Choose $h$ so $C_1h^2<ch/4$ and $C_1h$ is below one quarter of the angle and inward-boundary margins. The chord replacements stay in disjoint edge tubes, preserve cyclic order at vertices, remain inside $M$ away from allowed boundary endpoints, and stay on the outer side of the unchanged cap cross-sections. Transverse graph interpolation in edge tubes and radial interpolation in vertex disks give an ambient isotopy fixed on the boundary and cap cross-sections, as in the finite graph argument of [F1]. Thus outer faces remain embedded triangular disks with full-edge intersections and the original links, and every new outer nonboundary edge is an affinely parametrized geodesic with open interior in $\operatorname{Int}M$. [F1, step 5.1, step 6.1, construct]

8.1 The straightened outer triangles and refined caps form a finite face-to-face decomposition of $M$. Every nonboundary edge is regular and affinely geodesic with open interior in $\operatorname{Int}M$; every boundary edge is a prescribed regular $C^2$ subarc. In the smooth-boundary case its ordinary sectors and circle/interval links give both definitions in [F2]. For a cornered region the same construction gives explicit triangular face, edge and link data and retains all original corners, without applying smooth-boundary definitions. Choose $\varepsilon,h$ small enough that every face lies compactly in a strongly convex ambient coordinate chart of [F1]; smooth Gram–Schmidt gives a local orthonormal frame there, positive after choosing a chart orientation. This proves (i)–(iii). Full AC enters through [F1] and the stated source interface; every later construction is finite. [A1, A2, F1, F2, step 1.1, step 1.2, step 2.1, step 3.1, step 4.1, step 5.1, step 6.1, step 7.1, step 6.2] ∎



## Source locator

Munkres, *Elementary Differential Topology*, §8, Definitions 8.1–8.3, printed pp. 79–81 (PDF pp. 84–86), makes $C^r$ triangulation a simplexwise $C^r$ immersion homeomorphism, with the differential checked at every simplex point, including vertices. Its Theorem 10.6, printed pp. 103–104 (PDF pp. 108–109), extends any prescribed $C^r$ boundary triangulation while retaining it as a subcomplex. Saucan, *A Note on a Theorem of Munkres*, arXiv:math/0403055v2, Theorem 2.9 (PDF p. 4) quotes this extension; Corollary 5.1 (PDF p. 14) gives a fat relative version. Only Munkres' relative $C^2$ simplex interface is imported. Physical Jacobian bounds, corner angular pullback, controlled caps, conforming refinement and geodesic-chord straightening are supplied in steps 1.2–8.1. Jost, *Compact Riemann Surfaces*, §2.3.A, Theorem 2.3.A.1, printed pp. 37–39 (PDF pp. 50–52), proves the closed case; Lee, *Riemannian Manifolds*, Chapter 9, Problem 9-5, printed pp. 171–172, outlines a triangulation argument. Neither is used as a boundary-relative polygon-subdivision theorem.
