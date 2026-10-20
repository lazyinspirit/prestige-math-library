# Partial escape and C.18 — proof-only proposal, cycle 1

This is a supplier proposal for independent owner review. No actual item, manifest, proof contract, decision or other source metadata was changed. No gate or readiness assertion is supplied.

## 1. The full native hypotheses force a constant penalty

Write v=Vtilde. The full current item assumes one **global** semiconvexity constant λ for V(w,θ)=|w|v(θ) on R×Θ, as well as the complete source boundary alternatives. For fixed θ₀,θ₁ and a>0, semiconvexity on the slice w=a gives

    v((1−t)θ₀+tθ₁) ≤ (1−t)v(θ₀)+tv(θ₁)
                        − λt(1−t)|θ₀−θ₁|²/(2a).

Let a→∞. Thus v is convex. In the unbounded branch it is bounded above on all R^(d−1), hence constant: a nonconstant restriction to a full line is a convex function with a nonzero secant slope and is unbounded above in one direction.

In the bounded branch, the source Neumann premise is explicitly for **every f∈H**, not only risk gradients realized along a particular trajectory. Apply it at f=0 to obtain ∂_n v=0. A maximum of v exists on compact Θ. If attained in its interior, its gradient is zero. If attained at a boundary point, differentiability and the C¹ boundary make every tangential derivative zero, and Neumann makes the normal derivative zero as well. Thus its gradient is again zero. The convex supporting inequality then says v(θ)≥v(θ_max) for all θ, so v is constant. Denote this constant by c≥0.

This is a consequence of the retained hypotheses, **not an added constant-penalty assumption**. It resolves the current ∇G_− versus ∇G_+ escalation: G_−=2c−G_+ and ∇G_−=−∇G_+.

There is nevertheless a source defect worth recording distinctly. Assumptions 3.4 as printed do not explicitly assume global semiconvexity of V; the sentence saying they imply Assumptions 2.1 is false for general v. For example Θ=[0,π], φ=0, R=0, v(θ)=2+cos θ satisfies bounded C^{1,1} regularity, nonnegativity, Neumann, and the stated Sard condition, but V(w,θ)=|w|(2+cos θ) has θ-Hessian −w cos θ for w>0. At θ=π/4 this is unbounded below as w→∞, so no global λ exists. This example refutes that source implication; it does **not** refute the current item, which explicitly retains the full feature-energy assumptions. The earlier relative-Ω versus ambient-subgradient interpretation issue remains owned by the flow/definition repair, not altered here.

## 2. Uniform forcing control from signed BL distance

Set p₀=∇R(m_ν), b_p(θ)=⟨p,φ(θ)⟩, H_{s,p}=s b_p+c for s∈{+1,−1}. Let C_φ=sup_{||z||≤1}(||⟨z,φ⟩||∞+Lip⟨z,φ⟩), which is finite. In the bounded branch this follows from compact C¹ regularity. In the unbounded branch bounded φ and Lipschitz dφ imply bounded dφ by the one-dimensional Taylor estimate along arbitrary unit directions, applied to scalar evaluations. Then

    ||m_μ−m_ν|| ≤ C_φ ||h¹(μ)−ν||BL.

Inside a fixed BL ball, the moments belong to a bounded Hilbert ball. The prescribed Lipschitz differential of R therefore gives

    ||p_t−p₀|| ≤ C ||h¹(μ_t)−ν||BL,
    ||H_{s,p_t}−H_{s,p₀}||C¹ ≤ C′||h¹(μ_t)−ν||BL.

These statements work on unbounded Θ too; compactness of Θ is unnecessary for bounded Lipschitz tests. No control of the raw positive/negative projection masses is used.

## 3. Both signs reduce to one positive-weight system

For a branch s, put z=s w. On z>0 the characteristic equations, using c constant, become

    z′=−H_{s,p_t}(θ),       θ′=−z∇H_{s,p_t}(θ).

Thus either sign has exactly the same favorable-branch dynamics. At a bounded-domain boundary the Neumann condition makes this angular field tangential, so the Ω constraint adds no angular projection. Choose any one sign s with μ_{t₀}({s w>0, θ∈K_s})>0; the union in the current statement has positive mass only if at least one such sign exists.

