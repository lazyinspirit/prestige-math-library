# MCMC strong approximation: exact source path and unresolved local suppliers

Research proposal only, 2026-10-15. No active item, contract, manifest, verification, or run-state file was changed. In particular the native36 carriers are untouched. This note does **not** close the strong-invariance escalation.

## Actual contract and conclusion

The current `items/thm-geometrically-ergodic-chain-strong-invariance-principle.md` assumes geometric ergodicity in the local all-start total-variation sense, real Borel `g`, stationary moment `π|g|^(2+δ+ε)<∞` for some `δ,ε>0`, the local state-dependent one-step minorization, and a strictly positive finite asymptotic standard deviation. It claims an extension carrying a standard Brownian motion and an almost-sure eventually uniform-in-integer-time error `O(n^(1/(2+δ)) log n)`. The item has a proof-status paragraph, not a proof. It does not restrict the initial law to stationarity; the intended consumer explicitly needs every initial law.

Put `p=2+δ` and `f=g−πg`. Preserve the full `p>2` range. In particular, `δ>2` is allowed and the claimed exponent is then less than `1/4`. An ordinary Skorokhod embedding followed by replacement of a random clock by its mean generally leaves a Brownian time-change error of order `n^(1/4)` up to logarithms. That argument does **not** prove this contract for `p>4`. Neither a martingale CLT nor the Skorokhod weak-convergence representation theorem supplies the missing coupling.

The rate is asserted in the cited literature, rather than being presented there as an open problem. Nevertheless, a full local proof has not been obtained here. **Subsequent full-source inspection shows that the cited Csáki–Csörgő route is restricted to `p≤4`; it does not establish the unrestricted Flegal–Jones/Bednorz–Łatuszyński assertion.** This is a confirmed citation/proof-route defect, not a demonstrated counterexample to the conclusion. The missing coupling package below is a substantive authoring obligation and cannot be replaced by references or an assertion that a coupling theorem is standard.

## Full texts actually inspected

1. **Flegal–Jones**, *Batch means and spectral variance estimators in Markov chain Monte Carlo*, arXiv:0811.1729, complete PDF retrieved from <https://arxiv.org/pdf/0811.1729>. Inspected the exact Assumption 3, Appendix A's SIP definition and Lemma 3 (PDF pp. 18–19), and bibliography. Lemma 3 states unrestricted `δ>0,ε>0`, moment `2+δ+ε`, and exponent `1/(2+δ)`. Its proof is explicitly delegated to Bednorz–Łatuszyński and Jones et al.; Appendix B is not a proof of that supplier. The definition preceding the lemma requires `0<σ_g<∞`.

2. **Bednorz–Łatuszyński**, *A few remarks on “Fixed-Width Output Analysis for Markov Chain Monte Carlo” by Jones et al.*, complete five-page author preprint dated February 27, 2007, retrieved and read throughout from <https://warwick.ac.uk/fac/sci/statistics/staff/academic-research/latuszynski/remarks2.pdf>. Bibliographic final version: JASA 102 (480), 1485–1486, DOI <https://doi.org/10.1198/016214507000000914>. The publisher PDF returned HTTP 403; the five-page author manuscript is the actual full text read. Lemma 2 and its complete proof (manuscript pp. 2–3) improve tour moments by Minkowski/Hölder. Lemma 3 (p. 4) states the exact Flegal–Jones rate for every `δ>0,ε>0`, but says only that modifications of the Jones proofs are straightforward. It does not prove the underlying strong approximation. Its condition (1) **requires `πs>0`**. Its positive-σ conclusion cannot literally include constant `g`; the current item's explicit nondegeneracy assumption is appropriate for its positive-variance branch.

3. **Jones–Haran–Caffo–Neath**, *Fixed-Width Output Analysis for Markov Chain Monte Carlo*, complete 2006 author preprint retrieved from <https://arxiv.org/pdf/math/0601446>. Inspected §2.1's split construction and tour definitions (PDF pp. 7–9), §3.2's Lemma 2 and complete proof (pp. 12–13), and all of Appendix A (pp. 24–26). Its Lemma 2(2) uses the older moment `4+δ`; its whole proof is “our Lemma 1 and Theorem 2.1 in Csáki and Csörgő (1995).” Appendix A proves a tour-moment inequality, while importing exponential regeneration from Hobert et al. (2002), Lemma 2. Condition (9) expressly requires `πs>0`.

4. **Csáki–Csörgő**, *On additive functionals of Markov chains*, J. Theor. Probab. 8 (1995), 905–919, DOI <https://doi.org/10.1007/BF02410117>. **The actual theorem and proof have not been read.** The apparent PDF at <https://link.springer.com/content/pdf/10.1007/BF02410117.pdf> resolves to a twelve-page PDF of the publisher's article-preview website, including abstract and references, not the fifteen-page article. The preview was inspected and correctly identified. OpenAlex's DOI record reports closed access and no repository full text. Consequently this note does not assert the exact hypotheses of Theorem 2.1, its internal coupling construction, or its treatment of `p>4`. The precise cross-reference to Theorem 2.1 is verified from Jones's full text; it is not a substitute for reading that theorem.

An author thesis at <https://arxiv.org/pdf/0907.4716> was also retrieved, but its full text was not read; no proof claim here is attributed to it. Temporary retrieved files live outside the repository under `/tmp/mcmc-sip-research/`.

