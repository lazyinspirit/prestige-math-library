# Joint free/inherited neutral lift on the actual current exterior

2026-10-18. Research proof. This gives an actual geometry-to-quadratic-form estimate for all velocity columns of the current exterior Schur map, including inherited columns. It does not erase inherited pressure forcing or prove a branching mode.

## Exact region and incidence

Let F be a current fan inside its container C_r. Its root o lies on the coarse container base. Every other fan vertex lies strictly inside C_r: the fan sector lies strictly in the open inward half-plane, including its short root ramps. Recursive descendant replacements are strictly inside their respective reserve containers. Therefore a fan vertex different from o meets NO ancestor triangle. Its exterior star consists only of current-annulus triangles and, at designated attachment triples, triangles inside the assigned children. The root and the container-base endpoints remain inherited variables; no ancestor triangle is included in the exterior considered here.

Set Omega_ext=C_r\F, including all recursive child interiors. Its prescribed velocity boundary vertices are all fan-polygon vertices and all container-boundary vertices, with coincident vertices identified. Define the actual exterior star weight

    w_i= sum_(K subset Omega_ext, K contains i) |K|.

All triangles in these boundary stars are fixed once the template is fixed: descendants replace strictly interior child regions, never triangles incident to the child's own boundary nodes. In particular these weights and their strain matrices are independent of total descendant depth.

For boundary vectors g_i, form their P1 extension with every exterior INTERIOR nodal vector zero, then correct every cell mean by its MINI bubble, exactly as in equation (2) of the real-parameter child DtN note. Denote the resulting extension E_ext g. It is an actual conforming velocity on Omega_ext, has the prescribed trace and has ZERO mean on every exterior cell. Thus

    b(E_ext g,q)=0   for EVERY actual continuous P1 q,          (1)
    ||E_ext g||2^2 <= C sum_i w_i |g_i|^2.                    (2)

The universal constant in (2) follows from the reference P1/bubble Gram matrix and the uniformly bounded number of vertices per triangle. No vertex valence or inverse inequality enters it. Its strain energy is a quadratic form on this fixed finite set of boundary-adjacent triangles. Consequently, for fixed N,

    Q_lambda(g):=||E_ext g||lambda^2
       <= C sum_i w_i |g_i|^2 +lambda^(-1) a(E_ext g,E_ext g), (3)

with the last quadratic form independent of descendant depth. This is the precise bound before any small-star assumption.

## A simultaneous thin-collar refinement

The following optional strengthening is realizable by a fixed finite template refinement. It strengthens the old G1; it is not claimed that old G1 already covered every guard.

For fan vertices i let A_i be their incident FAN area. Fix epsilon>0. Assigned child reserve boxes already satisfy total area<=epsilon A_i/4 at their incident attachment vertices after choosing b0 sufficiently small. Keep these boxes and their three-node bases unchanged. On the remaining fan boundary, place a polygonal collar in the exterior. Its inward offset distances may be chosen separately near finitely many corners; take all distances so small that the sum of areas of collar triangles incident to vertex i is <=epsilon A_i/4. This is possible because incident area tends to zero with the offset distance, while every A_i is fixed and positive. The original fan boundary edges and vertices are not refined. Triangulate the collar edge strips and corner sectors using interior vertices only. Triangulate the remaining filler so that it meets the collar's inner polygon, not an original fan vertex. Hence those original stars receive no additional triangles.

Do the same at the outer container boundary, with total boundary-star area at each outer vertex <=epsilon |F|/4. Coarse base edges are kept whole. For a coarse edge of length L the adjacent triangle can have an arbitrarily small height; its area is L times that height divided by two. Near a corner use two such edge triangles and an arbitrarily small corner sector. Their other vertices are interior, so no new base vertex is needed. At the shared root apply both area budgets together.

