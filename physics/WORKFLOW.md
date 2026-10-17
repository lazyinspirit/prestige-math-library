# Physics build operations

The deterministic `tools/physics-autopilot/` engine owns dispatches and transitions. The
approved build checklist is [research/workflow-rebuild-plan.md](research/workflow-rebuild-plan.md); consult it when changing
this workflow. Physics and its sibling engine have separate revisions,
worker prompts, supporting tools, content and run state.

The physics gate-liveness precheck selects explicit item paths from the current
run's A/B manifests, including definitions and other items without proof
contracts. Missing, empty or ambiguous manifests leave the probe unavailable;
they never trigger a whole-library precheck. The ordinary liveness failure for
missing probe inputs still applies.

## Six-step workflow

| Step | Work | Agents and handoff |
|---|---|---|
| 1 | Prerequisite drift, scaffolding and complete initial authoring | Existing drift agents and GPT-6 Luna/max authors; authored items, A/B pages, contracts, source evidence and manifests |
| 2 | Review, one local repair and owner escalation | Luna-max reviewers/local repairers; at most two reviews and one repair; owner/orchestrator resolves escalations and runs gates |
| 3 | Independent review | GPT-6 Luna/max readers and refuters; GPT-6.1 Sol/medium batch adjudicators; cross-batch review and closure |
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

The Step-1 manifest policy join uses `content-policy --manifest-only --authored`:
before canonical plan transcription, an existing local item may be reused only
at its unique authored page home, matching the manifest's page and category.
Canonical plan ownership conflicts, batch capacity, duplicate inventory and
dependency ordering remain errors. Ordinary pre-authoring manifest checks retain
their minting rules; this option is incompatible with audit mode.

## Construction and escalation

Step 1 keeps existing drift/source recovery, readiness, scope, page-capacity and
owner-hold mechanisms. Initial authors use `gpt-6-luna-max`; drift/source recovery
retains its existing model assignments. Both drift reviewers and authors
must escalate significant unmet prerequisites directly to the owner, giving the
smallest missing supplier, consuming claims/steps and affected consumers.
Scaffolding agents fully author all assigned items, pages and proof contracts;
a proof strategy or successful process alone is not a completed carrier.
Readiness records bind the finished carriers. Initial authoring fills every
available worker slot, up to the shared cap of 30, taking lower dependency levels
first across the complete pending queue. Levels are priorities, not completion
barriers: authors start and continue even when another pair's supplier is missing.
As soon as a worker finishes, the engine starts the next pending pair without
waiting for the rest of its level.

Batch levels are computed mechanically during planning, recomputed after drift
materialization and at the drained construction join, and recorded in
`research/RUN-batch-dependency-levels.json`. Queue refill and status use that last
valid full graph while authors edit draft manifests and carrier YAML. The loader
validates its DAG, levels and complete current manifest batch scope without
parsing in-flight drafts. The drained join and gates strictly recompute and check
the current graph, including declared carrier dependencies. No
cross-pair prerequisite-completion barrier applies to initial authoring. A missing
supplier retains its exact planned interface and honest proof-status obligation;
authors complete the consuming argument conditionally and continue their remaining
work. They keep explicit unresolved readiness records, never invent supplier
acceptance or duplicate another pair's ownership. Completion accounting requires
local authored carriers, inventories, contracts, coverage and readiness records.
The complete, drained Step-1 gate battery still requires current supplier content,
resolved readiness and correct dependency levels before review. This adds no stage.

Per-item Step-1 readiness recording retains the complete manifest page/pair and
item ownership index, but hashes only the target and its actual transitive
dependencies, including explicitly examined context. A bare item ID in an
unrelated unfinished inventory does not prevent that local authoring record;
the same unfinished ID in the target's dependency closure fails recording.
Unrelated malformed carrier YAML is deferred during identity/alias indexing;
a reached carrier is parsed strictly, and relevant duplicate identity or alias
claims remain blocking. Malformed JSON, ambiguous ownership and invalid
page/pair structure still fail.
The hash calculation and alias resolution are shared with the strict full-frontier
checker; local readiness records grant no global acceptance or gate authority.

At a drained owner join, `recordStep1Batch(root, {run, records, owner: true})`
from `tools/physics-support/step1-decisions.mjs` can record multiple independently
reviewed readiness dispositions without rebuilding the full alias index per item.
Each record supplies the ordinary `item`, `decision`, `reason` and explicit
`dependencies` fields. The owner preserves prior rows before replacement and
supplies actual scientific evidence; batching grants no review or gate authority.
All records and ownership are validated before any writes. One shared local
snapshot hashes each actual dependency closure plus examined context; a second
fresh snapshot must reproduce every hash before the native-format rows are
written. Relevant mutation aborts the batch without writing rows; unrelated
unfinished drafts retain the ordinary local-recording exclusion. Keep writers
drained through recording. The individual `record` CLI remains unchanged.

Item `dependency_level` is determined before writing item/page carriers, recorded
and independently checked in Step 1: zero
without in-run logical suppliers, otherwise one plus the maximum supplier level.
External suppliers remain context. No rebatching or additional agent stage
is introduced. Logical dependencies must agree between authored bodies and
manifests; aliases resolve to canonical suppliers. Definition discharges and
nonlogical links are hash-bound context, not extra logical scheduling edges.

