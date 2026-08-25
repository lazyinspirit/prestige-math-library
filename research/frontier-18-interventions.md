# frontier-18 — intervention log

Owner instruction, 2026-08-24: log every intervention, investigate at the end of
step 10, and **mechanically eliminate every defect that can block or break the
workflow.**

Every row is a point where the run could not continue without a person. The last
column is the question that matters: what code would have made the person
unnecessary. Timestamps are UTC, taken from `.autopilot/events.jsonl`, which is
the authority — not this file.

Run started `2026-08-23T17:06:39Z`. Engine-recorded interventions:

| at (UTC) | event |
|---|---|
| 19:02:49 | retry-armed |
| 20:24:39 | repair-exhausted (`1-scaffold` / drift-review) |
| 21:02:03 | paused |
| 02:29:40 | resumed |
| 02:45:31 | repair-exhausted (`1-drift` / drift-review) |
| 02:58:33 → 02:58:40 | stopping → start |
| 03:00:41 → 03:00:42 | stopping → start |
| 03:01:42 | retry-armed |
| 05:23:20 | repair-exhausted (`4-splice` / validate-plan) |
| 05:25:20 | retry-armed |

---

## I0 · Planning: 14 pairs where `frontier` computed 4 · **root cause of I2, I6**

**When.** Step 0, before `start`.

**What happened.** `autopilot frontier` reported wave 1 as **four** pairs. The run
was planned with a hand-built `--pairs` list of **fourteen**, on the reasoning
that frontier-17 had itself been planned before frontier-16 was published. That
reasoning read frontier-16's *commit* time (19:47) as its publish time; the owner
flips `status: published` on disk hours before committing, and every gate reads
the filesystem. Ten of the fourteen pairs cited frontier-17 while it was `draft`.

**Cost.** 3h20m of scaffolding plus a full session window, then a hard stop at
the `1-scaffold` drift gate, 8h30m idle awaiting an owner decision.

**Mechanised.** Yes, during the run. `autopilot plan` now refuses a pair set
containing a `requires` edge to a page neither published on disk nor built by the
same run — the stage-1 predicate, applied before any agent starts, in ~2s.
`--allow-unbuildable` overrides and says so on the record.
`unsatisfiableEdges()`, `ARCHITECTURE.md` §3.11e-4.

**Residual.** None for this class. The batch-count ceiling was a *second*
plan-time-checkable property that also surfaced mid-run — see I7.

---

## I1 · Six Beta lanes killed by the Claude session limit · retry at 19:02:49

**What happened.** At 18:02–18:04 batches 2, 5, 6, 8, 9, 10 each failed three
times. All six dispatch logs read `You've hit your session limit · resets 5am
(Australia/Sydney)`. Nine concurrent Opus[1m] Betas exhausted the window ~55
minutes into step 1. The engine held correctly (`blocked-holding`, 100+ ticks).
`autopilot retry` after the reset; all six then completed.

**Mechanisable — NOT YET DONE.** A session-limit refusal is an **outage**, not a
lane failure, and it burned `maxAttempts` on all six lanes before the engine
could know that. `OUTAGE_CLASSIFIERS` already encodes exactly this idea for
*repair rounds*: an outage refunds the round and sets a clock, on the stated
reasoning that round budgets bound divergence and an outage is not divergence.
**Dispatch attempts have no equivalent.** Proposal: classify a dispatch failure
whose output matches the session-limit or 529 signature as an outage — refund the
attempt, set a backoff clock, and re-dispatch when it expires. This single
mechanism also removes I8's manual retry.

**Second defect, diagnostics.** Two of the six failure events carried
`dispatch: note — brief retains generic placeholder(s) <br>` appended to the
message, which is **not the cause** and masked the real one. Same red herring
appeared again at I8 as `<g>, <i>`. Proposal: never append the placeholder note
to a failure message unless the placeholder check is what failed.

---

## I2 · Ten unbuildable edges → owner publish + merge · 02:29 resume

