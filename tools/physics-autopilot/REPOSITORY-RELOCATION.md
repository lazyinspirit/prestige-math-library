# Relocating a physics run repository

A physical repository move does not create a new run, execution, review or gate.
Move the actual run artifacts and runtime directory without rewriting frozen
reports, results, prompts, events or historical snapshots. The operator separately
rebinds active CLI/configuration paths and performs fresh ordinary current-input
preparation. The old checkout need not remain, and no symlink or backup is used.

An explicit Root receipt at `research/RUN-repository-relocation.json` gives
historical native prompt paths a narrowly guarded identity after the move:

```json
{
  "version": 1,
  "kind": "root-authorized-run-repository-relocation",
  "run": "RUN",
  "reviewer": "/root",
  "old_root": "/removed/checkout/physics",
  "new_root": "/current/checkout/physics",
  "reason": "Root authorized this repository move and checked these exact genuine historical files.",
  "artifacts": {
    "research/RUN-dispatch/alpha-drift-review-append-1.result.json": "RAW_SHA256",
    "research/RUN-dispatch/alpha-drift-review-append-1.attempt-1.prompt.md": "RAW_SHA256"
  }
}
```

Only canonical, regular, run-local `research/RUN-*` or
`.physics-autopilot/RUN/*` files qualify. Map each frozen result and its actual
prompt, retaining their exact repository-relative paths and raw SHA256. Include
immutable attempts and other historical evidence the operator explicitly binds.
Do not list mutable current state, active config or future gate requests as
immutable artifacts. A historical prompt lookup requires both the prompt and
its referring frozen result to match the receipt. Unlisted files, a foreign run,
wrong expected prompt, altered bytes, traversal or any symlink fail closed.
Current and relative paths keep their ordinary validator checks.

Generate a proposed receipt on stdout from an explicit JSON array of already
relocated file paths; review it before installing as Root:

```bash
node tools/physics-autopilot/bin/relocate-repository.mjs prepare \
  --repo /current/checkout/physics --run RUN \
  --old-root /removed/checkout/physics --files-file /operator/exact-files.json \
  --reason 'Root authorized this exact physical relocation and authenticated the unchanged native artifacts.'
node tools/physics-autopilot/bin/relocate-repository.mjs verify \
  --repo /current/checkout/physics --run RUN
```

Both commands are read-only. `prepare` hashes current files; it does not establish
historical authenticity or authorize itself. Root must bind genuine transferred
bytes from the actual move. The native append validator and author-continuation
reader use this receipt for historical prompt identity, preserving every other
run, attempt, state, source, ownership and coverage check.

This is not general path substitution. Current mathematical import authorities,
current code inputs and active stages/dispatch paths must be rebound through their
ordinary owner mechanisms. Historical code hashes are not accepted against
changed current code. Historical snapshots stay historical; a relocation receipt
cannot turn their old input bindings into fresh gate preparation.