`node tools/physics-support/depcheck.mjs --help` (or `-h`) prints usage and
exits before reading import receipts or loading content. Use `--items-file` for
a nonempty explicit item selection; a bare invocation checks the whole library.
`node tools/physics-support/rendercheck.mjs --help` (or `-h`) also exits
before loading renderers or collecting content. Pass explicit item/page paths
to keep a render check within the current scope.

## Cross-batch dependency inputs

Each batch writes `research/RUN-batch-N.cross-batch-dependencies.json` as an
array, including an empty array when it has no declared in-run cross-batch
edges. The collector derives edges from current manifest and source `requires`
for pages, and `deps`, `justified_by`, and `forward_refs` for items. Reviews use
one row per exact consumer/supplier edge:

```json
[
  {
    "kind": "item",
    "consumer": "lem-example-consumer",
    "supplier": "def-example-supplier",
    "status": "open",
    "evidence": "Exact declared dependency; the scoped supplier-use check remains pending."
  }
]
```

`kind` is `item` or `page`, and the consumer must belong to the batch writing
the file. `status` is `open`, `verified`, or `removed`, with nonempty evidence.
`verified` records a completed scoped dependency check, not independent proof
approval. Keep unresolved checks `open`. Put off-owner transitive observations,
aggregate batch requirements and interface mappings in batch notes or a
separate context report. Do not disguise them as consumer-owned edge reviews.
The frontier ledger is derived evidence; its ordinary review and gate duties
remain in force.

## Owner resolution of Step-1 drift holds

A native `drift-blocked` observation remains immutable after owner repair.
The owner may add `research/RUN-drift-owner-resolutions.json`; generate a
pending template from the physics cwd with:

```bash
node tools/physics-support/drift-owner-resolutions.mjs template --run RUN
```

After the actual repairs and review, fill each resolved page's `decision` with
`resolved`, provide its concrete `reason` and `evidence` paths, and add every
review/source evidence file's raw SHA-256 to `inputs`. A resolution may also
name explicit live obligations in its `current_inputs` hash map; those entries
must appear in the flat input map. Historical JSON evidence retains its original
hashes and is not recursively reinterpreted as a current-source obligation.
The template binds the original report, genuine successful immutable drift
attempt and current result, exact A/B page/batch frontier, current canonical plan
bytes, blocked sections and repaired prerequisite lists. Its pending entries
cannot pass. Only `/root` may authorize dispositions; unknown, duplicate,
stale, nonblocked or outside subjects fail. Partial dispositions leave the
other holds blocking. No report, result, coverage or historical verdict is
rewritten, and no scientific review is invented by the template.

Both drift checks retain all other native report, plan and buildability rules.
Same-scope drift materialization changes manifests, not the canonical plan, so
it preserves the plan binding. Any later canonical-plan edit requires a fresh
owner disposition after actual review. Owner preparation binds the overlay
and every declared evidence input; changed evidence requires fresh preparation.
After writers drain and the owner resolves every escalation, use native
`retry --unit drift`, then the ordinary fresh owner preparation and complete
battery. Successful native drift coverage remains covered; no unchanged scope
is dispatched again. A stopped controller may restart with the same run and
state directory to adopt updated code without replacing its execution history.

