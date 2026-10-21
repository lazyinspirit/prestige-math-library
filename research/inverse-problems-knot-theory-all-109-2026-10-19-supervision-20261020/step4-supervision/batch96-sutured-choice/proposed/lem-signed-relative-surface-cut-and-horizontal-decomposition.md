---
id: lem-signed-relative-surface-cut-and-horizontal-decomposition
kind: lemma
title: "Signed relative surface cutting and horizontal tensor decomposition"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-integral-sutured-floer-compactness-and-orientations
  - lem-integral-sutured-auxiliary-triangle-and-move-maps
  - lem-relative-sutured-diagrams-have-signed-move-equivalences
  - lem-permissible-surface-niceification-preserves-admissibility
  - def-sutured-floer-chain-complex
  - def-balanced-taut-sutured-manifold-and-product-region
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ni, Knot Floer homology detects fibred knots, complete sections 4 and 5"
      url: "https://arxiv.org/pdf/math/0607156v4"
    - title: "Ni, Sutured Heegaard diagrams for knots, complete Lemma 3.2 and Proposition 3.3"
      url: "https://arxiv.org/pdf/math/0507440v2"
    - title: "Juhasz, Floer homology and surface decompositions"
      url: "https://arxiv.org/pdf/math/0609779v3"
---

## Statement

Assume the Axiom of Choice for the analytic existence and invariant chain-comparison assertions. An actual good decomposing surface admits an adapted admissible nice diagram. For a specified coherent orientation class on the exterior complex, the outer summand of that diagram is integrally chain isomorphic to the cut diagram with the induced orientation class; nonzero periodic domains are retained by pullback of characters. When the surface separates into two balanced pieces, every generator is outer and the full complex is identified with the graded tensor product of the two component complexes. In particular the usual two-piece horizontal decomposition has this chain formula. It gives the homology tensor formula over every field; over the integers it gives the graded Künneth exact sequence including Tor.

## Facts & Assumptions

[A1] The Axiom of Choice is [[def-axiom-of-choice]]. It is assumed when invoking existence, regularity, compactification, and invariant comparison maps from the imported integral sutured analytic framework. The finite domain and determinant calculations retain their stated conditional supplied-data hypotheses; no unconditional Countable-Choice analytic existence theorem is asserted. In particular the Countable-Choice selection result applies only GIVEN its actual pointwise operator constructions, not merely because the diagrams or domain classes are countable.

[F1] [[lem-integral-sutured-floer-compactness-and-orientations]] supplies its actual construction or operator interface at its stated scope.

[F2] [[lem-integral-sutured-auxiliary-triangle-and-move-maps]] supplies its actual construction or operator interface at its stated scope.

[F3] [[lem-relative-sutured-diagrams-have-signed-move-equivalences]] supplies its actual construction or operator interface at its stated scope.

[F4] [[lem-permissible-surface-niceification-preserves-admissibility]] supplies its actual construction or operator interface at its stated scope.

[F5] [[def-sutured-floer-chain-complex]] supplies its actual construction or operator interface at its stated scope.

[F6] [[def-balanced-taut-sutured-manifold-and-product-region]] supplies its actual construction or operator interface at its stated scope.

## Proof

**Given:** The actual marked sutured diagrams and decomposition hypotheses of the statement, with a specified coherent orientation class. The Axiom of Choice is assumed for the analytic invocations [A1]; the relative finite-move geometry and supplied finite-complex algebra keep their stated inputs.

1.1 **The trace bookkeeping on the punctured surface.** Use a product complex structure on the actual surface. A holomorphic strip in Sym^dΣ has its incidence trace in Σ×strip. Normalize that trace; the projection to the strip has degree d. The trace is compact away from its two ends, because all counted boundary-region multiplicities vanish. Constant components are the stationary generator coordinates. Write D for the projected two-chain, e(D) for its Euler measure (a disk region with k right-angle corners has measure 1−k/4), and n_x,n_y for the sums of the four quadrant averages at the two generators. Let Δ be intersection with the discriminant, counted positively. On normalization this is [construct]

1.2 Δ = b + 2s, [construct]

1.3 where b is the ramification number of the strip projection and s is the total singularity defect of the incidence trace. A simple branch contributes one; a transverse meeting of two graph sheets contributes two. General singularities have these same nonnegative contributions after local resolution. Constant sheets outside D make no contribution. [construct]

1.4 The two bookkeeping identities are [construct]

