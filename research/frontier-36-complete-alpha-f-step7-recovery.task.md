# Step 7 adjudication — group **f**, run `frontier-36-complete`

You are the group Alpha for batches **1**, **2**, **20**: 3 A/B pair(s), 6 page(s), 73 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

**No step-6 digest exists for this group.** The reading half did not run or did
not produce one, so you are meeting this mathematics for the first time with the
rejections already in front of you. Read the pages before the verdicts anyway —
the order matters more than where the notes came from.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-36-complete-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 1 | `fredholm-determinants-and-the-lidskii-trace-formula` | A | functional-analysis | 288.0801 | `banach-algebras-spectrum-and-holomorphic-functional-calculus`, `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators`, `the-determinant-of-a-linear-operator`, `triangularisation-and-jordan-canonical-form`, `exterior-powers-orientation-and-hodge-duality` |
| 1 | `fredholm-determinants-and-the-lidskii-trace-formula-examples` | B | functional-analysis | 288.0802 | `fredholm-determinants-and-the-lidskii-trace-formula` |
| 2 | `measurable-hilbert-fields-and-direct-integral-operators` | A | functional-analysis | 288.1103 | `standard-borel-real-codings-and-determining-classes`, `measurable-functions-and-simple-approximation`, `the-lebesgue-integral-and-the-convergence-theorems`, `the-lp-spaces-holder-minkowski-and-riesz-fischer`, `hilbert-space-geometry-and-riesz-representation`, `orthonormal-bases-parseval-and-fourier-series`, `spectral-measures-and-borel-functional-calculus` |
| 2 | `measurable-hilbert-fields-and-direct-integral-operators-examples` | B | functional-analysis | 288.1104 | `measurable-hilbert-fields-and-direct-integral-operators` |
| 20 | `alphabet-reduction-and-the-pcp-theorem` | A | computability-theory | 649 | `gap-amplification-and-assignment-testing`, `arithmetization-and-the-sum-check-protocol`, `the-cook-levin-theorem` |
| 20 | `alphabet-reduction-and-the-pcp-theorem-examples` | B | computability-theory | 650 | `alphabet-reduction-and-the-pcp-theorem` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `fredholm-determinants-and-the-lidskii-trace-formula` — Fredholm Determinants and the Lidskii Trace Formula (17 item(s))

- `def-algebraic-multiplicity-for-compact-operators` · definition — Algebraic multiplicity of a nonzero compact-operator eigenvalue
- `lem-finite-rank-compressions-converge-in-trace-norm` · lemma — Finite-rank orthogonal compressions converge in trace norm
- `def-hilbert-exterior-power-and-induced-operator` · definition — Hilbert exterior powers and induced operators
- `lem-trace-norm-of-hilbert-exterior-powers` · lemma — Trace-norm bound for exterior powers of trace-class operators
- `lem-weyl-eigenvalue-singular-value-inequalities` · lemma — Weyl product and sum inequalities for compact operators
- `lem-diagonal-trace-class-operator-on-ell-two` · lemma — Diagonal trace-class operators on $\ell^2(\mathbb N,\mathbb C)$
- `lem-separable-trace-class-determinant-construction` · lemma — Local separable trace-class determinant construction
- `lem-fredholm-determinant-trace-norm-continuity-and-growth` · lemma — Trace-norm continuity, growth and multiplicativity of the local determinant
- `lem-fredholm-determinant-logarithmic-derivative` · lemma — Logarithmic derivative of the local Fredholm determinant
- `lem-fredholm-determinant-zeros-and-algebraic-multiplicities` · lemma — Zeros of the local Fredholm determinant
- `lem-quasinilpotent-trace-class-operator-has-zero-trace` · lemma — A quasinilpotent trace-class operator has zero trace
- `lem-generalized-eigenspace-trace-decomposition` · lemma — Trace decomposition through generalized eigenspaces and the invariant quotient
- `lem-fredholm-determinant-spectral-product-from-power-traces` · lemma — Spectral product from traces of powers
- `lem-arbitrary-hilbert-fredholm-determinant-from-separable-support` · lemma — Arbitrary-Hilbert Fredholm determinant from a separable reducing support
- `def-fredholm-determinant` · definition — Fredholm determinant of a trace-class operator
- `prop-fredholm-determinant-properties-for-trace-class-operators` · proposition — Fredholm determinant properties for trace-class operators
- `thm-lidskii-for-trace-class-operators` · theorem — Lidskii trace formula for trace-class operators

