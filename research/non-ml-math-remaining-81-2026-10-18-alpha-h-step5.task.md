# Step 5 adjudication — group **h**, run `non-ml-math-remaining-81-2026-10-18`

You are the group Alpha for batches 52, 53, 54: 3 A/B pair(s), 6 page(s), 41 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **52**: `research/non-ml-math-remaining-81-2026-10-18-batch-52-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **53**: `research/non-ml-math-remaining-81-2026-10-18-batch-53-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **54**: `research/non-ml-math-remaining-81-2026-10-18-batch-54-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 52 | `derived-hall-algebras` | A | hall-algebras-and-tensor-categories | 2918 | `finitary-ringel-hall-algebras`, `dg-and-homological-algebra-foundations` |
| 52 | `derived-hall-algebras-examples` | B | hall-algebras-and-tensor-categories | 2919 | `derived-hall-algebras` |
| 53 | `hall-algebra-modules-and-geometric-actions` | A | hall-algebras-and-tensor-categories | 2920 | `green-hall-bialgebras-and-quantum-group-realizations`, `symmetric-functions-hall-inner-product-and-schur-bases`, `heisenberg-and-algebraic-weyl-algebras` |
| 53 | `hall-algebra-modules-and-geometric-actions-examples` | B | hall-algebras-and-tensor-categories | 2921 | `hall-algebra-modules-and-geometric-actions` |
| 54 | `motivic-hall-algebras-and-integration` | A | hall-algebras-and-tensor-categories | 2924 | `finitary-ringel-hall-algebras`, `derived-hall-algebras`, `cohomological-hall-algebras-and-quiver-correspondences` |
| 54 | `motivic-hall-algebras-and-integration-examples` | B | hall-algebras-and-tensor-categories | 2925 | `motivic-hall-algebras-and-integration` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `derived-hall-algebras` — Derived Hall Algebras from dg-Enhanced Categories (14 item(s))

- `def-locally-finite-homotopy-type` · definition — Locally finite homotopy types and rational cardinality
- `lem-homotopy-cardinality-base-change` · lemma — Homotopy-cardinality pushforward satisfies base change
- `lem-homotopy-fiber-component-weight-ratio` · lemma — Homotopy-fiber weights reduce to componentwise ratios
- `def-toen-locally-finite-dg-category` · definition — Locally finite dg enhancements for derived Hall theory
- `lem-homotopy-cardinality-pushforward-is-functorial` · lemma — Homotopy-cardinality pushforward is functorial
- `def-toen-derived-hall-algebra` · definition — Toën derived Hall algebra by homotopy-cofiber convolution
- `lem-perfect-dg-modules-have-finite-total-ext` · lemma — Perfect dg modules have finite total Ext
- `lem-derived-hall-moduli-spaces-and-convolution-are-finite` · lemma — Derived Hall moduli types are locally finite and the input span is proper
- `lem-derived-hall-stabilizer-homotopy-sequence` · lemma — Mapping-space homotopy groups give the derived Hall stabilizer weight
- `lem-derived-hall-associativity-squares` · lemma — The two derived Hall correspondence squares are homotopy cartesian
- `thm-toen-derived-hall-number-formula` · theorem — Toën derived Hall numbers have the higher-Ext orbit formula
- `thm-toen-derived-hall-algebra-is-associative-and-unital` · theorem — Toën derived Hall multiplication is associative and unital
- `thm-hereditary-heart-embeds-in-derived-hall-algebra` · theorem — The opposite untwisted Hall algebra of a hereditary heart embeds in the derived Hall algebra
- `rem-toen-kapranov-and-triangle-counts-are-distinct` · remark — Toën, Kapranov, and unweighted triangle counts are distinct constructions

### `derived-hall-algebras-examples` — Derived Hall Algebras: Examples and Counterexamples (2 item(s))

- `cex-naive-triangle-orbit-count-omits-derived-homotopy-weight` · counterexample — Unweighted triangle-orbit counts miss the derived homotopy factor
- `ex-hereditary-a2-heart-product-in-derived-hall` · example — The A2 hereditary-heart Hall product inside the derived Hall algebra

### `hall-algebra-modules-and-geometric-actions` — Hall Algebra Modules, Fock Spaces, and Geometric Actions (10 item(s))

- `def-a1-nakajima-framed-quiver-data` · definition — A one-vertex framed quiver variety and its Hecke correspondence
- `lem-a1-nakajima-varieties-and-hecke-correspondence-are-points` · lemma — The A1 Nakajima varieties and the Hecke correspondence are points
- `thm-a1-nakajima-hecke-correspondence-gives-sl2-action` · theorem — The A1 Nakajima Hecke correspondence gives the fundamental sl2 action
- `def-hall-algebra-module` · definition — Modules over a Hall algebra are unital algebra representations
- `thm-hall-algebra-regular-module` · theorem — A unital Hall algebra is a left module over itself
- `thm-jordan-quiver-hall-module-realizes-normalized-heisenberg-fock-action` · theorem — The generic Jordan Hall regular module carries the normalized Heisenberg Fock action
- `lem-a1-arbitrary-framing-cotangent-hecke-model` · lemma — Arbitrary-framing A1 varieties and their conormal Hecke correspondence
- `lem-a1-hecke-zero-section-excess-coefficients` · lemma — Excess intersection computes the A1 Hecke coefficients
- `lem-a1-supported-chow-convolution-and-action` · lemma — Supported Chow convolution and its action for the A1 family
- `thm-a1-arbitrary-framing-geometric-sl2-action` · theorem — Arbitrary-framing A1 Hecke cycles realize the highest-weight sl2 module

### `hall-algebra-modules-and-geometric-actions-examples` — Hall Algebra Modules, Fock Spaces, and Geometric Actions: Examples and Counterexamples (3 item(s))

- `ex-a1-nakajima-hecke-correspondence-as-fundamental-sl2-module` · example — The A1 Nakajima correspondence in the fundamental sl2 representation
- `ex-two-distinct-one-dimensional-modules-over-generic-jordan-hall-algebra` · example — Two distinct one-dimensional modules over the generic Jordan Hall algebra
- `ex-degree-one-green-pairing-normalization-of-jordan-fock-action` · example — Degree-one normalization for the Jordan Hall Green pairing and Fock action

### `motivic-hall-algebras-and-integration` — Motivic Hall Algebras and Integration Maps (10 item(s))

- `def-motivic-stack-function-groups-for-quiver-representations` · definition — Relative motivic stack-function groups for quiver representation stacks
- `rem-derived-and-cohomological-hall-are-distinct` · remark — Derived and cohomological Hall algebras are distinct constructions
- `def-motivic-hall-algebra-of-a-finite-quiver` · definition — The motivic Hall algebra of a finite quiver
- `def-finite-field-stack-groupoid-cardinality` · definition — Finite-field groupoid cardinality for quiver stack specializations
- `lem-quiver-motivic-extension-stack-class` · lemma — The motive of a quiver extension stack
- `thm-quiver-motivic-hall-convolution-associative` · theorem — Quiver motivic Hall convolution is associative and unital
- `def-quiver-motivic-quantum-torus` · definition — The Euler-twisted dimension-vector algebra of a quiver
- `lem-finite-field-stack-groupoid-cardinality-respects-motivic-relations` · lemma — Finite-field groupoid cardinality respects the motivic stack relations
- `rem-motivic-versus-untwisted-finitary-hall` · remark — Motivic stack Hall and untwisted finitary Hall have different carriers
- `thm-quiver-motivic-integration-is-multiplicative` · theorem — Quiver stack integration is multiplicative with the Euler twist

### `motivic-hall-algebras-and-integration-examples` — Motivic Hall Algebras and Integration Maps: Examples and Counterexamples (2 item(s))

- `ex-zero-arrow-quiver-motivic-hall-product` · example — The motivic Hall product for a one-vertex zero-arrow quiver
- `cex-untwisted-motivic-integration-fails-for-one-arrow-quiver` · counterexample — An untwisted monoid map fails for the one-arrow quiver

## Your seams

Your pages depend on another group's:

- `derived-hall-algebras` requires `finitary-ringel-hall-algebras` (group g, batch 50)
- `derived-hall-algebras` requires `dg-and-homological-algebra-foundations` (group l, batch 41)
- `hall-algebra-modules-and-geometric-actions` requires `green-hall-bialgebras-and-quantum-group-realizations` (group g, batch 51)
- `hall-algebra-modules-and-geometric-actions` requires `heisenberg-and-algebraic-weyl-algebras` (group a, batch 38)
- `motivic-hall-algebras-and-integration` requires `finitary-ringel-hall-algebras` (group g, batch 50)
- `motivic-hall-algebras-and-integration` requires `cohomological-hall-algebras-and-quiver-correspondences` (group i, batch 55)

Another group's pages depend on yours:

- `hall-stability-dt-bps-and-wall-crossing` (group i) requires your `derived-hall-algebras`
- `hall-stability-dt-bps-and-wall-crossing` (group i) requires your `motivic-hall-algebras-and-integration`
- `hall-stability-dt-bps-and-wall-crossing` (group i) requires your `hall-algebra-modules-and-geometric-actions`

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
