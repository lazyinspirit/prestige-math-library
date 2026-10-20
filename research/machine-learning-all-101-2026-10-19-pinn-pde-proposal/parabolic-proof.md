# Parabolic supplier proposal — cycle 1

Proof supplier only; no live item, manifest, workflow state, or acceptance record was changed. The parent owns independent review and integration. Read CLAUDE.md and README.md fully. Verified the configured automatic compaction limit is 500000 without displaying other configuration values.

## Exact interface and interpretation

Write A=(a_ij), beta=tilde b, q=tilde c and

    P u = -u_t + a_ij u_ij + beta_i u_i + q u.

The proposed theorem is classical **interior** existence, u in C^{2+alpha,1+alpha/2}_loc(U×(0,T)) intersect C(bar U×[0,T]), with the prescribed compatible continuous initial and lateral data. It does not assert C^{2,1} on the closed cylinder. U is any bounded nonempty open set for which each boundary point has an exterior ball; no smooth boundary is imposed. Assume A symmetric, lambda I <= A <= Lambda_1 I, A,beta,q locally parabolic alpha-Hölder, and A,beta,q,f bounded, f locally parabolic alpha-Hölder. For the untransformed proof below q<=0; bounded q of either sign is reduced to this case by u=e^{kt}v, k>=sup q. The resulting constants may depend on k,T. Data on the compact parabolic boundary must be continuous and agree at the initial/lateral corner.

These boundedness hypotheses follow if the live phrase “Hölder continuous” means a finite global Hölder seminorm (on this bounded cylinder), or membership of the source's C_alpha space: its equation (2.7) includes sup|u|. They do **not** follow from local Hölder regularity and the displayed weighted bounds alone. The parent should make the intended meaning explicit before using this proof. In the latter, weaker interpretation the existence statement is false: A=I,beta=q=0, U=(0,pi), zero data, f(x,t)=sin(x)/t has finite order-two weighted interior norm and is locally smooth, but no continuous zero-initial solution. Indeed choose nonzero nonnegative phi in C_c^infty(0,pi). Testing on its compact spatial support gives -d/dt integral u phi+integral u phi''=C/t with C=integral sin(x)phi(x)dx>0. Continuity at zero bounds both spatial integrals; integration from epsilon to a fixed positive time contradicts the logarithmic divergence of the right side. This is a hypothesis-interpretation defect, not an open problem.

For the energy addendum use the intended divergence operator sum_ij D_i(a_ij D_j u)+sum_i D_i(b_i u)+sum_i c_i D_i u+d u, uniformly bounded a,b,c,d as in the live coefficient bound, spatial derivatives interpreted distributionally as well as classically, with the displayed expansion P=-partial_t+L. The source's printed sum_ij D_i(a_ij D_j u+b_i u) repeats the b term d times and disagrees with its expanded coefficients; this proof uses the intended, separately indexed b term, as directed by the parent. Local C^1 spatial coefficients suffice for the weak identification. If “differentiable” is intended without local integrability/weak-derivative identification, that identification needs its own clarification; do not silently use integration by parts for an arbitrary pointwise derivative.

The source's equation (2.7), copied in the live definition, weights D_ij u by d rather than d^2. The proof establishes the usual local classical regularity, not finiteness of this stronger, unusual global weighted-second-derivative norm. The live existence statement currently does not assert membership in that trial class. Do not add such a claim: even heat solutions with rough Hölder boundary data need not have it.

At the final face, “locally Hölder” is understood one-sided up to U×{T}. This follows from the source's weighted norms because delta is bounded below in a neighborhood of each interior point (x,T), and does not vanish at that face. Extend coefficients and f past T by their one-sided limits and then constantly in time. For existence/compactness work on a slightly longer cylinder (extend lateral data continuously past T), then restrict to [0,T]. This supplies interior continuity and derivatives at final time without assuming a derivative exists on the top face of the original open Q. Merely local regularity on (0,T), with no control as t increases to T, would not justify this particular extension step.

## Dependencies that must be carried

