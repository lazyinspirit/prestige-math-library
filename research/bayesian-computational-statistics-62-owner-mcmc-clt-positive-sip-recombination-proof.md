# Positive Markov SIP: joint-cycle and Poisson-clock recombination

Research proof proposal. No active source, metadata, contract, manifest or verification carrier is changed. The root owns acceptance/integration of the newly authored joint adjacent-iid and regeneration suppliers. The recombination below uses their **exact mathematical interfaces**, not an external strong-approximation citation. The regeneration interface in section 1 must be checked against its author's final source before this becomes an item proof.

## 1. Exact inputs and exponent margins

Write `P0=2+δ` and `Q0=2+δ+ε` for the original requested moment/rate parameters. Choose fixed exponents

`P0 < p < q < Q0`.

Thus `b=1/p<1/P0<1/2`. For example take `p=P0+ε/3`, `q=P0+2ε/3`. Every error proved below is `o(n^b)`, stronger than the requested `O(n^(1/P0)log n)`. There is no `P0≤4` restriction.

The regeneration supplier must produce, after a finite possibly delayed initial segment, actual consecutive **original-time** cycles with integer lengths `L_i≥1`, centered rewards `Z_i`, and within-cycle absolute reward envelopes `H_i`, such that:

1. The **joint vector** `(Z_i,L_i−μ)` is `h(U_i,U_(i+1))` for iid standard-Borel innovations `U_i`, with `μ=EL_i∈[1,∞)`.
2. `EZ_i=0`, `E(|Z_i|+L_i)^q<∞` and `EH_i^q<∞`. The `H_i` are identically distributed; independence of them is unnecessary for their maximal bound. Exponential length moments are available from the geometric recurrence construction, but the joint vector proof itself needs only the displayed `q` moment.
3. Writing `T_0=0`, `T_k=Σ_(i<k)L_i`, and `F(t)` for the cumulative centered reward after the delayed initial segment, `F(T_k)=Σ_(i<k)Z_i` and `|F(t)−F(T_(m(t)))|≤H_(m(t))`, where `m(t)=max{k:T_k≤t}`. Shifting an envelope index by one has no consequence.
4. This is a law-preserving representation of the actual reward path, not a replacement by unrelated equal-law iid tours. The same cycle law is available when starting the same factor construction under the original invariant law `π`; this permits variance identification in section 8.

No assertion that full reward cycles are iid is used. The original contract allows a vacuous one-step minorization, and the continuous pair-shift example shows that a useful one-step split cannot be deduced from geometric ergodicity. The joint adjacent-iid representation is therefore essential.

The current draft `items/lem-adjacent-iid-finite-moment-vector-strong-approximation.md` supplies precisely the required vector approximation: for each `2<p<q`, the long-run matrix

`Γ=E X_0 X_0^T+E X_0 X_1^T+E X_1 X_0^T`,  `X_i=(Z_i,L_i−μ)`,

is positive semidefinite, and on an extension preserving the entire original process its partial sums are uniformly approximated at error `o(n^b)` by a continuous centered Gaussian process `A(t)` with covariance `E[A(s)A(t)^T]=min(s,t)Γ`. This is an actual newly authored local supplier, still subject to root review/integration, rather than the scalar BLW theorem applied twice.

Write

`Γ = [[u,c],[c,s²]]`.

All three entries are **long-run cycle covariances**. In particular `c` is not silently replaced by the one-cycle covariance `Cov(Z_0,L_0)` when the joint cycle row is one-dependent.

## 2. Gaussian regression and the zero-clock case

First suppose `s²>0`. Put

`a=c/s²`, `v²=u−c²/s²≥0`.

The second Gaussian coordinate divided by `s` is a standard Brownian motion `B0`. When `v>0`, `(A_1−a A_2)/v` is a standard Brownian motion `B`, independent of the **entire** process `B0`: every finite collection is jointly Gaussian, its cross-covariances are `(c−as²)min(t,r)=0`, and finite Gaussian block independence extends from rational evaluation cylinders to the full continuous paths. If `v=0`, the residual Gaussian coordinate is zero at all rational times almost surely and hence identically zero by continuity; an independent unused `B` can be adjoined if desired. Consequently the exact joint approximation gives

