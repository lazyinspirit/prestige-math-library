# Battery1 current metadata refresh handles

Current read-only plan: `battery1-current-mirror-plan.json`. Fixed1471items/218pages/109batches. Current40 proposed mirror/level files, no source writes. No item or page cycles, no uncovered page requires, no native acceptance holds and no contract-scope followups were reported. The only12 holds are individual cross-batch owner-evidence decisions. This is a provisional snapshot: pending small source qualifiers can change the later mutation set. No hash/current-proof receipt is asserted.

Exact21 logical additions are inventoried in `battery1-twenty-one-logical-edge-evidence.json`:12cross-batch,8existing external-context suppliers,1same-batch. Each has the actual root source-integration receipt, actual prior native reviewed-item membership and current accepted endpoint state, plus this lane's precise interface-binding evidence. The12 cross-batch adoption recommendations are in `battery1-new-edge-adoptions.proposal.json`; they are not automatically verified. Two are KT38 tau role reclassifications: their existing ledger rows explicitly cite `#forward_refs`, so the proposal preserves that history and requires separate current `relation: deps` rows.

The proposal script now distinguishes such legacy forward-only declarations when determining whether a current deps record already exists. This is a metadata role fix, not a new mathematical result. Syntax check passed after the change.

Root integration sequence after all source lanes finish:

1. Independently inspect/adopt each of the12 recommended edge scopes. Merge only adopted `edge_adoptions` into a new root-owned decisions file derived from `battery1-current-decisions.proposal.json`; add genuine final writer-drain evidence and set its drain assertion true only then. The proposal leaves that assertion false.
2. Rerun the exact command below, in plan mode, with that final decisions file. Reject any remaining issue and recheck scope/count/argument-byte guards.
3. Root alone runs the same command with `--apply`, using the fresh archive path below. The earlier `root-applied-before` archive is untouched.
4. Run root's separate contract refresh at its accepted interface and regenerate native batch labels only after the metadata inputs are final. Follow normal current-input battery/review protocol; this plan is not a gate pass.

```bash
node research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step2-supervision/root-metadata-prep/root-reconcile-after-drain.proposal.mjs --decisions research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step2-supervision/root-metadata-prep/battery1-final-decisions.json --archive-dir research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step2-supervision/root-metadata-prep/battery1-metadata-root-before

# Root only, after exact plan review: append --apply to the same command.
# Then native scheduling regeneration (root owns its normal hash):
node tools/batch-dependency-levels.mjs write --run inverse-problems-knot-theory-all-109-2026-10-19
```

No canonical/manifests/contracts/levels/state/hash/gate writes were performed by this lane. Research plan/evidence files only.
