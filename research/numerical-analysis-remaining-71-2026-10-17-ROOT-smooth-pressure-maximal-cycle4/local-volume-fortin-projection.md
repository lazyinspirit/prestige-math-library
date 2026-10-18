# A local volume-average MINI Fortin projection

This auxiliary research construction concerns the actual MINI space on the original matching shape-regular meshes. It is a different operator from the existing face-average Fortin map. It does not assert H1 stability of either orthogonal mass projector and does not complete the instantaneous pressure proof.

## Construction

For each interior vertex a choose an incident simplex K_a. Its local MINI scalar basis consists of its d+1 barycentric coordinates and its interior bubble. These polynomials are linearly independent: a linear combination vanishing identically first has zero barycentric coefficients by its values at the vertices, then zero bubble coefficient. Therefore their finite Gram matrix is positive definite.

Let psi_a be the local L2 dual polynomial which extracts the barycentric coefficient belonging to a and annihilates the remaining barycentric functions and the bubble. Equivalently, for the barycentric functions lambda_b of K_a and its bubble b_K,

    integral_(K_a) psi_a lambda_b = delta_ab,
    integral_(K_a) psi_a b_K = 0.

Reference-cell affine scaling gives ||psi_a||L2<=C |K_a|^(-1/2) and ||psi_a||L1<=C, with constants depending only on d and the bubble normalization. Put ell_a(v)=integral_(K_a) psi_a v. For boundary vertices put ell_a(v)=0. Define

    J_h v = sum_(a interior) ell_a(v) lambda_a,
    F_h v = J_h v + sum_K b_K c_K(v),
    c_K(v) = [integral_K(v-J_hv)]/[integral_K b_K].

The formula is componentwise for velocities. It is defined on all L2; its image is in the actual no-slip MINI space V_h. Every operation is a finite-dimensional integral and finite local choice, with no point evaluation of the input.

## Local stability and approximation

Let omega_K include K and the chosen cells K_a of its vertices, enlarged by at most one vertex-star layer when needed for a boundary Poincare inequality. Matching shape regularity gives comparable diameters, uniformly bounded patch cardinality and overlap, and a connected patch with uniformly bounded facet chains. Thus, by the dual-polynomial scaling and the P1 basis scaling,

    ||J_h v||L2(K) <= C ||v||L2(omega_K),
    ||grad J_h v||L2(K) <= C h_K^(-1)||v||L2(omega_K).

For an interior patch, J_h reproduces constants there: ell_a(1)=1 follows by summing its duality relations over the barycentric basis. Subtract the patch average c, use grad J_h c=0 on K, and apply patch Poincare to obtain

    ||v-J_hv||L2(K) <= C h_K ||grad v||L2(omega_K),
    ||grad J_hv||L2(K) <= C ||grad v||L2(omega_K).

For a patch meeting a boundary vertex of K, use instead the zero-trace patch Poincare inequality. The enlarged patch contains a boundary facet, and v in H1_0 has zero trace there. Thus ||v||L2(omega_K)<=C h_K||grad v||L2(omega_K), which supplies the same two conclusions even though boundary nodal coefficients were set to zero. These Poincare facts can be proved by mapping each simplex to its reference simplex and propagating averages over the bounded facet chains; they are the same local patch geometry used by the existing boundary-preserving interpolation supplier. Apply the construction componentwise.

Bubble scaling and Cauchy--Schwarz give

    ||b_K c_K(v)||L2(K) <= C ||v-J_hv||L2(K),
    ||grad(b_K c_K(v))||L2(K)
         <= C h_K^(-1)||v-J_hv||L2(K).

Consequently summing with bounded patch overlap proves both bounds

    ||F_h v||2 <= C ||v||2,           v in L2,
    ||F_h v||V <= C ||v||V,           v in H1_0,

as well as ||v-F_hv||2<=C h||v||V for v in H1_0. The L2 bound uses the first local J_h stability bound, not its gradient estimate. The V bound uses the local first-order approximation and hence no smallest-cell inverse estimate.

## Projection and Fortin properties

For v_h in V_h, each ell_a(v_h) is exactly its nodal coefficient, since its restriction to K_a is a local MINI polynomial and psi_a annihilates the bubble. Thus J_hv_h is exactly the global nodal part. The remaining difference on each K is its bubble coefficient times b_K, so the cell-mean correction recovers that coefficient. Hence F_hv_h=v_h: F_h is a projection onto V_h.

For every v in L2, the actual formula gives integral_K F_hv=integral_K v. Since grad q_h is constant on each cell for continuous P1 q_h,

    (F_hv,grad q_h)=(v,grad q_h).

For v in H1_0 this is exactly b(F_hv,q_h)=b(v,q_h). In particular F_h maps the continuous weak Q_h kernel into Z_h. Its L2-domain formula also preserves the corresponding gradient pairings without requiring a distributional divergence or an input boundary trace.

## Scope and use

This gives an L2/H1-stable local Fortin projection for actual MINI on every allowed mesh, and may help construct parameter-robust mixed Brinkman estimates. It is not the orthogonal projector R_h or P_Zh. A bounded oblique projection in two endpoint norms does not imply endpoint stability of the orthogonal projection; for example H=R2, ||v||V²=L v1²+v2² and range span(1,1) admit the uniformly H/V-bounded oblique projection (v1,v2)->(v1,v1), whereas the Euclidean orthogonal projector has unbounded V norm as L grows. Therefore no false orthogonal-projector conclusion is inferred from this construction.

The original pressure-duality boundary kernel remains unestimated. No canonical content, hashes, manifests, tests or gates were changed.

A stronger abstract diagnostic explains why even a Fortin projection stable in both endpoint norms does not, by itself, settle pressure admissibility. Let H=R3 with Euclidean mass, let

    ||v||V^2=L(v1+v2-v3)^2+v2^2+v3^2,       L>=1,
    V_h=span(e1,e2),   Q_h=R,   b(v,q)=v2 q.

The Vh stiffness matrix is [[L,L],[L,L+1]]. Its coercivity/continuity constants in its own V norm are one, its Poincare bound is uniform, and the b inf-sup constant is one. The map

    F(v1,v2,v3)=(v1-v3,v2,0)

is a projection onto V_h, preserves b, has H operator norm at most sqrt(2), and has V operator norm at most one. Thus it has exactly the two abstract endpoint bounds discussed above. Nevertheless r=e1+e3 has ||r||V=1, while its mass projection onto Z_h=span(e1) is e1. Its homogeneous kernel evolution is y(t)=exp(-Lt)e1. The full mixed equation tested against e2 gives pressure p(t)=-L exp(-Lt), so ||p||L^(4/3)(0,1) is comparable to L^(1/4). Rescaling r by h^2 even satisfies the isolated amplitude bounds ||r||H=O(h^2), ||r||V=O(h), but still cannot uniformly force an O(h) pressure bound when L is arbitrary.

This is not a MINI or geometric counterexample, and it does not satisfy the actual Fortin cell moments or actual smooth-solenoidal source construction. Its role is only to exclude an inference from the two Fortin norm bounds, uniform inf-sup and mass amplitude alone. The actual finite-element boundary/cell structure remains indispensable.
