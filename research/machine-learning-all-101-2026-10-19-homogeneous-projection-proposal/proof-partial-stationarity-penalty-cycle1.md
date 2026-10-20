# Partial signed-projection stationarity and penalty convergence — cycle 1 proposal

Proof-only supplier work for the distinct native batch-52 issue. No item, manifest, contract, decision, gate or readiness record is edited by this proposal. The parent owns independent review, integration and all consumers. The claims below preserve the full signed, infinite-dimensional-Hilbert, bounded/unbounded-Theta cases. They do not assume convergence of the raw positive and negative projections, compactness of the feature image on an unbounded domain, or a constant penalty coefficient.

## Conclusions

The stationarity claim is provable. The missing dynamical penalty convergence is also provable from stationarity. A useful new intermediate result is that narrow convergence of finite signed measures on a closed Euclidean domain implies uniform tightness of their total variations, hence norm convergence of their integrals against any bounded norm-continuous Hilbert-valued feature. Its proof is supplied below, rather than inferred from scalar weak convergence in the Hilbert space.

Write sigma_t=h^1(mu_t), alpha_t and beta_t for the raw projections, m_t=int phi d sigma_t, f_t=R'(m_t), P_t=int |w| Vtilde(theta) dmu_t, and S(t)=int w^2 dmu_t. Let A(t)=int |v_t|^2 dmu_t. The two key estimates are

    S'(t) = -2( <f_t,m_t> + P_t ),      S(t) <= C(1+t),
    L(t)^2 <= B^2 S(t) A(t),
    L(t) = int_{w>0} w G_{+,t}(theta)^2 dmu_t
         + int_{w<0} (-w) G_{-,t}(theta)^2 dmu_t.

If stationarity fails on either Jordan part of the signed limit, L(t) is bounded below by a positive constant for all sufficiently late t. Then A(t) >= c/(1+t), contradicting finite total dissipation. This resolves the original action-versus-|w|-weighted-projection mismatch without identifying their measures.

Here and throughout this proposal, **weak convergence of finite signed measures means convergence against every bounded continuous real test function on Theta** (narrow signed convergence). This is the convention explicitly used in the current stationarity proof's Step 1.1. Vague convergence against C_c alone would not suffice for the norm-moment lemma on unbounded Theta; do not silently substitute that topology.

## 1. Local helper: signed narrow convergence and vector-valued moments

**Claim.** Let X be a closed subset of R^k, let sigma_n and nu be finite signed Borel measures, and assume int q d sigma_n -> int q dnu for every q in C_b(X). Then sup_n |sigma_n|(X)<infinity, the measures |sigma_n| are uniformly tight, and for every bounded norm-continuous phi:X->H,

    || int phi d sigma_n - int phi dnu ||_H -> 0.

**Proof of the measure norm assertion.** C_b(X), with the supremum norm, is Banach: a uniformly Cauchy sequence has a pointwise limit, convergence is uniform, and the uniform limit is continuous. A finite signed Borel measure is regular, since its finite Jordan parts are regular on the second-countable locally compact Euclidean subspace X. The operator T_sigma(q)=int q d sigma has norm |sigma|(X). The upper bound is the total-variation inequality. For the lower bound, approximate the positive and negative Hahn pieces from inside by disjoint compact sets carrying all but epsilon of their variations; the continuous distance function separating these compact sets gives a C_b function of magnitude at most 1 whose integral is at least |sigma|(X)-2epsilon. Uniform boundedness applied to the pointwise-bounded family T_sigma_n therefore gives the uniform variation bound. AC supplies DC for this use of uniform boundedness and the countable selections below.

**Proof of tightness, including cancellation.** Subtract nu and put y_n=sigma_n-nu. Suppose their total variations are not uniformly tight. Then there is epsilon>0 such that outside every compact ball some |y_n| has mass at least epsilon. Every fixed finite collection of indices is tight, so the same obstruction can always be realized at an arbitrarily late index after increasing the radius. Inductively construct increasing radii R_j -> infinity, indices n_j increasing, and functions q_j in C_c(X) such that:

- q_j is supported in X outside the closed ball of radius R_{j-1}, and its compact support is contained in the open ball of radius R_j;
- |q_j|<=1 and int q_j dy_{n_j} >= epsilon/2;
- |int (q_1+...+q_{j-1}) dy_{n_j}| < epsilon/8;
- |y_{n_j}|(X outside the ball of radius R_j) < epsilon/8.