5. **Merlevède–Rio**, *Strong approximation for additive functionals of geometrically ergodic Markov chains*, EJP 20 (2015), DOI <https://doi.org/10.1214/EJP.v20-3746>. The complete 28-page author manuscript is available at <https://hal.science/hal-01044508v1/file/MarkovKMT15julysubmitted.pdf>, retrieved as `/tmp/mcmc-sip-research/strong2015full.pdf`. Read the entire introduction and theorem statements (manuscript printed pp. 1–4), proof roadmap (pp. 5–6), and beginning of §2.3 (pp. 18–19). The intervening detailed Haar/Poisson calculations have been located but not fully checked, so this is not a claim of full-proof verification. Printed p. 2 explicitly states the Csáki–Csörgő SIP for `p∈(2,4]`; printed p. 3 says “this result has not been extended to the case p>4.” Its own Theorem 1.1 proves logarithmic approximation for **bounded** functions, using a multidimensional Zaitsev coupling and a new Brownian/Poisson construction. This is authoritative evidence that the bare Csáki–Csörgő citation does not supply the unrestricted `δ>2` claim.

6. **Banerjee–Vats**, *Multivariate strong invariance principles in Markov chain Monte Carlo*, EJS 18 (2024), DOI <https://doi.org/10.1214/24-EJS2257>, complete 31-page author manuscript at <https://arxiv.org/pdf/2211.06855>, retrieved as `/tmp/mcmc-sip-research/strong2024full.pdf`. Read the introduction, the rate in Theorem 1 and the geometric specialization. The introduction attributes to Csáki–Csörgő the rate `n^max{1/(2+δ),1/(2r),1/4) log n`, where `r` is the regeneration-time moment exponent; the geometric specialization retains `max{1/(2+δ),1/4}`. The work treats multistep minorization and wide-sense regeneration. Its full proof has not yet been independently checked here. It confirms the `1/4` limitation of that proof route; it does not show that a faster rate under the present assumptions is impossible.

The Csáki author page <https://users.renyi.hu/~csaki/> and complete preprints index <https://users.renyi.hu/~csaki/preprints.html> were inspected. The index begins with 1998-era work and supplies no link to the 1995 paper. The older `www.renyi.hu` host returned 403. Unpaywall's DOI record also reports no repository copy. Another source-recovery agent is investigating the original full text; no result from that investigation is assumed here.

7. **Bashtova–Shashkin**, *Strong Gaussian approximation for cumulative processes with heavy tails*, actual ten-page PDF <https://arxiv.org/pdf/2007.15481>, and its companion actual fifteen-page PDF <https://arxiv.org/pdf/2006.09583> were retrieved. In this branch, the heavy-tail definitions, Theorem 1 and the first joint/clock approximation steps on pp. 1–4 were read directly. Theorem 1 is stronger than the requested rate: iid **whole cycles**, with length and within-cycle maximum having finite `p`th moment for any `p>2`, imply uniform `o(t^(1/p))` Brownian approximation. Equation (6) invokes rather than proves the iid finite-moment vector coupling. The sibling-owned `research/bayesian-computational-statistics-62-owner-mcmc-clt-sip-source-recovery.md` records that agent's independent full reading of the complete heavy-tail proof and the companion's relevant lemmas, plus a checked eight-term calendar-time expansion. Its reading is distinguished from the direct partial reading in this branch. These later sources establish that the old cited-route limitation is not evidence of a false all-`p` rate at the iid regenerative-process level.

## Smallest substantive local supplier packages

### A. Split regeneration, exponential return, and occupation identity

For a useful **one-step** minorization an adequate supplier must construct regeneration times `T_0<T_1<…` with iid complete tours after the first regeneration, prove finite first regeneration from **every** initial state/law, prove an exponential stationary regeneration tail, and establish the occupation identity

`E_Q Σ_(i=0)^(L−1) h(X_i) = (E_Q L) πh`

for nonnegative measurable `h`. Here `Q` is the regeneration distribution and `L` is the integer tour length. In particular `μ=E_Q L∈(0,∞)` and `E_Q Z=0`, where `Z=Σ f` over a complete tour. The supplier must identify the regenerative asymptotic variance `v=E_Q Z²/μ` with the variance used in the item and its consumers; if the latter uses an absolutely convergent covariance series, that series and the identification require proof too.

For a supplied useful one-step split, positivity means `c=πs>0`. It implies `π≥cQ`: integrate `P(x,A)≥s(x)Q(A)` against `π`. Thus every nonnegative path functional has `E_Q H≤c^(−1)E_π H` by integrating its conditional expectation from the starting state. This domination is elementary and supplies the passage from stationary tour estimates to `Q`-started tours.