Prerequisite snapshot resolution uses canonical plan page identity. An identical
pinned import at an old category location may coexist with the canonical page;
both copies, their categories and relevant original are bound. Different bodies,
unpinned extra copies and wrong page identities remain blocking. This resolution
examines only the actual required page names.

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
node tools/physics-support/batch-scope-review.mjs owner-resolve --run RUN --batch N --decision accept --reviewer OWNER --reason 'Exact resolution'
```

Historical `--decision continue` commands also accept directly. Apply owner
resolution only after source writers drain. This never dispatches another engine
review, restores a spent local repair, or replaces the orchestrator's pre-battery
work.

## Independent review through closeout

Defect evidence may identify a repository path or an absolute HTTP(S) source
URL. A source URL remains a source locator; it does not claim a local full-text
file or reading attestation. Correct invalid taxonomy spellings with guarded,
append-only taxonomy successors, preserving the original frozen rows.

Step 3 keeps the existing independent batch review, routed adjudication and
unfinished cross-review continuation. A partial process handoff is not completed
artifact coverage; continuations require actual completed-obligation progress.
When two reader/refuter findings classify one defect differently, the owner may
record `research/RUN-step3-owner-same-defect-aliases.json` and bind its raw hash
with `same_defect_receipt_sha256` on the alias decision. This route requires an
explicit root adoption of the original scientific owner's same-issue review,
the exact frozen finding objects and report hashes, identical observed source
and carrier bindings, and guarded current source excerpts. All ordinary shared
finding, ledger and current-content checks still apply. It does not rewrite
observations, accept source content, or combine unrelated defects. Native owner
recertification binds this receipt and its evidence inputs before the battery.
A later same-owner external-context refresh may be bound separately through
`RUN-step3-historical-context-transition.json`. Its immutable Root receipt must
bind genuine frozen/current decisions and context preimages, the exact owner
proposal and preserved review evidence, and actual completed native certification
of the refreshed consumer. The verifier permits only context receipt seals and
the explicitly reviewed consumer bindings/evidence to evolve; every observation,
verdict, subject and other decision field stays exact. Current native external
context checks remain mandatory. Original closure and historical evidence are
never resealed. Valid append-only taxonomy successors retain their original
Step-3 ledger predecessors in the authenticated historical projection.
Step-3 readers and refuters use GPT-6 Luna/max; batch adjudicators use GPT-6.1
Sol/medium. Step-4 read-only batch readers use GPT-6.1 Sol/medium, and the
per-item judge sweep uses GPT-6 Luna/max.
Source and empirical qualifications survive regeneration. Step 4's read-only
batch digests use `RUN-batch-N-step5-context.json`; a digest from another batch
cannot cover the inventory, and retries target only failing batches.
Cross-batch page alerts route to the page's owning group, like page concerns.
Published supplier alerts remain in the original digest as read-only context;
they do not acquire run ownership or authorize repairs to imported mathematics.
This also applies to published pages identified by their actual library
frontmatter; unknown, draft, or ambiguous page targets still fail routing.
Unknown targets and alerts about the sender's own batch still fail the digest gate.

Step 5 retains the round-based adjudication/repair engine, supplier-before-consumer
maintenance, frozen frontier guards and its complete gate battery. An
optional run-local `RUN-owner-step5-support-index.json` points native workers to
outside proposals and genuine prior focused checks as read-only evidence.
It grants no source ownership, review authority, or transition permission;
workers verify current arguments and bind only immutable evidence actually used.
Versioned root-published `RUN-owner-step5-support-supplement-*.json` supplies
later evidence without modifying indexes already used by workers.
The native Sol 6.1 high worker identity is independent of the Step-4 judge lineup.
Coverage gates retain the singleton original Step-4 lineup bound by the frozen
`step4-verdicts.json` and initial adjudication pack. Before Step 5 is frozen,
modern runs use Luna. Mixed, unknown or unbound frozen lineages fail closed.
Current Step-5 certification is checked first with all existing content and
context guards; it is not a replacement judge verdict. Sol 6.1 high repair and
rejudge work retains its own identity, without requiring untouched original
items to acquire a different judge lineage.
Shared metadata patches use the guarded command
`node tools/physics-support/step5-shared-write-lock.mjs run --owner DISPATCH_LABEL -- COMMAND ARGS...`.
It acquires the lock before launching the command, launches nothing and exits 2
when busy, propagates the child exit status, and releases the lock after a child
completion or failure. Reread owning files and make only scoped changes within
the command; research and disjoint item authoring stay outside it. Existing
manual acquire/release callers remain supported and must stop shared writes
when acquisition fails.
Collection binds its genuine dispatch receipts while retaining historical lane
identities for older evidence. Evidence file SHA-256 guards compare exact raw
bytes, including binary sources; collection and guarded impact recovery never
decode files before checking those guards. A genuine byte mismatch still blocks
collection or recovery without rewriting protected evidence.
Native Step-5 sweeps use `--strict-context`:
a resumed verdict must match both the current judge-form item hash and its
current frozen prompt context. A changed supplier context requires a fresh
verdict even if this item's own bytes are unchanged; exact current verdicts
remain reusable on resume. Other sweep callers retain the existing default
currency policy. This changes selection only, never rewrites verdicts or
invalidates an otherwise current context-hash cache. Step 5 rejudgment always uses GPT-6.1 Sol at high
reasoning effort, independent of the Step-4 judge model. Repeated adjudication
consumes the actual rejudge verdicts. The
judgment/adjudication rounds continue until the latest round has zero items
deemed defective by adjudicators (zero unique confirmed-fatal items across all
adjudicated subjects). Any confirmed-fatal item requires another round, even if
repaired within that round; uncertainty, missing adjudications and unresolved
defects still block closure. The frozen original inventory remains unchanged.

An initial or repeated adjudicator may encounter a distinct inherited defect
in an assigned consumer while rejecting the original judge objection. The
original false-positive verdict does not authorize an edit. If an actual
collection gate catches such an edit, preserve the original pack, report,
judge tuple, and task-instruction violation. A root-requested native correction
review may assess the exact current carrier without rewriting that history.
The request must bind the original evidence, genuine before bytes, observed
current bytes, and the same-owner confirmed supplier change that invalidated
the consumer use. A fresh native Sol 6.1 high owner reviews that separate
finding and adopts or rejects the current carrier without editing source.
The root advertises the immutable request with
`research/RUN-step5-v2/owner-inherited-repair-request.json` containing
`version:1`, `run`, and `request:{path,sha256}`. The referenced
`owner-inherited-repair-ID.json` binds the run, phase, round, original unit,
subject and supplier, original pack/report/task, actual failed gate evidence,
genuine before and observed source, content guards, and scientific review.
The engine waits for drained writers before queuing one `correction-initial:1`
or `correction-repeat:1` unit; completed adjudication units remain complete.
Collection remains blocked until its exact source guards, fresh review,
distinct finding, dispatch identity, and request bindings validate. An open
scope incident is not erased by later adoption. Separate confirmed fatal
findings count in the round's unique original-frontier fatal-item inventory;
they never become fabricated original judge tuples. This continuation grants
no outside source-write permission and does not waive ordinary gate checks.

A completed repeated adjudicator may introduce a confirmed richness scope loss
in its own assigned source. Before that repeat wave is collected, a distinct
single-subject native scientific correction may restore the sound scope. Root
advertises `owner-adjudication-scientific-repair-ID.json` through
`research/RUN-step5-v2/owner-adjudication-scientific-repair-request.json` with
`version:1`, `run`, and `request:{path,sha256}`. The immutable request binds the
unique unsuperseded OPEN owner `richness`/`scope-drop` canonical finding, exact
original rejected tuple and completed native pack/report/task/dispatch, genuine
original rich and current narrowed carriers with raw/content/interface guards,
and the original scientific owner's evidence and unapplied proposals. This is
not outside authorship, inherited read-only adoption, or coupled impact repair.

At the drained `5.5-adjudicate` join, one fresh native Sol 6.1 high child receives
only that original-frontier subject. It must actually change the narrowed
carrier, review the exact current source and dependency context, reconcile the
original tuple explicitly, resolve the distinct root scope finding, and report
affected uses. It authors no prerequisite or unrelated source. Original reports,
decisions, tuples and tasks remain immutable. Parent collection first validates
all original reports at their authentic historical subject guards, then validates
only the corrected subject using the separate child decision/review and actual
current hashes. Any private corrective authorization is confined to that exact
subject and genuine child repair; it never clears unrelated errors. A return to
the original rich content requires a fresh false-positive effective adjudication,
while retaining the original decision as history. No fabricated tuple, stale
review, extra supplier edit or gate waiver supplies authority. Collection binds
the genuine correction receipt, and the ordinary full gate battery and later
consumer maintenance still apply. Root alone closes the canonical finding.

Several distinct confirmed findings can instead receive an explicit native
owner queue before repeat collection. Root advertises an immutable
`owner-finding-queue-ID.json` through `owner-finding-queue-request.json` in the
same workflow directory. Each entry binds one unique unsuperseded OPEN canonical
owner finding, its original-frontier subject and owner lane, genuine current
source and content/interface guards, completed native context, and original-owner
science and unapplied proposals. An entry explicitly selects `native-referral`,
`assigned-scope-restoration`, or `owner-discovery`. The first requires an actual
native referral or the actual assigned rejected subject. An assigned original
tuple must be copied exactly and separately reconciled. A corrective decision may
include optional narrative `evidence` of at least 40 characters; this text supplies
no tuple identity, file binding, assignment or certification authority. The discovery mode binds
the named original scientific owner's final discovery and current snapshot;
its native outcome is context only and supplies no invented edge or rejection.

After all writers drain, the engine freezes
`owner-finding-correction-repeat-ROUND.json` with disjoint lanes 1, 2 and 3 and
binds its exact tasks in `owner-finding-correction-repeat-ROUND-progress.json`.
Every entry must receive an actual source repair, fresh current native review
and explicit typed root-finding resolution. No new prerequisite or ordinary
judge tuple is permitted. Distinct repairs on a correctly false-positive subject
retain that effective false-positive original decision. Continuation authenticates
the frozen request/progress, pack/tasks and all three completed native reports
and dispatches, and requires the changed-source set to equal the authorized
subjects exactly. Parent collection preserves original history and validates
only authenticated subject-specific replacements; unrelated errors still block.
Separate fatal findings count in the round's unique fatal original-frontier item
inventory, deduplicated by subject, without fabricated model/context tuples.
Root closes canonical findings only after genuine completed resolutions.
At the drained three-lane join, the controller authenticates and collects the
parent before its gate, then pauses once for Root's canonical ledger closure.
Root resumes after adopting the genuine resolutions; the next gate snapshot
therefore includes those closures. Resumed progress verifies the existing
immutable collection before any OPEN-request intake, avoiding stale-input
recertification and reauthentication of findings already closed. This technical
handoff neither attempts nor waives the ordinary full gate battery.

An earlier collected single-subject correction remains bound to its genuine
collected `post` snapshot and immutable native evidence. Later source differences
are permitted only for the exact subjects of a separately authenticated completed
root queue starting at that snapshot. Its own live subject and current dependency
review must still match. A caller-supplied historical hash map is not authority.
These continuations do not authorize outside source writes, bypass gates, alter
original reports, or waive normal consumer/context closure and certification.

When an actual initial/repeat collection gate reports a missing original-frontier
downstream inventory, root may complete the routing metadata through
`research/RUN-step5-v2/owner-downstream-inventory.json` with `version:1`, `run`,
and `supplement:{path,sha256}`. Its immutable `downstream-inventory-ID.json`
binds the phase/round, `reviewer:"/root"`, `authority:"routing-only"`,
`scientific_review:false`, `source_edit_authority:false`, diagnosis, actual
failed gate evidence, and additions. The diagnosis binds the original pack,
every original report, all restated interface guards, and exact missing edges.
Collection independently requires the additions to equal the complete current
missing direct-edge set, with current source/consumer guards and drained writers.
It preserves all reports, decisions and reviews, records `inventory_completion`,
and then applies the ordinary completeness check. Routing adds no reviews,
scientific acceptance, source-write permission, or invented interface event;
the native impact owners still examine the assigned affected uses.

A confirmed open scientific finding may require a coupled supplier and consumer
repair that the current owner wave did not provide. Root may advertise an
immutable `owner-scientific-repair-ID.json` through
`research/RUN-step5-v2/owner-scientific-repair-request.json` with
`version:1`, `run`, and `request:{path,sha256}`. The request binds the base
impact phase/round, root reviewer, exact supplier/consumer subjects, the unique
current unsuperseded OPEN canonical finding, an authenticated completed native
outcome, genuine current before carriers and content/raw/interface guards,
and actual scientific evidence and unapplied proposals.
At the drained join, the engine queues a native continuation with that pair
exclusively assigned to owner 1, supplier first. Other genuine pending-context
work continues in parallel on owners 2 and 3. The two sources must actually
change and receive fresh current native repaired reviews; owner 1 must return
an explicit `root_finding_resolutions` row. Collection validates this before
saving an immutable receipt. The request remains pending until validated native
completion; root still owns canonical ledger closure and certification. No
formatting flag, outside author grant, fabricated stale context or original
judge tuple substitutes for that work. An uncertified closed wave can reopen
only while every original-frontier content guard still equals its preserved
closed receipt; unlicensed post-close writes require separate reconciliation.
Original reports, closures and request evidence remain immutable.

An outside repair authorized by the root owner can enter only deferred
`impact-initial`/`impact-repeat` owner collection, including their continuation
passes. Place an explicit grant in `research/RUN-step5-v2/owner-repair-handoffs.json`:

```json
{
  "version": 1,
  "run": "RUN",
  "authorizing_owner": "/root",
  "repairs": [{
    "id": "ITEM",
    "owner": "outside-repair-owner",
    "phase": "impact-initial-pass-3",
    "round": 1,
    "before_sha256": "PACK_BEFORE_CONTENT_SHA256",
    "after_sha256": "CURRENT_GUARD_CONTENT_SHA256",
    "receipt": {"path": "research/RUN-owner-repairs/receipt.json", "sha256": "RAW_SHA256"}
  }]
}
```

The target must be unassigned in that exact pack and belong to its frozen original
frontier. Intake binds the receipt's run, subject, author, repaired validation
status, preserved before bytes, current content and raw hashes, and actual scoped
exit-zero validation evidence. Its `writer_handoff` must attest `absent: true`
with a positive writer `pid`, `overlap: false`, and exact hash-bound owner task
files in `pass3_assignments`. All receipt/support paths must remain within the
run's local research files. Receipts must explicitly set `independent_review`,
`native_transition`, and `recertification` to false. Protected reports and other
bound supporting evidence remain unchanged. The registry becomes immutable bound
evidence after collection; repeated collection verifies those files again.

Collection records `external_owner_repairs` separately and preserves the actual
current `post` carrier. It grants external authorship only: continuation assigns
the changed carrier for a fresh native owner review before closure or
certification. It cannot satisfy adjudication, strict collection, or a gate;
unknown changes and mismatched or stale grants still fail the existing checks.
A normal collection gate may verify an existing deferred receipt only after the
same native wave is complete. It checks the bound closure, the original receipt
and all preserved evidence, current frontier carriers against the closed snapshot,
and fresh later native reviews of every outside repair, including their current
supplier interfaces. Current-context checks cover only those repaired items;
legacy context verification remains supported. This read-only path
returns the closed current wave; it neither re-adopts historical outside carrier
guards nor changes the first-adoption deferred-collection requirement.

A completed `impact-initial` or `impact-repeat` owner wave may reopen for an
actual failed formatting precheck at its drained pre-gate join, before that
wave is certified. The root owner advertises an immutable request through
`research/RUN-step5-v2/owner-format-repair-request.json`:

```json
{
  "version": 1,
  "run": "RUN",
  "request": {
    "path": "research/RUN-step5-v2/owner-format-repair-REQUESTID.json",
    "sha256": "RAW_REQUEST_SHA256"
  }
}
```

The immutable request contains `version: 1`, `run`, `reviewer: "/root"`,
`phase` (`impact-initial` or `impact-repeat`), `round`, the current unconsumed
owner-gate `attempt` and `snapshotSha256`, `precheck: {path, sha256}`, and
`subjects: [ID, ...]`. Optional `proposal` is one `{path, sha256}` reference
or an array of references to unapplied diagnosis, patch and metadata evidence.
Every evidence path is relative to the physics workspace and lies inside
`research/RUN-*`; use hashes of exact file bytes. The advertisement may specify
`state_dir: ".physics-autopilot/RUN"` (the default).

Native `onProgress` drains inflight and adopted workers before `advanceImpact`
consumes this request. Intake checks current run/stage, writer and shared-lock
absence, no existing wave certificate, the exact unconsumed gate snapshot and
all its current input hashes. The precheck must cover that complete item
selection exactly once, have actual failures with diagnostics, and name exactly
those failed subjects in the frozen draft frontier. It appends a normal native
three-lane continuation with current before/context hashes and bound failure
and proposal evidence. Workers retain `gpt-6.1-sol-high`, make only mechanical
canonical phase/step/reference and owning contract derivation-ID repairs,
preserve proof arguments and public interfaces, run scoped validators, and
return genuine current native reviews. New items and public-interface changes
are rejected. Existing required reviews still must match current context at
closure; stale reviews are never rehashed into acceptance.

Prior packs, reports, collections and the original `PHASE-ROUND-closed.json`
remain immutable. New closures use `PHASE-ROUND-closed-2.json` (then `-3`, etc.);
mutable progress holds a hash-bound `closed_receipt: {path, sha256}` pointer.
Certification reads that pointer, with the original filename as the legacy
fallback, and binds the complete preserved evidence. Consumed request evidence
stays bound in progress; replay resumes the same continuation without appending
another pass. This route never consumes or waives a gate, edits source on the
owner's behalf, reopens a certified wave, authorizes Step 5.9 reopening, or changes
the terminal paid-judge budget. After repair the ordinary fresh formatting and
metadata recertification and full native gate battery remain required.

A later native certificate may carry forward a legitimately repaired canonical
`research/RUN-batch-N.proof-contracts.json` that an earlier certificate bound at
its old bytes. Ordinary/current certificate verification remains strict. At the
native certification transition only, the engine checks the immutable prior
certificate's payload and every static evidence hash using the original raw
file bytes, including binary sources. Unchanged binary evidence does not require
an evidence transition. An old live contract
binding may evolve only with bound current native owning repair reports,
assignments, current reviews and Sol 6.1 high dispatch authority, plus the
consumed predecessor owner-gate history. That gate must cover the complete
frozen/current manifest item selection, contain passing formatting and metadata
records, and bind the exact current contract and item bytes. Unknown files,
reports, snapshots and unlicensed or stale metadata still fail verification.
Gate repair workers may explicitly refer an actual failed, unassigned draft
frontier carrier through their report's `downstream` inventory. Collection
retains those referrals in `gate` and its native continuations even when the
completed repairs changed only proofs or metadata. The existing native owner
continuation assigns an unreviewed referral before closure. This creates no
interface seeds or automatic consumer traversal; published/outside carriers
remain excluded from gate assignments. Ordinary impact waves still suppress
proof-only downstream propagation.

Check-based native evidence uses direct structured rows in named `checks`,
`local_checks`, `focused_checks`, `verification_checks` or `validation`
containers, at report top level or in a `repair_notes` object/direct object
array entry. The strict contract validator and contract path must match exact
command tokens; every explicit scoped ID must have an assigned, reviewed native
owner in that batch. Failed checks, malformed records and narrative notes grant
no authority. The transition records only the explicitly declared or validated
subjects.
The new certificate binds the immutable prior certificate and consumed gate
history, records `evidence_transitions` with the unchanged old hash, current hash
and native report basis, and uses the current contract hash. It never edits or
reseals the old certificate, closure, report or supporting evidence, and does
not claim that missing historical contract bytes have been recovered.

Physics precheck presents each numbered Markdown paragraph as a complete step
to the normative application checker: single newlines within that paragraph
become spaces in checker input, retaining all mathematics, citations and tags.
Blank paragraph boundaries and separate numbered steps stay intact; source files
are unchanged, and normative errors or proposed repairs still fail precheck.

The additional
`proof-contract-coverage` mechanical check still requires a contract for each
actual proof-bearing carrier. No new substantive review gate is added. Step 6
performs mechanical contract closure and emits `step6-` owner-report artifacts;
its readiness and closeout commit remain evidence-bound. Publishing/pushing are
owner actions, separate from this build.

Keep fresh owner formatting/metadata check logs and supervision observations in
`.physics-autopilot/RUN/` during Step 6. The report baseline seals the selected frontier, actual suppliers, relevant
import pins/originals and owned evidence; later preparation receipts must not
mutate those protected inputs. Unrelated library bodies are not hashed. This changes only evidence storage, never scope, checks or gate authority.
The proof-layout renderer receives its unchanged JSON input through a temporary
seekable file, cleaned after execution. When app tsx dependencies are absent,
the TypeScript fallback resolves configured project path aliases and missing
extensionless relative TypeScript imports; ordinary package resolution retains
Node export-map checks. These runtime details do not change renderer analysis.

Step-6 terminal defect-ledger gates use the run's frozen Step-5 frontier when
present. Outside item findings remain recorded with their actual dispositions
and are reported as excluded, not passed; original mathematical maintenance
stays OPEN. Every ledger row still undergoes structural and ownership validation,
and unknown/page/global subjects and all owned open rows remain blocking.
Historical runs without that frontier retain the strict all-run terminal check.
Step-6 evidence also retains outside OPEN findings explicitly and reproduces
their actual dispositions in the exhaustive fatal table. Current manifest
subjects remain owned even if they were added after the frozen frontier.

## Run controls and cutover

Use `node tools/tsx-run.mjs tools/physics-autopilot/bin/autopilot.mts` with the ordinary
`plan`, `doctor`, `start`, `status`, `pause`, `resume` and `retry` commands.
`doctor` and generated task checks can run before authoring; they do not prepare
or spend review rounds. Doctor preserves complete numeric flag names and checks
exact tokens. For a wrapper's statically imported, module-level invoked
`run*CLI` entrypoint, it reads only that exported function's implementation;
uncalled imports and unrelated dependency helpers grant no flag support. No stage may install new prompts beneath a live old run.
The new revision is `physics-six-step-v1-construction-scope`. Start a fresh run and state directory; historical
receipts/revisions do not satisfy the rebuilt pipeline. Legacy authoring-prefix
migration and ready-pair initial-authoring variants are not current entry routes.
Preserve historical run evidence rather than relabeling it.

Before manifests exist, native `plan` resolves the proposed A/B pairs and runs
`physics-check --plan research/plan-spec.json --pages-file FILE` on their exact,
nonempty page-ID selection before writing run artifacts. This checks selected
page/item metadata and actual transitive suppliers, including current original
import identity and pins. Unrelated imported logical or category defects are
outside that planning frontier. Bare checks remain strict across the corpus;
local import snapshot pins retain their existing verification.

Item/page validators select current run manifests. Outside suppliers stay
prerequisite context; do not validate or repair unrelated content. Closeout verifies the engine's exact owned content commit inside its transaction.
Fresh Step 6 uses metadata/render checks -> focused repair -> all final gates
(repeat after repairs) -> concise report -> commit. All distinct old mechanical
conditions and repair mechanisms remain. The report immediately follows the
genuine gate pass; there is no post-commit content battery. New v3 stage identities
require guarded cutover rather than adoption of old coverage. Earlier owner-gate
protocols remain current-hash-bound under CLAUDE.md. See
[the implementation](../tools/STEP6-REBUILD.md) and
[mechanical check map](../tools/STEP6-MECHANICAL-CHECKS.md).

## Pre-gate recertification

An owner finding-alias receipt may also bind an exact location-only variant
between a historically unbound reader and a bound refuter. It must preserve the
reader's unknown history, bind both frozen findings and reports, and include the
original supplier owner's same-issue classification, reviewed pre-repair archive,
final source excerpts and scientific release. This reconciles one canonical
defect's ownership; it grants no source acceptance or gate exemption.

For a reader/refuter pair with identical observed source bytes but distinct
contract carriers, `same-source-distinct-carrier` aliases additionally bind both
original observation hashes, locations and severity, the authentic observed raw
archive, and the frozen scope. The original scientific owner must explicitly
classify the same underlying issue. Both reports and observations remain intact;
ordinary ledger ownership and current-content checks still apply.

An exact published-supplier owned-use context may retain additional distinct
`nonfatal-recorded` maintenance findings in `reviewed_maintenance_findings`.
Each entry requires its exact same-supplier, same-batch ledger-row hash and a
complete guarded scientific review of the owned use. These rows remain separate
from open missing-marker findings and are neither closed nor superseded. This
does not create a new in-run obligation or certify the published supplier.

Proof-contract inputs treat a bare decimal as a step reference only when that
number identifies an actual proof step. Explicit `step p.q` references are
checked even when the named step is missing.

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

Imported snapshots remain immutable when an upstream mathematics folder is
renamed. An import receipt may record `source_path` for the same page filename;
the import gate checks its canonical page identity and original pinned bytes.
Category regrouping retains mathematical classification, checked against each
prerequisite page's current source category. Editorial category prose is context,
while mathematical item and page bytes retain their full pin checks. Owner gate requests
bind the current original path. Item prose may link to actual page IDs, with
ordinary forward-reference checks still applying to later pages.
Published prerequisite pages remain earlier context when absent from the run plan.

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

## Open problems

Use `kind: open-problem`, an `op-` ID, `## Open problem` and `## Status` for
unresolved claims. Review exact formulation, dated status, sources and partial
results; do not invent a proof or proof-acceptance stamp. Contracts use
`open_problem_review` instead of proof worksheets. Open problems can consume
formulation prerequisites but never supply `deps`, `justified_by` or proof
premises, including alias-resolved or indirect uses. Source/status review
does not certify a solution. Keep established results awaiting local authoring
as separate proof obligations, and preserve physical postulates/observations.