`max_(k≤n)|F(T_k)−a(T_k−μk)−vB(k)|=o(n^b)`,

`max_(k≤n)|T_k−μk−sB0(k)|=o(n^b)`.

These two independent Brownian drivers arise by regression of the **joint** Gaussian approximation. Independent scalar reward and length approximations would not prove these relations with the needed independence.

If `s²=0`, positive semidefiniteness implies `c=0`. The joint approximation then already gives

`max_(k≤n)|T_k−μk|=o(n^b)`, `max_(k≤n)|F(T_k)−sqrt(u)B(k)|=o(n^b)`.

The first bound implies uniformly `m(t)−t/μ=O(n^b)` for `t≤n`: use `T_(m(t))≤t<T_(m(t)+1)` and the uniform approximation to `μk`; the positivity `L_i≥1` gives `m(t)≤t` and controls the range of indices. Brownian increments over any time window of length `O(n^b)` inside `[0,Cn]` are `O(n^(b/2)sqrt(log n))=o(n^b)`, by the reflection/covering proof in section 6. The maximum cycle envelope is `o(n^b)` by section 6 as well. Thus

`sup_(t≤n)|F(t)−sqrt(u)B(t/μ)|=o(n^b)`.

Here `sqrt(μ)B(t/μ)` is standard Brownian motion, so the calendar-time variance is `u/μ`. This includes a zero Gaussian reward coordinate without dividing by it. No iid-length or deterministic-length conclusion is required from `s²=0`.

The remainder treats `s²>0`.

## 3. Forward Poisson clock from the existing length driver

Set

`γ=s²/μ`, `λ=μ²/s²`, so `λγ=μ` and `γ sqrt(λ)=s`.

Use the scalar case of the already authored local `lem-iid-finite-moment-vector-strong-approximation`, embedding a scalar variable as `(Y,0)`. Fix any `r>p` and then `r<a1<q1<∞`; the Poisson and exponential variables below have all these moments. The iid lemma's error is `O(n^(1/a1)log³(en))=o(n^(1/r))=o(n^b)`. No logarithmic KMT rate is assumed.

Apply this scalar construction to iid `C_i−λ`, with `C_i~Pois(λ)`. It gives a joint law of the full count sequence and a standard Brownian driver `B0'` for which

`max_(k≤n)|Σ_(i=1)^k C_i−λk−sqrt(λ)B0'(k)|=o(n^(1/r))`.

Disintegrate this law to obtain the count-sequence kernel given the Gaussian driver at integer times. Evaluate that kernel at the **existing** integer sequence `(B0(k))_k`, using fresh extension randomness. The count and Gaussian marginals agree with the constructed coupling law, while every original variable and both joint-cycle Brownian drivers are preserved. Because this kernel depends only on `B0`, and the fresh randomness is independent of all original variables, `B` is independent of the entire pair `(B0,(C_i)_i)`. This is standard-Borel disintegration of real sequences, not conditioning on the original chain state space.

Within each original unit interval `(i−1,i]`, conditional on `C_i=m`, insert `m` independent uniform positions and sort them, independently over intervals and of everything else given the counts. This is exactly the proved local finite-window homogeneous Poisson construction in `lem-homogeneous-poisson-ordered-event-time-density`, with its conditional-uniform event-time law. For completeness, a partition of a unit interval into pieces of lengths `d_j` gives conditional multinomial counts; summing against the `Pois(λ)` count mass gives joint mass `Π_j exp(−λd_j)(λd_j)^(k_j)/k_j!`. Independence across unit intervals then proves the rate-`λ` Poisson increment law on every finite real-time partition. The resulting `N(t)` is nondecreasing right-continuous, locally finite and simple almost surely, with `N(k)=Σ_(i≤k)C_i`.

The Poisson mass series gives, for every real `θ`,

`E exp(θ(N(v)−N(u)−λ(v−u))) = exp(λ(v−u)(exp θ−1−θ))`.

The factorial estimate `k!≥2·3^(k−2)` and exponential Markov imply

`P(|N(v)−N(u)−λ(v−u)|≥x) ≤ 2 exp(−c_λ min{x²/(v−u),x})`.

For dyadic horizons `n`, a union bound over at most `(Cn+1)²` integer intervals and Borel–Cantelli therefore give, for each fixed integer `C`, simultaneously

