# Step 5 adjudication — group **u**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the group Alpha for batches 61, 62, 63: 3 A/B pair(s), 6 page(s), 29 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **61**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-61-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **62**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-62-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **63**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-63-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 61 | `seifert-matrices-and-the-alexander-module` | A | knot-theory | 3118 | `hecke-markov-traces-and-polynomial-link-invariants`, `knot-exteriors-and-peripheral-systems`, `crossing-signs-writhe-and-linking-number`, `seifert-surfaces-and-knot-genus` |
| 61 | `seifert-matrices-and-the-alexander-module-examples` | B | knot-theory | 3119 | `seifert-matrices-and-the-alexander-module` |
| 62 | `alexander-polynomial-from-seifert-matrices` | A | knot-theory | 3120 | `seifert-matrices-and-the-alexander-module`, `connected-sums-and-prime-decomposition` |
| 62 | `alexander-polynomial-from-seifert-matrices-examples` | B | knot-theory | 3121 | `alexander-polynomial-from-seifert-matrices` |
| 63 | `fox-colorings-and-quandle-invariants` | A | knot-theory | 3122 | `wirtinger-presentations-and-knot-groups`, `crossing-signs-writhe-and-linking-number` |
| 63 | `fox-colorings-and-quandle-invariants-examples` | B | knot-theory | 3123 | `fox-colorings-and-quandle-invariants` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `seifert-matrices-and-the-alexander-module` — Seifert matrices and the Alexander module (8 item(s))

- `def-seifert-matrix-s-equivalence` · definition — S-equivalence of integral Seifert matrices
- `def-knot-seifert-pairing-and-matrix` · definition — Seifert pairing and matrix of an oriented knot
- `lem-seifert-pairing-well-defined` · lemma — Well-definedness of the Seifert pairing
- `lem-seifert-matrix-skew-part-is-surface-intersection` · lemma — The skew part of a Seifert matrix is the surface intersection form
- `lem-seifert-cut-open-cover-alexander-module-presentation` · lemma — The cut-open cover presentation of the Alexander module
- `lem-seifert-matrix-s-equivalence-under-isotopy` · lemma — Seifert matrices of ambient-isotopic pairs are S-equivalent
- `lem-knot-infinite-cyclic-cover-cut-and-paste-presentation` · lemma — The Seifert-matrix map in the infinite cyclic cover
- `thm-seifert-matrix-presents-knot-alexander-module` · theorem — A Seifert matrix presents the one-variable Alexander module

### `seifert-matrices-and-the-alexander-module-examples` — Seifert matrices and the Alexander module — Examples and Counterexamples (2 item(s))

- `cex-knot-kt-06-boundary-case` · counterexample — The unknot has a zero-order Seifert matrix
- `ex-knot-kt-06-worked-cases` · example — Trefoil Seifert matrix and basis changes

### `alexander-polynomial-from-seifert-matrices` — Alexander polynomials from Seifert matrices (5 item(s))

- `lem-square-seifert-presentation-and-alexander-normalization` · lemma — The square Seifert presentation generates the knot Alexander polynomial
- `thm-seifert-determinant-is-the-knot-alexander-polynomial` · theorem — The Seifert determinant is the knot Alexander polynomial
- `cor-knot-alexander-normalization-symmetry-and-genus-bound` · corollary — Knot Alexander normalization, symmetry, and genus bound
- `cor-alexander-polynomial-multiplies-under-connected-sum` · corollary — The knot Alexander polynomial multiplies under connected sum
- `ex-knot-kt-07-worked-cases` · example — Trefoil and figure-eight Alexander polynomials from Seifert matrices

### `alexander-polynomial-from-seifert-matrices-examples` — Alexander polynomials from Seifert matrices — Examples and Counterexamples (1 item(s))

- `cex-knot-kt-07-boundary-case` · counterexample — The knot-normalized Alexander fraction need not be a Laurent polynomial

### `fox-colorings-and-quandle-invariants` — Fox colorings and quandle invariants (11 item(s))

