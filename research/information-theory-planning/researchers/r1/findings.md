# r1 findings: foundations, divergences, and testing interfaces

Research evidence only; this is not a library acceptance, proof audit, or claim that any new information-theory item has been authored. Principal source: Gray's corrected author-hosted first edition, read in full. Rényi results are checked against van Erven–Harremoës. The f-divergence and hypothesis-testing material explicitly attributed to Polyanskiy–Wu was read by r3, not by r1; its reported extent and source identity are recorded separately in `source-manifest.json` and `reading-ledger.json`.

## Conventions and scope

All laws below are probability measures on a common measurable space unless stated otherwise. Logs are natural, so information is in nats; changing to base 2 divides every information quantity by `ln 2`. A term `0 ln 0` is zero. A ratio term with positive numerator and zero denominator is `+∞`. Extended-valued sums are used only when no `+∞−∞` expression occurs. These conventions are needed in statements, not left to context.

Gray's general conditional-probability and information-rate developments use standard alphabets (standard Borel measurable spaces) where regular conditional kernels, disintegration, and standard coding/quantization arguments are needed. The basic KL and mutual-information definitions do not themselves need standardness. The prologue, PDF pp. 11–22, sends several probability and ergodic prerequisites to Gray's companion text and explicitly excludes multiuser information theory, large deviations, general code-design algorithms, computation of general capacity/rate-distortion functions, and universal/variable-rate coding. These exclusions remain out of scope for this r1 handoff.

## Entropy, conditional entropy, and information

For a discrete random variable `X` with pmf `p` on a finite or countable alphabet, Shannon entropy is

`H(X) = Σ_x p(x) log(1/p(x)) = −Σ_x p(x) log p(x) ∈ [0,+∞]`,

where zero-mass terms are zero. Gray writes this directly for finite alphabets in Chapter 2, §2.2, printed pp. 18–20 / PDF pp. 40–42; the countable formula follows by truncating the countable alphabet into successively finer finite quantizers and taking the increasing limit of nonnegative partial information. On a finite alphabet of size `m`, `0≤H(X)≤log m`. For a finite alphabet, conditional entropy is

`H(X|Y) = H(X,Y)−H(Y) = −Σ_{x,y}p(x,y)log p(x|y) = E[H(P_{X|Y=Y})]`,

with zero-mass conditional cells omitted. For finite `X` and arbitrary measurable `Y`, Gray instead defines the safe general expression `H(X|Y)=∫[-Σ_x p(x|y)log p(x|y)]P_Y(dy)` using a measurable conditional pmf; this is Chapter 5, §5.5, printed p. 121 / PDF p. 143. It lies in `[0,log |X|]`. Do not use an entropy-difference formula if it can be `∞−∞`.

For arbitrary measurable random elements `X,Y`, Gray defines

`I(X;Y) := D(P_{XY} || P_X⊗P_Y)` (eq. (5.29), printed pp. 113–114 / PDF pp. 135–136),

and

`H(X) := I(X;X)` (eq. (5.30), same pages).

Both are extended values in `[0,+∞]`. The general entropy is also `sup_q H(q(X))` over finite measurable quantizers `q` (Lemma 5.5.1, printed pp. 114–115 / PDF pp. 136–137); on standard alphabets, nested finite quantizers can be chosen to approach the supremum, and Gray gives a measure-independent refining sequence in the standard-alphabet result of Lemma 5.5.5, printed pp. 119–120 / PDF pp. 141–142. This definition is not differential entropy. In particular, if `X` has an atomless law, the diagonal law `P_(X,X)` is singular to `P_X⊗P_X`, so `H(X)=I(X;X)=+∞` even when `X` has a smooth density and finite differential entropy. Differential entropy `−∫f log f` is a separate coordinate/base-measure-dependent quantity and cannot stand in for general law entropy.

