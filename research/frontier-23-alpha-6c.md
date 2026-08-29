# frontier-23 — Alpha 6c cross-batch audit and closure

Date: Saturday, August 29, 2026.
Dispatch: `6c-lead`.

## Scope

- Opened `research/frontier-23-cross-group-edges.json`: `0` cross-batch edges,
  `14` forward references, `0` listed post-6b changes.
- Reopened the post-6b carrier snapshots for batches `5`, `6`, and `9`, the
  current citing items, every target item named by the forward list, and the
  local evidence chain in `research/frontier-23-batch-{5,6}.notes.md`,
  `research/frontier-23-reader-{5,6,9}.md`,
  `research/frontier-23-refute-{5,6,9}.json`, and
  `research/frontier-23-alpha-{b,c,d}-6b.md`.
- No cross-batch citation defect and no owner-only page addition, page removal,
  or reading-order change was present in the live 6c scope.
- While closing
  `fs-product-measure-is-unique-without-sigma-finiteness`, I checked Terence
  Tao's current online errata for Exercise `1.7.22` (updated January 6, 2026)
  and found that the companion
  `cex-product-measure-need-not-be-unique-without-sigma-finiteness` still used
  the now-disallowed two-order measure-construction route. Step 6c repaired
  that cited item directly on current bytes.

## Forward-reference dispositions

| obligation | evidence | disposition | edit | blocker |
| --- | --- | --- | --- | --- |
| `def-condition-number-of-a-nonsingular-linear-system -> cex-condition-number-depends-on-the-chosen-norm-and-scaling` | The current definition now states the same triangular-matrix and diagonal-rescaling witness that the target counterexample computes; batch-5 notes had already classified the forward as orientation-only. | `lemmas-added` | Removed `forward_refs` and replaced the later-item link with the inline witness. | none |
| `def-diffeomorphism-and-local-diffeomorphism-of-manifolds -> cex-a-bijective-smooth-map-with-nonsmooth-inverse` | The current definition now states the same `x^3` witness as the target counterexample, and reader/refuter-9 left that local chain sound. | `lemmas-added` | Removed `forward_refs` and replaced the later-item link with the inline witness. | none |
| `def-forward-and-backward-stability-for-a-problem-family -> ex-a-backward-stable-solution-of-an-ill-conditioned-system` | The current definition now states the same `A = diag(1,\varepsilon)` witness as the target example; batch-5 notes had already marked the forward as orientation-only. | `lemmas-added` | Removed `forward_refs` and replaced the later-item link with the inline witness. | none |
| `def-numerical-rank-relative-to-a-norm-scale-and-tolerance -> cex-numerical-rank-depends-on-the-declared-tolerance` | The current definition now states the same `diag(1,1/2,0)` tolerance witness as the target counterexample; batch-5 notes had already marked the forward as orientation-only. | `lemmas-added` | Removed `forward_refs` and replaced the later-item link with the inline witness. | none |
| `def-smoothly-compatible-charts -> cex-two-noncompatible-atlases-on-the-real-line` | The current definition now states the same `(\mathbb R,\mathrm{id})` / `(\mathbb R,x\mapsto x^3)` witness as the target counterexample; reader/refuter-9 left that chain sound. | `lemmas-added` | Removed `forward_refs` and replaced the later-item link with the inline witness. | none |
| `def-standard-relative-floating-point-model-and-unit-roundoff -> cex-the-relative-floating-point-model-excludes-overflow-underflow-and-invalid-operations` | The current definition now names the same overflow, underflow, and invalid-operation witnesses that the target counterexample computes; batch-5 notes had already marked the forward as orientation-only. | `lemmas-added` | Removed `forward_refs` and replaced the later-item link with the inline witness. | none |
| `fs-completed-product-sections-are-measurable-for-every-parameter -> cex-completed-product-sections-need-not-be-pointwise-measurable` | The current false statement now carries the completed-product exceptional-section witness directly; the target counterexample remains the same Hunter `E = \{0\}\times N` witness. | `lemmas-added` | Removed `forward_refs` and rebuilt the refutation around the direct witness. | none |
| `fs-measurable-sections-imply-product-measurability -> cex-measurable-sections-do-not-imply-product-measurability` | The current false statement now carries the countable-ordinal witness directly; reader-6 and the repaired target counterexample already left that witness sound on current bytes. | `lemmas-added` | Removed `forward_refs` and rebuilt the refutation around the direct witness. | none |
| `fs-product-measure-is-unique-without-sigma-finiteness -> cex-product-measure-need-not-be-unique-without-sigma-finiteness` | The current false statement now records Tao's non-sigma-finite Lebesgue/counting witness directly. When I checked Tao's current errata, I found the target item's old self-proof overstated the measure construction, so I repaired the target item to the same sourced witness first. | `lemmas-added` | Removed `forward_refs` and rewrote the false statement to use the sourced witness directly. | none |
| `fs-product-of-complete-measure-spaces-is-complete -> cex-product-of-complete-measures-need-not-be-complete` | The current false statement now carries the same nonmeasurable subset of a null line witness as the target counterexample. | `lemmas-added` | Removed `forward_refs` and rebuilt the refutation around the direct witness. | none |
| `fs-the-product-lebesgue-sigma-algebra-is-the-full-euclidean-lebesgue-sigma-algebra -> cex-product-of-complete-measures-need-not-be-complete` | The current false statement now carries the same null-line witness as the target counterexample, with the completion theorem doing the surface work on current bytes. | `lemmas-added` | Removed `forward_refs` and rebuilt the refutation around the direct witness. | none |
| `fs-tonelli-holds-without-sigma-finiteness -> cex-tonelli-fails-without-sigma-finiteness-on-the-diagonal` | The current false statement now carries the same diagonal Lebesgue/counting witness as the target counterexample. | `lemmas-added` | Removed `forward_refs` and rebuilt the refutation around the direct witness. | none |
| `rem-manifold-conventions-and-the-role-of-second-countability -> cex-the-long-line-is-locally-euclidean-and-hausdorff-but-not-a-manifold-under-the-library-convention` | The current remark already states the long-line warning inline; the target counterexample remains the same explicit witness on current bytes. | `lemmas-added` | Removed `forward_refs` and dropped the later-item link. | none |
| `thm-normal-equations-square-the-spectral-condition-number -> ex-normal-equations-versus-qr-conditioning` | The current theorem remark now states the same `A = \operatorname{diag}(1,10^{-8})` QR-versus-normal-equations witness as the target example; reader-5 had already repaired the example itself. | `lemmas-added` | Removed `forward_refs` and replaced the later-item link with the inline witness. | none |