`|N(j)−N(i)−λ(j−i)| ≤ K_C(sqrt((j−i)log(n+2))+log(n+2))`,  `0≤i<j≤Cn`,

eventually almost surely. Intersect over the countably many `C`. In particular unit counts are `O(log n)` uniformly, counts over intervals of length at least `n^b` are at least `(λ/2)` times that length, and `N(t)/t→λ`. Brownian reflection similarly bounds all within-unit `B0` oscillations up to time `Cn` by `O(sqrt(log n))`. Thus the integer coupling extends to

`sup_(z≤n)|γN(z)−μz−sB0(z)|=o(n^b)`.

Combining with the length approximation from section 2 yields

`max_(k≤n)|T_k−γN(k)|=o(n^b)`.

This construction requires the spare all-order scalar moment only for an exponent `r>p`; it never asserts the sharper `O(log n)` forward approximation.

## 4. Inverse clock: elementary comparison and arrival-time coupling

Define the strict Poisson inverse

`y(t)=inf{z≥0:N(z)>t/γ}`.

Its order relative to `m(t)` can be controlled directly. The Brownian joint approximation implies `T_k/k→μ`: Brownian reflection on dyadic horizons gives `sup_(z≤n)|B0(z)|=O(sqrt(n log n))=o(n)`, and `b<1` makes its approximation error sublinear. Hence `m(t)=O(t)`. Also `N(z)/z→λ` gives `y(t)=O(t)` (finite initial values are absorbed). These are almost-sure statements uniform over indices bounded by a fixed multiple of a large horizon.

Let `k=floor(y(t))`. Apart from an irrelevant endpoint convention handled by shifting at most two integer indices, monotonicity gives `γN(k)≤t<γN(k+1)`. The discrepancy of `γN(k)` from `t` is therefore `O(log n)` uniformly for `t≤n`, by section 3's unit-count bound. The approximation of `T_j` by `γN(j)` has uniform error at most `n^b` eventually on each range `j≤Cn`, because it is little-o there. Choose a fixed integer `J` so `γλJ/2>4`. Poisson count increases over index intervals of length `ceil(Jn^b)` dominate `2n^b+O(log n)` eventually, uniformly in those ranges. Thus `T_(k−ceil(Jn^b)−2)≤t<T_(k+ceil(Jn^b)+2)` whenever the lower index is nonnegative. At the lower boundary use index zero. Consequently

`sup_(t≤n)|m(t)−y(t)|=O(n^b)`.

No general inverse-renewal strong-approximation theorem is used in this comparison.

Let `E_i` be the interarrival times of `N`. They are iid exponential of rate `λ`. Here this can be derived from the local finite-window ordered-density supplier rather than imported: its density for `m` ordered events up to `T` is `exp(−λT)λ^m`. To obtain the first `k` arrival density on `0<t_1<…<t_k≤T`, sum over all `m≥k` and integrate the last `m−k` ordered times above `t_k`; their simplex volume is `(T−t_k)^(m−k)/(m−k)!`. The sum is `λ^k exp(−λt_k)`. Increasing `T` covers the entire ordered simplex. The change of variables `e_i=t_i−t_(i−1)` has determinant one, giving product density `Π_i λ exp(−λe_i)` on positive spacings. Thus their independence and marginal law are proved. Elementary exponential integration gives `EE_i=1/λ`, `Var E_i=1/λ²` and all finite absolute moments; for real orders bound by the next integer moment and use integration by parts.

Apply the scalar iid supplier to `(E_i−1/λ,0)` with exponent `r>p`. Glue its Brownian driver `V` to the already realized arrival sequence using its conditional kernel given that **entire** sequence, with fresh auxiliary randomness independent of every earlier variable. It yields

`max_(k≤n)|Σ_(i=1)^k E_i−k/λ−V(k)/λ|=o(n^(1/r))`.

The identity `y(t)=Σ_(i≤floor(t/γ)+1)E_i`, the deterministic rescaling `V1(t)=sqrt(γ)V(t/γ)`, and the uniform within-unit Brownian oscillation bound imply

`sup_(t≤n)|y(t)−t/μ−V1(t)/(λsqrt(γ))|=o(n^b)`.

