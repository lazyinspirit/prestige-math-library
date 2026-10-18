# Direct boundary-strip initial layers: an arbitrary-partition model estimate

Research only, 2026-10-18. This note proves a scalar/vector-valued normal heat-flux model estimate. It does **not** identify actual MINI pressure with this model, prove a uniform discrete boundary-strip bound, or settle the original smooth instantaneous pressure rate. It isolates two precise additional obligations for any direct boundary-layer route.

Read CLAUDE.md and README.md fully, the complete cycle4 fractional-initialization reduction and actual-MINI mass-Schur/boundary-layer note, the canonical H2 Fortin lemma, and the current smooth velocity and integrated-pressure theorem. No new literature reading is claimed. No canonical content, controls, manifests, hashes, tests, gates, commits or publication were touched.

## 1. Boundary-strip energy is enough for the normal heat-flux model

Let X be a real Hilbert space, nu>0, and f in L2((0,infinity);X). Suppose, for constants B>=0 and sigma in (0,1/2],

    integral_0^delta ||f(y)||_X^2 dy <= B^2 delta^(2 sigma),   every delta>0.    (S)

The restriction to every delta is harmless if a local strip bound and the complete L2 norm are both available: enlarging B gives it for delta above any fixed strip width.

Define the X-valued Dirichlet heat mass-loss output

    Q_f(t) = [1/(2 sqrt(pi nu))] t^(-3/2)
             integral_0^infinity y exp(-y^2/(4nu t)) f(y) dy.              (1)

All integrals exist by Cauchy--Schwarz. Set gamma=3/4-sigma/2, so 1/2<=gamma<3/4. Then

    ||Q_f(t)||_X <= C_(nu,sigma) B t^(-gamma),   t>0.                      (2)

Here is a direct proof requiring no trace theorem. Put ell=sqrt(t), decompose the halfline into I_0=(0,ell) and I_j=(2^(j-1)ell,2^j ell), j>=1, and apply Cauchy--Schwarz separately. On I_0 the L2 norm of y exp(-y^2/(4nu t)) is at most C_nu t^(3/4); (S) bounds the L2 norm of f by B t^(sigma/2). On I_j the first factor is at most

    C 2^(3j/2) t^(3/4) exp(-4^(j-1)/(4nu)),

and the second is at most B 2^(j sigma) t^(sigma/2). The geometric-Gaussian series is finite, uniformly in t. Multiplying its sum by the prefactor in (1) proves (2).

Consequently Q_f belongs to L^(4/3)((0,T);X), with

    ||Q_f||_(L^(4/3)(0,T;X))
      <= C_(nu,sigma) B [1-(4/3)gamma]^(-3/4) T^(3/4-gamma).            (3)

This shows exactly why an arbitrarily small *positive* strip-energy gain over mere L2 data removes the critical t^(-3/4) time majorant in this model. A nonzero bounded trace corresponds to sigma=1/2 and the milder t^(-1/2) output. At sigma=0 this proof provides only the nonintegrable endpoint majorant; it does not assert failure for every L2 input.

## 2. The same model bound survives arbitrary backward-Euler partitions

Let tau_j>0, t_n=sum_(j<=n)tau_j, and let mu_n be the probability law of

    S_n=E_1+...+E_n,

where E_j are independent exponential random variables of mean tau_j. This auxiliary probability space is finite dimensional and can equally be expressed by elementary integrals over (0,infinity)^n. Its Laplace transform is

    integral exp(-lambda s) dmu_n(s)
        = product_(j<=n)(1+tau_j lambda)^(-1).                           (4)

For every 0<gamma<1,

    integral s^(-gamma) dmu_n(s)
         <= Gamma(1-gamma) t_n^(-gamma).                                (5)

Indeed the elementary gamma integral gives

    s^(-gamma)=Gamma(gamma)^(-1)
               integral_0^infinity lambda^(gamma-1)exp(-lambda s) dlambda.

