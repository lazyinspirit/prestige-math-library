# Step 9 — changed-mathematics adjudication, run `frontier-21`

Alpha, 2026-08-28. Dispatch label `step9-changes-adjudicate-1`.

`research/frontier-21-step9-changes.json` scopes exactly one changed item:
`thm-levi-and-hartogs-pseudoconvexity-for-c-two-domains`. I read the current
judge rejection row, the item, its cited dependency
`thm-maximum-principle-for-plane-subharmonic-functions`, the owning manifest
`research/frontier-21-batch-8.pages.json`, and the owning proof contract
`research/frontier-21-batch-8.proof-contracts.json`.

## Exact tuple handled

| item | model | `context_sha256` | judge `item_sha256` | pre-edit guard `item_sha256` | outcome |
|---|---|---|---|---|---|
| `thm-levi-and-hartogs-pseudoconvexity-for-c-two-domains` | `gpt-5.6-terra` | `54349e65e19ffd31c895a7fb54eb36a9e3f76f08999c9bb05074e901737455de` | `f99d8a8683f2f6155a2ef16392adf575f83e8be9895888548cd4c02be364c836` | `28b6c8b63b14d36f535ee9130cad3f3d5f455bf13a5b95d128eb46c7fd9cddfb` | `confirmed_nonfatal` |

The matching adjudication row was appended to
`research/frontier-21-judge-adjudications.jsonl` with the guard-form
pre-edit hash, as required.

## Evidence and outcome

The judge objection is real, so this is not `false_positive`. In the current
item, [L4] says:

> A plane subharmonic function cannot exceed its finite boundary maximum on a
> disc unless it is constant.

But the cited dependency
`items/thm-maximum-principle-for-plane-subharmonic-functions.md` states only:

> If `u` attains a finite maximum at an interior point of a complex domain,
> then `u` is constant on that domain.

So [L4] is an overcompressed citation: it credits the cited theorem with the
disc boundary form rather than the interior-maximum form it actually states.

That defect is nevertheless nonfatal on the current bytes. Step 2.1 already
supplies the extra local data the disc-boundary conclusion needs: for each
`0 < s <= s_0`, the function `u o Phi_s` is subharmonic on `D` and continuous
on its closure, while its boundary values are at most `M`. If `u o Phi_s`
exceeded `M` anywhere inside `D`, continuity on the compact closed disc would
produce a finite maximum point. Because every boundary value is `<= M`, that
maximizer would be interior, and the exact cited theorem would force
`u o Phi_s` to be constant on `D`, contradicting the same boundary bound.
Hence `u(Phi_s(0)) <= M` follows immediately from the cited theorem plus the
step's own stated hypotheses.

The theorem statement, the analytic-disc construction from step 1.1, and the
contradiction in step 2.1 therefore remain mathematically correct. The defect
is a local citation overstatement, not a broken proof or false claim, so the
correct adjudication is `confirmed_nonfatal`.

## Manifest, contract, and edit scope

No content edit is licensed or needed. The owning batch manifest and proof
contract remain unchanged:

- `research/frontier-21-batch-8.pages.json` already owns the item inside the
  Step-9 changed scope.
- `research/frontier-21-batch-8.proof-contracts.json` already records the exact
  [L4] quote from the cited theorem and the current step-2.1 inputs.

This dispatch is not a contract-detector dispatch, so the contract-detector
repair clause is inapplicable here.

Edit performed: append-only adjudication row in
`research/frontier-21-judge-adjudications.jsonl`.

Defect-ledger row: none.

Rejudge target: none.

## Checks

| check | command | result |
|---|---|---|
| Step-9 delta | `node tools/step9-changes.mjs --touches research/frontier-21-touches.json --baseline post-step8 --manifests research/frontier-21-batch-1.pages.json,...,research/frontier-21-batch-10.pages.json --out research/frontier-21-step9-changes.json --scope-out research/frontier-21-step9-changes.pages.json --check` | `0 created, 1 modified, 0 deleted since "post-step8"` |
| Judge closure | `node tools/level-coverage.mjs --judge-only --verify-current-context --judge-ledger research/frontier-21-judge.jsonl --judge-adjudications research/frontier-21-judge-adjudications.jsonl --out research/frontier-21-step9-judge-closure.json research/frontier-21-step9-changes.pages.json` | `0 need rejudge, 0 unadjudicated, 0 open fatal, 1 adjudicated rejection closed nonfatally` |

`research/frontier-21-step9-judge-closure.json` now reads `closed: true`.
`autopilot status --run frontier-21` still shows the earlier
2026-08-27T22:42:34.189Z blocker snapshot because the engine has not rerun the
stage yet; the refreshed closure artifact is the current on-disk authority for
this dispatch.
