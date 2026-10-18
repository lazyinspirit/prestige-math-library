# Exact native operator ledger normalization proposal

This packet proposes only the approved 12 canonical ledger-row metadata changes (21 fields). It does not change item sources, scientific classifications, outcomes, native reports, or original Step3 closure. Root owns installation, history recording and later preparation/recertification.

## Verification

- Complete own-run candidate projection: 365 rows, zero schema errors (`candidate-projection-validation.txt`). Original projection: 365 rows, 21 errors (`current-projection-validation.txt`). Each was validated once.
- Isolated proposed and HEAD-only module fixtures: 22/22 passed (`final-focused-tests.tap`, `head-only-focused-tests.tap`).
- The two unrelated legacy stage-lookup tests also fail identically against an isolated pristine HEAD tools archive: exact names, `.gates` TypeError and original lines 512/609 are preserved in `existing-two-head-baseline.tap`; invocation and baseline HEAD are in `existing-two-head-baseline.json`. No test or stage repair is proposed.

## Code integration

`guards.json` binds the three owned code/doc/test files against HEAD 550b35db59e70512e7be194cd4ecd58c6e4cfd64. `before/`, `head-before/`, `proposed/` and `head-only-candidate/` preserve each projection. Root has installed the candidate for independent tests; this packet does not claim a code commit.

## Actual ledger application and history recipe

1. Under the shared ledger write lock, archive the actual entire canonical ledger and recheck each original raw-line/object guard in `row-operations.json`. If there are foreign appends since the proposal, preserve them exactly. Replace only the 12 approved rows, preserving every other raw line. Archive the actual entire resulting ledger; refresh only the generated ledger view as ordinarily required.
2. Write a genuine root application JSON with `run`, `owner: "/root"`, `stage: "5.6-impact"`, `changed_ids` containing exactly the 12 defect IDs, `before_ledger_sha256`, `after_ledger_sha256`, and the actual `normalized_at` time. The time must follow the actual owner request. Do not backdate it or replace missing historical row times with this current time; the two missing row times become `unknown`.
3. While still paused/drained at the actual 5.6 owner boundary, run the research-only assembler after installation:

```sh
node research/non-ml-math-remaining-81-2026-10-18-owner-step5-defect-ledger-schema-normalization/assemble-history-request.mjs --canonical-before ACTUAL_BEFORE_ARCHIVE --canonical-after ACTUAL_AFTER_ARCHIVE --application ACTUAL_ROOT_APPLICATION_JSON --out NEW_REQUEST_JSON
```

The assembler captures the live state (including the current truthful pause-after setting) and owner request. It binds the original 281-row closure, exact successful immutable operator handoff, frozen collection pins, 365-row before/after inventories and approved 12/21 delta. It writes research captures/request only; it does not activate history or invoke native commands.

4. Root invokes `recordStep3LedgerNormalizationHistory(root, run, payload)` from `tools/step3-ledger-normalization-history.mjs` on that actual payload. This verifies live ledger/request/state guards and writes the ordinary immutable history marker. Do not require a new Step3 closure check or current preparation before recording this history, which would be circular. If recording fails, retain the failure and use archived exact preimages for a guarded restoration while no writers are active.
5. Then perform the ordinary fresh full current preparation and recertification before any native continuation or gates. The receipt confers no mathematical acceptance, review credit, coverage or threshold changes.

The assembler has not been executed: no application evidence or activation marker has been fabricated. The original Step3 closure and all native report/result/attempt/prompt/collection bytes remain immutable. V1 defaults remain unchanged.
