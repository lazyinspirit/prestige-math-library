# Smooth instantaneous pressure: temporally regular residual route

## Status and scope

The unchanged original instantaneous pressure estimate is **not proved here**. This note supplies an elementary mixed-parabolic estimate for a genuinely narrower class of residuals, applies it to the smooth spatial consistency residual, and identifies exactly why it does not close the actual nonlinear problem. In particular, it avoids mistaking restricted-kernel maximal regularity for the required full-test estimate.

Read CLAUDE.md, README.md and SCHEMA.md fully, the actual smooth velocity theorem, scheme and escalation remark, cycle3's smooth derivative review, and cycle4's smooth helper and proposed H2 Fortin approximation. Coordinated with the original pressure owner, its smooth helper, and the independent graded-mesh structure helper. No outside theorem is imported. The only writes are in this research directory; no canonical content, manifests, hashes, controls, tests or gates are changed.

All spaces below are the actual MINI spaces. The mass inner product on Z_h is L2; V norm is the H1 seminorm, and a(v,w)=2nu(epsilon(v),epsilon(w)), the actual symmetric-gradient Stokes form. Its quadratic form is bounded above and below by dimension-independent positive multiples of nu||v||V^2 on H1_0; no pointwise discrete solenoidality is assumed. The argument holds on arbitrary allowed time partitions and does not use quasiuniformity, an inverse inequality, or H1 stability of the mass projector P=P_Zh.

## 1. A useful positive estimate for time-regular V* loads

Let F:[0,T] -> V_h* be absolutely continuous with

    ||F||Linf(V_h*) <= epsilon,
    ||F'||L1(V_h*) <= K epsilon.

The dual norms here test all V_h. Let F_n=F(t_n), and let x^0=0 and x^n in Z_h solve

    (D_tau x^n,z)+a(x^n,z)=F_n(z),  z in Z_h.

Then the full-test derivative has the uniform estimate

    ||D_tau x||ell^(4/3)(V_h*)
       <= C_P T^(1/4) nu^(-1/2) (1+K) epsilon.

In particular, this is a valid special mixed-parabolic estimate despite the false full-test H1-projector assertion.

Here is a complete proof. Define z(t) in Z_h by a(z(t),w)=F(t)(w) for every w in Z_h. Finite-dimensional coercivity and differentiation give

    ||z(0)||V <= nu^(-1)||F(0)||V_h*,
    ||z'||L1(V) <= nu^(-1)||F'||L1(V_h*).

Writing ||z||a=sqrt(a(z,z)), the same coercivity argument more sharply gives ||z(0)||a<=nu^(-1/2)||F(0)||V_h* and ||z'||L1(a)<=nu^(-1/2)||F'||L1(V_h*).

Let A be the positive self-adjoint mass Stokes operator on Z_h and let R_n=(I+tau_n A)^(-1). For any starting index j, the homogeneous sequence y^j=g, y^n=R_n y^(n-1), n>j, satisfies

    sum_(n>j) tau_n ||D_tau y^n||2^2 <= a(g,g)/2.

Indeed D_tau y^n=-A y^n and the identity obtained by testing the recursion against D_tau y^n yields

    tau_n ||D_tau y^n||2^2
      + [a(y^n,y^n)-a(y^(n-1),y^(n-1))
         +a(y^n-y^(n-1),y^n-y^(n-1))]/2 = 0.

Summation proves the assertion. Poincare and Holder therefore give, with q=4/3,

    ||D_tau y||ell^q(V_h*)
      <= C_P T^(1/4) [a(g,g)/2]^(1/2).

Now write z_n=z(t_n), d_j=z_j-z_(j-1). The exact Duhamel representation is

    x^n = z_n - R_n ... R_1 z_0
                 - sum_(j=1)^n R_n ... R_j d_j.

