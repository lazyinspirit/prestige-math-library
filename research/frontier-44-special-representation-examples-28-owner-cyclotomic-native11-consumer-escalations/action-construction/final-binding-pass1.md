# First-pass final binding and independent algebraic recheck

Run `frontier-44-special-representation-examples-28`; author `/root/repair_klr_global_basis/cyclotomic_action_construction`. This is new evidence, not a rewrite of prior drafts and not independent reviewer acceptance. Parent integrates canonical suppliers and performs all consumer review. The proof bodies remain `proof-route.md` and `commutator.md`.

## Rechecked tail indices

The homogeneous field hypothesis is essential for the particularly simple nilpotent-dot argument: Q_{jl}(x,y)=c y^{-a_{lj}}+xH, with c nonzero, because any homogeneous term having zero x exponent has exactly that y exponent and coefficients have degree zero. We allow every homogeneous Q1–Q4 parameter. No algebraic closure is used.

For a prefix of length ℓ, take x_{ℓ+1}^N=0 from R^Λ(ℓ+1), and apply the equal-color divided differences ∂_{ℓ+N}…∂_{ℓ+1} to x_{ℓ+1}^N. This requires exactly N+1 all-i tail entries, at positions ℓ+1,…,ℓ+N+1. The resulting constant is (−1)^N, including in characteristic two where it is 1. The prefix's final color is immaterial. This avoids interpreting KK's application at ∂_n as an unstated equality of the n-th and (n+1)-st colors.

The global counting induction is on b=the permitted number of non-i entries, not on the number of i entries. Given k=L_{b−1}, set ℓ=b−1+k, choose m=T_ℓ and L_b=k+m−1. A word of length b+L_b=ℓ+m with at least L_b copies of i either has at least k in the first ℓ entries (the zero inductive prefix), or has at most k−1 there and therefore all m remaining entries are i. For a longer word having at most b non-i entries, its first b+L_b positions have at least L_b copies of i; the resulting zero prefix still kills the longer word. Thus for fixed β, if β_i+k≥L_b then R^Λ(β+kα_i)=0, with b=Σ_{j≠i}β_j. The induction does not exchange different-color letters and does not need such crossings invertible.

## Rechecked scalar exponents and projectivity

Write δ=(α_i|α_i), p=β_i and B=⟨h_i,β⟩. The actual P multiplies by a(x_1)τ_1…τ_n and has degree

$$s=\delta\lambda_i-(\alpha_i|\beta)=(\alpha_i|2\Lambda-\beta).$$

Each unequal-color g exchange has its crossing degree. Each equal-color g exchange has degree δ, rather than the crossing degree −δ. Therefore Q=g_n…g_1 has degree

$$-(\alpha_i|\beta)+2\delta p.$$

Their composite has degree δ(λ_i−B+2p), and its polynomial in the auxiliary t has **t-degree** λ_i−B+2p. These are different quantities and both are nonnegative: λ_i−B+2p=λ_i+Σ_{j≠i}(−a_{ij})β_j. Its leading coefficient is

$$c=\prod_{j\ne i}t_{i,j;-a_{ij},0}^{\beta_j}\in k^\times.$$

It is constant across all ν∈I^β. The commutator scalar is γ=((−1)^p c)^{-1}. The central polynomials S,W in `commutator.md` have t-degrees 2p and h+2p, with h=λ_i−B. Their division quotient γφ_k has degree h+k when nonnegative and is zero otherwise. This precisely agrees with KK(5.9)–(5.17).

The projectivity lemma uses a **central monic annihilator** of D, for which t^N suffices. The P/Q composite itself need only have invertible leading coefficient to prove injectivity; it need not be the annihilator. A right A[t]-projective resolution 0→P_1→^jP_0→M→0 and fM=0 gives f_{P_0}=jh and hj=f_{P_1}. Since P_1/fP_1 is A-projective, choose the A-linear left inverse p of f_{P_1}; then phj=id. This is the precise splitting, with no colon-module or associated-graded inference. It works for arbitrary rings A, and finite generation follows here separately from finite-dimensional D. Taking homogeneous degree-zero components gives graded projectivity. Tensoring the comparison sequence over A is exact because D is A-projective; its target is Mod(R(β+α_i)), rather than Mod(R(β)). These checks agree with KK Lem4.18 and the actual map degrees in Thm4.7.

## Exact Rouquier rho compatibility

Read Rouquier §§4.1.3–4.1.4, §§4.2.2–4.2.3 and the relevant source Lem4.12/Prop5.15 proof, using the trace helper's retrieved full source. This additional reading does not assert that the full Rouquier source was read.

Use Rouquier's integer weight m=−h. Realize his raising E by G=Fbasic and his lowering F by

$$H|_{\beta\to\beta-\alpha_i}=q_i^{-1-h}E_{\mathrm{basic}}.$$