The present definition `def-state-dependent-one-step-minorization` permits `s≡0`. Flegal–Jones's literal Assumption 3 does too, but both underlying primary proof paths impose `πs>0`. This is a **proof-route mismatch**, not by itself a demonstrated counterexample to the SIP: the all-start geometric hypothesis may allow construction of another useful minorization, or an appropriate skeleton construction. That construction must actually be proved if the original statement is preserved. Do not silently use the supplied split with `s≡0`; no regeneration ever occurs for it. A skeleton route must additionally handle intervening rewards and its dependence structure, rather than pretending skeleton tours are independent one-step tours. In particular, the independently derived countably generated reduction and scalar renewal proof in `research/bayesian-computational-statistics-62-owner-mcmc-clt-geometric-envelope-proof.md` now supplies a concrete exponential-recurrence/occupation route for the skeleton atom. It should be reused, with both `f` and `M0` included in the stable sigma-field. Its proof does not by itself make the full original-time reward tours iid: after filling multistep bridges the tours are in general only one-dependent (wide-sense regeneration). A proof of B must handle this or establish a genuinely useful one-step split. This distinction does not affect the envelope argument itself.

A useful one-step split cannot be deduced from geometric ergodicity alone. For a concrete example take state space `[0,1]²`, invariant law the product of two uniform laws, and kernel `P((x,y),A)=∫_0^1 1_A(y,u)du`. Then `P²((x,y),·)=π` for every state, so the chain is uniformly geometrically ergodic in the exact local definition. But if `P((x,y),·)≥s(x,y)Q(·)` and `s(x,y)>0`, the probability `Q` must be supported on the vertical line `{y}×[0,1]`. Two different values of `y` have disjoint such lines, so the positive-`s` set is confined to one such line in the original state space; consequently `πs=0`. Thus the current contract really includes chains admitting no useful one-step minorization. It cannot be preserved by simply proving that some other one-step `πs>0` split exists. On this example the observations are exactly adjacent-iid functions `g(U_i,U_(i+1))`, exhibiting the dependence issue directly. This is a counterexample to that proposed auxiliary implication, **not** to the SIP.

After exponential stationary return is supplied, the precise moment needed for the strongest claimed exponent follows by the complete elementary argument in Bednorz–Łatuszyński. Let `H=Σ_(i=0)^(L−1)|f(X_i)|`, and assume `π|f|^(p+ε)<∞`. For finite truncated sums, Minkowski and Hölder give

`(E_π H^p)^(1/p) ≤ (π|f|^(p+ε))^(1/(p+ε)) Σ_(i≥0) P_π(L>i)^(ε/[p(p+ε)]) <∞`.

Pass through truncations by monotone convergence. An exponential tail makes the series finite for **every** `p>2`; domination by `cQ≤π` gives `E_Q H^p<∞`, and `|Z|≤H`. Likewise `E_Q exp(aL)<∞` for some `a>0`, hence every tour-length moment is finite. This proves the moment upgrade without imposing the older `4+δ` requirement. It does not construct the Brownian coupling.

### B. Deterministic-clock regenerative Brownian coupling for every p>2

The exact minimal interface is a proved local theorem for iid regenerative tours with integer lengths `L≥1`, `E exp(aL)<∞`, centered rewards `EZ=0`, and within-tour envelope `EH^p<∞`, with `p>2`. It must couple the **calendar-time reward process**, including its dependence between each tour's length and reward, to Brownian motion with variance `v=EZ²/EL`, at error `O(n^(1/p) log n)` almost surely. It must preserve the reward-path marginal and provide a conditional coupling kernel so the result can be lifted to the existing chain probability space.

It is acceptable to divide B into a finite-moment iid vector strong approximation and a fully proved regenerative calendar-time construction, but both proofs must be local. Merely invoking KMT, Sakhanenko, Csáki–Csörgő Theorem 2.1, or a strong-embedding theorem leaves the present obligation unresolved. Coupling the scalar tour rewards and then evaluating the approximating Brownian motion at the random number of tours is insufficient for the requested `p>4` rate; replacing that random count by `n/μ` has a square-root-of-clock-error cost. This is the central unresolved supplier.

Local inventory inspected: there is no item proving a Skorokhod **embedding**, KMT/Sakhanenko strong approximation, or this general-state regenerative SIP. `thm-skorokhod-representation-on-polish-spaces` is about representation of weak convergence, not embedding iid sums with a quantitative almost-sure rate. `thm-renewal-decomposition-at-successive-return-times` is proved but restricted to returns to a state in an at-most-countable chain; it supplies neither general split regeneration nor quantitative Brownian coupling. `lem-harris-geometric-ergodicity-has-integrable-rate-envelope` explicitly has `provenance.proof: not-supplied`, so it cannot be a proved route around A. The existing drift/minorization coupling lemmas run from a supplied drift to geometric convergence; reversing that implication without proof is invalid.

A second repository-wide content search for Komlós, Tusnády, Sakhanenko, Zaitsev, iid quantitative partial-sum coupling and Skorokhod embedding found no additional proved strong-approximation supplier. The later envelope proposal removes the specific analytic recurrence gap in A but does not provide B.

### The sharper coupling construction that must be authored for p>4

The Merlevède–Rio roadmap makes the core missing work precise. Write complete-tour pairs as `(L_k,Z_k)`, let `μ=EL`, let `a=Cov(L,Z)/Var L` when `Var L>0`, and orthogonalize `R_k=Z_k−a(L_k−μ)`. A two-dimensional iid approximation must couple the partial sums of `(L_k−μ,R_k)` to two independent Brownian motions; the independence follows from the diagonalized Gaussian covariance and is essential. A Poisson clock can then be coupled to the first Brownian motion. One must next construct a new Brownian motion, **independent of the Poisson clock**, which approximates the second Brownian motion evaluated at Poisson times. Replacing the clock by its mean is exactly the step that fails at exponent `1/4`; the independent Brownian/Poisson construction replaces that step. Merlevède–Rio's §2.2 is the substantive Haar construction, not a consequence of Brownian scaling alone. Finally an inverse-Poisson approximation provides the other independent Brownian component and their sum has the required variance.