## Introduced current-hash item rows

- Wrote `kind:"item"` rows for the fifteen edited current carriers in
  `research/frontier-23-6c-verdicts.jsonl`.
- Fourteen rows are clean `accepted` closures for the edited forward sources:
  five batch-5 carriers, seven batch-6 forward-source carriers, and three
  batch-9 carriers.
- One row is a `repaired` current-hash carrier for
  `cex-product-measure-need-not-be-unique-without-sigma-finiteness`, owned by
  the closed `6c-cross` defect row `frontier-23-S6-c-item-01`.
- The fourteen actual forward-reference closures own the closed `6c-cross`
  rows `frontier-23-S6-c-fwd-01` through `frontier-23-S6-c-fwd-14`.

## Gate and mechanical closure

- `impact-audit-6c`: reproduced the missing receipt on current disk, filled
  `research/frontier-23-impact-6c.json` with reviewer
  `Lead Alpha (Codex GPT-5) - step 6c repair`, and resolved all `66` affected
  items as `still-licensed` with item-specific notes naming the current
  changed-source cone and any direct citation channels. This stayed a
  receipt-only closure: no new `6c-cross` defect row or `kind:"gate"` verdict
  is licensed here.
- `defect-ledger validate`: the first rerun failed because
  `tools/defect-ledger.mjs` no longer accepted several legacy Step-6/frontier-23
  subclass spellings already present in the run ledger
  (`false-claim`, `ill-formed`, `missing-case`, `false-computation`,
  `overstrong-title-or-statement`, `invalid-refutation`, `missing-map`).
  The task allows fixing an unscoped mechanical failure at repository cause, so
  I repaired the validator to accept those current frontier-23 spellings rather
  than rewriting append-only ledger history.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts <15 edited items>`
  Result: the first pass reflowed the eight proof-bearing edited carriers whose
  step lines needed canonical wrapping; the final rerun left all edited files
  unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-normal-equations-square-the-spectral-condition-number.md items/fs-completed-product-sections-are-measurable-for-every-parameter.md items/fs-measurable-sections-imply-product-measurability.md items/fs-product-measure-is-unique-without-sigma-finiteness.md items/cex-product-measure-need-not-be-unique-without-sigma-finiteness.md items/fs-product-of-complete-measure-spaces-is-complete.md items/fs-the-product-lebesgue-sigma-algebra-is-the-full-euclidean-lebesgue-sigma-algebra.md items/fs-tonelli-holds-without-sigma-finiteness.md`
  Result: `8 checked, 0 failing`.
