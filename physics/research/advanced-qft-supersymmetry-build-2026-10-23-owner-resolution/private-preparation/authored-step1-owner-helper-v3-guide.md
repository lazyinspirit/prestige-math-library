# Versioned authored Step1 helper: native descriptor deduplication

Future explicitly authorized Root invocation must use `review-authored-step1-owner-request-v3.mts`, SHA256 `ae064f8b6a13b44d422049142dcb75018f07e4baea1a713ce59358b9ffc5e258`. V1 (`9a4cb725...39ed1`) and V2 (`19ecf38f...d1d2e`) remain byte-identical historical preparation. This version changes only descriptor deduplication in `freshSnapshot`, before argv/needs resolution. See `authored-step1-owner-helper-v3.diff` against V2; all source checks, metadata rules, review scope, drainage, adapter selection and receipt protections remain unchanged.

The loop is exactly native Executor.runGroupGates: increment n for every declared gate, form Array argv key as id + NUL + JSON.stringify(argv), otherwise id + NUL + fn-n, retain first unseen key. Function descriptors remain distinct even if their functions/outputs agree. Retained descriptor objects are spread intact when resolving argv/needs, preserving ownerReviewInputs. This is representation parity, not a gate waiver: actual compact declares 102 descriptors and native executes 100 unique descriptors.

Actual read-only comparison in `check-owner-helper-v3-descriptors.mts` extracts and evaluates only V3’s selector and descriptor pipeline; it never executes the helper, gate bodies, stage callbacks, authorizations or receipt writer. The result `authored-step1-owner-helper-v3-descriptor-inventory.json` binds native attempt `12ee3f67-5d72-4db4-910f-2da820452d98`, created `2026-10-23T21:52:32.359Z`: exact full snapshot/battery equality, 442 items, 14320 inputs, fingerprint `07dc6e7f73e5e81f980903f1046bf62dda02b6850e359b560ddf969db204ec47`. Request bytes were rechecked unchanged. Fixture assertions cover static duplicates, same-id different argv, retained repeated function descriptors and preserved first ownerReviewInputs. Static TypeScript 6.0.3 transpilation: zero diagnostics, in `authored-step1-owner-helper-v3-static-check.json`.

Use the existing protocol guide and Root actual attestation, substituting V3 in the documented future command:

```sh
node tools/tsx-run.mjs research/advanced-qft-supersymmetry-build-2026-10-23-owner-resolution/private-preparation/review-authored-step1-owner-request-v3.mts --run advanced-qft-supersymmetry-build-2026-10-23 --attestation research/advanced-qft-supersymmetry-build-2026-10-23-owner-resolution/ROOT-ACTUAL-ATTESTATION.json --tag ROOT-UNIQUE-SLUG --write-receipt
```

This command was NOT executed. Root must establish actual pause/drain and fresh current attestation before execution. Snapshot equality at preparation time is not an authorization, scientific acceptance or readiness claim. No engine/source/native-request/receipt/state was edited.