At stage j, first take an index threshold so large that the third inequality holds for all later indices, by narrow convergence. Increase the previous exclusion radius temporarily so that all finitely many earlier-index measures have tail less than epsilon. Failure of uniform tightness then supplies an index n_j beyond the threshold with variation at least epsilon outside that enlarged radius. Inner regularity of its positive and negative Hahn pieces supplies disjoint compact subsets of this exterior carrying almost all that exterior variation. Separating these two compacts by distance cutoffs and multiplying by a compactly supported exterior cutoff gives q_j with the second inequality. Finally choose R_j containing its support and with the fourth property. This also leaves every later q_i supported outside the ball of radius R_j. Gaps between the supporting annuli can be imposed by increasing each radius by 1.

The locally finite sum q=sum_j q_j is a bounded continuous function of magnitude at most 1, since the supports are pairwise disjoint and escape every compact set. For the jth selected measure, its integral against earlier terms has magnitude less than epsilon/8, the current term contributes at least epsilon/2, and the entire future sum has integral of magnitude at most epsilon/8 by the last tail inequality. Consequently int q dy_{n_j} >= epsilon/4, contradicting y_n ->0 against C_b. Thus |y_n|, and hence |sigma_n|, are uniformly tight.

**Proof of norm convergence of moments.** Given delta>0, choose compact K with sup_n |sigma_n|(X\K)+|nu|(X\K)<delta. On K, uniform continuity of phi permits a finite approximation Phi_epsilon=sum_{i=1}^N h_i psi_i, where h_i in H, psi_i in C_c(X), ||Phi_epsilon||_infinity<=||phi||_infinity, and sup_K ||phi-Phi_epsilon||<epsilon. For completeness, choose finitely many small relative open balls covering K and continuous nonnegative distance cutoffs supported in those balls; normalize their sum near K and multiply by a compact cutoff equal to 1 on K. The coefficients h_i are feature values at their centers. This produces the stated convex-combination approximation. Then

    || int phi d(sigma_n-nu) ||
      <= epsilon (|sigma_n|(X)+|nu|(X))
         + 2||phi||_infinity (|sigma_n|(X\K)+|nu|(X\K))
         + || sum_i h_i int psi_i d(sigma_n-nu) ||.

The final finite sum tends to zero by narrow convergence. Let epsilon and delta tend to zero. This proves the claim. It does not use compactness of phi(X).

**Continuous time.** Apply this result to every sequence t_n->infinity. Since failure of norm convergence would give a sequence of failures, sigma_t->nu narrowly implies m_t->m_nu in norm. The same argument gives a uniform variation bound for all sufficiently late t: otherwise select a sequence t_n->infinity with unbounded variations, contradicting uniform boundedness for that convergent sequence. Finite-time bounds follow from int |w|dmu_t <= (int w^2dmu_t)^{1/2} and W2 continuity. Thus sup_{t>=0}|sigma_t|(Theta)<infinity.

## 2. Flow identities and their applicability to the current stationarity statement

The current stationarity statement does not explicitly assume that mu_0 is concentrated on a Q_r. Its cited global-flow theorem only supplies the energy identity for such initial laws. To preserve the richer statement, supply the following argument directly for any flow in the stated definition with finite initial energy. For the projected-limit consumer, bounded initial w is already an explicit hypothesis, so its use of the global theorem is covered.

The partial hypotheses imply bounded first derivatives of phi and Vtilde. On bounded Theta this follows from continuous differentiability on its compact closure. On Theta=R^k, boundedness of a function and Lipschitz continuity of its differential give the bound: along any unit direction e,

    ||Dphi(theta)e|| <= 2||phi||_infinity/r + Lip(Dphi) r/2

for every r>0, by integrating the differential along the segment of length r. Taking r=1 is enough. The scalar version applies to Vtilde.

On a finite time interval, W2 continuity bounds the second moments of mu_t. Coupling Cauchy-Schwarz and

    ||w phi(theta)-w'phi(theta')||
      <= ||phi||_infinity |w-w'| + ||Dphi||_infinity |w'| |theta-theta'|

