# G4 proof proposal: nonautonomous constrained characteristics

Supplier proposal only; cycle 1. No item edits, mathematical acceptance, gate, publication or consumer review is recorded here. The requesting owner retains integration and all consumer duties.

## Precise contract

Assume AC and `def-feature-measure-energy`. Let D be any nonempty closed convex subset of Ω. For any continuous a:[0,T]→H, put g(t,x)=dΦ_x* a(t), f=V+ι_D, and λ=λ_V. From every x₀∈D there is a unique absolutely continuous solution

    X′(t)+g(t,X(t))+ξ(t)=0,   ξ(t)∈∂_λ f(X(t)) a.e.,   X(0)=x₀.

Here f is extended by +∞ to Rᵈ outside D and its supporting inequality is tested against all z∈D. The solution is Lipschitz on [0,T], and the constants can be chosen uniformly for x₀∈D∩Q_r. The map (t,x₀)↦X(t,x₀) is jointly continuous, and X(t,·) is Lipschitz on D∩Q_r uniformly in t∈[0,T]. The trajectory need not remain in Q_r; it remains in an explicitly controlled larger Q_R. For a(t)=∇R(m(t)), continuity of a follows from continuity of m and the given local Lipschitz differential of R.

At a.e. time its velocity is the negative minimum-norm element of the **whole shifted set** g(t,X(t))+∂_λ f(X(t)). It is generally incorrect to add g to the minimum-norm element of ∂_λ f. The full shifted minimum selection is Borel in (t,x), as proved below. No continuity of that selection is assumed or concluded.

The argument requires only the following consequence of the present potential assumption: for each x∈Q_s there exists η_x∈∂_λ V(x) with |η_x|≤c_s:=C₁+C₂s. It does not need a bound on the entire constrained subdifferential or its normal cone. **Definition issue to be owned separately:** the current definition interprets ∂V relative to Ω and bounds its entire norm. On a proper Ω-boundary this includes an unbounded normal cone. The proof remains valid under the current stronger premise; the intended ambient/bounded-selection interpretation, if changed, belongs to the owner's definition/consumer repair.

## Elementary preliminaries

The Q_s cover Ω: fix q∈Q₁; for x∈Ω, the relative-neighborhood premise puts x in Q_(1+|x−q|) (increase the index slightly if needed). Every bounded subset of Ω lies in one Q_s. For x,y∈Q_s, apply the two supporting inequalities using bounded η_x,η_y. This yields

    |V(y)−V(x)| ≤ c_s|y−x| + (|λ|/2)|y−x|².

In particular V is continuous on Ω, locally in its relative topology. It is actually c_s-Lipschitz on convex Q_s: subdivide [x,y] into n equal segments, use the preceding bound on every segment and sum, then let n→∞. Thus f is proper l.s.c. on Rᵈ, is λ-semiconvex, and has nonempty subdifferential at every x∈D: any η_x above remains supporting when the test set is restricted to D. Supporting inequalities also give λ-monotonicity,

    ⟨ξ−η,x−y⟩ ≥ λ|x−y|²,  ξ∈∂_λ f(x), η∈∂_λ f(y).

For h>0 with 1+hλ>0, the minimization

    J_h(z) = argmin_{y∈D} { V(y)+|y−z|²/(2h) }

has a unique minimizer. Indeed, a fixed supporting inequality at any p∈D bounds this objective below by a positive quadratic plus an affine function; minimizing sequences are therefore bounded. Finite-dimensional compactness, closedness of D and continuity of V give attainment; (λ+1/h)-strong convexity gives uniqueness. Minimization along the segment to an arbitrary competitor gives

    (z−J_h(z))/h ∈ ∂_λ f(J_h(z)).

To see the coefficient λ explicitly, apply the strong-convexity inequality to the minimized objective, divide by the segment parameter and let it decrease to zero, then cancel its quadratic part. Monotonicity yields the continuous resolvent bound

    |J_h(z)−J_h(w)| ≤ |z−w|/(1+hλ).

No infinite-dimensional compactness or imported gradient-flow theorem is used here.

## Euler construction and uniform step bounds

Fix x₀∈D∩Q_r, M=max_[0,T] ||a(t)||, h=T/n with h|λ|≤1/2, and t_k=kh. Define recursively

    x_k=J_h(x_(k−1)−h g(t_k,x_(k−1))),
    v_k=(x_k−x_(k−1))/h,
    ξ_k=−v_k−g(t_k,x_(k−1)) ∈ ∂_λ f(x_k).

