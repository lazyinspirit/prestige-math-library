# Step 5 adjudication — group **d**, run `quantum-computing-algorithms-60-2026-10-15`

You are the group Alpha for batches 34, 35, 36: 3 A/B pair(s), 6 page(s), 56 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **34**: `research/quantum-computing-algorithms-60-2026-10-15-batch-34-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **35**: `research/quantum-computing-algorithms-60-2026-10-15-batch-35-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **36**: `research/quantum-computing-algorithms-60-2026-10-15-batch-36-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 34 | `finite-abelian-hidden-subgroup-algorithms` | A | quantum-algorithms | 2232 | `uniform-circuit-families-promise-problems-and-complexity`, `finite-abelian-fourier-analysis`, `effective-numberings-reductions-resources-and-randomness`, `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`, `reversible-computation-ancillas-and-coherent-oracles`, `registers-tensor-products-and-partial-trace`, `measurements-povms-and-instruments`, `circuit-syntax-denotational-semantics-and-measurement`, `pure-and-mixed-states-ensembles-and-schmidt-decomposition` |
| 34 | `finite-abelian-hidden-subgroup-algorithms-examples` | B | quantum-algorithms | 2233 | `finite-abelian-hidden-subgroup-algorithms` |
| 35 | `grover-search-and-invariant-plane-rotations` | A | quantum-algorithms | 2234 | `reversible-arithmetic-and-oracle-conversion`, `computational-problems-promises-and-cost-models`, `registers-tensor-products-and-partial-trace`, `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`, `controlled-gates-phase-and-entanglement`, `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`, `circuit-syntax-denotational-semantics-and-measurement`, `inner-product-spaces-and-orthogonality`, `pure-and-mixed-states-ensembles-and-schmidt-decomposition`, `uniform-circuit-families-promise-problems-and-complexity`, `power-and-sample-size-planning`, `trigonometric-and-oscillatory-examples-in-one-variable` |
| 35 | `grover-search-and-invariant-plane-rotations-examples` | B | quantum-algorithms | 2235 | `grover-search-and-invariant-plane-rotations` |
| 36 | `amplitude-amplification` | A | quantum-algorithms | 2236 | `computational-problems-promises-and-cost-models`, `pure-and-mixed-states-ensembles-and-schmidt-decomposition`, `measurements-povms-and-instruments`, `controlled-gates-phase-and-entanglement`, `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`, `inner-product-spaces-and-orthogonality`, `reversible-computation-ancillas-and-coherent-oracles`, `uniform-circuit-families-promise-problems-and-complexity`, `trigonometric-and-oscillatory-examples-in-one-variable` |
| 36 | `amplitude-amplification-examples` | B | quantum-algorithms | 2237 | `amplitude-amplification` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `finite-abelian-hidden-subgroup-algorithms` — Finite Abelian Hidden-Subgroup Algorithms (10 item(s))

- `rem-qa-nonabelian-hidden-subgroup-scope` · remark — Scope limits for nonabelian hidden-subgroup problems
- `lem-qa-annihilator-restriction-cut` · lemma — A Fourier sample cuts a larger common kernel
- `lem-qa-common-kernel-repetition-bound` · lemma — Chernoff repetition bound for common-kernel recovery
- `def-qa-finite-abelian-hidden-subgroup-problem` · definition — Finite abelian hidden-subgroup promise and output encoding
- `alg-qa-finite-abelian-hidden-subgroup-sample` · algorithm — One finite abelian hidden-subgroup Fourier sample
- `lem-qa-hidden-coset-state-law` · lemma — Discarding the hiding register yields a coset-state mixture
- `alg-qa-finite-abelian-hidden-subgroup-reconstruction` · algorithm — Finite abelian hidden-subgroup common-kernel reconstruction
- `thm-qa-finite-abelian-hidden-subgroup-sample-law` · theorem — Fourier samples are uniform in the annihilator
- `thm-qa-finite-abelian-hidden-subgroup-reconstruction-success` · theorem — Finite abelian hidden-subgroup reconstruction succeeds
- `thm-qa-finite-abelian-hidden-subgroup-cost` · theorem — Finite abelian hidden-subgroup query and circuit costs

### `finite-abelian-hidden-subgroup-algorithms-examples` — Finite Abelian Hidden-Subgroup Algorithms — Examples (2 item(s))

- `ex-qa-hsp-common-kernel-recovery` · example — Common-kernel subgroup recovery in a product of cyclic groups
- `ex-qa-hsp-cyclic-subgroup-annihilator` · example — Fourier sampling for a cyclic subgroup

### `grover-search-and-invariant-plane-rotations` — Grover Search and Invariant-Plane Rotations (21 item(s))

- `def-qa-11-marked-search-problem` · definition — Finite marked-item search and its bit oracle
- `alg-qa-11-grover-iterate` · algorithm — One Grover iterate in the standard bit-query model
- `lem-qa-11-good-bad-decomposition` · lemma — Orthogonal marked and unmarked components of the uniform state
- `thm-qa-11-grover-iterate-query-cost` · theorem — One Grover iterate uses one standard bit query
- `alg-qa-11-known-count-grover-search` · algorithm — Known-count Grover search by exact integer maximization
- `lem-qa-11-grover-invariant-plane-rotation` · lemma — The Grover iterate rotates the marked/unmarked plane
- `alg-qa-11-known-count-random-iteration-search` · algorithm — Known-count search by randomized Grover iteration
- `alg-qa-11-bbht-unknown-count-search` · algorithm — BBHT search when the marked count is unknown
- `thm-qa-11-exact-integer-iteration-formula` · theorem — Exact success probability after an integer number of Grover iterates
- `prop-qa-11-known-count-preprocessing-cost` · proposition — Bit cost of exact known-count iteration selection
- `prop-qa-11-known-count-random-selection-bit-cost` · proposition — Classical bit cost of randomized known-count search
- `prop-qa-11-known-count-random-gate-accounting` · proposition — Gate and reflection accounting for randomized known-count search
- `thm-qa-11-integer-iteration-regime` · theorem — Integer rounding gives a high-success Grover iterate
- `lem-qa-11-random-iteration-average` · lemma — Average Grover success for a uniform integer iteration count
- `lem-qa-11-bbht-stage-success-bound` · lemma — Constant BBHT stage success beyond the threshold scale
- `thm-qa-11-bbht-termination-and-success` · theorem — Unknown-count search halts almost surely when a marked item exists
- `thm-qa-11-known-count-success-bound` · theorem — Success guarantee and boundary behavior of known-count Grover search
- `thm-qa-11-known-count-random-success` · theorem — Nine-round randomized known-count search succeeds with probability at least two-thirds
- `thm-qa-11-bbht-expected-query-cost` · theorem — Expected bit-query cost of unknown-count BBHT search
- `thm-qa-11-known-count-query-cost` · theorem — Known-count Grover search uses O of the square root of N over t bit queries
- `thm-qa-11-known-count-random-query-cost` · theorem — Query cost of randomized known-count Grover search

### `grover-search-and-invariant-plane-rotations-examples` — Grover Search and Invariant-Plane Rotations — Examples (2 item(s))

- `ex-qa-11-small-grover-rotation` · example — Exact Grover rotation for four addresses and one marked item
- `cex-qa-11-rounding-can-overshoot` · counterexample — A real-valued optimum is not a fractional Grover iteration

### `amplitude-amplification` — Amplitude Amplification (19 item(s))

- `def-qa-12-prepared-success-subspace` · definition — Prepared unitary and success subspace for amplitude amplification
- `lem-qa-12-amplification-plane-invariant` · lemma — Amplitude-amplification invariant plane
- `alg-qa-12-amplitude-amplification` · algorithm — Amplitude amplification with a fixed integer iteration count
- `alg-qa-12-unknown-amplitude-search` · algorithm — Unknown-amplitude randomized search
- `alg-qa-12-arbitrary-phase-amplification` · algorithm — Amplitude amplification with independently chosen phase rotations
- `thm-qa-12-amplification-rotation-correctness` · theorem — Exact success probability after amplitude amplification
- `alg-qa-12-known-amplitude-amplification` · algorithm — Known-amplitude amplification with integer rounding
- `alg-qa-12-exact-success-amplification` · algorithm — Exact success amplification by attenuating the good branch
- `thm-qa-12-arbitrary-phase-matching` · theorem — Phase-matching condition for amplitude-amplification rotations
- `thm-qa-12-fixed-amplification-query-cost` · theorem — Fixed-round amplitude amplification query count
- `thm-qa-12-known-amplitude-success-bound` · theorem — Known-amplitude success bound
- `thm-qa-12-exact-success-guarantee` · theorem — Exact success for known positive amplitude with explicit dilution
- `thm-qa-12-unknown-amplitude-success` · theorem — Unknown-amplitude search has no false positives and halts almost surely
- `thm-qa-12-phase-mismatch-robustness` · theorem — Success bound under an explicit amplitude-amplification phase mismatch
- `thm-qa-12-arbitrary-phase-query-cost` · theorem — Arbitrary-phase amplification query count
- `prop-qa-12-amplitude-access-cost-accounting` · proposition — Amplitude-amplification access and resource accounting
- `thm-qa-12-known-amplitude-query-cost` · theorem — Known-amplitude amplification query cost
- `thm-qa-12-exact-success-query-cost` · theorem — Exact-success amplitude amplification query cost
- `thm-qa-12-unknown-amplitude-query-cost` · theorem — Expected cost of unknown-amplitude search

### `amplitude-amplification-examples` — Amplitude Amplification — Examples (2 item(s))

- `ex-qa-12-amplitude-amplification-finite-case` · example — A prepared state with success amplitude one half
- `cex-qa-12-known-probability-is-needed-for-the-fixed-rounding-rule` · counterexample — A fixed Grover iteration count can fail when a is unknown

## Your seams

Your pages depend on another group's:

- `finite-abelian-hidden-subgroup-algorithms` requires `uniform-circuit-families-promise-problems-and-complexity` (group q, batch 14)
- `finite-abelian-hidden-subgroup-algorithms` requires `finite-abelian-fourier-analysis` (group b, batch 29)
- `finite-abelian-hidden-subgroup-algorithms` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces` (group m, batch 1)
- `finite-abelian-hidden-subgroup-algorithms` requires `reversible-computation-ancillas-and-coherent-oracles` (group p, batch 10)
- `finite-abelian-hidden-subgroup-algorithms` requires `registers-tensor-products-and-partial-trace` (group m, batch 2)
- `finite-abelian-hidden-subgroup-algorithms` requires `measurements-povms-and-instruments` (group n, batch 4)
- `finite-abelian-hidden-subgroup-algorithms` requires `circuit-syntax-denotational-semantics-and-measurement` (group o, batch 9)
- `finite-abelian-hidden-subgroup-algorithms` requires `pure-and-mixed-states-ensembles-and-schmidt-decomposition` (group m, batch 3)
- `grover-search-and-invariant-plane-rotations` requires `reversible-arithmetic-and-oracle-conversion` (group a, batch 26)
- `grover-search-and-invariant-plane-rotations` requires `computational-problems-promises-and-cost-models` (group a, batch 25)
- `grover-search-and-invariant-plane-rotations` requires `registers-tensor-products-and-partial-trace` (group m, batch 2)
- `grover-search-and-invariant-plane-rotations` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces` (group m, batch 1)
- `grover-search-and-invariant-plane-rotations` requires `controlled-gates-phase-and-entanglement` (group o, batch 8)
- `grover-search-and-invariant-plane-rotations` requires `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates` (group o, batch 7)
- `grover-search-and-invariant-plane-rotations` requires `circuit-syntax-denotational-semantics-and-measurement` (group o, batch 9)
- `grover-search-and-invariant-plane-rotations` requires `pure-and-mixed-states-ensembles-and-schmidt-decomposition` (group m, batch 3)
- `grover-search-and-invariant-plane-rotations` requires `uniform-circuit-families-promise-problems-and-complexity` (group q, batch 14)
- `amplitude-amplification` requires `computational-problems-promises-and-cost-models` (group a, batch 25)
- `amplitude-amplification` requires `pure-and-mixed-states-ensembles-and-schmidt-decomposition` (group m, batch 3)
- `amplitude-amplification` requires `measurements-povms-and-instruments` (group n, batch 4)
- `amplitude-amplification` requires `controlled-gates-phase-and-entanglement` (group o, batch 8)
- `amplitude-amplification` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces` (group m, batch 1)
- `amplitude-amplification` requires `reversible-computation-ancillas-and-coherent-oracles` (group p, batch 10)
- `amplitude-amplification` requires `uniform-circuit-families-promise-problems-and-complexity` (group q, batch 14)

Another group's pages depend on yours:

- `amplitude-estimation-and-counting` (group e) requires your `amplitude-amplification`
- `quantum-query-lower-bounds-and-search-optimality` (group e) requires your `grover-search-and-invariant-plane-rotations`
- `hhl-phase-estimation-linear-systems` (group i) requires your `amplitude-amplification`
- `period-hidden-shift-and-number-theoretic-algorithms` (group k) requires your `finite-abelian-hidden-subgroup-algorithms`

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

# Step 5 batch adjudication, `quantum-computing-algorithms-60-2026-10-15`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
