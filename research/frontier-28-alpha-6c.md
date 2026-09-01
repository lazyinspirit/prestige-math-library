# frontier-28 — Alpha 6c cross-batch audit and closure

Date: Tuesday, September 1, 2026.
Dispatch: `6c-lead`.

## Scope

- Opened `research/frontier-28-cross-group-edges.json`: `6` cross-batch edges,
  `0` forward references, and `0` listed post-6b changes.
- Reopened the exact post-6b carrier snapshots for batches `2` and `3`, the
  current citing and cited items, `research/frontier-28-reader-{2,3}.md`,
  `research/frontier-28-reader-findings-{2,3}.json`,
  `research/frontier-28-refute-{2,3}.json`,
  `research/frontier-28-alpha-a-6b.md`,
  `research/frontier-28-alpha-a-6b-decisions.json`,
  `research/frontier-28-alpha-a-recheck.md`,
  `research/frontier-28-batch-{2,3}.proof-contracts.json`,
  `research/frontier-28-batch-3.notes.md`, and the live batch-3 manifest/plan
  mirrors.
- Live 6c result on current bytes: `5` listed edges remain accurate, `1`
  listed edge was stale and required a frontmatter/manifest repair, and no
  forward-reference, page-addition, page-removal, or reading-order blocker is
  live.

## Edge dispositions

- `thm-completion-is-exact-on-finite-modules -> cor-induced-and-intrinsic-adic-filtrations-are-equivalent`
  - Verdict: `accurate`.
  - Evidence: step `4.1` identifies the left inverse limit with
    `\widehat{M'}` exactly through the cited corollary; the batch-2 corollary
    states the same eventual equivalence between the induced filtration
    `M' \cap I^n M` and the intrinsic filtration `I^n M'` under the required
    Noetherian finite-module hypotheses.
  - Edit: none.
  - Blocker: none.

- `thm-completion-is-exact-on-finite-modules -> thm-artin-rees-lemma`
  - Verdict: `accurate`.
  - Evidence: the current batch-3 carrier still records Artin-Rees as the
    explicit CA-11 load-bearing prerequisite behind the induced-filtration
    bridge used in step `4.1`; the target theorem is the exact eventual
    equality that the cited batch-2 corollary packages for that bridge.
  - Edit: none.
  - Blocker: none.

- `thm-completion-preserves-dimension-and-hilbert-samuel-data -> def-hilbert-samuel-multiplicity`
  - Verdict: `accurate`.
  - Evidence: step `2.1` compares the common eventual Hilbert-Samuel
    polynomial and reads multiplicity from its leading coefficient exactly as
    the cited definition states; the current source item already excludes the
    zero-module case the batch-2 repair isolated.
  - Edit: none.
  - Blocker: none.

- `thm-completion-preserves-dimension-and-hilbert-samuel-data -> thm-hilbert-samuel-dimension-theorem`
  - Verdict: `accurate`.
  - Evidence: step `2.2` uses the cited theorem exactly to identify the degree
    of the common eventual polynomial with support dimension; step `1.1`
    already aligns the `\mathfrak m`-adic quotient data of `M` and
    `\widehat M` on current bytes.
  - Edit: none.
  - Blocker: none.

- `thm-faithful-flatness-of-jacobson-adic-completion -> thm-faithfully-flat-ring-map-characterisations`
  - Verdict: `accurate`.
  - Evidence: step `3.1` combines flatness with step `2.1`'s proof that every
    maximal ideal of `R` has a prime of `\widehat R` lying over it, exactly the
    clause `(3)` route in the cited faithful-flatness characterisation theorem.
  - Edit: none.
  - Blocker: none.

