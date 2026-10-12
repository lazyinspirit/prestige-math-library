# Batch 72 notes — `gr-spherical-vacuum-model` / `gr-spherical-vacuum-model-examples`

Run `physics-cm-qm-gr-79-2026-10-11`, role beta, label batch-72, covers 72.
Step 1 complete initial authoring only; neither a worker exit nor a readiness
record is independent mathematical approval (Step 2/3 review follows). The A
page is mixed-domain: eighteen items are mathematics (the exterior datum, its
geometry, the two extensions and the warped-product/Birkhoff closure) and
three are physics — the adopted vacuum model theorem and the two restricted
prediction theorems. The B page holds six mathematical leaf items: five
examples and one counterexample. No item reports a measurement; no experiment,
no empirical premise and no empirical uncertainty occurs anywhere in the
batch, and both physics pages state explicitly that they assert nothing about
nature.

## Scope built

- A page `gr-spherical-vacuum-model` (order 247, category
  `general-relativity`, `library: physics`), 21 locally authored items:
  2 definitions, 13 lemmas, 1 theorem, 3 physics-theorems and 2 remarks
  (both physical). The design's four promised deliverables are covered:
  "def Schwarzschild exterior domain r > 2GM/c^2" =
  `def-gr-schwarzschild-exterior-model`; "M18 vacuum calculation" =
  `lem-gr-schwarzschild-christoffel-symbols`,
  `lem-gr-schwarzschild-ricci-and-einstein-tensors`,
  `lem-gr-schwarzschild-curvature-and-kretschmann-scalar`; "pthm restricted
  geodesic/redshift predictions" = `pthm-gr-schwarzschild-vacuum-model`,
  `pthm-gr-schwarzschild-stationary-redshift`,
  `pthm-gr-schwarzschild-circular-orbit-predictions` on top of
  `lem-gr-schwarzschild-timelike-geodesic-reduction` and
  `lem-gr-schwarzschild-circular-orbits-and-photon-sphere`; "rem chart
  extension/horizon and singularity distinction" =
  `lem-gr-schwarzschild-extension-chart`,
  `def-gr-kruskal-model-data`, `lem-gr-kruskal-model-properties`,
  `lem-gr-kruskal-causal-escape-and-trapping`,
  `rem-gr-schwarzschild-horizon-and-singularity`,
  `rem-gr-schwarzschild-scope-and-limits`. The design's "Q1/Q5 exact
  spherical model and local Birkhoff" closure is
  `lem-gr-warped-spherical-christoffel-and-ricci`,
  `lem-gr-warped-base-vacuum-reduction`,
  `thm-gr-local-birkhoff-warped-product`. The design budget (46) and the
  100-item cap are respected (21 + 6).
- B page `gr-spherical-vacuum-model-examples` (order 248), 6 leaf items with
  numbered verifications/refutations: explicit isotropic-to-areal conversion
  and weak-field coefficient mismatch, explicit clock ratios at 2s and 4s,
  circular-orbit data at the ISCO and photon-sphere radii, horizon data of the
  advanced-chart extension, an explicit Kruskal cone/radial check at
  (U,V) = (0,1) with s = 1, and the counterexample that the exterior charts
  do not cover the extension.
- Library carriers `library/general-relativity/gr-spherical-vacuum-model.md`
  and `…-examples.md`; `_category.md` is unchanged. Manifest
  `research/physics-cm-qm-gr-79-2026-10-11-batch-72.pages.json`: page orders,
  kinds, categories and `library` fields are unchanged from the run scaffold;
  the manifest edits are the item inventories, item metadata and the
  `requires` reconciliation recorded below. Statement, deps,
  dependency_roles, justified_by, provenance, source and level fields were
  regenerated from the final carriers with a script (`/tmp/gen72.mjs`,
  `/tmp/levels72.mjs`).

## Dependency levels (computed mechanically)

