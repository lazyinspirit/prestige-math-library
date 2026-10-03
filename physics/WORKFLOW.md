# Physics build operations

The physics fork uses the same Steps 0–9 and deterministic transition engine as
its mathematical baseline. It has independent supporting tools, briefs, schemas,
content, and run state. No physics run may mutate the mathematics workspace.

From the repository root:

```bash
node tools/tsx-run.mjs tools/physics-autopilot/bin/autopilot.mts init
node tools/tsx-run.mjs tools/physics-autopilot/bin/autopilot.mts frontier --next
node tools/tsx-run.mjs tools/physics-autopilot/bin/autopilot.mts plan --run RUN --pairs PAGE_IDS
node tools/tsx-run.mjs tools/physics-autopilot/bin/autopilot.mts doctor --run RUN --state-dir physics/.physics-autopilot/RUN
node tools/tsx-run.mjs tools/physics-autopilot/bin/autopilot.mts start --run RUN --state-dir physics/.physics-autopilot/RUN --detach
```

`--repo` defaults to physics/. Never point it at the mathematics repository root.
Without --state-dir, state defaults to physics/.physics-autopilot/. Keep the same
run and state-dir throughout a run. The fork has its own workflow revision and
physics-autopilot.config.json; mathematical receipts are not reusable.

`init` imports byte-identical, read-only snapshots of published mathematical
items and pages and records hashes and their original source root. It refuses
to overwrite local authorship or altered imports. Run it before planning and
only reconcile refreshed suppliers outside an active run. Gate checks compare
both the snapshots and originals to the pinned hashes. Imports remain canonical
mathematical IDs, not independently authored copies.

Edit research/plan-spec.json to plan physical A/B pages and reference imported
math pages through P entries. Each local category and plan page declares its
library. Local mathematical suppliers may be authored during a physics run,
with purely mathematical dependencies. Ordinary supplier ordering, page
prerequisites, B-leaf rules, and all source-retrieval gates remain in force.

Every stage adds a mandatory physics-content gate: classification, kind prefixes,
mathematical boundary, relation resolution, DAG, and class-specific structure.
Steps 1–2 validate the plan; later stages validate authored content. Class-specific
item contracts and judge instructions distinguish source reviews from proofs.
Proof layout may have zero steps only when every scoped item is explicitly
nonproof; it cannot waive missing proofs for physics theorems or thought experiments.

Use the same pause/resume/status/retry controls through the physics entrypoint.
Outside the authorized Step-7 loop, gate failures remain owner-held. Publication
and pushing remain owner actions. Closeout stages only workspace changes and
refuses unrelated staged changes. See ../WORKFLOW.md for unchanged supervision,
repair-loop, source-retrieval, and recovery semantics; replace engine/support
paths with their physics equivalents.

Website integration and publication of the physics view are separate work.
This workflow builds and verifies physics content without altering math behavior.

Physics worker prompts require reading ../PHYSICS-CONTENT-MODEL.md, including
the statistical-evidence and double-slit section. Stateless judges receive the
concise physics agent instructions, including the EM and double-slit examples,
directly in their context. Experiment contracts require a
statistical_inference review; qualitative sources must remain qualitative.

Imports also pin the mathematics library's existing B-leaf legacy policy.
Nonlogical links in imported mathematical prose may refer back to unpublished
mathematical context in the original library; those records are not imported as
logical suppliers. New physics items must resolve their own references normally,
and unpublished mathematical context cannot satisfy a physics prerequisite.

Physics agents must also follow the mathematical-rigor and explicit-definitions
section of ../PHYSICS-CONTENT-MODEL.md. Every worker brief includes this instruction;
stateless physical judges receive its concise requirements directly. Define technical notions
using the appropriate mathematical structures and supply missing prerequisites
before accepting their consumers.

Physics prompt templates target at most 500 words each. Longer role duties live
in required `agent-reference/` files linked from the corresponding prompts.
Generated assignments and evidence/source bundles are separate from this template
limit; preserve their complete scope and contracts.