The environment generated by `(B0,N,V1)` and its newly used clock randomness remains independent of the residual Brownian `B`: each clock kernel was sampled from `B0` or from the clock itself, using randomness independent of `B`. No independence of the clock from the original chain is needed.

## 5. Independent Brownian/Poisson recoupling

Apply the already authored `lem-brownian-poisson-independent-clock-composition` to `B`, `N` and the **entire clock environment** of section 4. Its explicit Haar/bridge proof constructs a standard Brownian motion `W*`, independent of that environment, for which

`sup_(z≤n)|B(z)−λ^(−1/2)W*(N(z))|=O(log²(n+2))` almost surely.

In particular `W*` and `V1` are independent. Define

`G(t) = (v/sqrt(λ)) W*(t/γ) − (aμ/(λsqrt(γ))) V1(t)`.

This is a continuous centered Gaussian process with independent stationary increments and variance per unit time

`v²/(λγ)+a²μ²/(λ²γ) = (v²+a²s²)/μ = u/μ`.

Thus if `u>0`, `W(t)=G(t)/sqrt(u/μ)` is standard Brownian. If `u=0`, positive semidefiniteness gives `c=0` and then `a=v=0`, so `G` is identically zero; an independent unused standard Brownian can be adjoined. The regression-zero case `v=0` causes no division by zero: omit the `W*` term and its unused coupling, retaining the single `V1` Brownian component.

The independent-clock property in this step would fail if one had approximated scalar reward and length sums separately without preserving their joint covariance. The joint adjacent-iid supplier is what makes the environment assumption of the Haar lemma valid.

## 6. Uniform remainder estimates proved locally

Two elementary estimates suffice.

**Cycle-envelope maximum.** Identical marginal `q` moments give, on dyadic `N`,

`P(max_(i≤CN)H_i>ηN^b) ≤ C'η^(−q)N^(1−q/p)`.

The dyadic series is summable since `q>p`. Borel–Cantelli, intersected over positive rational `η` and positive integer `C`, gives `max_(i≤Cn)H_i=o(n^b)` almost surely. No independence is used. Exactly the same argument controls maxima of any identically distributed `L^q` endpoint terms.

**Brownian short windows.** For each fixed `A,C>0`, cover `[0,C2^j]` by an overlapping grid of intervals of length `2h_j`, where `h_j=A2^(jb)`. Every pair of times at distance at most `h_j` lies in one of these intervals. Reflection bounds the chance that the oscillation on one interval exceeds `K sqrt(h_j j)` by `4 exp(−cK²j)`. There are at most `C'2^j/h_j+2` grid intervals. Choose `K` large to make the union bound summable in `j`; Borel–Cantelli yields

`sup_(s,t≤Cn, |s−t|≤An^b)|W(s)−W(t)|=O(n^(b/2)sqrt(log n))=o(n^b)`.

The same proof with fixed window length yields `O(sqrt(log n))`; all required fixed integer `A,C` can be put on one event. No independence of the random evaluation times and the Brownian motion is needed because the estimates hold uniformly on deterministic intervals.

The complete-cycle rewards `Z_i` are centered and one-dependent by their adjacent-iid representation. Therefore `lem-finite-moment-moving-window-increments`, at exponents `q>p>2`, gives

`max_(i,j≤Cn, |i−j|≤An^b)|Σ_(k<i)Z_k−Σ_(k<j)Z_k|=o(n^b)`.

Its assertion is simultaneous for all fixed `A`; a random finite bound is covered by the countably many integer values. The same convention applies to random finite horizon multipliers after restricting them to a larger integer.

## 7. Exact calendar-time expansion

Put `y=y(t)` and use the Gaussian process `G` from section 5. The following identity is exact:

`F(t)−G(t)=Φ1+Φ2+Φ3+Φ4+Φ5+Φ6+Φ7+Φ8`,

where

`Φ1=F(t)−F(T_(m(t)))`,

`Φ2=F(T_(m(t)))−F(T_(floor y))`,

`Φ3=F(T_(floor y))−aT_(floor y)+aμy−vB(y)`,

`Φ4=a(T_(floor y)−γN(y))`,

`Φ5=−aμ(y−t/μ−V1(t)/(λsqrt γ))`,