This is exactly Eproj with its normalization at the target weight: h_target=h+2, so 1−h_target=−1−h. Equivalently H at Rouquier weight m is q^{d_i(m−1)}Ebasic.

The existing unit Id→H G therefore has degree d_i(m+1), because H is evaluated at m+2. The existing counit G H→Id has degree d_i(1−m), because H is evaluated at m. These are the degrees Rouquier assigns to η and ε. Right multiplication by the same-color τ on G² matches his nil-Hecke convention: with chronological right appending, his x on the leftmost G is x_2, and right-multiplication natural transformations compose in the reverse order of the algebra multiplication. Thus τ∘(xG)−(Gx)∘τ is right multiplication by x_2τ−τx_1=1. No −τ renormalization is needed.

The mate

$$\sigma=(H G\varepsilon)\circ(H\tau H)\circ(\eta G H):G H\longrightarrow H G$$

is precisely the physical crossing T:a⊗b↦aτ_n b. On pure tensor generators, η inserts the relevant idempotent as a tensor factor, τ right-multiplies the adjacent two appended strands, and ε multiplies away the inserted tensor factor; the resulting product is aτ_n b. Its basic degree is −δ. With G H shifted d_i(m−1) and H G shifted d_i(m+1), it becomes degree zero. Its dot counit components ε∘x^j H are the actual components ε_j in `commutator.md`; its dot unit components Hx^j∘η are the actual t^jη components there.

Multiply the physical canonical split by q^{d_i(m+1)}. For m≥0 (physical h≤0), its domain q^{-δ}FE becomes G H and its codomain EF becomes H G. The identity summands become

$$q^{d_i(m+1)-\delta(j+1)}\operatorname{Id}=q^{d_i(m-2j-1)}\operatorname{Id},\quad0\le j<m.$$

For m≤0 (physical h≥0), its domain q^{-δ}FE becomes G H and its codomain EF becomes H G, while identity summands become

$$q^{d_i(m+1)+\delta j}\operatorname{Id}=q^{d_i(2j+m+1)}\operatorname{Id},\quad0\le j<-m.$$

Both are exactly Rouquier's canonical crossing/dot/cup/cap rho maps; his displayed parenthetical shifts use the corresponding source-to-target homogeneous-map convention. Our equations give the explicit q shifts and do not rely on interpreting a parenthetical notation by name. In particular the maps inverted in the rank-one universal category are actually inverted by the proved physical cyclotomic action.

For physical h>0, the candidate second counit EF→Id is (−1)^{1−h} times the top identity coefficient of rho_+^{-1}. Its basic degree is −δ(h−1). For physical h<0, the candidate second unit Id→FE is (−1)^{1−h} times the inverse image under rho_- of its last counit component; this is not simply ψ_{−h−1}, because the kernel/counit matrix is anti-triangular. The inverse's degree is fixed by its last component shift q_i^{2h}, before returning from q_i^{-2}FE to basic FE. The boundary h=0 and the other two candidates require the quotient formulas in the trace helper's note. These are candidate maps only; no second triangle or crossing-mate equality is asserted from their construction.

## Divided-power endpoint: exact missing identity and the part now proved

In the rank-one universal category let v have Rouquier weight −N, N≥0, and H v=0. Let G^(N),H^(N) be the normalized nil-Hecke divided-power summands with the existing first adjunction G^(N)⊣H^(N). The required endpoint is the actual iterated-adjunction unit

$$v\xrightarrow{u_N}H^{(N)}G^{(N)}v$$

being an isomorphism. If it is proved, the asserted map End(v)→End(G^(N)v) is an isomorphism, without a second adjunction: the first adjunction identifies End(G^(N)v) with Hom(v,H^(N)G^(N)v), and under that identification G^(N)(f) corresponds to u_N∘f by naturality of the unit. If u_N is invertible, postcomposition with it is bijective. This proves the formal endomorphism implication and exactly identifies its indispensable prerequisite.

Rouquier's Lem4.12 normal-form map at (m,n,λ)=(N,N,−N), restricted by the two divided-power idempotents, gives that u_N. Terms indexed i<N contain H^(N−i)v and vanish; the i=N coefficient is the singleton partition rectangle P(N,0), and its degree shift cancels the two divided-power normalizations. There is no additional polynomial multiplicity. However, the normal-form map's **invertibility** is not a formal consequence of identifying that coefficient. Its proof requires the nil-Hecke triangular induction in Lem4.12, including the borderline m−n+λ=0 step and the partition leading-term divided-difference lemma. I have read that source proof; I have not supplied the full multi-index triangular argument locally in this binding. Thus the universal endpoint is precisely still open here, and may not be replaced by the rank-one Grothendieck calculation, by an assumed universal/model equivalence, or by a claimed End identification. The trace helper has this exact interface and may continue its independent construction.
