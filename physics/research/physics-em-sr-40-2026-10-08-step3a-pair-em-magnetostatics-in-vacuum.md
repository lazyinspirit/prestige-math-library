# Step 3a scope review — `em-magnetostatics-in-vacuum` / `-examples`

- Run: `physics-em-sr-40-2026-10-08` · Role: alpha (scope review) · Batch 28.
- A page `em-magnetostatics-in-vacuum` (order 335); B page `em-magnetostatics-in-vacuum-examples` (order 336); category `classical-electromagnetism`, library `physics`.
- Review date 2026-10-09. Inputs read: batch-28 manifest, coverage, notes and cross-batch
  dependency input; `research/plan-classical-electromagnetism-track.md` L1838 ff. and
  `research/plan-spec.json` orders 335/336; design scaffold
  `research/first-principles-2026-10-03/classical-electromagnetism/scaffold/`
  (`prose-scaffold.md` pair table, `proposed-inventory.json` pair 06 and its nine item rows,
  `definition-contracts.md` contracts `def-em-steady-current-regime` and
  `def-em-magnetic-moment`, `core-conditional-proofs.md` K4, `worked-example-verifications.md` X3);
  owner direction `research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md`
  (seventh-reconciliation clause on ideal magnetostatic models); reconciliation7 acceptance
  and `magnetostatics-round1` review evidence; `tools/physics-support/step3-decisions.mjs`
  semantics.

## Decision (A page)

**sufficient** — recorded with
`node tools/physics-support/step3-decisions.mjs record-scope --run physics-em-sr-40-2026-10-08
--page em-magnetostatics-in-vacuum --decision sufficient`.
No owner action, merger, or enrichment is required for this pair's intended scope.

Empirical content: none. The 13 items are definitions, mathematical lemmas, one
source-backed postulate, conditional physics theorems and exact examples; there is no
experiment, measurement, uncertainty or statistical claim (the coverage carries no
experimental rows), so the content model's statistical-evidence rules impose no additional
scope obligations on this pair.

## Scope evidence

