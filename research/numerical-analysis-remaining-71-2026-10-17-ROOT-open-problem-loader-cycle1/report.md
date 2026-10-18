# Open-problem loader repair — cycle 1

Date: 2026-10-17. File ownership: `tools/proof-contract.mjs` only.

Confirmed the native batch-1 escalation against current code and SCHEMA.md's Open problems rules. `validateItem` already has the correct `item.kind === 'open-problem'` branch: it requires formulation/status/sources review records with passing verdicts and concrete evidence, rejects nonempty proof worksheets, and returns before ordinary proof validation. However, `loadItem` returned id/body/dependency lists/provenance without kind, so this branch was unreachable for every loaded item. The batch-1 contract really contains `open_problem_review` for `op-optimal-star-discrepancy-order-dimension-at-least-three`; the on-disk item really declares `kind: open-problem`.

Changed `loadItem` to return `kind: scalar(fm, 'kind')`, adding the same small top-level scalar reader convention already used by `tools/depcheck.mjs`, `tools/extcheck.mjs`, and `tools/fwdcheck.mjs`. It reads ordinary bare or quoted kind values and returns undefined for an absent kind. This keeps the repair confined to transporting the already-declared discriminator into the existing branch.

All ordinary citation, step, boundary and strict-entry checks are unchanged. Every non-open-problem kind, including physics and legacy proof-bearing items, still follows the existing ordinary branch; missing kind still follows that branch. No content-policy, publication, logical-dependency, schema or proof requirements were relaxed. The sibling center-point example and its proof contract were not edited. No active author's carrier, manifest, engine state, hash, recertification or control was edited.

Per the user's test waiver and root's direction, no tests, validators, gates or whole-corpus checks were run. This report records code inspection and the change, not a passing runtime result. Root will validate the exact completed batch-1 contract after shared manifests stabilize.

Changed paths:

- `tools/proof-contract.mjs`
- `research/N-ROOT-open-problem-loader-cycle1/report.md`
