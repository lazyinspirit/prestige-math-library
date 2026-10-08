# Step 7 adjudication — group **k**, run `frontier-42-coxeter-32`

You are the group Alpha for batches **23**, **28**, **32**: 3 A/B pair(s), 6 page(s), 25 item(s), 0 open rejection(s) over 0 item(s).

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
| 23 | `weak-order-inversions-and-lattice-operations` | A | coxeter-groups | 1762 | `parabolic-subgroups-and-double-coset-geometry`, `finite-reflection-arrangements-and-spherical-coxeter-complexes`, `chains-antichains-sperner-and-dilworth`, `incidence-algebras-and-mobius-inversion` |
| 23 | `weak-order-inversions-and-lattice-operations-examples` | B | coxeter-groups | 1763 | `weak-order-inversions-and-lattice-operations` |
| 28 | `heaps-commutation-classes-and-fully-commutative-elements` | A | coxeter-groups | 1772 | `weak-order-inversions-and-lattice-operations`, `coxeter-presentations-exchange-and-reduced-word-theorems`, `finite-lattice-projections-and-coxeter-chain-labels`, `chains-antichains-sperner-and-dilworth` |
| 28 | `heaps-commutation-classes-and-fully-commutative-elements-examples` | B | coxeter-groups | 1773 | `heaps-commutation-classes-and-fully-commutative-elements` |
| 32 | `sortable-projections-and-finite-cambrian-lattices` | A | coxeter-groups | 1780 | `coxeter-euler-forms-and-sortable-chamber-cones`, `finite-lattice-projections-and-coxeter-chain-labels` |
| 32 | `sortable-projections-and-finite-cambrian-lattices-examples` | B | coxeter-groups | 1781 | `sortable-projections-and-finite-cambrian-lattices` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `weak-order-inversions-and-lattice-operations` — Weak Order, Inversions, and Lattice Operations (6 item(s))

- `def-cg-left-right-weak-order-and-descents` · definition — The right and left weak orders, intervals, covers, and meets and joins of subsets
- `lem-cg-weak-order-prefix-property-and-left-translation` · lemma — The length identity, the prefix property, left translation, and interval translation for weak order
- `lem-cg-weak-order-is-a-graded-partial-order` · lemma — Weak order is a graded partial order; covers and the inversion-set criterion
- `lem-cg-bounded-weak-order-join-construction` · lemma — Binary meets, meets of arbitrary nonempty subsets, and joins of bounded subsets in weak order
- `lem-cg-full-descent-element-characterizes-finite-type` · lemma — An element with all simple reflections as left descents characterizes finite type
- `thm-cg-weak-order-meet-semilattice-and-finite-lattice` · theorem — Weak order is a meet-semilattice, finite Coxeter groups are lattices, and joins of simple reflections exist exactly for finite parabolics

### `weak-order-inversions-and-lattice-operations-examples` — Weak Order, Inversions, and Lattice Operations — Examples (3 item(s))

- `ex-cg-s3-weak-order-meets-and-joins` · example — All meets and joins of the right weak order of $A_2$ ($S_3$), with the left order and the inversion sets compared
- `ex-cg-infinite-dihedral-bounded-interval-and-missing-join` · example — Infinite dihedral type: lower intervals are chains, but the two atoms have no upper bound
- `cex-cg-inversion-sets-do-not-compute-meets-and-joins` · counterexample — Meets and joins are not intersection and union of inversion sets: the $A_2$ counterexample

### `heaps-commutation-classes-and-fully-commutative-elements` — Heaps, Commutation Classes, and Fully Commutative Elements (7 item(s))

