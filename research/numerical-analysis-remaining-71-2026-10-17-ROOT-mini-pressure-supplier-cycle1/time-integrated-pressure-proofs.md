# Complete local alternative: pressure primitives and time distributions

Research proposal only. This does not replace the original instantaneous pressure obligations. Use the current repository signs a_nu(u,v)=2nu(eps u,eps v), b(v,q)=−(q,div v), V norm=||grad v||₂. Let beta>0 be the uniform MINI inf-sup constant, C_P the zero-boundary Poincare constant, and C_c a constant for both

$$|c(a;b,v)|\le C_c\|a\|_V\|b\|_V\|v\|_V,\qquad \|c(a;a,\cdot)\|_{V^*}\le C_c\|a\|_2^{1/2}\|a\|_V^{3/2}.$$

Both follow from the existing trilinear supplier and Poincare. Assume the Axiom of Choice when using the current subsequence/Bochner suppliers; the elementary reconstruction alone inherits Countable Choice from the divergence/Riesz suppliers.

## Proposed supplier 1 — integrated reconstruction

**Statement.** On a bounded connected Lipschitz domain in d=2,3, let u be a solenoidal energy weak velocity in the current definition, for the current f∈L²_tL² and u0∈H_sigma. There exists a unique mean-zero pressure distribution p∈D'((0,T);Q), Q=L²_0(D), and a primitive P∈L∞(0,T;Q)∩C_w([0,T];Q), normalized by P(0)=0, such that p=∂_tP and

$$(u(t)-u_0,v)+\int_0^t[a_\nu(u(s),v)+c(u(s);u(s),v)]\,ds+b(v,P(t))=\int_0^t(f(s),v)\,ds\quad(v\in V).$$

The identity holds for every t for the weakly continuous velocity representative. Writing U=||u||_(L∞L²), E=||u||_(L²V), F=||f||_(L²L²), one has

$$\|P\|_{L^\infty Q}\le C_{\rm div}\{C_P(U+\|u_0\|_2)+C_P\sqrt T F+2\nu\sqrt T E+C_c T^{1/4}U^{1/2}E^{3/2}\}.$$

The full momentum equation holds in time distributions, including its original initial datum. This does not assert P∈W^{1,4/3}(0,T;Q), or p∈L^(4/3)_tQ.

**Proof.** Define g(t)∈V* by g(t)(v)=(f(t),v)−a_nu(u(t),v)−c(u(t);u(t),v). Its norm is at most C_P||f(t)||₂+2nu||u(t)||_V+C_c||u(t)||₂^(1/2)||u(t)||_V^(3/2). Thus g∈L^(4/3)(0,T;V*) and in particular L¹. The Bochner primitive G(t)=∫_0^t g(s)ds is norm-continuous V*. Define the **actual full-test integrated residual** R(t)(v)=G(t)(v)−(u(t)−u0,v). This is strongly measurable V*, essentially bounded there, and scalar continuous in t for every v∈V, since u is weakly continuous H_sigma (and the pairing with v equals that with its Hilbert projection onto H_sigma).

For each z∈V_sigma the scalar solenoidal equation says the distribution derivative of (u,z) is g(z), with initial value (u0,z). Its scalar absolutely continuous representative is therefore (u0,z)+G(t)(z). Weak continuity makes it equal (u(t),z) for all t. Hence R(t)(z)=0 for every z∈V_sigma and every t. This is an assertion about the integrated actual velocity, not an extension of its restricted time derivative.

Use the existing fixed divergence right inverse B:Q→V. For each t define P(t) by

$$(P(t),q)=-R(t)(Bq)\quad(q\in Q).$$

Riesz yields a unique P(t) with ||P(t)||₂≤C_div||R(t)||_V*. For v∈V, v−B div v∈V_sigma, so b(v,P(t))=R(t)(v). This is exactly the displayed identity. The map R↦P is bounded linear, ensuring strong measurability and the L∞ estimate; the estimate for G uses Holder ∫||u||_V^(3/2)≤T^(1/4)E^(3/2). For each q the displayed Riesz formula is continuous in t, so P∈C_w([0,T];Q), and R(0)=0 gives P(0)=0.

Differentiate the identity as a V*-valued time distribution: u_t+a_nu(u,·)+c(u;u,·)+b(·,∂_tP)=f. The pressure distribution is defined rigorously by <p,eta>=−∫P(t)eta'(t)dt∈Q for eta∈C_c∞(0,T). If another mean-zero distribution gave the same equation, evaluation on Bq for every q implies it equals p. Normalization P(0)=0 gives uniqueness of its primitive. For a time-varying smooth V-test phi vanishing near T, pressure acts by −∫b(phi'(t),P(t))dt. Integration by parts in the primitive identity gives