### `fredholm-determinants-and-the-lidskii-trace-formula-examples` — Fredholm Determinants and the Lidskii Trace Formula: Examples (4 item(s))

- `cex-invariant-subspace-need-not-reduce-an-operator` · counterexample — An invariant subspace need not reduce an operator
- `ex-volterra-square-has-zero-trace` · example — The square of the Volterra operator has zero trace
- `ex-diagonal-trace-class-fredholm-determinant` · example — Diagonal trace-class Fredholm determinant
- `ex-fredholm-determinant-of-a-finite-rank-operator` · example — Fredholm determinant of a finite-rank operator

### `measurable-hilbert-fields-and-direct-integral-operators` — Measurable Hilbert Fields and Direct-Integral Operators (11 item(s))

- `def-von-neumann-algebra-and-commutant` · definition — Von Neumann algebras and commutants
- `def-measurable-hilbert-field-from-a-countable-fundamental-family` · definition — Measurable Hilbert field from a countable fundamental family
- `lem-measurable-sections-have-measurable-pointwise-inner-products` · lemma — Measurable sections have measurable pointwise inner products
- `lem-separable-abelian-von-neumann-algebras-have-a-self-adjoint-generator` · lemma — A separably acting abelian von Neumann algebra has a self-adjoint generator
- `def-direct-integral-of-a-measurable-hilbert-field` · definition — Direct integral of a measurable Hilbert field
- `thm-direct-integrals-of-measurable-hilbert-fields-are-hilbert-spaces` · theorem — Direct integrals of measurable Hilbert fields are Hilbert spaces
- `def-measurable-and-decomposable-operator-fields` · definition — Measurable and decomposable operator fields
- `thm-measurable-essentially-bounded-operator-fields-act-decomposably` · theorem — Measurable essentially bounded operator fields act decomposably
- `thm-decomposable-operators-are-the-commutant-of-diagonal-multiplication` · theorem — Decomposable operators are the commutant of diagonal multiplication
- `lem-diagonal-multipliers-form-a-von-neumann-algebra` · lemma — Diagonal multipliers form a von Neumann algebra
- `thm-spectral-multiplicity-model-for-separable-abelian-von-neumann-algebras` · theorem — Spectral multiplicity model for separably acting abelian von Neumann algebras

### `measurable-hilbert-fields-and-direct-integral-operators-examples` — Measurable Hilbert Fields and Direct-Integral Operators: Examples (3 item(s))

- `ex-direct-integral-of-a-constant-hilbert-field` · example — Direct integral of a constant Hilbert field
- `ex-multiplicity-two-diagonal-representation` · example — Multiplicity-two diagonal representation
- `ex-a-measurable-two-dimensional-operator-field` · example — A measurable two-dimensional operator field

### `alphabet-reduction-and-the-pcp-theorem` — Alphabet Reduction and the PCP Theorem (34 item(s))

