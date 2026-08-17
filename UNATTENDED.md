# Running a build unattended — canonical

`LEVELS.md` is what a build *is*. This is how to run one with nobody attached,
and how to take over one already running.

Normative for the **operational surface**: what to run, what it will tell you,
and what to do when it stops. Why the engine is built this way — the mechanism,
the design rules it enforces and the incidents behind each — is
`ARCHITECTURE.md` §3.11d. `CLAUDE.md`, `SCHEMA.md` and `LEVELS.md` win where they
differ; nothing here relaxes an owner rule or a gate.

---

## What this does and does not do

It drives steps 0 to 10 and **stops at the step-10 owner pause**, where
`LEVELS.md` already stops. The end state is a fully built, audited, judged,
all-gates-green run sitting at `status: draft` with its report written.

It never publishes. `verification.audited`, flipping `status: published`,
deleting a published or out-of-scope result, id changes, reading-order changes,
and any published-dependency repair that is not "obvious" are owner-reserved, and
no flag exposes them.

**Unattended is not the same as deterministic.** Scaffolding, authoring, audit,
adjudication and judging are model work and stay stochastic. What is
deterministic is everything around them: which stage is current, which units are
uncovered, which dispatch fires next, whether a gate passed, whether a lane gets
another attempt, and where the run stops. **No model makes any of those
decisions** — `tools/autopilot/src/roles.mts` refuses a dispatch whose declared
job is one of them.

---

## The pieces

| path | does |
|---|---|
| `tools/autopilot/bin/autopilot.mts` | the CLI — everything below runs through it |
| `tools/autopilot/src/executor.mts` | the loop: coverage, dispatch, gates, retries, blockers |
| `tools/autopilot/src/spec.mts` | validates the stage table before a run may start |
| `tools/autopilot/stages/mathlib.mts` | the only domain-specific file: 19 stages, their units, gates and repair loops |
| `tools/autopilot/bin/watchdog.sh` | restarts the engine if the process dies |
| `tools/dispatch.mjs` | spawns one briefed agent role as a plain process |
| `tools/preflight.mjs` | can this machine run a build at all. **Run it before every long build** |
| `tools/slots.mjs` | cross-process concurrency pools for the judge lanes |
| `tools/paths.mjs` | resolves the app repo, and with it the `.env` that a `DEEPSEEK_API_KEY` not already in the environment is read from (`DEEPSEEK_ENV_FILE` overrides) |

Configuration is `autopilot.config.json` at the repo root — the concurrency, the
per-lane attempt cap, the poll and report cadence, and **one platform-specific
setting**: the argv array that starts an agent. It is an array, never a command
string; a string has to be parsed, and every attempt to parse one here produced a
quoting defect. It **must not name a run**: a pinned run makes a bare
`autopilot start` resume a completed one, and a test asserts the key is absent.
The run is always `--run <run>` on the command line.

Run state lives in `.autopilot/state.json`, owner commands in
`.autopilot/control.json`, the human-readable snapshot in `.autopilot/status.md`,
and append-only history in `.autopilot/events.jsonl`. Every agent's prompt, log
and result record lands under `research/<run>-dispatch/`.

---

## Before you start

```
node tools/preflight.mjs
npx tsx tools/autopilot/bin/autopilot.mts doctor --run <run>
```

`doctor` checks the things that otherwise fail hours in with nobody watching: a
command flag no tool defines, a brief or task file that does not exist, a judge
lane that cannot authenticate, a missing scope ledger, and the stage-spec rules.
It is seconds; each thing it catches costs hours. What went wrong to put each
check there: `ARCHITECTURE.md` §3.11d.

## Starting

```
npx tsx tools/autopilot/bin/autopilot.mts frontier --categories topology,analysis
npx tsx tools/autopilot/bin/autopilot.mts plan  --run <run> --pairs <a>,<b>
npx tsx tools/autopilot/bin/autopilot.mts start --run <run> --detach
nohup sh tools/autopilot/bin/watchdog.sh "$PWD" > .autopilot/watchdog.log 2>&1 &
```

