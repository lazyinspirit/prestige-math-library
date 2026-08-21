# frontier-16 — live machinery log

This is the durable SESSION-side record of workflow abnormalities observed
during the live build. It is not a stage receipt and does not drive a
transition. Per owner instruction (2026-08-21), observation and self-recovery
come before repair: workflow code changes require a reproducible blocker that
cannot safely clear on its own. Mathematical accuracy and richness outrank
time/token optimisation. If a code or prompt repair becomes necessary, rewrite
the broken or stale source of truth; do not append a workaround, addendum, shim,
or second mechanism on top of it.

## 2026-08-21 takeover

- At 01:47 AEST the durable state was at `7-judge`. The last engine report was
  01:28 AEST, and neither an engine nor watchdog process was observable from the
  takeover session. The status file still named `judge-sweep` in flight.
- Judge children had outlived the engine and continued landing valid append-only
  rows. The three judge files each held 546 rows at takeover; their last rows
  landed at 01:47 AEST. There was no `tool-judge-sweep.result.json`, so the
  stage correctly remained uncovered.
- A foreground engine restart re-dispatched `judge-sweep` as attempt 2. The
  sweep reused existing current rows: counts advanced without duplicate
  model/item ids (first observed after restart: Terra 291 unique ids, DeepSeek
  269 unique ids). This is the intended resumable behavior, not a repair.
- Later observation refined that account: orphaned calls were still able to land
  after attempt 2 had snapshotted its missing-task queue. Attempt 2 therefore
  launched some ids that became covered before their replacement call finished.
  At 02:03 AEST, thirteen Terra replacements reached the 720-second call timeout;
  examples including `ex-circle-covering-towers-follow-divisibility` and
  `thm-taylor-expansion-holomorphic-function` already had valid same-hash Terra
  verdicts from the orphaned work. The extra attempts are time/token waste, not
  competing verdict authority: nulls do not satisfy currency and the valid rows
  remain append-only. Do not interrupt the live sweep to optimise this race.
- Terra's later stall was not merely long `xhigh` reasoning. After three
  720-second attempts, final null rows exposed the subprocess error
  `codex_models_manager::manager: failed to refresh available model`; the Codex
  process then remained alive until the per-call timeout. This is the same
  failure class frontier-15 recorded for Terra's models-refresh throttling.
  DeepSeek reached 324/324 valid ids; Terra remained at 303/324 when the first
  final null rows appeared. Leave the current bounded sweep intact and observe
  whether the stage's existing surgical closure replay recovers before changing
  concurrency or code.
- A detached engine started from the takeover tool environment did not persist
  after its launching command returned. This may be process isolation imposed
  by the host tool, so it is not classified as an autopilot defect. The engine
  is therefore being kept in a live foreground execution session while this
  takeover remains attached.
- The bare command printed in `AGENTS.md`, `node
  tools/autopilot/bin/autopilot.mts status`, fails on this host's Node 22 with
  `ERR_UNKNOWN_FILE_EXTENSION`; the supported loader command succeeds. A bare
  status invocation without `--run` then falls back to the last report because
  `autopilot.config.json` intentionally carries no pinned run. Both observations
  are logged for later reproduction. Neither blocks the active run, so neither
  is being changed mid-sweep.

## 2026-08-21 step-7 recovery and handoff

- At the owner's explicit request to unstick Terra, the foreground attempt-2
  engine received `SIGINT`. Its judge subprocess outlived the engine, retained
  its bounded calls, and recovered without a scheduler or source change. A
  separate Terra preflight from the takeover tool sandbox could not reach the
  Codex transport (`Operation not permitted` on websocket and HTTPS), so that
  sandbox result was not treated as evidence that the detached judge transport
  was down.
- The detached sweep subsequently landed all missing Terra verdicts. Final
  current coverage was 324/324 for Terra and 324/324 for DeepSeek; historical
  null attempts remain in the append-only ledgers but do not satisfy or displace
  current verdicts. `tool-judge-sweep.result.json` landed at 02:41:59 AEST, and
  the authoritative `judge-closure` gate passed over 324 judged pairs at
  02:44:31. No manual rejudge or code/prompt edit was required.
- Believing the interrupted engine had exited, SESSION started a replacement at
  02:43:39. The original engine was still completing asynchronous work: it
  passed step 7, took the step-8 baseline once, and dispatched exactly one
  `alpha/step8-lead` at 02:45:31. The replacement's concurrent copy of the
  step-7 gate then exited 1 with empty output and wrote a stale step-7 blocker.
  SESSION immediately stopped that replacement before its repair round could
  proceed. This duplicate-engine race is an intervention abnormality, not a
  mathematical or judge-closure failure; the successful gate event and closure
  receipt predate it.
