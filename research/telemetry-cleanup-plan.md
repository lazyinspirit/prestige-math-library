# Telemetry maintenance

Completed telemetry and cleanup are consolidated in [run-telemetry/telemetry.json](run-telemetry/telemetry.json). The [index](run-telemetry/README.md) explains measurement overlap, unknown counters, exact deletion inventory, and historical seals.

For later cleanups, collect with `tools/run-telemetry.mjs` into a temporary directory, verify the snapshot, and merge its summary into the dedicated file. Remove transient artifacts only after confirming completion from engine state and Git, preserving canonical evidence and authored content. Keep credentials, generated session homes, prompts and raw logs out of Git.
