# Independent geometry audit of the actual toothed-fan candidate

2026-10-18. Research only. Fully read `research/N-ROOT-mini-fractional-projection-cycle4/actual-toothed-fan-mass-counterexample-candidate.md`, including the complete proposed finite triangulation in §7. This audit concerns actual geometry, G1/G2, and endpoint/path classification; it does not duplicate numerical recertification of the condensed mass algebra or certify a constrained-projector/pressure counterexample.

## Result

I find the proposed finite-template geometric construction viable, with the explicit strip-chain and active-vertex choices below. No geometric obstruction was detected. The local mass-star bounds and additive background-only ancestor crossings can be justified from that construction, rather than inferred from a picture. This receipt does not assert that the independent algebra review is finished.

## Finite triangulation and fixed shape bound

The elementary collar/grid construction in §7.1 works for each fixed polygon with its fixed finite boundary subdivision: choose a positive collar width below every nonincident-edge separation and local corner threshold. All inserted boundary nodes occur on the *inner* collar, so no prescribed original boundary edge is subdivided. Grid-cell clipping is finite and each component can be triangulated, with bridges if it has holes, using consistent induced edge vertices. Each collar piece has diameter O(ell), giving an absolute O(ell) triangle-diameter bound even if its angles are very small. A fixed finite planar triangulation with nondegenerate triangles has a positive minimum angle. Recursive similarity copies preserve that minimum. The fact that N is extremely large is harmless once N, b0, sigma, and all collar choices are fixed before the depth varies.

Centroid splitting of a filler triangle with three active vertices introduces a background vertex, preserves its diameter bound, and leaves only two-active filler triangles. Make the remaining exterior completion use background vertices except the fan root. This is possible because the other fan active vertices lie inside the inner region; it introduces no edges to another ancestor's active family.

## Base strips and root protection

The low strip chains can be chosen explicitly at y=eta ell from x=+-4 toward the corresponding short fan endpoint, finishing within an O(ell) neighborhood of the root. Subdivide that chain at spacing <=ell. Choose its angular order monotonically as seen from the root; then the polygon is star-shaped and coning from the root is a valid triangulation. All chain vertices have y=O(ell). Every long strip edge has the active root as endpoint, while every edge joining two background vertices is O(ell).

The child center is a midpoint of an unrefined child base lying on a straight parent fan side. In a sufficiently small ball around that center, the parent fan occupies one halfplane and the child container occupies the opposite halfplane. Thus this center is interior to the union of parent fan and child container. It is **not** accessible to the parent's exterior filler. All of its nonparent incident triangles belong to the child container, whose total area is O(sigma^2 ell^2). In particular the generic parent filler diameter O(ell) does not create an O(ell^2) nonparent star at this center.

The parent fan area at the center is >=c sigma ell/N; hence its nonparent/parent ratio is O(sigma b0). At a child base endpoint, the parent subdivision has an adjacent ordinary interval comparable to ell (the neighboring short base interval is not the only incident interval), so its parent star area is >=c ell/N. Its exterior filler star lies in a ball of radius C ell; therefore its nonparent area is O(ell^2), giving ratio O(b0). These are exactly the intended G1 bounds. Choosing sigma fixed and then b0 small suffices; an additional b0/sigma restriction is not needed when the center protection is respected.

## Actual background crossings

Within the parent inner polygon, all background-to-background filler edges have length <=C ell. The long edges in its fan join active vertices. Its strip long edges have an active root endpoint and cannot be used by a background-only walk. A descendant coarse edge has length at most its container diameter, <=C sigma ell at the first descendant scale and smaller below that scale. Thus descendants cannot provide a long background jump through a parent buffer.

The child containers are a fixed positive Euclidean distance from the parent inner boundary and from the y=O(ell) root strip. A background-only path from a child container to the outer transition must cross that distance with O(ell)-length edges. A path ending at the parent root also crosses it, since every background neighbor of that root belongs to the low strip chains and has y=O(ell). It cannot use a fan radial edge as a final shortcut because that edge has active endpoints. Hence each crossing uses >=c/ell-O(1) background steps. Since ell is comparable to b0/N, N can make the count K as large as required.

For nested containers, these crossing regions occupy disjoint spatial shells: to pass from the selected descendant container through successive ancestor transition boundaries, a walk must leave each ancestor's inner region in turn. One cannot count the same edge toward two shells. This justifies addition of K per further ancestor. Background backtracking only increases the length. Exiting through an active base vertex would stop the Schur walk, so it cannot bypass a shell in a background-only walk.

## Endpoint classification used by the cone bound

A homogeneous row owned by fan F is an outer vertex of F, and is inside F's container. A vertex that is also a child root is still owned as an outer vertex by F. The exceptional overall root row is not among these rows. Thus every relevant walk starts locally in the stated container or its descendant, rather than outside the first barrier.

Endpoints in F and descendants have magnitude <=A, where A is F's root magnitude. Immediate-parent outer vertices can be reached without a K factor via the shared base neighborhood; their magnitude is <=L A/qminus. This is precisely the immediate-parent exception in §4, and must not be suppressed. The immediate ancestor center is different: it lies at the far root strip and requires one K crossing. Reaching another generation's outer family requires one further K crossing; reaching that generation's center requires the corresponding additional root-strip crossing. These give respectively the exponents K(k-1)+2 for outer-family endpoints and Kk for ancestor-center endpoints in the candidate. The two active-to-background/ background-to-active endpoint edges account for the baseline length two.

The local and immediate-parent families may be combined by the larger amplitude bound L/qminus because their total walk mass is jointly bounded, rather than separately summed. More distant outer-family classes and ancestor-center classes can then be overcounted by their positive geometric tails. This is the structural justification for the cone-weighted path estimate; no favorable signs of walks or parity of cycles are needed.

## Limits of this receipt

This verifies viability of G1/G2 and the stated endpoint/path organization with the specified choices. It is not a computer-generated mesh certificate, which is unnecessary for the finite-template existence argument, and it does not independently recertify the condensed-matrix constants, ratio fixed-point algebra, or final operator-norm divergence. The proposed construction concerns the full no-slip L2 projection only. It gives no counterexample to constrained P_Z or the original smooth pressure assertion.
