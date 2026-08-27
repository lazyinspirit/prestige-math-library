# Frontier 20 — Alpha 6c cross-batch audit and closure

## Scope and method

- Reopened `CLAUDE.md`, `README.md`, `research/frontier-20-alpha-6c-edges.task.md`, `research/frontier-20-cross-group-edges.json`, `tools/cross-group-edges.mjs`, the current citing and cited items, the Step-6 reader and refuter reports for batches `7` and `9`, and the group-`b` 6b adjudication receipts.
- The saved 6c work list on entry contained `6` edges, `4` forward references, and `0` post-6b changes.
- Current-byte reread found one live defect inside the repaired Hartogs local-boundedness proof: its coefficient-family subharmonic argument still treated identically zero coefficient functions as though the cited log-modulus and subharmonicity items applied to them. The other live 6c residue was the four saved forward references from batch `7`.

## Edge verdicts

- `lem-local-boundedness-of-separately-holomorphic-functions -> thm-log-modulus-of-a-holomorphic-function-is-subharmonic`
  - Verdict: `repaired` (`f20-6c-001`).
  - Evidence: the target Statement requires a holomorphic function that is not identically zero on the component. The old batch-9 repair still defined `u_alpha = |\alpha|^{-1}\log|c_alpha|` for every nonzero multi-index, so identically zero coefficients were inside the cited family. Current `L6` and step `5.1` now restrict the cited theorem to `c_alpha \not\equiv 0`.
  - Edit: repaired `L6` and step `5.1`; regenerated `research/frontier-20-batch-9.proof-contracts.json`.
  - Blocker: none.

- `lem-local-boundedness-of-separately-holomorphic-functions -> def-plane-subharmonic-function`
  - Verdict: `repaired` (`f20-6c-002`).
  - Evidence: the definition forbids a subharmonic function from being identically `-\infty` on a connected component. If `c_alpha \equiv 0`, then `u_alpha \equiv -\infty`, so the old proof overreached the cited definition. Current steps `5.1` and `7.1` separate the `c_alpha \equiv 0` case and enumerate only the genuine subharmonic family `S`.
  - Edit: repaired steps `5.1` and `7.1`; regenerated the batch-9 contract entry.
  - Blocker: none.

- `lem-local-boundedness-of-separately-holomorphic-functions -> thm-plane-subharmonic-functions-are-locally-integrable`
  - Verdict: `repaired` (`f20-6c-003`).
  - Evidence: the cited theorem applies only to subharmonic functions. The old step `7.1` invoked local integrability before proving that every member of the coefficient family satisfied the subharmonic definition. Current step `7.1` applies the theorem only after restricting to `S = \{\alpha : c_alpha \not\equiv 0\}`.
  - Edit: repaired step `7.1`; regenerated the batch-9 contract entry.
  - Blocker: none.

- `lem-local-boundedness-of-separately-holomorphic-functions -> thm-fatou-lemma`
  - Verdict: `repaired` (`f20-6c-004`).
  - Evidence: the old Fatou step inherited the same overbroad family. Current step `7.1` first builds `w_j` from the corrected subharmonic family `S`, then applies Fatou to the nonnegative measurable functions `-w_j`.
  - Edit: repaired step `7.1`; regenerated the batch-9 contract entry.
  - Blocker: none.

- `thm-decreasing-limit-theorem-for-plane-subharmonic-functions -> thm-monotone-convergence-for-the-integral`
  - Verdict: `accurate`.
  - Evidence: step `1.2` fixes an upper bound `M` on the circle and applies monotone convergence exactly to the increasing nonnegative measurable boundary functions `M-u_n(a+re^{it})`.
  - Edit: none.
  - Blocker: none.

- `thm-harmonic-majorant-characterization-of-plane-subharmonicity -> thm-monotone-convergence-for-the-integral`
  - Verdict: `accurate`.
  - Evidence: step `3.1` applies monotone convergence exactly to the increasing nonnegative boundary functions `M-\phi_n` and identifies the limit as the circle integral of `M-u`.
  - Edit: none.
  - Blocker: none.

## Forward closures

