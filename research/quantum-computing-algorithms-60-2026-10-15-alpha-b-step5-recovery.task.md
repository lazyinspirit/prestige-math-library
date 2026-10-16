# Step 5 adjudication — group **b**, run `quantum-computing-algorithms-60-2026-10-15`

You are the group Alpha for batches 28, 29, 30: 3 A/B pair(s), 6 page(s), 52 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **28**: `research/quantum-computing-algorithms-60-2026-10-15-batch-28-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **29**: `research/quantum-computing-algorithms-60-2026-10-15-batch-29-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **30**: `research/quantum-computing-algorithms-60-2026-10-15-batch-30-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/quantum-computing-algorithms-60-2026-10-15-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 28 | `simon-algorithm-and-finite-field-recovery` | A | quantum-algorithms | 2220 | `exact-oracle-algorithms`, `gaussian-elimination-and-row-reduction`, `primes-and-the-fundamental-theorem-of-arithmetic`, `series-and-nonnegative-tests`, `reversible-arithmetic-and-oracle-conversion`, `congruences-and-the-chinese-remainder-theorem`, `linear-maps-rank-nullity-and-quotient-spaces`, `computational-problems-promises-and-cost-models`, `measurements-povms-and-instruments`, `finite-probability-spaces-and-random-variables`, `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces` |
| 28 | `simon-algorithm-and-finite-field-recovery-examples` | B | quantum-algorithms | 2221 | `simon-algorithm-and-finite-field-recovery` |
| 29 | `finite-abelian-fourier-analysis` | A | quantum-algorithms | 2222 | `cosets-and-lagranges-theorem`, `cyclic-groups-and-direct-products`, `finite-abelian-characters-for-combinatorics`, `group-homomorphisms-and-the-isomorphism-theorems`, `monoids-groups-and-subgroups`, `normal-subgroups-and-quotient-groups`, `rings-subrings-and-integral-domains`, `roots-and-rational-powers`, `the-complex-exponential-and-eulers-formula`, `the-structure-of-finite-abelian-groups`, `vector-spaces-and-subspaces` |
| 29 | `finite-abelian-fourier-analysis-examples` | B | quantum-algorithms | 2223 | `finite-abelian-fourier-analysis` |
| 30 | `quantum-fourier-transform-circuits` | A | quantum-algorithms | 2224 | `approximate-universality-and-solovay-kitaev`, `finite-fourier-analysis-and-the-fast-fourier-transform`, `roots-and-rational-powers`, `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`, `registers-tensor-products-and-partial-trace`, `finite-probability-spaces-and-random-variables`, `controlled-gates-phase-and-entanglement`, `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`, `circuit-syntax-denotational-semantics-and-measurement`, `the-spectral-theorem-and-singular-value-decomposition`, `inner-product-spaces-and-orthogonality`, `trigonometric-and-oscillatory-examples-in-one-variable` |
| 30 | `quantum-fourier-transform-circuits-examples` | B | quantum-algorithms | 2225 | `quantum-fourier-transform-circuits` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `simon-algorithm-and-finite-field-recovery` — Simon’s Algorithm and Finite-Field Recovery (16 item(s))

- `thm-qa-binary-field-f2-is-a-field` · theorem — The quotient Z/2 is the binary field
- `def-qa-binary-vector-space` · definition — The coordinate vector space over F2
- `alg-qa-f2-gaussian-elimination` · algorithm — Gaussian elimination over F2 for Simon recovery
- `lem-qa-computational-basis-measurement-law` · lemma — Computational-basis measurement weights are squared amplitudes
- `def-qa-simon-promise` · definition — Simon hidden-XOR-period promise
- `lem-qa-simon-annihilator-subspace-basis` · lemma — The Simon annihilator is an (n−1)-dimensional binary subspace
- `alg-qa-simon-one-sample` · algorithm — One Simon Fourier-sampling sample
- `def-qa-simon-random-instance-distribution` · definition — Random Simon-oracle distribution for a classical lower bound
- `thm-qa-simon-postquery-coset-state` · theorem — Simon query and output measurement produce a coset pair
- `thm-qa-f2-gaussian-elimination-correct-and-cost` · theorem — F2 row reduction returns the unique Simon mask
- `thm-qa-simon-classical-randomized-query-lower-bound` · theorem — Classical randomized Simon search needs exponential queries
- `thm-qa-simon-hadamard-sampling-law` · theorem — Simon samples uniformly from s-perp
- `def-qa-simon-rank-process` · definition — Simon independent-sample rank process
- `thm-qa-simon-rank-growth-probability` · theorem — Simon rank growth probability
- `alg-qa-simon-recovery-with-budget` · algorithm — Budgeted Simon recovery with explicit failure branch
- `thm-qa-simon-recovery-correctness-and-query-bound` · theorem — Simon recovery succeeds with probability at least 1-delta

### `simon-algorithm-and-finite-field-recovery-examples` — Simon’s Algorithm and Finite-Field Recovery — Examples (1 item(s))

- `ex-qa-simon-finite-rank-and-sampling` · example — Finite Simon rank and sampling examples

### `finite-abelian-fourier-analysis` — Finite Abelian Fourier Analysis (19 item(s))

- `def-qa-finite-abelian-character-dual` · definition — Dual group of a finite abelian group
- `def-qa-finite-abelian-convolution` · definition — Unnormalized convolution on a finite abelian group
- `lem-qa-finite-character-values-have-unit-modulus` · lemma — Values of characters of finite groups have modulus one
- `lem-qa-cyclic-group-has-n-characters` · lemma — A cyclic group of order n has exactly n additive characters
- `lem-qa-character-dual-of-a-product-factors` · lemma — Characters of a finite product factor coordinatewise
- `def-qa-finite-abelian-subgroup-annihilator` · definition — Character annihilator of a subgroup
- `thm-qa-finite-abelian-dual-has-same-cardinality` · theorem — A finite abelian group and its character dual have equal order
- `thm-qa-finite-abelian-character-dual-is-finite-abelian-group` · theorem — Pointwise character dual is a finite abelian group
- `thm-qa-finite-abelian-dual-character-orthogonality` · theorem — Dual-index character orthogonality
- `def-qa-normalized-finite-abelian-fourier-transform` · definition — Normalized Fourier transform on a finite abelian group
- `thm-qa-finite-abelian-subgroup-annihilator-cardinality` · theorem — Subgroup-annihilator cardinality
- `lem-qa-finite-abelian-annihilators-are-subgroups` · lemma — Annihilators of subgroups are subgroups
- `thm-qa-finite-abelian-fourier-transform-is-unitary` · theorem — Finite abelian Fourier transform is unitary
- `thm-qa-finite-abelian-fourier-convolution` · theorem — Fourier transform of unnormalized convolution
- `thm-qa-finite-abelian-evaluation-map-isomorphism` · theorem — Finite abelian group is canonically isomorphic to its double dual
- `thm-qa-finite-abelian-coset-fourier-transform` · theorem — Fourier transform of a subgroup coset indicator
- `thm-qa-finite-abelian-fourier-inversion` · theorem — Finite abelian Fourier inversion
- `thm-qa-finite-abelian-parseval` · theorem — Finite abelian Parseval identity
- `thm-qa-finite-abelian-double-annihilator` · theorem — Double annihilator returns the subgroup

### `finite-abelian-fourier-analysis-examples` — Finite Abelian Fourier Analysis — Examples (1 item(s))

- `ex-qa-finite-abelian-fourier-tables-and-convolution` · example — Finite abelian Fourier and convolution examples

### `quantum-fourier-transform-circuits` — Quantum Fourier-Transform Circuits (14 item(s))

- `thm-qa-projective-operator-closeness-bounds-output-distribution` · theorem — Projective operator closeness bounds output distributions
- `lem-qa-pi-over-two-exceeds-sqrt-two` · lemma — The half-turn constant exceeds $\sqrt2$
- `def-qa-cyclic-quantum-fourier-transform` · definition — Positive-sign cyclic quantum Fourier transform
- `lem-qa-binary-qft-product-factorization` · lemma — Binary factorization of QFT basis output
- `lem-qa-tensor-extension-preserves-operator-norm` · lemma — Operator Norm Is Unchanged by Spectator Registers
- `lem-qa-swap-is-three-cnot-circuit` · lemma — A SWAP Is Three CNOTs
- `def-qa-qft-gate-cost-model` · definition — QFT ideal and finite-set gate-cost models
- `alg-qa-exact-binary-qft-circuit` · algorithm — Exact binary QFT circuit
- `thm-qa-exact-binary-qft-circuit-correct` · theorem — Exact binary QFT circuit correctness
- `thm-qa-exact-binary-qft-gate-count` · theorem — Exact binary QFT ideal gate count
- `alg-qa-truncated-binary-qft-circuit` · algorithm — Truncated binary QFT
- `thm-qa-truncated-qft-operator-norm-error` · theorem — Operator-norm error of QFT truncation
- `thm-qa-truncated-qft-gate-count` · theorem — Truncated QFT ideal gate count
- `thm-qa-qft-finite-gate-set-compile-cost` · theorem — Finite universal-gate compilation cost for the truncated QFT

### `quantum-fourier-transform-circuits-examples` — Quantum Fourier-Transform Circuits — Examples (1 item(s))

- `ex-qa-qft-fourier-circuit-order-and-truncation` · example — QFT circuit order and truncation examples

## Your seams

Your pages depend on another group's:

- `simon-algorithm-and-finite-field-recovery` requires `exact-oracle-algorithms` (group a, batch 27)
- `simon-algorithm-and-finite-field-recovery` requires `reversible-arithmetic-and-oracle-conversion` (group a, batch 26)
- `simon-algorithm-and-finite-field-recovery` requires `computational-problems-promises-and-cost-models` (group a, batch 25)
- `simon-algorithm-and-finite-field-recovery` requires `measurements-povms-and-instruments` (group n, batch 4)
- `simon-algorithm-and-finite-field-recovery` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces` (group m, batch 1)
- `quantum-fourier-transform-circuits` requires `approximate-universality-and-solovay-kitaev` (group p, batch 12)
- `quantum-fourier-transform-circuits` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces` (group m, batch 1)
- `quantum-fourier-transform-circuits` requires `registers-tensor-products-and-partial-trace` (group m, batch 2)
- `quantum-fourier-transform-circuits` requires `controlled-gates-phase-and-entanglement` (group o, batch 8)
- `quantum-fourier-transform-circuits` requires `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates` (group o, batch 7)
- `quantum-fourier-transform-circuits` requires `circuit-syntax-denotational-semantics-and-measurement` (group o, batch 9)

Another group's pages depend on yours:

- `quantum-phase-estimation` (group c) requires your `quantum-fourier-transform-circuits`
- `finite-abelian-hidden-subgroup-algorithms` (group d) requires your `finite-abelian-fourier-analysis`
- `quantum-optimization-sdp-and-variational-algorithms` (group j) requires your `quantum-fourier-transform-circuits`
- `period-hidden-shift-and-number-theoretic-algorithms` (group k) requires your `finite-abelian-fourier-analysis`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/quantum-computing-algorithms-60-2026-10-15-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Historical Step-5 closure recovery, `quantum-computing-algorithms-60-2026-10-15`

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