The following trapping argument proves that, provided p_t stays sufficiently close to p₀, every such trajectory retains z>0 and H_{s,p₀}(θ) bounded strictly below zero. Consequently z′ is bounded below by a positive constant for all later times. Section 6 turns this into escape without any signed cancellation estimate.

## 4. Bounded Neumann branch: the trap

Write H=H_{s,p₀} and a₀=−η_s<0, so K_s={H≤a₀}. Choose a negative regular value a∈(a₀,0); if the whole domain is already below such a value the trap is immediate. Compactness and regularity give a neighborhood of {H=a} on which |∇H| has a positive lower bound. For p sufficiently close to p₀,

    ⟨∇H,∇H_{s,p}⟩ > 0 on {H=a},   H_{s,p}≤a/2<0 on {H≤a}.

While z>0, H(θ(t))′=−z⟨∇H,∇H_{s,p_t}⟩. The uniform strict boundary inequality prevents outward crossing of {H≤a}: in a thin compact collar of its level boundary, H′<0. The same proof holds at its intersection with ∂Θ because Neumann preserves Θ and makes the gradient tangent there. Hence a start in K_s stays in {H≤a}, and z′≥−a/2>0. Taking a slightly smaller forcing neighborhood if necessary makes the displayed inequalities uniform in time.

## 5. Unbounded branch: a compactified robust trap

The source's asserted positive lower bound for the **Euclidean** gradient on a noncompact regular level is false in general: angular derivatives at infinity scale like 1/r. The following elementary compactness argument supplies the needed replacement.

Let q=d−1, r=|θ| and ω=θ/r. Use a smooth radial compactification agreeing, for r≥2, with the coordinates u=1−1/r and ω∈S^(q−1). Patch it smoothly in r<2; the compactified space M is a closed ball. Choose a positive smooth time factor k(θ) equal to r² for r≥2. For the normalized angular equation dθ/dτ=−k(θ)∇H_{s,p}(θ), its field in the outer coordinates is

    du/dτ=−∂_r H_{s,p}(rω),
    dω/dτ=−∇_S H_{s,p}(rω).                         (*)

For each fixed p, the second component tends uniformly to −∇_S H_{s,p}^∞ by the full source C¹-sphere hypothesis. The first tends uniformly to zero. Indeed H_{s,p}(rω) converges uniformly, and its radial derivative is uniformly Lipschitz in r because the Euclidean gradient is Lipschitz. If |∂_r H|≥δ at a sufficiently large radius, the Lipschitz derivative estimate forces a change of size at least δ²/(4L) over a fixed radial interval on that ray, contradicting uniform convergence. Thus (*) extends continuously to M, with boundary field (0,−∇_S H^∞). Call the extended field F_p.

The normalized fields are uniformly close when ||p−p₀|| is small. The radial component follows from bounded dφ. For the angular component apply the uniform boundedness principle to

    T_r:H→C¹(S^(q−1)),   T_r p(ω)=⟨p,φ(rω)⟩, r≥2.

Each T_r is bounded linear; convergence for every p gives pointwise boundedness at infinity, and bounded radial intervals give the remaining pointwise bounds. Hence sup_r||T_r||<∞, yielding ||F_p−F_{p₀}||∞≤C||p−p₀|| on M, including its boundary. AC supplies DC for this use. No operator-norm convergence of T_r is asserted.

The function H extends continuously to M with boundary value H^∞. Choose a negative a∈(a₀,0) regular both for H on R^q and for H^∞ on the sphere. Such a choice exists: regular values of H^∞ form an open set because the sphere is compact, their density supplies a nonempty interval, and the source density for H supplies a regular value within that interval. Empty level sets are regular. If a band around a is absent from the range, the trap is immediate. Otherwise, for some δ>0 and κ>0, with a+2δ<0, the base field F₀=F_{p₀} has

    dH/dτ=−k|∇H|²≤−κ

wherever a−2δ≤H≤a+2δ in the interior, and dH^∞/dτ=−|∇_S H^∞|²≤−κ on that boundary band. To justify the uniform κ: in a large-radius portion the C¹-sphere limit gives a uniform lower bound on |∇_S H(r·)| at these levels; k=r² cancels the Euclidean angular 1/r² factor. The remaining region is compact and the chosen value is regular. Shrink δ to preserve both lower bounds.

