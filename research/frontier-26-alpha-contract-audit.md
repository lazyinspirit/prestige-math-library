# Frontier 26 contract audit

Date: Monday, August 31, 2026.
Dispatch: `contract-audit-8`
Run: `frontier-26`

## Reproduced detector state before repair

From the repo root I reran:

- `node tools/merge-proof-contracts.mjs --level frontier-26 research/frontier-26-proof-contracts.json research/frontier-26-batch-1.proof-contracts.json research/frontier-26-batch-2.proof-contracts.json research/frontier-26-batch-3.proof-contracts.json research/frontier-26-batch-4.proof-contracts.json research/frontier-26-batch-5.proof-contracts.json research/frontier-26-batch-6.proof-contracts.json research/frontier-26-batch-7.proof-contracts.json research/frontier-26-batch-8.proof-contracts.json research/frontier-26-batch-9.proof-contracts.json research/frontier-26-batch-10.proof-contracts.json research/frontier-26-batch-11.proof-contracts.json`
- `node tools/boundary-audit.mjs research/frontier-26-proof-contracts.json --fail-on-contradicted --fail-on-template`
- `node tools/citation-fidelity.mjs research/frontier-26-proof-contracts.json --fail-on-missing-quote`
- `node tools/finite-smoke.mjs research/frontier-26-proof-contracts.json`
- `node tools/gate-liveness.mjs --run frontier-26 --contracts research/frontier-26-proof-contracts.json --checklists research/frontier-26-batch-1.coverage.json research/frontier-26-batch-2.coverage.json research/frontier-26-batch-3.coverage.json research/frontier-26-batch-4.coverage.json research/frontier-26-batch-5.coverage.json research/frontier-26-batch-6.coverage.json research/frontier-26-batch-7.coverage.json research/frontier-26-batch-8.coverage.json research/frontier-26-batch-9.coverage.json research/frontier-26-batch-10.coverage.json research/frontier-26-batch-11.coverage.json --min-checks 1`
- diagnostic only: `node tools/risk-report.mjs research/frontier-26-proof-contracts.json --require-reviewed`

Initial state on current disk:

- `boundary-audit`: pass; `0` template clusters, `0` contradicted candidates, and `19` previously upheld rows still on record from `contract-audit-7`.
- `citation-fidelity`: pass; `786` citations checked, `0` missing quotes, and `0` widening candidates.
- `finite-smoke`: blocker; `0 error(s), 0 check(s) over 0/352 item(s) carrying obligations`.
- `gate-liveness`: blocker; `VACUOUS finite-smoke 0 checks`, with `proof-contract 352`, `coverage-checklist 659`, and `precheck 8466` all live.
- `risk-report --require-reviewed`: pass; `0` errors, `352` items routed.

## Candidate adjudication

| Candidate | Disposition | Evidence | Changed record |
| --- | --- | --- | --- |
| `boundary-audit` residue | no current defect | The tool reports `TEMPLATE REUSE — none at or above 3 members` and `CONTRADICTED DISPOSITIONS — none found by the three detectors.` The remaining `19` rows are explicit `reviewed.upheld` records from the prior dispatch and required no further change on current bytes. | none |
| `citation-fidelity` residue | no current defect | The tool reports `QUOTE NOT FOUND — none` and `WIDENING CANDIDATES — none found by the three detectors.` | none |
| `gate-liveness` / vacuous `finite-smoke` | repaired | In [items/cor-the-six-cycle-and-its-complement-have-the-erdos-hajnal-property.md](/Users/ianx/Projects/prestige-math-library/items/cor-the-six-cycle-and-its-complement-have-the-erdos-hajnal-property.md:33), step `1.1` explicitly uses the complement-transfer claim `contained $\overline{P_4^\star}$, then $\overline G$ would contain $P_4^\star$`. I first injected that exact excerpt into a temporary merged contract and confirmed `node tools/finite-smoke.mjs /tmp/frontier-26-proof-contracts.test.json` passes with `induced-complement-commutes: checked all simple graphs and vertex subsets through 4 vertices`, so this is an applicable existing registry check rather than a synthetic row. | Added one `finite_smoke` row to `research/frontier-26-batch-8.proof-contracts.json` under `cor-the-six-cycle-and-its-complement-have-the-erdos-hajnal-property`: `check: induced-complement-commutes`, `asserts: contained $\\overline{P_4^\\star}$, then $\\overline G$ would contain $P_4^\\star$`, `checked_in: step 1.1`, `max_vertices: 4`. |

## Post-merge reruns

After updating the owning batch contract, I re-merged into `research/frontier-26-proof-contracts.json` and reran the detector set on the fresh merged file:

- `node tools/merge-proof-contracts.mjs --level frontier-26 research/frontier-26-proof-contracts.json research/frontier-26-batch-1.proof-contracts.json research/frontier-26-batch-2.proof-contracts.json research/frontier-26-batch-3.proof-contracts.json research/frontier-26-batch-4.proof-contracts.json research/frontier-26-batch-5.proof-contracts.json research/frontier-26-batch-6.proof-contracts.json research/frontier-26-batch-7.proof-contracts.json research/frontier-26-batch-8.proof-contracts.json research/frontier-26-batch-9.proof-contracts.json research/frontier-26-batch-10.proof-contracts.json research/frontier-26-batch-11.proof-contracts.json`
  - pass; wrote the merged run contract with `352` scoped items.
- `node tools/proof-contract.mjs research/frontier-26-proof-contracts.json --strict`
  - pass; `0` errors, `2` warnings, `352/352` items checked. The remaining warnings are the standing nonfatal `shotgun-bracket` warnings on `thm-equality-case-in-minkowski-inequality` and `thm-the-l-p-distance-for-zero-less-p-less-one-is-a-complete-translation-invariant-metric`.
- `node tools/finite-smoke.mjs research/frontier-26-proof-contracts.json`
  - pass; `0` errors, `1` live check over `1/352` items.
- `node tools/boundary-audit.mjs research/frontier-26-proof-contracts.json --fail-on-contradicted --fail-on-template`
  - pass; `0` template clusters, `0` contradicted candidates, `19` upheld rows.
- `node tools/citation-fidelity.mjs research/frontier-26-proof-contracts.json --fail-on-missing-quote`
  - pass; `786` citations checked, no missing quote, no widening candidate.
- `node tools/gate-liveness.mjs --run frontier-26 --contracts research/frontier-26-proof-contracts.json --checklists research/frontier-26-batch-1.coverage.json research/frontier-26-batch-2.coverage.json research/frontier-26-batch-3.coverage.json research/frontier-26-batch-4.coverage.json research/frontier-26-batch-5.coverage.json research/frontier-26-batch-6.coverage.json research/frontier-26-batch-7.coverage.json research/frontier-26-batch-8.coverage.json research/frontier-26-batch-9.coverage.json research/frontier-26-batch-10.coverage.json research/frontier-26-batch-11.coverage.json --min-checks 1`
  - pass; `finite-smoke 1`, `proof-contract 352`, `coverage-checklist 659`, `precheck 8466`.
- `node tools/risk-report.mjs research/frontier-26-proof-contracts.json --require-reviewed`
  - pass; `0` errors, `352` items routed.

## Defect ledger

No item-text defect was confirmed in this dispatch, so no `research/defect-ledger.jsonl` row was appended here.

## Remaining blocker

No blocker remains in this dispatch scope.