$$-\int_0^T(u,\phi')+\int_0^T[a_\nu(u,\phi)+c(u;u,\phi)]-\int_0^T b(\phi',P)=\int_0^T(f,\phi)+(u_0,\phi(0)).$$

This variable-test identity can also be obtained by finite-rank time-test approximation in C¹([0,T];V), so no unjustified product rule in a dual-valued space is required. All integrands are integrable. QED.

**Sharp logical interface for the original stronger claim.** For this u, the existence of p∈L^s_tQ, 1<s<∞, representing the full equation is equivalent to the actual distributional u_t belonging to L^s_tV*, provided g∈L^s_tV*. One direction is u_t=g−b(·,p); the other applies existing residual recovery to g−u_t. This is a criterion, not a proof of the missing derivative estimate. Alternatively it is equivalent to P∈W^{1,s}(0,T;Q). An arbitrary extension of u_t|V_sigma* does not satisfy that criterion.

## Uniform discrete pressure primitives and convergence

For the actual mixed scheme define

$$P_h^m=\sum_{n=1}^m\tau_np_h^n,\quad P_h^0=0,$$

and let P_h(t) be the affine interpolant through these values. Let uhat_h be the affine velocity interpolant, and overline u_h, overline p_h the right-constant reconstructions. Then ∂_tP_h=overline p_h and, for every t and v_h∈V_h,

$$(\widehat u_h(t)-u_h^0,v_h)+\int_0^t[a_\nu(\overline u_h,v_h)+c(\overline u_h;\overline u_h,v_h)]+b(v_h,P_h(t))=\int_0^t(f_h,v_h).$$

**Proof and bound.** On each cell the derivative of the displayed identity is exactly the mixed equation; it is zero at t=0. The uniform inf-sup estimate applies to P_h(t)∈Q_h. If max_n||u_h^n||₂≤U_h, ||overline u_h||_(L²V)≤E_h, ||f_h||_(L²L²)≤F, it yields

$$\sup_t\|P_h(t)\|_2\le\beta^{-1}\{2C_PU_h+C_P\sqrt T F+2\nu\sqrt T E_h+C_cT^{1/4}U_h^{1/2}E_h^{3/2}\}.$$

The affine velocity bound uses convexity, and all other estimates are the same time integrals as in continuous reconstruction. This is a genuine uniform full-pressure-primitive estimate, with no inverse mesh factor.

For the sequence in the current subsequential theorem, the energy bound gives uniform U_h,E_h and also ∑||u_h^n−u_h^{n−1}||₂²≤C. Hence

$$\|\widehat u_h-\overline u_h\|_{L²L²}²\le (\tau_{\max}/3)\sum_n\|u_h^n-u_h^{n-1}\|_2²\longrightarrow0.$$

The primitive bound gives, after a further subsequence, P_h⇀P in L²(0,T;Q), using Hilbert reflexivity; P is L∞ with the same bound (for example test the weak limit against arbitrary L² functions supported where ||P|| exceeds the bound). Test the integrated identity with Π_hv for fixed arbitrary v∈V and a smooth compactly supported scalar time test. The current Fortin approximation gives Π_hv→v in V, without mapping arbitrary v into Z_h. The velocity convergence already proved gives the limit of the mass/viscous terms. For convection, use exactly the current convergence proof's trilinear argument, valid for any fixed v∈V: strong L²L³/L⁴ interpolation, weak L² gradient convergence, and the L¹_tV* energy bound for the test approximation error. Its proof never uses div v=0 in these estimates. The pressure term converges by weak L² convergence of P_h and strong V convergence of Π_hv. Forcing averages and initial projections converge as in the existing theorem. Thus the limit satisfies the continuous integrated identity, so uniqueness above identifies P and p=∂_tP. In particular overline p_h→p in time distributions with Q-weak testing. This gives a pressure-bearing distributional subsequential limit, not the stronger planned L^(4/3)_tQ limit.

## Proposed supplier 2 — smooth primitive-pressure error

**Statement.** Under every hypothesis and initialization of the current `thm-na-mini-be-smooth-velocity-error`, define e_n=u(t_n)−u_h^n,

$$E_0=\max_{0\le n\le N}\|e_n\|_2,\quad E_1=\left(\sum_{n=1}^N\tau_n\|e_n\|_V²\right)^{1/2},\quad P(t)=\int_0^tp(s)ds.$$

Let M,M_u,M_E be exactly its current quantities. Let C_I be a mean-adjusted P1 pressure L² approximation constant, and M_b=√d. Then

