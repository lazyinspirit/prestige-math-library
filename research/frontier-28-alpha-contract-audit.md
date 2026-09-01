# Frontier 28 contract audit

Date: Tuesday, September 1, 2026.
Dispatch: `contract-audit-10`
Run: `frontier-28`

## Reproduced detector state before repair

From the repo root I ran:

- `node tools/merge-proof-contracts.mjs --level frontier-28 research/frontier-28-proof-contracts.json research/frontier-28-batch-1.proof-contracts.json research/frontier-28-batch-2.proof-contracts.json research/frontier-28-batch-3.proof-contracts.json research/frontier-28-batch-4.proof-contracts.json research/frontier-28-batch-5.proof-contracts.json research/frontier-28-batch-6.proof-contracts.json research/frontier-28-batch-7.proof-contracts.json research/frontier-28-batch-8.proof-contracts.json research/frontier-28-batch-9.proof-contracts.json research/frontier-28-batch-10.proof-contracts.json research/frontier-28-batch-11.proof-contracts.json`
- `node tools/boundary-audit.mjs research/frontier-28-proof-contracts.json --items-dir items --fail-on-contradicted --fail-on-template`
- `node tools/citation-fidelity.mjs research/frontier-28-proof-contracts.json --items-dir items --fail-on-missing-quote`
- `node tools/gate-liveness.mjs --run frontier-28 --contracts research/frontier-28-proof-contracts.json --checklists research/frontier-28-batch-1.coverage.json research/frontier-28-batch-2.coverage.json research/frontier-28-batch-3.coverage.json research/frontier-28-batch-4.coverage.json research/frontier-28-batch-5.coverage.json research/frontier-28-batch-6.coverage.json research/frontier-28-batch-7.coverage.json research/frontier-28-batch-8.coverage.json research/frontier-28-batch-9.coverage.json research/frontier-28-batch-10.coverage.json research/frontier-28-batch-11.coverage.json --min-checks 1`

Current-byte results before the contract-row repair:

- `merge-proof-contracts` wrote `research/frontier-28-proof-contracts.json` with `339` scoped items from `11` batch contracts.
- `boundary-audit` failed only on template reuse: `13` template clusters, `0` contradicted candidates, and `1` existing upheld row.
- `citation-fidelity` was already clean: `843` citations checked, `0` missing quotes, `0` widening candidates.
- `gate-liveness` was already live on current bytes. The earlier `finite-smoke 0 checks` report is stale because batch `9` now carries one real smoke row for `lem-the-auxiliary-pattern-has-a-polynomial-homogeneous-set-under-the-source-hypotheses`, so the probe reports `finite-smoke 1`, `proof-contract 339`, `coverage-checklist 570`, and `precheck 9162`.

## Boundary template candidates

I repaired the repeated boundary prose only in the owning batch contracts. No boundary status changed in this dispatch; the fix was to replace templated row text with item-specific reasons or step-citing evidence.

| Candidate | Disposition | Evidence on current bytes | Changed record |
| --- | --- | --- | --- |
| Batch `10` cluster: `289` `not_applicable` rows over cases `degenerate, empty, endpoints, iff-forward, iff-reverse, one, zero` | repaired | `boundary-audit` clustered the boilerplate `The item ... does not require a separate ... boundary argument beyond the proof already written.` across `48` differential-geometry items. The rows were not contradicted, but their text was non-specific. | Rewrote every matched batch-10 `not_applicable` row to an unquoted-title, case-specific reason. |
| Batch `8` cluster: `102` `not_applicable` rows over cases `iff-forward, iff-reverse` | repaired | `boundary-audit` clustered `The statement is not an if-and-only-if claim.` across `51` homological-algebra items. | Rewrote those rows to item-specific one-way-claim reasons in `research/frontier-28-batch-8.proof-contracts.json`. |
| Batch `8` cluster: `51` `not_applicable` `empty` rows | repaired | `boundary-audit` clustered `The statement is about categorical objects or maps, not an empty-set input parameter.` across the same batch-8 scope. | Rewrote those rows to item-specific empty-axis reasons tied to each title. |
| Batch `8` cluster: `51` `not_applicable` `endpoints` rows | repaired | `boundary-audit` clustered `The claim does not concern a bounded interval or endpoint condition.` across batch `8`. | Rewrote those rows to item-specific endpoint-axis reasons. |
| Batch `8` cluster: `50` `not_applicable` `degenerate` rows | repaired | `boundary-audit` clustered `No separate degenerate branch is needed beyond the uniform proof already written.` across batch `8`. | Rewrote those rows to item-specific degenerate-axis reasons. |
| Batch `8` cluster: `49` `not_applicable` `one` rows | repaired | `boundary-audit` clustered `No distinguished one-element or n=1 boundary case is part of the statement.` across batch `8`. | Rewrote those rows to item-specific one-axis reasons. |
| Batch `8` cluster: `41` `not_applicable` `zero` rows | repaired | `boundary-audit` clustered `No separate scalar-zero boundary is being varied here.` across batch `8`. | Rewrote those rows to item-specific zero-axis reasons. |
| Batch `10` cluster: `31` `not_applicable` `nonempty-choice` rows | repaired | `boundary-audit` clustered the generic batch-10 `nonempty-choice` boilerplate across `31` items. | Rewrote those rows to item-specific nonempty-choice reasons. |
| Batch `10` cluster: `31` `checked` `zero` rows | repaired | `boundary-audit` clustered step-citing boilerplate of the form `step n.n handles the zero or zero-section boundary in this item.` | Rewrote those rows to title-specific evidence while preserving the cited step. |
| Batch `8` cluster: `28` `not_applicable` `nonempty-choice` rows | repaired | `boundary-audit` clustered `The proof does not rely on choosing from an arbitrary nonempty family.` across batch `8`. | Rewrote those rows to item-specific nonempty-choice reasons. |
| Batch `10` cluster: `17` `checked` `nonempty-choice` rows | repaired | `boundary-audit` clustered `step n.n makes the only nonempty-set choice used in the proof.` across batch `10`. | Rewrote those rows to title-specific evidence while preserving the cited step. |
| Batch `10` cluster: `5` `checked` `degenerate` rows | repaired | `boundary-audit` clustered `step n.n treats the relevant collapse or failure mode explicitly.` across five batch-10 items. | Rewrote those rows to title-specific degenerate-axis evidence. |
| Batch `10` cluster: `5` `checked` `endpoints` rows | repaired | `boundary-audit` clustered `step n.n handles the endpoint or collar behavior needed here.` across five batch-10 items. | Rewrote those rows to title-specific endpoint-axis evidence. |