`Φ6=v(B(y)−λ^(−1/2)W*(N(y)))`,

`Φ7=(v/sqrt λ)(W*(N(y))−W*(t/γ))`,

`Φ8=a(γN(y)−t)`.

Adding the eight right-hand sides cancels all intermediate rewards, clock terms, `B(y)` and `W*(N(y))`, leaving exactly `F(t)−G(t)` with the signs shown.

Uniformly over `t≤n`, sections 2–6 give:

- `Φ1=o(n^b)` from the cycle-envelope maximum.
- `Φ2=o(n^b)` from `|m(t)−floor y(t)|=O(n^b)` and the centered one-dependent moving-window lemma. This is the step for which bounded rewards cannot silently be assumed.
- `Φ3=o(n^b)` from the joint approximation at integer cycle indices, the bounded fractional-part drift `aμ(y−floor y)`, and within-unit Brownian oscillations.
- `Φ4=o(n^b)` from the forward Poisson/length comparison at `floor y`, plus the within-unit Poisson count bound to replace `N(floor y)` by `N(y)`.
- `Φ5=o(n^b)` from the exponential-arrival approximation.
- `Φ6=O(log² n)=o(n^b)` from the Haar composition.
- `Φ7=O(sqrt(log n))=o(n^b)`, because the strict inverse and simplicity give `N(y(t))=floor(t/γ)+1`, at distance at most one from `t/γ`.
- `|Φ8|≤|a|γ`, by the same strict-inverse identity.

The ranges of `m(t)` and `y(t)` are `O(n)`, as proved in section 4, so every cited uniform approximation is evaluated inside its verified range. Therefore

`sup_(t≤n)|F(t)−G(t)|=o(n^b)` almost surely.

This proves the calendar-time coupling from the exact local joint-cycle interface, including singular joint covariance and zero residual Gaussian variance. In the positive-variance branch the driver is the standard Brownian `W=G/sqrt(u/μ)` already identified in section 5.

## 8. Identifying the variance with the source's sigma_g

The cycle coupling gives calendar variance `κ²=u/μ`. Do not identify it with the source asymptotic variance by claiming that an almost-sure `o(sqrt n)` error automatically controls second moments; it need not.

Instead run the **same fixed factor/split construction** under initial law `π`. It has the same cycle law and hence the same `u,μ`; its finite delayed segment is restored as in section 9 below. The coupling gives a distributional limit `S_n/sqrt n ⇒ N(0,κ²)`, because its error is `o(n^b)` almost surely with `b<1/2`, while `G(n)/sqrt n` has exactly the centered normal law of variance `κ²` for every `n`. Almost-sure convergence of the error implies convergence in probability; the proved converging-together supplier gives this weak limit.

Independently, the broad geometric-envelope supplier yields a stationary integrable geometric TV envelope and hence exponential `α` mixing. The actual proved local `thm-strong-mixing-clt-with-moment-conditions`, applied to the scalar observation `f`, gives `S_n/sqrt n ⇒ N(0,σ_f²)`, where `σ_f²` is its absolutely convergent covariance sum. Its moment regime applies since `Q0>2` and geometric mixing is summable at every positive power. Uniqueness of the weak limit (or the normal characteristic functions at a nonzero argument) gives `κ²=σ_f²`. This also treats `κ²=0`, but the original positive SIP explicitly assumes `σ_f>0`.

If the factor construction depends on the chosen initial law through its dominating measure, that is harmless provided the regeneration author retains `π` in that dominating measure and proves this same cycle construction for both starts. The comparison is made for a fixed construction, not between unrelated choices of cycles.

## 9. Restoring an arbitrary initial law and the original probability space

Let `D<∞` be the actual integer delay before the retained post-regeneration cycle process begins, and let `A` be the finite centered reward accumulated before it. No moment of `D` or of `A` is required. For `n≥D`, the actual sum is `S_n=A+F(n−D)`. Use the **same** final Brownian motion `W` from the tail construction at time `n`, not a random shifted process asserted to be Brownian:

`S_n−κW(n)=A+[F(n−D)−κW(n−D)]+κ[W(n−D)−W(n)]`.

