# frontier-22 — Alpha 6c cross-batch audit and closure

Date: Friday, August 28, 2026.
Dispatch: `6c-lead`.

## Scope

- Opened `research/frontier-22-cross-group-edges.json`: `0` cross-batch edges,
  `14` forward references, `0` listed post-6b changes.
- Reopened the post-6b carrier snapshots for batches `3` and `5`, the current
  citing items, every cited target item named by the forward list, and the
  local evidence chain in `research/frontier-22-reader-{3,5}.md`,
  `research/frontier-22-refute-5.json`,
  `research/frontier-22-alpha-{a,b}-6b.md`, and the batch notes for
  batches `3` and `5`.
- No cross-batch citation defect and no owner-only page addition, page removal,
  or reading-order change was present in the live 6c scope.

## Forward-reference dispositions

| obligation | evidence | disposition | edit | blocker |
| --- | --- | --- | --- | --- |
| `fs-almost-everywhere-convergence-implies-convergence-in-measure-on-every-measure-space -> cex-indicators-of-unit-interval-translates-converge-almost-everywhere-but-not-in-measure` | The current false statement already proves the translated-unit-interval witness directly; the target item spells out the same witness; batch-5 reader/6b evidence left the refutation sound on current bytes. | `lemmas-added` | Removed `forward_refs` and the companion `Remarks` link. | none |
| `fs-convergence-in-measure-implies-almost-everywhere-convergence -> ex-the-typewriter-sequence-converges-in-measure-and-in-l-one-but-nowhere-pointwise` | The current false statement already proves the typewriter witness directly; the target item gives the same witness in example form; batch-5 reader evidence already accepted the mathematics. | `lemmas-added` | Removed `forward_refs` and the companion `Remarks` link. | none |
| `fs-egorovs-theorem-holds-on-every-measure-space -> cex-indicators-of-unit-interval-translates-show-egorov-needs-finite-measure` | The current false statement already proves failure of almost-uniform convergence for the translated intervals on `R`; the target item is a companion restatement of the same witness; reader-5 had already removed the unused finite-measure dependency. | `lemmas-added` | Removed `forward_refs` and the companion `Remarks` link. | none |
| `fs-l-one-convergence-implies-almost-everywhere-convergence -> ex-the-typewriter-sequence-converges-in-measure-and-in-l-one-but-nowhere-pointwise` | The current false statement already proves the typewriter witness directly; the target item gives the same witness in example form; batch-5 reader/6b evidence left the refutation sound. | `lemmas-added` | Removed `forward_refs` and the companion `Remarks` link. | none |
| `fs-lusins-theorem-says-measurable-functions-are-continuous-off-a-null-set -> ex-lusin-for-the-indicator-of-the-rationals-in-the-unit-interval` | The current false statement uses only the scoped Lusin theorem plus density; the later example is illustrative, not load-bearing; 6b had already repaired the missing countable-choice scope and the refuter's citation slots. | `lemmas-added` | Removed `forward_refs` and the companion `Remarks` link while preserving the 6b choice-scope repair. | none |
| `fs-uniform-integrability-implies-domination-by-an-integrable-function -> ex-a-uniformly-integrable-family-with-no-integrable-majorant` | The current false statement already proves uniform integrability and failure of any integrable majorant for the disjoint-spike family; the later example is the same witness spelled out separately. | `lemmas-added` | Removed `forward_refs`; kept the same witness and restored canonical step numbering after the edit. | none |
| `rem-decomposition-into-irreducible-summands-need-not-be-unique -> ex-the-two-dimensional-trivial-representation-of-c-two-has-many-irreducible-splittings-but-one-isotypic-component` | The current remark can state the two concrete splittings itself; the target example confirms the same `C_2` witness; batch-3 reader evidence left the local example chain mathematically sound. | `lemmas-added` | Removed `forward_refs` and inlined the two splittings in the remark text. | none |
| `rem-finite-measure-implication-table-for-the-main-modes-of-convergence -> cex-indicators-of-unit-interval-translates-converge-almost-everywhere-but-not-in-measure` | The table and closing paragraph only needed witness names, not live later-item links; the target item confirms the translated-interval witness. | `lemmas-added` | Replaced the later-item link with plain-text witness naming. | none |
| `rem-finite-measure-implication-table-for-the-main-modes-of-convergence -> cex-indicators-of-unit-interval-translates-show-egorov-needs-finite-measure` | The closing paragraph only needed the infinite-measure Egorov witness by description; the target item confirms it. | `lemmas-added` | Replaced the later-item link with plain-text witness naming. | none |
| `rem-finite-measure-implication-table-for-the-main-modes-of-convergence -> cex-spikes-converge-almost-everywhere-and-in-measure-but-not-in-l-one` | The false arrows `in measure -> L^1` and `almost everywhere -> L^1` only needed the spike witness by description; the target item confirms it. | `lemmas-added` | Replaced the later-item link with plain-text witness naming in the table. | none |
| `rem-finite-measure-implication-table-for-the-main-modes-of-convergence -> ex-a-uniformly-integrable-family-with-no-integrable-majorant` | The closing paragraph only needed the uniformly integrable disjoint-spike witness by description; the target item confirms it. | `lemmas-added` | Replaced the later-item link with plain-text witness naming. | none |
| `rem-finite-measure-implication-table-for-the-main-modes-of-convergence -> ex-egorov-for-the-powers-x-to-the-k-on-the-unit-interval` | The closing paragraph only needed the explicit `x^k` Egorov core by description; the target item confirms it. | `lemmas-added` | Replaced the later-item link with plain-text witness naming. | none |
| `rem-finite-measure-implication-table-for-the-main-modes-of-convergence -> ex-lusin-for-the-indicator-of-the-rationals-in-the-unit-interval` | The closing paragraph only needed the Dirichlet-function Lusin core by description; the target item confirms it; 6b/refuter evidence had already repaired its local citation defects. | `lemmas-added` | Replaced the later-item link with plain-text witness naming. | none |
| `rem-finite-measure-implication-table-for-the-main-modes-of-convergence -> ex-the-typewriter-sequence-converges-in-measure-and-in-l-one-but-nowhere-pointwise` | The false arrows `in measure -> a.e.` and `L^1 -> a.e.` only needed the typewriter witness by description; the target item confirms it. | `lemmas-added` | Replaced the later-item link with plain-text witness naming in the table and paragraph. | none |

