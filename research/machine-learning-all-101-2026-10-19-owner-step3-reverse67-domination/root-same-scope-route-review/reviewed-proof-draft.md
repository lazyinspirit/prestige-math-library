# Theorem-specific route preserving the original analytic hypothesis set

Research proof draft, same distinct escalation cycle 1. This does not authorize source application or claim completion. The one still-unproved local analytic prerequisite is stopped spacetime occupation absolute continuity; Krylov's exact established estimate proves it, but its imported parabolic barrier still needs a genuinely proved local supplier. The separate forward-duality option remains unapproved.

The generic original lemma does not assume ellipticity or reverse martingale-problem existence. The argument below therefore targets the actual general reversal THEOREM, which assumes both. It must not be advertised as a proof of the generic lemma's unrestricted original martingale claim.

Let the forward-time candidate reverse operator be
\[
D_r f=p_r^{-1}\{L_r^*(p_rf)-fL_r^*p_r\}.
\]
Write forward-clock Bayes kernels as
\[
B_{r,s}(y,dx)=p_s(x)q(s,x;r,y)p_r(y)^{-1}dx,\qquad s<r.
\]
These are the original reversed kernels with their time labels translated. Positivity, normalization and composition follow without an analytic limit.

Choose a nonexplosive continuous solution Z of the ASSUMED reverse martingale problem, started with law p_T(y)dy. No marginal or kernel of Z is assumed. This is an auxiliary solution, not the original reversed process. The assumed existence for every initial law supplies it. Work with its natural filtration, augmented only for the already proved continuous-martingale calculus if required.

## Coordinate localization and the occupation prerequisite

Compact coordinate cutoffs give Z=M+∫c_u(Z_u)du, c_u=-b_{T-u}+p_{T-u}^{-1}div(p_{T-u}a_{T-u}), locally in state, and coordinate-product cutoffs give [M]_u=∫a_{T-u}(Z_u)du. This uses exactly the existing coordinate/product argument, not an assertion about the original Y. The martingale-problem definition makes its compact-test compensators finite; coordinate cutoffs isolate each drift component, and squared-coordinate cutoffs then give finite trace energy. Nonexplosion and continuity exhaust the whole finite interval. Thus ∫(|c_u(Z_u)|+tr a_{T-u}(Z_u))du is pathwise finite. Neither its unstopped expectation nor an expectation under p is asserted.

The original uniform bound on σ^{-1} yields a≥κI for deterministic κ>0. Stop on the first passage of |Z| or the cumulative drift-plus-trace energy above n. These stops tend to T and equal T eventually pathwise. Their stopped expected drift variation and expected trace bracket are finite, independently of any moment of Z_0.

The needed analytic statement is: the finite measure μ_n(F)=E∫_0^{τ_n}1_F(u,Z_u)du is absolutely continuous with respect to Lebesgue measure on [0,T]×R^d. A quantitative sufficient estimate is Krylov arXiv:2005.08831 Lemma 4.1 (PDF pp.6–8), with A_clock=t, r=1, c=0, covariance matrix in that source equal to half our bracket density. Its determinant weight is bounded below by (κ/2)^{d/(d+1)} before τ_n. The estimate uses only stopped expected bracket trace and drift variation. It imposes no Lp bound on the drift coefficient, no bounded initial state, and no continuity of the original σ factor. If its source's d≥2 restriction is retained, append an independent Brownian coordinate for d=1 and project the resulting occupation absolute continuity, exhausting bounded auxiliary coordinates.

The full stochastic proof of that estimate has been read. It uses a genuine external deterministic parabolic Bellman barrier, Krylov2018 Theorem2.2.4. That barrier is not yet a proved repository supplier; citation alone is not credited as closing this dependency.

## Positive harmonic kernels without differentiating a mixture

Fix s∈(0,T), x∈R^d, and set
\[
h_{s,x}(r,y)=q(s,x;r,y)/p_r(y),\qquad r>s.
\]
Under the classical forward-density meaning, q(s,x;·,·) and p are C^{1,2} in their evolving time/state variables. This is the regularity of these solution functions, not a claim that the separate coefficient-product derivatives are jointly bounded. Positivity of p gives the same local regularity of h. The exact product identity and the TWO printed forward equations give
\[
\partial_r h_{s,x}=p_r^{-1}\{L_r^*(p_rh_{s,x})-h_{s,x}L_r^*p_r\}=D_rh_{s,x}.
\]
This is pointwise forward PDE algebra; it assumes no backward equation for P_{r,t}f.

Consequently H^x_u=h_{s,x}(T-u,Z_u), 0≤u<T-s, is a nonnegative local martingale on every closed subinterval staying short of T-s. Time-dependent compact localization and Itô prove this: on each time-state compact, h and its required derivatives are bounded, while the localized drift and trace energy of Z are finite. Existing predictable Brownian reconstruction may be used to meet the actual supplied Brownian Itô interface; its old closed proof is unchanged. Its initial expectation is ∫q(s,x;T,y)dy=1, since Z_0 has density p_T. Hence H^x is a supermartingale before the endpoint.