- `def-cg-linear-extension-of-a-finite-poset` · definition — Linear extensions of a finite poset
- `def-cg-labeled-word-heap-and-fully-commutative-element` · definition — Words, heaps, linear extensions, commutation classes, and fully commutative elements
- `lem-cg-finite-poset-linear-extensions-and-connectivity` · lemma — Linear extensions of a finite poset: existence, prescribed initial ideals, and adjacent-swap connectivity
- `lem-cg-convex-chains-consecutive-in-a-linear-extension` · lemma — A convex chain (in particular a covering pair) of a finite poset occurs consecutively in some linear extension
- `thm-cg-heaps-classify-commutation-classes` · theorem — Labeled linear extensions of a heap are exactly the words in its commutativity class, and heaps classify commutativity classes
- `thm-cg-fully-commutative-forbidden-chain-criterion` · theorem — Fully commutative elements: the braid-factor criterion and the forbidden-chain heap criterion
- `thm-cg-fully-commutative-weak-intervals-are-distributive` · theorem — The right weak order interval below a fully commutative element is the lattice of order ideals of its heap

### `heaps-commutation-classes-and-fully-commutative-elements-examples` — Heaps, Commutation Classes, and Fully Commutative Elements — Examples (4 item(s))

- `ex-cg-heap-of-one-three-two-in-a3` · example — The heap of $s_1s_3s_2$ in type $A_3$: a V-shaped heap with exactly two linear extensions
- `ex-cg-heap-of-one-two-one-in-a2-and-long-braid` · example — The heap of $s_1s_2s_1$ in type $A_2$: a convex alternating chain and two commutation classes
- `ex-cg-distributive-weak-intervals-of-fully-commutative-elements` · example — Two distributive right weak intervals of fully commutative elements in type $A_3$
- `ex-cg-nondistributive-weak-interval-of-a-non-fully-commutative-element` · example — The right weak interval below the longest element of $A_2$ is not distributive

### `sortable-projections-and-finite-cambrian-lattices` — Sortable Projections and Finite Cambrian Lattices (3 item(s))

- `def-cg-recursive-sortable-projection-and-cambrian-congruence` · definition — The sortable projection kernel and the c-Cambrian quotient
- `thm-cg-sortable-meet-join-closure-and-cambrian-quotient` · theorem — Sortable elements form a sublattice and the c-Cambrian quotient is its lattice-homomorphic image
- `thm-cg-sortable-projection-greatest-element-and-interval-fibers` · theorem — The upper endpoint of a c-Cambrian fiber, interval fibers and the explicit formula u_c(w) = pi_{c^{-1}}(ww0)w0

### `sortable-projections-and-finite-cambrian-lattices-examples` — Sortable Projections and Finite Cambrian Lattices — Examples (2 item(s))

- `ex-cg-a3-sortable-subset-and-a-three-element-fiber` · example — The c-sortable subset of A3 for c = s1s2s3, a three-element fiber, and the upper endpoint map
- `ex-cg-cambrian-quotient-of-s3-and-two-orientations` · example — The c-Cambrian quotient of S3 for both orientations: fibers, endpoints and meet/join preservation

## Your seams

Your pages depend on another group's:

- `weak-order-inversions-and-lattice-operations` requires `parabolic-subgroups-and-double-coset-geometry` (group f, batch 10)
- `weak-order-inversions-and-lattice-operations` requires `finite-reflection-arrangements-and-spherical-coxeter-complexes` (group c, batch 17)
- `heaps-commutation-classes-and-fully-commutative-elements` requires `coxeter-presentations-exchange-and-reduced-word-theorems` (group b, batch 2)
- `heaps-commutation-classes-and-fully-commutative-elements` requires `finite-lattice-projections-and-coxeter-chain-labels` (group d, batch 5)
- `sortable-projections-and-finite-cambrian-lattices` requires `coxeter-euler-forms-and-sortable-chamber-cones` (group i, batch 29)
- `sortable-projections-and-finite-cambrian-lattices` requires `finite-lattice-projections-and-coxeter-chain-labels` (group d, batch 5)

Another group's pages depend on yours:

- `coxeter-descents-poincare-polynomials-and-growth` (group h) requires your `weak-order-inversions-and-lattice-operations`
- `coxeter-euler-forms-and-sortable-chamber-cones` (group i) requires your `weak-order-inversions-and-lattice-operations`

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