For finite `X` and arbitrary `Y`, Gray proves `I(X;Y)=H(X)−H(X|Y)` (Lemma 5.5.6, printed p. 121 / PDF p. 143), under the finite-`X` hypothesis. In general do not subtract two extended entropies. The chain rule for finite variables is `H(X_1,…,X_n)=Σ_i H(X_i|X_1,…,X_(i−1))` and `I(Y;X_1,…,X_n)=Σ_i I(Y;X_i|X_1,…,X_(i−1))` (Corollary 2.5.1, printed pp. 41–42 / PDF pp. 63–64).

For general alphabets, `I(X;Y)≥0`, with equality iff `P_XY=P_X⊗P_Y`, i.e. independence (Gray Lemma 5.5.2, printed p. 115 / PDF p. 137). KL data processing yields measurable-map/channel data processing. For `X,Y,Z`, when conditional laws exist (in particular for standard Borel alphabets), let `P_{X×Y|Z}` be the law with `Z` marginal `P_Z` and conditional law `P_{X|Z}⊗P_{Y|Z}`. Then

`I(X;Y|Z) := D(P_XYZ || P_{X×Y|Z})` (Gray eq. (5.31), printed p. 114 / PDF p. 136).

It is nonnegative and zero exactly for conditional independence. Gray's alternative `I′(X;Y|Z)=sup_{finite f,g} E[I(f(X);g(Y)|Z=z)]` is available without standard alphabets and agrees with the kernel definition when the alphabets are standard (Lemma 5.5.7, printed pp. 121–123 / PDF pp. 143–145). A critical non-theorem: conditioning coarsening does not generally decrease conditional mutual information. With `X=Y` a fair bit and `Z=(X,Y)`, `I(X;Y|Z)=0`, while conditioning on the constant map of `Z` gives `I(X;Y)=log 2`.

Entropy rate for a finite-alphabet process is `h(X)=limsup_(n→∞) n^(−1)H(X_0,…,X_(n−1))` (Gray Chapter 2, §2.2, printed p. 20 / PDF p. 42). Under stationarity, finite-block entropy is subadditive, so the limsup is a limit and equals `inf_n n^(−1)H(X^n)`; Gray also proves existence for AMS finite-alphabet processes in Chapter 3. For a two-sided stationary finite-alphabet process,

`h(X)=lim_(n→∞)H(X_0|X_(−1),…,X_(−n))` (Lemma 2.6.2, printed p. 42 / PDF p. 64),

and for a stationary finite-order Markov source it reduces to the one-step conditional entropy (Lemma 2.6.1). For an arbitrary measurable dynamical system Gray's Kolmogorov–Sinai entropy is a supremum over finite measurable codings/partitions, not a differential entropy (Chapter 2, §2.2). For general-alphabet process information rates Gray keeps distinct Dobrushin's `limsup_n n^(−1) I(X^n;Y^n)` and Pinsker's supremum over finite quantized stationary-code rates; `I*≤Ī`, with equality for finite alphabets and under particular extra conditions (Chapter 6, §6.2, printed pp. 127–130 / PDF pp. 149–152). Do not silently exchange these limit/supremum orders.

For stationary nonergodic finite-alphabet processes, the sample SMB limit is the entropy rate `h_(ψ(X))` of the component selected by the invariant component label, while `h(m)=∫h_λdν` is the mixture block-entropy rate. The equality and the component/mixture likelihood-ratio bridge are proved with explicit conditional kernels, finite invariant partitions and finite-block Markov approximations in [the r1 AMS/nonergodic SMB supplement](ams-nonergodic-smb-proof-notes.md). It does not extend the finite-alphabet conclusions to arbitrary alphabets, and Gray's displayed truncation defect is bypassed by a direct finite-sum expectation bound.

The AMS proof notes take the stationary mean as an explicit probability-law datum and derive its stationarity from setwise Cesàro convergence. Gray Probability Lemma 6.2.2 proves countable additivity from the bare setwise-limit definition by Vitali–Hahn–Saks (printed pp. 124–127 / PDF pp. 136–139); I have now read that complete proof, but no current library item supplies the local theorem. A production definition that starts from mere scalar limits must include that proof supplier rather than silently assume the setwise limit is already a probability.

