# A rigorous nonlinear realization criterion from a stronger actual crossentry

Research proof, 2026-10-18. This is a sufficient criterion, not an established counterexample: its actual coupled crossentry hypothesis is presently UNPROVED. It explains how a sufficiently strong pressure-channel construction could satisfy the original smooth Navier–Stokes and backward-Euler obligations without assigning the inadmissible initial datum Kq or invoking a false energy-only pressure estimate. No canonical/control edits.

## Final criterion and retained first proof

The final sufficient hypothesis is (13): for ANY fixed integer m>=1, lambda_j^[m/(4(m+1))] a_j→infinity implies the stated original-scope nonlinear/BE refutation. Consequently ANY actual strict power lower bound a_j>=c lambda_j^(−gamma), gamma<1/4, suffices. Section5 proves this by finite real-amplitude cancellation. The first m=1 proof, with exponent 1/8, is retained in Sections1–4 as a corollary and as the complete underlying small-data/Laplace/BE construction. No merely logarithmic critical-endpoint claim is made.

Fix dimension two, one original admissible polygon D, viscosity nu>0 and T>0, one fixed smooth compactly supported exactly divergence-free u_* and a shape-regular sequence of actual MINI meshes. Let P_j be their actual weak-kernel mass projections and let W_j,W_(lambda,j) be their actual mass/Brinkman divergence lifts. Suppose there are lambda_j→infinity and q_j in Q_j with ||q_j||2=1 such that

    a_j=|(u_*,W_(lambda_j,j)q_j−W_jq_j)|,
    lambda_j^(1/8) a_j → infinity.                       (1)

For this retained m=1 sufficient hypothesis there are amplitudes epsilon_j bounded by one fixed arbitrarily small number, stationary ORIGINAL smooth solutions u_j=epsilon_j u_*, p_j=0 with forces

    f_j=−nu epsilon_j Delta u_*+epsilon_j² N_s(u_*),       (2)

and genuine backward-Euler MINI solution branches initialized by P_j u_j whose instantaneous pressure ell^(4/3)L2 norms diverge. All exact-solution data norms, M, M_infinity and M_E in the current smooth theorem stay uniformly bounded; the original explicit timestep condition can be met. The final Section5 relaxes this first sufficient hypothesis to every fixed m. The actual coupled crossentry condition remains unproved.

## 1. Uniform positive fractional embedding without a projector theorem

For each mesh let A be the positive mass Stokes operator on Z_h. Its form obeys a(z,z)>=nu||grad z||2². The following endpoint estimate is uniform:

    ||z||4 <= C nu^(−1/4)||A^(1/4)z||2,     z in Z_h.     (3)

Here is a direct proof that does not assume physical fractional stability of any orthogonal projector. Extend all zero-boundary functions by zero to R2. For z=x+y with x,y in Z_h, translation by a vector of length r obeys

    ||z(.+a)−z||2 <=2||x||2+r||grad y||2.

Therefore its square is bounded by a fixed constant times the quadratic K-functional K2(r/sqrt(nu),z)^2 for the finite-dimensional pair (L2(Z_h), form-norm(Z_h)). In a mass-orthonormal eigenbasis of A, minimizing separately gives

    K2(t,z)^2=sum_k [t² alpha_k/(1+t² alpha_k)]|z_k|².

Integrate the translation estimate over a with kernel |a|^(−3). Polar coordinates and the nonnegative finite spectral sum give

    [z_zero]_(1/2,2)^2
       <= C nu^(−1/2) integral_0^infinity t^(−2)K2(t,z)^2 dt
       = C' nu^(−1/2) sum_k alpha_k^(1/2)|z_k|².

The last integral uses integral_0^infinity (1+t² alpha)^−1 dt=pi/(2 sqrt(alpha)). Apply the ACTUAL published `thm-fractional-sobolev-inequality-on-euclidean-space`, read in full, with d=2,p=2,theta=1/2, to obtain (3). Countable Choice is inherited from that supplier. No Fourier/Slobodeckij identification or interpolation-space equality is needed.

The ordinary two-dimensional Ladyzhenskaya estimate ||z||4<=C||z||2^(1/2)||z||V^(1/2) is proved locally in the actual `lem-na-two-dimensional-solenoidal-energy-velocity-uniqueness`; that scalar/componentwise proof does not require z to be exactly divergence-free.

## 2. Uniform small-data semidiscrete velocity bound

The full skew nonlinear vector is N_s(z)=z dot grad z+(div z)z/2. Holder and Ladyzhenskaya give

    ||N_s(z)||_(4/3)<=C||z||2^(1/2)||z||V^(3/2).          (4)

