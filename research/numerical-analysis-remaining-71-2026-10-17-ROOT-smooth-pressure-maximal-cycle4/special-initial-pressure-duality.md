# Special actual initialization: dual divergence-lift reduction

Research continuation, 2026-10-18. This note retains the original smooth data, actual MINI pair, actual mass initialization and arbitrary shape-regular matching meshes. It records two exact reductions and a boundary-layer diagnostic. It proves neither the original instantaneous claim nor an original-scope counterexample. No canonical writes, controls or gates are involved.

## 1. Asymmetric fractional exponents

Let A=A_h be the positive mass Stokes operator on Z_h. Suppose an actual full-test comparison has been established with some alpha>0:

    ||z_h||V_h* <= C_alpha ||A^(-alpha)z_h||2.

This is a conditional input, not a result of this note. For homogeneous backward Euler evolution y^n=product_(j<=n)(I+tau_j A)^(-1)y^0, suppose also the actual initial vector obeys

    ||A^beta y^0||2 <= epsilon.

If 0<alpha+beta<1, the elementary spectral bound product(1+tau_j lambda)>=1+t_n lambda gives

    ||D_tau y^n||V_h*
      <= C_alpha sup_(lambda>0)
            lambda^(1-alpha-beta)/(1+t_n lambda) epsilon
      <= C_(alpha,beta) t_n^(alpha+beta-1) epsilon.

Therefore the original full-test ell^(4/3) bound follows whenever alpha+beta>1/4, because the right-endpoint sum of t^(-(4/3)(1-alpha-beta)) is bounded by its integral. The exponents need not be equal. For tiny alpha, a special initialization estimate with beta arbitrarily below 1/4 could suffice. A tiny all-input estimate beta=alpha would not suffice unless alpha>1/8.

For the actual y0=P_Zh(Pi_hu0-u0), the input is special in two independent ways:

    r=Pi_hu0-u0 belongs to V,
    integral_K r=0 for every cell K,
    b(r,q_h)=0 for every q_h in Q_h,
    ||r||2<=C h^2 M,  ||r||V<=C h M.

The cell mean identity is the exact bubble moment correction. The weak-divergence identity follows because both u0 and Pi_hu0 have zero Q_h divergence. The existing false full-input H1 projector assertion does not by itself refute a stronger estimate for this special r. Conversely these identities alone do not prove such an estimate.

## 2. An exact pressure duality using the actual mass Schur lift

Let R_h project onto full V_h, let G_h q_h=R_h grad q_h, and let S_h=G_h^*G_h, where the pressure mass inner product defines the adjoint. The owner's actual MINI calculations establish S_h positive definite on mean-zero Q_h, with g_h(q,s)=(G_hq,G_hs) uniformly equivalent to the scalar gradient energy. Define the mass-minimum divergence lift

    W_h q = G_h S_h^(-1) q.

Then b(W_hq,s)=(q,s) for all s in Q_h and W_hq is mass-orthogonal to Z_h. For arbitrary r in L2, define phi_r=S_h^(-1)G_h^*R_h r. The exact Hodge identity is

    P_Zh r=R_h r-G_h phi_r.

Fix lambda>0. Let (v_lambda,pi_lambda) solve the mixed resolvent with forcing P_Zh r:

    lambda(v_lambda,w)+a(v_lambda,w)+b(w,pi_lambda)
          =(P_Zh r,w),       w in V_h,
    b(v_lambda,s)=0,         s in Q_h.

For a pressure test q in Q_h, let (W_lambda q,chi_lambda) solve

    lambda(W_lambda q,w)+a(W_lambda q,w)+b(w,chi_lambda)=0,
    b(W_lambda q,s)=(q,s).

All these finite-dimensional systems exist uniquely by the actual mixed inf-sup and coercivity. Then the following exact identity holds:

    (pi_lambda,q)=(r,W_lambda q-W_h q).                    (1)

To verify it, first replace the forcing P_Zh r by r. This changes the pressure to pi_lambda+phi_r and leaves its kernel velocity unchanged. Testing the two mixed systems against each other's velocity eliminates their mass and viscous terms and gives (pi_lambda+phi_r,q)=(r,W_lambda q). On the other hand (phi_r,q)=(r,W_hq), by the definition of the mass Schur lift and symmetry. Subtraction proves (1). Every projection here is the actual projector; no continuum Leray map or alternate initialization has been substituted.

The difference Z_lambda q=W_lambda q-W_hq lies in Z_h and satisfies

    lambda(Z_lambda q,z)+a(Z_lambda q,z)=-a(W_hq,z),
                       z in Z_h.                         (2)

