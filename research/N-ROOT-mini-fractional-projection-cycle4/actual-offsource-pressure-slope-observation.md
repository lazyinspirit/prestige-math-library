# Exact off-source MINI mass-pressure slope observation

2026-10-18. This is an actual local identity and estimate, independent of the toothed geometry. It does not establish the original evolutionary pressure observation.

Let z=P_Zh u and let phi_h be its mass-Schur multiplier, with canonical sign convention

    (z,v_h)+(grad phi_h,v_h)=(u,v_h)    for all full MINI v_h.

On a triangle K disjoint from the support of u, test with b_K e for arbitrary constant vector e. Since grad phi_h is constant on K,

    grad phi_h|K = - [integral_K b_K z]/[integral_K b_K].       (1)

For b=27 lambda_1 lambda_2 lambda_3,

    integral_K b=(9/20)|K|,
    integral_K b^2=(81/280)|K|.

Consequently the exact local observation bound is

    ||grad phi_h||L2(K) <= sqrt(10/7) ||z||L2(K).              (2)

No shape factor is needed in (2): it follows directly from Cauchy-Schwarz and affine invariance of the two moments. Summing gives the same bound over any union of source-free triangles. In nodal-plus-bubble coordinates z=sum_i a_i lambda_i+beta_K b, (1) is

    grad phi_h = -(1/3)sum_i a_i -(9/14) beta_K.              (3)

Thus a large mass-pressure gradient cannot coexist with arbitrarily small actual velocity on the same element. This remains true for large aspect-ratio constants in a fixed shape-regular family.

For an edge shared by two triangles, continuity of phi_h gives equality of the tangential components of these element gradients. In particular a parent fan pressure slope passes exactly across every child flat base. The local cancellation state in the zero-cell-mean kernel equations illustrates the issue: if the fan center equals a, every outer nodal coefficient is zero, and

    beta_K=-(35/81)a,   grad phi_h|K=-(1/18)a,

then every homogeneous outer zero-mean test row inside that fan is satisfied. When a is nearly tangent to its long sides, this cancellation state prescribes a nonzero inherited tangential pressure slope on its children.

Equations (1)--(3) ensure that inherited pressure slope must eventually appear as actual velocity in the source-free child region. They do not prove that it reaches the next attachment fronts: it might be carried by base-strip or filler velocities. A quantitative, depth-uniform coupled-state transfer estimate would be a new requirement. The multiplier phi_h here is the mass-Schur pressure, and is not the actual time-dependent discrete Stokes pressure.

## Actual evolutionary pressure of a zero-mean eigenmode

This calculation distinguishes the multiplier above from the actual pressure observation. Suppose y_h is a genuine discrete Stokes eigenmode A_h y_h=lambda y_h. Let pi_h be its pressure observation, so

    b(v_h,pi_h)=(lambda y_h,v_h)-a(y_h,v_h).

On a triangle with zero element mean, write S_K=sum_vertices a_i. Then beta_K=-(20/27)S_K and

    integral_K b y_h=-(9/140)|K| S_K.

Let H_K be the exact bubble stiffness matrix, defined by a(b e,b f)=e dot H_K f. The cross stiffness between affine velocities and b e vanishes, including for the strain form. The bubble equation therefore gives the exact observation

    grad pi_h|K = [ (400/243) H_K/|K| - (lambda/7) I ] S_K.    (4)

Thus a nonzero mass-Schur slope, or a nonzero S_K, does not alone establish a nonzero actual pressure. Its eigenvalue and bubble stiffness must also be checked. For the vector Laplacian H_K=kappa_K I. The local constant-nodal state y=a(1-20b/9) has mass orthogonal to every affine function on that cell; its bubble-only eigenvalue is (2800/243)kappa_K/|K|, at which (4) cancels. This is a local model, not an asserted global no-slip eigenfunction. A repeated-template counterexample must identify a mode whose actual observation in (4), or its noneigenmode analogue, survives.