For ANY Borel 0≤f≤1 define
\[
H^f_u=\int p_s(x)f(x)H^x_u dx=B_{T-u,s}f(Z_u).
\]
To transfer the supermartingale property, test against a nonnegative bounded event variable in the earlier Z filtration and apply Tonelli to the inequality for each fixed x. This avoids simultaneous choices of conditional versions for uncountably many x. H^f is bounded and is a supermartingale. The complementary mixture H^{1-f} is also a supermartingale, while H^f+H^{1-f}=1 by the marginal identity, pointwise in (u,Z_u). Their supermartingale inequalities must therefore be equalities. Thus H^f is a true martingale on [0,T-s), and
\[
E B_{r,s}f(Z_{T-r})=\int p_s f,\qquad s<r≤T. \tag{1}
\]
The same argument gives its conditional martingale identity at any two times before the endpoint. No integrated derivative of q in x or derivative of a mixture is used.

## Time averaging identifies the unknown marginals of Z

For a fixed compact smooth f and δ>0 put
\[
F_δ(r,y)=|B_{r,r-δ}f(y)-f(y)|,\qquad r>δ.
\]
It is bounded by 2||f||∞. Under the ORIGINAL forward process,
\[
\int p_r(y)F_δ(r,y)dy
\le E|f(X_{r-δ})-f(X_r)|.
\]
Continuous paths and boundedness of f imply that the integral over every compact interior time interval tends to zero as δ↓0. On each compact time-state cylinder p has a strictly positive minimum. Thus F_δ→0 in local spacetime L1. Boundedness then implies convergence in local L^{d+1} as well, although occupation absolute continuity already suffices.

Apply the occupation prerequisite to the fixed auxiliary Z, stopped at τ_n and restricted to a compact state ball. If ν is any finite measure absolutely continuous with respect to Lebesgue measure, bounded functions converging to zero in local Lebesgue L1 have integral against ν tending to zero: truncate its Radon–Nikodym density at a large constant, use the L1 convergence on the bounded part, and then use the small density tail. Equivalently the quantitative Krylov estimate applies directly to F_δ after the deterministic reversal of its time coordinate. Consequently
\[
E\int_a^b F_δ(T-u,Z_u)1_{u≤τ_n}du\longrightarrow0
\]
for compact interior a,b with T-u>δ. Let n increase: |F_δ|≤2||f||∞ and E(T-τ_n)→0 remove stopping, uniformly in δ. No convergence under a presumed p marginal of Z has been used.

In (1), put r=s+δ. Multiply by any bounded continuous time test ζ supported in (0,T), and integrate over s. The occupation convergence just proved, with u=T-s-δ, permits replacement of B_{s+δ,s}f(Z_{T-s-δ}) by f(Z_{T-s-δ}) in this time integral. Continuity of Z then replaces the latter by f(Z_{T-s}). Hence
\[
\int ζ(s)E f(Z_{T-s})ds=\int ζ(s)\int p_s f\,dx\,ds.
\]
The two functions of s are continuous: one by continuous Z and bounded f, the other by the original continuous X law. They are therefore equal at every interior time, not just almost every time. Compact smooth tests determine finite Borel probabilities by smooth cutoffs and π–λ; thus Law(Z_{T-s})=p_s dx. Path continuity extends equality to s=0,T. This derives, rather than assumes, the required marginals.

## The fixed endpoint and all Bayes transitions

Now fix 0≤s<r≤T. For δ>0 small, H^f's conditional martingale identity yields
\[
E[B_{s+δ,s}f(Z_{T-s-δ})\mid\mathcal F^Z_{T-r}]
=B_{r,s}f(Z_{T-r}).
\]
For bounded continuous f, the now-established law of Z_{T-s-δ} is p_{s+δ}; hence
\[
E|B_{s+δ,s}f(Z_{T-s-δ})-f(Z_{T-s-δ})|
\le E|f(X_s)-f(X_{s+δ})|\to0.
\]
Continuity of Z gives f(Z_{T-s-δ})→f(Z_{T-s}) in L1. Conditional expectation is an L1 contraction, so the endpoint limit gives
\[
E[f(Z_{T-s})\mid\mathcal F^Z_{T-r}]=B_{r,s}f(Z_{T-r}).
\]
Initially use compact smooth f, then bounded Borel functions by smooth cutoff/π–λ. Thus Z has exactly the original Bayes-reversed transition kernels. Z_0 and Y_0 both have law p_T; iterated conditioning identifies all finite-dimensional laws, and continuous paths identify their laws on C([0,T],R^d). The compact-test local martingale problem transfers to the original Y and its natural reversed filtration by localization and event tests. Existing coordinate/product localization and predictable reconstruction now yield the original reverse SDE without any new theorem hypothesis. Reverse MP uniqueness identifies its law, as originally claimed.

## Still open before this can be an approved source repair

1. Author the precise stopped occupation-absolute-continuity supplier with its full minimum analytic prerequisite proof; the imported parabolic barrier is not presently locally proved.
2. Bind the printed phrase “q forward equation holds classically” to the ordinary C^{1,2} solution-function regularity used for each fixed initial (s,x). Do not infer separate coefficient-product joint bounds from that phrase.
3. The argument proves the extended/local-martingale generator and SDE. The original proof's pointwise small-time quotient at every deterministic time remains a separately identified interface issue; no all-times quotient conclusion is silently claimed here.
4. Dispose of the generic old lemma separately: its original unqualified martingale scope lacks the theorem's reverse MP existence and ellipticity. Preserve its valid Bayes/product algebra, but do not route this theorem-specific proof back as if those extra hypotheses were present there.