Thus the initialization-pressure problem can equivalently be studied through the relaxation of the actual mass-minimum divergence lift toward its viscous resolvent lift. This is a different interface from asserting H1 stability of P_Zh.

The time-domain analogue is equally exact. Define H_h z in Q_h by

    (H_h z,q)=-a(z,W_hq),     z in Z_h.

For the homogeneous mass Stokes evolution y(t)=exp(-tA)P_Zh r, its mixed pressure is H_h y(t). Hence

    (p(t),q)=-(r, exp(-tA) F_h q),
    (F_hq,z)=a(W_hq,z),       z in Z_h.                    (3)

Here F_hq is the mass representative of the last functional; it belongs to Z_h, and self-adjointness of A gives (3). Formula (2) is the Laplace transform counterpart of this boundary-lift kernel. A uniform bound on that actual kernel would immediately imply the pressure admissibility estimate. Such a bound is not established by Schur energy equivalence alone.

## 3. How the newly proved near-L2 integrability might help

The graded-structure helper has identified a separate prospective/derived near-L2 projection route: actual scalar Schur inf-sup in W1,p, for some p>2, yields an actual P_Zh Lp bound. Its complete uniform-interpolation/Sneiberg supplier remains that helper's responsibility. Conditional on its stated bound, the special initialization satisfies

    ||P_Zh r||Lp <= C h^(2-theta_p) M,
    theta_p=3(1/2-1/p),       2<p<=6,

by interpolation of the already proved L2 h^2 and V h bounds for r. For p sufficiently near two the power 2-theta_p is greater than one, so the amplitude is smaller than the requested first-order bound for bounded h. This does not supply any time derivative by itself.