1.5 μ(D) = 2e(D)+Δ, Δ = n_x(D)+n_y(D)−e(D). [construct]

1.6 Here the degree is d, the number of actual attaching circles; there is no substitution of the genus of a cap. One way to perform the calculation is to cut the trace along the inverse images of the region edges and trivialize TΣ over each resulting region. On a k-corner disk sheet the squared tangent framing has winding 2−k/2. Summing the sheets gives 2e(D): internal edges cancel with their opposite orientation. At a branch exchange the change from ordered root coordinates to symmetric coordinates has determinant ∏_{i<j}(z_i−z_j); its square has one zero at a simple branch exchange and two at a crossing of two graph sheets. This gives the first formula, including the factors one and two above. For the second calculation cap the α and β trace edges by their real tangent framings. The edge winding cancels in pairs. An endpoint quadrant of multiplicity m leaves m/4, so the remaining endpoint contribution is n_x+n_y; the region Euler contribution is e(D). Their difference is the same squared root-discriminant winding Δ. This calculation can be made after splitting multiple branches and perturbing corner angles, since both sides are invariant under these local deformations. All edges of the capped boundary collar have coefficient zero. In particular they add neither a hidden boundary winding nor a closed-surface Euler term. [construct]

1.7 Combining gives μ=e+n_x+n_y. This is a calculation for the actual incidence trace and actual tangent boundary conditions, rather than an invocation of a completeness-dependent closed Heegaard index formula. [construct]

1.8 **The only positive index-one traces.** A counted nonconstant disk has D≥0. Every region in its support is a bigon or square, so e(D)≥0 and e(D) is a multiple of 1/2. If its boundary hits h distinct α circles, the endpoints on each such circle contribute at least 1/2 to n_x+n_y. It must hit at least one: otherwise it is a nonzero nonnegative periodic domain. An unhit circle has identical x and y coordinates. Such a coordinate is outside D: if it had positive local multiplicity, its two point measures would contribute at least one, in addition to the contribution from a hit circle. Therefore every unhit coordinate is a stationary sheet disjoint from the moving trace. [construct]

1.9 For μ=1 there are precisely the following numerical possibilities: [construct]

1.10 * h=2, e=0, and four moving endpoint averages equal 1/4; * h=1, e=1/2, and two moving endpoint averages equal 1/4; * h=1, e=0, and the two moving endpoint averages sum to one. [construct]

1.11 The last possibility cannot occur. Its moving trace has degree one over the strip, so its normalization is a graph, with b=0. It has no stationary sheet in its support and hence no singularity defect. But the formulas would require Δ=1. [construct]

1.12 In the first case Δ=1. Positivity gives b=1,s=0. Removing the d−2 stationary sheets leaves a connected degree-two branched cover of the strip, with one simple branch point. After compactifying its ends it is a disk F with four marked boundary points. In the second case Δ=0; removing the d−1 stationary sheets leaves a degree-one disk F with two marked boundary points. [construct]

1.13 The projection F→Σ is an immersion, including at its corners. To see this without assuming it, pull the region cellulation back to F. Riemann–Hurwitz for this cellulation, with corner angles included, is [construct]

