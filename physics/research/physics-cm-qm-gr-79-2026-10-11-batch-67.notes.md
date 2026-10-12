# Batch 67 notes — `gr-connections-and-free-fall` / `gr-connections-and-free-fall-examples`

Run `physics-cm-qm-gr-79-2026-10-11`, role beta, label batch-67, covers 67.
Step 1 complete initial authoring only; no readiness record is independent
mathematical approval (Step 2/3 review follows). The page is mixed-domain: the
first eight A items and all six B items are mathematics
(`domain: mathematics`), while the postulate, the free-fall physics theorem
and the scope remark are `domain: physics`. The physics items assert adopted
assumptions and model-conditional deductions only; no experiment, no measured
input and no empirical premise occurs anywhere in the batch, and the physics
theorem states explicitly that it carries no `empirical_premises`.

## Scope built

- A page `gr-connections-and-free-fall` (order 237, category
  `general-relativity`, `library: physics`), 11 locally authored items:
  1 definition, 3 lemmas, 4 theorems, 1 postulate, 1 physics-theorem and
  1 remark. B page `gr-connections-and-free-fall-examples` (order 238),
  6 leaf items: 4 examples and 2 counterexamples, each with a numbered
  verification or counterexample.
- Library carriers `library/general-relativity/gr-connections-and-free-fall.md`
  and `library/general-relativity/gr-connections-and-free-fall-examples.md`;
  the category file `_category.md` was created by batch-65 and is unchanged.
- Manifest `research/physics-cm-qm-gr-79-2026-10-11-batch-67.pages.json`.
  Page orders, kinds, categories and `library` fields are unchanged from the
  run scaffold; the manifest edits are the two `items` arrays, the item
  metadata, and the `requires` completion recorded below.
- No page split was needed: 11 + 6 items are far below the 100-item cap; the
  GR03 design budget (36 items) is respected.

## Dependency levels (in-run dependencies only)

Computed mechanically and stored in both manifest and item frontmatter; the
`item-dependency-levels.mjs check --run` run names no batch-67 item and no
level mismatch (its error lines are empty scaffold inventories of unauthored
batches only, 122 of them).

- A page: `def-gr-timelike-worldline-and-proper-time` 2,
  `lem-gr-proper-time-reparametrization-and-four-velocity` 3,
  `thm-gr-nondegenerate-levi-civita-and-tensor-derivative` 5,
  `lem-gr-parallel-transport-and-geodesic-speed` 6,
  `thm-gr-local-geodesics-and-exponential-map` 7,
  `thm-gr-point-normal-and-exponential-coordinate-charts` 8,
  `lem-gr-first-variation-of-proper-time` 8,
  `thm-gr-lorentz-gauss-lemma-and-normal-maximum` 9,
  `post-gr-ideal-clocks-and-free-fall` 8,
  `pthm-gr-free-fall-worldline-is-determined-by-initial-data` 9,
  `rem-gr-normal-coordinates-and-local-inertial-frames-scope` 9.
- B page: `ex-gr-flat-space-geodesics-and-proper-time` 8,
  `ex-gr-levi-civita-connection-of-a-conformal-metric` 6,
  `ex-gr-nonaffine-geodesic-parametrization` 9,
  `cex-gr-geodesics-do-not-determine-the-connection` 9,
  `ex-gr-radial-timelike-maximum-in-flat-space` 10,
  `cex-gr-point-normal-chart-does-not-make-second-derivatives-vanish` 9.
- The batch-level scheduling metadata (`…-batch-dependency-levels.json`) gives
  batch 67 level 2 requiring batch 66; the batch-65/66 supplier items are
  recorded `ready`, and no out-of-run supplier raises an in-run level.

## Design vs plan-spec conflicts (recorded as required)

