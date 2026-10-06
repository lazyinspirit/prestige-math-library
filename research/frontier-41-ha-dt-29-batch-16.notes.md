# Frontier 41 (HA + DT) — batch 16 Step 1 notes

**Owner:** beta, batch 16. **Pair:** `whitehead-torsion-and-the-s-cobordism-theorem` /
`whitehead-torsion-and-the-s-cobordism-theorem-examples` at orders 563/564, differential
topology (DT-24). This file records scaffold decisions and evidence, not Step 3 mathematical
approval. Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the binding
`research/frontier-41-ha-dt-29-owner-authoring-direction.md`, the batch task
`research/frontier-41-ha-dt-29-beta-16.task.md`, the design `research/plan-differential-topology-track.md`
DT-24 (lines 1250–1294) together with §8 (DT-24 source row), §9.4 headings H116–H120, §10, §12.1,
§12.2 (AT-22/AT-23 rows), §12.4 (exact `requires`), §12.5 (DT-24 row), §12.6, the current
`research/plan-spec.json`, `research/frontier-41-ha-dt-29-alpha-step1-drift.md` (DT-24 verdict
`no-drift`), `.autopilot/frontier-41-ha-dt-29/status.md`, `research/frontier-41-ha-dt-29-step1-blockers.json`
(no batch-16 finding), the existing batch-16 manifest/cross-batch shells, the published AT-22 page
`library/algebraic-topology/simple-homotopy-whitehead-groups-and-torsion.md` and its items, the published
AT-23 page `library/algebraic-topology/local-coefficients-twisted-homology-and-duality.md`, and the
completed scaffolds of the in-run supplier batches 1, 3, 4, 13, 14 and 15.

## Current owner resolution (2026-10-04)

The owner fixed this repair to the approved 30-pair scope and rejected the proposed smooth-triangulation support pair. The full intrinsic comparison between arbitrary finite CW/handle structures needs a substantial triangulation/common-subdivision or Cerf-theory development absent from the local library and deferred by the checked sources. No such proof is manufactured here. The unsupported intrinsic-independence lemma and its dependent nonproduct counterexample are removed from the batch inventory. The single thm-smooth-s-cobordism-theorem item now states the sound presentation-relative criterion: product rel M0 iff some finite relative handle presentation H has tau_H(W,M0)=0. Its reverse implication retains the complete local vanishing-torsion proof; its forward implication uses the empty product presentation. The notation in the definition is indexed by H and claims only fixed-presentation auxiliary-choice independence plus the explicitly proved elementary handle-move invariance. The standard stronger necessity statement for an arbitrary chosen presentation remains deferred.

The false claim that 0 -> Z -> Z^2 -> Z is acyclic but noncontractible is corrected: with d2(z)=(-z,z) and d1(x,y)=x+y, the maps h0(n)=(n,0) and h1(x,y)=y give a contraction. The existing C5 unit example is retained and made explicit: u=1-t^2-t^3 gives a contractible two-term Z[C5]-complex with nonzero Whitehead class, and its augmentation has differential -1 and is contractible over Z. This shows contractibility after augmentation does not detect group-ring torsion, without making an unsupported nonproduct inference.

The earlier proposed new prerequisite pair is superseded by this decision; no pair or page was added. The run-level cross-batch ledger and controller state were not edited.

## Scope, plan and design

The A page requires exactly `the-smooth-h-cobordism-theorem` (batch 15), `simple-homotopy-whitehead-groups-and-torsion`
(published AT-22) and `local-coefficients-twisted-homology-and-duality` (published AT-23); the B page requires only
its A page. This equals the task's `requires` array and the plan's §12.4 row, and the drift review recorded
`no-drift` for this pair. The design was followed for its presentation-local algebraic claims: based handle complex and AT-22/AT-23 conventions, explicit contraction, presentation-indexed torsion, elementary handle-move invariance, product-zero model, algebraic diagonalization, group-labelled Whitney realization, vanishing-Whitehead-group corollary, realization proposition and ownership remarks. The intrinsic arbitrary-structure comparison is deferred by the owner decision recorded above.
### Conflicts and binding sharpenings, resolved in favour of the plan or recorded

