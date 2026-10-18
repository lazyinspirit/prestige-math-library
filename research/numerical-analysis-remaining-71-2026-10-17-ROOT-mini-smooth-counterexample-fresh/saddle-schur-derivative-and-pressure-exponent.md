# Saddle Schur derivatives, weighted CP maps, and the actual pressure crossentry

Research algebra, 2026-10-18. This proves finite-dimensional derivative and observation identities. It identifies a **conditional** exponent criterion; it does not establish a fixed point, a fractional-power asymptotic, an admissible nonzero leading crossentry, or a pressure counterexample. Actual full-boundary recurrence/geometry remain owner work. No canonical/runtime/hash/readiness edits or tests.

## 1. Symmetric saddle elimination has a positive derivative on PSD directions

Let a real symmetric matrix A(t) be split into retained boundary indices O and eliminated indices I. Assume only that A_II is invertible; it may be an indefinite mixed saddle block. Define

    S=A_OO-A_OI A_II^(-1)A_IO,
    P=[I; -A_II^(-1)A_IO].

Then A P has zero I rows and P has constant O rows. Differentiating S=P^T A P therefore gives exactly

    dS=P^T(dA)P.                                           (1)

The terms containing dP vanish because dP has zero O rows. Thus a PSD matrix direction remains PSD under the derivative even though the eliminated block is indefinite.

For an actual recursive MINI template, let E_c extract the c-th child's retained trace from the assembled parent variables, and let P be the **full** parent interior recovery, including every velocity and scalar-pressure variable. The child contribution to a mass DtN matrix is

    E_c^T S_c^T D_c S_c E_c,
    S_c=diag(rho_c I_velocity,I_pressure).

With T_c=diag(I_velocity,rho_c^(-1)I_pressure) E_c P, followed by the pressure-gauge quotient, (1) gives

    dR[(H_c)_c]=sum_c rho_c^2 T_c^T H_c T_c.                  (2)

The reference child state in T_c contains pressure divided by rho_c; omitting that component or applying an extra rho_c^2 afterward changes the map. Equation (2) is evaluated at the current actual coupled child DtNs. Finite-depth recovery matrices need not be constant in depth.

## 2. Normalized Brinkman parameter and exact strain derivative

Put epsilon=1/lambda and use the normalized positive velocity form

    (v,w)_epsilon=(v,w)+epsilon a_nu(v,w),
    a_nu(v,w)=2nu integral eps(v):eps(w).

Use the pressure multiplier of this normalized equation as the pressure trace coordinate. At fixed normalized boundary velocity and pressure traces, the only epsilon derivative of the **uncondensed** mixed matrix is its velocity strain block. Hence (1) proves

    x^T D'_epsilon x=a_nu(w_x,w_x)>=0,                       (3)

where w_x is the actual complete mixed response to boundary state x. This includes all bubble velocities and pressure variables. Differentiating a precondensed formula must include every epsilon-dependent bubble Schur term; (3) is a safe way to retain them automatically.

If physical unscaled Stokes pressure chi is fixed while the trace coordinate is chi/lambda, that coordinate varies with epsilon and contributes additional chain-rule terms. Formula (3) holds with the normalized trace coordinate fixed, not with those different data silently identified.

In two dimensions a child has normalized parameter epsilon_c=epsilon/rho_c^2. Thus the exact recursive derivative is

    D'_epsilon=G_annulus(epsilon)
       +sum_c T_c(epsilon)^T
                   D'_child(epsilon/rho_c^2) T_c(epsilon),   (4)

where G_annulus is the nonnegative strain Gram matrix on the actual parent filler/fan cells outside the recursive children. In (4), rho_c^2 from mass similarity cancels the derivative factor rho_c^(-2). Derivatives of the interior recovery do not add terms, by (1). The inherited pressure trace is part of T_c throughout.

## 3. Fixed source ports and the mass-potential subtraction

For the original body-force resolvent let

    lambda(v_lambda,v_h)+a_nu(v_lambda,v_h)
                              +b(v_h,pi_lambda)=(u,v_h),
    b(v_lambda,q_h)=0.

Set w_u=lambda v_lambda. Then (w_u,pi_lambda) solves the normalized mixed system with the **fixed** velocity load u. This avoids introducing an epsilon-dependent source normalization. At epsilon=0 its pressure is exactly the mass-projection multiplier phi_u.

For an actual pressure constraint load q, let W_epsilon q be the mass-plus-epsilon-strain minimizing lift with b(W_epsilon q,s)=(q,s). Its velocity is the same W_lambda q used in the unnormalized lambda-mass-plus-strain lift. Symmetry gives the exact crossentry

    F(epsilon)=(pi_lambda,q)=(u,W_epsilon q),
    F(0)=(phi_u,q)=(u,W_hq).

For homogeneous Stokes initial velocity P_Zh u, the Laplace pressure observation is therefore

    (p_hat(lambda),q)=F(epsilon)-F(0).                       (5)

For the compact source with zero raw affine loads and bubble moment B, this is exactly B dot (c_(W_epsilon,K)-c_(W_h,K)). Nonzero bubble-induced pressure forcing remains present after elimination.

There is a useful source-safe derivative representation. In the uncondensed full mixed matrix L_epsilon introduce two fixed load columns f_u=(u velocity moments,0) and f_q=(0,q pressure moments). Append them as forcing ports with matrix

    [L_epsilon -F_load; -F_load^T 0].

Eliminating the field variables gives the port matrix

    K_port=-F_load^T L_epsilon^(-1)F_load,
    K'_port=F_load^T L_epsilon^(-1)L'_epsilon
                                      L_epsilon^(-1)F_load >=0. (6)

