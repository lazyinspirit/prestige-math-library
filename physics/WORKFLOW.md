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

Freshly planned run namespaces now select the compact statement-first revision: every item
class has an uninterrupted statement/description with links afterward, one per
line and paragraph. A/B summaries are not generated: authors write frontmatter-only pages. Code
requires empty bodies and sets compact-layout metadata after initial authoring. Prerequisites render as a
disclosure collapsed by default. The native six steps, models and repair limits remain. The physics compact adapter
(`tools/physics-autopilot/src/page-layout.mts`) uses the private
`tools/physics-support/page-layout.mjs` preparation/check helper. It accepts mixed
locally authored mathematics and physics A/B frontiers only when each page's
explicit `library` equals its current manifest's `mathematics` or `physics`
classification. Pinned mathematical imports (including relocated page IDs),
symlinked pages, summaries and unrelated pages remain outside its write scope;
the drained-author join and native presentation gates retain their existing duties.
The physics-owned statement-first composer invokes
`tools/physics-support/statement-first-check.mjs`, which calls the existing
statement checker through a realpath-aware CLI boundary. This retains the
manifest selection, imported-subject rejection, command flags, defect status and
nonempty item-count liveness when invoked through this workspace's `tools` symlink.
Existing runs retain their selected stages and original policy, including after
restart. See [activation and mechanical checks](../tools/STATEMENT-FIRST.md).

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

The physics `fwdcheck` plan-order check permits a B page to require its own A
page at the same finite numeric order only when the canonical plan names unique,
reciprocal A/B companions with the same category and library. An A-to-B
requirement, shared or duplicate companion identity, unrelated equal-order
prerequisite, or later prerequisite remains an error. This matches the canonical
pair representation without changing item forward-reference, spine, or cycle
checks. Use `--items-file` for the actual nonempty frontier selection.

## Owner-requested Step-1 author continuation

An operationally successful author process can leave actual inventory or authored
carriers missing. For the active, unclosed `1-scaffold` stage only, the owner may
request one native continuation per unit after that unit and its exclusive cohort
writers drain. Independently scoped sibling authors may continue. This is an
explicit recovery request, not automatic redispatch of successful workers:

```bash
node tools/tsx-run.mjs tools/physics-autopilot/bin/autopilot.mts refresh \
  --run RUN --state-dir .physics-autopilot/RUN --stage 1-scaffold --unit N \
  --reason 'Concrete operational cause, its resolution, and unfinished authoring'
```

Before requesting, write current explicit authoring directions to
`research/RUN-owner-authoring-direction.md`. The controller requires the exact
existing run, a successful original native `beta-batch-N.result.json` and its
nonempty original prompt, and missing authored carriers or inventory. It preserves
that evidence and creates a request-specific task containing the complete original
prompt, current directions and owner reason. The continuation retains the physics
author model, scheduling, scope, physical qualifications and all proof obligations.

A fresh `batch-N-refresh-REQUEST_ID` label has the ordinary bounded process retry
budget; duplicate pending requests retain the same label. Only an engine-started,
matching fresh successful native result discharges the request. Coverage masks that
unit until then, including after restart; siblings keep their coverage. Actual
artifacts and the complete ordinary Step-1 battery remain required. A second
continuation for the same unit is refused, and an unresolved result escalates to
the owner. Closed stages cannot be reopened by this command. The CLI only writes a
control request; upgrading controller code and supervising restart/resume remain
owner operations.

## Guarded prerequisite append during Step 1

An explicitly owner-approved prerequisite extension may append pairs while the
original Step 1 remains unclosed. Stop the controller after pausing new dispatch
and draining **all** native/adopted writers. Every later step must be unstarted.
Archive the prior canonical plan before registering only the new reciprocal A/B
rows, with complete proposed item declarations and actual source/design dossiers.
Do not transcribe the old frontier from a stale plan or repack its batch IDs.

The physics native planner supports an explicit append transaction:

```bash
node tools/tsx-run.mjs tools/physics-autopilot/bin/autopilot.mts plan --append \
  --run RUN --state-dir .physics-autopilot/RUN --pairs NEW_A,NEW_B,NEW_C \
  --prior-plan research/EXACT_PRIOR_PLAN.json \
  --source-evidence research/EXACT_DESIGN.json,research/EXACT_SOURCE_DOSSIER.md \
  --base-disposition-review research/EXACT_ROOT_PLANNING_DISPOSITION_REVIEW.json
```

This does not write native state or acceptance. It validates the paused/drained
boundary, pair cap, exact ownership, new-scope buildability, and plan projection;
archives original manifests, source/task/history bytes and review inputs; appends
fresh batch IDs; and regenerates the scope ledger, covers, planning groups,
new tasks and last valid dependency graph. Existing manifest/item/task bytes and
native drift report/results remain unchanged. An active or interrupted append
lock blocks another preparation and controller start. Both observed native
controller lock names (`.controller.lock` and `controller.lock`) are checked.
The exact read-only `RUN-supervision-checkpoint.json` may advance during review;
if explicitly bound as source or owner evidence it remains immutable. No other
run-file preservation rule changes. Failed preparation restores its generated
files and retains a failure archive for inspection.

Original blocked-section owner dispositions must first be genuinely rechecked
against current original-frontier evidence. Stale input hashes fail before any
append mutation. The archive then authenticates historical inputs, so later
legitimate authoring does not retroactively alter that review. Explicit
`current_inputs` remain live obligations. Reclassifying a research planning input
as historical requires a separate actual Root review, never a mechanical hash
refresh. The optional `--base-disposition-review` file has version 1, `run`,
`reviewer: /root`, `kind: historical-scoped-planning-dispositions`, exact
`owner_resolution_sha256`, `scope_ledger_sha256`, `prior_plan_sha256`, the original
resolved `pages`, a substantive `reason`, the explicitly reclassified
`historical_current_inputs` subset, and nonempty `{path, sha256}` source evidence.
It is required when extending a plan recorded as an explicitly current obligation.
Mathematical source obligations cannot be reclassified by this planning route.

On the owner's guarded restart, two native internal stages precede ordinary
scaffolding: `1-append-drift-N` dispatches a fresh physics Luna-max Alpha for
exactly the new A pages, and `1-append-apply-N` applies that review only to the
new batch metadata. Original units and completed stage history are retained.
Both joins require ordinary owner formatting/metadata receipts for exactly the
new proposed declarations; original items remain context. This avoids requiring
a missing consumer proof before planning its prerequisites. The source and
low-homotopy dossiers are review inputs, not accepted authored proofs.

The fresh report is `research/RUN-alpha-step1-append-N-drift.md`; its genuine
current/immutable-attempt native results must match before application. The
report may correct only new-row prerequisite/order fields and cannot drop or
rewrite proposed item scopes. A blocked supplemental review stays a hold unless
Root supplies a separate source-bound
`research/RUN-append-N-drift-owner-resolutions.json` tied to that actual new
report/result and its exact blocked sections. It grants no old-report rewrite
or fabricated native coverage. The ordinary drift gate reads an authenticated,
separately attributed composite view; it never modifies the original report.

After application, the new batches still require complete ordinary authoring,
readiness, independent review and all later gate batteries. Any missing original
consumer carrier or newly needed consumer edge is a separately preserved,
explicitly authorized repair; append itself never changes an old batch. Do not
use ordinary `drift-apply`, a global plan sync, `plan --force`, or hand-written
native state to implement this extension.

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

## Supplemental prerequisites while Step 2 is unfinished

The physics-only `prerequisites register` transaction supports explicitly
Root-approved missing mathematical prerequisites discovered in Step 2. It does
not reopen Step 1, extend its historical review coverage, or resolve the
originating escalation. Without a registration registry, stage composition,
units, workers and gates are unchanged. The existing Step-1 `plan --append`
boundary remains strict.

Root first pauses dispatch, drains every native/adopted/outside source writer,
and stops the controller and preflight processes. The exact unfinished paused
stage must be `2-scope-review`, original `1-scaffold` must have passed, and no
later stage may have entered. Both controller locks and the shared metadata lock
are checked, alongside process scanning and Root's explicit drained attestation.
The state directory and state file must resolve regularly inside the physics
workspace; symlinks, dangling target links and nonregular inputs are rejected.
Commit the current canonical plan, all existing manifests, scope ledger, covers,
group assignment and dependency-level metadata on main before registration.
Original source repairs and any existing page's inventory update must already
be in their intended form: supplemental authors cannot change original sources.
An exact argument may honestly depend on a pending supplier; that supplier is
not accepted or proved merely because it is planned.

From the physics workspace:

```bash
node tools/tsx-run.mjs tools/physics-autopilot/bin/autopilot.mts prerequisites register \
  --run RUN --state-dir .physics-autopilot/RUN \
  --request research/RUN-step2-prerequisite-request-1.json
```

The version-1 request has `run`, `reviewer: "/root"`, a substantive `reason`
(at least 80 characters), the exact 40-hex `base_commit`,
`writers_drained: true`, `writer_scopes: []`, `escalation: {path, sha256}`
naming the actual current held `RUN-scope-review/batch-N/state.json`, and
nonempty `evidence: [{path, sha256}]` naming genuine source/design work.
Every evidence path is a regular run-local research file. `pairs` contains
`{pages: [A, B]}` entries with complete new reciprocal mathematical declarations:
unique identity, category, order, `requires`, and nonempty exact item objects
with `id`, `kind`, `domain`, `library`, `statement` and `deps`. Both pages use
`library: mathematics`; item domains are mathematics. These are scope promises,
not proof acceptance. Draft carriers may be incomplete or absent.

Every already existing new-pair item/page carrier also requires exactly one
`source_adoptions` entry: `{path, sha256, page, ownership:
"unowned-local-draft", reason}`. The reason concretely explains Root's source
ownership grant (at least 40 characters); `sha256` binds the actual current draft
bytes. This grants subsequent scoped native authorship, not proof acceptance.
Missing carriers need no entry. The lightweight actual identity/alias/page-home
index rejects collisions even outside the canonical plan.
Empty/null page inventory fields contribute no members; the page's identity
remains indexed, and malformed non-null inventory shapes remain blocking.
Any foreign run's manifest claim remains blocking, including for a draft with
an adoption entry.
Nonempty foreign `pipeline_run` markers also block adoption even when their
manifest no longer exists; this route supplies no orphaned foreign-owner release.
The relevant ownership projection is rechecked before install and interrupted
completion; unrelated prose is not an ownership claim.

New pairs get fresh contiguous batch IDs after the current frontier. Original
inventory promises retain their contents and relative order; only explicitly
listed existing-page additions alter old manifests. Batch IDs, original group
membership and source/native history remain intact.
The ordinary prospective plan validator checks identities, prerequisite closure,
ordering and cycles before installation. Do not omit a real edge to evade a
page cycle; suppliers and consumers need a genuinely consistent placement.
The transaction adds canonical declarations/manifests, extends the owed scope,
covers and groups, derives the full dependency graph and writes exact new tasks.

`research/RUN-step2-prerequisites.json` records the original construction units
and separate supplemental generations. Each generation with new batches inserts
`2-prerequisite-construct-N` after the completed Step-1 prefix and before the
unfinished scope review. Actual Luna-max authors use distinct
`beta-prerequisite-N-batch-B.result.json` identities. They author only their new
pair's sources and actual batch evidence, preserve exact approved inventory,
complete contracts, source coverage and current readiness, and escalate gaps.
No original `beta-batch-B` result, Step-1 gate pass or scope acceptance is written.
The original Step-1 unit projection remains frozen; Step 2 and later stages use
all actual current manifests.

Supplemental construction retains the complete current-frontier content,
metadata, dependency, policy, contract, finite-check and gate-liveness duties,
plus new-item readiness and exact supplemental source coverage/fetch/backing
checks. Source outputs have separate generation filenames. Compact-page
preparation waits for the supplemental authors to drain. Root still resolves
all escalations and supplies fresh ordinary full-frontier owner preparation
before any battery. Registered declarations, missing carriers, incomplete proofs
or successful processes alone cannot pass construction. Original item/page
sources, manifests and native receipts are digest-protected through this join;
finish their intended original repairs before registration or wait until the
supplemental join completes. Once constructed, new batches automatically enter
the ordinary two-review/one-local-repair Step-2 loop with fresh counters.
Supplemental failures write `RUN-prerequisite-N-blockers.json`; original
`RUN-step1-blockers.json` remains historical evidence.

An already genuinely authored local prerequisite may instead be appended to an
existing held batch's A page through
`additions: [{batch, page, items, review:{path,sha256}}]`.
Optional `before: "EXISTING_ITEM_ID"` inserts its suppliers before an existing
consumer without changing the relative order of any original items; otherwise
the additions append. The actual page inventory must already match that order.
This does not dispatch another author for that existing batch. Root's immutable
review JSON has `run`, `reviewer: "/root"`, `native_review: false`,
`decision: "accept"`, a substantive `reason`, exact added `items`, their current
`source_sha256` map, and complete current `consumer_checks` with `id`,
`decision: "accept"` or `"unaffected"`, and a concrete `reason` (at least 40
characters). `consumer_sha256` binds exactly every actual direct/indirect
consumer, including aliases and nonlogical uses; use an empty map/list only
when no such consumer exists. Root first updates the actual page inventory and
supplies genuine owning contracts and source coverage. Registration adds only
the declared plan/manifest inventory. Ordinary `owner-resolve` then binds the
expanded inventory and actual review while preserving previous observations,
review counters and repair budget. Source/review drift remains blocking until
Step 2 closes; genuine later native repairs do not erase historical acceptance.

Import snapshots and pins never change. Enlarging the manifest frontier or
adding an item invalidates the exact existing authored-frontier original
successor authority. Root must supply fresh actual bindings to the complete new
frontier, declarations and reached consumer sources before authorizing the
ordinary battery. A previous run's or previous scope's receipt is not reusable
authority. Registration neither generates that scientific review nor relaxes
the import guard.

This route creates **no backups or preimage copies**. Prior committed versions
are identified by existing Git commit/blob objects; original native history is
retained. Every prospective output is validated/precomputed before installation.
A durable exclusive lock and digest-only journal guard atomic file replacements;
temporary files contain prospective output only. Native state is not edited.
An interruption blocks controller start. With the same stopped/drained boundary,
`prerequisites finish --run RUN --state-dir .physics-autopilot/RUN` checks every
target against its exact before/after digest before completing that same
transaction. Unexpected edits, changed evidence/state, missing prospective bytes
or an interruption before the complete journal cause a fail-closed refusal;
there is no automatic rollback or replacement acceptance. The completed journal
is retained as immutable digest evidence. Root owns inspection and any further
reconciliation.

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
A `same-page-carrier-classification` alias preserves different original labels
or severities for one page finding. It binds both frozen reports and findings,
the original page snapshot and matching raw archive, the current manifest-derived
page path and excerpts, and a root-approved scientific classification receipt.
Only this page route treats absent and null consumer fields alike; a different
consumer still fails. Existing item aliases keep their original requirements.

A `legacy-v2-same-source-distinct-carrier` alias authenticates assigned item
findings that predate `observed_source`. It binds the unchanged pre/post
snapshots, original raw source and manifest archives, the archived contract
that reproduces the refuter fingerprint, and the genuine native continuation
authorization for that raw source. Root records the same-issue classification
and current repair excerpts. Both original observations remain unchanged and
share one actual defect row. This legacy route normalizes absent/null consumer
fields only within its guarded class; current item-alias rules remain intact.

A same-batch touched or page repair may share its actual defect with a refuter
of the frozen reader-result carrier. Both obligations remain explicit. Sharing
requires an accepted or amended repair with confidence 1, a confirmed refuter
finding, an exact original finding and typed post-reader snapshot, and an
explicit same-defect reference with substantive evidence. Independent ledger,
severity, current-content and application checks remain mandatory.

Root may classify independent **reader/flagged findings only** as one actual
repaired defect through `research/RUN-step3-root-shared-findings.json`. Decisions
point to its raw SHA256 with `root_shared_finding_receipt_sha256`. This is a
separate scientific classification route: original findings may have different
raw-source observations or an originally unbound observation. It never asserts
historical byte equality, adds a native finding, or shares touched/page coverage.
An independent producer's touched nonfatal cover repair retains its own row;
only actual frozen fatal findings participate in the shared fatal row. Legitimate
severity reclassification uses an append-only taxonomy successor; original
finding severity and observation fields remain exact. All participating decisions
must have the same final `confirmed_fatal` or `confirmed_nonfatal` verdict,
confidence 1, and the current canonical fixed row's severity. Ordinary source
application, consumer checks, ledger validity, readiness and full gates remain.

