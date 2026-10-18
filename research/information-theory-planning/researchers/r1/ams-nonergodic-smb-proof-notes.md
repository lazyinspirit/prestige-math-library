# AMS domination and nonergodic SMB proof notes

Supplement to the r1 information-theory handoff. This note gives the exact AMS-to-stationary support interface and the stationary nonergodic finite-alphabet Shannon–McMillan–Breiman (SMB) mixture/component lemma, with local proof routes and hypotheses. It is research evidence, not a production item or an independent category acceptance.

## Read sources and exact scope

The supporting source is Robert M. Gray, *Probability, Random Processes, and Ergodic Properties*, author-hosted corrected First Edition, revised January 2, 2010. The author page identifies it as the corrected/revised First Edition, with permission for intact noncommercial circulation, distinct from the Springer Second Edition: [author page](https://ee.stanford.edu/~gray/arp.html), [PDF](https://ee.stanford.edu/~gray/arp.pdf). Its local PDF and full extraction are recorded in `source-manifest.json`. I read the complete relevant proof spans, not the full 217-page book: printed pp. 124–133 / PDF pp. 136–145 (complete Vitali–Hahn–Saks Lemma 6.2.2 proof, AMS/stationary-mean construction, §6.3 asymptotic domination, and tail domination), and printed pp. 156–160 / PDF pp. 168–172 (§7.4, measurable ergodic decomposition and the complete proof of Theorem 7.4.1).

I also reread the exact information-theory proof interfaces in Gray, *Entropy and Information Theory*, corrected author-hosted First Edition (2023): printed pp. 59–67 / PDF pp. 81–89 (Chapter 3 §§3.3–3.4), including Lemmas 3.3.1–3.3.2 and 3.4.1–3.4.2. The whole-book read is already recorded in the prior ledger entry; the supplemental selected extent is appended there. All page and edition details are in `source-manifest.json` and `reading-ledger.json`.

One source defect is material: in the author-hosted EIT proof of Lemma 3.3.2, printed p. 61 / PDF p. 83, the proposed bounded truncation is displayed as `max(R_n,M)` and then described as bounded and increasing to `R_n`. That is internally inconsistent: `max` is not bounded above and does not increase to a finite `R_n` as `M→∞`. The r1 proof below avoids the defective truncation entirely, proving the required expectation bound directly from the measurable component kernel and finite block sums. This note does not alter or silently repair Gray's source file.

## 1. AMS, stationary mean, and asymptotic domination

Let `(Ω,𝔽)` be a measurable space, `T:Ω→Ω` measurable, and `m` a probability measure. Write

`mT^(−j)(F) := m(T^(−j)F)` and `m_N := N^(−1) Σ_(j=0)^(N−1) mT^(−j)`.

For this note, an **AMS law with stationary mean** consists of `m` together with a probability measure `m̄` such that `m_N(F)→m̄(F)` for every `F∈𝔽`. The setwise-limit version that assumes only existence of all scalar limits is equivalent by Gray EIT Theorem 1.7.1: its countable-additivity step uses Vitali–Hahn–Saks (Gray Probability Lemma 6.2.2). That theorem is recorded as a remaining local supplier obligation below; this supplement does not pretend its proof is local. Once `m̄` is a probability, stationarity follows by shifting the Cesàro sum, since

`m_N(T^(−1)F)−m_N(F) = N^(−1)(m(T^(−N)F)−m(F)) → 0`.

If `T^(−1)F=F`, every term in the Cesàro mean is `m(F)`, so `m̄(F)=m(F)`. Thus the stationary-mean definition used here yields the exact identities needed below without silently treating a merely finitely additive setwise limit as a probability measure.

For a stationary probability `η`, Gray calls `η` an **asymptotic dominator** of `m` when

`η(F)=0  ⇒  m(T^(−n)F)→0`.

This is weaker than ordinary absolute continuity `m≪η`, which would imply `m(F)=0` at time zero. Gray's Corollary 6.3.2 proves that an AMS `m` is asymptotically dominated by its stationary mean `m̄`.

**Proof of Corollary 6.3.2.** Fix `F` with `m̄(F)=0` and put `G=limsup_n T^(−n)F=∩_N∪_(n≥N)T^(−n)F`. It is invariant because shifting the limsup removes only the first term. Stationarity of `m̄` gives `m̄(T^(−n)F)=m̄(F)=0`; hence every tail union has `m̄` measure zero and `m̄(G)=0`. Since `G` is invariant, AMS gives `m(G)=m̄(G)=0`. Finally, bounded reverse Fatou applied to `1_(T^(−n)F)` yields

`limsup_n m(T^(−n)F) ≤ ∫ limsup_n 1_(T^(−n)F) dm = m(G)=0`.

Thus `m(T^(−n)F)→0`. This proof uses only countable unions/intersections, stationarity of `m̄`, equality on invariant events, and Fatou; it does not claim `m≪m̄`.

If `T` is a bimeasurable bijection, asymptotic domination by a stationary `η` does imply `m≪η`: for `η(F)=0`, the full orbit saturation `G=∪_(j∈ℤ)T^jF` is measurable, invariant and `η`-null; asymptotic domination gives `m(T^(−n)G)→0`, while invariance gives `m(T^(−n)G)=m(G)`. Therefore `m(F)≤m(G)=0`. In the noninvertible case this implication fails. On the one-sided binary shift, let `x=(1,0,0,…)`, `m=δ_x`, and `T` be the left shift. For every measurable `F`, `m(T^(−n)F)=1_F(T^n x)` is eventually `1_F(0^∞)`, so `m` is AMS with stationary mean `δ_(0^∞)`. Yet `m({x})=1` and `δ_(0^∞)({x})=0`. This is a concrete case where asymptotic domination holds and ordinary AC fails.

### Tail domination used by the AMS SMB transfer

For a one-sided process, let `𝔽_n=σ(X_n,X_(n+1),…)` and `𝔽_∞=∩_n 𝔽_n`. Gray's Corollary 6.3.3 says that if stationary `η` asymptotically dominates `m`, then `F∈𝔽_∞` and `η(F)=0` imply `m(F)=0`. This is the exact transfer needed in the proof of EIT Lemma 3.4.2; the weaker statement “`η`-almost surely” cannot be transferred for an arbitrary event.

Here is the source's full proof interface. For each `n`, Lebesgue-decompose `mT^(−n)=f_n η+s_n`, with `s_n` concentrated on an `η`-null set `B_n`. The countable union `B=∪_n B_n` is `η`-null, so asymptotic domination gives `m(T^(−n)B)→0`. Given tail `F`, choose `F_n∈𝔽` with `F=T^(−n)F_n`. Stationarity gives `η(F_n)=η(F)=0`, hence `∫_(F_n) f_n dη=0`. Therefore

`m(F)=mT^(−n)(F_n)=s_n(F_n)≤mT^(−n)(B)=m(T^(−n)B)→0`.

The construction uses Lebesgue decomposition for finite measures and stationarity; no global `m≪η` assumption is available or needed. Gray Probability Corollary 6.3.4 further characterizes asymptotic domination by either of two null-set tests when `η` is stationary: domination of invariant `η`-null events or domination of tail `η`-null events. The equality of these interfaces is useful for a separate proof, but the SMB transfer specifically uses the tail-event clause.

## 2. Measurable ergodic kernel, entropy-rate affinity, and stationary nonergodic SMB

Let `𝒜` be a finite nonempty alphabet, `Ω=𝒜^{ℕ₀}` with its product Borel σ-algebra, `T` the one-sided left shift, and `m` a stationary probability. Define

`𝓘={B∈𝓑(Ω):T^(−1)B=B}`

to be the strict-invariant σ-algebra. Assume AC wherever the published regular-conditional-distribution suppliers below require it. The conditioning σ-algebra `𝓘` need not be countably generated or complete. All logarithms in the entropy and SMB statements below are natural; `0 ln 0=0` and `−ln 0=+∞`.

### Conditional kernel and ergodic component construction

Apply published `thm-existence-of-regular-conditional-distributions-for-standard-borel-targets` to the identity random element `Id:(Ω,𝓑(Ω),m)→Ω`, whose target is standard Borel, conditioned on the arbitrary sub-σ-algebra `𝓘`. It supplies an everywhere probability kernel `K(ω,·)` such that `ω↦K(ω,B)` is `𝓘`-measurable and

`∫_E K(ω,B)m(dω)=m(E∩B)` for every `E∈𝓘` and Borel `B`.

Thus all sections are probability measures, including exceptional points; there is no requirement that `𝓘` itself be countably generated. Fix the countable algebra `𝓒` of finite-coordinate cylinders, which is a π-system generating `𝓑(Ω)` and determines probability measures.

For `A∈𝓒`, let `A_N1_A(ω)=N^(−1)Σ_(j=0)^(N−1)1_A(T^jω)` and let `C_A` be the set where these averages converge. The identity

`A_N1_A(Tω)=((N+1)A_(N+1)1_A(ω)−1_A(ω))/N`

and its rearrangement show that convergence at `ω` is equivalent to convergence at `Tω`; hence `T^(−1)C_A=C_A`. Define `g_A` as the limit on `C_A` and as zero off it. The same identity gives `g_A(Tω)=g_A(ω)` everywhere, so `g_A` is strictly invariant and `𝓘`-measurable. Published `thm-birkhoff-ergodic-theorem` gives `m(C_A)=1`, and `thm-birkhoff-limit-identification-on-finite-measure-spaces` identifies `g_A` with `E_m[1_A|𝓘]` up to `m`-null sets. In particular, `K(ω,A)=g_A(ω)` almost surely.

There is one common full-measure set on which the last identity holds for all `A∈𝓒`, since `𝓒` is countable. Apply published `thm-conditional-integration-through-a-regular-conditional-law` to `Id` with the nonnegative bounded functions `g_A` and `g_A²`. Since both are `𝓘`-measurable, their conditional expectations are themselves. Consequently, for every `A∈𝓒`, outside one common null set,

`∫g_A(y)K(ω,dy)=g_A(ω)` and `∫g_A(y)^2K(ω,dy)=g_A(ω)^2`.

Expanding the square gives `∫(g_A(y)−g_A(ω))²K(ω,dy)=0`. Thus `K(ω,·)` gives probability one to `g_A(y)=g_A(ω)` simultaneously for all `A∈𝓒`.

Each component is stationary. For `E∈𝓘`, stationarity of `m` and strict invariance give

`m(E∩T^(−1)A)=m(T^(−1)(E∩A))=m(E∩A)`.

Therefore `E_m[1_(T^(−1)A)|𝓘]=E_m[1_A|𝓘]`, so `K(ω,T^(−1)A)=K(ω,A)` almost surely for each `A∈𝓒`. Intersecting these countably many full sets and using π-λ measure determination proves `K(ω,T^(−1)·)=K(ω,·)` for `m`-almost every `ω`.

Let `C_* = ∩_(A∈𝓒) C_A`. It is measurable and `m(C_*)=1`; the disintegration identity gives `K(ω,C_*)=1` for almost every `ω`. On the common full set above, `K(ω,·)`-almost every `y` therefore satisfies, for every `A∈𝓒`,

`N^(−1)Σ_(j=0)^(N−1)1_A(T^j y) → g_A(y)=g_A(ω)`.

This implies ergodicity. First, for any probability `ρ` on `Ω`, finite `𝓒`-simple functions are dense in `L¹(ρ)`: the events whose indicators are in their `L¹`-closure form a λ-system containing the π-system `𝓒` (complements use `1−1_B`; disjoint countable unions follow by truncating the union and using that the probability of the omitted tail tends to zero). Dynkin's π-λ theorem gives all Borel events, and ordinary simple-function approximation gives all of `L¹(ρ)`. Now fix one of the stationary components `ρ=K(ω,·)` above and a `ρ`-invariant event `B`. If invariance is only modulo `ρ`-null sets, replace `B` by a strict representative using published `lem-mod-null-invariant-sets-have-strictly-invariant-representatives`. Choose `𝓒`-simple `f` close to `1_B` in `L¹(ρ)`. Its time averages converge `ρ`-almost surely and, by bounded convergence, in `L¹(ρ)` to a constant `c_f`, because averages of each cylinder indicator converge to the constant `g_A(ω)`. The averaging operators are `L¹` contractions under the stationary law `ρ`, and the averages of `1_B` equal `1_B`. Hence `||1_B−c_f||_1≤||1_B−f||_1`, and `|ρ(B)−c_f|≤||1_B−c_f||_1`. Letting `f` approximate `1_B` proves `||1_B−ρ(B)||_1≤2||1_B−f||_1→0`; thus `ρ(B)∈{0,1}`.

For a concrete measurable component label, enumerate `𝓒={A_i:i≥1}` and put `ψ(ω)=(g_(A_i)(ω))_(i≥1)∈[0,1]^ℕ`. This map is measurable and strictly invariant. The σ-algebra generated by `ψ` equals `𝓘` modulo `m`: the countable evaluations `K(ω,A_i)` generate all evaluations `K(ω,B)`, because the class of `B` for which the latter is measurable in `σ(K(·,A_i))` is a λ-system containing `𝓒`; and for `B∈𝓘`, the RCD identity gives `K(ω,B)=1_B(ω)` almost surely. Since `K(ω,A_i)=g_(A_i)(ω)` almost surely for every `i`, `σ(ψ)=𝓘` modulo `m` as claimed. Quantizing the first `j` coordinates of `ψ` into dyadic intervals of length `2^(−j)` gives increasing finite strictly invariant partitions `Z_j` generating `𝓘` modulo `m`.

The joint law of `(Id,ψ)` is on standard-Borel spaces. Published `thm-disintegration-of-a-joint-law-on-standard-borel-spaces` supplies a jointly measurable probability kernel `m_λ` for the conditional law of `Id` given `ψ=λ`, with `ν=m∘ψ^(−1)`. Since `σ(ψ)=𝓘` modulo `m`, uniqueness of conditional laws and the countable determining algebra give `m_(ψ(ω))=K(ω,·)` as measures for `m`-almost every `ω`; in particular `m_λ(A_i)=λ_i` for all `i` on one `ν`-full set. Also `ψ_#m_λ=δ_λ` for almost every `λ`, by the conditional-law identity for the label and a countable determining algebra of `[0,1]^ℕ`. Disintegration gives `m_λ(C_*)=1` almost surely. Stationarity is a countable cylinder-evaluation condition. The measurable conditions `ψ_#m_λ=δ_λ`, `m_λ(C_*)=1`, and `m_λ(A_i)=λ_i` then imply all cylinder averages are constant `m_λ`-almost surely; the constant-cylinder-average criterion above proves ergodicity. Thus `m=∫m_λν(dλ)`, and `m_λ` is stationary and ergodic for `ν`-almost every `λ`. This supplies the jointly measurable component kernel and fiber property without assuming an ergodic-decomposition theorem as a black box.

### Entropy-rate affinity proved from finite invariant partitions

Write `h(ρ)=lim_n n^(−1)H_ρ(X_0^(n−1))` for any stationary law `ρ` on this finite-alphabet path space. Explicitly, `a_k=H_ρ(X_k|X_0^(k−1))` decreases with `k` by conditioning reduction and stationarity, while the chain rule gives `H_ρ(X_0^(n−1))=H_ρ(X_0)+Σ_(k=1)^(n−1)a_k`; hence the normalized block entropies converge to `lim_k a_k`, and `0≤h(ρ)≤ln|𝒜|`. First take any finite strictly invariant partition `Z` with positive cell probabilities `p_z`, and let `m_z=m(·|Z=z)`. Each `m_z` is stationary because `m_z(T^(−1)B)=m(T^(−1)(B∩{Z=z}))/p_z=m(B∩{Z=z})/p_z` for every Borel `B`. The entropy chain rule gives

`0≤H_m(X_0^(n−1))−Σ_z p_z H_(m_z)(X_0^(n−1))=I_m(X_0^(n−1);Z)≤H(Z)`.

After division by `n` and passage to the limit, `h(m)=Σ_z p_z h(m_z)`. For every fixed `k≥1`, stationarity and conditioning reduction imply `h(m_z)≤H_(m_z)(X_k|X_0^(k−1))`; hence

`h(m)≤H_m(X_k|X_0^(k−1),Z)`.

Apply this to the increasing finite invariant partitions `Z_j` above. For fixed `k`, let `G_j=σ(X_0^(k−1),Z_j)` and `G=σ(X_0^(k−1))∨𝓘`. The finite-alphabet conditional probabilities `q_(j,a)=E_m[1_{X_k=a}|G_j]` converge in `L¹(m)` to `q_(a)=E_m[1_{X_k=a}|G]`: approximate each bounded `G`-measurable `q_a` by a `G_(j₀)`-measurable simple function, then for `j≥j₀` use the tower property and `L¹` contraction to obtain `||q_(j,a)−q_a||_1≤2||q_a−f||_1`. The required simple-function density follows from the same λ-system argument for the increasing finite algebras `G_j`. Entropy is uniformly continuous and bounded on the finite probability simplex, so

`H_m(X_k|X_0^(k−1),Z_j) → H_m(X_k|X_0^(k−1),𝓘) = ∫ H_(m_λ)(X_k|X_0^(k−1))ν(dλ)`.

The last identity is the finite conditional-entropy formula applied to the conditional kernel `m_λ`. Letting `j→∞` in the preceding inequality and then `k→∞`, the component conditional entropies decrease to `h(m_λ)` and are bounded by `ln|𝒜|`; dominated convergence proves `h(m)≤∫h(m_λ)ν(dλ)`. Conversely, finite-block entropy concavity and disintegration give `H_m(X_0^(n−1))≥∫H_(m_λ)(X_0^(n−1))ν(dλ)`. Divide by `n` and use bounded convergence to obtain `h(m)≥∫h(m_λ)ν(dλ)`. Therefore

`h(m)=∫h(m_λ)ν(dλ)`.

This is the load-bearing entropy-rate affinity used below. It is proved here; Gray Probability Theorem 2.4.1's external semicontinuous-affine-functional citation is not treated as a local proof.

### Stationary nonergodic mixture/component SMB

For `a∈𝒜^n`, write `m_n(a)=m(X_0^(n−1)=a)` and `m_(λ,n)(a)=m_λ(X_0^(n−1)=a)`. The component entropy rate

`h_λ := lim_n n^(−1) H_(m_λ)(X_0^(n−1))`

exists, lies in `[0,ln|𝒜|]`, and is measurable in `λ` because each finite-block entropy is a measurable function of the kernel probabilities and the normalized limit is an infimum. The stationary ergodic SMB theorem applied to each `m_λ`, followed by integration of its measurable full-measure sections against `ν`, gives

`−n^(−1)log m_(ψ(x))(X_0^(n−1))(x) → h_(ψ(x))`,  `m`-almost surely.

The base theorem is used only with its finite-alphabet, stationary, ergodic hypotheses; the mixture `m` itself need not be ergodic. The joint event is measurable because all block probabilities and `h_λ` are measurable and the sequence of log-likelihoods is a countable family of measurable extended-real functions.

Gray EIT Lemma 3.3.2 proves that component and mixture block probabilities have the same exponential rate:

`n^(−1)log [m_(ψ(x),n)(X_0^(n−1)) / m_n(X_0^(n−1))] → 0`,  `m`-almost surely.

Here is a complete proof with the source's integrability gap removed. A sampled word has positive component probability almost surely; if `m_n(a)=0`, then `m_(λ,n)(a)=0` for `ν`-almost every `λ`. Define

`R_n(x)=m_n(X_0^(n−1)(x))/m_(ψ(x),n)(X_0^(n−1)(x))`

where the denominator is positive, and zero on the null exceptional set. It is measurable as a finite sum over `a∈𝒜^n` of cylinder indicators times ratios of measurable kernel probabilities. Conditional-kernel integration for nonnegative functions gives directly

`E_m R_n = ∫_Λ Σ_(a:m_(λ,n)(a)>0) m_(λ,n)(a) [m_n(a)/m_(λ,n)(a)] ν(dλ)`

`= ∫_Λ Σ_(a:m_(λ,n)(a)>0) m_n(a) ν(dλ) ≤ 1`.

Indeed, write `R_n(x)=Σ_(a∈𝒜^n)1_(C_a)(x)r_n(ψ(x),a)` with the zero-denominator convention and apply the kernel formula to each summand; the sum is finite. Integrability is thereby established before Markov's inequality, without a truncation. This avoids the displayed `max` truncation in Gray's proof. Markov and Borel–Cantelli, first for rational `ε>0`, yield

`limsup_n n^(−1)log[m_n(X_0^(n−1))/m_(ψ(x),n)(X_0^(n−1))]≤0`,

so the liminf of the desired log ratio is nonnegative.

For the reverse inequality, fix `k≥1` and form the stationary `k`-step Markov approximation `m^(k)` to `m`, with the same `k`-block marginal and transitions `q_k(b|u)=m(X_k=b|X_0^(k−1)=u)` on positive-probability contexts `u`; choose any probability vector on zero-probability contexts. Explicitly, use the order-`k` state space `𝒜^k` and transition `Q(u,v)=q_k(v_(k−1)|u)` if `v_i=u_(i+1)` for `0≤i<k−1`, and zero otherwise (for `k=1` the overlap condition is empty). Set `π(u)=m(X_0^(k−1)=u)`. For `v=(v_0,…,v_(k−1))`, the sum `Σ_uπ(u)Q(u,v)` is `Σ_a m(X_0^k=(a,v_0,…,v_(k−1)))=m(X_1^k=v)=π(v)` by stationarity of `m`; zero-probability contexts contribute zero. The finite-state Ionescu–Tulcea construction gives the chain, and `πQ=π` makes its block laws stationary. Projecting overlapping states to symbols gives `m^(k)`. Its block probabilities satisfy

`m_n^(k)(a_0^(n−1))=m(a_0^(k−1)) Π_(i=k)^(n−1)q_k(a_i|a_(i−k)^(i−1))`,  `n≥k`.

For each fixed `n`, `m_n≪m_n^(k)`: when `n<k`, their `n`-block marginals agree because the initial `k`-block law is `m`'s; when `n≥k`, every positive-probability `n`-block has positive initial `k`-block probability and each length-`k+1` subblock has positive probability, so every transition factor is positive. Also `m_(λ,n)≪m_n` for `ν`-almost every `λ`, since `m_n(a)=∫m_(λ,n)(a)ν(dλ)` and there are finitely many `n`-block atoms. Thus the component-to-Markov finite-block KL terms below are well-defined; ratios are assigned arbitrary values only on component-null zero-denominator sets.

Define `S_n^(k)=m_n^(k)(X_0^(n−1))/m_n(X_0^(n−1))` on `m_n`-positive blocks and zero otherwise. Then `E_m S_n^(k)=Σ_(a:m_n(a)>0)m_n^(k)(a)≤1`, so Markov and Borel–Cantelli yield for each integer `k`

`limsup_n n^(−1)log[m_n^(k)(X_0^(n−1))/m_n(X_0^(n−1))]≤0`,  `m`-almost surely.

Put `g_k(x)=−ln q_k(X_k(x)|X_0^(k−1)(x))` when the transition probability is positive, and `g_k(x)=0` otherwise. The zero case has `m`-probability zero. This nonnegative measurable function satisfies `E_m g_k=H_m(X_k|X_0^(k−1))≤ln|𝒜|`; disintegration gives `g_k∈L¹(m_λ)` for `ν`-almost every component. On each such stationary ergodic component, Birkhoff and the Markov factorization give `−n^(−1)log m_n^(k)(X_0^(n−1))→c_k(λ):=E_(m_λ)g_k`; the initial `k`-block log probability is finite almost surely and vanishes after division by `n`. Together with component SMB, this yields

`n^(−1)log[m_(λ,n)(X_0^(n−1))/m_n(X_0^(n−1))]`

`= n^(−1)log[m_(λ,n)(X_0^(n−1))/m_n^(k)(X_0^(n−1))] + n^(−1)log[m_n^(k)(X_0^(n−1))/m_n(X_0^(n−1))]`,

whose first term tends to `D_k(λ):=c_k(λ)−h_λ=lim_n n^(−1)D(m_(λ),n||m_n^(k))≥0`, while the second has limsup at most zero. For this relative-entropy-rate identity, expand the finite-block KL as cross-entropy under `m_n^(k)` minus component entropy: the normalized component entropy tends to `h_λ`; the cross-entropy is the initial `k`-block cross-entropy divided by `n` plus the average of `E_(m_λ)g_k=c_k(λ)` over `n−k` stationary transitions. The initial term is finite on the component support and vanishes after division by `n`. Thus `limsup L_n≤D_k(λ)` for every `k`, where `L_n=n^(−1)log[m_(λ,n)(X_0^(n−1))/m_n(X_0^(n−1))]`.

The function `D_k` is measurable and integrable: `D_k≤c_k` and `∫c_k dν=H_m(X_k|X_0^(k−1))≤ln|𝒜|`. The affinity just proved and the finite-alphabet Markov-approximation identity give

`∫_Λ D_k(λ)ν(dλ)=H_m(X_k|X_0^(k−1))−h(m) → 0` as `k→∞`.

For the identity, `∫c_k=H_m(X_k|X_0^(k−1))` by disintegration and `∫h_λ=h(m)` by the preceding proof. The conditional entropies decrease to `h(m)` by stationarity and the finite-alphabet entropy-rate formula. Let `ζ(λ)=inf_kD_k(λ)`. It is measurable and nonnegative, and `0≤∫ζdν≤inf_k∫D_kdν=0`; hence `ζ=0` almost everywhere. Therefore `limsup L_n≤0` `m`-almost surely. Combining with the earlier lower bound proves `L_n→0`, and substitution into component SMB gives

`−n^(−1)log m(X_0^(n−1))→h_(ψ(x))`,  `m`-almost surely.

Gray EIT Corollary 3.3.1 also asserts `L¹(m)` convergence, using finite-alphabet uniform integrability of normalized sample self-information (Lemma 2.3.6). This supplement proves the mixture/component rate identity and a.s. transfer, not a new proof of that uniform-integrability lemma.

### What the entropy limit is, and is not

In general the sample entropy under a stationary nonergodic law converges to the entropy rate of the component actually selected by the sample, `h_(ψ(x))`; it does not converge to the mixture-average entropy rate `h(m)=∫h_λν(dλ)` as a constant. For example, let `m=½δ_(0^∞)+½ Bernoulli(½)^ℕ`. The stationary component entropy rates are `0` and `ln 2`, so a typical sample has limiting entropy density `0` or `ln 2` according to its component, while the mixture entropy rate is `(ln 2)/2`. On the deterministic component `m(X^n)→½`; on a typical iid component sample `m(X^n)=2^(−n−1)` for all sufficiently large nonconstant blocks. This example makes the mixture/component distinction explicit.

## 3. AMS extension: the stationary mean supplies only the right null-set interface

Gray EIT Lemma 3.4.2 states the exact transfer used after stationary nonergodic SMB: let `m` be finite-alphabet AMS, let `m̄` be a stationary law asymptotically dominating `m`, and suppose an invariant real function `h` satisfies

`−n^(−1)log m̄(X^n)→h`,  `m̄`-almost surely.

Then `−n^(−1)log m(X^n)→h`, `m`-almost surely. In its intended application `m̄` is the stationary mean. This is not justified by saying the `m̄`-a.s. limit transfers to `m` for every event: only tail events transfer in the noninvertible case.

For each probability law `μ` on the finite-alphabet one-sided path space and each fixed `k`, the fixed-prefix boundary convergence has a direct finite-alphabet proof. Let `A=X_0^(k−1)` be the first `k` symbols and `B_n=X_k^(n−1)` the suffix word, with all probabilities below taken under this same `μ`. On a sampled block, the boundary error is

`e_(μ,k,n):=−n^(−1)log μ(X_0^(n−1)) + n^(−1)log μ(X_k^(n−1)) = −n^(−1)log μ(A|B_n) ≥ 0`.

For every `ε>0`, summing over suffix words `b` and prefix words `a∈𝒜^k` gives

`μ(e_(μ,k,n)>ε)=Σ_(b:μ(B_n=b)>0) μ(B_n=b) Σ_(a:μ(a|b)<e^(−nε)) μ(a|b) ≤ |𝒜|^k e^(−nε)`.

The bound is summable in `n`. Borel–Cantelli, first for positive rational `ε`, proves `e_(μ,k,n)→0` `μ`-almost surely. This is Gray EIT Lemma 3.4.1 with its finite-alphabet argument written out. In particular, the assertion for `μ=m` is under `m` with `m`-block probabilities, while the separate assertion for `μ=m̄` is under `m̄` with `m̄`-block probabilities; neither limit is evaluated using one law's block probabilities along samples drawn from the other law.

Choose strictly increasing `N(k)≥k²` so that for each `μ∈{m,m̄}`

`μ(sup_(n≥N(k)) |e_(μ,k,n)| > 2^(−k)) ≤ 2^(−k)`.

Such a common sequence exists because each fixed-`k` error converges under its own law. Put `k(n)=k` on `[N(k),N(k+1))` and set `k(n)=1` for the finitely many `n<N(1)`. For each of the two laws separately, Borel–Cantelli gives `e_(μ,k(n),n)→0`; also `k(n)→∞` and `k(n)/n→0`. The lower bound `N(k)≥k²` ensures `k(n)≤n` on these intervals.

Write `B_n` for the observed suffix cylinder `{X_(k(n))^(n−1)=x_(k(n))^(n−1)}`. Apply the stationary component construction above to `m̄`; its SMB limit is the finite, strictly invariant function `h(x)=h_(ψ_(m̄)(x))`. Under `m̄`, its own-law diagonal boundary relation and stationary SMB give

`b̄_n:=−n^(−1)log m̄(B_n) → h`.

This limit event belongs to every tail σ-algebra `𝓕_N=σ(X_N,X_(N+1),…)`: for all sufficiently large `n`, `k(n)≥N`, so `B_n`-probabilities depend only on coordinates from `N` onward, and strict invariance gives `h=h∘T^N`, which is `𝓕_N`-measurable. Gray Probability Corollary 6.3.3 therefore transfers this event from `m̄` to `m`. In particular, because `h` is finite, `m̄(B_n)>0` eventually for `m`-almost every sample; this positivity is needed before using the logarithmic ratio identity below.

For the lower bound, on `m̄`-positive suffix blocks set `U_n=m(B_n)/m̄(B_n)` and set it to zero otherwise. For every `n`, summing over the disjoint suffix words gives

`E_(m̄)U_n=Σ_(b:m̄(B_n=b)>0)m(B_n=b)≤1`.

Markov and Borel–Cantelli imply `limsup n^(−1)log U_n≤0`, `m̄`-almost surely. Since `m̄(B_n)>0` along an `m̄`-sample for every fixed `n`, either `m(B_n)=0` (then `−log m(B_n)=+∞` and the lower bound is immediate) or

`−n^(−1)log m(B_n)=−n^(−1)log m̄(B_n)−n^(−1)log U_n`.

Thus `liminf −n^(−1)log m(B_n)≥h` on a tail event. As above, each sufficiently late suffix block depends only on coordinates arbitrarily far out, so the whole liminf event is in every `𝓕_N`; tail domination transfers it from `m̄` to `m`. The separate `m`-own boundary relation then gives the lower bound for `−n^(−1)log m(X_0^(n−1))`.

For the upper bound, an `m`-sample has `m(B_n)>0` for every `n` almost surely: for fixed `n`, the zero-probability suffix cylinders form a finite union of `m`-null events, and there are only countably many `n`. Set `V_n=m̄(B_n)/m(B_n)` on these positive blocks and zero otherwise. Again summing over disjoint suffix words,

`E_m V_n=Σ_(b:m(B_n=b)>0)m̄(B_n=b)≤1`.

Markov and Borel–Cantelli yield `limsup n^(−1)log V_n≤0`, `m`-almost surely. On the common `m`-full set where `m(B_n)>0` always and `m̄(B_n)>0` eventually, the identity

`−n^(−1)log m(B_n)=−n^(−1)log m̄(B_n)+n^(−1)log V_n`

is now an ordinary finite-real identity for all sufficiently large `n`. It gives `limsup≤h`; the `m`-own boundary relation transfers that upper bound to the original prefix. The two bounds prove the AMS SMB transfer. Both cross-law full-measure passages (the stationary-mean limit and the lower-bound event) are tail events and use the tail-domination corollary derived from asymptotic domination. Ordinary `m≪m̄` is neither asserted nor needed.

## 4. Root-library suppliers and remaining authoring obligations

Current published suppliers that can support the interfaces, with exact status/path checked in the existing supplier audit:

- `items/def-standard-borel-space.md` and `items/def-probability-measure.md` are published state-space/law definitions.
- `items/thm-existence-of-regular-conditional-distributions-for-standard-borel-targets.md` is published and states the exact broad kernel interface: under AC, a standard-Borel target has an everywhere probability RCD given any sub-σ-algebra, with no countable-generation or completeness condition on that sub-σ-algebra. Its construction supplies a countable generating algebra that determines finite measures. `items/thm-disintegration-of-a-joint-law-on-standard-borel-spaces.md` is also published and, under AC and standard-Borel spaces on both coordinates, supplies the jointly measurable component kernel given the countable label `ψ`.
- `items/thm-birkhoff-ergodic-theorem.md` supplies a.e. integrable invariant limits for sigma-finite measure-preserving systems and integrable functions; it does not itself identify the limit as a conditional expectation. Published `items/thm-birkhoff-limit-identification-on-finite-measure-spaces.md` adds that exact finite-measure/AC event-integral identification for the strict-invariant σ-algebra. Published `items/lem-mod-null-invariant-sets-have-strictly-invariant-representatives.md` converts component events invariant modulo null sets when needed. `items/thm-dynkin-pi-lambda.md` supplies measure determination from the countable cylinder π-system.
- Published `items/thm-conditional-integration-through-a-regular-conditional-law.md` transfers the conditional-law identity from indicators to the nonnegative functions `g_A` and `g_A²` used in the kernel variance calculation. Published `items/lem-simultaneous-ae-uniqueness-of-regular-conditional-distributions.md` supplies the common-null-set uniqueness step identifying the label kernel with `K`. `items/thm-conditional-expectation-exists-by-radon-nikodym.md` is published under AC; in this note it supplies conditional probability vectors in the entropy-affinity approximation. `items/def-qa-35-finite-probability-entropy-and-stochastic-matrices.md` is a published finite Shannon entropy definition, but it is not a general entropy-rate or SMB supplier. The finite-simplex entropy chain, concavity, conditional-entropy limit, and block subadditivity still need their exact information-theory DAG suppliers in the final category.
- Published `items/thm-ionescu-tulcea-construction-of-a-markov-chain.md` supplies the finite-state `k`-block transition process in the Markov-approximation step under Choice, and its invariant initial law gives stationarity.
- In the component cross-entropy argument, `λ↦m_λ(C_a)` is a measurable kernel evaluation and the finite sum defining `R_n` is measurable. The use `g_k∈L¹(m_λ)` holds for `ν`-almost every component because `E_m g_k≤ln|𝒜|` and disintegration.
- `items/thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality.md` and `items/thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures.md` are published measure-theory suppliers for the singular-part proof of tail domination; probability laws meet their finite-measure hypotheses, with the recorded AC requirement retained.

No current library item supplies the AMS/stationary-mean definition, the Vitali–Hahn–Saks bridge from bare setwise Cesàro limits to a countably additive stationary mean, asymptotic domination, tail-domination corollary, finite SMB theorem, component/mixture density-ratio lemma, stationary finite-block relative-entropy-rate Markov approximation, or finite-prefix/diagonal transfer lemma. The present supplement takes the stationary mean as an explicit probability-law datum, as stated in §1, and supplies complete local arguments after that premise for the measurable stationary ergodic kernel, its finite-alphabet entropy-rate affinity, and the stated density-ratio/AMS interfaces. Gray Probability Lemma 6.2.2's full Vitali–Hahn–Saks proof has been read and is recorded in `reading-ledger.json`, but the corresponding production item remains to be authored before using the bare setwise-limit definition. Production claims still need to be authored as a dependency-ordered local DAG with the finite-information-theory suppliers above. In particular, ordinary AC of `m` with respect to its one-sided stationary mean is not an available premise; name the exact asymptotic/tail-domination route at each use.
