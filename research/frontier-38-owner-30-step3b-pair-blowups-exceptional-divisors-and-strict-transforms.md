# Step 3b dispatch report — `blowups-exceptional-divisors-and-strict-transforms`

- Run `frontier-38-owner-30`, role `alpha-high`, label
  `step3b-pair-blowups-exceptional-divisors-and-strict-transforms-04a51dde9c62fed5`.
- Pair: A `blowups-exceptional-divisors-and-strict-transforms` (order 366.091) /
  B `blowups-exceptional-divisors-and-strict-transforms-examples` (order 366.092),
  batch 2, category `scheme-theory`.
- Inventory: **60 items** — 48 A items and 12 B items (the design's 32 A + 12 B
  plus 16 owner-authorized local prerequisites) — and both library pages. No
  direct in-run prerequisite pairs. Cross-batch consumers: batches 26
  (`intersection-products-on-smooth-projective-surfaces`) and 27
  (`point-blowup-resolution-on-arbitrary-regular-surfaces`); this page is their
  supplier, their owners own their rows.

## Entry state (open obligations)

1. Author all 60 item files in the dispatch's dependency-level order (60 files
   absent at entry) and both `library/scheme-theory/...` pages (absent at entry).
2. Refresh `research/frontier-38-owner-30-batch-2.pages.json` rows
   (dependency_level/deps) only if the actual arguments require it; keep every
   sibling row untouched.
3. Write `research/frontier-38-owner-30-batch-2.proof-contracts.json`
   (strict; all 60 items in scope, all 8 boundary rows per item).
4. Record current Step-3b item decisions
   (`research/frontier-38-owner-30-step3b-review-<id>.json`) in dependency order
   after all content and manifest rows are final.
5. Checkpoint `research/frontier-38-owner-30-batch-2.notes.md` (append a Step 3b
   checkpoint; preserve sibling rows).
6. Recheck applicable pre-splice findings and the batch-2 coverage file; report
   plan mismatches for Step 4 without hiding unresolved dependencies.

## Blocks and lane reports

| lane | items | helper report |
|---|---|---|
| A (lead) | levels 0 | this report |
| B | levels 1–2, then 6 | `research/frontier-38-owner-30-step3b-helper-lane-b.md` |
| C | level 3, then 7 | `research/frontier-38-owner-30-step3b-helper-lane-c.md` |
| D | levels 4–5, then 8–9 | `research/frontier-38-owner-30-step3b-helper-lane-d.md` |

## Checkpoint

- 2026-10-03 (entry): Step 3a scope decision for the pair is current and
  `sufficient` (`research/frontier-38-owner-30-step3a-review-blowups-...json`,
  rechecked with `node tools/step3-decisions.mjs check --run frontier-38-owner-30
  --phase scope`, `closed: true`). Statements are frozen by that decision; only
  deps and non-scope fields may move.
- Local toolchain note: `tools/proof-layout.mjs` needs the app checkout's tsx
  loader; in this sandbox it runs as
  `PRESTIGE_APP_DIR=/tmp/f38-app node tools/proof-layout.mjs ...`. Precheck
  requires `proof_strategy:` to be a single bare token and demands the
  dependency-layer canonical step numbering (major number = 1 + max major number
  of cited steps, terminal ∎ step in the last layer); all lanes were told.
- Lane A (lead, level 0) complete: `def-contact-order-regular-components`,
  `def-rees-algebra-ideal-sheaf`, `lem-affine-blowup-algebra-properties`,
  `lem-exceptional-fiber-line-bundle-euler-characteristic`,
  `lem-projection-formula-invertible-twist`,
  `lem-regular-sequence-associated-graded-polynomial`,
  `thm-normalization-reduced-curve-exists-finite` — all authored; precheck,
  rendercheck and proof-layout clean; strict contract fragment
  `research/frontier-38-owner-30-step3b-contracts-lane-a.json` 0 errors;
  current `accept` decisions recorded for all seven.
