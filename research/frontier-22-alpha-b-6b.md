# frontier-22 — Alpha group `b` Step 6b adjudication

Date: Friday, August 28, 2026.
Dispatch: `6b-b`
Owned batches: `2`, `5`

## Scope

- Reopened `research/frontier-22-step6-scope-{2,5}.json`, both reader reports and findings JSON, both refuter reports, both owned batch contracts, the live item carriers, and the cited dependency items needed to verify the routed claims.
- Verified the live run state against the repository instructions and current disk artifacts; no Step-6 work outside batches `2` and `5` was edited.
- There were no routed page obligations and no routed reader-finding obligations for this group.

## Routed decisions

### Batch 2

- `3` touched carriers decided: `1` `accepted_repair`, `2` `amended_repair`.
- `3` refuter findings decided: all `confirmed_fatal`.
- The confirmed fatal repairs were:
  `lem-primary-decomposition-combine-equal-radicals`,
  `lem-intersection-of-primary-submodules-with-same-radical`,
  `lem-localisation-of-a-primary-submodule`.

### Batch 5

- `36` touched carriers decided: `7` `accepted_repair`, `29` `amended_repair`.
- `6` refuter findings decided: `5` `confirmed_fatal`, `1` `confirmed_nonfatal`.
- The confirmed fatal repairs were:
  `lem-simple-approximants-converge-uniformly-on-a-large-closed-set`,
  `thm-lusins-theorem`,
  `thm-l-one-convergence-implies-convergence-in-measure`,
  `cor-l-one-convergence-has-an-almost-everywhere-convergent-subsequence`,
  `thm-vitali-convergence-theorem-on-finite-and-sigma-finite-measure-spaces`.
- The confirmed nonfatal refuter repair was:
  `ex-lusin-for-the-indicator-of-the-rationals-in-the-unit-interval`.

## Additional 6b repairs from the mandatory reread

- Repaired two malformed proof-step citations the reader pass had left behind:
  `thm-almost-uniform-convergence-implies-almost-everywhere-and-in-measure`,
  `thm-almost-everywhere-convergence-implies-convergence-in-measure-on-finite-measure-spaces`.
- Repaired four missing countable-choice scopes discovered while re-reading the Lusin chain against the current inner-regularity dependency:
  `lem-simple-functions-satisfy-lusins-theorem-on-a-finite-measure-set`,
  `cor-a-measurable-function-on-a-finite-measure-subset-of-rn-agrees-off-a-small-set-with-a-continuous-function`,
  `cor-bounded-domain-lusin-core-can-be-chosen-compact`,
  `fs-lusins-theorem-says-measurable-functions-are-continuous-off-a-null-set`.
- The batch-5 example `ex-lusin-for-the-indicator-of-the-rationals-in-the-unit-interval` also lost an unnecessary dependency on `thm-lusins-theorem`; its proof is now fully direct on the current bytes.

## Risk review

- Completed `risk_review: {status: complete, reviewer: alpha-6b-b, notes: ...}` on every HIGH or CRITICAL item in the current owned contracts:
  batch `2`: `24` items;
  batch `5`: `24` items.
- After the batch-2 citation repair, `lem-intersection-of-primary-submodules-with-same-radical` moved into the required-risk set because its fact block now records the full primary-characterization equivalence it actually uses. I reran the risk gate and added the missing review immediately.
- `boundary-audit` still reports five heuristic candidates, but I re-read all five on Friday, August 28, 2026 and did not confirm another live defect:
  the batch-2 empty-family hits still resolve through the current `M=0` branches;
  the Vitali empty-family hit is a false positive because the theorem is about a sequence indexed by `\mathbb N`;
  the dominated-convergence zero hit is blocked by the explicit `\varepsilon>0` choice inside the proof.

## Focused checks

- `node tools/tsx-run.mjs tools/reflow.mts <15 edited items>`
  Result: reflow changed only
  `lem-localisation-of-a-primary-submodule`,
  `thm-l-one-convergence-implies-convergence-in-measure`,
  `thm-almost-uniform-convergence-implies-almost-everywhere-and-in-measure`,
  `thm-almost-everywhere-convergence-implies-convergence-in-measure-on-finite-measure-spaces`,
  and `ex-lusin-for-the-indicator-of-the-rationals-in-the-unit-interval`.
- `node tools/tsx-run.mjs tools/precheck.mts <15 edited items>`
  Result: `15 checked, 0 failing`.
- `node tools/regen-contract-entries.mjs research/frontier-22-batch-2.proof-contracts.json <all 42 ids>`
  Result: regenerated all `42` batch-2 entries.
- `node tools/regen-contract-entries.mjs research/frontier-22-batch-5.proof-contracts.json <all 33 ids>`
  Result: regenerated all `33` batch-5 entries.
- `node tools/proof-contract.mjs research/frontier-22-batch-{2,5}.proof-contracts.json --strict`
  Result: both clean, `0 error(s), 0 warning(s)`.
- `node tools/citation-fidelity.mjs research/frontier-22-batch-{2,5}.proof-contracts.json --items-dir items --fail-on-missing-quote`
  Result: no quote-not-found rows and no widening candidates.
- `node tools/rendercheck.mjs <15 edited items>`
  Result: `OK — 15 file(s)`.
- `node tools/content-policy.mjs research/frontier-22-batch-2.pages.json research/frontier-22-batch-5.pages.json`
  Result: `content-policy: 86 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/risk-report.mjs research/frontier-22-batch-{2,5}.proof-contracts.json --require-reviewed --json`
  Result: both `ok: true`.
- `node tools/defect-ledger.mjs append --file /tmp/frontier-22-alpha-b-6b-ledger-rows.json`
  Result: appended `54` frontier-22 rows and re-rendered `research/DEFECT-LEDGER.md`.
- `node tools/defect-ledger.mjs validate --run frontier-22`
  Result: `232 defect row(s) checked, 0 error(s)`.
- `node tools/step6-scope.mjs stamp --run frontier-22 --group b`
  Result: stamped `48` current carrier hashes.
- `node tools/step6-scope.mjs check --run frontier-22 --phase adjudicate --batch 2`
  Result: `45 item(s) routed, 6 adjudication obligation(s), 0 error(s)`.
- `node tools/step6-scope.mjs check --run frontier-22 --phase adjudicate --batch 5`
  Result: `41 item(s) routed, 42 adjudication obligation(s), 0 error(s)`.
- `git diff --check -- items/ research/frontier-22-batch-{2,5}.pages.json research/frontier-22-batch-{2,5}.proof-contracts.json research/frontier-22-alpha-b-6b-decisions.json research/defect-ledger.jsonl research/DEFECT-LEDGER.md`
  Result: clean.

## Blockers

None.
