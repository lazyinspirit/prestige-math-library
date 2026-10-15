# Beta positivity: current Step-3 review route

Protocol investigation only by `bcs_gate1_37_40`, 2026-10-16. This document supplies no mathematical verdict. I did not review or edit the Beta sources, duplicate the scientific owner's consumer review, change live decisions/ledgers/contracts/state, stamp hashes, run checks or dispatch a worker. Scientific repair and actual consumer closure remain with original owner `bcs_gate1_5_8`; root controls integration and transitions. The original batch-40 worker must drain before its outputs are archived or amended.

## Recommendation: ordinary held Step-3 owner resolution

Use the existing owner-resolution route in `tools/autopilot/stages/step3-hold.mts`, supported by the route-specific validator in `tools/step3-scope.mjs`. It explicitly instructs the owner/authorized operator to repair current carriers, amend already-decided group decisions, close/append the actual defect ledger, refresh invalidated auditor certifications, then request native retry. It does not require an additional native dispatch for an owner resolution. Obtain an actual independent focused reviewer report after the scientific owner freezes the repair; bind that report to final current carriers and preserve its distinction from the original native execution. Root must not invent acceptance or describe this external focused review as a new native result. Original native execution coverage stays historical and genuine; the independent review supplies the current mathematical evidence for the owner resolution.

The original batch-40 decisions currently identify three escalated obligations: `reader:40:3`, `refuter:40:3`, and `touched:40:alg-quantile-monte-carlo-standard-error`. Keep their original IDs, exact finding targets, reader/refuter numbering, source classes, producer batch `6`, consumer ID, immutable dependency path and producer pre-reader bindings. Preserve the original decision/report bytes in immutable archives before changing canonical current decisions. Also retain the original successful native result, attempt files, assignment, reader/refuter artifacts and snapshots unchanged. A historical finding remains true after its repair; it must not become `false_positive` merely because the current proof is sound.

The independent report should identify: actual reviewer and separation from the repairer; root's explicit focused assignment; the exact repaired source(s), manifest entries and contracts; raw `item_file_sha256`, canonical `manifest_sha256`, canonical `contract_sha256`; exact source/repair before archives; original obligation/defect IDs; current proof and exact supplier/use checks actually performed; unresolved limitations; and an honest conclusion. Root computes/stamps current hashes after final metadata synchronization. This report supplements the scientific owner's full consumer evidence rather than claiming that the protocol investigator performed those checks.

## Route-specific current decisions

`tools/step3-scope.mjs:1435` permits different verdicts by route. Do not set every row to `amended_repair`:

| Obligation | Retain route | Supported completed disposition |
| --- | --- | --- |
| `reader:40:3` | `reader` | An independently justified `confirmed_nonfatal` or `confirmed_fatal`, matching actual defect severity and the closed ledger row. Exactly one `defect_ids` entry. |
| `refuter:40:3` | `flagged` | Same historical defect classification if actually the same defect, with exact `same_defect_as` and specific equivalence evidence; exactly one closed defect ID. |
| `touched:40:alg-quantile-monte-carlo-standard-error` | `touched` | After complete current prerequisite/risk review, choose `accepted_repair` only when the actual reader-post carrier or permitted risk-only delta/continuity condition holds; otherwise `amended_repair` only when an actual current composite carrier amendment satisfies the pre/post comparison. Preserve the local real-field defect and its real closed repair row. Do not manufacture an algorithm edit merely to obtain a preferred verdict. |

A finding-entry shape is therefore the existing original entry, preserving historical bindings, with actual reviewed fields such as:

```json
{
  "obligation": "reader:40:3",
  "id": "lem-beta-density-normalization",
  "route": "reader",
  "producer_batch": "6",
  "consumer_id": "alg-quantile-monte-carlo-standard-error",
  "verdict": "confirmed_nonfatal",
  "defect_ids": ["bcs62-b40-3a-beta-gamma-positivity"],
  "historical_delta_unknown": true,
  "owner_resolution": "ACTUAL owner authorization, original unknown-byte limit, repair archive and current independent review evidence; at least 40 characters.",
  "evidence": "ACTUAL historical defect classification and independently checked current repair; identify the frozen report and exact current inputs."
}
```

