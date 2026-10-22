# Batch 63 authoring notes — Fox colorings and quandle invariants

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Batch: `63`; role: beta; pair: `fox-colorings-and-quandle-invariants`  
Scheduling input: `69632ca90817955c25ab60d41e32cde58ca7d3d83e260e2e0e7ef6b68b8447ce`

## Controlling design and reconciliation

Read `research/inverse-problems-knot-theory-all-109-2026-10-19-owner-authoring-direction.md` before constructing carriers. The complete KT-08 design section at `research/plan-knot-theory-track.md` L310 and L312 controls the mathematical scope, conventions, warnings, and route. The corresponding `research/plan-spec.json` entries agree on pair IDs, title, category, order, and prerequisites, but have empty item arrays. Those empty arrays are scaffolding, not an alternative scope. No substantive design conflict was found. Item inventory and exact computed levels are below.

The pages are frontmatter-only, with empty bodies and no summaries. No `page_layout` flag was added; the engine owns its mechanical setting. The existing category introduction and pathway brief are outside this pair's write scope.

## Current item inventory and dependency levels

Levels were recalculated against the current manifests for batches 56, 58, and 63. The labels below include cross-batch item edges; they are not just the pair-level batch schedule.

| Item | Level | Main declared dependencies | Current Step 1 disposition |
|---|---:|---|---|
| `def-quandle-and-knot-coloring` | 0 | `def-regular-oriented-link-diagram` | ready |
| `lem-dihedral-operation-is-a-quandle` | 1 | `def-quandle-and-knot-coloring` | ready |
| `alg-dihedral-fox-colorings` | 2 | `def-quandle-and-knot-coloring`, `lem-dihedral-operation-is-a-quandle`, `def-regular-oriented-link-diagram` | ready |
| `thm-dihedral-fox-colorings-terminate-and-are-correct` | 3 | `alg-dihedral-fox-colorings`, `def-regular-oriented-link-diagram` | ready |
| `thm-quandle-colorings-are-reidemeister-invariant` | 1 | `def-quandle-and-knot-coloring`, `def-oriented-reidemeister-moves`, `thm-oriented-reidemeister-equivalence-theorem`, `def-countable-choice` | ready |
| `def-rack-fundamental-quandle-and-adjoint-group` | 1 | `def-quandle-and-knot-coloring`, `def-regular-oriented-link-diagram`, `def-group-presentation`; `justified_by: thm-fundamental-quandle-and-adjoint-group-from-wirtinger` | escalated |
| `lem-rack-kink-map-is-bijective` | 2 | `def-rack-fundamental-quandle-and-adjoint-group` | escalated through its justified supplier |
| `thm-rack-colorings-are-framed-invariants` | 6 | rack definition, kink lemma, Reidemeister moves, batch-58 crossing-sign and framed-knot definitions | escalated |
| `alg-finite-rack-quandle-coloring-from-table` | 2 | rack definition, `def-regular-oriented-link-diagram` | escalated through rack-definition readiness |
| `thm-finite-table-coloring-termination-and-correctness` | 3 | finite-table algorithm, rack definition, `def-regular-oriented-link-diagram` | escalated through rack-definition readiness |
| `thm-fundamental-quandle-and-adjoint-group-from-wirtinger` | 5 | rack definition, group presentation, Reidemeister theorem, `def-countable-choice`, knot model/code, batch-56 constructor and correctness theorem | escalated |
| `ex-knot-kt-08-worked-cases` | 4 | Fox algorithm and correctness theorem, quandle-coloring invariance, `def-countable-choice` | ready |
| `cex-knot-kt-08-boundary-case` | 6 | Fox algorithm and correctness theorem, quandle-coloring invariance, the fundamental-quandle/adjoint-group theorem, `def-countable-choice` | escalated |

Independent claims authored despite unresolved rack and Wirtinger prerequisites: rack axioms and term quotient; arbitrary-rack kink-map proof; all local rack and quandle move arguments; finite table checker and correctness proof; group-map construction conditional on the stated Wirtinger interface; and the Fox 3- and 5-color computations. No supplier excerpts or approvals were invented.

## Exact unresolved interfaces and affected claims

### Batch 56 — KT-01

The current batch-56 manifest lists `def-knot-planar-code` at level 0, `alg-knot-wirtinger-presentation-from-code` at level 3, and `thm-knot-wirtinger-presentation-correctness` at level 4. All three carrier files are now present and were inspected. The code definition uses maximal under-arcs and records oriented over/under branches, matching the arc objects in `Q(D)`.

Two unresolved mathematical defects prevent readiness of `thm-fundamental-quandle-and-adjoint-group-from-wirtinger` and its consumers:

