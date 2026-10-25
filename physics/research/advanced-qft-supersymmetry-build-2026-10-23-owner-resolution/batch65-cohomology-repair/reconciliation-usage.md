# Guarded reconciliation preparation

No production reconciliation has been applied. `reconciliation-v1/` is a preserved snapshot containing exact production preimages, reviewable candidate bytes and the input/change manifest. `reconciliation-v1-review.json` records its preparation-time checks and manifest hash. The subsequent approved global hyperplane restoration intentionally makes v1 stale; its unchanged source guards must refuse application.

From the physics working directory:

```
node research/advanced-qft-supersymmetry-build-2026-10-23-owner-resolution/batch65-cohomology-repair/reconcile-identities.mjs check
```

`check` is read-only. Changed production inputs or parser/candidate bytes cause refusal. After source repairs finish and root coordinates the drained snapshot, use `reconcile-identities-v2.mjs prepare reconciliation-v2` to prepare a **new** version; v1 and its original script are not overwritten. The v2 preparer consumes the already-global hyperplane source and makes only the three explicit boundary-evidence updates in `hyperplane-global-scope/evidence.json`, retaining all eight cases/statuses. Its syntax has been checked, but no v2 candidate generation has yet occurred. The candidate set is discovered anew so any newly authored current-run references are included. Root reviews exact candidate coverage before coordinating application.

The deliberately separate `apply VERSION ROOT_RECEIPT` operation requires root's explicit coordination receipt binding that version's manifest hash, `approved_by: /root`, `production_id_integration: true`, `all_writers_drained: true`, and `transitions_paused: true`. It independently checks that the native state is paused and every started dispatch/refresh has ended, all source/input/parser hashes still match, canonical targets are absent, and aliases have no collisions. No readiness, stamp, native result or state file is written. The source renames, source alias changes, containing-zero hyperplane scope, active references, two pages, native65 rows/contracts/cross rows and two relevant canonical plan rows are one coordinated change set with rollback for ordinary filesystem errors. This is not a concurrent-writer transaction: root must exclude all other writers before applying it.

The current task expressly authorizes preparation only. The receipt format is an apply-time guard, not permission granted by this document or the script. Immutable native dispatches, results, reports and original source-reading coverage are outside the candidate discovery and remain untouched.
