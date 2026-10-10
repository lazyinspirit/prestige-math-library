# Step 3a scope report — pair `sr-spacetime-primitives` / `sr-spacetime-primitives-examples`

- Run: `physics-em-sr-40-2026-10-08`, role alpha, label
  `step3a-pair-sr-spacetime-primitives-2829834d3a12d1fc`.
- A page `sr-spacetime-primitives` (order 209, category `special-relativity`,
  `library: physics`, 19 items); B page `sr-spacetime-primitives-examples`
  (order 210, 8 leaf items). Batch 1.
- Scope decision: **sufficient** for the A page (recorded via
  `tools/physics-support/step3-decisions.mjs record-scope`). No omission found,
  no merger or enrichment recommended, no owner action requested.

## Inputs read

- `research/plan-spec.json` (pair entries, orders 209/210) and
  `research/plan-special-relativity-track.md` (SR01/SR01-B block).
- Full source design `research/first-principles-2026-10-03/relativity/scaffold/special-relativity.md`
  (S0–S1 postulates/primitives prose, SR01 inventory row),
  `expanded-item-inventory.json` (the three stable SR01 ids) and
  `prose-scaffold-splice.json` `proposed_item_homes`.
- Run manifests `research/physics-em-sr-40-2026-10-08-batch-1.pages.json`,
  coverage `…-batch-1.coverage.json`, notes `…-batch-1.notes.md`, scope ledger,
  owner authoring direction, imported placements in `library/` and
  `items/`, pinned imports `research/math-imports.json`.

## Scope evidence (design vs content)

The SR01 design row reserves exactly: def affine action/displacement; def Lorentz
form/future cone; inertia/orthogonal-basis suppliers; def events/inertial affine
frames; post spacetime/light/clock interpretation; def units; M01 geometry.
Every promised element is built, and nothing else is promised on SR01:

- affine action/displacement → `def-affine-space-and-displacement`;
- Lorentz form + inertia → `def-lorentz-form-and-inertia`, causal classification
  and time orientation → `def-causal-classification-of-lorentz-vectors`,
  `def-time-orientation-and-future-causal-sets`;
- orthonormal-basis supplier → `lem-lorentz-form-has-orthonormal-basis` (imports
  published `thm-sylvesters-law-of-inertia`) plus the two-component timelike-cone
  lemma `lem-timelike-cone-has-two-convex-components`;
- events/inertial affine frames → `def-sr-affine-minkowski-model`,
  `def-inertial-frame-and-inertial-chart`, `lem-future-oriented-inertial-frames-exist`;
- M01 geometry → `lem-affine-minkowski-charts-form-a-smooth-atlas`,
  `lem-tangent-space-of-affine-minkowski-space-is-v`,
  `def-oriented-minkowski-volume-form`,
  `lem-volume-form-is-independent-of-the-oriented-frame`,
  `def-spatial-euclidean-structure-of-an-inertial-frame`,
  plus `def-lorentz-orthogonality-and-orthogonal-complement`;
- post spacetime/light/clock interpretation → the two S1 postulates
  `post-sr-inertial-covariance` and `post-sr-ideal-clocks-and-light`, minted
  separately as the design and splice require (SR02 must consume, not re-mint);
- def units → `def-sr-si-units-and-coordinate-conventions` (SI, c retained,
  x^0 = ct, natural-unit restoration clause, c declared empirical);
- status audit → `rem-sr-primitive-and-derived-status`.

The three stable ids (`def-sr-affine-minkowski-model`,
`post-sr-inertial-covariance`, `post-sr-ideal-clocks-and-light`) are homed here
exactly as `prose-scaffold-splice.json` and `expanded-item-inventory.json`
require. All 15 mathematical items have only mathematical deps; no item depends
on a physical item, so no mathematical item can require physics.

The B page supplies 8 leaf items (5 examples, 3 counterexamples) computed from
the A definitions: affine chart transition, causal classification, timelike vs
null orthogonal complement, non-closure of causal vectors, volume-form
component signs, η not an inner product, and the future/oriented frame
construction. Nothing outside the pair depends on them. This matches the
design's B role and budget (8; A uses 19 of a 24-slot budget, within cap with no
inventory element unbuilt).