Its off-diagonal is -F(epsilon), and

    F'(epsilon)=-a_nu(w_u,W_epsilon q).                      (7)

Equation (6) is positive on diagonal port combinations, but (7) has no prescribed sign. It automatically includes source changes induced by bubble/interior elimination. If one instead works with a condensed epsilon-dependent right-hand side, its derivative must be retained; treating it as fixed is generally wrong.

Admissible ports here are one fixed smooth no-slip exactly solenoidal u with a depth-uniform H2 norm, and a pressure load given by the L2 projection of one fixed smooth mean-zero q_src, hence ||q_h||2<=||q_src||2. The actual moment/annihilator constraints already proved for these ports remain required. An arbitrary positive matrix direction or arbitrary boundary state is not a substitute for them.

## 4. Spatial weighted CP criticality

Suppose, as an additional hypothesis, the actual Darcy DtN recurrence converges to an autonomous coupled boundary response with child transfers T_c. Quotient pressure constants and the invariant affine Darcy background states (constant velocity b with pressure -b dot x plus a constant). A pure background has zero strain, so retaining it can produce a misleading CP spectral radius. More generally restrict to the actual reachable and strain-observable quotient; a nonzero strain Gram seed must couple to the positive eigenspace being used.

On symmetric forms on that quotient define

    L_s(H)=sum_c rho_c^(2-2s) Tbar_c^T H Tbar_c.              (8)

For a spatial H^s estimate, the factor rho_c^(-2s) is the physical fractional weight multiplying the mass similarity rho_c^2. Thus r(L_s)>1 is a candidate growth condition for a reachable spatial oscillation channel; it needs a nonzero physical oscillation/strain seed and the actual source excitation. This paragraph concerns **spatial H^s criticality**, not yet a pressure exponent.

Without an autonomous limit one must use products of the actual depth-dependent transfer maps and their weighted CP compositions. The spectral radius of one terminal-child matrix, or of one ideal normal factor, supplies no such conclusion.

In particular the MINI spaces at successive refinement depths are not automatically nested: the restriction of a coarse cubic cell bubble need not belong to refined P1-plus-local-bubble space. Monotone Galerkin convergence therefore cannot be invoked to obtain a DtN limit. Uniform finite-N child DtN bounds do not by themselves prove convergence, convergence of derivatives, an autonomous fixed point, or an exchange of depth and epsilon limits. Equations (1)--(7) hold at each actual finite depth; every limiting use in sections 4--5 is an additional stated hypothesis.

## 5. When a pressure crossentry exponent equals that spatial index

Let gamma denote an actual **parameter residue exponent** in

    F(epsilon)-F(0)=c epsilon^gamma+o(epsilon^gamma), c!=0.   (9)

It must not be assumed equal to a spatial critical index. The precise scaling connection is conditional as follows. If the true matrix residue has a justified fractional-power leading term epsilon^gamma H, with 0<gamma<1 and the annulus term analytic at zero, linearizing the actual recurrence and using epsilon_c=epsilon/rho_c^2 gives

    H=L_gamma(H).                                          (10)

The same equation follows from a justified strain-derivative leading term gamma epsilon^(gamma-1)H in (4). This identifies the weighted CP map relevant to that exponent, but does not prove the fractional-power expansion exists.

For equal ratios rho, the mechanism can also be checked by level summation. Write mu=r(sum_c Tbar_c^T(.)Tbar_c), the strain CP radius. If the actual finite-frequency front is at n_epsilon comparable to log(epsilon)/(2 log(rho)), the dominant strain contribution has size mu^n_epsilon. Thus a proved uniform front/asymptotic yields

    D'_epsilon of order epsilon^(gamma-1),
    gamma=1-log(mu)/(2 log(1/rho)).                         (11)

Integrating that derivative gives a matrix residue of order epsilon^gamma only after the leading coefficient, remainder and uniformity have actually been established. With a primitive positive transfer and visible strain seed, Perron theory can support that argument; those hypotheses have not been proved here. Periodic/multiple channels can require a subsequence or a matrix renewal argument rather than a single power asymptotic.

The numerical condition

    r(L_0)<1<r(L_(1/4))                                    (12)

then locates a candidate critical index between zero and one quarter, under the stated autonomous/visibility conditions. It is a **sufficient spectral target for the desired route**, not an equivalence with an actual pressure lower bound. For unequal child ratios the same target uses (8), while the passage to an exponent requires the corresponding genuine renewal/indicial argument.

Most critically, if a leading matrix form H has been established, the root source and pressure port must satisfy

    z_u^T H z_q !=0,                                      (13)

with their actual compatible root responses z_u,z_q and fixed norms. Merely having z_u^T H z_u>0 and z_q^T H z_q>0 is insufficient: their H-inner product can still vanish. Perron/diagonal energy growth alone does not supply (13). Root source responses may themselves depend on the depth/parameter and need the required controlled limits. No such nonzero leading off-diagonal residue is proved here.

## 6. Why the strict one-quarter pressure target matters

If the actual admissible observation (9) has been proved with gamma<1/4, then epsilon=1/lambda gives lambda^(1/4)|(p_hat(lambda),q)| of order lambda^(1/4-gamma), which diverges. Holder's inequality supplies the exact infinite-horizon lower bound

    ||p||L^(4/3)(0,infinity;L2)
       >=(4lambda)^(1/4)|(p_hat(lambda),q)|/||q||2.             (14)

This is the pressure-observation step, distinct from spatial H^s growth. Applying it on a fixed finite horizon requires the already separate uniform tail estimate. An original smooth-error refutation further requires ruling out cancellation by the other smooth-error components and realizing the original nonlinear scheme. Those steps are not consequences of (8), (10) or a diagonal energy lower bound.
