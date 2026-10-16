# Definition and algorithm well-definedness ledger

Status: integrator working ledger, 2026-10-16. Every item below is a proposed
definition/procedure contract, not a production carrier. The exact root
supplier IDs used for the ambient spaces and operators are in
`prerequisite-audit.md`. These justifications must be copied into the matching
item proof contracts at authoring; a source citation is never the
well-definedness proof.

## Global conventions and finite information (IT01)

`def-it-information-units-and-logarithm-base` fixes a base `b>1` and defines
`log_b t = ln(t)/ln(b)` for `t>0`. Natural logs give nats and base two gives
bits. Every divergence/information value in bits is the natural-log value
divided by `ln 2`; finite code lengths are measured in bits. At probability
zero, define `0 log 0=0`; when the numerator is positive and denominator zero,
the divergence term is `+∞`. Finite sums use only nonnegative terms or
explicit extended-real conventions, never `∞−∞`.

`def-it-finite-mutual-information` takes finite random variables `X,Y` with
joint pmf `p(x,y)` and defines
`I(X;Y)=Σ_{p(x,y)>0}p(x,y) ln(p(x,y)/(p_X(x)p_Y(y)))`. Every positive joint
mass has positive marginals, so the logarithm is finite on each summand; the
sum is finite. The equivalent entropy expression
`H(X)+H(Y)-H(X,Y)` is a proved identity because all three entropies are finite.

`def-it-finite-conditional-mutual-information` is
`Σ_{z:p_Z(z)>0}p_Z(z)D(p_{XY|z}||p_{X|z}p_{Y|z})`. Terms at zero-mass `z` are
omitted; any conditional pmf chosen there has no effect. The finite sum is
nonnegative and finite. It is zero exactly when `X` and `Y` are conditionally
independent for every positive-mass `z`, by the finite KL equality result.
These two definitions precede all finite chain-rule, Fano, and Markov
data-processing claims.

## Measurable-space information and conditional kernels (IT02)

For measurable random elements `X:Ω→𝒳`, `Y:Ω→𝒴`, define
`def-it-general-mutual-information` by
`I(X;Y)=D(P_{XY}||P_X⊗P_Y)` on the product sigma-algebra. The law `P_X⊗P_Y`
exists for probability measures; no regular conditional law is needed for
this definition. The KL support convention comes from the published
`def-kullback-leibler-divergence` and carries its explicit axiom-of-choice/RN
assumption. The definition is in `[0,+∞]` because the published KL
nonnegativity theorem supplies the inequality.

`def-it-general-probability-law-entropy` is the extended quantity
`H(X)=I(X;X)`, where `P_{XX}` is the push-forward under `ω↦(X(ω),X(ω))`.
This matches the finite/countable discrete entropy by direct finite or
monotone-partition calculation. It is not differential entropy. The alternate
quantizer definition is `sup_q H(q(X))` over finite measurable maps `q`; the
equality with `I(X;X)` is a theorem from Gray's finite-partition
representation, not part of the definition. If `P_X` is atomless on a
standard Borel space, the diagonal has product measure zero while `P_{XX}`
charges it with mass one, so `H(X)=+∞`; a smooth density with finite
differential entropy is not a counterexample.

`def-it-finite-alphabet-conditional-entropy-general-observation` lets `X`
take values in a finite nonempty set `𝒳` and lets `Y` be any measurable
random element. For each `x`, choose the conditional expectation class
`q_x=E[1_{X=x}|σ(Y)]`. Then set
`H(X|Y)=E[-Σ_x q_x ln q_x]`, using `0 ln 0=0`. Conditional expectations
exist by the published probability supplier; changing any representative on
a null set changes neither the finite sum nor its integral. The summand is
measurable and lies in `[0,ln|𝒳|]`, so the expectation is finite. This
definition avoids an unnecessary standard-Borel assumption for finite `X`
and avoids subtracting infinite entropies.