## Retaining an adjudicated historical dependency after repair

A Step-3 consumer repair can correctly remove an old logical supplier. Keep the
original reader/refuter reports, routed scope, dependency path and producer
snapshots unchanged. Do not add a false current dependency to preserve routing.
For `step3-scope check` only, an owner may provide
`research/RUN-step3-historical-dependencies-BATCH.json` with this version-1 shape:

```json
{
  "version": 1,
  "run": "RUN",
  "batch": "BATCH",
  "reviewer": "owner reviewer",
  "reason": "Concrete explanation of the repaired consumer's replacement and the retained genuine observation.",
  "scope_sha256": "RAW_SHA256_OF_UNCHANGED_ROUTED_SCOPE",
  "reader_report_sha256": "ORIGINAL_RAW_READER_REPORT_SHA256",
  "refuter_report_sha256": "ORIGINAL_RAW_REFUTER_REPORT_SHA256",
  "inputs": { "research/exact-before.md": "RAW_SHA256", "research/exact-supplier-before.md": "RAW_SHA256", "research/current-owner-review.md": "RAW_SHA256" },
  "findings": [{
    "obligation": "reader:BATCH:1",
    "finding_sha256": "SHA256_OF_RECURSIVELY_KEY_SORTED_FROZEN_FINDING_JSON",
    "path_carriers": [
      { "id": "consumer-id", "path": "research/exact-before.md", "sha256": "FROZEN_PATH_RAW_ITEM_SHA256" },
      { "id": "supplier-id", "path": "research/exact-supplier-before.md", "sha256": "FROZEN_PATH_RAW_ITEM_SHA256" }
    ],
    "current_carriers": { "consumer-id": "CURRENT_RAW_SHA256", "supplier-id": "CURRENT_RAW_SHA256" },
    "review": { "path": "research/current-owner-review.md", "sha256": "RAW_SHA256", "note": "Exact current supplier and replacement-consumer review with retained claim and hypotheses." },
    "decision_path": "research/RUN-alpha-batch-BATCH-3a-decisions.json"
  }]
}
```

