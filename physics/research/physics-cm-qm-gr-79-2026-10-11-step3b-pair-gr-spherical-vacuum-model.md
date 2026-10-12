# Step 3b authoring report — pair `gr-spherical-vacuum-model` / `gr-spherical-vacuum-model-examples`

- Run: `physics-cm-qm-gr-79-2026-10-11`; role: beta (batch 72), Step 1 authoring; 2026-10-11.
- Owned pair: A page `gr-spherical-vacuum-model` (order 247, category `general-relativity`, library `physics`); B page `gr-spherical-vacuum-model-examples` (order 248).
- Owned items in authoring order (dependency level; A page):
  1. `def-gr-schwarzschild-exterior-model` (2)
  2. `lem-gr-schwarzschild-metric-properties` (3)
  3. `lem-gr-schwarzschild-christoffel-symbols` (6)
  4. `lem-gr-schwarzschild-ricci-and-einstein-tensors` (11)
  5. `lem-gr-schwarzschild-curvature-and-kretschmann-scalar` (12)
  6. `lem-gr-schwarzschild-extension-chart` (13)
  7. `lem-gr-schwarzschild-isotropic-coordinate-form` (7)
  8. `lem-gr-schwarzschild-static-congruence-and-clock-rates` (8)
  9. `lem-gr-schwarzschild-timelike-geodesic-reduction` (9)
  10. `lem-gr-schwarzschild-circular-orbits-and-photon-sphere` (10)
  11. `def-gr-kruskal-model-data` (3)
  12. `lem-gr-kruskal-model-properties` (14)
  13. `lem-gr-kruskal-causal-escape-and-trapping` (15)
  14. `lem-gr-warped-spherical-christoffel-and-ricci` (10)
  15. `lem-gr-warped-base-vacuum-reduction` (11)
  16. `thm-gr-local-birkhoff-warped-product` (12)
  17. `pthm-gr-schwarzschild-vacuum-model` (13)
  18. `pthm-gr-schwarzschild-stationary-redshift` (14)
  19. `pthm-gr-schwarzschild-circular-orbit-predictions` (14)
  20. `rem-gr-schwarzschild-horizon-and-singularity` (16)
  21. `rem-gr-schwarzschild-scope-and-limits` (17)
- B page, after all A suppliers:
  22. `ex-gr-schwarzschild-isotropic-weak-field-comparison` (8)
  23. `ex-gr-schwarzschild-static-clock-ratio-explicit` (9)
  24. `ex-gr-schwarzschild-circular-orbit-thresholds-explicit` (11)
  25. `ex-gr-schwarzschild-extension-horizon-data` (14)
  26. `ex-gr-kruskal-cone-and-radial-values` (16)
  27. `cex-gr-exterior-charts-do-not-cover-the-extension` (14)
- Artifacts owed at handoff: the 27 item carriers under `items/`; the two page
  carriers under `library/general-relativity/`;
  `research/physics-cm-qm-gr-79-2026-10-11-batch-72.pages.json`;
  `.coverage.json`; `.proof-contracts.json`; `.cross-batch-dependencies.json`;
  `.notes.md`; this report; Step-1 readiness records.

## Scope and inputs

- Read before construction: `AGENTS.md`; `../CLAUDE.md`; `CLAUDE.md`;
  `SCHEMA.md`; `WORKFLOW.md`; `../PHYSICS-CONTENT-MODEL.md`; the binding owner
  direction `research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md`;
  the batch dependency levels
  `research/physics-cm-qm-gr-79-2026-10-11-batch-dependency-levels.json`
  (batch 72 requires batches 70 and 71); the design section
  `research/plan-general-relativity-track.md` L166 (Spherical Vacuum Model,
  reservation GR08) and the full design at
  `research/first-principles-2026-10-03/relativity/scaffold/general-relativity.md`
  (spherical exterior paragraph) with the local kernels
  `gr-solution-proofs.md` Q1/Q5; `research/plan-spec.json` entries 247/248;
  the scaffold audit and GR repair records named in the owner direction
  (`research/scaffold-audit-2026-10-11/`,
  `research/gr-repair-2026-10-11/report.md`).
- The A page is mixed-domain: 18 mathematical items (the exterior datum, its
  connection/curvature/geodesic data, the two extensions and the
  warped-product/Birkhoff closure) and 3 physics items (the model theorem
  adopting `T = 0`, `Lambda = 0` through the framework postulates, and two
  restricted prediction theorems for ideal clocks, rays and test bodies). The
  B page is entirely mathematical. No item reports a measurement, uses an
  empirical premise or carries empirical uncertainty; the physics items state
  explicitly that they assert nothing about nature and exclude observations.
- Consumed GR suppliers are the draft in-run items of batches 65–71; they were
  inspected on disk (statement level, plus step level where cited) and all
  carry their own `ready` records. Published/imported mathematical suppliers
  are read-only. The only choice principle used is the `AC_ω` inherited
  through the manifold/tangent-bundle suppliers and declared in the two
  definitions; no item reaches `deferred-set-theory-beyond-choice`.

## Design versus plan