For standard Borel `𝒳,𝒴,𝒵`, `def-it-conditional-mutual-information` chooses
regular conditional kernels `P_{X|Z}` and `P_{Y|Z}` and defines the probability
law `P^*_{XYZ}(dx,dy,dz)=P_Z(dz)P_{X|Z}(dx|z)P_{Y|Z}(dy|z)`. Kernel-product
measurability and total mass one are proved by integration first on
rectangles, then by the monotone-class extension; this is `lem-it-kernel-integral-measurability`.
Set `I(X;Y|Z)=D(P_{XYZ}||P^*_{XYZ})`. Versions changed on a `P_Z`-null set
leave `P^*` unchanged, so the value is version independent. It may be
infinite. Its zero case is exactly conditional independence by KL equality.
No DPI is asserted after replacing `Z` by a coarser statistic.

`def-it-conditional-kl-with-reference-kernel` includes a specified measurable
reference probability kernel `Q_{X|Y}` as part of the data and defines the
reference joint law `S_{XY}=P_Y Q_{X|Y}`. Then set
`D(P_{XY}||Q_{X|Y};P_Y)=D(P_{XY}||S_{XY})`. Since the kernel itself is
specified at every `y`, this joint divergence is well defined; its numerical
value is not silently made canonical under changes on `Q_Y`-null sets that
may have positive `P_Y` mass. If a version-independent formula is wanted
from a kernel defined only `Q_Y`-a.e., impose `P_Y≪Q_Y` and prove the
conditional integral representation using `thm-it-reference-kernel-conditional-kl-integral`.

`thm-it-kl-finite-partition-supremum` proves the Gray partition formula for
the existing RN KL: lower-bound every finite partition by Jensen applied to
`t ln t`; use the finite negative-part bound; for the reverse inequality
approximate `ln(dP/dQ)` by simple functions and use monotone convergence for
positive parts plus the integrable negative part. When `P≰Q`, a two-cell
partition containing a `Q`-null, positive-`P` set gives infinity. The
bounded-test variational formula uses
`sup_{f bounded}[E_P f-ln E_Q e^f]`; its upper bound is
`D(P||Q_f)≥0` for the exponential tilt `Q_f`, its singular lower bound is
`f=t1_A`, and its dominated lower bound clips `ln r`. The exact full proof is
in `proof-developments.md`.

## Types, divergences, and testing (IT15–IT16)

`def-it-empirical-type-and-type-class` uses a finite alphabet `𝒳` and a word
`x^n`; its type is `\hat p_{x^n}(a)=n^{-1}N(a|x^n)` and its type class is
the set of words with that vector. Type-class counts are integer multinomial
coefficients. Bounds derive from factorial inequalities; no asymptotic
polynomial term is suppressed in the exact finite statement. Finite Sanov
uses a fixed support-aware i.i.d. law `p` and a closed set of empirical
distributions, with exponent `inf_{q∈F}D(q||p)` and the exact boundary/support
convention.

`def-it-f-divergence` requires convex `f:(0,∞)→ℝ`, `f(1)=0`, an explicit
right-limit `f(0)`, and recession slope `f'(∞)=lim_{t→∞}f(t)/t` when finite.
For common dominating measure `μ`, define
`∫_{q>0}q f(p/q)dμ + f'(∞)P({q=0})`; this displays singular mass rather than
hiding it. The finite data-processing proof is log-sum/perspective convexity.
`def-it-renyi-divergence-finite` states every order and support case, including
the continuous limits at orders 0, 1 and infinity; only the order ranges
actually proved receive convexity claims.

`def-it-beta-testing-function` fixes a test `T:𝒳→[0,1]` as acceptance of
`P`: `β_α(P,Q)=inf{E_Q T:E_P T≥α}`. Then `α=1-ε` is the required P
acceptance probability and `β` is Q acceptance. The one-shot meta-converse
must use this same orientation; it is not inferred from the repository's
reject-null likelihood-ratio convention.