`frontier` lists what is buildable now, in dependency waves, computed from
publication state on disk. `plan` takes the pairs you chose and packs them into
batches by prerequisite affinity, writes the manifests, and assembles the
design-vs-spec drift **evidence** — mechanical throughout. Reading that evidence
is not mechanical: stage 1 dispatches it as its `drift` unit, an Alpha
verification pass that runs alongside the scaffolds, applies backward
`requires` edges itself and records a higher-order edge as blocked.
`tools/drift-review-check.mjs` gates the stage on the report — a missing
review, an unreviewed page, or a blocked (owner-only) edge fails stage 1. The
review existed as a task file with no dispatcher and no gate until 2026-08-16;
frontier-15's step 0 held exactly the drift it would have missed.

`start --detach` refuses to detach if the stage table cannot fail (see below), so
a spec defect is a message on your terminal rather than a blocker in a log nobody
is reading yet.

The watchdog polls every `WATCHDOG_INTERVAL` seconds (default 60) and restarts
the engine whenever no `autopilot.mts start` process is alive — indefinitely, as
long as the restarts work; the failure counter resets on every engine that comes
up. It gives up only after `WATCHDOG_MAX_FAILS` **consecutive** restarts that did
not come up (default 5), backing off 60s, 120s, 240s between them, because an
engine that cannot start will not start by being asked again. It exits on its own
when `.autopilot/status.md` reports COMPLETE, and `.autopilot/stopped` is the
marker that stops it restarting anything. Its log is
`.autopilot/watchdog.log`; the engine's is `.autopilot/autopilot.log`.

## Supervising

```
npx tsx tools/autopilot/bin/autopilot.mts status     # current stage, running lanes, blockers
npx tsx tools/autopilot/bin/autopilot.mts report     # force a status report now
npx tsx tools/autopilot/bin/autopilot.mts pause      # in-flight lanes finish; nothing new starts
npx tsx tools/autopilot/bin/autopilot.mts resume
npx tsx tools/autopilot/bin/autopilot.mts retry [--unit <n>]   # re-arm a lane that hit its cap
npx tsx tools/autopilot/bin/autopilot.mts skip --stage <id>    # owner override; recorded
npx tsx tools/autopilot/bin/autopilot.mts stop       # in-flight lanes are left to finish
```

`status` is a **different process** from the engine, so its in-flight map is
empty. It asks the operating system instead, and lists live dispatches for this
run whether or not it started them — otherwise it would report "nothing running"
with three agents working, which reads at 3am as a dead build.

`stop` and a SIGTERM both leave running agents alone deliberately. An agent that
has been thinking for forty minutes is expensive and nearly done; the engine
restarting is not a reason to throw its work away. State is on disk, the result
record lands whenever the agent finishes, and the next engine adopts it.

## When it stops, and what it wants

There are no halt codes. The engine either advances, holds, or is blocked, and
`status` says which with the reason.

