# Running an audit wave unattended — canonical

`AUDIT-WORKFLOW.md` is what a wave *is*. This is how to run one without a session
attached, and how to attach to one already running.

Normative for the driver mechanism. `CLAUDE.md`, `SCHEMA.md` and
`AUDIT-WORKFLOW.md` win where they differ; nothing here relaxes an owner rule or
a gate. This is the audit twin of `UNATTENDED.md`, deliberately the same shape.

---

## What this does and does not do

It drives A0 to A10 and **stops at the A10 owner pause**, which is where
`AUDIT-WORKFLOW.md` already stops. The end state is a fully tagged, repaired,
certified, judged, all-gates-green wave with its rundown written and **committed
on the current branch, unpushed**.

It never publishes. `verification.audited`, flipping `status: published`,
deleting a published item, id changes, reading-order changes, and any
published-dependency repair that is not "obvious" are owner-reserved, and no flag
exposes them. `tools/run-wave.test.mjs` asserts the driver's source contains no
publication verb at all, because a policy you can only read is weaker than one a
test enforces.

**One wave per run.** Reaching A10 stops. Chaining was considered and declined
(owner, 2026-08-04): audited-but-uncleared waves would stack up, and a systematic
defect would propagate through several before anyone looked.

**Unattended is not deterministic.** A2, A4, A6 and A8 are model work and stay
stochastic. What is deterministic is the control flow around them.

---

## The pieces

| tool | does |
|---|---|
| `tools/preflight.mjs --audit` | can this machine run a wave. Adds an **outbound-HTTP check** the build does not need |
| `tools/gates.mjs --audit --step A<n>` | the gates of record for one audit step. Never writes, never spends |
| `tools/audit-split.mjs` | classifies changed items pure-retag vs material, field-aware |
| `tools/audit-batch-split.mjs` | applies `wave<k>-batch-split.json` at A0, so an over-cap generated manifest becomes legal batches instead of one Beta getting five pairs |
| `tools/dispatch.mjs --role audit-*` | runs one briefed audit role. All-Claude plus DeepSeek since 2026-08-05: `audit-beta` and `audit-alpha` are `claude-opus-5`, `certifier` is read-only `claude-sonnet-5`, `audit-refuter` is read-only DeepSeek V4 Pro (an HTTP call, not a process, so it needs its context in `--task`). `--check-read-only` prints the per-runner enforcement |
| `tools/run-wave.mjs` | the state machine: steps, halts, durable state, journal |
| `tools/run-control.mjs --run wave<k>` | talk to a wave that is already going. Resolves the run directory from the run's own state file, so a wave gets `research/audit/`; before 2026-08-05 it hardcoded `research/` and every steer command for a wave wrote a file nobody polled, while printing success |
| `ops/run-wave@.service` | systemd user unit so the wave survives logout |

State: `research/audit/wave<k>-run-state.json`. Commands:
`research/audit/wave<k>-run-control.json`. Every agent's prompt, log and result:
`research/audit/wave<k>-dispatch/`.

---

## Starting a run

```
node tools/preflight.mjs --audit --judges     # once, before a long wave
node tools/run-wave.mjs --wave 4
```

Unattended on the VPS, per the header of `ops/run-wave@.service`. The step that
is easy to skip and fatal to skip:

```
loginctl enable-linger "$USER"
```

Without it systemd tears down the user manager at logout and the wave dies with
the session it was supposed to outlive.

The unit also bounds memory: `MemoryHigh=4G`, `MemoryMax=5G`, `MemorySwapMax=2G`
and `OOMPolicy=continue`. Wave 4's A3 orchestrator lane reached 6.3 GiB anon RSS
on a 7.8 GiB host, the kernel OOM killer took it, and systemd's default
`OOMPolicy=stop` killed the driver with it — so no halt code was written and the
state file still read `running` with nothing running. With `continue`, the driver
outlives its agent, reads the nonzero exit and halts `agent-failed`. Note the
matching hole in the driver: `run-wave.mjs` refuses to restart only a `halted`
run, so a state file stranded at `running` neither blocks nor warns.

---

## Supervising

Identical to the build, and you choose per session which level you are using.

**Watch** — costs nothing, changes nothing:

```
node tools/run-wave.mjs --wave 4 --status
journalctl --user -u run-wave@wave4 -f
```

**Control** — commands land at the next **step boundary**, never mid-step:

```
node tools/run-control.mjs --run wave4 show
node tools/run-control.mjs --run wave4 pause
node tools/run-control.mjs --run wave4 budget 600
node tools/run-control.mjs --run wave4 clear
```

**Takeover** — halt, then drive by hand exactly as `AUDIT-WORKFLOW.md`
describes. The state file and the dispatch logs mean nothing is lost. This is the
intended route whenever the mathematics needs you.

---

## Every halt, and what it wants

