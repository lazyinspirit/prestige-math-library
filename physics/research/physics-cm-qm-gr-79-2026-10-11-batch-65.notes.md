# Batch 65 notes — `gr-framework-and-geometry` / `gr-framework-and-geometry-examples`

Run `physics-cm-qm-gr-79-2026-10-11`, role beta, label batch-65, covers 65.
Step 1 complete initial authoring only; no readiness record is independent
mathematical approval (Step 3 review follows).

## Scope built

- A page `gr-framework-and-geometry` (order 233, category `general-relativity`,
  `library: physics`), 15 locally authored items: 7 definitions, 5 lemmas, 2
  postulates and 1 status remark. B page `gr-framework-and-geometry-examples`
  (order 234), 7 leaf items: 5 examples and 2 counterexamples, each with a
  numbered verification/refutation. New category overview
  `library/general-relativity/_category.md` (`status: draft`,
  `library: physics`), matching the sibling collection convention.
- Page `requires`, order, kind, category, library, companion and titles are
  unchanged from the run scaffold; the only manifest edits are the two `items`
  arrays, the item metadata, and `dependency_level` labels. The B page declares
  `requires: [gr-framework-and-geometry]` and no out-of-pair item depends on the
  B leaf items (depcheck `b-leaf-content`: no finding for any `gr-` item).
- Dependency levels use in-run dependencies only, recomputed after the last
  dependency edit: A-page levels are
  `def-gr-smooth-covariant-two-tensor-field` 0;
  `lem-gr-covariant-two-tensor-transformation-law` and
  `def-gr-smooth-lorentzian-objects` 1;
  `def-gr-inverse-metric-and-musical-isomorphisms`,
  `def-gr-metric-selected-connection` and
  `lem-gr-future-causal-classification-by-a-timelike-field` 2;
  `lem-gr-inverse-metric-is-smooth`, `def-gr-si-unit-and-coordinate-conventions`,
  `lem-gr-connection-conditions-in-chart-components` and
  `lem-gr-timelike-fields-define-equal-or-opposite-future-cones` 3;
  `def-gr-stress-energy-tensor-field` and
  `post-gr-spacetime-and-classical-domain` 4;
  `def-gr-energy-conditions` 5; `post-gr-field-and-matter-assumptions` 6;
  `rem-gr-primitive-and-derived-status` 7. B-page levels: 2, 3, 4, 4, 4, 4 and
  5 (counterexample with the longest chain). All labels are stored in both the
  manifest and item frontmatter.
- `node tools/physics-support/item-dependency-levels.mjs check --run
  physics-cm-qm-gr-79-2026-10-11` reports no finding for any of the 22 items.
  Its 148 error lines are all `empty scaffold inventory` for GR batches whose
  pages are not authored yet in this partial run (batches 63, 64, 66-79 and the
  later GR batches); none names a batch-65 item.
- No page split was needed: 15 + 7 items are far below the 100-item cap. The
  design budget for GR01 (26 items) is respected.

## Design vs plan-spec, and how the design's GR01 sections were delivered

- `research/plan-spec.json`, `research/plan-general-relativity-track.md` (L14
  section "Framework And Geometry"), and
  `research/first-principles-2026-10-03/relativity/scaffold/general-relativity.md`
  agree on page id, title, orders 233/234, category, library, companion,
  and the GR01 inventory. One plan conflict was found and is recorded here:
  the GR-track design text and the run scaffold's manifest said "declared
  earlier prerequisites: none" (`requires: []`), while
  `research/plan-spec.json` declares a 16-page prerequisite list for
  `gr-framework-and-geometry` (countability-and-uncountability,
  dual-spaces-bilinear-forms-and-inertia,
  linear-independence-bases-and-dimension, rn-as-a-normed-space,
  the-inverse-function-theorem-completed, the-total-derivative,
  vector-fields-flows-and-lie-derivatives, connectedness,
  inner-product-spaces-and-orthogonality,
  matrices-and-the-matrix-of-a-linear-map, smooth-manifolds-and-smooth-maps,
  tangent-cotangent-and-the-differential,
  the-determinant-of-a-linear-operator, topological-spaces-and-continuity,
  connections-levi-civita-and-parallel-transport, sr-spacetime-primitives).
  The dispatch says the current plan controls the run, and the engine battery's
  `validate-plan` gate requires exactly these edges (it flagged precisely
  those 16 pages as undeclared prerequisites before the fix); the manifest
  `requires` list was therefore set to the plan list, and the B page declares
  `gr-framework-and-geometry` plus the one B-specific supplier page
  `geodesics-the-exponential-map-completeness-and-hop-rinow` (home of the
  choice-free inverse-function lemma used by the spherical-coordinates
  example). No plan-spec file was edited.