The `inputs` map must bind every archived carrier, manifest, snapshot and review
file named by a path/hash pair; native gate evidence traversal includes these
files. Every original path edge must be authenticated. When the raw consumer preimage
was not retained, use this explicit alternative for that `path_carriers` entry:

```json
{
  "id": "consumer-id",
  "manifest": { "path": "research/archived-original.pages.json", "sha256": "RAW_SHA256" },
  "snapshot": { "path": "research/RUN-step3-hash-BATCH-post.json", "sha256": "RAW_SHA256" }
}
```

The native pre/post snapshot must bind the frozen raw item hash and the exact
original authored manifest row, including its private `__step4_page_id` hash
convention. The manifest row must contain the old edge. This alternative proves
historical dependency scope; it does not reconstruct or attest reading absent
source bytes. Each intermediate path carrier needs one of these two forms.

The guard also requires the assigned consumer, the same unique current manifest
producer, its exact immutable pre-reader snapshot, unchanged original report
bytes, current reviewed consumer/supplier hashes, an evidence file with a
concrete review note, a completed `confirmed_fatal` or `confirmed_nonfatal`
decision with confidence 1, and active fixed ledger rows referencing that exact
decision and obligation. All ordinary routing, source, proof, risk and ledger
checks still apply. A missing or stale receipt fails closed. These receipts do
not widen split or collect, alter the current dependency graph, close an open
finding, or authorize a gate. Rebind current hashes only after actual owner
review when either reviewed carrier changes; native gate requests must include
this receipt among their inputs.