The receipt schema is version 1, `run`, `reviewed_by: root`,
`kind: root-adjudicated-shared-findings`, `inputs` (path → raw SHA256), and
`findings`. Each finding entry has `canonical_defect_id`, `subject`,
`canonical_row_sha256` (canonical object hash), `one_actual_defect: true`,
`final_severity`, a substantive `rationale` of at least 100 characters,
`participants`, `scientific_evidence`, `current_carrier_sha256`, `current_source`
(`{path, sha256}` for the actual item), and 2–12 distinct
`reviewed_source_excerpts` of 80–4000 characters actually present in that source.
At least two distinct existing scientific evidence guards `{path, sha256}` are
required; routing scopes, decisions and original reader/refuter reports cannot
stand in for scientific reviews. Every guard and the current source must appear
in `inputs`; native owner recertification recursively binds those inputs and the
verifier code. This is Root's explicit same-issue judgment, not a new independent
scientific review or proof-acceptance stamp.

Each participant has `batch`, `obligation` (`reader:N:K` or `refuter:N:K`),
`route` (`reader` or `flagged`), `decision_path` (the canonical
`research/RUN-alpha-batch-N-3a-decisions.json`), `decision_core_sha256`,
`frozen_finding_sha256`, `scope_guard`, and exactly two `report_guards` for
`RUN-reader-findings-N.json` and `RUN-refute-N.json`. Their hashes must equal
the frozen scope's report hashes. The complete participant set must equal the
canonical row's complete `adjudication_ref` set. Each decision references only
that canonical defect ID. Decision cores exclude only their own receipt pointer
and `subject_sha256`, avoiding circular hashes while ordinary current stamp
checks remain mandatory. Decision files remain native recertification inputs;
do not put their raw hashes in the receipt's `inputs`, creating a circular
receipt/decision hash. Frozen original unbound observations retain explicit
`historical_delta_unknown` and owner-resolution limits, never a manufactured
historical `observed_source`.

One bounded refuter coverage correction per unit may be authorized through
`research/RUN-step3-refuter-continuations.json`. When the native receipt's
40-line diagnostic clips the coverage headers, `original_last_message` can bind
the exact prior positive-attempt native message file. Its parsed complete report
must equal the immutable report archive; receipt identity, archive hashes and
the diagnostic suffix still authenticate the original process. Current scope,
task and subject guards are checked before that unit's single fresh dispatch.
Multiple units require distinct unit entries and exact correction labels; each
retains its own immutable receipt, archive and one-attempt budget. Only selected
pending correction units undergo pre-dispatch current-input and spent-attempt
checks, so a completed sibling does not block another unit. Every corrected
unit's original stable receipt is excluded from coverage, and only its exact
correction stable filename can replace it; attempt filenames cannot do so. This
authenticates history only: fresh complete reads, collection, adjudication and
the ordinary gates remain required. The original report and receipt are never
rewritten to manufacture coverage.

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
The exact existing canonical ledger digest/count is checked first. If later
taxonomy successors were appended, verification retains the original receipt's
row count as the filtered JSONL append-prefix boundary, then canonically sorts
that prefix and requires its exact original digest/count. Every omitted tail
row must pass full taxonomy-only lineage and substantive-field checks; those
checks run over all run rows before projection. Taxonomy successors already
frozen remain included. No original or substantive row may be dropped, and
inherited timestamps grant no projection authority. Ledger rows, frozen reports
and closure receipts are never rewritten by verification.
Step-3 readers and refuters use GPT-6 Luna/max; batch adjudicators use GPT-6.1
Sol/medium. Step-4 read-only batch readers use GPT-6.1 Sol/medium, and the
per-item judge sweep uses GPT-6 Luna/max.
Source and empirical qualifications survive regeneration. Step 4's read-only
batch digests use `RUN-batch-N-step5-context.json`; a digest from another batch
cannot cover the inventory, and retries target only failing batches. An empty
`load_bearing` list is allowed only when the nonempty owned manifest inventory
consists entirely of remarks/open problems with matching current source IDs and
kinds. Missing, malformed or inconsistent classification retains the nonempty
requirement; mixed batches retain it as well.
Cross-batch page alerts route to the page's owning group, like page concerns.
Published supplier alerts remain in the original digest as read-only context;
they do not acquire run ownership or authorize repairs to imported mathematics.
This also applies to published pages identified by their actual library
frontmatter; unknown, draft, or ambiguous page targets still fail routing.
Unknown targets and alerts about the sender's own batch still fail the digest gate.

Step 5 retains the round-based adjudication/repair engine, supplier-before-consumer
maintenance, frozen frontier guards and its complete gate battery. Its final
frontier adapter recognizes every schema item prefix, including `op-` open
problems, while retaining frozen identity/hash checks and the ordinary published
maintenance distinction. An owned open-problem finding remains blocking;
outside findings retain raw evidence and are excluded without being passed. Boundary-audit
JSON and defect-ledger check output drain fully through native pipes before
exit, preserving every diagnostic, strict failure status and genuine liveness
summary. Complete transport does not uphold boundary candidates or waive
current review bindings. An
optional run-local `RUN-owner-step5-support-index.json` points native workers to
outside proposals and genuine prior focused checks as read-only evidence.
It grants no source ownership, review authority, or transition permission;
workers verify current arguments and bind only immutable evidence actually used.
Versioned root-published `RUN-owner-step5-support-supplement-*.json` supplies
later evidence without modifying indexes already used by workers.
For an already-published local carrier excluded from original initial
adjudication assignments, Root may bind a separate, genuine local correction
through `research/RUN-step5-v2/owner-published-maintenance.json`. The version-1
request has `run`, `phase: "initial"`, `round: 1`, `reviewer: "/root"`,
`native_review: false`, `native_adjudication: false`, a concrete `reason`,
`drained_state: {path, sha256}`, and nonempty `entries`. Each entry has `id`,
the actual published claim `group`, `receipt: {path, sha256}`, and nonempty
`scientific_evidence: [{path, sha256}, ...]`. Evidence paths are relative,
run-local research paths; hashes bind exact raw bytes. Root explicitly adopts
the actual scientific owner's focused repair and affected-consumer review in
the request, without claiming a native worker performed that review.

The source-application snapshot must be an actual paused, drained, unfinished
`5.1-adjudicate` state. Apply only after source writers drain and preserve the
published source with its prior audit before claiming and editing. At native
collection, the current run must still be at unfinished `5.1-adjudicate`, every
source dispatch must be drained, and no shared writer lock may exist. Collection
may run after resume; the native `step5-wave-evidence` gate is an untracked
read-only subprocess, not a source dispatch. Remaining original units may finish
normally after the archived application boundary.

Only an unassigned, nonimported published carrier in the exact frozen original
frontier is eligible. Its policy-valid `verification.repair` receipt must match
the actual run and claim group, original initial content and public-interface
hashes, durable audited preimage, current source, canonical ledger marker and
actual current successful focused checks. Current audit stamps are replaced by
this local repair state. Collection binds the immutable request, receipt,
preimage and scientific evidence, records the exact claim-row and ledger-block
hashes, and revalidates them on replay. Unrelated canonical claim/ledger appends
remain legal. No native author, review, decision, judge tuple or gate authority
is created. Every unlisted source change retains ordinary licensing checks.
Published interface changes still produce normal consumer events; published
consumers remain in separate maintenance even when their IDs occur in the
frozen frontier. Draft consumer inventory, genuine current native reviews,
context checks, owner recertification and the complete gate battery remain
required. The initial pack, original reports and mechanical zero-work results
stay immutable.

An explicitly authorized user edit already applied only to existing diagram
explanation prose in `## Remarks` has a separate read-only native adoption route.
It does not use the published-repair exemption. Root advertises
`research/RUN-step5-v2/owner-explanatory-edit-review-request.json` with
`{version:1, run, request:{path,sha256}}`, naming immutable
`owner-explanatory-edit-review-ID.json` in that directory. The request contains
`version:1`, `run`, `phase:"initial"`, `round:1`, `reviewer:"/root"`,
`kind:"user-authorized-preapplied-remarks-edit"`, `source_edit_authority:false`,
`native_execution_coverage_adopted:false`, a concrete `reason`, a bound
`user_authorization:{path,sha256}`, and nonempty `entries` with `id`,
`before_source:{path,sha256}` and `current_source:{path,sha256}`. All evidence
is exact-byte, run-local research evidence; no original source is invented.

Each target must be an unassigned local draft in the original frozen frontier.
The genuine original source must match both the immutable initial content hash
and the Step-5 auditor baseline's raw carrier hash. Only the prose between the
unique Remarks heading and existing TikZ fence may differ: the complete prefix
and TikZ suffix remain byte-identical. New headings, fences or links are outside
this bounded route. After original writers drain, native `onProgress` creates
`explanatory-review-initial:1`, retaining the Sol 6.1 high profile. The worker
reviews the exact explanations, unchanged claims/proofs/diagram, actual suppliers
and current context, records actual focused checks, and changes no source or
shared metadata. It returns actual `unaffected` reviews and separately attributed
`user-authorized-side-edit` adoptions, with no adjudication or authorship claim.