For bounded `f`, the paper uses Zaitsev's exponential-moment iid vector theorem, the scalar KMT theorem twice, and its own detailed Brownian/Poisson construction. Those invoked iid theorems have no proved local suppliers. For the present unbounded `f`, one additionally needs a finite-`(p+ε)`-moment vector version and a moving-window reward estimate; the bounded proof's deterministic bound `|S_t−S_s|≤||f||∞|t−s|` is unavailable. Simply replacing Zaitsev by an unproved finite-moment citation is not a complete proof proposal. This identifies concrete further proof work rather than disguising the scalar random-clock error.

### A complete moving-window lemma for the unbounded extension

The missing moving-window step above can be supplied locally as follows. Let `p>2`, let `q>p`, and let centered iid real rewards `Z_i` satisfy `E|Z_1|^q<∞`. Fix constants `A,d<∞` and put `r_N=ceil(A N^(1/p)(log N)^d)`. Then, almost surely,

`max_(0≤i<j≤N, j−i≤r_N) |Σ_(k=i+1)^j Z_k| = o(N^(1/p))`.

The same conclusion holds for identically distributed one-dependent rewards; split each interval into its even and odd subsequences and apply the independent argument to each.

Here is a full proof of the independent assertion. Choose `q'` strictly between `p` and `q`, set `b_N=N^(1/q')`, and first take only dyadic `N=2^m`. The union bound and Markov give

`P(max_(k≤N)|Z_k|>b_N) ≤ N E|Z_1|^q / b_N^q = C N^(1−q/q')`.

The series over dyadic `N` is finite because `q/q'>1`. Thus eventually no truncation is needed among the first `N` rewards. Put `V_(N,k)=Z_k 1_(|Z_k|≤b_N)−E[Z_1 1_(|Z_1|≤b_N)]`. These are independent, centered, bounded by `2b_N`, and have variance at most `EZ_1²`. For any centered variable `V` with `|V|≤K`, expanding its exponential and using `E|V|^j≤K^(j−2)EV²` for `j≥2` gives, for `0<t<3/K`,

`E exp(tV) ≤ exp(t² EV²/[2(1−tK/3)])`.

Indeed `j!≥2·3^(j−2)` for `j≥2`, so the terms of order at least two are bounded by the displayed geometric series. Multiplying these bounds over any interval of at most `r_N` indices, applying Markov's inequality and optimizing with `t=x/(r_N EZ_1²+Kx/3)` yields the two-sided Bernstein bound

`P(|Σ V_(N,k)|>x) ≤ 2 exp(−x²/[2(r_N EZ_1²+2b_N x/3)])`.

If `EZ_1²=0`, all rewards are zero almost surely and the conclusion is immediate. Otherwise take `x_N=C0(sqrt(r_N log N)+b_N log N)`. By increasing `C0` depending only on `EZ_1²`, the last probability is at most `2N^(−5)`: this follows by comparing separately the two terms in the denominator with `x_N²/log N`. There are at most `N²` intervals, so the union-bound failure probability is at most `2N^(−3)`, summable on dyadic `N`. Borel–Cantelli proves the simultaneous interval bound eventually almost surely.

Since `EZ_1=0`, the discarded mean satisfies

`|E[Z_1 1_(|Z_1|≤b_N)]| = |E[Z_1 1_(|Z_1|>b_N)]| ≤ b_N^(1−q) E|Z_1|^q`.

Its total contribution over an admissible interval is bounded by `r_N b_N^(1−q) E|Z_1|^q=o(N^(1/p))`. Also `sqrt(r_N log N)=o(N^(1/p))` and `b_N log N=o(N^(1/p))` because `q'>p`. On the almost-sure eventual no-truncation event, these facts prove the claimed dyadic bound. For arbitrary integer `n`, embed its intervals in the next dyadic `N<2n`; `r_n≤C r_N` after increasing `A` by a constant depending on `p,d`, and `N^(1/p)≤2^(1/p)n^(1/p)`. The dyadic conclusion therefore gives the full assertion. For one-dependent sequences the even variables are jointly independent and so are the odd variables; each component interval has no more terms than the original interval, so the two independent bounds apply and add.

If full tours have integer lengths at least one and iid (or one-dependent) centered rewards `Z_i`, with tour envelopes `H_i` satisfying `EH_i^q<∞`, this gives a calendar-time reward modulus at the same scale. Up to calendar time `N`, at most `N` complete tours occur. Any calendar interval of length at most `r_N` crosses at most `r_N+2` complete/partial tours. Its full-tour rewards form a contiguous interval as above, and its two endpoint pieces are bounded by `2 max_(i≤N+2)H_i`. The latter is `o(N^(1/p))`: the preceding dyadic truncation argument, or the direct `q`-moment Borel–Cantelli tail sum, proves this because `q>p`. Hence the supremum of centered reward increments over these calendar intervals is `o(N^(1/p))`. A finite delayed initial tour contributes only a finite random constant. No bounded-`f` assumption is needed for this step.

