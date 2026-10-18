# Weighted actual MINI lift: exact time transfer and unresolved spatial estimate

Research continuation, 2026-10-18. This note proves the conditional time-transfer implication in full, including arbitrary positive backward-Euler steps. It does **not** establish the required spatial hypothesis, and is not a proof of the original pressure assertion. All spaces, boundary conditions, initialization, and mesh hypotheses remain those in the assignment. No canonical files or workflow state are changed.

Let V_h be the zero-trace MINI space, Q_h the mean-zero continuous P1 pressure space, and Z_h its weak kernel. Use b(v,q)=-(q,div v)=(v,grad q) and a(v,w)=2nu(epsilon(v),epsilon(w)). Let A_h be the positive mass Stokes operator on Z_h. Let W_h=G_h S_h^{-1} be the actual mass-minimum divergence lift, and W_lambda its Brinkman counterpart. Put

    (F_h q,z)_2=a(W_h q,z),   z in Z_h.

All operators below are extended to the finite-dimensional complexifications. The exact identity is

    W_lambda q-W_h q=-(lambda+A_h)^{-1}F_h q.          (1)

In particular this is the actual symmetric-gradient operator, with no scalar-Laplacian substitution.

## 1. A sufficient spatial hypothesis with the correct analytic domain

Define C_h on elementwise square-integrable vector fields by

    (C_h v)|K=h_K[v|K-m_K(v)].

Fix delta in (0,pi/2). Suppose, uniformly over all allowed meshes,

    ||C_h(W_lambda-W_h)||_{Q_h->L2}
       <= M_gamma |lambda|^{-gamma},                 (2)

for every nonzero lambda with |arg lambda|<=pi-delta, where

    1/4<gamma<1.

This is a complex-sector estimate. An estimate only for positive real lambda is not used as a substitute. Constants may depend on D, shape regularity, nu, delta, and gamma, but not grading or h_min.

Choose theta with pi/2<theta<pi-delta. Applying the Dunford inverse-Laplace formula to the rational finite-dimensional function in (1), with rays arg lambda=+/-theta, gives

    C_h exp(-tA_h)F_h
      = (1/(2pi i)) integral_Gamma
           exp(t lambda) C_h(lambda+A_h)^{-1}F_h d lambda.

The small connecting arc can be sent to zero: its norm is O(epsilon^{1-gamma}) by (2). The outer arcs vanish by exponential decay in the left sector, or directly by the rational finite-dimensional resolvent formula before passing to the rays. Therefore (2) implies

    ||C_h exp(-tA_h)F_h||_{Q_h->L2}
       <= C M_gamma integral_0^infinity
                exp(-c_theta t rho)rho^{-gamma}d rho
       <= C_gamma M_gamma t^{gamma-1}.                (3)

There is no eigenvalue-dependent constant in this estimate. The restriction gamma<1 is exactly what makes the ray integral integrable at zero. The formula remains valid when the pole locations vary with the mesh.

## 2. Transfer to arbitrary positive backward-Euler steps

For arbitrary tau_j>0 define

    E_n=product_{j=1}^n(I+tau_j A_h)^{-1},
    t_n=sum_{j=1}^n tau_j.

Let X_j be independent exponential random variables of mean tau_j and S_n=sum_j X_j. Spectral diagonalization, or the elementary Laplace formula for each resolvent, gives exactly

    E_n=E[exp(-S_n A_h)].

Set a=1-gamma, so 0<a<1. The Mellin integral and Tonelli give

    E S_n^{-a}
      = (1/Gamma(a)) integral_0^infinity
           x^{a-1} product_j(1+tau_j x)^{-1}dx
      <= (1/Gamma(a)) integral_0^infinity
           x^{a-1}/(1+t_n x)dx
      = Gamma(1-a)t_n^{-a}.                          (4)

The inequality uses only product_j(1+tau_j x)>=1+t_n x. It requires neither comparable steps nor a mesh/time relation. Combining (3), Bochner integration, and (4) proves

    ||C_h E_n F_h||_{Q_h->L2}
       <= C_gamma M_gamma t_n^{gamma-1}.             (5)

This argument provides the missing time transfer when (2) is established. It does not obtain (2) from a positive-real bound.

## 3. Actual initialization pressure

Let r=Pi_h u0-u0 be the original cell-mean-corrected H2 Fortin defect, and let y^0=P_Zh r, y^n=E_n y^0. Recover the homogeneous pressure p^n from the full MINI mixed equation. Testing it with W_h q and using the mass orthogonality W_h q perpendicular to Z_h gives

    (p^n,q)=-a(y^n,W_h q)=-(r,E_n F_h q).            (6)

The derivative term vanishes because D_tau y^n belongs to Z_h. Self-adjointness of E_n on Z_h and P_Zh orthogonality justify the second equality, including its sign.

The exact cell means of r vanish, so with

    R_h(r)^2=sum_K h_K^{-2}||r||_{L2(K)}^2

(here R_h(r) is only a scalar notation, not the full mass projector), Cauchy--Schwarz yields

    |(r,v)|<=R_h(r)||C_h v||2.

The original local approximation estimate and patch overlap imply

    R_h(r)^2
      <= C sum_K h_K^2 ||D2u0||_{L2(omega_K)}^2
      <= C h_max^2 ||u0||H2^2.                       (7)

No comparison with h_min is involved. Equations (5)--(7) give

    ||p^n||2<=C M_gamma h_max ||u0||H2 t_n^{gamma-1}.

Since (4/3)(1-gamma)<1 and t^{-a} is decreasing,

    sum_n tau_n ||p^n||2^{4/3}
      <= C (M_gamma h_max ||u0||H2)^{4/3}
           integral_0^T t^{-(4/3)(1-gamma)}dt.

Thus (2) is sufficient for the original first-order homogeneous initialization-pressure bound in ell^{4/3}(L2), for arbitrary positive time steps.

## 4. Spatial attempts and exact remaining obligation

The unweighted variational minimum identity gives

    ||W_lambda-W_h||2^2
       <= ||L_h-W_h||2^2+lambda^{-1}a(L_h,L_h)

for any admissible lift L_h, when lambda>0. A common L2/H1 lift bounds the second term but leaves a nondecaying first term. Multiplying the conclusion by h_K does not remove that first term or produce a power of lambda.

Likewise C_h v is bounded by both h_max||v||2 and C||h_K^2 grad v||2. Neither bound controls the local gradient of the actual mass-Schur lift uniformly in lambda. The inverse inequality runs in the wrong direction for deriving decay, and replacing local h_K by h_min is forbidden and unnecessary.

A local dual reconstruction with zero cell means does produce H1_0 tests annihilating grad Q_h. However its full mass projection need not remain in Z_h: grad Q_h is not contained in V_h. Consequently this construction cannot legitimately turn full-test pairings into kernel resolvent pairings. The mass projector does not commute with the cell-mean divergence constraint.

An actual discrete Rellich/local regularity estimate for W_h, or a direct actual-space sector estimate (2), remains needed. The known near-L2 projector bounds, tiny positive Hs stability, and common nonorthogonal retraction do not establish it. No actual-space obstruction to (2) has been proved here either. The output is therefore a rigorous conditional time-transfer lemma and a precise remaining spatial gap, not a resolution of the original claim.