Native completion requires the exact current target sources, genuine current
review contexts and authorized completed native dispatch. Original workflow
artifacts, canonical ledger, current run batch pages/contracts and relevant merged
pages/contracts are protected during this read-only child. The engine seals the
actual review and pauses once before parent collection, allowing Root to advertise
later scientific owner findings. Those later authorized repairs do not rewrite or
permanently freeze the child's historical metadata. A sealed review retains its
actual old context; later supplier changes require ordinary fresh impact review,
never a substituted digest. Verification-only bookkeeping retains the normal
canonical-content boundary. The initial parent binds the exact actual child
review and adopted source guards while preserving every original pack, report,
assignment and judge tuple. All other draft writes still require ordinary source
ownership and review. Authentic published maintenance is checked before both
intermediate historical parent validations and final validation, without projecting
away those changes. Normal current-context closure, certification, rejudgment,
owner recertification and complete gates remain required.

An unchanged assigned consumer may retain `confirmed_nonfatal` after its exact
citation defect is resolved by a supplier repair in the same native adjudication
unit. The consumer review remains `unaffected` with `metadata_repair_only: true`.
Collection requires the original frozen tuple and original native decision,
review and exact consumer-use evidence, unique same-unit ownership, an actually
changed direct logical supplier interface, that supplier's own confirmed
adjudication and repaired current post hash, and current native review contexts
for both carriers. The frozen objection must identify that supplier explicitly.
A metadata flag alone, an unchanged fatal consumer, an unrelated or separately
owned supplier, stale review or absent interface change grants no exception.
Separately authenticated corrections to other subjects in the same unit may
compose; target supplier/consumer rows still equal the original report. This
route preserves the original reports, decisions and all ordinary source-change,
contract, dispatch, downstream, certification and gate checks.

The native Sol 6.1 high worker identity is independent of the Step-4 judge lineup.
Coverage gates retain the singleton original Step-4 lineup bound by the frozen
`step4-verdicts.json` and initial adjudication pack. Before Step 5 is frozen,
modern runs use Luna. Mixed, unknown or unbound frozen lineages fail closed.
Current Step-5 certification is checked first with all existing content and
context guards; it is not a replacement judge verdict. Sol 6.1 high repair and
rejudge work retains its own identity, without requiring untouched original
items to acquire a different judge lineage.
Step-6 stamp preparation and final stamp verification use this same authenticated
frozen Step-4 lineup as closure and coverage, overriding the standalone tool
default. Authenticated legacy singleton lineups retain their original model;
only runs without any frozen Step-5 authority use the modern Luna fallback.
Current Step-5 certifications retain their separate content/context guards and
do not manufacture judge pass stamps.
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
owner queue before initial or repeat collection. Root advertises an immutable
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

Intake requires the exact live pre-collection stage (`5.1-adjudicate` for
`initial`, `5.5-adjudicate` for `repeat`), with every native writer drained,
no shared metadata lock, and no immutable parent collection or impact certificate.
After all writers drain, the engine freezes
`owner-finding-correction-PHASE-ROUND.json` with disjoint lanes 1, 2 and 3 and
binds its exact tasks in `owner-finding-correction-PHASE-ROUND-progress.json`.
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

A retained owner-finding advertisement from an earlier wave is ignored at new
intake only after authenticating that exact request, frozen progress and pack,
original bound inputs, completed native lane reports and dispatches, and the
child/parent collection under the earlier sealed impact certificate. Historical
repairs may have later source successors; their old reviews are never rebound
to current sources. A fresh, unconsumed, same-wave or future mismatched request
keeps the ordinary blocking checks. Root may advertise a genuine later queue
without changing the earlier request or collection. A consumed parent replays
its own immutable bound queue evidence through ordinary collection validation;
it does not reinterpret the newer advertisement as its historical authority.

An earlier collected single-subject correction remains bound to its genuine
collected `post` snapshot and immutable native evidence. Later source differences
are permitted only for the exact subjects of a separately authenticated completed
root queue starting at that snapshot. Its own live subject and current dependency
review must still match. A caller-supplied historical hash map is not authority.
These continuations do not authorize outside source writes, bypass gates, alter
original reports, or waive normal consumer/context closure and certification.

A distinct preexisting page-summary defect referred by a completed initial
adjudicator has a separate one-page native route. It is confined to round 1's
drained `5.1-adjudicate` join, before parent collection and impact certification.
Root advertises `owner-page-correction-ID.json` through
`research/RUN-step5-v2/owner-page-correction-request.json` with `version:1`,
`run`, and `request:{path,sha256}`. The immutable request contains `version:1`,
`run`, `reviewer:"/root"`, `phase:"initial"`, `round:1`, `subject` (page ID),
`page_path`, `batch`, `root_finding:{defect_id,record:{path,sha256}}`,
`before_source:{path,sha256}`, `before_raw_sha256`,
`native_outcome:{path,sha256}`, `batch_digest:{path,sha256}`,
`scientific_owner` and `scientific_proposal:{path,sha256}`. Evidence must be
run-local research with exact raw hashes; the state directory is the run's
ordinary `.physics-autopilot/RUN`.

Intake requires the unique current-run manifest owner and canonical draft
physics page, matching page inventory and frozen original batch members, no
imported page, an exact unsuperseded OPEN canonical owner page finding, and
genuine current before bytes. The original completed Sol 6.1 high native
report/task/pack/dispatch must authenticate an assigned member of that same page
and an explicit `repair_notes.page_uses` referral with `refer_page_owner`.
Its bound Step-4 batch digest must contain the exact page concern. Neither a
companion item assignment nor a page concern alone grants this permission.

The original scientific owner's proposal binds the same referral, page preimage,
current guard, one exact unique body excerpt/replacement, and unapplied candidate
and patch bytes, plus its actual page finding. Frontmatter, inventory and
prerequisites must remain identical. After genuine item-queue completion, if
present, the engine freezes `page-correction-initial-1.json` and its task/progress
and dispatches only `page-correction-initial:1` to native Sol 6.1 high. The child
must independently check the proposed qualified claim and actual supplier uses;
an unsound proposal or necessary additional repair blocks completion.
It may author only that exact one-page prose correction and its own report,
using the shared write lock for the page. No item, other page, contract,
manifest, ledger, tuple, original report or prerequisite edits are authorized.

The child returns `page_review`, exact unaffected `consumer_reviews`, and one
typed `root_finding_resolutions` row, with ordinary item `decisions`, `reviews`,
`created_items` and `downstream` all empty. After actual current page/consumer
review, `step5-workflow.mjs page-review-context --run RUN --round 1` supplies
the current page raw hash and source-context hash. These hashes preserve currency
and grant no whole-library review acceptance. Completion authenticates native
identity and every original evidence file, requires the actual changed-source
set to equal this page alone and its exact approved excerpt correction, and
preserves all original item/library bytes and owning metadata. Original workflow
evidence stays unchanged; genuine parent retry outputs remain replayable.

Parent collection retains every ordinary item guard and adjudication, records
the separately authenticated page correction and immutable receipt, and binds
the current page raw guard through its ordinary gates and certification. It
waits for both item and page corrections before collecting once, then uses the
existing owner-findings pause for Root canonical closure before the next gate
snapshot. Replay verifies the immutable parent, child receipts and retained
original finding rows instead of reopening already closed findings; Root's
append-only fixed successors are allowed. While the initial join remains live,
its exact current source snapshot and page-review context must still match.
Later native impact stages retain their ordinary historical source semantics.
This route adds no item judge tuple, item fatal count, outside
authorship, general page permission, impact reopening or gate waiver.

An unchanged originally false-positive item with one malformed native review
stamp has a separate read-only recovery at the same initial round-1 drained
join. It applies only when the exact original `unaffected` review has a 65-hex
`review_context_sha256`, its content/raw guards remain genuine and unchanged,
and that row is the sole original historical `validateReports` failure. A
source repair, valid-but-stale stamp, missing scientific review, different
verdict or additional collection error does not qualify. Never truncate or
guess a corrected hash, refresh old acceptance mechanically, or edit the
original report.