**What happened.** The `1-scaffold` drift gate failed with ten
`drift-check-unbuildable-edge` errors, all pointing at frontier-17 pages still
`draft`. Not resolvable by any engine action: those pages were already built, so
minting or rescoping would both have been wrong. The owner published frontier-17
on the VPS and pushed; `git fetch && merge` brought `362effc8` in and all ten
cleared. 366 pages published, up from 340.

**Mechanised.** Prevention only, via I0's plan-time refusal. Once a run has
started in this state there is no correct automated exit, and there should not
be — publishing is the owner's sole act.

---

## I3 · `autopilot pause` at 21:02:03 · self-initiated, later reversed

**What happened.** While blocked, the engine re-ran the full gate bundle every
~10.6 minutes, including `url-sweep` (50 URLs) and `source-fetch-check` (51
sources) — ~100 requests to third-party textbook and lecture-note hosts per pass,
indefinitely, for a result that could not change. Six passes had already fired.
Paused to stop it. The owner reversed this: monitoring means report, not act.

**Mechanisable — NOT DONE, and worth doing.** The waste is real and independent
of whether pausing was the right response. A gate whose inputs have not changed
and whose verdict cannot change should not re-run, least of all one that leaves
the machine. `stateVersion` + `dispatchDirFingerprint` already implement exactly
this skip for batteries; the network-touching gates are re-running anyway.
Proposal: extend the existing battery-skip to cover them, or give an outward
gate a minimum re-run interval. **No behaviour change to the run, pure waste
removal** — a good candidate for the conservative step-10 pass.

---

## I4 · Two driver restarts · 02:58:33 and 03:00:41

**What happened.** `stages/mathlib.mts` hot-reloads (`maybeReloadStages`, five
reloads this run). `src/executor.mts` cannot — it is the class running the loop.
Changes to the stage table applied by themselves; changes to the executor needed
a process restart, and I took two.

**Residual risk, worth recording.** A restart while dispatches are in flight
re-dispatches them as duplicates, because coverage is decided by result files and
an in-flight lane has written none. Two Alphas writing the same namespaced
artifact is worse than any throttle. Restarts are therefore only safe at a
drained stage boundary. Proposal: refuse `start` on a state whose `inflight`
records have no matching result and no live PID, or adopt them — `adoptCommand`
exists and is set to `false` in this configuration.

---

## I5 · `1-drift` repair rounds burned by a defect in my own hook · retry at 03:01:42

**What happened.** The first version of the drift re-review route keyed off the
repair *residue*. `drift-apply` exits 0 when the report decided nothing it can
materialise — which is exactly the blocked case — so `mechanicalRepair` returned
`clean` and the route never fired. Both rounds were consumed and `1-drift`
recorded `repairExhaustedAt`. Fixed by keying off the **gate output** instead;
`autopilot retry` then cleared the stale record, which is precisely what that
command's own comment says it is for.

**Mechanised.** Yes. `dispatchDriftRereview` now reads `failure` (and its
`advisory` gates), with tests for the primary-gate, advisory-gate and
wrong-gate cases.

---

## I6 · Two stale `drift-blocked` verdicts → automated re-review

**What happened.** The step-0 report carried `drift-blocked` for
`extraspecial-p-groups-and-central-products` and
`lattice-paths-and-catalan-numbers`, both written under the pre-2026-08-24
authority. Nothing could rewrite them: the review had returned exit 0, so its
unit stayed covered and no retry re-armed it. Under the owner's new rulings the
engine re-dispatched the review, which returned `no-drift` on both plus four
`drift-applied` edges — including `symmetric-polynomials` (58) for
`noetherian-rings`, an undeclared prerequisite step 4 would have rejected.

**Mechanised.** Yes — this is the route that actually unblocked the run.

---

## I7 · `alpha-groups-too-many`: 4 groups against a cap of 3 · owner raised caps

**What happened.** Fourteen pairs over eight categories force ten batches (the
packer pairs only within a category). Alpha groups are capped at three batches
each and the alpha lane cap was 3, so the ceiling was **nine** batches. The
assigning Alpha produced a partition with **zero** cross-group dependency edges
and the gate refused it on count alone. Owner raised alpha 3→4 and beta/reader
9→12, with stage `concurrency` and `MAX_GROUPS` tracking.

