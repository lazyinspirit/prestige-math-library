# frontier-25 Alpha group b — step 6b adjudication

Run: `frontier-25`  
Group: `b`  
Batches: `2`, `3`, `9`

## Scope opened

I read the live Step-6 scope for batches `2`, `3`, and `9`, each reader report and findings JSON, each refuter report, the current page/item carriers implicated by the routed obligations, the cited local dependencies needed to test the refuter claims, and the owned batch contracts/manifests.

## Routed outcomes

The exact machine-readable dispositions are in `research/frontier-25-alpha-b-6b-decisions.json`.

- Touched carriers: `26` total.
- Verdict split: `2` `accepted_repair`, `24` `amended_repair`.
- Refuter/gate defects: `16` total.
- Verdict split: `12` `confirmed_fatal`, `4` `confirmed_nonfatal`.

### Batch 2

- Accepted the reader repairs on the two Hermitian definitions, the two Rayleigh-quotient propositions, and the minimum-norm / QR-contract synchronizations, with Alpha-side amendments where the manifest, contract, or later in-scope repair changed the final carrier.
- Confirmed and repaired the refuter findings on:
  - `ex-rayleigh-quotient-iteration-on-a-two-by-two-symmetric-matrix`
  - `thm-hermitian-rayleigh-quotient-iteration-has-local-cubic-convergence`
  - `thm-moore-penrose-pseudoinverse-exists-and-is-unique`
  - `thm-wilkinson-shifted-symmetric-tridiagonal-qr-has-local-deflation-away-from-ties`
  - page `eigenvalue-iterations-and-the-qr-algorithm`
- The Wilkinson theorem’s old cubic claim is not true on the current hypotheses; the live item is narrowed to the structure-preserving statement that a Wilkinson-shifted symmetric tridiagonal QR step stays symmetric tridiagonal away from a tie.

### Batch 3

- Accepted and synchronized the reader rewrites of the Lebesgue decomposition / Radon-Nikodym theorem chain, including the downstream contract refreshes on `cor-finite-complex-measures-admit-integrable-radon-nikodym-densities`, `thm-additivity-of-radon-nikodym-derivatives`, and `cor-reciprocal-rule-for-equivalent-sigma-finite-measures`.
- Confirmed and repaired the refuter findings on:
  - `prop-the-radon-nikodym-derivative-is-integrable-exactly-when-the-absolutely-continuous-part-is-finite`
  - `rem-von-neumanns-hilbert-space-proof-of-radon-nikodym`
  - `thm-chain-rule-for-radon-nikodym-derivatives`
  - `thm-epsilon-delta-characterisation-of-absolute-continuity-for-finite-signed-or-complex-measures`
  - `thm-polar-decomposition-for-signed-and-complex-measures`
- The chain-rule theorem and epsilon-delta theorem both needed explicit hypothesis narrowing on the current repository conventions; those hypotheses are now stated in the live items.

### Batch 9

- Accepted the reader repairs on the eight touched differential-geometry items, with final Alpha amendments where the synced manifest/contract state or the extra high-risk citation repair changed the sealed carrier.
- Confirmed and repaired the refuter findings on:
  - `cex-the-figure-eight-is-an-immersed-image-not-an-embedded-submanifold`
  - `cor-a-discrete-embedded-submanifold-is-closed-locally-and-countable`
  - `thm-a-regular-level-set-is-an-embedded-submanifold`
  - `thm-constant-rank-theorem-for-manifolds`
- Added one supplemental gate disposition on `thm-smooth-inverse-function-theorem-on-manifolds`: it carried the same malformed published coordinate-formula dependency pattern as the flagged constant-rank theorem, so Alpha replaced that route with the chain-rule conjugation through chart diffeomorphisms.

## Risk review

`risk-report.mjs` was rerun on the final owned contracts, first without `--require-reviewed` and then with it.

- Batch `2`: `10` required `risk_review` records completed.
- Batch `3`: `17` required `risk_review` records completed.
- Batch `9`: `13` required `risk_review` records completed.

Every `HIGH` or `CRITICAL` item now has `risk_review: {status: complete, reviewer: "Alpha group b", notes: ...}` in its owning batch contract. The notes name the actual structural risk and the precise reason it is resolved on the live bytes.

## Artifact sync

- Synchronized `research/frontier-25-batch-{2,3,9}.pages.json` title/dependency rows to the live item frontmatter in owned scope.
- Regenerated the full owned proof contracts so the current steps, citations, and consumer rows match the repaired item text.
- Appended `42` frontier-25 group-b Step-6 rows to `research/defect-ledger.jsonl` across the base 6b ledger and `research/frontier-25-alpha-b-6b-gate-ledger-rows.json`, then restamped `research/DEFECT-LEDGER.md`.

## Checks

Passing on the final live state:

- `node tools/tsx-run.mjs tools/precheck.mts ...` for all edited proof-bearing items
- `node tools/proof-contract.mjs research/frontier-25-batch-{2,3,9}.proof-contracts.json --strict`
- `node tools/citation-fidelity.mjs research/frontier-25-batch-{2,3,9}.proof-contracts.json --fail-on-missing-quote`
- `node tools/risk-report.mjs research/frontier-25-batch-{2,3,9}.proof-contracts.json --require-reviewed --json`
- `node tools/content-policy.mjs research/frontier-25-batch-{2,3,9}.pages.json`
- `node tools/rendercheck.mjs ...` on all edited items plus the edited A page
- `node tools/defect-ledger.mjs validate --run frontier-25`
- `git diff --check`

Boundary audit note:

- Batch `2` has no contradicted boundary dispositions.
- Batch `9` has no contradicted boundary dispositions; its output is limited to template-reuse clusters.
- Batch `3` still emits boundary-audit template/contradicted candidates driven by generic boundary text patterns. I reopened the cited items after the final repairs and did not confirm an additional mathematical defect from those heuristic candidates in this dispatch.

## Gate repair - `step6-routing-adjudicate` (Sunday, August 30, 2026)

- Reproduced the live `decision-not-applied` queue on the current tree and confirmed one stale batch-2 touched decision: `cex-equal-dominant-moduli-can-make-power-iteration-cycle`.
- Reread the current counterexample against `research/frontier-25-reader-2.md` and found no new mathematical defect. I retagged the touched decision from `accepted_repair` to `amended_repair` and appended the supplemental gate row `frontier-25-S6-b-gate-2-1` via `research/frontier-25-alpha-b-6b-gate-ledger-rows.json`.
- Focused rerun:
  `node tools/step6-scope.mjs check --run frontier-25 --phase adjudicate --batch 2`
  -> `55 item(s) routed, 14 adjudication obligation(s), 0 error(s)`.
- Full rerun:
  `node tools/step6-scope.mjs check --run frontier-25 --phase adjudicate`
  -> `381 item(s) routed, 110 adjudication obligation(s), 0 error(s)`.
