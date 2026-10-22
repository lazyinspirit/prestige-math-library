---
id: lem-capped-elementary-height-spheres-bound-smooth-balls
kind: lemma
title: "Capped elementary height pieces bound smooth balls"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps: [def-countable-choice, lem-smooth-ball-windows-and-boundary-disk-absorption, lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups, lem-finite-c2-surface-carriers-have-smooth-normal-forms-and-relative-cap-approximations, thm-morse-lemma, thm-isotopy-extension]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Chapter 1, Lemma 1.2 and its proof, printed pp.2–3; all seven capped models"
---

## Statement

Assume countable choice. Let a smoothly embedded surface in a horizontal slab of $\mathbb R^3$ have regular boundary on the two boundary planes and have at most one critical point of the height function, a nondegenerate one. Cut off its regular end collars and cap every resulting boundary circle by its planar disk, at slightly separated heights when disks are nested, rounding the seams. Every connected component of the resulting closed surface that is a sphere bounds a smoothly embedded standard $3$-ball. This includes the caps obtained by successively doing innermost horizontal-disk surgeries on a smooth sphere at finitely many regular levels separating all its critical values.

## Statement references

[[def-countable-choice]]

[[lem-smooth-ball-windows-and-boundary-disk-absorption]]

[[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]]

## Facts & Assumptions

**Given:** Countable choice, a component of the surface piece, its height function $z$, and the disjoint horizontal caps specified above.

[F1] A regular embedded nullhomotopic circle in an oriented surface bounds an embedded compact disk region under countable choice ([[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]], clause 4). In the plane its nullhomotopy is the linear contraction. For smooth input the disk is smooth: the disk-and-band construction in steps 7.1–12.1 of [[lem-finite-c2-surface-carriers-have-smooth-normal-forms-and-relative-cap-approximations]] uses smooth collars, smooth interval maps and smooth circle-map extensions throughout. Thus its smooth-input construction gives a smooth disk parametrization, including a prescribed smooth boundary collar.

[F2] The local form at a nondegenerate surface critical point is $z=z(p)\pm u^2\pm v^2$ ([[thm-morse-lemma]]). A compact smooth embedding isotopy extends to a compactly supported ambient isotopy under countable choice ([[thm-isotopy-extension]]).

[F3] Two smooth balls glued along a disk window form a ball; removing a boundary-attached ball from a ball leaves a ball, after corner rounding ([[lem-smooth-ball-windows-and-boundary-disk-absorption]]).

[A1] The hypothesis is [[def-countable-choice]]. It is used through [F1]–[F2]; every selection and modification particular to the finite collection of caps is finite.

## Proof

**Given:** The surface piece, the caps and the assumptions above.

1.1 On a compact height band without critical points, the restriction of height to the surface has a smooth field $X$ with $dz(X)=1$: in any surface chart divide a coordinate field by its nonzero height derivative, and combine finitely many such fields by a smooth partition near the compact band. Its flow carries the level circles through the band. Existence for the entire height interval follows by covering the compact band by finitely many flow charts, choosing a common positive short time, and restarting; the trajectory remains in the band until its height reaches an endpoint. Projecting each moving circle to its horizontal plane gives a smooth isotopy of disjoint plane curves. Its velocity has a smooth planar extension near the circles by their normal collar charts; finitely many cutoffs give a compactly supported extension. Its planar flow therefore straightens these curves simultaneously, level by level. In ambient coordinates use $(x,z)\mapsto(g_z(x),z)$ for these plane diffeomorphisms, cutting it off beyond the end levels. Consequently every regular end of the piece can be made vertical. The construction can be made fixed near its attachment to a critical neighborhood. [F2, construct]

2.1 Move the horizontal caps toward the critical level, stopping in a sufficiently thin slab about that level; in a regular collar this is exactly shortening a vertical cylinder and translating its cap. With nested caps perform the move on the innermost disk first and keep the stopping heights distinct in the order imposed by disjointness. This prevents intersections: outside the moving collar the only possible obstruction is another cap over a nested planar disk, and that cap has already been moved to a nearer stopping height or is kept beyond the moving one. Use positive, strictly monotone changes of the height coordinate along each cylinder, constant near its fixed end, to implement these moves; on the cap use the corresponding translation. Smooth corner rounding is done in disjoint collar neighborhoods. These are isotopies of the capped surface, and [F2] extends them ambiently. The same shortening applies in a component with no critical point, using any intermediate level. [F1, F2, step 1.1, construct]

2.2 At a saddle use the chart $z=z(p)+u^2-v^2$. Outside a small rectangle about the saddle the regular sheets can be made vertical by step 1.1. Viewed in the horizontal plane, the two circles on the two-component side are joined by the projected saddle rectangle; its interior misses those circles. There are exactly two possibilities: their bounded disks are disjoint, or one disk lies inside the other. To justify completeness, each circle bounds the unique disk in the plane by [F1]. The connected second circle avoids the first and hence lies entirely in its disk interior or its exterior; applying the same argument with the two interchanged gives precisely disjoint or nested disks. The rectangle lies in the region adjacent to both of its attaching arcs: outside both disks in the disjoint case and in the annulus between them in the nested case. A different region would force it to cross one of the two circles. The saddle's other level circle is the boundary obtained by the band reconnection. Reverse height if necessary so this is the one-component side. [F1, F2, step 1.1, construct]