- `def-quandle-and-knot-coloring` · definition — Quandles and knot-diagram colorings
- `lem-dihedral-operation-is-a-quandle` · lemma — The dihedral operation is a quandle
- `thm-quandle-colorings-are-reidemeister-invariant` · theorem — Quandle colorings are invariant under oriented Reidemeister moves
- `def-rack-fundamental-quandle-and-adjoint-group` · definition — Racks, diagram fundamental quandles, and adjoint groups
- `alg-dihedral-fox-colorings` · algorithm — Compute dihedral Fox colorings by row reduction
- `lem-rack-kink-map-is-bijective` · lemma — The rack kink map is bijective
- `alg-finite-rack-quandle-coloring-from-table` · algorithm — Check a finite rack table and enumerate diagram colorings
- `thm-dihedral-fox-colorings-terminate-and-are-correct` · theorem — The Fox-coloring algorithm terminates and returns all colorings
- `thm-finite-table-coloring-termination-and-correctness` · theorem — The finite-table coloring algorithm terminates and is correct
- `thm-fundamental-quandle-and-adjoint-group-from-wirtinger` · theorem — Diagram fundamental quandles and adjoint groups from Wirtinger data
- `thm-rack-colorings-are-framed-invariants` · theorem — Rack colorings are framed Reidemeister invariants

### `fox-colorings-and-quandle-invariants-examples` — Fox colorings and quandle invariants — Examples and Counterexamples (2 item(s))

- `ex-knot-kt-08-worked-cases` · example — Trefoil and unknot Fox-coloring counts
- `cex-knot-kt-08-boundary-case` · counterexample — One Fox coloring prime does not classify knots

## Your seams

Your pages depend on another group's:

- `seifert-matrices-and-the-alexander-module` requires `knot-exteriors-and-peripheral-systems` (group s, batch 57)
- `seifert-matrices-and-the-alexander-module` requires `crossing-signs-writhe-and-linking-number` (group t, batch 58)
- `seifert-matrices-and-the-alexander-module` requires `seifert-surfaces-and-knot-genus` (group t, batch 59)
- `alexander-polynomial-from-seifert-matrices` requires `connected-sums-and-prime-decomposition` (group t, batch 60)
- `fox-colorings-and-quandle-invariants` requires `wirtinger-presentations-and-knot-groups` (group s, batch 56)
- `fox-colorings-and-quandle-invariants` requires `crossing-signs-writhe-and-linking-number` (group t, batch 58)

Another group's pages depend on yours:

- `cyclic-branched-covers-and-knot-determinants` (group v) requires your `seifert-matrices-and-the-alexander-module`
- `cyclic-branched-covers-and-knot-determinants` (group v) requires your `alexander-polynomial-from-seifert-matrices`
- `levine-tristram-signatures-and-arf-invariant` (group w) requires your `seifert-matrices-and-the-alexander-module`
- `levine-tristram-signatures-and-arf-invariant` (group w) requires your `alexander-polynomial-from-seifert-matrices`
- `levine-tristram-signatures-and-arf-invariant-examples` (group w) requires your `alexander-polynomial-from-seifert-matrices`
- `torus-knots-and-seifert-fibered-exteriors` (group x) requires your `alexander-polynomial-from-seifert-matrices`
- `smooth-and-topological-knot-concordance` (group y) requires your `seifert-matrices-and-the-alexander-module`
- `algebraic-knot-concordance-and-metabolic-forms` (group y) requires your `seifert-matrices-and-the-alexander-module`
- `algebraic-knot-concordance-and-metabolic-forms` (group y) requires your `alexander-polynomial-from-seifert-matrices`
- `fox-milnor-factorization-and-slice-obstructions` (group z) requires your `alexander-polynomial-from-seifert-matrices`
- `freedman-theorem-and-topological-sliceness` (group z) requires your `alexander-polynomial-from-seifert-matrices`
- `terminating-computations-for-classical-knot-invariants` (group ai) requires your `fox-colorings-and-quandle-invariants`

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

# Historical Step-5 closure recovery, `inverse-problems-knot-theory-all-109-2026-10-19`

Historical compatibility task only. Preserve historical exact-tuple decisions
as evidence; this template grants no current repair or certification authority.
Historical receipts constrain `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`; do not reinterpret those records
as current round coverage.

Current rounds use `tools/step5-workflow.mjs`, `briefs/step5-adjudicator.md`
and `briefs/step5-owner-repair.md`. Follow those briefs
and the generated round-bound task. Repair all confirmed defects, including
nonfatal defects, and continue downstream repair until complete before the
single central certification pass.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
