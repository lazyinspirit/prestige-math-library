# Mathematics build operations

The deterministic `tools/autopilot/` engine owns dispatches and transitions. The
approved build checklist is [research/workflow-rebuild-plan.md](research/workflow-rebuild-plan.md); consult it when changing
this workflow. Mathematics and its sibling engine have separate revisions,
worker prompts, supporting tools, content and run state.

## Six-step workflow

| Step | Work | Agents and handoff |
|---|---|---|
| 1 | Prerequisite drift, scaffolding and complete initial authoring | Existing drift agents and GPT-6 Luna/max authors; authored items, A/B pages, contracts, source evidence and manifests |
| 2 | Review, one local repair and owner escalation | Luna-max reviewers/local repairers; at most two reviews and one repair; owner/orchestrator resolves escalations and runs gates |
| 3 | Independent review | GPT-6 Luna/max readers and refuters; GPT-6.1 Sol/medium batch adjudicators; final validation and mechanical closure |
| 4 | Batch review and judging | GPT-6.1 Sol/medium read-only batch readers plus GPT-6 Luna/max judges |
| 5 | Adjudication and repair | Existing native repair, consumer maintenance, certification and gate routes |
| 6 | Closeout | Contracts, pathways, stamps, readiness, evidence, owner report and local closeout commit |

The former Step 2 assignment stage and former Step 4 splice/integration stage
are deleted. Necessary group metadata is generated mechanically during planning.
Accepted manifests are transcribed into the canonical plan at Step 2's existing
mechanical join, followed by the post-authoring snapshot. Neither operation has
its own agent or workflow stage. The pre-authoring snapshot runs before Step 1
construction. Initial item and page authoring happens entirely in Step 1;
later stages retain their substantive review, repair and finalization duties.

The Step-1 `content-policy-scaffold` gate retains its gate identity and joins
all current run manifests in authored-carrier mode, without `--manifest-only`.
It checks the completed items' provenance, source references and generated-claim
containment, together with manifest capacity and duplicate-ID checks. The
separate `manifest-deps` gate still requires explicit manifest dependency arrays.
Future-mint checks belong before authoring; existing Step-1 carriers do not need
the later canonical-plan transcription to qualify for authored-item validation.
Subsequent `content-policy-items` gates recheck the current authored carriers.

## Construction and escalation

Step 1 keeps existing drift/source recovery, readiness, scope, page-capacity and
owner-hold mechanisms. Initial authors use `gpt-6-luna-max`; drift/source recovery
retains its existing model assignments. Both drift reviewers and authors
must escalate significant unmet prerequisites directly to the owner, giving the
smallest missing supplier, consuming claims/steps and affected consumers.
Scaffolding agents fully author all assigned items, pages and proof contracts;
a proof strategy or successful process alone is not a completed carrier.
Readiness records bind the finished carriers. Cross-pair supplier completion
does not hold initial author dispatch; nonempty authored inventories and current
readiness remain required for acceptance.

After a confirmed planning defect is repaired, the owner may resolve its exact
`drift-blocked` verdict through `research/RUN-owner-drift-resolutions.json`
(version 1, `owner-resolved-drift-blockers`, `authorized_by: owner`). The receipt
binds the unchanged native report and full archived original report, successful
original native attempt/result and prompt, original drift evidence, and current
page scope/interfaces. Each resolution names the exact page/verdict, complete
archived source preimages and changed current raw source hashes, and focused
owner acceptance evidence referencing the genuine delegated repair evidence.
Consumer dispositions cover the companion and every direct/indirect planned
consumer. Missing, stale or ambiguous bindings fail closed; acceptance satisfies
only the named planning blocker. It grants no new worker execution, proof or
review coverage, rewrites no native evidence, and leaves all scope checks,
later reviews, recertification and complete gate batteries mandatory. The schema
and scope-digest calculation are in [tools/drift-owner-resolutions.md](tools/drift-owner-resolutions.md).

Construction readiness retains its snapshot and receipt-stamped decisions across
fresh controller contexts belonging to the same configuration and frontier.
Manifest, coverage, plan, consumed supplier and missing-dependency file stamps
guard reuse. When alias lookup is used, the entire item inventory is also
stamp-bound: any change rebuilds alias resolution together with dependency bytes
and readiness decisions. Failed input scans discard partial cached inputs and
keep the scaffold incomplete. Scheduling caches never certify changed inputs.

