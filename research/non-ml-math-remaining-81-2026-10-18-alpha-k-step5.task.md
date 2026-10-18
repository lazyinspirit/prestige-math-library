# Step 5 adjudication — group **k**, run `non-ml-math-remaining-81-2026-10-18`

You are the group Alpha for batches 64, 69, 70: 3 A/B pair(s), 6 page(s), 38 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **64**: `research/non-ml-math-remaining-81-2026-10-18-batch-64-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **69**: `research/non-ml-math-remaining-81-2026-10-18-batch-69-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **70**: `research/non-ml-math-remaining-81-2026-10-18-batch-70-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 64 | `hopf-hecke-and-quantum-symmetry-interfaces` | A | hopf-hecke-algebras | 2942 | `algebraic-representation-and-tensor-symmetry-map`, `hecke-symmetries-and-generic-quantum-schur-weyl-duality`, `yang-baxter-operators-and-quantum-braid-representations`, `klr-algebras-induction-and-quantum-serre-categorification` |
| 64 | `hopf-hecke-and-quantum-symmetry-interfaces-examples` | B | hopf-hecke-algebras | 2943 | `hopf-hecke-and-quantum-symmetry-interfaces` |
| 69 | `quasi-hopf-weak-hopf-and-relative-tensor-products` | A | hopf-hecke-algebras | 2952 | `hopf-hecke-and-quantum-symmetry-interfaces` |
| 69 | `quasi-hopf-weak-hopf-and-relative-tensor-products-examples` | B | hopf-hecke-algebras | 2953 | `quasi-hopf-weak-hopf-and-relative-tensor-products` |
| 70 | `unequal-parameter-hecke-cells-and-representations` | A | hecke-algebras-and-categorification | 2954 | `hopf-hecke-and-quantum-symmetry-interfaces`, `bruhat-subword-order-and-lifting`, `hecke-markov-traces-and-polynomial-link-invariants` |
| 70 | `unequal-parameter-hecke-cells-and-representations-examples` | B | hecke-algebras-and-categorification | 2955 | `unequal-parameter-hecke-cells-and-representations` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `hopf-hecke-and-quantum-symmetry-interfaces` — Hopf, Hecke, Quantum-Group, and Braid Interfaces (2 item(s))

- `def-hh-rational-spectral-r-matrix` · definition — The rational spin-1/2 spectral R-matrix
- `lem-hh-rational-spectral-r-matrix-satisfies-yang-baxter` · lemma — The rational spin-1/2 spectral R-matrix satisfies Yang-Baxter

### `hopf-hecke-and-quantum-symmetry-interfaces-examples` — Hopf, Hecke, Quantum-Group, and Braid Interfaces: Examples and Counterexamples (2 item(s))

- `ex-hh-rank-one-hecke-specializations-at-q-i` · example — Rank-one Hecke specializations can be semisimple or nonsemisimple
- `ex-hh-rational-spectral-r-matrix-singular-parameters` · example — The rational spectral R-matrix has singular parameter values

### `quasi-hopf-weak-hopf-and-relative-tensor-products` — Quasi-Hopf, Weak Hopf, and Relative Tensor Products (6 item(s))

- `def-quasi-bialgebra-and-quasi-hopf-algebra` · definition — Quasi-bialgebras, quasi-antipodes, and quasi-Hopf algebras
- `def-weak-bialgebra-and-weak-hopf-algebra` · definition — Weak bialgebras, weak Hopf algebras, and counital maps
- `thm-quasi-bialgebra-modules-form-a-monoidal-category` · theorem — Modules over a quasi-bialgebra form a monoidal category
- `lem-weak-bialgebra-source-and-target-bases` · lemma — Counital bases of a weak bialgebra
- `rem-quasi-and-weak-hopf-extensions-change-different-axioms` · remark — Quasi-Hopf and weak-Hopf extensions change different axioms
- `prop-weak-bialgebra-module-tensor-product-is-delta-one-image` · proposition — Weak-bialgebra module tensor products are relative tensor products

### `quasi-hopf-weak-hopf-and-relative-tensor-products-examples` — Quasi-Hopf, Weak Hopf, and Relative Tensor Products: Examples and Counterexamples (3 item(s))

- `cex-a-quasi-bialgebra-need-not-be-quasi-hopf` · counterexample — A quasi-bialgebra need not be quasi-Hopf
- `ex-two-object-discrete-groupoid-is-a-weak-hopf-algebra` · example — The algebra of a two-object discrete groupoid is weak Hopf
- `ex-quasi-hopf-algebra-from-the-nontrivial-3-cocycle-on-c2` · example — A quasi-Hopf structure from a normalized 3-cocycle on C2

### `unequal-parameter-hecke-cells-and-representations` — Unequal-Parameter Hecke Cells and Representations (22 item(s))

- `def-arbitrary-rank-coxeter-system-and-bruhat-order` · definition — Arbitrary-rank Coxeter presentations, length, reflections, and Bruhat order
- `def-canonical-basic-set-for-hecke-specialization` · definition — Canonical basic sets for split Hecke specializations
- `def-schur-elements-from-a-symmetrizing-trace` · definition — Schur elements of a split semisimple algebra with a symmetrizing trace
- `rem-general-unequal-parameter-cell-conjectures-are-regime-dependent` · remark — Lusztig P1–P15 are not universally proved cell properties
- `lem-complete-local-hecke-modular-systems-and-idempotent-lifting` · lemma — Complete local modular systems and integral idempotent lifting
- `def-unequal-parameter-weight-function-and-coefficient-order` · definition — Weight functions and ordered group-algebra coefficients
- `thm-arbitrary-rank-finite-parabolics-and-bruhat-subword` · theorem — Finite-generator standard parabolics and the Bruhat subword property at arbitrary rank
- `lem-simple-generator-weights-extend-to-a-weight-function` · lemma — Simple-generator weights extend uniquely to a weight function
- `def-unequal-parameter-coxeter-hecke-algebra` · definition — The unequal-parameter Coxeter Hecke algebra
- `lem-unequal-parameter-hecke-standard-basis-and-bar-triangularity` · lemma — The arbitrary-rank weighted Hecke basis and Bruhat-triangular bar
- `thm-unequal-parameter-kazhdan-lusztig-basis` · theorem — Existence and uniqueness of the ordered-group unequal-parameter Kazhdan–Lusztig basis
- `def-unequal-parameter-cells-and-cell-quotients` · definition — Unequal-parameter left, right, and two-sided cells and cell quotients
- `def-finite-weyl-lusztig-basic-set-data` · definition — Finite-Weyl Lusztig data and the precise basic-set hypotheses
- `thm-unequal-parameter-cell-quotients-are-modules` · theorem — Weighted cell quotients are well-defined modules and bimodules
- `lem-lusztig-asymptotic-algebra-and-specialization-map` · lemma — The asymptotic algebra, filtered layers and the specialization homomorphism
- `thm-a1xa1-unequal-parameter-cells-give-a-canonical-basic-set` · theorem — The four weighted cells of A1×A1 give a canonical basic set at odd residue characteristic
- `lem-schur-leading-coefficients-and-good-asymptotic-specializations` · lemma — Leading Schur coefficients and split good-characteristic asymptotic specializations
- `lem-asymptotic-induction-identifies-leading-modular-simples` · lemma — Asymptotic induction identifies leading modular simples
- `lem-filtered-projectives-prove-canonical-basic-set-reciprocity` · lemma — Filtered projectives prove canonical basic-set reciprocity
- `thm-finite-weyl-canonical-basic-sets-from-lusztig-properties` · theorem — Finite-Weyl canonical basic sets from Lusztig properties
- `cor-weighted-cell-quotients-and-finite-weyl-basic-set-labels` · corollary — Weighted cell quotients and the leading finite-Weyl basic-set labels
- `rem-geck-basic-set-theorem-scope-and-proof-status` · remark — The scope and proof status of the finite-Weyl basic-set theorem

### `unequal-parameter-hecke-cells-and-representations-examples` — Unequal-Parameter Hecke Cells and Representations: Examples and Counterexamples (3 item(s))

- `ex-b2-unequal-parameter-kl-basis-and-cell-edges` · example — A B2 unequal-parameter KL basis and four left-cell transitions
- `cex-modular-specialization-collapses-unequal-parameter-cell-labels` · counterexample — A characteristic-two specialization collapses four weighted cell labels
- `ex-a1-nonsemisimple-good-specialization-has-a-basic-set` · example — A nonsemisimple L-good rank-one specialization has a singleton basic set

## Your seams

Your pages depend on another group's:

- `hopf-hecke-and-quantum-symmetry-interfaces` requires `algebraic-representation-and-tensor-symmetry-map` (group a, batch 32)

Another group's pages depend on yours:

- `yangians-quantum-affine-and-transfer-matrices` (group e) requires your `hopf-hecke-and-quantum-symmetry-interfaces`
- `quantum-groups-at-roots-of-unity-and-tilting-quotients` (group e) requires your `hopf-hecke-and-quantum-symmetry-interfaces`
- `noninvertible-symmetries-and-anyonic-chains` (group i) requires your `hopf-hecke-and-quantum-symmetry-interfaces`
- `affine-hecke-algebras-beyond-type-a` (group m) requires your `hopf-hecke-and-quantum-symmetry-interfaces`

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

# Step 5 batch adjudication, `non-ml-math-remaining-81-2026-10-18`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