Combining (3) with (4) gives the kernel-dual bound

    ||A^(−1/4)P N_s(z)||2
        <=C_nu||z||2^(1/2)||z||V^(3/2).                 (5)

Here P N means only the finite Riesz representative of the nonlinear functional restricted to Z_h; P is not applied to a purported full L2 vector when the latter is unavailable. The difference estimate follows from the actual bilinear nonlinear form and has constant C times the sum of the corresponding norms.

For the mild semidiscrete equation use

    ||z||X_T=sup_(0<=t<=T)||z(t)||2
                    +sup_(0<t<=T) t^(1/2)||z(t)||V.

Spectral calculus gives ||A^beta exp(−tA)||<=C_beta t^(−beta). The initial state epsilon P u_* and the constant force (2) have linear mild X_T norm at most C_(D,nu,T,u*) epsilon for epsilon<=1. For example the force contributes at most T||f||2 to the L2 bound and C sqrt(t)||f||2 to the V bound before multiplication by sqrt(t).

If z is in an X_T ball of radius R, (5) is at most C R² t^(−3/4). The nonlinear mild convolution has L2 bound

    C R² integral_0^t (t−s)^(−1/4)s^(−3/4) ds=C R²,

and V bound

    C R² integral_0^t (t−s)^(−3/4)s^(−3/4) ds
          =C R² t^(−1/2).

Both beta integrals are finite. The same calculation for differences makes the mild map a contraction on a ball of radius C epsilon when epsilon<=epsilon_0, with epsilon_0 independent of the mesh. This proves the UNIFORM actual velocity estimates

    ||z(t)||2<=C epsilon,
    ||z(t)||V<=C epsilon t^(−1/2),     0<t<=T.          (6)

For each fixed mesh this is the ordinary smooth finite-dimensional Navier–Stokes ODE solution; global existence on [0,T] also follows directly from its skew energy identity, and ordinary finite-dimensional local uniqueness identifies the mild solution. No uniqueness of arbitrary large-step roots is asserted or needed for a counterexample to an any-root conclusion.

## 3. Full mixed Laplace estimate along that actual trajectory

The actual lift bounds, already proved in direct-dual REPORT Sections2,9, give for lambda>=1

    ||W_lambda q||2<=C||q||2,
    ||W_lambda q||V<=C sqrt(lambda)||q||2,
    ||W_lambda q||4<=C lambda^(1/4)||q||2.             (7)

The last is the two-dimensional Ladyzhenskaya inequality, not a fractional projector statement. Let p_h(t) be the actual semidiscrete mixed pressure. Integrate its full mixed equation against exp(−lambda t) on [0,T], and test by W_lambda q. The integrated velocity remains in Z_h, so its lambda-mass-plus-viscosity pairing against this lift vanishes. With hats denoting finite-time Laplace integrals, one obtains EXACTLY

    (p_hat,q)=(epsilon P u_*+f_hat−N_hat
                         −exp(−lambda T)z(T),W_lambda q). (8)

Mass minimality gives (P u_*,Wq)=0 and W_lambda−Wq in Z_h. Thus the initial contribution in (8) is exactly

    epsilon (u_*,W_lambda q−Wq).                       (9)

By (4),(6),(7), the nonlinear contribution satisfies

    |(N_hat,W_lambda q)|
      <=C epsilon² lambda^(1/4)||q||2
                    integral_0^T exp(−lambda t)t^(−3/4)dt
      <=C epsilon² ||q||2.                            (10)

This controls only the actual finite-time Laplace observation; it does not assert a uniform nonlinear instantaneous pressure bound. The smooth forcing and terminal contributions satisfy, respectively,

    |(f_hat,W_lambda q)|<=C epsilon lambda^(−1)||q||2,
    exp(−lambda T)|(z(T),W_lambda q)|
                         <=C epsilon exp(−lambda T)||q||2. (11)

All constants are independent of the mesh and lambda; they may depend on the fixed nu,D,T,u_*. The divergence part of the skew nonlinearity is included in (4),(10).

## 4. Choosing amplitude and passing to actual BE roots

The actual uniform L2 lift bound implies 0<=a_j<=C||u_*||2. Choose epsilon_j=c a_j, with c>0 so small that epsilon_j<=epsilon_0 and C c<=1/4 in (10). Assumption (1) implies lambda_j a_j→infinity and exp(−lambda_jT)/a_j→0. Equations (8)–(11) therefore imply, for all sufficiently large j,

    |(p_hat_j,q_j)| >=(c/2) a_j².