- Design `def manifold/Lorentz metric/future orientation/units` is delivered as
  `def-gr-smooth-covariant-two-tensor-field` +
  `lem-gr-covariant-two-tensor-transformation-law` (smooth covariant 2-tensor
  fields, chart independence), `def-gr-smooth-lorentzian-objects` (smooth
  Lorentzian four-manifold, pointwise causal vocabulary, time orientation),
  `def-gr-inverse-metric-and-musical-isomorphisms` +
  `lem-gr-inverse-metric-is-smooth` (musical isomorphisms, inverse metric and
  its smoothness/transformation law),
  `lem-gr-future-causal-classification-by-a-timelike-field` and
  `lem-gr-timelike-fields-define-equal-or-opposite-future-cones` (future/past
  classification and agreement/opposition of orientations — the local G0/G7
  arguments of `research/gr-repair-2026-10-11/report.md` and
  `gr-local-proofs.md`), and `def-gr-si-unit-and-coordinate-conventions`
  (dimensions of coordinates, components, c, G_N, Lambda, with no measured
  value).
- Design `def metric-selected connection` is delivered as
  `def-gr-metric-selected-connection` (torsion freedom, g-compatibility, the
  class LC(M,g)), with `lem-gr-connection-conditions-in-chart-components`
  proving the chart-component equivalences (the local G1 argument).
  **Existence and uniqueness of the Levi-Civita connection is deliberately not
  asserted here**: the class is defined and no more, keeping the item
  independent of the later connections page (`gr-connections-and-free-fall`,
  GR03), which owns the Levi-Civita theorem.
- Design `post spacetime and classical domain` and `post field/matter
  assumptions` are delivered as the two numbered postulates, with adopted
  status, classical-continuum/smooth-branch/four-dimensional restrictions and
  the field law left to later pages.
- Design `post field/matter assumptions` also carries the stress-energy slot;
  it is delivered as the physical definition
  `def-gr-stress-energy-tensor-field` plus the optional
  `def-gr-energy-conditions` (WEC/NEC/DEC/SEC) and the postulate that adopts
  them as optional model assumptions. No energy condition is presented as a
  consequence of any other clause.
- The B page exercises every construction on explicit components: the flat
  model and its future cone, spherical-coordinate components, the flat
  coordinate connection as a metric-selected connection, a torsion-free
  non-metric-compatible connection, the two time-coordinate unit readings, the
  signature counterexample diag(1,1,-1,-1) and the reversal N -> -N.

## Authoring decisions worth surfacing to reviewers

- **Statement provenance.** All proof-bearing statements are
  `provenance.statement: ai-altered` with `provenance.proof: ai-generated`;
  the physical definitions carry `statement: ai-altered` and the postulates
  `statement: ai-altered`, `proof: not-applicable`. This satisfies
  `content-policy` (no `ai-generated` statement may be a dependency target) and
  records that the items restate standard material in the local vocabulary.
- **Algorithms.** No `kind: algorithm` item was needed on this pair.
- **AC_omega inheritance.** `def-smooth-vector-field-as-a-tangent-bundle-section`
  assumes the axiom of countable choice for the canonical smooth structure on
  TM. `def-gr-smooth-lorentzian-objects` and `def-gr-metric-selected-connection`
  state that use and add `def-countable-choice` to `deps`. The five direct
  interface consumers (`lem-gr-connection-conditions-in-chart-components`,
  `lem-gr-timelike-fields-define-equal-or-opposite-future-cones`,
  `ex-gr-minkowski-chart-as-a-lorentzian-manifold`,
  `ex-gr-flat-connection-is-metric-selected`,
  `ex-gr-reversing-the-timelike-field-reverses-future`) now carry a
  "Choice convention" remark and a `def-countable-choice` dependency recording
  the inherited qualification and that no further choice principle is used.
  All other batch items are choice-free in that sense.
- **Units.** `def-gr-si-unit-and-coordinate-conventions` keeps c and G_N
  restored in every physical expression and treats natural units as shorthand
  only; it asserts no numerical value of any constant. The unit example
  computes the two coordinate readings without any measured input.