Countable Choice is used by weak variational existence and countable diagonal subsequence extraction. Existing published `thm-parabolic-variational-wellposedness-and-energy-stability` supplies existence for separable coercive Hilbert forms; its full current statement and proof were inspected. It is a weak supplier only; all classical regularity and boundary attainment below are proved here. Its evolution-space trace/energy-pairing dependencies supply integration in time. Existing `lem-parabolic-zero-boundary-sobolev-space-is-separable` applies directly to the finite polyhedral approximating domains below; its complete proof was inspected. For the energy limit on U the same proof works on an arbitrary bounded open set: its rational-box approximation, closed derivative graph, closure definition of H1_0, compact-smooth density in L2, and one-direction Poincare argument never use polyhedral geometry. This extension must be stated/proved as a small helper, rather than citing the narrower printed statement as though already covering U.

Other ordinary inputs are Gaussian integration/differentiation, mollification and its derivative identities, weak derivative difference quotients, local Euclidean Sobolev embedding, Arzela–Ascoli, and the maximum principle proved below. The lengthy analytic material is suitable for at least three helpers: interior parabolic Schauder estimate; smooth approximation and boundary attainment; zero-data classical/energy identification. None is supplied by the heat-only maximum-principle item.

## 1. Comparison, including weak approximants

For a smooth classical v with P v>=0 and v<=0 on the parabolic boundary, the conclusion is v<=0 when q<=0. On any cylinder ending at tau<T replace v by v-epsilon(t+1). Its P is strictly positive (because P(t+1)=-1+q(t+1)<=-1). At a positive maximum away from the initial/lateral boundary, Dv=0, D^2v<=0, and the left time derivative at the top face is nonnegative; hence P(v-epsilon(t+1))<=0, contradiction. Let epsilon decrease to zero, then tau increase to T. This proof does not take a derivative at the unsupported final face of an open cylinder.

For smooth coefficients and a variational subsolution of

    v_t - div(A Dv) - B·Dv - q v <= 0,

with nonpositive initial and boundary traces, test with v_+ (first a smooth convex approximation and time averages, then pass by the evolution-space pairing identity). Since Dv_+=1_{v>0}Dv, ellipticity and Young's inequality give

    (1/2)d/dt ||v_+||_2^2 + (lambda/2)||Dv_+||_2^2
       <= (||B||_infty^2/(2 lambda)+||q_+||_infty)||v_+||_2^2.

The integrating factor and zero initial positive part give v_+=0. All terms are integrable because B is bounded for each approximating problem. This proves comparison without any uniform derivative bound on the approximating coefficients. If the boundary comparison is initially only non-strict, compare with a further positive epsilon barrier and let epsilon decrease to zero. The test belongs to H1_0: for v-H in H1_0 and a smooth comparison w with H-w<0 in a neighborhood of the boundary, approximate v-H by compactly supported smooth functions, take positive parts, and use their H1 convergence; the strict margin removes the boundary neighborhood. The non-strict case follows by the epsilon limit. This also proves the local comparison on intersections with a ball used below.

In particular, a solution with source F in forward convention, |F|<=M_f, and |data|<=M_0 satisfies |u|<=M_0+t M_f for q<=0 by comparison with these two affine-in-time barriers.

## 2. Interior Schauder estimate from the Gaussian kernel

Here are the analytic details to avoid importing a citation-only existence or Schauder theorem. Use rho(x,t)=max(|x|,sqrt(|t|)); its balls have volume C r^{d+2}. Put N=d+2. For a constant symmetric matrix A_0 with eigenvalues in [lambda,Lambda_1],

    G(x,t)=1_{t>0}(4 pi t)^(-d/2)(det A_0)^(-1/2)
           exp(-x^T A_0^{-1}x/(4t)).

Direct differentiation and the substitution x=sqrt(t)y give, for K=D_ij G,

    |K(z)| <= C rho(z)^(-N),
    |D_x K(z)| <= C rho(z)^(-N-1),
    |D_t K(z)| <= C rho(z)^(-N-2).

They also give the corresponding integrable Gaussian bounds outside any rho-ball, and integral_Rd D_ij G(x,t) dx=0 for every t>0. Consequently truncated integrals of K over rho-annuli are uniformly bounded, independently of the radii. One direct verification is to integrate D_ij G over |x|<R by the divergence theorem, then put t=R^2 s: the boundary Gaussian has size R^{-2} times an integrable function of s, giving a radius-independent bound after time integration. The same argument bounds all differences of such truncations.