## Codes and source models (IT03–IT05)

`def-it-finite-source-code` uses a finite nonempty alphabet `𝒳`, strictly
positive pmf `p` on its support, binary finite strings, an encoder, and an
exact decoder. The one-symbol code map is injective. A prefix code has no
proper-prefix pair; a uniquely decodable code has an injective concatenation
map on all finite source words. The singleton-source case is fixed explicitly
(one nonempty codeword, so no convention about the empty string affects
optimality). Kraft–McMillan applies to binary words; any q-ary generalization
requires a separate proof.

`alg-it-shannon-prefix-code` accepts a finite list of positive rational
probabilities with exact integer numerators/denominators. It sets
`l_i=ceil(-log_2 p_i)` by integer comparisons `2^{l_i}p_i≥1`, then applies a
deterministic finite Kraft allocator to requests ordered by `(l_i, symbol
index)`. The allocator maintains a finite set of free tree nodes with
distinct depths, chooses the longest free node no deeper than the request,
allocates its leftmost requested-depth descendant, and inserts the intervening
right siblings. Its tree invariant proves prefix-freeness and the Kraft
capacity invariant proves a node is always available. This is an exact
arithmetic/comparison algorithm; the result has mean length `<H_2(p)+1`.

`alg-it-huffman-code` accepts the same rational pmf and orders equal weights
by fixed alphabet index. Repeatedly merge the two least weights into a parent
whose weight is their sum; after `|𝒳|-1` merges, assign left/right bits in
alphabet order and read root-to-leaf words. The one-symbol case returns `0`.
The finite priority queue always has at least two nodes until the final merge;
the exact real/rational comparison model, output lengths, and arithmetic
operation count are explicit. The optimality theorem's exchange proof is
separate from the procedure.

`alg-it-arithmetic-interval-code` is deliberately a finite-block, framed
variant. Its exact input is a rational pmf positive on a finite alphabet, a
known block length `n`, and `x^n`; it recursively partitions a rational
interval according to cumulative symbol probabilities. At the final interval
`[a,b)`, choose the least `L` with `2^{-L}≤(b-a)/2` and
`k=ceil(2^L a)`; emit `(L, binary_L(k))`. The dyadic cell lies within
`[a,b)`, so the decoder given the model, `n`, length `L`, and framed word
recovers `x^n` uniquely. `L≤-log_2 p^n(x^n)+2`, hence expected data length is
at most `nH_2(p)+2`. The length/framing field is separate overhead. This
does not claim a streaming, unframed or machine-precision implementation;
MacKay's ideal-real algorithm does not supply those guarantees.

`def-it-finite-iid-source` is `(𝒳,p)`, finite support with product law
`p^{⊗n}`. The typical set is restricted to strings with positive probability
and information density within `δ` of `H(p)`. Finite support makes
`-ln p(X)` bounded, so its mean and variance exist. This is the exact
prerequisite for the weak-law AEP proof.

`def-it-stationary-ergodic-source` uses a finite-alphabet stationary process
with its canonical shift; ergodicity is an additional invariant-event
condition. `def-it-asymptotically-mean-stationary-source` states AMS relative
to an explicitly supplied stationary mean, plus the domination assumptions
required by the source theorem. `def-it-source-entropy-rate` is `limsup_n
n^{-1}H(X^n)` for an arbitrary finite-alphabet process; stationarity proves
subadditivity/limit, and two-sided conditional-entropy limits require a
stationary two-sided law. The nonergodic SMB limit is invariant and may be
random; ergodicity is exactly what makes it constant.

`alg-it-lz78-universal-code` and `alg-it-finite-window-lz77-code` specify their exact dictionary/window initialization, ordered finite alphabet, finite parsing, index representation, EOS termination, and framed output accounting. The separate `def-it-lz77-overlapping-window-match-length` is an extended-valued bi-infinite statistic and has no bitstream procedure claim. The LZ78 expected-rate theorem for stationary sources, its
individual-sequence finite-state optimality theorem, and LZ77's
stationary-ergodic phrase-length result are distinct contracts. No informal
"memoryless on long time scales" description is a source hypothesis.

