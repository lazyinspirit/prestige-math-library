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
```