- **Empirical status.** The two postulates explicitly separate adopted model
  assumptions from deductions and place empirical comparison downstream; no
  measurement, statistical claim or observational precision is asserted
  anywhere on this pair.

## Supplier policy and external inputs

- **Draft SR suppliers (owner exception of 2026-10-11).** Six draft items of
  the `physics-em-sr-40-2026-10-08` run are used as mathematical premises:
  `def-lorentz-form-and-inertia`, `def-causal-classification-of-lorentz-vectors`,
  `def-time-orientation-and-future-causal-sets`,
  `def-lorentz-orthogonality-and-orthogonal-complement`,
  `lem-lorentz-form-has-orthonormal-basis`,
  `lem-timelike-cone-has-two-convex-components`. Their statements, facts and
  complete arguments were inspected: the two lemmas carry complete proofs and
  strict proof contracts in
  `research/physics-em-sr-40-2026-10-08-batch-1.proof-contracts.json`; all of
  their transitive prerequisites resolve to published canonical root items
  (transitive closure: 471 published, exactly these 6 draft). Used content is
  checked against the suppliers' exact statements: the orthonormal-basis lemma
  for the existence of a (-,+,+,+) basis, and the two-component timelike-cone
  lemma for T_+, T_-, convexity, the closure descriptions,
  cl(T_+) cap cl(T_-) = {0} and basis independence. No draft item is treated
  as a planned supplier, and no claim of a draft item is assumed beyond its
  stated content.
- **Published root suppliers.** All other mathematical dependencies are
  currently published canonical root items (smooth manifolds, tangent spaces,
  the chain rule, matrix inversion and the adjugate, connectedness, the
  tangent-bundle and induced-chart interfaces, affine connections, torsion and
  Christoffel symbols, the component criterion for vector-field smoothness).
  No mathematical item depends on a physical item; no physics item supplies a
  mathematical justification (`dependency_roles` mark physical items as
  `formulation-prerequisite`/`physical-assumption` only where the consumer is
  physical).
- **Cross-batch dependencies.** The batch input file
  `research/physics-cm-qm-gr-79-2026-10-11-batch-65.cross-batch-dependencies.json`
  is the empty array: batch 65 has no required suppliers
  (`research/physics-cm-qm-gr-79-2026-10-11-batch-dependency-levels.json`,
  batch 65 level 0, `requires: []`). Batch 66
  (`gr-tensors-and-observers`) separately declares the page-level requirement
  `gr-framework-and-geometry`; that row belongs to the consumer batch file and
  is not minted here. Per `briefs/tasks/frontier-dependency-ledger.md` the
  unified ledger was refreshed after writing this input and the dependency
  edits (`frontier-dependency-ledger.mjs refresh --run ...` reports
  `refreshed and deduplicated`).

## Sources (A page)

Four treatments were read over the exact load-bearing ranges and are recorded,
with every harvested heading disposed, in
`research/physics-cm-qm-gr-79-2026-10-11-batch-65.coverage.json`. All four
carry `source-fetch-check --stamp` full-text stamps (4/4 fetch-verified, 0
documented drops; freshly re-run in check mode: 4/4 verified, 0 newly stamped):

1. S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1
   (December 1997), 238 pages; lecture notes/primary.
2. H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022
   revision), 125 pages; lecture notes/primary.
3. D. Tong, General Relativity (Cambridge Part III Mathematical Tripos,
   Michaelmas 2019), 289 pages; lecture notes/primary.
4. J. M. Lee, Introduction to Smooth Manifolds, 2nd ed., GTM 218, 726 pages;
   book/primary.

35 harvested results: 15 `included` with an item id, 8 `inline`, 9 `deferred`
to their owning pages (`gr-connections-and-free-fall` for Levi-Civita
existence/uniqueness and geodesic background, later GR pages for curvature,
Einstein and observer material, mathematical root pages for tangential
manifold facts), 2 `already-published` root items and 1 `out-of-scope`
(Newtonian-limit motivation). `coverage-checklist --require-destination`
returns `1 page, 35 harvested results, 0 errors, 0 warnings`, so every deferred
heading names a valid destination. No source needed a drop or an owner
escalation; `source_resolution` is not applicable to this batch.

## Checks actually run (all on the final carriers)

- `precheck.mts` on all 22 item files: `14 checked, 0 failing` (the 12
  proof-bearing items plus the 2 postulates pass the proof/nonproof structural
  checks; definitions and the remark carry no proof structure). Items repaired
  to the canonical phase/step numbering before this pass.