There is an informative halfline model for why any p>2 might be enough for this special initial layer. If a normal profile w0 has finite Lp norm, the exact Dirichlet heat mass-loss formula and Holder give

    |M'(t)|
      <= C t^(-3/2)
           ||z exp(-z^2/(4nu t))||L^(p') ||w0||Lp
      <= C_(p,nu) t^(-(1+1/p)/2) ||w0||Lp.

The Gaussian factor's L^(p') norm scales as t^((1+1/p')/2); this proves the displayed exponent. Since (4/3)(1+1/p)/2<1 precisely when p>2, this model pressure is in L^(4/3) time for every p>2. It also distinguishes the accepted generic critical L2 profile from the smoother actual near-L2 initialization. This is a one-dimensional scalar heat calculation, not a theorem about arbitrary polyhedral Stokes flow or its actual MINI discretization.

The corresponding genuine mixed estimate suggested by (1) would be

    ||W_lambda q-W_hq||L^(p')
       <= C lambda^(-(1-1/p)/2) ||q||2,                    (4)

or an appropriate complex-sector or direct time-domain counterpart. Its decay exponent is greater than 1/4 for p>2. A direct bound in (3) with time exponent (1+1/p)/2 would provide the desired homogeneous pressure estimate. Neither (4) nor the time bound is proved here. A positive-real-axis resolvent estimate alone should not be misreported as a time-domain admissibility theorem.

In continuous polyhedral geometry, the mass-minimum lift is a Neumann potential gradient. Edge exponents greater than 1/2 and positive vertex exponents suggest an L2 tangential trace for L2 divergence data, and a boundary layer of thickness lambda^(-1/2) would have L^(p') norm of order lambda^(-1/(2p')). This explains the exponent in (4). The actual discrete W_h involves R_h grad of the scalar mass-Schur solution; neither the required trace estimate nor transfer to the graded discrete resolvent has been proved. In particular arbitrary refinement can coexist with coarse elements larger than lambda^(-1/2), so a global interpolation/inverse estimate is not acceptable.

## Remaining work

The exact pressure-duality interface (1)--(3) and the asymmetric spectral criterion are established reductions. A genuine uniform graded-MINI boundary-lift estimate would be new substantive mathematics. The full-MINI mass Lp stability and scalar energy equivalence alone do not establish it. The nonlinear pressure response and the original coarse-global-h branch also remain separate obligations; an initial-layer estimate alone would not complete the smooth theorem.

A useful simplification of the last route: equations (1) and (3) pair the boundary-lift kernel with the **unprojected** r. Thus the proposed kernel estimate needs only ||r||Lp, already available from its L2/H1 approximation bounds; it does not first require ||P_Zh r||Lp or the near-L2 Sneiberg supplier. If (4) and its time analogue were proved directly, the actual initialization would be handled without any separate constrained-projector Lp theorem. This is one advantage of the exact mixed duality formulation.

Canonical sign check: `def-na-stokes-zero-mean-pressure-and-velocity-spaces.md` defines b(v,q)=−integral q div v, so H1_0 integration by parts gives b(v,q)=+(v,grad q). This is why W_h=+G_h S_h^(-1) and the forcing replacement uses pi_lambda+phi_r. The actual viscosity form throughout this note is a(v,w)=2nu(epsilon(v),epsilon(w)); the spectral arguments use this form, not a replacement of weakly divergence-free velocities by pointwise divergence-free ones.

## 4. Full-text Brinkman source check and its precise limit

Read all 24 PDF pages of Mika Juntunen and Rolf Stenberg, *Analysis of finite element methods for the Brinkman problem*, Helsinki A557 (2009), https://math.aalto.fi/reports/a557.pdf, using the source helper's complete extraction. Sections 3.1--3.2 cover generalized MINI, including the actual k=1 MINI pair, and use elementwise weights h_K^2/(t^2+h_K^2). Lemma 1 uses independent bubbles; Lemma 2 combines local interpolation with the Pitkaranta--Verfurth argument. Theorem 3 gives parameter-uniform stability in the continuous pressure dual norm, and Theorem 5 gives quasioptimality. Their local proof avoids substituting a global minimum element diameter. This is relevant actual machinery, not a pressure observation theorem.

There are two specific obstacles to reading it as the missing estimate.

1. The paper defines the ambient velocity space as H1_0 for t>0 and L2 for t=0. Consequently the V_h definition in its equation (22) changes boundary degrees of freedom at t=0: the Darcy space permits boundary nodal values. Our W_h in section 2 is the mass-minimum lift in the *fixed zero-boundary* MINI velocity space. The two Darcy lifts must not be identified. The paper's section 5 explicitly discusses a Nitsche modification using the same spaces in both limits; that modification is not the original scheme.

2. Parameter-uniform norm equivalence does not control the modulus as t tends to zero. For example spectral equivalence S_h(t)^(-1) <= C S_cont(t)^(-1), together with a bound for S_h(0)^(-1), leaves a nonvanishing constant-factor remainder when estimating S_h(t)^(-1)-S_h(0)^(-1). It does not give (4). The local element/face cutoff calculations in section 3.4 are residual-efficiency proofs; they are not a discrete Rellich estimate for the mass-minimum lift.

One exact easy consequence illustrates both the strength and limit. For an initial vector z_h already in Z_h with controlled V norm, compare the Brinkman response to the candidate z_h. Its consistency defect is t^2 a(z_h,.), with energy-dual size at most C t||z_h||V. Parameter stability therefore bounds its Brinkman pressure in L2 by C t||z_h||V, uniformly in the original grading. This recovers the expected benign H1-initial-layer behavior. Applying it to P_Zh r would require the unproved V control of that actual projected vector; replacing it by F_h r leaves an unresolved mass-projection residual. Thus this source does not authorize silently inserting the missing assumption.

## 5. Direct proof attempts and outstanding discrete geometry

A continuous boundary-lift construction suggests an attainable rate without requiring Stokes H2 regularity. For L2 divergence data, a scalar Neumann potential on a fixed polyhedron has edge/vertex structure compatible with L2 tangential gradient trace. A no-slip correction in a strip of width epsilon then has L2 size O(epsilon^(1/2)) and H1 size O(epsilon^(-1/2)). Energy minimization would give the Brinkman--Darcy lift difference O(epsilon^(1/2)) in L2. A second divergence-free cutoff in a dual H1 test would give an additional half power in the full negative norm. Those are continuous proof mechanisms; transferring them to W_h and W_lambda is the missing actual finite-element argument.

A possible intermediate discrete Rellich quantity is a uniform half-trace/jump bound for the scalar discrete Neumann potential, or for the actual mass-Schur version. For the standard P1 problem (grad psi_h,grad s_h)=(q_h,s_h), an illustrative target is

    sum_(interior faces F) ||jump grad psi_h||L2(F)^2
          + suitable boundary tangential terms <= C ||q_h||2^2.

This is weaker than a discrete H2 estimate with an extra h_F^(-1), and is consistent with the scalar polyhedral singular thresholds. It is not proved here, and this displayed quantity alone would still need to be converted into an actual admissible-lift approximation. Standard global Cea plus an inverse estimate does not supply it on arbitrary grading. The mass-Schur form adds its own consistency/projection layer, so even a standard P1 result would not be silently sufficient.

The newly proved strip gain of the actual projected initialization, obtained by the other helpers from near-L2 integrability, could help if the pressure observation kernel were known to concentrate in a boundary strip, with a controlled off-strip remainder. Such localization is not a consequence of energy contraction for the mass Stokes semigroup, which includes a nonlocal weak-divergence constraint. A separate actual graded discrete kernel or lift argument is still needed. No unsupported off-diagonal estimate is assumed.