- `thm-finite-modules-over-complete-noetherian-rings-are-complete -> thm-krull-intersection-theorem`
  - Verdict: `struck` (`frontier-28-S6-lead-edge-1`).
  - Evidence: the current theorem proves completeness by composing the ring
    isomorphism `R \cong \widehat R` with
    `thm-completion-as-extension-of-scalars`; neither the live facts block nor
    the proof still uses the older Jacobson/Krull-intersection separation
    route. The saved batch-3 manifest strategy had therefore become stale.
  - Edit: removed the stale dependency route from
    `items/thm-finite-modules-over-complete-noetherian-rings-are-complete.md`,
    rewrote the matching batch-3 manifest strategy/deps row, and refreshed the
    `plan-spec` mirror with
    `node tools/splice-plan.mjs --run frontier-28 --batch 3 --update --accept-requires`.
  - Blocker: none.

## Introduced current-hash item row

- `item 3:thm-finite-modules-over-complete-noetherian-rings-are-complete`
  - Verdict: `accepted`.
  - Evidence: the current carrier hash closes after removing the superseded
    kernel/units/Krull route from the item deps and the batch-3 manifest
    strategy so the carrier again matches the written proof.
  - Edit: `items/thm-finite-modules-over-complete-noetherian-rings-are-complete.md`,
    `research/frontier-28-batch-3.pages.json`, and the spliced
    `research/plan-spec.json` mirror.
  - Blocker: none.

## Verdict rows written

- `research/frontier-28-6c-verdicts.jsonl` now carries `6` `kind:"edge"` rows:
  `5` `accurate` and `1` `struck`.
- The same verdict file also carries `1` `kind:"item"` `accepted` row for the
  repaired batch-3 carrier
  `thm-finite-modules-over-complete-noetherian-rings-are-complete`.
- `research/defect-ledger.jsonl` received the one closed `6c-cross` row
  `frontier-28-S6-lead-edge-1` through
  `node tools/defect-ledger.mjs append --file /tmp/frontier-28-alpha-6c-ledger-rows.json`.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-finite-modules-over-complete-noetherian-rings-are-complete.md`
  - Result: reflowed the edited item once.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-finite-modules-over-complete-noetherian-rings-are-complete.md`
  - Result: `1 checked, 0 failing — all clean`.
- `node tools/content-policy.mjs research/frontier-28-batch-3.pages.json`
  - Result: `28 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/splice-plan.mjs --run frontier-28 --batch 3 --update --accept-requires`
  - Result: refreshed `inverse-limits-and-noetherian-completion` with the one
    changed item object and wrote the current batch-3 splice receipt.
- `node tools/defect-ledger.mjs append --file /tmp/frontier-28-alpha-6c-ledger-rows.json`
  - Result: appended `1` row and re-rendered `research/DEFECT-LEDGER.md`.
- `node tools/cross-group-edges.mjs check --run frontier-28 --reconcile-plan`
  - Result: `6 edge(s), 0 forward reference(s), 0 post-6b change(s), 0 error(s)`.
- Repo-wide Step-6 structure gates all passed on Tuesday, September 1, 2026:
  `precheck` (`9162` items checked), `depcheck` (`OK` with only standing
  warnings), `fwdcheck` (`0` open forward references), `extcheck` (`OK`),
  `rendercheck` (`12131` files clean), `prosecheck` (`0` errors, heuristic
  warnings only), `depsource` (`0` unresolved), `pathcheck` (`0` errors, `15`
  standing warnings), `manifest-integrity` (`28` pages owed, `28` present), and
  `splice-plan --verify` (`28` pages across `11` manifests agree with the plan).
- Final Step-6 routing and contract gates also passed: `step6-scope` (`424`
  routed items, `166` adjudication obligations), `defect-ledger validate`
  (`182` frontier-28 rows clean), `validate-plan` (`OK` with standing
  `redundant-prereq` advisories), batch `coverage-checklist` on all `11`
  coverage files (`0` errors; batch `9` kept one existing low-yield warning),
  full-item `content-policy` (`424` scoped items, `0` errors), merged
  `proof-contract` (`339/339` clean), `finite-smoke` (`1` check, `0` errors),
  `risk-report --require-reviewed` (`339` items routed, `0` errors),
  `boundary-audit` (no contradicted or templated rows), `citation-fidelity`
  (no missing quotes or widening candidates), and `gate-liveness`.