For compactly supported smooth F, define w=G*F. In the singular integral for D_ij w subtract F(z) near the pole; the subtracted constant contributes only the bounded truncation term just computed. To compare values at z and z', let h=rho(z-z'). On rho<=4h, the subtraction and Hölder continuity bound the integrals by

    C[F]_alpha integral_0^{4h} r^{alpha-1} dr <= C[F]_alpha h^alpha.

On rho>4h subtract the same constant from F in both integrals and use the kernel difference bound

    |K(z-y)-K(z'-y)| <= C h rho(z-y)^(-N-1).

For time displacements use |t-t'|<=h^2 and the stronger time-derivative estimate; it implies the displayed weaker bound on rho>4h. The far integral is at most

    C[F]_alpha h integral_{4h}^infty r^{alpha-2} dr
       <= C[F]_alpha h^alpha,

since alpha<1. The changes of truncation regions are bounded by the same estimates and the bounded constant truncation term. For a support of parabolic diameter at most C r, the supremum estimate, by the near integral up to r and the integrable Gaussian tail, is

    ||D^2 w||_infty <= C(||F||_infty+r^alpha[F]_alpha).

Thus, by scaling, for compactly supported v and F=v_t-A_0:D^2v,

    r^2||D^2v||_infty+r^{2+alpha}[D^2v]_alpha
      +r^2||v_t||_infty+r^{2+alpha}[v_t]_alpha
    <= C r^2(||F||_infty+r^alpha[F]_alpha).                 (S0)

The identity v=G*F follows by differentiating the convolution and integrating its time derivative from an earlier time where v is zero; alternatively their difference solves the zero-data constant-coefficient equation and the energy identity makes it zero. The time estimates in (S0) follow from v_t=F+A_0:D^2v. Localize with a cutoff supported in a cylinder, equal to one on a smaller cylinder, with spatial derivatives O((R-r)^-j) and time derivative O((R-r)^-2). Apply (S0) to v=eta u with A_0=A(z_0). The equation is

    v_t-A_0:D^2v = eta F +(A-A_0):D^2v
       + beta·Dv + qv + cutoff terms involving u,Du.

In the scaled alpha norm the product (A-A_0)D^2v is bounded by

    C R^alpha[A]_alpha times
       (R^2||D^2v||_infty+R^{2+alpha}[D^2v]_alpha).

Choose R small enough that this coefficient is less than 1/(4C) in (S0). The lower derivative and cutoff terms are absorbed using, for every epsilon>0, the interpolation inequality

    R||Du||_infty+R^{1+alpha}[Du]_alpha+[u]_{alpha,scaled}
       <= epsilon ||u||_{2+alpha,scaled}+C_epsilon||u||_infty.

For completeness this inequality is obtained by writing the centered spatial first difference with step theta R, applying Taylor's integral remainder, and choosing theta sufficiently small; for differences of Du compare the same first differences at two points, splitting their separation at theta R. Time differences of u are bounded by |t-s|||u_t||, and time differences of Du by first applying the spatial first-difference formula with step sqrt(|t-s|), bounding the remainder by that step times ||D^2u||, and bounding the first-difference time increment by |t-s|||u_t|| divided by the step. Splitting small/large separations as before gives the alpha seminorm with an arbitrarily small multiple of the top norm and a finite multiple of ||u||. These arguments are made on the larger cylinder so each difference segment lies inside it.

One obtains, on nested cylinders, A(r)<=epsilon A(R)+C_epsilon (R-r)^(-m)(||u||_infty+||F||_alpha), for some fixed integer m. This implies an estimate on the inner cylinder without an unknown top norm: choose radii r_j increasing geometrically to a radius strictly inside the original cylinder and epsilon<2^(-m-1); iterate the inequality, sum the resulting geometric series, and let the remainder epsilon^j A(r_j) tend to zero (the outer radius remains strictly interior and u is smooth). Rescaling back proves

    ||u||_{C^{2+alpha,1+alpha/2}(Q')} <= C
       (||u||_{L^infty(Q'')}+||F||_{C^{alpha,alpha/2}(Q'')})  (S)

for Q' compactly contained in Q''. C depends on their separation, local coefficient Hölder norms, ellipticity, and coefficient bounds, not on derivatives of the coefficients. A finite covering gives (S) on every fixed compact subcylinder. All uses of (S) below are first for smooth approximants, so no density assumption about a previously unknown classical solution is concealed here.

## 3. Construction of smooth approximants

Choose finite unions U_n of dyadic cubes with closure in U, distance at least 2/n from its complement, exhausting U, such that every point of partial U_n is within C/n of partial U. Pass to a nested subsequence/finite union if needed. This is elementary: include all sufficiently fine cubes whose distance from the complement exceeds 3/n; a cube adjacent to an excluded cube has distance O(1/n). Every compact subset of U is eventually contained in U_n. Polyhedral corners of U_n cause no difficulty because only weak solvability and interior regularity are used there.

Extend A boundedly by lambda I outside U and outside the time interval, beta,f by zero and q by zero; mollify with spatial radius <1/n and time radius <1/n^2. These smooth coefficients on U_n remain uniformly elliptic and bounded, q_n<=0, and converge in every local C^{alpha'} norm, alpha'<alpha, to the original coefficients; their local alpha norms are uniformly bounded. At points near t=0 the arbitrary extension is harmless; convergence is only used on positive-time compact sets.

Extend the continuous compatible parabolic data psi to a continuous H on a neighborhood of the closed cylinder and choose smooth H_n converging uniformly to H. If the data have the stated Hölder modulus, this can be done explicitly: extend with the infimum formula H(z)=inf_{y in boundary}(psi(y)+C d_p(z,y)^alpha), truncate to the data range, and mollify. Initial/lateral compatibility gives one Hölder modulus on their union by inserting the corner point (y,0) when comparing the two faces. For merely continuous data use a concave dominating modulus in the same infimum construction. Give the n-th problem the trace H_n on partial U_n and initial value H_n(.,0).

Rewrite its smooth nondivergence operator in divergence form with drift B_n=beta_n-div A_n. Subtract H_n and multiply the unknown by e^{-k_n t}, choosing finite k_n so its bounded bilinear form is coercive: ellipticity and Young give

    a_n(v,v)+k_n||v||_2^2 >= (lambda/2)||Dv||_2^2+||v||_2^2.

The published weak variational theorem, on the separable polyhedral H1_0(U_n), now gives a weak solution. Undo the exponential transformation. Its source after subtracting H_n is smooth and finite in L2(H^-1); no uniform bound on these derivatives of H_n is needed for existence. Section 1 gives the uniform bound |u_n|<=M_0+T M_f.

These weak solutions are smooth inside the open cylinder. Here is the required bootstrap rather than an invocation of smooth-solvability: multiply the equation by -D_-h(eta^2 D_h u_n), integrate in time, and use difference-quotient integration by parts. The principal term bounds lambda||eta D D_h u_n||_2^2; coefficient commutators have the form D_h A_n Du_n, and all other terms have one lower derivative. Cauchy–Schwarz and Young absorb half the principal term and bound the rest by C(||u_n||_{L2 H1}^2+||F_n||_2^2) on a slightly larger compact cylinder. A time cutoff removes its bottom endpoint. Let h tend to zero using the difference-quotient characterization. This gives D_x^2u_n locally in L2. Repeating the identical test after a spatial derivative, with Leibniz's formula for each coefficient derivative, inductively gives every spatial derivative locally in L2. The equation then gives u_{n,t} and every spatial derivative of it locally in L2. Differentiating the equation distributionally in time gives all second time derivatives and their spatial derivatives locally in L2; induction repeats, because every coefficient and source derivative is bounded on each compact set. Thus u_n is in H^m locally in all d+1 variables for every m. Local Euclidean Sobolev embedding gives a smooth representative satisfying the equation classically. No assertion at the polyhedral boundary is involved.

Apply (S) on each fixed compact subcylinder, where all n sufficiently large contain it. Arzela–Ascoli and a countable diagonal subsequence give convergence of u_n,Du_n,D^2u_n,u_{n,t} locally uniformly (using any alpha'<alpha). Passing to the equation proves P u=f. Estimate (S), or its bounds followed by the limit, gives the full local alpha-Hölder bound. We have constructed a bounded classical solution on the interior. Boundary attainment is the next, separate step.

## 4. Boundary attainment using explicit exterior-ball barriers

Fix x_0 in partial U. Choose an exterior closed ball centered at y with radius R and touching only x_0 locally. If the original ball has other contact points, replace it by a smaller internally tangent ball; strict convexity of the Euclidean norm shows the smaller sphere meets the original sphere only at x_0. Put r=|x-y| and

    h(x)=R^{-p}-r^{-p}.

On U near x_0, h>=0, h(x_0)=0, and

    L h = p r^{-p-2}(tr A -(p+2)(x-y)^T A(x-y)/r^2
                        + beta·(x-y)) + q h.

Since q<=0 and beta bounded, choose p so (p+2)lambda>d Lambda_1+||beta||_infty(R+rho)+1. After multiplying h by a fixed positive constant, -L h>=1 on U intersect B_rho(x_0). On its artificial spatial boundary h has a positive minimum. The same inequalities hold uniformly for all large n, since ellipticity and coefficient bounds, not their derivatives, were used.

Fix a lateral point (x_0,t_0) with t_0>0 and epsilon>0. Restrict to |x-x_0|<rho and |t-t_0|<eta so H differs from psi(x_0,t_0) by at most epsilon there. The approximation data H_n have error at most 2epsilon. On the local cylinder beginning at s=max(0,t_0-eta), use

    W(x,t)=2epsilon+A h(x)+B(t-t_0)^2.

Choose B large enough to dominate the global solution bound at t=s when s>0 (B eta^2 suffices); if s=0 the initial data are already within 2epsilon locally. Put M_*=M_f+||q||_infty M_0, to account for subtracting the constant psi(x_0,t_0) from u_n. Then choose A large enough both to dominate the global solution bound on the artificial spatial boundary and to satisfy A>=M_*+2B eta. Since (partial_t-L)W>=A-2B eta, comparison bounds u_n-psi(x_0,t_0) above by W, and its negative by W. On the actual boundary of U_n, not U, the assigned H_n values are within 2epsilon in this neighborhood, so comparison is legitimate there. On remaining artificial faces the chosen A,B dominate. First pass n to infinity at interior points. Then let (x,t) tend to (x_0,t_0); h and the squared time term tend to zero. Finally let epsilon decrease to zero. This proves the lateral boundary value, including approaches from either side in time. At t_0=T use only t<=T.

At an initial point (x_0,0), including a corner, use instead

    W=2epsilon+A|x-x_0|^2+B t.

Choose A to dominate on the artificial spatial boundary and B>=M_*+C A, where C bounds |L|x-x_0|^2| on the neighborhood, with the harmless q terms favorable. Initial and nearby lateral data are within 2epsilon by compatibility. Comparison, passage to the limit, and epsilon decreasing to zero give u(x,t)->g(x_0). These local arguments give continuity on the whole compact closed cylinder. Uniqueness is Section 1 applied to the difference of two solutions. This completes the classical interior existence proof under the precise bounded interpretation in the interface.

## 5. Residual stability

Once u exists, no homogeneous correction solution is needed. Let e=h-u, R=f+h_t-Lh and E=||h-psi||_{boundary}. Then P e=-R. The two barriers E+t||R||_infty have (partial_t-L) at least ||R||_infty when q<=0. Direct comparison gives

    ||h-u||_infty <= E+T||R||_infty.

For q of arbitrary bounded sign, apply the exponential transformation and obtain a finite constant depending on T and sup q. If a trial function's residual supremum is infinite the displayed finite-error implication has no content; the convergence application uses residuals tending to zero and therefore finite.

## 6. Zero-data energy identification and PINN energy interface

This is the necessary replacement for assuming that u has C^{2,1} closure regularity. Suppose e is bounded, locally classical, continuous on the closed cylinder, has zero initial/lateral values and satisfies -e_t+Le=F with bounded F. Assume the original divergence coefficients satisfy the live ellipticity and v bounds, and the weak derivative expansion agrees with the nondivergence operator. Construct its approximants as in Sections 3–4 with **zero** H_n and with a_n,b_n,c_n,d_n obtained by convolution of the original divergence coefficients. Extend in time by a=lambda I,b=c=d=0 outside (0,T); the spatial convolution at U_n samples only U. Distributional differentiation commutes with convolution, so on U_n the expanded beta_n,q_n are precisely the convolutions of beta,q (with these time extensions). They retain their uniform bounds and q_n<=0. All the preceding interior compactness and boundary arguments apply, so a subsequence converges to a classical zero-data solution v, which equals e by classical uniqueness.

For each n, testing its weak equation with e_n, ellipticity and the stated v bound give, with y_n=||e_n||_2^2,

    y_n'+lambda_0||De_n||_2^2
      <= C_1 y_n+C_2||F_n||_2^2,

where C_1,C_2 depend only on lambda_0,v, not on n or coefficient derivatives. Explicitly the cross term in the forward weak form is (b_n-c_n)e_n·De_n; use ||b_n-c_n||^2<=2(||b_n||^2+||c_n||^2), Young, and the uniform d_n bound. One may take finite slightly enlarged constants if convolution changes the displayed combined bound, since the separate bounds from it are retained. The identity y_n(0)=0 and an integrating factor give uniform bounds for sup_t y_n and integral ||De_n||^2. Extend e_n by zero from U_n to U. By the closure definition of H1_0, these extensions lie in H1_0(U). Weak compactness in L2(0,T;H1_0(U)) yields a subsequence with a weak limit, and the already proved interior uniform convergence identifies it with e almost everywhere. Thus e belongs to L2(0,T;H1_0(U)).

For every compactly supported smooth spacetime test function the variational identities pass to the limit: coefficients converge locally uniformly, gradients converge weakly, and source convolutions converge locally in L2. Density then extends the identity to all H1_0(U) tests, because all divergence coefficients are bounded and e belongs to the energy space. The equation gives e_t in L2(0,T;H^-1(U)); hence e belongs to the evolution space. Its continuous L2 trace at t=0 is zero: integrate the approximating weak identities including a test nonzero at t=0, pass to the limit using their zero initial values, and compare with the evolution-space integration-by-parts identity. Consequently e is exactly the unique zero-initial weak Dirichlet solution. In particular the energy inequality obtained by directly testing this limiting equation is valid without any closed-cylinder derivative regularity.

For a sequence of exact-data PINN errors e_m with ||e_m||_infty->0 and bounded residuals F_m with ||F_m||_infty->0, the same energy identity gives

    (lambda_0/2) integral_0^T ||De_m||_2^2 dt
       <= C integral_0^T ||e_m||_2^2 dt
          + integral_0^T ||F_m||_2||e_m||_2 dt ->0.

The terminal L2 norm has favorable sign and was dropped. Also integral||e_m||_2^2->0 by boundedness of the cylinder. Hence e_m->0 in L2(0,T;H1(U)). The assumptions needed are exact initial/lateral data, bounded residuals, the classical/weak identification just proved, and the divergence coefficient bounds. C^{2,1} regularity on the closed cylinder is unnecessary.

## Source reading and honest status

Retrieved the full 31-page Shin–Darbon–Karniadakis PDF from https://arxiv.org/pdf/2004.01806 and extracted it with PyMuPDF. Read its complete Definitions 2.1–2.2 and weighted convention (2.7), Assumption 3.4, Theorem 3.6 and complete Appendix F, including its actual citation: Friedman, *Partial Differential Equations of Parabolic Type*, Chapter 3 Corollary 2. No Friedman/Lieberman full-text reading is claimed. The proof above is an independent construction using the read published weak supplier, not a claim that the source proves its cited existence theorem. The source gives no local Schauder proof.

Remaining integration obligations: (i) parent must settle the exact meaning of “Hölder continuous” and explicitly bind bounded beta,q,f, rather than replacing weighted bounds by stronger hypotheses silently; (ii) parent must review the kernel/cutoff Schauder helper and positive-part weak comparison before promotion; (iii) the H1_0 evolution-triple helper must cover general bounded U for the energy limit, with its proof extension stated, rather than misusing the published polyhedral statement; (iv) local spatial C1/weak divergence identification must be explicit; (v) actual item/manifest/dependency/consumer integration and all native checks remain the parent's work. This proposal is not an independent acceptance record and does not authorize a gate or assert the currently incomplete live theorem has passed review.