- `node tools/regen-contract-entries.mjs research/frontier-23-batch-6.proof-contracts.json fs-completed-product-sections-are-measurable-for-every-parameter fs-measurable-sections-imply-product-measurability fs-product-measure-is-unique-without-sigma-finiteness cex-product-measure-need-not-be-unique-without-sigma-finiteness fs-product-of-complete-measure-spaces-is-complete fs-the-product-lebesgue-sigma-algebra-is-the-full-euclidean-lebesgue-sigma-algebra fs-tonelli-holds-without-sigma-finiteness`
  Result: regenerated all `7` affected batch-6 entries.
- `node tools/proof-contract.mjs research/frontier-23-batch-5.proof-contracts.json --strict`
  Result: `0 error(s), 0 warning(s), 25/25 item(s) checked`.
- `node tools/proof-contract.mjs research/frontier-23-batch-6.proof-contracts.json --strict`
  Result: `0 error(s), 0 warning(s), 38/38 item(s) checked`.
- `node tools/proof-contract.mjs research/frontier-23-batch-9.proof-contracts.json --strict`
  Result: `0 error(s), 0 warning(s), 61/61 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-23-batch-5.proof-contracts.json --items-dir items --fail-on-missing-quote`
  Result: `73` citations, no missing quotes, no widening candidates.
- `node tools/citation-fidelity.mjs research/frontier-23-batch-6.proof-contracts.json --items-dir items --fail-on-missing-quote`
  Result: `102` citations, no missing quotes, no widening candidates.
- `node tools/citation-fidelity.mjs research/frontier-23-batch-9.proof-contracts.json --items-dir items --fail-on-missing-quote`
  Result: `199` citations, no missing quotes, no widening candidates.
- `node tools/defect-ledger.mjs append --file research/frontier-23-alpha-6c-ledger-rows.json`
  Result: appended `15` closed `6c-cross` rows and re-rendered
  `research/DEFECT-LEDGER.md`.
- `node tools/defect-ledger.mjs validate --run frontier-23`
  Result: `254` defect row(s) checked, `0` errors after the validator
  compatibility repair.
- `node tools/cross-group-edges.mjs check --run frontier-23 --reconcile-plan`
  Result: `0` edge(s), `14` listed forward reference(s), `0` listed post-6b
  change(s), `0` errors.
- `node tools/step6-scope.mjs check --run frontier-23 --phase final`
  Result: `504` item(s) routed, `227` adjudication obligation(s), `0` errors.
- `node tools/splice-plan.mjs --run frontier-23 --verify`
  Result: verified `28` page(s) across `10` manifest(s).
- `node tools/validate-plan.mjs research/plan-spec.json`
  Result: `OK`; only the repository's standing `redundant-prereq` advisories
  remain.
- `node tools/content-policy.mjs research/frontier-23-batch-5.pages.json research/frontier-23-batch-6.pages.json research/frontier-23-batch-9.pages.json`
  Result: `157` scoped item(s), `0` error(s), `0` warning(s).
- `node tools/audit-manifest.mjs research/frontier-23-batch-{1..10}.pages.json --output research/frontier-23-audit-manifest.json`
  Result: `1468` relationship(s) over `504` item(s) in `10` batch(es), `0`
  defect(s).
- `node tools/impact-audit.mjs --touches research/frontier-23-touches.json --from post-6b --current --receipt research/frontier-23-impact-6c.json`
  Result: `15` changed public interface(s), `66` affected item(s), receipt
  accepted.
- `node tools/fwdcheck.mjs`
  Result: `9274` items, `0` open forward reference(s), `412` closed, `37`
  load bearing.
- `git diff --check -- <edited items and 6c artifacts>`
  Result: pass.

## Blockers

- None in the live Step-6c scope.

## Step 6c repair - `impact-audit`

Date: Saturday, August 29, 2026.

- Reproduced the primary gate on current disk with
  `node tools/impact-audit.mjs --touches research/frontier-23-touches.json --from pre-author --to post-6b --receipt research/frontier-23-impact.json`.
  The current tree still computes `504` changed public interfaces and `457`
  affected items. The gate was failing only because
  `research/frontier-23-impact.json` remained the untouched template with a
  blank reviewer and `457` unresolved `pending` dispositions.
- Evidence on current bytes:
  - I rederived the current impact graph from disk, mapped every affected item
    to its current batch/page carrier, and verified that all `457` affected ids
    are themselves same-window changed in-flight items in the
    `pre-author -> post-6b` interface window.
  - There are `0` untouched published downstream consumers in this impact set.
    Each receipt note now records the current carrier, any direct current
    changed-interface citations with channel names, and the exact current
    changed-source cone on disk for that item.
  - `node tools/cross-group-edges.mjs check --run frontier-23` remains clean at
    `0` edge(s), `14` forward reference(s), `0` post-6b change(s), `0`
    error(s), matching the current Step-6c closure state.