## Kullback–Leibler divergence and proof interfaces

For probability laws `P,Q` on `(Ω,𝔽)`, Gray defines (printed pp. 83–84 / PDF pp. 105–106)

`D(P||Q) := sup_Π Σ_(A∈Π) P(A)log(P(A)/Q(A))`,

over all finite measurable partitions `Π`. A cell with `P(A)=0` contributes zero; a cell with `P(A)>0=Q(A)` contributes `+∞`. If `P` is not absolutely continuous with respect to `Q`, then `D(P||Q)=+∞`; if `P≪Q` with `r=dP/dQ`,

`D(P||Q)=∫log r dP = ∫r log r dQ`, with `0log0=0` and finite negative part (Lemma 5.2.3, printed pp. 86–89 / PDF pp. 108–111).

The density is defined only up to `Q`-a.e. equality and so the integral is representative-independent. The negative part is bounded by `1/e` for probability `Q`, because `t log t≥−1/e`; this removes any `∞−∞` ambiguity. Gray's partition definition also gives a route to lsc and finite approximation. On any measurable space, `D≥0` with equality iff `P=Q` (Lemma 5.2.1, printed p. 84 / PDF p. 106). The proof applies Jensen/log-sum on each finite partition and uses that equality on all two-cell partitions forces equality of the laws.

If `𝔽_n` is an increasing sequence of sub-σ-fields generating `𝔽`, then `D(P|𝔽_n||Q|𝔽_n)↑D(P||Q)` (Gray Corollaries 5.2.3–5.2.5, printed pp. 92–93 / PDF pp. 114–115). A generating field suffices (Lemma 5.2.2, printed pp. 84–86 / PDF pp. 106–108). For a measurable map `T`, or more generally a Markov kernel `K`,

`D(PK||QK)≤D(P||Q)` (Corollary 5.2.2, printed p. 93 / PDF p. 115).

For a sub-σ-field, the density of the restricted law is `E_Q[r|𝔽]`; applying Jensen to `t log t` proves the inequality. For a kernel, form the two joint laws of input and output using the same kernel, then marginalize. If absolute continuity fails at the source, the source divergence is infinite and the inequality is immediate. Since KL is a supremum of finite-partition divergences, it is lower semicontinuous for setwise convergence; each finite-partition expression is lsc on the finite simplex. For weak convergence on Polish spaces, use continuity-set partitions in the standard weak-topology argument. The local repository has no general KL lsc or data-processing theorem; these are real proof obligations.

Gray's variational characterization (Theorem 5.2.1, printed pp. 97–99 / PDF pp. 119–121) assumes `P≪Q` (Gray writes `Q≫P`):

`D(P||Q)=sup_Φ {E_P[Φ]−log E_Q[e^Φ]}`,

where `e^Φ∈L¹(Q)` and `E_P[Φ]` is well-defined. The source's corrected 2023 proof uses the log-density, with its null-set/extended-value interpretation, for the lower bound and the normalized exponential tilt `Q^Φ=(e^Φ/E_Qe^Φ)Q`, the KL chain rule, and KL nonnegativity for the upper bound. Do not cite the known erroneous pre-correction proof as authority, and do not claim a real-valued log-density test is admissible without specifying its values on `Q`-positive, `P`-null sets.

For new library authoring, the more robust all-support version is the bounded-test formula

`D(P||Q)=sup_{f bounded measurable}{E_P[f]−log E_Q[e^f]}`.

It needs a local proof if adopted. The upper bound for `P≪Q` follows by defining the tilted probability `Q_f=e^f Q/E_Qe^f` and applying `D(P||Q_f)≥0`; for `P≰Q`, choose `A` with `Q(A)=0<P(A)` and let `f=t1_A` to make the objective diverge. For `P≪Q`, clipped log-likelihoods `f_n=clip(log(dP/dQ),−n,n)` give the reverse bound by convergence of `E_P f_n` to the KL integral and `E_Qe^{f_n}→1`. Bounded tests need not attain the supremum; do not claim attainment without extra ratio/support conditions.

