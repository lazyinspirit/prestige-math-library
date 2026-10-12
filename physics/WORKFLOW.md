# Physics build operations

The deterministic `tools/physics-autopilot/` engine owns dispatches and transitions. The
approved build checklist is [research/workflow-rebuild-plan.md](research/workflow-rebuild-plan.md); consult it when changing
this workflow. Physics and its sibling engine have separate revisions,
worker prompts, supporting tools, content and run state.

## Six-step workflow

| Step | Work | Agents and handoff |
|---|---|---|
| 1 | Prerequisite drift, scaffolding and complete initial authoring | Existing drift and scaffolding agents; authored items, A/B pages, contracts, source evidence and manifests |
| 2 | Scope and prerequisite review/repair | One Luna-max reviewer and one Luna-max repairer per batch; complete current batch acceptance |
| 3 | Independent review | Batch readers, refuters and adjudicators, followed by cross-batch review and closure |
| 4 | Batch review and judging | Exactly one read-only Sol 6.1/high reviewer per batch plus the judge sweep |
| 5 | Adjudication and repair | Existing native repair, consumer maintenance, certification and gate routes |
| 6 | Closeout | Contracts, pathways, stamps, readiness, evidence, owner report and local closeout commit |

The former Step 2 assignment stage and former Step 4 splice/integration stage
are deleted. Necessary group metadata is generated mechanically during planning.
Accepted manifests are transcribed into the canonical plan at Step 2's existing
mechanical join, followed by the post-authoring snapshot. Neither operation has
its own agent or workflow stage. The pre-authoring snapshot runs before Step 1
construction. Initial item and page authoring happens entirely in Step 1;
later stages retain their substantive review, repair and finalization duties.

## Construction and escalation

Step 1 keeps existing drift/source recovery, readiness, scope, page-capacity and
owner-hold mechanisms and model assignments. Both drift reviewers and authors
must escalate significant unmet prerequisites directly to the owner, giving the
smallest missing supplier, consuming claims/steps and affected consumers.
Scaffolding agents fully author all assigned items, pages and proof contracts;
a proof strategy or successful process alone is not a completed carrier.
Readiness records bind the finished carriers. Supplier batches release their
consumers only after nonempty authored inventories and current readiness exist.

Batch levels are computed mechanically during planning, recomputed after drift
materialization and before construction dispatches, and recorded in
`research/RUN-batch-dependency-levels.json`. The engine checks the current graph,
including declared carrier dependencies, and waits for completed, current supplier
content before releasing consumers. This adds no agent stage.

Item `dependency_level` is determined before writing item/page carriers, recorded
and independently checked in Step 1: zero
without in-run logical suppliers, otherwise one plus the maximum supplier level.
External suppliers remain context. No rebatching or additional agent stage
is introduced. Logical dependencies must agree between authored bodies and
manifests; aliases resolve to canonical suppliers. Definition discharges and
nonlogical links are hash-bound context, not extra logical scheduling edges.

## Whole-batch scope/prerequisite loop

Each batch has two roles: `scope-reviewer` (read-only) and `scope-repairer`
(batch-owned writes), both `gpt-6-luna-max`. Reuse their respective sessions
where available. The reviewer examines the **entire current batch on every
round**, including added items and A/B pages, before returning one consolidated
report. Significant unmet prerequisites, insufficient scope, desired outside
changes and unresolved uncertainty escalate directly to the owner.

The sequence is review/accept -> repair -> review/accept -> repair -> final
review/accept. A failed third review holds for the owner. Native history under
`research/RUN-scope-review/batch-N/` persists the three-review/two-repair cap
through crashes, retries and redispatches. Worker process retries never reset
these counters. A failed process cannot advance the loop. Owner resolution never
refunds rounds or falsifies a worker's acceptance.

Repairers may add, delete or edit locally owned items in their batch, maintaining
owned manifests, pages, coverage, contracts and dependency inputs. Preserve the
approved claims and pair/page identities; do not delete promised scope merely
to clear a finding. Desired outside-batch edits escalate. The dispatcher protects
native loop history and reports; native collection rejects outside-batch edits.
Reviewers can run concurrently on independent batches; repair write waves drain
other batch workers and run singly so write boundaries have unambiguous ownership.
The existing 30-agent global limit and 80-pair frontier limit remain.

Use the actual logical supplier graph to finish prerequisite batches before
consumer batches; within a batch follow the recorded item levels and pair order.
Dispatch newly eligible pairs at the next available scheduling tick. A native
owner hold blocks its own batch and its dependent batches; independent ready
batches continue. Held batches remain owed and must be resolved before the
stage's full gate battery. The existing repair write-wave isolation still applies.
After the frontier pass reaches accepted, escalated, or explicitly prerequisite-
blocked dispositions and all workers drain, the engine writes
`research/RUN-step2-owner-pass.json` and pauses before attempting Step 2's
battery. A blocked disposition records unreviewed work honestly. Native bounded
review/repair loops and escalation histories remain intact. The owner resolves
escalations, resumes affected remaining loops as needed, and chooses when to
authorize the full battery through the existing owner recertification receipt.
Owner resume and any armed post-Step-2 pause control progression to Step 3.
If the owner resumes remaining native loops, their completion produces a fresh
`RUN-step2-owner-battery-ready.json` handoff and pauses again before the battery.
Scheduling reads current manifests and the relevant authored carriers. Canonical
dependency IDs resolve directly; the corpus alias index is loaded only when a
used dependency requires alias resolution. Empty pre-authoring inventories do
not require a corpus item scan. Each call observes current bytes; no dependency
cache survives changes between controller ticks.