1. **The design's “Publication gate” paragraph is stale.** DT-24's design says AT-22 and AT-23
   “remain unpublished”. Both are published in the library (`status: published`, audited 2026-09-27) and
   are inherited predecessors; the owner direction lets §12 supersede historical unspliced-status
   paragraphs. Resolved in favour of the current publication state: the proof-bearing rows consume the
   published AT-22/AT-23 items directly, and nothing is treated as an unpublished supplier that is not.
2. **Design item 5 is limited to proved comparisons.** The well-definedness theorem proves auxiliary-choice independence for a fixed handle presentation, invariance under its explicitly listed elementary handle moves, and agreement with AT-22 torsion of the inclusion for the associated CW structure. The owner defers equality across arbitrary presentations because the structure-comparison proof is outside the approved scope.
3. **Design item 10 is kept as one main presentation-relative theorem.** The vanishing-torsion theorem proves the full sufficiency direction for any presentation with tau_H=0; the main smooth s-cobordism item adds the product/empty-presentation direction. The duplicate criterion item is removed. No claim of arbitrary presentation-independence is made.
4. **Design item 12 is kept at presentation level.** The realization construction proves that each prescribed Whitehead class occurs as the torsion of a specified h-cobordism presentation. The nonproduct inference from a nonzero class in that one presentation is not made; its B counterexample is removed because it requires the deferred intrinsic invariance.
5. **Dimension convention.** The design's `W^{n+1}` with `n ≥ 5` is used throughout, i.e. `dim W ≥ 6`,
   matching Lück's `n ≥ 6` and Ranicki's `m ≥ 5` for the boundary. The two-index range is `2 ≤ q ≤ n−2`,
   matching Lück's `2 ≤ q ≤ n−3` in his dimension and Ranicki's `2 ≤ i ≤ m−2`.
6. **Local prerequisites added.** The A page retains local torsion/inclusion comparison, the group-ring modification and coefficient-sum pairing lemmas, group-labelled homology, non-simply-connected two-index normal form, the contractible-relative-complex criterion, sufficiency, and matrix representation. The unsupported structure-independence row and duplicate criterion row are removed. The
   in-run simply connected versions of the modification and homology lemmas (batch 15) restrict the
   coefficient ring to `Z`; the non-simply-connected s-cobordism proof needs the `Z[π]` group-labelled
   forms, so the general forms are scaffolded on this page rather than silently generalising the supplier.

## Inventory

After the owner resolution the manifest carries 22 A items and 4 B items (26 total). The two-index normal-form and all algebraic/geometric sufficiency work remain. The three removed rows were the intrinsic finite-CW-structure invariance lemma, the duplicate presentation-relative criterion, and the B-page claim that a nonzero torsion presentation proves nonproduct. Dependency labels were recalculated from the current in-run manifests after these removals.

## Deferred stronger claim: intrinsic structure independence

The full classical claim that Whitehead torsion is unchanged across arbitrary finite CW structures or handle decompositions of compact smooth manifolds is true, but its proof is absent from the approved local closure. AT-22 proves independence for fixed CW complexes only. Lück's Definition (2.14) invokes Theorem 2.1(5) (Chapman); Ranicki Example 8.13(i) explicitly warns that the smooth proof uses triangulability and combinatorial invariance of Whitehead torsion; Davis–Kirk §11.4 states Chapman and the smooth triangulation/subdivision route but does not develop its proof. A local completion would need, at minimum, a smooth-triangulation/common-subdivision theorem or a Cerf-theoretic handle-decomposition comparison, plus the simple-torsion proof for subdivisions and the bridge from handle CW models to triangulations. These are a substantial subdevelopment, not a short local lemma. The owner therefore keeps the approved 30-pair scope and defers the intrinsic statement rather than introducing an unproved external dependency. The source rows for Chapman, smooth triangulation independence, and the nonproduct consequence are marked deferred in the coverage ledger.

## Source evidence

Three independent treatments back the pair, all read as complete author texts and all fetch-stamped in
`research/frontier-41-ha-dt-29-batch-16.coverage.json`:
Lück, *A Basic Introduction to Surgery Theory* (Ch. 1 §§1.1–1.5, Ch. 2 §§2.1–2.3; 197 PDF pages read over
printed pp. 1–37); Ranicki, *Algebraic and Geometric Surgery* (Ch. 8 §§8.1–8.2, printed pp. 170–185;
figure pages re-extracted with mutool); Davis–Kirk, *Lecture Notes in Algebraic Topology* (§11.4,
printed pp. 343–346), used only to locate the deferred stronger intrinsic input. The canonical harvest in the coverage
file disposes every heading read (included/inline/out-of-scope); the only out-of-scope rows are
Reidemeister torsion/lens spaces (Lück §2.4, Davis–Kirk §11.5), with specific reasons. No source was
dropped and no `source_resolution` is required.

