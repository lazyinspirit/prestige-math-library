# Graded MINI initialization: a weaker fractional interface

## Verified outcome

This note proves a conditional initialization estimate under an explicitly unproved fractional projection interface. It does not prove that interface on the original arbitrary shape-regular meshes, the full nonlinear instantaneous pressure estimate, or an original-scope counterexample. Its useful improvement over the cycle3 stronger-L2-derivative route is that the required fractional exponent is only greater than 1/8, and remains below the boundary-trace threshold 1/4.

Read CLAUDE.md, README.md and SCHEMA.md in full, the actual smooth velocity theorem, scheme definition and pressure escalation, and the complete cycle3 smooth helper and cycle4 smooth helper notes. The existing cycle4 H2 Fortin approximation is used as a proved research input. No new literature theorem is claimed. Only this research note was written; no canonical content, runtime controls, manifests, hashes, tests or gates were changed or run.

## 1. The proposed interface

Let H_h=Z_h with its L2 inner product. Define the positive self-adjoint A_h on H_h by

    (A_h z,w)_2=a_nu(z,w),   z,w in Z_h.

Write P=P_Zh, defined on all L2 velocities. The sufficient spatial interface is: for some fixed alpha with

    1/8 < alpha < 1/4,

there is a mesh-independent constant C_alpha such that

    ||A_h^alpha P v||_2 <= C_alpha ||v||_V,   every v in V=H1_0(D)^d.       (F_alpha)

The constant may depend on viscosity, the domain, alpha, and the original shape-regularity bound. No minimum element scale may enter. This is strictly weaker than the refuted H1 stability assertion, which corresponds to alpha=1/2 (up to the viscosity factor). It is still an additional mathematical assertion, and is not established here. Its restriction to tests in V_h suffices for the dual bound below, but its use on the actual Fortin defect needs the stated continuous-domain version.

For z in Z_h and v_h in V_h, self-adjointness gives

    (z,v_h)_2=(z,Pv_h)_2=(A_h^(-alpha)z,A_h^alpha Pv_h)_2.

Consequently (F_alpha) implies the actual full-test bound

    ||z||_(V_h*) <= C_alpha ||A_h^(-alpha) z||_2.                         (D_alpha)

This argument tests all of V_h and does not replace that space by Z_h. It does not assert H1 stability of P.

## 2. Arbitrary-partition homogeneous smoothing

Let y solve D_tau y^n+A_h y^n=0, with initial value y^0=P r for r in V. For t_n=sum_(j<=n) tau_j, spectral diagonalization gives

    y^n=R_n(A_h)P r,   R_n(lambda)=product_(j<=n)(1+tau_j lambda)^(-1).

The elementary product inequality product(1+tau_j lambda)>=1+t_n lambda holds without any restriction on step ratios. Let beta=1-2alpha, so 0<beta<1. Then

    sup_(lambda>0) lambda^beta R_n(lambda)
      <= c_beta t_n^(-beta),
    c_beta=sup_(x>0) x^beta/(1+x)=beta^beta(1-beta)^(1-beta).

Using (D_alpha), the homogeneous equation, and commuting spectral powers gives

    ||D_tau y^n||_(V_h*)
      <= C_alpha ||A_h^(1-alpha)R_n(A_h)P r||_2
      <= C_alpha c_beta t_n^(2alpha-1) ||A_h^alpha P r||_2
      <= C_alpha^2 c_beta t_n^(2alpha-1) ||r||_V.

Set q=4/3. Since alpha>1/8, q(1-2alpha)<1. The function t^(-q(1-2alpha)) is decreasing, so its right-endpoint sum on every partition is bounded by its integral. Hence

    (sum_n tau_n ||D_tau y^n||_(V_h*)^(4/3))^(3/4)
      <= C_alpha^2 c_beta
         [1-(4/3)(1-2alpha)]^(-3/4)
         T^(2alpha-1/4) ||r||_V.                                      (H_alpha)

Thus the exponent threshold in this full-test route is alpha>1/8, rather than the alpha>1/4 threshold of the stronger L2-derivative route. At alpha=1/8 this particular pointwise integration argument has a logarithmic majorant; it makes no assertion that an endpoint orbit estimate is impossible.

## 3. Application to the actual mass initialization

Let S be the existing solenoidal energy projection and Pi the proved H2 Fortin map. Both S u_0 and Pi u_0 lie in Z_h. The exact identity is

    S u_0-Pu_0=(S u_0-Pi u_0)+P(Pi u_0-u_0).

Write a=S u_0-Pi u_0 and r=Pi u_0-u_0. The already-proved static bounds give

    ||a||_V <= C h(1+nu^(-1)) M,
    ||r||_V <= C h M,
    ||r||_2 <= C h^2 M.

For the homogeneous orbit started at a, testing D_tau x^n+A_hx^n=0 with D_tau x^n, multiplying by tau_n and summing yields

    sum_n tau_n ||D_tau x^n||_2^2 <= a_nu(a,a)/2.

Indeed 2 a_nu(x^n,x^n-x^(n-1)) is the energy increment plus the nonnegative increment energy, and the homogeneous equation contributes -2 tau_n ||D_tau x^n||_2^2. Poincare and Holder therefore give

    ||D_tau x||_(l_tau^(4/3)(V_h*))
      <= C_P T^(1/4) (a_nu(a,a)/2)^(1/2)
      <= C_(D,nu,T) h(1+nu^(-1)) M.

