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
| 3 | Independent review | Batch readers, refuters and adjudicators, final validation and mechanical closure |
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

Step 3 uses independent batch review and routed adjudication after authoring in
dependency-level order. Step 3b is retired in both engines: there is no separate
cross-batch edge review, impact-review window or unfinished cross-review lane.
The final sequence is `3a-baseline` then `3a-close`. The existing Step 3a
validation battery remains in adjudication. Mechanical closure checks exact
current item, contract, manifest and page carriers against the post-gate
snapshots and plan correspondence; it freezes evidence without repeating the
passed review or introducing another gate battery. Source and
empirical qualifications survive regeneration.

New closure receipts use version 3 with basis `dependency-ordered-step3a` and
bind the exact Step 3a evidence. Historical version-2 receipts remain verifiable
against their original evidence, including completed Step 3b work. Retiring the
stage grants no new review coverage, clears no confirmed defect and leaves
published-repair handoffs for their later independent judgments. Cross-batch
consumer defects found during review go to the owner for supplier-first repair;
they are not deferred to a retired stage.

An existing successful Step-3a `accepted_repair` verdict may retain its native
meaning after accompanying metadata reconciliation through explicit
`source_identical_acceptance_continuities` entries in the run's owner repair
evidence. Each guard binds the genuine native completion, assignment, report,
archived accepted decision and immutable reader-post carrier, requires exact
current source claim/dependency mirrors and an actual strict contract pass,
and preserves missing historical manifest projections as explicitly unknown.
This records acceptance continuity, never new worker coverage; it neither
stamps decisions nor waives any other gate.

The ordinary continuity case requires identical raw source bytes. A separately
hash-proven complete reader-post source preimage may also establish metadata
continuity when the entire current body is exactly identical and parsed
frontmatter differs only in `dependency_level`, `verification` or
`provenance`. Status, run, dependencies, sources, assumptions, proof strategy
and all other fields remain unchanged. Owner/delegated audit, source-audit and
published-repair markers may not be added or changed through this exception.
An unknown source delta is never classified as metadata from hashes alone.
A definition, algorithm or remark with no numbered proof may retain the exact
original/current null contract; proof-bearing missing contracts remain errors.

For a validated same-ID prerequisite rehome, native assignment and reader-post
snapshot bindings retain their original batch. Only current manifest and
contract lookups use the authenticated current home. Mechanical source-level
or verification changes require the complete archived before source to match
the immutable post-reader raw hash and the actual current mathematical source
to match the authenticated before/after rehome archives. Invalid receipts,
changed proof bodies and unsupported current contract inputs fail closed.

When a reader repairs some defects but cannot resolve another in the same
draft, the owner may retain its original open finding through
`RUN-step3-owner-partial-reader-repairs.json`. This routing-only record binds
the genuine successful reader result, unchanged report, frozen post-reader
snapshot and exact remaining findings/carriers. Both touched and reader
obligations remain; normal independent adjudication, ledger closure and all
gates are still required. Missing or changed authority fails closed.

A definition may acquire its first real proof contract after its frozen
pre-reader snapshot; routing preserves the original null contract hash and
requires the current contract. A reader's intermediate supplier observation
whose source bytes were not retained may be registered in
`RUN-step3-owner-unbound-reader-observations.json`, bound to the exact successful
reader receipt and unchanged finding/report. The original reported digest stays
visible, but the observation is explicitly unbound: historical uncertainty,
independent current-source review, ledger closure and all gates remain required.

The existing one-shot native refuter coverage continuation also handles a
completed report that omits an assigned subject. Archive the exact original
report/result, drain writers and bind the complete current refuter inventory
before dispatch. A truncated native diagnostic tail must match a substantial exact
raw archived-report suffix containing the not-opened and flagged fields; the
unchanged hash-bound full report supplies the original observations. Only a fresh
successful native correction result supplies coverage; never add an unread subject to the old report or waive collection.

Step 4's read-only
batch digests use `RUN-batch-N-step5-context.json`; a digest from another batch
cannot cover the inventory, and retries target only failing batches.

Step 5 retains the round-based adjudication/repair engine, supplier-before-consumer
maintenance, frozen frontier guards and its complete gate battery. The additional
`proof-contract-coverage` mechanical check still requires a contract for each
actual proof-bearing carrier. No new substantive review gate is added. Step 6
performs mechanical contract closure and emits `step6-` owner-report artifacts;
its readiness and closeout commit remain evidence-bound. Publishing/pushing are
owner actions, separate from this build.

Closeout may close an unchanged published prerequisite ownership claim through
`research/RUN-published-noop-closure.json` (`unchanged-published-ownership-closure`,
version 1). This separate owner-authorized receipt binds the exact claim ledger,
original frozen Step-3 closure, unique claim, current raw carrier and canonical
pre-edit hash, and an ancestor publication committed before the ownership claim.
Native Step-3 closure verification must still pass. This records no mathematical
repair, audit, acceptance or initial publication. A changed canonical hash still
requires the ordinary recorded published repair; neither claim nor native evidence
is rewritten. The no-op receipt itself belongs to the sealed closeout scope.