Planning and the existing drift-apply join write `research/RUN-batch-dependency-levels.json` before construction. Before each Step 1 dispatch the engine recomputes this artifact from current page requirements and manifest/carrier logical dependencies, rejects batch cycles, and includes the batch level and suppliers in the worker task. Batch level is zero without in-run suppliers, otherwise one plus their maximum level. Initial mathematics authoring uses `unitPrerequisitePolicy: 'priority'`: sort all pending pairs by dependency level before selecting slots, without waiting for cross-pair suppliers to finish. Fill the configured stage, role and global capacity, then refill immediately on worker completion; retain adoption and exclusive-writer guards. For 7, 6, 8 and 12 pairs in successive levels with 30 slots, start all 21 pairs in the first three levels and 9 in the fourth, then admit the next fourth-level pair whenever a slot opens. Authors continue independent work against declared interfaces and record unresolved supplier checks honestly; they cannot claim readiness or quote absent supplier bodies. Actual authored-carrier/readiness requirements, full gates, review and supplier-before-consumer repair remain mandatory. Other stages retain the default completion policy. External suppliers remain context.

Each dispatch pass shares a fresh manifest/alias snapshot across its dependency graph. Priority authors with disjoint outputs receive one fan-out graph check rather than one full graph rebuild per slot. Snapshots are confined to the current pass; subsequent dispatches read current inputs again.

Item inventories and logical dependencies are determined in scaffold manifests before item carriers are written; authors compute labels there and construct carriers in ascending item level. Item `dependency_level` is recorded and independently checked in Step 1: zero
without in-run logical suppliers, otherwise one plus the maximum supplier level.
External suppliers remain context. No rebatching or additional review stage is introduced. Logical dependencies must agree between authored bodies and
manifests; aliases resolve to canonical suppliers. Definition discharges and
nonlogical links are hash-bound context, not extra logical scheduling edges.

## Whole-batch scope/prerequisite loop

Step 2 workers perform only substantive scope/prerequisite review, local source
repair and escalation. Each batch has a read-only `scope-reviewer` and a local
`scope-repairer`, both `gpt-6-luna-max`; reuse their respective sessions where
available. Each review covers the entire current batch, including additions and
complete A/B pages, before returning one consolidated result.

The sequence is review/accept -> ONE local repair -> final review/accept ->
escalate to the OWNER. The engine permits at most two complete reviews and one
local repair. Escalate immediately when a significant prerequisite gap cannot be
rigorously resolved locally on the same page. Other page-local defects receive
the single repair and final review. If the second review remains unsatisfied for
any reason, escalate; there is no second local repair or third engine review.
Failed processes and retries do not reset successful review/repair counters.

There is no prerequisite-completion dispatch barrier in Step 2. Share up to
30 active engine workers only among reviews and local repairs, and refill each
available slot immediately. There is no automatic owner-repair dispatch.
Independent assigned source scopes run concurrently; only overlapping authorized
write files wait for an active writer. Read-only consumer context does not reserve
worker slots or block another pair. Repairers write
directly to their assigned source files, without private workspaces. Inspect
actual suppliers before their consumers within each repair. Imported sources
remain read-only. Preserve approved claims, inventory promises and pair/page
identities; prove necessary intermediate results rather than dropping scope.

Whenever an original Statement/Definition changes, the same agent traces and
checks all direct and indirect consumers using old/current dependencies, aliases
and nonlogical uses. Physical public-interface changes have the same duty in
physics. Check actual supplier uses and assumptions; repair consumers within the
assigned source scope and report required outside repairs to the owner. Every
affected consumer appears in the substantive result, and the final reviewer
checks the local repair's consumer dispositions.

Workers have no hashing, rehashing, certification, recertification, numeric-level
reconciliation, manifest/coverage/proof-contract maintenance, evidence-ledger or
automated formatting/validator duties in Step 2. Their lightweight result contains
only identity, prepared inventory, round, decision, defect types, concise findings
and required consumer dispositions. The optional legacy hash report field serves
only already-running old workers; new workers do not compute or report hashes.
Honest uncertainty, rigorous complete arguments and faithful source use remain
substantive obligations. Existing manifests are navigation context, not worker
maintenance assignments.

