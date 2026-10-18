# Exact gradient range of the local-volume Fortin adjoint

Research, 2026-10-18. This is a new exact spatial/topological result for the actual operator in `research/numerical-analysis-remaining-71-2026-10-17-ROOT-smooth-pressure-maximal-cycle4/local-volume-fortin-projection.md`. No canonical edits. It does not assert a quantitative negative-curl estimate or close the pressure error.

## Claim

Let F be that actual componentwise MINI projection, with one incident cell K_a selected for each interior vertex a, and no nodal functional at boundary vertices. On a finite matching simplicial mesh in dimensions d=2,3,

    range(F*) intersect {grad phi: phi in H1(D)}
      = {grad q_h: q_h continuous piecewise affine}.       (1)

Constants in the scalar potential are immaterial. This is an exact intersection of subspaces, with no mesh regularity constant needed for the topological argument. The equal inclusion from right to left follows from the exact cell-mean preservation of F. The nontrivial inclusion is proved below.

## 1. Actual local adjoint formula

Write beta_K=integral_K b_K and let lambda_a be a global nodal hat. Reorder the defining formula for F as

    Fv = sum_K b_K beta_K^{-1} integral_K v
          + sum_(a interior) L_a ell_a(v),
    L_a = lambda_a - sum_(K incident to a)
                   b_K beta_K^{-1} integral_K lambda_a,
    ell_a(v)=integral_(K_a) psi_a v.

Therefore for every g in L2,

    (F*g)|K = c_K + sum_(a:K_a=K) d_a psi_a,
    c_K=beta_K^{-1} integral_K b_K g,
    d_a=(g,L_a).                                        (2)

The coefficients c_K and d_a are vectors. Crucially each interior vertex a contributes its polynomial psi_a to exactly ONE cell K_a.

On a simplex, the local dual polynomial has the form

    psi_a = alpha_K lambda_a + beta'_K + gamma_K b_K,     (3)

where alpha_K and gamma_K are nonzero and are the same for all local vertex indices, with the usual affine scaling. Indeed permutation symmetry gives equal off-diagonal barycentric coefficients and equal bubble coefficients in the inverse local Gram matrix. Thus the barycentric part is alpha lambda_a plus a constant. The difference psi_a-psi_b must extract the difference of the two nodal coefficients, so alpha is nonzero. If gamma were zero, the sum of all d+1 local dual polynomials would be constant. Its bubble moment is zero, so this constant would vanish, contrary to its barycentric moments (each is one). Hence gamma is nonzero.

## 2. Curl freedom removes the actual bubble coefficient

Suppose F*g=grad phi with phi in H1. On a cell, (2)--(3) is affine plus

    gamma_K b_K e_K,    e_K=sum_(a:K_a=K) d_a.

Its distributional curl vanishes inside that cell. The affine part has constant curl; the degree-d homogeneous part of the bubble curl must therefore vanish. For a nonzero vector e_K this would imply that the top homogeneous part of b_K depends on only the linear variable e_K dot x. A homogeneous polynomial of degree d+1 with that property is a multiple of (e_K dot x)^(d+1). But the top homogeneous part of the simplex bubble is a product of d+1 distinct linear factors (the d coordinate barycentric linear parts and the negative of their sum). In d=2,3 these factors are distinct. This is impossible. Thus

    e_K=0.                                             (4)

The same argument uses scalar curl in dimension two and vector curl in dimension three. The remaining local gradient is affine, so phi|K is a polynomial of degree at most two. Since phi is H1, the resulting piecewise quadratic potential has matching traces on all interior faces.

Call K nonaffine if its potential has a nonzero quadratic part. Equation (4) implies that a nonaffine K needs at least two selected vertices a with K_a=K and nonzero d_a. Distinct cells cannot use the same selected vertex.

## 3. Finite actual selection topology excludes quadratic components

First, a cell with an exterior codimension-one face has at most one interior vertex. Only interior vertices have selected nodal duals in the actual no-slip construction, so such a cell has at most one selected dual and is affine by (4). Thus no nonaffine cell has an exterior face.

Take any face-connected component of nonaffine cells, with M cells and V distinct vertices. A face-connected ordering of its cells starts with d+1 vertices; each later cell shares a full face with earlier cells and introduces at most one new vertex. Consequently

    V <= M+d.                                         (5)

