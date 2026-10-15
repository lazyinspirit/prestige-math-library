# Step 5 adjudication — group **a**, run `quantum-prerequisites-4-2026-10-15`

You are the group Alpha for batches 2, 3, 4: 3 A/B pair(s), 6 page(s), 16 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **2**: `research/quantum-prerequisites-4-2026-10-15-batch-2-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **3**: `research/quantum-prerequisites-4-2026-10-15-batch-3-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **4**: `research/quantum-prerequisites-4-2026-10-15-batch-4-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/quantum-prerequisites-4-2026-10-15-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 2 | `complex-norms-and-realification` | A | functional-analysis | 248.1 | `complexification-realification-and-real-structures`, `rn-as-a-normed-space` |
| 2 | `complex-norms-and-realification-examples` | B | functional-analysis | 248.11 | `complex-norms-and-realification` |
| 3 | `complex-coordinate-and-path-transport` | A | complex-analysis | 358.1 | `arc-length-and-rectifiable-curves`, `connectedness`, `the-complex-exponential-and-eulers-formula`, `the-total-derivative` |
| 3 | `complex-coordinate-and-path-transport-examples` | B | complex-analysis | 358.11 | `complex-coordinate-and-path-transport` |
| 4 | `complex-subspace-realification` | A | functional-analysis | 479.1 | `complex-norms-and-realification`, `normed-and-banach-spaces` |
| 4 | `complex-subspace-realification-examples` | B | functional-analysis | 479.11 | `complex-subspace-realification` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `complex-norms-and-realification` — Complex Norms and Realification (6 item(s))

- `def-complex-norm-and-complex-normed-space` · definition — Complex norm and complex normed space
- `lem-complex-modulus-of-real-embedding-equals-real-absolute-value` · lemma — Complex modulus restricts to real absolute value
- `lem-complex-norm-realification-is-a-real-norm` · lemma — Realification preserves a complex norm and its metric
- `lem-complex-coordinate-l1-is-a-norm` · lemma — The complex coordinate sum norm, including the zero space
- `def-complex-normed-subspace` · definition — A complex normed subspace
- `def-equivalent-complex-norms` · definition — Equivalent complex norms

### `complex-norms-and-realification-examples` — Complex Norms and Realification — Examples (1 item(s))

- `ex-anisotropic-real-norm-on-c` · example — A real norm on C that is not a complex norm

### `complex-coordinate-and-path-transport` — Complex Coordinate and Path Transport (6 item(s))

- `thm-complex-coordinate-map-preserves-real-scalar-multiplication` · theorem — The complex coordinate map preserves real scalar multiplication
- `def-complex-path-polygonal-length-and-rectifiability` · definition — Polygonal length and rectifiability of complex paths
- `thm-complex-coordinate-isometry-and-topology-transport` · theorem — The complex coordinate isometry transports topology and affine segments
- `thm-complex-coordinate-map-preserves-real-total-differentiability` · theorem — Real total derivatives transport through the complex coordinate isometry
- `thm-complex-path-coordinate-length-rectifiability-and-piecewise-c1-speed` · theorem — Complex path length equals coordinate length and piecewise speed integral
- `thm-complex-path-length-invariant-under-monotone-reparametrization` · theorem — Complex path length is invariant under monotone surjective reparametrization

### `complex-coordinate-and-path-transport-examples` — Complex Coordinate and Path Transport — Examples (1 item(s))

- `ex-complex-coordinate-and-path-transport` · example — A finite coordinate path and a bounded nonrectifiable path

### `complex-subspace-realification` — Complex Subspace Realification (1 item(s))

- `lem-complex-normed-subspace-realifies-to-real-normed-subspace` · lemma — A complex normed subspace and its finite basis realify

### `complex-subspace-realification-examples` — Complex Subspace Realification — Examples (1 item(s))

- `ex-complex-line-realification-basis-in-c2` · example — The complex line through (1,i) has a two-vector real basis

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/quantum-prerequisites-4-2026-10-15-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 5 batch adjudication, `quantum-prerequisites-4-2026-10-15`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