The engine retains simple dispatch, routing, overlap coordination and the bounded
two-review/one-repair counters. Minimal pass receipts record dispositions and
counts. After the engine pass and worker drain, pause for the owner before the
Step-2 battery. Escalated pairs remain explicit holds. The owner/orchestrator
alone resolves escalations, handles metadata and recertification, and runs the
Step-2 gates. Preserve CLAUDE.md's maximum of two outside escalation-resolution
cycles; they are not additional engine review/local-repair rounds. Resolved owner
escalations receive direct acceptance without an engine re-review or counter reset.
The owner controls the battery and advancement to Step 3.

The engine writes `research/RUN-step2-owner-pass.json` before the owner pause.
If remaining local work resumes, it drains and produces
`RUN-step2-owner-battery-ready.json`, pausing again before the battery. Neither
handoff performs recertification or grants gate authorization. The owner may
record resolved escalation acceptance from the content workspace:

```bash
node tools/batch-scope-review.mjs owner-resolve --run RUN --batch N --decision accept --reviewer OWNER --reason 'Exact resolution'
```

Historical `--decision continue` commands also accept directly. Apply owner
resolution only after source writers drain. This never dispatches another engine
review, restores a spent local repair, or replaces the orchestrator's pre-battery
work.

Finite-smoke obligations use named deterministic computations in `tools/finite-smoke.mjs` and exact source assertion excerpts in proof contracts. The registry includes finite covariance/rank, scalar Lasso and collinear-design witnesses, robust-estimator partition/rank/zero-data boundaries, deterministic replacement counterexamples, log-space binomial witnesses, and bounded log-series checks for numerical constants. Parameter values describe the finite model and must satisfy the check's domain. A finite-smoke pass checks only that model, not the general proof; a counterexample obligation passes when its stated false-claim witness is verified. Unknown names and stale assertion excerpts fail explicitly. Registry changes are validated by the authorized full gate battery; do not substitute an empty selection or fabricate success for an unsupported name.

## Independent review through closeout

Step 3 uses independent batch review and routed adjudication after authoring in
dependency-level order. Step 3b is retired in both engines: there is no separate
cross-batch edge review, impact-review window or unfinished cross-review lane.
Step-3 readers and refuters use GPT-6 Luna/max; batch adjudicators use GPT-6.1
Sol/medium. Step-4 read-only batch readers use GPT-6.1 Sol/medium, and the
per-item judge sweep uses GPT-6 Luna/max.
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

Outside published-supplier alerts in native Step-4 digests retain their exact
original bytes. The owner may record `research/RUN-step4-published-alert-routes.json`
(version 1, `owner-routed-step4-published-alerts`, `authorized_by: owner`). Each
route binds the unchanged digest, exact alert index and object, successful native
reader attempt and original structured output, focused owner evidence, and the
current policy-valid recorded published repair. Digests and later alert routing
validate that receipt; published routes remain separately visible in the derived
alert inventory and never acquire a fabricated in-run owner or new review coverage.
Original Step-3 closure and judge verdicts remain immutable. Existing judge
currency rules continue to govern unchanged consumer carriers.

Step 4's read-only
batch digests use `RUN-batch-N-step5-context.json`; a digest from another batch
cannot cover the inventory, and retries target only failing batches.

Step 5 retains the round-based adjudication/repair engine, supplier-before-consumer
maintenance, frozen frontier guards and its complete gate battery. The
judgment/adjudication rounds continue until the latest round's unique confirmed
fatal original-frontier items are strictly below 2% of the immutable original
inventory. Exactly 2% requires another round; unresolved defects still block closure.
Step 5 rejudgment uses GPT-6.1 Sol at high reasoning effort, independent of the
Step-4 judge model.
Step-5 final judge closure retains the genuine frozen Step-4 Luna verdicts for
original-frontier items whose guard text is unchanged from the native baseline.
Changed items require current Sol evidence, subject to the existing current
central-certification policy. A selective closure joins the complete immutable
frontier, hash-bound baseline and original native verdict inventory; it never
accepts arbitrary models, invents verdicts or drops subjects. All normal item/context
currency and exact rejection-adjudication checks continue to apply.
Repeated adjudication consumes the actual rejudge verdicts.
Terminal judge stamps and mechanical coverage use the same per-item policy and
stamp the actual judging model. When an item has no verification mapping or
source block, its first judge-only verification mapping is inserted immediately
after the opening frontmatter delimiter. Removing that mapping must recover the
original guard and judge representations exactly; stamping cannot change item
currency through separator whitespace. A guarded native `record-operational-supplement`
may reconcile a coverage-only diagnostic from an incorrect lineup descriptor.
Creation requires the exact paused native repair stage and drained successful
workers; it binds their unchanged reports, assignment, diagnostics, original
frontier/baseline/verdict inventory, prior certificate and creation state.
Collection rechecks genuine current original verdicts and keeps diagnostic-only
carrier observations separate from new mathematical reviews and certification.
It cannot substitute for a source repair, missing history or another gate defect.
If native collection cached its derivatives before that supplement, the guarded
`recover-operational-derived` command preserves the original collected, closed
and certification artifacts and records hash-bound immutable variants. Only the
normal mutable current-certificate pointer changes; certification starts from
the authenticated prior certificate and genuine native reviews, while unchanged
operational observations retain their original verdict coverage. Effective native
lookups validate that projection before using the corrected variants.
The owner-supervised wrapper forwards its reload version to the native stage
table and applies the owner hold before progress bookkeeping, so paused work
cannot cache derived collections before an authorized reconciliation.

