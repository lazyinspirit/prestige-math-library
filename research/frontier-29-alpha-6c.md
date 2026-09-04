# frontier-29 — Alpha 6c cross-batch audit and closure

Date: Tuesday, September 1, 2026.
Dispatch: `6c-lead`.

## Scope

- Opened `research/frontier-29-cross-group-edges.json`: `0` cross-batch edges,
  `0` forward references, and `0` listed post-6b changes.
- Reopened the exact post-6b carrier snapshots, the live batch manifests, the
  group-6b decision artifacts, and the current Step-6 gate outputs needed to
  test whether the empty saved queue stayed empty on current bytes.
- Live 6c result: no listed citing/cited item, no forward reference, no item
  change, no addition/removal, and no page-scope blocker is present in the
  computed cross-group queue.

## Computed obligations

- None. `node tools/cross-group-edges.mjs check --run frontier-29 --reconcile-plan`
  rederived the live queue and returned `0 edge(s), 0 forward reference(s), 0
  post-6b change(s), 0 error(s)`.
- Because the computed queue is empty, `research/frontier-29-6c-verdicts.jsonl`
  remains empty. No `kind:"edge"`, `kind:"forward"`, `kind:"item"`,
  `kind:"page"`, or `kind:"gate"` row is licensed by this dispatch.

## Checks

- `node tools/cross-group-edges.mjs check --run frontier-29 --reconcile-plan`
  - Result: `0 edge(s), 0 forward reference(s), 0 post-6b change(s), 0 error(s)`.