- Design GR08 declares earlier prerequisites GR03–GR07; `plan-spec.json`
  declares only `gr-flat-and-newtonian-bridges` and `gr-local-and-global-energy`.
  The current plan controls this run: the manifest `requires` follows the plan,
  and the remaining GR suppliers are consumed through items and are inside the
  transitive closure of the two declared pages.
- The design's four promised deliverables were all built (see `.notes.md`
  "Scope built"): the exterior domain definition, the M18 vacuum calculation,
  the restricted geodesic/redshift prediction theorems and the
  chart-extension/horizon-versus-singularity remark, together with the Q1/Q5
  exact spherical model and the precise local Birkhoff statement.
- Three published mathematical pages outside the plan closure were added to
  `requires` after the authored dependency graph was computed
  (`hausdorff-via-the-diagonal`, `riemannian-metrics-length-distance-and-volume`
  on the A page; `the-exponential-function` on the B page); no plan-spec or
  shared file was edited. Full record in `.notes.md`.

## Dependency graph and levels

- Levels were recomputed mechanically from the final manifest and written into
  both the item frontmatter and the manifest; they are 2–17 on the A page
  (definitions first, Kruskal and warped/Birkhoff chains after the exterior
  geometry, physics theorems after their suppliers, remarks last) and 8–16 on
  the B page. `item-dependency-levels.mjs check --run` reports no line naming a
  batch-72 item.
- Actual transitive use was verified item by item: every `deps` target exists
  on disk (published item or in-run item), every fact wikilink resolves to a
  declared dependency, every numbered step cites only declared facts and
  earlier steps, and each definition's `justified_by` lemma exists and proves
  exactly the well-definedness claims (metric-field status for the exterior
  datum; existence and smoothness of the implicit radial function for the
  Kruskal datum). Two-level and three-level chains were read at step level.
- The B items are leaves: they depend only on A-page items and published
  mathematics; no item of any page depends on them. The A→B page edge is
  declared by the B page's `requires`.

## Source handling

- Per-page sources (full texts fetched and inspected; URLs and locators in the
  item carriers, the coverage file and `.notes.md`): Tong, *General
  Relativity* (Michaelmas 2019) sections 5.1.1, 6.1–6.3; Carroll, *Lecture
  Notes on General Relativity* arXiv:gr-qc/9712019 Ch. 5 and Ch. 7; Townsend,
  *Black Holes* arXiv:gr-qc/9707012 section 2.3. These are three independent
  lecture-note treatments (two full GR courses plus a dedicated black-hole
  course), satisfying the two-independent-treatment rule.
- `.coverage.json` records 32 harvested results with dispositions (21
  `included`, 8 `inline`, 2 `deferred` to `owner-decision`, 1 `out-of-scope`);
  `coverage-checklist.mjs --require-destination` is green, and
  `source-fetch-check --stamp` reports 7/7 source entries fetch-verified.
- Source-fidelity note (recorded): Carroll's Ch. 7 (7.30) prints a curvature
  coefficient differing from the direct computation by a factor 4; the item
  uses the direct value (agreeing with Tong) and records the discrepancy. No
  other source divergence was found.

## Checks, repairs and status

- precheck (27 items): 23 checked, 0 failing (2 definitions and 2 remarks are
  nonproof structure). rendercheck (27 items + 2 pages): OK. proof-layout
  (`tools/physics-support/proof-layout.mjs`): 27 items, 120 steps, 0 defects.
  manifest-deps: 27 items, 0 errors. content-policy (full mode): 27 scoped
  items, 0 errors, 0 warnings. proof-contract `--strict`: 0/0, 25/25 checked;
  boundary-audit: 200 rows, none contradicted, no template clusters.
- Repairs made during authoring/continuation (full list in `.notes.md`):
  corrected the impossible `r down to 0 in M` boundary claim in the
  Kretschmann lemma and the horizon remark; re-pointed stale in-proof step
  cross-references in seven items; replaced a nonexistent connectedness
  dependency; added five items' missing cited dependencies; made unused
  declared facts live; proved the round-sphere Ricci tensor locally in step
  4.3 of the warped lemma (avoiding a dependency on an examples page); joined
  hard-wrapped display blocks. All repairs are inside the owned scope.
- `checkPairAuthorArtifacts` for the pair: all required carriers present
  (items, pages, manifest, contracts, this report).
- All 27 items carry `ready` Step-1 readiness records with their examined
  dependency lists; no batch-72 escalation is open. Unrelated run-wide debt
  (other batches' empty inventories, batch 69's missing determinant-derivative
  supplier in `audit-manifest`, the global `def-cardinal` import drift
  reported by `physics-check`) is recorded in `.notes.md` and was not edited.

## Handoff

Step 1 initial authoring is complete for batch 72: nonempty item and page
carriers, the batch proof-contract file with per-item citations, derivations
and boundary worksheets, coverage with all source results disposed,
cross-batch dependency evidence merged into the frontier ledger, and current
readiness records. Independent mathematical review (Step 2/Step 3) follows;
no gate, publication or stage transition is claimed here.
