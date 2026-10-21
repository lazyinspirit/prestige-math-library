# Step 5 adjudication — group **a**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the group Alpha for batches 1, 2, 3: 3 A/B pair(s), 6 page(s), 19 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **1**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-1-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **2**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-2-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **3**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-3-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/inverse-problems-knot-theory-all-109-2026-10-19-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 1 | `inverse-problems-identifiability-and-stability` | A | inverse-problems | 2998 | `hilbert-space-geometry-and-riesz-representation` |
| 1 | `inverse-problems-identifiability-and-stability-examples` | B | inverse-problems | 2999 | `inverse-problems-identifiability-and-stability`, `orthonormal-bases-parseval-and-fourier-series`, `spectral-regularization-and-parameter-choice` |
| 2 | `linear-operators-pseudoinverses-and-picard-criteria` | A | inverse-problems | 3000 | `inverse-problems-identifiability-and-stability`, `hilbert-space-geometry-and-riesz-representation`, `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` |
| 2 | `linear-operators-pseudoinverses-and-picard-criteria-examples` | B | inverse-problems | 3001 | `linear-operators-pseudoinverses-and-picard-criteria`, `spectral-regularization-and-parameter-choice` |
| 3 | `deterministic-source-conditions-and-optimal-recovery` | A | inverse-problems | 3002 | `linear-operators-pseudoinverses-and-picard-criteria`, `iterative-regularization-and-early-stopping` |
| 3 | `deterministic-source-conditions-and-optimal-recovery-examples` | B | inverse-problems | 3003 | `deterministic-source-conditions-and-optimal-recovery`, `outward-rounded-interval-and-ball-arithmetic` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `inverse-problems-identifiability-and-stability` — Inverse maps, identifiability, and stability (3 item(s))

- `def-ip-forward-map-and-solution-classes` · definition — Inverse-problem models and solution classes
- `def-ip-identifiability-and-stability-modulus` · definition — Identifiability and stability moduli
- `thm-ip-kernel-directions-preclude-unrestricted-recovery` · theorem — Kernel directions preclude unrestricted recovery

### `inverse-problems-identifiability-and-stability-examples` — Inverse maps, identifiability, and stability — Examples and Counterexamples (1 item(s))

- `ex-ip-01-scope-and-boundary-cases` · example — Kernel ambiguity, an unstable diagonal inverse, and a constrained class

### `linear-operators-pseudoinverses-and-picard-criteria` — Compact linear inverse maps and the Picard criterion (4 item(s))

- `def-ip-unbounded-hilbert-moore-penrose-inverse` · definition — Hilbert-space Moore–Penrose inverse
- `def-ip-compact-linear-inverse-model` · definition — Compact linear inverse model between Hilbert spaces
- `thm-ip-closed-range-pseudoinverse-stability` · theorem — Closed range and boundedness of the Hilbert pseudoinverse
- `thm-ip-picard-range-criterion-for-compact-operators` · theorem — Picard range and pseudoinverse-domain criterion

### `linear-operators-pseudoinverses-and-picard-criteria-examples` — Compact linear inverse maps and the Picard criterion — Examples and Counterexamples (2 item(s))

- `cex-ip-picard-orthogonality-clause-essential` · counterexample — A nonzero left-null datum passes the series test but is not in the range
- `ex-ip-dense-nonclosed-diagonal-range` · example — A compact diagonal map with dense nonclosed range

### `deterministic-source-conditions-and-optimal-recovery` — Deterministic source classes and optimal recovery (7 item(s))

- `def-ip-index-source-ball` · definition — Spectral-index source balls for compact operators
- `def-ip-centered-modulus-of-continuity` · definition — Centered conditional modulus of continuity
- `lem-ip-index-source-elements-are-minimum-norm` · lemma — Index source elements are minimum-norm solutions
- `def-ip-power-source-set` · definition — Power source ball
- `lem-ip-spectral-interpolation-for-power-source-balls` · lemma — Spectral interpolation for power source balls
- `thm-ip-deterministic-minimax-lower-bound-on-source-balls` · theorem — Deterministic minimax lower bound on power source balls
- `thm-ip-source-ball-modulus-of-continuity` · theorem — Conditional modulus on a power source ball

