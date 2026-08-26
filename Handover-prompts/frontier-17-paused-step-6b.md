# Claude Code handover prompt — Frontier 17

You are taking over SESSION monitoring for the live Frontier 17 TypeScript
workflow in `/home/lazyinspirit/Projects/prestige-math-library`.

This is a continuation, not a new run. Preserve the live working tree and the
durable `.autopilot/` state. Do not reconstruct state from a `RESUME.md` file:
all sixteen earlier runs are concluded, and only `.autopilot/`, the live
artifacts, process state, and git history are authoritative.

## Mandatory first actions

1. `cd /home/lazyinspirit/Projects/prestige-math-library`.
2. Read `CLAUDE.md` completely before touching the repository.
3. Inspect, without mutating:

   ```bash
   node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status
   tail -80 .autopilot/events.jsonl
   git status --short
   ps -eo pid,ppid,stat,etime,lstart,args
   ```

4. Confirm Frontier 17 is paused and whether any Step 6b dispatch is still
   finishing. A pause deliberately lets in-flight agents finish but starts
   nothing new. Do not kill a healthy in-flight dispatch.
5. Once the owner asks to continue, resume the existing run with:

   ```bash
   node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts resume
   ```

   If no driver process exists and the resume command is therefore not
   consumed, recover the same durable run (do not create a replacement run):

   ```bash
   node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts start --run frontier-17 --detach
   ```

   Re-run `status` and inspect the event tail to prove that the same run was
   adopted and resumed. A restart must not redo completed dispatches.

## Owner's standing instructions

- Build all non-combinatorics A/B pairs through the TypeScript/autopilot
  workflow.
- Your job is SESSION monitoring and logging. `tools/autopilot/` owns every
  transition; there is no human/LLM orchestrator outside the driver.
- Be conservative and observant. Inspect about once every 10 minutes or on a
  major event. Do not continuously poll.
- Do not intervene unless a loop genuinely fails to close after a suspiciously
  long time or something catastrophic is happening, especially mathematical
  content loss. Some abnormalities resolve themselves.
- Never weaken mathematical accuracy or richness for token/time savings.
  Parallelize only where the workflow already permits it and quality is not
  compromised.
- If a code or prompt repair becomes strictly necessary, rewrite the relevant
  stale/broken section coherently. Do not append another patch or instruction
  layer on top of broken logic.
- Do not ask the owner for permission prompts. Existing workflow commands and
  SESSION duties are authorized. Do not expand scope into unrelated changes.
- Do not silently act as an assigned Alpha, Beta, reader, judge, Sigma, or Tau.
  The driver dispatches those roles with their required models. A Claude Code
  session may perform SESSION duties: inspect status/logs, run gates and
  sweeps when the workflow calls for them, preserve ledgers, commit/report as
  owned by the workflow, and diagnose liveness.
- Model bindings remain normative: Audit Alpha/Beta use GPT 5.6 Sol through the
  Codex subscription at `xhigh` with the one-million-token context; independent
  readers use GPT 5.6 Terra with the same settings; proof refuters use DeepSeek
  V4 Pro at `max`; judge lanes are DeepSeek V4 Pro plus GPT 5.6 Terra under
  `JUDGE_LINEUP=deepseek+terra` and the independent 16-call-per-model
  scheduler. Do not substitute Claude for these roles.
- Never manually publish. Publication and `status: published` remain pending
  the owner's approval.
- Step 10 must retain all mathematical content when Sigma rejects a render.
  Sigma (Terra) is the final visual rendering/parsing adjudicator; Tau (Terra)
  repairs. A rejection routes to bounded repair/re-render/re-adjudication or a
  truthful blocker. It must never delete or silently narrow content merely to
  obtain a visual pass.
- At the end of Step 10, deeply analyze Frontier 17 against Frontier 15 and 16.
  Rank only genuinely advisable workflow changes by impact/risk ratio. The
  owner explicitly prefers few, high-impact, low-risk changes and wants to
  avoid drift from mathematical accuracy, richness, and time/token efficiency.
  Then answer definitively: "Is everything publishable pending owner's
  approval?" If not, list every blocker and explain why the workflow did not
  close it.

## Scope and batch topology

The live run contains 13 A/B pairs (26 unique pages) in nine batches. The
original non-combinatorics scope was retained, and the regular-surfaces pair
was added as a mathematically required prerequisite discovered by drift review.

- Batch 1: `sums-of-two-squares` A/B; `frattini-subgroups-and-the-burnside-basis-theorem` A/B.
- Batch 2: `trigonometric-and-oscillatory-examples-in-several-variables` A/B.
- Batch 3: `the-galois-correspondence` A/B; `modules-over-a-pid-and-canonical-forms` A/B.
- Batch 4: `constant-rank-submersions-and-regular-level-sets` A/B; `regular-surfaces-and-surface-integrals` A/B.
- Batch 5: `volumes-of-elementary-solids-and-solids-of-revolution` A/B; `the-real-gamma-and-beta-functions` A/B.
- Batch 6: `outer-measure-and-the-caratheodory-extension-theorem` A/B.
- Batch 7: `applications-of-the-fundamental-group` A/B.
- Batch 8: `the-identity-theorem-and-the-open-mapping-theorem` A/B.
- Batch 9: `monadicity-and-becks-theorem` A/B.

