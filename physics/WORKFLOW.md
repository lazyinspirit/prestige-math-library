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

Every content stage adds a mandatory physics-content gate: classification, kind prefixes,
mathematical boundary, relation resolution, DAG, and class-specific structure.
Pre-author joins `1-drift`, `1-drift-apply`, `1-scaffold`, `3a-scope` and
`3-baseline` validate the plan overlaid with current manifest scaffolds, without
requiring item or page carriers that have not yet been authored. The completed
`3b-author` join and every later physics-content gate require actual carriers
and class-specific body checks; they do not use scaffold plan mode.
Step 2 is metadata bookkeeping with only its structural assignment gate. Class-specific
item contracts and judge instructions distinguish source reviews from proofs.
Proof layout may have zero steps only when every scoped item is explicitly
nonproof; it cannot waive missing proofs for physics theorems or thought experiments.

Step 3b item receipts use the minimal version-2 bookkeeping format described in
../WORKFLOW.md: automatic identity/hash/time, decision and owner authority, defect
types, and one concise repair sentence. Do not serialize confidence, examined
dependency lists or detailed reviews. Step 3a and later stages retain their
existing evidence requirements; legacy item receipts remain readable.

Step 2 runs `node tools/physics-support/alpha-groups.mjs --run RUN --generate`
as a native mechanical tool, with a 120-second dispatch limit. It assigns only
existing manifest batch/category metadata: keep categories together where they
fit and split larger categories into stable chunks, without load balancing,
dependency-edge optimization, source reading, content edits or item review.
Every batch occurs exactly once, at most three per group, under the capacity-derived
group cap (currently 80 for 80 batches). Alphabetic labels continue after `z`
as `aa`, `ab`, etc. Existing structurally valid assignments are preserved byte
for byte. Invalid assignments are archived with their exact prior bytes under
`research/RUN-alpha-groups-history/SHA256.json` before replacement. Group inventory
capacity does not change the separately configured global concurrency limit.
Conflicting category/capacity metadata fails explicitly. No model,
physics instructions or general Alpha brief loads during this dispatch. The sole
Step-2 gate is `alpha-groups`; historical successful Alpha result names remain
recognized and the native engine owns all transitions.

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

Every production native gate join holds **before** attempting its complete
battery, after all native and adopted writers drain. `pause-at` remains a stop
after a stage and cannot replace this boundary. Under CLAUDE.md rule 7, this
pre-gate recertification checks **formatting and metadata only**, in one
supplier-before-consumer pass. It requires no detailed mathematics or physics
review, mathematical soundness verdict, or proof/source-reading attestation.
Only an item that fails a gate and its downstream consumers receive focused
mathematical or physical checking. The native mathematical, physical, source, and independent review gates still
run their complete battery and retain their ordinary acceptance duties.

The controller writes `STATE_DIR/owner-gate-request.json`; the owner checks the
current frontier's formatting and metadata and writes
`STATE_DIR/owner-gate-receipt.json`. The engine validates and consumes that
receipt once. A failed battery, ordinary retry, changed input, or controller
crash after consumption requires a new attempt request and fresh formatting and
metadata checks. Native failure diagnostics, repair routing, and gate history
remain in force.

The request records the actual current manifest frontier, dependency-ordered
items, carrier and manifest hashes, relevant supplier/current original hashes,
native gate input files, and the exact resolved battery. Step-7 frozen subjects
and current-manifest wrapper subjects retain their existing scopes; the receipt
covers their union. Outside suppliers remain prerequisite context. Hashing proof,
source, and certification inputs preserves currency without reviewing their
mathematical or physical arguments. Runtime observer reports and authorization
requests are excluded from this input selection.

Requests and receipts use version 2 and explicitly identify the limited scope.
Every requested item must appear exactly once, in the request's order:

```json
{
  "version": 2,
  "recertificationScope": "formatting-metadata-only",
  "attempt": "COPY_CURRENT_REQUEST_ATTEMPT",
  "snapshotSha256": "COPY_CURRENT_REQUEST_SNAPSHOT_HASH",
  "reviewer": "owner identity",
  "writersDrained": true,
  "writerScopes": [],
  "reviewStartedAt": "ISO timestamp at or after request.createdAt",
  "reviewedAt": "ISO timestamp after the formatting and metadata checks",
  "items": [
    {
      "id": "def-example",
      "carrierSha256": "CURRENT_REQUEST_ITEM_HASH_OR_NULL",
      "manifestSha256": "CURRENT_REQUEST_MANIFEST_CLAIM_HASH_OR_NULL",
      "verdict": "format-metadata-pass",
      "formatting": {
        "verdict": "pass",
        "evidence": "Current structural headings, Markdown and applicable proof-step formatting checks."
      },
      "metadata": {
        "verdict": "pass",
        "evidence": "Current identity, kind, classification, provenance and declared dependency metadata checks."
      }
    }
  ]
}
```

Each check needs a nonempty, concrete explanation of the formatting or metadata
checks actually performed. The receipt validates these separate pass records;
it does not require a mathematical review narrative or reading an evidence file.
Do not invent audit stamps or claim mathematical acceptance from a formatting
pass. Pre-author items bind their actual manifest and explicitly absent carrier;
check their scaffold structure and metadata without inventing an authored body.
An item gate cannot authorize an empty subject selection.

Finite smoke obligations select named checks from
`tools/physics-support/finite-smoke.mjs` through each item's proof contract
`finite_smoke` array. Supply an exact assertion excerpt from that item's current
carrier; unknown check names and absent excerpts fail. An empty array produces
no computation and cannot establish native gate liveness. Select an authentic
bounded check of an authored assertion, rather than filling a coverage quota.
`sr-guided-ring-sagnac-worked-reunions` checks the numerical guided-ring example
at velocity ratio 3/5 and its inertial limit: it enumerates angular coincidences
on an exact rational grid, derives clock conversion from the Minkowski norm,
and derives both holonomies from rest-line orthogonality. The contract may give
`expected_return_ticks` (units pi R/(4c)) and the four `expected_*delay` /
`expected_*holonomy` rational pairs (units pi R/c). This tests the worked model's
arithmetic and conventions; it establishes neither the general guided-ring
theorem nor empirical applicability. Run its focused CLI regression with
`node --test tools/physics-support/finite-smoke-sagnac.test.mjs`.

Plan-only gates may select nonempty page manifests before item inventories exist.
Their receipts also require `planChecks` with separate `formatting` and `metadata`
records using the same `{ "verdict": "pass", "evidence": "..." } shape.
Old version-1 soundness receipts, omitted or out-of-order items, failed or missing
check records, stale hashes, and partial frontiers cannot authorize an attempt.

The owner must drain external repair writers and attest that no writer scopes
remain. Native writers are checked independently by the engine. After validating
the ordered receipt rows, the engine rehashes the entire selected snapshot and
archives the consumed request and receipt under
`STATE_DIR/owner-gate-history/ATTEMPT.json` before starting the native battery.
Never copy checks into a new attempt without the required current pass.

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