This lemma repairs that specific obstacle to extending the Poisson-clock proof to finite moments. It does not prove the quantitative iid vector coupling or the independent Brownian/Poisson construction.

### Independent Brownian/Poisson composition: a local logarithmic-power construction

The Brownian/Poisson part can also be proved locally at an error sufficient here, without the sharper logarithmic tail inequality in Merlevède–Rio. The following is an independently derived proof; its purpose is to replace that particular deep citation, not the iid strong approximation.

**Lemma.** Let `λ>0`. On a space carrying a rate-`λ` Poisson process `N` and an independent standard Brownian motion `B`, one can adjoin a standard Brownian motion `W`, independent of `N`, such that

`sup_(0≤t≤n) |B(t)−λ^(−1/2)W(N(t))| = O((log(n+2))²)` almost surely.

All uses below of Gaussian tails and Brownian bridges follow directly from the finite-dimensional Gaussian covariance and reflection bound. The Poisson concentration estimate follows by the displayed elementary moment generating function, so no KMT theorem is used in this lemma.

**Construction.** Partition the positive time axis into the deterministic macrointervals `[0,1]`, `[1,2]`, `[2,4]`, `[4,8]`, and so on. On each macrointerval `I=[a,a+D]`, where `D` is a power of two, extract the normalized root increment `G_I=(B(a+D)−B(a))/sqrt(D)`. For every dyadic subinterval `J=[b,b+d]⊆I` of length `d≥2`, extract the normalized midpoint-bridge coefficient

`G_J=2(B(b+d/2)−[B(b)+B(b+d)]/2)/sqrt(d)`.

The root and bridge coefficients over the disjoint macrointervals form an iid standard normal family, independent of `N`: their pairwise covariances are zero by direct calculation from `Cov(B(s),B(t))=min(s,t)`, and every finite family is jointly Gaussian. The root symbol and the bridge symbol at a macrointerval designate two different coefficients.

Write `C_J=N(b+d)−N(b)` and `C_(J,L)=N(b+d/2)−N(b)`, `C_(J,R)=C_J−C_(J,L)`. Prescribe the root `W` increment over `[N(a),N(a+D)]` to be `sqrt(C_I)G_I`. Recursively, given endpoint values of `W` for `J`, prescribe its value at `N(b+d/2)` by linear interpolation in the **Poisson-count coordinate**, plus

`sqrt(C_(J,L) C_(J,R)/C_J) G_J`

when `C_J>0`. When one child count is zero this formula gives the already prescribed endpoint; when `C_J=0` both endpoints coincide and no new coefficient is used. Continue to deterministic unit leaves. Between the resulting `W` values at successive distinct integer Poisson counts, fill with independent standard Brownian bridges, using new Gaussian randomness. This also fills all intervals between macrointerval endpoints; since `N(t)→∞` almost surely, it constructs `W` on the whole nonnegative axis. A null exceptional Poisson path may be assigned any auxiliary Brownian path.

Conditional on the entire `N` path, this is the ordinary Gaussian bridge construction on a deterministic increasing set of times: the root increments are independent centered Gaussians with variances equal to their count lengths, and each recursive split has exactly the conditional mean and variance of Brownian motion at that split. Degenerate zero-length splits add no random variable. The additional bridges have the usual independent conditional laws. Induction identifies the Brownian finite-dimensional distributions on every finite stage; Gaussian bridge continuity gives the full continuous process. Consequently the conditional law of `W` given `N` is the same standard Brownian law on every Poisson path outside a null set. This proves both that `W` is standard Brownian and that `W` is independent of `N`. The construction does not claim that `B` and `W` are independent.

**Uniform count estimates.** The elementary identity

`E exp(t(N(v)−N(u)−λ(v−u)))=exp(λ(v−u)(exp(t)−1−t))`

and its version for negative `t` imply, by Chernoff and the power-series estimate used for Bernstein above,

`P(|N(v)−N(u)−λ(v−u)|>x) ≤2 exp(−c_λ min{x²/(v−u),x})`

for integer endpoints `0≤u<v`. The constant can depend on `λ`; the variance-zero interval is treated directly. On dyadic horizons `n=2^m`, choose `x=K(sqrt((v−u)log(n+2))+log(n+2))`. Taking `K` large makes this probability at most `2n^(−6)`. There are at most `(n+1)²` integer intervals. A union bound and Borel–Cantelli show that, almost surely eventually, this estimate holds simultaneously for every integer interval inside `[0,n]`. Increase a fixed constant to cover the finitely many initial horizons.

In particular, for every dyadic cell of length `d≥A log(n+2)`, where `A` is a sufficiently large fixed constant depending on `λ,K`, its two child counts lie in `[λd/4,3λd/4]`. Its total count is comparable to `λd`. For a prefix of such a cell of length `x`, its normalized count differs from `x/d` by at most `C sqrt(log(n+2)/d)`. These assertions follow from the simultaneous interval bound, using `log(n+2)/d≤A^(−1)` and choosing `A` so the relative error is at most `1/4` on each half.

