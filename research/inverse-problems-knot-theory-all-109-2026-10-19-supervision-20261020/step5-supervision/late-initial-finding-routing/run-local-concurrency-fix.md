# Run-local native global concurrency override

The existing native loadConfig now accepts optional globalConcurrency alongside required run/stages in a single run state directory. Only positive finite integers are accepted. Existing exact run matching, unknown-key rejection and absent-override defaults remain unchanged. The ordinary Executor cap code is unchanged and still includes local/adopted workers together with stage and role limits.

Three targeted tests pass through the real operator doctor CLI: cap4 reaches native stage context, another namespace retains shared17, absent override retains shared/default17/20, malformed values and foreign/unknown local config fail, and configuration/state remains unmodified. Seven existing adoption/capacity tests also pass. The doctor fixture deliberately emits a configuration diagnostic and never starts a worker.

Root explicitly authorized temporarycap4 only at an actual paused/drained boundary, with controller restart. Root will remove it at the actual paused/drained5.8 final-gate hold before Step6 seals the ordinary two-key config. The explicit sealed compact Step6 refresh recovery API still rejects extra local keys and remains unchanged. No actual configuration, controller, source, evidence or state was modified by this task.

The adjacent JSON pins3files. Only the new17-line concurrency documentation subsection belongs to this change; unrelated concurrent README priority edits are excluded. Independent FIRST passed10/10 independently rerun tests with the exact3file bindings and owned README subsection, excluding unrelated priority edits; no repair was requested. Resource-pressure measurements are root observations, not fabricated fresh telemetry or a reason to bypass any review/check.