## Distortion, channels, and source–channel interfaces (IT06–IT19)

`def-it-single-letter-distortion-and-block-distortion` is a nonnegative
measurable `d:𝒳×Ŷ→[0,∞]` and its normalized block average. Every theorem
states finite versus unbounded distortion. The operational RDF takes the
infimum of `n^{-1}log M_n` over length-n codes with limsup expected block
distortion at most `D`; the information RDF is the infimum of `I(X;Xhat)` over
single-letter couplings with the stated marginal and expected distortion.
The coding theorem equates them only under the finite-memoryless or
stationary-ergodic bounded-distortion assumptions listed in its statement.

The fixed-slope finite BA procedure accepts finite `p_i>0`, finite
`d_{ij}≥0`, a finite slope `s≥0`, a positive initial output law `q^0`, and
exact-real exponential/log arithmetic. Set `K_{ij}=e^{-sd_{ij}}`,
`Z_i(q)=Σ_jq_jK_{ij}`, `W_q(j|i)=q_jK_{ij}/Z_i(q)`,
`c_j(q)=Σ_ip_iK_{ij}/Z_i(q)`, then update `q'_j=q_jc_j(q)`. Stop only when
`ln(max(1,max_j c_j(q)))≤ε`, the certified Lagrangian gap. Each update is normalized and stays full support. The
proof of global objective convergence is the exact KL telescope in
`proof-developments.md`; a valid convex tangent/KKT gap gives the stopping
certificate and compactness proves finite termination for each `ε>0`. This
is a fixed-slope Lagrangian optimizer, not automatic inversion to a prescribed
distortion or a finite-precision implementation.

`def-it-sequence-channel-kernel` is an arbitrary sequence of stochastic
kernels `W_n(dy^n|x^n)` on explicit measurable spaces. Product memorylessness
and stationarity are separate restrictions. A code is an encoder/decoder
pair for the model and its error is defined either as average over uniform
messages or maximal over each message; these are distinct finite-n
quantities. A cost contract separately states per-codeword/maximal input cost
and expected average cost. `def-it-channel-capacity` uses the corresponding
achievable rate closure and states the error criterion; for a finite DMC the
capacity supremum is attained by continuity/compactness, unlike a general
channel supremum.

`def-it-differential-entropy-finite-second-moment` requires an absolutely
continuous law on `R^d` with finite second moment. Relative to a fixed
standard Gaussian density `g`, define
`h(X)=-D(P_X||g·Leb)-E[ln g(X)]`; the second term is finite and the first
is extended nonnegative, so `h∈[-∞,∞)` is well defined without
`∞−∞`. A separate change-of-reference argument proves this equals
`-∫f ln f` and is independent of the Gaussian when the specified moments
make both cross-entropies finite. This is not the general law entropy
`I(X;X)`.

`def-it-beta-testing-function` is defined in IT16 and is the sole beta
convention consumed by IT09. One-shot achievability and meta-converse specify
finite or standard-Borel channel laws, uniform messages, randomization,
average/maximal error, and threshold ties. The proposed normal approximation
is restricted to an unconstrained finite DMC, fixed `0<epsilon<1/2`, and
positive minimum CAID dispersion. Its local proof fixes the unique full-
reachable-support output law, proves the CAID conditional-variance identity,
uses the finite-polytope KL/Pinsker gap with a direct simplex-slice residual proof for the type-uniform converse,
and supplies Berry–Esseen, threshold, and quantile remainders. It does not
import cost-constrained, zero-dispersion or `epsilon>=1/2` cases; the Cao–
Tomamichel correction remains source context rather than a dependency of this
alternate proof.