`node tools/physics-support/item-dependency-levels.mjs check --run` computes
these in-run levels (manifest and item frontmatter agree):
`def-gr-schwarzschild-exterior-model` 2,
`lem-gr-schwarzschild-metric-properties` 3,
`lem-gr-schwarzschild-christoffel-symbols` 6,
`lem-gr-schwarzschild-ricci-and-einstein-tensors` 11,
`lem-gr-schwarzschild-curvature-and-kretschmann-scalar` 12,
`lem-gr-schwarzschild-extension-chart` 13,
`lem-gr-schwarzschild-isotropic-coordinate-form` 7,
`lem-gr-schwarzschild-static-congruence-and-clock-rates` 8,
`lem-gr-schwarzschild-timelike-geodesic-reduction` 9,
`lem-gr-schwarzschild-circular-orbits-and-photon-sphere` 10,
`def-gr-kruskal-model-data` 3,
`lem-gr-kruskal-model-properties` 14,
`lem-gr-kruskal-causal-escape-and-trapping` 15,
`lem-gr-warped-spherical-christoffel-and-ricci` 10,
`lem-gr-warped-base-vacuum-reduction` 11,
`thm-gr-local-birkhoff-warped-product` 12,
`pthm-gr-schwarzschild-vacuum-model` 13,
`pthm-gr-schwarzschild-stationary-redshift` 14,
`pthm-gr-schwarzschild-circular-orbit-predictions` 14,
`rem-gr-schwarzschild-horizon-and-singularity` 16,
`rem-gr-schwarzschild-scope-and-limits` 17,
`ex-gr-schwarzschild-isotropic-weak-field-comparison` 8,
`ex-gr-schwarzschild-static-clock-ratio-explicit` 9,
`ex-gr-schwarzschild-circular-orbit-thresholds-explicit` 11,
`ex-gr-schwarzschild-extension-horizon-data` 14,
`ex-gr-kruskal-cone-and-radial-values` 16,
`cex-gr-exterior-charts-do-not-cover-the-extension` 14.
`check --run` reports no error naming a batch-72 item; the run-wide errors are
other batches' empty scaffold inventories and one other-batch level mismatch.
Items were authored in ascending level order; every supplier of this batch
was read at statement level and, where cited in a proof step, at step level
(all GR suppliers recorded ready in their own batches).

## Design vs plan-spec conflicts (recorded as required)

- The design section `research/plan-general-relativity-track.md` L166
  ("Spherical Vacuum Model", original reservation GR08) declares the
  prerequisites GR03–GR07, while `research/plan-spec.json` (the current plan
  that controls this run) declares only `gr-flat-and-newtonian-bridges` and
  `gr-local-and-global-energy` for page 247. The scaffold `requires` is kept
  as the plan-spec lists it; the design's GR03–GR07 pages are consumed through
  their items but were not added to `requires` because they are already in
  the transitive closure of the two declared prerequisites. No plan-spec,
  design or shared file was edited.
- The authored closure additionally consumes two published mathematical pages
  NOT in the closure of the declared prerequisites —
  `hausdorff-via-the-diagonal` (supplies
  `cor-two-continuous-maps-into-a-hausdorff-space-agreeing-on-a-dense-set-are-equal`,
  cited by the extension and Kruskal lemmas) and
  `riemannian-metrics-length-distance-and-volume` (supplies
  `ex-the-round-metric-on-the-sphere-as-an-induced-metric`, cited throughout
  the spherical and warped constructions) — and, on the B page,
  `the-exponential-function` (supplies
  `cor-exponential-is-a-bijection-onto-positive-reals`, cited by the
  chart-coverage counterexample). Following the batch-65/67/68/69/71
  precedent and `validate-plan`'s `undeclared-prereq` rule, the A/B page
  manifests and library requires now list these three pages; the A page
  therefore requires
  `["gr-flat-and-newtonian-bridges","gr-local-and-global-energy","hausdorff-via-the-diagonal","riemannian-metrics-length-distance-and-volume"]`
  and the B page
  `["gr-spherical-vacuum-model","the-exponential-function"]`.
- The plan-spec page entries carry empty item inventories (the engine fills
  them at the join), so `content-policy --manifest-only` would report
  `batch-item-already-exists` for every freshly authored id; the post-
  authoring gate is the full `content-policy` mode, which reports 0 errors /
  0 warnings.