Here is a full robust-trapping argument despite H need not be differentiable in the radial compactified coordinate. For a base solution staying in this band put U(τ)=H(γ(τ)) and E={τ:γ(τ)∈∂M}, a closed set. On each complementary interval U is locally AC and U′≤−κ; continuity at its endpoints makes U monotone on that whole gap. Choose a C¹ extension of H^∞ from the boundary to M (use a radial cutoff in its collar) and let V be its composition with γ. Then V is AC, U=V on E, and V′≤−κ a.e. on E by the boundary field equation. For a gap with both endpoints in E, its total variation of U equals the absolute difference of the endpoint values of V, hence is bounded by the variation of V on that gap. The sum of those variations is therefore finite. The same observation, or the endpoint difference plus the variation of V, handles at most two truncated end gaps. Finite-gap approximation now gives U∈AC: on the closed set its increments are those of V, and the total variations on omitted gaps tend to zero, with their endpoint variations bounded by the corresponding absolutely continuous V increments. Equivalently the finite-gap replacements of V converge with tails small in variation; on each retained gap U is monotone with its whole variation equal to the endpoint V increment. Finally U′=V′ a.e. on E (an AC function vanishing on E has derivative zero a.e. there), so U′≤−κ everywhere a.e. Thus H(γ(v))−H(γ(u))≤−κ(v−u) for every base solution staying in the band. This argument does not require uniqueness of the continuous extended ODE at the compactification boundary.

Fix τ_*>0 small enough that any curve with speed at most 1+||F₀||∞ cannot change H by δ in a time less than τ_*; uniform continuity of H on compact M gives this. For all sufficiently small e>0, any AC curve satisfying |γ′−F₀(γ)|≤e a.e. and staying in the band for a duration τ_* obeys

    H(γ(τ_*))−H(γ(0)) ≤ −κτ_*/2.                   (**)

Otherwise choose e_n↓0 and counterexample curves. They have uniformly bounded speeds, so Arzelà–Ascoli supplies a uniformly convergent subsequence. The integral equation and continuity of F₀ identify its limit as a base solution in the band, contradicting the preceding strict decrease. This proves (**), uniformly over initial points, without assuming continuity in time of the perturbed field.

An approximate curve beginning with H≤a cannot reach H=a+δ. If it first does so at τ₁, let τ₀ be its last time at H=a. It stays in [a,a+δ] between these times, and uniform continuity gives τ₁−τ₀≥τ_*. Apply (**) to the last τ_* segment: its endpoint H value is strictly smaller than the earlier value, whereas the endpoint is its first hit of the upper level. Contradiction. Therefore H<a+δ<0 forever along every such approximate curve.

To apply this to the physical favorable characteristic, while z>0 set dτ/dt=z/k(θ)>0. Its compactified angular path satisfies γ′=F_{p_t}(γ), so small ||p_t−p₀|| supplies the required approximate-curve error. If τ has a finite supremum while physical time tends to infinity, apply the trap on every finite normalized interval; the pointwise physical-time conclusion is unchanged. By continuation z cannot reach zero because H_{s,p_t}≤(a+δ)/2<0 before any proposed first zero. Thus z remains positive and z′≥−(a+δ)/2 for all physical times. This proves the unbounded-branch trap, including negative sublevels reaching infinity.

## 6. Energy action proves BL escape, with no cancellation

Suppose, contrary to the current escape conclusion, that ||h¹(μ_t)−ν||BL<ε for every t≥t₀. Choose ε so that Section 2 supplies the forcing neighborhood required by the bounded or unbounded trap for both relevant signs. Choose one branch s with favorable initial mass P>0. Every characteristic of this initial set then has |w′|=z′≥b>0 forever, with b depending only on the selected negative levels and the forcing neighborhood. Characteristic representation and the energy identity give, for T>t₀,

    F(μ_t₀) ≥ ∫_(t₀)^T ∫|v_t|² dμ_t dt ≥ P b²(T−t₀).

The left side is finite and independent of T, whereas F≥0. This is impossible. Thus the BL distance reaches or exceeds ε at some finite time. Continuity of the moment/forcing suffices for the preceding argument; a uniform escape time over arbitrarily small favorable masses is not claimed.