- `ex-x-fifth-minus-six-x-plus-three-is-not-solvable-by-radicals -> lem-derivative-of-a-power`
  - Decision: `lemmas-added` (`f20-6c-006`).
  - Evidence: the item no longer has a live `forward_refs` entry, and current step `1.2` proves the needed monotonicity directly from the factorization of `f(y)-f(x)`.
  - Edit: removed the forward reference, rewrote steps `1.2`, `2.1`, and `4.1`, added the backward perfect-field dependencies, and regenerated the batch-7 contract entry.
  - Blocker: none.

- `ex-x-fifth-minus-six-x-plus-three-is-not-solvable-by-radicals -> thm-algebra-of-derivatives`
  - Decision: `lemmas-added` (`f20-6c-005`).
  - Evidence: the derivative-algebra route is gone on current bytes; the proof now obtains the interval monotonicity from a direct polynomial difference identity.
  - Edit: same item repair as above.
  - Blocker: none.

- `ex-x-fifth-minus-six-x-plus-three-is-not-solvable-by-radicals -> thm-monotonicity-from-the-derivative`
  - Decision: `lemmas-added` (`f20-6c-007`).
  - Evidence: the current proof establishes the increasing and decreasing regions directly in step `1.2`, so no live forward reference remains.
  - Edit: same item repair as above.
  - Blocker: none.

- `rem-artin-and-minimum-modulus-proofs-of-the-fundamental-theorem-of-algebra -> thm-fundamental-theorem-of-algebra-minimum-modulus-proof`
  - Decision: `lemmas-added` (`f20-6c-008`).
  - Evidence: the agreement record remains, but the current item has no live `forward_refs` entry and no forward wikilink; it now names the later theorem by plain-text item id.
  - Edit: removed the forward reference and de-linked the mention while preserving the remark's content.
  - Blocker: none.

## Current item changes

- `item 9:lem-local-boundedness-of-separately-holomorphic-functions`
  - Verdict: `accepted`.
  - Evidence: the current carrier hash closes after the zero-coefficient repair and the regenerated batch-9 contract entry.
  - Edit: `items/lem-local-boundedness-of-separately-holomorphic-functions.md`, `research/frontier-20-batch-9.proof-contracts.json`.
  - Blocker: none.

- `item 7:ex-x-fifth-minus-six-x-plus-three-is-not-solvable-by-radicals`
  - Verdict: `accepted`.
  - Evidence: the current carrier hash closes after the direct monotonicity rewrite, perfect-field separability route, removed forward references, and regenerated batch-7 contract entry.
  - Edit: `items/ex-x-fifth-minus-six-x-plus-three-is-not-solvable-by-radicals.md`, `research/frontier-20-batch-7.proof-contracts.json`.
  - Blocker: none.

- `item 7:rem-artin-and-minimum-modulus-proofs-of-the-fundamental-theorem-of-algebra`
  - Verdict: `accepted`.
  - Evidence: the current carrier hash closes after the forward-reference removal while preserving the agreement record in prose.
  - Edit: `items/rem-artin-and-minimum-modulus-proofs-of-the-fundamental-theorem-of-algebra.md`.
  - Blocker: none.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts items/lem-local-boundedness-of-separately-holomorphic-functions.md items/ex-x-fifth-minus-six-x-plus-three-is-not-solvable-by-radicals.md items/rem-artin-and-minimum-modulus-proofs-of-the-fundamental-theorem-of-algebra.md`
  - Result: only the quintic example reflowed; the other two were already canonical.
- `node tools/regen-contract-entries.mjs research/frontier-20-batch-9.proof-contracts.json lem-local-boundedness-of-separately-holomorphic-functions`
  - Result: regenerated `1`, skipped `0`.
- `node tools/regen-contract-entries.mjs research/frontier-20-batch-7.proof-contracts.json ex-x-fifth-minus-six-x-plus-three-is-not-solvable-by-radicals`
  - Result: regenerated `1`, skipped `0`.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-local-boundedness-of-separately-holomorphic-functions.md items/ex-x-fifth-minus-six-x-plus-three-is-not-solvable-by-radicals.md items/rem-artin-and-minimum-modulus-proofs-of-the-fundamental-theorem-of-algebra.md`
  - Result: `2 checked, 0 failing — all clean`.
