# frontier-26 alpha-d 6b

Date: Sunday, August 30, 2026.
Run: `frontier-26`
Group: `d`
Batches: `8`, `10`, `11`

## Scope

- Reviewed the live Step 6 scope, reader reports, reader findings, refuter reports, current carriers, and cited dependencies for batches 8, 10, and 11.
- Repaired the confirmed batch-local defects only; no cross-group artifact was edited.

## Risk Review

- Ran `node tools/risk-report.mjs research/frontier-26-batch-8.proof-contracts.json`, `...-10...`, and `...-11...` without `--require-reviewed`.
- Completed HIGH and CRITICAL `risk_review` records for all owned items and saved the review notes in `research/frontier-26-alpha-d-6b-risk-reviews.json`.
- Re-ran the same three commands with `--require-reviewed`; all three returned `0 error(s)`.

## Adjudication

- Batch 8 touched carriers: both Reader 8 finite-witness repairs stand on current disk, but both are now `amended_repair` because the live carriers no longer equal the raw post-reader snapshot after later Step 6b contract refreshes.
- Batch 8 refuter findings: confirmed one nonfatal endpoint defect and nine fatal proof or statement defects; repaired them by the smallest coherent mix of endpoint hypotheses, source-faithful theorem restatements, and exact source-claim alignments.
- Batch 10 touched carriers: accepted the repaired definition, and marked the state-elimination lemma, height lemma, Ogden theorem, and pumping theorem as amended because the live carrier now differs from the raw post-reader snapshot after Alpha contract synchronization, with a further nonfatal pumping-lemma proof repair at 6b.
- Batch 10 refuter finding: confirmed the remaining nonfatal pumping-lemma height gap and repaired it by raising the pumping length to `2^(m+1)+1`.
- Batch 11 touched carriers: marked the enumeration example, step-interpreter lemma, and universal-machine existence theorem as amended; the first two differ from the raw post-reader snapshot because their reviewed contract rows were regenerated, and the theorem required a further 6b typing repair.
- Batch 11 refuter findings: confirmed four fatal defects and repaired them by re-encoding machine-alphabet inputs and outputs in the universal-machine cluster and by restoring the missing `+1` in the multitape-overhead bound.

## Checks

- Reflowed every materially edited item and reran `node tools/tsx-run.mjs tools/precheck.mts ...` on the edited carriers; all owned edits are precheck-clean.
- Regenerated the affected proof-contract entries for batches 8, 10, and 11; the full owned contracts now pass `node tools/proof-contract.mjs ... --strict`.
- `git diff --check` remained clean on the edited 6b scope files.

## Gate repair - `step6-routing-adjudicate` (Monday, August 31, 2026)

- Reproduced the live `decision-not-applied` queue on the current tree and
  confirmed that
  `touched:8:ex-an-upside-down-comb-with-anticonnected-blocks-creates-a-co-p-five`
  and `touched:10:lem-state-elimination-preserves-path-language` no longer
  matched the exact post-reader carriers sealed in
  `research/frontier-26-step6-hash-8-post.json` and
  `research/frontier-26-step6-hash-10-post.json`.
- Rechecked the current batch-8 and batch-10 items against
  `research/frontier-26-reader-8.md` and `research/frontier-26-reader-10.md`
  and found no new mathematical defect. I retagged the two touched decisions
  from `accepted_repair` to `amended_repair` and appended the supplemental gate
  rows `frontier-26-S6-d-gate-8-1` and `frontier-26-S6-d-gate-10-1` via
  `research/frontier-26-alpha-d-6b-gate-ledger-rows.json`.
- Focused reruns:
  `node tools/step6-scope.mjs check --run frontier-26 --phase adjudicate --batch 8`
  -> `47 item(s) routed, 12 adjudication obligation(s), 0 error(s)`;
  `node tools/step6-scope.mjs check --run frontier-26 --phase adjudicate --batch 10`
  -> `38 item(s) routed, 6 adjudication obligation(s), 0 error(s)`.
- Full rerun:
  `node tools/step6-scope.mjs check --run frontier-26 --phase adjudicate`
  -> `441 item(s) routed, 128 adjudication obligation(s), 0 error(s)`.
