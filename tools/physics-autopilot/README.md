# Physics Autopilot

An independent fork of `tools/autopilot/`. Its original byte-for-byte snapshot
is recorded in `../physics-autopilot-baseline.json`; adaptations never change
the mathematics engine or its supporting tools and briefs.

Use [../../physics/WORKFLOW.md](../../physics/WORKFLOW.md) for commands and
[../../physics/SCHEMA.md](../../physics/SCHEMA.md) for physics content rules.
The default workspace is `physics/`, with private helpers in
`tools/physics-support/`, independent briefs, state, and workflow revision.
The stage files retain their inherited `mathlib*.mts` names.

Every stage includes a mandatory physics-content gate. Physics theorems and
thought experiments share proof rules; postulates and reported experiments
receive source and scope review. Mathematical suppliers are pinned read-only
snapshots with unchanged canonical IDs. Mathematical consumers cannot use
physical justification, and mathematics pages cannot contain physical items.

`npm run typecheck` checks the fork. `npm test` runs both the inherited engine
regressions and physics-specific tests. The original mathematical suite contains
pre-existing failures; exact validation results are recorded in
`../../physics/research/workflow-implementation-validation.json`.

Website publishing and physics-view integration are separate work. This change
has not dispatched authors or started a content build.