## Checks from the initial Beta scaffold (historical)

The following commands passed on the original 29-item scaffold before the owner resolution; their old inventory and readiness counts do not describe the current manifest. Current local checks are recorded below.

- `node tools/coverage-checklist.mjs research/frontier-41-ha-dt-29-batch-16.coverage.json --require-destination`
  → 2 pages, 91 harvested results, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/frontier-41-ha-dt-29-batch-16.coverage.json --stamp`
  → 5/5 sources fetch-verified (5 newly stamped); Lück 197-page PDF, Ranicki 374-page PDF, Davis–Kirk
  382-page PDF.
- `node tools/manifest-deps.mjs research/frontier-41-ha-dt-29-batch-16.pages.json` → original 29 items, 0 missing.
- `node tools/content-policy.mjs --manifest-only research/frontier-41-ha-dt-29-batch-*.pages.json` →
  678 scoped items, 0 errors, 0 warnings (whole-run invocation, as the engine gate runs it).
- `node tools/item-dependency-levels.mjs check --run frontier-41-ha-dt-29` → batch-16 labels all match the
  computed levels and no batch-16 cycle; the run still reports 8 pre-existing errors, all “empty scaffold
  inventory” on other batches (`the-hirzebruch-signature-theorem` and companion, `characteristic-class-
  obstructions-to-immersions-and-embeddings` and companion, `codimension-one-foliations-and-secondary-classes`
  and companion, `exotic-smooth-structures-and-milnor-spheres` and companion; batches 12, 20, 23, 24).
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-41-ha-dt-29 --require-reviewed` →
  refreshed and deduplicated, exit 0. The original batch input carried 1 page row and 71 item rows for the
  declared cross-batch edges of this pair (suppliers in batches 1, 3, 4, 14, 15), all `open` because the
  suppliers are Step-1 scaffolds.
- `node tools/validate-plan.mjs research/plan-spec.json` → OK (unchanged; no plan edits).
- `node tools/step1-decisions.mjs check --run frontier-41-ha-dt-29` → exit 1 with 29 batch-16 records in place: 26 `ready` (hashes current)
  and exactly the three intended owner-held escalations of this batch
  (`lem-whitehead-torsion-is-independent-of-the-finite-cw-structure`, `thm-smooth-s-cobordism-theorem`,
  `cex-an-h-cobordism-with-nonzero-torsion-is-not-a-product`). Every other item-level finding belongs to other, concurrently
  scaffolded batches (22, 23, 24, 30), and the page-level findings are the empty inventories of batches 12 and 20.
- Timeline note: batches 22, 23, 24 and 30 were being scaffolded concurrently while this batch was written; the run-level counts in
  the gates above therefore grew during the session (e.g. content-policy 678 → 718 scoped items, step-1 678 → 718 items). The batch-16
  gates were re-run last against the larger run and stayed green. The cross-batch ledger gate currently reports
  `Cross-batch review incomplete` because batch 23 declares edges with no review rows yet; all original 72 batch-16 consumer edges carried review
  rows, so the remaining ledger work is not ours.
- Item-frontmatter checks (`precheck`, `rendercheck`, `proof-layout`, `depcheck`) do not apply yet: this
  batch wrote manifests, coverage, notes, ledger input and readiness records only, and Step 1 does not
  author item files. They remain Step-3 obligations.

## Current local checks after owner resolution


The owner resolution removed the batch16 escalations while keeping the intrinsic arbitrary-presentation invariance and corresponding nonproduct inference explicitly deferred. The presentation-indexed theorem, corrected contractions, local dependencies, source dispositions, batch-local review rows and readiness receipts are refreshed as listed in the final checkpoint. No proof-layout command applies yet because Step 1 has no item files. The run-level cross-batch ledger and autopilot gates are left to the orchestrator after concurrent scaffold writers drain.
