# Step 5 adjudication — group **a**, run `quantum-computing-algorithms-60-2026-10-15`

You are the group Alpha for batches 25, 26, 27: 3 A/B pair(s), 6 page(s), 42 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **25**: `research/quantum-computing-algorithms-60-2026-10-15-batch-25-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **26**: `research/quantum-computing-algorithms-60-2026-10-15-batch-26-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **27**: `research/quantum-computing-algorithms-60-2026-10-15-batch-27-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 25 | `computational-problems-promises-and-cost-models` | A | quantum-algorithms | 2214 | `uniform-circuit-families-promise-problems-and-complexity`, `the-polynomial-hierarchy-and-relativization`, `finite-probability-spaces-and-random-variables`, `reversible-computation-ancillas-and-coherent-oracles`, `registers-tensor-products-and-partial-trace`, `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`, `circuit-syntax-denotational-semantics-and-measurement`, `measurements-povms-and-instruments`, `effective-numberings-reductions-resources-and-randomness` |
| 25 | `computational-problems-promises-and-cost-models-examples` | B | quantum-algorithms | 2215 | `computational-problems-promises-and-cost-models` |
| 26 | `reversible-arithmetic-and-oracle-conversion` | A | quantum-algorithms | 2216 | `computational-problems-promises-and-cost-models`, `congruences-and-the-chinese-remainder-theorem`, `reversible-computation-ancillas-and-coherent-oracles`, `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`, `registers-tensor-products-and-partial-trace`, `controlled-gates-phase-and-entanglement`, `pure-and-mixed-states-ensembles-and-schmidt-decomposition`, `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`, `circuit-syntax-denotational-semantics-and-measurement` |
| 26 | `reversible-arithmetic-and-oracle-conversion-examples` | B | quantum-algorithms | 2217 | `reversible-arithmetic-and-oracle-conversion` |
| 27 | `exact-oracle-algorithms` | A | quantum-algorithms | 2218 | `reversible-arithmetic-and-oracle-conversion`, `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`, `registers-tensor-products-and-partial-trace`, `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`, `computational-problems-promises-and-cost-models`, `finite-probability-spaces-and-random-variables` |
| 27 | `exact-oracle-algorithms-examples` | B | quantum-algorithms | 2219 | `exact-oracle-algorithms` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `computational-problems-promises-and-cost-models` — Computational Problems, Promises, and Cost Models (14 item(s))

- `def-qa-expected-query-cost` · definition — Expected query cost from finite execution prefixes
- `def-qa-task-and-promise-domain` · definition — QA task and promise domain
- `def-qa-input-encoding-and-size` · definition — Input encoding and size for algorithmic tasks
- `def-qa-finite-branch-output-law` · definition — Normalized output law for finite quantum query branches
- `def-qa-promise-query-instance` · definition — Promise query instance and oracle family
- `def-qa-classical-query-algorithm` · definition — Classical query algorithm
- `def-qa-quantum-query-algorithm` · definition — Quantum query algorithm
- `def-qa-bounded-error-promise-correctness` · definition — Worst-case bounded-error correctness
- `def-qa-classical-bit-cost` · definition — Classical bit-operation cost
- `def-qa-exact-promise-correctness` · definition — Exact correctness for promise tasks
- `def-qa-nonoracle-gate-cost` · definition — Nonoracle quantum gate cost
- `def-qa-classical-query-complexity` · definition — Classical query complexity
- `def-qa-quantum-query-complexity` · definition — Quantum query complexity
- `thm-qa-promise-preserving-query-reduction-composition` · theorem — Promise-preserving reduction composes with a query solver

### `computational-problems-promises-and-cost-models-examples` — Computational Problems, Promises, and Cost Models — Examples (1 item(s))

- `ex-qa-promise-and-cost-models` · example — Promise, query and cost-model examples

### `reversible-arithmetic-and-oracle-conversion` — Reversible Arithmetic and Oracle Conversion (11 item(s))

- `def-qa-binary-field-f2` · definition — Binary residue carrier and operations
- `def-qa-binary-dot-product` · definition — Binary dot product as parity
- `alg-qa-reversible-binary-dot-product` · algorithm — Reversible binary dot-product query
- `thm-qa-reversible-binary-dot-product-correct-and-cost` · theorem — Reversible binary dot product: correctness and exact cost
- `def-qa-standard-bit-query` · definition — Standard bit-flip query convention
- `def-qa-phase-query` · definition — Binary phase-query convention
- `thm-qa-phase-kickback` · theorem — Phase kickback from the standard bit query
- `thm-qa-compute-copy-uncompute-clean-query` · theorem — Compute-copy-uncompute yields a clean coherent function query
- `thm-qa-global-phase-under-control` · theorem — A constant phase query is invisible alone and relative under control
- `thm-qa-bit-query-to-phase-query` · theorem — One standard query implements one phase query
- `thm-qa-controlled-phase-query-to-bit-query` · theorem — Controlled phase access implements a standard bit query

### `reversible-arithmetic-and-oracle-conversion-examples` — Reversible Arithmetic and Oracle Conversion — Examples (1 item(s))

- `ex-qa-oracle-conversion-and-uncomputation` · example — Oracle conversion and uncomputation examples

### `exact-oracle-algorithms` — Exact Oracle Algorithms (14 item(s))

- `lem-qa-hadamard-f2-kernel` · lemma — Hadamard character sum on F_2^n
- `def-qa-deutsch-promise` · definition — Deutsch constant-versus-balanced promise
- `def-qa-deutsch-jozsa-promise` · definition — Deutsch–Jozsa promise
- `def-qa-bernstein-vazirani-promise` · definition — Bernstein–Vazirani no-offset promise
- `thm-qa-deutsch-classical-query-lower-bound` · theorem — One classical query cannot solve Deutsch exactly
- `thm-qa-deutsch-jozsa-deterministic-query-lower-bound` · theorem — Exact deterministic Deutsch–Jozsa needs N/2+1 queries
- `thm-qa-deutsch-jozsa-randomized-constant-query-upper-bound` · theorem — Three classical samples solve Deutsch–Jozsa with bounded error
- `thm-qa-bernstein-vazirani-classical-query-lower-bound` · theorem — Classical Bernstein–Vazirani needs n queries for bounded error
- `alg-qa-deutsch-query` · algorithm — One-query Deutsch algorithm
- `alg-qa-deutsch-jozsa-query` · algorithm — One-query Deutsch–Jozsa algorithm
- `alg-qa-bernstein-vazirani-query` · algorithm — One-query Bernstein–Vazirani algorithm
- `thm-qa-deutsch-query-correct` · theorem — Deutsch algorithm is exact
- `thm-qa-deutsch-jozsa-query-correct` · theorem — Deutsch–Jozsa algorithm is exact
- `thm-qa-bernstein-vazirani-query-correct` · theorem — Bernstein–Vazirani algorithm returns the secret exactly

### `exact-oracle-algorithms-examples` — Exact Oracle Algorithms — Examples (1 item(s))

- `ex-qa-exact-oracle-algorithms` · example — Deutsch, Deutsch–Jozsa and Bernstein–Vazirani examples

## Your seams

Your pages depend on another group's:

- `computational-problems-promises-and-cost-models` requires `uniform-circuit-families-promise-problems-and-complexity` (group q, batch 14)
- `computational-problems-promises-and-cost-models` requires `reversible-computation-ancillas-and-coherent-oracles` (group p, batch 10)
- `computational-problems-promises-and-cost-models` requires `registers-tensor-products-and-partial-trace` (group m, batch 2)
- `computational-problems-promises-and-cost-models` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces` (group m, batch 1)
- `computational-problems-promises-and-cost-models` requires `circuit-syntax-denotational-semantics-and-measurement` (group o, batch 9)
- `computational-problems-promises-and-cost-models` requires `measurements-povms-and-instruments` (group n, batch 4)
- `reversible-arithmetic-and-oracle-conversion` requires `reversible-computation-ancillas-and-coherent-oracles` (group p, batch 10)
- `reversible-arithmetic-and-oracle-conversion` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces` (group m, batch 1)
- `reversible-arithmetic-and-oracle-conversion` requires `registers-tensor-products-and-partial-trace` (group m, batch 2)
- `reversible-arithmetic-and-oracle-conversion` requires `controlled-gates-phase-and-entanglement` (group o, batch 8)
- `reversible-arithmetic-and-oracle-conversion` requires `pure-and-mixed-states-ensembles-and-schmidt-decomposition` (group m, batch 3)
- `reversible-arithmetic-and-oracle-conversion` requires `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates` (group o, batch 7)
- `reversible-arithmetic-and-oracle-conversion` requires `circuit-syntax-denotational-semantics-and-measurement` (group o, batch 9)
- `exact-oracle-algorithms` requires `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates` (group o, batch 7)
- `exact-oracle-algorithms` requires `registers-tensor-products-and-partial-trace` (group m, batch 2)
- `exact-oracle-algorithms` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces` (group m, batch 1)

