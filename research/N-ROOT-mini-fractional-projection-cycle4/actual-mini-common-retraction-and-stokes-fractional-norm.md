# An actual MINI common retraction and the discrete Stokes fractional norm

Research proof, 2026-10-18. The finite-element construction below is complete. Its continuous analytic input is the negative-order Bogovskii right inverse with the exact full-H1 dual convention proved from Costabel--McIntosh in section 1. The source space definitions and Theorem 4.6 were checked in the actual full text. No orthogonal H1-stability assertion is used or implied.

## 1. Exact continuous input

Let X=(H1(D)/R)*, with norm

    ||f||_X=sup_{q in H1(D), ||grad q||2=1} |<f,q>|,

and require f(1)=0. The needed operator is one fixed linear B, on mean-zero L2 functions, such that

    div Bf=f,
    Bf in H1_0(D)^d,
    ||Bf||H1 <= C||f||2,
    ||Bf||2 <= C||f||X.                                  (B)

The last norm is dual to full H1 modulo constants, not dual to H1_0. Only mean-zero L2 inputs are actually inserted in the construction; no distributional boundary trace of Bf needs definition. A regularized Bogovskii operator whose adjoint maps L2 velocities to H1 scalar functions supplies precisely the last bound by duality. A citation to an unspecified negative-order space would not suffice; the following construction verifies that boundary convention.

Costabel and McIntosh, *On Bogovskii and regularized Poincare integral operators for de Rham complexes on Lipschitz domains*, arXiv:0808.2614, section 2 (printed p.4) identifies supported H^{-1}(R^d) with the dual of H1(D). Theorem 4.6(i)--(iii), printed pp.16--17, supplies fixed support-preserving T_n of order -1 and finite-rank smoothing L_n, with div T_n F=F-L_n F and T_n:H^t_supported->H^{t+1}_supported at every real t.

For f in X, define its canonical supported extension Ef by <Ef,phi>=f(phi|D). This is bounded in global H^{-1}; for L2 f it is ordinary zero extension. It has zero total mass. The supported divergence identity implies L_n Ef has zero integral as well. Choose one fixed linear ordinary L2 divergence lift B0 on the finite-dimensional mean-zero subspace range(L_n) intersect L2_0(D), with values in H1_0(D). This uses only the usual bounded-Lipschitz L2 divergence lifting. Define

    Bf=(T_n Ef)|D+B0((L_n Ef)|D).

The smoothing finite-rank term is bounded into L2 from H^{-1}, hence its B0 correction is bounded into H1_0 and L2. At t=-1, T_n Ef is supported L2, proving the last bound in (B). At t=0 it is supported global H1, whose restriction is H1_0, proving the positive-order bound. Both are the same operator and div Bf=f. The global supported identity also gives -(Bf,grad q)=f(q) for every q in H1(D), by any bounded H1 extension of q and a cutoff equal to one near closure(D). This verifies precisely the full-H1 dual convention.

Source PDF and text extraction are in this research directory. The independent detailed verification is `../numerical-analysis-remaining-71-2026-10-17-ROOT-smooth-pressure-graded-cycle4/negative-bogovskii-source-verification.md`. No claim of reproducing the source paper's full pseudodifferential proof is made.

## 2. A common L2/H1 stable projection onto the full MINI space

For every interior vertex i choose one incident cell K_i. On K_i the d+2 scalar polynomials

    lambda_1,...,lambda_(d+1), b_(K_i)

are linearly independent. Their reference Gram matrix therefore supplies a polynomial psi_i on K_i with

    integral_(K_i) psi_i lambda_j=delta_(i,j),
    integral_(K_i) psi_i b_(K_i)=0.

Reference scaling gives ||psi_i||L2(K_i)<=C|K_i|^{-1/2}. Set

    I_h v=sum_(interior i) (integral_(K_i) psi_i v) phi_i,
    Pi_h v=I_hv+sum_K b_K [integral_K(v-I_hv)/(integral_K b_K)].

All vector components use the same scalar construction. Boundary nodal coefficients are zero. The bubble in a cell has zero trace, so Pi_h maps all L2 velocities to the actual no-slip MINI space.

The construction gives exact cell means:

    integral_K Pi_hv=integral_K v.                       (1)

It also gives Pi_h v_h=v_h for every actual MINI velocity v_h: the dual moment first recovers its true P1 nodal coefficient while annihilating the bubble on the chosen cell; the subsequent mean correction then recovers its true bubble coefficient. Thus Pi_h is a projection, not merely an approximating Fortin map.

Uniform star comparability and bounded overlap give

    ||Pi_h v||2<=C||v||2,
    ||Pi_h v||H1_0<=C||v||H1_0.                          (2)

Here are the essential estimates. Cauchy--Schwarz with the scaled dual polynomials bounds each nodal coefficient by C|K_i|^{-1/2}||v||L2(K_i), so I_h is locally L2 stable. Each normalized bubble correction has L2 norm at most C||v-I_hv||L2(K). For the H1 estimate, I_h reproduces affine polynomials away from the zero boundary condition and has the standard local first-order approximation bound

    ||v-I_hv||L2(K)<=C h_K||grad v||L2(omega_K),
    ||grad I_hv||L2(K)<=C||grad v||L2(omega_K).

