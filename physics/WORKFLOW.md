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

The Step-1 prerequisite-drift review uses the registered `gpt-6-luna-max`
profile (GPT-6 Luna with max reasoning effort).

The first physics prose-scaffold splice is recorded in
`research/prose-scaffold-splice.json`. Its 13 `research/plan-*-track.md` design
indexes connect canonical page IDs to the complete research prose, inventories
and supplier ledgers. Like mathematics future tracks, planned A/B pages keep
empty item arrays until scaffolding and authoring. The source inventories retain
their exact claim scope and qualifications. Reproduce the mechanical splice with
`python3 physics/research/splice-prose-scaffolds.py --write` from the repository
root; it refuses to overwrite an independently changed plan.

Use `frontier --next --max-pairs 10000` to list every currently eligible pair
before the normal 80-pair run cap. Eligibility uses the engine's strictly
greater-than-95% same-category publication rule; cross-category supplier edges
remain declared and require ordinary Step-1 prerequisite resolution.

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

Physics role briefs, task templates, judge conventions, and output schemas mirror
the current mathematics engine prompts. Role duties are inline, with physics
content requirements prepended and tool paths routed to the private physics tools.
Run `node tools/physics-support/sync-agent-prompts.mjs` from the repository root
after mathematics prompt changes; add `--check` to verify alignment.

`frontier --next` selects up to 80 pairs by default and `plan` enforces the same
cap. `physics-autopilot.config.json` limits concurrent workers across all stages
to 30 through `concurrency` and `globalConcurrency`.

Run-specific `research/RUN-owner-authoring-direction.md` is binding on drift,
scaffolding, review, and authoring workers. Create it before planning or run
`refresh-tasks --run RUN --force` before dispatch so every generated stage task
names it; preserve the approved pair scope and exact supplier obligations.

Item and page gates select only the current run's manifests through the private
`frontier-item-gate.mjs` wrapper. Suppliers remain graph context; unrelated
imported mathematics is not a formatting, audit, or repair subject. Plan gates
also overlay current manifests before the Step-4 splice. Missing, malformed,
duplicate, empty, or unknown selections fail closed. During planning only,
nonempty page manifests may have empty item arrays; item gates require populated
inventories and resolve their subjects against authored carriers. Scaffold
content policy checks dependency structure before item carriers exist. The scoped
external-item gate uses strict manifest mode at Step 1 for recorded-unproved,
external-reference, and fallback provenance metadata, then validates full authored
carriers after authoring.

Native physics-content gates also scope original-source drift to the current
run. All pinned local snapshots retain their byte hashes, mathematical
classification, and publication checks. Relevant original suppliers remain
hash-bound through actual authored edges, current scaffold edges, definition
discharges, used aliases, and prerequisite/home pages. Unrelated original
updates cannot hold the run; used identity ambiguity, changed supplier homes,
relevant raw drift, missing originals, and publication withdrawals remain fatal.
Standalone mathematics-import verification still checks every original. This
selection never refreshes imports or changes the pinned receipt.

Original-source scope traverses logical `deps` and definition `justified_by`
discharges. Nonlogical `forward_refs`/`external_refs` on an imported supplier do
not extend that prerequisite closure or require unpublished original context to
be imported. References declared by owned frontier items retain their direct
identity, original-source, and home checks without recursively acquiring the
referenced item's proof-supplier cone.

The physics-content validator follows the same distinction: a nonlogical pointer
on a pinned import may resolve in the original mathematics library, including
an original alias, without creating a local item. Owned references and logical
or definition-discharge edges cannot use that original-only context.

Every production native gate join now holds **before** attempting its complete
battery, after all native and adopted writers drain. `pause-at` remains a stop
after a stage and cannot replace this boundary. The controller writes
`STATE_DIR/owner-gate-request.json`; the owner performs a fresh mathematical
review against its current snapshot, then writes
`STATE_DIR/owner-gate-receipt.json`. The engine validates and consumes that
receipt once. A failed battery, ordinary retry, changed input, or controller
crash after consumption requires a new attempt request and fresh review. The
engine retains its normal full failure diagnostics, repair routing, and gate
history. This control neither dispatches reviewers nor proves mathematics.

The request records the actual current manifest frontier, supplier-before-consumer
item order, item carrier and manifest hashes, scoped supplier/current original
hashes, native gate input files, and the exact complete resolved battery.
Step-7 adapters retain their frozen subject selection; current-manifest native
wrappers retain their current selection, and review covers their union. Outside
suppliers remain prerequisite context. Pre-author claims bind their manifest
and an absent carrier explicitly; plan-only gates require explicit plan review.
An item gate cannot authorize an empty subject selection. Runtime reports,
observer logs, and authorization requests are not mathematical inputs.

An owner receipt has this shape (every requested item must appear once, in the
request's order):

```json
{
  "version": 1,
  "attempt": "COPY_CURRENT_REQUEST_ATTEMPT",
  "snapshotSha256": "COPY_CURRENT_REQUEST_SNAPSHOT_HASH",
  "reviewer": "owner identity",
  "writersDrained": true,
  "writerScopes": [],
  "reviewStartedAt": "ISO timestamp at or after request.createdAt",
  "reviewedAt": "ISO timestamp after the review",
  "items": [
    {
      "id": "def-example",
      "carrierSha256": "CURRENT_REQUEST_ITEM_HASH_OR_NULL",
      "manifestSha256": "CURRENT_REQUEST_MANIFEST_CLAIM_HASH_OR_NULL",
      "verdict": "sound",
      "review": "Current mathematical argument, qualifications and supplier checks.",
      "evidence": [{ "path": "research/current-review.md", "sha256": "CURRENT_FILE_SHA256" }]
    }
  ]
}
```

For plan-only gates, also supply `planReview` describing the current plan review.
Evidence paths resolve against the physics workspace (absolute paths are also
accepted). Each item needs actual current review evidence; an old unchanged
certificate, an omitted item, an empty explanation, or a partial frontier cannot
satisfy the receipt. The owner must drain external repair writers and attest no
writer scopes remain. Native writers are checked independently by the engine.
The engine rehashes the entire selected snapshot after validating all receipt
rows and evidence, then archives the consumed request and receipt under
`STATE_DIR/owner-gate-history/ATTEMPT.json` before starting the battery. Never
copy verdicts into a new attempt without the required current review.

Logical dependency order uses `deps`. Definition discharges through
`justified_by` remain current, hash-bound prerequisite context and may point to
a lemma whose logical dependencies include the definition. Their context
traversal is cycle-safe; genuine logical dependency cycles still hold the gate.
Before authoring, a selected local supplier page's actual manifest and absent
carrier are bound explicitly. Missing external prerequisite pages remain fatal.
Native comma-separated and glob path arguments, implicit run-local readiness and
certification inputs, and the current Step-7 certification's transitive evidence
are also bound. Resolved descriptors authorize and execute the same battery,
including its advisory remainder. Durable consumed history prevents authorization
replay even if the controller crashes before replacing the request file.
