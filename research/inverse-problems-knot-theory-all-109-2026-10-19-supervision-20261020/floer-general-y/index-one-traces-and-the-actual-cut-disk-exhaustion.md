# Index-one traces and the actual cut-disk exhaustion

This is new authoring of the remaining disk operation. Its surface input is the actual admissible nice surface diagram constructed by permissible moves. The earlier signed exterior construction supplies compactness and the actual coherent orientations. The present operation is independent of a coefficient field. Source use: the complete arguments of Sarkar–Wang, arXiv:math/0607777v4, Theorems 3.3–3.4, and Juhász, arXiv:math/0609779v3, Proposition 7.6. Their closed-manifold/F2 conclusions are not used as a general-Y integral theorem.

## The trace bookkeeping on the punctured surface

Use a product complex structure on the actual surface. A holomorphic strip in Sym^dΣ has its incidence trace in Σ×strip. Normalize that trace; the projection to the strip has degree d. The trace is compact away from its two ends, because all counted boundary-region multiplicities vanish. Constant components are the stationary generator coordinates. Write D for the projected two-chain, e(D) for its Euler measure (a disk region with k right-angle corners has measure 1−k/4), and n_x,n_y for the sums of the four quadrant averages at the two generators. Let Δ be intersection with the discriminant, counted positively. On normalization this is

    Δ = b + 2s,

where b is the ramification number of the strip projection and s is the total singularity defect of the incidence trace. A simple branch contributes one; a transverse meeting of two graph sheets contributes two. General singularities have these same nonnegative contributions after local resolution. Constant sheets outside D make no contribution.

The two bookkeeping identities are

    μ(D) = 2e(D)+Δ,
    Δ = n_x(D)+n_y(D)−e(D).

Here the degree is d, the number of actual attaching circles; there is no substitution of the genus of a cap. One way to perform the calculation is to cut the trace along the inverse images of the region edges and trivialize TΣ over each resulting region. On a k-corner disk sheet the squared tangent framing has winding 2−k/2. Summing the sheets gives 2e(D): internal edges cancel with their opposite orientation. At a branch exchange the change from ordered root coordinates to symmetric coordinates has determinant ∏_{i<j}(z_i−z_j); its square has one zero at a simple branch exchange and two at a crossing of two graph sheets. This gives the first formula, including the factors one and two above. For the second calculation cap the α and β trace edges by their real tangent framings. The edge winding cancels in pairs. An endpoint quadrant of multiplicity m leaves m/4, so the remaining endpoint contribution is n_x+n_y; the region Euler contribution is e(D). Their difference is the same squared root-discriminant winding Δ. This calculation can be made after splitting multiple branches and perturbing corner angles, since both sides are invariant under these local deformations. All edges of the capped boundary collar have coefficient zero. In particular they add neither a hidden boundary winding nor a closed-surface Euler term.

Combining gives μ=e+n_x+n_y. This is a calculation for the actual incidence trace and actual tangent boundary conditions, rather than an invocation of a completeness-dependent closed Heegaard index formula.

## The only positive index-one traces

A counted nonconstant disk has D≥0. Every region in its support is a bigon or square, so e(D)≥0 and e(D) is a multiple of 1/2. If its boundary hits h distinct α circles, the endpoints on each such circle contribute at least 1/2 to n_x+n_y. It must hit at least one: otherwise it is a nonzero nonnegative periodic domain. An unhit circle has identical x and y coordinates. Such a coordinate is outside D: if it had positive local multiplicity, its two point measures would contribute at least one, in addition to the contribution from a hit circle. Therefore every unhit coordinate is a stationary sheet disjoint from the moving trace.

For μ=1 there are precisely the following numerical possibilities:

* h=2, e=0, and four moving endpoint averages equal 1/4;
* h=1, e=1/2, and two moving endpoint averages equal 1/4;
* h=1, e=0, and the two moving endpoint averages sum to one.

The last possibility cannot occur. Its moving trace has degree one over the strip, so its normalization is a graph, with b=0. It has no stationary sheet in its support and hence no singularity defect. But the formulas would require Δ=1.

In the first case Δ=1. Positivity gives b=1,s=0. Removing the d−2 stationary sheets leaves a connected degree-two branched cover of the strip, with one simple branch point. After compactifying its ends it is a disk F with four marked boundary points. In the second case Δ=0; removing the d−1 stationary sheets leaves a degree-one disk F with two marked boundary points.