Tonelli, (4), and product(1+tau_j lambda)>=1+t_n lambda bound the expectation by

    Gamma(gamma)^(-1) integral_0^infinity
       lambda^(gamma-1)/(1+t_n lambda) dlambda
      = Gamma(1-gamma)t_n^(-gamma).

The last equality is the beta integral. It can instead be replaced by a finite constant C_gamma t_n^(-gamma) by splitting the integral at 1/t_n, avoiding any special-function identity. This supplies the same estimate with C_gamma=[1/gamma+1/(1-gamma)]/Gamma(gamma).

Define the discrete model output by subordination,

    Q_f^n=integral Q_f(s) dmu_n(s).                                       (6)

Formulae (2) and (5) prove the Bochner integrability and

    ||Q_f^n||_X <= C_(nu,sigma) Gamma(1-gamma) B t_n^(-gamma).

Since t^(-(4/3)gamma) is decreasing, its right-endpoint sum on every partition is bounded by its integral. Therefore

    (sum_n tau_n ||Q_f^n||_X^(4/3))^(3/4)
      <= C_(nu,sigma) Gamma(1-gamma) B
          [1-(4/3)gamma]^(-3/4) T^(3/4-gamma).                           (7)

There is no time-step ratio bound, minimum step, or mesh/time relation here. Equation (4) shows that (6) is precisely the product-resolvent version of the heat output wherever that output is defined by the corresponding commuting heat spectral calculus. More generally, the proof applies directly to any bounded finite-dimensional semigroup observation satisfying (2), by diagonalizing its positive self-adjoint generator; the product-resolvent and exponential mixtures agree eigenvalue by eigenvalue. It does not imply that an arbitrary MINI pressure observation satisfies (2).

## 3. Corner powers explain the suggested boundary-trace thresholds

These are integrability checks, not a full elliptic regularity theorem. A two-dimensional corner field with magnitude O(r^(lambda-1)) has squared boundary trace bounded by a constant times

    integral_0^epsilon r^(2lambda-2) dr,

which is finite exactly when lambda>1/2. For an isolated three-dimensional vertex, the boundary area element is comparable to r dr dtheta, giving

    integral_0^epsilon r^(2lambda-1) dr,

finite when lambda>0. A three-dimensional edge repeats the two-dimensional transverse threshold lambda>1/2. Thus, provided angular factors and coefficient sums are controlled, those strict exponents are consistent with an L2 boundary trace and the sigma=1/2 model. Checking an individual power does not bound a general polyhedral solution or its finite-element approximation uniformly.

## 4. Exact remaining obligations for actual MINI

For the special r_h=Pi_h u_0-u_0, the actual initial velocity is P_Zh r_h. The known identities and local approximation give

    P_Zh r_h = Pi_h u_0-R_h u_0+R_h grad phi_h,
    ||grad phi_h||2 <= C h^2 ||u_0||H2,
    integral_K r_h=0,
    ||r_h||L2(K)<=C h_K^2 ||D2u_0||L2(omega_K).

An L2 norm of grad phi_h alone does not provide (S) with any positive sigma uniformly over graded meshes: normalized L2 functions can put all their energy in an arbitrarily thin boundary strip. The known scalar coercivity of g_h also does not add such a bound automatically. Moreover, even a boundary-strip estimate for this scalar correction would still need a rigorously established map from actual mixed-MINI pressure to a normal-flux/harmonic-pressure observation with compatible constants. The flat halfline calculation cannot supply that map on its own.

A successful direct route could prove the two assertions separately:

1. A mesh-independent positive strip-energy exponent for the actual correction, with the required O(h) coefficient after combining the local Fortin defect and unconstrained mass error.
2. A uniform actual discrete-Stokes pressure observation estimate from that strip norm (including edges, vertices, the weak divergence constraint, and the full test space).

The model calculation above settles the arbitrary-time-partition passage once an appropriate continuous-semigroup observation estimate has been proved. It does not settle either spatial assertion. No original-scope counterexample or completed original-scope proof is claimed.

## 5. Stronger actual-MINI result: homogeneous observation transfer is contractive