- Source-fidelity conflict (recorded, not inherited): Carroll's Ch. 7 (7.30)
  prints a numerical coefficient for the curvature invariant differing from
  the directly computed `48G_N^2m_*^2/(c^4r^6)` by a factor 4. The item uses
  the directly computed value (Tong's value agrees with the computation) and
  records the discrepancy in its remark and source list; the source result is
  still disposed `inline`, with the discrepancy named in the coverage entry.
- Continuation context: the first native dispatch exited 0 before writing any
  items; its evidence is preserved at
  `research/physics-cm-qm-gr-79-2026-10-11-dispatch/beta-batch-72.attempt-1.log`
  and the continuation task at
  `research/physics-cm-qm-gr-79-2026-10-11-batch-72-authoring-continuation.task.md`.
  This dispatch completed the actual authoring (items, pages, inventories,
  contracts, coverage, cross-batch evidence, notes and readiness records).

## Sources

- Three complete lecture-note treatments, all fetch-verified with
  `source-fetch-check --coverage … --stamp` ("7/7 source(s) fetch-verified
  (7 newly stamped)"): Tong, *General Relativity*, Michaelmas 2019
  (archived full PDF); Carroll, *Lecture Notes on General Relativity*,
  arXiv:gr-qc/9712019; Townsend, *Black Holes*, arXiv:gr-qc/9707012. Tong and
  Carroll are independent full treatments and supply the two-independent-
  treatment requirement; Townsend supplies the isotropic form and the Kruskal
  construction.
- `research/physics-cm-qm-gr-79-2026-10-11-batch-72.coverage.json` harvests
  32 named results with dispositions (21 `included`, 8 `inline`, 2 `deferred`,
  1 `out-of-scope`). The two `deferred` results are Townsend's charged and
  rotating solutions and his black-hole thermodynamics, deferred to
  `owner-decision` because no plan-spec page on this track hosts them; the
  `out-of-scope` result is Tong's collapse/observation material, excluded
  because collapse theorems and empirical comparisons belong to other pages.
  `coverage-checklist.mjs --require-destination`: 2 pages, 32 harvested
  results, 0 errors, 0 warnings.
- Locator discipline: printed/PDF page numbers for the Tong, Carroll and
  Townsend locators were re-used from the earlier reading of the cached PDFs
  in `/tmp/b72src/`; the factor-4 discrepancy in Carroll (7.30) is the only
  recorded divergence between a source's printed coefficient and the local
  computation.

## Proof contracts

- `research/physics-cm-qm-gr-79-2026-10-11-batch-72.proof-contracts.json`
  covers 25 entries: the 23 proof-bearing items (17 on the A page and the 6
  B-page examples/counterexample) and the two remarks (empty
  citations/derivations, `routine_steps: []`, eight boundary dispositions).
  The two definitions carry no supplied argument and are outside the contract
  scope, matching batches 65–71.
- Citations and derivations were regenerated from the final on-disk Facts and
  numbered steps with `regen-contract-entries.mjs` after every repair;
  boundary rows are item-specific (200 rows, 136 `not_applicable`, each with
  a reason or step-anchored evidence).
- `proof-contract.mjs … --strict`: 0 error(s), 0 warning(s), 25/25 checked.
  `boundary-audit.mjs … --fail-on-contradicted`: 200 rows, no template
  clusters at or above 3 members, no contradicted dispositions.

## Repairs made during the continuation (all inside the owned scope)

- `lem-gr-schwarzschild-curvature-and-kretschmann-scalar` clause (c) and step
  4.1 (and the matching sentence in
  `rem-gr-schwarzschild-horizon-and-singularity`) claimed that
  `K → ∞` along sequences with `r ↓ 0` **inside the exterior datum** `M`,
  which is impossible because `M` has `r > s`. The clauses now state the
  correct boundary behaviour (`0 < K < 12/s^4` on `M`, finite boundary value
  `12/s^4` at `r ↓ s`, `K → 0` as `r → ∞`, and divergence of the expression
  `12s^2/r^6` as a function of `r > 0` as `r ↓ 0`), with the extension/Kruskal
  items supplying the actual regular continuation on which `r ↓ 0` is
  meaningful.
- Five lemmas and physics items carried stale in-proof step cross-references
  left by an earlier renumbering (`step 1.2`, `steps 1.2-1.4`, `step 2.2`,
  `step 2.3`, `step 4.1` naming steps that do not exist). All were re-pointed
  to the existing steps and re-checked by `proof-contract --strict`.
- `lem-gr-schwarzschild-isotropic-coordinate-form` declared a dependency on
  the nonexistent `def-connectedness-in-r`; the dependency and its use were
  re-pointed to the published `thm-connected-subsets-of-r-are-intervals`,
  which is what the connectedness of the intervals `(s/4,∞)` and `(s,∞)`
  actually needs.
- Five items cited suppliers that were absent from their `deps`
  (`def-lorentz-form-and-inertia`, `def-gr-smooth-covariant-two-tensor-field`,
  `lem-gr-covariant-two-tensor-transformation-law`,
  `def-smooth-vector-field-as-a-tangent-bundle-section`,
  `def-euclidean-spheres-and-closed-balls`,
  `ex-the-round-metric-on-the-sphere-as-an-induced-metric`,
  `def-derivative`); the dependencies and roles were added, the manifest and
  levels regenerated.
- Unused declared facts were made live where the proof uses them
  (`lem-gr-schwarzschild-timelike-geodesic-reduction` [L6],
  `lem-gr-warped-spherical-christoffel-and-ricci` [L6],
  `pthm-gr-schwarzschild-circular-orbit-predictions` [A2],
  `ex-gr-schwarzschild-static-clock-ratio-explicit` [L4]), and a step spelling
  `\eta_{A0}` was disambiguated to `\eta_{A\,0}` so the fact-token parser does
  not read a phantom assumption `A0`.
- `lem-gr-warped-spherical-christoffel-and-ricci` step 4.3 used the unit round
  sphere's Ricci tensor `Ric(γ) = γ` without a supplier. The published round
  sphere supplier states only the metric components, and the ready batch-68
  producer of this data (`ex-gr-curvature-of-a-product-with-a-round-sphere`)
  is homed on the examples page `gr-curvature-and-tides-examples`, which a
  prerequisite must not depend on. The step now contains the two-line direct
  computation from the round-sphere Christoffel symbols already proved in the
  same item, so the sphere Ricci data are established locally and no B-page
  dependency was introduced.
- Seven items contained hard-wrapped `$$…$$` display blocks; they were joined
  with `fix-multiline-display.mjs`, and rendercheck is clean over all 27 items
  and the two library pages.

## Cross-batch dependency evidence

- `research/physics-cm-qm-gr-79-2026-10-11-batch-72.cross-batch-dependencies.json`
  has 140 rows: 129 `item` rows (every declared `deps` edge from a batch-72
  item into an item of batches 65–71, each `verified` with the consuming
  proof steps named when the supplier is cited as a fact) plus 11 `page` rows
  (the seven GR pages consumed, the two published mathematical pages added to
  the A page's `requires`, the B→A edge and the B page's
  `the-exponential-function`).
- `frontier-dependency-ledger.mjs refresh --run …` reports "refreshed and
  deduplicated"; batch 72 is in `reviewed_batches`, and the merged ledger
  `research/physics-cm-qm-gr-79-2026-10-11-cross-batch-dependencies.json`
  carries 136 batch-72 consumer edges with their verified reviews.

## Checks run (exact results)

- precheck (27 items): 23 checked, 0 failing — all clean (the 2 definitions
  and 2 remarks are reported as nonproof structure).
- rendercheck (27 items + 2 library pages): OK — no wikilink inside math, no
  nested or unbalanced delimiters, no multiline display, every math span
  parses under KaTeX, every frontmatter block parses.
- proof-layout (`tools/physics-support/proof-layout.mjs`, 27 items): 27
  items, 120 steps, 0 defects.
- manifest-deps (batch-72 manifest): 27 item(s), 0 normalized, 0 errors.
- content-policy (batch-72 manifest, full mode): 27 scoped item(s), 0 errors,
  0 warnings.
- validate-plan (plan-spec, `--run`): the run-wide output has 243 other-batch
  findings and no line whose finding names a batch-72 page; the three lines
  mentioning `gr-spherical-vacuum-model` are the page listings (orders 247
  and 248) and the `gr-experimental-interface` prerequisite list, which
  correctly names the A page.
- item-dependency-levels check `--run`: no line names a batch-72 item.
- depcheck (whole corpus): exits 1 with 3617 pre-existing findings over the
  imported corpus (mostly `published-unaudited` and other items'
  `cited-not-in-deps`); the only lines mentioning batch-72 pages are the two
  page summaries (21 and 6 items), and no finding names a batch-72 item.
- fwdcheck (whole corpus): findings exist run-wide; none names a batch-72
  item (the lines containing batch-72 ids are the inherited-choice-principle
  listing, not findings).
- physics-check: exits 1 with the global message "mathematics import changed:
  items/def-cardinal.md; reconcile and re-import before a new run"; it names
  no batch-72 item.
- audit-manifest over the eight GR batch manifests 65–72: 2111 relationships,
  1 unresolved defect, which belongs to batch 69
  (`lem-gr-metric-divergence-and-density-formula` →
  `lem-cm-determinant-derivative-along-a-matrix-curve`); no batch-72 defect.
- extcheck: 28319 items, 0 recorded-not-proved, 0 resting on them.
- coverage-checklist `--require-destination`: 2 pages, 32 harvested results,
  0 errors, 0 warnings. `source-fetch-check --stamp`: 7/7 fetch-verified.
- proof-contract `--strict`: 0 error(s), 0 warning(s), 25/25 checked;
  boundary-audit: 200 rows, none contradicted, no template cluster.

## Unresolved findings and observations (not batch-72 blockers)

- Unrelated run-wide debt observed and not owned here: other batches' empty
  scaffold inventories (item-dependency-levels and validate-plan),
  `thm-nrqm-controlled-dynamics-resolvent-tail-short-range-completeness`
  level mismatch, batch 69's missing
  `lem-cm-determinant-derivative-along-a-matrix-curve`, and the global
  mathematics-import drift reported by physics-check. None of these names a
  batch-72 item, and none was edited or resolved here.
- No escalation was required for a batch-72 claim: every prerequisite used is
  either a published/imported mathematical item, a draft EM/SR item used only
  as external context (the `post-gr-*` and definitional items of the GR
  track), or an in-run GR item recorded ready in its own batch. The design's
  stronger obligations (maximality, geodesic completeness, uniqueness, ADM
  mass, collapse/singularity theorems, observation) are outside the design's
  page scope and are recorded as not claimed in
  `rem-gr-schwarzschild-scope-and-limits`.

## Checkpoint: files owned

27 items, the two library pages, the run manifest, the coverage, contract and
cross-batch-dependency inputs and this note. No published content, shared
plan, engine state, verdict file or other batch's carrier was edited.
Mathematical items depend only on mathematical items: no `domain: mathematics`
batch-72 item has a `domain: physics` item in `deps`, `justified_by` or
`forward_refs`. B-page items are leaves. The only choice principle used
anywhere in the batch is the `AC_ω` inherited through the manifold-product and
tangent-bundle suppliers and declared in the two definitions (and through
`def-countable-choice` in the warped items); no item reaches
`deferred-set-theory-beyond-choice` through any proof or prerequisite path.

## Readiness and handoff

All 27 batch-72 items carry `ready` Step-1 records
(`research/physics-cm-qm-gr-79-2026-10-11-step1-<id>.json`), each listing the
examined dependency IDs and the item-specific evidence. The two remark records
were re-made once after the manifest regeneration that added their statement
fields (metadata-only manifest change; item bytes unchanged). The run-wide
`step1-decisions check --run` reports 1171 items with 1096 ready and **no
batch-72 item in the pending list** (the run itself remains open because of
other batches). `checkPairAuthorArtifacts` for this pair reports all 31
required carriers present, including this batch's Step 3b authoring report
`research/physics-cm-qm-gr-79-2026-10-11-step3b-pair-gr-spherical-vacuum-model.md`.
Independent mathematical review (Step 2/Step 3) follows; no gate, publication
or stage transition is claimed here.