Every nonaffine cell uses at least two selected vertices, and each vertex selects at most one cell. Hence

    2M <= V <= M+d,    so M<=d.                         (6)

Suppose one cell uses exactly two nonzero selected coefficients. By (4) they are opposite vectors, so its affine gradient has nonconstant part

    alpha_K d_a (lambda_a-lambda_b).

Curl freedom forces d_a parallel to grad(lambda_a-lambda_b). Thus the potential's quadratic Hessian is a nonzero scalar multiple of

    grad(lambda_a-lambda_b) tensor grad(lambda_a-lambda_b).

The affine function lambda_a-lambda_b is nonconstant on EVERY simplex face in d=2,3. Therefore the potential trace is nonaffine on every face. Every one of its d+1 faces must consequently meet another nonaffine cell: it cannot meet an affine cell because traces match, and the boundary case was excluded above.

Every two-selection cell would require d+1 distinct neighbors in a component of at most d cells, contradicting (6). Thus every cell uses at least three selections. Then 3M<=M+d, so M<=1 in d=2,3. A single quadratic cell with affine traces on all its faces is affine: its quadratic trace curvatures vanish on all simplex edges, and those edge directions determine its Hessian. This excludes every nonaffine component.

This proves (1). The boundary argument is essential: a construction with boundary nodal duals would not have the same conclusion from this proof.

## Quantitative limit

Identity (1) proves an exact kernel characterization. It supplies no lower bound on the angle between range(F*) and continuous gradients, uniformly in grading. In particular it does not prove that small negative curl of F*v forces v close to the actual mass-gradient range, nor any estimate for weighted cell oscillations of W_lambda-W_h. Such a quantitative bound remains separate. The already exact identity F*W_hq=grad(phi_h) is consistent with (1), but (1) does not improve its norms by itself.

## Further quantitative actual-space consequence: oscillation versus curl residual

There is a grading-independent local strong-residual estimate. Let w belong to range(F*). Write m_K w for its cell mean, curl for scalar/vector curl in dimensions two/three, and [w]_t for the interior tangential jump (in two dimensions the tangential component; in three dimensions cross product with a unit face normal). Then

    sum_K ||w-m_Kw||_{2,K}^2
      <= C [sum_K h_K^2 ||curl w||_{2,K}^2
                + sum_(F interior) h_F ||[w]_t||_{2,F}^2].   (7)

C depends on the fixed shape bound and dimension, not grading. Exterior tangential traces are NOT included. This estimate controls oscillation of F*v, not oscillation of v; it therefore does not itself give the missing weighted pressure observation.

Proof: call a cell eligible when it receives at least two interior-vertex selections, independently of coefficient values. Every face-connected eligible component has M<=d by the same count 2M<=V<=M+d. Every eligible component therefore contains at most d cells. All its neighboring ineligible cells receive at most one selection. On one such cell, the local polynomial has the form constant+d_a psi_a. The degree-d part of its curl is injective in d_a by the bubble argument. Finite-dimensional reference-cell scaling gives

    ||w-m_Kw||_{2,K} <= C h_K ||curl w||_{2,K}             (8)

on ineligible cells. Zero-selection cells are constant and satisfy this trivially.

In fact prove the stronger version of (7) with every tangential jump replaced by its face oscillation [w]_t-m_F([w]_t). This eliminates all unrestricted cell constants exactly.

For each eligible component include all face neighbors, and consider all its cellwise polynomial fields of the form (2), modulo cell constants. This is a finite-dimensional space on a uniformly bounded number of face-connected cells. Take the seminorm consisting of scaled volume curl residuals on this patch and scaled oscillatory tangential jumps on faces incident to the component; take as target seminorm the cell oscillation on the entire patch (and hence also bound the component target). The residual's kernel has zero oscillation on neighboring ineligible cells by (8). On component cells it has zero bubble coefficients and curlfree affine parts. Tangential-jump oscillation zero across a face forces the quadratic tangential trace curvatures of their local quadratic potentials to agree. Any cell with a nonzero quadratic Hessian again requires at least two nonzero selected coefficients. Its face-connected nonaffine subcomponent obeys the same vertex count. A two-selection cell has nonzero quadratic curvature on every face and hence requires d+1 nonaffine neighbors, impossible when M<=d. All remaining cells would need at least three selections, forcing a singleton, whose traces have zero curvature on every face and hence whose Hessian is zero. No exterior face creates a loophole: eligible cells cannot have exterior facets because those cells have at most one interior vertex. Thus the residual kernel has zero target seminorm.