`def-it-joint-source-channel-code` fixes a source block, channel block,
encoder, decoder, distortion, and channel error. The lossy separation
achievability uses a maximal-error channel code or proves the reweighting
under the nonuniform source-code index law; bounded distortion converts
channel error probability into expected excess distortion. The converse uses
finite RDF convexity, the memoryless-channel chain and compactness/lower
semicontinuity at the distortion boundary. The correlated-source binary
adder/erasure example is a joint source–channel counterexample to unrestricted
separation, not a general MAC capacity statement.

The distributed-source definition fixes finite jointly distributed DMS
components, separated encoders and joint block error. Slepian–Wolf rate
constraints are lower bounds for each nonempty subset. A common part is a
maximal deterministic function common to the two finite source coordinates,
constructed from connected components of the positive-probability bipartite
support graph. Wyner common information is a different infimum over `U`
making `X_1` and `X_2` conditionally independent. Neither is identified with
mutual information by definition.

Wyner–Ziv fixes finite source, side-information and reproduction alphabets,
i.i.d. source pairs, decoder-only side information, fixed-length coding,
expected average distortion, and finite single-letter distortion independent
of Y. Its sufficient no-rate-loss condition is stated on an optimizer of the
both-terminal RDF: the joint law extends as
`P_XY P_{U|X} 1{Xhat=g(Y,U)}`, so U-X-Y and X-(U,Y)-Xhat, with
`I(X;U|Xhat,Y)=0`. Berger–Tung fixes multiple encoders and independent
conditional test channels and is only an inner bound. The exact two-scalar Gaussian WTV region states
unit variances, `0<rho<1`, separate encoders and squared-error targets
`d_1,d_2>0`; its three inequalities are imported only after the article's
Gaussian extremal converse is locally proved.

The DM-MAC is a finite memoryless kernel with independent private uniform
messages, separate encoders, and a joint decoder. Its exact region uses
`p(q)p(x_1|q)p(x_2|q)`; a correlated input law is a different model. The
degraded BC is a finite kernel with Markov chain `U-X-Y_1-Y_2` and separate
private messages. Feedback codes carry causal dependence on past outputs;
Ozarow's AWGN-MAC region is not preshared common randomness. Correlated
source/MAC coding is a stated sufficient inner condition, not a general
capacity formula.

The relay channel gives the relay only `Y_2^{i-1}` when choosing `X_{2i}`.
The two-way channel gives each terminal its own past outputs. Directed
information is defined as a sum of causal conditional mutual informations.
Decode-forward, compress-forward and noisy-network-coding regions are
inner bounds; cut-set is an outer bound. The NNC Gaussian multicast gap uses
the complete article's cut-dependent value, not the older looser slide bound.
Strong-interference exactness quantifies the information inequalities over
every product input law; the Gaussian within-one-bit theorem names the
two-user Han–Kobayashi model and SNR/INR regime.

## Secrecy, quantum information, and composable QKD (IT12–IT22)

The classical wiretap definition fixes finite memoryless main/eavesdropper
kernels and a code. Weak secrecy is normalized mutual-information leakage;
strong secrecy is unnormalized leakage tending to zero. The finite-DMC
auxiliary capacity uses `U-X-(Y,Z)` and is regularized only where the exact
model requires it; the degraded specialization is single-letter. Universal
hashing fixes a public independent seed, a two-universal hash family, finite
side information, the average conditional guessing probability, and the
event-supremum/half-L1 TV convention. Its TV bound alone is not unnormalized
MI secrecy when output length grows unless `δ log M→0` (or another explicit
continuity bound is proved).

`def-it-von-neumann-entropy` is finite spectral `S(ρ)=-Tr ρ lnρ (nats; divide by ln 2 for bits)`, with
`0 log 0=0`. A state acts on a nonzero finite-dimensional complex space;
root inner products are linear in the first argument. Quantum relative
entropy is finite only when `supp ρ⊆supp σ`; `log σ` is defined on positive
support and the trace is support-restricted. CPTP, partial-trace, POVM,
Stinespring and Choi order come from exact current QC suppliers. The
resolvent/QRE proof ladder in IT20 precedes SSA and Holevo; trace-distance or
fidelity contractivity never substitutes for QRE DPI.