This proof does not require h¹(μ_t)(K_s) to be positive, does not identify Jordan parts with raw weight measures, and does not require a uniform bound on initial |w|. If the owner uses the current global theorem's energy identity, its stated common-cutoff initial-law hypothesis must be checked. For the richer current escape statement allowing arbitrary native P₂ flows, the following direct partial-model energy argument supplies the same identity without silently adding a support bound.

On any finite interval, a P₂-valued AC² flow has uniformly bounded second moments and finite action. Superposition gives pathwise AC w,θ. Bounded φ,dφ imply

    |(wφ(θ))′| ≤ ||φ||∞|w′|+||dφ||∞|w||θ′|,

which is integrable in time and path law by Cauchy–Schwarz. Hence m_t is AC with derivative equal to the integrated path derivative. Likewise c|w| is AC with derivative c sign(w)w′ off {w=0}. An AC scalar function has derivative zero a.e. on its zero set, so the same formula with sign(0)=0 is valid a.e. along paths. The ordinary Hilbert chain rule for C^{1,1} R on the bounded moment range gives

    F′(t)=∫[(b_{p_t}+c sign w)w′ + w∇b_{p_t}·θ′]dμ_t
          =−∫(|w′|²+|θ′|²)dμ_t a.e.

The final equality uses the characteristic equations off w=0; at w=0 the angular velocity is zero and w′=0 at a.e. zero-set time. Neumann ensures no angular normal contribution in the bounded branch. Integrability of all products was established above. Integrating proves exactly the needed finite-action energy identity for any flow in the definition, so the current escape statement need not be narrowed to bounded w support.

## 7. C.18: corrected crossing, and its literal false conclusion

Suppose H=G_+=b_{p₀}+c, H(θ₀)≤−η, ∇H(θ₀)=0, and ||H_t−H||C¹≤ε. While w<0 the actual equations are

    w′=G_{−,t}=2c−H_t,
    θ′=|w|∇H_t.

If q=|θ−θ₀| and H,∇H have a common Lipschitz bound L, then

    w′≥η−ε−Lq,       q′≤|w|(ε+Lq).

Choose r<min(r₀,η/(4L)) (omit the second restriction when L=0), ε<η/4 and

    ε(e^(LM²/η)−1)/L < r        (L>0),
    ε M²/η < r                 (L=0).

Until the proposed first exit q=r one has w′≥η/2. The scalar crossing supplier then gives a first zero τ≤2M/η and q(τ)<r. Its same bound up to every earlier time excludes a first exit before τ. This is the required bootstrap, not an assumption that the crossing inequalities already hold globally. At the zero, H_t<0 implies the full minimum selection points strictly into w>0, so immediately afterward the characteristic has positive weight in the negative cone. Reflection w↦−w handles the opposite favorable sign. Starting at w=0 gives τ=0, followed by the same strictly favorable motion.

For an approximate critical point with |∇H(θ₀)|≤δ₀, replace ε in the angular inequality by ε+δ₀; the w′ estimate is unchanged. In the unbounded branch |∇H(rω)|→0 uniformly: the radial part tends to zero as above and the angular part is O(1/r) by its C¹-sphere limit. Thus finite points far out on a negative asymptotic direction supply approximate-critical crossing points. This proves the local crossing interface without pretending that a negative global minimum is attained in R^q. Choosing the forcing neighborhood relative to M in a projected-limit consumer has a separate quantifier-order duty; the current proposal does not certify that consumer.

The source's literal conclusion “there exists one T>0 such that w(T)=0 for every w₀∈[−M,0]” is false even under the complete native hypotheses. Take Θ=[0,π], H=R, φ(θ)=cos θ, c=0, and R(m)=(m−1)²/2. Let ν=0 and μ_t=δ_(0,π/2), a stationary flow: both velocity components vanish at its atom. The forcing is identically p_t=−1, so g_{μ_t}=g_ν=−cos θ exactly, satisfying the source closeness premise for every ε and every horizon. At θ₀=0, g_ν=−1 and its gradient vanishes. Characteristics from (w₀,0) satisfy θ(t)=0 and w(t)=w₀+t. No common positive T sends every w₀∈[−M,0] to zero; in particular w₀=0 is strictly positive for all T>0. All bounded-feature, Neumann, Sard, semiconvexity and growth hypotheses hold (with the bounded ambient/selection interpretation of potential derivatives in the flow repair). For M>2 the trajectory w₀=−M also refutes the printed proof's bound 2/η when η=1. The sound replacement is individual first hitting at τ≤2M/η, not a common zero time.

