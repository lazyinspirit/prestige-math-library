# Running a level unattended — canonical

`LEVELS.md` is what a level build *is*. This is how to run one without a session
attached, and how to attach to one that is already running.

Normative for the driver mechanism. `CLAUDE.md`, `SCHEMA.md` and `LEVELS.md` win
where they differ; nothing here relaxes an owner rule or a gate.

---

## What this does and does not do

It drives steps 0 to 10 and **stops at the step-10 owner pause**, which is where
`LEVELS.md` already stops. The end state is a fully built, audited, judged,
all-gates-green level sitting at `status: draft` with its rundown written.

It never publishes. `verification.audited`, flipping `status: published`,
deleting a published or out-of-level result, id changes, reading-order changes,
and any published-dependency repair that is not "obvious" are owner-reserved, and
no flag exposes them.

**Unattended is not deterministic.** Steps 1, 2, 5, 6 and 8 are model work and
stay stochastic. What is deterministic is the control flow around them:
sequencing, gating, retry, budget, and where it stops.

---

## The pieces

| tool | does |
|---|---|
| `tools/paths.mjs` | resolves the app repo (`$PRESTIGE_APP_DIR`, else the sibling checkout, else the VPS path). Nothing hardcodes `/root` any more |
| `tools/tsx-run.mjs` | `node tools/tsx-run.mjs tools/<x>.mts` — the invocation for every `.mts` tool |
| `tools/preflight.mjs` | can this machine run a build at all. **Run it before every long build** |
| `tools/gates.mjs` | the gates of record for one step. Never writes, never spends |
| `tools/dispatch.mjs` | spawns one briefed agent role as a plain process |
| `tools/slots.mjs` | cross-process concurrency pools (`tools/slots.test.mjs` checks the properties) |
| `tools/run-level.mjs` | the state machine: steps, halts, durable state, journal |
| `tools/run-control.mjs` | talk to a run that is already going |
| `ops/run-level@.service` | systemd user unit so the run survives logout |

State lives in `research/<run>-run-state.json`; commands in
`research/<run>-run-control.json`; every agent's prompt, log and result under
`research/<run>-dispatch/`.

---

## Starting a run

```
node tools/preflight.mjs --judges          # once, before a long build
node tools/run-level.mjs --run frontier-10 --level 10
```

Unattended on the VPS, per the header of `ops/run-level@.service`. The step that
is easy to skip and fatal to skip:

```
loginctl enable-linger "$USER"
```

Without it systemd tears down the user manager at logout and the build dies with
the session it was supposed to outlive.

---

## Supervising

Three levels, and you choose per session which one you are using.

**Watch** — costs nothing, changes nothing:

```
node tools/run-level.mjs --run frontier-10 --status
journalctl --user -u run-level@frontier-10 -f
```

**Control** — commands land at the next **step boundary**, never mid-step,
because a half-applied step is the state that is expensive to reason about
afterwards:

```
node tools/run-control.mjs --run frontier-10 show
node tools/run-control.mjs --run frontier-10 pause
node tools/run-control.mjs --run frontier-10 park thm-some-id
node tools/run-control.mjs --run frontier-10 budget 400
node tools/run-control.mjs --run frontier-10 clear
```

`halt` is not a kill. To stop a run *now*, stop the process; `halt` stops it
cleanly and leaves a resumable record.

**Takeover** — halt, then drive by hand exactly as `LEVELS.md` describes. The
state file and the dispatch logs mean nothing is lost. This is the intended
route whenever the mathematics needs you.

---

## Every halt, and what it wants

A halt is not a crash. Each one records a code, a reason, and the exact resume
command in `research/<run>-run-state.json`.

| code | means | you do |
|---|---|---|
| `judgment-required` | a step needs an orchestrator decision (0, 3, 4, 9) | make it, resume at the next step |
| `gate-failed` | a gate of record failed; the failing tool is quoted | fix the content, resume at that step |
| `agent-failed` | a dispatched role exited nonzero | read `research/<run>-dispatch/<role>-<label>.log` — the current run's is plain, concluded runs' are gzipped, so `zless`/`zgrep` reads either |
| `no-batches` | a per-batch step found no batch manifest | produce them at step 0 |
| `snapshot-failed` | the `pre-step8` baseline could not be taken | fix, resume; R1's guard needs that baseline |
| `manual-step` | step 7 spends | run the judge sweep yourself, then resume at 7 |
| `budget-exhausted` | the judge-call budget is spent | raise `--judge-budget` and resume |
| `operator-halt` | you asked, via `run-control` | resume with `--from-step` |
| `owner-pause` | **step 10 reached — success** | audit and publish by hand. Exits **0** |

A halted run refuses to restart without `--from-step`. That is deliberate: a
driver that resumed a halted run automatically would spin through whatever
caused the halt.

---

## Judgement policy

Steps 0, 3, 4 and 9 need a decision no gate encodes: computing the frontier from
disk, adjudicating Beta recommendations, splicing the spec, and reading the
scope-denial sweep where "grep is the entry point, never the sweep".

* `--judgment halt` (**default**) — stop and name the decision.
* `--judgment autonomous` — dispatch a headless orchestrator and journal what it
  decided.

The default is `halt` because delegating judgement should be something you
switched on, not something you discovered. With `autonomous`, you have replaced
you-in-the-loop with a model-in-the-loop; the standing rule that no stage
advances on an agent's report alone still applies, and the journal is what makes
that auditable after the fact.

---

## Budget, and why fatal repairs are not capped

`--judge-budget N` bounds judge calls; only the DeepSeek lane is metered, Codex
being subscription.

`--park-after N` (default 3) bounds how many step-8 fatal rounds the driver takes
on **one item without a human**, then parks that item and continues the rest of
the level. It is **not** a limit on how many attempts a defect may have. A proof
that keeps yielding real fatal defects is either converging toward correctness or
is actually false, and both must run to conclusion; a parked item resumes with
one command.

Nonfatal rounds cannot happen at all: **R1** makes step 8 fatal-only
(`CLAUDE.md`, `LEVELS.md` §8, enforced by `tools/step8-guard.mjs`), so every
round this counts is a confirmed fatal defect.

---

## Limits — what is not yet true

Stated plainly so nobody discovers these at 3am.

* **No level has been driven end-to-end by this.** The state machine's stop
  conditions are covered by `tools/run-level.test.mjs` (19 properties) and the
  pool by `tools/slots.test.mjs` (11), but a full real level has not run.
* **Step 7 halts rather than spending.** `manual-step` is deliberate for the
  first builds: the sweep is the expensive irreversible action, and it should
  earn autonomy after a run or two of watching it.
* **`judge-sweep.mjs` keeps its own copy of the slot pool.** The swap to
  `slots.mjs` is small but wants a live sweep to validate it.
* **`precheck.mts`'s dynamic import is unverified**, because tsx is not installed
  on every checkout. It needs one real run.
* **Agent prompts are the briefs as written.** They were built for a session that
  answers questions; a role that finds its brief ambiguous will produce a report
  rather than block, and the gates are what catch that.
