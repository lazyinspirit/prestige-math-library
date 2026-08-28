# Frontier-22 group b — Step 10 readiness re-attestation, round 3

## Outcome

| item | outcome | evidence and repair |
|---|---|---|
| `ex-primary-localisation-kills-a-component` | `confirmed_fatal` | Steps 2.1–2.2 applied the localization lemma without establishing that `(x)` and `(x,y)^2` were primary with the asserted prime radicals. Before localization, the repaired proof now establishes that `R=k[x,y]` is Noetherian and finitely generated over itself; proves `(x)` is `(x)`-primary using the domain quotient `R/(x)≅k[y]`; and proves `(x,y)^2` is `(x,y)`-primary by classifying the square-zero quotient's units and zero divisors, computing its annihilator radical, and proving `(x,y)` prime. Ledger `frontier-22-S10R3-b-001`. |

## Replay target

- `ex-primary-localisation-kills-a-component`

No rejudge was initiated in this dispatch.

## Artifacts and checks

- Appended the exact guarded outcome to `research/frontier-22-judge-adjudications.jsonl`.
- Appended the matching defect row through the normal interface; `research/DEFECT-LEDGER.md` was regenerated.
- Synchronized `research/frontier-22-batch-2.proof-contracts.json` and regenerated `research/frontier-22-proof-contracts.json`.
- Focused precheck, render, and strict proof-contract checks passed for the repaired example.
- Batch-2 citation fidelity and required risk review passed.
- Defect-ledger validation and exact closure coverage passed.
- The repaired item remains `status: draft` with no stale judge stamp.
- `git diff --check` passed.

## Blockers

None. The repaired example awaits the supervising session's targeted replay.
