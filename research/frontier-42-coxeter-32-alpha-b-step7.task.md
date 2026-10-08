# Step 7 adjudication — group **b**, run `frontier-42-coxeter-32`

You are the group Alpha for batches **2**, **7**, **9**: 3 A/B pair(s), 6 page(s), 26 item(s), 0 open rejection(s) over 0 item(s).

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
| 2 | `coxeter-presentations-exchange-and-reduced-word-theorems` | A | coxeter-groups | 1708 | `tensor-coherence-and-algebraic-descent`, `symmetric-groups-and-the-sign-homomorphism`, `splitting-fields`, `finite-fields-and-cyclotomic-extensions`, `group-homomorphisms-and-the-isomorphism-theorems` |
| 2 | `coxeter-presentations-exchange-and-reduced-word-theorems-examples` | B | coxeter-groups | 1709 | `coxeter-presentations-exchange-and-reduced-word-theorems` |
| 7 | `canonical-roots-signs-and-faithful-reflections` | A | coxeter-groups | 1730 | `real-forms-and-reflection-geometry`, `coxeter-presentations-exchange-and-reduced-word-theorems` |
| 7 | `canonical-roots-signs-and-faithful-reflections-examples` | B | coxeter-groups | 1731 | `canonical-roots-signs-and-faithful-reflections`, `free-products-and-amalgamation` |
| 9 | `tits-cones-chambers-and-parabolic-stabilizers` | A | coxeter-groups | 1734 | `canonical-roots-signs-and-faithful-reflections`, `hilbert-space-geometry-and-riesz-representation` |
| 9 | `tits-cones-chambers-and-parabolic-stabilizers-examples` | B | coxeter-groups | 1735 | `tits-cones-chambers-and-parabolic-stabilizers` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `coxeter-presentations-exchange-and-reduced-word-theorems` — Coxeter Presentations, Exchange, and Reduced Word Theorems (6 item(s))

- `def-hh-coxeter-matrix-word-group-and-length` · definition — Coxeter matrices, the presented Coxeter group, reduced words, length, and standard parabolic subgroups
- `def-hh-geometric-coxeter-representation-and-roots` · definition — The geometric representation on the simple-root basis over a common splitting field, and the root set
- `lem-hh-dihedral-root-recurrence-and-root-sign` · lemma — The rank-two block computation, exact dihedral orders, the signed reflection action, and ambient reducedness
- `thm-hh-coxeter-exchange-deletion-and-faithfulness` · theorem — Length parity, exchange, two-letter deletion, and faithfulness of the signed reflection action
- `thm-hh-matsumoto-reduced-word-theorem` · theorem — Matsumoto's theorem: braid connectivity of reduced expressions, with singleton detection in dihedral subgroups
- `thm-hh-parabolic-minimal-representatives-and-length-additivity` · theorem — Support, intrinsic parabolic presentations, minimal coset representatives and length additivity, with the type-A identification

### `coxeter-presentations-exchange-and-reduced-word-theorems-examples` — Coxeter Presentations, Exchange, and Reduced Word Theorems — Examples (5 item(s))

- `ex-hh-rank-one-reduced-words` · example — Reduced words in rank one
- `ex-hh-finite-dihedral-reduced-words` · example — Reduced words and lengths in a finite dihedral group
- `ex-hh-exchange-deletion-on-a-nonreduced-word` · example — A nonreduced word deleted by its repeated prefix reflection, and an exchange step
- `ex-hh-type-a-reduced-words-and-inversions` · example — Type-A reduced words and inversion numbers in $S_3$
- `ex-hh-minimal-representatives-for-s2-in-s3` · example — Minimal coset representatives of $S_2$ in $S_3$

### `canonical-roots-signs-and-faithful-reflections` — Canonical Roots, Signs, and Faithful Reflections (5 item(s))

