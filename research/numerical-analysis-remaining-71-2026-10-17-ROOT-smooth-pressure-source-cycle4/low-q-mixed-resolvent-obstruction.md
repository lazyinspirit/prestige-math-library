# Actual obstruction to a generic low-q mixed Stokes route

Research only. This note does not refute the original smooth MINI pressure estimate. It disproves a stronger, generic-load mixed resolvent estimate which one might otherwise try to import to handle the nonlinear load merely through its L^(6/5) norm. The domain, boundary and pressure norm in this obstruction are actual polyhedral no-slip ones; no abstract non-MINI finite-dimensional example is used.

## 1. Source evidence: stationary W2,6/5 regularity really is available

V. Maz'ya and J. Rossmann, *Lp estimates of solutions to mixed boundary value problems for the Stokes system in polyhedral domains*, arXiv:math-ph/0412073. Full text https://arxiv.org/pdf/math-ph/0412073, saved `mazya-rossmann2004.pdf` and `.txt`, 40 pp.

Actually inspected the introduction's exact statements, §5.1 variational problem and existence theorem, §5.4 regularity Theorems 5.2–5.3 with their localization argument, and all Dirichlet examples in §5.5 (PDF p.38). The full 40-page cone Green-kernel machinery and cited spectral-pencil results have not been independently reconstructed here.

For an arbitrary polyhedron G in R3 and homogeneous Dirichlet conditions, §5.5 explicitly states that an energy weak stationary Stokes solution with f in H^-1 intersect L^s and divergence datum g in L2 intersect W1,s satisfies

    u in W2,s(G)^3,   p in W1,s(G),   1<s<=4/3.

Thus s=6/5 genuinely lies in its stated range, without convexity. This derives from Theorem 5.3, the absence of vertex-pencil spectrum in −1<=Re lambda<=0 and edge exponents mu_k>1/2. A citation alone cannot replace those extensive local proof obligations.

This stationary regularity statement does **not** imply a uniform positive-parameter resolvent estimate for the pressure. Writing f−lambda u as the stationary load introduces lambda u, whose full H^-1 or L^(6/5) norm is the very issue. The following construction proves that a generic uniform pressure estimate at this exponent cannot hold on all original domains.

## 2. Explicit polyhedral domain where the Leray projector fails V to L6

Let G2 be a bounded L-shaped polygon having a reentrant corner at the origin with opening omega=3pi/2. Near that corner use polar coordinates 0<theta<omega and put alpha=pi/omega=2/3. Choose a smooth radial cutoff chi equal to one near zero and supported in a sufficiently small corner neighborhood, and set

    q2(r,theta)=chi(r) r^alpha cos(alpha theta).

Set q(x,y,z)=q2(x,y) on the three-dimensional prism G=G2 times (0,1), and adjust q by a constant to mean zero if desired. This G is bounded, connected, Lipschitz and polyhedral.

The function q belongs to H1(G). On each of the two corner sides its normal derivative vanishes, because the angular derivative contains sin(alpha theta), zero at theta=0,omega. It vanishes near all other polygon sides. Its z derivative is zero, so the normal derivative also vanishes on the top and bottom prism faces.

Let g=Delta q. The corner profile is harmonic wherever chi=1, so g is supported in a fixed annulus away from the reentrant edge; in particular g belongs to L2(G). In the weak Neumann identity,

    (grad q,grad r)=−(g,r),  r in H1(G),

there is no hidden line-source on the edge: truncation at radius epsilon produces a small-circle flux whose absolute value against a smooth test is O(epsilon^alpha), tending to zero; density extends the identity to H1. Taking r=1 gives integral_G g=0.

The standard bounded divergence lifting on this Lipschitz domain gives v in H1_0(G)^3 with div v=g. Integration by parts then gives

    (v,grad r)=−(g,r)=(grad q,grad r),  r in H1(G).

Here the identification with the **actual** H_sigma=L2-closure(V_sigma) can be proved from existing local suppliers, without importing a separate density theorem. Read `items/lem-na-continuous-pressure-recovery-from-solenoidal-residual.md` fully; its proof uses `thm-na-bounded-lipschitz-domain-divergence-right-inverse`, `lem-na-zero-mean-of-zero-boundary-divergence` and `thm-riesz-representation-for-hilbert-space`. Apply exactly that static annihilator construction as follows (with its inherited Countable Choice assumption).

If F is in H_sigma^perp, its L2 pairing defines a bounded functional on V annihilating V_sigma. For a fixed bounded divergence lift B:L2_0 to V, define ell(a)=(F,Ba). Hilbert Riesz gives a mean-zero q0 in L2 with (q0,a)=−ell(a). For every w in V, w−B(div w) is in V_sigma, so

    (F,w)=−(q0,div w).

Consequently grad q0=F in distributions. Since q0 and all of its weak first derivatives are L2, q0 belongs to H1 by definition. This proves H_sigma^perp is contained in grad H1. Conversely, each grad r with r in H1 annihilates V_sigma by the weak integration-by-parts identity on H1_0, obtained by its defining compact-smooth approximation. Thus H_sigma^perp=grad H1, and taking Hilbert orthogonal complements gives H_sigma=(grad H1)^perp.