### An observation of a producer's post-reader carrier

`observed_source` may explicitly name `snapshot: pre`, `post`, or `current`
with the raw `item_sha256` actually observed. A `post` observation uses the
immutable `research/RUN-step3-hash-PRODUCER-post.json` snapshot. Native binding
adds `producer_post_snapshot: {path, sha256, carrier}`, where `sha256` binds
that snapshot file and `carrier` contains its exact producer identity and
item/contract/manifest fingerprints. `observation_basis` is `post`, and
`observed_sha256` is the native canonical carrier fingerprint, not the raw
item hash. Checking requires the same immutable post snapshot and its exact
observed item hash, while independently retaining the current unique manifest
producer and the original pre-reader baseline. The current split carrier is
kept distinct; it is not relabelled as observed post-reader content.

This option represents genuinely witnessed bytes matching that snapshot. It
must not be guessed from a current carrier or assigned merely because a post
snapshot exists. Recover and record exact source-byte evidence when repairing
historical bindings. The additional post-snapshot metadata is removed when
comparing routing with original reports, so authentic reader/refuter reports
remain unchanged. A missing, malformed or changed post snapshot fails binding.


### Published prerequisite page findings in Step 3

A reader may retain an outside published page finding with the existing fields
`id`, `subject_type: published-dependency`, `consumer_id`, `location`, `defect`,
`evidence`, and `severity`; `observed_source` remains null or omitted. The exact
assigned consumer must reach an actually published item listed in that page's
`items` or `examples` through the ordinary item dependency closure. A mere link,
page `requires`, or an unrelated member does not establish that reachability.
The page must have a unique regular canonical library carrier, matching page ID
and published status, and belong to no current-run manifest. Ambiguous identities,
item/page ID collisions, draft pages and malformed inventories fail closed.

Split derives `carrier_kind: page`, `observation_basis: split-current`, and
`page_dependency: {path, supplier_ids}` (sorted reachable published members).
Its `observed_sha256` fingerprints `{file_sha256, page_dependency}` at routing
time. This is a current routing guard, never evidence of the reader's observed
bytes or an item `pre_sha256`; original reports remain unchanged. Checks rederive
page identity, published membership and exact owned-consumer reachability.

The obligation retains route `reader` and ordinary adjudication/ledger duties.
A confirmed nonfatal page defect may be `nonfatal-recorded`, or `fixed` after
explicit authorized correction and actual review. A fixed disposition fails if
the page carrier is unchanged; any correction requires fresh decision stamping.
The decision must retain the exact `consumer_id`. Page support grants no source
write authority, item repair claim, refuter coverage exemption or
`context_accepted` receipt. Imported pages remain read-only. Native page prose
maintenance requires owner authorization, exact preimages and writer checks;
claims and supplier interfaces retain their ordinary consumer-review duties.