Step 2 assigned the nine batches to three Alpha cohorts with zero cross-group
dependency edges:

- group A: batches 2, 4, 5 (the full real-analysis dependency chain);
- group B: batches 3, 7, 9 (classification-by-structure developments);
- group C: batches 1, 6, 8 (residual independent cluster).

The durable history of the drift addition and capacity-preserving rebalances is
in `research/frontier-17-scope-amendment.md` and
`research/frontier-17-scope-repair-history/`.

## State at handover

The owner requested a safe pause while Step 6b was active. The pause was
accepted durably at `2026-08-21T17:48:26Z`: `.autopilot/state.json` recorded
`"paused": true`, and the event says `in-flight dispatches continue, nothing
new starts`.

At that checkpoint:

- Steps 1, 2, 3-review, 3-fix, 3-recheck, 4-splice, 4-baseline, and 6a-read were
  complete.
- Step 5 authoring was 9/9 complete; its shared post-author gates wait for the
  Step 6b level join by design.
- All nine independent Terra readers were complete.
- Alpha group A (batches 2/4/5) completed cleanly at `17:42:00Z`.
- Alpha group B (batches 3/7/9) completed cleanly at `17:48:49Z`.
- Alpha group C (batches 1/6/8) was the sole remaining in-flight dispatch. It
  started at `16:56:16Z` and was still doing substantive adjudication/refuter
  work. The final pre-handover check at `17:58:58Z` showed it at 1h02m with a
  normal engine heartbeat and no error, retry churn, or blocker.
- Because the run is paused, group C may finish and save artifacts, but the
  driver must not launch 6b-baseline or any later work until explicit resume.
- No Step 7 judge, Step 8, Step 9, or Step 10 work has started in Frontier 17.

Always replace this snapshot with fresh evidence from `autopilot status` and
the event tail before resuming. Do not assume group C is still active merely
because this prompt says it was.

## What has happened in Frontier 17

1. Step 1 initially scaffolded the requested non-combinatorics pairs.
2. Independent drift review found that the trigonometric/surface-of-revolution
   material requires the not-yet-published regular-surfaces A/B pair. That pair
   was added without dropping any requested pair or result.
3. The resulting ten batches exceeded the binding Alpha capacity of three
   groups times three batches. Alpha correctly refused. The batches were
   conservatively rebalanced to nine while mechanically proving that all 26
   pages and affected proof contracts were retained. Previous artifacts were
   archived rather than overwritten.
4. Step 3 review/fix/recheck completed across all cohorts.
5. The Step 3 global gate then deadlocked on three correct same-run cross-batch
   dependencies because `policyGates` invoked `content-policy --manifest-only`
   separately for each batch. Those edges were:
   - `ex-volume-of-the-sine-solid-of-revolution` ->
     `thm-volume-of-a-solid-of-revolution-by-discs`;
   - `ex-surface-area-of-the-sine-solid-of-revolution` ->
     `cor-surface-area-of-revolution-formula`;
   - `fs-finite-volume-implies-finite-lateral-surface-area` -> the disc theorem.
   Combined manifests passed with 440 scoped items and zero errors/warnings,
   proving this was gate scope, not bad mathematics.
6. A narrow workflow repair was therefore necessary. It changed no Frontier 17
   mathematical artifact: scaffold content policy now receives every batch
   manifest in one whole-level invocation, with a nonempty liveness floor.
7. During the Step 3 join, a Wayback Mac Lane source returned 503 and a DML
   Adamek/Koubek/Velebil source timed out. The workflow's existing bounded
   recovery retired a redundant source and archive-recovered/replaced the sole
   source needed for monadicity. Final source gates were 40/40 live, 275/275
   results backed, and 45/45 fetch-verified. Nothing mathematical was dropped.
8. Step 4 splice succeeded for all nine batches. `validate-plan` found ten real
   structural issues: three illegal new-B-to-published-B dependencies and seven
   undeclared page prerequisites. Assigned Step 4 Alpha repaired all ten in its
   first bounded round; the gate passed over 348 plan pages with item lists.
9. Step 5 launched all nine authors in parallel. Step 6 readers began as each
   author finished, and cohort Alphas began as each reader cohort drained.
   This selective progression worked correctly and saved wall-clock time
   without relaxing the level join.

## Necessary uncommitted workflow repair — preserve it

The live working tree is intentionally dirty with Frontier 17 artifacts. Do
not reset, clean, checkout, stash, or overwrite it. In addition to run content,
six workflow files contain the necessary whole-level scaffold-policy repair:

- `tools/autopilot/stages/mathlib.mts`
- `briefs/tasks/beta-batch.md`
- `briefs/tasks/beta-fix.md`
- `briefs/tasks/beta-scaffold-fix.md`
- `tools/autopilot/README.md`
- `tools/autopilot/test/policy-gates.test.mts`

The implementation rewrites `policyGates` into one invocation over all live
batch manifests; the briefs coherently instruct whole-run manifest checking
and prohibit weakening or duplicating necessary cross-batch edges to satisfy an
isolated check; the README explains the level-join semantics; the test prevents
regression to one-manifest invocations.

Verification already completed:

- Frontier 17 combined policy: 440 scoped items, 0 errors, 0 warnings.
- Focused policy regression test: passed.
- Full autopilot test suite: 347/347 passed.
- `git diff --check`: clean.
- Driver restart after the repair adopted durable state and did not repeat
  completed work.

The code repair is not yet committed. Do not commit or push it independently
unless the workflow reaches the appropriate close-out or the owner explicitly
asks. Preserve it through Frontier 17 so the run uses the tested semantics.

## Historical comparison to retain

- Frontier 15's missing drift dispatch did not recur: Frontier 17's drift lane
  ran, found a real prerequisite, and preserved it.
- Frontier 15/16 source-repair starvation did not recur: Frontier 17's two
  transport/source abnormalities closed through bounded built-in recovery.
- Frontier 16 motivated the rebuilt Step 10. Frontier 17 is the next live
  end-to-end exercise of its contract-close, snapshot/pathway, render, Sigma,
  Tau, stamp, readiness, owner-report, and close stages.
- Selective per-cohort Step 3 and Step 5-to-6 progression is working. Do not
  generalize it casually into unsafe per-batch progression across global gates.

## Monitoring and intervention rubric after resume

- Report to the owner every ~10 minutes or immediately on major transitions,
  retries, gate failures, Sigma/Tau outcomes, or a true blocker.
- A long Alpha, judge, Sigma, or Tau call is not stuck merely because it is
  quiet. Use elapsed time, configured timeout, process existence, event
  heartbeats, artifact movement, and retry history together.
- Let bounded repair loops run. Intervene only when their closure mechanism is
  demonstrably broken, an expected artifact cannot be produced/re-armed, or
  content is being lost/corrupted.
- Never use `skip` to make a gate disappear. Never narrow claims, delete items,
  weaken sources, or remove dependencies as a liveness shortcut.
- Log every abnormality and whether it self-resolved, was handled by an
  existing repair lane, or required a workflow repair.
- If intervention is truly necessary, diagnose read-only first, make the
  smallest coherent rewrite, run proportionate focused and full tests, and
  verify that the same durable run resumes without duplicate work.

## Candidate final recommendations — validate, do not blindly implement

These are observations to assess only after Step 10; the owner asked for a
ranked recommendation report, not a pile of speculative edits:

1. High impact / low risk: make preflight hard-fail before start when planned
   batch count exceeds Alpha capacity (currently maximum nine). The planner
   produced ten batches while assigned Alpha correctly enforced the cap.
2. High-medium impact / low risk: add an explicit retry/re-arm path for a
   successful refusal or otherwise artifact-incomplete dispatch. The current
   retry mechanism only re-arms `lastExitOk != true`; Step 2's valid successful
   refusal therefore could not be rerun after the conservative rebalance.
3. Keep the whole-level scaffold-policy repair if Frontier 17 continues to
   validate it. It fixed a real pre-splice cross-batch deadlock without
   weakening capacity or content checks and is covered by regression tests.
4. Do not weaken the full-text source floor. Frontier 17 showed that archive
   recovery/re-harvest can close transient failures without discarding
   sole-backed mathematics.
5. Treat broader per-batch progression as unnecessary unless measurements show
   a real bottleneck. Existing author-to-reader and cohort progression already
   captured the safe parallelism while retaining global joins.

Rank these and any newly observed issue by impact/risk ratio in the final
report. Recommend no additional change when evidence does not justify one.

## Completion contract

Continue the same run through Steps 6b/6c, 7, 8, 9, and rebuilt Step 10. Closely
observe Sigma and Tau. At final close:

1. Verify all required gates and artifacts from disk rather than trusting a
   prose claim.
2. Verify no mathematical content was lost across repairs, especially any
   Sigma/Tau loop.
3. Verify `git diff --check`, relevant tests, source backing, judge stamps,
   render capture, Sigma's final verdict, readiness receipt, owner report, and
   publication state.
4. Report the run's abnormality/repair chronology and compare it with Frontier
   15 and 16.
5. Give the owner the conservative ranked workflow recommendations.
6. Answer plainly whether every Frontier 17 page is publishable pending owner
   approval. If the answer is no, enumerate the blockers and explain why the
   workflow stopped with them open instead of closing them.

Do not end monitoring early merely because a stage is slow. Do end with a
truthful paused/blocker state if external authority is actually required.