## Detector-inapplicable row kept

| Candidate | Disposition | Evidence on current bytes | Changed record |
| --- | --- | --- | --- |
| `ex-the-standard-circle-and-its-annular-tubular-neighbourhood` `[zero]` | upheld | The detector still sees the normalization `$x/\\|x\\|$`, but step `2.1` only uses it on the annulus `1/2 < \\|x\\| < 3/2`, which excludes `x = 0`. | No content change in this dispatch. The existing `reviewed.upheld` rationale by `alpha-contract-audit-8` remains the right resolution. |

## Citation fidelity

Decision: no live citation defect.

Evidence:

- `node tools/citation-fidelity.mjs research/frontier-28-proof-contracts.json --items-dir items --fail-on-missing-quote`
- Output: `citation-fidelity: 843 citation(s) over 339 authored item(s)`
- Output: `QUOTE NOT FOUND — none`
- Output: `WIDENING CANDIDATES — none`

Changed record:

- None.

## Gate liveness

Decision: no live liveness defect on current bytes.

Evidence:

- `node tools/finite-smoke.mjs research/frontier-28-proof-contracts.json`
- Output: `PASS [lem-the-auxiliary-pattern-has-a-polynomial-homogeneous-set-under-the-source-hypotheses] induced-complement-commutes: checked all simple graphs and vertex subsets through 4 vertices`
- Output: `finite-smoke: 0 error(s), 1 check(s) over 1/339 item(s) carrying obligations`
- `node tools/gate-liveness.mjs --run frontier-28 --contracts research/frontier-28-proof-contracts.json --checklists research/frontier-28-batch-1.coverage.json research/frontier-28-batch-2.coverage.json research/frontier-28-batch-3.coverage.json research/frontier-28-batch-4.coverage.json research/frontier-28-batch-5.coverage.json research/frontier-28-batch-6.coverage.json research/frontier-28-batch-7.coverage.json research/frontier-28-batch-8.coverage.json research/frontier-28-batch-9.coverage.json research/frontier-28-batch-10.coverage.json research/frontier-28-batch-11.coverage.json --min-checks 1`
- Output: `live finite-smoke 1 checks`
- Output: `live proof-contract 339 items checked`
- Output: `live coverage-checklist 570 harvested results`
- Output: `live precheck 9162 items checked`

Changed record:

- None. The current frontier-28 liveness repair was already present in batch `9`; this dispatch only corrected the stale report state.

## Risk review

`node tools/risk-report.mjs research/frontier-28-proof-contracts.json --require-reviewed` exited `0` on Tuesday, September 1, 2026 and reported `0 error(s), 339 item(s) routed`.

There is no missing `risk_review` defect on the current merged bytes.

## Defect ledger

I did not append a `research/defect-ledger.jsonl` row in this dispatch. No candidate resolved to an item-content defect.

## Final state

- Changed files:
  - `research/frontier-28-batch-8.proof-contracts.json`
  - `research/frontier-28-batch-10.proof-contracts.json`
  - `research/frontier-28-proof-contracts.json`
  - `research/frontier-28-alpha-contract-audit.md`
- `boundary-audit --fail-on-contradicted --fail-on-template`: pass, with `0` template clusters, `0` contradicted candidates, and `1` upheld detector-inapplicability row.
- `citation-fidelity --fail-on-missing-quote`: pass.
- `gate-liveness --min-checks 1`: pass.
- `risk-report --require-reviewed`: pass.
- `proof-contract --strict`: pass, `339/339` items checked.

## Remaining blockers

- None in this dispatch scope.