| code | means | you do |
|---|---|---|
| `wave-empty` | A0 produced no manifest: every page at this level is already tagged | nothing — try the next wave. Exits **0** |
| `judgment-required` | A3 or A9 needs an orchestrator decision | make it, resume at the next step |
| `judgment-empty` | the autonomous A3/A9 lane exited 0 without writing `wave<k>-A<n>.md` | read the dispatch log: a refusal and a decision look identical without the receipt |
| `gate-failed` | a gate of record failed; the failing tool is quoted | fix the content, resume at that step |
| `action-failed` | a driver tool exited nonzero | read the quoted output |
| `agent-failed` | a dispatched role exited nonzero | read `research/audit/wave<k>-dispatch/<role>-<label>.log` |
| `no-batches` | a per-batch step found no manifest | produce them at A0 |
| `snapshot-failed` | a `touchlog` baseline could not be taken | fix, resume; R1's guard needs `pre-a8` |
| `injection-test-required` | the judge prompt context changed with no passing injection test | run it, record the pass, resume |
| `manual-step` | A7 spends and no `--judge-budget` was given | sweep yourself, or resume with a budget |
| `budget-exhausted` | the judge-call budget is spent | raise `--judge-budget` and resume |
| `sweep-failed` | the paired sweep exited nonzero | read the ledger and the attempt log |
| `operator-halt` | you asked, via `run-control` | resume with `--from-step` |
| `owner-pause` | **A10 reached — success** | audit and publish by hand. Exits **0** |

A halted run refuses to restart without `--from-step`. Deliberate: a driver that
resumed automatically would spin through whatever caused the halt. The gap: a
run whose driver was **killed** never reaches `halt()`, so its state file still
says `running` and nothing — not the driver, not the unit — notices or blocks a
second start on the same run.

### The autonomous judgment lane (wave 4, 2026-08-04)

`--judgment autonomous` dispatches the decision at A3 and A9 instead of halting
for you. It was broken from the day it was written, in three compounding ways,
and wave 4 is what found them:

1. it handed the lane `briefs/audit-alpha.md`, Alpha's **A6/A8** duties, not the
   step's — so the agent was briefed for a job it had not been asked to do;
2. `PLAN.A<n>.note`, the actual instructions, was read only by the `halt()` on
   the `--judgment halt` path, so under `autonomous` it reached nobody;
3. exit 0 was journalled as a decision, so an agent **correctly refusing a
   misrouted dispatch** was indistinguishable from one that had adjudicated.

Wave 4 advanced to A4 with 91 provenance determinations and 13 repairs approved
by nobody. Three Sol Betas independently refused to apply them and said why —
which is luck, not a mechanism. The lane now uses `briefs/audit-orchestrator.md`,
delivers the step note through `dispatch.mjs --task`, and requires a receipt at
`research/audit/wave<k>-A<n>.md` that a no-op cannot produce.

---

## Judgement policy

A3 (adjudicating Beta repair proposals) and A9 (the scope-denial sweep, where
"grep is the entry point, never the sweep") need a decision no gate encodes.

* `--judgment halt` (**default**) — stop and name the decision.
* `--judgment autonomous` — dispatch a headless orchestrator and journal what it
  decided.

The default is `halt` because delegating judgement should be something you
switched on, not something you discovered. **A0 is NOT a judgement step here**,
unlike the build's step 0: `rounds.mjs --audit-batches` computes the wave from
published page files and excludes already-tagged items mechanically, so there is
nothing to decide.

---

## Spending, and the injection test that gates it

`--judge-budget N` is required before A7 will sweep at all; with no budget the
driver halts `manual-step`. The sweep is the one irreversible purchase in the
workflow, so buying it needs a deliberate number.

Before spending, the driver fingerprints `briefs/judge-conventions.txt` and
`tools/judge.mts` and requires a matching passing row in
`research/audit/judge-injection-tests.jsonl`. Those bytes enter the frozen judge
prompt, so editing them is a judge-lane **context** change and `ARCHITECTURE.md`
§5 requires an injection test.

**A failing injection test halts the wave** (owner, 2026-08-04). A lane that
passes a known falsehood is not a screen; its verdicts would be worthless and its
stamps unearned. The risk is specific and silent: a line telling a judge what is
*not* a defect can make it credulous exactly there, and a credulous lane returns
`keep: true` and looks like a clean sweep.

---

## What A6 gets for free, and what it must never skip

The driver precomputes, before dispatching Alpha: the **URL liveness sweep**
(driver-side, because agent sandboxes have no DNS), the **pure/material split**
via `audit-split.mjs`, and the **impact template**. See `AUDIT-WORKFLOW.md` §7,
"A6 efficiency protocol".

**The driver never narrows Alpha's reading to the changed set, and no flag offers
it.** Measured wave 3: 6 of the 11 confirmed fatal defects were in items A4 left
byte-identical. A retro-audit whose reading surface is what it changed can only
find what it introduced.

---

## Limits — what is not yet true

Stated plainly so nobody discovers these at 3am.

* **No wave has been driven end-to-end by this.** The state machine's stop
  conditions are covered by `tools/run-wave.test.mjs` (20 properties); a full
  real wave has not run. Wave 3 was driven by hand, and this encodes it.
* **The injection test itself is not automated.** The driver detects a context
  change and halts demanding a recorded pass; running the test — inject, judge,
  restore, verify the sha256 — is still manual. Automating a self-test that
  mutates published items is the piece most likely to fail silently, so it earns
  autonomy after being watched, not before.
* **`level-coverage --verify-current-context` cannot pass after an A8 repair.**
  Repairing an item moves the frozen context of every sibling on its page, and
  the tool has no targeted-receipt mode, so it reports `judge-coverage-missing`
  for siblings nobody touched. `AUDIT-WORKFLOW.md` §7 A8 says a targeted repair
  must not force a full-current-context run — that is what the targeted receipt
  is for — but the gate does not know that yet. Measured wave 3: 58 such reports,
  55 of them untouched page-siblings.
* **A `post-a8` snapshot is not taken automatically**, so the A8 impact record is
  assembled from disk rather than from `impact-audit.mjs`.
* **Agent prompts are the briefs as written.** A role that finds its brief
  ambiguous will produce a report rather than block, and the gates are what catch
  that.
