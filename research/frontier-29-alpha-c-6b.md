# frontier-29 alpha group c step 6b adjudication

Date: 2026-09-01
Run: `frontier-29`
Group: `c`
Scope: batches `4`, `6`, and `7`

## Batch 4

- Touched obligations: `21` total: `10` accepted and `11` amended.
- Page obligations: `1`, accepted after rereading the current MT-17 page summary.
- Reader obligations: `6`, all `confirmed_fatal`.
- Refuter obligations: `19`: `13` fatal and `6` nonfatal, all confirmed on the live files.
- Mathematical disposition: Alpha repaired the missing Countable Choice scope on the routed B-page examples and false statement, replaced the unsupported openness step in the weak maximal inequality, repaired the zero-radius Marcinkiewicz split, rewrote the countable Vitali selection, repaired the singular-measure differentiation proof, completed the one-sided FTC family hypothesis, and restated Riesz-Thorin as the bounded extension theorem the current strip proof actually establishes.
- Risk review: reran `risk-report` on the current batch-4 contract, reread every HIGH or CRITICAL item, and replaced the generic notes with item-specific `risk_review` records before the `--require-reviewed` rerun.

## Batch 6

- Touched obligations: `2`, both `amended_repair` after the current theorem statement and contract updates.
- Refuter obligations: `7`: `6` confirmed fatal and `1` false positive.
- Mathematical disposition: Alpha confirmed the current Lyapunov citation objection is a false positive because the cited finite-measure inclusion theorem already has the needed `L^\infty` clause, then repaired the missing Countable Choice scope on the law-from-CDF examples, corrected the `9/4` expectation arithmetic, required `log X` integrability in the Jensen example, narrowed the overstrong remark about the positive-probability bound, and narrowed the best-affine theorem to the existence of an affine representative.
- Risk review: reread all current HIGH and CRITICAL PT-1 items and wrote item-specific `risk_review` notes covering the law/CDF bridge, change-of-variables, expectation package, best affine prediction, and the worked countable and uniform examples.

## Batch 7

- Touched obligations: `12`: `3` accepted and `9` amended.
- Page obligations: `1`, accepted after rereading the current FR-1 page summary.
- Refuter obligations: `4`: `3` fatal and `1` nonfatal, all confirmed on current bytes.
- Mathematical disposition: Alpha repaired the bad `N = 0` sign claim in the Dirichlet-kernel example, corrected the sawtooth limit to the periodic value `f(x)`, kept the Bonnet endpoint term in the bounded-variation lemma, and repaired the Dirichlet-Jordan endpoint setup by defining `u_\pm(0) = 0` explicitly.
- Risk review: reran `risk-report` on the current batch-7 contract, reread every HIGH or CRITICAL item in the Fourier convergence spine, wrote item-specific `risk_review` notes, and confirmed the current Dini, localisation, Lebesgue-constant, and counterexample leaves on the live files.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts ...` on the 25 changed items -> pass.
- `node tools/tsx-run.mjs tools/precheck.mts ...` on the 25 changed items -> pass (`25 checked, 0 failing`).
- `node tools/regen-contract-entries.mjs` on the changed batch-4, batch-6, and batch-7 carriers -> pass.
- `node tools/proof-contract.mjs` strict checks on the changed batch-4, batch-6, and batch-7 items -> pass after regenerating the downstream `cor-best-affine-predictor-from-one-random-variable` contract entry.
- `node tools/citation-fidelity.mjs` on batches `4`, `6`, and `7` -> no missing quotes and no widening candidates.
- `node tools/risk-report.mjs ... --require-reviewed --json` on batches `4`, `6`, and `7` -> pass.

## Blockers

- None in the live group-`c` Step-6 scope.

## Gate repair - `step6-routing-adjudicate` (Tuesday, September 1, 2026)

- Reproduced the live gate and confirmed 6 stale touched decisions in batch `4`.
- Reread the current maximal-function / differentiation items against `research/frontier-29-reader-4.md`; the Countable Choice-scoped definitions and downstream differentiation arguments still stand on current disk.
- Retagged the 6 touched decisions from `accepted_repair` to `amended_repair` and appended the 6 matching supplemental gate rows via `research/frontier-29-alpha-c-6b-gate-ledger-rows.json`.
- Shared rerun: `node tools/step6-scope.mjs check --run frontier-29 --phase adjudicate` now returns `step6-scope: 755 item(s) routed, 291 adjudication obligation(s), 0 error(s)`.