Construction readiness reuses a run-local snapshot and per-item decisions across
controller contexts while their inputs remain unchanged. Every use checks current
manifest, coverage, plan, consumed supplier and missing-dependency file stamps;
receipt stamps also invalidate cached decisions. Changed inputs clear dependency
bytes and decisions together. If alias lookup was needed, the entire item inventory
is stamp-bound and its change also rebuilds alias resolution. This cache accelerates
scheduling without keeping acceptance current after an input change. A failed
artifact pass discards its cache, including any partially built alias index.
Recompute and reconcile dependencies after edits. Blocked suppliers hold their
consumers. Acceptance binds transitive supplier bytes; changed inputs invalidate
it and require owner resolution before another handoff.

Whenever an original Statement/Definition changes, **both roles trace and check
all direct and indirect consumers**, using the union of old/current dependencies
and aliases. Physical public-interface changes have the same duty in physics.
Repair affected owned consumers and escalate desired outside changes. Every
required consumer must appear in the repair and subsequent reviewer report.

Receipts are lightweight: exact identity/inventory, round, verdict, current input
hash, defect types and one-sentence findings/repairs. No detailed per-item audit
narratives or self-awarded judge stamps. Both prompts require unbiased assessment,
honest uncertainty, complete authoritative source reading when needed, and logical
validity overriding literature authority.

After the owner resolves a hold, from the content workspace run:

```bash
node tools/physics-support/batch-scope-review.mjs owner-resolve --run RUN --batch N --decision continue --reviewer OWNER --reason 'Exact resolution'
```

`continue` resumes remaining reviews without resetting counters. After three
reviews, the owner must independently finish the whole-batch/consumer checks and
use `--decision accept`; the exact current hash and inventory are recorded.
Resume/retry the same controller only after this explicit resolution. An owner
acceptance receives native completion coverage at the next controller tick.

## Independent review through closeout

Step 3 keeps the existing independent batch review, routed adjudication and
unfinished cross-review continuation. A partial process handoff is not completed
artifact coverage; continuations require actual completed-obligation progress.
Source and empirical qualifications survive regeneration. Step 4's read-only
batch digests use `RUN-batch-N-step5-context.json`; a digest from another batch
cannot cover the inventory, and retries target only failing batches.

Step 5 retains the round-based adjudication/repair engine, supplier-before-consumer
maintenance, frozen frontier guards and its complete gate battery. The additional
`proof-contract-coverage` mechanical check still requires a contract for each
actual proof-bearing carrier. No new substantive review gate is added. Step 6
performs mechanical contract closure and emits `step6-` owner-report artifacts;
its readiness and closeout commit remain evidence-bound. Publishing/pushing are
owner actions, separate from this build.

## Run controls and cutover

Use `node tools/tsx-run.mjs tools/physics-autopilot/bin/autopilot.mts` with the ordinary
`plan`, `doctor`, `start`, `status`, `pause`, `resume` and `retry` commands.
`doctor` and generated task checks can run before authoring; they do not prepare
or spend review rounds. No stage may install new prompts beneath a live old run.
The new revision is `physics-six-step-v1-construction-scope`. Start a fresh run and state directory; historical
receipts/revisions do not satisfy the rebuilt pipeline. Legacy authoring-prefix
migration and ready-pair initial-authoring variants are not current entry routes.
Preserve historical run evidence rather than relabeling it.

Item/page validators select current run manifests. Outside suppliers stay
prerequisite context; do not validate or repair unrelated content. Closeout checks
the engine's content commit. All owner-gate authorization remains one-attempt,
current-hash-bound and formatting/metadata-only under CLAUDE.md.

## Pre-gate recertification

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
native gate input files, and the exact resolved battery. Step-5 frozen subjects
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

## Physics isolation and prompts

The physics cwd, content and state are `physics/`; never point the physics engine
at the mathematical repository root. Imported mathematical snapshots and original
mathematical suppliers are read-only. Preserve classification, exact model
postulates, empirical premises, uncertainty and statistical qualifications.
Physics theorems and thought experiments require complete conditional deductions;
postulates and reported experiments receive the appropriate source reviews.

Physics role prompts are independently owned.
`node tools/physics-support/sync-agent-prompts.mjs --check` checks their mandatory
physics guidance; running it without `--check` refreshes that guidance only. It
never overwrites the rebuilt role duties with mathematics prompts.

## Algorithms

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks. In physics, algorithms may have either domain like definitions. Pure mathematical properties use mathematical result kinds and only mathematical prerequisites; consequences relying on physical premises use `physics-theorem` (or `thought-experiment`). Preserve physical scope and empirical qualifications.