On the probability-one event where the fixed-window Brownian bound in section 6 holds for every positive integer window length, take any integer at least the finite random `D`. It gives `sup_(D≤k≤n)|W(k−D)−W(k)|=O(sqrt(log n))`, even when `D` and `W` are dependent. The finitely many indices before `D` contribute a finite random maximum. Therefore

`max_(k≤n)|S_k−κW(k)|=o(n^b)` almost surely.

This finite-shift restoration needs neither independence of the delay and the driver nor a claim that `t↦W(t−D)` has Wiener law. The essential remaining regeneration condition is that the retained post-delay joint cycle process actually has the adjacent-iid law required in section 1; a finite first successful split alone is not permission to ignore the overlapping boundary seed. Discarding the first overlapping cycle is allowed only once that supplier proves the retained iid seed environment.

Finally lift the completed observation/Brownian joint law onto the **original** chain probability space. Let `Y=(f(X_1),f(X_2),…)`, a real sequence with the actual original path law; use this shifted observation sequence from the start so the final sums have the original source's indices `1,…,n`. The construction above gives a joint law of `Y` and the rational-time coordinates of the final standard Brownian motion. Both countable real sequence spaces are standard Borel. Disintegrate the Brownian rational-coordinate law given `Y`, then append that kernel evaluated at the original realized `Y` by Ionescu–Tulcea or a single product-kernel extension. The original probability-space marginal, including the entire original chain and any additional original variables, is unchanged. The required approximation event is measurable in these observations and integer Brownian coordinates, so its probability one is preserved.

There is no hidden regular-conditional-law assumption on the original state space here. To reconstruct continuous Brownian paths from the adjoined rational coordinates, use the Borel event on which the coordinate function is uniformly continuous on every bounded rational interval and has zero start. It is Borel because it says, for each positive integers `M,k`, that some integer `l` makes all rational pairs in `[0,M]` at distance below `1/l` have value difference below `1/k`. The constructed Wiener rational law assigns this event probability one. Completeness of the real line gives a unique continuous extension on every compact interval, consistent between them. Each fixed real-time evaluation is a limit along a deterministic rational sequence, hence measurable. Its joint laws agree with the original continuous Brownian law by continuity. On the null failure event set the whole path to zero. Thus the extension carries a genuine standard continuous Brownian motion and not merely a Gaussian sequence at integer times.

Since `p>P0`, the final `o(n^(1/p))` error is stronger than the required `O(n^(1/P0)log n)`. Centering by `f=g−πg` preserves the original moment with exponent `Q0` by the finite-sum power inequality. The proof therefore retains every original `δ,ε>0` and arbitrary initial law.

## 10. Exact remaining integration boundary

The scalar iid finite-moment and Haar/Poisson/moving-window mathematical sources are already authored locally. The joint adjacent-iid source now has the exact necessary full vector statement; its author reports that the parent independently read its entire source, requested and received two clarifications, and froze the final nineteen-step item. Its exact proposal is `research/bayesian-computational-statistics-62-owner-mcmc-clt-adjacent-iid-proposal.json`.

The complete `research/bayesian-computational-statistics-62-owner-mcmc-clt-regeneration-proof.md` was subsequently read throughout in this branch. It supplies exactly section 1's required interface: `L_j=m ell(U_j)` are iid with exponential moment, rewards and whole absolute envelopes depend on adjacent seeds, the occupation identity gives `EZ=0` and `μ=m/(επ(C))`, and every `q<Q0` is available for the envelope moment. Its factor reference measure includes both `π` and the specified initial law, so the same factor/split law can be used for stationary variance identification. The finite initial terminal bridge may depend on the first retained seed; the same-driver shift proof in section 9 does not assume otherwise. The root is checking/authoring its two proposed item sources. Once those accepted sources expose exactly this interface, the recombination has no remaining imported strong-approximation premise. This statement distinguishes the reviewed research proof from completed live-item integration and makes no readiness assertion.

In particular, the following shortcuts are not used: scalar couplings with an unsupported independence claim; regression by same-time covariance for one-dependent tours; iid full tours from a multistep minorization; a sharp logarithmic clock approximation from the finite-moment iid supplier; variance identification by unsupported uniform integrability; a randomly shifted Brownian driver declared standard; or disintegration of an arbitrary state-valued variable. This note records the complete recombination mathematics but is not a proof-acceptance, readiness or closure receipt.