Root advertises immutable `owner-review-correction-ID.json` through
`research/RUN-step5-v2/owner-review-correction-request.json` using the ordinary
`{version:1,run,request:{path,sha256}}` pointer. The request contains
`version:1`, `run`, `reviewer:"/root"`, `phase:"initial"`, `round:1`,
`subject`, `original_unit`, raw path/hash references `original_pack`,
`original_report`, `original_task`, `original_dispatch`, the exact
`original_tuple` and malformed `original_review`, `before_source:{path,sha256}`,
`before_raw_sha256`, `before_content_sha256`, `diagnosis:{path,sha256}`,
`runtime_finding:{defect_id,record:{path,sha256}}` and
`ledger_before:{path,sha256}`. The actual completed native Sol 6.1 high
assignment, frozen frontier, unchanged original/current carrier, original
false-positive decision and exact owner diagnosis must all authenticate.
The canonical runtime record must be an OPEN owner
`breaking-runtime`/`prompt-transcription` finding.

When the page child already bound the old canonical ledger, Root preserves
its genuine raw ledger preimage before appending that one runtime finding.
The page's old hash is neither rewritten nor ignored: its protected ledger
may differ only if this exact request authenticates that exact preimage hash
and current ledger bytes are precisely the unchanged prefix plus this single
runtime row. An edited prefix, additional row, stale reference or unrelated
metadata change fails. This narrow transition grants no source, ledger-edit,
review or gate authority.

After the item and page children genuinely finish, one native Sol 6.1 high
`review-correction-initial:1` child actually reviews the exact current item and
supplier context, then obtains its fresh ordinary `review-contexts` hashes.
It may write only its own report: one `unaffected` review and typed runtime
finding resolution, with empty `decisions`, `created_items` and `downstream`.
Every item/page source and original report, tuple, metadata and ledger byte
must remain unchanged during this child. Missing/uncertain/stale reviews or
wrong native identity block completion.

The authenticated parent projects only the fresh native
`review_context_sha256` into that exact original review row for historical
and effective validation. It preserves every other original review field,
decision and tuple, and records the separately attributed actual native review
and immutable correction receipt. Both source-changing correction sets still
authenticate normally; the parent collects only once, then pauses for Root
canonical closure. Appended fixed successors for the runtime and scientific
findings retain original OPEN history. Replay authenticates those original
records and current source guards while the initial join is live, without
reopening already closed findings. No general report repair, source edit,
fabricated stamp, judge tuple or gate waiver is introduced.

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

Initial certification has a separate exact metadata transition when the
immutable `initial-1-collected.json` predates genuine completed native initial
impact repairs. It applies only at `5.3-certify`, initial impact round one,
before any certificate exists. Root may advertise
`research/RUN-step5-v2/owner-initial-metadata-request.json` containing
`{version: 1, run, request: {path, sha256}}`. The request names immutable
`owner-initial-metadata-ID.json` in that workflow directory. It contains
`version: 1`, `run`, `reviewer: "/root"`, `phase: "impact-initial"`, `round: 1`,
raw references `source_collection`, `impact_progress`, `impact_closed`,
`predecessor_gate`, and a nonempty `artifacts` array. References use relative
run-local paths and SHA256; the predecessor names the actual consumed
`.physics-autopilot/RUN/owner-gate-history/ATTEMPT.json`.

Each artifact declares `kind` (`owning-proof-contract` or
`owning-page-manifest`), canonical `research/RUN-batch-N.proof-contracts.json`
or `research/RUN-batch-N.pages.json` `path`, `batch`, authenticated raw `before`
archive, exact live `after_sha256`, and `changes`. Every change contains one
scalar `json_pointer`, its frozen owning `subject`, and exact native `pack`,
`task`, `report`, `dispatch` references in `native`. The complete parsed scalar
diff must equal these unique pointers, including every leaf of a newly added
object. Historical archive bytes must equal the original collection's exact
binding; Git can supply a missing preimage only when its actual bytes reproduce
that hash. Neither a hash assertion nor a reconstructed approximation suffices.

Supported contract fields are exact citation quotes, derivation claim mirrors,
and the native `owner_repair` dispatch/kind/evidence/false-independent-acceptance
record under the assigned subject. Every contract subject requires a direct
structured successful strict scoped native validator row, followed by an actual
current strict scoped contract check during intake with unchanged raw bytes.
Supported page fields are source-reference title mirrors under the assigned
subject row; the complete current source mapping must equal the item's actual
frontmatter, and the assigned native source repair must have changed its guard.
Both artifact types require authentic closed impact progress, native assigned
Sol 6.1 high authority, current item guards and review contexts, drained writers,
and the consumed complete `5.2-impact` battery with passing full-frontier Root
formatting/metadata checks and current item/manifest bytes. This authenticates
the actual predecessor; it does not claim that its snapshot bound contract raw
hashes. No new predecessor battery or engine stage is introduced by this
bookkeeping transition.

Only the new certificate receives current hashes, raw archives, immutable
request/native/closure/gate evidence, and typed `initial-native-metadata`
transitions. Original reports, supporting evidence, collections, receipts,
sources and existing certificates remain immutable. Unlisted scalar changes,
other metadata fields, source/proof substitutions, unsupported artifacts and
unrelated stale evidence fail closed. Ordinary evidence verification and the
normal certification-stage gates remain strict.

A consumed earlier owner-finding queue retains its original metadata hashes in
its parent, progress and child receipts. If an original initial-impact
certificate sealed an `initial-native-metadata` transition, historical queue
replay may resolve that exact old canonical metadata guard to its already
certificate-bound raw archive. The unique transition must match the supported
canonical artifact, original/current hashes, immutable Root request, exact
scalar diff and native report basis; its source parent, impact progress,
closure, predecessor gate and native references must remain raw-hash-bound by
that certificate. Current canonical metadata must still equal the sealed after
hash. Replay uses the ordinary strict binder for the archive, request and current
metadata; it neither edits old receipts nor rechecks historical proofs against
later source revisions. All direct evidence bindings retain their existing
strict checks. This route does not chain later metadata transitions or accept
other stale evidence.

A collected initial page correction can bind an owning pages manifest before a
later native impact owner repairs one consumer's public statement and its exact
manifest mirror. The old parent, page receipt and native report stay immutable.
Root may advertise `research/RUN-step5-v2/owner-historical-manifest-request.json`
with `{version: 1, run, request: {path, sha256}}`, naming immutable
`owner-historical-manifest-ID.json` in that directory. This is an explicit
historical binding, not an exception to ordinary evidence validation.

The request contains `version: 1`, `run`, `reviewer: "/root"`, `manifest_path`
(`research/RUN-batch-N.pages.json`), `batch`, `subject`, exact `json_pointer`
(`/PAGE_INDEX/items/ITEM_INDEX/statement`), raw references `initial_parent`,
`page_receipt`, `page_report`, and a nonempty `transitions` array. Each transition
contains `phase`, `round`, genuine raw `before_manifest`, `after_manifest`,
`before_source`, `after_source`, native `repair` and `final_review` references
(each with `pack`, `task`, `report`, `dispatch`), `impact_progress`,
`impact_closed`, and `owner_gate`. References are `{path, sha256}` with relative
run-local research paths; `owner_gate` instead names the actual consumed
`.physics-autopilot/RUN/owner-gate-history/ATTEMPT.json`. First transition must
be initial impact round one. Later transitions may use ordinary native impact
or gate repair waves. A new immutable request may append authenticated
transitions through `previous_binding: {path, sha256}`; the original binding
fields and complete transition prefix must remain identical.

Intake authenticates the exact original page/parent manifest guards, page
owner pack and source snapshot, and the frozen batch. Each pair of archived
manifests must differ only at that subject's declared statement field, equal
the canonical public sections of genuine archived source, and correspond to an
actual assigned native Sol 6.1 high repair plus closed current review. Native
closure and consumed full-frontier formatting/metadata history must bind the
after source and manifest. Missing historical bytes, unrelated manifest edits,
scientific/proof evidence substitutions, and stale current statement mirrors
fail closed. Historical replay authenticates that immutable wave without
freezing unrelated current items to its old gate. Current source, native review,
context and complete current gate checks remain mandatory at certification.
The new certificate binds both raw archives, immutable request/native history,
and current manifest, recording a typed `historical-page-manifest` transition.
Original receipt hashes are never rewritten.

If a required current predecessor snapshot has become stale, including because
workflow code changed, the certification stage's native `onProgress` waits for
all writers to drain and pauses for a fresh actual Root formatting/metadata
pass. It then runs the exact composed predecessor battery: `physics-content`,
`frontier-dependency-ledger`, and `step5-wave-evidence`, retaining all descriptor
conditions and liveness checks. It records successful results and the fresh
consumed owner gate in immutable
`.physics-autopilot/RUN/pre-certification-PHASE-ROUND-ATTEMPT.json`, with a
hash-bound native pointer for replay. Original predecessor stage and gate
history remain unchanged. Every bound current input, including tools and
explicitly absent inputs, must still match before the certification tool starts.
A failed or interrupted battery creates no successful preparation and requires
fresh owner checks on native retry. Normal certification-stage gates still run
with their ordinary owner authorization.

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

