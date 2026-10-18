# Information Theory track — draft plan

Status: `draft-planning`, independently repaired research scaffold, 2026-10-17. This is a prose scaffold and proposal
inventory for a new `information-theory` category. It is not an authored item
frontier, a registered machine plan, a proof-acceptance decision, or a
publication claim.

## Objective and standards

Build a broad classical information-theory path, followed by rigorous network,
security/privacy, and quantum branches. Each mathematical object is defined
before use, with its underlying measurable or finite spaces, laws, kernels,
units, support, zero conventions, domains, and regularity. Every theorem is
paired with a local proof-development record and exact existing-library
interfaces. New intermediate suppliers are included whenever a named theorem
would otherwise jump over a missing premise. A citation never substitutes for
an authored argument. Proposed page B companions contain worked calculations,
boundary cases, and counterexamples; no B page is a logical supplier.

All logarithms default to the natural logarithm and nats. A base-2 convention
is permitted only where explicitly stated, with conversion by division by
`ln 2`. Finite sums and measurable-space KL definitions are linked by an
explicit bridge. KL is directional, takes value `+infinity` outside absolute
continuity, and uses `0 log 0 = 0`; no proof subtracts two infinite
quantities. Conditional information is constructed from specified kernels or
from regular conditional laws on standard Borel spaces, with null-set
versions handled explicitly. Error probability conventions are stated for
every code. Exact point-to-point and network regions are separated from
general bounds and unresolved capacity questions.

## Proposed A/B pairs, in dependency order

1. **IT01 — Finite-alphabet entropy and divergence.** Reuse the current finite
   entropy/KL definition, then prove log-sum, support-aware finite KL,
   conditional entropy, entropy chain rule, finite Fano, and Markov data
   processing, including equality conditions.
2. **IT02 — Measure-theoretic information and conditioning.** Define general
   law entropy as self-information `I(X;X)` and general MI as joint KL; keep
   both distinct from differential entropy. Define finite-X conditional
   entropy for a general observation, standard-alphabet CMI through the
   same-marginal conditional-product law, and conditional KL against an
   explicit reference kernel. Prove kernel measurability, partition and
   variational KL formulae, and chain rules. Never subtract infinities or
   assert DPI after coarsening the conditioning variable.
3. **IT15 — Method of types and finite large deviations.** Establish type
   class cardinality and probability bounds before finite-alphabet Sanov and
   type-class approximation results.
4. **IT16 — F-divergences, Rényi information, and hypothesis testing.** Give
   precise finite support conventions, prove finite data processing and KL
   limits, and orient the testing `beta` function explicitly.
5. **IT03 — Prefix codes and finite lossless coding.** Define the finite
   source, codeword, prefix, and uniquely decodable extension. Reuse the exact
   binary Kraft supplier where it applies; prove McMillan, Shannon/Huffman
   bounds and finite tie-breaking/termination. Any arithmetic coder must
   specify its exact block/framing model and finite-precision procedure rather
   than attributing guarantees to MacKay's ideal-real interval treatment.
6. **IT04 — IID lossless source coding and the AEP.** Prove the finite
   alphabet IID information AEP, typical-set counting, and fixed-length
   achievability/converse with exact block-error and rate conventions.
7. **IT05 — Stationary ergodic sources and universal coding.** Define entropy
   rate by limsup for general processes; prove its limit under stationarity,
   the finite-alphabet SMB theorem, and stationary/AMS source coding. Separate
   LZ78's expected-rate result for stationary sources from individual-sequence
   finite-state optimality and LZ77's stationary-ergodic phrase-length
   theorem; supply exact dictionary/termination overhead.
8. **IT06 — Rate distortion and lossy source coding.** Define operational and
   information rate-distortion functions, then prove the finite-memoryless
   theorem, bounded-distortion stationary-ergodic theorem, binary Hamming and
   Gaussian squared-error cases under their exact hypotheses. The finite
   Blahut–Arimoto algorithm uses full-support initialization and a certified
   gap; monotonicity alone is not convergence or global optimality.
9. **IT07 — Discrete memoryless channel capacity.** Define channel, block
   code, capacity, and average/maximal error before proving the finite-DMC
   formula, achievability, converse, and alphabet-scoped strong converse.
10. **IT08 — Cost-constrained, Gaussian, and feedback channels.** Define
    average and per-codeword cost separately; prove real/complex AWGN,
    vector Gaussian allocation and memoryless-feedback claims under the exact
    cost/covariance/channel assumptions. A finite capacity supremum need not
    attain its maximum in a general channel.
11. **IT09 — Finite-blocklength bounds and reliability.** Define testing
    `beta` orientation; prove one-shot DT achievability and the meta-converse,
    then prove the finite unconstrained DMC normal approximation only for fixed
    `0<epsilon<1/2` and positive minimum CAID dispersion. Its local proof uses
    the KKT/output-support variance identity, a global KL/Pinsker gap using a locally proved finite simplex-slice
    residual lemma, uniform type converse, Berry–Esseen and quantile
    inversion. Cost, zero-dispersion and `epsilon>=1/2` regimes remain
    separate. Random-codebook expected error proves deterministic existence
    only for its stated average-error model.
12. **IT17 — Point-to-point source–channel separation.** Prove asymptotic
    lossless and lossy separation for finite-memoryless source/channel
   models and stated distortion-limit conditions. The source-code index law is
   generally nonuniform, so the lossy achievability must use a maximal-error
   channel code (or prove the exact reweighting step); convert channel errors
   into excess distortion using bounded distortion. Do not infer zero-delay,
   finite-block or universal matching equivalence.