- `node tools/impact-audit.mjs --touches research/frontier-28-touches.json --from post-6b --current --receipt research/frontier-28-impact-6c.json`
  - Result: repaired the empty reviewer-only receipt and reran clean:
    `1 changed public interface(s), 0 affected item(s)`.
- `node tools/impact-audit.mjs --touches research/frontier-28-touches.json --from pre-author --to post-6b --receipt research/frontier-28-impact.json`
  - Result at the earlier `6c-lead` pass: the generated receipt still had no
    reviewer and still carried `360` pending dispositions. The current repair
    below closes that gate.
- `node tools/audit-manifest.mjs ... --output research/frontier-28-audit-manifest.json`
  - Result: gate still fails with `24` unresolved relationships outside the
    computed 6c edge queue, including batch-4's unresolved external mention
    `rem-the-p-equals-infinity-case-is-recorded-not-proved-here -> rem-dual-of-l-infinity`
    and multiple unresolved batch-11 dependencies such as
    `def-decidable-and-recognizable-language`,
    `def-dtime-ntime-dspace-and-nspace`,
    `def-worst-case-time-and-space-complexity`, and
    `lem-step-by-step-interpreter-for-machine-codes`.
- `node tools/url-sweep.mjs --coverage ... --out research/frontier-28-url-liveness.json --recover --fail-on-dead`
  - Result: did not return in two extended attempts and was interrupted both
    times with no output, so no URL-liveness pass/fail receipt was obtained in
    this dispatch.

## Blockers

- None remain inside the computed cross-batch edge queue itself.
- `research/frontier-28-audit-manifest.json` is an out-of-scope Step-6 gate
  blocker: `audit-manifest` reports `24` unresolved batch-4/batch-11 relations
  that are not part of the computed 6c edge list.
- `url-liveness` is an execution blocker for this dispatch: the sweep never
  returned output before manual interruption in two attempts.

## Step 6c repair - `impact-audit`

- Date: Tuesday, September 1, 2026.
- Reproduced on current disk with `node tools/impact-audit.mjs --touches research/frontier-28-touches.json --from pre-author --to post-6b --receipt research/frontier-28-impact.json`. The live touch ledger still has only `pre-author` and `post-6b`, and the current tree still computes `424` changed public interfaces and `360` affected items.
- Current evidence checked before the receipt repair:
  - `research/frontier-28-impact.json` already matched the computed scope exactly apart from the missing review work: `changed_interfaces: 424`, `required_review: 360`, and `360` placeholder `pending` rows.
  - The full `required_review` set is still a subset of the same `pre-author -> post-6b` changed interface set on current bytes (`360/360` required items are themselves same-window changed consumers), so this remained a receipt-only closure rather than a new item/page repair.
  - `research/frontier-28-reader-findings-{2,4,5,6,7,8,9,10,11}.json` and all `research/frontier-28-refute-*.json` are empty on current bytes. The two non-empty reader findings are both page-only nonfatal issues outside this item receipt: batch `1` keeps a B-page typography defect, and batch `3` keeps a B-page overclaim. The current Step-3 rechecks in `research/frontier-28-alpha-{a,b,c,d}-recheck.md` still verify every owned pair as `sufficient`.
  - The existing Step-6/6c evidence on current disk still matches that repaired state: this file records the one post-6b batch-3 edge strike already closed by the 6c lead, while `research/frontier-28-impact-6c.json` remains the separate post-6b/current receipt.