Readiness permits a selected carrier to retain `status: published` only when
the exact pre-run ancestor commit contains the same item/page identity with
published status at its `physics/` Git path. Plain and quoted status scalars
are equivalent. A draft or absent baseline carrier grants no new publication
permission; current source, repair, review and context guards remain independent.

Physics v3 closeout may opt into exact shared-plan page-row projection through
the run-local closeout scope policy. Authority binds only the exact current
scope ledger and all current batch manifests, with separate original HEAD/index
row tokens and target tokens. The nested Git lookup uses `physics/` while
authority paths stay relative to this workspace. Foreign HEAD, index and working
plan bytes remain separate; imported mathematical carriers remain read-only.
This packaging authority grants no scientific acceptance or gate coverage. See
[shared-plan ownership](../tools/STEP6-REBUILD.md#replacement-only-plan-ownership).

Step-6 terminal defect-ledger gates use the run's frozen Step-5 frontier when
present. Outside item findings remain recorded with their actual dispositions
and are reported as excluded, not passed; original mathematical maintenance
stays OPEN. Every ledger row still undergoes structural and ownership validation,
and unknown/page/global subjects and all owned open rows remain blocking.
Historical runs without that frontier retain the strict all-run terminal check.
Step-6 evidence also retains outside OPEN findings explicitly and reproduces
their actual dispositions in the exhaustive fatal table. Current manifest
subjects remain owned even if they were added after the frozen frontier.

Physics run inventory supports up to 130 A/B pairs, one pair per batch and
at most three batches per group. The global worker limit remains 30.

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

Scoped original item lookup indexes canonical IDs, aliases and mathematical
classification without requiring unrelated descriptive YAML to be finished.
An unreadable index field or ambiguous top-level identity shape remains blocking;
no original record is omitted. Required original items and actual nonlogical
reference targets are still parsed in full, and relevant original/page/category
checks and immutable snapshot pins retain their ordinary strict checks. Bare
unscoped verification continues to parse every original in full.

Item/page validators select current run manifests. Outside suppliers stay
prerequisite context; do not validate or repair unrelated content. Closeout verifies the engine's exact owned content commit inside its transaction.
Fresh Step 6 uses metadata/render checks -> focused repair -> all final gates
(repeat after repairs) -> concise report -> commit. Actual preparation includes
the shared scoped [rendering-quality checks](../tools/RENDERING-QUALITY.md):
source/context lint, application AST/KaTeX validation, production TikZ compilation
and SVG/layout smoke checks, with small real-render regression packs. The final
`rendering-quality` gate verifies an exact current nonempty receipt; unchanged
source/renderer/toolchain caches avoid a second compile. All distinct old mechanical
conditions and repair mechanisms remain. The report immediately follows the
genuine gate pass; there is no post-commit content battery. New v3 stage identities
require guarded cutover rather than adoption of old coverage. Earlier owner-gate
protocols remain current-hash-bound under CLAUDE.md. See
[the implementation](../tools/STEP6-REBUILD.md) and
[mechanical check map](../tools/STEP6-MECHANICAL-CHECKS.md).

An actual physics Step-6 rendering failure may require source repairs that
invalidate existing judge currencies. Root can explicitly authorize current
judgments through `.physics-autopilot/RUN/step6-currency-request.json`, with
`{version: 1, run, request: {path, sha256}}` naming an immutable
`supervision/step6-currency-authorization-ID.json`. The authorization embeds the
five actual repair-author reports and Root's exact source/metadata reconciliation,
binds the genuine failed rendering cache, preserved gate certificate and Git
preimage commit, and names the exact target/current/unchanged scope partition.
It grants no semantic-equivalence acceptance. Unlisted item or selected page
changes, dependency/identity changes and unrelated stale evidence fail closed.
The only historical metadata exception is the actual batch-48 fluctuation
definition's statement mirror: its Git bytes must reproduce the old certificate
hash, its complete scalar diff must be exactly the authorized mirror, and the
current mirror must equal the actual repaired source. Original certificates,
reports, decisions and provider context hashes are never rewritten.

The existing `step6-prepare-final-v3` native unit becomes `judgement` work with
the existing long judge timeout while this request is pending. Before stamping,
it obtains actual Luna/max strict-context judgments only for stale central
currencies and changed ordinary keeps. Current central coverage and unchanged
ordinary item-byte coverage retain their existing predicates. Missing, null or
rejecting fresh results block preparation for genuine owner resolution; neither
the author reports nor the renderer can accept them. Retry reuses actual current
append-only verdicts and provider-response records.

Native execution writes durable
`research/RUN-step6-currency-authority.json`, retaining the complete Root
authorization/report payload, original certificate/Git metadata bindings, exact
scope, actual provider rows and response records, immutable ledger-prefix seals,
and native command identity. Public stamp/coverage consumers require its
completed current authority. Old central hashes remain unchanged; stale central
rows fall through to the actual fresh Luna verdicts. Preparation, readiness and
report source selection seal this authority and its implementation. Future
verification does not depend on ignored supervision/cache files.

Only small own-judge mapping fragments and hashes are retained across native
stamping, never full sources or prompts. Exact reconstruction of the before raw
source, unchanged Guard/Judge hashes and actual other-prompt-input hashes prove
the native stamp-only delta without changing the real provider context. Seven
already observed ordinary stamp baseline edges additionally require unchanged
Git `stripJudgeStamp` bytes, actual current Luna keep coverage, the expected native
mapping and exact failed-render-cache raw binding; this never refreshes a central
Guard. A later raw mathematics-import consumer authority may consequently need
an explicit truthful Root rebind. Such a hold preserves the genuine judgments;
it does not create new scientific acceptance or require duplicate provider calls
when the actual judged item and remaining prompt inputs are unchanged. Normal
metadata/render preparation and the complete final battery still follow.

If that actual sweep rejects, Root may authorize a bounded
`physics-step6-scientific-rejection-resolution` request in the same native
preparation unit. It binds the immutable blocked authority, every actual rejected
provider tuple, the seven scientific owner reports and exact Root dispositions,
explicit repaired sources, complete affected-consumer checks, and owned cumulative
metadata differences against the original Git preimage. Shared-plan differences
must belong to frozen items or selected pages. Every other source and page remains
guarded. This is a scientific repair authorization, separate from the original
rendering request; the original certificate and actual verdict rows remain intact.

Native preparation archives the blocked authority byte for byte, appends genuine
Guard-form adjudications and fixed defect records through the existing ledger
validator, and invokes the frozen Luna/max strict-context sweep. Existing exact
current responses are reused. An unchanged false-positive or nonfatal rejection
closes only its exact original item/context tuple through the existing adjudication
policy. Repaired sources and affected stale contexts require actual current
judgments; new rejections, nulls, missing responses or owner evidence block again.
No rejected item receives a pass stamp; only exact native stale-pass removal is
permitted. The completed durable authority binds the predecessor archive, compact
reports, native provider responses, adjudications and defect ownership, retaining
verification after ignored supervision state is removed. Fresh metadata/render
preparation and the ordinary full final battery remain required.

The two-cycle limit applies to each escalation, not to the build's number of
scientific judgment episodes. A newly advertised continuation names the actual
blocked predecessor, separate owner reports, and exactly its failed tuples.
Each new disposition supplies an escalation ID, repair cycle 1 or 2, and an
evidenced comparison against every historical decision for the same item. A
distinct issue starts cycle 1 with a new ID only when all comparisons classify
the prior issues as distinct. A follow-up retains the prior issue ID and advances
cycle 1 to cycle 2; a third cycle for that issue blocks. Existing immutable
decisions receive stable derived legacy IDs without rewriting their bytes.

The archive chain must be complete, hash-bound and strictly ordered back to the
original rendering authority. Source after-guards are folded forward through all
episodes; historical adjudication and defect segments are authenticated to their
captured boundaries without requiring historical sources to remain current.
Previously accepted rejections are inherited only through genuine native
adjudication bindings for exact unchanged provider tuples. Current responses are
reused, changed contexts receive fresh judgments, and every new rejection still
blocks for actual owner resolution. No continuation starts automatically.

After completed scientific coverage, an actual failed final precheck or provenance
gate may require mechanical source/contract repairs. Root can advertise a separate
`physics-step6-final-gate-mechanical-current-judgments` request bound to the actual
authorized battery events, exact guarded proposal/application, and native fixed
mechanical defect rows. The native preparation unit archives the COMPLETE authority
unchanged; this route creates no scientific rejection or adjudication. Unlisted
sources, pages and metadata remain guarded. Genuine completed judgments carry only
when current item/other-prompt inputs and authenticated post-stamp context match;
all stale subjects receive actual current Luna/max judgments. A fresh rejection
blocks and remains eligible for the ordinary per-escalation scientific repair
route. Native stamp checks, fresh preparation and the full final battery remain.

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

## Imported mathematical pages in plan validation

The private physics `validate-plan` adapter resolves a missing plan-catalogue
page only when the current frontier reaches it through declared prerequisites
or actual supplier page edges. Resolution requires one published mathematical
page with the exact ID, one unambiguous regular local carrier, and matching
immutable `math-imports.json` bytes. Unknown, unpinned, changed, draft, physical,
malformed or ambiguous carriers remain blocking. Unrelated imports are not
added or validated as subjects. One historical category placement may coexist
with the current pinned path only when both regular, nonsymlinked files have
exactly the pin's raw bytes and the alternate's exact path and bytes already
exist as a regular file in repository `HEAD`. Staged-only/untracked extras,
third carriers, alternate historical bytes and any metadata/body differences
remain ambiguous. The current pin's category remains the prerequisite context.

The resolved page is an in-memory prerequisite-only P declaration: it does not
change the plan, manifests, source pages or selected frontier. It retains an
explicit source order, or uses the existing published-P default of zero when no
order is stored. Its actual declared prerequisites and reached item edges remain
in closure and cycle checks; ordinary ordering, undeclared-prerequisite and
examples-page leaf protections remain active. The adapter never fabricates an
item inventory or imports new source bytes.

## Reviewed original mathematics maintenance

Current-original raw hash drift is reported together for all mismatched paths
in the existing selected original-source loop, in sorted path order. Exact
already accepted successor hashes remain excluded. This is diagnostic only:
local snapshot pin changes still fail immediately, and source identity, home,
classification, metadata, missing-source and publication guards retain their
hard failures. A hard failure may stop the loop before all drift is observed;
the aggregate is complete only when that loop reaches its end. Scope selection,
category handling, acceptance rules, successful return counts and failing exit
status are unchanged; no unrelated originals are added to the selection.

An authored run may encounter a relevant published mathematics original whose
bytes changed after the immutable local import was pinned. Root may review a
strictly mechanical successor without replacing either source or pin, using
`research/RUN-original-maintenance.json`. This is explicit outside scientific
review, never native acceptance. Planning, unscoped verification and local
snapshot integrity retain their existing guards. The ordinary authored
`physics-check` and `run-commit --require-proof-layout` paths use the same check.

The version-1 object has `run`, `reviewer: "/root"`, `native_review: false`, a
concrete `reason` (at least 40 characters), `import_receipt_sha256`, `frontier`,
`entries`, and `inputs`. `frontier` maps every exact current
`research/RUN-batch-N.pages.json` path to its raw SHA-256; extra or missing
manifests fail. Each entry contains:

- `path`: the exact imported `items/ID.md`; `pinned_sha256` must equal its
  unchanged import receipt and local bytes.
- `original_path`: the absolute canonical original path;
  `original_sha256`: its exact reviewed current raw SHA-256, different from the pin.
- `evidence`: nonempty `{path, sha256}` rows naming actual run-local research
  evidence, with paths beginning `research/RUN-`.
- `consumers`: every reached authored consumer, with `id`, `decision:
  "unaffected"`, and a concrete reviewed-use `reason` of at least 40 characters.
  Alias-resolved logical/discharge edges and direct owned reference edges define
  this selection; unrelated consumers cannot be substituted. `consumer_sha256`
  maps exactly those consumer IDs to their actual reviewed raw source hashes.
- `titles`: `{id, sha256}` rows for exactly the immutable pinned mathematical
  supplier titles used in the reference move, or an empty array for a pure
  repair-locator addition.

`inputs` is the exact flat map of all those paths/hashes: import receipt,
frontier manifests, local imported target, absolute original, scientific evidence,
authored consumers and local title suppliers. Missing, stale, duplicate or
unrelated receipt entries and extra input bindings fail. The owner gate snapshot
binds receipt presence (including absence) and every declared input, so adding or
changing authority or evidence requires fresh ordinary owner preparation.

The machine guard allows only a newly added `verification.repair` JSON locator
and/or this precise single-section Definition reference move: replace each
original simple `[[ID]]` occurrence with its pinned supplier's exact title, then
append `## Definition references` with the same wikilinks in their original order,
one per paragraph. Every other parsed metadata field and all remaining body text
must match; no changed hypothesis, equation, dependency, source, publication
status, other section or added/removed reference qualifies. A successor outside
this narrow shape requires separate owner resolution. All original identity,
alias, page-home, classification and publication checks remain active, as do
local pin checks, content gates and native transition ownership. The mechanism
does not update imports or generate a review, receipt, stamp or gate result.

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

In Steps 2–5, repairers and adjudicators check every assigned TikZ/tikzcd
diagram for mathematical correctness, repair defects and add missing diagrams
where needed. This includes commutative and string diagrams, Young tableaux,
braids, Temperley–Lieb diagrams and other types. Existing write scopes,
read-only roles and the requirement for proofs independent of diagrams remain.

### Newtonian stress finite smoke check

The private check `fd-newtonian-stress-admissibility` selects the coefficient
assertion of `lem-fd-newtonian-admissibility` through the ordinary `finite_smoke`
contract record and its exact `asserts` excerpt. It fixes `K=0`, `g=0`, `T=1`
and directly contracts the stress matrix with each of the 729 symmetric matrices
whose six independent entries lie in `{-1,0,1}`. For all 42 integer coefficient
pairs `-2 <= mu <= 3`, `-3 <= lambda <= 3`, it compares the enumerated sign with
`mu >= 0` and `2mu+3lambda >= 0`, including nonzero null strains on the two
coefficient boundaries and negative witnesses outside the admissible region.
This bounded algebraic check covers the stress slice only; it does not certify
the general theorem, Fourier conductivity, thermodynamic hypotheses or empirical
fluid behavior. Owners add its actual item-specific contract obligation and bind
current inputs through the ordinary workflow; registration alone adds no run
coverage or readiness evidence.

### Guarded downstream in-run consumer findings in Step 3

A reader's genuine observation of a downstream draft consumer in another batch
cannot be relabelled as an upstream `in-run-dependency` or a published supplier.
Root may authorize only exact original findings through
`research/RUN-step3-downstream-handoff-BATCH.json`. Original report bytes and
finding fields remain unchanged; split adds separate `downstream_handoff`
metadata. The consumer enters the originating batch's ordinary refuter scope
and each original reader/refuter obligation still needs adjudication and ledger
closure. This grants no source-edit permission outside the adjudicator's batch;
Root resolves the owning-batch repair after overlapping source writers drain.

The version-1 receipt has `run`, string `batch`,
`kind: "downstream-in-run-consumer"`, `authorized_by: "/root"`, a substantive
`reason`, and these evidence bindings, each `{path, sha256}`:

- `native_receipt`: the exact native
  `research/RUN-dispatch/reader-reader-BATCH.result.json`, plus its identical
  immutable `native_receipt_archive`;
- `original_report`: immutable raw archive identical to the unchanged live
  reader-findings file and the genuinely completed positive-attempt native final
  JSON message. If the native tail is clipped, `original_last_message` may bind
  the exact complete original JSON message instead;
- `inputs`: a path-to-raw-SHA256 map containing **every** bound evidence path,
  so ordinary owner-gate snapshots retain all receipt inputs;
- `findings`: exact authorized entries of this form:

```json
{
  "finding_index": 1,
  "original_finding": {"id": "consumer-id", "subject_type": "in-flight-item", "consumer_id": null, "observed_source": null, "location": "exact original location", "defect": "ill-formed", "evidence": "exact original evidence", "severity": "nonfatal"},
  "owner_batch": "13",
  "owner_pre_snapshot": {"path": "research/RUN-step3-hash-13-pre.json", "sha256": "RAW_SHA256"},
  "current_source_observation": {"path": "research/immutable-consumer-before.md", "sha256": "RAW_SHA256"},
  "excerpts": ["actual sufficiently long excerpt from that source"],
  "dependency_path": ["consumer-id", "assigned-supplier-id"]
}
```

Unique current-run draft ownership, native pre-reader consumer fingerprints,
regular local carriers without symlinks, and each actual `deps`/`justified_by`
edge from that consumer to an assigned supplier are mandatory. A reference or
reversed edge cannot establish reachability. Split requires the root-observed
archive to match current source bytes exactly. Later checks retain this archive
while independently checking current ownership and reachability; genuine
repairs require fresh ordinary decision stamps. Receipt changes invalidate the
stored handoff. Unauthorized additional findings remain errors.

The root-observed current archive never asserts which bytes the original reader
saw. Decisions retain `owner_batch`, `historical_delta_unknown: true`, and a
substantive `owner_resolution`; ordinary verdict, ledger, current-carrier,
unchanged-repair and exact refuter-coverage checks still apply. Do not dispatch
recovery, manufacture a receipt, or alter existing observations to use this
route. Root owns the actual authorization, guarded recovery and recertification.

### Coupled Penrose finite smoke checks

The physics-private `finite-smoke-penrose.mjs` registers the seven batch-68
coupled-Penrose obligations through the ordinary `finite_smoke` selector and
exact current item assertion excerpts. It retains native assertion, selection,
error and check-count handling. A supplied `expected` value must match the
computed invariant; registration supplies no readiness or review acceptance.

- `quadratic-curvature-polynomial` evaluates 729 real two-forms on the actual
  incidence alpha vectors at four complex parameters, verifies interpolation,
  the positive-orientation ASD conditions and the second-chart infinity value.
- `unit-four-sphere-curvature-trace` contracts the unit-sphere Gauss tensor over
  16 ordered pairs, obtaining six unordered two-planes and scalar curvature 12.
- `negative-twist-fibre-groups` computes chart intersection and quotient modes
  for twists -1 and -2 in the Laurent window -6 through 6. Only the degree-one
  mode `t^-1` for twist -2 survives.
- `flat-constant-section-coefficient` differentiates `1/(1+|x|^2)` twice and
  contracts the local residual at the 81 points of `{-1,0,1}^4`. Dividing by
  the local nonzero conformal frame factor gives the coefficient 2.
- `trivial-rank-one-case` checks 25 complex constants and computes degree-one
  cohomology of 206 homogeneous degree -2 Laurent-mode Čech subcomplexes on
  the four standard projective charts, with exponents in -3 through 3. Matrix
  ranks use exact integer elimination, and adjacent differentials compose to zero.
- `flat-ranks-zero-and-one` checks the empty complex and the same scalar
  rank-one complex, which also represents the identical trivial dual.
- `overlap-and-zero-class` checks the canonical-frame/chart-order residue sign
  on 65 bounded fibre cochains, explicitly reconstructs the 60 chart-tail
  primitives, and checks the absent horizontal twist -1 degree-zero modes.

These are bounded algebraic tests. They do not prove convergence of infinite
Laurent sums, analytic sheaf/Dolbeault comparison, smooth parameter dependence,
Hodge theory, base-chart gluing of general bundle data, global injectivity, or
the general coupled theorem. The overlap check models the fibre trace under
coordinate inversion; it does not certify arbitrary stereographic transition
functions. The full authored proofs and ordinary workflow gates retain those
duties. Run `node --test tools/physics-support/finite-smoke-penrose.test.mjs`
for the focused model, assertion/selection, expected-value and mutation checks.


### Root source repairs inside unfinished Step-2 prerequisite construction

Protected old source bytes remain immutable unless Root first uses native
`prerequisites repair-authorize` at a paused, stopped, fully drained latest
`2-prerequisite-construct-N` boundary. Root names exact current-run draft items
and a committed original preimage, then performs the admitted repairs. Native
`repair-complete` requires exact before/after hashes, actual scientific and
focused review, scoped proof-supplier-use justification, and same-owner full
consumer checks when public contract bytes change. Proof-only corrections do not
claim a blanket consumer proof audit. Only exact predeclared source-mirror JSON pointers (deps, dependency roles or
canonical public-section statement) and computed numeric metadata consequences
are admitted, with genuine current full-graph validation. Foreign planning
context remains unchanged.

The original registration generation, Step-1 stamps and native history are never
rewritten. Separate immutable authorization/completion receipts authenticate the
new exact bytes; incomplete or stale receipts block construction. Receipt
presence/absence and every bound input invalidate earlier owner preparation.
Fresh preparation and the full ordinary battery remain required. The commands
do not edit sources, state, authority or acceptance and create no backups. Exact
request fields and fail-closed interruption behavior are documented in
`tools/physics-autopilot/README.md` under “Guarded Root repair during supplemental
construction”.

### Exact malformed and duplicate proof-support rendering successors

The opt-in `exact_native_presentation` inventory includes the observed
`lem-one-variable-completion-of-the-square-with-a-smooth-parameter` and
`thm-c-c-is-dense-in-l-p-for-radon-measures` body pairs. The first removes only
the malformed nested case tag in step 1.2; its explicit positive-parameter
assumption remains. The second renders the exact Radon-density title and moves
or removes only duplicate support clusters in steps 1.1 and 2.1. Fixed body
hashes, unique named proof paragraphs, unchanged mathematical AST literals,
exact title pairs and unchanged scientific metadata guard these two routes.
Every individual delta still requires a typed Root review and all current
consumer, native published-repair authentication, evidence and gate checks.
Graphics-free exact cases retain honestly absent diagram keys; partial, null
or contradictory supplied keys fail. These routes neither modify import pins
nor accept original mathematical changes or arbitrary support rewrites.


When a genuine supplemental native author clarifies an approved full-scope
statement or supplies actual references, Root may reconcile only the new-owned
item's exact source/header mirrors through native
`prerequisites authored-metadata-adopt`, after successful native completion and
writer drain, before original-source repair authorization. This grants no source
edit permission and cannot change original rows, identities or inventories.
The separate immutable receipt authenticates only new-batch manifest hashes,
actual Root full-scope/reference/consumer review and real ended native results.
Its effective baseline can then be committed and consumed by original-source
repair authorization. Both receipts invalidate old owner preparation and retain
all ordinary gates; detailed schema is in the native physics README.


At authored-metadata admission, native plan/dependency subjects are the actual
new generation pages/items with full prerequisite context; unresolved old-page
prerequisite defects remain blockers before the full supplemental battery.
The existing original repair authorization may explicitly name old protected
draft `pages` for frontmatter `requires` additions only. Original entries/order,
body, inventory and every other source byte remain exact. Root reviews actual
source-dependency homes and exact before/after hashes, with matching explicit
plan/manifest requires pointers. Published mathematical context may be local or
imported, but is not edited. The existing repair completion receipt binds the
used context and replay checks it. Full current-frontier validation at original
repair completion and all ordinary native gates remain mandatory.


After a genuine supplemental construction pass, its new items may undergo the
ordinary native Step-2 local repair lifecycle. The admission guard authenticates
the complete native passed battery/owner history and immutable admission inputs,
then recognizes only exact later native new-batch write-file ownership. Active
or returned-but-uncollected work retains that assignment; native collection
captures actual owned-file hashes, which must remain current afterward. Old
Root-repaired sources/pages and current addition-consumer review remain strict.
This creates no acceptance or metadata waiver: native repair/final-review and
fresh Root preparation/full gates still apply. Owner currency binds stable
history/assignment/result inputs and derived lineage, never the whole changing
driver state/events files. See the native physics README lifecycle section.

### Original public-claim findings after a same-batch reader proof repair

Root may retain an exact original finding through
`research/RUN-step3-partial-reader-repair-BATCH.json` (version 1,
`kind: "same-batch-proof-only-partial-reader-repair"`, `authorized_by: "/root"`,
`mathematical_acceptance: false`, `edit_permission: false`, substantive `reason`).
It binds `{path, sha256}` evidence in `native_receipt`, `native_attempt`,
`native_prompt`, `native_last_message`, `original_findings`, `reader_report`,
`review`, `pre_snapshot`, `post_snapshot`, `manifest`, `before_contracts`, and
`after_contracts`. The contract archives are complete documents with `contracts`;
`manifest` is a raw batch-manifest archive. Every reference belongs in the
`inputs` path-to-raw-SHA256 map. Each `findings` entry supplies `finding_index`,
the exact `original_finding`, and raw `before_source`/`after_source` references.

Admission requires a genuine successful immutable native reader attempt and
final message, unique same-batch own-run draft mathematics, source/contract/manifest
archives reproducing native pre/post fingerprints, and source changes confined
to the existing Proof section. All other source bytes, including frontmatter
and public claim, remain identical. Current carriers must equal native post at
split. Later collect/check authenticate that immutable history and exact route
hash while allowing ordinary adjudicated repairs. The original unbound finding
is preserved, its post carrier remains the repair comparison basis, and the item
requires a full current refuter read. Separate touched and reader obligations,
ledger closure, ordinary source ownership and all gates remain mandatory.
The receipt grants routing only and never certifies scientific acceptance.