- `def-pcp-verifier-randomness-query-and-proof-length` · definition — PCP verifier resources and deterministic proof strings
- `def-pcp-class-with-completeness-and-soundness` · definition — PCP classes with completeness and soundness
- `lem-two-query-pcps-and-constraint-graphs-are-equivalent` · lemma — Two-query PCPs and binary constraint graphs
- `def-walsh-hadamard-encoding-and-relative-distance` · definition — Walsh–Hadamard encoding and relative Hamming distance
- `lem-walsh-hadamard-code-has-distance-one-half` · lemma — Distinct Walsh–Hadamard words differ on half the cube
- `def-robust-codeword-blocks-for-constraint-graphs` · definition — Shared codeword blocks and edge acceptance circuits
- `lem-robust-edge-circuit-has-distance-gap` · lemma — A violated decoded edge is far from edge-circuit acceptance
- `lem-random-subsum-detects-a-nonzero-binary-vector` · lemma — Random binary subsums detect every nonzero discrepancy
- `def-quadratic-equation-instance-and-tensor-code-oracles` · definition — Quadratic equations and tensor-code oracle tables
- `lem-boolean-circuits-reduce-to-quadratic-equation-systems-with-a-fixed-input-prefix` · lemma — Boolean circuits become quadratic systems with a fixed input prefix
- `lem-blr-testing-supplies-nearby-linear-decoders` · lemma — The BLR test supplies a nearby unique linear decoder
- `lem-tensor-consistency-test-soundness` · lemma — Tensor consistency rejects a wrong decoded tensor
- `lem-random-subsum-verifies-all-quadratic-equations-with-constant-error` · lemma — A random subsum checks all quadratic equations at once
- `thm-constant-query-exponential-pcp-for-quadratic-equations` · theorem — An exponential-length constant-query PCP for quadratic equations
- `def-pcp-of-proximity-and-concatenation-test` · definition — Two-piece PCP of proximity and concatenation check
- `lem-concatenation-test-enforces-a-shared-prefix` · lemma — Concatenation testing enforces the same decoded prefix
- `thm-two-piece-pcp-of-proximity` · theorem — A two-piece constant-query PCP of proximity
- `def-composition-with-an-assignment-tester` · definition — Composition of an edge system with an assignment tester
- `lem-composition-preserves-perfect-completeness` · lemma — Composition preserves perfect satisfiability
- `lem-composition-transfers-rejection-ratio` · lemma — Composition transfers a constant fraction of unsatisfaction
- `lem-bounded-arity-boolean-csp-to-binary-constraint-graph` · lemma — Bounded-arity Boolean constraints become binary graph constraints
- `thm-alphabet-reduction-step` · theorem — Fixed-alphabet reduction with constant gap retention
- `lem-alphabet-reduction-controls-size-and-degree` · lemma — Alphabet reduction controls explicit size and degree
- `def-dinur-pcp-transformation` · definition — One fixed-alphabet Dinur transformation
- `lem-one-transformation-preserves-satisfiability` · lemma — One Dinur transformation preserves perfect satisfiability
- `lem-one-transformation-amplifies-gap` · lemma — One fixed-alphabet transformation doubles small gaps
- `lem-one-transformation-has-constant-factor-growth` · lemma — One fixed transformation has constant-factor growth
- `lem-logarithmically-many-iterations-reach-constant-gap` · lemma — Logarithmic iteration reaches a constant unsatisfaction gap
- `lem-three-sat-to-binary-constraint-graph` · lemma — A three-CNF formula as a fixed-alphabet binary constraint graph
- `thm-gap-csp-is-np-hard` · theorem — Constant-gap binary CSP is NP-hard
- `thm-pcp-theorem-np-equals-pcp-log-n-o-one` · theorem — The PCP theorem: NP equals PCP(log n, O(1))
- `thm-pcp-error-amplification` · theorem — PCP soundness amplification by independent repetition
- `fs-gap-amplification-alone-controls-alphabet` · false-statement — False: graph powering alone keeps the alphabet fixed
- `fs-pcp-proofs-are-randomized-strings` · false-statement — False: a PCP proof is itself a random string

### `alphabet-reduction-and-the-pcp-theorem-examples` — Alphabet Reduction and the PCP Theorem: Examples and Counterexamples (4 item(s))

- `ex-composition-preserves-perfect-completeness` · example — A single equality edge through robust composition
- `ex-pcp-error-amplification` · example — Three repetitions of a three-quarters-sound PCP
- `cex-gap-amplification-alone-controls-alphabet` · counterexample — A powered graph whose alphabet grows
- `ex-walsh-hadamard-encoding-and-testing` · example — Four coordinates of a Walsh–Hadamard codeword

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-6 reader warnings

None. No Step-6 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/frontier-36-complete-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Historical Step-7 closure recovery, `frontier-36-complete`

Historical compatibility task only. Preserve historical exact-tuple decisions
as evidence; this template grants no current repair or certification authority.
Historical receipts constrain `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`; do not reinterpret those records
as current round coverage.

Current rounds use `tools/step7-workflow.mjs`, `briefs/step7-adjudicator.md`
and `briefs/step7-owner-repair.md`. Follow WORKFLOW.md's 7.1–7.10 protocol
and the generated round-bound task. Repair all confirmed defects, including
nonfatal defects, and continue downstream repair until complete before the
single central certification pass.