1.14 χ(F) = e(D) + (# marked right-angle corners)/4 − r, [construct]

1.15 where r≥0 is the total ramification of this projection. The corner averages 1/4 say exactly that each marked point occupies a single quadrant. For the four-corner case the first two terms are 0+1; for the two-corner case they are 1/2+1/2. Since χ(F)=1, r=0. [construct]

1.16 It remains to rule out a noninjective immersion. Pull all α and β edges back to F. For the square these are a rectangular grid: a closed α preimage or an α arc returning to the same β boundary edge would cut off an outside piece with negative Euler measure, whereas that piece is tiled by squares. The same holds after interchanging the colors. For the bigon there is exactly one bigon tile; the α arcs are nested around it, and the remaining part is a rectangular grid; the β arcs have the same description. These conclusions follow by cutting successively along an outermost returning arc; its outside Euler measure is negative unless it contains the unique bigon tile, so at most the single nested bigon pattern survives. [construct]

1.17 If two grid vertices had the same image, follow their lifts in one direction along the same α circle until one reaches a β boundary edge. Next follow the two lifts along β until one reaches an α boundary edge. Choose the β direction toward the end of the lift which already lies on the boundary. This produces two preimages of one image, one of them a marked corner. In the nested bigon, first follow toward the innermost bigon if needed, then make the same two boundary moves. A marked corner has exactly one preimage because its quadrant average is 1/4. This is a contradiction. Injectivity on vertices implies injectivity on tiles and edges by the same continuation, hence on F. Thus D is an empty embedded bigon or rectangle, with all coefficients zero or one. [construct]

1.18 **Existence, uniqueness, and the local operator.** For an embedded bigon the moving coordinate is its conformal strip parametrization. It is unique modulo real translation. The other coordinates are constant outside the domain. For a rectangle, give its disk F the induced complex structure. The degree-two map to the strip is specified by the real cross-ratio of the four marked points: the position of its simple branch point realizes that cross-ratio uniquely modulo strip translation. The symmetric pair of its two roots gives the actual holomorphic map to Sym²Σ; it is smooth at the branch point in elementary symmetric coordinates. All other coordinates are stationary. [construct]

1.19 Regularity is local. For the bigon, reflection across its two boundary edges identifies the kernel with the real translation field; a kernel section with its translation coefficient removed vanishes at both ends and, after reflection, has no allowed positive-degree term. The adjoint reflected problem has no allowed pole and hence has zero kernel. For the rectangle the same reflection argument is made on its branched double cover. The one cross-ratio matching condition removes the additional branch-position parameter; it has nonzero derivative because the real modulus of a quadrilateral is a strictly monotone conformal coordinate. The only remaining kernel is again translation and the adjoint kernel is zero. The stationary coordinate operators are invertible for transverse real tangent lines. Thus each quotient moduli space consists of a single regular point. Its integer count is a unit with the sign specified by the actual coherent orientation. This does not fix all units independently; the previously constructed orientation system fixes their compatibility. [construct]

1.20 Small generic perturbations used elsewhere do not change this finite description: continuation of each regular point follows from the implicit function theorem, and a hypothetical extra sequence would compactify to an additional product-structure point or a broken index-one trace. The exhaustion above excludes the first; the index and the absence of bubbles exclude the second. Consequently the chosen nice endpoint can be used by the signed move theory. [construct]

1.21 **The surface cut has no additional index-one disk.** For outer generators, both endpoints lie outside the interior of P. An embedded bigon or rectangle D therefore has no αβ corner in P. Pull the A and B edges back to D. They are embedded arcs, since A and B have no closed components, and are disjoint within each color. Cutting D along these arcs gives precisely the bigon/square pieces of the nice surface cellulation. A component of D∩P cannot contain a closed monochromatic frontier: an A/B circle is excluded by goodness, and a whole attaching-circle frontier would bound a coefficient-one nonnegative periodic domain. It cannot have an alternating αβ corner because every such corner of D is an endpoint generator outside P. Thus each component has all its attaching-circle edges of just one family: α with A, or β with B. It meets the corresponding A or B boundary. Equivalently, a mixed-family component would have a first switch between α and β on its boundary, which is an excluded αβ corner; switching through A/B instead reaches their vertex on ∂Σ, outside a counted domain. [construct]

1.22 This is exactly the geometric hypothesis of the already authored signed local disk transfer. Every component has a unique destination P_A or P_B, so D lifts uniquely to the cut diagram; the conformal parametrization lifts with it. Conversely a positive index-one disk upstairs pushes to a positive domain downstairs. Euler and endpoint measures are unchanged by the cut, so the pushed domain has index one and is among the exhausted bigons/rectangles. Its lift is the original disk. Nonnegative periodic domains upstairs push to nonnegative periodic domains downstairs, which also proves cut admissibility. No new upstairs disk or periodic class is being discarded. [construct]

1.23 The signed determinant conjugacy already constructed for these literal local lifts applies to every differential disk, rather than to a selected subset. On the zero-periodic homology-product branch, the previously constructed generator-sign adjustment therefore gives the full integer chain identification of the outer summand with the cut complex. This is the new differential exhaustion required by that identification; it does not provide the separate taut hierarchy or characteristic-product argument. [construct]

2.1 **Uniform relative winding, not a domain-dependent choice.** Let R be a compact surface with a nonempty prescribed set of zero-multiplicity test points. Write its curve set as Ξ∪Θ, with Ξ={ξ₁,…,ξ_n}. Assume circles τ_i are algebraically dual to Ξ, geometrically meeting their own ξ_i once, and that those intersections lie in a connected open U containing a zero test point and disjoint from Θ. All winding corridors avoid the protected boundary marks. Over Q let X and Y be the spans of Ξ and Θ, and let K be the kernel of X⊕Y→H₁(R,∂R;Q), with the zero test-point normalization. A relative periodic domain is uniquely determined by its boundary in K: the difference of two fillings is constant on R and its value is fixed to zero at the test point. [construct]

2.2 Put X₀=proj_X K. Row-reduce a basis so ζ_i=ξ_i+Σ_{j>m}a_ij ξ_j, i=1,…,m, and choose a relative domain Q_i filling ζ_i plus a Θ-chain. A domain with zero Ξ-boundary is zero on U: its boundary misses U, so its coefficient is constant there and vanishes at the test point. This kernel fact is the required control of arbitrarily large Θ-components; a bound depending only on the Ξ-coefficients would otherwise be invalid. [construct]

2.3 Wind simultaneously along τ_i and a parallel oppositely oriented copy. Along one turn the successive strip coefficients differ by the ξ_i boundary coefficient. Therefore at the two exit ports the coefficient on Q_i is increased and decreased by the number of turns. Put those ports in U outside all other winding annuli. The off-diagonal coefficients of Q_j at these ports, j≠i, remain unchanged. Choose finitely many turns so the positive and negative diagonal port coefficients each strictly dominate the sum of the absolute off-diagonal coefficients in that row. If D=Σc_i Q_i+D_Θ and |c_l| is maximal, the two l-ports have opposite signs: the l-term strictly dominates Σ_{i≠l}c_i Q_i, and D_Θ vanishes on U. Thus every relative periodic domain with nonzero Ξ-boundary has both signs after one fixed finite winding operation. Clearing denominators shows that this single operation applies to the integral lattice as well; no rational coefficient change is made in the Floer complex. [construct]

2.4 The winding is performed on all parallel strands of the same attaching family. Since τ_i has zero algebraic intersection with ξ_j for j≠i, the other strands return with their original net jump and can be kept on parallel tracks. Thus the family remains embedded and pairwise disjoint. Dual circles are constructed by cutting along the independent ξ-arcs and the protected meridional arc: the cut surface is connected, so join the two sides of each cut arc by a path in the complement, and close it through that arc. Move its crossing toward the boundary U without crossing Θ. This is the actual geometric dual construction used on the closure surfaces below. [construct]

2.5 **Positive fingers and good surface diagrams.** For a closed boundary component of a decomposing surface which is boundary-coherent in R(γ), choose a path from its exterior side to a suture. Push a short oriented boundary arc along that path and through the suture at a positive tangency. Attach the trace of this isotopy in a new boundary collar; collapsing the collar identifies the cut sutured manifold before and after the move. In the tangency chart the normal vector can become the positive surface normal, never its negative. Hence the outer vector-field condition is unchanged. For several parallel oriented curves use parallel tracks and the same positive tangency. For a homologically nonzero boundary curve, cut along it; both sides can be joined to sutures, and exactly one path orientation gives the positive tangency. Finitely many fingers make every boundary component meet both R₊ and R₋. This is a literal collar operation preserving the cut manifold and the outer set, not an arbitrary isotopy through negative tangencies. [construct]

2.6 For the resulting good surface, here is the relative Morse operation, without a fiber assumption. Remove narrow boundary fingers from S and round their ends so the remaining P has alternating crease arcs A,B ending on the true boundary. The removed strips on the A side run to R₊, and those on the B side to R₋. Set f₀=3/2 on P and prescribe its normal derivative so its gradient is never minus the oriented surface normal; in the strip collars extend the gradient to R₊ along A and to R₋ in negative time along B. Extend f₀ generically to the remaining compact manifold, fixing these collars and the boundary heights. Reorder its critical values by exchanging disjoint handle levels. The new middle surface is the old P surface with finitely many critical-handle tube feet. Clear those feet as follows. On each connected P component choose a rooted tree to A meeting every α arc, and push the α arcs along its corridors until each meets A. Do the same for β and B. For an α-belt tube foot connect it to B through the complement of the β arcs (every such component meets B), slide every crossed α disk over that belt, and move the B crease along the same corridor. This removes that foot. Use the color-reversed operation for β feet. All corridors are parallelized before the slides, so each attaching family remains disjoint. Repeat for the finite foot set; finally absorb the relative zero/one and two/three pairs by the rooted ball forests. The resulting balanced diagram carries the actual good S and its A/B creases. Cutting and doubling P literally cuts the prescribed gradient-thickened S. [construct]

2.7 To make it admissible while remaining adapted, choose a complete system of proper arcs in Σ\B relative to its true boundary, doubled into opposite parallel winding tracks. Every component of ∂(Σ\B) meets ∂Σ because B consists of arcs with boundary endpoints there. Intersection with these arcs detects every nonzero α-boundary combination in H₁(Σ\B); if a combination were zero there it would be zero in Σ, contradicting independence of the complete α disk system. Apply the port construction above in successive cut components, using a boundary zero region as U and making all Θ-only contributions zero on its ports. Every nonzero periodic domain has a nonzero α-boundary combination: if its α-boundary were zero, the balanced β-complement and its zero boundary coefficient would force the entire domain to be zero. Thus every nonzero periodic domain has both signs. All windings avoid B and carry P, so the result remains an actual good surface diagram. The completed permissible niceification then applies. [construct]

2.8 **All generators are outer for a separating balanced cut.** Suppose the connected good S separates M into balanced M₁ and M₂. In the actual cut/double diagram let P_A lie on the M₁ side and P_B on the M₂ side. Partition its attaching families into α¹,β¹ and α²,β². Balance gives |α^i|=|β^i|=d_i. Project back to the uncut surface. An α² circle misses P because its permitted copy P_A is on side one; a β¹ circle misses P because its permitted copy P_B is on side two. Their images cannot intersect outside P either, since the projection there is injective and the cut components are disjoint. Thus there are no α²β¹ intersection points. [construct]

2.9 An inner intersection, if present, has type α¹β². A generator is a perfect matching of α and β circles. The number of α¹β² matches must equal the number of α²β¹ matches, by subtracting the d₁ row and column counts. The latter is zero, so every generator avoids P. This is the exact cardinality argument; it does not claim that individual inner intersections are absent. It also does not use taut nonvanishing to assume that an outer generator exists: if no generator exists, both sides are the zero complex. [construct]

2.10 **Signed cut comparison with nonzero periodic domains.** Use the already constructed nice-disk exhaustion and literal local Fredholm conjugacies. They give a bijection of every differential disk with its cut lift. The remaining orientation question is not solved by asserting zero periodic domains. Choose the cut orientation character to be the pullback of the specified exterior character along the actual pushforward of periodic domains. The reference orientations are obtained by the same ordered real tangent caps on each copied intersection chart. For a loop of lifted rigid disks, the product of determinant-conjugacy ratios is the exterior character on its pushed domain minus the cut character on its original domain. It is zero by this pullback choice; the zero-domain sphere factor is complex oriented on both sides. A spanning forest of the finite generator graph now gives generator signs making every differential coefficient agree. Hence the full complex is integrally isomorphic to the cut complex with its specified induced class. This proves compatibility even if the cut has nonzero H₂. [construct]

2.11 For a separating open S, the homological pushforward is also concrete: H₂(S)=0, so the Mayer–Vietoris map H₂(M₁)⊕H₂(M₂)→H₂(M) is injective. The construction therefore retains all cut periodic classes; it has not quotiented out an invisible characteristic ambiguity. [construct]

2.12 **Actual tensor differential and the coefficient convention.** The cut diagram is a disjoint union of the two actual component diagrams. Its generators are pairs. A holomorphic disk splits into the two target components. Under a regular product choice, each nonconstant factor has positive index. An index-one disk consequently has precisely one nonconstant factor and a constant factor on the other side. Order the real determinant factors with side one first. Passing the odd differential operator past the orientation line of the first generator gives [construct]

2.13 ∂(x₁⊗x₂)=(∂₁x₁)⊗x₂+(−1)^|x₁| x₁⊗(∂₂x₂). [construct]

2.14 This supplies an actual integral chain isomorphism with the graded tensor product, including its Koszul sign. It yields Ni's homology tensor formula over every field. Over Z it instead yields the integral Künneth short exact sequence, with the Tor summands shifted by one parity; a plain homology tensor formula requires vanishing of those Tor groups. Finite free chain groups justify this directly by reducing each differential matrix to Smith normal form and decomposing into one-generator free blocks and two-generator multiplication-by-n blocks. Tensoring the blocks produces precisely the tensor and Tor terms. No torsion-freeness assumption is silently inserted. [construct]

2.15 For a horizontal surface, its class [R₊] gives the separating sides (the signed intersection of S with any closed loop is zero); its boundary and Euler equality make both cuts balanced. If S has several components, use the complementary-region adjacency graph and the same balanced matching counts, or apply the connected operation successively. In the usual two-piece horizontal case this is exactly Ni's horizontal chain operation. It uses neither a hierarchy nor a characteristic-product region. [construct] ∎
