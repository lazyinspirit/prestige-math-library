# Native Step-6 cutover

The mathematics CLI provides the explicit transition for a paused, unfinished
historical Step 6 on `six-step-v1-construction-scope`:

```bash
node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts cutover-step6 --run RUN --state-dir .autopilot/RUN --authorization research/RUN-step6-cutover-authorization.json --inspect
node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts cutover-step6 --run RUN --state-dir .autopilot/RUN --authorization research/RUN-step6-cutover-authorization.json
```

The inspection emits only the guards. Seal that exact object as `guards` in a
version-1 authorization with `run`, `authorized_by: owner`,
`kind: current-input-step6-v3-cutover` and an `authorization` description of the
actual owner direction. Use the same authorization path for inspection and
execution; its own bytes are excluded from the guarded source tree to avoid a
self-hash. The command requires stopped/drained native writers, an unchanged raw
state/events pair, HEAD, stage table, current selected input tree and historical
Step-6 products, plus the genuine earlier Step-5 terminal battery/freeze entry.
It archives original state/events, authorization, Step-6 products and dispatch
carriers in `.autopilot/RUN/step6-cutover-ID/`, leaving the original event stream
append-only. A durable hash-bound research receipt authenticates that archive.
Archive copies stay outside fresh source selectors. Earlier stage records,
including historically waived snapshots, remain unchanged; only Step-6 state,
dispatch counters, gate attempts and blockers reset. The v3 suffix starts paused
at `6-prepare-v3`, with its current terminal pause boundary. Start/resume the native
engine for new preparation and the complete final battery; the transition grants
no coverage and changes no Git ref. Interrupted archives fail closed.


Use the same command with `--refresh` on both inspection and execution to reopen
an unfinished v3 finalization after source/workflow repair. Its authorization kind
is `current-input-step6-v3-refresh`; the exact guards include `refresh: true`.
The run must be paused and drained at `6-finalize-v3`, with a genuine preceding
validation pass, its authenticated cutover chain, and HEAD unchanged from that
cutover. A successful, pending or commit-bearing terminal receipt refuses this
route and requires separate commit recovery. The operation archives the actual
v3 preparation/report products and runtime preparation records, then retires the
actual Step-6 dispatch results as well as all Step-6 state. Thus restart runs
fresh preparation and the full battery instead of adopting the previous successful
preparation result. Old receipts and archives remain authenticated through the
new receipt's `previous_cutover` chain; Steps 1–5 remain unchanged. An interrupted
archive or retirement must be inspected and recovered explicitly, never deleted
or treated as a successful gate pass.
