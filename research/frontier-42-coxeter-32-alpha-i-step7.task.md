# Step 7 adjudication — group **i**, run `frontier-42-coxeter-32`

You are the group Alpha for batches **14**, **29**: 2 A/B pair(s), 4 page(s), 26 item(s), 0 open rejection(s) over 0 item(s).

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
in `research/frontier-42-coxeter-32-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 14 | `coxeter-artin-and-hecke-interfaces` | A | coxeter-groups | 1744 | `coxeter-presentations-exchange-and-reduced-word-theorems`, `canonical-roots-signs-and-faithful-reflections`, `parabolic-subgroups-and-double-coset-geometry`, `group-homomorphisms-and-the-isomorphism-theorems`, `generic-coxeter-hecke-algebras-and-the-standard-basis`, `garside-structure-normal-forms-and-the-center`, `braids-as-fundamental-groups-of-configuration-spaces`, `artin-presentation-completeness-and-braid-combing` |
| 14 | `coxeter-artin-and-hecke-interfaces-examples` | B | coxeter-groups | 1745 | `coxeter-artin-and-hecke-interfaces` |
| 29 | `coxeter-euler-forms-and-sortable-chamber-cones` | A | coxeter-groups | 1774 | `weak-order-inversions-and-lattice-operations`, `finite-reflection-arrangements-and-spherical-coxeter-complexes` |
| 29 | `coxeter-euler-forms-and-sortable-chamber-cones-examples` | B | coxeter-groups | 1775 | `coxeter-euler-forms-and-sortable-chamber-cones` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `coxeter-artin-and-hecke-interfaces` — Coxeter, Artin, and Hecke Interfaces (4 item(s))

- `def-cg-artin-monoid-and-group-presentations` · definition — Artin monoid and Artin group presentations, and the canonical monoid-to-group map
- `lem-cg-artin-presentation-universal-properties-and-coxeter-surjection` · lemma — Universal properties of the Artin monoid and group, the projection onto the Coxeter group, and the quotient by the squares
- `thm-cg-reduced-positive-section-and-length-additive-products` · theorem — The reduced positive section of the Coxeter group, the positive length, and multiplicativity on length-additive products
- `lem-cg-hecke-and-lie-seam-contract-compatibility` · lemma — Hecke, Artin and realization seams: indexing, normalizations, root-length matching and the reflection-faithfulness boundary

### `coxeter-artin-and-hecke-interfaces-examples` — Coxeter, Artin, and Hecke Interfaces — Examples (4 item(s))

- `ex-cg-type-a-artin-projection-and-positive-lifts` · example — The type-A Artin group, its projection to the symmetric group, and reduced positive lifts
- `cex-cg-artin-positive-lift-is-not-a-homomorphism` · counterexample — The positive lift of the Coxeter group is not a homomorphism
- `ex-cg-quadratic-hecke-normalizations-s-equals-q-t` · example — Quadratic Hecke normalizations: S=qT with Q=q^2, the opposite-sign form, and the Soergel-calculus and Kazhdan-Lusztig conversions
- `cex-cg-faithful-canonical-realization-need-not-be-reflection-faithful` · counterexample — A faithful canonical realization that is not reflection faithful: the affine rank-two system

### `coxeter-euler-forms-and-sortable-chamber-cones` — Coxeter Euler Forms and Sortable Chamber Cones (14 item(s))

- `def-cg-coxeter-oriented-euler-form-and-c-sorting-word` · definition — Coxeter elements, the oriented Euler form, the skew form, and the periodic word
- `lem-cg-positive-span-of-transported-simple-roots` · lemma — A transported simple root lies in the positive span of the simple root and the inversion roots
- `lem-cg-coxeter-word-transport-and-form-independence` · lemma — Coxeter words are commutation-connected; the Euler and skew forms depend only on the Coxeter element
- `lem-cg-finite-dihedral-subsystems-and-canonical-roots` · lemma — Plane subsystems, their canonical generators, and the angular order of their roots
- `lem-cg-finite-rank-two-inversion-set-recognition` · lemma — Finite inversion sets are recognized by their rank-two initial or final segments
- `lem-cg-greedy-sorting-word-and-rank-two-alignment` · lemma — The greedy scan computes the c-sorting word; commutation, conjugation and rank-two alignment
- `lem-cg-weak-parabolic-projection-and-cover-joins` · lemma — The weak parabolic projection, its adjoints, and the cover-join lemmas
- `def-cg-sortable-element-skip-roots-and-cone` · definition — c-sortable elements, forced and unforced skips, skip roots, and the chamber cone
- `lem-cg-uniform-omega-positive-and-aligned-sortability` · lemma — Omega-positive reflection sequences are exactly the sorting words; sortable equals aligned; parabolic restriction
- `def-cg-initial-letter-sortable-projection` · definition — The recursive initial-letter sortable projection
- `lem-cg-sortable-recursion-output-and-initial-choice-independence` · lemma — The recursive projection is well defined, sortable-valued, below w, idempotent, descent-detecting and parabolic
- `lem-cg-sortable-skips-basis-and-cover-decomposition` · lemma — Skip roots form a basis, negative skips are cover roots, and the cover decomposition of sortable elements
- `lem-cg-sortable-cone-criterion-and-projection-monotonicity` · lemma — The cone criterion, monotonicity of the projection, and the greatest sortable element below w
- `thm-cg-sortable-skip-basis-cover-roots-and-chamber-unions` · theorem — Skip bases, cover roots, greatest-sortable projections, and the chamber union of each cone

### `coxeter-euler-forms-and-sortable-chamber-cones-examples` — Coxeter Euler Forms and Sortable Chamber Cones — Examples (4 item(s))

- `cex-cg-rank-two-inversion-set-violating-closure` · counterexample — A set of two reflections of A2 that fails both closure and the segment criterion
- `ex-cg-euler-and-skew-form-in-a3` · example — The Euler and skew forms of c = s1s2s3 in A3, and the orientation of its rank-two subsystems
- `ex-cg-source-sink-move-and-sign-convention` · example — A source–sink move in A3: transporting the Euler and skew forms by an initial letter
- `ex-cg-skips-and-cone-walls-for-a-sorting-word-in-a3` · example — All skips and the cone walls of the sortable element s1s2 in A3

## Your seams

Your pages depend on another group's:

- `coxeter-artin-and-hecke-interfaces` requires `coxeter-presentations-exchange-and-reduced-word-theorems` (group b, batch 2)
- `coxeter-artin-and-hecke-interfaces` requires `canonical-roots-signs-and-faithful-reflections` (group b, batch 7)
- `coxeter-artin-and-hecke-interfaces` requires `parabolic-subgroups-and-double-coset-geometry` (group f, batch 10)
- `coxeter-artin-and-hecke-interfaces` requires `generic-coxeter-hecke-algebras-and-the-standard-basis` (group a, batch 3)
- `coxeter-euler-forms-and-sortable-chamber-cones` requires `weak-order-inversions-and-lattice-operations` (group k, batch 23)
- `coxeter-euler-forms-and-sortable-chamber-cones` requires `finite-reflection-arrangements-and-spherical-coxeter-complexes` (group c, batch 17)

Another group's pages depend on yours:

- `sortable-projections-and-finite-cambrian-lattices` (group k) requires your `coxeter-euler-forms-and-sortable-chamber-cones`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-6 reader warnings

None. No Step-6 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/frontier-42-coxeter-32-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 batch adjudication, `frontier-42-coxeter-32`

- Follow `briefs/step7-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.