Owner-authorized `RUN-closeout-operational-contexts.json` may omit exact temporary
`overlay`/`shadow` resolver directories beneath the run's owner repair evidence
from the scoped Git commit. Each directory binds its physical tree (file bytes,
entry modes and symlink target bytes without dereferencing), reason and external
hash-bound proposal evidence. Required content/receipts, actual published-repair
inputs, frozen Step-3 artifacts, additional owned paths and prior committed
closeout paths cannot be excluded. These contexts remain on disk, retain full
report protection, and become outside-preservation subjects; the ordinary
canonical-path symlink refusal remains unchanged.

The mathematics Step-6 report-integrity snapshot excludes the root-relative
`physics/` namespace owned by the independent physics workflow. Mathematics
sources, shared tools and run evidence retain their existing protection; the
physics reporter continues to seal its own content root. When correcting an
overbroad report baseline, archive its original exact bytes before taking a
fresh native snapshot and retrying the gate.

Worker supporting evidence for mutable batch manifests and proof contracts is
archived as exact content-addressed bytes at collection. The original worker
report remains unchanged; later native repairs may update the live batch carrier.
The frontier-44 six-step historical handoff additionally requires exact archived
preimages, unchanged native origin reports, packs and successful dispatches, and
archived successor deltas within completed native repair assignments. This
preserves historical evidence only; current review contexts and every gate still
apply to the actual current carriers.

The same run's gate-2 ledger input retains its exact archived preimage through
the authenticated gate-3 schema repair and seven owner-attributed append-only
severity corrections. The historical certificate and native reports stay
unchanged. This byte-history bridge grants no current ledger-schema exemption;
the ordinary strict ledger checks still apply to the current ledger.

The frontier-44 six-step defect ledger retains its original frozen Step-3
taxonomy bytes. `defect-ledger validate` and `check` interpret the historical
aliases only after matching the original 1,284-row projection's pinned hash
and successfully verifying the native Step-3 closure. Validation maps proof
and fact loci to `proof-step` and `facts-block`, omitted example hypotheses to
`statement`, the source DOI and page inventory loci to `frontmatter`, and the
page Objective to `page-summary`. Original proof-gap/derivation/field labels
map to `unsupported-inference`, the compound inference/type label to
`invalid-inference`, `alpha` to `group-alpha`, and `repaired` to `fixed`.
All original labels and evidence remain in the ledger; no receipt is resealed.
Every structural, severity, ownership and closure check still applies, and new
appends and later Step-5 rows retain the strict schema.

## Run controls and cutover

Use `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts` with the ordinary
`plan`, `doctor`, `start`, `status`, `pause`, `resume` and `retry` commands.
`doctor` and generated task checks can run before authoring; they do not prepare
or spend review rounds. No stage may install new prompts beneath a live old run.
The new revision is `six-step-v1-construction-scope`. Start a fresh run and state directory; historical
receipts/revisions do not satisfy the rebuilt pipeline. Legacy authoring-prefix
migration and ready-pair initial-authoring variants are not current entry routes.
Preserve historical run evidence rather than relabeling it. The retained authoring claim-resolution API is documented in [tools/step3-owner-creation.md](tools/step3-owner-creation.md); it supplies historical origin continuity only.

Guarded same-ID relocation of proved prerequisites uses [tools/step3-owner-rehomes.md](tools/step3-owner-rehomes.md). It preserves the original Step-3a obligation batches while hashing actual current homes; it grants no new review coverage.

Current Step-3 owner repair helpers use `tools/auditor-created-items.mjs
owner-create --run RUN --step 3 --id ITEM --evidence research/JSON` after
stable source, manifest and proof-contract integration. Immutable origins bind
baseline exclusion, the actual distinct author, assignment/authorship/escalation
evidence and all six current carrier hashes; creation records no independent
review or native execution coverage. Routing also permits an ownership-certified
draft generated counterexample with `generation.role: counterexample`, an actual
refutation and no logical consumers in current frontier manifests or authored
sources. This narrow exception retains ordinary independent review and every
gate; historical scopes, baselines and worker receipts remain unchanged.


An explicitly owner-authorized restored frontier may retain its original
`pipeline_run` markers. Step-3 dependency routing recognizes those draft IDs
only through `research/RUN-continuation.json`: exact source run, nonempty
hash-bound original manifest archives, matching inventory counts, and
`historical_execution_coverage_adopted: false` are required. Current manifests
must still give a unique owner. This grants content ownership only; old worker,
review and gate receipts never satisfy the new run. Other run markers and
unlisted IDs remain rejected.

Item/page validators select current run manifests. Outside suppliers stay
prerequisite context; do not validate or repair unrelated content. Closeout checks
the engine's content commit. All owner-gate authorization remains one-attempt,
current-hash-bound and formatting/metadata-only under CLAUDE.md.

Proof-layout subjects are exactly the nonempty current manifest inventory, with
unique manifest and actual page ownership. Extra page entries are allowed only
as explicitly declared published prerequisite context in
`research/RUN-proof-layout-context.json`, bound to the owner-approved
`RUN-rehomed.json` evidence and current source hashes. These context inputs are
sealed by the receipt but do not receive frontier proof-layout audits; unknown,
duplicate, unpublished or stale context entries fail closed.

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

Worker supporting hashes for shared defect ledgers also bind immutable archived
bytes at collection. Later ledger additions preserve that historical support;
they do not replace validation of the current ledger.