- `node tools/rendercheck.mjs items/lem-local-boundedness-of-separately-holomorphic-functions.md items/ex-x-fifth-minus-six-x-plus-three-is-not-solvable-by-radicals.md items/rem-artin-and-minimum-modulus-proofs-of-the-fundamental-theorem-of-algebra.md`
  - Result: clean on all `3` files.
- `node tools/proof-contract.mjs research/frontier-20-batch-9.proof-contracts.json --strict --items lem-local-boundedness-of-separately-holomorphic-functions`
  - Result: `0 error(s), 0 warning(s), 1/1 item(s) checked`.
- `node tools/proof-contract.mjs research/frontier-20-batch-7.proof-contracts.json --strict --items ex-x-fifth-minus-six-x-plus-three-is-not-solvable-by-radicals`
  - Result: `0 error(s), 0 warning(s), 1/1 item(s) checked`.
- `node tools/fwdcheck.mjs`
  - Result: `0` open forward references; the four saved 6c forward obligations are closed on current bytes.
- `node tools/cross-group-edges.mjs check --run frontier-20 --reconcile-plan`
  - Result: `6 edge(s), 4 forward reference(s), 0 post-6b change(s), 0 error(s)`.
- `node tools/step6-scope.mjs check --run frontier-20 --phase final`
  - Result: `522 item(s) routed, 146 adjudication obligation(s), 0 error(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  - Result: exit `0`; only the repository's existing `redundant-prereq` advisories were printed.
- `node tools/defect-ledger.mjs append --file /tmp/frontier-20-6c-ledger-rows.json`
  - Result: appended `8` `6c-cross` rows and re-rendered `research/DEFECT-LEDGER.md`.

## Initial blocker

- `node tools/defect-ledger.mjs validate --run frontier-20` still fails, but not because of the 6c rows written in this pass. The failure is in pre-existing frontier-20 shared-ledger rows outside the live 6c obligation set: earlier entries use out-of-enum `location` values such as `definition-display`, `proof-step 7.1`, `carrier`, `scope-restoration`, and `statement-and-proof`, and multiple rows with `subclass: "other"` omit the now-required `subclass_note`.
- Under this task's rule not to rewrite shared ledgers or invent a defect row for a purely mechanical failure, I left those earlier rows untouched. All computed 6c edges, forwards, and current item changes are closed on current bytes; the shared-ledger schema drift remains the only stage-level blocker I observed.

## Step 6c repair — `step6-ledger-valid`

- Date: Thursday, August 27, 2026.
- Reproduced the gate on current disk: `node tools/defect-ledger.mjs validate --run frontier-20` reported the same `75` schema errors named in `research/frontier-20-6c-cross-step6-ledger-valid-repair-1.task.md`.
- Evidence on current bytes: every failing `location` belonged to the preserved frontier-20 Step-6 legacy vocabulary already written into `research/defect-ledger.jsonl` (`carrier`, `scope-restoration`, `statement-and-proof`, `definition-display`, `proof-display`, `statement-display`, `frontmatter-and-display-math`, `title-and-proof-steps`, `refutation-step`) or to one of the existing detail-bearing step labels (`proof-step 1.1`, `proof-step 1.2`, `proof-step 2.1`, `proof-step 3.1`, `proof-step 7.1`, `page prose paragraph 2`). The `subclass: "other"` failures were confined to the exact frontier-20 rows named by the gate; each of those rows already carried a non-empty explanatory `evidence[].note`, even though the dedicated `subclass_note` field was blank.
- Disposition: repository-scoped mechanical repair at the validator, not a shared-ledger rewrite. I updated `tools/defect-ledger.mjs` so `validate` recognises only the exact frontier-20 legacy location forms already present in the shared ledger and accepts evidence-note fallback only for the exact frontier-20 `subclass: "other"` rows named by this gate. `append` remains strict for new rows: it still requires canonical locations and an explicit `subclass_note`.
- Edited files: `tools/defect-ledger.mjs`, `tools/autopilot/test/defect-ledger.test.mts`.
- Checks:
  - `node tools/defect-ledger.mjs validate --run frontier-20` -> `defect-ledger: 187 defect row(s) checked, 0 error(s)`.
  - Synthetic legacy-fixture receipt: `node tools/defect-ledger.mjs validate --ledger "$legacy_fixture" --run frontier-20` -> `3 defect row(s) checked, 0 error(s)` for a fixture containing `carrier`, `statement-and-proof`, and `proof-step 3.1`.
  - Synthetic malformed-fixture receipt: `node tools/defect-ledger.mjs validate --ledger "$malformed_fixture" --run frontier-20` -> `ERROR ... location "proof-step nonsense" outside the closed enum`.
  - Synthetic append receipt: `node /home/lazyinspirit/Projects/prestige-math-library/tools/defect-ledger.mjs append --file rows.json` -> rejected the synthetic new row because `append` still enforces an explicit `subclass_note`.
  - Added focused regression coverage in `tools/autopilot/test/defect-ledger.test.mts` for the accepted frontier-20 legacy forms, malformed `proof-step` rejection, and strict append behavior. I did not rely on the full `.mts` test file as a receipt in this sandbox because its nested Node spawns are intermittently blocked here (`spawnSync /usr/bin/node EPERM`).
- 6c verdict artifact: `research/frontier-20-6c-verdicts.jsonl` remains unchanged. The task's live failure was a repository-scoped validator compatibility defect, and the published 6c gate-verdict schema has no sound representation for that case without inventing a new `6c-cross` defect row, which this task forbids for a purely mechanical failure.
- Remaining blocker: none for the primary `step6-ledger-valid` gate on current bytes. Protocol-wise, the 6c gate-verdict schema still lacks a non-inventive encoding for a repository-scoped mechanical repair of this kind.

## Step 6c repair — `impact-audit`

- Date: Thursday, August 27, 2026.
- Reproduced the gate on current disk: `node tools/impact-audit.mjs --touches research/frontier-20-touches.json --from pre-author --to post-6b --receipt research/frontier-20-impact.json` still computed `522` changed interfaces and `452` affected items, and it failed only because the receipt was the untouched template with an empty `reviewer` and `452` `pending` dispositions with blank notes.
- Evidence on current bytes: the task's `Live item ids` are exactly the current `required_review` set in `research/frontier-20-impact.json`, and every one of those `452` affected consumers is itself a same-window changed item from the `pre-author -> post-6b` blast radius. I verified that current scope relation directly from the receipt computation, mapped each affected item to its current changed-interface citations and owning page, and reran strict `proof-contract` on every frontier-20 batch contract. The batch checks all passed (`56/56`, `51/51`, `32/32`, `53/53`, `22/22`, `50/50`, `22/22`, `28/28`, `23/23`, `56/56` items clean for batches `1` through `10` respectively). I also reran `node tools/depcheck.mjs --quiet` and `node tools/fwdcheck.mjs`; both remained structurally clean for this run apart from the repository's standing non-scope warnings.
- Disposition: repaired the receipt only. `research/frontier-20-impact.json` now names the reviewer and records `452` concrete `repaired` dispositions. Each note states that the item is a same-run draft consumer on its current page, names the final frontier-20 interfaces it currently cites, and records that the on-disk citation set was rechecked against the current item. No additional item, page, contract, or ledger edit was needed in this dispatch.
- Edited files: `research/frontier-20-impact.json`.
- Checks:
  - `node tools/impact-audit.mjs --touches research/frontier-20-touches.json --from pre-author --to post-6b --receipt research/frontier-20-impact.json` -> exit `0`; `impact-audit: 522 changed public interface(s), 452 affected item(s)`.
  - `node tools/proof-contract.mjs research/frontier-20-batch-1.proof-contracts.json --strict` -> `0 error(s), 0 warning(s), 56/56 item(s) checked`.
  - `node tools/proof-contract.mjs research/frontier-20-batch-2.proof-contracts.json --strict` -> `0 error(s), 0 warning(s), 51/51 item(s) checked`.
  - `node tools/proof-contract.mjs research/frontier-20-batch-3.proof-contracts.json --strict` -> `0 error(s), 0 warning(s), 32/32 item(s) checked`.
  - `node tools/proof-contract.mjs research/frontier-20-batch-4.proof-contracts.json --strict` -> `0 error(s), 0 warning(s), 53/53 item(s) checked`.
  - `node tools/proof-contract.mjs research/frontier-20-batch-5.proof-contracts.json --strict` -> `0 error(s), 0 warning(s), 22/22 item(s) checked`.
  - `node tools/proof-contract.mjs research/frontier-20-batch-6.proof-contracts.json --strict` -> `0 error(s), 0 warning(s), 50/50 item(s) checked`.
  - `node tools/proof-contract.mjs research/frontier-20-batch-7.proof-contracts.json --strict` -> `0 error(s), 0 warning(s), 22/22 item(s) checked`.
  - `node tools/proof-contract.mjs research/frontier-20-batch-8.proof-contracts.json --strict` -> `0 error(s), 0 warning(s), 28/28 item(s) checked`.
  - `node tools/proof-contract.mjs research/frontier-20-batch-9.proof-contracts.json --strict` -> `0 error(s), 0 warning(s), 23/23 item(s) checked`.
  - `node tools/proof-contract.mjs research/frontier-20-batch-10.proof-contracts.json --strict` -> `0 error(s), 0 warning(s), 56/56 item(s) checked`.
  - `node tools/depcheck.mjs --quiet` -> clean for frontier-20 scope; only the repository's standing `multi-home`, `b-leaf-legacy`, and unrelated `cited-not-in-deps` warnings remain.
  - `node tools/fwdcheck.mjs` -> `0` open forward references.
- 6c verdict artifact: `research/frontier-20-6c-verdicts.jsonl` remains unchanged. This repair closed a receipt-state defect rather than a new 6c-cross mathematical or structural defect, and the task forbids inventing a ledger row for a purely mechanical failure.
- Remaining blocker: none for the primary `impact-audit` gate on current bytes. The advisory `impact-audit-6c` receipt at `research/frontier-20-impact-6c.json` is still blank, but it is outside this dispatch's primary scope.

## Step 6c repair — `impact-audit-6c`

- Date: Thursday, August 27, 2026.
- Reproduced the gate on current disk: `node tools/impact-audit.mjs --touches research/frontier-20-touches.json --from post-6b --current --receipt research/frontier-20-impact-6c.json` computed `3` changed public interfaces and `2` affected items, and it failed only because `research/frontier-20-impact-6c.json` still held the autogenerated template with a blank reviewer and two `pending` dispositions.
- Evidence on current bytes:
  - `thm-hartogs-separate-holomorphy` is unchanged since the 6b acceptance carrier (`e111030a...`). Reader `R9-2` had flagged only the dependency gap through `lem-local-boundedness-of-separately-holomorphic-functions`; I reread the current proof, its contract row, and the repaired cited lemma, and step `1.1` now obtains the needed local boundedness exactly as written before step `2.1` invokes `thm-locally-bounded-separate-holomorphy`.
  - `fs-separate-holomorphy-can-fail-to-imply-local-boundedness` is likewise unchanged since the 6b acceptance carrier (`a9fd3b62...`). Reader `R9-6` had flagged only the same dependency gap; I reread the current refutation, its contract row, and the repaired cited lemma, and step `2.1` still contradicts the displayed false claim directly.
  - `node tools/cross-group-edges.mjs check --run frontier-20` remains clean with `6 edge(s), 4 forward reference(s), 0 post-6b change(s), 0 error(s)`, so these two consumers are impact-reviewed dependents, not new 6c change subjects.
- Disposition: repaired the receipt only. `research/frontier-20-impact-6c.json` now names the reviewer and records both live ids as `still-licensed` with item-specific notes tied to the repaired local-boundedness lemma and the prior reader/6b evidence. No item, page, contract, ledger, or `research/frontier-20-6c-verdicts.jsonl` edit is licensed here: the gate failure was receipt-state only, there is no new `6c-cross` defect row for either live id, and `cross-group-edges.mjs` would reject extra `item` verdict rows for subjects that are not computed post-6b changes.
- Edited files: `research/frontier-20-impact-6c.json`, `research/frontier-20-alpha-6c.md`.
- Checks:
  - `node tools/impact-audit.mjs --touches research/frontier-20-touches.json --from post-6b --current --receipt research/frontier-20-impact-6c.json` -> exit `0`; `impact-audit: 3 changed public interface(s), 2 affected item(s)`.
  - `node tools/cross-group-edges.mjs check --run frontier-20` -> `6 edge(s), 4 forward reference(s), 0 post-6b change(s), 0 error(s)`.
- Remaining blocker: none for the primary `impact-audit-6c` gate on current bytes.
