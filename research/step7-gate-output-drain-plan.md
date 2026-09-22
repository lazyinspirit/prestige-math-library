# Step 7 gate-output drain repair

The 2026-09-22 7.10 battery received truncated JSON from depsource and
judge-closure although both raw processes returned zero. Their CLI endings call
`process.exit` immediately after printing large reports. Piped stdout may still
be buffered. The gate runner already waits for stream closure and retains output.

1. Replace forced terminal exits with `process.exitCode` in depsource,
   level-coverage and the same report-ending path in proof-contract. Preserve
   validation logic, exit values and early argument-error exits.
2. Test the actual report-ending statements with large piped JSON on both
   success and failure; run existing frontier gate tests and a read-only full
   depsource invocation through a pipe.
3. Commit only this fix, its regression test and documentation. Existing owner
   workers retain their seven frontier assignments. No mathematical evidence or
   gate failure is waived; the next normal battery must consume complete output.

## Verification

Implemented the three report-ending changes. Six large-pipe regressions pass
(success and failure for each detector), as do all ten frontier projection and
gate-runner tests. A read-only production depsource run returned parseable JSON:
25,863,001 bytes, 81,653 dependency rows, zero unresolved, exit 0, empty stderr.
No item, verdict, frozen assignment or historical failure report was changed.
