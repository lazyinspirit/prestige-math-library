# autopilot

A deterministic control plane for multi-stage agent pipelines. It runs a build
from step 0 to step 10 with **no human and no orchestrator in the loop**, on any
platform that can start an agent from a command line.

## The rule it is built around

> The only jobs for LLMs are resource scouting, scaffolding, authoring,
> refuting/verification, adjudication, judgement, auditing, reporting,
> supervision. Everything else needs to be mechanical.
> — owner, 2026-08-16

The test for which side a task falls on is simple: **if the answer is a function
of files on disk, it is mechanical.** Is this stage finished, which units are
still uncovered, did the gates pass, what gets dispatched next, has this lane
failed twice — all decidable, all code. Is this proof correct, is this citation
faithful, is this scaffold thin, is this blocker real — none decidable, all
model.

This is enforced, not documented: every dispatch declares a `job`, and
`src/roles.mts` refuses to start one whose job is mechanical. The reason it is a
hard check is that the failure is quiet — handing a model a mechanical task
does not error, it returns a plausible answer and is wrong at a rate nobody
measures.

## The daily workflow

```bash
cd ~/Projects/prestige-math-library
claude                                    # start a session

# in the session, or in any shell:
autopilot frontier --categories complex-analysis,topology
autopilot plan --run frontier-15 --pairs contour-integration,ascoli-arzela
autopilot start --run frontier-15 --detach
```

`start --detach` is the last command that needs a person. Steps 1 → 10 run to
completion: dispatching agents, retrying dead lanes once, running gates,
refusing to advance past a gate that checked nothing, and writing a status
report every 20 minutes.

The orchestrator's remaining job is to read `status.md` and tell you what it
says. It is not on the critical path and cannot stall the run by failing to
notice something.

## Commands

| command | does |
|---|---|
| `autopilot frontier [--categories a,b]` | what is buildable now, in dependency waves, computed from publication state on disk |
| `autopilot plan --run N --pairs a,b` | step 0: pack batches by prerequisite affinity, write manifests, diff the design docs against the spec |
| `autopilot start --run N [--detach]` | steps 1 → 10, autonomously |
| `autopilot status` | current state |
| `autopilot pause` / `resume` | hold and release; in-flight agents always finish |
| `autopilot stop` | exit the loop, leave state on disk |
| `autopilot retry [--unit N]` | re-arm a lane that exhausted its attempts |
| `autopilot skip --stage ID` | bypass a stage |
| `autopilot report` | force a status report now, without waiting for the interval |
| `autopilot doctor --run N` | pre-flight: invented flags, missing briefs, judge auth, the stage-spec rules |

Intervention is **read, never awaited**. The engine polls a small JSON file each
tick; an owner who never touches it changes nothing, and one who writes to it
gets an action at the next tick. Nothing in the design can block on a human
being at the keyboard.

## How completion is decided

A stage owes a set of **units of work**. Each dispatch declares the units it
**covers**. The stage is finished when the covered union contains the owed set
*and* its gates have passed.

This replaces counting agents, which fails three ways:

| | count says | coverage says |
|---|---|---|
| 1 agent covering 6 units | `1/3` — never advances | `6/6` — done |
| 6 agents, 1 unit each | `3/3` at three — advances early | `3/6, missing 4, 5, 6` |
| 3 agents all on unit 1 | `3/3` — **done, with a hole** | `1/6, missing 2, 3, 4, 5, 6` |

The third row is the one that matters: three agents returned, the stage looks
complete, and three units were never touched. A count cannot see it.

### Every stage must be able to fail

Coverage says the work was *done*. Gates say it was *right*, and a stage with no
gate says nothing at all while looking exactly like a stage that passed.

`10-report` used to declare `gates: () => []`, and an empty gate list was read as
"gates passed" — so the last stage of the pipeline **could not fail**. A build
finished with its whole-level receipt gate red, two confirmed-fatal proofs
unrepaired, and sixteen judge rejections nobody had read. A model wrote an honest
report saying the level was not publishable; the engine marked the run done; both
were right about their own half.

So `src/spec.mts` now validates the stage table before a run starts, and
`autopilot start` refuses rather than detaching:

- every stage declares at least one gate, **or** `gatesWaived: "<why>"` — a
  sentence, not a boolean, so a missing gate cannot pass for a deliberate one;
- the **terminal stage may not waive**, ever;
- a stage that declares gates but produces an empty list at runtime is a
  *vacuous* gate and blocks, rather than passing;
- a gate whose declared `needs` files are absent **fails**. It used to report
  success, which is how a gate pointed at a receipt nobody generated reports that
  the receipt is fine. `required: false` opts out and says so on the result.

### Stages hold for each other

Only the gate block waited for in-flight work to drain; dispatch did not. So the
engine would enter the next stage while the previous one's processes were still
running — putting step 8's adjudicating Alpha on top of step 7's live judge sweep.
Every repair moved a pair's context hash and re-armed the sweep on untouched
page-mates: the ledger grew by 97 rows *during* adjudication and 8 items flipped
pass to reject on byte-identical text from the lane that had just passed them.

Nothing now dispatches while a dispatch from another stage is live. It is a hold,
not a deadlock — seconds against stages that run for hours.

### A failing gate can dispatch its own repair

`onGateFailure` and `fixRounds` existed from the start: declared in the types,
called by the executor, implemented by no stage and read by nothing. A failing
gate could therefore only ever hold. Two fatal defects needing a proof rewrite
became a paragraph in a report instead of an authoring dispatch.

The hook also could not have worked as written — it fired only when the blocker
*message* was new, and a gate that keeps failing the same way produces the same
message every time. One round, then deadlock. It now fires whenever nothing is in
flight and rounds remain, bounded by `maxFixRounds`; past the cap the gate still
blocks and a person reads it.