- `lem-cg-rank-two-prefix-and-chamber-length-induction` · lemma — The rank-two half-space alternative and the chamber-length induction $(P_n)$, $(Q_n)$
- `thm-cg-root-sign-and-simple-reflection-positivity` · theorem — Root sign coherence and the action of simple reflections on positive roots
- `thm-cg-root-length-criterion-and-faithfulness` · theorem — The root-length criterion and faithfulness of the canonical reflection representation
- `def-cg-geometric-inversion-set` · definition — The geometric inversion set $N(w)$ of a Coxeter element and its step recursion
- `thm-cg-root-inversion-formulas-and-strong-exchange` · theorem — The root-reflection dictionary, the inversion-set formula, and strong exchange

### `canonical-roots-signs-and-faithful-reflections-examples` — Canonical Roots, Signs, and Faithful Reflections — Examples (3 item(s))

- `ex-cg-root-inversions-and-chambers-in-i2-5-a2-and-i2-infinity` · example — Roots, inversions and chamber images in $I_2(5)$, $A_2$ and infinite dihedral type
- `ex-cg-indefinite-form-admits-faithful-reflection-representation` · example — An indefinite Coxeter form with a faithful canonical reflection representation
- `ex-cg-mixed-sign-vector-is-not-a-root` · example — A vector with mixed signs is not a root, while every root has a sign

### `tits-cones-chambers-and-parabolic-stabilizers` — Tits Cones, Chambers, and Parabolic Stabilizers (4 item(s))

- `def-cg-tits-cone-and-fundamental-chamber` · definition — The Tits cone, its interior, and the negative-root set of a functional
- `thm-cg-tits-cone-finite-negativity-and-convexity` · theorem — The finite-negativity criterion, the reduction step, and convexity of the Tits cone
- `thm-cg-dual-chamber-intersections-and-point-stabilizers` · theorem — Chamber collisions, point stabilizers, and the intersection rule
- `thm-cg-tits-cone-interior-and-local-finiteness` · theorem — The interior of the Tits cone, finite parabolic stabilizers, and local finiteness

### `tits-cones-chambers-and-parabolic-stabilizers-examples` — Tits Cones, Chambers, and Parabolic Stabilizers — Examples (3 item(s))

- `ex-cg-tits-cone-of-infinite-dihedral-type` · example — The Tits cone of infinite dihedral type: interior, boundary, and stabilizers
- `ex-cg-chamber-face-stabilizers-in-a2` · example — Chamber faces and their stabilizers in $A_2$
- `ex-cg-outside-tits-cone-point-with-infinite-stabilizer` · example — A point outside the Tits cone with infinite stabilizer

## Your seams

Your pages depend on another group's:

- `coxeter-presentations-exchange-and-reduced-word-theorems` requires `tensor-coherence-and-algebraic-descent` (group a, batch 1)
- `canonical-roots-signs-and-faithful-reflections` requires `real-forms-and-reflection-geometry` (group c, batch 4)

Another group's pages depend on yours:

- `generic-coxeter-hecke-algebras-and-the-standard-basis` (group a) requires your `coxeter-presentations-exchange-and-reduced-word-theorems`
- `real-forms-and-reflection-geometry` (group c) requires your `coxeter-presentations-exchange-and-reduced-word-theorems`
- `parabolic-subgroups-and-double-coset-geometry` (group f) requires your `coxeter-presentations-exchange-and-reduced-word-theorems`
- `parabolic-subgroups-and-double-coset-geometry` (group f) requires your `canonical-roots-signs-and-faithful-reflections`
- `bruhat-subword-order-and-lifting` (group f) requires your `canonical-roots-signs-and-faithful-reflections`
- `finite-coxeter-diagrams-and-complete-classification` (group h) requires your `tits-cones-chambers-and-parabolic-stabilizers`
- `coxeter-artin-and-hecke-interfaces` (group i) requires your `coxeter-presentations-exchange-and-reduced-word-theorems`
- `coxeter-artin-and-hecke-interfaces` (group i) requires your `canonical-roots-signs-and-faithful-reflections`
- `heaps-commutation-classes-and-fully-commutative-elements` (group k) requires your `coxeter-presentations-exchange-and-reduced-word-theorems`

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
