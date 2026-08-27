# Frontier 21 contract audit

Date: Thursday, August 27, 2026.
Dispatch: `contract-audit-5`
Run: `frontier-21`

## Reproduced detector state before repair

- `boundary-audit` on `research/frontier-21-proof-contracts.json`: pass with
  `0` template clusters, `0` contradicted candidates, and `10` upheld reviewed
  rows.
- `citation-fidelity` on `research/frontier-21-proof-contracts.json`: pass with
  `835` citations checked, `0` missing quotes, and `0` widening candidates.
- `gate-liveness` on the merged contract plus all ten coverage files: fail only
  on `finite-smoke 0 checks`; the other probes were live at
  `proof-contract 339`, `coverage-checklist 454`, and `precheck 6705`.

## Candidate adjudication

| Candidate | Disposition | Evidence | Changed record |
| --- | --- | --- | --- |
| `gate-liveness` → `finite-smoke 0 checks` | repaired | `thm-cycle-index-of-cyclic-group` step `2.1` explicitly asserts the finite-cyclic order calculation “the order of the rotation by $r$ is the least positive $m$ with $mr \equiv 0 \pmod n$, and for $r=(n/d)a$ this least $m$ is exactly $d$ when $\gcd(a,d)=1$.” The existing registry check `cyclic-subgroup-lagrange` is an honest bounded countermodel search for exactly that order-of-a-power invariant in finite cyclic groups, so the missing `finite_smoke` row was applicable rather than synthetic. | Batch `6` contract: added one `finite_smoke` row to `thm-cycle-index-of-cyclic-group` with `check: cyclic-subgroup-lagrange`, the exact step-`2.1` assertion excerpt, and `max_modulus: 60`. Then re-merged `research/frontier-21-proof-contracts.json`. |

Changed records:

- `research/frontier-21-batch-6.proof-contracts.json`
- `research/frontier-21-proof-contracts.json`

No item text changed, so no `research/defect-ledger.jsonl` row was due.

## Post-merge reruns

- `node tools/merge-proof-contracts.mjs --level frontier-21 research/frontier-21-proof-contracts.json research/frontier-21-batch-*.proof-contracts.json`
  - pass; wrote the merged run contract with `339` scoped items.
- `node tools/proof-contract.mjs research/frontier-21-proof-contracts.json --strict`
  - pass; `0` errors, `0` warnings, `339/339` items checked.
- `node tools/finite-smoke.mjs research/frontier-21-proof-contracts.json`
  - pass; `1` check over `1/339` scoped items.
- `node tools/risk-report.mjs research/frontier-21-proof-contracts.json --require-reviewed`
  - pass; `0` errors, `339` items routed.
- `node tools/boundary-audit.mjs research/frontier-21-proof-contracts.json --items-dir items --fail-on-contradicted --fail-on-template`
  - pass; `0` template clusters, `0` contradicted candidates, `10` upheld rows.
- `node tools/citation-fidelity.mjs research/frontier-21-proof-contracts.json --items-dir items --fail-on-missing-quote`
  - pass; `835` citations checked, no missing quote, no widening candidate.
- `node tools/gate-liveness.mjs --run frontier-21 --contracts research/frontier-21-proof-contracts.json --checklists research/frontier-21-batch-1.coverage.json research/frontier-21-batch-2.coverage.json research/frontier-21-batch-3.coverage.json research/frontier-21-batch-4.coverage.json research/frontier-21-batch-5.coverage.json research/frontier-21-batch-6.coverage.json research/frontier-21-batch-7.coverage.json research/frontier-21-batch-8.coverage.json research/frontier-21-batch-9.coverage.json research/frontier-21-batch-10.coverage.json --min-checks 1`
  - pass; `finite-smoke 1`, `proof-contract 339`, `coverage-checklist 454`, `precheck 6705`.

## Remaining blocker

- None in the `boundary-audit` / `citation-fidelity` / `gate-liveness`
  contract-detector battery after the repaired rerun.
