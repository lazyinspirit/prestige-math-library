# Local transverse repair on an aligned toothed fan

Research only, 2026-10-18. This is a local actual-space approximation lemma. It does not prove persistence of deep constrained nodal coefficients or an instantaneous pressure counterexample. Geometry parameters are fixed before recursion depth varies. No canonical/control/hash/readiness changes or tests.

## Continuous construction

Use coordinates (x,y), with the intended transverse velocity vertical. Let Omega be the polygonal fan consisting of triangles from the origin to a chain of alternating-radius vertices, radii R/2 and R, with successive ray angles in an interval of width omega around a central direction making angle c delta with vertical. Here |c| is bounded above and below, 0<omega<<delta<<1, and consecutive angular increments are comparable to omega/N. The first and last radial segments close the fan. This is the union of its main fan triangles; guard triangles can be omitted from Omega.

The following horizontal-slice facts have constants independent of N:

    |Omega| comparable to omega R^2,
    L(y):=|{x:(x,y) in Omega}| <= C omega y,
    |L'(y)| <= C omega,
    |partial_y T(x,y)| <= C delta,
    T(x,y):=integral_(-infinity)^x 1_Omega(s,y) ds.                 (1)

These assertions hold almost everywhere and T is continuous piecewise affine. Here is a direct check of the potentially delicate derivative bounds. Each long side has y-component of length comparable to R, since its endpoint radii differ by R/2 and all angles are small. Its horizontal intersection therefore has affine form x=s_j y+t_j, with |s_j|<=C delta. The formulas for a side joining radii R/2 and R show that slopes of consecutive sides differ by at most C omega/N; the endpoint radial sides have the same bound relative to their neighbors. Thus the total variation of the ordered list of side slopes is at most C omega. At a regular height, the intersection intervals have alternating left/right endpoints in this same angular order. A complete interval's width derivative is a difference of endpoint slopes. Summing any disjoint pairs is bounded by the total slope variation C omega. This proves the L' bound. The cumulative width T has a collection of complete intervals followed by at most one partial interval; the latter contributes one endpoint slope of magnitude at most C delta, proving the last bound. The width bound follows directly from the angular aperture. Topology changes occur only at finitely many vertex heights and do not affect the almost-everywhere bounds.

Assume the actual reserve container contains a wedge

    I={0<y<C_R R, |x-k y|<c_1 delta y},                         (2)

containing Omega, with k the fan's central slope and fixed constants chosen so that the wedge lies on the correct exterior side of the parent tooth line. For the two aligned direction bands, their slope separation is comparable to delta while omega<<delta, so such a wedge fits in an oblique half-container with fixed aspect ratio depending on delta. The wedge is allowed to meet the parent line only at the attachment/root. This is the relevant actual geometry condition; a container too narrow to contain (2) would not support the construction.

Let H(x,y)=H_0((x-k y)/(c_1 delta y)), where H_0 is smooth, zero on the left side of the wedge, and one on its right side. Extend H in those constant ways outside the wedge. Choose its transition so that all slice endpoints of Omega lie strictly between those sides. Define

    psi(x,y)=A[T(x,y)-L(y)H(x,y)].                              (3)

It vanishes outside the wedge and above Omega's top. It tends to zero at the root, since |psi|<=C|A|omega y. Formula (1), |partial_x H|<=C/(delta y), and |partial_y H|<=C/y show that psi is H1, extended by zero, and

    |partial_x psi-A 1_Omega|<=C|A|omega/delta,
    |partial_y psi|<=C|A|delta.                               (4)

There is no singularity at y=0: the factor L(y)<=C omega y cancels the 1/y bounds. The piecewise-affine T and L match continuously at their finitely many break heights. Thus extension by zero is valid and psi has zero trace on the containing reserve container.

Put v=(-partial_y psi,partial_x psi), so div v=0 exactly. The support wedge has area O(delta R^2). Therefore

    ||v-A e_y 1_Omega||2^2
       <=C|A|^2 R^2[delta^3+omega^2/delta].                    (5)

Since ||A e_y1_Omega||2^2 is comparable to |A|^2 omega R^2, choose omega=c_2 delta^2 with any fixed positive c_2. Then

    ||v-A e_y1_Omega||2
       <=C sqrt(delta)||A e_y1_Omega||2.                      (6)

Upward/downward and left/right variants follow by the corresponding reflections. No perimeter estimate proportional to N was used; the paired slope variation in (1) is essential.

## Transfer to the actual weak-divergence cell-mean space

Let the actual matching triangulation resolve Omega as a union of triangles; arbitrary recursive refinement and filler inside the containing reserve container are permitted. Let P0 be cell averaging. Let I_CR psi be the Crouzeix--Raviart interpolant defined by edge averages. The divergence theorem on each triangle gives the exact identity

    grad(I_CR psi)|K=P0(grad psi)|K.                           (7)

No H1 stability or inverse estimate is needed for (7). The H1 regularity of psi supplies the edge traces. Since psi has zero trace on the domain boundary, I_CR psi has zero averages on boundary edges. The piecewise constant field

    m_h=(-partial_y I_CR psi,partial_x I_CR psi)

satisfies

    sum_K |K| m_h|K dot grad q_h|K=0

for every continuous P1 q_h: integrate by parts cellwise; its tangential derivative is constant on an edge, and the CR edge averages match, while boundary averages vanish. Hence m_h belongs to the actual cell-mean space W=ker G^T. It is supported on cells intersecting the support of psi, and therefore inside the reserve container if its boundary is resolved by the mesh.

Because A e_y1_Omega is already piecewise constant, (7) and L2 contraction of cell averaging yield

    ||m_h-A e_y1_Omega||2
       <=||v-A e_y1_Omega||2.                                (8)

Thus (6) is an actual discrete W approximation with constants independent of the smallest mesh size, N, and recursion depth, subject to the fixed geometry conditions above. It applies to a single coherent constant transverse cell field on a fan.

## Exact scope

The repaired field includes return flow in the surrounding wedge. It does not stay inside the main fan alone. Contributions of ancestor return flows can reach descendant cells; (8) does not control those contributions relative to exponentially small descendant coefficients. The actual unknown S a need not be constant on each fan, and the scalar pressure-gradient field need not be constant there either. Consequently this lemma is not a depth-weighted cone estimate and does not by itself preserve the full-mass bad subtree. It supplies the local coherent-fan interface for such an argument, with the scalar weak-divergence constraint enforced exactly.