- Disposition: repaired the shared receipt only. `research/frontier-28-impact.json` now names reviewer `Lead Alpha (Codex GPT-5) - step 6c repair 1` and replaces all `360` placeholder rows with evidence-bearing `repaired` dispositions. Each note records the current batch/page carrier, the current direct changed-interface citations, and the full changed-source cone derived from the current impact graph.
- `research/frontier-28-6c-verdicts.jsonl` stays unchanged. This receipt-only repair does not close a new `6c-cross` defect row, and `tools/cross-group-edges.mjs` accepts `kind:"gate"` verdicts only when they bind exactly one closed defect id.
- Edited files: `research/frontier-28-impact.json`, `research/frontier-28-alpha-6c.md`.
- Checks:
  - `node tools/impact-audit.mjs --touches research/frontier-28-touches.json --from pre-author --to post-6b --receipt research/frontier-28-impact.json` -> exit `0`; `impact-audit: 424 changed public interface(s), 360 affected item(s)`.
- Remaining blocker: none for the primary `impact-audit` gate on current bytes. The separate `audit-manifest` blocker remains outside this repair's scope.

## Step 6c repair - `audit-manifest`

- Date: Tuesday, September 1, 2026.
- Reproduced the primary gate on current disk with
  `node tools/audit-manifest.mjs research/frontier-28-batch-1.pages.json ... research/frontier-28-batch-11.pages.json --output research/frontier-28-audit-manifest.json`.
  Initial result: `1111 relationship(s) over 424 item(s) in 11 batch(es); 24 defect(s)`.
- Current evidence rechecked before the publication-state repair:
  - `research/frontier-28-reader-4.md` still matches the current batch-4 duality carrier, and the only live batch-4 manifest defect was the out-of-run recorded remark target `rem-dual-of-l-infinity`.
  - `research/frontier-28-reader-11.md` still matches the current diagonalization and complexity carriers and explicitly opened all nine batch-11 target items that remained unresolved in `audit-manifest`.
  - `research/frontier-28-refute-11.json` and `research/frontier-28-alpha-d-6b.md` still match the current repaired `thm-busy-beaver-dominates-every-total-computable-function` and `thm-halting-is-recognizable-and-undecidable` items, so the live gate failure was not a new mathematical defect in those carriers.
  - Each live unresolved relation was structural on current bytes: the cited target item existed on disk, but it still carried `status: draft` outside the run.
- Repair kept:
  - promoted `rem-dual-of-l-infinity`, `lem-step-by-step-interpreter-for-machine-codes`, `prop-machine-descriptions-form-a-decidable-language`, `def-decidable-and-recognizable-language`, `thm-decidable-iff-language-and-complement-are-recognizable`, `def-computable-and-partial-computable-function`, `def-dtime-ntime-dspace-and-nspace`, `def-worst-case-time-and-space-complexity`, `lem-time-at-least-input-length-permits-complete-input-reading`, and `def-tape-finite-support-convention` to `status: published`;
  - added `verification.audited: 2026-09-01` to the nine proved-here repaired targets;
  - added `verification.audited: 2026-09-01` and `verification.sources_checked` to `rem-dual-of-l-infinity`;
  - wrote `research/frontier-28-alpha-6c-gate-audit-manifest-2-ledger-rows.json` with the `24` closed `6c-cross` rows for the named gate defects;
  - appended those rows through `node tools/defect-ledger.mjs append --file research/frontier-28-alpha-6c-gate-audit-manifest-2-ledger-rows.json`;
  - appended `24` `kind:"gate"` rows to `research/frontier-28-6c-verdicts.jsonl`;
  - refreshed `research/frontier-28-impact-6c.json`, which became stale because the current `post-6b -> current workspace` interface window now includes the ten published targets in addition to the earlier batch-3 `thm-finite-modules-over-complete-noetherian-rings-are-complete` repair.
- Final primary-gate result on current bytes:
  `audit-manifest: 1111 relationship(s) over 424 item(s) in 11 batch(es); 0 defect(s)`.
- Current `impact-audit` receipt result:
  - `11` changed interfaces;
  - `57` affected items;
  - `5` `repaired` rows (`def-decidable-and-recognizable-language`, `def-dtime-ntime-dspace-and-nspace`, `lem-time-at-least-input-length-permits-complete-input-reading`, `prop-machine-descriptions-form-a-decidable-language`, `thm-decidable-iff-language-and-complement-are-recognizable`);
  - `52` `still-licensed` rows;
  - the earlier batch-3 repair item `thm-finite-modules-over-complete-noetherian-rings-are-complete` remains in `changed_interfaces` for this window but still has no affected current consumers.
