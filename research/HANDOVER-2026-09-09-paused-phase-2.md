# Handover prompt — paused Phase 2, 2026-09-09

Continue in `/home/lazyinspirit/Projects/prestige-math-library`.
Read `CLAUDE.md` and `README.md` fully; read `WORKFLOW.md` before workflow
controls and `SCHEMA.md` before content edits. Verify everything below against
current disk and processes. Historical RESUME files are not live-run authority.

## Owner's latest instruction

The owner has now authorized resuming and supervising the existing
`phase-2-hg-prerequisite` frontier, resolving blockers and nonclosing loops
autonomously, and recording newly discovered defective published items in
`research/published-consumer-supplier-ledger.md`. **After this frontier
concludes, pause and wait. Do not start another frontier without approval.**
The earlier usage-limit pause below is historical. A resume control was sent
to the verified live controller and consumed. At 18:36 UTC on September 8,
all Step-1 gates passed (including three fetched sources and backing for 22
results), and the engine entered `2-assign`; dispatch PID 14610 was verified
live. The earlier DNS failures are resolved, but the scaffold's planar proof
obligations still require independent Step-3 review. Phase 2 as a whole is not
complete.

Supervision checkpoint: the engine advanced to `3-review`; its initial
reviewer dispatch PID 15778 and controller PID 935 were verified live, with
no runtime blockers and no repeated repair attempts. The owner requests
checks every 20 minutes for stalls/nonclosing loops; retain CLAUDE's stricter
ten-minute checks, with progress updates every 20 minutes or on material
changes. The product's persistent goal was still `blocked` when inspected;
engine resumption does not resume that product goal. Automatic continuation
requires the owner to resume the goal through the interface. This does not
authorize another frontier.

Pause was consumed at `2026-09-08T18:17:31.711Z` (September 9 in Sydney).
Verified `paused: true`, stage `1-scaffold`, blockers `[]`.
Pause stops new dispatches but permits an existing worker to finish.
At the post-publication synchronization, controller PID 935 remained live and
paused; dispatch PID 2995 and Codex child PID 3002 had exited. The engine
recorded `dispatch-ok`, exit 0, at `2026-09-08T18:27:02.056Z`. No scaffold
worker remained among those handles. Its notes nevertheless say **BLOCKED /
not ready for acceptance or publication**: process success is not mathematical
acceptance. No restart or retry was requested. Recheck current handles/results.

## Active run and commands

Run: `phase-2-hg-prerequisite`.
State: `.autopilot/phase-2-hg-prerequisite/` (not root `.autopilot/`).
The TypeScript engine owns every transition, dispatch, retry and gate.

```bash
node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --run phase-2-hg-prerequisite --state-dir .autopilot/phase-2-hg-prerequisite
ps -o pid,ppid,etime,stat,args -p 935,2995,3002
```

Read that state's `events.jsonl`, `state.json`, dispatch receipts and current
artifacts. Avoid dumping large embedded event output. The first two drift
stages passed, with a no-drift review. Step 1's Astra-medium batch-1 dispatch
finished; the engine still reports `1-scaffold`, paused, blockers `[]`.
Subsequent stages have not completed. Read the complete
`research/phase-2-hg-prerequisite-batch-1.notes.md` before any recovery:
the worker reports open singular-planar-diagram and controlled disk-thickening
proof obligations, incomplete transitive semantic review, and failed source
fetch/liveness/backing checks. It produced 19 A and 3 B items, preserving the
mandatory 12 A/3 B inventory and adding seven supporting lemmas. These are
not accepted proofs; do not treat the empty runtime blocker list as closure.

Only after owner resumption: use the documented `resume` control. If the
controller has actually exited, resume then start the same run/state with
`--detach`; inspect/adopt existing worker results instead of duplicating work.
Do not edit runtime state, verdicts, acceptance decisions or gate evidence.

## Mathematical build scope

The active run selects one A/B pair, one batch:
`asymptotic-cones-and-the-sublinear-triangle-criterion` and its examples.
Binding inventory: 12 A items and 3 B items in
`research/plan-group-theory-track.md` (HG-P, around line 3828).
The owner-deferred `quantitative-hyperbolic-geometry-toolkit` (HG) needs this
pair first. Its former scaffold is retained in the wave-1 deferred artifacts.
Do not shrink the cone/filling/uniformity obligations or use HG/its published
consumers circularly as suppliers. Source availability does not prove the
mathematics; normal source, scaffold and independent review gates remain.
Druţu–Kapovich GGT Chapter 10 needs actual targeted full-text reading, not a
page-count receipt. Consult authoritative sources for unfamiliar mathematics.

Four declared prerequisites were published when this run was planned:
`filters-and-ultrafilters`,
`cayley-graphs-word-metrics-and-quasi-isometry`,
`small-cancellation-and-dehn-algorithms`, `free-groups-and-presentations`.