give norm continuity of m_t. Thus f_t=R'(m_t) is bounded and continuous on that interval. Superposition for the finite-action continuity equation gives a law of AC paths (w(t),theta(t)) with the prescribed velocity and marginals mu_t. For w!=0 the unconstrained w component of the negative minimum subgradient is

    w' = -a_t(theta)-sign(w) Vtilde(theta),
    a_t(theta)=<f_t,phi(theta)>.

The constraint concerns theta only, so this formula is unaffected by its normal cone. At w=0 the scalar velocity is also bounded by ||f_t||||phi||_infinity+||Vtilde||_infinity. Along almost every path, w'=0 at almost every time where w=0, as for every real AC function on one of its level sets.

The functions m_t and P_t are absolutely continuous on each finite interval. Indeed their pathwise chain-rule derivatives have magnitudes bounded by constants times

    (1+|w|)|v_t|,

which is integrable in time and the path law by Cauchy-Schwarz, the uniform second-moment bound and finite action. Fubini and the Bochner norm estimate therefore pass the pathwise chain rules to the integrals. At w=0 the derivative of |w| is zero almost everywhere on that level set, so no cusp term is omitted.

Pairing the constrained inclusion with the path derivative gives the chain rule

    d/dt F(mu_t) = -int |v_t|^2 dmu_t = -A(t).

To verify the constraint term, any normal vector n at theta(t) has n.dot.theta'=0 at a time of differentiability: test its supporting inequality against theta(t+h) for both signs of h. For the nonsmooth w term use the preceding zero-level observation; away from zero the potential is differentiable. Thus the normal and cusp terms do not alter the energy calculation. Integrating proves the energy identity for all endpoints by the already established absolute continuity. Consequently F(mu_t)<=F(mu_0)=E_0 and int_0^infinity A(t)dt<=E_0. This supplies the fact the current proof labels [F3] even when the initial law has no bounded w support.

Applying the same pathwise calculation to w^2, justified by |w w'| integrability on finite intervals, gives for every finite endpoint

    S(t)-S(s) = -2 int_s^t ( <f_q,m_q>+P_q )dq.             (2.1)

At w=0 both sides of the pointwise derivative formula contribute zero. Since R(m_t)<=E_0, its differential bound on sublevels gives ||f_t||<=D for every t. The signed narrow-convergence helper gives ||m_t||<=M for every t, after absorbing the finite initial interval. As 0<=P_t<=E_0, (2.1) yields

    |S'(t)| <= 2(DM+E_0),
    0<=S(t)<=S(0)+2(DM+E_0)t.                            (2.2)

In particular the needed growth bound is linear in t for S, although the elementary pointwise displacement bound would give only quadratic growth. The distinction is essential to the harmonic-integral argument below.

## 3. Stationarity of both Jordan parts

Norm convergence m_t->m_nu and local Lipschitz continuity of R' give f_t->f_nu in norm. Therefore, with

    G_{+,t}=a_t+Vtilde,       G_{-,t}=-a_t+Vtilde,
    G_+=<f_nu,phi>+Vtilde,   G_-=-<f_nu,phi>+Vtilde,

both G_{s,t}->G_s uniformly on Theta, for s=+,-. Moreover all these functions have a common finite magnitude bound B, increasing B to at least 1 if necessary.

Suppose G_+ is nonzero on a set of positive nu^+ measure. By regularity, there are delta>0 and a function psi in C_c(Theta), 0<=psi<=1, whose support lies in {|G_+|>2delta} and with c_0=int psi dnu^+>0. This uses a compact subset of a positive-measure level set and a continuous compactly supported distance cutoff in the open set {|G_+|>2delta}. For all sufficiently late t, |G_{+,t}|>=delta on supp(psi).

We need only the inequality

    liminf_{t->infinity} int psi dalpha_t >= int psi dnu^+.  (3.1)

It does not assert convergence of alpha_t. To prove it, for every q in C_c with 0<=q<=psi,

    int psi dalpha_t >= int q d(alpha_t-beta_t) = int q dsigma_t.

Pass to the limit and take the supremum over such q. This supremum equals int psi dnu^+: the upper bound follows from nu=nu^+-nu^-; for the lower bound use disjoint compact subsets of the positive and negative Hahn pieces and continuous distance cutoffs, losing arbitrarily little integral. Their compact approximations exist by regularity. This proves (3.1).

Let

    L(t)=int_{w>0} w G_{+,t}^2 dmu_t
          +int_{w<0} (-w) G_{-,t}^2 dmu_t.