There is a sharper fact than the pointwise argument in section 2. It applies directly to the actual finite-dimensional MINI generator and **any fixed linear observation**, including full-test acceleration and mixed pressure. It still requires a continuous-time spatial observation estimate.

Let H be finite dimensional, A positive self-adjoint, Y a normed space, C:H->Y linear, and x in H. Put

    y(t)=exp(-tA)x,
    y^n=product_(j<=n)(I+tau_j A)^(-1)x.

Then for every q>=1,

    sum_(n=1)^N tau_n ||C y^n||_Y^q
         <= integral_0^infinity ||C exp(-sA)x||_Y^q ds.                  (8)

In particular no time-step ratios occur, and the constant is exactly one. The right side is finite because A is positive definite and H is finite dimensional; its uniformity in a family of meshes is the separate spatial issue.

Here is an elementary proof avoiding any positive-kernel claim for the spatial semigroup. Let k_j(s)=tau_j^(-1)exp(-s/tau_j) for s>0, and rho_n=k_1*...*k_n. Each rho_n is a nonnegative probability density. Diagonalizing A and integrating scalar exponentials proves

    y^n=integral_0^infinity exp(-sA)x rho_n(s) ds.                        (9)

Define rho_0 as the unit point mass at zero. Convolution with k_n satisfies the distributional identity

    tau_n rho_n'=rho_(n-1)-rho_n.

Equivalently, this follows by differentiating the elementary convolution integral for n>=2, and directly for n=1 with its boundary point mass included. Summing gives, for s>0,

    [sum_(n=1)^N tau_n rho_n(s)]'=-rho_N(s).

The sum at s=0+ is one: only tau_1 rho_1 contributes, and convolutions with at least two exponential densities vanish there. Hence

    sum_(n=1)^N tau_n rho_n(s)
       = 1-integral_0^s rho_N(a)da
       = integral_s^infinity rho_N(a)da <=1.                            (10)

Thus the weighted density is exactly the survival function of the final exponential sum. Jensen applied to (9), then Tonelli and (10), proves (8). For n=1 the same formula holds directly. Repeated or widely varying time steps cause no difficulty.

For actual MINI take H=Z_h, A=A_h from the fractional reduction, and x=P_Zh(Pi_hu_0-u_0). Two observations of direct relevance are:

* C_acc z is the functional v_h->(-A_hz,v_h)_2 on all of V_h, equipped with the actual V_h* norm.
* C_pre z is the unique pressure in Q_h satisfying

      b(v_h,C_pre z)=(A_hz,v_h)_2-a_nu(z,v_h),    every v_h in V_h.