Holder on [0,T] gives

    ||p_j||L^(4/3)(0,T;Q)
       >= [4lambda_j/(1−exp(−4lambda_jT))]^(1/4)
                                     |(p_hat_j,q_j)|
       >=c' lambda_j^(1/4)a_j² →infinity.             (12)

The last divergence is precisely the square of (1). This is why the criterion deliberately demands the stronger exponent 1/8, rather than converting a merely linear 1/4 counterexample by unsupported linearization.

For completeness the passage to backward Euler is only fixed-mesh finite-dimensional analysis. For each j the ODE vector field is polynomial and Lipschitz on a ball around its compact trajectory. For all sufficiently small steps the implicit map is a contraction on the neighboring ball. Taylor consistency and the recurrence e_n<=(1−L tau_n)^−1(e_(n−1)+C tau_n²) give uniform convergence of one genuine BE root branch to the ODE as tau_max→0. Its forcing is constant and hence equals the required step average exactly. Its initialization is the required epsilon_j P_j u_*.

The mixed pressure is a continuous finite-dimensional function of the current velocity: the kernel equation replaces the discrete time derivative by P f−A z−P N_s(z), and inf-sup recovers the unique meanzero pressure from the full residual. The same formula holds for the ODE. Hence the constructed BE pressures converge to p_j uniformly in time along the nodes, and their ell^(4/3)L2 norms converge to the integral norm in (12). Choose the mesh-dependent steps sufficiently small to keep that norm within one of (12), meet tau_max Lambda<=1/2, and send tau_max to zero.

Finally all exact solutions epsilon_j u_* have uniformly bounded approved data quantities; (2) is smooth and uniformly bounded as epsilon_j stays bounded. The mesh maxima are bounded by diam(D), so the original first-order RHS with its explicit data-dependent constant is uniformly bounded, whereas (12) diverges. This proves the criterion, subject ONLY to its substantive unproved hypothesis (1). It does not claim that any currently constructed template satisfies (1), and it does not waive the actual coupled source/observation lower bound.

## 5. Finite real-amplitude cancellation approaches the linear threshold

There is a stronger version of the criterion. Fix ANY integer m>=1. Replace (1) by

    lambda_j^[m/(4(m+1))] a_j →infinity.                (13)

Then the same original-scope nonlinear/BE refutation follows. In particular any actual fixed-source lower bound a_j>=c lambda_j^(−gamma) with gamma<1/4 suffices, by choosing a fixed finite m with gamma<m/[4(m+1)]. This does not settle a merely critical logarithmic violation of the linear threshold.

Here is a complete uniform power-series justification, without deriving a linearized bound by dividing an estimate whose M has a constant floor. Let B_X be the bounded bilinear mild map established in Section2, with norm C_B. The linear coefficient z_1 is the Stokes response to initial P u_* and force −nu Delta u_*, and the quadratic forcing response g_2 is the Stokes response to N_s(u_*), both uniformly bounded in X_T. The velocity coefficients satisfy

    z_1=linear response,
    z_2=g_2−B_X(z_1,z_1),
    z_k=−sum_(r+s=k)B_X(z_r,z_s),     k>=3.           (14)

Choose constants L_1,L_2 bounding the two linear responses. The scalar majorant

    w=L_1 x+L_2 x²+C_B w²

has a power series with nonnegative coefficients, obtained by the convergent binomial series of

    w(x)=[1−sqrt(1−4C_B(L_1x+L_2x²))]/(2C_B)

(with the evident linear formula if C_B=0). It converges for some fixed positive rho, independent of the mesh. Induction in (14) shows ||z_k||X is dominated by the coefficient of w. At any strictly smaller positive rho, positivity gives ||z_k||X<=C rho^(−k). Thus sum epsilon^k z_k converges absolutely in X_T for |epsilon|<rho, solves the actual mild equation by continuity of B_X, and equals its unique small-data solution. This proves the required uniform real power series; a complex analytic continuation is not assumed from an inequality for real data.

For the full bilinear skew vector, Holder gives

    ||B_s(v,w)(t)||_(4/3)
       <=C[||v(t)||4||w(t)||V+||v(t)||V||w(t)||4]
       <=C||v||X||w||X t^(−3/4).                    (15)

Equations (7),(15) consequently give a bilinear Laplace observation norm at most C||v||X||w||X for every lambda>=1 and every unit q. The terminal coefficient has bound C exp(−lambda T)||z_k||X; the only external forcing coefficients are orders one and two, bounded by C/lambda. The finite-time pressure observation therefore has the convergent scalar expansion

    P_(j,lambda)(epsilon)=(p_hat(epsilon),q_j)
       =epsilon d_(j,lambda)+sum_(k>=2)epsilon^k d_(k,j,lambda),
    |d_(k,j,lambda)|<=C R^(−k),     k>=2,             (16)