For the homogeneous orbit started at P r, (H_alpha) instead gives C_(alpha,D,nu,T) h M. Adding the two orbits proves, conditional only on (F_alpha),

    ||D_tau R_n(A_h)(S u_0-Pu_0)||_(l_tau^(4/3)(V_h*))
       <= C h(1+nu^(-1)) M.

This is precisely the homogeneous component associated with the actual original mass initialization. No H1 bound for P r, no minimum mesh size, no time-step coupling, and no Stokes domain H2 regularity were inserted. In particular it is unnecessary in this route to prove ||A_h^(1/4+epsilon)(S u_0-Pu_0)||_2=O(h).

## 4. Remaining tasks and limits

The actual graded-mesh result (F_alpha) for any alpha>1/8 remains unproved. Ordinary L2 contraction alone proves it only at alpha=0. Interpolating that contraction with the false H1 projector estimate cannot supply a positive exponent. Nor does the static MINI inf-sup inequality prove (F_alpha).

The same Fortin map has exact element means, integral_K(Pi u-u)=0, because its bubble correction uses the unweighted element integral. This cancellation is genuine additional structure, but neither it nor the local h_K^2 L2 error was used to claim an unproved fractional bound. The independent scalar mass-projection reduction under the supplier owner's smooth helper is a possible route to such a bound; its elliptic energy equivalence by itself supplies no fractional regularity.

Even a proof of (F_alpha) closes only the homogeneous initialization component. The original nonlinear error equation must still be treated, with the actual full-test derivative and the original three-dimensional assumptions. This note does not turn an arbitrary V* residual into a uniformly bounded full-test projected residual; that would again import the false H1 projector bound. Smooth-in-time consistency terms may permit a separate cancellation argument, but it has not been proved in this note.

## 5. Asymmetric version for the actual smooth-data defect

The two fractional gains need not have the same exponent. Suppose the test-side estimate is proved only at some alpha>0,

    ||A_h^alpha P v_h||_2 <= C_test ||v_h||_V,   v_h in V_h,

and suppose a separate estimate holds just for the actual defect r=Pi u_0-u_0,

    ||A_h^beta P r||_2 <= C_data h M,

where alpha+beta>1/4 and 0<alpha+beta<1. The second assertion need not be a bound for arbitrary v in V. The same spectral proof, now using

    A_h^(1-alpha) R_n P r
       = A_h^(1-alpha-beta) R_n A_h^beta P r,

gives

    ||D_tau y^n||_(V_h*)
       <= C_test c_(1-alpha-beta) t_n^(alpha+beta-1)
          ||A_h^beta P r||_2,

and hence

    ||D_tau y||_(l_tau^(4/3)(V_h*))
       <= C_test C_data c_(1-alpha-beta)
          [1-(4/3)(1-alpha-beta)]^(-3/4)
          T^(alpha+beta-1/4) h M.

This is another proved conditional reduction. A generic test-side shift smaller than 1/8 could therefore suffice if one proves a sufficiently stronger *restricted* fractional estimate for the actual smooth-solenoidal Fortin defect. In particular, no argument here establishes that the two gains must coincide. Neither of these asymmetric spatial estimates has been proved in this note.

## 6. A restricted oscillation interface exploiting exact cell means

Here is a more targeted sufficient estimate for the second asymmetric bound. It is explicitly **unproved**. For beta>0, write m_K w=|K|^(-1) integral_K w. Consider

    (sum_K h_K^(4beta)
       ||A_h^beta z_h-m_K(A_h^beta z_h)||_(L2(K))^2)^(1/2)
           <= C_beta ||z_h||_2,   every z_h in Z_h.              (O_beta)

This is an oscillation estimate; it is not the generally problematic weighted estimate for the complete projected field. The actual Fortin defect r=Pi u_0-u_0 has integral_K r=0 and local bound ||r||_(L2(K))<=C h_K^2 ||D2 u_0||_(L2(omega_K)). Thus self-adjointness and Cauchy–Schwarz give, **if (O_beta) is proved**,

    |(A_h^beta P r,z_h)|
      = |(r,A_h^beta z_h)|
      = |sum_K(r,A_h^beta z_h-m_K(A_h^beta z_h))_K|
      <= (sum_K h_K^(-4beta)||r||_(L2(K))^2)^(1/2)
         (sum_K h_K^(4beta)
             ||A_h^beta z_h-m_K(A_h^beta z_h)||_(L2(K))^2)^(1/2)
      <= C h^(2-2beta) M ||z_h||_2,

provided beta<=1; bounded patch overlap supplies the final global estimate. Taking the L2 supremum yields

    ||A_h^beta P r||_2 <= C h^(2-2beta) M.

For beta<1/2 this is at least first order for h<=1. It would therefore supply the special-data side of section 5 whenever alpha+beta>1/4. The purpose is to isolate exactly how zero cell means could cancel a smooth pressure-gradient component transported from a coarser region into a much finer region. No local or fractional bound on that transported component is established by this calculation, and (O_beta) remains a separate actual-MINI theorem to prove or refute.