**Comparison of coefficients.** On a macrointerval consider an integer `j` and follow its chain of dyadic ancestors, stopping when the cell length lies between `A log(n+2)` and `2A log(n+2)`; if the macrointerval is shorter, stop immediately. Expand the piecewise-linear conditional mean of `B(j)−B(a)` in the shared root and midpoint Gaussian coefficients. Expand the conditional mean of `λ^(−1/2)(W(N(j))−W(N(a)))` using exactly the same coefficients, with interpolation fractions in count coordinates.

For a cell of length `d`, write `x=(j−b)/d`, `α=C_(J,L)/(λd)`, `β=C_(J,R)/(λd)`, and `z=(N(j)−N(b))/(λd)`. If `j` is in the left half, its coefficient multiplying the cell's shared midpoint normal is `sqrt(d)x` for `B` and

`sqrt(d) z sqrt(β/[α(α+β)])`

for the scaled `W`. For the right half replace `x,z,α,β` by `1−x,α+β−z,β,α`. On the compact region `α,β∈[1/4,3/4]`, `0≤z≤2`, the function `z sqrt(β/[α(α+β)])` has bounded first derivatives. At `α=β=1/2,z=x` it equals `x`. The count estimates and the mean-value inequality therefore bound the difference of these coefficients by `C sqrt(log(n+2))`. The root coefficients are `sqrt(D)x` and `sqrt(D)z/sqrt(α+β)`; the same calculation bounds their difference by `C sqrt(log(n+2))`. These explicit formulas establish the comparison without a hidden orthogonal-coupling assertion.

There are at most `2n` relevant root/midpoint Gaussian coefficients on `[0,n]`. Their Gaussian tails and the union bound show, on dyadic horizons and hence almost surely eventually, that their maximum absolute value is at most `C sqrt(log(n+2))`. Each coefficient discrepancy consequently contributes at most `C log(n+2)`, and each ancestor chain has at most `C log(n+2)` terms.

**Residual pieces and macrointerval prefixes.** A stopped leaf has deterministic length at most `2A log(n+2)` and total Poisson count at most `C log(n+2)`, by the uniform count estimate. The `B` deviation from its linear interpolant inside any such leaf is bounded by twice the Brownian increment supremum over that leaf. Reflection and a union bound over at most `n` leaves bound all of these by `C log(n+2)` almost surely eventually. Conditional on `N`, the corresponding `W` bridges have time lengths at most `C log(n+2)`. The same reflection/union-bound estimate, uniform over the permissible `N` paths, bounds their suprema by `C log(n+2)`; integrating the conditional probability and applying Borel–Cantelli justifies this despite the dependence between `B` and `W`.

The increment error across a whole large macrointerval uses only its root coefficient: `|sqrt(D)−sqrt(C_I/λ)||G_I|≤C log(n+2)`. Small macrointervals of length at most `2A log(n+2)` have both Brownian suprema bounded by the residual argument, and there are only `O(log log(n+2))` of them. To compare from time zero to any integer `j≤n`, add the root errors over the `O(log(n+2))` completed macrointervals, then the ancestor-chain and leaf error in the last macrointerval. The total is `O((log(n+2))²)`. For real `t∈[j,j+1]`, the additional `B` increment is uniformly `O(sqrt(log(n+2)))` by reflection/union bound. The count increase `N(j+1)−N(j)` is at most `C log(n+2)` by the count estimate; conditional on `N`, reflection/union bound controls the `W` increment supremum over each such count interval by `C log(n+2)`. Thus the same estimate holds uniformly in real `t`. Enlarging to the next dyadic horizon proves the assertion for every integer horizon `n` and hence every real horizon.

This proves the stated composition lemma with a continuous Brownian `W` independent of the Poisson clock. Its weaker logarithmic-power rate is negligible against every fixed positive power `n^(1/p)`, so the sharper Merlevède–Rio exponential tail theorem is unnecessary for the almost-sure rate under investigation. The quantitative iid vector approximation is still not proved by this construction.

The independence assertion has a useful stronger form: if `B` is independent of an entire clock environment `E` containing `N`, then the constructed `W` is independent of `E`. Conditional on `E`, the construction uses iid Gaussian Haar coefficients with their unchanged law and its deterministic transform depends only on `N`; the resulting conditional Brownian law is constant. This permits independent addition of the Brownian motion used to approximate inverse Poisson times.

### Poisson and inverse-clock steps reduce to the same iid supplier

One does not need to author a separate general inverse-renewal strong approximation if the iid quantitative coupling is proved. Here is the exact reduction. Continue with iid complete-tour lengths `L≥1`, mean `μ`, variance `s²>0`, centered tour rewards `Z`, regression coefficient `a=Cov(L,Z)/s²`, and residual standard deviation `v`. Suppose the pending iid supplier yields independent Brownian motions `B,B0` such that, for `D_n=n^(1/p)log(n+2)`,

`max_(k≤n)|Σ_(i≤k)Z_i−a(T_k−μk)−vB(k)|=O(D_n)`,

`max_(k≤n)|T_k−μk−sB0(k)|=O(D_n)`.

Put `γ=s²/μ` and `λ=μ²/s²`, so `λγ=μ` and `γsqrt(λ)=s`. Apply the **scalar case of that same pending iid theorem**, now to centered iid Poisson(`λ`) increments. They have moments of every order. Choose an exponent `r>p`, couple their partial sums to the already present Gaussian increments of `B0` using the regular conditional kernel of the iid increments given their approximating Gaussian increments, and add within-unit Poisson bridges using the conditional uniform order-statistic law. This gives a rate-`λ` Poisson process `N` such that