The displayed pairings for the particular v and q show that v−grad q lies in (grad H1)^perp=H_sigma, while grad q lies in H_sigma^perp. Therefore the L2 orthogonal decomposition identifies the actual Leray projector, giving

    Pv=v−grad q.

Near the reentrant edge, |grad q|=alpha r^(alpha−1)=alpha r^(−1/3). Therefore

    integral_G |grad q|^6 >= c integral_0^epsilon r^(−2) r dr = infinity.

But v belongs to L6(G)^3 by the H1 Sobolev embedding. Consequently Pv does not belong to L6(G)^3. This gives an explicit original-domain obstruction to a bounded map P:V to L6. The construction also works at angles omega>3pi/2, where the divergence is stronger; the ordinary L-shaped prism suffices at the logarithmic endpoint.

## 3. Uniform generic pressure resolvent bound would contradict that example

Fix viscosity nu>0. For every F in L2(G)^3 and parameter lambda>=1 let (u_lambda,p_lambda) be the actual mean-zero-pressure mixed Stokes resolvent solution

    lambda(u_lambda,w)+nu(grad u_lambda,grad w)
                 −(p_lambda,div w)=(F,w),    w in V=H1_0(G)^3,
    div u_lambda=0.

Suppose, for contradiction, that there is a constant C independent of lambda and F such that

    ||p_lambda||2 <= C ||F||_(6/5).                         (R)

The energy identity and L6 Sobolev embedding give

    nu ||u_lambda||V <= ||F||V* <= C_S ||F||_(6/5).

The full mixed equation therefore gives

    ||lambda u_lambda||V*
      <= ||F||V*+nu||u_lambda||V+sqrt(3)||p_lambda||2
      <= C' ||F||_(6/5),                                  (1)

with a parameter-independent C'. This uses the genuine full derivative/mass pairing on all V, not its restriction to V_sigma.

For completeness, lambda u_lambda converges to PF in L2 as lambda tends to infinity. Put w_lambda=lambda u_lambda. Testing the restricted resolvent equation with w_lambda gives

    ||w_lambda||2²+(nu/lambda)||w_lambda||V²=(PF,w_lambda),

so ||w_lambda||2<=||PF||2 and ||w_lambda||V<=sqrt(lambda/nu)||PF||2. Any L2 weak subsequential limit belongs to the closed subspace H_sigma. For every z in V_sigma, its equation is

    (w_lambda,z)+(nu/lambda)(grad w_lambda,grad z)=(F,z).

The second term tends to zero by the preceding gradient estimate. Density of V_sigma in H_sigma identifies every weak limit with PF. The norm upper bound then gives strong convergence in L2. No domain H2 regularity or spectral theorem is used.

Passing to the limit in (1), by testing against each w in V, yields

    |(PF,w)| <= C' ||F||_(6/5) ||w||V,  F in L2, w in V.

L2 self-adjointness of P rewrites this as

    |(F,Pw)| <= C' ||F||_(6/5) ||w||V.                     (2)

This forces Pw in L6 for every w in V. Here is a direct verification which avoids any tacit extension of P: set a=Pw in L2 and

    F_m=1_{|a|<=m}|a|^4 a.

Each F_m is in L2, since it is bounded on the finite-measure domain. With I_m=integral_{|a|<=m}|a|^6, inequality (2) gives

    I_m <= C' I_m^(5/6) ||w||V.

If I_m>0 divide; otherwise the conclusion is immediate. Monotone convergence gives ||Pw||6<=C'||w||V. Taking w=v from section 2 contradicts Pv not in L6. Thus (R) is false on this explicit L-shaped prism.

The conclusion is a precise generic-load obstruction: stationary W2,6/5 pressure regularity cannot be promoted to the parameter-uniform mixed pressure estimate (R) on all allowed polyhedra. A standard maximal-regularity argument which requires this uniform mixed resolvent estimate cannot supply the original claim merely by placing the nonlinear residual in L^(6/5).

This does not itself assert the failure of every conceivable time-domain pressure estimate. Nor does it give a counterexample to the original smooth branch: the original forcing lies in L2_t L2_x and the actual nonlinear residual has special algebraic structure. A successful route could exploit that structure or use a different operator/interface. It cannot use (R) for arbitrary L^(6/5) loads.

## 4. Additional full text: Lipschitz maximal regularity does not cover the requested exponent by its stated range

Patrick Tolksdorf, *On the Lp-theory of the Navier–Stokes equations on three-dimensional bounded Lipschitz domains*, arXiv:1703.01091v2. Full text https://arxiv.org/pdf/1703.01091, saved `tolksdorf2017.pdf` and `.txt`, 11 pp.

Actually inspected introduction, all of §2 including Theorems 2.1 and 2.6, and §4.2's maximal-regularity setup. The remaining fractional-power proof was not independently rechecked.

Theorem 2.1 states bounded Helmholtz projection for 3/2−epsilon<p<3+epsilon. Theorem 2.6 states Stokes maximal regularity under |1/p−1/2|<1/(2d)+epsilon. For d=3 and p=6/5 the left side is 1/3; the guaranteed principal width is 1/6, and no assertion epsilon>1/6 is made. The theorem therefore does not supply p=6/5 for arbitrary domains. Neither the pressure estimate (R) nor its discrete arbitrary-graded-MINI analogue is proved there.

All statements in this note remain research evidence. No canonical item, metadata, gate, control, consumer or publication file was changed.
