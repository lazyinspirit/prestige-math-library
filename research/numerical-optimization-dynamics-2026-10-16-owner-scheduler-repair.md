# Native scheduler escalation: batch 37 / supplier 23

Run: `numerical-optimization-dynamics-2026-10-16`. Investigation: 2026-10-15 UTC. Owner delegated diagnosis and at most two focused repair cycles; no tests, gates, run controls, content edits, or commits were performed.

The reported escalation recovered through the existing native recheck. No persistent scheduling defect was established, so no scheduling source was changed.

## Evidence and actual source path

- `.autopilot/numerical-optimization-dynamics-2026-10-16/events.jsonl` records the blocker at `2026-10-15T23:09:30.889Z`: `stage 1-scaffold: invalid unit prerequisites — 37 names prerequisite(s) not owed by this stage: 23`.
- The same event stream records 30 running workers at `23:09:41.134Z`, then native recovery at `2026-10-15T23:10:32.669Z`: `1-scaffold: unit prerequisite graph is valid`.
- After recovery, on-disk state has `blockers: []`; there are 107 matching batch manifest filenames, including batch 23.
- The current batch-23 manifest inode has birth, change and modification time `2026-10-15T23:09:47.819821116Z`, after the blocker and before recovery. It is populated. These timestamps support concurrent removal/recreation or replacement; they do not identify the writer operation conclusively.
- `tools/autopilot/stages/mathlib.mts` exports `batches(ctx)`, which obtains owed units exclusively from matching `research/RUN-batch-N.pages.json` filenames. It does not inspect JSON or item inventory. Consequently an empty batch inventory cannot itself omit batch 23 from the owed set.
- Stage `1-scaffold` uses that function as `units`; its prerequisites use `prerequisiteBatches(..., {constructionScheduling:true})`. The latter shares its manifest snapshot through the current context. `Executor.unitReadiness` independently enumerates current owed filenames, builds the declared dependency graph, rejects unknown owners/cycles, then applies eligibility, active writer, exclusive cohort and completion policy checks.
- The run-local strict boundary stage module and `owner-supervised.mts` preserve the native unit/prerequisite functions. They add gate supervision, not an inventory filter.

The observed diagnostic therefore establishes a mismatch between the filename-derived owed set and the declared prerequisite snapshot at that pass. Concurrent filename removal/recreation is consistent with both the source path and filesystem timestamps. The historical bytes and precise worker filesystem operation were not retained here, so that last causal detail remains an inference. In particular, this investigation does not claim a parser error or silently empty manifest caused the observed message.

## Disposition

The native scheduler failed closed while the supplier owner was missing from that pass, retained 30 live workers, and automatically retired its keyed prerequisite blocker after a clean graph evaluation. Do not suppress the unknown-owner check or drop the supplier edge: either would weaken graph validation without repairing a demonstrated persistent fault.

The priority policy already permits initial authors to fill available stage/role/global slots without waiting for cross-pair supplier completion. Graph validation, adoption and exclusive-writer protection remain active. Actual source/readiness checks, strict post-drain levels and every gate remain mandatory. Existing recovery handled this incident; no owner reload, recertification or run-state mutation was performed by this investigator. Source syntax checking is inapplicable because no source changed; no tests were run, as directed.
