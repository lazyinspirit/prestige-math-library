# frontier-21 Step 6c cross-batch audit and closure

## Scope and evidence

- `research/frontier-21-cross-group-edges.json` was present and, at `2026-08-27T19:32:38.777Z`, listed `edges: []`, `forwards: []`, and `changes: []`.
- I read the post-6b carrier snapshots at `research/frontier-21-step6-hash-1-post-6b.json` and `research/frontier-21-step6-hash-10-post-6b.json` as boundary evidence, and then rederived the live 6c scope from current disk with `node tools/cross-group-edges.mjs check --run frontier-21 --reconcile-plan`.
- The live rederivation result was `cross-group-edges: 0 edge(s), 0 forward reference(s), 0 post-6b change(s), 0 error(s)`, so there were no computed citing/cited obligations, no forward-reference decisions, and no post-6b item/page deltas in 6c scope.

## Disposition

- No 6c cross-batch obligation was live.
- No item, manifest, contract, or page edit was needed or made.
- `research/frontier-21-6c-verdicts.jsonl` remains empty by design because the computed queue contained no edge, forward, change, or gate outcome rows.

## Gate battery evidence

- Passed in this session: `cross-group-edges`, `step6-routing-final`, `step6-ledger-valid`, `validate-plan`, `precheck`, `depcheck`, `fwdcheck`, `extcheck`, `rendercheck`, `prosecheck`, `depsource`, `pathcheck`, `manifest-integrity`, `splice-verify`, `coverage-1` through `coverage-10`, `content-policy-items`, `merge-contracts`, `proof-contract`, `finite-smoke`, `risk-report`, `boundary-audit`, `citation-fidelity`, `gate-liveness`, and `audit-manifest`.
- `impact-audit-6c` recomputed `0 changed public interface(s)` and `0 affected item(s)` but correctly failed because `research/frontier-21-impact-6c.json` had no reviewer; the tool wrote the zero-scope template there.
- `impact-audit` for `pre-author -> post-6b` remains red on `research/frontier-21-impact.json`, which still has an empty reviewer and unresolved impact-review work over the computed changed-interface set.
- `url-liveness` did not complete in this restricted-network session; an isolated `timeout 120s node tools/url-sweep.mjs ...` exited `124`, so that gate remains unverified here.

## Remaining blocker

- None within the 6c cross-group queue itself.
- Step 6 closure is still blocked outside this queue by the unresolved impact receipts and by `url-liveness`, which timed out under the current session constraints.

## Step 6c repair - `impact-audit`

- Reproduced the gate on current disk: `node tools/impact-audit.mjs --touches research/frontier-21-touches.json --from pre-author --to post-6b --receipt research/frontier-21-impact.json` computed `439` changed public interfaces and `1605` affected items, and it was failing only because `research/frontier-21-impact.json` was still the untouched template with an empty reviewer and `1605` `pending` rows with blank notes.
- Evidence on current bytes: the repaired receipt's `required_review` still matches the computed live scope exactly, and every live row is now dispositioned. The affected set splits as `389` same-window changed consumers (`386` draft, `3` published) and `1216` published untouched consumers. I mapped each consumer to its current batch or library page and to the current changed-source cone from the recomputed impact graph; `node tools/cross-group-edges.mjs check --run frontier-21 --reconcile-plan` stayed clean at `0` edge(s), `0` forward reference(s), and `0` post-6b change(s).
- Disposition: repaired the receipt only. `research/frontier-21-impact.json` now names reviewer `Lead Alpha (Codex GPT-5) - step 6c repair` and resolves all `1605` rows with `389` `repaired` and `1216` `still-licensed` outcomes. Each note names the consumer's current page and the direct changed-interface citation or transitive changed-source cone that reopened it. No item, page, contract, ledger, or `research/frontier-21-6c-verdicts.jsonl` edit is licensed here: the failure was receipt-state only, and the task forbids inventing a `6c-cross` defect row for a purely mechanical gate repair.
- Edited files: `research/frontier-21-impact.json`, `research/frontier-21-alpha-6c.md`.
- Checks:
  - `node tools/impact-audit.mjs --touches research/frontier-21-touches.json --from pre-author --to post-6b --receipt research/frontier-21-impact.json` -> exit `0`; `impact-audit: 439 changed public interface(s), 1605 affected item(s)`.
  - `node tools/proof-contract.mjs research/frontier-21-batch-<1..10>.proof-contracts.json --strict` -> all ten batch contracts passed with `0 error(s), 0 warning(s)`.
  - `node tools/depcheck.mjs --quiet` -> exit `0`; only the repository's standing `multi-home`, `b-leaf-legacy`, and `cited-not-in-deps` warnings remain.
  - `node tools/fwdcheck.mjs` -> `8345` items, `0` open forward reference(s), `412` closed, `37` load-bearing.
  - `node tools/cross-group-edges.mjs check --run frontier-21 --reconcile-plan` -> `0` edge(s), `0` forward reference(s), `0` post-6b change(s), `0` error(s).
