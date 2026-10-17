# First-cycle reader-admission boundary fix

Research-only successor proposal, 2026-10-17, `/root/kept_barrier59`. No canonical tool/document/source, live state, pack, report, ledger or verdict was edited. No hashes, tests, native commands, gates, dispatches, installations or commits were performed. `prepare.py` only writes the research preimages, proposals and literal replacement diffs.

The static routing failure is confirmed. `tools/step5-workflow.mjs` `prepareImpact` first performs real collection, then calls `loadReaderConcerns` before freezing `impact-initial-1`. The engine enters this planning call in drained, unpaused `5.2-impact`. The loader's existing common guard deliberately permits that state; the installed v2-only unconditional `state.paused===true` immediately rejects it. A native pause at 5.2 cannot be inferred or manufactured.

The successor replaces only that v2 check. All code before and after the replacement is byte-identical to the captured preimage. Version 1 therefore executes exactly the same code and conditions as before. The existing first-pack absence and first-owner-execution absence guards remain before all validation, and frozen pack input guarding remains unchanged.

Version 2 now requires these explicit fields in the actual admission envelope:

```json
{
  "creation_state": {
    "file": "research/R-creation-evidence/actual-paused-5.1-state.json",
    "captured_at": "ACTUAL_ROOT_CAPTURE_TIME"
  },
  "owner_gate_request": {
    "file": "research/R-creation-evidence/actual-5.1-owner-gate-request.json",
    "id": "ACTUAL_NATIVE_REQUEST_ID"
  }
}
```

These are field-shape illustrations, never creation evidence or literal timestamp values. Both exact native research archives must appear in the existing raw-SHA256 `bindings` mapping. The unchanged binding loader requires regular nonsymlink research files with matching raw bytes. Root must capture the real native state and request after the actual drained paused 5.1 hold, not copy today's incomplete live state or construct an edited paused state. Native state has no update-time field. `captured_at` truthfully records root capture; no historical filesystem mtime or invented native update field is used. The request's own `at` must precede capture, which precedes `recorded_at`.

The archive requires the exact run, `stage: 5.1-adjudicate`, `paused:true`, and no started/unended dispatch. The actual native request must match run, version, nonempty recorded ID, `group: 5.1-adjudicate`, sole `stages: [5.1-adjudicate]`, and valid date. For every frozen `initial.units` entry, the archived native 5.1 dispatch must match successful stable result role, label and exact unit coverage, with valid start/end ordering and `lastExitOk:true`; result completion precedes recorded native dispatch completion, which precedes the request. Worker results additionally require the exact immutable attempt binding, matching attempt index/tag, unaborted completed terminal execution, exit 0 and no timeout/errors. Mechanical zero-work units retain their actual tool-result shape and all existing assignment/empty-review checks; worker-only terminal fields are not invented for them. Inventory is nonempty/unique and derives from the genuine frozen pack rather than hard-coding this run's 107 count.

All original initial report/result run, phase, round, input hash and coverage checks remain. All original frontier/baseline/verdict, current unique manifest ownership, unchanged accepted-Luna draft guards, native reader/alert continuity, individual root confirmation and exact proposed source-edit guards remain. At actual preparation, all native collection evidence is still verified and bound. No original carrier, source observation or native keep is replaced by the creation archive.

Read-only validation (`requireCollection:false`) is permitted only in live paused/drained 5.1 for v2. Actual preparation (`requireCollection:true`) retains the existing live drained 5.1-or-5.2 condition and accepts the real unpaused drained 5.2 planning state by authenticating the earlier creation archives. It cannot admit a late envelope after the first impact pack freezes or after owner dispatch starts.

`guarded-successor.json` names both exact preimages and complete unapplied successors; `step5-reader-concerns.mjs.diff` and `WORKFLOW.md.diff` show the minimal replacements. The documentation replaces only the v2 paused-boundary sentence with the explicit creation/consumption distinction and archival field contract. Root should install by the unique literal replacement against the actual current carrier, preserving any unrelated concurrent document change. Root alone supplies hashes, real boundary archives/envelope, read-only/native validation, installation and fresh-process restart at the upcoming drained 5.1 hold. Static import cache behavior and the existing restart instructions remain unchanged. A copied queried workflow URL alone does not reload this module.

No live boundary claim is made by this proposal: the observed live run was still unpaused 5.1 with active units when analysis began. The required genuine complete paused creation evidence is future owner work. This first-cycle static fix supplies no native review, judgment, mathematical acceptance or execution coverage.