The displayed severity is illustrative, not a recommendation or mathematical finding. The reviewer/owner must choose the actual classification. Retain all original additional binding fields; do not replace the complete original entry with this abbreviated example. `repair_confidence: 1`, if supplied, must honestly describe complete repair. The original unbound reader observation still needs `historical_delta_unknown: true` and concrete `owner_resolution`; current bytes cannot reconstruct that missing observation.

For the paired refuter row, preserve its exact observed source/carrier and, only if warranted, add `same_defect_as: "reader:40:3"` plus concrete `same_defect_evidence`. One physical supplier defect should remain one ledger defect. The validator supports foreign producer/touched repair sharing (`sharedProducerRepair`, around lines 1548–1565), but that requires an actual producer touched obligation and explicit sharing; do not create such an obligation or duplicate a defect merely for bookkeeping. The ledger's `adjudication_ref` entries must point to the actual canonical decision paths and obligation names. A repaired nonfatal row may use `fixed`; a confirmed fatal requires a closed repaired fatal row. A new defect ID, if needed, belongs to its actual subject and stage, not to a fabricated consumer mutation.

For the touched algorithm, `accepted_repair` is checked against the immutable reader-post item/contract/manifest carrier. `riskReviewOnlyDelta` permits only a genuine risk-review-only contract delta while item and manifest are identical. `amended_repair` must differ from the original pre-reader and ordinary reader-post composites. Decisions are about these composite carriers, not only source text. Supplier proof changes alone do not automatically imply an amendment of the consumer's own composite. `reviewed_no_defect/current_content_review` cannot close the real reader/refuter/ledger defect and is not a substitute here.

The full batch-40 decisions remain complete, including unaffected obligations. Preserve previous evidence when appending current owner-resolution evidence. The engine's normal decision-stamp gate refreshes `subject_sha256`; an updated stamp is currency bookkeeping, not independent acceptance. For foreign producer findings, `currentDecisionCarrier` uses the current producer item/manifest/contract in batch 6, while preserving the original consumer-batch obligation.

## Owner receipts and recertification

An ordinary current item bookkeeping receipt is separate from routed 3a decisions. If actually required by the existing item's authority path, root may use `tools/step3-decisions.mjs record-item --run RUN --item ID --owner --decision repaired --reason SENTENCE --defects JSON`. Version-2 receipts have `version,run,phase,target,decision,owner,sha256,at,reason,defects`; their proof-input hash includes declared suppliers, so supplier proof changes stale prior receipts. `recordStep3` preserves an existing owner receipt through `preserveStep3OwnerReceipt` before replacement. That authenticated history never becomes a new independent audit or clears the three routed escalated rows by itself.

For each actually invalidated **auditor-created** certification, root can run:

```sh
node tools/auditor-created-items.mjs owner-recertify --run bayesian-computational-statistics-62 --step 3 --id ITEM --evidence research/EXACT-REVIEW-EVIDENCE.md --reason 'Concrete completed repair and current review evidence'
```

This is not a general way to mint certification for any original item. `recordOwnerRecertification` requires an eligible prior auditor certification, immutable owner creation, or an eligible authenticated Step-3 bootstrap. It rejects absence of those origins. It preserves the original `author_result`/creation marker. Its evidence must name the run, ID and three exact current source/manifest/contract hashes. The generated content-addressed receipt has policy `auditor-created-owner-recertification-v1`, owner identity, timestamp/reason, evidence path/hash, authentic prior `author_result` or `owner_creation`, any validated bootstrap basis, and six deterministic carrier values:

`guard_sha256`, `judge_sha256`, `item_file_sha256`, `manifest_sha256`, `contract_sha256`, `step3_subject_sha256`.

