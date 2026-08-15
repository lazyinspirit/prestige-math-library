# frontier-14 — running under autopilot

Written 2026-08-15 ~17:33Z, when the owner went to bed. Live state is in
`.autopilot/status.md`, which the engine rewrites every 20 minutes.

## Check it in one command

```
node ~/Projects/autopilot/bin/autopilot.mjs status
```

It **recomputes from disk** every time — it is never a stale cached report — and
it lists agents that are genuinely running, including ones the current engine
did not start (marked `running (observed)`).

## What is driving

| | |
|---|---|
| engine | `~/Projects/autopilot/bin/autopilot.mjs start --run frontier-14` |
| watchdog | `~/Projects/autopilot/bin/watchdog.sh`, 60s, restarts a dead engine |
| events | `.autopilot/events.jsonl` — append-only |
| status | `.autopilot/status.md` — overwritten each report |
| config | `autopilot.config.json` |

The old `run-drive.mjs` + supervisor-agent mechanism is **stopped**. No LLM
decides a stage transition any more.

## Intervening

```
node ~/Projects/autopilot/bin/autopilot.mjs pause      # in-flight agents finish, nothing new starts
node ~/Projects/autopilot/bin/autopilot.mjs resume
node ~/Projects/autopilot/bin/autopilot.mjs stop       # also stops the watchdog
node ~/Projects/autopilot/bin/autopilot.mjs retry      # re-arm lanes that exhausted their attempts
node ~/Projects/autopilot/bin/autopilot.mjs report     # force a status report now
```

Commands are read at the next tick, never awaited. Doing nothing is a valid
choice and changes nothing.

## The stage sequence

```
1-scaffold  ✓ cleared, 14 gates green
3-review    ✓ cleared, 6/6 covered by 2 Alphas
3-fix       ✓ cleared, 6/6, gates green — transitioned with nobody in the loop
3-recheck   → running, both Alphas dispatched automatically
4-splice      lead Alpha, one receipt per batch, released per batch
5-author      one Beta per batch, the Beta that scaffolded it
6a-read       one independent reader per batch
6b-adjudicate group Alphas, refuters, risk reviews
6c-cross      lead Alpha, cross-batch and cross-level citations
7-judge       paired sweep, DeepSeek + Terra, 9 A pages
8-adjudicate  fatal-only, step8-guard enforced
9-scope       every decline re-checked against disk
10-report     the owner report
```

Every stage has its brief and task file on disk — checked by a preflight
simulation, so nothing blocks hours from now on a missing file.

## What was fixed to get here

Taking over a live build found seven defects no fake-pipeline test could have:

1. `step8-guard --run` — invented flag; takes `--touches`/`--baseline`/`--adjudications`
2. `judge-sweep --run` — invented flag; takes `--ledger`/`--cost`/`--pages`
3. `merge-proof-contracts --run` — takes `--level <run> <out> <ins...>`;
   and `touchlog` is positional, `snap <ledger> <label>`, not flagged.
   Four of the six invocations I first wrote from memory were wrong, so
   `test/signatures.test.mjs` now checks every flag against the tool that
   receives it — all 38 commands in the task files and the whole stage table
   validate clean.
4. Anchored result patterns missed `alpha-alpha-step3-a.result.json`, because a
   role-prefixed label makes `dispatch.mjs` write `<role>-<role>-<label>`
5. SIGTERM killed running agents while its own message claimed otherwise —
   a restart destroyed three fix passes and re-dispatched them at attempt 2 of 2
6. A gate failure ended the run, so a transient network error would have stopped
   the build
7. **`url-sweep` reported a live citation dead** — Shapiro's Arzelà notes answer
   200 to plain curl but fail HEAD with an HTTP/2 framing error, and a transport
   failure carrying a status short-circuited the fallback chain. The gate's own
   remedy is recover-before-replace, so this would have swapped a working
   citation for a 2016 archive snapshot and rewritten the provenance of every
   item it backs. Fixed in `tools/url-sweep.mjs` (`984c37c4`).

Number 7 is the one worth knowing about: it is a false positive in a gate whose
prescribed remedy is destructive, and it only appeared when the gate was first
run across all six batches at once.

## Verified live, not just in tests

- engine SIGKILLed → 3 agents survived → watchdog restarted it in 30s → the new
  engine **adopted** the running agents instead of re-dispatching them
- step 3 recognised as complete at **6/6 covered by 2 dispatches** — one Alpha
  covering three batches each, which a count of agents cannot express
- 14 stage-1 gates run, including a transient failure that cleared on retry and
  retired its own blocker

## If something is wrong in the morning

`status.md` names it. A stage sitting at `[>]` with `nothing running` and a
blocker listed is the shape to look for; the blocker says which unit or gate.
`autopilot retry` re-arms, `autopilot skip --stage <id>` bypasses.

Nothing in this run is `status: published`. Publishing remains yours.

---

## Progress log (appended as it happened)

| time (UTC) | event |
|---|---|
| 17:11 | autopilot took over from the LLM-driven driver |
| 17:21 | `1-scaffold` cleared — 14 gates green, after fixing a false dead-source report |
| 17:49 | `3-fix` cleared — 6/6, first fully autonomous transition |
| 18:03 | `3-recheck` cleared — Alpha b confirmed all 11 of its findings applied on disk |
| 18:10 | `4-splice` cleared — item lists in `plan-spec.json`, `validate-plan` green |
| 18:11 | `5-author` entered — 5 Betas dispatched, batch 6 queued at the cap |

**The splice is verified good.** All six A pages carry their item lists
(16/36/19/29/21/44 items), `validate-plan` is clean, and the lead Alpha took the
`pre-step5` touch baseline over 4,646 items **before any authoring** — which is
the `frontier-13` defect fixed, where the baseline was taken afterwards and the
impact gate confirmed instead of checking.

**Both judge lanes were verified able to authenticate** from a bare environment
before step 7 needs them: DeepSeek resolves its key through `paths.mjs` to the
app `.env`, and the Codex CLI is authenticated and on PATH. That was the largest
remaining silent-failure risk.

Authoring is the long stage — six Betas, up to six hours each. Expect little to
happen for a while; the engine reports every 20 minutes regardless, so quiet and
dead look different.