## 8. Backward retention clears unfavorable weights without ε(M)

The robust trap in Section 5 is uniform over **every time-dependent forcing** in one fixed small p-neighborhood; its proof did not use the order in which those forcings occur. This supplies the no-entry interface the owner needs, although the constructed trap has an inner and an outer level rather than one smooth invariant boundary.

For definiteness take the positive branch H=G_+. Write K_in={H≤a}, K_out={H<a+δ}, with a+δ<0 as in Section 5, and choose forcing closeness so H_t≤−b<0 on K_out. On w<0 the angular equation is θ′=|w|∇H_t and w′=2c−H_t≥b. Suppose an endpoint (w(t),θ(t)) has w(t)<0 and θ(t)∈K_in. Reverse this characteristic on its preceding maximal negative-weight interval. Its reversed angular curve, normalized by dτ/ds=|w|/k(θ)>0, satisfies exactly the favorable field F_{p_(t−s)}, with the reversed but still admissibly close forcing. Section 5's universal trap therefore keeps its entire earlier angular history in K_out. The reversed weight decreases at rate at least b, so this backward interval cannot end by reaching w=0. By continuity and the trap it cannot end by leaving K_out either. Consequently it extends back to the chosen initial time t₀.

If |w(t₀)|≤M for every support characteristic, integration now gives

    w(t) ≥ −M+b(t−t₀).

It follows that for t>t₀+M/b there are **no negative-weight support points** over K_in. Indeed support equals the closed characteristic image in the common bounded-w slab by the box-separation interface; alternatively apply the argument to every initial support point and use closedness. A limiting endpoint at a strictly negative w is still excluded by the same uniform inequality. This is the needed eventual clearance even if negative trajectories can wander in the collar K_out\K_in for long times.

The forcing radius depends only on H and the fixed levels, not on M. Thus one first chooses the radius, next waits for the projected path to stay in it, then obtains M at that late t₀, and finally waits the finite M/b time. This avoids the circular order “choose ε using M, wait for ε-closeness, then discover a larger M.” Bounded-domain clearance is the same argument with its exact sublevel trap. At any later vertical line over an interior point of K_in, box separation provides a support point. Its weight is nonnegative after clearance; if zero, the full selected scalar velocity is −H_t≥b and its angular velocity is zero at that instant, so it immediately enters the favorable positive cone. To apply the escape lemma at its original deeper level K_s, choose the vertical point strictly inside K_s; continuity keeps the short post-zero motion there. Reflection handles the negative favorable branch. This is a proved dynamical interface, not a claim that all projected-limit consumer obligations have been checked.

## 9. Dependencies and honest review scope

The necessary substantial local suppliers are: full native feature-energy definition; characteristic existence/representation; superposition for the optional unrestricted-P₂ energy argument; Bochner differentiation/integration and scalar AC chain rules; uniform boundedness principle (DC, supplied by AC); finite-dimensional/compact-target Arzelà–Ascoli; and the corrected scalar crossing lemma. The constant-penalty consequence, compactified robust trap and direct partial-model energy identity are proved above and should be separate intermediate items if too substantial for the integrating lemma. They must not be hidden as unproved Facts. No degree/separation theorem is used to prove the escape lemma itself; those enter only in its consumers.

Actually read this task: CLAUDE.md; current batch-52 notes/handoff passages covering its assumptions, escalation ledger and affected claims; full current escape and scalar-crossing items; full partial-projection and relaxed-objective definitions; full global-flow item; full uniform-boundedness item; current box-separation proof; and the feature-energy/flow definitions already read in the preceding distinct G4 assignment. Read the local full-paper extraction of Chizat–Bach Assumptions 3.4, complete Appendix C.2.2 (C.4–C.6), and complete Appendix C.4 (C.15–C.18, both main proof branches). Did not freshly read every other batch-52 item, all Appendix C.3, all Appendix A, or the whole AGS book in this task. The source itself is provenance; no omitted source proof is a logical supplier here. The integrating owner independently reviews all consumers.

Compaction setting rechecked: `model_auto_compact_token_limit = 500000`, scope `total`. The file setting alone does not prove an already running process adopted it.