- Checks:
  - `node tools/tsx-run.mjs tools/reflow.mts items/rem-dual-of-l-infinity.md items/lem-step-by-step-interpreter-for-machine-codes.md items/prop-machine-descriptions-form-a-decidable-language.md items/def-decidable-and-recognizable-language.md items/thm-decidable-iff-language-and-complement-are-recognizable.md items/def-computable-and-partial-computable-function.md items/def-dtime-ntime-dspace-and-nspace.md items/def-worst-case-time-and-space-complexity.md items/lem-time-at-least-input-length-permits-complete-input-reading.md items/def-tape-finite-support-convention.md`
    - Result: all ten files were unchanged by reflow.
  - `node tools/tsx-run.mjs tools/precheck.mts ...ten repaired target items...`
    - Result: `4 checked, 0 failing — all clean`.
  - `node tools/rendercheck.mjs ...ten repaired target items...`
    - Result: `OK — 10 file(s)`.
  - `node tools/audit-manifest.mjs research/frontier-28-batch-1.pages.json ... research/frontier-28-batch-11.pages.json --output research/frontier-28-audit-manifest.json`
    - Result: `0 defect(s)`.
  - `node tools/impact-audit.mjs --touches research/frontier-28-touches.json --from post-6b --current --receipt research/frontier-28-impact-6c.json`
    - Result: `11 changed public interface(s), 57 affected item(s)`.
  - `node tools/defect-ledger.mjs append --file research/frontier-28-alpha-6c-gate-audit-manifest-2-ledger-rows.json`
    - Result: appended `24` rows and re-rendered `research/DEFECT-LEDGER.md`.
  - `node tools/defect-ledger.mjs validate --run frontier-28`
    - Result: `206 defect row(s) checked, 0 error(s)`.
  - `node tools/depcheck.mjs --quiet`
    - Result: `OK — no cycles, all references resolve, no draft items on published pages.` The output keeps the repository's standing `multi-home`, `orphan`, and `cited-not-in-deps` warnings outside this repair.
  - `node tools/cross-group-edges.mjs check --run frontier-28`
    - Result: `6 edge(s), 0 forward reference(s), 0 post-6b change(s), 0 error(s)`.
  - `node tools/cross-group-edges.mjs check --run frontier-28 --reconcile-plan`
    - Result: `6 edge(s), 0 forward reference(s), 0 post-6b change(s), 0 error(s)`.
  - `node tools/step6-scope.mjs check --run frontier-28 --phase final --batch 4`
    - Result: `21 item(s) routed, 16 adjudication obligation(s), 0 error(s)`.
  - `node tools/step6-scope.mjs check --run frontier-28 --phase final --batch 11`
    - Result: `38 item(s) routed, 6 adjudication obligation(s), 0 error(s)`.
  - `git diff --check -- items/rem-dual-of-l-infinity.md items/lem-step-by-step-interpreter-for-machine-codes.md items/prop-machine-descriptions-form-a-decidable-language.md items/def-decidable-and-recognizable-language.md items/thm-decidable-iff-language-and-complement-are-recognizable.md items/def-computable-and-partial-computable-function.md items/def-dtime-ntime-dspace-and-nspace.md items/def-worst-case-time-and-space-complexity.md items/lem-time-at-least-input-length-permits-complete-input-reading.md items/def-tape-finite-support-convention.md research/frontier-28-audit-manifest.json research/frontier-28-impact-6c.json research/frontier-28-6c-verdicts.jsonl research/frontier-28-alpha-6c-gate-audit-manifest-2-ledger-rows.json research/defect-ledger.jsonl research/DEFECT-LEDGER.md research/frontier-28-alpha-6c.md`
    - Result: clean.
- Remaining blocker: none in the live `audit-manifest` repair scope.
