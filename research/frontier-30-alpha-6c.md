# frontier-30 — Alpha 6c cross-batch audit and closure

Date: Saturday, September 5, 2026.
Dispatches: `6c-lead`, then `6c-gate-audit-manifest-3`.
Run: `frontier-30`

## Scope

- Recomputed `research/frontier-30-cross-group-edges.json`: `0` cross-batch
  edges, `0` forward references, and one post-6b item change.
- Reopened the exact post-6b carrier snapshots and current batch manifests, and
  rederived the current reader/refuter/group-6b state with
  `node tools/step6-scope.mjs check --run frontier-30 --phase final`, which
  reported `694` routed items, `259` adjudication obligations, and `0` errors
  on current bytes.
- Live 6c result: the only computed obligation is the repaired batch-4 item
  carrier `rem-choice-strength-of-hahn-banach`; no citing/cited edge, forward
  reference, addition/removal, or page-scope blocker is present.

## Computed obligations

- `node tools/cross-group-edges.mjs check --run frontier-30` rederived the
  queue and returned `0 edge(s), 0 forward reference(s), 1 post-6b change(s),
  0 error(s)`.
- The current queue is closed by the `kind:"item"` accepted-carrier row for
  batch 4 and the `kind:"gate"` `confirmed_nonfatal` row for the associated
  audit-manifest repair in `research/frontier-30-6c-verdicts.jsonl`.

## Checks

- `node tools/cross-group-edges.mjs check --run frontier-30`
  - Result: `0 edge(s), 0 forward reference(s), 1 post-6b change(s), 0 error(s)`.
- `node tools/step6-scope.mjs check --run frontier-30 --phase final`
  - Result: `694 item(s) routed, 259 adjudication obligation(s), 0 error(s)`.