- Manifest row deps for those seven rows refreshed to the item-file deps
  (`manifest-deps` 0 errors). Dep changes: `lem-exceptional-...` dropped
  `lem-proper-cohomology-field-extension` (the base-change route does not
  compute the k-dimension of the κ-vector space; the proof uses the κ-vector
  space structure instead) and added
  `def-sheaf-cohomology-derived-global-sections`, `def-coherent-module-scheme`,
  `thm-projective-space-proper-over-base`;
  `lem-projection-formula-invertible-twist` added
  `def-euler-characteristic-coherent-sheaf`,
  `thm-pullback-pushforward-module-adjunction`,
  `cor-projective-cohomology-finite-dimensional-field` and dropped the unused
  `lem-invertible-sheaf-dual-tensor-inverse`;
  `thm-normalization-...` dropped the unused
  `lem-finite-normalization-compatible-with-principal-opens`,
  `lem-curve-closed-subsets-finite`, `thm-affine-quasi-coherent-equivalence` and
  added `def-coherent-module-scheme`, `def-normal-noetherian-ring`,
  `cor-finite-type-algebra-over-a-principal-ideal-domain-is-noetherian`,
  `cor-reduced-quotient-by-the-nilradical`,
  `thm-height-one-localisation-of-normal-noetherian-domain-is-dvr`,
  `thm-irreducible-components-and-minimal-primes`,
  `thm-noetherian-ring-has-finitely-many-minimal-primes`,
  `thm-one-dimensional-regular-local-rings-are-dvrs`.
- Both library pages written (`library/scheme-theory/blowups-...md` and its
  `-examples` companion).
- Lanes B (levels 1-2 then 6), C (level 3 then 7) and D (levels 4-5 then 8-9)
  are running with their own helper reports and contract fragments; their
  checkpoints are in `research/frontier-38-owner-30-step3b-helper-lane-{b,c,d}.md`.

## Open obligations at handoff

- All 60 items are authored, registered on both pages, mirrored into the
  batch-2 manifest rows, and carry current `accept` item decisions
  (`step3-decisions check --phase final` reports no work for either page).
- Contract: `research/frontier-38-owner-30-batch-2.proof-contracts.json`
  (60/60 scoped, `--strict` 0 errors; boundary-audit 0 templates/0
  contradictions; citation-fidelity clean; risk-report and finite-smoke clean
  for this batch).
- Checks actually run at handoff (batched explicit paths): `precheck.mts` 50
  proof items checked / 0 failing (10 definitions and remarks are n/a),
  `rendercheck.mjs` OK for all 60 files, `proof-layout.mjs` 60 items / 266
  steps / 0 defects, `manifest-deps` 0 errors, `item-dependency-levels` 0
  errors, `coverage-checklist --require-destination` 0 errors/0 warnings,
  `content-policy.mjs` item mode 0 errors.
- Added suppliers: none (no new IDs; the 48 A + 12 B scaffold inventory was
  complete). Removed/replaced deps are mirrored in the batch-2 manifest rows.
- Published concern (owner-held, in flight): the published item
  `thm-affine-closed-immersions-quotient-rings` was touched by a drifting
  helper lane during this dispatch; at handoff its `itemHashGuard`
  `c8f6c6ba41257a27a7d51216ebc13519a53524f37286a3a588dd9db4833ff687` does not
  match the recorded repair receipt's `content_sha256`
  `e7bb39a4328edc42e9a08ae5fe05ead4ba6c5abc6509a3e6a0580cdbf9f58859`, and the
  owner-lane inlining artifacts postdate the receipt. This pair's lead edited
  neither the item nor any ledger; an owner-side byte/receipt reconciliation is
  required. Confidence: confirmed hash mismatch; the resulting check state is
  `published-local-repair` invalid until reconciled.
- Consumer pairs (batches 26/27) still hold escalated decisions naming this
  page's items as unfinished suppliers; every named supplier is now authored,
  so their owners can re-examine and refresh those decisions. This pair's
  ledger rows for those edges need no change.
- Items remain `status: draft` (publication is a later stage); nothing was
  published, pushed or deployed by this dispatch.
