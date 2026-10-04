# Physics support tools

Private copies of the mathematics workflow helpers, rewired for the independent
physics engine. They default to the physics/ workspace; engine dispatches also
pin PHYSICS_REPO. Do not substitute these for the mathematics tools.

New modules:

- physics-content.mjs: class/domain, dependency-role, DAG, evidence-link, page,
  proof, experiment, and empirical-qualification checks.
- physics-check.mjs: the mandatory stage and preplanning gate.
- physics-imports.mjs: import and verify published mathematical snapshots.
- physics-guidance.mjs: embeds the owner's concise mathematical-rigor and statistical-evidence instructions, with EM and double-slit examples, in stateless judge prompts.
- physics-review.mjs: class-specific source-review contracts and judge guidance.

Copied proof, provenance, dependency, planning, and publication tools retain
ordinary mathematical behavior for mathematical items, with explicit physics
extensions. Imported original mathematical repair receipts are verified against
their original source by the unchanged mathematical repair verifier.

These helpers are deliberately separate so physics changes do not alter the
mathematics workflow. See ../../physics/SCHEMA.md and ../../physics/WORKFLOW.md.
