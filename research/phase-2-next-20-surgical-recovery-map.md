# Surgical recovery map — paused Step 8

This is a read-only implementation proposal, not authorization or a performed
recovery. The 19 targets are the exact `consumer` IDs in
`phase-2-next-20-postfreeze-active-consumer-audit.json`. No live state, item,
published supplier, judge ledger, or snapshot was changed for this map.

## Current boundary

The controller is paused at `8-receipt`; its worker exited successfully and
the settled level-coverage check has zero errors. Step 9 has not started.
`7-rejudge` completed with its one final-adjudication round used. The existing
`post-step7` snapshot must remain immutable. The current Step-8 change index
is empty, and `8-changes-judge`, `8-close`, and `8-changes-stamp` already have
successful dispatch coverage and cached gate passes.

CLAUDE.md's Step-7 rule prohibits post-final mathematical repairs and repeat
judge waves. A surgical recovery therefore requires an explicit owner exception
for this named target set and certification pass. Merely observing older Step-8
repair hooks does not authorize their use against that rule.

## Shortest complete route

1. Record a hash-bound recovery authorization and the exact 19 target IDs,
   owning batches, defects, current hashes, allowed paths, and stop conditions.
   Keep published items read-only. An unexpected need for new suppliers or a
   broader mathematical scope stops for authorization; this map does not assert
   that all 19 mathematical repairs can be completed inline.
2. Have the relevant owners read and repair those consumers in dependency order,
   together with their exact batch contract/manifest evidence. Preserve source
   and published-defect history. Run focused precheck, render, strict contracts,
   citation, boundary, and risk checks; update plan dependencies with the normal
   splice tool. A coherent mathematical repair precedes certification.
3. Add a uniquely named post-repair touch snapshot. Recompute the Step-8 change
   index against the original `post-step7` snapshot. Refuse unauthorized created,
   deleted, published, or out-of-allowlist item changes.
4. Reopen only `8-changes-judge`, `8-close`, `8-changes-stamp`, and `8-receipt`
   through an audited engine recovery command, described below. Do not reopen
   Step 7, rerun scope-denial review, or replace `post-step8-scope`.
5. The engine dispatches current-hash judging for changed mathematical items and
   any other items whose judge contexts became stale. Reconcile exact rejection
   tuples; no fabricated pass or blanket hash refresh. A further mathematical
   repair changes the certification set and needs the expressly bounded recovery
   policy; do not silently start an unlimited judge loop.
6. Close downstream impact, refresh exact stamps, update only invalidated receipt
   evidence, and run whole-frontier closure. Then continue through ordinary Step 9.

Only the exact stale subset needs paid judgments. Whole-frontier *mechanical*
coverage is still necessary: a changed supplier interface can invalidate an
unchanged consumer's prompt, and the final 625-item check detects that. Therefore
"exactly 19 new judgments" cannot be promised before the repairs are known.

## Existing commands and artifacts

Below, `RUN` means `phase-2-next-20`; `MANIFESTS` is the comma-separated exact
15 existing `research/RUN-batch-N.pages.json` paths; `CHANGED_IDS` comes from
the recomputed `RUN-step8-changes.json`; `STALE_IDS` is the exact additional
`needs_rejudge` set derived by whole-frontier closure. These are command templates,
not shell commands that have been executed for this proposal.