Let S_k=Σ_(j≤k)|x_j−x_(j−1)|. The neighborhood premise gives x_k∈Q_(r+S_k) whenever S_k>0; for S_k=0 membership in Q_r suffices. Choose a bounded supporting η_(k−1)∈∂_λ V(x_(k−1)), also in ∂_λ f there. Apply monotonicity to ξ_k and η_(k−1), divide by h, and use Cauchy–Schwarz:

    (1+hλ)|v_k|² ≤ −⟨g(t_k,x_(k−1))+η_(k−1),v_k⟩,
    |v_k| ≤ 2(M+1)(C₁+C₂(r+S_(k−1))).

The zero-velocity case is immediate. Set A=2(M+1)(C₁+C₂r) and B=2(M+1)C₂. Then

    S_k ≤ (1+hB)S_(k−1)+hA,
    S_k ≤ (A/B)((1+hB)^k−1) ≤ (A/B)(e^(BT)−1)=:S_*.

The B=0 interpretation is S_k≤AT. In the current definition C₂>0, but this interpretation also handles its harmless weakening. Put R=r+S_*+1 and K=A+BS_*. All x_k, their affine interpolants X_h, and their left and right constant interpolants lie in D∩Q_R, and |v_k|≤K. These constants are independent of n and x₀∈D∩Q_r. There is no claim that D∩Q_R is bounded; for each fixed x₀ the paths lie in the compact Euclidean ball of radius KT about x₀.

Arzelà–Ascoli therefore gives, along a subsequence h→0, uniform convergence X_h→X on [0,T]. The limit lies in D∩Q_R, starts at x₀ and is K-Lipschitz. Both constant interpolants converge uniformly to X. Because dΦ is Lipschitz on Q_R and a is uniformly continuous,

    g_h(t):=g(t_k,x_(k−1)) → g(t,X(t)) uniformly.

Also V(x_k)→V(X(t)) uniformly by the c_R-Lipschitz bound. These statements use continuity of the smooth term only.

## Passage of the variational inequality

Let x_h^+(t)=x_k on (t_(k−1),t_k]. The supporting inequality for ξ_k says, for every z∈D,

    ⟨X_h′,x_h^+−z⟩ + V(x_h^+) + ⟨g_h,x_h^+−z⟩
       + (λ/2)|x_h^+−z|² ≤ V(z)   a.e.

Replace x_h^+ by X_h only in the derivative pairing. The resulting error is bounded by K²h at each time, since |x_h^+−X_h|≤Kh. Integrate on any interval [b,c]⊂[0,T]; the derivative pairing integrates exactly to (|X_h(c)−z|²−|X_h(b)−z|²)/2. Uniform convergence of all other terms gives

    (|X(c)−z|²−|X(b)−z|²)/2
      + ∫_b^c [V(X)+⟨g(t,X),X−z⟩+(λ/2)|X−z|²] dt
      ≤ (c−b)V(z).                                      (VI)

This passage needs no weak convergence of nonsmooth fields and no weak compactness in a function space. The limit VI holds for all intervals and every z∈D. Choose a countable dense subset of D. Since X is Lipschitz, coordinatewise scalar absolute-continuity/FTC gives X′ a.e.; differentiating (VI) outside a common null set for the countable tests gives

    V(z) ≥ V(X(t))+⟨−X′(t)−g(t,X(t)),z−X(t)⟩
                    +(λ/2)|z−X(t)|².

Extend from the dense tests to all z∈D by the relative continuity of V. Thus ξ(t)=−X′(t)−g(t,X(t)) belongs to ∂_λ f(X(t)) a.e., proving existence. Countable dense tests are allowed because D⊂Rᵈ is separable; no uncountable intersection of full-measure sets is taken.

## Uniqueness, forcing stability and joint continuity

For two solutions X,Y to the same forcing, their bounded images lie in some common Q_s. With B_s=Lip(dΦ|Q_s),

    (|X−Y|²/2)′ ≤ (M B_s−λ)|X−Y|² a.e.

Multiply by exp(−2(MB_s−λ)t), use the scalar AC product rule and integrate. Equal initial points imply equality on [0,T]. Hence every converging subsequence of the Euler family has the same limit; compactness then implies uniform convergence of the entire family. Any AC solution is covered by uniqueness, even if not initially supplied with a uniform speed bound: its continuous image is bounded, so lies in some Q_s, and its inclusion suffices for the distance calculation.