### `deterministic-source-conditions-and-optimal-recovery-examples` — Deterministic source classes and optimal recovery — Examples and Counterexamples (2 item(s))

- `ex-ip-polynomial-singular-decay-source-balls` · example — Polynomial singular decay with power and logarithmic source balls
- `ex-ip-exponential-singular-decay-source-balls` · example — Exponential singular decay, logarithmic balls, and spectral gaps

## Your seams

Another group's pages depend on yours:

- `operator-approximation-and-regularization-error` (group b) requires your `linear-operators-pseudoinverses-and-picard-criteria`
- `parameter-choice-and-bakushinskii-veto` (group b) requires your `linear-operators-pseudoinverses-and-picard-criteria`
- `parameter-choice-and-bakushinskii-veto` (group b) requires your `deterministic-source-conditions-and-optimal-recovery`
- `factorized-and-composite-linear-inversion` (group b) requires your `linear-operators-pseudoinverses-and-picard-criteria`
- `factorized-and-composite-linear-inversion` (group b) requires your `deterministic-source-conditions-and-optimal-recovery`
- `gaussian-sequence-models-and-risk-decomposition` (group c) requires your `linear-operators-pseudoinverses-and-picard-criteria`
- `minimax-estimation-over-inverse-source-classes` (group c) requires your `deterministic-source-conditions-and-optimal-recovery`
- `adaptive-spectral-regularization-and-solit` (group d) requires your `deterministic-source-conditions-and-optimal-recovery`
- `feature-inference-and-map-testing` (group d) requires your `linear-operators-pseudoinverses-and-picard-criteria`
- `statistical-inverse-model-misspecification` (group e) requires your `inverse-problems-identifiability-and-stability`
- `function-space-priors-and-random-regularity` (group e) requires your `inverse-problems-identifiability-and-stability`
- `nonlinear-inverse-problems-and-tangential-cone-conditions` (group i) requires your `inverse-problems-identifiability-and-stability`
- `nonlinear-inverse-problems-and-tangential-cone-conditions` (group i) requires your `linear-operators-pseudoinverses-and-picard-criteria`
- `sparse-recovery-and-nullspace-certificates` (group k) requires your `inverse-problems-identifiability-and-stability`
- `sparse-recovery-and-nullspace-certificates` (group k) requires your `linear-operators-pseudoinverses-and-picard-criteria`
- `manifold-and-physical-constraint-inversion` (group l) requires your `inverse-problems-identifiability-and-stability`
- `limited-angle-tomography-and-invisible-singularities` (group m) requires your `inverse-problems-identifiability-and-stability`
- `geodesic-x-ray-transforms-on-simple-manifolds` (group m) requires your `inverse-problems-identifiability-and-stability`
- `inverse-scattering-and-born-linearization` (group o) requires your `inverse-problems-identifiability-and-stability`
- `inverse-scattering-and-born-linearization` (group o) requires your `linear-operators-pseudoinverses-and-picard-criteria`
- `learned-reconstruction-targets-and-risk` (group p) requires your `inverse-problems-identifiability-and-stability`
- `real-phase-retrieval-and-complement-property` (group r) requires your `inverse-problems-identifiability-and-stability`
- `real-phase-retrieval-and-complement-property` (group r) requires your `linear-operators-pseudoinverses-and-picard-criteria`
- `dynamic-data-identifiability-and-system-realization` (group s) requires your `inverse-problems-identifiability-and-stability`
- `dynamic-data-identifiability-and-system-realization` (group s) requires your `linear-operators-pseudoinverses-and-picard-criteria`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/inverse-problems-knot-theory-all-109-2026-10-19-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 5 batch adjudication, `inverse-problems-knot-theory-all-109-2026-10-19`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