```text
node tools/splice-plan.mjs --run RUN --batch N --update
node tools/splice-plan.mjs --run RUN --verify
node tools/touchlog.mjs snap research/RUN-touches.json post-step8-owner-recovery-1

node tools/step8-changes.mjs --touches research/RUN-touches.json --baseline post-step7 --manifests MANIFESTS --out research/RUN-step8-changes.json --scope-out research/RUN-step8-changes.pages.json

# Engine-owned paid dispatch, not an operator call:
node tools/judge-sweep.mjs --run RUN --ledger research/RUN-judge.jsonl --cost research/RUN-judge-cost.jsonl --items CHANGED_IDS,STALE_IDS

node tools/level-coverage.mjs --judge-only --verify-current-context --judge-ledger research/RUN-judge.jsonl --judge-adjudications research/RUN-judge-adjudications.jsonl --out research/RUN-step8-judge-closure.json research/RUN-step8-changes.pages.json

node tools/impact-audit.mjs --touches research/RUN-touches.json --from pre-author --to post-step8-owner-recovery-1 --refresh-receipt research/RUN-impact.json
node tools/impact-audit.mjs --touches research/RUN-touches.json --from pre-author --to post-step8-owner-recovery-1 --receipt research/RUN-impact.json

node tools/apply-judge-stamps.mjs --ledger research/RUN-judge.jsonl --items CHANGED_IDS,STALE_IDS --terminal-resolutions research/RUN-step7-terminal-resolutions.jsonl --apply --report research/RUN-step8-judge-stamps.json
node tools/apply-judge-stamps.mjs --ledger research/RUN-judge.jsonl --items CHANGED_IDS,STALE_IDS --terminal-resolutions research/RUN-step7-terminal-resolutions.jsonl --verify

node tools/spine-audit.mjs --receipt research/RUN-spine-audit.json
node tools/level-coverage.mjs --contracts research/RUN-proof-contracts.json --judge-ledger research/RUN-judge.jsonl --judge-adjudications research/RUN-judge-adjudications.jsonl --terminal-resolutions research/RUN-step7-terminal-resolutions.jsonl --spine-receipt research/RUN-spine-audit.json --audit-receipt research/RUN-audit-coverage.json --verify-current-context research/RUN-batch-*.pages.json
```

`judge-sweep` already skips exact current item/model/context verdicts. Preserve
the judge, adjudication, cost, and terminal-resolution JSONL histories. None of
the 19 targets is one of the eight terminal-resolved IDs. Nevertheless, check
those eight contexts after repairs: `level-coverage` and `apply-judge-stamps`
explicitly reject a stale terminal row even if a new paid verdict exists. If an
unchanged terminal-resolved consumer becomes context-stale, recovery needs an
explicit hash-bound supersession mechanism shared by these checkers; fresh
judging alone is insufficient. Do not delete its old row or rewrite the frozen
final-adjudicator queue. If all eight remain current, no such extension is needed.

Impact `--refresh-receipt` only discovers pending work. An owner must review and
close every new or stale disposition with exact consumer evidence. Retain valid
old dispositions. The unique post-repair snapshot is necessary because the
existing `8-close` impact gate uses the latest snapshot, not implicit current
disk content. Add another unique snapshot only if a subsequent authorized repair
changes mathematics.

Keep valid spine readings and coverage reconciliation evidence. Read/review only
newly selected or hash-invalidated spine items and affected dependency deltas;
never replace a whole receipt with a blank template solely to recover currency.

## Necessary engine addition

There is no existing supported reopen/rewind command. `retry` resets attempts and
repair budgets only for unfinished stages; successful coverage and `gatesPassedAt`
remain. `resume` only clears pause. Thus repairing files and issuing `retry` would
not guarantee re-execution of the already successful Step-8 certification suffix.

The minimal addition is a narrowly scoped, auditable command, for example
`recover-step8 --run RUN --state-dir .autopilot/RUN --authorization FILE` (proposed,
not currently implemented). It should:

- require an intentional pause, no active/adopted workers, no Step-9 dispatch,
  and a valid owner authorization bound to this run, baseline, and target hashes;
- archive the exact affected suffix's successful dispatch artifacts and state
  records under a unique recovery ID, with byte hashes and an append-only event;
  prevent old results from satisfying reopened coverage without deleting history;
- invalidate only that suffix's completion/gate cache and derive its new exact
  change/judge/impact scope; preserve all Step-7 receipts and lifetime budgets;
- retain pause until deliberate resume, and be idempotent/restart-safe;
- restore `8-receipt` through the narrow evidence-repair brief, using current
  failed checks and preserved valid receipts rather than repeating the full audit.

A recovery epoch that changes the suffix's result namespace is an alternative
to archival invalidation. One mechanism is sufficient. Raw state-file edits,
deleting success receipts, replaying Step 7, copying old successful dispatches,
or resetting immutable snapshots are not legitimate substitutes.

Relevant code: `tools/autopilot/src/executor.mts` (`stageStatus`, `retry`),
`tools/autopilot/stages/mathlib.mts` (`8-changes-judge` through `8-receipt`),
`tools/step8-changes.mjs`, `tools/judge-sweep.mjs`, `tools/touchlog.mjs`, and
`briefs/tasks/alpha-receipts-repair.md`.