**Mechanisable — NOT DONE.** `autopilot plan` can compute the batch count and
refuse a pair set exceeding `MAX_GROUPS × MAX_BATCHES_PER_GROUP` before any agent
runs. Same shape as I0, same two-second cost. **This is the third capacity
property to surface mid-run rather than at step 0**, which suggests the real
mechanism is a single plan-time preflight asserting every ceiling the stage table
will later enforce, rather than one guard per property discovered the hard way.

**Also worth examining.** `MAX_GROUPS` is a *concurrency* cap used as a *count*
limit. Four groups do not require four simultaneous Alphas — the engine queues,
as it did with ten Betas against a Beta cap of nine. Conflating the two is
arguably the underlying defect, and decoupling them would have made I7 a
non-event.

---

## I8 · `4-splice` blocked by a vocabulary typo · manual repair + retry at 05:25:20

**What happened.** Three items on `the-divergence-theorem-and-classical-stokes`
declared `"kind": "false statement"` (space) where the vocabulary is
`false-statement` (hyphen). `PREFIX_OF_KIND` has no entry for the spaced form, so
`validate-plan` failed with three `[prefix]` errors. `4-splice` transcribes
manifest ids into `plan-spec.json`, so the typo propagated: three occurrences in
`frontier-18-batch-6.pages.json` and three in `plan-spec.json`. All three
repair rounds were spent re-running an identical failure, then
`repair-exhausted`. Repaired by hand (6 replacements, JSON reparsed before
writing), `validate-plan` exit 0, `autopilot retry`.

**Mechanisable — NOT DONE, and the clearest candidate of the set.**
`MECHANICAL_REPAIRS` has no `validate-plan` entry for the prefix/kind class. The
valid set is **closed and tiny** (`PREFIX_OF_KIND`), the correction is
unambiguous, and it touches no mathematics — a normaliser that maps a
whitespace/case variant onto the canonical kind, refuses anything not a unique
near-match, and reports what it changed. Note the run had **no** other malformed
kind: 750 well-formed values across ten manifests against three bad ones.

**Related.** A dispatch-attempt or repair-round budget spent three times on a
deterministic failure is pure waste. A repair that cannot change its input should
not be retried — proposal: if a gate's output is byte-identical after a repair
round, stop spending rounds and raise the blocker immediately.

---

---

## I9 · Step-5 stampede: ten authors, one millisecond, ten 529s · **standing authority exercised**

**When.** `2026-08-24T05:29:51Z`.

**What happened.** `5-author` fanned out to all ten Betas simultaneously —
dispatch timestamps `.794`, `.802`, `.805` inside a single millisecond — and
**every one** returned `API Error: 529 Overloaded`. Attempt 2 went the same way.
Two full rounds of ten Opus[1m] lanes were lost before a token of authoring was
written. This is the exact failure the spawn stagger was built for, and it was
not live: the stagger is in `src/executor.mts`, which — unlike
`stages/mathlib.mts` — cannot hot-reload, so frontier-18 was running with the
raised caps (beta 12) and unspaced spawns. Width without pacing.

**Action taken, without asking.** The owner's standing authority of 2026-08-24
pre-authorises staggering on a stampede precisely so that waiting to ask does not
cost another round. Default separation set to the owner's **3 seconds**
(`dispatchStaggerMs`, `src/executor.mts`).

**Not yet in effect on this run.** Applying it needs a process restart, and ten
attempt-3 authors are in flight; restarting now would re-dispatch all ten as
duplicates, because coverage is decided by result files and an in-flight lane has
written none. It goes in at the first drained stage boundary. Attempt 3 was
dispatched over ~60s rather than 1ms — an accidental stagger produced by retry
timing — which is itself evidence for the mechanism.

**Mechanised.** The pacing, yes. Two gaps remain, both already listed:
the 529 burned dispatch attempts with no outage classifier (I1), and the
executor cannot hot-reload, so a pacing fix cannot reach a running engine (I4).

