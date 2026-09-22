# Historical run telemetry

Snapshot: 2026-09-22, baseline `b40da0d52`. Read
[run counters](2026-09-22/runs.tsv) first; [summary](2026-09-22/summary.json)
contains model breakdowns, event counts and per-namespace measurement gaps.
Names are observed run/ledger namespaces, not a claim of 94 distinct builds.
TSV cells use `unknown` for missing values.

## Coverage

The main snapshot accounts for **15,034 source paths**: 9,352 represented,
5,250 hardlink aliases, 431 byte-identical copies and one excluded fixture.
The [supplement](2026-09-22-supplement/summary.json) accounts for another
143 historical workflow ledgers, including one excluded injection-test fixture.
The [nested-log supplement](2026-09-22-nested-logs/summary.json) accounts for
two checkpoint log paths (one hardlink alias). Final reconciliation covers
**15,179 source paths**, with no remaining unaccounted supported telemetry files.
Both source inventories retain path, size, SHA-256 and accounting disposition.
There were no unreadable files or malformed JSON lines in these snapshots.

| Main retained observations | Records |
|---|---:|
| Dispatch receipts | 5,746 |
| Judge attempts / usage / verdicts | 36,912 / 41,816 / 37,280 |
| Engine events / states | 68,254 / 37 |
| Session counter changes / session summaries | 8,722 / 160 |
| Defect records | 10,122 |
| Raw-log numeric-hint records | 3,203 |
| Supplemental workflow-ledger rows | 18,188 |

Compressed JSONL files contain allowlisted identities, counters, timings and
outcomes, not prompts, transcript prose, mathematical explanations or credentials.
The original mathematical and certification ledgers remain in place.
`manifest.json` authenticates each archive file; `sources.jsonl.gz` accounts for
original inputs, including aliases. These checks detect accidental corruption;
they are not external signatures.

## Interpretation and limits

- Dispatch, judge and session measurements overlap: **never add these channels**.
- Snapshot copies of events/sessions may overlap. Session totals describe retained
  observations, not independently deduplicated billing. Source identities remain
  available for analysis; summed token counts are not a dollar-cost estimate.
- Missing usage is unknown, not zero. Historical zero-only judge counters are
  explicitly ambiguous. Mechanical dispatches may legitimately lack LLM usage.
- Date bounds are observed timestamps, not necessarily full elapsed run time.
- Coverage is the retained checkout (including ignored runtime files), not every
  deleted Git revision or expired provider session. Never-recorded counters cannot
  be recovered. Supplemental ledgers preserve statuses without inventing usage.
- Completeness means every discovered source in the supported formats is accounted
  for, not that historical instrumentation measured every request.

## Cleanup and recovery

[Cleanup summary](cleanup-2026-09-22.json) records the private local recovery
directory, counts and size. `cleanup-2026-09-22.jsonl.gz` is the exact path/hash
inventory. Completed-run runtime files and raw logs, leaked test bundles, the
empty bootstrap file and a stale live-status note were moved, **not erased**.
The move covers **34,490 files / 13.94 GiB of unique inode data**; hardlinked
path sizes must not be added as independent storage.
Restore each manifest path from the recovery directory to this repository,
refusing to overwrite an existing path. Moving files does not reclaim disk blocks.

Paused/uncertain runs, source caches, historical resume documents, mathematical
content and tracked certification evidence are retained. No Git history rewrite.

## Maintenance

Run from the repository root before cleaning future concluded runs:

```bash
node tools/run-telemetry.mjs collect research/run-telemetry/NEW-SNAPSHOT
node tools/run-telemetry.mjs verify research/run-telemetry/NEW-SNAPSHOT
node --test tools/run-telemetry.test.mjs
```

Collection refuses to overwrite a snapshot. Optional trailing arguments to
`collect` exclude source paths already recorded in specified snapshots; use
this only for an immediate coverage supplement, not changed later-run files.
Raw evidence must remain recoverable before any cleanup. Never remove an active
or paused run merely because its files are large or old.

Validation: telemetry tests 3/3; focused fixture-render tests 2/2. The broader
`step7-groups` suite was 27/28: its unchanged prerequisite-brief wording assertion
does not match the current briefs. No workflow semantics or briefs were changed.