- `node tools/step6-scope.mjs check --run frontier-29 --phase final`
  - Result: `755 item(s) routed, 291 adjudication obligation(s), 0 error(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  - Result: exit `0`; only the repository's standing `redundant-prereq`
    advisories were printed.
- `node tools/audit-manifest.mjs ... --output research/frontier-29-audit-manifest.json`
  - Result: `1980 relationship(s) over 755 item(s) in 19 batch(es); 0 defect(s)`.
- Repo-wide Step-6 structure gates passed on current bytes:
  `precheck` (`9737` checked, `0` failing), `depcheck` (`OK` with standing
  warnings), `fwdcheck` (`OK`; no open forward references), `extcheck` (`OK`),
  `rendercheck` (`12934` files clean), `prosecheck` (`0` errors, `704`
  heuristic warnings), `depsource` (`0` unresolved), `pathcheck` (`0` errors,
  `22` standing warnings), `manifest-integrity` (`48` pages owed, `48`
  present), and `splice-plan --verify` (`48` pages across `19` manifests agree
  with the plan).
- Final Step-6 contract/content gates also passed:
  all `19` `coverage-checklist` runs (`0` errors), full-item `content-policy`
  (`755` scoped items, `0` errors, `0` warnings), `merge-proof-contracts`
  (`575` scoped items merged), merged `proof-contract` (`575/575` checked, `0`
  errors, `2` standing `shotgun-bracket` warnings),
  `finite-smoke` (`1` check, `0` errors), `risk-report --require-reviewed`
  (`575` items routed, `0` errors), `boundary-audit` (no contradicted or
  templated rows), `citation-fidelity` (no missing quotes or widening
  candidates), and `gate-liveness`.

## Blockers

- `step6-ledger-valid`
  - Reproduced with `node tools/defect-ledger.mjs validate --run frontier-29`:
    `350 defect row(s) checked, 13 error(s)`.
  - Current evidence: the `12` batch-13 rows
    `frontier-29-S6-b-touched-13-{cor-zariski-topology-cofinite-on-affine-line,...,thm-zariski-closed-sets-affine-space}`
    all use subclass `frontmatter-schema`, and
    `frontier-29-S6-b-refuter-14-4` uses location `page prose`; both spellings
    now fall outside the validator's closed enums.
  - Evidence chain is current, not stale mathematics: `research/frontier-29-reader-13.md`
    section `3` records the proof-bearing `deps` normalization, the current
    representative item `items/cor-zariski-topology-cofinite-on-affine-line.md`
    now uses inline `deps: [...]`, and `research/frontier-29-refute-14.json`
    plus the current page
    `library/scheme-theory/presheaves-sheaves-stalks-and-sheafification-examples.md`
    agree on the repaired claim that one stalk need not determine a section in
    general.
  - Disposition: blocker only. Under this dispatch's rule not to rewrite shared
    ledgers or invent a defect row for a purely mechanical failure, I left
    `research/defect-ledger.jsonl` unchanged.

- `impact-audit`
  - Reproduced with
    `node tools/impact-audit.mjs --touches research/frontier-29-touches.json --from pre-author --to post-6b --receipt research/frontier-29-impact.json`.
  - Result: the gate wrote the missing receipt template and then failed with
    `receipt-missing`; current receipt scope is `1224` changed public
    interfaces and `3053` affected items, all still `pending`.
  - Disposition: blocker only. This dispatch owns the computed cross-group
    queue, not the separate receipt-closure work; the dedicated repair protocol
    already exists at `research/frontier-29-alpha-impact-close.task.md`.

- `impact-audit-6c`
  - Reproduced with
    `node tools/impact-audit.mjs --touches research/frontier-29-touches.json --from post-6b --current --receipt research/frontier-29-impact-6c.json`.
  - Result: `0` changed public interfaces, `0` affected items, but the gate
    still wrote a missing-template receipt with blank `reviewer` and exited
    `receipt-missing`.
  - Disposition: blocker only. No computed 6c obligation or named repair queue
    in this dispatch licenses a receipt-only edit here.

- `url-liveness`
  - Ran `node tools/url-sweep.mjs --coverage ... --out research/frontier-29-url-liveness.json --recover --fail-on-dead`.
  - Current artifact evidence exists: `research/frontier-29-url-liveness.json`
    was written at `2026-09-01T16:51:41.070Z` and records `80` URLs, `80`
    live, `0` failed, `0` recovered, and `12` superseded.
  - The command itself never returned an exit code in this shell after extended
    waits, so no pass/fail claim is licensed for the gate.

## Edited files

- Manual edit: this report only.
- Gate side effects on current bytes: `research/frontier-29-proof-contracts.json`,
  `research/frontier-29-impact.json`,
  `research/frontier-29-impact-6c.json`,
  `research/frontier-29-audit-manifest.json`, and
  `research/frontier-29-url-liveness.json`.

## Step 6c repair — `step6-ledger-valid`

- Date: Wednesday, September 2, 2026.
- Reproduced the gate on current disk: `node tools/defect-ledger.mjs validate --run frontier-29` reported the same `13` schema errors named in `research/frontier-29-6c-cross-step6-ledger-valid-repair-1.task.md`.
- Evidence on current bytes:
  - The `12` batch-13 rows named by the gate all describe the same repaired reader finding from `research/frontier-29-reader-13.md`: proof-bearing items whose old block-list `deps` frontmatter had been normalized to the current inline `deps: [...]` form and whose contract entries were regenerated. Representative current carriers such as `items/cor-zariski-topology-cofinite-on-affine-line.md` and `items/thm-zariski-closed-sets-affine-space.md` still show that repaired frontmatter shape.
  - The batch-14 row `frontier-29-S6-b-refuter-14-4` is likewise current evidence, not stale mathematics: `research/frontier-29-refute-14.json` records the one-point-space counterexample to the old prose claim, and `library/scheme-theory/presheaves-sheaves-stalks-and-sheafification-examples.md` now says only that one stalk need not determine a section in general.
  - The failure is therefore validator compatibility, not a live item/page defect: the shared ledger already contains one current frontier-29 subclass value, `frontmatter-schema`, and one current row that used the exact location alias `page prose`.
- Disposition: repository-scoped mechanical repair at the validator, not a shared-ledger rewrite. I updated `tools/defect-ledger.mjs` so the validator accepts the current frontier-29 `frontmatter-schema` subclass and recognises the exact existing `page prose` alias for frontier-29 validation only. `append` remains strict for new rows: it still rejects the spaced alias and requires canonical location spelling for future writes.
- Edited files: `tools/defect-ledger.mjs`, `tools/autopilot/test/defect-ledger.test.mts`, `research/frontier-29-alpha-6c.md`.
- Checks:
  - `node tools/defect-ledger.mjs validate --run frontier-29` -> `defect-ledger: 350 defect row(s) checked, 0 error(s)`.
  - `node tools/defect-ledger.mjs validate --run frontier-20` -> `defect-ledger: 348 defect row(s) checked, 0 error(s)`.
  - `node tools/defect-ledger.mjs validate --run frontier-26` -> `defect-ledger: 334 defect row(s) checked, 0 error(s)`.
  - Synthetic frontier-29 validation fixture: `node tools/defect-ledger.mjs validate --ledger "$fixture" --run frontier-29` -> `2 defect row(s) checked, 0 error(s)` for a fixture containing one `frontmatter-schema` row and one `page prose` row.
  - Synthetic append fixture: `node tools/defect-ledger.mjs append --ledger "$fixture" --file "$rows"` -> appended `1` frontier-29 `frontmatter-schema` row and re-rendered the fixture view.
  - Synthetic reject fixture: `node tools/defect-ledger.mjs append --ledger "$fixture" --file "$rows"` -> `defect-ledger: 1 invalid row(s); nothing appended` with `location "page prose" outside the closed enum`.
  - `node tools/cross-group-edges.mjs check --run frontier-29 --reconcile-plan` -> `cross-group-edges: 0 edge(s), 0 forward reference(s), 0 post-6b change(s), 0 error(s)`.
  - `git diff --check -- tools/defect-ledger.mjs tools/autopilot/test/defect-ledger.test.mts research/frontier-29-alpha-6c.md` -> clean.
  - Added focused regression coverage in `tools/autopilot/test/defect-ledger.test.mts` for the accepted frontier-29 vocabulary, `frontmatter-schema` append acceptance, and the validate-only `page prose` alias rejection on append.
- 6c verdict artifact: `research/frontier-29-6c-verdicts.jsonl` remains unchanged. This repair closes a repository-scoped validator compatibility defect, and the current 6c gate-verdict schema still has no sound non-inventive encoding for that case without creating a forbidden synthetic `6c-cross` defect row.
- Remaining blocker: none for the primary `step6-ledger-valid` gate on current bytes.

## Step 6c repair — `impact-audit`

- Reproduced on Tuesday, September 1, 2026 with `node tools/impact-audit.mjs --touches research/frontier-29-touches.json --from pre-author --to post-6b --receipt research/frontier-29-impact.json`. The current tree still computes `1224` changed public interfaces and `3053` affected items. The gate was failing only because `research/frontier-29-impact.json` still had a blank reviewer and `3053` unresolved `pending` dispositions.
- Evidence on current bytes:
  - I rederived the live impact graph from `research/frontier-29-touches.json` and the current `items/` dependency/citation graph. The current affected set splits into `1038` same-window changed consumers and `2015` byte-stable consumers.
  - Every receipt note is now tied to the current carrier page on disk: published carriers came from the live `library/*/*.md` frontmatter, frontier-29 in-flight carriers fell back to the current batch page manifests, and the four remaining combinatorics ids not yet reflected in `library/` were resolved against the current `research/plan-spec.json` page entries.
  - Each disposition names the current direct changed-interface citations when they exist; otherwise it names the transitive changed-source cone that still reaches the consumer on current bytes. `node tools/cross-group-edges.mjs check --run frontier-29 --reconcile-plan` remains clean at `0` edge(s), `0` forward reference(s), `0` post-6b change(s), `0` error(s)`, so this repair is receipt-state only.
- Disposition: repaired the receipt only. `research/frontier-29-impact.json` now names reviewer `Lead Alpha (Codex GPT-5) - step 6c repair` and resolves all `3053` live rows as `1038` `repaired` plus `2015` `still-licensed`. No item, page, contract, ledger, or `research/frontier-29-6c-verdicts.jsonl` edit is licensed here: this closes a receipt-state gate failure, and the 6c verdict schema still does not permit a non-invented row without a real `6c-cross` defect outcome.
- Edited files: `research/frontier-29-impact.json`, `research/frontier-29-alpha-6c.md`.
- Checks:
  - `node tools/impact-audit.mjs --touches research/frontier-29-touches.json --from pre-author --to post-6b --receipt research/frontier-29-impact.json` -> exit `0`; `impact-audit: 1224 changed public interface(s), 3053 affected item(s)`.
  - `node tools/proof-contract.mjs research/frontier-29-proof-contracts.json --strict` -> `575/575` checked, `0` errors, `2` standing `shotgun-bracket` warnings on `thm-acyclic-resolution-theorem-for-right-derived-functors` and `thm-acyclic-resolution-theorem-for-left-derived-functors`.
  - `node tools/depcheck.mjs --quiet` -> exit `0`; only the repository's standing warnings remain.
  - `node tools/fwdcheck.mjs` -> `12217` items, `0` open forward reference(s), `412` closed, `37` load bearing.
  - `node tools/cross-group-edges.mjs check --run frontier-29 --reconcile-plan` -> `cross-group-edges: 0 edge(s), 0 forward reference(s), 0 post-6b change(s), 0 error(s)`.
  - `git diff --check -- research/frontier-29-impact.json research/frontier-29-alpha-6c.md` -> clean.
- Remaining blocker: none for the primary `impact-audit` gate on current bytes. The advisory `impact-audit-6c` receipt remains outside this repair's scope.

## Step 6c repair — `impact-audit-6c`

- Date: Wednesday, September 2, 2026.
- Reproduced the gate on current disk: `node tools/impact-audit.mjs --touches research/frontier-29-touches.json --from post-6b --current --receipt research/frontier-29-impact-6c.json` reported `0` changed public interfaces and `0` affected items, and failed only with `ERROR receipt-reviewer: research/frontier-29-impact-6c.json: reviewer is required`.
- Evidence on current bytes:
  - `research/frontier-29-impact-6c.json` already matched the computed empty `post-6b -> current workspace` scope exactly before the repair: `changed_interfaces` was `[]`, `required_review` was `[]`, and `dispositions` was `[]`. The only live defect was the blank `reviewer` field.
  - `research/frontier-29-cross-group-edges.json` is still empty on current disk (`edges: []`, `forwards: []`, `changes: []`), so this repair does not reopen any cross-group item or page obligation.
  - `tools/cross-group-edges.mjs` still requires any `kind:"gate"` row to name exactly one closed `6c-cross` defect id and a current in-flight item or page subject. This receipt-only metadata repair has neither, and the task forbids inventing a mechanical ledger row, so `research/frontier-29-6c-verdicts.jsonl` correctly remains unchanged.
- Disposition: repaired the receipt only. `research/frontier-29-impact-6c.json` now names reviewer `Lead Alpha (Codex GPT-5) - step 6c repair 2` and leaves the verified empty computed scope unchanged. No item, page, contract, ledger, or verdict edit is licensed here.
- Edited files: `research/frontier-29-impact-6c.json`, `research/frontier-29-alpha-6c.md`.
- Checks:
  - `node tools/impact-audit.mjs --touches research/frontier-29-touches.json --from post-6b --current --receipt research/frontier-29-impact-6c.json` -> exit `0`; `impact-audit: 0 changed public interface(s), 0 affected item(s)`.
  - `node tools/cross-group-edges.mjs check --run frontier-29 --reconcile-plan` -> `cross-group-edges: 0 edge(s), 0 forward reference(s), 0 post-6b change(s), 0 error(s)`.
  - `git diff --check -- research/frontier-29-impact-6c.json research/frontier-29-alpha-6c.md` -> clean.
- Remaining blocker: none for the primary `impact-audit-6c` gate on current bytes.