1. **Design vs plan vs manifest.** The design reservation (`proposed-inventory.json` pair 06,
   quoted at plan-track L1838; contracts `definition-contracts.md#def-em-steady-current-regime`
   and `#def-em-magnetic-moment`; arguments `core-conditional-proofs.md#K4`; examples
   `worked-example-verifications.md#X3`) is preserved item-for-item: six A design items
   (`def-em-steady-current-regime`, `def-em-magnetic-moment`,
   `pthm-em-magnetostatic-vector-potential`, `pthm-em-biot-savart`,
   `pthm-em-magnetic-dipole-field`, `pthm-em-magnetic-loop-force-torque`) and three B items
   (`ex-em-infinite-wire-and-solenoid`, `ex-em-circular-loop-axis-field`,
   `ex-em-wire-force-coupling`), with page ids, orders 335/336, kinds, category, library
   `physics`, companion link and `requires` (`em-expanded-analysis-prerequisites`,
   `em-maxwell-integral-and-constraints` for the A page; the A page for B) agreeing with
   `plan-spec.json` 335/336. The live A page adds three local mathematical prerequisites
   (`lem-em-ideal-line-current-field`, `lem-em-ideal-cylindrical-sheet-field`,
   `lem-em-newtonian-kernel-curl-identity`) consumed by named items for the distributional
   source equations and the differentiated Biot–Savart kernel, and one postulate
   `post-em-ideal-magnetostatic-models` whose necessity is stated verbatim in the owner
   direction (seventh reconciliation: admissibility is a definition predicate, and its
   physical adoption is the necessary postulate; the earlier point/compact-sheet postulate
   does not cover line and noncompact sheet sources). All four additions are recorded in
   `batch-28.notes.md` (findings 2 and 5) and in the owner-accepted reconciliation7 record
   (`new_items` = exactly `post-em-ideal-magnetostatic-models`), not silent scope drift.
   The recorded reconciliations (dropped design deps replaced by in-scope suppliers — e.g.
   `thm-differentiation-under-the-integral-sign` replaced by
   `lem-em-newtonian-kernel-curl-identity`; `pthm-em-integral-maxwell` dropped because the
   declared ideal sources lie outside its smooth test-geometry class and the examples verify
   the identities directly; the transverse-decay reading of "select no additional
   homogeneous field"; the finite Riemann moment on a bounding rectangle) are corrections
   of over-strong or unusable readings with the promised conclusions retained.
2. **Source coverage.** Four primary full-text sources, 8/8 fetch-verified rows (4 sources ×
   2 pages) with byte hashes: Griffiths *Introduction to Electrodynamics* 3rd ed. (Ch. 5
   §5.1.3–§5.4.3 and §6.1.2), Tong *Electromagnetism* (Ch. 3), Landau–Lifshitz *The
   Classical Theory of Fields* (§§42–45), Chew *Lectures on Electromagnetic Field Theory*
   (Lectures 4–5). The coverage carries 48 harvested rows — 35 `included` (mapped to named
   items), 11 `inline` (absorbed into the A-page theorems or supplied by earlier in-run
   pages such as `pthm-em-integral-maxwell`/`pthm-em-fixed-vacuum-jumps` on order 327),
   1 `deferred` with a resolving destination (`em-electrostatic-multipoles`, plan page
   scaffolded at order 333) and 1 `out-of-scope` with a written reason (Tong §3.2.4 linking
   number: flux-linkage topology belongs to the induction/gauge pairs and is consumed by no
   item of this pair). Reproduced mechanically: `coverage-checklist --require-destination`
   on batch 28 reports 2 pages, 48 harvested rows, 0 errors, 0 warnings. Every reserved
   claim of pair 06 has a declared home.
3. **Dependency records.** The 13 items declare 152 dep edges with 58 unique targets: 21
   in-run scaffolded items and 37 published imported mathematical items (`items/` snapshots
   pinned in `research/math-imports.json`). Zero unresolved targets; zero A-page dependencies
   on a B-page-homed item; zero later-order dependency instances (all cross-batch suppliers
   sit at orders 310 `em-expanded-analysis-prerequisites`, 325 `em-primitives-and-postulates`,
   327 `em-maxwell-integral-and-constraints`, all earlier than 335). The transitive closure
   of the pair spans 82 in-run items over 12 pages with no missing and no plan-only
   prerequisite. The batch-28 cross-batch input holds 24 rows (2 page + 22 item; 17
   `verified`, 5 `open` for later-stage review, 2 `removed` by reconciliation7 with evidence
   retained). Spot-checked live supplier statements: `lem-em-smooth-newtonian-upgrade`,
   `lem-em-thin-current-limit`, `lem-em-magnetic-dipole-remainder` (batch 16),
   `pthm-em-charge-continuity`, `def-em-weak-sources`, `post-em-distributional-vacuum-maxwell`,
   `pthm-em-integral-maxwell`, `pthm-em-fixed-vacuum-jumps` (batches 23/24) — the hypotheses
   used by this pair (smooth compact conserved currents, mollified thin-current limits,
   explicit remainders, distributional source scope, test geometry class) match the
   consumers' statements. The three mathematics lemmas use only mathematical dependencies
   (imported items and the batch-16 mathematical item); the domain boundary holds. Run-wide
   Step-1 readiness: `step1-decisions check --run` closed at 471/471.
4. **Intended role / consumers.** Declared prerequisites resolve to earlier, populated pages
   (orders 310 and 327), including the page-level `requires` overlaid from plan-spec. The
   planned consumers use the pair as designed: `em-induction-and-circuit-limits` (order 339)
   consumes `def-em-steady-current-regime` (three items) and
   `pthm-em-magnetostatic-vector-potential` (`pthm-em-inductance-reciprocity`); its B page
   (340) consumes `def-em-steady-current-regime`. No other run item depends on this pair, and
   the B page remains a cross-page leaf.
5. **Owner / reconciliation state.** The current batch-28 objects are byte-content identical
   to the accepted `magnetostatics-round1` "after" objects (13/13, JSON-normalized; manifest
   sha256 `6d78054f37a17cb8e8de398e633bb1487f7c8e92875c916c172afd4d770bae79`); the
   reconciliation7 record (`research/physics-em-sr-40-2026-10-08-reconciliation7.final.json`,
   `...-reconciliation7-root-magnetostatics-acceptance.json`) accepted the current statements,
   strategies and deps (root read all 13 final batch-28 statements) with the single new item
   named above. That acceptance is scaffold-level; it is not a proof audit or gate
   acceptance, and authoring/independent review remain owed.

## Unmet prerequisites

None confirmed. Method: every declared dependency instance of the pair (152 edges, 58 unique
targets) and both page `requires` were resolved against the published/imported library plus
all 40 current batch manifests (80 pages / 471 items, no empty inventories), and the key
in-run supplier statements were read on disk. Residual uncertainty (honest limits): this
review checks scope and interfaces, not hypothesis-by-hypothesis fidelity of every supplier
use (Step 3b and later stages own that); the design-dep reconciliations are the scaffolder's
reading of actual uses, owner-accepted, and must be re-verified against the authored
supplier texts; and no external full text was re-fetched here (the coverage retains the
2026-10-09 fetch stamps and hashes). None of these is a scope absence.

## Non-blocking findings / recommendations

1. Coverage row Griffiths §5.4.2 still describes `pthm-em-fixed-vacuum-jumps` as the solenoid
   interface check, while the current example verifies the jump directly through
   `lem-em-ideal-cylindrical-sheet-field` and the corresponding cross-batch row is recorded
   `removed` by reconciliation7. This is documentation phrasing drift, not a missing claim;
   aligning the wording at authoring would remove the last trace of the superseded edge.
2. The two page-level `requires` rows remain `open` in the cross-batch ledger (later-stage
   review state), not scope absences.
3. No scaffold, manifest, plan, or owner record was edited by this review. The decision is
   bound to the current scope hash of the two pages
   (`bb1980b3a4251f6addf68e2ff9988e38195170aeb6ca8c5a20645c9b1a4aaf88`; coverage sha256
   `97afae621ac0ed84473b2053265d418a63ce6f03771707ca9f7a2733c2b41b11`); any later manifest
   change invalidates it and requires a fresh review.
