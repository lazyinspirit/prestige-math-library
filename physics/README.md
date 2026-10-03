# Physics library workspace

This workspace separates Classical Electromagnetism and Quantum Mechanics
content from the existing mathematical library. The independent engine is
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

The workflow supports postulates, physical theorems, thought experiments, and
reported experiments. Physical theorems and thought experiments have identical
proof obligations; postulates and experiments require source and scope review.
Website integration, publication, and the first production content run remain
separate steps. See research/workflow-implementation-validation.json for checks
and inherited test-suite limitations.