For all x₀,y₀∈D∩Q_r, the uniform construction above confines both trajectories to Q_R and gives

    |X(t,x₀)−X(t,y₀)| ≤ exp((MB_R−λ)t)|x₀−y₀|.

Together with the uniform time-Lipschitz bound K this proves joint continuity on [0,T]×(D∩Q_r). The neighborhood premise puts every nearby initial point in some common larger Q_s, so this proves joint continuity on all [0,T]×D. All finite T are allowed; uniqueness patches the constructions on overlapping intervals, giving a global forward map for continuous a:[0,∞)→H.

For completeness, if a,b are different continuous forcings and X,Y stay in Q_s, then

    (|X−Y|²/2)′ ≤ (M_a B_s−λ)|X−Y|²
                               + A_s||a(t)−b(t)|| |X−Y|,

where A_s=sup_Qs||dΦ|| and M_a=max||a||. Applying the inequality to sqrt(|X−Y|²+ε²), with the vanishing extra term bounded by |M_aB_s−λ|ε, and then sending ε↓0 yields

    |X(t)−Y(t)| ≤ e^(ct)|X(0)−Y(0)|
                       + A_s∫_0^t e^(c(t−u))||a(u)−b(u)||du,
    c=M_aB_s−λ.

This supplies the requested forcing stability rather than presuming stability of a discontinuous minimum-selection field.

## The velocity is the whole shifted minimum selection

V∘X is Lipschitz, since X stays in Q_R. At a time where X and V∘X are both differentiable and the inclusion holds, let η be **any** element of ∂_λ f(X(t)). Test its supporting inequality at X(t+h). Divide by h>0 and by h<0 respectively and let h→0; the quadratic error divided by h tends to zero. Therefore

    (V∘X)′(t)=⟨η,X′(t)⟩.

This holds simultaneously for every η at this fixed good time, because differentiability of the two functions is the only null-set condition. It also holds for ξ(t)=−X′−g. Consequently ⟨η−ξ,X′⟩=0. Set q=ξ+g=−X′. For every η∈∂_λ f(X(t)),

    |g+η|²=|q|²+|η−ξ|² ≥ |q|².

Thus −X′ is exactly the unique minimum-norm element of the closed convex shifted subdifferential. This proof does not differentiate a(t) and does not assert continuity of the minimum selection.

If the parent G3 minimum-section proof is not used, the following also supplies Borel measurability directly. For ε↓0 with 1+ελ>0 define

    z_ε(t,x)=J_ε(x−εg(t,x)),
    q_ε(t,x)=(x−z_ε(t,x))/ε.

Each q_ε is continuous on [0,T]×D by resolvent continuity and continuity of g. Monotonicity against any η∈∂_λ f(x) gives

    (1+ελ)|q_ε|² ≤ ⟨g(t,x)+η,q_ε⟩.

Thus q_ε is bounded and z_ε→x. The supporting inequalities pass to limits using local relative continuity of V, so any cluster point q belongs to g(t,x)+∂_λ f(x). The last displayed inequality gives ⟨g+η−q,q⟩≥0 for every η in the subdifferential, exactly the projection characterization of the unique minimum-norm point. Hence all q_ε tend to that point. Taking ε along a fixed countable sequence proves the selection Borel. Importantly, this resolvent uses f alone and freezes the added smooth gradient at x.

## PDE representation and law stability

Given a narrowly continuous P₂-valued finite-action PDE solution with this Borel velocity and continuous fixed forcing a, use `thm-superposition-for-finite-action-continuity-equations`. Each superposed path satisfies the inclusion a.e. and lies in D for all times: concentration in closed D at rational times plus path continuity proves the latter. The uniqueness just proved identifies each path as X(·,x₀). Consequently μ_t=X(t,·)#μ₀. This identification needs neither a backward inverse nor continuity of the velocity. If μ₀ is concentrated on Q_r, the deterministic uniform radius bound confines the full solution to the same Q_R, even when such confinement was not initially known for the competitor.

For self-consistent laws confined to a common Q_r, set a_μ(t)=∇R(m_μt), and use the **full shifted** selections q_μ=a_μ-dependent g+ξ_μ and q_ν=g_ν+ξ_ν. The existing path-coupling argument works with ξ_μ,ξ_ν chosen by the two inclusions; they need not be the same potential-only section. Monotonicity gives the λ_V contribution, and

    |g_μ(x)−g_ν(y)| ≤ N_rB_r|x−y|+A_rL_r||m_μ−m_ν||,
    ||m_μ−m_ν|| ≤ A_r E|X−Y|.

