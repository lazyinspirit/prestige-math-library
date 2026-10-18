# Actual local zero-cell-mean MINI kernel tests

Research algebra, 2026-10-18. This is a complete actual-space identity explaining a barrier to transferring the full mass counterexample to the constrained projector. It does not assert either a constrained counterexample or the original pressure estimate.

In dimension two use b=27 lambda_0 lambda_1 lambda_2, with normalized moments

    I1=9/20, I2=81/280, (lambda_i,b)/|K|=3/20.

For each interior nodal hat phi_i define

    zeta_i|K=lambda_i-(20/27)b_K     if i is a vertex of K,
    zeta_i|K=0                     otherwise.

The bubble correction has zero trace, so zeta_i belongs to the actual no-slip MINI space. Its unweighted cell integral is zero, because 1/3-(20/27)(9/20)=0. Consequently zeta_i e belongs to Z_h for every constant vector e: pairing against grad q_h, constant on each cell, vanishes element by element.

Thus arbitrary vector nodal coefficients a determine a local subspace Y_h of Z_h by

    Y(a)|K=sum_(i in K) a_i lambda_i-(20/27)b_K sum_(i in K)a_i.

Every z_h in Z_h has the unique algebraic decomposition

    z_h=Y(a)+w_h,

where a are its actual P1 nodal coefficients and w_h is a cell-bubble velocity whose pressure-divergence moments vanish. This is a direct sum, because bubble velocities have zero nodal values. It is not an L2 orthogonal sum.

The local Gram matrix of the scalar zeta functions has diagonal 13/126 and off-diagonal 5/252, multiplied by |K|. Indeed the common correction to P1 mass is

    -2(20/27)(3/20)+(20/27)^2(81/280)=-4/63.

Also (zeta_i,b)_K=-(9/140)|K|. In particular eliminating the divergence-free bubble component is nonlocal; the full-R condensed mass matrix cannot simply be reused for P_Zh on this subspace.

Now let an actual MINI velocity have nodal coefficients a_i and bubble coefficients beta_K. Direct integration gives

    (z_h,zeta_i e)_K
       =|K| e dot [(1/18)a_i-(1/36)(a_j+a_k)-(9/140)beta_K],    (1)

where i,j,k are the triangle's vertices. Here

    (lambda_i,zeta_i)/|K|=1/18,
    (lambda_j,zeta_i)/|K|=-1/36  (j!=i).

If z_h=P_Zh u and u vanishes on the entire support of zeta_i, orthogonal projection and zeta_i e in Z_h imply

    sum_(K incident i)|K|
       [(1/18)a_i-(1/36)(a_j+a_k)-(9/140)beta_K]=0.          (2)

This identity is independent of the pressure and tests the actual full constrained space. If the bubble coefficients were zero, (2) would be a positive weighted graph-Laplace equation for the nodal values. Constant local velocity is allowed. This differs materially from the alternating-sign off-diagonal condensed mass propagation of the full projector.

For a general projected velocity outside the source, pressure elimination gives

    beta_K=-(14/27)sum_i a_i-(14/9)grad phi|K,

which turns (2) back into the exact nodal equation

    C a+(1/10)G phi=0.

Therefore the pressure correction can reorganize precisely the local oscillation used by a full-R bad mode. A 3/7 energy-size bound on its positive nodal Schur correction does not prevent that reorganization, nor does it supply a relative lower bound on exponentially small descendant coefficients. To obtain an actual P_Zh lower bound one must use the coupled equations or a circulation/curl invariant not removed by this correction.

No canonical content, metadata, runtime controls, hashes, tests or gates were changed.