Finite-dimensional quotient norm equivalence proves the patch estimate. Its constant is uniform: there are finitely many incidence/selection patterns for <=d eligible cells and their boundedly many neighbors; after scaling by one cell diameter, all cell sizes are comparable by bounded face chains and the fixed shape bound. Their affine maps lie in a compact family with determinant bounded away from zero. The kernel argument above applies throughout that family (it only uses simplex nondegeneracy and selection incidence), so the relevant quotient singular value stays positive. Cell constants lie in the kernel of both the oscillatory residual and the target, so quotient them out first. On the remaining fixed finite-dimensional polynomial-coefficient space the target is a genuine norm. This removes any issue of large cell constants cancelling small nonconstant residuals. Finally sum the bounded-overlap patch estimates and (8). This proves (7) without a global inverse estimate or h_min.

A separate localization/efficiency argument could compare the right side of (7) to a global negative curl norm. That comparison has not been added to this note; (7) is the strong polynomial-residual statement proved here. Even a successful negative-curl comparison would still concern F*v, and transferring it to the actual lift difference requires additional analysis.

## Negative-curl efficiency, with the actual polynomial residual

The residual comparison mentioned above can be proved directly. Let C(w) be the distributional curl of a broken fixed-degree polynomial field, as a functional on H1_0 scalar tests in dimension two and H1_0 vector tests in dimension three. Its integration-by-parts expression consists of the cell curls r_K and the oriented interior tangential jumps j_F. With a fixed choice of compatible signs,

    <C(w),z> = sum_K (r_K,z)_K + sum_(F interior) (j_F,z)_F.

Then

    [sum_K h_K^2 ||r_K||_K^2
        +sum_(F interior) h_F ||j_F||_F^2]^{1/2}
       <= C ||C(w)||_{H^{-1}(D)}.                       (9)

Here H^{-1} is the dual of H1_0 with its full H1 norm (equivalently gradient norm by domain Poincare). A proof avoiding any global inverse is as follows.

For the cell part, test with z_K=h_K^2 b_K r_K, componentwise and extended by zero. Polynomial weighted-mass norm equivalence gives (r_K,z_K)>=c h_K^2||r_K||^2; reference scaling gives ||z_K||H1<=C h_K||r_K||, with a harmless fixed-domain factor for the L2 part. Sum these cell tests. Their supports are disjoint and the face terms vanish. Thus the cell residual norm is bounded by C||C(w)||H^{-1}.

For the face part, let b_F be the standard nonnegative face bubble. Extend j_F polynomially to the two-cell face patch, multiply by the corresponding volume polynomials whose common trace is b_F j_F and which vanish on all other patch faces, and scale the result by h_F. This gives an H1_0 face-patch function z_F with

    (j_F,z_F)_F >= c h_F ||j_F||_F^2,
    ||z_F||H1 <= C h_F^{1/2}||j_F||_F,
    ||z_F||L2 <= C h_F^{3/2}||j_F||_F.

These are fixed-degree reference-simplex bounds; neighboring cell diameters are comparable to h_F by shape regularity. The trace vanishes on every other mesh face, so no other face residual appears. Summing the z_F gives uniformly bounded overlap. Pairing with C(w), the cell terms are bounded by the already controlled cell residual norm times the face residual norm, using the L2 bound on z_F. This proves (9). The construction applies componentwise in three dimensions and to scalar tests in two dimensions.

Combining (7), its stronger oscillatory-jump proof, and (9) yields the proved bound

    ||(I-P0)F*v||_2 <= C ||curl(F*v)||H^{-1},    v in L2. (10)

Since distributional curl annihilates every H1 gradient,

    ||curl(F*v)||H^{-1}
       <= C inf_(phi in H1) ||F*v-grad phi||_2.          (11)

This is a quantitative actual-space statement about the adjoint reconstruction: its cell oscillation is bounded by its distance to continuous gradients. It still does not control oscillation of the original v. In particular the exact identity F*W_hq=grad(phi_h) implies zero adjoint oscillation, as already known from exact cell-mean preservation; it does not imply zero oscillation of W_hq. Thus no original pressure conclusion or uniform transfer angle is being inferred from (10)--(11).
