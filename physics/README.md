# Physics library workspace

This workspace separates physics content from the existing mathematical library.
Planned subjects include Non-relativistic Classical Mechanics, Classical Electromagnetism, Non-relativistic Quantum
Mechanics, Special Relativity, General Relativity, and Thermodynamics.
Expanded research adds Fluid Dynamics, Relativistic Particle Mechanics,
Einstein–Maxwell Models, Quantum Field Theory including QED, Classical Statistical
Mechanics, Quantum Statistical Mechanics, and Thermodynamics and General
Relativity. The independent engine is
`../tools/physics-autopilot/`; its private helpers are `../tools/physics-support/`.
The tools symlink makes those commands available from this working directory.

Start with [CLAUDE.md](CLAUDE.md), [SCHEMA.md](SCHEMA.md), and
[WORKFLOW.md](WORKFLOW.md). The agreed model and relation table are in
[../PHYSICS-CONTENT-MODEL.md](../PHYSICS-CONTENT-MODEL.md).

- items/: locally authored items and pinned mathematical supplier snapshots.
- library/: local A/B pages and imported canonical mathematics placements.
- briefs/: independent physics authoring, review, judging, and repair instructions.
- research/: physics plans, contracts, evidence, and import hashes.
- .physics-autopilot/: independent ignored run state.

Imported mathematical content retains its original IDs and bytes. It is runtime
supplier data, not independently authored physics content, and is excluded from
Git by the import-generated ignore block. Never edit imports. New mathematical
prerequisites may be developed locally with exclusively mathematical dependencies.
Physical items cannot enter mathematical pages or mathematical justification.

The workflow supports postulates, physics theorems, thought experiments, and
reported experiments. Physics theorems and thought experiments have identical
proof obligations; postulates and experiments require source and scope review.
Website integration, publication, and the first production content run remain
separate steps. See research/workflow-implementation-validation.json for checks
and inherited test-suite limitations.

Source research and proposed prose designs for the planned subjects are recorded in
[research/first-principles-2026-10-03/](research/first-principles-2026-10-03/README.md).
They record completed source reading, exact mathematical supplier mappings, local
arguments, and open prerequisites; they are not production readiness receipts.

The seven new five-agent teams and their scaffolds are indexed in
[research/extended-frameworks-2026-10-03/](research/extended-frameworks-2026-10-03/README.md).

The canonical proof-item kind is `physics-theorem`, with the existing `pthm-`
prefix. `physical-theorem` is retired and rejected by current validators.
The website separates the Math Library and Physics Library; research scaffolds
do not become published physics pages merely by appearing in its subject index.
The Mathematical Universe excludes physics classes/domains and their mathematical
consumer chains at its loading boundary. The mathematics workflow remains separate.
