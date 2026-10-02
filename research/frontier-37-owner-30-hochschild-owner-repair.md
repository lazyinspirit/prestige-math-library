# Step 5 owner repair: Hochschild homotopy proof

Run: `frontier-37-owner-30`. Date: 2026-10-01.

## Finding and scope

The completed `research/frontier-37-owner-30-refute-19.json` reports a nonfatal ill-formed proof at `thm-termwise-hochschild-homology-respects-bimodule-chain-homotopies`, Proof 3.1: two displayed homotopies were called four, and their cochain degree was incorrectly called zero. The Statement already specifies homotopies of cochain degree −1.

Read the full item and `def-chain-homotopy`. That definition gives homological degree +1; reindexing homological degree n as cochain degree −n gives cochain degree −1. For a homotopy equivalence f with homotopy inverse g, the two identities fg ≃ id_G and gf ≃ id_F transfer under the additive functor HH_j, and the preceding Proof 2.1 gives identities on iterated cohomology. Thus the existing inverse argument remains valid after correcting the two descriptions.

## Writer check and changes

Before mutation, state.json showed successful refute-19 attempt 2 ended at 2026-10-01T11:19:31.436Z and collect-19 ended at 11:19:32.676Z. No Step-5 Alpha dispatch was present in state, and the process check found no native Alpha worker. Group d covers batches 13, 18, 19; reader-13 was still running, while reader/refuter 19 had drained. No Alpha writer conflict was present.

Changed only Proof 3.1 in the item: named f and g, distinguished degree-zero homotopy inverse map from its two degree-minus-one homotopies, and shortened the inverse-on-cohomology argument. Updated only the matching step-3-1 derivation claim in `research/frontier-37-owner-30-batch-19.proof-contracts.json`, whose old text repeated the defect. The Statement, Facts, dependencies, source references, and verification fields are unchanged. No direct-consumer review opens because the claim interface is unchanged.

## Actual local checks

- `node tools/tsx-run.mjs tools/precheck.mts items/thm-termwise-hochschild-homology-respects-bimodule-chain-homotopies.md`: exit 0, 1 checked, 0 failing.
- `node tools/rendercheck.mjs items/thm-termwise-hochschild-homology-respects-bimodule-chain-homotopies.md`: exit 0; YAML and all math spans parse.
- Python comparison against pre-edit snapshots: only Proof 3.1 changed in the item; only the step-3-1 claim changed in the batch contract; the contract claim matches the revised proof text. Statement byte comparison passed.

Item SHA-256 before: `986f59285f9a6a1e514df7f9a0e770ad92d2a1e7827a45af7d448a7a81057ec6`.

Item SHA-256 after: `df13c5cebb9cfde20f91e8eb9e3346b06c144c3d08d024d8842b8bb4f229b9a1`.

Batch-19 proof-contract SHA-256 after: `5102a400656917f532eae7fbe532552ba463a9272d914a7e43796413844cd292`.

These are local owner repair checks, not independent audits. The original refuter finding, native receipts, and decisions are preserved. The engine owns native adjudication and evidence refresh on the changed proof and contract carriers; no gate, retry, or transition was attempted by this repair lane.
