# Actual full-MINI mass decay at a refinement accumulation set

Research only, 2026-10-18. This proves an actual-space local estimate, not a pressure counterexample. It excludes a *nonvanishing* full-mass-projection jump at an arbitrarily complicated interior refinement front. It does not exclude a smaller cusp, prove adequate fractional regularity, or estimate the constrained mass-Schur correction. Canonical/control/hash/readiness files were not changed. No tests were run.

## Uniform local attenuation for actual R_h

Let R_h be the L2 projector onto the full, homogeneous-Dirichlet MINI velocity space on a matching shape-regular affine mesh in dimension two or three. Let h=max_K h_K. There is a number rho>=1, depending only on the shape bound, with the following property. For a mesh vertex i put eta_i=max{h_K: i is a vertex of K}; if i and j belong to a common simplex, then eta_j<=rho eta_i. Indeed all cells in a vertex star have comparable sizes, by bounded-length face-connected star chains and the fixed minimum angles/solid angles. Shared-simplex comparability then gives the stated inequality.

Fix 0<beta<1 and u in C^{0,beta}(closure D)^d with zero boundary values. Let J_hu be its continuous nodal P1 interpolant. For every

    0<alpha<beta with r rho^alpha<1,

where r=1/8 in dimension two and r=177/283 in dimension three, one has

    ||R_hu-u||Linfty(K)
       <= C h^(beta-alpha) h_K^alpha [u]C^{0,beta}(closure D).       (A)

Constants depend on the indicated fixed exponents and shape bound, but not on the number or smallest size of cells. Vector components are handled independently.

Here is a complete proof using the actual bubble-condensed system. Put f=u-J_hu. Barycentric interpolation and Holder continuity give

    ||f||Linfty(K)<=h_K^beta [u]C^{0,beta}.

The full MINI projector fixes J_hu, so R_hu-u=R_hf-f. The exact mass condensation already computed in the actual-MINI mass-Schur note gives a positive diagonal matrix D and a nonnegative off-diagonal matrix E for the interior nodal coefficients a of R_hf, with

    (D+E)a=l,    B=D^(-1)E>=0,    sum_j B_ij<=r<1.

The normalized condensed load b=D^(-1)l satisfies

    |b_i|<=C eta_i^beta [u]C^{0,beta}.                              (B)

To verify (B) directly, every local condensed load is (f,lambda_i)_K minus a fixed reference coefficient times (f,b_K)_K. Its magnitude is bounded by C|K| ||f||Linfty(K). The diagonal row is a fixed positive reference coefficient times sum_{K incident i}|K|. Dividing proves (B); deleted boundary nodes contribute zero coefficients.

The Neumann series a=sum_{k>=0}(-B)^k b converges in the finite-dimensional maximum norm. Every nonzero k-step matrix entry corresponds to a length-k path through adjacent vertices. Along such a path eta_j<=rho^k eta_i; also eta_j<=h. Thus, for alpha<=beta,

    eta_j^beta<=h^(beta-alpha)rho^(k alpha)eta_i^alpha.

Since B is nonnegative with row sums at most r, B^k has row sums at most r^k. Consequently

    |(B^k b)_i|
       <=C h^(beta-alpha)eta_i^alpha(r rho^alpha)^k [u]C^{0,beta}.

Summing the geometric series proves |a_i|<=C h^(beta-alpha)eta_i^alpha [u]C^{0,beta}. For a cell K all its vertex-star scales eta_i are at most C_shape h_K. The recovered bubble coefficient is

    [(f,b_K)_K-sum_{i in K}a_i(lambda_i,b_K)_K]/(b_K,b_K)_K.

Fixed bubble moments bound its absolute value by C(||f||Linfty(K)+max_{i in K}|a_i|). The P1 basis is nonnegative with sum at most one after boundary deletion, and the bubble is bounded. Hence ||R_hf||Linfty(K)<=C h^(beta-alpha)h_K^alpha [u]C^{0,beta}. Adding f, and using h_K^beta<=h^(beta-alpha)h_K^alpha, proves (A).

In particular (A) applies to the original H2 exact velocities: on a fixed Lipschitz polyhedral domain the Sobolev extension and Morrey embedding give H2(D) into C^{0,beta}(closure D) for 0<beta<min(1,2-d/2). One may fix beta=1/4 in either allowed dimension. The continuous representative of an H2 intersect H1_0 velocity vanishes on the boundary. No point evaluation of a general H1 function is used.

## Genuine Euclidean fractal fronts are compatible with the estimate

For an explicit geometric front take D=(0,1)^2, take a rescaled middle-third Cantor set C inside (1/4,3/4), and let

    S=C times [1/4,3/4].

Its Minkowski codimension is c=1-log(2)/log(3), strictly between zero and one half. This is an actual subset of the fixed Euclidean square, not an abstract branching graph. Standard dyadic Whitney refinement around S can be realized by squares: repeatedly subdivide a square Q whenever dist(Q,S)<=2 side(Q), stopping at level m; then apply 2:1 balance. Triangulate each balanced square by joining its center to its boundary vertices, including the possible side midpoints from its finer neighbors. Each resulting triangle is one of finitely many similar shapes, hence these are conforming simplicial meshes with a fixed positive minimum angle. The cells satisfy

    h_K<=C [dist(K,S)+2^(-m)].                                    (C)

The initial subdivision criterion gives (C) before balance; subsequent subdivision preserves this upper bound, with a larger fixed constant if necessary. The center-fan triangulation preserves it again. This construction can retain coarse cells far from S: balancing propagates at scale s only over a distance bounded by a geometric sum of larger square sizes, and a point at fixed positive distance from S consequently has bounded refinement level. Equivalently one can use the usual balanced maximal Whitney-square partition with scale cutoff 2^(-m). No physical boundary or internal Dirichlet condition is inserted at S.

Combining (A) and (C), for x in a cell meeting S_delta,

    |R_hu(x)-u(x)|
       <=C h^(beta-alpha)(delta+2^(-m))^alpha ||u||H2.              (D)

To see that (C) gives the needed bound for a cell *meeting* S_delta, use dist(K,S)<=delta. Thus the actual unconstrained full-MINI mass error tends uniformly to zero as delta and the cutoff tend to zero, even at this front of codimension below one half. No order-one discontinuity of R_hu-u can be inferred merely from the increasingly complicated front.

## Precise limitation and remaining negative route

Equation (D) does **not** settle the proposed route. A layer amplitude that vanishes with a small exponent alpha can still fail a desired fractional estimate when the front has small codimension. Its actual oscillation structure and its actual mixed pressure observation must be analyzed, rather than inferred from (D). The bound alpha is allowed to be tiny when the shape bound is poor. No codimension-one source-wise packing estimate is asserted.

More importantly the original initial velocity is

    P_Zh u=R_hu-R_h grad phi_h,

where phi_h solves the actual scalar mass-Schur equation. Its globally small H1 norm does not supply pointwise attenuation of R_h grad phi_h at S. The proof above uses Holder regularity of the **input** u; applying it to grad phi_h without proving that regularity would be invalid. This constrained correction, or a rigorously realized oscillatory cusp of sufficient strength, remains the possible spatial mechanism. Finally, a spatially bad scalar projection alone would still not realize the required nonlinear pressure counterexample.