- B-leaf repairs inside this pair (depcheck `b-leaf-content`): the load-bearing
  dependencies on the examples-page items `ex-cohomology-o-d-projective-line-all-d`
  and `ex-skyscraper-sheaf-acyclic` were replaced by complete local arguments
  from A-page suppliers —
  `lem-exceptional-fiber-line-bundle-euler-characteristic` now reads the
  dimensions of $H^0,H^1$ off
  `thm-cohomology-projective-space-twisting-sheaves` (its two explicit
  descriptions of the degree parts), and
  `lem-normalization-defect-euler-and-lengths` now derives flasqueness of a
  skyscraper sheaf from `def-skyscraper-sheaf-abelian-group` and
  `def-flasque-sheaf` and applies `thm-flasque-sheaves-acyclic`. Both items
  were rechecked (precheck/rendercheck/proof-layout) and their contract
  entries regenerated; the batch contract revalidated strict-clean and all
  affected decisions were re-recorded. The remaining repo-wide
  `b-leaf-content` findings at handoff belong to other pairs
  (`ex-pontryagin-dual-of-the-integers-is-the-circle`,
  `lem-pointwise-limits-of-characters-are-characters`,
  `thm-compact-groups-have-discrete-duals-and-discrete-groups-have-compact-duals`,
  all on `ex-discrete-and-indiscrete-topologies`).

## Checkpoint — 2026-10-03 (3b authoring complete, artifacts on disk)

All 60 item files and both library pages are on disk, and the pair's 3b
carrier set is complete. Actual lanes (the C/E slices were taken over after
they produced no item files):

| lane | slice | report |
|---|---|---|
| A (lead) | levels 0 | this report |
| B | levels 1-2, then 6 (part) | `...-step3b-helper-lane-b.md` |
| F | levels 3 and 6 | `...-step3b-helper-lane-f.md` |
| D | levels 4-5 and 8-9 | `...-step3b-helper-lane-d.md` |
| G | level 7 | `...-step3b-helper-lane-g.md` |

- The final session authored the last six level-6 items
  (`lem-blowup-multiplicity-euler-characteristic-drop`,
  `rem-blowup-does-not-mean-delete-point`,
  `thm-blowup-closed-immersion-transform-universal`,
  `thm-blowup-separates-plane-curve-tangent-directions`,
  `thm-blowup-smooth-surface-point-charts`, `ex-blowup-rational-map-p1`); all
  pass precheck/rendercheck/proof-layout.
- Lane F's contract fragment now covers 21 items
  (`research/frontier-38-owner-30-step3b-contracts-lane-f.json`, strict: 0
  errors). Lane G's fragment revalidated strict (7/7) now that its last
  quoted supplier exists; lane D's quotes were re-extracted against the
  current supplier text during the merge. The merged
  `research/frontier-38-owner-30-batch-2.proof-contracts.json` covers 60/60
  items with 0 errors, 0 warnings.
- Manifest rows synced: deps taken from the item frontmatter
  (`manifest-deps` 0 errors) and dependency levels recomputed
  (`item-dependency-levels check --run frontier-38-owner-30`: 818 items,
  maximum level 16). Five level rows moved: the tangent-directions theorem
  6 to 7, the two strict-transform examples 7 to 8,
  `cex-blowup-arbitrary-base-change-failure` 3 to 4 and
  `cex-normalization-not-blowup-and-blowup-not-normalization` 8 to 9.
- Pair battery over the 60 dispatch-order files: precheck 50 checked /
  0 failing, rendercheck OK, proof-layout 266 steps / 0 defects;
  `coverage-checklist ... --require-destination` 0 errors, 0 warnings;
  `content-policy .../batch-2.pages.json` 60 items / 0 errors / 0 warnings.
- `checkPairAuthorArtifacts` for
  `blowups-exceptional-divisors-and-strict-transforms`: 64 required
  carriers, `ok: true`, `missing: []`.
- Lane G's single content-policy finding was fixed by adding
  `generation.role: example` to `items/ex-empty-center-blowup-identity.md`.
- Lane H is still live after being told to stand down; late in the session it
  wrote a duplicate contract fragment
  (`research/frontier-38-owner-30-step3b-contracts-lane-h-lead.json`, ten
  level-6 ids, one entry stale) and edited `/tmp/f38/merge_contracts.py` to
  include it, which silently clobbered one lane-F entry. Lane F left the
  stray file in place (deletions are owner-held), repaired the merge to keep
  the first occurrence per id, and re-verified the merged contract at 60/60
  strict. Anyone re-merging must keep first-wins or re-check
  `ex-blowup-rational-map-p1`'s entry.

Remaining before the engine can close the pair's 3b coverage: the lead's
dependency-ordered item decisions (`step3b-review-<id>.json`) over the final
content, then the owner-approved resume. The run is owner-paused; this
session made no `.autopilot` change, recorded no item decision and edited no
published item or library page.
