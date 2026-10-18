# Stationary ergodic rate-distortion: local proof notes

Status: the finite-alphabet, bounded-distortion operational theorem is proved below, conditional only on the finite-alphabet stationary-ergodic Shannon–McMillan–Breiman (SMB) theorem stated in the proof interface. This note proves the finite-block limit, the missing stationary-ergodic process approximation (including random phase handling), the random-code achievability, the converse, and the endpoint continuity needed by the operational definitions. It is research evidence, not a production library supplier. The local library still lacks an authored finite-alphabet SMB item; this is an upstream authoring dependency, not a claim that the RDF proof is accepted by citation.

The principal sources actually read by r1 are Robert M. Gray, *Entropy and Information Theory*, corrected first edition (2023), §3.2, Lemma 3.2.1 (stationary-ergodic finite-alphabet SMB; PDF pp. 73–80, printed pp. 51–58), §10.6 (block/process RDF and stationary-block-memoryless approximation; printed pp. 209–218), and §9.4, especially Example 9.4.11 (randomized blocking). The omitted process-approximation proof is not attributed to Gray: it is supplied locally below. Robert M. Gray, *Source Coding Theory*, first edition (1990), §§3.2–3.4 (PDF pp. 66–81, printed pp. 54–69), supplies the operational block-code setup, converse interface, and the random-code argument; §3.4 explicitly states its process-approximation premise without proof. Lane source identity and actual read extents are recorded in `source-manifest.json` and `reading-ledger.json`.

## Model and endpoint conventions

Let `A` and `B` be nonempty finite source and reproduction alphabets, let `X=(X_i)_{i≥0}` have a stationary ergodic law `μ` on `A^N`, and let `d:A×B→[0,d_max]` be a bounded single-letter distortion. Logs and rates are base two. Put

$$d_n(x^n,y^n)=\frac1n\sum_{i=0}^{n-1}d(x_i,y_i),\qquad D_{\min}=\mathbb E_\mu\min_{b\in B}d(X_0,b),\qquad D_{\max}=\min_{b\in B}\mathbb E_\mu d(X_0,b).$$

For `D≥D_min`, define

$$R_n(D)=\min_{W_n:\,\mathbb E d_n(X^n,Y^n)\le D} I(X^n;Y^n),\qquad R(D)=\lim_{n\to\infty}\frac1nR_n(D).$$

Here `W_n` ranges over all stochastic matrices from the supported source words `A^n_+={x^n:μ_n(x^n)>0}` to `B^n`; values on null source words are immaterial. Put `R_n(D)=R(D)=+∞` for `D<D_min`. This convention makes the feasible support exactly `[D_min,∞)`: coordinatewise, `d(X_i,Y_i)≥min_b d(X_i,b)`, and stationarity gives expected block distortion at least `D_min`; the fixed selector `b_*(a)∈argmin_b d(a,b)` attains it. The minimum in `R_n` is attained: the channel simplex is compact, the expected distortion constraint is closed and nonempty for `D≥D_min`, and finite-alphabet mutual information is continuous. The selector also gives `R_n(D_min)≤n log|A|`. A constant reproduction letter minimizing expected distortion gives `R_n(D)=0` for `D≥D_max`; hence `R(D)=0` there. No assertion that `R(D)>0` on `(D_min,D_max)` is valid for every stationary ergodic source.

The expected-distortion operational rate is the infimum of `limsup_n n^{-1}log M_n` over deterministic length-`n` fixed-rate codes with `limsup_n E d_n(X^n,\hat X^n)≤D`. The excess-distortion convention used here is convergence in probability with slack: for every `ε>0`, `P(d_n(X^n,\hat X^n)>D+ε)→0`. It is not the stronger exact-threshold assertion `P(d_n>D)→0` at every endpoint.

## Finite-block limit, convexity, and right continuity