Broader inventory: 146 pairs. Wave 1's 19 pairs are now published, leaving
127 other obligations, including the selected HG-P pair. Publication does not
by itself repair their existing published consumers or establish whole-library
dependency closure. See
`research/phase-2-build-manifest.md` and
`research/phase-2-next-run-screening-2026-09-09.md` for the next-run screen.
The screen's opening no-controller observation predates the HG-P launch.
Its wave-1 draft statuses and publication-dependent candidate exclusions also
predate the publication commit. Recompute scheduling eligibility from the
current tree before selecting the next run; retain actual mathematical and
source gates. In particular the Turing configuration prerequisite for the
Boone candidate is now published. Do not reuse the old screen as a current
frontier or select pairs outside Phase 2.

## Git and completed work

Branch `main`, remote `origin`. Fetched and fast-forward merged `origin/main`
to `209eaa2f1` (`publish(phase-2-wave-1): publish all Phase 2 pages`) on
2026-09-09, without conflicts or stashing. The owner reports VPS publication;
the merged Git changes independently show all 38 changed library pages and
402 changed items marked `published`. This session did not inspect the live
VPS deployment. Previous local push `92b292bfe` contains the EVT Remark repair,
manifest reconciliation and earlier ledger updates.
Preceding `3a3ced783` is the engine close-out of `phase-2-wave-1`:
19 pairs, 38 pages, 402 items, all 50 stages complete. Its former draft state
is superseded by publication commit `209eaa2f1`. Do not rerun that completed run.

Uncommitted completed local work at handover:

- `items/fs-a-continuous-real-function-on-any-subspace-of-a-normal-space-extends.md`:
  corrected introduction/Remark that wrongly claimed 1/x on (0,1] violates
  only closedness in bounded-range Tietze. Comparison now uses the real-valued
  corollary under its DC assumption and distinguishes bounded range. The
  choice-free nonextension proof is unchanged. Full item and all twelve
  direct supplier interfaces reviewed. Targeted precheck passed; repository
  rendercheck passed for 16,767 files at that snapshot.
- `items/fs-integration-by-parts-needs-no-integrability-hypothesis.md`:
  full item and all eighteen direct interfaces reviewed; proof is sound.
  Corrected statement provenance ai-generated to ai-altered: the text deletes
  a hypothesis from the integration-by-parts theorem. Same-B earlier supplier
  is permitted and adequate. Targeted precheck/rendercheck passed.
- `research/published-consumer-supplier-ledger.md`: the repairs and bounded
  reviews below, with counts reconciled. Old judge stamps on edited items
  were replaced by honest local verification; no new independent judge.

Many untracked `research/phase-2-hg-prerequisite-*` files belong to the live
engine. Preserve them; do not indiscriminately stage or delete them. No local
push was performed after `92b292bfe`; `209eaa2f1` was fetched from the owner.
The three tracked local audit edits survived the merge unchanged. This
handover itself is a new local file.

## Canonical audit ledger and next item

Use only `research/published-consumer-supplier-ledger.md` as the canonical
published consumer/supplier ledger. Current deduplicated index:
U-P 1698; U-C 5; A-R 76; A-P 127; bounded no-repair-needed 286.
Total 2192 unique indexed published items, no duplicate index rows.
The ledger's 15014 published-item census and 12822 outside-pool count are
historical, pre-wave-1-publication figures; recompute the census before using
them as current totals. The index classifications above are unchanged by the
merge. This is not an exhaustive audit. A-R includes explicitly scoped metadata
repairs, not only proof repairs. On resumption reconcile wave-1 supplier
publication states throughout the manifest, screening and consumer ledger;
do not close A-P proof debt merely because a supplier is now published.

New bounded no-repair reviews since the last push:
`cex-a-continuous-function-on-a-non-closed-subspace-with-no-extension`
(full item plus ten direct interfaces), and
`cex-a-function-with-a-primitive-that-is-not-integrable`
(full polynomial-bump proof plus 25 direct interfaces).
Earlier cube-map counterexample review was already pushed.

Ledger §9.4's blanket demand to remove all same-B dependencies was corrected:
SCHEMA permits an earlier same-B supplier, but forbids AI-generated statement
dependency targets. Keep remaining historical entries as candidates; inspect
ordering, provenance and actual adequacy individually. Do not automatically
clear all such entries or duplicate sound proofs.

Interrupted audit target:
`cex-an-integrable-function-with-no-primitive` (still U-P).
Its complete body was read, but its 23 direct supplier interfaces have not yet
all been checked in this audit. It uses the sign function, finite-point
integral invariance, zero derivative implies constant on each half, and
different one-sided difference-quotient limits at zero. No new defect was
confirmed and no edits/disposition were made before the owner paused work.
Resume that one-item audit only when work is authorized again.

## Continuing rules

Owner permits confident published repairs needing no unpublished Phase-2
supplier, one item at a time, without a new judge. Record exact evidence,
supplier publication states, repair strategy and local-check scope promptly.
Do not relabel an unexamined item as sound or repaired. Missing indispensable
Phase-2 prerequisites require scaffold/manifest reconciliation, not a waiver.
Use AC where necessary and state its exact use and dependency, but preserve
choice-free proofs. Never consume Recorded, Not Proved Here as a supplier;
the Foundations prohibition includes transitive/load-bearing references.
On authorized resumption, supervise the engine at least every ten minutes
per CLAUDE, report progress about every fifteen minutes, and intervene only
on actual blockers or nonclosing loops. Do not overlap healthy worker writes.