- `proof-layout.mjs` on all 22 item paths: `22 items, 57 steps, 0 defects`.
- `rendercheck.mjs` on the 22 items, both page files and `_category.md`:
  `OK — 25 file(s)` (KaTeX, YAML, wikilink/math nesting, single-line display
  blocks). Four multiline display blocks were found and joined before this
  pass.
- `manifest-deps.mjs` on the batch manifest: `22 item(s), 0 normalized,
  0 error(s)`.
- `content-policy.mjs` (post-authoring mode) on the batch manifest:
  `22 scoped item(s), 0 error(s), 0 warning(s)`.
- `validatePhysicsContent` invoked directly on the 22 scoped items (the way
  batch 1 of this run did while other batches are empty): `0 errors` in the
  whole repository. One `nonproof-derivation` error found this way (the matter
  postulate listed the spacetime postulate as `physical-assumption`) was
  repaired to `formulation-prerequisite` before the final pass.
- `physics-check.mjs --run physics-cm-qm-gr-79-2026-10-11 --plan
  research/plan-spec.json`: `102 items checked, 29 errors`, all
  `kind-prefix` on pre-existing `nrqm-composites-*` items of the quantum
  collection; **0 attributable to any batch-65 item**.
- `depcheck.mjs` (whole repository): hard-error classes are all pre-existing
  corpus debt (`published-unaudited`, `kind-prefix`, `b-leaf-content`,
  `published-local-repair`); **0 findings naming any batch-65 item or page**.
  The two `cited-not-in-deps` warnings that were attributable to batch 65
  (a same-page convention link in the 2-tensor definition and a missing
  declared dependency in the connection-components lemma) were repaired
  (the pointer moved to Remarks; the Lorentzian-manifold definition added to
  `deps`), reducing the corpus warning count from 599 to 597.
- `fwdcheck.mjs --items-file` (the 22 batch items): no hard errors; all
  selected item/page checks and their prerequisite dependency/forward cycle
  checks passed.
- `extcheck.mjs`: `OK — every recorded-not-proved statement is a cited remark
  with no proof, and every consequence is marked`.
- `citecheck.mjs` on the 22 items: `OK — every recognised elementary move
  cites a home that states it`.
- `citation-faithfulness-screen.mjs`: 6 candidates out of 22 items, each read
  by hand. Three are operator-notation artefacts (sum notation for an expanded
  coordinate sum, tfrac for one half, R vs double-struck R), two are now
  backed by added citations (identity total derivative D(id)=I from
  `def-total-derivative-in-euclidean-space`; the nowhere-zero determinant
  reading from the covariant-2-tensor definition), and the sixth is the same
  notation class. No unexplained widening remains.
- `proof-contract.mjs --strict` on
  `research/physics-cm-qm-gr-79-2026-10-11-batch-65.proof-contracts.json`:
  `15/15 item(s) checked, 0 error(s), 0 warning(s)`. The scope holds the 12
  proof-bearing items (citations, per-step derivations, all eight boundary
  dispositions) plus the 2 postulates (physics review with
  formulation/scope/sources/non_derivation) and the remark (boundary
  worksheet, no proof obligations). All 12 proof-bearing items of the batch
  are covered.
- `proof-contract-coverage.mjs --run ... --contracts ...` cannot complete for
  the whole run while unrelated frontier pages are unauthored
  (`ERROR proof-contract-coverage-input: Empty or invalid frontier page
  inventory cm-math-numerical`), the same limitation batch 1 recorded; local
  coverage is verified by the strict contract pass and by scanning the 22
  item bodies for supplied-argument sections.
- `articlecheck.mts` is inapplicable to library category/page files (it fails
  identically on the already published `_category.md` files of other
  collections with missing `slug`/`description`/`purpose`, which are article
  frontmatter fields).
- The engine battery commands recorded in
  `.physics-autopilot/physics-cm-qm-gr-79-2026-10-11/owner-gate-request.json`
  were run directly:
  `manifest-integrity --run ...` reports `158 page(s) owed, 158 in the
  manifests; no scope drift`; `drift-review-check --run ...` reports
  `79 page(s) reviewed, 1 spec edit(s) applied, no blocked edges`;
  `frontier-item-gate --run ... --tool validate-plan --` reports **no error
  for either batch-65 page** after the requires fix (its remaining 78
  undeclared-prerequisite errors are all on the not-yet-reconciled
  `cm-math-*` pages of batches 1, 2 and 11, whose manifests carry pruned
  `requires` lists, plus 11 `redundant-prereq` warnings on the batch-65 A page
  described above); `batch-dependency-levels check --run ...` reports `Stale
  batch dependency levels ... recompute before authoring`, a run-level
  recompute owed by the orchestrator/owner, not resolvable from this batch
  (batch 65 itself is level 0 with no required suppliers).