$$\max_m\left\|P(t_m)-\sum_{n=1}^m\tau_np_h^n\right\|_2\le(1+M_b/\beta)C_IThM+\beta^{-1}\{2C_PE_0+[2\nu\sqrt T+C_c(M_E+\sqrt T M_u)]E_1+2\nu T\tau_{\max}M+2C_cT\tau_{\max}M²\}.$$

Consequently, with E_0+sqrt(nu)E_1≤C_*(hM+tau_max M²) from the existing velocity theorem, the left side is bounded by

$$\left[(1+M_b/\beta)C_IT+\beta^{-1}\{2C_P+[2\nu\sqrt T+C_c(M_E+\sqrt T M_u)]\nu^{-1/2}\}C_*+\beta^{-1}(2\nu T+2C_cT)\right](hM+\tau_{\max}M²).$$

Here M≥1, so the last grouping absorbs tau M into tau M². This explicitly retains viscosity powers and the existing exponential through C_*. Constants are independent of h and the time partition. No additional mesh/time relation is used. The estimate is for accumulated pressure, not instantaneous p_h.

**Proof.** For each n, average the exact full mixed equation over I_n and subtract the discrete equation. Sum through m. Exact averaging of u_t cancels the time denominators and gives

$$b(v_h,P(t_m)-P_h^m)=-(e_m-e_0,v_h)-\sum_{n=1}^m\tau_na_\nu(\bar u_n-u_h^n,v_h)-\sum_{n=1}^m\tau_n\{\overline{c(u;u,v_h)}_n-c(u_h^n;u_h^n,v_h)\}.$$

Forcing cancels exactly. Define r_h(t) as the existing mean-adjusted H1→L² P1 interpolant of p(t) and R_h^m=∫_0^{t_m}r_h(t)dt∈Q_h. Then ||P(t_m)−R_h^m||₂≤C_IThM. Inf-sup applied to R_h^m−P_h^m gives

$$\|P(t_m)-P_h^m\|_2\le(1+M_b/\beta)\|P(t_m)-R_h^m\|_2+\beta^{-1}\sup_{v_h\ne0}\frac{|b(v_h,P(t_m)-P_h^m)|}{\|v_h\|_V}.$$

Poincare bounds the mass term by 2C_P E_0||v_h||_V. Since ||bar u_n−u(t_n)||_V≤tau_n M,

$$\sum_{n\le m}\tau_n\|\bar u_n-u_h^n\|_V\le\sqrt T E_1+T\tau_{\max}M.$$

Viscosity contributes at most 2nu times this expression. For convection at a node, bilinearity gives

$$c(u_n;u_n,v_h)-c(u_h^n;u_h^n,v_h)=c(e_n;u_n,v_h)+c(u_h^n;e_n,v_h).$$

The V³ bound and Cauchy–Schwarz in the weighted discrete time sum bound this contribution by C_c(sqrt(T)M_u+M_E)E_1||v_h||_V. For the exact averaging remainder, write c(u(t);u(t),v_h)−c(u_n;u_n,v_h)=c(u(t)−u_n;u(t),v_h)+c(u_n;u(t)−u_n,v_h). The smooth hypothesis gives ||u(t)−u_n||_V≤tau_n M and ||u(t)||_V,||u_n||_V≤M, so its summed time contribution is at most 2C_c T tau_max M²||v_h||_V. Combine these estimates in inf-sup to get the first bound, then substitute E_0≤C_*(hM+tau M²), E_1≤nu^(−1/2)C_*(hM+tau M²). QED.

## What remains necessary for an instantaneous rate

The exact unintegrated inf-sup argument includes the mass residual D_tau e_n against arbitrary V_h tests. A clean additional local supplier would have to prove a mesh-independent bound on that actual full-test residual in the desired time norm, or prove instantaneous pressure directly through a different mixed parabolic argument. The false mass-projector stability cannot supply it. Smooth exact p and the velocity energy estimate by themselves do not control this residual with the claimed first-order rate. The proved primitive estimate must not be differentiated to manufacture such a bound.

## Sufficient assumptions retaining the original instantaneous conclusions

There is no proved impossibility of the original precise Newtonian/L²-forcing obligation in this packet. The following exact sufficient interfaces identify what an additional established supplier must deliver, without substituting the primitive result for that obligation.

**Regular-pressure limit branch, without assuming a pressure.** If the existing solenoidal limit u additionally belongs to W^{1,4/3}(0,T;L²(D)^d), then its actual full distributional derivative belongs to L^{4/3}(0,T;V*) with norm at most C_P||u_t||_(L^{4/3}L²). The existing convection bound gives g∈L^{4/3}V*. Consequently the existing residual-recovery lemma applied to g−u_t gives a unique p∈L^{4/3}Q and

