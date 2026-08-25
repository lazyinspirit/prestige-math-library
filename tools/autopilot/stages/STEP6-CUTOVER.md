# Step-6 cutover record

Cut over on 2026-08-25. `mathlib.mts` imports the active
`mathlib.step6.mts`; the stale inline Step-6 table was removed rather than
layered over.

Future runs execute independent per-batch readers, exact read-only refuter
coverage, routed group-Alpha decisions, a frozen post-6b carrier boundary,
lead-Alpha cross-batch/later-change closure, and an immutable `6d-close`
receipt. Published repairs use one atomic pre-edit owner and locked handoff
append. Retry accounting is per item, per gate, and separate between 6b/6c.

Frontier 18 had already completed legacy Step 6. Its write-once
`research/frontier-18-step6-cutover.json` binds the legacy gate timestamps and
reader/Alpha evidence; only stages introduced by the rebuild adopt it. Existing
stage completion remains the engine's durable evidence. Run
`node tools/step6-cutover.mjs check --run frontier-18` to verify the boundary.

The hot-loaded controller retained an obsolete in-memory stage view and briefly
reported `6a-baseline`; a fresh disk recomputation resolved `8-preflight`. On
2026-08-26 the controller was restarted while paused. The replacement loaded
the rebuilt table, reports `8-preflight`, and has no in-flight work. No state
file was hand-edited.
