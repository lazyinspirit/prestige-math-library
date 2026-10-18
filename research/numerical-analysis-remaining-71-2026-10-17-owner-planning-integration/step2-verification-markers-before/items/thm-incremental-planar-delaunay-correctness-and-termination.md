---
id: thm-incremental-planar-delaunay-correctness-and-termination
kind: theorem
title: "Exact planar insertion terminates with a weak empty-circle triangulation"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: delaunay-triangulations-and-voronoi-computation
dependency_level: 6
proof_strategy: direct
deps:
  - alg-incremental-planar-delaunay-edge-flips
  - lem-large-delaunay-supertriangle-exists
  - def-planar-delaunay-voronoi-structures
  - lem-lifted-power-sphere-determinant-identity
  - thm-lexicographic-lift-tie-break-consistent
  - lem-lifted-flip-potential-decreases
  - thm-certified-dyadic-geometric-predicate-sound-and-terminates
  - lem-lower-lifted-facets-cover-the-convex-hull
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mark de Berg et al., Computational Geometry: Algorithms and Applications, 3rd ed., Chapter 9, Sections 9.2–9.3"
      url: "https://ics-websites.science.uu.nl/geobook/interpolation.pdf"
    - title: "David M. Mount, CMSC 754 Computational Geometry, Lecture 13"
      url: "https://jeffe.web.engr.illinois.edu/teaching/compgeom/2021/refs/Mount.pdf"
---

## Statement

For every nonempty finite indexed dyadic planar site set, after duplicate collapse the algorithm of [[alg-incremental-planar-delaunay-edge-flips]] terminates. In the affine-dimension-two branch, after each insertion the augmented triangles are exactly the $d=2$ lower simplices of the common fixed-universe formal lift, as defined in [[lem-lower-lifted-facets-cover-the-convex-hull]]. After removing synthetic vertices, the output triangulates the input convex hull with weakly empty original circumdisks and coherent lexicographic ties. In dimensions zero and one, the algorithm returns the defined single site or consecutive chain.

## Facts & Assumptions

**Given:** A finite indexed dyadic site set, its fixed augmented universe with the supertriangle, and the insertion/flip algorithm of [[alg-incremental-planar-delaunay-edge-flips]].

[F1] [[lem-large-delaunay-supertriangle-exists]]: all sites lie strictly inside the supertriangle, and its vertices lie strictly outside every circle through a noncollinear input triple.

[F2] [[lem-lifted-power-sphere-determinant-identity]]: an oriented lifted determinant sign is the corresponding circumcircle-side sign.

[F3] [[thm-lexicographic-lift-tie-break-consistent]]: the one formal height perturbation is coherent and resolves every zero sphere determinant on a nondegenerate base.

[F4] [[lem-lifted-flip-potential-decreases]]: every illegal edge flip across a convex quadrilateral strictly decreases the integral of the piecewise-affine lifted-height interpolant.

[F5] [[thm-certified-dyadic-geometric-predicate-sound-and-terminates]]: certified orientation and incircle predicates return the exact determinant signs, including zero, and terminate.

[F6] [[lem-lower-lifted-facets-cover-the-convex-hull]]: under the common formal height lift, lower triangles cover the convex hull, meet in common faces, and are weakly empty for the original sites.

[F7] [[def-planar-delaunay-voronoi-structures]]: Voronoi cells are closed nearest-site cells, and a Delaunay graph edge is a pair whose cells meet in a nontrivial segment.

[A1] In the affine-dimension-two branch, the deduplicated input has dimension two and the formal universe contains every input and synthetic vertex before insertion begins.

## Proof

1.1 Consider any triangulation of a convex polygon whose interior edges all have the legal lifted incircle sign. The determinant identity [F2] is polynomial in the height entries, so it remains true coefficientwise for the formal heights [F3]; exact signs are supplied by [F5]. Across a shared edge the affine triangle planes agree on the edge. The legal sign says the opposite vertex of either triangle lies on or above the continuation of the other plane; the two tests are equivalent because the difference of the planes vanishes on the shared edge and changes sign across it. Thus the piecewise-affine height has nondecreasing slope when crossing the edge. For any triangle $\tau$ and any vertex $q$, choose $x$ in the interior of $\tau$ so $xq$ crosses edges transversely and avoids every other vertex; finitely many lines are forbidden. Along $xq$ the slope is nondecreasing, so the height at $q$ is at least the value of the plane through $\tau$ there. Every triangle plane therefore supports all lifted vertices from below; taking constant terms gives weakly empty original circumdisks. [F2, F3, F5, A1, choose, algebra]

1.2 In ordinary mode, `CHOOSE-SUPERTRIANGLE(P,0)` enumerates finitely many dyadic triples at each height and performs finitely many exact tests on each. [F1] guarantees an admissible candidate, so some finite height contains one and this search terminates; [F5] supplies terminating exact tests. The initial supertriangle is a triangulation and has no interior edge, so its edges are vacuously legal. Each input site lies strictly inside it by [F1]. The batch algorithm calls `INSERT(p,none)`, whose exact locator scans the finite current triangle list and tests each triangle with finitely many orientation predicates; [F5] makes every test terminate. Because the current triangles cover the supertriangle, the scan finds a containing face or an interior edge. Duplicate collapse excludes an existing vertex, and strict containment excludes a hull edge, so these are the only cases. An edge incidence lookup supplies the two faces of an interior edge. A supplied face or edge certificate is checked with the same exact predicates by the update procedure, without a scan; an invalid certificate returns its stated status. Splitting a face replaces it by three nondegenerate triangles covering it. Splitting an interior edge at its strict interior point replaces its two incident faces by four nondegenerate triangles covering their union. Both operations preserve a nonoverlapping triangulation. [given, F1, F5, A1, construct]