for fixed R>0, uniformly in mesh and lambda. To see the geometric bound explicitly, (14) bounds each product in the kth nonlinear coefficient by C rho^(−k); there are k−1 terms, and k rho^(−k)<=C(rho/2)^(−k). The forcing and terminal terms obey the same enlarged bound. The linear coefficient obeys

    |d_(j,lambda)−(u_*,W_lambda q_j−Wq_j)|
                              <=C/lambda+C exp(−lambda T). (17)

All estimates follow along the actual velocity solution; no assertion about the full nonlinear instantaneous pressure norm is used in (16).

Choose distinct fixed numbers t_1,...,t_m in (0,1], for example t_l=l/m. The finite matrix (t_l^k)_(1<=k,l<=m) is invertible (a Vandermonde matrix times a nonzero diagonal), so there are fixed real weights w_l satisfying

    sum_l w_l t_l=1,
    sum_l w_l t_l^k=0,        2<=k<=m.                (18)

The zero-order condition is unnecessary because pressure at epsilon=0 is zero. Let W_m=sum|w_l|. For 0<epsilon<=R/2, (16),(18) show

    |sum_l w_l P_(j,lambda)(t_l epsilon)
                       −epsilon d_(j,lambda)|
                              <=C_m epsilon^(m+1).   (19)

Take epsilon_j=c_m a_j^(1/m), choosing the fixed c_m sufficiently small that epsilon_j<=min(epsilon_0,R/2) and C_m c_m^m<=1/4 for every j; the uniform upper bound for a_j makes this possible. Assumption (13) implies lambda_j a_j→infinity and exp(−lambda_jT)/a_j→0. Hence (17),(19), with the observation q_j reversed if necessary, give

    |sum_l w_l P_(j,lambda_j)(t_l epsilon_j)|
                           >=(1/2)epsilon_j a_j.     (20)

At least one of the m actual smooth stationary-data amplitudes t_l epsilon_j therefore has pressure Laplace observation of absolute value at least epsilon_j a_j/(2W_m). Holder as in (12) yields, for that data choice,

    ||p_j||L^(4/3)(0,T;Q)
        >=c_m' lambda_j^(1/4)a_j^(1+1/m) →infinity.  (21)

The divergence is exactly (13) raised to power 1+1/m. The amplitudes remain uniformly small, all prescribed smooth data quantities remain uniformly bounded, and Section4 passes the selected actual trajectory to a genuine backward-Euler branch with arbitrarily small original-admissible steps. This proves the extended criterion.

The construction uses a finite linear COMBINATION of observations only to identify one actual data amplitude with a large pressure. It does not combine different solutions into a purported Navier–Stokes solution. Each candidate amplitude individually has exact stationary solution t_l epsilon_j u_* and its own force (2). The still-unproved obligation is an actual coupled crossentry satisfying (13) on one fixed admissible shape family. Neither the ideal normal transfer factor nor an Hs-only projection counterexample supplies it.

## 6. Uniformly bounded varying smooth sources are also admissible

The fixed source in Sections 1–5 is convenient, not required by the original pressure claim. Let u_j be any family of smooth exactly solenoidal no-slip velocities on the SAME fixed two-dimensional domain, with uniformly bounded H² norms. They may, for example, belong to a fixed finite-dimensional space of compact smooth coarse-patch sources with uniformly bounded coefficients. Suppose the actual entries

    a_j=|(u_j,W_(lambda_j) q_j-W_h q_j)|,
    ||q_j||2=1,

satisfy the Section 5 strict-power criterion for one fixed integer m. Then the same original-scope pressure refutation follows.

Indeed replace u_* everywhere by u_j. Their L² norms, the stationary linear forces -nu Delta u_j, and their quadratic forces N_s(u_j) are uniformly bounded by the assumed H² bound and the fixed-domain two-dimensional Sobolev inequalities. Thus the Kato analytic radius, the velocity coefficient majorant, the pressure coefficient bounds, the finite real extraction weights, the finite-T forcing error, and the terminal error all have the SAME mesh- and j-independent constants. The finitely many amplitudes chosen for each j therefore give exact stationary smooth data with uniformly bounded original M and all approved constants. Fixed-mesh BE approximation is still selected separately for each j, exactly as before. No convergence of u_j or fixed-source subsequence is needed.

This observation does not establish a source-control lower bound. D_j-dependent coefficients are useful only after proving they remain uniformly bounded and produce the actual pressure-observed entry. A source family annihilated by the relevant adjoint channel cannot be used merely because its dimension is large.
