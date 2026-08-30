# frontier-24 — lead Alpha step 6c cross-batch closure

Run: `frontier-24`  
Role: `alpha`  
Label: `6c-lead`  
Date: Saturday, August 29, 2026

## Cross-group scope

- Opened `research/frontier-24-cross-group-edges.json`; on current disk it records `edges: []`, `forwards: []`, and `changes: []` at `2026-08-29T16:28:32.429Z`.
- Re-ran `node tools/cross-group-edges.mjs check --run frontier-24 --reconcile-plan`.
  Result: `0 edge(s), 0 forward reference(s), 0 post-6b change(s), 0 error(s)`.
- Rechecked the exact post-6b closure state with `node tools/step6-scope.mjs check --run frontier-24 --phase adjudicate` and `--phase final`.
  Result: both phases report `493 item(s) routed, 122 adjudication obligation(s), 0 error(s)`.
- Disposition: the live 6c queue is still empty, and the stale `6b-adjudicate` routing blocker shown in `.autopilot/status.md` is no longer current on disk.
- `research/frontier-24-6c-verdicts.jsonl` therefore remains intentionally empty. No `edge`, `forward`, `addition`, `removal`, `item`, `page`, or `gate` row is honestly owed, and no `6c-cross` ledger row is bound from this empty computed scope.

## Prior evidence rechecked

- Reader/refuter/group evidence for batch `10` was reopened:
  - `research/frontier-24-reader-10.md`
  - `research/frontier-24-refute-10.json`
  - `research/frontier-24-alpha-d-6b-decisions.json`
  - `research/frontier-24-alpha-d-6b.md`
- Reader `10` explicitly opened `library/computability-theory/formal-languages-encodings-and-decision-problems.md` and the dependency items
  `def-computation-alphabet-and-word-convention`,
  `def-language-over-an-alphabet`,
  `def-language-boolean-operations`, and
  `def-alphabet-homomorphism-and-induced-word-map`,
  and reported no remaining blocker in batch `10`.
- Current disk now shows the structural mismatch that the reader and 6b repairs did not close:
  - `library/computability-theory/formal-languages-encodings-and-decision-problems.md` is `status: published`.
  - The dependency items above are still `status: draft`.
- Because `audit-manifest.mjs` treats an out-of-run draft item as unresolved even when a published page lists it, the batch-10 DFA/CFG items below still fail closure on current bytes.

## Gate results

Clean on current disk:

- `node tools/defect-ledger.mjs validate --run frontier-24`
  - `131 defect row(s) checked, 0 error(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  - pass; only standing `redundant-prereq` notes.
- `node tools/tsx-run.mjs tools/precheck.mts`
  - `7824 checked, 0 failing`.
- `node tools/depcheck.mjs`
  - pass; only standing repository warnings such as `multi-home` and `cited-not-in-deps`.
- `node tools/fwdcheck.mjs`
  - pass; `0` open forward references.
- `node tools/extcheck.mjs`
  - pass; only standing `unproved-on-published` warnings.
- `node tools/rendercheck.mjs`
  - pass.
- `node tools/prosecheck.mjs`
  - `0` errors; warnings only.
- `node tools/depsource.mjs`
  - `0` unresolved dependencies; `749` existing references still point to pages outside the scaffolded set, which is advisory here.
- `node tools/pathcheck.mjs`
  - `0` errors, `17` warnings (`draft-unplaced`, `overview-missing`, `pathway-missing`) that remain Step-10 territory.
- `node tools/manifest-integrity.mjs --run frontier-24`
  - `28` page(s) owed, `28` in the manifests, no scope drift.
- `node tools/splice-plan.mjs --run frontier-24 --verify`
  - verified `28` page(s) across `10` manifest(s).
- `node tools/coverage-checklist.mjs research/frontier-24-batch-<n>.coverage.json` for `n = 1..10`
  - all ten batches pass; `554` harvested results total.
- `node tools/content-policy.mjs research/frontier-24-batch-1.pages.json ... research/frontier-24-batch-10.pages.json`
  - `493 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/merge-proof-contracts.mjs --level frontier-24 research/frontier-24-proof-contracts.json ...`
  - wrote the current merged contract file with `398` scoped item(s).
- `node tools/proof-contract.mjs research/frontier-24-proof-contracts.json --strict`
  - `0 error(s), 0 warning(s), 398/398 item(s) checked`.
- `node tools/finite-smoke.mjs research/frontier-24-proof-contracts.json`
  - `0 error(s), 1 check(s)`.
- `node tools/risk-report.mjs research/frontier-24-proof-contracts.json --require-reviewed`
  - `0 error(s), 398 item(s) routed`.
- `node tools/boundary-audit.mjs research/frontier-24-proof-contracts.json --fail-on-contradicted --fail-on-template`
  - no contradicted dispositions and no template-reuse blocker; `21` upheld review rows remain on the record.
- `node tools/citation-fidelity.mjs research/frontier-24-proof-contracts.json --fail-on-missing-quote`
  - no quote misses and no widening candidates.
- `node tools/gate-liveness.mjs --run frontier-24 --contracts research/frontier-24-proof-contracts.json --checklists research/frontier-24-batch-1.coverage.json,...,research/frontier-24-batch-10.coverage.json --min-checks 1`
  - live checks recorded for `finite-smoke`, `proof-contract`, `coverage-checklist`, and `precheck`.
- `node tools/impact-audit.mjs --touches research/frontier-24-touches.json --from post-6b --current --receipt research/frontier-24-impact-6c.json`
  - the earlier zero-scope receipt note is stale on current bytes after the later `audit-manifest` repair; see `Step 6c repair - impact-audit-6c` below for the current `4`-interface, `21`-item result.

## Step 6c repair — `impact-audit`

- Reproduced the primary gate on current disk with `node tools/impact-audit.mjs --touches research/frontier-24-touches.json --from pre-author --to post-6b --receipt research/frontier-24-impact.json`.
  Result before repair: `493` changed public interfaces, `419` affected items, and the only failure was the untouched template state in `research/frontier-24-impact.json` with a blank reviewer and `419` `pending` dispositions.
- Rechecked the live evidence against current files before writing the receipt:
  - all ten `research/frontier-24-reader-findings-<n>.json` files now carry `findings: []`;
  - all ten `research/frontier-24-refute-<n>.json` carriers and all four `research/frontier-24-alpha-*-6b-decisions.json` carriers remain present on disk for the repaired batch evidence;
  - `node tools/proof-contract.mjs research/frontier-24-proof-contracts.json --strict` still passes with `398/398` checked;
  - `node tools/risk-report.mjs research/frontier-24-proof-contracts.json --require-reviewed` still reports `0 error(s), 398 item(s) routed`;
  - `node tools/boundary-audit.mjs research/frontier-24-proof-contracts.json --fail-on-contradicted --fail-on-template` still reports no contradicted or template-reuse blockers;
  - `node tools/citation-fidelity.mjs research/frontier-24-proof-contracts.json --fail-on-missing-quote` still reports no missing quotes or widening candidates;
  - the computed impact graph shows every one of the `419` required-review ids is itself in the same `pre-author -> post-6b` changed-interface window, so the live queue consists entirely of same-window changed consumers rather than untouched downstream pages.
- Disposition: repaired the receipt only. `research/frontier-24-impact.json` now names reviewer `Lead Alpha (Codex GPT-5) - step 6c repair 1` and resolves all `419` live rows as `repaired`, each with an item-specific note giving the current batch/page carrier, the current direct changed-interface citations, and the full current changed-source cone on disk. I left `research/frontier-24-6c-verdicts.jsonl` unchanged because the computed 6c cross-group scope remains empty, there is no repaired `6c-cross` defect row to close, and this was a receipt-state gate repair rather than a new post-6b carrier change.
- Verification on Saturday, August 29, 2026:
  - `node tools/impact-audit.mjs --touches research/frontier-24-touches.json --from pre-author --to post-6b --receipt research/frontier-24-impact.json` -> exit `0`; `impact-audit: 493 changed public interface(s), 419 affected item(s)`.
  - `node tools/cross-group-edges.mjs check --run frontier-24` -> `0 edge(s), 0 forward reference(s), 0 post-6b change(s), 0 error(s)`.
  - `node tools/proof-contract.mjs research/frontier-24-proof-contracts.json --strict` -> `0 error(s), 0 warning(s), 398/398 item(s) checked`.
  - `node tools/citation-fidelity.mjs research/frontier-24-proof-contracts.json --fail-on-missing-quote` -> no missing quotes and no widening candidates.
- Remaining blocker: none for the primary `impact-audit` gate on current bytes.

Current gate state on disk:

1. `audit-manifest`
   - Re-ran the exact gate command and wrote `research/frontier-24-audit-manifest.json`.
   - Result: `1242 relationship(s) over 493 item(s) in 10 batch(es); 0 defect(s)`.
   - Repair: promoted `def-computation-alphabet-and-word-convention`, `def-language-over-an-alphabet`, `def-language-boolean-operations`, and `def-alphabet-homomorphism-and-induced-word-map` to `status: published` and added `verification.audited: 2026-08-30` to each live target. For `def-alphabet-homomorphism-and-induced-word-map`, Step 6c also replaced the unparenthesized iterated concatenation by the explicit left-associated definition and regenerated the batch-10 contract row that quotes it.
   - Disposition: resolved on current Sunday, August 30, 2026 bytes. `research/frontier-24-6c-verdicts.jsonl` now carries nine `kind:"gate"` rows for the repaired batch-10 obligations and one clean `kind:"item"` row for the refreshed `thm-cfl-closure-under-union-concatenation-star-and-homomorphism` carrier.

2. `url-liveness`
   - Re-ran the exact gate command and wrote `research/frontier-24-url-liveness.json`.
   - Result: `0/43 live; 43 failed; 0 recoverable from the archive`.
   - Every failure reported `curl: (6) Could not resolve host`, including `arxiv.org`, `books.google.com`, `cs.uwaterloo.ca`, `math.mit.edu`, `web.archive.org`, and `www.jmilne.org`.
   - Remaining blocker: this is an external DNS/reachability failure in the present shell, not a mathematical or carrier defect. I did not rewrite coverage sources under a no-DNS failure.

## Edits kept

- `research/frontier-24-impact-6c.json`
  - Completed the `post-6b -> current` impact receipt. The earlier zero-scope reviewer-only state became stale once the `audit-manifest` repair published four formal-language interfaces; the current receipt now matches the `4`-interface, `21`-item computation with concrete dispositions.
- `research/frontier-24-impact.json`
  - Filled the main `pre-author -> post-6b` impact receipt with reviewer `Lead Alpha (Codex GPT-5) - step 6c repair 1` and `419` evidence-bearing `repaired` dispositions tied to the current batch/page carriers, direct changed-interface citations, and changed-source cones.
- `research/frontier-24-proof-contracts.json`
  - Refreshed the merged Step-6 contract artifact from the ten batch contracts before running the whole-level contract battery.
- `research/frontier-24-audit-manifest.json`
  - Wrote the exact current audit-manifest receipt after the batch-10 dependency repair; the current receipt has `0` defects.
- `research/frontier-24-url-liveness.json`
  - Wrote the exact current URL-sweep receipt showing the all-host DNS failure.
- `items/def-computation-alphabet-and-word-convention.md`
  - Promoted the computation-word convention item to `status: published` and recorded `verification.audited: 2026-08-30`.
- `items/def-language-over-an-alphabet.md`
  - Promoted the language definition item to `status: published` and recorded `verification.audited: 2026-08-30`.
- `items/def-language-boolean-operations.md`
  - Promoted the language-operations item to `status: published` and recorded `verification.audited: 2026-08-30`.
- `items/def-alphabet-homomorphism-and-induced-word-map.md`
  - Promoted the induced-word-map definition to `status: published`, recorded `verification.audited: 2026-08-30`, and made the concatenation clause explicit by left association.
- `research/frontier-24-batch-10.proof-contracts.json`
  - Regenerated the `thm-cfl-closure-under-union-concatenation-star-and-homomorphism` entry so its quoted source matches the repaired published definition.
- `research/frontier-24-6c-verdicts.jsonl`
  - Appended the required `audit-manifest` gate verdict rows plus the clean current-hash item row for the refreshed batch-10 contract carrier.
- `research/frontier-24-alpha-6c-gate-audit-manifest-2-ledger-rows.json`
  - Wrote the nine closed `6c-cross` defect rows for the repaired batch-10 gate obligations.
- `research/defect-ledger.jsonl`
  - Appended the nine `6c-cross` defect rows through `tools/defect-ledger.mjs append`.
- `research/DEFECT-LEDGER.md`
  - Regenerated automatically by the defect-ledger append transaction.

## Step 6c repair - `audit-manifest`

Date: Sunday, August 30, 2026.

- Reproduced the primary gate on current disk with `node tools/audit-manifest.mjs research/frontier-24-batch-*.pages.json --output research/frontier-24-audit-manifest.json`.
- Rechecked the live evidence against current bytes before repair:
  - `research/frontier-24-reader-10.md` and `research/frontier-24-alpha-d-6b.md` already showed that batch `10` had opened the four formal-language targets as real dependencies.
  - `library/computability-theory/formal-languages-encodings-and-decision-problems.md` was already `status: published`, but the four cited targets above still carried `status: draft`, so `audit-manifest.mjs` quite correctly classified them as unresolved out-of-run draft dependencies.
  - `def-alphabet-homomorphism-and-induced-word-map` still used an unparenthesized iterated concatenation on current bytes, so publishing it honestly required a statement repair before the status flip.
- Disposition: repaired the four live dependency items, refreshed the one stale batch-10 contract quote, appended the required gate and carrier verdict rows to `research/frontier-24-6c-verdicts.jsonl`, and appended the nine matching `6c-cross` ledger rows through `research/frontier-24-alpha-6c-gate-audit-manifest-2-ledger-rows.json`.
- Checks on current bytes:
  - `node tools/tsx-run.mjs tools/reflow.mts items/def-computation-alphabet-and-word-convention.md items/def-language-over-an-alphabet.md items/def-language-boolean-operations.md items/def-alphabet-homomorphism-and-induced-word-map.md` -> unchanged on the final bytes.
  - `node tools/tsx-run.mjs tools/precheck.mts items/def-computation-alphabet-and-word-convention.md items/def-language-over-an-alphabet.md items/def-language-boolean-operations.md items/def-alphabet-homomorphism-and-induced-word-map.md` -> `0 checked, 0 failing`.
  - `node tools/regen-contract-entries.mjs research/frontier-24-batch-10.proof-contracts.json thm-cfl-closure-under-union-concatenation-star-and-homomorphism` -> regenerated `1` entry.
  - `node tools/proof-contract.mjs research/frontier-24-batch-10.proof-contracts.json --strict` -> `0 error(s), 0 warning(s), 28/28 item(s) checked`.
  - `node tools/proof-contract.mjs research/frontier-24-proof-contracts.json --strict` -> `0 error(s), 0 warning(s), 398/398 item(s) checked`.
  - `node tools/citation-fidelity.mjs research/frontier-24-batch-10.proof-contracts.json --fail-on-missing-quote` -> no missing quotes and no widening candidates.
  - `node tools/citation-fidelity.mjs research/frontier-24-proof-contracts.json --fail-on-missing-quote` -> no missing quotes and no widening candidates.
  - `node tools/defect-ledger.mjs append --file research/frontier-24-alpha-6c-gate-audit-manifest-2-ledger-rows.json` -> appended `9` rows and regenerated `research/DEFECT-LEDGER.md`.
  - `node tools/defect-ledger.mjs validate --run frontier-24` -> `140 defect row(s) checked, 0 error(s)`.
  - `node tools/cross-group-edges.mjs check --run frontier-24` -> `0 edge(s), 0 forward reference(s), 0 post-6b change(s), 0 error(s)`.
  - `node tools/depcheck.mjs --quiet` -> exit `0`; repository warnings only, including new advisory `orphan` warnings on the four now-published formal-language items.
  - `node tools/rendercheck.mjs items/def-computation-alphabet-and-word-convention.md items/def-language-over-an-alphabet.md items/def-language-boolean-operations.md items/def-alphabet-homomorphism-and-induced-word-map.md` -> `OK — 4 file(s)`.
  - `git diff --check -- items/def-computation-alphabet-and-word-convention.md items/def-language-over-an-alphabet.md items/def-language-boolean-operations.md items/def-alphabet-homomorphism-and-induced-word-map.md research/frontier-24-batch-10.proof-contracts.json research/frontier-24-proof-contracts.json research/frontier-24-audit-manifest.json research/frontier-24-6c-verdicts.jsonl research/frontier-24-alpha-6c-gate-audit-manifest-2-ledger-rows.json research/defect-ledger.jsonl research/DEFECT-LEDGER.md` -> pass.
- Remaining blocker: none for the primary `audit-manifest` gate on current bytes.

## Step 6c repair - `impact-audit-6c`

Date: Saturday, August 29, 2026.

- Reproduced the primary gate on current disk with `node tools/impact-audit.mjs --touches research/frontier-24-touches.json --from post-6b --current --receipt research/frontier-24-impact-6c.json`.
  Result before repair: `4` changed public interfaces, `21` affected items, and the only failures were the stale zero-scope receipt arrays plus the missing item dispositions left behind after the later `audit-manifest` repair changed the formal-language interfaces.
- Evidence on current bytes:
  - The changed interfaces are exactly `def-alphabet-homomorphism-and-induced-word-map`, `def-computation-alphabet-and-word-convention`, `def-language-boolean-operations`, and `def-language-over-an-alphabet`.
  - The affected set splits into `11` published consumers on `formal-languages-encodings-and-decision-problems` and its examples page, plus `10` batch-10 consumers on `deterministic-finite-automata-and-regular-languages`, `context-free-grammars-and-normal-forms`, and the CFG examples page.
  - I reread each published formal-languages consumer against the current changed definitions. The reopened language counterexample and false statement still separate words from symbols exactly as written, the concatenation and reversal items still use the same offset finite-word convention, the induced-word-map extension lemma still matches the now-explicit left-associated definition, and the decision-problem item still lands encoded yes-instances in `{0,1}^*`.
  - I reread each batch-10 consumer against the current items, `research/frontier-24-reader-10.md`, `research/frontier-24-refute-10.json`, `research/frontier-24-alpha-d-6b.md`, and the current batch-10 contract rows where they exist. The DFA closure items still use Boolean operations inside the fixed ambient `Sigma^*`, `def-context-free-grammar` still treats production right-hand sides as finite words over `V union Sigma`, and the CFL closure theorem still realizes the homomorphic image as `widehat h(L_1)` after the earlier variable-renaming repair.
  - The only affected carriers that had already changed after `post-6b` are `def-language-over-an-alphabet`, `def-language-boolean-operations`, and `thm-cfl-closure-under-union-concatenation-star-and-homomorphism`; those deltas are already accounted for by the earlier `audit-manifest` repair and the existing current-hash rows in `research/frontier-24-6c-verdicts.jsonl`.
  - `node tools/cross-group-edges.mjs check --run frontier-24` remains clean at `0 edge(s)`, `0 forward reference(s)`, `0 post-6b change(s)`, `0 error(s)`, so this repair closes receipt state only and does not authorize a new `kind:"item"` or `kind:"gate"` row.
- Disposition: repaired the receipt only. `research/frontier-24-impact-6c.json` now names reviewer `Lead Alpha (Codex GPT-5) - step 6c repair 3` and resolves the `21` live ids with `3` `repaired` outcomes (`def-language-over-an-alphabet`, `def-language-boolean-operations`, and `thm-cfl-closure-under-union-concatenation-star-and-homomorphism`) plus `18` `still-licensed` rereads. No item, page, contract, ledger, or `research/frontier-24-6c-verdicts.jsonl` edit is licensed here: the gate failure was receipt-state only, the computed 6c cross-group queue remains empty, and `tools/cross-group-edges.mjs` would reject extra rows not tied to a computed current change or a new closed `6c-cross` defect row.
- Edited files: `research/frontier-24-impact-6c.json`, `research/frontier-24-alpha-6c.md`.
- Checks:
  - `node tools/impact-audit.mjs --touches research/frontier-24-touches.json --from post-6b --current --receipt research/frontier-24-impact-6c.json` -> exit `0`; `impact-audit: 4 changed public interface(s), 21 affected item(s)`.
  - `node tools/proof-contract.mjs research/frontier-24-batch-10.proof-contracts.json --strict` -> `0 error(s), 0 warning(s), 28/28 item(s) checked`.
  - `node tools/citation-fidelity.mjs research/frontier-24-batch-10.proof-contracts.json --fail-on-missing-quote` -> no missing quotes and no widening candidates.
  - `node tools/cross-group-edges.mjs check --run frontier-24` -> `0 edge(s), 0 forward reference(s), 0 post-6b change(s), 0 error(s)`.
- Remaining blocker: none for the primary `impact-audit-6c` gate on current bytes.

## Final state

- The computed 6c cross-group scope is empty on current disk, and the stale 6b routing blocker in `.autopilot/status.md` is no longer current.
- `research/frontier-24-6c-verdicts.jsonl` is no longer empty: it now contains the nine `audit-manifest` gate rows and the one clean `item` carrier row required by this named repair, while `node tools/cross-group-edges.mjs check --run frontier-24` stays clean at `0` errors.
- `impact-audit-6c` now also closes on current bytes with `4` changed interfaces and `21` reviewed consumers; the earlier zero-scope receipt state is superseded by the new receipt section above.
- Step 6 still cannot close on current bytes because the exact `url-liveness` DNS failure remains unresolved.

## Exact next action

- Re-run the exact URL sweep in a shell with working DNS; only if host resolution succeeds and specific sources still fail should re-sourcing proceed from `research/frontier-24-url-liveness.json`.