Another group's pages depend on yours:

- `simon-algorithm-and-finite-field-recovery` (group b) requires your `exact-oracle-algorithms`
- `simon-algorithm-and-finite-field-recovery` (group b) requires your `reversible-arithmetic-and-oracle-conversion`
- `simon-algorithm-and-finite-field-recovery` (group b) requires your `computational-problems-promises-and-cost-models`
- `quantum-order-finding-and-rational-reconstruction` (group c) requires your `computational-problems-promises-and-cost-models`
- `grover-search-and-invariant-plane-rotations` (group d) requires your `reversible-arithmetic-and-oracle-conversion`
- `grover-search-and-invariant-plane-rotations` (group d) requires your `computational-problems-promises-and-cost-models`
- `amplitude-amplification` (group d) requires your `computational-problems-promises-and-cost-models`
- `amplitude-estimation-and-counting` (group e) requires your `reversible-arithmetic-and-oracle-conversion`
- `amplitude-estimation-and-counting` (group e) requires your `computational-problems-promises-and-cost-models`
- `quantum-query-lower-bounds-and-search-optimality` (group e) requires your `computational-problems-promises-and-cost-models`
- `quantum-query-lower-bounds-and-search-optimality` (group e) requires your `reversible-arithmetic-and-oracle-conversion`
- `polynomial-method-and-approximate-degree` (group e) requires your `reversible-arithmetic-and-oracle-conversion`
- `polynomial-method-and-approximate-degree` (group e) requires your `computational-problems-promises-and-cost-models`
- `adversary-methods-and-quantum-query-complexity` (group f) requires your `reversible-arithmetic-and-oracle-conversion`
- `adversary-methods-and-quantum-query-complexity` (group f) requires your `computational-problems-promises-and-cost-models`

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
