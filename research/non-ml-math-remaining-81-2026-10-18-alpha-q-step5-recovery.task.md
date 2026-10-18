# Step 5 adjudication — group **q**, run `non-ml-math-remaining-81-2026-10-18`

You are the group Alpha for batches 14, 15, 16: 3 A/B pair(s), 6 page(s), 43 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **14**: `research/non-ml-math-remaining-81-2026-10-18-batch-14-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **15**: `research/non-ml-math-remaining-81-2026-10-18-batch-15-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **16**: `research/non-ml-math-remaining-81-2026-10-18-batch-16-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 14 | `finite-blocklength-and-reliability` | A | information-theory | 2520 | `cost-constrained-gaussian-and-feedback-channels`, `concentration-inequalities-and-tail-bounds`, `detection-and-quantification-limits` |
| 14 | `finite-blocklength-and-reliability-examples` | B | information-theory | 2521 | `finite-blocklength-and-reliability` |
| 15 | `point-to-point-source-channel-separation` | A | information-theory | 2522 | `discrete-memoryless-channel-capacity`, `rate-distortion-and-lossy-source-coding` |
| 15 | `point-to-point-source-channel-separation-examples` | B | information-theory | 2523 | `point-to-point-source-channel-separation` |
| 16 | `distributed-source-coding` | A | information-theory | 2524 | `iid-lossless-source-coding-and-the-aep`, `method-of-types-and-finite-large-deviations` |
| 16 | `distributed-source-coding-examples` | B | information-theory | 2525 | `distributed-source-coding` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `finite-blocklength-and-reliability` — Finite-Blocklength Bounds and Reliability (21 item(s))

- `lem-it-finite-affine-slice-error-bound` · lemma — Error bound for a finite simplex and affine slice
- `thm-it-berry-essen-independent-array` · theorem — Berry–Esseen bound for a finite independent array
- `def-it-one-letter-gallager-exponent-functions` · definition — One-letter Gallager and expurgated exponent functions
- `lem-it-dmc-mutual-information-concave-in-input` · lemma — Finite-channel mutual information is concave in the input law
- `lem-it-finite-pinsker-euclidean-bound` · lemma — Finite Pinsker inequality in Euclidean norm
- `lem-it-gallager-input-maxima-attained` · lemma — Gallager and expurgated input-law maxima are attained
- `def-it-channel-dispersion` · definition — Conditional information variance and DMC dispersion
- `def-it-gallager-and-expurgated-exponent-functions` · definition — Gallager, random-coding, expurgated, and sphere-packing functions
- `def-it-reliability-function` · definition — Average and maximal error reliability exponents
- `lem-it-dmc-capacity-output-law-is-unique` · lemma — The capacity-achieving output law is unique
- `lem-it-optimized-constant-composition-gallager-identity` · lemma — Globally optimized constant-composition and Gallager functions agree
- `thm-it-one-shot-decision-threshold-achievability` · theorem — Finite-DMC dependence-testing achievability bound
- `thm-it-one-shot-meta-converse` · theorem — Finite-DMC hypothesis-testing meta-converse
- `lem-it-dmc-caid-conditional-variance-identity` · lemma — A CAID's information-density variance equals its conditional dispersion
- `lem-it-dmc-dispersion-attains-minimum` · lemma — DMC minimum and maximum dispersion are attained
- `thm-it-dmc-uniform-quadratic-capacity-decay` · theorem — Finite-DMC information deficit controls squared distance to the CAID set
- `thm-it-expurgated-error-exponent-lower-bound` · theorem — Gallager expurgated exponent lower bound
- `thm-it-random-coding-error-exponent` · theorem — Gallager random-coding exponent lower bound
- `thm-it-sphere-packing-strict-feasibility-converse` · theorem — Sphere-packing converse above the finite-divergence threshold
- `thm-it-normal-approximation-nondegenerate-dmc` · theorem — Nondegenerate normal approximation for finite unconstrained DMCs
- `thm-it-error-exponent-zero-above-capacity` · theorem — The error exponent is zero above finite-DMC capacity

### `finite-blocklength-and-reliability-examples` — Finite-Blocklength Bounds and Reliability — Examples (3 item(s))

- `cex-it-expected-random-code-error-does-not-give-maximal-error` · counterexample — Small expected average code error need not control maximal error
- `ex-it-dmc-one-shot-error-bound` · example — Exact evaluation of a one-use BSC dependence-testing bound
- `ex-it-meta-converse-binary-channel` · example — Exact beta value for a one-use BSC meta-converse test

### `point-to-point-source-channel-separation` — Point-to-Point Source–Channel Separation (5 item(s))

- `def-it-point-to-point-joint-source-channel-code` · definition — Finite-alphabet point-to-point joint source-channel codes
- `lem-it-finite-iid-source-lossless-code-achievability` · lemma — Finite-IID lossless source coding above entropy
- `lem-it-finite-iid-rate-distortion-mutual-information-bound` · lemma — Finite-IID rate-distortion mutual-information converse
- `thm-it-point-to-point-lossless-source-channel-separation` · theorem — Lossless separation for finite IID sources and finite DMCs
- `thm-it-point-to-point-lossy-source-channel-separation` · theorem — Lossy separation for finite IID sources and finite DMCs

### `point-to-point-source-channel-separation-examples` — Point-to-Point Source–Channel Separation — Examples (2 item(s))

- `ex-it-point-to-point-source-channel-rate-budget` · example — A finite-alphabet source-channel rate budget
- `cex-it-asymptotic-source-channel-threshold-does-not-give-zero-error-at-finite-blocklength` · counterexample — Strict asymptotic separation need not give zero finite-block error

### `distributed-source-coding` — Distributed Source Coding (10 item(s))

- `def-it-gacs-korner-and-wyner-common-information` · definition — Deterministic Gács–Körner common part and Wyner common information
- `lem-it-finite-conditional-entropy-continuity` · lemma — Continuity of finite conditional entropy in the joint law
- `def-it-finite-iid-multisource` · definition — Finite-alphabet IID multisource
- `lem-it-conditional-type-class-cardinality` · lemma — Conditional type-class cardinality bound
- `def-it-multiterminal-lossless-code` · definition — Finite fixed-length multiterminal lossless code
- `lem-it-multisource-block-conditional-law-factorization` · lemma — Conditional block law factors across IID coordinates
- `def-it-jointly-typical-multisource-blocks` · definition — Jointly typical blocks for a finite IID multisource
- `lem-it-conditional-typical-fan-cardinality` · lemma — Conditional typical-set fan cardinality bound
- `lem-it-multisource-typicality-probability` · lemma — Joint typicality probability tends to one for a finite IID multisource
- `thm-it-slepian-wolf-rate-region` · theorem — Finite-IID k-source Slepian–Wolf rate region

### `distributed-source-coding-examples` — Distributed Source Coding — Examples (2 item(s))

- `ex-it-binary-symmetric-slepian-wolf-region` · example — Binary symmetric source: Slepian–Wolf corners and common part
- `ex-it-shared-random-binning-collision-probability` · example — Shared random bins do not factor across encoders

## Your seams

Your pages depend on another group's:

- `finite-blocklength-and-reliability` requires `cost-constrained-gaussian-and-feedback-channels` (group p, batch 13)
- `point-to-point-source-channel-separation` requires `discrete-memoryless-channel-capacity` (group p, batch 12)
- `point-to-point-source-channel-separation` requires `rate-distortion-and-lossy-source-coding` (group p, batch 11)
- `distributed-source-coding` requires `iid-lossless-source-coding-and-the-aep` (group o, batch 9)
- `distributed-source-coding` requires `method-of-types-and-finite-large-deviations` (group n, batch 6)

Another group's pages depend on yours:

- `lossy-source-coding-with-side-information` (group r) requires your `distributed-source-coding`

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
