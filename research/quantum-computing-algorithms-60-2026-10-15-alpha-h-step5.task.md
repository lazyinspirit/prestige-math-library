# Step 5 adjudication — group **h**, run `quantum-computing-algorithms-60-2026-10-15`

You are the group Alpha for batches 46, 47, 48: 3 A/B pair(s), 6 page(s), 47 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **46**: `research/quantum-computing-algorithms-60-2026-10-15-batch-46-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **47**: `research/quantum-computing-algorithms-60-2026-10-15-batch-47-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **48**: `research/quantum-computing-algorithms-60-2026-10-15-batch-48-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 46 | `block-encodings` | A | quantum-algorithms | 2256 | `uniform-circuit-families-promise-problems-and-complexity`, `state-preparation-isometry-synthesis-and-limits`, `hilbert-space-geometry-and-riesz-representation`, `the-spectral-theorem-and-singular-value-decomposition`, `registers-tensor-products-and-partial-trace`, `circuit-syntax-denotational-semantics-and-measurement`, `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`, `controlled-gates-phase-and-entanglement`, `reversible-computation-ancillas-and-coherent-oracles` |
| 46 | `block-encodings-examples` | B | quantum-algorithms | 2257 | `block-encodings` |
| 47 | `quantum-signal-processing` | A | quantum-algorithms | 2258 | `uniform-circuit-families-promise-problems-and-complexity`, `hilbert-space-geometry-and-riesz-representation`, `controlled-gates-phase-and-entanglement`, `circuit-syntax-denotational-semantics-and-measurement`, `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`, `polynomial-rings-and-roots`, `the-complex-exponential-and-eulers-formula`, `symmetric-polynomials`, `sine-cosine-and-the-definition-of-pi`, `further-trigonometric-identities-and-inverses`, `the-riemann-integral` |
| 47 | `quantum-signal-processing-examples` | B | quantum-algorithms | 2259 | `quantum-signal-processing` |
| 48 | `quantum-singular-value-transformation` | A | quantum-algorithms | 2260 | `block-encodings`, `quantum-signal-processing`, `the-spectral-theorem-and-singular-value-decomposition`, `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`, `inner-product-spaces-and-orthogonality`, `controlled-gates-phase-and-entanglement`, `circuit-syntax-denotational-semantics-and-measurement`, `uniform-circuit-families-promise-problems-and-complexity` |
| 48 | `quantum-singular-value-transformation-examples` | B | quantum-algorithms | 2261 | `quantum-singular-value-transformation` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `block-encodings` — Block Encodings (10 item(s))

- `def-qa-22-block-encoding` · definition — Finite block encoding
- `lem-qa-22-block-compression-contraction` · lemma — A projected unitary block is a contraction
- `def-qa-22-block-encoding-access-model` · definition — Block-encoding oracle and implementation cost model
- `alg-qa-22-product-block-encoding` · algorithm — Product block encoding with separate ancillas
- `thm-qa-22-adjoint-block-encoding` · theorem — Adjoint block encoding from inverse access
- `thm-qa-22-product-block-encoding-correctness` · theorem — Product block-encoding error bound
- `thm-qa-22-long-product-error-recurrence` · theorem — Error recurrence for a chain of block-encoded products
- `alg-qa-22-lcu-block-encoding` · algorithm — LCU block-encoding construction
- `thm-qa-22-lcu-block-encoding-correctness` · theorem — LCU projected-block correctness
- `thm-qa-22-block-encoding-error-and-query-cost` · theorem — Block-encoding normalization, error, and cost accounting

### `block-encodings-examples` — Block Encodings — Examples (2 item(s))

- `ex-qa-22-product-error` · example — Product block error in a two-factor instance
- `ex-qa-22-two-term-lcu` · example — Two-term LCU normalization and access count

### `quantum-signal-processing` — Quantum Signal Processing (21 item(s))

- `lem-qa-23-polynomial-interval-sign-certificate` · lemma — Real-root intervals certify the sign of a real polynomial
- `lem-qa-23-sturm-root-counting` · lemma — Sturm signed remainders count distinct real polynomial roots
- `lem-qa-23-exact-interval-boundedness-decision` · lemma — Exact interval boundedness by multiplicity strata and Sturm counts
- `alg-qa-23-polynomial-root-isolation` · algorithm — Certified complex-polynomial root isolation in exact algebraic arithmetic
- `thm-qa-23-polynomial-root-isolation-correctness` · theorem — Correctness and termination of certified complex-polynomial root isolation
- `alg-qa-23-bounded-height-numerical-roots` · algorithm — Bounded-grid rational root isolation and rounded numerical QSP input
- `thm-qa-23-bounded-height-root-arithmetic-cost` · theorem — Polynomial arithmetic cost for rounded-input bounded-grid root isolation
- `def-qa-23-qsp-signal-sequence` · definition — QSP signal matrix and ordered phase sequence
- `alg-qa-23-certified-phase-approximation` · algorithm — Buffered certified rational phase approximation
- `def-qa-23-qsp-admissible-polynomial-pair` · definition — Admissible polynomial pair for Hermitian-reflection QSP
- `lem-qa-23-hermitian-signal-convention-conversion` · lemma — Hermitian-reflection and SU(2) QSP convention conversion
- `lem-qa-23-phase-sequence-unitarity` · lemma — Unitarity, determinant, and polynomial form of a QSP sequence
- `lem-qa-23-positive-polynomial-complement-factorization` · lemma — A nonnegative even polynomial has a bounded parity complement
- `thm-qa-23-certified-phase-approximation-correctness` · theorem — Correctness and arithmetic resource bound for buffered phase approximation
- `thm-qa-23-qsp-phase-factorization` · theorem — Constructive factorization of an admissible QSP polynomial pair
- `thm-qa-23-real-polynomial-completion` · theorem — Completion of a bounded real parity polynomial
- `lem-qa-23-qsp-completion-peel-arithmetic-cost` · lemma — Arithmetic cost of exact tower completion and QSP phase peeling
- `alg-qa-23-qsp-phase-synthesis` · algorithm — Real bounded-polynomial QSP phase synthesis
- `thm-qa-23-qsp-phase-implementation-error` · theorem — Hybrid bound for imperfect QSP phase rotations
- `thm-qa-23-qsp-query-cost` · theorem — QSP signal-query and phase-rotation count
- `thm-qa-23-qsp-synthesis-correctness` · theorem — Correctness of QSP phase synthesis

### `quantum-signal-processing-examples` — Quantum Signal Processing — Examples (1 item(s))

- `ex-qa-23-degree-one-qsp` · example — Degree-one QSP phase identity

### `quantum-singular-value-transformation` — Quantum Singular-Value Transformation (11 item(s))

- `def-qa-24-pue-svd-data` · definition — Projected-unitary encoding and singular vectors
- `lem-qa-24-pue-svd-invariant-subspaces` · lemma — PUE singular-space invariant decomposition
- `def-qa-24-singular-value-transform` · definition — Odd and even singular-value transforms
- `alg-qa-24-qsvt` · algorithm — Quantum singular-value transformation circuit
- `lem-qa-24-singular-transform-basis-independence` · lemma — Singular-value transform is independent of SVD choices
- `thm-qa-24-projector-phase-implementation` · theorem — Projector phase operations from controlled reflections
- `thm-qa-24-qsvt-query-count` · theorem — QSVT signal and reflection query counts
- `thm-qa-24-qsvt-singular-space-action` · theorem — QSVT action on singular subspaces
- `lem-qa-24-qsvt-robustness-amplitude-bound` · lemma — Operator perturbation bound for QSVT
- `thm-qa-24-real-polynomial-extraction` · theorem — Real bounded polynomial extraction in QSVT
- `thm-qa-24-qsvt-error-and-resource-bound` · theorem — QSVT robustness, approximation error, and resources

### `quantum-singular-value-transformation-examples` — Quantum Singular-Value Transformation — Examples (2 item(s))

- `cex-qa-24-parity-violation` · counterexample — Parity violation makes singular-value action basis dependent
- `ex-qa-24-rank-one-pue` · example — Rank-one PUE singular-plane calculation

## Your seams

Your pages depend on another group's:

- `block-encodings` requires `uniform-circuit-families-promise-problems-and-complexity` (group q, batch 14)
- `block-encodings` requires `state-preparation-isometry-synthesis-and-limits` (group t, batch 24)
- `block-encodings` requires `registers-tensor-products-and-partial-trace` (group m, batch 2)
- `block-encodings` requires `circuit-syntax-denotational-semantics-and-measurement` (group o, batch 9)
- `block-encodings` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces` (group m, batch 1)
- `block-encodings` requires `controlled-gates-phase-and-entanglement` (group o, batch 8)
- `block-encodings` requires `reversible-computation-ancillas-and-coherent-oracles` (group p, batch 10)
- `quantum-signal-processing` requires `uniform-circuit-families-promise-problems-and-complexity` (group q, batch 14)
- `quantum-signal-processing` requires `controlled-gates-phase-and-entanglement` (group o, batch 8)
- `quantum-signal-processing` requires `circuit-syntax-denotational-semantics-and-measurement` (group o, batch 9)
- `quantum-signal-processing` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces` (group m, batch 1)
- `quantum-singular-value-transformation` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces` (group m, batch 1)
- `quantum-singular-value-transformation` requires `controlled-gates-phase-and-entanglement` (group o, batch 8)
- `quantum-singular-value-transformation` requires `circuit-syntax-denotational-semantics-and-measurement` (group o, batch 9)
- `quantum-singular-value-transformation` requires `uniform-circuit-families-promise-problems-and-complexity` (group q, batch 14)

Another group's pages depend on yours:

- `qubitization-and-optimal-hamiltonian-simulation` (group i) requires your `quantum-singular-value-transformation`
- `qubitization-and-optimal-hamiltonian-simulation` (group i) requires your `block-encodings`
- `qubitization-and-optimal-hamiltonian-simulation` (group i) requires your `quantum-signal-processing`
- `block-encoding-linear-systems-and-variable-time-amplification` (group i) requires your `quantum-singular-value-transformation`
- `block-encoding-linear-systems-and-variable-time-amplification` (group i) requires your `block-encodings`
- `quantum-spectral-estimation-and-matrix-functions` (group j) requires your `quantum-singular-value-transformation`
- `quantum-spectral-estimation-and-matrix-functions` (group j) requires your `block-encodings`
- `quantum-optimization-sdp-and-variational-algorithms` (group j) requires your `block-encodings`

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
