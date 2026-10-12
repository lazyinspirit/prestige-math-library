# Step 3b authoring report — pair `gr-experimental-interface` / `gr-experimental-interface-examples`

- Run: `physics-cm-qm-gr-79-2026-10-11`; role: beta (batch 76), Step 1 authoring; 2026-10-11.
- Owned pair: A page `gr-experimental-interface` (order 255, category `general-relativity`, library `physics`); B page `gr-experimental-interface-examples` (order 256).
- Owned items in authoring order (dependency level; suppliers before consumers):
  1. `lem-gr-reciprocal-ratio-window` (0, A, mathematics)
  2. `def-gr-observation-and-analysis-architecture` (15, A, physics)
  3. `rem-gr-primary-report-research-queue` (16, A, physics)
  4. `ex-gr-cosmological-redshift-interface-record-window` (16, B, physics)
  5. `cex-gr-bounded-redshift-record-does-not-identify-the-parameter` (17, B, physics)
- Artifacts owed at handoff: the five item carriers under `items/`; the two page carriers under `library/general-relativity/`; `research/physics-cm-qm-gr-79-2026-10-11-batch-76.pages.json`; `.coverage.json`; `.proof-contracts.json`; `.cross-batch-dependencies.json`; `.notes.md`; this report; Step-1 readiness records.

## Scope and inputs

- Read before construction: `AGENTS.md`; `../CLAUDE.md`; `CLAUDE.md`; `SCHEMA.md`; `WORKFLOW.md`; `../PHYSICS-CONTENT-MODEL.md`; the binding owner direction `research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md`; the batch dependency levels `research/physics-cm-qm-gr-79-2026-10-11-batch-dependency-levels.json` (batch 76 = level 7, requires batches 72, 73 and 74, all complete); both design locations, `research/plan-general-relativity-track.md` L248–263 (GR12) and `research/plan-special-relativity-track.md` L267 (SR12); `research/plan-spec.json` entries 255/256; the scaffold row `GR12 experimental-interface` in `research/first-principles-2026-10-03/relativity/scaffold/general-relativity.md` and the M20 row in `mathematical-prerequisites.md`; `closure-ledger.json`; and the current carriers of every consumed supplier.
- Design control: the GR track section controls (same page ids as the dispatch); the SR track section is the sibling-framework analogue and supplies no scope or supplier for this batch.
- This is a physics pair plus one local mathematics lemma. Published content, the root mathematics workspace, plans and engine state were not edited.

## Design versus plan

- The GR12 reservation is delivered: "def observation/analysis architecture" = `def-gr-observation-and-analysis-architecture`; "rem primary redshift, delay, light-deflection, perihelion, binary and interferometer report queue" = `rem-gr-primary-report-research-queue`; "M20 before exp items" is recorded as unsupplied (the design's closure is "primary-report queue only; no experiment invented"), so no experiment item and no measured value exists in the pair.
- Plan conflict: the reservation's `requires` GR07–GR10 is a superset of the plan's three declared prerequisites; the plan controls, and GR07 (`gr-flat-and-newtonian-bridges`) is inside the three roots' transitive plan closure, so no scope is lost. The manifest adds `further-trigonometric-identities-and-inverses` for the published inverse-cosine supplier of the deflection readout; this was the single non-redundant closure addition required by `validate-plan`, and after it the page carries no `undeclared-prereq` or `redundant-prereq` finding.
- The B page holds two constructed examples (worked window; non-uniqueness counterexample) in the style of the sibling SR page; no B inventory was reserved numerically.

## Dependency graph and levels

- `lem-gr-reciprocal-ratio-window` → `def-gr-observation-and-analysis-architecture` (via the interface clauses) → `rem-gr-primary-report-research-queue`; the two B leaf items consume the definition, the FLRW redshift theorem and the lemma, and the counterexample also consumes the example.
- Levels follow the dispatch rule and are checked by `item-dependency-levels.mjs check --run` with no batch-76 finding. All in-run suppliers are items of completed batches 65–74. `depcheck`, `fwdcheck`, `extcheck`, `manifest-deps` and `content-policy` are clean for the batch; the cross-batch input records all 29 outgoing rows with consumer-side evidence.

## Source handling

- Coverage: 5 stamped source entries across the two pages, over three independent treatments: Will's Living Reviews survey (arXiv:1403.7377), Carroll's lecture notes (arXiv:gr-qc/9712019) and Tong's Cambridge notes (author-hosted PDF). Locators, recovery attempts and 21 harvested result rows are in `.coverage.json`; every row has a disposition (4 included, 16 inline, 1 out-of-scope with a specific reason).
- `source-fetch-check --stamp` reports 5/5 fetch-verified; the stamped URLs are exactly the URLs cited in the item frontmatter. No measured value, no precision and no reported agreement is asserted anywhere in the pair.

## Item checkpoints

1. `lem-gr-reciprocal-ratio-window` (A, mathematics, level 0). Strict decrease of $a\mapsto a_*/a$, its inverse, point preimages, interval preimages with exact length and the zero/positive-length dichotomy; six proof steps, 0 layout defects, contract citations quoted from the three published supplier statements.
2. `def-gr-observation-and-analysis-architecture` (A, physics, level 15). Model configurations, six readouts with their incidence conditions, condition $(*)$, data records, calibration declarations, uncertainty vocabulary, comparison separation with the M20 status, and the well-definedness/scope clause; every technical term resolves to a cited item; `precheck: n/a` as a definition and `rendercheck` OK.
3. `rem-gr-primary-report-research-queue` (A, physics, level 16). The six report families, the model-side content per family, the M20 obligation, the analysis obligations for future comparisons and the qualifications list; no measurement.
4. `ex-gr-cosmological-redshift-interface-record-window` (B, physics, level 16). Explicit de Sitter null geodesic family verified against the coordinate geodesic equation; operational model with $F(a_E)=a_R/a_E-1$ satisfying $(*)$ via `pthm-gr-flrw-cosmological-redshift`; illustrative record box $[1/2,3/4]$; exact window $[4a_R/7,2a_R/3]$, length $2a_R/21$, endpoint values $3/4$ and $1/2$, unit-normalisation instance $[4/7,2/3]$.
5. `cex-gr-bounded-redshift-record-does-not-identify-the-parameter` (B, physics, level 17). Two distinct consistent parameters $4a_R/7$ and $2a_R/3$ and the whole interval; scope clause carrying the illustrative-value qualification.

## Checks run

`precheck` 3 pass / 2 not-applicable (definition, remark); `rendercheck` OK for 5 items + 2 pages; `proof-layout` 5 items, 13 steps, 0 defects; `proof-contract --strict` 0 errors, 0 warnings, 3/3; `depcheck`/`fwdcheck`/`extcheck`/`citecheck` clean; `manifest-deps` and `content-policy` clean; scoped `validatePhysicsContent` 0 errors; `coverage-checklist --require-destination` 0 errors and 1 justified `coverage-low-yield` warning; `source-fetch-check` 5/5; `validate-plan --run` passes at the final run with warnings on other pages only and no batch-76 finding; `physics-check` is blocked by external mathematical import drift (`items/def-cardinal.md`), recorded in the notes.

## Readiness

All five items recorded `ready` with declared dependency arrays; no escalation and no owner reset. Handoff artifacts are nonempty: five item carriers, two page carriers and the batch proof-contract file.