1. In the displayed right-handed crossing chart, `lem-wirtinger-local-meridian-conjugacy` states `m_R = m_o m_L m_o^{-1}` for the incoming/outgoing under-arcs. In the same chart, the positive-normal coloring convention in `def-quandle-and-knot-coloring` gives source-to-target relation `x_R = x_L*x_o`, whose declared adjoint relation is `e_{x_R} = e_o^{-1} e_{x_L} e_o`. These conjugation directions disagree if the same arcs and positive meridians are used. The constructor delegates its choice between the two group relators to that local lemma. Reconcile the chart, source/target labels, and meridian assignment before asserting the fixed interface in the batch-63 theorem.
2. `thm-knot-wirtinger-presentation-correctness` uses `lem-wirtinger-crossing-ball-cover` as [F1]. That supplier's current body explicitly says its claimed cover and strong deformation retraction remain unproved; it says only the arc count and a reduction to the exterior were established. Therefore the correctness proof does not establish the group isomorphism.

There is also an implicit dependency defect: the constructor and local conjugacy lemma speak of positive meridians but do not declare `def-knot-meridian-and-preferred-longitude`, which defines their orientation. The exact downstream requirements are positive meridians on the same code under-arcs, a convention matching the quandle source/target normal, and a proved identification with `pi_1(S^3\\K)`. Affected batch-63 claims: `thm-fundamental-quandle-and-adjoint-group-from-wirtinger`, the `justified_by` status of `def-rack-fundamental-quandle-and-adjoint-group`, its rack and finite-table consumers, and the planned knot-group distinction in `cex-knot-kt-08-boundary-case`.

### Batch 58 — KT-03

The two declared definitions now exist and were inspected. `def-oriented-crossing-sign-writhe-and-blackboard-framing` defines the determinant sign from oriented over/under tangents and the blackboard section as the positive quarter-turn of the projected tangent. `def-framed-knot-self-linking-and-seifert-framing` defines framings as homotopy classes of nonzero normal sections and gives a relative winding integer. Neither definition states the R1 framing-change law or that a framing-preserving opposite-kink pair induces the two inverse rack kink maps.

The proposed additional supplier is `thm-linking-number-is-invariant-and-writhe-is-not` (batch 58, item level 7); its statement says blackboard self-linking changes by the same signed amount under R1. Importing it would add a cross-batch edge and raise `thm-rack-colorings-are-framed-invariants` to level 8, so the current level-6 theorem remains escalated pending owner reconciliation or a complete local proof. Its R2/R3 and local kink algebra is drafted independently and conditionally.

## Mathematical claims and conventions

- `def-quandle-and-knot-coloring`: right-operation quandle axioms; finite under-arcs; positive normal to the oriented overarc sets source/target; target color is source acted on by overarc. TikZ diagram is labeled and described; proofs do not rely on it.
- `lem-dihedral-operation-is-a-quandle`: for odd prime `p`, `a*b=2b-a` on `F_p`; field inverses use Bézout, right translations are involutions, and idempotency/self-distributivity are checked algebraically.
- `alg-dihedral-fox-colorings`: deterministic row reduction of the homogeneous crossing system `2x_o-x_i-x_j=0`, with fixed supplied orderings.
- `thm-dihedral-fox-colorings-terminate-and-are-correct`: row operations preserve the solution set; pivot/free variables give all solutions; handles zero arcs and zero crossings.
- `thm-quandle-colorings-are-reidemeister-invariant`: proves local extension bijections for every oriented R1/R2/R3 variant and proves the converse from the local extension property. `AC_omega` is used only via the ambient-isotopy/Reidemeister theorem for global link invariance.
- `def-rack-fundamental-quandle-and-adjoint-group`: rack/quandle operations, term quotient on diagram under-arcs, crossing relations, and adjoint group presentation. Its diagram-independence dependency is the escalated KT-01 theorem.
- `lem-rack-kink-map-is-bijective`: proves `pi(x)=x*x` bijective for arbitrary racks, with inverse `pi^{-1}(z)=R_z^{-1}(z)`; includes the empty rack.
- `thm-rack-colorings-are-framed-invariants`: local R2/R3 bijections, R1 kink action, and the single-R1 iff-quandle condition. The frame-preserving compensation clause remains explicitly conditional on the unresolved KT-03 interface.
- `alg-finite-rack-quandle-coloring-from-table` and `thm-finite-table-coloring-termination-and-correctness`: check finite table shape/range, permutation columns, self-distributivity, optional idempotency, enumerate each ordered-arc assignment once, and report exact witnesses/counts. Complexity corrected to `m^3+2m^2+2m`, including all `m` row-shape checks.
- `thm-fundamental-quandle-and-adjoint-group-from-wirtinger`: local quandle Tietze transformations and mutually inverse maps are drafted under the exact conditional `W(D)` interface. The current batch-56 bodies do not establish it (direction mismatch and incomplete crossing-ball prerequisite); no unconditional knot-group identification is claimed as ready.
- `ex-knot-kt-08-worked-cases`: trefoil system over `F_3` has 9 solutions (3 constant, 6 nonconstant); one-arc unknot has 3. The finite counts are knot invariants under `AC_omega` and distinguish these examples.
- `cex-knot-kt-08-boundary-case`: over `F_5`, both diagrams have five constant colorings; over `F_3`, the counts are 9 and 3, proving the knots are not isotopic. The additional design request to record their group distinction is not asserted and remains escalated.