| you see | it means | do |
|---|---|---|
| `stage spec is invalid` | a stage cannot fail — usually a gate list that came back empty | fix the stage table; the engine refuses to dispatch until you do |
| `missing input file(s)` | a brief or task the next dispatch needs is absent | write the file; the blocker retires itself on the next tick |
| `gate <id> failed` | a real defect, or a repair loop that has not converged | read the gate output in `events.jsonl` |
| `gate url-liveness failed` **persisting** | a citation is dead and the archive holds **no snapshot** — the recovered case never persists: the repair round swaps recorded snapshots itself (`url-recover-apply.mjs`) and re-verifies | re-sourcing is a judgment: pick the replacement per §3.11c and update the coverage source |
| `gate source-fetch-check failed` **persisting** | a source will not yield full text — dead with no archive copy, a bot wall, or an abstract page (§3.11c-2); the stampable case never persists, the repair round stamps it | scout an alternate URL for the SAME source; a different edition is a different source and needs a re-harvest |
| `<label> failed 3x` | a lane hit the config's `maxAttempts` | read its log under `research/<run>-dispatch/`; `retry` re-arms it |
| `plan() threw` | a stage's own planner raised | a spec defect, not a crash loop; fix the stage table |
| `N repair round(s) did not clear gate` | the bounded self-correcting loop gave up | this one needs a person |
| `repair hit an external outage … round refunded` | every failure the repair produced was a platform outage (an account session limit, a 429) — not a repair failure, so no round was spent | nothing; the hook re-fires when the backoff clock passes (default 20 min) and the budget is intact |
| `gate <id> ALSO failing (advisory)` | the battery stops at its FIRST failure, then runs the rest read-only so one battery names every failure | fix them together with the primary; advisory failures never block or spend rounds on their own |
| silence while blocked | the battery is event-driven: it re-runs on a dispatch end, repair round, control command, new result file or backoff expiry — not on a clock (except a backstop every 20th skip) | if you hand-edited files to fix the failure, `autopilot retry` re-arms the battery |
| `stage table reloaded` / `reload refused` | `stages/*.mts` was edited under a running engine; a table that fails validation is never loaded | on refusal, fix the table and save again — the running table stayed |
| `N dispatch record(s) stamped from result files` | adopted/orphaned records reconciled against disk | nothing; bookkeeping |
| `obligations … open at the terminal stage` | a `block`-tier external debt is neither closed nor owner-accepted | close it with evidence, or `obligations.mjs accept --by owner --reason "…"` |
| `run-commit: HEAD is on '<branch>', not main` | a person moved HEAD; the engine refuses to guess | move it back; the engine never checks out branches |
| `barrier` | a previous stage still has work in flight | nothing; it lifts by itself |

A blocker is **not** the end of the run. The engine keeps ticking: a transient
clears itself, `retry` re-arms a lane, and a genuinely stuck run is reported
every interval instead of dying silently. The first live takeover ended a
fourteen-hour build over an HTTP/2 framing error against a host that had answered
200 twice that hour, and that is why.

## The two self-correcting loops

A gate says what is wrong; the stage dispatches whoever can fix it; the gate
re-runs when those dispatches drain. Bounded, because a repair that will not
converge must become a blocker a person reads rather than an unbounded spend.

| loop | clears when | receipt it dispatches from |
|---|---|---|
| step 3 review → Beta fix → re-check | every pair is `sufficient` | `research/<run>-scaffold-closure.json` |
| step 7 judge → adjudicate → repair → rejudge | every item paired, every rejection adjudicated, no open fatal | `research/<run>-judge-closure.json` |

Both receipts name **ids**, not prose — nothing downstream can read a table. Why
the loops are shaped this way, and the run that proved it: `ARCHITECTURE.md`
§3.11d.

## Budget, and why fatal repairs are not capped

Judge calls are the spend: two lanes over every item in the run, capped at 16
concurrent each and 32 combined. A capacity refusal is a null verdict, not a
verdict, and the sweep retries it.

**Fatal repairs are deliberately uncapped** (owner, 2026-08-03). A proof that
keeps yielding real fatal defects is either converging toward correctness or is
false, and both must run to conclusion. What *is* capped is the number of
automatic repair *rounds* per gate — the loop, not the repairs.

## Limits — what is not yet true

- The engine has never driven a complete run start to finish with no
  intervention. Every stage mechanism is tested and `frontier-14` exercised most
  of them, but "steps 0 through 10, untouched" has not happened yet.
- `strictNullChecks` is off in `tools/autopilot/tsconfig.json`, with the
  outstanding diagnostic count recorded there. Two defects the tests could not
  see were found by turning type checking on; the rest are not yet fixed.
- The watchdog cannot tell a crash loop from bad luck. It gives up after five
  consecutive restarts that failed to bring the engine up, and that threshold is
  a guess.