Equation (3.1) implies L(t)>=delta^2 c_0/2>0 for all sufficiently late t. For w!=0 the squared radial component of velocity is G_{sign(w),t}^2. Thus Cauchy-Schwarz gives

    L(t)^2
      <= [int_{w!=0} G_{sign(w),t}^2 dmu_t]
         [int_{w!=0} w^2 G_{sign(w),t}^2 dmu_t]
      <= A(t) B^2 S(t).                                  (3.2)

If S(t)=0, then L(t)=0, so on the late interval under consideration it is positive and division is legitimate. Combining (3.2) with (2.2) gives

    A(t) >= (delta^2 c_0/2)^2 /
             ( B^2 [S(0)+2(DM+E_0)t] )

for almost every sufficiently late t. If the denominator's linear coefficient vanishes, it is a fixed finite bound, giving an even stronger contradiction; a zero denominator is incompatible with L>0. Otherwise the right side has divergent integral on [T,infinity). This contradicts int A<infinity.

Hence G_+=0 nu^+-almost everywhere. Apply exactly the same proof to -sigma_t=beta_t-alpha_t, nu^-, and G_- to obtain G_-=0 nu^--almost everywhere. No regular-level-set, boundary-at-infinity or escape theorem enters this proof. In particular it works for a nonconstant bounded smooth Vtilde whenever the asserted flow and energy identity are available.

## 4. Dynamical convergence of the penalty and full energy

The signwise stationarity just proved gives

    <f_nu,m_nu>
      =int <f_nu,phi> dnu^+ -int <f_nu,phi> dnu^-
      =-int Vtilde dnu^+ -int Vtilde dnu^-
      =-P_nu,
    P_nu:=int Vtilde d|nu|.                               (4.1)

Since F(mu_t) decreases to a finite limit E_infinity and R(m_t)->R(m_nu) by norm convergence, the actual lifted penalty has a limit

    P_t -> P_infinity:=E_infinity-R(m_nu).                 (4.2)

The static projection inequality gives P_t>=int Vtilde d|sigma_t|. Nonnegative continuous weighted variation is lower semicontinuous under signed narrow convergence, so

    P_infinity >= P_nu.                                  (4.3)

Here is a direct verification of the lower semicontinuity, to avoid silently assuming convergence of Jordan parts: for every q in C_c with |q|<=Vtilde,

    int Vtilde d|sigma_t| >= int q dsigma_t -> int q dnu.

The supremum of the right side over those q is int Vtilde d|nu|. Its upper bound is the variation inequality. For its lower bound take compact subsets of the two Hahn pieces, distance-separate them by a continuous function b of magnitude at most 1, take a compact cutoff chi equal to 1 on those compacts, and use q=chi b Vtilde. The discarded weighted variations are arbitrarily small by regularity. This proves (4.3) even if Vtilde vanishes or is nonconstant.

If P_infinity>P_nu, equations (4.1)-(4.2), m_t->m_nu and f_t->f_nu imply that for some epsilon>0 and every sufficiently late t,

    <f_t,m_t>+P_t >= epsilon.

The exact radial identity (2.1) would give S(t)<=S(T)-2epsilon(t-T), contradicting S(t)>=0 for large t. Hence P_infinity<=P_nu. Together with (4.3),

    P_t -> P_nu,        F(mu_t) -> R(m_nu)+P_nu = J(nu).   (4.4)

This is the missing dynamical penalty theorem. It establishes convergence to the relaxed energy **without separation**. Separation and escape remain necessary in the consumer proof to conclude that J(nu)=inf J. This proposal does not claim to discharge that separate escape/global-optimality obligation.

## 5. Global semiconvexity and the supposedly nonconstant-penalty subcase

The proof above does not require Vtilde constant and should be integrated without adding a constant-Vtilde hypothesis. Nevertheless the parent asked for an audit of the actual full contract, which has a structural restriction worth recording accurately.

Under the current globally lambda_V-semiconvex hypothesis on V(w,theta)=|w|Vtilde(theta), fix any positive w=s, apply the semiconvex inequality to (s,theta_0),(s,theta_1), and divide by s. Letting s->infinity proves that Vtilde itself is convex on Theta. On Theta=R^k, a bounded convex real function is constant: along each line a nonzero secant slope forces unbounded values in one direction, so every secant slope is zero. On bounded Theta, the source Neumann hypothesis at f=0 is Neumann for Vtilde. A maximum is attained. At an interior maximum its gradient is zero. At a boundary maximum its tangential differential is zero and Neumann makes its normal differential zero, so again its full gradient is zero. The convex supporting inequality at this maximum then bounds every value below by the maximum; all values are equal. This includes the one-dimensional interval case, where Neumann directly says the endpoint derivative is zero.