- `node tools/defect-ledger.mjs validate --run frontier-30`
  - Result: `294 defect row(s) checked, 0 error(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  - Result: exit `0`; only the repository's standing `redundant-prereq`
    advisories were printed.
- Repo-wide Step-6 structure gates passed on current bytes:
  `precheck` (`10264` checked, `0` failing), `depcheck` (`OK` with standing
  warnings), `fwdcheck` (`12911` items, `0` open forward references),
  `extcheck` (`153` recorded-not-proved, `604` resting, `OK`),
  `rendercheck` (`13676` files clean), `prosecheck` (`0` errors, `710`
  heuristic warnings), `depsource` (`0` unresolved), `pathcheck` (`11` pathway
  files checked, `0` errors, `31` warnings), `manifest-integrity` (`48` pages
  owed, `48` present), and `splice-plan --verify` (`48` pages across `20`
  manifests agree with the plan).
- All `20` Step-6 coverage receipts passed individually. `gate-liveness`
  confirmed live nonempty scope on current bytes: `finite-smoke 1`,
  `proof-contract 527`, `coverage-checklist 1002`, `precheck 10264`.
- `node tools/merge-proof-contracts.mjs --level frontier-30 ...`
  - Result: wrote `research/frontier-30-proof-contracts.json` with `527`
    scoped items from `20` batch contracts.
- `node tools/content-policy.mjs research/frontier-30-batch-*.pages.json`
  - Result: `694 scoped item(s), 0 error(s), 0 warning(s)`.
- Final Step-6 contract gates also passed:
  `proof-contract --strict` (`527/527` checked, `0` errors, `1` standing
  `shotgun-bracket` warning on
  `lem-clopen-subset-gives-idempotent-decomposition`), `finite-smoke` (`1`
  check, `0` errors), `risk-report --require-reviewed` (`527` items routed,
  `0` errors), `boundary-audit` (no contradicted or templated rows),
  `citation-fidelity` (`1095` citations checked, no missing quotes or widening
  candidates), and `gate-liveness`.

## Primary gate repair

- `impact-audit`
  - Reproduced with
    `node tools/impact-audit.mjs --touches research/frontier-30-touches.json --from pre-author --to post-6b --receipt research/frontier-30-impact.json`.
  - Result: `694` changed public interfaces and `616` affected items on current
    bytes.
  - Current evidence:
    - every affected row is a same-window changed in-flight item:
      `required_review ⊆ changed_interfaces` with `616/616` rows in that class
      and `0` untouched published consumers;
    - each repaired row now carries an item-specific note keyed to its current
      batch/page carrier and current changed-source cone rederived from disk;
    - at that repair's close, the computed 6c queue was empty; the later
      audit-manifest repair below contributes the sole current batch-4 item
      change and does not alter the impact-audit evidence.
  - Disposition: repaired the receipt only.
    `research/frontier-30-impact.json` now names reviewer
    `Lead Alpha (Codex GPT-5) - step 6c repair` and resolves all `616` live
    rows as `repaired`. The later audit-manifest repair adds the current
    `kind:"gate"` and `kind:"item"` rows described below.
  - Remaining blocker: none for the primary `impact-audit` gate on current
    bytes.

## Advisory context

- `impact-audit-6c`
  - Reproduced with
    `node tools/impact-audit.mjs --touches research/frontier-30-touches.json --from post-6b --current --receipt research/frontier-30-impact-6c.json`.
  - Result: `0` changed public interfaces, `0` affected items, but
    `research/frontier-30-impact-6c.json` was still written with blank
    `reviewer` and the gate exited `receipt-missing`.
  - Disposition: blocker only. This is a receipt-only metadata defect with no
    computed 6c subject and no licensed verdict row.

- `audit-manifest`
  - Reproduced with
    `node tools/audit-manifest.mjs research/frontier-30-batch-1.pages.json ... research/frontier-30-batch-20.pages.json --output research/frontier-30-audit-manifest.json`.
  - Result: `1886` relationships over `694` items in `20` batches; `0`
    defects.
  - Evidence and disposition:
    - The named task edge
      `thm-proper-inclusions-in-the-chomsky-hierarchy -> thm-machine-acceptance-is-ce-complete`
      is now correctly classified `published-backward`: its target is carried
      by the published `computable-reductions-and-rices-theorem` page.
    - The same classifier correction resolves the other 66 equivalent false
      positives: a published page is a valid public home even when its legacy
      item frontmatter still says `draft`. The new regression cases preserve
      the opposite rule: a draft page does not make a draft item published.
    - The one real defect was the batch-4 remark's dependency on the draft
      deferred choice-strength note. The prose only points readers to that
      separate ledger, so the dependency was removed while the wikilink stays.
      The item, batch manifest, and plan metadata now agree. It is recorded as
      nonfatal row `frontier-30-S6-alpha-6c-gate-01` and has current-hash
      `gate` and `item` verdicts.
  - Remaining blocker: none. The subprocess-spawning unit-test harness is
    denied by this workspace sandbox (`EPERM`); TypeScript typecheck, the
    focused item checks, and the live manifest gate all pass.

- `url-liveness`
  - Ran
    `node tools/url-sweep.mjs --coverage research/frontier-30-batch-1.coverage.json ... research/frontier-30-batch-20.coverage.json --out research/frontier-30-url-liveness.json --recover --fail-on-dead`.
  - Current artifact evidence exists:
    `research/frontier-30-url-liveness.json` was written with
    `generated_at: 2026-09-04T17:13:42.401Z` and records `98` URLs, `98` live,
    `0` failed, `0` recovered, and `6` superseded.
  - The command itself never returned an exit code in this shell after repeated
    waits, so no clean pass/fail claim is licensed for the gate.

## Edited files

- Cycle-3 edits: `tools/audit-manifest.mjs`, its regression test,
  `items/rem-choice-strength-of-hahn-banach.md`,
  `research/frontier-30-batch-4.pages.json`, `research/plan-spec.json`,
  `research/frontier-30-cross-group-edges.json`,
  `research/frontier-30-6c-verdicts.jsonl`, and the append-only defect ledger.
- Current verdicts: the `kind:"gate"` row owns the one nonfatal 6c-cross
  ledger row; the corresponding `kind:"item"` row accepts the current
  repaired carrier with `defect_ids: []`.
- Existing gate side-effect artifacts on current bytes:
  `research/frontier-30-proof-contracts.json`,
  `research/frontier-30-impact-6c.json`,
  `research/frontier-30-audit-manifest.json`, and
  `research/frontier-30-url-liveness.json`.

## Cycle 4 — `impact-audit-6c` receipt repair

- Reproduced the primary gate with
  `node tools/impact-audit.mjs --touches research/frontier-30-touches.json --from post-6b --current --receipt research/frontier-30-impact-6c.json`.
  Before the repair it computed one changed public interface,
  `rem-choice-strength-of-hahn-banach`, and one required consumer,
  `rem-hahn-banach-open-choice-questions`, while the receipt still declared
  both lists empty and supplied no disposition.
- Evidence: the current consumer declares that remark in `deps` and retains
  its in-body wikilink, but says it is an established ledger and labels the
  two questions as local signposts. Its current coverage row marks it
  non-load-bearing; Reader 4 and Refuter 4 both opened the consumer and
  reported no finding. The direct citation is therefore still licensed.
- Disposition and edit: updated only
  `research/frontier-30-impact-6c.json` with the recomputed interface and
  impact scopes and a `still-licensed`, item-specific review disposition.
  Recorded the nonfatal audit-coverage defect
  `frontier-30-S6-alpha-6c-gate-02` in the append-only ledger and its
  current-carrier `kind:"gate"` verdict. The existing current-hash
  `kind:"item"` row already closes the sole computed post-6b item change.
- Remaining blocker: none for `impact-audit-6c`; no item, page, order,
  manifest, or proof-contract edit was warranted.
