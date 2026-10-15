# Cycle2: exact batch25 sharing target mismatch

The failure is a root integration fingerprint mismatch, not a new physical defect or failed partial-reader authority. No validator change is needed.

`tools/step3-scope.mjs` builds the **check** target at the owed-findings loop as `{...finding, route:'reader'}`. It does not inject batch. Its separate **stamp** loop builds `{...finding, batch, route:'reader'}`. These shapes serve separate operations. The root Python target_for helper copied the stamp shape into owner_shared_defects authority. Batch25's original partial-reader finding has no intrinsic batch field, so the extra field changes its canonical fingerprint.

The native check target, including the entire correct owner_partial_reader_repair object and observed fingerprint, hashes to `0f5e2fc09ba338d838b76dea74641a9342ac176f2f73651e0ea992d598d48382`. The injected-batch shape hashes to currently recorded `dc9d67300e3dee4e3c456bbb2d37e97766d881a49a8ffa392d3dbae75bc1943f`. The touched target matches its recorded fingerprint. The actual closed ledger row, current source and all three referenced evidence-file digests match the current owner evidence. Both decisions retain repair_confidence1; the reader decision already carries the genuine same_defect_as/evidence link. Thus the exact failed predicate is the reader obligation's target fingerprint equality in ownerSharedDefect.

The unapplied proposal `bayesian-computational-statistics-62-owner-step3-gate2-b25-sharing-target-proposal.json` binds the exact current owner evidence file and full selected before entry, retains all native target fields, and changes only reader:25:1's target_sha256 to the check-target fingerprint. Root must archive the original owner evidence, compare-and-swap that one guarded field, and preserve both failed batteries and all original findings/decisions/ledger history. No source, marker, verdict, confidence, classification or partial-reader authority needs alteration.

For future preparation only, the existing root helper line

```python
return {**found[0], 'batch': b, 'route': 'reader' if lane == 'reader' else 'flagged'}
```

must mirror the native check target:

```python
return {**found[0], 'route': 'reader' if lane == 'reader' else 'flagged'}
```

This naturally preserves an intrinsic batch field when present in a finding and never injects one when absent. Do not rerun the whole integration script to repair this existing entry: it intentionally refuses duplicate existing sharing authority, and other integration work is already applied.

Frozen. Only proposal/report artifacts were written. Diagnosis used source inspection and exact read-only fingerprint comparisons; no live source, metadata, helper, decision, ledger, receipt, state, test or gate was changed or run.