For every fixed `D≥D_min`, `R_n(D)` is finite, nonnegative, and nonincreasing in `D`. It is convex: if channels `W_1,W_2` have expected distortions at most `D_1,D_2`, their pointwise mixture `λW_1+(1−λ)W_2` has distortion at most `λD_1+(1−λ)D_2`, and finite-alphabet log-sum convexity gives

$$I_{\lambda W_1+(1-\lambda)W_2}(X^n;Y^n)\le\lambda I_{W_1}(X^n;Y^n)+(1-\lambda)I_{W_2}(X^n;Y^n).$$

Taking minimizers proves the convexity inequality for `R_n`.

The sequence `a_n=R_n(D)` is subadditive even when source blocks are dependent. To see this, use an `n`-block optimizer and an `m`-block optimizer as conditionally independent channels on the first and second portions of an `(n+m)`-block. Stationarity gives the second input block law `μ_m`, and the weighted expected distortion remains at most `D`. Writing the two reproduction blocks as `Y_1,Y_2`, conditional independence given the whole input gives

$$I(X^{n+m};Y_1,Y_2)=H(Y_1,Y_2)-H(Y_1,Y_2\mid X^{n+m})\le I(X^n;Y_1)+I(X_{n}^{n+m-1};Y_2)\le R_n(D)+R_m(D).$$

The first inequality uses only `H(Y_1,Y_2)≤H(Y_1)+H(Y_2)` and the product form of the test channel; it does not assume that `X^n` and `X_n^{n+m-1}` are independent. To see the limit directly, fix `k` and write `n=qk+s`, `0≤s<k`, with `a_0=0`. Repeated subadditivity gives `a_n≤q a_k+a_s`; the finitely many `a_s` are bounded, so `limsup_n a_n/n≤a_k/k`. Taking the infimum over `k`, while `a_n/n≥inf_k a_k/k` for every `n`, proves

$$R(D)=\lim_{n\to\infty}n^{-1}R_n(D)=\inf_{n\ge1}n^{-1}R_n(D),\qquad D\ge D_{\min}.$$

The pointwise limit of the convex functions `R_n(D)/n` is convex and nonincreasing. It is finite on `[D_min,∞)`, so it is continuous at every interior point of that interval. Right continuity at `D_min`, which convexity alone does not imply, follows as follows. If every pair `(a,b)` with `μ(X_0=a)>0` has `d(a,b)=min_c d(a,c)`, then `D_min=D_max` and `R` is identically zero on its feasible domain. Otherwise the finite set of positive gaps

$$d(a,b)-\min_c d(a,c),\quad μ(X_0=a)>0,$$

has a positive minimum `γ`. For a channel of average distortion at most `D_min+ε`, write `J_i=1{d(X_i,Y_i)>min_b d(X_i,b)}`. Then `n^{-1}Σ_i P(J_i=1)≤ε/γ`. Replace `Y_i` by `b_*(X_i)` whenever `J_i=1`, leaving it unchanged otherwise. The new channel has distortion exactly `D_min`, and