Thus the full currently inherited global-semiconvex-plus-boundary hypotheses admit only constant Vtilde. This is an implication of the hypotheses, not permission to narrow or rewrite the approved Statement. Source Assumptions 3.4 alone allow nonconstant Vtilde, but the paper says they imply Assumptions 2.1, whose semiconvexity footnote is explicitly global. That asserted implication fails for many nonconstant smooth Vtilde. For example on Theta=[-1,1], Vtilde(theta)=2+cos(pi theta) is smooth positive bounded with Neumann endpoints and dense regular values; phi=0 and R=0 satisfy the other displayed partial hypotheses. Yet the fixed-w slice Hessian in theta equals -w pi^2 at theta=0, precluding any global lower Hessian bound on V. This example diagnoses the source implication, not a counterexample to the current stationarity/penalty theorem. The local proof above works under the weaker local semiconvexity actually needed to formulate such partial flows, but changing that foundational contract would be a separate owner decision with consumer propagation.

## Dependencies, integration and reading scope

The signed-convergence/vector-moment lemma is substantial and should have its own locally proved helper item, before the stationarity item. Its direct logical suppliers are the existing Jordan/Hahn/variation and signed integration interfaces, `thm-uniform-boundedness-principle`, `cor-second-countable-lch-locally-finite-borel-measures-are-regular`, and AC/DC propagation. Euclidean compactness and explicit distance cutoffs perform all topology needed in the proof; no external signed Prokhorov theorem is imported. No audit of all these suppliers' transitive closures is claimed.

The radial-growth/stationarity proof uses that helper, `thm-superposition-for-finite-action-continuity-equations` (or the existing characteristic representation with its actual hypotheses), the existing flow/subdifferential definition, scalar and Bochner chain/integration rules, Cauchy-Schwarz, and the nonnegative lower bound on R,V. For the consumer with initial law in one Q_r, the current global-flow theorem directly supplies energy dissipation. For the current more general stationarity statement, Section 2 above supplies the additional local energy-chain-rule argument, rather than misapplying the bounded-cutoff theorem. An author may split Section 2 into a separate partial-flow moment/energy lemma if needed for proof readability.

The penalty convergence argument should be a proved local supplier, or an explicit proved part of stationarity's successor, before `thm-partial-homogeneous-projected-limit-is-global-minimizer`. It consumes stationarity and the exact radial identity, not the escape theorem, so the dependency order is acyclic. Retain the source citations as provenance only. The parent must independently verify all actual consumers and any metadata/contract edits.

Read in this task: current CLAUDE.md fully; current batch-52 native result JSON and its terminal handoff; current stationarity, partial projected-limit, partial escape items; feature-energy, partial projection, relaxed-objective and gradient-flow definitions; the full characteristic supplier, the Statement and relevant proof interface of the global flow theorem; full local uniform-boundedness, Jordan, and regularity suppliers. The large batch notes were consulted in a combined output that was truncated; no full-notes reading is claimed. Native handoff status counts are historical; parent reports actual native52 drained/all101 terminal, and this supplier does not use the handoff's old status as live authority.

Source reading: Chizat–Bach full-paper extracted text at `research/statistics-ml-scaffold-audit-2026-10-12/learning/source-recovery/chizat-bach-optimal-transport-overparameterization.txt`, Assumptions 3.4 and Theorem 3.5; entire Appendix C.2.2 including C.4/C.5/C.6 and complete Appendix C.4 including C.15–C.18 and their proofs; the semiconvexity footnote and flow velocity discussion. This does not claim a fresh reading of the entire paper, AGS book, or every transitive source proof. The proposed proofs are supplied above locally.

Configuration check: `/home/lazyinspirit/.codex/config.toml` currently sets `model_auto_compact_token_limit = 500000`, scope `total`; the actual native52 dispatch result also records `auto_compact_token_limit: 500000`. No claim is made that an existing session was restarted to adopt a changed setting. No gates, readiness, publishing or pushing were attempted.