- The design section `research/plan-general-relativity-track.md` L56 ("Connections
  And Free Fall") and the dispatch declare the earlier prerequisite
  `gr-tensors-and-observers` only, and the scaffold's page orders/kinds/items
  budget (36) are preserved. `research/plan-spec.json` declares exactly the
  same single prerequisite `["gr-tensors-and-observers"]` for the A page.
- CONFLICT (recorded): the authored item closure reaches published mathematical
  suppliers on eleven `P` pages that the plan-spec's `requires` list does not
  include, so `validate-plan --run` reported fifteen `undeclared-prereq`
  errors naming the two batch-67 pages (picard-lindelof,
  euclidean-ODEs-with-smooth-dependence, geodesics-the-exponential-map-
  completeness-and-hopf-rinow, properties-of-the-integral, monotone-sequences,
  improper-integrals, the-logarithm-and-general-powers, inverse-and-implicit-
  function-theorems, rank-theorems-and-embedded-submanifolds,
  the-lebesgue-integral-and-the-convergence-theorems and
  smooth-partitions-of-unity-and-exhaustions). These pages are `kind: P`
  already-published pages of the plan, i.e. exactly the vocabulary the plan
  provides for naming published prerequisites, and they are earlier in order
  (26-81 vs 237). Following the validator's own instruction ("either add it or
  drop the dependency") and the batch-65 precedent for
  `gr-framework-and-geometry` (16 such entries), the A page manifest
  `requires` now lists `gr-tensors-and-observers` plus those eleven `P` pages;
  the B page still requires only its A page, whose closure covers the
  examples' dependencies. No plan-spec or design file was edited. Because the
  plan-spec page requires and the manifest differ, `splice-plan.mjs` will
  report a `requires` drift for the owner to reconcile at the join; the
  eleven dependencies are genuinely consumed (Koszul/ODE existence via
  Picard-Lindelof, smooth dependence, ODE uniqueness for the free-fall
  theorem, inverse-function theorem, integral and bump-function suppliers)
  and none of the added entries is redundant under the plan graph (no new
  `redundant-prereq` warning names either batch-67 page).
- The remaining `validate-plan --run` errors after this fix (7) are in other
  batches: `qm-math-orbital-and-spin` (4), `cm-math-rotation-double-cover`
  (1) and their `requires-resolve` companions (3); none names a batch-67 page.
  Recorded here as corpus-level findings for the owner.
- Otherwise there is no design/plan conflict: the `requires` chain
  `gr-connections-and-free-fall` -> `gr-tensors-and-observers` -> batch 65 is
  the design's declared route, and the dispatch's plan controls the run.

## Supplier policy and dependency evidence

- Batch-65/66 in-run suppliers actually used, each read at statement level and
  recorded `ready` in its batch: `def-gr-smooth-lorentzian-objects`,
  `def-gr-smooth-covariant-two-tensor-field`,
  `def-gr-inverse-metric-and-musical-isomorphisms` and
  `lem-gr-inverse-metric-is-smooth`, `def-gr-metric-selected-connection`,
  `lem-gr-connection-conditions-in-chart-components`,
  `def-gr-si-unit-and-coordinate-conventions`,
  `post-gr-spacetime-and-classical-domain` (batch 65);
  `def-gr-tensor-fields-and-components`,
  `lem-gr-contraction-of-smooth-tensor-fields`,
  `def-gr-observer-and-rest-space`,
  `def-gr-observer-congruence-and-adapted-charts`,
  `lem-gr-observer-pairing-with-future-causal-vectors` (batch 66).
- Owner-exception draft mathematics items on the SR/math side were inspected
  at statement level where used: `def-causal-classification-of-lorentz-vectors`,
  `lem-timelike-cone-has-two-convex-components`,
  `lem-lorentz-form-has-orthonormal-basis`, `def-lorentz-form-and-inertia`,
  `def-rational-power`, `def-countable-choice`,
  `lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space`,
  `thm-picard-lindelof-local-existence-and-uniqueness`,
  `thm-smooth-dependence-of-ode-solutions-on-parameters`,
  `thm-fundamental-theorem-for-autonomous-smooth-odes`,
  `thm-euclidean-inverse-function-theorem`,
  `thm-monotone-change-of-variable-for-riemann-integrals`,
  `lem-smooth-bump-between-concentric-euclidean-balls`, the FTC and
  Riemann-integral layer, `thm-clairaut-schwarz-mixed-partials`,
  `thm-differentiation-under-the-integral-sign`, and the affine-connection
  and geodesic layer (`def-affine-connection-on-a-smooth-manifold`,
  `def-christoffel-symbols-of-an-affine-connection`,
  `def-geodesic-of-an-affine-connection`,
  `def-covariant-derivative-along-a-curve`,
  `def-parallel-section-along-a-curve`,
  `def-parallel-transport-along-a-piecewise-smooth-curve`,
  `thm-existence-and-uniqueness-of-parallel-sections`,
  `prop-coordinate-geodesic-equation`,
  `thm-christoffel-symbol-transformation-law`, `def-dual-connection`,
  `def-product-connection-on-tensor-and-hom-bundles`).
- Imported mathematics is read-only and never edited. Mathematical items depend
  only on mathematical items; the physics items' physics dependencies are
  `post-gr-spacetime-and-classical-domain` (formulation prerequisite), the
  batch-67 `post-gr-ideal-clocks-and-free-fall` and mathematics
  (`mathematical-premise`) only.
- `AC_\omega` inheritance is declared where the smooth tangent-bundle or
  chart-cover structure is invoked (`def-gr-timelike-worldline-and-proper-time`,
  `thm-gr-nondegenerate-levi-civita-and-tensor-derivative` [L7]/step 3.1,
  `lem-gr-parallel-transport-and-geodesic-speed` step 3.1,
  `thm-gr-local-geodesics-and-exponential-map` step 3.1,
  `thm-gr-point-normal-and-exponential-coordinate-charts` remarks). No item
  reaches `deferred-set-theory-beyond-choice`.
- Cross-batch input
  `research/physics-cm-qm-gr-79-2026-10-11-batch-67.cross-batch-dependencies.json`
  has 53 `item` rows (every declared `deps` or `justified_by` edge from a
  batch-67 item into a batch-65/66 item, each `verified` with an exact
  claim/use evidence sentence) plus one `page` row
  (`gr-connections-and-free-fall` -> `gr-tensors-and-observers`). The
  same-batch B->A `requires` edge is deliberately not in this cross-batch
  input. `frontier-dependency-ledger.mjs refresh --run
  physics-cm-qm-gr-79-2026-10-11` merged 54 consumer-67 edges, 0 unreviewed,
  and batch 67 appears in `reviewed_batches`; after the final refresh there
  are no orphaned reviews.

## Mathematical content and routes

- Worldlines and proper time: piecewise-$C^1$ future timelike worldlines with
  positive density $\sqrt{-g(\gamma',\gamma')}$, proper time as the
  partition-independent, additive, strictly increasing integral, invariance
  under orientation-preserving reparametrization, and the four-velocity as
  the unit tangent with $g(U,U)=-c^2$ that reparametrizes the worldline
  (`def-gr-timelike-worldline-and-proper-time`,
  `lem-gr-proper-time-reparametrization-and-four-velocity`).
- Connection (M05): Koszul construction of the unique torsion-free
  $g$-compatible connection on a nondegenerate metric, with verification of
  torsion freedom and compatibility from the defining identities, uniqueness,
  and the extension to dual and tensor fields with commuting contraction and
  $\nabla g=\nabla g^{-1}=0`
  (`thm-gr-nondegenerate-levi-civita-and-tensor-derivative`); metric pairing,
  parallel transport and its isometry property, constancy of geodesic speed,
  proper time as an affine parameter, and the affine-reparametrization
  criterion (`lem-gr-parallel-transport-and-geodesic-speed`).
- Geodesics and normal coordinates (M09/M10): chart geodesic system solved by
  Picard-Lindelof with smooth dependence, unique maximal geodesic, scaling,
  exponential map with $d(\exp_p)_0=\mathrm{id}$ and local diffeomorphism
  (`thm-gr-local-geodesics-and-exponential-map`); point-normal and
  exponential charts with $g(p)=\eta$, $\partial g(p)=0$, $\Gamma(p)=0$ and
  geodesics through $p$ as straight coordinate lines, with an explicit
  no-second-order claim (`thm-gr-point-normal-and-exponential-coordinate-charts`).
- Variational and comparison theory (M14 restricted, C1): first variation of
  the length functional with $D_s$-$D_t$ commutation, endpoint integration by
  parts and bump test fields, stationarity iff the geodesic equation
  (`lem-gr-first-variation-of-proper-time`); Lorentzian Gauss lemma and the
  radial proper-time maximum with its equality characterization
  (`thm-gr-lorentz-gauss-lemma-and-normal-maximum`).
- Physics items: the adopted clock, free-fall and light-ray postulate
  (`post-gr-ideal-clocks-and-free-fall`), the model-conditional determination
  of a free-fall worldline by release event and four-velocity with no mass
  dependence (`pthm-gr-free-fall-worldline-is-determined-by-initial-data`),
  and the scope note separating first-order normal coordinates from the local
  inertial-frame reading (`rem-gr-normal-coordinates-and-local-inertial-frames-scope`).
- B page: flat-space geodesics, proper time, parallel transport and
  exponential map; the conformal-metric Christoffel symbols verified by the
  defining identities; a non-affine geodesic parametrization and its
  pregeodesic equation; the refutation that torsion freedom plus geodesic
  images determine the connection; the radial maximum on a wiggly family; and
  the refutation of second-order vanishing in a point-normal chart.

## Sources

- Three independent treatments were read against downloaded full texts
  (`mutool draw -F txt` page-by-page inspection of the fetched PDFs):
  Carroll, *Lecture Notes on General Relativity* arXiv:gr-qc/9712019
  (lecture-notes; worldlines/proper time/four-velocity, Riemann normal
  coordinates, the covariant derivative and Christoffel connection, parallel
  transport, geodesics and the affine parameter, the exponential map, and the
  equivalence-principle chapter); Reall, *Part III General Relativity*,
  October 12, 2022 revision (lecture-notes; the Levi-Civita connection and
  uniqueness proof, geodesics/affine parameters/the free-particle postulate,
  normal coordinates, and the section 6.4 postulates); Tong, *General
  Relativity*, Michaelmas 2019 (lecture-notes; the point-particle action and
  geodesic equation, the Levi-Civita connection, geodesics revisited, normal
  coordinates with the second-derivative counting argument, and the
  equivalence-principle discussion). All three are full-text fetch-verified
  with stamps: `source-fetch-check --coverage <batch-67 coverage> --stamp`
  reported "3/3 source(s) fetch-verified (3 newly stamped)" with byte counts
  and sha256_16 identical to the batch-66 stamps for the same URLs.
- Coverage `research/physics-cm-qm-gr-79-2026-10-11-batch-67.coverage.json`
  harvests 27 named results with dispositions (16 included, 6 inline, 5
  deferred); `coverage-checklist.mjs --require-destination`
  reports 1 page, 27 harvested results, 0 errors, 0 warnings. Every deferred
  destination resolves to a plan-spec page (`gr-curvature-and-tides`,
  `gr-einstein-and-matter`, `gr-flat-and-newtonian-bridges`).

## Repairs to authored carriers in this dispatch

- Preserved the scaffold levels only after the manifest existed: the
  placeholder `dependency_level` values in the item frontmatter were replaced
  by the mechanically computed 2, 3, 5, 6, 7, 8, 8, 9, 8, 9, 9 / 8, 6, 9, 9,
  10, 9 and the `item-dependency-levels.mjs check` gate confirms them.
- `lem-gr-proper-time-reparametrization-and-four-velocity` cited
  `thm-continuous-implies-integrable`, `def-the-integral-function` and
  `def-darboux-sums` in Facts without declaring them; the three IDs were added
  to `deps`/`dependency_roles` (mathematical-premise; out-of-run published
  items, so no level change), removing all three `cited-not-in-deps` warnings
  from `depcheck.mjs`.
- `thm-gr-point-normal-and-exponential-coordinate-charts` step 4.1 referred to
  "steps 3.1 and 1.2-5.2" where no step 5.2 exists; corrected to "steps 3.1
  and 1.2-3.2", which also removed the dangling derivation input from the
  regenerated proof contract.
- The proof-contract boundary row for `ex-gr-radial-timelike-maximum-in-flat-space`
  (`endpoints`) was re-anchored to step 1.1 after the boundary-evidence gate
  required a named step; `proof-contract.mjs --strict` is now clean.
- `ex-gr-radial-timelike-maximum-in-flat-space` step 3.1 said "Steps 2.1 and
  3.1 verify both the inequality and the equality case", a self-reference left
  by an earlier renumbering; corrected to "Steps 2.1 and 2.2", the two steps
  that actually discharge the two directions. The item was re-prechecked,
  re-rendered and re-laid-out, its contract entry regenerated
  (`regen-contract-entries.mjs`), `proof-contract.mjs --strict` re-run clean,
  and its stale readiness record re-recorded after the repair (the record had
  become open, which is what permits the non-owner re-record).
- The manifest `sources` and `statement` fields were regenerated from the
  final item carriers and verified equal to the section texts (0 mismatches
  over all 17 items); the manifest was written before and re-verified after
  the requires edit.

## Proof contracts

- `research/physics-cm-qm-gr-79-2026-10-11-batch-67.proof-contracts.json`
  covers 16 entries: the 14 proof-bearing items (8 A + 6 B), the remark (empty
  citations/derivations/routine steps and all eight boundary dispositions) and
  the postulate (physics_review formulation/scope/sources/non_derivation, no
  boundary or step worksheets). It omits the definition, which carries no
  supplied argument, matching batch-65/66.
- Citations and derivations were generated by `regen-contract-entries.mjs`
  from the final on-disk Facts and numbered steps, so every `[L#]` link has an
  exact quote from the source item's citable section and every numbered step
  states its inputs; boundary rows were authored per item (120 rows, 56 marked
  not_applicable, all item-specific).
- `proof-contract.mjs ... --strict`: 0 error(s), 0 warning(s), 16/16 item(s)
  checked. `boundary-audit.mjs ... --fail-on-contradicted`: 120 rows over 1
  contract file, 56 not_applicable, no template clusters at or above 3
  members, no contradicted dispositions. `proof-contract-coverage.mjs --run
  ... --contracts ...` is blocked by the run-level limitation "Empty or
  invalid frontier page inventory cm-math-numerical", exactly as recorded for
  batch-65/66; it names no batch-67 item. This is an unresolved corpus-level
  finding for the owner.

## Checks run (exact results)

- precheck (17 batch items): "15 checked, 0 failing — all clean" (the
  definition and the remark have no proof phase and report 0 checked each).
- rendercheck (17 items + 2 library pages): OK — no wikilink inside math, no
  nested or unbalanced delimiters, every math span parses under KaTeX, every
  frontmatter block parses.
- proof-layout (17 items): 17 items, 94 steps, 0 defects.
- manifest-deps (batch-67 manifest): 17 item(s), 0 normalized, 0 error(s).
- content-policy (batch-67 manifest): 17 scoped item(s), 0 error(s), 0
  warning(s).
- depcheck (focused on the 17 items): OK — selected item/page checks and their
  prerequisite cycle checks passed; 0 warnings.
- fwdcheck (focused): OK — no open forward references, 17 items carry the
  inherited forward marker, no cycle findings.
- extcheck (focused): OK; the corpus-wide run reports 27519 items, 0
  recorded-not-proved, 0 resting on them.
- pathcheck (general-relativity): 0 pathway files checked, 0 errors, 0
  warnings (the category has no `_pathway.md`).
- physics-check --run physics-cm-qm-gr-79-2026-10-11 --plan
  research/plan-spec.json: "physics-content: 0 error(s), 392 items checked".
- validate-plan (plan-spec, --run): after the manifest `requires` completion
  recorded above, no error names a batch-67 page. At the time of the batch-67
  run the tool still reported 7 errors in other batches
  (`qm-math-orbital-and-spin`, `cm-math-rotation-double-cover` and their
  `requires-resolve` companions), which were recorded here as corpus-level
  findings; the final re-run of the shared workspace reports
  "OK — declared page order is acyclic and consistent; no item-level cycles,
  forward references, B-page dependencies, or unresolved ids among the 36
  page(s) with item lists", with 21 `redundant-prereq` warnings, none naming a
  batch-67 page.
- item-dependency-levels check --run: no line names a batch-67 item; the 122
  remaining errors are empty scaffold inventories of unauthored batches.
- coverage-checklist --require-destination: 1 page, 27 harvested results, 0
  errors, 0 warnings. source-fetch-check (check mode): 3/3 sources
  fetch-verified.
- frontier-dependency-ledger refresh --run: "refreshed and deduplicated";
  batch 67 is in `reviewed_batches` with 0 unreviewed consumer-67 edges.
- audit-manifest over the run's manifests (79 batches, 392 items): 0 defects.

## Readiness records

All 17 items are recorded `ready` with
`step1-decisions.mjs record --run physics-cm-qm-gr-79-2026-10-11 --item ID
--decision ready --dependencies <the item's declared deps> --reason
<evidence summary>` after the final carrier edits, so each record's hash binds
the final item text to its examined dependency list. No item was escalated:
every cross-batch supplier is an in-run batch-65/66 item recorded `ready` or
an inspected published/draft mathematical item, and the only plan-level
conflict (the eleven `P`-page prerequisites) is recorded above for owner
reconciliation at the Step-2 join. The temporary focused-scope file used for
depcheck/fwdcheck/extcheck runs lives outside the repository
(`/tmp/gr67/work/scope-items.json`) and is not part of the handoff; the
manifest, coverage, proof contracts, cross-batch input, library carriers and
these notes are the batch carriers.

The readiness reason recorded for each item is a batch-generic evidence
summary; two kind-specific qualifications are recorded here for exactness:
`def-gr-timelike-worldline-and-proper-time` carries no proof section (precheck
reports 0 checked) and no proof-contract entry (definitions with no supplied
argument are outside the contract scope, as in batch-65/66), and
`rem-gr-normal-coordinates-and-local-inertial-frames-scope` carries a
contract entry with empty citations/derivations and eight boundary
dispositions rather than step inputs. `step1-decisions.mjs check --run`
reports `items 392, ready 392` with no work row naming a batch-67 item.