- The shared state file now reflects the replacement's stale step-7 snapshot,
  but the sole Alpha dispatch is demonstrably live: its exclusive Alpha slot
  heartbeat advanced at 02:47:31 and its temporary dispatch home exists. Do not
  edit state or start another engine while that slot is live. Once Alpha writes
  its durable result, a single engine restart can reconcile from disk and
  retire the stale blocker without duplicating Alpha.

## Comparison with frontier-15

- Frontier-15 recorded the long synchronous judge sweep as candidate E4, then
  revised the scheduling change to **HOLD** because moving it async would shift
  outage classification by a repair round and destabilise tested behavior. No
  scheduler change is justified by the frontier-16 interruption.
- Frontier-15 defect D6 (adopted result records left open) was repaired by
  `reconcileAdopted`. Frontier-16's open attempt-1 record has no result file, so
  reconciliation has nothing truthful to stamp; attempt 2 is the correct
  recovery path.
- Frontier-15's event-driven batteries and external-outage backoff remain the
  expected self-healing mechanisms. No frontier-16 repair round or gate failure
  supplied contrary evidence before step-7 closure. The empty-output failure
  from the duplicate engine is excluded because it raced the already-cleared
  stage and was interrupted immediately.

## 2026-08-21 step-8 closure recovery

- The original engine remained live through the stale-state race, reported the
  single Alpha as running, and overwrote the duplicate engine's snapshot when
  `alpha/step8-lead` completed successfully at 03:42:17 AEST. This retired the
  stale step-7 blocker without a state edit or engine restart.
- Lead Alpha classified 229 rejection rows: 105 `confirmed_fatal`, 118
  `confirmed_nonfatal`, and 6 `false_positive`. Its 105 fatal rows collapsed to
  70 item versions; exactly those 70 were edited, and `step8-guard` licensed
  70/70 against `pre-step8`. The sampled diff was narrow and generally added
  missing hypotheses, exact citations, and proof detail rather than reducing
  mathematical content.
- The standard step-8 gate then found that the completed judge ledger actually
  held 237 valid rejection rows. Eight exact rows across six ids had no Alpha
  outcome. This was an agent-coverage omission caught by the gate, not a new
  judge transport failure. The stage-8 repair hook handles `open_fatal` rows but
  has no dispatch branch for `unadjudicated` rows, so two repair rounds reran the
  same 20-gate battery without starting work.
- SESSION paused the engine before the third and final repair round and
  dispatched one narrow GPT-5.6 Sol Alpha through `tools/dispatch.mjs`. Its
  complete recovery task derived scope from the closure receipt, prohibited
  reinterpretation of the existing 229 rows, and preserved the fatal-only
  rule. No SESSION model substituted for Alpha and no workflow source or
  standing prompt was edited.
- Recovery Alpha appended exactly eight adjudications. One was
  `confirmed_nonfatal` and caused no mutation; seven fatal model rows collapsed
  to five covering-space item versions, which received coherent repairs and
  five defect-ledger rows. The owning batch-6 contract/manifest/plan artifacts
  were regenerated. The final guard licensed 75/75 changed item versions.
- The normal engine gate independently recomputed 249 retained current pairs,
  exactly 75 pending rejudge ids, zero unadjudicated ids, and zero open fatals.
  All 20 step-8 gates passed at 04:15:52 AEST. At 04:16:22 it launched the
  paired DeepSeek/Terra rejudge with an explicit 75-id `--items` list; no
  unedited page-mate was included.
- Recovery Alpha wrote a second `after-step8-alpha` touch snapshot under the
  same label while refreshing the impact receipt. `pre-step8` remains unique
  and the later engine gate read it correctly, so this duplicate closing label
  is logged as a non-blocking abnormality and is not being rewritten mid-run.

## Open observations

- Confirm the 75-item targeted rejudge remains surgical, both lanes make
  progress, and Terra's staggered boots do not repeat the step-7 model-refresh
  timeout pattern.
- Confirm post-rejudge closure either clears or routes every new rejection back
  to the assigned Alpha convergence loop; do not adjudicate it in SESSION.
- Reproduce the watchdog/run-discovery and bare-status behavior only after the
  live sweep is safe; do not patch from this single host-session observation.
