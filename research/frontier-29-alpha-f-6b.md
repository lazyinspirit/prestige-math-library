# frontier-29 alpha-f Step 6b adjudication

## Scope

Group `f` adjudicated routed batches `8`, `9`, and `15` only. I reread the live scope files, reader reports, reader findings JSON, refuter reports, current carriers, and cited dependencies before deciding the routed obligations.

## Risk review

- Batch `8`: completed specific `risk_review` entries for all 25 HIGH/CRITICAL items in `research/frontier-29-batch-8.proof-contracts.json`.
- Batch `9`: completed specific `risk_review` entries for all 13 HIGH/CRITICAL items in `research/frontier-29-batch-9.proof-contracts.json`.
- Batch `15`: refreshed the 5 required HIGH/CRITICAL `risk_review` notes in `research/frontier-29-batch-15.proof-contracts.json` so each names the actual risk and its current resolution.

## Decisions

- Batch `8`: all 6 touched obligations are `amended_repair`; all 4 refuter obligations are `confirmed_nonfatal`.
- Batch `9`: 3 touched obligations are `amended_repair`, 2 are `accepted_repair`; all 5 refuter obligations are `confirmed_fatal`.
- Batch `15`: 4 touched obligations are `amended_repair`, 3 are `accepted_repair`; both refuter obligations are `confirmed_fatal`.

## Repairs applied

- Batch `8`: repaired the p-adic ball boundary case, the Ostrowski archimedean coefficient bound, the Newton uniqueness step, and the weak-approximation modulus.
- Batch `9`: repaired the finite xi-model example, the completed-functional-equation continuation argument, the Euler-product local-uniform convergence proof, the xi growth bound, and the Bernoulli-value sign.
- Batch `15`: replaced the unsupported thinning sketch with an explicit survivor-counting construction and corrected the false `w >= q/ell >= epsilon^2 m` inequality to the valid `epsilon^3 m` bound.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts ...` on the 11 changed items: clean after the final reruns.
- `node tools/tsx-run.mjs tools/precheck.mts ...` on the 11 changed items: `11 checked, 0 failing`.
- `node tools/regen-contract-entries.mjs ...` on the affected batch-8, batch-9, and batch-15 contract rows: regenerated the 11 repaired entries.
- `node tools/proof-contract.mjs research/frontier-29-batch-{8,9,15}.proof-contracts.json --strict`: all three owned contracts pass strictly on current bytes.
- `node tools/citation-fidelity.mjs research/frontier-29-batch-{8,9,15}.proof-contracts.json --items-dir items --fail-on-missing-quote`: no missing quotes and no widening candidates.
- `node tools/risk-report.mjs research/frontier-29-batch-{8,9,15}.proof-contracts.json --require-reviewed`: all three owned contracts satisfy the required review coverage.
- `git diff --check -- ...`: clean for the edited items and owned contract artifacts.

## Blockers

- None in the routed group scope.

## Gate repair - `step6-routing-adjudicate` (Tuesday, September 1, 2026)

- Reproduced the live gate and confirmed 5 stale touched decisions in batches `9` and `15`.
- Reread the current theta / zeta items and the restricted-subgraph blockade package against `research/frontier-29-reader-9.md` and `research/frontier-29-reader-15.md`; no new mathematical defect was found on current disk.
- Retagged those 5 touched decisions from `accepted_repair` to `amended_repair` and appended the 5 matching supplemental gate rows via `research/frontier-29-alpha-f-6b-gate-ledger-rows.json`.
- Shared rerun: `node tools/step6-scope.mjs check --run frontier-29 --phase adjudicate` now returns `step6-scope: 755 item(s) routed, 291 adjudication obligation(s), 0 error(s)`.