For standard-alphabet pairs `X,Y`, a general conditional KL must be defined without presuming joint domination. Given joint laws `P_XY,Q_XY` and a selected regular version `Q_{X|Y}`, form `S_XY=P_Y Q_{X|Y}`; then `D(P_XY||S_XY)` is the conditional divergence `D_P||Q(X|Y)`. Gray proves the extended-real chain rule

`D(P_XY||Q_XY)=D(P_Y||Q_Y)+D(P_XY||P_Y Q_{X|Y})`

(definition (5.27), theorem (5.28), Theorem 5.3.2; printed pp. 110–111 / PDF pp. 132–133). This additive formulation avoids subtracting infinite terms. If the conditional divergence is finite, the corresponding conditional log-density integral is legitimate; if joint domination holds, it agrees with the familiar conditional-density ratio. **Version caveat:** two versions of `Q_{X|Y}` are guaranteed equal only `Q_Y`-a.e. If `P_Y` charges a `Q_Y`-null set, the constructed `S_XY` can depend on the chosen version. Require `P_Y≪Q_Y` for version-independent use, or state the selected kernel as part of the definition; when `P_Y` is not dominated, the marginal KL and joint KL are already infinite and no canonical conditional scalar should be inferred from the chain identity alone. Standard Borel target assumptions give regular kernels, with arbitrary probability kernels assigned on exceptional null sets. The source's proof treats singular cases for its selected version.

Joint convexity of KL is not currently a local library item. A local finite proof uses log-sum on each cell or the convex perspective `q φ(p/q)` with `φ(t)=tlogt`; the general probability-law proof can be obtained by applying the partition supremum and finite-dimensional joint convexity. Mutual information is convex in the channel kernel and concave in the input law for a fixed channel (Gray Lemma 2.5.4, printed pp. 39–40 / PDF pp. 61–62). A local proof should name the mixture variable or invoke the exact log-sum inequality; Jensen alone without matching reference measures is insufficient.

## Rényi and f-divergences

For laws `P,Q` on `(𝒳,𝔽)`, choose a common σ-finite dominating measure `μ` and densities `p,q`; the definition is independent of the choice. Van Erven–Harremoës, §II, PDF pp. 4–7, use natural logs and the conventions `0/0=0`, `x/0=+∞` for `x>0`. At simple orders `α>0`, `α≠1`,

`D_α(P||Q) = (α−1)^(−1) log ∫ p^α q^(1−α) dμ`.

Extended orders are `D_0(P||Q)=−log Q({p>0})`, `D_1(P||Q)=D(P||Q)`, and `D_∞(P||Q)=log ess sup_P(p/q)` (also the log of the worst event likelihood ratio). The finite-partition supremum representation is Theorem 2, and the extended-order formulas are Theorems 4–6. All support cases are part of the definition: for `α>1`, a `P`-mass singular to `Q` forces infinity; for `0≤α<1`, the overlap integral remains meaningful. Data processing holds for Markov kernels at every order `α∈[0,∞]` (Theorem 9, PDF p. 8). `D_α` is increasing in order and nonnegative; it is jointly convex in `(P,Q)` for `α∈[0,1]`, convex in `Q` for all nonnegative orders, and jointly quasi-convex for all nonnegative orders (Theorems 3, 8, 11–13, PDF pp. 5–9). It is not convex in `P` when `α>1` (explicit counterexample, Section VI). Theorem 15 gives setwise lsc for `α∈(0,∞]`; Theorems 19–20 give weak lsc on Polish spaces and compact convex sublevel sets for fixed `Q` and `α≥1`.

For a convex `f:(0,∞)→ℝ` normalized by `f(1)=0`, the Polyanskiy–Wu Definition 7.1 (printed pp. 115–116 / PDF pp. 140–141; read by r3) defines, when `P≪Q`, `D_f(P||Q)=E_Q[f(dP/dQ)]`, with `f(0)=f(0+)`. With common dominator `μ`, support and singular mass must be explicit:

`D_f(P||Q)=∫_{q>0} q f(p/q)dμ + f′(∞) P({q=0})`,  where `f′(∞)=lim_{t→∞} f(t)/t`.

The discrete conventions are `0 f(0/0)=0` and `0 f(a/0)=a f′(∞)`. The divergence is invariant under replacing `f` by `f+c(t−1)`. Theorem 7.4 (printed p. 120 / PDF p. 145) proves channel data processing; Theorem 7.5 (printed pp. 120–121 / PDF pp. 145–146) proves nonnegativity (strict equality criterion when `f` is strictly convex at 1) and joint convexity. The same chapter proves its conditioning-increases-divergence inequality after defining conditional f-divergence as the `P_X` average of conditional divergences in equation (7.9); a local statement must retain that exact kernel/reference-law convention. The proof interface is conditional Jensen/perspective convexity followed by marginalization. Hellinger distance itself is not convex, though its square is an f-divergence (Remark 7.4, printed p. 121 / PDF p. 146).

Rényi's useful variational bridge for simple `α` is

`(1−α)D_α(P||Q)=inf_R {αD(R||P)+(1−α)D(R||Q)}`

(van Erven–Harremoës Theorem 30, PDF p. 17). The optimizer is the normalized `p^αq^(1−α)` tilt when the integral and support conditions make it a probability law. Their Theorem 32 (PDF p. 18) gives a Chernoff-information minimax identity under `D(P||Q)<∞` and additional saddle-point conditions; do not omit those conditions. Their Theorem 14 Pythagorean inequality requires an α-convex feasible set and an existing α-information projection. Neither result proves convergence of arbitrary alternating minimization or the Blahut–Arimoto recursion.

## Testing and converse interfaces

A binary randomized test is a measurable `φ:𝒳→[0,1]`; expected rejection/acceptance probabilities are integrals under the two hypotheses. The finite-alphabet/general dominated likelihood-ratio test with boundary randomization is already present in the repository (items listed in `supplier-map.json`). Its size and power statements require the common dominating measure/likelihood ratio and exact threshold randomization, including singular alternatives.

KL and all f-divergences reduce under the measurable statistic `1_A` to binary divergence. Consequently

`D(P||Q) ≥ d(P(A)||Q(A))`

for every event `A`, where `d(u||v)=u log(u/v)+(1−u)log((1−u)/(1−v))` with extended support conventions. This is an immediate, useful bridge from distributional divergence bounds to testing error probabilities. With the repository's event-supremum total variation convention, `TV(P,Q)=sup_A|P(A)−Q(A)|`; Pinsker is `TV(P,Q)≤sqrt(D(P||Q)/2)` (published `thm-pinsker`). Gray's variational distance is twice event TV, while van Erven–Harremoës' `V=∫|p−q|dμ` is also twice event TV; do not transfer their constants without conversion.

Polyanskiy–Wu (read by r3) gives exact testing/converse locators. Chapter 14 Theorem 14.10 (printed p. 283 / PDF p. 308) is a log-likelihood-ratio strong testing converse for every achievable error pair; its LLR is extended-real and does not require `P≪Q`. Definition 14.13 and Theorem 14.14 (printed pp. 286–287 / PDF pp. 311–312) establish the iid Stein exponent `D(P||Q)` for every fixed `ε∈(0,1)` under the source's testing definition. Chapter 22 §22.3 (printed pp. 428–431 / PDF pp. 453–456) derives the channel meta-converse by replacing the true output law with an arbitrary auxiliary output law and bounding a binary testing `β` quantity; its channel, code, and error assumptions must travel with the statement. Theorem 22.1 gives a strong converse for stationary-memoryless channels only when the input or output alphabet is finite; §22.2 provides an infinite-alphabet counterexample, so there is no unrestricted strong converse. Theorem 22.2's finite-block normal approximation (printed pp. 435–436 / PDF pp. 460–461) is specific to DMC, cost-constrained DMC, AWGN, and parallel AWGN regimes, with its stated dispersion/optimizer qualifications.

