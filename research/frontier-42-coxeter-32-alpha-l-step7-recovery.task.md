# Step 7 adjudication — group **l**, run `frontier-42-coxeter-32`

You are the group Alpha for batches **24**, **27**: 2 A/B pair(s), 4 page(s), 24 item(s), 0 open rejection(s) over 0 item(s).

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
| 24 | `affine-reflections-coroot-translations-and-alcoves` | A | coxeter-groups | 1764 | `crystallographic-root-lattices-and-weyl-group-interfaces`, `real-forms-and-reflection-geometry`, `homotopy-and-homotopy-equivalence`, `simplicial-subdivision-and-simplicial-approximation`, `root-systems-dynkin-diagrams-and-cartan-killing-classification` |
| 24 | `affine-reflections-coroot-translations-and-alcoves-examples` | B | coxeter-groups | 1765 | `affine-reflections-coroot-translations-and-alcoves` |
| 27 | `affine-coxeter-diagrams-and-semidefinite-classification` | A | coxeter-groups | 1770 | `finite-coxeter-diagrams-and-complete-classification`, `affine-reflections-coroot-translations-and-alcoves` |
| 27 | `affine-coxeter-diagrams-and-semidefinite-classification-examples` | B | coxeter-groups | 1771 | `affine-coxeter-diagrams-and-semidefinite-classification`, `trigonometric-and-oscillatory-examples-in-one-variable` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `affine-reflections-coroot-translations-and-alcoves` — Affine Reflections, Coroot Translations, and Alcoves (7 item(s))

- `def-cg-affine-root-hyperplane-reflection-and-alcove` · definition — Affine root hyperplanes, coroot translations, alcoves, and the affine reflection group
- `lem-cg-affine-reflection-identities-and-local-finiteness` · lemma — Affine reflections: translation form, involutivity, local finiteness, and $W_a=Q^\vee\rtimes W$
- `lem-cg-highest-root-and-fundamental-alcove` · lemma — Highest root dominance and the fundamental alcove
- `lem-cg-affine-alcove-separation-and-facet-types` · lemma — Alcove separation, facet reflections, panel types, and triviality of the fundamental alcove stabilizer
- `lem-cg-affine-point-stabilizers-and-vertex-residues` · lemma — Point stabilizers, vertex residues, and rank-two boundary words
- `lem-cg-affine-generic-gallery-paths-and-disk-moves` · lemma — Generic galleries, boundary-fixed disks, and the gallery-move calculus
- `thm-cg-affine-alcove-transitivity-presentation-and-length` · theorem — Alcove transitivity, the affine Coxeter presentation, and the length function

### `affine-reflections-coroot-translations-and-alcoves-examples` — Affine Reflections, Coroot Translations, and Alcoves — Examples (4 item(s))

- `ex-cg-a1-affine-line-alcoves-and-translations` · example — The $A_1$ affine line: alcoves, translations, and the root versus coroot lattice
- `ex-cg-a2-and-b2-alcove-shapes-and-corner-data` · example — The $A_2$ and $B_2$ fundamental alcoves: coordinates, corner vectors, and facet types
- `ex-cg-root-versus-coroot-translation-lattices` · example — Root versus coroot translation lattices: A2, B2 and two conventions
- `ex-cg-extended-affine-weyl-group-and-alcove-stabilizers` · example — The extended affine Weyl group and non-trivial alcove stabilizers

### `affine-coxeter-diagrams-and-semidefinite-classification` — Affine Coxeter Diagrams and Semidefinite Classification (8 item(s))

- `lem-cg-similar-euclidean-simplices-from-shared-facet-normal-gram` · lemma — Euclidean simplices with the same facet-normal Gram matrix are similar facet to facet
- `def-cg-irreducible-affine-coxeter-type` · definition — Irreducible affine Coxeter type: the corank-one form, the radical quotient, and the affine slice
- `lem-cg-positive-radical-and-affine-gram-exclusions` · lemma — Positive radical, corank one, positive definiteness of proper submatrices, and domination exclusions
- `def-cg-standard-affine-diagrams` · definition — The standard affine diagrams A-tilde, B-tilde, C-tilde, D-tilde, E-tilde, F-tilde and G-tilde
- `lem-cg-affine-slice-simplex-and-wall-reflections` · lemma — The affine slice: faithful isometric action, the alcove simplex, and its facet reflections
- `lem-cg-affine-type-crystallographic-alcove-diagrams` · lemma — Crystallographic alcove diagrams: the affine list realized by Weyl types A–G
- `lem-cg-affine-diagram-enumeration` · lemma — Enumeration of the connected positive semidefinite corank-one diagrams
- `thm-cg-affine-gram-classification-and-euclidean-realization` · theorem — Classification of affine Coxeter diagrams and their Euclidean simplex realization

### `affine-coxeter-diagrams-and-semidefinite-classification-examples` — Affine Coxeter Diagrams and Semidefinite Classification — Examples (5 item(s))

- `ex-cg-reducible-semidefinite-forms-are-factorwise` · example — Reducible positive semidefinite forms: factorwise treatment and the square alcove
- `ex-cg-a-tilde-1-infinity-edge-versus-finite-dihedral` · example — The A-tilde 1 infinity edge, separated from the finite dihedral families and from the 4-edge
- `ex-cg-a-tilde-2-radical-vector-and-affine-slice` · example — The radical vector of A-tilde 2 and its Euclidean slice
- `ex-cg-b-tilde-versus-c-tilde-diagrams` · example — B-tilde versus C-tilde: the n=2 coincidence and the duality behind the difference
- `ex-cg-indefinite-coxeter-form-is-not-affine` · example — An indefinite Coxeter form: infinite, but not of affine type

## Your seams

Your pages depend on another group's:

- `affine-reflections-coroot-translations-and-alcoves` requires `crystallographic-root-lattices-and-weyl-group-interfaces` (group h, batch 21)
- `affine-reflections-coroot-translations-and-alcoves` requires `real-forms-and-reflection-geometry` (group c, batch 4)
- `affine-coxeter-diagrams-and-semidefinite-classification` requires `finite-coxeter-diagrams-and-complete-classification` (group h, batch 13)

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

# Historical Step-7 closure recovery, `frontier-42-coxeter-32`

Historical compatibility task only. Preserve historical exact-tuple decisions
as evidence; this template grants no current repair or certification authority.
Historical receipts constrain `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`; do not reinterpret those records
as current round coverage.

Current rounds use `tools/step7-workflow.mjs`, `briefs/step7-adjudicator.md`
and `briefs/step7-owner-repair.md`. Follow those briefs
and the generated round-bound task. Repair all confirmed defects, including
nonfatal defects, and continue downstream repair until complete before the
single central certification pass.