A generic report claiming “recertified” is insufficient. Manifest-changing initial bootstrap uses the stricter `step3-manifest-repair-evidence-v1` schema (in `step3ManifestRepairBasis`), including real baseline/current projections or explicitly authorized current-content review, exact direct-consumer/supplier guards and required proof-check artifacts. Do not choose a special historical bootstrap branch just because the desired ID has no ordinary certification. The `--refresh-evidence` switch is restricted to a particular unrelated dilation item and is unavailable here.

Only after genuine current review, repairs, route-specific closure, applicable receipt refresh and root's required fresh full-frontier formatting/metadata recertification should root request the ordinary native retry/resume. The complete existing battery and its owner hold remain in force. No command was executed by this investigation.

## Why neither native refresh nor source-identical continuity closes this repair

`autopilot refresh` writes a control request, but `Executor.requestNativeRefresh` in `tools/autopilot/src/executor.mts:321` accepts only active, unclosed `3b-author` with `refreshPlan`, role `alpha-high`, exact successful unit and drained cohort. Current math Step 3 retires 3b; `3a-adjudicate` in `mathlib.step3.mts` has no refreshPlan. Therefore `refresh --stage 3a-adjudicate --unit 40` is unsupported. Ordinary `retry --unit 40` re-arms failed/unknown lanes only; `lastExitOk === true` is skipped. It cannot promise a new read of a successful adjudicator.

`sourceIdenticalAcceptanceContinuity` is only continuity of an existing native `accepted_repair` touched verdict, never new coverage. It requires an archived genuine accepted decision, original successful result/report/assignment and post-reader snapshot; exact target and carrier hashes; identical current raw source or a complete hash-proven preimage with identical body and only allowed mechanical metadata differences; current mirrors; and an actual strict-contract pass. Changed Beta proof bytes fail that condition. An original `escalated` algorithm decision is not an archived acceptance. This exception cannot supply current independent review or resolve these escalations.

## Optional native continuation investigation — not needed for the preferred owner route

If root separately requires an engine-owned new native read, a bounded run-local continuation is possible by adapting the existing `refuter-continuations.mts` pattern, but it is a new run-local control proposal, not an existing refresh command. Do not implement it unless explicitly chosen. Keep the same unclosed `3a-adjudicate` stage, scope and full gates; authenticate drained original batch-40 result/report/decisions/assignment and final frozen repair carriers; exclude only `alpha-3a-batch-40.result.json` from this stage's effective coverage; add one exact new native result filename; retain sibling result coverage; and plan only pending unit `40` with an otherwise native alpha adjudication descriptor, same model profile, `covers:["40"]`, no tool argv, no receipt-only pseudo-review. Refuse any already attempted continuation, active original/followup writer, closed stage, changed frozen input or extra unit.

A label such as `3a-batch-40-owner-repair-1` would need a bounded adapter for `authorResultAllowed`: its current Step-3 grammar does not recognize that suffix. A narrower compatible label is `3a-gate-beta-positivity-owner-repair-40`, already admitted by the existing Step-3 author-result grammar `3[ab]-(gate|edge)-...-N`. The run-local stage's result matcher would still need to opt into that exact new filename. `step3Adjudicators` discovers the existing canonical `batch-40` decisions independently of that new label; no new decision group is needed. The assembled task must expressly retain group `batch-40`, original obligations and canonical output paths, overriding the generic task's dispatch-label-suffix convention for this bounded continuation. Archive original canonical report/decisions first; fresh actual reviewer writes the current canonical pair and records old evidence references. Preserve old native stable/attempt receipts unchanged by using the new label.

Do not broaden source-identical continuity or rewrite its original native result binding to the new label. If no new auditor-created item or special source-identical exception needs the new result, routing/stamp/escalation/closure consumers use the canonical current batch decision/report paths already. Any special evidence consumer actually requiring the new result must be explicitly checked; no blanket alias from the old result to the new one is justified. The ordinary Step-3 closure seals canonical batch reports/decisions, not arbitrary suffix reports, another reason to preserve canonical output paths. This optional adapter must preserve all original execution evidence and require a real successful native reviewer result before unit 40 becomes covered. No such adapter or native continuation was created here.
