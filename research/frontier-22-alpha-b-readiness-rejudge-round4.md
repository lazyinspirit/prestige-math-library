# Frontier-22 group b — Step 10 readiness re-attestation, round 4

## Outcome

| item | outcome | evidence and repair |
|---|---|---|
| `ex-primary-localisation-kills-a-component` | `confirmed_fatal` | The example invoked isolated-component recovery after proving primaryity, but had not proved that the displayed decomposition was minimal. The repaired proof now records the exact minimality definition, proves the prime radicals `(x)` and `(x,y)` are distinct, proves irredundancy using `y^2∈(x,y)^2\(x)` and `x∈(x)\(x,y)^2`, and identifies `(x)` as isolated from `(x)⊊(x,y)` before invoking recovery. Ledger `frontier-22-S10R4-b-001`. |

## Replay target

- `ex-primary-localisation-kills-a-component`

No rejudge was initiated in this dispatch.

## Artifacts and checks

- Appended the exact guarded outcome to `research/frontier-22-judge-adjudications.jsonl`.
- Appended the matching defect row through the normal interface; `research/DEFECT-LEDGER.md` was regenerated.
- Synchronized `research/frontier-22-batch-2.proof-contracts.json` and regenerated `research/frontier-22-proof-contracts.json`.
- Focused precheck, render, and strict proof-contract checks passed.
- Batch-2 citation fidelity and required risk review passed.
- Defect-ledger validation and exact closure coverage passed.
- The item remains `status: draft` with no stale judge stamp.
- `git diff --check` passed.

## Blockers

None. The repaired example awaits the supervising session's targeted replay.