Schumacher coding assumes a finite-dimensional i.i.d. source ensemble and
asymptotic block compression. HSW assumes a finite-input, finite-output
memoryless cq channel and asymptotically vanishing specified decoding error.
Quantum, private, and classical quantum-channel capacity formulas carry the
regularized tensor-power operation where required; entanglement-assisted
capacity is additive, and degradable/erasure simplifications are separately
proved. No general single-letter additivity is inferred.

The QKD item fixes an authenticated classical transcript, insecure quantum
channel, Eve's entire quantum side information, and an ideal/real resource
with an abort switch. Secrecy is abort-weighted trace distance of Alice's key
from a uniform key independent of Eve; correctness is a separate Alice/Bob
disagreement probability. The composition theorem adds their actual error
bounds and does not claim finite-key, device-independent, or implementation
security.


## Finite quantization and trellis definitions (IT23–IT24)

The finite quantizer uses measurable nearest-center cells with fixed ties and a finite second moment. Exact empirical Lloyd iteration uses positive finite weights, unchanged empty centers and exact comparisons; its finite termination does not imply global optimality. The separate exponential enumeration attains a global empirical optimum. Compact companders require positive C1 source and point densities on a fixed finite interval, so inverse derivatives and uniform Taylor constants exist and overload is absent. Finite trellises explicitly allow unreachable states, empty terminal sets, parallel edges, N=0 and negative finite edge costs; infinity is propagated but never subtracted. HMM posterior sequence MAP requires positive evidence. Full local procedures, correctness, termination, resource counts and counterexamples are transcribed in proof-developments.md.


## Exact code, density, and auxiliary-definition closures after audit

Every classical channel decoder is a measurable subprobability test family, with erasure counted as error; encoders are deterministic unless private randomization is named. Finite product kernels remain stochastic by iterated finite sums; standard-Borel kernels use the existing measurable integration suppliers. Capacity is an extended supremum of liminf rates for all sufficiently large blocklengths and vanishing specified error; no maximum is asserted for general alphabets. Nonnegative costs have measurable extended sums, and feasibility is an explicit optimization premise. AWGN always names positive finite noise variance and real/complex normalization. Differential entropy is defined by finite Gaussian cross entropy minus KL for absolutely continuous finite-second-moment laws, allowing minus infinity; Gaussian-smoothed finite code outputs have both finite bounds. Dispersion is defined on every finite input law before the normal approximation uses nearby non-CAID types. Quantum compression and transmission now fix squared entanglement fidelity on a purification or maximally entangled logical reference; average pure-state fidelity is not silently substituted. Distinct classical/private/EA code resources are explicitly separate. Finite source privacy utility is exactly I(Y;Z), not an unnamed distortion objective.

The finite Gacs–Korner common part exists by connected components of the positive bipartite support graph. Its component label is determined by either endpoint on every positive edge, hence is a common random variable; any other common deterministic function is constant along every positive edge and therefore along each component, proving maximality. Zero-mass vertices can be labeled arbitrarily because they are never observed. Wyner common information is a different optimization: conditional independence makes each posterior a product r tensor s. The vector of ab-1 joint-probability coordinates and H(r)+H(s) has ab coordinates. Repeated finite affine-dependence elimination reduces any mixture to ab+1 terms without changing joint law or objective. The compact product of ab+1 mixture weights and posterior simplexes, restricted to the fixed marginal, has a continuous objective, so the minimum is attained. Feasibility holds by U=(X1,X2), whose deterministic conditional posteriors are products. This supplies the separate attainment lemma rather than hiding a minimizer in the definition.
