# Mathematics capacity and pre-authoring scope proposal

Proposal only. No active source, configuration, native state, historical report, quantum-session file, or physics file was edited. No tests, doctor, gates, or author dispatches were run. The only writes are in this directory. Read CLAUDE.md, README.md and WORKFLOW.md, and consulted the workflow rebuild checklist.

## Recommended implementation

Apply `capacity-256.patch` only after comparing every current source raw SHA-256 with `patch-guards.json`; abort on any mismatch and review that difference rather than overwrite it. The patch changes eight mathematics code/documentation files. The functional change is central inventory capacity 80 -> 256, correct spreadsheet labels in two callers, and task enumeration from the actual validated native assignment. It leaves one A/B pair per batch, at most three batches per group, global active workers 30, prerequisite policies, source-readiness checks, writer exclusion, model profiles, review counters, scope guards and every gate unchanged. No workflow revision bump is needed for this inventory/helper change: there are no new review obligations or changed coverage semantics. It is not authority to replace prompts beneath an active historical run.

`run-tasks.mjs` must use actual `alpha-groups.json` labels when present. Merely replacing `fromCharCode` fixes punctuation after z but still misses legal category-cohesive group inventories larger than ceil(batch count/3). The proposed implementation parses array and `{groups}` shapes, uses the existing native batch loader and validator, fails closed on invalid present metadata, and uses `alphabeticLabel` plus the existing group-size constant only before assignment exists. Existing valid labels/coverage are preserved.

The second `fromCharCode` defect is mathematics `src/merge-import.mjs`; fixing it keeps its mapping pure and preserves original evidence attribution. The patch does not activate importing or introduce a new import route.

## Inspected capacity and identity assumptions

| Surface | Finding and consequence |
|---|---|
| `src/capacity.mjs` | Single math pair ceiling; run batch/group maxima derive from it. Set only pair ceiling 256. |
| `bin/autopilot.mts`, `src/frontier.mts` | Explicit/automatic planning and next selection use central pair ceiling. Native planner still forces batch cap 1. Default CLI global concurrency remains 30. |
| `tools/drift-apply.mjs` | Native rescope bound uses central constant; cap 1 and mint threshold 3 unchanged. Existing rescope is a review verdict materialization, not a new owner re-scope transaction. |
| `src/frontier-append.mts` | Combined prior/new scope uses central ceiling; positive decimal batch regex handles 256; appended page IDs must be disjoint; original manifest and native evidence guards retained. |
| `tools/plan-manifests.mjs`, `tools/alpha-groups.mjs` | Native assignment gets engine-specific central batch/group maxima and three-batch group cap. |
| `tools/alpha-group-assignment.mjs` | Existing helper implements bijective base-26; group validation accepts `[a-z]+`, unique labels, complete batch coverage, category cohesion and max counts. No change to shared helper. |
| `stages/mathlib.mts` | Actual native assignments read first; positional fallback already uses correct alphabetic helper. Batch result patterns use `\d+`; scaffold and Step-2 lane inventory limits derive from capacity. |
| `stages/mathlib.step3.mts` and related scope/creation/close tools | Group labels use `[a-z]+`; batch IDs use positive decimal/digit sequences. No one-letter restriction or two-digit batch ceiling found. Step-3 lane maxima derive from capacity. |
| `tools/dispatch.mjs` | Beta, reader, refuter, batch-reader and author lane ceilings derive from batch maximum; group roles derive from group maximum. Only stale comments change. |
| `src/executor.mts` | Slots are min(stage budget, role budget, global budget); adopted active dispatches are counted. Raising inventory cannot exceed configured global 30. |
| `tools/run-tasks.mjs` | Broken positional `fromCharCode` and missing actual assignment enumeration fixed as above. Task filenames substitute full string labels and arbitrary decimal batch IDs. |
| `src/merge-import.mjs` | Broken remap-label constructor fixed with existing helper; capacity guards remain. This dormant path is not needed to supersede a pre-authoring run. |
| `briefs/schemas/*`, `src/spec.mts`, Step-5 group/scope tools | No numeric 80 or one-letter group schema restriction found. Small `maxItems`/`maximum` fields govern report shape/repair round limits, not run size; retain them. |
| `tools/judge-sweep.mjs` | 27 is a judge process safety ceiling, not pair/group inventory; unchanged. |
| `briefs/alpha.md`, `briefs/alpha-assign.md` | Remove stale numeric engine capacity; retain native-engine-derived wording and group size 3. |
| `WORKFLOW.md`, `tools/autopilot/README.md` | Document 256 math pairs, independent physics limits, labels, global 30, and native append/supersession choice. |
| Physics mirrors and isolation history | Independent cap80 and helpers unchanged; do not mirror this patch. Root helper already supported multi-letter labels before this change. |