$$\|p\|_{L^{4/3}Q}\le C_{\rm div}\{C_P\|u_t\|_{L^{4/3}L²}+C_PT^{1/4}F+2\nu T^{1/4}E+C_cU^{1/2}E^{3/2}\}.$$

Its time-tested full momentum identity has the original initial datum, because its restriction to V_sigma agrees with the original scalar equation and u has that representative/trace. The derivative's L² representative is the actual derivative of u, so this avoids the extension defect. More generally the necessary-and-sufficient condition is the weaker actual u_t∈L^{4/3}V*. This keeps the broadest exactly characterized class; W^{1,4/3}L² is an explicit, easier sufficient regularity assumption. Neither extra regularity follows from the currently supplied generic energy estimates. On the current smooth branch W^{1,∞}H² the sufficient derivative regularity is automatic, but that does not prove it for all energy data.

**Instantaneous pressure-error interface.** Under the current smooth theorem's assumptions, define the actual full discrete dual derivative error

$$d_n=\sup_{v_h\ne0}\frac{|(D_\tau e_n,v_h)|}{\|v_h\|_V},\qquad \Delta=\left(\sum_n\tau_nd_n^{4/3}\right)^{3/4}.$$

Let M_inf be the current bound on max||u_h^n||₂. Then, without any new projector hypothesis,

$$\left(\sum_n\tau_n\|p(t_n)-p_h^n\|_2^{4/3}\right)^{3/4}\le (1+M_b/\beta)C_IT^{3/4}hM+T^{3/4}\tau_{\max}M$$

$$+\beta^{-1}\{\Delta+2\nu[T^{1/4}E_1+T^{3/4}\tau_{\max}M]+C_c[T^{1/2}M_u E_0^{1/2}E_1^{1/2}+M_{\rm inf}^{1/2}M_E^{1/2}E_1+2T^{3/4}\tau_{\max}M²]\}.$$

**Proof.** Apply the uniform inf-sup estimate to an interpolant of the interval average bar p_n, subtracting the averaged exact and discrete mixed equations. The derivative term is exactly d_n; the viscosity term is ≤2nu(||e_n||_V+tau_n M); the pressure interpolation error is ≤C_IhM. Split convection into c(e_n;u_n,v_h)+c(u_h^n;e_n,v_h), plus the exact time-average remainder bounded by 2C_c tau_n M²||v_h||_V. The refined trilinear bound gives respectively C_c E_0^{1/2}||e_n||_V^{1/2}M_u and C_c M_inf^{1/2}||u_h^n||_V^{1/2}||e_n||_V. Weighted Holder yields L^{4/3} bounds T^{1/2}M_u E_0^{1/2}E_1^{1/2} and M_inf^{1/2}M_E^{1/2}E_1. Weighted L²→L^{4/3} gives T^{1/4}E_1. Finally ||p(t_n)−bar p_n||₂≤tau_n M contributes T^{3/4}tau_max M. These estimates give the display. QED.

Thus an actual proved derivative-error supplier Delta≤C(hM+tau_max M²) would close the original instantaneous pressure-rate clause in L^{4/3}_tL², using precisely the current velocity result and no extra kernel-projector stability. This is a genuine sufficient interface, **not** a claim that such a supplier has been authored. A bare assumption of that estimate in a new theorem does not discharge the approved scope. The elementary bound Delta≤2C_PT^{3/4}E_0/tau_min is not first-order uniformly as tau_min→0 and must not be used to claim closure.

**Full-time extension of the proved primitive rate.** Let P_h(t) be the affine pressure primitive above. On each I_n it is the convex combination of P_h^{n−1},P_h^n. Since P(t)=∫_0^tp has Lipschitz constant at most ||p||_(L∞Q)≤M, its difference from the affine interpolant of its own endpoint values is at most tau_max M. Therefore

$$\|P-P_h\|_{L^\infty(0,T;Q)}\le\max_m\|P(t_m)-P_h^m\|_2+\tau_{\max}M.$$

Thus the same O(h+tau) rate holds for the entire pressure primitive. Equivalently, for every scalar eta∈C_c∞(0,T),

$$\left\|\int_0^T(p(t)-\overline p_h(t))\eta(t)dt\right\|_Q\le\|P-P_h\|_{L^\infty Q}\|\eta'\|_{L¹}.$$

The pressure error is first order in this precisely stated negative time norm. This still supplies no L^(4/3)_tQ norm bound on instantaneous pressure error.