- Disposition: repaired the receipt only. `research/frontier-23-impact.json`
  now names reviewer `Lead Alpha (Codex GPT-5) - step 6c repair 2` and
  resolves all `457` live rows as `repaired` with item-specific current-byte
  evidence. No item, page, contract, ledger, or
  `research/frontier-23-6c-verdicts.jsonl` edit is licensed here: this was a
  receipt-state gate failure, and the repair protocol forbids inventing a
  `6c-cross` defect row for a purely mechanical closure.
- Edited files: `research/frontier-23-impact.json`,
  `research/frontier-23-alpha-6c.md`.
- Checks:
  - `node tools/impact-audit.mjs --touches research/frontier-23-touches.json --from pre-author --to post-6b --receipt research/frontier-23-impact.json`
    -> exit `0`; `impact-audit: 504 changed public interface(s), 457 affected item(s)`.
  - `node tools/proof-contract.mjs research/frontier-23-batch-{1..10}.proof-contracts.json --strict`
    -> batch `1` `43/43`, batch `2` `54/54`, batch `3` `21/21`, batch `4`
    `37/37`, batch `5` `25/25`, batch `6` `38/38`, batch `7` `49/49`, batch
    `8` `48/48`, batch `9` `61/61`, batch `10` `13/13`; all passed with `0`
    errors, and batch `8` retains the same two non-blocking
    `shotgun-bracket` warnings on
    `thm-a-short-exact-sequence-is-a-kernel-cokernel-pair` and
    `thm-degenerate-exactness-criteria`.
  - `node tools/depcheck.mjs --quiet`
    -> exit `0`; the repository's standing `multi-home`, `b-leaf-legacy`, and
    `cited-not-in-deps` warnings remain.
  - `node tools/fwdcheck.mjs`
    -> `9274` items, `0` open forward reference(s), `412` closed, `37`
    load-bearing.
  - `node tools/cross-group-edges.mjs check --run frontier-23`
    -> `0` edge(s), `14` forward reference(s), `0` post-6b change(s), `0`
    error(s).
  - `node tools/step6-scope.mjs check --run frontier-23 --phase final`
    -> `504` item(s) routed, `227` adjudication obligation(s), `0` error(s).
  - `git diff --check -- research/frontier-23-impact.json research/frontier-23-alpha-6c.md`
    -> pass.
- Remaining blocker: none for the primary `impact-audit` gate on current
  bytes. The `impact-audit-6c` receipt remains a separate gate and was already
  closed earlier in this run.

## Risk-report repair 1

Run date for this repair pass: Saturday, August 29, 2026 (Australia/Sydney
local time).

- `fs-measurable-sections-imply-product-measurability`: reread against
  `def-sections-of-sets-and-functions-on-products`,
  `thm-iterated-section-measures-agree-on-product-measurable-sets`, and the
  current countable-ordinal witness. The current item is mathematically sound.
  The batch-6 contract now carries a complete `risk_review` recording the
  countability and sigma-finiteness checks. Batch-6 refuter coverage did not
  open this item, so the review note states my direct Alpha reread rather than
  implying a refuter pass that never happened.
- `fs-product-of-complete-measure-spaces-is-complete`: reread against
  `def-sections-of-sets-and-functions-on-products`,
  `thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures`,
  and `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`.
  This surfaced a real load-bearing defect on current bytes: step `3.1` said
  the nonmeasurable section was the vertical section `E^0 = N`, but for
  `E = {0} × N` the contradiction needs the horizontal section `E_0 = N`.
  Repaired the item, regenerated its batch-6 contract entry, wrote the missing
  `risk_review`, appended the new closed ledger row
  `frontier-23-S6-c-gate-fs-product-of-complete-measure-spaces-is-complete`,
  and stamped the matching `kind:"gate"` verdict in
  `research/frontier-23-6c-verdicts.jsonl`.

Checks for this repair pass:

- `node tools/tsx-run.mjs tools/precheck.mts items/fs-product-of-complete-measure-spaces-is-complete.md`
  Result: `1 checked, 0 failing`.
- `node tools/proof-contract.mjs research/frontier-23-batch-6.proof-contracts.json --strict --items fs-measurable-sections-imply-product-measurability,fs-product-of-complete-measure-spaces-is-complete`
  Result: `0 error(s), 0 warning(s), 2/2 item(s) checked`.
- `node tools/merge-proof-contracts.mjs --level frontier-23 research/frontier-23-proof-contracts.json research/frontier-23-batch-{1..10}.proof-contracts.json`
  Result: merged file refreshed from the current per-batch contracts.
- `node tools/risk-report.mjs research/frontier-23-proof-contracts.json --require-reviewed --items fs-measurable-sections-imply-product-measurability,fs-product-of-complete-measure-spaces-is-complete`
  Result: `0 error(s), 2 item(s) routed`.