## Introduced current-hash item rows

- Wrote `kind:"item"` `accepted` rows for the eight edited carriers:
  `fs-almost-everywhere-convergence-implies-convergence-in-measure-on-every-measure-space`,
  `fs-convergence-in-measure-implies-almost-everywhere-convergence`,
  `fs-egorovs-theorem-holds-on-every-measure-space`,
  `fs-l-one-convergence-implies-almost-everywhere-convergence`,
  `fs-lusins-theorem-says-measurable-functions-are-continuous-off-a-null-set`,
  `fs-uniform-integrability-implies-domination-by-an-integrable-function`,
  `rem-decomposition-into-irreducible-summands-need-not-be-unique`,
  and `rem-finite-measure-implication-table-for-the-main-modes-of-convergence`.
- The closure also required one additional `kind:"item"` `accepted` row for
  `fs-decomposition-into-irreducible-subrepresentations-is-unique`, because the
  rewritten batch-3 remark changed the quoted `L2` source text and its contract
  entry had to be regenerated to stay current.
- All clean item rows use `defect_ids: []`. The fourteen actual forward-ref
  repairs each own one closed `6c-cross` defect row
  `frontier-22-S6-c-fwd-01` through `frontier-22-S6-c-fwd-14`.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts <8 edited items>`
  Result: `7` unchanged; `fs-uniform-integrability-implies-domination-by-an-integrable-function` reflowed once, then stayed unchanged after the canonical repair.
- `node tools/tsx-run.mjs tools/precheck.mts <6 proof-bearing edited items>`
  Result: `6 checked, 0 failing`.
- `node tools/content-policy.mjs research/frontier-22-batch-3.pages.json research/frontier-22-batch-5.pages.json`
  Result: `70 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/regen-contract-entries.mjs research/frontier-22-batch-3.proof-contracts.json fs-decomposition-into-irreducible-subrepresentations-is-unique`
  Result: regenerated `1` affected batch-3 entry.
- `node tools/regen-contract-entries.mjs research/frontier-22-batch-5.proof-contracts.json fs-uniform-integrability-implies-domination-by-an-integrable-function`
  Result: regenerated `1` affected batch-5 entry.
- `node tools/proof-contract.mjs research/frontier-22-batch-{3,5}.proof-contracts.json --strict`
  Result: batch `3` `24/24` clean; batch `5` `33/33` clean.
- `node tools/citation-fidelity.mjs research/frontier-22-batch-{3,5}.proof-contracts.json --items-dir items --fail-on-missing-quote`
  Result: batch `3` `76` citations, none missing; batch `5` `112` citations, none missing.
- `node tools/defect-ledger.mjs append --file /tmp/frontier-22-alpha-6c-ledger-rows.json`
  Result: appended `14` closed `6c-cross` rows and re-rendered `research/DEFECT-LEDGER.md`.
- `node tools/defect-ledger.mjs validate --run frontier-22`
  Result: `249 defect row(s) checked, 0 error(s)`.
- `node tools/cross-group-edges.mjs check --run frontier-22 --reconcile-plan`
  Result: `0 edge(s), 14 forward reference(s), 0 post-6b change(s), 0 error(s)`.
- `node tools/splice-plan.mjs --run frontier-22 --verify`
  Result: `24 page(s)` across `9` manifests agree with `research/plan-spec.json`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  Result: `OK`; only the repository's standing `redundant-prereq` advisories remain.
- `node tools/step6-scope.mjs check --run frontier-22 --phase final`
  Result: `425 item(s) routed, 181 adjudication obligation(s), 0 error(s)`.

## Blockers

- None in the live Step-6c scope.

## Step 6c repair - `impact-audit`

- Reproduced on Friday, August 28, 2026 with `node tools/impact-audit.mjs --touches research/frontier-22-touches.json --from pre-author --to post-6b --receipt research/frontier-22-impact.json`. The current tree still computes `425` changed public interfaces and `371` affected items. The gate had been failing only because `research/frontier-22-impact.json` was still the untouched template with an empty reviewer and `371` pending rows.
- Evidence on current bytes:
  - Every affected row is a same-window changed in-flight item; there are `0` published untouched consumers in this impact set.
  - I rederived the current impact graph from disk, mapped each affected item to its current batch/page carrier, and wrote an item-specific note naming its current direct changed-interface citations and, where longer, its full changed-source cone on disk.
  - `node tools/cross-group-edges.mjs check --run frontier-22` remains clean at `0` edge(s), `14` forward reference(s), `0` post-6b change(s), `0` error(s), matching the current Step-6c closure state.
- Disposition: repaired the receipt only. `research/frontier-22-impact.json` now names reviewer `Lead Alpha (Codex GPT-5) - step 6c repair` and resolves all `371` live rows as `repaired`. No item, page, contract, ledger, or `research/frontier-22-6c-verdicts.jsonl` edit is licensed here: this was a receipt-state gate failure, and the repair protocol forbids inventing a `6c-cross` defect row for a purely mechanical closure.
- Edited files: `research/frontier-22-impact.json`, `research/frontier-22-alpha-6c.md`.
- Checks:
  - `node tools/impact-audit.mjs --touches research/frontier-22-touches.json --from pre-author --to post-6b --receipt research/frontier-22-impact.json` -> exit `0`; `impact-audit: 425 changed public interface(s), 371 affected item(s)`.
  - `node tools/proof-contract.mjs research/frontier-22-batch-{1..9}.proof-contracts.json --strict` -> batch `1` `44/44`, batch `2` `42/42`, batch `3` `24/24`, batch `4` `46/46`, batch `5` `33/33`, batch `6` `47/47`, batch `7` `33/33`, batch `8` `44/44`, batch `9` `19/19`; all passed with `0` errors, and batch `9` retains one unchanged `shotgun-bracket` warning on `thm-the-erdos-hajnal-property-is-equivalent-to-the-cograph-perfect-and-kappa-formulations`.
  - `node tools/depcheck.mjs --quiet` -> exit `0`; the repository's standing `multi-home`, `b-leaf-legacy`, and `cited-not-in-deps` warnings remain.
  - `node tools/fwdcheck.mjs` -> `8770` items, `0` open forward reference(s), `412` closed, `37` load bearing.
  - `node tools/cross-group-edges.mjs check --run frontier-22` -> `0` edge(s), `14` forward reference(s), `0` post-6b change(s), `0` error(s).
- Remaining blocker: none for the primary `impact-audit` gate on current bytes. The advisory `impact-audit-6c` receipt remains outside this repair's scope.

## Step 6c repair - `impact-audit-6c`

- Date: Friday, August 28, 2026.
- Reproduced the gate on current disk: `node tools/impact-audit.mjs --touches research/frontier-22-touches.json --from post-6b --current --receipt research/frontier-22-impact-6c.json` computed `8` changed public interfaces and `1` affected item, and it was failing only because `research/frontier-22-impact-6c.json` still had a blank reviewer and one unresolved `pending` disposition.
- Evidence on current bytes:
  - `rem-decomposition-into-irreducible-summands-need-not-be-unique` is still the only changed interface with a live consumer in this scope, and that consumer is `fs-decomposition-into-irreducible-subrepresentations-is-unique`.
  - I reread the current false statement, the rewritten remark it cites at `L2`, the companion example witness it cites at `L1`, the current batch-3 proof-contract row, `research/frontier-22-reader-3.md`, and `research/frontier-22-refute-3.json`. The mathematical use is unchanged: step `1.1` still supplies the two-splitting witness, and step `2.1` still uses the remark only for the distinction between canonical isotypic blocks and noncanonical irreducible summands.
  - The live consumer's item text and manifest match the post-6b snapshot, but its batch-3 contract row does not: the current carrier hash remains `5cb187d38baec01b49d5cb191a9c8982fdcd15548c56290a3b7d764f7fa6e1b4`, exactly as already recorded in the existing `kind:"item"` row in `research/frontier-22-6c-verdicts.jsonl`, and the only post-6b delta is the regenerated `L2` quote needed after the remark was inlined.
  - `node tools/cross-group-edges.mjs check --run frontier-22` remains clean at `0` edge(s), `14` forward reference(s), `0` post-6b change(s), `0` error(s), so this repair is receipt-state only and does not introduce a new 6c-cross defect outcome.
- Disposition: repaired the receipt only. `research/frontier-22-impact-6c.json` now names reviewer `Lead Alpha (Codex GPT-5) - step 6c repair 2` and resolves `fs-decomposition-into-irreducible-subrepresentations-is-unique` as `repaired`, with the note tied to the current refutation, the inlined remark text, and the already-recorded current carrier hash. `research/frontier-22-6c-verdicts.jsonl` remains unchanged because no new `6c-cross` defect row exists, and `tools/cross-group-edges.mjs` requires any new `kind:"gate"` verdict to bind exactly one closed 6c-cross defect id.
- Edited files: `research/frontier-22-impact-6c.json`, `research/frontier-22-alpha-6c.md`.
- Checks:
  - `node tools/impact-audit.mjs --touches research/frontier-22-touches.json --from post-6b --current --receipt research/frontier-22-impact-6c.json` -> exit `0`; `impact-audit: 8 changed public interface(s), 1 affected item(s)`.
  - `node tools/proof-contract.mjs research/frontier-22-batch-3.proof-contracts.json --strict` -> `0` error(s), `0` warning(s), `24/24` item(s) checked.
  - `node tools/citation-fidelity.mjs research/frontier-22-batch-3.proof-contracts.json --items-dir items --fail-on-missing-quote` -> `76` citation(s); `QUOTE NOT FOUND — none`; `WIDENING CANDIDATES — none found by the three detectors`.
  - `node tools/cross-group-edges.mjs check --run frontier-22` -> `0` edge(s), `14` forward reference(s), `0` post-6b change(s), `0` error(s)`.
- Remaining blocker: none for the primary `impact-audit-6c` gate on current bytes.