The additional
`proof-contract-coverage` mechanical check still requires a contract for each
actual proof-bearing carrier. No new substantive review gate is added. Step 6
performs mechanical contract closure and emits `step6-` owner-report artifacts;
its readiness and closeout commit remain evidence-bound. Publishing/pushing are
owner actions, separate from this build.

Readiness and closeout treat both `ENOENT` and `ENOTDIR` as an absent path:
a regular file cannot contain child evidence files. Readiness follows existing
local references; required owned carriers still fail when absent or nonregular,
and other filesystem errors remain fatal.

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

Mathematics closeout projects the independent `physics/.physics-autopilot/`
runtime out of working-byte preservation only; outside Git index and HEAD remain
strictly protected. An already-committed closeout whose original baseline included
that live runtime may recover through owner-authorized
`RUN-closeout-runtime-recovery.json`. Exact archives of its committed final receipt
and failure diagnostic remain immutable. Frozen original runtime metadata must
reconstruct the original full working digest when combined with current canonical
outside rows; original outside index/HEAD digests must still match. Recovery binds
the current policy/context, retains every original owned path, and requires unchanged
original items/pages, manifests/contracts and canonical ledgers. The owner's exact
administrative bridge for `WORKFLOW.md` and `tools/run-commit-scope.mjs` binds their
original index/HEAD/working metadata and exact current metadata. Replacing only
those two rows must reconstruct all three original full digests; both files remain
outside-preserved throughout native commit and subsequent checks. No other
administrative/source change is authorized by this bridge. All native gates
still run. Only after those checks may native closeout write a fresh final receipt
and commit the administrative recovery; later `--check` uses its ordinary new baseline.

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
Doctor checks complete command flags, including digit-bearing names such as `--step5-run`, against their tool definitions.
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

An owner-supervised run may select `tools/autopilot/stages/owner-supervised.mts`
through its run-local `config.json`. This preserves the native stage table,
dispatches and full gate batteries, and pauses after writers drain before each
battery. The supervisor resolves all escalations, then runs
`node tools/owner-gate-supervision.mjs --run RUN --state-dir .autopilot/RUN
--escalations-resolved`. The tool hashes the current manifest frontier and its
supplier context, checks dependency labels and actual-renderer proof formatting
in dependency order, and records a single-battery permission. The supervisor
resumes the native controller. Changed inputs or a consumed permission require
a fresh pass; no review verdict, certification history or gate is waived.
Drift planning boundaries record page metadata only because content does not
yet exist; authored boundaries reject empty inventories. This optional wrapper
does not affect other runs or change their worker prompts.
Gate-control files live in the run's runtime state directory. Immutable pass
receipts live with native dispatch evidence, which the report-integrity snapshot
excludes. The final pass after the closeout commit stays in runtime state so
the check does not create uncommitted source files; every final native gate
still runs over the committed carriers.

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

## Open problems

Use `kind: open-problem`, an `op-` ID, `## Open problem` and `## Status` for
unresolved claims. Review exact formulation, dated status, sources and partial
results; do not invent a proof or proof-acceptance stamp. Contracts use
`open_problem_review` instead of proof worksheets. Open problems can consume
formulation prerequisites but never supply `deps`, `justified_by` or proof
premises, including alias-resolved or indirect uses. Source/status review
does not certify a solution. Keep established results awaiting local authoring
as separate proof obligations, and preserve physical postulates/observations.