All polygons are finite and have positive angles before triangulation. Offsets are positive and avoid the fixed child boxes. Thus the resulting finite conforming triangulation has a positive minimum angle, possibly very small but fixed as depth grows. The remaining inner-buffer filler is triangulated with background-to-background edge length O(ell), by the previously used collar/grid construction. The unrefined coarse base edges themselves retain their active endpoints. If refining their adjacent triangles creates additional long background-to-background edges, place those edges strictly inside the arbitrarily thin base collar, below the original base-strip line. Such edges are not in the inner buffer: reaching them from an attachment still requires the full mandatory fine-buffer crossing before they can be used. Other coarse edges lie in the outer transition. Thus the buffer-count argument is preserved, although the stronger old assertion that every long base-strip edge has an active endpoint would need this explicit replacement. Adding pressure macro-zone interfaces is compatible: subdivide those interfaces at O(ell) in the inner buffer and place the arbitrarily thin boundary collar before filling its inner side. Every already constructed piecewise affine pressure lift remains piecewise affine under a conforming refinement of its original triangles, with the same energy. At an unrefined boundary edge with two prescribed endpoints, use one arbitrarily thin triangle on that whole edge and small corner triangles at its endpoints; the remaining interior polygon meets only newly introduced interior vertices. This makes BOTH endpoint stars small without subdividing that boundary edge.

This construction gives simultaneously

    w_i <= epsilon A_i       on ALL fan vertices,
    w_j <= epsilon |F|       on outer inherited vertices j.   (4)

Area constants may be absorbed by choosing the stated offsets and reserve parameters smaller. At a fan attachment, whole child-box area bounds its fixed child-boundary star, regardless of descendant depth. The construction does not bound an ANCESTOR star by a child area: that ancestor star is outside Omega_ext and is absent from (2)--(4).

## The actual affine-background subtraction and joint norm

Let the actual full-container boundary pressure trace be f. Its Schur-orthogonal affine background is

    c_bg= -|C_r|^(-1) integral_boundary f n,

as proved in `exact-affine-background-mixed-dtn-quotient.md`. Its velocity boundary trace is the SAME constant c_bg at every vertex. Set g_intr,i=g_i-c_bg. The pressure trace also changes by +c_bg dot X. No background flux row is discarded.

Separate free fan vertices f from the retained root o and outer inherited vertices b. Equations (2)--(4) give the JOINT estimate

    ||E_ext g_intr||2^2
      <= C epsilon [ sum_(i in f) A_i |g_i-c_bg|^2
                 + |F| |a_o-c_bg|^2
                 + |F| sum_(j in b) |g_j-c_bg|^2 ].           (5)

The root's fan area is <=|F|. The finite outer boundary list has fixed length; coincident vertices are counted once. The free part in brackets is uniformly equivalent to its reference-polynomial fan mass norm. Thus (5) controls all free and inherited velocity columns in one quadratic form; it does not presuppose that inherited deviations are bounded by the root deviation.

For every fixed template, increase lambda until the fixed strain quadratic form in (3) is at most the right side of (5). Such a finite threshold exists because all weights A_i and |F| are positive and the boundary trace space is finite-dimensional. After scaling, write it as lambda r^2>=nu D_(N,epsilon)^2. This threshold is independent of descendant depth. Then (5) holds for Q_lambda with an adjusted universal constant.

## Consequences for the full coupled exterior blocks

For the actual homogeneous exterior mixed solve write its boundary Schur matrix as

    J=[ A  H ; H^T  -E ],

velocity first and pressure second. Let P be the orthogonal projection, in the actual lambda-normalized strain inner product, onto its zero-boundary weak kernel. The exact neutral-lift decompositions are

    w_g=(I-P)E_ext g,
    w_p in range(P),
    A(g,g)=||w_g||lambda^2,
    E(p,p)=||w_p||lambda^2,
    H(g,p)=(E_ext g,w_p)_lambda.

Therefore

    0<=A<=Q_lambda,
    |H(g,p)|^2 <= [Q_lambda(g)-A(g,g)] E(p,p).          (6)

This proves positive semidefiniteness of the Gram block [Q_lambda-A,H;H^T,E]. It controls inherited velocity crossloads as well as free ones. For example |A(g_f,g_b)|<=sqrt(Q(g_f)Q(g_b)), and the pressure crossload generated by g_b has E-dual norm at most sqrt(Q(g_b)). The same statements include the retained root column. Arbitrarily large pressure-only impedance E does not invalidate (6).

There remains a distinct inherited PRESSURE term. A prescribed non-affine intrinsic pressure trace p_b enters through E_fb p_b and its H crossloads. Neither (5) nor (6) makes it small. Subtracting its mean affine gradient removes only two pressure directions, not every boundary pressure trace. Thus this proof supplies the joint Q control required for a full-state analysis, while explicitly retaining the still unbounded or separately controlled inherited pressure forcing. It does not establish that the actual recursive state lies in an invariant set, or that its smooth-source observed cross-entry grows.
