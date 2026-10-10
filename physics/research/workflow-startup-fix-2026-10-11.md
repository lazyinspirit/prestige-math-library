# Physics workflow startup repair — 2026-10-11

The 79-batch CM/QM/GR run stalled in synchronous startup validation. `prerequisiteBatches` scanned all 27,127 item carriers for every batch, including empty pre-authoring inventories. Startup and doctor repeated the same expensive work.

The resolver now reads current manifests and relevant carriers first, resolves canonical IDs directly, and loads the corpus alias index only for actually used unresolved IDs. It retains used-alias ambiguity checks, carrier-only dependencies, numeric batch ordering and fresh inputs on every call. No cross-tick cache, stage, gate, review cap, consumer safeguard or dispatch model changed. Native startup checks remain intact.

One real empty-batch lookup fell from 7,110.73 ms to 32.44 ms; all 79 lookups now take 1,129.83 ms. These are observed timings, not performance guarantees.

Validation: eight new prerequisite-resolution regression tests and 29 existing construction/scope-loop and owner-gate tests passed (37 total). The actual run's doctor passed all checks. The orchestrator reviewed the change; this is a local workflow repair, not production mathematical acceptance. One repair/review cycle was used.

Commands:

- `node --test tools/physics-support/prerequisite-batches.test.mjs`
- `node tools/tsx-run.mjs --test tools/physics-autopilot/test/construction-scope-workflow.test.mts tools/physics-autopilot/test/owner-gate-recertification.test.mts`
- From `physics/`: `node tools/tsx-run.mjs tools/physics-autopilot/bin/autopilot.mts doctor --run physics-cm-qm-gr-79-2026-10-11 --state-dir .physics-autopilot/physics-cm-qm-gr-79-2026-10-11`

The original startup process was stopped before any worker dispatch; existing run state and all 158 promised pages were preserved for restart.