13. **IT10 — Distributed source coding.** Prove the finite-IID k-source
    Slepian–Wolf region by all-subset converse and independent random-binning
   achievability; distinguish the deterministic Gács–Körner common part from
   Wyner common information, and do not promote distributed lossy inner
   bounds to an exact general region.
14. **IT18 — Lossy source coding with side information.** Prove finite
    memoryless Wyner–Ziv with decoder-only side information, its cardinality
   conditions and the sufficient no-rate-loss criterion: an optimal both-terminal RDF test channel extends to U-X-Y with Xhat=g(Y,U) and I(X;U|Xhat,Y)=0; state the exact normalized
   two-scalar jointly Gaussian quadratic two-encoder region; label
   Berger–Tung as an inner bound for multiple encoders.
15. **IT11 — Multiuser channel networks.** Prove the independent-private-
   message product-input DM-MAC region, plus a separate continuous Gaussian
   random-coding proof for the AWGN-MAC region, and physically degraded
   broadcast region. Include the exact point-to-point DMC feedback no-gain
   result, Ozarow AWGN-MAC feedback region, Cover–Leung feedback inner bound,
   and a stated correlated-source MAC sufficient condition. These are exact
   special cases or named bounds, not a general network formula.
16. **IT19 — Relay and interference channel bounds.** Prove decode-forward,
    compress-forward/noisy-network-coding inner bounds and cut-set outer
   bounds, including the full causal feedback/two-way model and the sharp
   cut-dependent Gaussian multicast gap. State the exact strong-interference
   regime and sourced Gaussian within-one-bit theorem. Historical sources report
   broader capacity gaps; do not register or assert a current open problem
   without a current authoritative literature search.
17. **IT12 — Secrecy and information privacy.** Define weak/strong secrecy,
    equivocation/leakage, finite source privacy–utility, and the wiretap
    channel. Prove the finite-DMC auxiliary secrecy capacity, its degraded
    simplification, resolvability, and leftover hashing with exact leakage,
    output-size, and error conditions.
18. **IT13 — Quantum information measures.** Reuse finite-dimensional QC
    states/channels/measurements and the root linear-first inner-product
    convention. Define von Neumann entropy and support-sensitive quantum KL;
    prove finite entropy identities without importing infinite-dimensional
    claims.
19. **IT20 — Quantum relative entropy, DPI, and strong subadditivity.** Build
    the finite operator proof ladder from inverse compression/resolvent Jensen
    through support regularization and joint convexity; derive QRE DPI, SSA,
    conditional MI nonnegativity, and the Holevo measurement bound. Fidelity
    and trace-distance DPI do not supply QRE DPI.
20. **IT14 — Quantum source compression and classical communication over
    quantum channels.** Prove finite-dimensional Schumacher compression and
    HSW capacity for finite-input, finite-output memoryless cq channels.
21. **IT21 — Quantum channel capacities and entanglement assistance.** Prove
    regularized coherent/private-information capacity, the additive
    entanglement-assisted formula, and exact degradable/erasure cases.
    General quantum/private capacity is not assumed single-letter or
    additive.
22. **IT22 — Quantum key distribution and composable secrecy.** Define the
    authenticated finite protocol, abort-aware ideal/real trace-distance
    criterion, and separate correctness error; prove only the stated
    composable sum-of-errors theorem.

23. **IT23 — Finite quantization, Lloyd iteration, and compact companders.** Define measurable nearest-center quantizers and exact finite empirical procedures. Prove Lloyd strict descent/finite termination separately from global exhaustive optimization; prove only the positive C1 compact one-dimensional compander asymptotic and its optimal point density. Include an exact suboptimal fixed-point counterexample.
24. **IT24 — Finite trellises, Viterbi, and sequence decoding.** Define finite layered path costs including unreachable states and N=0; prove the complete deterministic dynamic program, backtracking correctness, termination and operation counts. Derive finite HMM sequence MAP only with positive evidence, and distinguish it from marginal MAP.

## Evidence, dependencies, and release boundary

The current root tree already contains published foundations in measure and
probability theory, conditional kernels and standard-Borel disintegration,
convexity, statistical KL/Pinsker/Fano bounds, finite-field and combinatorial
coding, ergodic theory, operator theory, and finite-dimensional quantum
states/channels. Exact current IDs, status, source paths, and scope limits are
recorded in `research/information-theory-planning/prerequisite-audit.md`.
The initial exact repository inspection is not an acceptance stamp. The six
source lanes own all source acquisition and reading claims; the source index
records their completed handoff paths and reconciles their precise
hypotheses. Architecture-changing findings are kept in
`coordination.json`.

The integrator handed off exclusive shared ownership and ceased writing on 2026-10-17. The independent audit incorporates the complete scoped source handoffs, adds
well-definedness and algorithm proofs, and supplies actual local developments
for load-bearing results. Exact outstanding mathematical obligations, if any,
are distinguished from unminted production carriers in the final audit report. The
independent auditor owns `audit/` from launch and takes exclusive ownership of
the shared scaffold only after the integrator's explicit `ready-for-independent-audit`
handoff. No source dossier, production item, imported snapshot, shared
`plan-spec.json`, engine file, or Git history is edited here.