- `step1-decisions.mjs check --run ...`: 103 items in run scope, 103 ready;
  no work item in the batch-65 pair (all 22 records current after the final
  re-record). `closed: false` only because 148 work entries are empty scaffold
  inventories of unauthored batches.

## Repairs made during Step 1 (carrier changes)

1. `lem-gr-connection-conditions-in-chart-components` had no `## Statement`
   section (it jumped from frontmatter to Facts), so its manifest statement
   was null and the two B items that cite it could not quote a citable
   section. A complete Statement with the two equivalences (claim 1: torsion
   freedom iff symmetric Christoffel symbols in every chart; claim 2:
   g-compatibility iff the displayed partial-derivative identity holds in
   every chart) was authored and the manifest regenerated.
2. Four multiline display-math blocks (this lemma's new display, the
   inverse-metric transformation law, the derived-component display in the
   inverse-metric definition, and the spherical-coordinates display) were
   joined to single source lines for the renderer.
3. Inherited AC_omega qualifications and `def-countable-choice` dependencies
   were added to the five direct consumers of the smooth-vector-field
   interface (see above).
4. `lem-gr-inverse-metric-is-smooth` fact [L4] now cites
   `def-total-derivative-in-euclidean-space` for D(id)=I instead of
   attributing it to the chain-rule theorem; the fact links of
   `lem-gr-timelike-fields-define-equal-or-opposite-future-cones`,
   `ex-gr-minkowski-chart-as-a-lorentzian-manifold` and
   `ex-gr-flat-connection-is-metric-selected` now cite
   `prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components`
   for the component criterion for smooth fields.
5. The convention pointer in `def-gr-smooth-covariant-two-tensor-field` moved
   from its Definition to a Remarks paragraph (orientation-only forward link;
   removes a false "undeclared dependency" signal without creating a spurious
   `deps` cycle).
6. `post-gr-field-and-matter-assumptions` dependency role for the spacetime
   postulate corrected to `formulation-prerequisite`.
7. The batch manifest's page prerequisites were aligned with the current plan
   (see the plan-conflict paragraph above): the A page now carries the
   plan-spec's 16-page `requires` list, and the B page carries its A page plus
   `geodesics-the-exponential-map-completeness-and-hop-rinow`. Before this fix
   the engine battery's `frontier-item-gate --tool validate-plan` reported
   undeclared-prerequisite errors for both batch pages; afterwards it reports
   no error for either batch page. The A page draws 11 `redundant-prereq`
   warnings, all caused by the plan's own list containing pages already
   reachable through `sr-spacetime-primitives` (transitive-reduction hygiene;
   warnings do not fail the gate, and the plan list was kept verbatim for
   traceability). Readiness records were re-recorded after this final manifest
   change so their hashes are current.

## Unresolved findings and escalations

- No escalation was raised: every assigned item is authored and locally
  closed, no prerequisite is missing, and no source needed an owner decision.
- Corpus-level findings observed but not owned by this batch: 2729
  `published-unaudited`, 29 `kind-prefix` (all `nrqm-composites-*`),
  9 `b-leaf-content` (all `nrqm-*`), 114 `published-local-repair` and 145
  `multi-home` depcheck entries; the 29 `physics-check` `kind-prefix` errors;
  and the empty scaffolds of unauthored GR batches in
  `item-dependency-levels` and `proof-contract-coverage`. None of these names
  a batch-65 item, page or file, and none blocks this batch.
- No published defect was identified in a batch-65 prerequisite that needs the
  canonical ledger. The six draft SR suppliers are owner-exception premises,
  inspected and recorded above; if they change, this batch's citations and
  proof contracts must be re-checked by the ordinary consumer-repair process.
- The readiness records (one per item,
  `research/physics-cm-qm-gr-79-2026-10-11-step1-<id>.json`) were written after
  the final carrier edits above; the strict contract pass, the manifest
  regeneration and the precheck/proof-layout passes reported here all ran on
  those final carriers.
