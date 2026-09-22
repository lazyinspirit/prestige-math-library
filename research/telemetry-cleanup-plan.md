# Past-run telemetry and repository cleanup

1. Inventory all retained dispatch receipts, judge cost/verdict ledgers, runtime
   states/events and session token counters, including ignored files. Identify
   concluded runs from close-out commits, not from old resume claims.
2. Produce a compact, versioned telemetry archive: one readable run table,
   normalized detailed records, source/coverage inventory and explicit gaps.
   Deduplicate stable/attempt aliases without collapsing genuine repeated calls.
   Keep dispatch usage, session usage and judge usage separate to avoid double
   counting. Missing usage is unknown, never zero; counters are not invoices.
   Store no prompts, transcript prose, credentials or mathematical proof text.
3. Test normalization, alias handling, missing/zero counters, malformed records,
   session counter resets and cleanup path guards. Reconcile source accounting
   and archive record counts before cleanup.
4. Move only verified completed-run local runtime/log files and obsolete
   operational leftovers to a recoverable local directory outside this repo.
   Preserve paused/unverified runs, source caches, mathematical content, all
   judgment/certification/manifests and canonical planning/defect records.
   Record exact moved paths and archive location; do not rewrite Git history.
5. Fix the test-fixture leak and stale documentation; run focused tests,
   check protected evidence and mathematical files are unchanged, and commit
   only this telemetry/cleanup work. Do not push without a fresh request.

Completeness means every available telemetry source is inventoried and either
represented, deduplicated with provenance, or explicitly reported unreadable/
unsupported. Historical measurements never recorded cannot be reconstructed
honestly. The local recovery archive preserves originals until the owner elects
to discard it; moving files cleans the repo but does not free their disk blocks.

## Completed outcome

Archived 15,179 source paths with hashes and explicit aliases/measurement gaps.
Reconciled all supported retained telemetry and every moved telemetry source.
Moved 34,490 files recoverably; retained historical resume documents because they
are useful evidence, and preserved all paused/uncertain runs and mathematical
and certification files. Details: [telemetry index](run-telemetry/README.md).
Focused tests passed (3 telemetry, 2 fixture-render). The broader suite passed
27/28; its failing brief-wording assertion and both input briefs are unchanged
from the baseline. No mathematical or workflow-semantic repair was attempted.
