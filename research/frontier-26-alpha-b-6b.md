# frontier-26 — Alpha group b, step 6b adjudication (batches 6, 7, 9)

Date: Sunday, August 30, 2026
Run: `frontier-26`
Dispatch: `6b-b`

## Scope

- Verified the live Step-6 scope files, reader reports, reader findings, refuter reports, current carriers, and cited dependencies for batches 6, 7, and 9.
- Ran `tools/risk-report.mjs` on each owned batch contract before review, wrote all required `risk_review` records, and reran the same contracts with `--require-reviewed`.

## Checks

- `node tools/risk-report.mjs research/frontier-26-batch-{6,7,9}.proof-contracts.json --require-reviewed --json`
  Result: all three owned contracts pass with complete Alpha risk reviews on every HIGH or CRITICAL item.
- `node tools/proof-contract.mjs research/frontier-26-batch-{6,7,9}.proof-contracts.json --strict`
  Result: batch 6 `20/20`, batch 7 `36/36`, batch 9 `46/46` checked with `0` errors.
- `node tools/citation-fidelity.mjs research/frontier-26-batch-{6,7,9}.proof-contracts.json --fail-on-missing-quote`
  Result: no missing quotes and no widening candidates on the owned contracts.
- `node tools/tsx-run.mjs tools/precheck.mts` on every item edited at 6b
  Result: all edited items pass.
- `node tools/rendercheck.mjs` on the edited batch-7 and batch-9 item files and affected pages
  Result: pass.
- `node tools/boundary-audit.mjs research/frontier-26-batch-9.proof-contracts.json --fail-on-contradicted --fail-on-template`
  Result: pass after repairing the stale boundary rows surfaced by the detector reread.
- `node tools/content-policy.mjs research/frontier-26-batch-9.pages.json`
  Result: pass.

## Decision Summary

- Routed obligations: 38
- Supplemental gate decisions: 6
- `accepted_repair`: 14
- `amended_repair`: 17
- `confirmed_fatal`: 6
- `confirmed_nonfatal`: 7
- `false_positive`: 0

## Batch 6

- All 20 touched carriers stand. Eleven remain straight `accepted_repair` decisions on the reader's contract resynchronization; nine are `amended_repair` because the live carrier no longer equals the raw post-reader snapshot. For `ex-the-canonical-map-between-two-bracketings-of-a-five-fold-product` and `ex-the-word-category-on-words-of-length-three`, the later batch-6 coherence and freeness rewrites refreshed the downstream example/contract state.
- No reader or refuter findings were routed for batch 6.
- The risk review covered the seven current HIGH or CRITICAL items: the binary-word monoidal structure, strictification, transported coherence, canonical-map coherence, unbracketed tensor strings, the free-word theorem, and the coherence corollary. No new defect was found there.

## Batch 7

- The single routed refuter defect is confirmed fatal. The block cone map in `prop-cones-preserve-chain-homotopy-equivalences-of-arrows` had the wrong sign; 6b repaired the statement and the step-1.1 calculation so it now matches the chain-homotopy convention on disk.
- Of the seven touched carriers, one remains `accepted_repair`; six are `amended_repair` because the live carrier no longer equals the raw post-reader snapshot. In particular, the later batch-7 mapping-cylinder definition repair refreshed the downstream example and contract state for `ex-the-mapping-cylinder-of-an-inclusion-of-two-term-complexes` and regenerated the contract entry for `lem-the-mapping-cylinder-differential-squares-to-zero`.
- The risk review covered all ten current HIGH or CRITICAL items. No additional routed defect remained after the cone-sign repair. I also corrected one stale batch-7 contract witness string (`1_{\mathbb Z}`, not `1_{\mathbb Q}`) without creating a ledger row because it was purely mechanical.

## Batch 9

- The routed reader finding is confirmed nonfatal: the `empty` boundary row on `lem-locally-finite-linear-combinations-of-sections-are-smooth` was wrong and is now repaired in the contract.
- All five routed refuter findings are confirmed fatal and repaired. The repairs tighten the vector-bundle definition cluster, retarget the false-statement carrier on fibrewise linear continuity, restore the omitted `AC_omega` hypotheses on the Riemannian-metric corollary and tangent/cotangent example, and restrict the hairy-ball remark to positive even-dimensional spheres.
- Two additional HIGH-risk rereads found nonfatal proof-support gaps outside the routed findings. I repaired both and recorded them through gate decisions: `prop-a-fibrewise-bijective-smooth-bundle-map-over-a-diffeomorphism-is-a-bundle-isomorphism` now cites smooth matrix inversion and splits off rank 0, and `prop-constant-rank-kernels-and-images-of-bundle-maps-over-one-base-are-subbundles` now handles `k=0` explicitly and cites smooth inversion of the nonvanishing minor.
- Of the four touched carriers, two remain `accepted_repair` and two are `amended_repair`. `ex-the-tautological-line-bundle-over-real-projective-space` is amended because the live carrier now also contains the repaired detector-surfaced zero-boundary row, and `prop-local-frames-and-local-trivializations-are-equivalent-data` is amended because the live carrier now includes the required 6b `risk_review`.
- The risk review covered all sixteen current HIGH or CRITICAL items in batch 9.

## Gate repair - `step6-routing-adjudicate` (Monday, August 31, 2026)

- Reproduced the live `decision-not-applied` queue on the current tree and
  confirmed that `touched:6:ex-the-canonical-map-between-two-bracketings-of-a-five-fold-product`,
  `touched:6:ex-the-word-category-on-words-of-length-three`,
  `touched:7:ex-the-mapping-cylinder-of-an-inclusion-of-two-term-complexes`,
  and `touched:7:lem-the-mapping-cylinder-differential-squares-to-zero` no
  longer matched the exact post-reader carriers sealed in
  `research/frontier-26-step6-hash-6-post.json` and
  `research/frontier-26-step6-hash-7-post.json`.
- Rechecked the current batch-6 and batch-7 items against
  `research/frontier-26-reader-6.md` and `research/frontier-26-reader-7.md`
  and found no new mathematical defect. I retagged the four touched decisions
  from `accepted_repair` to `amended_repair` and appended the supplemental gate
  rows `frontier-26-S6-b-gate-6-1`, `frontier-26-S6-b-gate-6-2`,
  `frontier-26-S6-b-gate-7-1`, and `frontier-26-S6-b-gate-7-2` via
  `research/frontier-26-alpha-b-6b-gate-ledger-rows.json`.
- Focused reruns:
  `node tools/step6-scope.mjs check --run frontier-26 --phase adjudicate --batch 6`
  -> `28 item(s) routed, 20 adjudication obligation(s), 0 error(s)`;
  `node tools/step6-scope.mjs check --run frontier-26 --phase adjudicate --batch 7`
  -> `42 item(s) routed, 8 adjudication obligation(s), 0 error(s)`.
- Full rerun:
  `node tools/step6-scope.mjs check --run frontier-26 --phase adjudicate`
  -> `441 item(s) routed, 128 adjudication obligation(s), 0 error(s)`.
