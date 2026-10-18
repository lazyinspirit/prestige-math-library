# Step 5 adjudication — group **o**, run `non-ml-math-remaining-81-2026-10-18`

You are the group Alpha for batches 8, 9, 10: 3 A/B pair(s), 6 page(s), 66 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **8**: `research/non-ml-math-remaining-81-2026-10-18-batch-8-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **9**: `research/non-ml-math-remaining-81-2026-10-18-batch-9-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **10**: `research/non-ml-math-remaining-81-2026-10-18-batch-10-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/non-ml-math-remaining-81-2026-10-18-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 8 | `prefix-codes-and-finite-lossless-coding` | A | information-theory | 2508 | `finite-alphabet-entropy-and-divergence`, `kolmogorov-complexity-and-algorithmic-randomness` |
| 8 | `prefix-codes-and-finite-lossless-coding-examples` | B | information-theory | 2509 | `prefix-codes-and-finite-lossless-coding` |
| 9 | `iid-lossless-source-coding-and-the-aep` | A | information-theory | 2510 | `weak-laws-and-series-of-independent-random-variables`, `finite-alphabet-entropy-and-divergence` |
| 9 | `iid-lossless-source-coding-and-the-aep-examples` | B | information-theory | 2511 | `iid-lossless-source-coding-and-the-aep` |
| 10 | `stationary-ergodic-sources-and-universal-coding` | A | information-theory | 2512 | `iid-lossless-source-coding-and-the-aep`, `stationary-markov-chains-and-ergodic-limits`, `measure-theoretic-information-and-conditioning`, `prefix-codes-and-finite-lossless-coding` |
| 10 | `stationary-ergodic-sources-and-universal-coding-examples` | B | information-theory | 2513 | `stationary-ergodic-sources-and-universal-coding` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `prefix-codes-and-finite-lossless-coding` — Prefix Codes and Finite Lossless Coding (18 item(s))

- `def-finite-discrete-source-and-blocks` · definition — Finite discrete sources and product blocks
- `lem-finite-gibbs-inequality` · lemma — Nonnegativity of finite relative entropy with a positive reference
- `def-base-two-entropy-of-a-finite-source` · definition — Base-two entropy of a finite source
- `def-binary-source-code-and-extension` · definition — Finite binary source codes, extension, and expected length
- `def-binary-prefix-code` · definition — Binary prefix codes and their code trees
- `thm-mcmillan-inequality-for-finite-binary-codes` · theorem — McMillan inequality for finite binary uniquely decodable codes
- `def-ideal-real-arithmetic-interval-code` · definition — Ideal-real arithmetic interval coding for a fixed block
- `lem-prefix-codes-are-uniquely-decodable` · lemma — Every finite binary prefix code is uniquely decodable
- `thm-binary-kraft-criterion-for-finite-lengths` · theorem — Binary Kraft criterion for finite positive codeword lengths
- `alg-binary-huffman-coding` · algorithm — Deterministic binary Huffman coding
- `thm-ideal-real-arithmetic-interval-code-is-prefix-and-lossless` · theorem — Ideal-real interval coding is prefix-free and lossless
- `alg-finite-register-rational-arithmetic-coder` · algorithm — Exact finite-register arithmetic coding for rational block sources
- `thm-shannon-bounds-for-finite-binary-codes` · theorem — Shannon bounds for finite binary codes
- `thm-huffman-coding-is-prefix-optimal` · theorem — The deterministic Huffman code is prefix-optimal
- `cor-ideal-real-arithmetic-code-average-length` · corollary — Ideal-real arithmetic coding is within two bits per block
- `thm-finite-register-rational-arithmetic-coder-is-prefix-and-lossless` · theorem — The rational finite-register arithmetic code is prefix-free and lossless
- `cor-huffman-code-lengths-are-within-one-bit-of-entropy` · corollary — Huffman expected length is within one bit of entropy
- `cor-finite-register-arithmetic-coder-average-length` · corollary — The finite-register rational coder is within two bits per block

### `prefix-codes-and-finite-lossless-coding-examples` — Prefix Codes and Finite Lossless Coding — Examples (3 item(s))

- `ex-uniquely-decodable-code-not-prefix` · example — A uniquely decodable binary code that is not prefix-free
- `ex-finite-register-arithmetic-coder-block-ab` · example — Exact rational interval coding of the block AB
- `ex-huffman-dyadic-source-and-code-tree` · example — Huffman tree for a dyadic three-symbol source

### `iid-lossless-source-coding-and-the-aep` — IID Lossless Source Coding and the AEP (7 item(s))

- `def-finite-law-self-information-and-entropy` · definition — Self-information and surprisal variance for a finite law
- `def-finite-alphabet-iid-source` · definition — Finite-alphabet IID source
- `def-finite-source-information-density-and-typical-set` · definition — Information density and typical sets for a finite source
- `def-fixed-length-lossless-block-code` · definition — Deterministic fixed-length binary block code and block error
- `lem-finite-alphabet-iid-information-aep` · lemma — Finite-alphabet IID information AEP with a variance bound
- `cor-aep-typical-set-probability-and-size-bounds` · corollary — Typical-set probability and cardinality bounds
- `thm-fixed-length-lossless-source-coding` · theorem — Fixed-length lossless source coding at the entropy rate

### `iid-lossless-source-coding-and-the-aep-examples` — IID Lossless Source Coding and the AEP — Examples (3 item(s))

- `ex-correlated-bernoulli-source-fails-the-iid-aep` · example — A perfectly dependent Bernoulli source has zero block information rate
- `ex-independent-nonidentical-source-has-no-information-rate-limit` · example — Independent non-identical finite sources can have no information-rate limit
- `ex-bernoulli-aep-and-typical-set-count` · example — Bernoulli information density and exact typical-set counts

### `stationary-ergodic-sources-and-universal-coding` — Stationary Ergodic Sources and Universal Coding (32 item(s))

- `def-finite-alphabet-stationary-source` · definition — Finite-alphabet stationary source
- `def-finite-block-information-and-entropy` · definition — Finite-block information and entropy in bits
- `def-finite-support-binary-prefix-code` · definition — Binary prefix codes on finite supports
- `lem-triangular-information-averages` · lemma — Triangular averages of finite-past information converge to the infinite-past average
- `lem-finite-kl-nonnegative-choice-free` · lemma — Finite KL nonnegativity for subprobability references
- `alg-lz78-incremental-prefix-code` · algorithm — Finite-block LZ78 incremental prefix code
- `def-ams-source-and-stationary-mean` · definition — Asymptotically mean stationary sources
- `def-finite-block-source-code` · definition — Fixed-length lossless block codes and error probability
- `def-finite-state-compressibility` · definition — Finite-state compressibility of an individual sequence
- `def-general-process-information-rate` · definition — Information rate of a general finite-alphabet process
- `def-lz77-previous-match-phrase-length` · definition — LZ77 previous-match length and recurrence time
- `def-past-information-density-finite-alphabet` · definition — Finite-past information densities
- `lem-prefix-code-entropy-bounds` · lemma — Entropy lower and Shannon upper bounds for finite prefix codes
- `lem-finite-block-entropy-chain-rule` · lemma — Finite entropy chain rule and monotonicity under conditioning
- `lem-aep-implies-fixed-rate-lossless-coding` · lemma — AEP criterion for fixed-rate lossless coding
- `lem-lz78-distinct-parse-ziv-inequality` · lemma — Distinct-phrase count and Ziv inequality
- `thm-ams-stationary-mean-asymptotic-dominance` · theorem — The stationary mean asymptotically dominates an AMS law
- `thm-lz78-prefix-code-lossless` · theorem — Losslessness and prefix property of the explicit LZ78 code
- `thm-stationary-entropy-rate-limit` · theorem — Entropy-rate limit for a stationary finite-alphabet source
- `lem-ams-stationary-mean-dominates-tail-events` · lemma — A null future-tail event under the stationary mean is null under the AMS law
- `thm-lz78-individual-sequence-finite-state-optimality` · theorem — LZ78 finite-state optimality for individual sequences
- `lem-finite-alphabet-past-information-convergence` · lemma — Convergence and integrable envelope for finite-past information
- `thm-stationary-expected-prefix-code-rate` · theorem — Expected lossless prefix-code rate for stationary sources
- `thm-componentwise-shannon-mcmillan-breiman` · theorem — Componentwise Shannon–McMillan–Breiman theorem
- `thm-lz78-stationary-expected-rate` · theorem — LZ78 expected-rate universality for stationary sources
- `lem-infinite-past-conditional-block-information-rate` · lemma — Conditional block information rate given the infinite past
- `cor-ergodic-shannon-mcmillan-breiman` · corollary — Ergodic Shannon–McMillan–Breiman theorem
- `cor-smb-limit-is-conditional-entropy-under-ac` · corollary — Invariant conditional-entropy description of the SMB limit
- `cor-fixed-rate-lossless-coding-stationary-ergodic` · corollary — Fixed-rate source coding theorem for stationary ergodic sources
- `thm-ams-ergodic-information-aep` · theorem — Shannon–McMillan limit for finite-alphabet AMS ergodic sources
- `thm-lz77-phrase-length-entropy-rate` · theorem — Stationary-ergodic LZ77 phrase-length theorem
- `cor-fixed-rate-lossless-coding-ams-ergodic` · corollary — Fixed-rate lossless coding for AMS ergodic sources

### `stationary-ergodic-sources-and-universal-coding-examples` — Stationary Ergodic Sources and Universal Coding — Examples (3 item(s))

- `ex-nonstationary-block-entropy-rate-oscillation` · example — A nonstationary independent source with no entropy-rate limit
- `ex-lz78-parse-with-explicit-terminator` · example — LZ78 parsing of a finite binary word
- `ex-iid-and-markov-source-entropy-rates` · example — IID and two-state Markov entropy rates

## Your seams

Your pages depend on another group's:

- `prefix-codes-and-finite-lossless-coding` requires `finite-alphabet-entropy-and-divergence` (group m, batch 4)
- `iid-lossless-source-coding-and-the-aep` requires `finite-alphabet-entropy-and-divergence` (group m, batch 4)
- `stationary-ergodic-sources-and-universal-coding` requires `measure-theoretic-information-and-conditioning` (group n, batch 5)

Another group's pages depend on yours:

- `rate-distortion-and-lossy-source-coding` (group p) requires your `stationary-ergodic-sources-and-universal-coding`
- `distributed-source-coding` (group q) requires your `iid-lossless-source-coding-and-the-aep`
- `secrecy-and-information-privacy` (group s) requires your `iid-lossless-source-coding-and-the-aep`
- `quantum-source-compression-and-cq-capacity` (group t) requires your `iid-lossless-source-coding-and-the-aep`
- `finite-trellis-viterbi-and-sequence-decoding` (group u) requires your `prefix-codes-and-finite-lossless-coding`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/non-ml-math-remaining-81-2026-10-18-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Historical Step-5 closure recovery, `non-ml-math-remaining-81-2026-10-18`

Historical compatibility task only. Preserve historical exact-tuple decisions
as evidence; this template grants no current repair or certification authority.
Historical receipts constrain `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`; do not reinterpret those records
as current round coverage.

Current rounds use `tools/step5-workflow.mjs`, `briefs/step5-adjudicator.md`
and `briefs/step5-owner-repair.md`. Follow those briefs
and the generated round-bound task. Repair all confirmed defects, including
nonfatal defects, and continue downstream repair until complete before the
single central certification pass.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
