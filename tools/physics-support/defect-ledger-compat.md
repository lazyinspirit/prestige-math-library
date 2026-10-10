# Physics defect taxonomy history

The physics ledger follows the append-only taxonomy rule in `WORKFLOW.md`:
active rows use the closed schema, while validly superseded rows retain their
original class, subclass and location labels. Validation checks the backward,
same-run and same-subject supersession links before identifying historical rows.
Every other field check remains active, including mandatory fields, severity,
stage, role, evidence structure and duplicate IDs. New appends require canonical
labels even when they supersede earlier rows.

The EM/SR run's `batch-12-operational-objects` row records a genuine missing
definition finding. Its reader report identifies undefined FWHM, transition,
Lorentzian-fit, weighted-center and phase-correction objects; the Alpha report
accepts that repair. `undefined-operational-terms` is a producer-specific label,
not an additional member of the closed subclass enum. The compound experiment
section location is likewise historical descriptive metadata. Preserving those
labels requires an append-only canonical metadata correction; a validator
exemption for an active row would violate the workflow.

`defect-ledger-taxonomy.mjs` shares the validated active-ownership projection
with the physics ledger and Step-5 routing. A `metadata_correction` record of
kind `taxonomy-only` binds one earlier same-run/subject row by its full JSON
SHA-256 and lists the changed taxonomy fields. Only class, subclass, location
and their explanatory notes may change. Every other substantive field must
remain identical, including original detection attribution/time, disposition,
evidence, claims and repair records. Invalid lineage, unknown correction kinds,
forged hashes, duplicate IDs and ambiguous corrections remain errors.

Routing resolves sealed original decision IDs through these validated
taxonomy-only chains to the active owner. It preserves exact decision files,
obligation names, native reports and snapshots. Ordinary substantive supersession
does not create an old-ID alias and still needs its own current decision.

The standalone ledger check also uses validated active owners for open-defect
agreement in both directions and for terminal `--no-open`. An original open
observation superseded by a deferred or repaired row remains history and does
not describe the current open state. Active fatal open rows still require
closure agreement; every active open row, including a nonfatal one, still
fails terminal closure. Invalid supersession, ambiguous fatal ownership and
malformed historical fields remain failures. Raw history, schema validation,
generated-view freshness and the checked-row/liveness count remain intact.

The standalone Step-9 evidence builder validates the owning run's complete
ledger with the same canonical validator before resolving active ownership.
Active open rows block evidence closure regardless of severity. Superseded
open observations retain their literal dispositions in the exhaustive fatal
table, with explicit history/ownership annotations naming their current owners.
Counts and grouped statistics still include every recorded fatal row, including
outside-scope active deferred rows; separate active/history counts clarify the
current state. No source row or substantive disposition is rewritten.

The standalone report snapshot follows the canonical physical-entry policy:
`lstat` distinguishes real directories from links, and shared
`protectedEntryHash` seals regular file bytes with a `file\0` prefix or literal
symlink target bytes with a `symlink\0` prefix. Dangling cached links are sealed
without resolving them. Directory aliases, cycles and external targets,
including the linked tools tree, are never traversed. Link target changes,
link/file substitutions and physical-file changes still fail integrity checks.
Existing mutable-output and runtime exclusions remain unchanged. This does not
alter readiness, caches or links; a new native snapshot records the policy.

The standalone closeout import preflight passes the current run to the existing
frontier import verifier. Every local snapshot remains pinned and classified;
original-source guards follow the validated current manifests and their actual
supplier/discharge closure, used aliases, direct owned references and prerequisite
pages. Unrelated original drift is outside that closure. Invalid or empty run
selections still fail; this does not refresh imports or change commit ownership.

This compatibility change does not append corrections, alter decisions, rewrite
original rows, certify content or charge a mathematical repair round. Validate
the actual owning-run ledger after its metadata corrections and ownership
references have been reconciled:

```bash
cd physics
node ../tools/physics-support/defect-ledger.mjs validate --run physics-em-sr-40-2026-10-08
```

The focused compatibility regression verifies unchanged original bytes, strict
new appends, sealed-ID resolution and rejection of forged hashes, changed
substantive fields or invalid ownership links:

```bash
node --test tools/physics-support/defect-ledger-compat.test.mjs
node --test tools/physics-support/step9-report-history.test.mjs
node --test tools/physics-support/step9-report-tree.test.mjs
node --test tools/physics-support/run-commit-import-scope.test.mjs
```