Equivalently, group by each increment d_j, including d_0=z_0: x is the sum of responses to loads which switch on the static equilibrium d_j at index j (at index 1 for d_0). For j>=1 that response is zero before j, and equals d_j-R_n...R_j d_j for n>=j. Its derivative equals the negative derivative of the homogeneous orbit started with d_j at time t_(j-1). Thus the preceding homogeneous estimate, followed by the triangle inequality in ell^q(V_h*), gives

    ||D_tau x||ell^q(V_h*)
      <= C_P T^(1/4)/sqrt(2)
           (||z_0||a + sum_j ||d_j||a)
      <= C_P T^(1/4) (2nu)^(-1/2)
           (||F(0)||V_h*+||F'||L1(V_h*)).

For the d_0 contribution the equilibrium is switched on at index 1. The displayed Duhamel formula has d_1 and d_0 both switched there, as required. All estimates remain valid after zero extension before the switch time. This proves the asserted bound, with a harmless enlargement of its constant.

The same proof works for discrete F_n whose total variation is bounded, replacing ||F'||L1 by sum ||F_n-F_(n-1)||. Conversely an ell^q bound on arbitrary loads is not an admissible substitute for bounded variation in this proof.

A mixed pressure pi_n for this auxiliary equation then obeys the inf-sup bound

    ||pi||ell^q(L2)
      <= beta^(-1) [||F||ell^q(V_h*)
                    +||D_tau x||ell^q(V_h*)
                    +nu ||x||ell^q(V)].

The last term is bounded by the same equilibrium-response decomposition: each homogeneous resolvent is a contraction in the energy norm, so ||x^n||V <= 2(||z_0||V+sum_j||d_j||V). This gives a uniform O(epsilon) auxiliary instantaneous pressure bound. No assertion about the actual Navier--Stokes solution follows until its residual fits this estimate.

## 2. The actual smooth spatial residual does fit this positive estimate

Let w(t)=Pi_h u(t), with exactly the valid H2 Fortin map from the cycle4 proposed supplier. Let r(t) be a fixed linear H1-to-Q_h pressure interpolant, mean adjusted. Define

    G(t)(v)=a(w(t)-u(t),v)+b(v,r(t)-p(t)).

Because Pi_h and r are fixed linear maps, the actual original regularity gives

    ||G||Linf(V_h*) <= C (nu+1) h M,
    ||G'||Linf(V_h*) <= C (nu+1) h M.

The first estimate follows from H1 approximation of Pi_h and L2 approximation of r. The second applies those same estimates to u_t and p_t. Thus the zero-initial linear response to G(t_n) has full-test derivative and instantaneous pressure O(h M), uniformly on the allowed meshes and partitions. This conclusion needs no V bound on P u.

The exact nodal-versus-averaged time-consistency residual is L2 representable with norm C tau_n[(nu+1)M+M^2], as proved directly in the cycle3 note. A zero-initial linear response to any L2-representable load H_n has

    ||D_tau x||ell^2(L2) <= ||H||ell^2(L2),

by testing with D_tau x and summing the energy identity. Therefore its full-test ell^(4/3) derivative is O(tau_max M^2), with the indicated viscosity and polynomial factors. The same estimate handles the actual derivative mass defect (Pi_h-I)D_tau u, which is O(h^2 M) in L2.

These are genuinely positive reductions: the spatial load is handled as a time-regular V* load rather than by an invalid generic V* maximal-regularity assertion; the other two loads are handled in L2.

## 3. Two actual terms remain, and neither may be dropped

Writing the actual error as u_n-u_h^n=(u_n-w_n)+(w_n-u_h^n), the initial discrete error is

    w_0-u_h^0 = Pi_h u_0-P u_0 = P(Pi_h u_0-u_0).

The cycle4 Fortin approximation proves its L2 norm is O(h^2 M), but does not prove its V norm is O(h M). The auxiliary homogeneous estimate above would apply if that V estimate were available. It is not legitimate to put the L2 estimate into that V slot, or to use a global inverse inequality with h_min. This term is precisely the actual locally structured mass-projection residual being investigated by the graded-mesh helper.

The second unhandled term is the nonlinear residual

    c(u_h^n;u_h^n,v)-c(w_n;w_n,v).

The energy error bounds and trilinear continuity control this in an integrable V_h* norm. They do not supply bounded temporal variation, since no time regularity of the actual numerical velocity sufficient for that conclusion has been proved. Applying the time-regular-load theorem to this term would therefore be circular. Nor do the energy estimates put the residual in L2_x in dimension three: products of two H1 velocities have convective derivative generally only in L^(3/2)_x.

For clarity, splitting the error into its smooth linearized and quadratic parts improves the size of the quadratic load but does not establish an admissible input norm. With e in L^infinity_t L2_x intersect L2_t H1_x, the skew-form bound gives

    ||c(e;e,.)||L^(4/3)_t(V*)
       <= C ||e||Linf(L2)^(1/2) ||e||L2(V)^(3/2).

The existing first-order energy bound makes this O((h M+tau_max M^2)^2). That is an ell^(4/3)(V*) estimate, not a bounded-variation estimate and not an L2 spatial estimate. Its smallness alone does not allow use of section 1.

## 4. Exact remaining interface

The original smooth pressure clause would be completed by a valid original-scope result simultaneously controlling (a) the homogeneous response of the actual P(Pi_h u_0-u_0), and (b) the actual nonlinear response in the full-test derivative norm. The new time-regular-residual estimate removes the smooth spatial consistency load from that list. It supplies neither missing bound and does not constitute a complete pressure proof or a counterexample.

No unsupported literature attribution is made. In particular, Hilbert maximal regularity for L2-representable forcing and a positive self-adjoint kernel operator cannot be silently extended to arbitrary full-test V_h* forcing. The full-test versus restricted-kernel distinction remains essential throughout.

## 5. Further sharpening: only the quadratic nonlinear response is outside L2

There is an additional useful reduction, retaining the actual smooth exact velocity rather than treating the whole numerical nonlinearity as generic. Write e_n=u_n-u_h^n and use the skew realization

    N_s(v)=(v dot grad)v + (div v)v/2.

For u in H2 and e in H1_0 in dimensions two or three,

    N_s(u-e)-N_s(u)
       = -[(u dot grad)e +(e dot grad)u +(div e)u/2] + N_s(e),

since div u=0. The bracket is an actual L2 vector. Indeed H2 embeds in L-infinity, H1 embeds in L6 (and in L6 also in dimension two on the bounded domain), and grad u lies in L3. Consequently

    ||(u dot grad)e +(e dot grad)u +(div e)u/2||2
       <= C ||u||H2 ||e||V.

The existing energy estimate therefore makes this bracket O(M E) in ell^2(L2), where E denotes its first-order energy-error bound, including its displayed viscosity factor. Its zero-initial linear Stokes response has the required full-test derivative O(M E) by the section 2 L2 argument. This is an estimate using the already established actual error bound, not a claimed independent solvability argument for a new nonlinear equation.

Thus after splitting the actual error equation linearly, the only nonlinear forcing left outside the proved admissible classes is N_s(e), whose ell^(4/3)(V*) norm is O(E^2). One must still prove a valid pressure/full-derivative response estimate for this actual quadratic load, or show that its stronger actual structure supplies another admissible norm. Its quadratic size alone is insufficient to use the bounded-variation theorem. This sharpening does not remove the actual initial-layer obligation.

## 6. Continued quadratic investigation: critical spatial/time scales

The quadratic residual has a second exact original-scope estimate which is sharper spatially than its V* bound. On the bounded domain in dimension three (and also dimension two using the same nonoptimal exponents), Sobolev and Holder give

    ||N_s(e)||L^(6/5) <= C ||e||L3 ||e||V
        <= C ||e||2^(1/2) ||e||V^(3/2),
    ||N_s(e)||L^(3/2) <= C ||e||V^2.

Consequently the actual energy estimate gives

    ||N_s(e)||ell^(4/3)(L^(6/5)) <= C E^2,
    ||N_s(e)||ell^1(L^(3/2)) <= C E^2.

Both statements follow directly by raising to the indicated time exponent and summing: for the first, the power of ||e||V is exactly two. Here N_s(e) includes the weak-divergence term; it is bounded by the same Holder estimate and is not silently deleted. These estimates hold with the actual arbitrary partition weights.

This isolates a possible narrower supplier than generic V* maximal regularity: for a zero-initial discrete Stokes response to the particular load N_s(e), prove a full-test ell^(4/3)(V_h*) derivative estimate bounded by its ell^(4/3)(L^(6/5)) norm, or exploit its tensor form and no-slip trace. Such an estimate is NOT proved here. Its spatial exponents are critical: V embeds in L6, so L^(6/5) is exactly the elementary spatial input class contained in V*. Replacing it by L2 would lose an essential half spatial derivative.

A tempting continuous Helmholtz shortcut has an identifiable missing domain theorem. An estimate for the Helmholtz pressure potential p_F of a force F in L^(6/5), namely ||p_F||2 <= C ||F||L^(6/5), would follow by duality from a mean-zero scalar Neumann solution operator mapping L2 data to gradients in L6. That is a stronger elliptic regularity input than the allowed bounded Lipschitz polyhedral hypotheses provide automatically. In particular it may not be silently obtained from Poincare or the mixed Stokes inf-sup theorem; these are different operators. On the discrete side, uniform corresponding estimates would require actual shape-regular MINI structure, not a global h inverse estimate or the false H1 kernel projector bound.

The tensor representation N_s(e)=div(e tensor e)-(div e)e/2 also does not remove this missing estimate: e is only weakly divergence free against Q_h, so the second term generally remains. Even if e were pointwise divergence free, solving the bounded-domain harmonic pressure correction requires justification. A whole-space Riesz-transform pressure formula cannot simply be restricted to the no-slip bounded domain.

Thus the sharper L^(6/5) and L^(3/2) load estimates are positive, explicit information about the actual quadratic response, while a valid original-domain and original-mesh mixed response bound remains the missing step. Smallness O(E^2), on its own, is not a proof of boundedness of that response operator.

## 7. A materially different conditional endpoint route

The following is an explicit **conditional research program**, not a completed original-scope proof. It identifies a stronger geometry-dependent interface whose verification could address both initialization and quadratic response. The owner has correctly flagged that the smallness argument below would also leave the original coarse-global-h branch unresolved.

Let H_h be Z_h with mass norm and let A be its positive self-adjoint viscous Stokes operator. Define the real interpolation endpoint

    B_h=(H_h,D(A^(1/2)))_(1/2,infinity).

This is not D(A^(1/4)). For dyadic spectral blocks E_k corresponding to 2^k<=A<2^(k+1), equivalent norms are

    ||z||B_h ~ sup_k 2^(k/4)||E_k z||2,
    ||F||B_h* ~ sum_k 2^(-k/4)||E_k F||2.

A bounded slip profile may have a bounded first norm while its D(A^(1/4)) norm grows logarithmically under boundary refinement. Replacing the first by the second is therefore consequential.

The missing geometric supplier would be an actual uniform original-mesh bound

    ||P_Zh v||B_h <= C ||v||V,  v in V.

It must cover continuous V inputs, including Pi_h u-u, or separately prove the needed structured-residual version and the full-test adjoint version. A result only for v_h in V_h is not silently sufficient for the initial residual. No such supplier is proved in this note. Its dual would give

    ||z_h||V_h* <= C ||z_h||B_h*.

The following conditional mechanism explains why this endpoint is useful.

First, Sobolev interpolation gives B_h -> L^(3,infinity) uniformly: interpolate H_h -> L2 and D(A^(1/2)) -> L^(6,2). Here the latter is the sharp Lorentz Sobolev inequality for zero extension of H1_0 functions. Lorentz Holder then yields, for e in V,

    |c(e;e,z_h)| <= C ||e||L^(6,2)||e||V ||z_h||L^(3,infinity)
                    <= C ||e||V^2 ||z_h||B_h,

and hence ||P N_s(e)||B_h* <= C||e||V^2. The div e contribution obeys the same estimate. A completed local supplier would need to supply these interpolation and Lorentz facts explicitly; they are not consequences of the ordinary H1-to-L6 inequality alone.

Second, spectral smoothing and the ordinary interpolated embedding D(A^(1/4))->L3 give the simpler bound

    ||A^(-1/4) P N_s(e)||2 <= C ||e||V^2.

Consequently a mild quadratic response obeys the Kato estimate in

    X=sup_(n>=1) t_n^(1/4)||theta^n||V.

Indeed its kernel is bounded by C(t_n-t_(j-1))^(-3/4), while the assumed X bound gives ||theta^j||V^2 <= X^2 t_j^(-1/2). On every partition,

    sum_(j<=n) tau_j (t_n-t_(j-1))^(-3/4)t_j^(-1/2)
        <= C t_n^(-1/4).

For a direct proof, split cells with t_j<=t_n/2 from the remainder. In the first part the lag is at least t_n/2, and the right-endpoint sum of t^(-1/2) is bounded by 2 sqrt(t_n). In the second part t_j^(-1/2)<=sqrt(2/t_n), and the left-lag sum is bounded by the integral of (t_n-t)^(-3/4). These statements include a cell crossing the midpoint, since that cell belongs to the second part and its left-lag contribution is bounded by the same decreasing-kernel integral. Thus no time-step ratio is used.

This produces X<=C(data)+C X^2 and a contraction for small data in the weighted norm. For the actual error one can use the mixed Stokes projection to eliminate the spatial V* residual. Its approximation eta is O(h) in V, so its purely quadratic contribution is an admissible bounded-in-time O(h^2) load in A^(-1/4). The exact-smooth linearized convection can be treated as the already controlled actual L2 forcing from section 5. Zero-initial L2 forcing has uniformly bounded V norm by derivative-energy testing, and so contributes to X without an inverse inequality.

The endpoint initial B_h bound would control the homogeneous X norm. It would also give the stronger pressure-relevant estimate

    ||D_tau y^n||B_h* <= C epsilon t_n^(-1/2)

for a homogeneous orbit with ||y^0||B_h<=epsilon: sum dyadic bounds epsilon lambda^(1/2) product_(j<=n)(1+tau_j lambda)^(-1). Splitting at lambda=t_n^(-1) controls the low-frequency geometric series; for high frequencies one must use at least two resolvent factors, or treat a single large first step separately using its additional denominator. A complete proof must check this arbitrary-partition high-frequency point. The naive single denominator 1+t_n lambda is insufficient to sum lambda^(1/2)/(1+t_n lambda) over high frequencies only if the dyadic series were replaced incorrectly by an integral with Lebesgue measure; the actual dyadic series decays like lambda^(-1/2) and is summable. Thus the single-denominator bound in fact suffices, giving C t_n^(-1/2). Since sum tau_n t_n^(-2/3)<=3 T^(1/3), the desired L^(4/3) bound follows.

Finally, the negative endpoint B_h* is a spatial l1 sum of Hilbert spectral blocks. A direct maximal-regularity proof can avoid importing an inappropriate UMD theorem for l1. Each block's positive majorant kernel is

    K_lambda(n,j)=tau_j lambda product_(l=j)^n(1+tau_l lambda)^(-1).

Its row and column mass sums are at most one, by telescoping. For the l1 sum, dualize the time norm: adjoint kernels acting on a nonnegative scalar test sequence are decreasing-weight future averages, uniformly dominated by a one-sided discrete Hardy--Littlewood maximal function. The latter has an ell^p bound for p>1 on arbitrary weighted ordered partitions, by its elementary interval covering proof. This gives an ell^q(B_h*) derivative estimate for 1<q<infinity after the dyadic block majorization. A completed supplier should write this scalar maximal argument and the spectral norm equivalences fully; no existing library or literature theorem is being claimed here.

If the small-data weighted solution were constructed, its nonlinear load would have ell^(4/3)(B_h*) norm at most C X^2 T^(1/4), since ||theta^n||V^2<=X^2 t_n^(-1/2). The conditional endpoint dual bound would then give the required full-test derivative control. Discrete weak-strong uniqueness can potentially identify it with the actual chosen solution: the coefficient in its difference energy inequality involves the reference V norm to the fourth power, and tau_n t_n^(-1)<=1 makes this coefficient small when X is small. This identification needs a complete recorded proof, not just the contraction argument.

Two substantive original-scope gaps remain even for this new route: the actual endpoint projection/structured-residual supplier, and removal of its h-dependent smallness requirement. The original theorem does not impose hM small; arbitrary coarse global h can coexist with arbitrarily fine local refinement. Neither gap is resolved by the new all-Lp stability of the unconstrained MINI mass projector proved independently by the owner's helper. That result is useful actual structure, but the scalar constrained correction and the coarse branch remain separate obligations.

## 8. Dimension-two sharpening of the endpoint nonlinear mechanism

There is a useful difference between the two allowed dimensions. Conditional on the same endpoint geometry supplier and its negative-Besov maximal-regularity consequence from section 7, the two-dimensional nonlinear response needs no Kato small-data argument. In dimension two,

    B_h=(H_h,D(A^(1/2)))_(1/2,infinity) -> L^(4,infinity),
    ||e||L^(4,2) <= C ||e||2^(1/2)||e||V^(1/2).

Lorentz Holder therefore gives

    ||P N_s(e)||B_h*
       <= C ||e||L^(4,2)||e||V
       <= C ||e||2^(1/2)||e||V^(3/2).

The existing energy error bound immediately puts this load in ell^(4/3)(B_h*) with norm O(E^2), on every original time partition. Thus the conditional endpoint maximal-regularity route would handle the quadratic response globally in dimension two, including coarse global h, once the actual endpoint projector/pressure-admissibility supplier is proved. This is a conditional consequence, not a proof of that missing supplier and not a completion of the original joint d=2,3 claim. In dimension three the same endpoint product has size ||e||V^2 and only L1 time control from energy, so this observation does not remove the three-dimensional coarse-mesh obligation.