**The compound lesson for step 10.** Raising a concurrency cap and spacing the
spawns are one change, not two. The caps went 9→12 hours before the stagger
existed, and the window between them is exactly where this cost two rounds.

---

## I10 · Second Claude session-limit kill, and the model swap that ends the class

**When.** `2026-08-24T06:38–06:40Z`, held until `10:37Z`.

**What happened.** The Claude session limit killed **nine of ten step-5 authors
plus `reader-1`** — three attempts each, 29 recorded failures, all reading
`You've hit your session limit · resets 8pm (Australia/Sydney)`. The engine held
correctly for four hours (`blocked-holding`, 460 ticks). `autopilot retry` once
the reset passed; all ten relaunched.

**This is I1 recurring, and the second time it cost a stage.** The mechanism
proposed at I1 — classify a session-limit refusal as an OUTAGE, refund the
attempt and set a backoff clock instead of burning `maxAttempts` — would have
turned four hours of holding into an automatic resume. It is still not built.

**Root cause now removed by a different route.** The owner moved every agent and
judge lane Opus 5 / Sonnet 4.6 → GPT-5.4 on the Codex runner the same morning.
Agent dispatches no longer draw on the Claude subscription at all, so this exact
failure cannot recur while the lanes stay on Codex. Verified after the retry: 12
codex processes for 10 lanes.

**The outage classifier is still worth building.** The Codex account has its own
weekly cap — it is what drove the 2026-08-23 move to Opus in the first place —
so the failure MODE is unchanged, only the account it lands on. A run that holds
four hours for a quota reset it could detect and wait on deliberately is the
same defect whichever vendor issues the refusal.

## I11 · `judge.mts` routed by model id, not by runner · **latent, caught before it ran**

**When.** Found `2026-08-24` while wiring the GPT-5.4 swap. Never fired.

**What it was.** `judge.mts` chose its transport with a chain of id equality
tests ending in a catch-all: `judgeModel === DEEPSEEK_MODEL ? callDeepSeek() :
judgeModel === SONNET_MODEL || judgeModel === OPUS_MODEL ? callClaude(...) :
callTerra()`. A model the chain did not name fell through to **Terra**, and
`runFreshTerra` hardcoded `--model TERRA_MODEL`. So judging with `gpt-5.4` would
have been performed by `gpt-5.6-terra` while the ledger, the cost log and the
stamps all recorded `gpt-5.4`. The preflight switch had the same shape with a
DIFFERENT catch-all (DeepSeek), so the two paths disagreed about the fallthrough.

**Why it matters more than a wrong label.** Paired judging is only worth its cost
if the two lanes are genuinely independent. A silent substitution does not
announce itself in any artifact — every downstream check reads the recorded name.

**Fixed.** Routing now asks the registry which runner can spawn the id
(`runnerFor`), for judging and preflight alike; the codex runner takes its model
as a parameter; `emitAttempt` rows name the model that actually answered; and
`SUPPORTED_MODELS` is derived from the registry rather than being a fifth
hand-kept copy. Verified with real calls: `preflight OK (deepseek-v4-pro)` and
`preflight OK (gpt-5.4)`.

**The pattern, for step 10.** This was the FIFTH hand-maintained copy of the
model table found this week; `judge-stamps.test.mts` and the registry's own
lane test were the sixth and seventh, both pinning yesterday's assignment and
both failing on a supported operation. The generalisable rule: **anything that
enumerates models, lanes or runners must derive from `tools/models.mjs`, and a
test that must be edited when a lane moves is a copy, not a guard.**

---

## Deferred to step 10 — the gpt-5.4 vs Sol comparison

**Do not draw this comparison before step 10 closes** (owner, 2026-08-24). Every
number below was taken mid-flight with `6a-read` at 8/10 and steps 6b, 6c, 7 and
8 still ahead — each of which finds defects the readers did not. Recorded here so
the comparison is made once, on complete data, with a consistent method.

### The counting rule, because it was got wrong twice