The projection F→Σ is an immersion, including at its corners. To see this without assuming it, pull the region cellulation back to F. Riemann–Hurwitz for this cellulation, with corner angles included, is

    χ(F) = e(D) + (# marked right-angle corners)/4 − r,

where r≥0 is the total ramification of this projection. The corner averages 1/4 say exactly that each marked point occupies a single quadrant. For the four-corner case the first two terms are 0+1; for the two-corner case they are 1/2+1/2. Since χ(F)=1, r=0.

It remains to rule out a noninjective immersion. Pull all α and β edges back to F. For the square these are a rectangular grid: a closed α preimage or an α arc returning to the same β boundary edge would cut off an outside piece with negative Euler measure, whereas that piece is tiled by squares. The same holds after interchanging the colors. For the bigon there is exactly one bigon tile; the α arcs are nested around it, and the remaining part is a rectangular grid; the β arcs have the same description. These conclusions follow by cutting successively along an outermost returning arc; its outside Euler measure is negative unless it contains the unique bigon tile, so at most the single nested bigon pattern survives.

If two grid vertices had the same image, follow their lifts in one direction along the same α circle until one reaches a β boundary edge. Next follow the two lifts along β until one reaches an α boundary edge. Choose the β direction toward the end of the lift which already lies on the boundary. This produces two preimages of one image, one of them a marked corner. In the nested bigon, first follow toward the innermost bigon if needed, then make the same two boundary moves. A marked corner has exactly one preimage because its quadrant average is 1/4. This is a contradiction. Injectivity on vertices implies injectivity on tiles and edges by the same continuation, hence on F. Thus D is an empty embedded bigon or rectangle, with all coefficients zero or one.

## Existence, uniqueness, and the local operator

For an embedded bigon the moving coordinate is its conformal strip parametrization. It is unique modulo real translation. The other coordinates are constant outside the domain. For a rectangle, give its disk F the induced complex structure. The degree-two map to the strip is specified by the real cross-ratio of the four marked points: the position of its simple branch point realizes that cross-ratio uniquely modulo strip translation. The symmetric pair of its two roots gives the actual holomorphic map to Sym²Σ; it is smooth at the branch point in elementary symmetric coordinates. All other coordinates are stationary.

Regularity is local. For the bigon, reflection across its two boundary edges identifies the kernel with the real translation field; a kernel section with its translation coefficient removed vanishes at both ends and, after reflection, has no allowed positive-degree term. The adjoint reflected problem has no allowed pole and hence has zero kernel. For the rectangle the same reflection argument is made on its branched double cover. The one cross-ratio matching condition removes the additional branch-position parameter; it has nonzero derivative because the real modulus of a quadrilateral is a strictly monotone conformal coordinate. The only remaining kernel is again translation and the adjoint kernel is zero. The stationary coordinate operators are invertible for transverse real tangent lines. Thus each quotient moduli space consists of a single regular point. Its integer count is a unit with the sign specified by the actual coherent orientation. This does not fix all units independently; the previously constructed orientation system fixes their compatibility.

Small generic perturbations used elsewhere do not change this finite description: continuation of each regular point follows from the implicit function theorem, and a hypothetical extra sequence would compactify to an additional product-structure point or a broken index-one trace. The exhaustion above excludes the first; the index and the absence of bubbles exclude the second. Consequently the chosen nice endpoint can be used by the signed move theory.

## The surface cut has no additional index-one disk

For outer generators, both endpoints lie outside the interior of P. An embedded bigon or rectangle D therefore has no αβ corner in P. Pull the A and B edges back to D. They are embedded arcs, since A and B have no closed components, and are disjoint within each color. Cutting D along these arcs gives precisely the bigon/square pieces of the nice surface cellulation. A component of D∩P cannot contain a closed monochromatic frontier: an A/B circle is excluded by goodness, and a whole attaching-circle frontier would bound a coefficient-one nonnegative periodic domain. It cannot have an alternating αβ corner because every such corner of D is an endpoint generator outside P. Thus each component has all its attaching-circle edges of just one family: α with A, or β with B. It meets the corresponding A or B boundary. Equivalently, a mixed-family component would have a first switch between α and β on its boundary, which is an excluded αβ corner; switching through A/B instead reaches their vertex on ∂Σ, outside a counted domain.

This is exactly the geometric hypothesis of the already authored signed local disk transfer. Every component has a unique destination P_A or P_B, so D lifts uniquely to the cut diagram; the conformal parametrization lifts with it. Conversely a positive index-one disk upstairs pushes to a positive domain downstairs. Euler and endpoint measures are unchanged by the cut, so the pushed domain has index one and is among the exhausted bigons/rectangles. Its lift is the original disk. Nonnegative periodic domains upstairs push to nonnegative periodic domains downstairs, which also proves cut admissibility. No new upstairs disk or periodic class is being discarded.

The signed determinant conjugacy already constructed for these literal local lifts applies to every differential disk, rather than to a selected subset. On the zero-periodic homology-product branch, the previously constructed generator-sign adjustment therefore gives the full integer chain identification of the outer summand with the cut complex. This is the new differential exhaustion required by that identification; it does not provide the separate taut hierarchy or characteristic-product argument.