`sup_(u≤n)|γN(u)−μu−sB0(u)|=O(n^(1/r)log(n+2))`.

For real `u`, the extra within-unit Poisson counts are `O(log(n+2))` uniformly almost surely, by the Chernoff estimate already proved, and the within-unit Brownian oscillations are `O(sqrt(log(n+2)))`; thus integer-time coupling suffices. Constructing the conditional kernel from Gaussian increments alone ensures that `B` is independent of the entire pair `(N,B0)`. In particular,

`max_(k≤n)|T_k−γN(k)|=O(D_n)`.

Now compare inverses directly. Let `m(u)=max{k:T_k≤u}` and `y(u)=inf{t:N(t)>u/γ}`. The strong laws give `m(u),y(u)=O(u)` almost surely. On dyadic horizons and for every fixed constant `C>0`, the simultaneous Poisson concentration bound above implies that every integer interval inside `[0,Cn]` of length at least `D_n` has count increase at least `(λ/2)` times its length, eventually almost surely. The same holds for each positive integer `C`, hence simultaneously for all such `C`. Because the random constant in `|T_k−γN(k)|≤K D_n` is finite, choose a finite random integer `J` with `γλJ/2>2K+2γλ`; the simultaneous assertions for all deterministic integer `J` allow its use without independence assumptions. For `k=floor(y(u))`, monotonicity and the strict-inverse convention imply `γN(k)≤u` and `γN(k+1)>u`, apart from possible equality at an integer arrival time, when these inequalities hold after shifting one further integer. A harmless extra shift of two indices covers every convention. Increasing/decreasing `k` by `J D_n+2` changes `γN(k)` by more than `2K D_n`; the approximation of `T_k` then brackets its crossing of `u`. At the lower endpoint use index zero when necessary. Thus

`sup_(u≤n)|m(u)−y(u)|=O(D_n)`.

This is an elementary monotone inverse comparison with a Poisson lower-increment bound; it does not import the Csörgő–Horváth–Steinebach inverse theorem.

Finally the interarrival times `E_i` of `N` are iid exponential(`λ`). Apply the scalar iid supplier with some `r>p` to their sums, preserving `N` by its conditional Gaussian kernel and taking auxiliary randomness independent of `B`. It produces a Brownian motion `V` with

`max_(k≤n)|Σ_(i≤k)E_i−k/λ−V(k)/λ|=O(n^(1/r)log(n+2))`.

The exact identity `y(u)=Σ_(i≤floor(u/γ)+1)E_i`, deterministic rescaling `V(u/γ)=γ^(−1/2)V1(u)` with `V1` standard Brownian, and uniform within-unit Gaussian oscillations give

`sup_(u≤n)|y(u)−u/μ−V1(u)/(λsqrt(γ))|=O(n^(1/r)log(n+2)+sqrt(log(n+2)))=o(D_n)`.

Let the clock environment contain `(N,B0,V1)` and all its auxiliary variables. The Haar composition construction, applied to its independent `B`, gives a Brownian `W*` independent of that whole environment. In particular `W*` and `V1` are independent, exactly as required for the variance calculation in the sibling source-recovery note's eight-term identity. The moving-window lemma and elementary Brownian short-window estimates handle the remaining `O(D_n)` shifts without changing the target `O(D_n)` error.

Therefore, for genuine iid full tours, **one substantive quantitative supplier suffices** after the local constructions here: a finite-moment iid vector strong approximation with spare moment. Its scalar special cases supply both Poisson and exponential-arrival approximations. The other unresolved chain-specific task is constructing the correct full-tour structure when only a skeleton minorization is available. This reduction does not pretend to have proved the iid supplier.

Useful already-proved infrastructure exists: `thm-ionescu-tulcea-construction-of-a-markov-chain`, discrete strong Markov, regular conditional distribution and standard-Borel factorization suppliers, Brownian existence/strong Markov/scaling, ordinary iid strong laws, and Borel–Cantelli. These can support constructions in A and B, but none contains their substantive missing assertions.

## Complete conditional closure of the zero-variance boundary

This boundary does not require package B. Suppose package A and the tour-moment argument above have been proved, and the variance has been identified as `v=EZ²/μ`. If `v=0`, then `EZ²=0`, so `Z=0` almost surely. There are countably many iid complete tours, so every complete tour reward is zero simultaneously almost surely.

For iid envelopes `H_k` with `EH_1^p<∞` and each `η>0`,

`Σ_(k≥1) P(H_k>η k^(1/p)) = Σ_(k≥1) P(H_1^p>η^p k) ≤ η^(−p) EH_1^p <∞`.

Borel–Cantelli, applied to rational `η>0`, gives `H_k=o(k^(1/p))` almost surely. This implies `max_(k≤n+1) H_k=o(n^(1/p))`: split at a finite random index beyond which `H_k≤ηk^(1/p)`, divide the finite initial maximum by `n^(1/p)`, then let `η↓0`.

Since `L_k≥1`, at calendar time `n` at most `n` full tours have elapsed. The centered sum over all completed tours is zero, and the unfinished tour contributes at most `H_(N(n)+1)`. Consequently a regeneration-started chain satisfies