Reader reports use TWO finding formats across runs and a grep matching only one
gives a badly wrong answer:

  - `- Severity: fatal`                    (frontier-17 reader-1, frontier-18)
  - `### R2-N — <id> — <what> — fatal`     (frontier-17 reader-2, frontier-16)

Matching only the first produced "frontier-17: 26 fatals, all in reader-1, zero
in the other eight" — a formatting artifact read as a quality signal. The
format-agnostic count is
`grep -ciE "^- severity: fatal|^#{3}.*—.*fatal *$|^#{3}.*fatal$"`.
**Check the distribution before trusting any cross-run count: findings
concentrated in one reader and absent from the rest means the parser missed a
format, not that one reader found everything.**

### Throughput baselines (step-5 authoring, complete)

| run | model | lanes | items | tok/item | items/min | median lane |
|---|---|---|---|---|---|---|
| frontier-16 | gpt-5.6-sol | 7 | 324 | 14,130 | 0.93 | 51m |
| frontier-17 | gpt-5.6-sol | 9 | 443 | 15,734 | 1.09 | 43m |
| frontier-18 | gpt-5.4 | 9 | 770* | 9,560* | 2.79* | 29m |

\* **BIASED IN GPT-5.4'S FAVOUR.** 301 of frontier-18's 770 items were authored
by Opus 5 before the session limit killed nine lanes at 06:38; the token totals
count only the gpt-5.4 dispatches. 9,560 tok/item is the corrected figure
(tokens ÷ the 492 items gpt-5.4 actually wrote); the naive 6,108 divides one
model's tokens by two models' output. Even 9,560 flatters it — a resuming lane
paid to READ the Opus items it did not rewrite.

**The only uncontaminated lane is batch-2**: 143 items, 0 Opus, 27m, 522,559
tok -> 3,654 tok/item, 5.38 items/min, mean item size 3,278 bytes (vs Sol's
2,376-2,585, so not thinner content). One lane is not a sample.

### Adjudicator held fixed, deliberately

Owner, 2026-08-24: `8-adjudicate` runs **gpt-5.6-sol at xhigh** — the same
adjudicator frontiers 15-17 used — while the authors are gpt-5.4. Moving both at
once would change two variables and make the comparison below unanswerable. The
`confirmed_fatal` counts this run produces are therefore Sol's judgements of
gpt-5.4's mathematics, directly comparable with Sol's judgements of Sol's.
Role `alpha-adjudicate`, lane `adjudication`, cap 1 (the stage is a single
dispatch, so no concurrency envelope moved).

### What to compare when step 10 closes

1. **Fatal defects per 100 items**, at 6a, at 8 (`confirmed_fatal` rows in
   `research/defect-ledger.jsonl`), and judge rejections at 7 — the ledger is the
   authority, not the reader prose.
2. **Batch 2 specifically.** It is the run's largest, fastest and cheapest lane
   AND currently its most defective (4 of the run's 10 reader-fatals, from 31 of
   143 items opened). Resolve whether that survives adjudication.
3. **Mixed authorship as a confounder.** No gate examines it and no frontmatter
   records which model wrote an item; the 301/492 split is recoverable only from
   file mtimes against the 06:38 kill and the 10:37 retry, which is why it is
   written down here.
4. **Read depth.** Readers open a subset (31 of 143 on batch 2), so these are
   DETECTION counts, not defect counts, and depth varies by reader.

## Not interventions, but observed and unresolved

- **Three consecutive 529s on `recheck-b`** (04:39, 04:56, 05:00), succeeding on
  attempt 3. Burned attempts for a server-side outage — same gap as I1.
- **The dispatch placeholder note** appended to unrelated failures, twice
  (`<br>`, then `<g>, <i>`). Cost real diagnosis time both times.
- **Spawn stagger not yet live.** Added to `executor.mts` (2s default) but
  `executor.mts` does not hot-reload, so frontier-18 runs with raised caps and
  unspaced spawns — width without pacing. Applies from frontier-19.

## Standing owner authorities (exercise without asking)

- Concurrency becomes a breaking defect → alpha 4→3, beta/reader 12→9.
- A stampede occurs → stagger dispatches by 3 seconds.