## Literature and retrieval evidence

The full-text sources, section locators, item support, result dispositions, recovery history, and hashes are recorded in `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-63.coverage.json`:

- V. O. Manturov, *Knot Theory*, Chapter 5 §§5.1–5.2, printed pp. 49–55: `https://varf.ru/rudn/manturov/book.pdf`. Supports the quandle definition, diagram quandle, and planned adjoint-group comparison; the classification discussion is out of scope.
- J. Scott Carter, *A Survey of Quandle Ideas*, §§2.1–2.3, printed pp. 3–9: `https://arxiv.org/pdf/1002.4429`. Supports quandle axioms, diagram/fundamental quandle context, and oriented-normal coloring; later cocycle and knotted-surface topics are out of scope.
- Sam Nelson, *Link invariants from finite racks*, §§2.1–2.4 and §3, printed pp. 2–8: `https://arxiv.org/pdf/0808.0029`. Supports rack axioms, framed move context, diagram presentations, and kink map; the local arbitrary-rack proof is supplied here; cocycle/virtual-link material is out of scope.
- Józef H. Przytycki, *3-coloring and other elementary invariants of knots*, §1, printed pp. 2–3, and §2, pp. 10–11: `https://arxiv.org/pdf/math/0608172`. Supports the crossing equation, trefoil/unknot example, and finite-prime counterexample context. The source's move-invariance proof is abbreviated; the local move proof is supplied here. The source appears twice in coverage with distinct locators and both records are retained.

The relevant complete source sections were inspected; `source-fetch-check --stamp` verified all 5 coverage source records (`5/5` verified, `0` newly stamped on the final check). No retrieval failed, so no `source_resolution` failure/retry record applies. No source is marked dropped. The strict proof contract records exact excerpts of actual supplier sections; absent suppliers were not assigned fabricated excerpts.

## Evidence and next action

- A/B pages are `library/knot-theory/fox-colorings-and-quandle-invariants.md` and `library/knot-theory/fox-colorings-and-quandle-invariants-examples.md`; both are YAML frontmatter only with empty bodies.
- Inventory is in `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-63.pages.json`; 13 item carriers are present.
- Proof contracts are in `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-63.proof-contracts.json`; strict checker result: 9/9 proof-bearing items, 40 numbered step rows, 0 structural errors, 0 warnings. The contracts record AC_omega suppliers/uses and exact finite calculations for the F3 dihedral table, trefoil Fox counts, one-element table checker, and p=5/p=3 counterexample. Structural validation is not proof approval.
- Cross-batch edge evidence is in `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-63.cross-batch-dependencies.json`. The derived shared dependency ledger was not refreshed.
- Scoped dependency calculation over populated manifests for batches 56, 58, and 63 passed: 34 items on six pages, zero label/cycle errors. All 13 batch-63 levels match. The official full-run `item-dependency-levels.mjs check` returned 187 errors elsewhere: 180 empty scaffold inventories and seven level mismatches in `def-oriented-slope-and-knot-dehn-filling`, `lem-knot-surgery-first-homology-mayer-vietoris`, `thm-framed-knot-surgery-trace-boundary`, `def-lens-space-surgery-orientation-convention`, `lem-trefoil-plus-one-surgery-group-presentation`, `ex-knot-kt-13-worked-cases`, and `cex-knot-kt-13-boundary-case`. No batch-63 item is among them.
- Final scoped checks: precheck 9/9 proof-bearing items pass; `proof-layout` 13 items/40 steps/0 defects; `rendercheck` 15 files pass; content-policy 13 items/0 errors/0 warnings; depcheck 13 focused items and selected graph pass; fwdcheck 13 focused items and selected graph pass; extcheck 13 items/0 active external records; citecheck 13 items pass; prosecheck 15 files/0 errors/0 warnings; strict proof-contract 9/9/0 errors/0 warnings. The precheck canonical phase labels were adopted; one row-reduction theorem needed a manual relabel after the auto-adopter could not match its already-updated step reference text.
- Thirteen native `step1-decisions.mjs record` receipts were written without `--owner`: six `ready` (the quandle/Fox branch and worked example) and seven `escalated` (the rack-definition justified-by chain, framed compensation interface, conditional Wirtinger result, and group-distinction addendum). Exact dependencies, reasons, and hashes are in the per-item `research/inverse-problems-knot-theory-all-109-2026-10-19-step1-<item-id>.json` receipts.
- Final `step1-decisions.mjs check` found all thirteen batch-63 records current: six ready hashes and seven explicit escalations, with no missing batch-63 item receipt. The full run remains open (195 items, 33 ready) because other run items and scaffold pages remain unresolved.
- Preserve the escalations and their exact supplier evidence. Reconciliation, independent review, acceptance, page publication, and engine transitions belong to the owner.