Manual boundary reasoning: zero-based label 25 is z, 26 aa, 51 az, 52 ba, 85 ch, and 255 iv. A same-category 256-batch frontier can have 86 groups ending ch; a fragmented category layout may legally need more, bounded conservatively by 256 groups ending iv. The helper’s division/modulo mapping handles both. Three-digit batches survive numeric sorting and existing digit regexes. All planning/dispatch capacities flow from the same new central math bound. Global workers stay bounded by 30 even if a stage admits all 256 inventory units as eligible. No empirical performance claim has been made.

Historical tests with literal 80 assertions exist (`frontier.test.mts`, `drift-review.test.mts`, `frontier-append.test.mts`, `alpha-group-assignment.test.mjs`). They were neither changed nor run, per the user’s no-tests direction. They should not be represented as current validation of a changed ceiling. Root will perform authorized native doctor/full-scope checks instead.

## Scope integration decision

At inspection, `.autopilot/numerical-analysis-48-2026-10-16/state.json` is paused at `1-drift-apply`; original drift is natively complete, original apply worker succeeded, but apply gates/doneAt are absent. No scaffold dispatch appears in this state. That is not yet a legal append boundary. This observation does not authorize direct state changes.

Native `plan --append` is the correct history-preserving addition-only route **if every original pair remains genuinely owed**. It requires paused unfinished `1-scaffold` (or existing native append boundary), original drift and apply gates/doneAt, all target dispatches resolved, and stopped/drained target controller/preflight/writers. Complete the original apply battery through the existing owner-supervised native mechanism, then stop before any author dispatch and establish these guards. Register all additions in one append generation where practical, using explicit A-page CSV and `--allow-in-run-dependencies`. Native append archives generated preimages, leaves existing manifest bytes/native state intact, inserts fresh appended drift/apply stages, and obtains new execution evidence for appended scope. Existing scope is still one frontier with the additions.

However, deduplication may remove fully covered original planned pairs. Native append expressly cannot remove or replace them, and its review forbids rescoping existing scope. `drift-apply` has an older `drift-rescoped` verdict parser, but current original report is genuine completed native evidence: editing it to manufacture revised owner decisions would break attribution. Ordinary `plan --force` rewrites manifests/tasks/ledger without a guarded evidence-preserving transaction. No native general removal/replacement transaction was found in the CLI/source. Reopening Step-3 or closeout is inapplicable before authoring.

**Recommendation if any original pair is eliminated:** leave the original paused run and all evidence unchanged; write a hash-bound supersession note identifying original state and evidence and the exact owner-directed new deduplicated inventory. Plan one fresh superseding pre-authoring run containing every new numerical method and every unmet prerequisite, excluding already supplied statistical/linear-algebra content. Keep external existing suppliers as context. Preserve original reading notes/full texts and cite them honestly as prior source context; do not adopt original worker, readiness, review, drift or gate coverage. Fresh native drift may use those readings but must assess its own exact final scope. Obtain all current native checks, owner pre-gate passes, gates and authoring for the superseding run. This achieves one conceptual/current frontier without retaining duplicate author obligations or rewriting history.

Do not select an addition-only append merely to avoid naming supersession: keeping fully covered original pages as author obligations contradicts the owner’s deduplication instruction. Conversely, no need to supersede if the detailed item comparison shows original pairs retain distinct uncovered claims; record exact reused supplier IDs and new claims in those pairs and append remaining work natively.

## Authorized root validation after applying

First bind exact final plan/manifests, reciprocal A/B identities, unique item/page ownership, no duplicate existing statistical/linear-algebra supplier claims, actual dependency closure, cycle freedom and full new-method inventory. Run native `doctor` and `run-tasks --check` over that complete nonempty selected run. Confirm actual group assignment labels/coverage, derived batch levels, declared external supplier context, global cap30 and the existing strict owner-supervised boundary. Run current required native full-scope planning gates with fresh owner preparation only after all design/source escalations are resolved. These are proposed validation steps; this agent has not executed or passed them.