The right side vanishes on Z_h by the definition of A_h; finite-dimensional MINI inf-sup therefore gives this unique pressure. This defines a linear observation independent of time. For y'=-A_hy the full mixed homogeneous equation is

    (y',v_h)_2+a_nu(y,v_h)+b(v_h,C_pre y)=0,

and for the product-resolvent orbit precisely the same identity holds with y' replaced by D_tau y^n. Thus these observations are exactly the homogeneous full-test derivative and homogeneous mixed pressure, rather than surrogate quantities.

Applying (8) with q=4/3 gives the **actual** two transfer inequalities

    ||D_tau y||_(ell_tau^(4/3)(V_h*))
      <= ||-A_h exp(-tA_h)x||_(L^(4/3)(0,infinity;V_h*)),

    ||p_y||_(ell_tau^(4/3)(Q_h))
      <= ||C_pre exp(-tA_h)x||_(L^(4/3)(0,infinity;Q_h)).                 (11)

The same holds for the full initial mismatch x=S_hu_0-P_Zh u_0. The energy-controlled component S_hu_0-Pi_hu_0 can already be estimated separately, as in the earlier reduction.

This transfer eliminates the *entire* arbitrary-partition difficulty for the homogeneous initialization response: any uniform continuous-time observation theorem for that actual initial datum passes to backward Euler with no loss. It does not prove the missing continuous-time estimate. The horizon on the right is infinity; replacing it silently by T would be incorrect because the exponential mixture has an unbounded tail. A genuine application can establish the infinite-horizon bound directly, or control the tail using a proved uniform decay/observation estimate. A finite-dimensional spectral gap alone, without uniform observation bounds, must not be used to claim a mesh-independent tail constant.

## 6. The actual observations have a uniformly controlled infinite-time tail

For the two particular MINI observations in section 5, the tail caveat can be resolved directly. Fix any T>0. Poincare and coercivity give the uniform spectral lower bound

    A_h >= lambda_0 I,   lambda_0=nu/C_P^2.

For z in Z_h,

    ||C_acc z||_(V_h*) <= C_P ||A_h z||2,
    ||C_pre z||2 <= beta^(-1)[C_P||A_h z||2+2nu||z||V]
                 <= beta^(-1)[C_P||A_h z||2+2sqrt(nu)||A_h^(1/2)z||2].   (12)

The pressure estimate is simply actual MINI inf-sup applied to its defining full-test identity. The last inequality follows from a_nu(z,z)>=nu||z||V^2 and (A_hz,z)=a_nu(z,z). No stability of P_Zh on V is used.

For theta=1 or 1/2, the spectral theorem gives

    ||A_h^theta exp(-tA_h)x||2
      <= c_theta t^(-theta) exp(-lambda_0 t/2)||x||2,                    (13)

where c_theta=sup_(s>0) s^theta exp(-s/2). Indeed split exp(-t lambda) into two equal exponential factors, use lambda>=lambda_0 on one, and optimize the other. Equations (12)--(13) imply

    ||C_acc exp(-tA_h)x||_(L^(4/3)(T,infinity;V_h*))
      +||C_pre exp(-tA_h)x||_(L^(4/3)(T,infinity;Q_h))
          <= K_(T,nu,D,beta) ||x||2.                                  (14)

The constant is finite and mesh independent because both scalar majorants t^(-1)exp(-lambda_0t/2) and t^(-1/2)exp(-lambda_0t/2) are integrable to the power 4/3 away from t=0. It is allowed to depend on the fixed final horizon T. No claim of uniformity as T decreases to zero is made.

Combining (11) and (14), for either actual observation C,

    ||Cy^n||_(ell_tau^(4/3)(0,T;Y))
       <= [ ||C exp(-tA_h)x||_(L^(4/3)(0,T;Y))^(4/3)
                + K_(T,nu,D,beta)^(4/3)||x||2^(4/3) ]^(3/4).           (15)

For x=P_Zh(Pi_hu_0-u_0), orthogonal contraction and the proved H2 Fortin estimate give ||x||2<=Ch^2 M. Thus a first-order finite-horizon continuous-time pressure or full-test estimate for the actual special defect suffices for the original arbitrary-partition homogeneous response, with only an additional O(h^2) term. For the full mismatch S_hu_0-P_Zh u_0 the known L2 bound instead gives an O(h) tail. The missing estimate is therefore entirely a continuous-time, near-t=0 spatial observation problem; neither arbitrary time-step ratios nor the infinite mixture tail are additional unresolved prerequisites.

## 7. Conversely, continuous time is a necessary test

For fixed h, A_h and C are finite dimensional. On uniform partitions tau=T/N, the scalar functions (1+tau lambda)^(-n), reconstructed right constantly in time, converge uniformly on [0,T] to exp(-t lambda) for each of the finitely many eigenvalues lambda of A_h. To see this without an approximation theorem, write log(1+tau lambda)=tau lambda+O(tau^2 lambda^2); multiplying by n<=T/tau makes the exponent error O(T tau lambda^2), and the discrepancy between t and its right endpoint is at most tau. Finite spectral sums and boundedness of the fixed finite-dimensional observation C then give uniform convergence of observed orbits.

Hence

    lim_(N->infinity) sum_(n=1)^N tau ||C(I+tau A_h)^(-n)x||Y^(4/3)
       = integral_0^T ||C exp(-tA_h)x||Y^(4/3)dt.                       (16)

Any mesh-independent discrete homogeneous bound therefore implies the same finite-horizon continuous bound, by passing to this limit separately for each mesh. Every original upper time-step restriction is satisfied eventually on these uniform refinements. Combining (15) and (16), a uniform first-order homogeneous actual-MINI estimate under arbitrary time partitions is equivalent, up to the already controlled O(h^2) tail for the special defect, to its finite-horizon continuous-semigroup estimate. This is an exact reduction for the actual observation; it neither broadens the data class nor replaces the full test norm.

## 8. The data-side boundary-strip condition is now available

The separate current research proof `../numerical-analysis-remaining-71-2026-10-17-ROOT-smooth-pressure-graded-cycle4/actual-mini-leray-lp-near-two.md`, read in full after sections 1--7 were written, proves actual constrained-projection Lp stability for a mesh-independent open interval about p=2. Its proof uses explicit interpolation inputs and a quantitative openness argument; canonical suppliers for those inputs remain a separate integration matter. For fixed admissible p>2 let sigma=1/2-1/p, chosen sufficiently small that 2-3sigma>1. That proof gives

    ||P_Zh(Pi_hu_0-u_0)||Lp <= C h^(2-3sigma)||u_0||H2.                 (17)

This follows directly from its Lp projection bound and its H2 Fortin Lp interpolation error. It does not require a spatial derivative of P_Zh. Thus the **actual** special initial datum x itself, and not only its scalar correction, satisfies

    ||x||L2(D_delta) <= C delta^sigma h^(2-3sigma)||u_0||H2,             (18)

because |D_delta|<=C_D delta and Holder gives ||x||L2(D_delta)<=|D_delta|^sigma||x||Lp. For large delta the same form follows by enlarging the constant, using boundedness of D. This is the positive strip-energy gain sought on the data side.

The remaining unproved issue is an actual-MINI observation estimate taking advantage of that gain. In the flat normal heat model, (18) corresponds exactly to the pointwise exponent

    gamma = 1/2+1/(2p) < 3/4,

and sections 1--2 then yield an O(h^(2-3sigma)) time norm. It would be incorrect to apply the flat-model formula to the actual mixed finite-element pressure without proving that observation estimate. Even uniform analyticity of the actual semigroup on Lp, if established separately, bounds A_h exp(-tA_h) only by t^(-1) in Lp. It does not by itself supply gamma<3/4 for pressure or for the full-test norm. Actual boundary/constraint locality is still needed.

A useful exact compatibility for a parameter-dependent investigation is already present in the actual scalar Schur formula. For smooth solenoidal u and its actual mass-pressure phi_h,

    (u-P_Zh u,v_h)_2=b(v_h,phi_h),   every v_h in V_h.                   (19)

Indeed u-R_hu is L2-orthogonal to V_h and the remaining difference is R_h grad phi_h. For F=-nu Delta u, let the steady discrete mixed Stokes solution be (s_h,q_h), so a_nu(s_h,v_h)+b(v_h,q_h)=(F,v_h). Set x=P_Zh u-s_h. For lambda>0 the actual mixed Brinkman solution with right-hand side lambda u+F has

    w_lambda=s_h+lambda(lambda+A_h)^(-1)x,
    pi_lambda=q_h+lambda C_pre(lambda+A_h)^(-1)x+lambda phi_h.           (20)

To check (20), insert it in the full V_h equation and use (19), the definition of C_pre, and (lambda+A_h)(lambda+A_h)^(-1)=I. Its divergence constraint follows from w_lambda in Z_h. Hence the Laplace-transform pressure initial layer is

    C_pre(lambda+A_h)^(-1)x
       =[pi_lambda-q_h-lambda phi_h]/lambda.                            (21)

The mass-pressure term lambda phi_h must cancel in any high-parameter estimate; bounding pi_lambda and lambda phi_h separately can destroy that cancellation. Equations (19)--(21) are exact algebraic identities, not a claimed parameter-robust approximation bound. Here s_h is the discrete steady response to the force F; no identification with an inconsistently defined solenoidal projection is needed.
