# Physics build operations

The deterministic `tools/physics-autopilot/` engine owns dispatches and transitions. The
approved build checklist is [research/workflow-rebuild-plan.md](research/workflow-rebuild-plan.md); consult it when changing
this workflow. Physics and its sibling engine have separate revisions,
worker prompts, supporting tools, content and run state.

## Six-step workflow

| Step | Work | Agents and handoff |
|---|---|---|
| 1 | Prerequisite drift, scaffolding and complete initial authoring | Existing drift and scaffolding agents; authored items, A/B pages, contracts, source evidence and manifests |
| 2 | Scope and prerequisite review/repair only | Luna-max native reviewers/repairers; Sol 6.1 medium escalation repairs; orchestrator owns metadata and recertification |
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

Step 2 workers perform only scope/prerequisite review, source repair and
escalation. Each batch has a read-only `scope-reviewer` and a native
`scope-repairer`, both `gpt-6-luna-max`; reuse their respective sessions where
available. Every review covers the entire current batch, including additions
and complete A/B pages, before returning one consolidated substantive report.
Significant unmet prerequisites, insufficient scope, desired outside changes
and unresolved uncertainty escalate to the owner.

The native sequence is review/accept -> repair -> review/accept -> repair ->
final review/accept: at most three reviews and two local repairs. A failed third
review holds for escalation resolution. Delegated escalation repair uses
GPT-6.1 Sol medium and at most two owner-repair rounds. A resolved escalation is
accepted directly without another engine review. Failed processes and retries
do not spend or reset successful review/repair counters, and owner resolution
never refunds rounds or falsifies a worker verdict.

There is no prerequisite-acceptance dispatch barrier in Step 2. Share up to
30 active workers among reviews, native repairs and delegated escalation
repairs, and refill each available slot immediately. Inspect actual suppliers
before their consumers within each repair. Independent write/read scopes may
run concurrently; overlapping source or consumer scopes wait for the active
writer to finish. Repairers work in private copies of authorized source files,
and the controller integrates their source edits. Imported sources remain
read-only. Preserve approved claims, inventory promises and pair/page identities;
necessary intermediate results must be proved rather than difficult scope dropped.

Whenever an original Statement/Definition changes, the same agent traces and
checks all direct and indirect consumers using old/current dependencies, aliases
and nonlogical uses. Physical public-interface changes have the same duty in
physics. Review actual supplier uses and assumptions; make necessary surgical
repairs within the authorized source scope and escalate required outside edits.
Every affected consumer appears in the substantive result, and a subsequent
native reviewer checks the preceding local repair's consumer dispositions.

Workers have no hashing, rehashing, certification, recertification, numeric-level
reconciliation, manifest/coverage/proof-contract maintenance, evidence-ledger or
automated formatting/validator duties in Step 2. Their lightweight result contains
only identity, prepared inventory, round, decision, defect types, concise findings
and required consumer dispositions. The optional legacy `input_sha256` schema
field exists only to accept already-running workers' old reports; new workers do
not compute or report it. Honest uncertainty, rigorous complete arguments and
faithful source use remain substantive obligations.

The engine retains only the scheduling, private-write integration, routing and
bounded-loop counters needed to coordinate this work. Minimal pass receipts
record dispositions and counts. The orchestrator owns all metadata reconciliation,
formatting/certification and pre-battery recertification after source workers drain;
these are not extra worker tasks or review rounds. Existing manifests can serve
as navigation context without becoming worker maintenance obligations.

Process every pair through its bounded loops, then drain workers and write
`research/RUN-step2-owner-pass.json` before pausing. Exhausted escalations remain
explicit holds and must be resolved before the full battery. The owner alone
authorizes that battery and advancement to Step 3 after the orchestrator's work.
If further substantive work is resumed, its completion produces
`RUN-step2-owner-battery-ready.json` and pauses again before the battery.

After resolving a hold, the owner may record direct acceptance from the content
workspace:

```bash
node tools/physics-support/batch-scope-review.mjs owner-resolve --run RUN --batch N --decision accept --reviewer OWNER --reason 'Exact resolution'
```

This records resolved defects and affected consumers without another engine
review or a counter reset. Historical `--decision continue` commands also accept
directly. Apply owner resolution only after active repair writers drain; minimal
engine completion coverage follows at the next controller tick.

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