Subtract a constant on an interior star; on a star meeting the boundary use the zero-trace Poincare inequality and bounded star chains. The cell chosen by a vertex lies in its comparable-size star. The bubble inverse scaling then bounds its gradient by C h_K^{-1}||v-I_hv||L2(K), proving (2). All patch overlaps are bounded by the shape bound.

For w in H1_0 and q_h in the full continuous P1 pressure space, integration by parts and (1) give

    (div Pi_h w,q_h)=(div w,q_h).                        (3)

This is the actual MINI divergence pairing. It does not require w to be solenoidal.

## 3. A pressure projection and an exact divergence residual

Let J_h:L2(D)->widehat Q_h be a volume-dual Scott--Zhang projection onto the full continuous P1 space including constants. There are no boundary constraints on this space. It reproduces every continuous P1 function, J_h1=1, and satisfies

    ||J_h q||2<=C||q||2,
    ||grad J_hq||2<=C||grad q||2.                       (4)

One constructs it with a local affine polynomial dual on one cell per vertex; the same local constant-subtraction, star-comparability and overlap argument proves (4).

For v in L2 velocities define the actual L2 scalar function f_h(v) by

    (f_h(v),q)_2=(div Pi_hv,J_hq)_2,   all q in L2(D).    (5)

This is J_h^* div Pi_hv. Finite-dimensionality and L2 boundedness of J_h show it is an L2 function for every mesh, even for v merely L2. It has zero mean because J_h1=1 and Pi_hv has zero trace. For q in H1, integration by parts gives

    (f_h(v),q)=-(Pi_hv,grad J_hq),

so (2),(4) imply

    ||f_h(v)||X<=C||v||2.                              (6)

For v in H1_0, (2),(4) also give

    ||f_h(v)||2<=C||div Pi_hv||2<=C||v||H1.             (7)

For q_h in widehat Q_h, J_h q_h=q_h, hence

    (f_h(v),q_h)=(div Pi_hv,q_h).                      (8)

If z_h belongs to the weak MINI kernel Z_h, then Pi_h z_h=z_h and its divergence pairing annihilates every continuous P1 pressure, including constants. Equation (5) consequently gives

    f_h(z_h)=0.                                       (9)

This exact annihilation is what is lost if J_h^* is replaced by an arbitrary L2 pressure projection.

## 4. The common nonorthogonal projection

With the verified operator (B), define

    Q_h v=Pi_h v-Pi_h B f_h(v).                        (10)

Equations (3),(8) and div Bf=f show Q_h v belongs to Z_h. Equations (9) and Pi_h z_h=z_h show Q_h z_h=z_h. Thus Q_h is a projection onto the actual weak kernel.

Moreover (2),(6) and the negative-order bound in (B) give

    ||Q_hv||2<=C||v||2.

Equations (2),(7) and the positive-order bound in (B) give

    ||Q_hv||H1_0<=C||v||H1_0.                          (11)

These are the same linear operator on the two endpoints, with constants independent of mesh grading. Q_h is not the L2-orthogonal projector P_Zh. In particular (11) does not assert the false H1 bound for P_Zh.

## 5. Consequence for intrinsic powers of the actual discrete Stokes operator

Equip Z_h with the L2 norm at endpoint zero and the viscous energy norm a_nu^(1/2) at endpoint one. Its complex interpolation norm at parameter s is exactly the spectral norm ||A_h^{s/2}z_h||2, up to the fixed choice of inhomogeneous H1 norm and the domain/viscosity equivalence constants. This follows by diagonalizing the finite positive self-adjoint A_h; interpolation of diagonal weighted Hilbert spaces is entrywise geometric interpolation.

The inclusion Z_h->L2,H1_0 and the common retraction (10)--(11) show

    ||A_h^{s/2}z_h||2
         is equivalent to ||z_h||_[L2(D)^d,H1_0(D)^d]_s,    0<s<1,

with constants independent of the mesh. The upper bound follows by interpolation of Q_h and Q_hz_h=z_h; the lower follows by interpolation of inclusion. For 0<s<1/2, the standard Lipschitz-domain interpolation identity gives

    C_s^{-1}||z_h||H^s(D)
       <= ||A_h^{s/2}z_h||2
       <= C_s||z_h||H^s(D).                            (12)

The range s<1/2 avoids trace subtleties. In particular, an actual physical H^s bound for P_Zh at any such s does supply the corresponding intrinsic fractional bound, by the verified construction of (B). This implication requires a separately proved physical H^s bound for the orthogonal projector. Common retractions can exist even in two-by-two examples where the orthogonal projector is unbounded in every positive fractional norm, so the retraction alone supplies no such bound.

The identity does not prove physical H^s stability of P_Zh. The original target requires some s=2alpha>1/4, or a stronger special-data estimate combined with a smaller test exponent. The newly proved full-MINI R_h H^s theorem gives small positive s only, and its scalar Schur inversion remains separate.