3.1 With no critical point the connected uncapped piece is a cylinder: the flow in step 1.1 identifies it with one level circle times an interval. After shortening and straightening it is the vertical wall over a plane circle, with one disk cap at each end. Its bounded region is $D^2\times I$ in the disk coordinates from [F1]. This is a ball after rounding: replace the product corners in the disk-radius/height half-plane by circular arcs; the rounded solid is a smooth convex cylinder with rounded ends, radially parametrizable from its center. If there is a maximum or a minimum, the critical chart in [F2] is a paraboloid disk. The regular part is a cylinder attached to its boundary, by step 1.1. Shorten that cylinder into the chart. The paraboloid and its opposite planar cap bound a region $\{(u,v,t):0\le t\le c-u^2-v^2\}$, or its reflection. It is a ball, since rounding its edge gives a convex solid with a smooth radial parametrization; a radial rescaling is constant linear near the center and adjusted near the boundary. Thus these three cases give standard balls. [F1, F2, step 1.1, step 2.1, construct]

4.1 In the disjoint-disk case, straighten the two attaching arcs in the boundary collars of their planar disks. The projected union of the two disks and the connecting rectangle is a disk: shrink the disks in their parametrizations to end caps, straighten the rectangle in its product coordinates, and round to a stadium. All remaining interval parametrizations extend over their collars by increasing interpolation, so this is an actual disk parametrization. The capped saddle bounds the solid made from the two short disk cylinders by a single thickened rectangle joining one disk window of each. Indeed, away from the rectangle its boundary is exactly the two vertical walls and their horizontal caps; across the rectangle its boundary has the reconnection prescribed by $u^2-v^2$. Rounding the rectangle's two lower or upper edges produces that saddle chart, and rounding the other edges gives precisely the cap collars. The two cylinders are balls by step 3.1. The thickened rectangle is a ball meeting the first cylinder in one disk, and its union with that cylinder meets the second cylinder in one disk. Two applications of [F3] therefore make this solid a ball. [F2, F3, step 3.1, step 2.2, construct]

4.2 In the nested-disk case let $D_i\subset\operatorname{Int}D_o$ be the inner and outer disks. Their intervening closed annulus is a smooth annulus by the two marked-disk/annulus construction of numbered clauses 12.1–13.1 of [F1]'s smooth-input normal-form proof. The joining rectangle is a crosscut of this annulus. Cutting along its central joining arc leaves a connected surface: a path can be rerouted from one side of the cut to the other around either of the two boundary circles before their marked attaching intervals are removed. Its boundary is one circle and its Euler characteristic is $0+1=1$, since cutting the rectangle replaces one band by two boundary intervals. The finite surface normal form in [F1] therefore gives a topological disk, and its smooth-input construction gives a smooth disk. Equivalently the curve on the one-component side bounds the annulus slit along the joining rectangle. The bounded solid of the capped saddle is an outer short disk cylinder with an inner short disk cylinder indented into one end; the indent's boundary window is opened to the outer wall by the thickened joining rectangle. The indented cylinder together with that rectangle is a ball meeting the outer cylinder's boundary in one disk: this window is the union of its inner disk window and the strip running to the outer boundary, rounded along their shared interval. This description is checked fiberwise away from the rectangle: a point of $D_o\setminus D_i$ has the full outer vertical interval and a point of $D_i$ has that interval shortened by the inner cap. Along the rectangle these intervals join at their endpoints in the single local reconnection $u^2-v^2$; rounding gives the prescribed saddle. The indented cylinder and joining rectangle are balls glued along one window, hence their union is a ball by [F3]. Removing this boundary-attached ball from the outer cylinder leaves a ball by [F3]. This proves the nested case. [F1, F2, F3, step 3.1, step 2.2, construct]

5.1 A connected regular piece has one circle at each end; an extremum piece has one; and a saddle piece has the three boundary circles just analyzed. There are no additional ends in the connected component: the regular flow supplies cylinders and the single critical chart supplies respectively the disk or the single band. Thus steps 4.1–4.2 exhaust the capped components that are spheres. Every straightening used an embedding isotopy, so it carries the constructed ball back to a smooth embedded standard ball bounded by the original capped sphere. For surgeries performed successively at finitely many regular levels, the innermost choice ensures that each cap interior misses the remaining surface, and sufficiently small distinct collar widths keep all new caps disjoint. Their components have exactly the form used in steps 1.1–2.1, so the final assertion follows as well. [F2, A1, step 1.1, step 2.1, step 3.1, step 4.1, step 4.2] ∎
