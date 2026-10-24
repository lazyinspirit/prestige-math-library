# Versioned authored Step1 owner helper: adapter correction

Use `review-authored-step1-owner-request-v2.mts` for a future explicitly authorized invocation. SHA256: `19ecf38f2df828a2ebe72e2f5de9f1ded4ba4f13146488c7dd919b05f50d1d2e`. The original helper remains byte-identical at SHA256 `9a4cb72583d141823e1316a07bd06558c53158133228368195c70ab59c039ed1`; do not use its base-only selector for this compact run.

Only adapter selection differs, as shown in `authored-step1-owner-helper-v2.diff`. The same `readStatementPolicy(root, run, 'physics')` used by the native CLI selects compact policy → `mathlib.compact.mts`, statement-first policy → `mathlib.statement-first.mts`, absent policy → `mathlib.mts`. All receipt checks, drainage checks, snapshot/descriptor materialization, per-item matching, experiment mappings and scoped scans are unchanged. The existing `authored-step1-owner-helper.md` remains the protocol guide; substitute the versioned helper filename in its future command.

Future Root command, only after actual fresh request, pause/drain and Root-bound attestation:

```sh
node tools/tsx-run.mjs research/advanced-qft-supersymmetry-build-2026-10-23-owner-resolution/private-preparation/review-authored-step1-owner-request-v2.mts --run advanced-qft-supersymmetry-build-2026-10-23 --attestation research/advanced-qft-supersymmetry-build-2026-10-23-owner-resolution/ROOT-ACTUAL-ATTESTATION.json --tag ROOT-UNIQUE-SLUG --write-receipt
```

This command has NOT been executed. It authorizes no scientific acceptance and requires all unchanged guard conditions.

Evidence: `authored-step1-owner-helper-v2-static-check.json` records TypeScript 6.0.3 static transpilation with zero diagnostics. `check-owner-helper-v2-descriptors.mts` evaluates only the exact selector line extracted from v2 and materializes the current native 1-scaffold descriptor inventory without executing the helper/gates/stage callbacks/snapshot. Its actual-policy result is `authored-step1-owner-helper-v2-descriptor-inventory.json`: current physics compact policy selects exactly the actual native compact adapter, 102 descriptors; all 100 base descriptors are preserved byte-for-byte structurally, including ownerReviewInputs, followed by statement-first and page-layout. Explicit branch assertions also cover absent and statement-first policy. No native request/receipt/state or production source was written; no full frontier/snapshot capture or gate battery was run. Root-owned page wrapper repairs remain separate.