Page metadata is unchanged from the plan: ids, titles, orders, category,
`library: physics`, companion pairing; the only Step-1 edits were the two
`items:` arrays (and the earlier owner-directed `requires` context repair, whose
16 published mathematical page ids all resolve below).

## Source coverage

Coverage checklist (current file) passes: `1 page(s), 32 harvested result(s),
0 error(s), 0 warning(s)`. The 32 rows are 24 per-source content rows plus the
8 canonical B rows. Three fetch-verified sources with exact load ranges: Crowell
*Special Relativity* §§1.3–1.4, Ch. 2 (signature conversion (+−−−) → (−+++)
noted); Carroll *Lecture Notes on GR* Ch. 1 pp. 2–7; Reall Part III GR §§2.1–2.2
(original DAMTP TLS failure recovered via byte-identical Wayback copy, recorded
in the coverage file). Dispositions: 6 included + 3 inline rows all land on
existing pair items; 10 deferred rows name later in-run pages
(`sr-lorentz-transformations`, `sr-observer-measurements`,
`sr-proper-time-comparisons`, orders 211/215/219); 5 reasoned out-of-scope rows
are motivational or GR/curvature material outside the declared global-chart
scope. No harvested source result needing an SR01 item is unmapped.

## Prerequisites (unmet-prerequisite screening)

- The pair's 27 items have 52 distinct `deps` targets: 35 published imported
  mathematical items in `items/` (all pinned in `research/math-imports.json`,
  all placed on published `library/` pages — e.g. `thm-sylvesters-law-of-inertia`,
  `def-definiteness-inertia-and-signature-data-over-the-reals`,
  `thm-unique-coordinates-with-respect-to-an-ordered-basis`,
  `def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space`)
  and 17 in-pair scaffold items; zero unresolved. No imported target is
  `proved_here: false`; every one is `status: published`.
- The A page `requires` 16 published mathematical pages; every one exists in
  `library/` as a published import.
- Consumer screening: 16 of the A-page ids are already consumed by 19 later SR
  pages and 5 EM pages in this run (e.g. `def-sr-affine-minkowski-model` by
  `sr-lorentz-transformations`, `em-primitives-and-postulates`,
  `em-expanded-analysis-prerequisites`); a run-wide scan of all 80 manifest
  pages found 0 unresolved dependency targets, so no consumer relies on an
  id this pair fails to plan.
- Result: **no unmet prerequisite found** — nothing is absent from both the
  published library and the current scaffold. Uncertain and not claimed: the
  internal proofs of the imported published suppliers were not re-audited here
  (they are read-only pinned imports and outside Step-3a scope); the finding
  is about presence, identity and publication status, which is what a scope
  review needs.

## Checks run (exact)

| Check | Command | Result |
|---|---|---|
| coverage | `node tools/physics-support/coverage-checklist.mjs research/physics-em-sr-40-2026-10-08-batch-1.coverage.json --require-destination` | 1 page, 32 harvested, 0 errors, 0 warnings |
| manifest deps | `node tools/physics-support/manifest-deps.mjs research/physics-em-sr-40-2026-10-08-batch-1.pages.json` | 27 items, 0 normalized, 0 errors |
| dep resolution / consumer scan | scripted scan of `items/`, `library/`, `math-imports.json`, all run manifests | 52/52 targets resolve; 0 unresolved run-wide; 16 ids consumed downstream |
| step 3a state | `node tools/physics-support/step3-decisions.mjs check --run physics-em-sr-40-2026-10-08 --phase scope` | this pair listed as `current scope review required` (expected; closed by this decision) |

## Decision

`sufficient` — the planned definitions (affine model, Lorentz form, causal and
orthogonality structure, frames/charts, geometry, volume form, units),
postulates and the 8 B worked examples/counterexamples adequately cover the
intended SR01 subject, with exact supplier resolution and no unmet
prerequisite. Recorded in
`research/physics-em-sr-40-2026-10-08-step3a-review-sr-spacetime-primitives.json`
(the record binds the current pair scope hash). No owner proceed/merge/enrich
action is requested for this pair.