$$I(X^n;Y'^n)\le I(X^n;Y^n,J^n)+\mathbb E|J^n|\log|B|\le I(X^n;Y^n)+H(J^n)+\mathbb E|J^n|\log|B|\le I(X^n;Y^n)+n\bigl(h_2(ε/γ)+(ε/γ)\log|B|\bigr)$$

when `ε/γ≤1/2`. To prove the information bound, define a correction vector `V^n` by `V_i=b_*(X_i)` when `J_i=1` and a fixed dummy symbol otherwise. Then `Y'^n` is a deterministic function of `(Y^n,J^n,V^n)`, and

$$I(X^n;Y'^n)\le I(X^n;Y^n,J^n,V^n)\le I(X^n;Y^n)+H(J^n)+H(V^n\mid J^n).$$

Entropy subadditivity, concavity and monotonicity of binary entropy on `[0,1/2]` give `H(J^n)≤n h_2(ε/γ)`. Since `V_i` is fixed when `J_i=0` and takes at most `|B|` values when `J_i=1`, `H(V^n|J^n)≤E|J^n|log|B|≤n(ε/γ)log|B|`. Apply this to a minimizer at `D_min+ε`, divide by `n`, and take the established limits. It follows that

$$0\le R(D_{\min})-R(D_{\min}+ε)\le h_2(ε/γ)+(ε/γ)\log|B|\longrightarrow0.$$

Thus `R` is right-continuous on its entire feasible domain, including the lower endpoint. At and above `D_max`, it is zero.

## Locally proved stationary-ergodic process approximation

**Claim.** For each `D≥D_min` and each `r>R(D)`, there is a stationary ergodic finite-alphabet pair process `(X_i,Y_i)_{i∈Z}` whose source marginal is the two-sided stationary extension of `μ`, with

$$\mathbb E d(X_0,Y_0)\le D,\qquad \bar I(X;Y):=\lim_{n\to\infty}\frac1n I(X_0^{n-1};Y_0^{n-1})<r.$$

**Choice of a finite-block channel.** Since `R(D)=inf_k R_k(D)/k`, choose `k` with `I_k/k<r`, where `W_k` attains `R_k(D)` and `I_k=I(X_0^{k-1};Y_0^{k-1})` under `μ_kW_k`. The source blocks in this formula need not be independent. Choose `p∈(0,1)` so small that

$$\frac{I_k}{k}+(k-1)p\log|B|<r.$$

When `|B|=1`, the second term is zero and any `p` works.

**Two-sided source and independent cuts.** Under AC, the consistent stationary finite-window laws of `μ` define a two-sided stationary law on `A^Z` by the repository's published countable-coordinate Kolmogorov extension theorem. It is ergodic: an invariant event can be approximated in measure by a finite-coordinate cylinder, shifted into nonnegative coordinates using invariance, and hence represented modulo null sets by a one-sided event invariant modulo null sets; one-sided ergodicity gives probability zero or one. This extension step changes no finite-block source law. AC also supplies the two-sided iid auxiliary product below, in accord with the repository's probability-product conventions.

Independently take a two-sided iid process `Z_i=(C_i,U_i)`, where `C_i` is Bernoulli(`p`) and `U_i` is uniform on `[0,1)`. Its shift is strongly mixing: finite-coordinate cylinder events become independent once sufficiently separated, and cylinder approximation extends this to all measurable events. Here is a direct proof that its product with the ergodic source is ergodic, so no general product-ergodicity theorem is left implicit. Let `g` be a bounded, centered function of auxiliary coordinates in `[-L,L]`, and let `f` be a bounded source function. For shifts separated by more than `2L`, the two auxiliary cylinder functions are independent, so their centered correlation is zero. Expanding the squared norm of the product ergodic average gives

$$\left\|\frac1N\sum_{t=0}^{N-1}(U_X\otimes U_Z)^t(f\otimes g)\right\|_2^2\le\frac{(4L+1)\|f\|_2^2\|g\|_2^2}{N}\longrightarrow0.$$

For `f⊗1`, source Birkhoff averages converge in `L²` to their constants: pointwise convergence holds by Birkhoff and boundedness gives dominated `L²` convergence. Finite-coordinate auxiliary cylinders generate the auxiliary sigma-algebra, so finite sums of `f⊗1` and `f⊗g` with centered cylinder `g` are dense in the product `L²`. An invariant function equals its own ergodic averages; the limits just proved show that it is orthogonal to all centered tensors and to all centered source-only functions. It must therefore be constant. This proves the product ergodicity needed here and makes no assumption that the `k`-step map of the source is ergodic.

**Shift-equivariant random-cut channel.** Markers `C_i=1` divide almost every auxiliary sequence into finite segments `[s,t)`, each beginning at a marker and ending just before the next marker. Within a segment of length `L=t-s`, tile `floor(L/k)` consecutive complete `k`-blocks from its left endpoint. For a complete block starting at `j`, use `U_j` and a finite inverse-CDF map to draw its reproduction word with law `W_k(·|X_j^{j+k-1})`. On the final `L mod k` positions, output `b_*(X_i)` coordinatewise. The map is measurable on the invariant conull set of marker sequences unbounded in both directions and commutes with the shift. The resulting pair is a factor of the ergodic product above, so it is stationary and ergodic. The Bernoulli markers randomize the block phase; no fixed `k`-grid and no ergodicity of `T^k` is used.

Let `F_i` indicate that site `i` is in the leftover suffix. Every leftover site lies at one of the `k−1` positions immediately preceding the next marker, so

$$\alpha:=P(F_0=1)\le\sum_{j=1}^{k-1}P(C_j=1)=(k-1)p.$$

For `q=0,…,k−1`, the event that site `0` is the `q`th position of a complete block is a shift of the event that a complete block starts at `0`; all these `k` events therefore have the same probability `β`, and their disjoint union is `{F_0=0}`. Thus `kβ=1−α`. Marker events are independent of the source and seeds, so the expected distortion contributed by complete blocks is

$$\beta\sum_{q=0}^{k-1}\mathbb E_{\mu_kW_k}d(X_q,Y_q)=(1-\alpha)D_k,$$

where `D_k=E_{μ_kW_k}d_k≤D`. On a leftover site the expected distortion is `D_min`. Hence

$$\mathbb E d(X_0,Y_0)=(1-\alpha)D_k+\alpha D_{\min}\le D.$$

**Mutual-information-rate bound without independent source blocks.** For an interval `I_n={0,…,n−1}`, let `J_n(c)` be the complete `k`-blocks that intersect it and `L_n(c)` its leftover positions for a fixed marker sequence `c`. There are at most `n/k+2` intersecting complete blocks. All source symbols needed by those blocks lie in the finite enlargement `X_{-(k-1)}^{n+k-2}`. Conditional on this enlarged input and the fixed marker sequence, the reproduction subwords from distinct complete blocks are independent (their uniforms are independent), while leftovers are deterministic. Therefore entropy subadditivity and conditional independence imply, for each such `c`,

$$I(X_{-(k-1)}^{n+k-2};Y_0^{n-1}\mid C=c)\le \sum_{j\in J_n(c)} I(X_{B_j};Y_{B_j\cap I_n})+|L_n(c)|\log|B|\le (n/k+2)I_k+|L_n(c)|\log|B|.$$

For the second inequality, each block channel has source marginal `μ_k`; the observed output subword is a deterministic projection of its full reproduction word, so data processing bounds its mutual information by `I_k`. The other source blocks may be arbitrarily dependent on it; conditional on the block's own input, its output uses only the independent uniform at that block start. Since markers are independent of the source and the pair process is stationary, `E|L_n(C)|=nα`. Data processing, independence of `C` and the enlarged source, and averaging the displayed bound yield

$$\frac1n I(X_0^{n-1};Y_0^{n-1})\le\left(\frac1k+\frac2n\right)I_k+\alpha\log|B|.$$

Finite-alphabet stationary processes have entropy rates: `H(X_0^{n-1})` is subadditive by stationarity and entropy subadditivity, and the preceding fixed-block argument gives its normalized limit; the same holds for `Y` and `(X,Y)`. Consequently `n^{-1}I(X_0^{n-1};Y_0^{n-1})` has a limit (the sum of the two marginal entropy rates minus the joint entropy rate). Its limit is at most `I_k/k+αlog|B|<r`. This proves the claim.

## Random-code achievability from the process pair

Let a stationary ergodic finite-alphabet pair have `\bar d=E d(X_0,Y_0)≤D` and `\bar I<r`. The finite-alphabet stationary-ergodic SMB theorem, applied to `X`, `Y`, and `(X,Y)`, gives almost surely

$$\frac1n\log\frac{P(Y_0^{n-1}\mid X_0^{n-1})}{P(Y_0^{n-1})}\longrightarrow h(X)+h(Y)-h(X,Y)=\bar I.$$

The ratio is evaluated only on joint-probability-one pairs; there the numerator and denominator are positive. Birkhoff's theorem for the bounded observable `d(X_0,Y_0)` also gives `d_n(X_0^{n-1},Y_0^{n-1})→\bar d` almost surely. These are the only ergodic-limit inputs to the coding argument.

Choose `\bar I<s<r` and `δ>0`. Let

$$G_n=\{(x^n,y^n):d_n(x^n,y^n)≤\bar d+δ,\ i_n(x^n;y^n)≤ns\}.$$

Then `P((X^n,Y^n)∉G_n)→0`. For each supported `x^n`, put `q_n(x^n)=P(Y^n∈G_{n,x^n}\mid X^n=x^n)`. Markov's inequality gives

$$P(q_n(X^n)<1/2)≤2P((X^n,Y^n)∉G_n).$$

Draw `M_n=⌈2^{nr}⌉` independent codewords from the marginal law `P_{Y^n}`. If `q_n(x^n)≥1/2`, the probability that one draw lies in `G_{n,x^n}` is

$$P_{Y^n}(G_{n,x^n})=\sum_{y^n\in G_{n,x^n}}P(y^n\mid x^n)2^{-i_n(x^n;y^n)}≥2^{-ns}q_n(x^n)≥\tfrac12 2^{-ns}.$$

Thus the expected source probability of no good codeword is at most

$$\eta_n:=2P((X^n,Y^n)\notin G_n)+\exp\{-\tfrac12 2^{n(r-s)}\}\longrightarrow0.$$

For a fixed codebook, encode each input by the first codeword in its good set, if one exists, and otherwise by the first codeword. Averaging over codebooks shows that there is a deterministic codebook with failure probability at most `η_n` (if `η_n=0`, choose one with zero failure). On success distortion is at most `\bar d+δ≤D+δ`; on failure it is at most `d_max`. Therefore this same selected code has

$$\mathbb E d_n≤D+δ+d_{\max}\eta_n,$$

and, whenever `δ<ε`,

$$P(d_n>D+ε)≤\eta_n.$$

Its rate satisfies `n^{-1}log M_n→r`. This proves expected-distortion achievability and the excess-distortion-with-slack conclusion. Choosing `r_j=R(D)+1/j`, `δ_j→0`, and success thresholds `N_j` for these estimates, and using the `j`th construction for `N_j≤n<N_{j+1}`, gives a single sequence with `limsup` expected distortion at most `D`, rate at most `R(D)`, and `P(d_n>D+ε)→0` for every fixed `ε>0`.

If `D>D_min`, the construction also gives the stronger exact-threshold excess statement at the same infimum: choose `D'<D` with `R(D')` arbitrarily close to `R(D)` by continuity at the interior point (or use the constant code when `D>D_max`), run the construction at `D'`, and choose its typicality tolerance smaller than `D-D'`. Then the good-codeword event implies `d_n<D`, and the failure probability tends to zero. At `D=D_min` the exact event `P(d_n>D_min)→0` is not asserted.

## Operational converse and equality

For any deterministic length-`n` code with at most `M_n` messages and reproduction `\hat X^n`,

$$R_n(\mathbb E d_n(X^n,\hat X^n))≤I(X^n;\hat X^n)≤H(\text{message})≤\log M_n.$$

The first inequality is the definition of the finite-block RDF, the second is data processing because the reproduction is determined by the message, and the third is the entropy bound for a finite message alphabet. If `limsup E d_n≤D`, then for each `ε>0` all sufficiently large `n` have mean distortion at most `D+ε`; subadditivity's limit gives `liminf n^{-1}log M_n≥R(D+ε)`. Right continuity gives `liminf n^{-1}log M_n≥R(D)`. If instead the code sequence satisfies the excess-distortion-with-slack condition, boundedness gives

$$E d_n≤D+ε+d_{\max}P(d_n>D+ε),$$

and the same argument, with `ε↓0`, gives the same converse. Together with achievability, both operational infima equal `R(D)` on `[D_min,∞)`. Below `D_min`, every reproduction has distortion at least `n^{-1}\sum_{i=0}^{n-1}\min_b d(X_i,b)`; Birkhoff makes this lower bound converge almost surely to `D_min`, so neither the expected criterion nor the excess-distortion-with-slack criterion is achievable below the endpoint.

The exact-threshold caveat is real. Let `X_i` be iid fair bits, let `B` be a singleton, and set `d(0,b)=0`, `d(1,b)=1`. Then `D_min=D_max=1/2` and `R(D_min)=0`, but the only reproduction has

$$d_n=\frac1n\sum_{i=0}^{n-1}X_i,\qquad P(d_n>D_{\min})\longrightarrow\frac12$$

by the central limit theorem. Thus an exact-threshold excess criterion at the lower endpoint is strictly stronger than expected distortion or convergence in probability with positive slack.

## Proof interfaces, scope limits, and computation

* The only information-density limit used above is finite-alphabet stationary-ergodic SMB. Gray EIT, corrected first edition, Lemma 3.2.1, states and proves the almost-sure source self-information limit under exactly this finite-alphabet, stationary, ergodic hypothesis; all three applications are to factors of the stationary ergodic pair. The library has no local finite-alphabet SMB supplier yet, so any production dependency graph must add that supplier before promoting this RDF argument.
* The two-sided extension uses the published standard-Borel Kolmogorov extension theorem for countably many finite-alphabet coordinates. Ergodicity is justified above rather than assumed to survive extension without argument. Birkhoff is used only for a bounded observable in a stationary ergodic probability system.
* Boundedness is used in three exact places: finite-block objective continuity/compactness (finite alphabets already suffice there), the random-code failure penalty `d_max`, and the implication from excess-probability control to expected distortion. No unbounded MSE claim follows.
* This proof is for stationary ergodic finite-alphabet sources, finite reproduction alphabets, and bounded additive single-letter distortion. It does not establish AMS or stationary nonergodic operational coding, continuous alphabets, nonadditive criteria, variable-rate codes, or noisy-channel separation.
* Finite-dimensional minimizer existence does not itself provide a numerical algorithm. No Blahut–Arimoto convergence, iteration, precision, or complexity claim is made. Gray Source Coding Theory §4.4 gives updates and explicitly omits the convergence proof; r4's separate finite-alphabet analysis is the relevant algorithm lane.

## Read-source boundaries

Gray Source Coding Theory §3.2 defines the `N`th-order distortion-rate function by minimizing expected block distortion over conditional reproduction laws with `N^{-1}I(X^N;Y^N)≤R`; its Lemma 3.2.1 gives the code converse interface and its Theorem 3.2.1 states a process limit only when that limit is well-defined. Section 3.4 assumes a stationary ergodic source and bounded additive single-letter distortion, then random-codes from a stationary ergodic joint process satisfying its equations (3.4.1)–(3.4.2). Gray explicitly says the general process-approximation proof is omitted. The local random-cut proof above fills that omission for the finite-alphabet model and gives a distinct proof of the operational statement.

Gray EIT §10.6 provides a useful comparison: Lemma 10.6.2 proves the stationary subadditive block-RDF limit; Theorem 10.6.1 identifies block and stationary-process RDFs under a finite-mean reference reproduction letter, and identifies ergodic-process RDF for ergodic input. Its Lemma 10.6.3 / Example 9.4.11 use a randomized punctuation/SBM construction with reference-letter distortion overhead and handle stationary phases. The present bounded finite-alphabet construction proves the needed statements directly, with leftover distortion no larger than `D_min`, and with an explicit mutual-information boundary bound. Neither Gray source is treated as the local proof itself.