Thus D(t)=E|X−Y|² obeys D′≤2(L_rA_r²+N_rB_r−λ_V)D. The given finite actions and finite second moments justify the AC expectation calculation by Cauchy–Schwarz. Optimal initial coupling and the time-t coupling then give exactly the current W₂ estimate. For initial laws not yet confined along the entire interval, apply the preceding fixed-forcing representation separately to each continuous moment path, obtain common Q_R from the two bounded forcings, and use the estimate there. Continuity of moments for arbitrary W₂-continuous laws is a separate interface; the owner indicated they are proving it from the global linear bound on dΦ and quadratic moment control.

## Exact local dependencies and source-reading scope

For the characteristic construction the only substantial new outside items needed beyond the current energy definition and AC are:

* `cor-arzela-ascoli-subsequence-theorem-for-proper-metric-targets` (read fully; domain [0,T], target Rᵈ, fixed-start ball gives pointwise boundedness; requires AC).
* `thm-heine-borel-rn` or equivalent finite-dimensional compactness for the one-step minimizer and properness of Rᵈ. Its precise carrier has **not** been reviewed in this proposal, so the integrating owner must bind the usable interface rather than treating this note as its audit.
* `thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions` and `thm-lipschitz-characterisation-within-absolutely-continuous-functions` (both read fully). Apply coordinatewise to X and scalarwise to V∘X and squared distances; AC supplies their Countable/Dependent Choice assumptions. The Lipschitz⇒AC inclusion also uses `thm-c1-lipschitz-ac-bv-hierarchy` reached by that supplier.
* The existing chain-rule/product-rule interfaces for squared Euclidean norms and scalar integrating factors. No weak-L² compactness supplier is necessary: the integrated VI uses exact endpoint differences.

The resolvent, closed-subgradient passage, uniform Euler bounds, VI convergence, minimum selection, and forcing stability are proved explicitly above and need no imported ODE or semigroup theorem. Existing superposition, disintegration, kernels, optimal-coupling and W₂ metric suppliers remain needed for the final PDE/law portion exactly as in the current item. Their proofs were **not** re-audited here. `lem-localized-lift-subdifferential` is not needed for the standalone finite-dimensional construction; it is needed only to connect a lifted flow to this PDE interface if used by the owner. `def-wasserstein-gradient-flow-for-feature-energy` is interpretive context, not an existence supplier for this proof.

Choice use: the construction's prox point is unique, so its recursion is deterministic. AC supplies the compactness subsequence/countable dense tests and scalar FTC suppliers (and, separately, the existing superposition/disintegration/coupling uses). Arbitrary selections η_(k−1) are used only in inequalities and can instead be existentially eliminated one step at a time; there is no required measurable selection of those auxiliary η's.

Actually read in this task: full current `lem-characteristics-unique-and-stable`, full `def-feature-measure-energy`, full normative `machine-learning-all-101-2026-10-19-wgf-prerequisite-module.md`, and the full local suppliers explicitly marked above. In Chizat–Bach's locally extracted full paper, read Assumptions 2.1 and complete Appendix B.2.1 (Lemmas B.2/B.3/B.4 and Proposition 2.5 proof), plus the opening B.3 passages visible in that range. This does **not** claim a full B.3, Appendix A/C, or whole-paper reading. The source explicitly defines the ∂V bound as maximal norm; the boundary interpretation issue is therefore real, not silently replaced by a claim about what the paper says.

In the authoritative AGS full-book extracted text at `/tmp/wgf-ags.txt`, read complete proofs of Lemma 4.1.1, Theorem 4.1.2, Theorem 4.2.2, Proposition 4.3.1 and Theorem 4.3.2; inspected the whole Lemma 8.1.4 statement and adjacent characteristic-method discussion. AGS 8.1.4 assumes a position-Lipschitz Borel velocity, stronger than the nonsmooth field here, and does not supply this G4 construction. The Chapter 4 proofs guide the discretization/VI argument; none is imported as a premise. Did not read every transitive AGS supplier, its whole book, or its entire superposition proof in this task. No claim of those audits is made.

Codex settings verification: `/home/lazyinspirit/.codex/config.toml` has `model_auto_compact_token_limit = 500000` and scope `total`. This verifies the file setting; it does not establish that an already running session restarted to adopt it.
