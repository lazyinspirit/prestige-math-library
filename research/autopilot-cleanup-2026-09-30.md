# Autopilot cleanup telemetry (2026-09-30)

The `frontier-36-complete` engine run reached its Step 9 closeout. The
repository's mathematical content, dispatch results, judge cost ledgers, and
other JSONL audit records remain tracked.

The following compact records preserve the information used for this cleanup:

- `autopilot-cleanup-telemetry-2026-09-30.json`: run timelines, dispatch and
  blocker counts, failure groups, tracked log summaries, and the old worktree's
  untracked file hashes.
- `autopilot-token-telemetry-2026-09-30.json`: deduplicated dispatch token
  totals by model and role, plus separate judge cost totals. Some dispatches
  have no retained token events; the file states that limit explicitly.
- `autopilot-log-manifest-2026-09-30.json`: paths, sizes, and SHA-256 hashes for
  every log removed, with aggregate counts and runtime directory inventory.

The 31 tracked logs and ignored dispatch logs are transient execution output.
The old integration worktree contains only generated task prompts and a local
`node_modules` symlink; their details are in the cleanup telemetry. The
integration branch and old braid plan are both in `main`'s ancestry. The braid
plan's newer content on `main` was retained during the merge.

The ignored `.autopilot*` directories were runtime state for concluded runs.
Removing them does not change the tracked Step 9 closeout or publication
readiness records. To inspect historical outcomes, use the telemetry here and
the corresponding tracked research reports and ledgers.

The ignored `scratchpad/` remains because the tracked Step 9 report integrity
record hashes its source caches, OCR material, and previews. Local settings and
installed dependencies also remain available for future work.

The Step 9 integrity record is a historical snapshot and includes some of the
removed logs. Its old tree hash is therefore not a hash of the cleaned checkout;
the log manifest records the exact removed paths and hashes for comparison.
