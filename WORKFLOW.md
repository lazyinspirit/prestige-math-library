# Mathematics build operations

The deterministic `tools/autopilot/` engine owns dispatches and transitions. The
approved build checklist is [research/workflow-rebuild-plan.md](research/workflow-rebuild-plan.md); consult it when changing
this workflow. Mathematics and its sibling engine have separate revisions,
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

Construction readiness retains its snapshot and receipt-stamped decisions across
fresh controller contexts belonging to the same configuration and frontier.
Manifest, coverage, plan, consumed supplier and missing-dependency file stamps
guard reuse. When alias lookup is used, the entire item inventory is also
stamp-bound: any change rebuilds alias resolution together with dependency bytes
and readiness decisions. Failed input scans discard partial cached inputs and
keep the scaffold incomplete. Scheduling caches never certify changed inputs.

Planning and the existing drift-apply join write `research/RUN-batch-dependency-levels.json` before construction. Before each Step 1 dispatch the engine recomputes this artifact from current page requirements and manifest/carrier logical dependencies, rejects batch cycles, and includes the batch level and suppliers in the worker task. Batch level is zero without in-run suppliers, otherwise one plus their maximum level. Existing transitive supplier completion, authored-carrier/readiness and writer-drain guards still release consumers; numeric levels do not replace them. External suppliers remain context.

Item inventories and logical dependencies are determined in scaffold manifests before item carriers are written; authors compute labels there and construct carriers in ascending item level. Item `dependency_level` is recorded and independently checked in Step 1: zero
without in-run logical suppliers, otherwise one plus the maximum supplier level.
External suppliers remain context. No rebatching or additional review stage is introduced. Logical dependencies must agree between authored bodies and
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
node tools/batch-scope-review.mjs owner-resolve --run RUN --batch N --decision continue --reviewer OWNER --reason 'Exact resolution'
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

Use `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts` with the ordinary
`plan`, `doctor`, `start`, `status`, `pause`, `resume` and `retry` commands.
`doctor` and generated task checks can run before authoring; they do not prepare
or spend review rounds. No stage may install new prompts beneath a live old run.
The new revision is `six-step-v1-construction-scope`. Start a fresh run and state directory; historical
receipts/revisions do not satisfy the rebuilt pipeline. Legacy authoring-prefix
migration and ready-pair initial-authoring variants are not current entry routes.
Preserve historical run evidence rather than relabeling it. The retained authoring claim-resolution API is documented in [tools/step3-owner-creation.md](tools/step3-owner-creation.md); it supplies historical origin continuity only.

Item/page validators select current run manifests. Outside suppliers stay
prerequisite context; do not validate or repair unrelated content. Closeout checks
the engine's content commit. All owner-gate authorization remains one-attempt,
current-hash-bound and formatting/metadata-only under CLAUDE.md.

## Pre-gate recertification

Outside Codex supervisors follow CLAUDE.md: resolve escalations before gates and
perform a fresh dependency-ordered formatting/metadata-only pass immediately
before every attempt. This pass is not a detailed mathematical review. Only
failed subjects and their downstream consumers receive focused mathematical
repair; rerun the complete gate battery after repair. Keep the mathematics
engine's existing owner-held failure/retry controls. Physics has its own native
one-attempt authorization receipt protocol; its receipt files are not math
workflow inputs.

## Algorithms

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