## Portability

The platform-specific surface is **one config value**, an argv array:

```json
{ "argv": ["node", "tools/dispatch.mjs",
           "--role", "{role}", "--brief", "{brief}", "--task", "{task}",
           "--label", "{label}", "--run", "{run}", "--covers", "{covers}",
           "--timeout", "{timeout}",
           "--var", "i={unit}", "--var", "output={artifact}"] }
```

An **array, not a string**. A command string has to be parsed, and every attempt
to parse one here produced a quoting defect — three in a row, including the test
written to prove the fix. Each element is one argument exactly as `spawn`
receives it, so a path with spaces, quotes or a dollar sign needs no escaping and
there is no shell.

`{unit}` and `{artifact}` are computed by the engine and substituted by the
dispatcher into the brief and task as `<i>` and `<output>`. A generic template
therefore resolves to this unit's real paths — the alternative, transcribing a
path into a copied task file, is how a reader once wrote its report over
another's.

Point it at Claude Code, Codex, pi, opencode, or a pipeline's own dispatcher.
A project that already owns a dispatcher — model lineup, sandbox policy, auth
rotation, result-record format — keeps it; the engine drives it unchanged.

The domain-specific surface is **one file**: `stages/mathlib.mts`. Porting to
another project means writing another one.

## What it refuses to do

- **Advance past a gate that checked nothing.** A gate may declare a liveness
  probe — a regex that pulls the number of things examined out of its own
  summary line, and a floor. Zero examined is a failure; an unparseable summary
  is *unknown*, never a pass.
- **Retry forever.** A lane gets `maxAttempts` (default 2), then becomes a
  blocker. Unbounded retry of a deterministically failing lane burns a budget
  silently.
- **Count a dead lane as coverage.** `ok:false` is a retry decision, not a unit
  of work completed.
- **Re-dispatch a covered unit**, including across a restart. Engine state is
  written through atomically; disk is always the authority.
- **Silently pass a partly-migrated run.** If some dispatches declare coverage
  and others do not, the run is read by coverage and the unannotated lanes stay
  missing — visible and fixable, rather than green with a hole.
- **Start a stage table that cannot fail.** See "Every stage must be able to
  fail" above; `autopilot doctor` reports it too.
- **Finish with the mathematics unsigned.** Every stage from the judge sweep
  onward gates on judge closure: every item has a current verdict pair, every
  current rejection has an exact-hash Alpha outcome, and no outcome is
  `confirmed_fatal`. The terminal stage additionally runs the whole-level
  receipt gate on the final text.

## Testing

```
npm test
```

40 tests. The unit tests prove the coverage predicate; the end-to-end tests run
the engine against a fake pipeline whose agents are scripts, and prove the
*loop*: that a cleared stage triggers the next dispatch, that a failed lane is
retried exactly once and then blocks, that a vacuous gate stops the run, that
pause holds and resume releases, that a restart does not redo finished work, and
that a stage asking a model for mechanical work is refused at dispatch.

## What a live takeover found

Tested against a real in-flight build — nine A/B pairs, mid step 3, one Alpha
running. Seven defects surfaced that no fake-pipeline test could have.

**Four invented command-line flags.** `step8-guard --run`, `judge-sweep --run`,
`merge-proof-contracts --run` and `touchlog --snapshot --label --out` were all
written from memory and none exists. Each would have failed hours into an
unattended run, in a stage nobody was watching. `test/signatures.test.mts` now
checks every flag the stage table passes against the tool receiving it.

**Anchored result patterns.** A caller whose label already contains the role
makes the dispatcher write `<role>-<role>-<label>.result.json`; the anchored
pattern missed a completed unit sitting on disk with `ok:true`.

**SIGTERM killed running agents** while its own message claimed it left them to
finish. A restart destroyed three agents mid-work and re-dispatched them at
attempt 2 of 2 — one failure from blocking the stage.

**A gate failure ended the run**, so one transient network error would have
stopped a fourteen-hour build.

**A false dead-source report.** The citation gate flagged a live, correct URL as
dead: the server answers plain curl with 200 but fails HEAD with an HTTP/2
framing error, and a transport failure carrying a status code short-circuited
the fallback chain before the HTTP/1.1 retry ran. That gate's prescribed remedy
is recover-before-replace, so the "fix" would have swapped a working citation
for a decade-old archive snapshot and rewritten the provenance of every item it
backed. It only appeared when the gate first ran across all batches at once.

### Verified on live work

- engine SIGKILLed mid-stage → three agents survived → watchdog restarted it in
  30 seconds → the new engine **adopted** those agents rather than re-running
  them
- a stage recognised complete at *6/6 covered by 2 dispatches* — one agent
  covering three units each, which counting agents cannot express
- fourteen gates run, including a transient failure that cleared on retry and
  retired its own blocker

## Staying up

`bin/watchdog.sh <repo>` restarts a dead engine every 60s. State is durable, so
a restart resumes rather than repeats. `autopilot stop` writes a marker the
watchdog honours — without it, stopping is impossible, because the two fight.

## Layout

```
bin/autopilot.mts      CLI
src/executor.mts       the loop — the only thing that decides transitions
src/coverage.mts       units owed, units covered
src/gates.mts          gate runner, and the vacuity check
src/roles.mts          which jobs a model may be given
src/state.mts          durable state, crash-resume
src/control.mts        owner intervention channel
src/reporter.mts       events.jsonl + status.md + the 20-minute heartbeat
src/frontier.mts       wave computation, batch packing, design-vs-spec drift
src/adapters/exec.mts  the one platform-specific function
stages/mathlib.mts     the domain: steps 0 → 10 for prestige-math-library
```