Gray's Fano bound and noisy-channel converse proofs are in Chapters 4 and 12, but the prologue says the book does not pursue the strongest available converses. The current `thm-fano-packing` is a useful finite packing lower bound, not a general information-theory converse library. Keep local proof obligations explicit and distinguish weak, strong, and finite-block converses.

## Well-definedness, support, and algorithm obligations

1. State the underlying measurable spaces and ensure `X,Y,…` are measurable; induced laws and product laws must exist. General conditional formulas require measurable regular kernels (standard Borel targets in the root library) or a quantizer-based alternative.
2. State absolute-continuity direction at every KL/Rényi log-density use. The root KL definition uses AC, constructs a measurable RN representative, and proves the negative part is finite. It assumes the axiom of choice as recorded in its dependency set.
3. For conditional laws, specify the conditioning marginal, a.e. uniqueness convention, a null-set version, and the reference kernel used in conditional KL. Avoid subtracting infinite entropies.
4. For `f`-divergence and Rényi formulas, give singular support terms/zero-ratio conventions and indicate when the value is extended infinity. State the exact order range for every convexity claim.
5. For hypothesis testing, specify which hypothesis defines each error, whether randomization is allowed, the size/error regime, and whether the LLR may be extended-real. For coding converses, state alphabet, channel memory, cost, and maximal/average error regime.
6. Any numerical or iterative minimization algorithm needs finite-dimensional inputs, support-preserving update rules, a deterministic tie/zero convention, precision/tolerance stopping rule, termination guarantee, and complexity/error bounds. A citation or a monotone objective is not a termination proof. Gray's §4.4 displays Blahut–Arimoto updates but explicitly omits a convergence proof; the finite-alphabet proof must be local (r4 is preparing it).

## Missing local information-theory items and substantive proof routes

The root library presently has only a category stub `library/information-theory/_category.md`. The exact published suppliers checked for this lane are in `supplier-map.json`. They support prerequisites but do not yet provide general Shannon entropy, conditional entropy, mutual/conditional mutual information, f-divergence, Rényi divergence, KL partition/variational/data-processing theorem, information-density convergence, or testing meta-converse items.

The following intermediate developments are required before stronger consumers are sound:

* **Finite KL log-sum and joint convexity.** For nonnegative vectors `p_i,q_i`, apply Jensen to `φ(t)=t log t` with weights proportional to the mixed denominator `λq_i+(1−λ)r_i`; the resulting log-sum inequality proves joint convexity of `Σp_i log(p_i/q_i)`, with zero and support cases separated. Extend finite-partitionwise to general laws; use the partition supremum to pass to general KL.
* **Partition representation for the library's RN-defined KL.** If `P≰Q`, choose a `Q`-null event with positive `P` mass; its two-cell partition has infinite divergence. If `P≪Q`, let `r=dP/dQ`; Jensen gives every partition divergence at most `∫rlogr dQ`. For the reverse bound, quantize truncated values of `log r` (or use Gray's generating-field theorem and refining finite fields); the finite-partition divergences increase to `∫rlogr dQ`, also when the latter is infinite.
* **General KL data processing.** For a statistic, restrict to its generated σ-field: the restricted density is `E_Q[r|σ(T)]`; conditional Jensen for `tlogt` gives the bound. For a Markov kernel, place `P(dx)K(dy|x)` and `Q(dx)K(dy|x)` on the product space; the joint KL equals the input KL, then apply the statistic result to the output projection.
* **KL lower semicontinuity.** Write divergence as a supremum of finite-partition divergences. Every finite partition maps measures continuously under setwise convergence and relative entropy on a finite simplex is lsc with `0log0` and support infinity; a supremum of lsc functions is lsc. For weak Polish convergence, select partitions whose boundaries are null under the limit laws and approximate the partition supremum.
* **Variational KL with all support cases.** Prefer bounded measurable tests. For `P≪Q`, tilt `Q` by `e^f` and use KL nonnegativity for the upper bound. For singular mass, a bounded event test `t1_A` on a `Q`-null/P-positive event makes the supremum infinite. For the reverse inequality in the dominated case, truncate `log(dP/dQ)` above and below; use finite KL negative-part control and `E_Qe^{f_n}→1`. Treat this as a local theorem rather than inheriting domain subtleties from an unbounded log-density test.
* **General entropy/MI and chain rules.** Define `I(X;Y)` from KL, `H(X)=I(X;X)`, and conditional MI from the conditionally independent reference law. Push-forward data processing gives quantization monotonicity; partition approximation gives `I=sup I(qX;rY)`. For finite `X`, derive the expected conditional-pmf expression and `I=H(X)−H(X|Y)` by RN density. General chain rules follow by applying the conditional KL chain rule to the appropriate reference product/Markov laws.
* **f-divergence joint convexity/data processing.** The function `(p,q)↦q f(p/q)` is the perspective of convex `f`, hence jointly convex on `q>0`; extend by stated support limits and the recession slope. Conditional Jensen proves contraction through a Markov kernel; the singular term must be carried rather than dropped.
* **Finite Rényi support and order properties.** For finite alphabets, prove the formula with explicit `0/0` and positive-over-zero conventions. Jensen/Hölder establish positivity and monotonicity in order; log-sum gives the exact convexity ranges. Do not assert first-argument convexity above order one; cite the paper's counterexample or include a finite explicit one. A weak-topology minimizer proof requires compact feasible set, lower semicontinuity, and a finite feasible point.
* **Testing/converse bridge.** Apply divergence DPI to `1_A` to get binary KL bounds. Then state Neyman–Pearson optimality with the likelihood-ratio threshold and a boundary-randomization parameter for exact size. For Stein and meta-converse, reproduce the source's iid/channel premises locally; the library's NP lemma alone does not imply asymptotic Stein or code converse results.

No proof item in the existing library currently establishes generic KL projection existence or alternating-minimization convergence. `thm-generalized-bayes-loss-update-is-the-unique-kl-minimizer` is a specific exponential-loss update, and `prop-compact-kl-projection-tests-under-fractional-moment-continuity` is a model-specific compactness/projection statement. Do not route a general Blahut–Arimoto convergence claim through either.

## Stationary-ergodic bounded rate-distortion proof

The new local proof note [stationary-ergodic-rate-distortion-proof-notes.md](stationary-ergodic-rate-distortion-proof-notes.md) establishes, for a finite-alphabet stationary ergodic source and bounded additive single-letter distortion, the finite-block formula `R(D)=lim_n n^(-1) min I(X^n;Y^n)` and equality with the expected-distortion operational rate. It proves the subadditive limit without assuming source-block independence, handles both distortion endpoints and right continuity, and proves the process-approximation step Gray's 1990 source-coding text explicitly omits. Its Bernoulli-cut construction uses complete k-block test channels plus coordinatewise minimum-cost reproduction on leftover suffixes; this makes a stationary ergodic pair without assuming ergodicity of `T^k`, keeps distortion at most `D`, and yields the local rate bound `I_k/k+α log|B|` with `α≤(k−1)p`. A complete finite-alphabet random-code proof supplies expected-distortion and excess-distortion-with-slack achievability. Exact-threshold excess distortion is not claimed at `D_min`; an iid fair-bit example shows why.

The only upstream theorem used in the random-code part is the finite-alphabet stationary-ergodic SMB theorem, stated precisely with its scope in the note and verified from Gray EIT Lemma 3.2.1. The local library has no production SMB item yet, so that remains an authoring prerequisite before the rate-distortion proof is promoted into production items. No arbitrary-alphabet, unbounded-distortion, AMS, stationary-nonergodic, or noisy-channel extension is inferred. The full read/source identity for Gray's author-hosted 1990 *Source Coding Theory* is recorded as cross-lane evidence; r1 read only the complete relevant Ch. 3 sections, not a second whole-book pass.