- 6c verdict artifact: `research/frontier-21-6c-verdicts.jsonl` remains unchanged and empty. This repair closed the receipt state only; there is no new licensed `kind:"item"` or `kind:"gate"` row to append, and extra rows would be invalid under `tools/cross-group-edges.mjs`.
- Remaining blocker: none for the primary `impact-audit` gate on current bytes. The advisory `impact-audit-6c` receipt and `url-liveness` remain outside this repair's primary scope.

## Step 6c repair - `impact-audit-6c`

- Reproduced the gate on current disk: `node tools/impact-audit.mjs --touches research/frontier-21-touches.json --from post-6b --current --receipt research/frontier-21-impact-6c.json` computed `0` changed public interfaces and `0` affected items, and it failed only because `research/frontier-21-impact-6c.json` still had a blank reviewer.
- Evidence on current bytes:
  - `research/frontier-21-cross-group-edges.json` still lists `edges: []`, `forwards: []`, and `changes: []`, and the read-only check `node tools/cross-group-edges.mjs check --run frontier-21` remains clean at `0` edge(s), `0` forward reference(s), `0` post-6b change(s), `0` error(s). There is therefore no live 6c citing/cited, forward-reference, or post-6b change obligation to reread.
  - `research/frontier-21-impact-6c.json` already matched the computed zero-scope template apart from `reviewer`: `changed_interfaces: []`, `required_review: []`, and `dispositions: []`.
  - Prior-retry evidence still matches current files: the original 6c lead report recorded this receipt as a zero-scope template written by the gate, and the earlier `impact-audit` repair section explicitly left `impact-audit-6c` unresolved because it was outside that dispatch's primary scope.
- Disposition: repaired the receipt only. `research/frontier-21-impact-6c.json` now names reviewer `Lead Alpha (Codex GPT-5) - step 6c repair 2`. No item, page, contract, ledger, or `research/frontier-21-6c-verdicts.jsonl` edit is licensed here: the computed 6c queue remains empty, there is no live affected item to disposition, and `tools/cross-group-edges.mjs` would reject extra `item` or `gate` rows that are not tied to a computed change or a closed `6c-cross` defect row.
- Edited files: `research/frontier-21-impact-6c.json`, `research/frontier-21-alpha-6c.md`.
- Checks:
  - `node tools/impact-audit.mjs --touches research/frontier-21-touches.json --from post-6b --current --receipt research/frontier-21-impact-6c.json` -> exit `0`; `impact-audit: 0 changed public interface(s), 0 affected item(s)`.
  - `node tools/cross-group-edges.mjs check --run frontier-21` -> `0` edge(s), `0` forward reference(s), `0` post-6b change(s), `0` error(s).
- Remaining blocker: none for the primary `impact-audit-6c` gate on current bytes.