2.1 Let $uvw$ be any current lower triangle with plane $z=2o\cdot x+b$ over the formal field and set $c=\|o\|^2+b$. Its constant plane is the ordinary paraboloid plane through $u,v,w$, because the projected base is nondegenerate. Define the formal power distance $\pi_q(x)=\|x-q\|^2+\varepsilon^{2^{r_q}}$ using the fixed height perturbation. Then $\pi_u(o)=\pi_v(o)=\pi_w(o)=c$ and every current site $q$ has $\pi_q(o)\ge c$ by the supporting-plane inequality. Suppose a new site $p\ne v$ lies formally below this plane. This holds at a split because a nonvertex point of triangle $uvw$ is strictly inside its unperturbed circumdisk, so the constant term of $\pi_p(o)-c$ is negative; it also holds for a flip-conflict triangle by the illegal test. At $x=v$, $\pi_p(v)-\pi_v(v)=\|p-v\|^2+\varepsilon^{2^{r_p}}-\varepsilon^{2^{r_v}}$ has positive constant term. The difference $\pi_p-\pi_v$ is affine in $x$, so along the segment from $o$ to $v$ it has a zero at some formal parameter $0<t<1$. At that point $x_*$, for every other current site $q$, the affine difference $\pi_q-\pi_v$ is nonnegative at $o$ and strictly positive at $v$ (its constant term there is $\|q-v\|^2>0$), hence strictly positive at $x_*$. Therefore $p,v$ are strict nearest sites for the finite formal power diagram. The strict inequalities persist on a nontrivial segment of their formal bisector; each center there defines a supporting graph plane through the two lifts, so $pv$ is a lower-hull edge of the common lifted configuration. [F1, F3, A1, step 1.1, algebra, choose]

3.1 Such a formal nearest-site edge is locally legal. After a rigid motion write $p=(0,0)$ and $v=(a,0)$. Centers on their perpendicular bisector are $(a/2,t)$. For opposite triangle vertices $u=(b,c)$ and $w=(d,e)$ with $c>0>e$, the power-distance inequalities for $p,v$ to be no farther than $u,w$ are $t\le t_u$ and $t\ge t_w$, where $t_u=(b^2+c^2-ab+\eta_u-\eta_p)/(2c)$ and $t_w=(d^2+e^2-ad+\eta_w-\eta_p)/(2e)$, with $\eta_i=\varepsilon^{2^{r_i}}$. These intervals intersect exactly when $t_w\le t_u$. The formal incircle determinant says $w$ lies below the plane through $p,v,u$ exactly when $t_w>t_u$, so the empty-bisector segment precludes an illegal sign. Conversely, if an edge opposite $p$ is illegal, [F2] puts $p$ inside or on the original circle through the adjacent triangle. To verify flippability, put the edge line at height $0$ with endpoints $a=(0,0),b=(1,0)$ and opposite vertices $w,p$ at heights $y_w>0>y_p$. If $p$ is inside the circle through $a,b,w$, the second intersection of line $pw$ with the circle lies beyond $p$ on the negative side, so the segment crosses height $0$ inside the disk. If $p$ is on the circle, $p,w$ are the two circle intersections and their segment has the same property. The disk meets height $0$ exactly in the chord $[a,b]$, so the crossing is inside that edge; the quadrilateral is strictly convex and the flip is valid. For a flip, the old non-$p$ triangle was lower before insertion and the illegal test puts $p$ formally below its plane; step 2.1 therefore supplies the new $p$-incident edge. Exact zero tests are resolved coherently by [F3] and evaluated by [F5]. [F2, F3, F5, A1, step 2.1, algebra, algebra]

4.1 After a split, all new edges incident to $p$ are legal by steps 2.1–3.1. Any other changed edge is opposite $p$ and is tested by `LEGALIZE`; after a flip the two new opposite edges are tested recursively, while edges outside the changed triangles retain their previous adjacent faces. Each flip strictly lowers the common potential [F4]. There are finitely many triangulations of the fixed augmented vertex set, so no state can recur and every recursive legalization terminates. The final triangulation has all edges legal; step 1.1 then proves it is the lower triangulation for that prefix. This re-establishes the induction invariant after every insertion, including the initial prefix. [F4, A1, step 1.1, step 1.2, step 2.1, step 3.1, algebra]

5.1 After the last insertion, step 4.1 leaves every triangle plane supporting all augmented lifted vertices from below. The coherent perturbation has no four coplanar lifted sites over a nondegenerate projected triangle by [F3], so these current triangles are full lower simplices. [F3, A1, step 1.1, step 4.1]

6.1 By [F6], the lower simplices form a triangulation of the supertriangle. The three synthetic identifiers lie below all input identifiers; hence every input rank in the augmented universe is its input-only rank plus three. All input perturbation exponents are multiplied by $8$, the common substitution $\varepsilon\mapsto\varepsilon^8$, which preserves every first-nonzero-coefficient sign on input-only tuples. Thus the input-only lower triangulation has the same tie choices. Its lower triangles remain lower after adding the supervertices: [F1] places them strictly outside each input circumcircle, so the added support differences have positive constant term and remain positive formally. Conversely, every augmented lower simplex using only input vertices is supported against all input sites. Removing synthetic-vertex triangles therefore leaves exactly the input lower triangulation, which covers the input convex hull by [F6]; constant terms give weakly empty original circumdisks. [F1, F3, F6, A1, step 5.1, algebra, algebra]

7.1 If the affine dimension is zero or one, the algorithm directly returns the prescribed single site or sorted chain by [F7], using only a finite sort. If the affine dimension is two, steps 4.1–6.1 prove termination and correctness. This proves the theorem in every branch. [given, F7, step 4.1, step 6.1, algebra] ∎