`max_(j≤n)|Σ_(i≤j) f(X_i)| = o(n^(1/p))` almost surely.

The finite delayed first tour contributes a finite random constant, so the same result holds from every initial law for which package A establishes a finite first regeneration. A real-valued `g` has finite sum along that finite initial segment, with no initial-law moment assumption. Adjoin an independent standard Brownian motion and multiply it by `σ=0`. The SIP inequality then holds with zero Brownian coefficient, at the requested `O(n^(1/p) log n)` rate (indeed a stronger little-o rate). This is a valid **conditional** proof, with all remaining substantive dependency on A made explicit. It is not permission to claim that A has been authored.

There is also an elementary zero-variance lemma for the adjacent-iid representation that often arises from a multistep bridge construction. Suppose `U_i` are iid and centered cycle rewards have the form `Z_i=h(U_i,U_(i+1))`, with `E|Z_i|^q<∞`, `q>p`. Define `a(u)=E h(u,U)`, `b(v)=E h(U,v)`, and `c(u,v)=h(u,v)−a(u)−b(v)`. Conditional Jensen gives all three finite `q` moments. Both conditional means of `c` vanish. Orthogonality then gives

`lim_(n→∞) n^(−1)Var(Σ_(i=1)^n Z_i)=E(a(U)+b(U))²+E c(U,V)²`.

To check the formula, expand `ΣZ_i=a(U_1)+b(U_(n+1))+Σ_(i=2)^n(a(U_i)+b(U_i))+Σ_(i=1)^n c(U_i,U_(i+1))`. Different `a+b` terms are independent; each `c` is orthogonal to every single-coordinate function by its vanishing conditional means; adjacent `c` terms have zero covariance after conditioning on their shared coordinate, and nonadjacent ones are independent. The endpoint variances are finite constants, so dividing their contribution by `n` proves the identity. If the asymptotic variance is zero, both nonnegative terms vanish. Thus `c=0` and `b=−a` almost surely, giving `Z_i=a(U_i)−a(U_(i+1))` simultaneously for all `i`. Complete-cycle sums telescope. Their uniform maximum up to cycle `n` is bounded by `2 max_(i≤n+1)|a(U_i)|=o(n^(1/q))`, by the same moment/Borel–Cantelli argument. Adding the two partial-cycle envelopes gives the zero-variance SIP rate. This proves the boundary **conditional on a proved adjacent-iid cycle representation and correct variance identification**; it does not assert that every abstract one-dependent sequence has that representation or that the skeleton bridge construction has already been supplied.

## Exact any-initial-law transfer once regeneration-start coupling exists

No moment of the initial delay is needed. Let `T<∞` almost surely be the first regeneration and let `A` be the finite centered reward before it. The future reward path after `T` has the regeneration-start law independently of the pre-regeneration history. Couple that future path to the Brownian motion `W` furnished by package B using the conditional kernel of `W` given the real reward path. Standard-Borel regular conditional distribution/factorization gives such a kernel: the observable path lies in `R^N` and Brownian motion lies in `C([0,∞))`. Pulling this kernel back along the actual observable path realizes the coupling on an extension while preserving the original chain. In this realization the pair (future reward path, `W`) is independent of the initial history and `T`.

Adjoin a further independent standard Brownian motion `U`. Define

`B(t)=U(t)` for `t≤T`, and `B(t)=U(T)+W(t−T)` for `t>T`.

Conditional on `T=m`, this is concatenation of independent Brownian motions at the deterministic time `m`, so it has standard Brownian law. Averaging over the integer `T` proves the same unconditionally. For all integers `n>T`,

`S_n−σB(n) = A−σU(T) + [S'_(n−T)−σW(n−T)]`.

The first term is a finite random constant and the second is `O((n−T)^(1/p) log(n−T))`, hence `O(n^(1/p) log n)`. This transfer loses neither rate nor moment range. It avoids an unproved Brownian modulus estimate for a random time shift. The only nontrivial chain-specific prerequisite remains the finite independent regeneration in A; an arbitrary measurable original state space creates no additional regular-conditional-law problem because the coupled observable and Brownian paths are standard Borel.

## Integration disposition

The statement should retain its full moment/rate and intended any-initial-law scope. The positive-variance clause can remain on its current theorem while the zero-variance lemma above is authored separately, or a single strengthened SIP can explicitly allow `σ=0` after the regenerative variance identification is proved. No narrowing to `δ≤2`, stationarity, a `4+δ` moment, or an unproved externally cited SIP is justified as closure.

Before any acceptance: integrate and review the now-available stationary exponential-return/occupation construction, prove the correct original-step reward-cycle representation, and author the quantitative iid coupling (and any one-dependent extension actually needed) against proved local infrastructure. Independently review the new Haar/Poisson and inverse-clock constructions in this note, then place the elementary moment, delay-transfer, and zero-variance arguments after their actual suppliers. Obtaining the original Csáki–Csörgő text remains useful for precise historical attribution, but that theorem has no arbitrary-`p>4` part according to the directly inspected later source; it cannot alone close the retained rate. Until the substantive coupling obligations are proved locally, the SIP and its logical OBM consumer remain blocked on missing local authoring. No mathematical counterexample to the nondegenerate SIP at the stated unrestricted rate has been established in this investigation; the inability of the naive time-change argument to prove it is not such a counterexample.
