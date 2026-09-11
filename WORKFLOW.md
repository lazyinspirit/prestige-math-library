# Build and operations

CLAUDE.md governs agents; SCHEMA.md governs content. tools/autopilot owns every
dispatch, retry, check and transition. Stage definitions in mathlib.mts and
mathlib.step5.mts are authoritative. There is no LLM orchestrator.

## Workflow

| Step | Stages | Required result |
|---|---|---|
| 1 — scaffold | 1-drift, 1-drift-apply, 1-scaffold | Reviewed prerequisites, reconciled scope, source-backed scaffolds and readiness records |
| 2 — assign | 2-assign | Disjoint groups, each owning at most three batches |
| 3 — audit and author | 3a-scope, 3-baseline, 3b-author | Scope decisions, pre-author snapshot, complete authored items/pages/contracts and current item decisions |
| 4 — materialize | 4-splice, 4-baseline | Mechanical plan splice and post-author snapshot |
| 5a — review | 5a-prepare, 5a-adjudicate, 5a-baseline | Direct group review and frozen post-review evidence |
| 5b — reconcile and close | 5b-edges, 5b-cross, 5b-close | Cross-group dependency audit, impact accounting and closure receipt |
| 6 — judge | 6-scope, 6-judge | Frozen item judgments and group reader digests |
| 7 — repair | 7-baseline, 7-scope, 7-adjudicate, 7-preflight, 7-rejudge, 7-freeze | Repairs/checks, one rejudge, one final adjudication, then Step 8 |
| 8 — certify changes | 8-scope, 8-scope-render, 8-scope-freeze, 8-changes-judge, 8-close, 8-changes-stamp, 8-receipt | Scope review, change judgments, impact closure and stamps |
| 9 — close run | 9-contract-close through 9-close-v2 | Contracts, pathways, readiness, evidence, owner report and commit |

These are the only active step numbers. Historical run artifacts remain evidence,
not aliases or current instructions. Do not install this workflow under a live
engine or reuse historical receipts: use a fresh run after owner coordination.

## Agents

Every agent must be impartial and honest about its mathematical understanding.
When unsure, search the web and read complete relevant arguments in authoritative
sources. Report uncertainty; never fabricate understanding, reading or checks.
The dispatcher and item-judge prompt apply this rule to every role.

| Assignment | Model / effort |
|---|---|
| Step 1 scaffolding; Step 3a scope; group Alpha | Sol / high |
| Step 3b group authors | Astra / medium |
| Step 5a/5b; Step 6 group readers; Step 9 agent closure | DeepSeek V4.1 Flash / max |
| Assignment; ordinary Step 8 work | Terra / high |
| Item judges | Terra / xhigh |
| Step 7 adjudication | Sol / xhigh |
| Step 7 final adjudication; Step 8 lead | Astra / medium |

tools/models.mjs owns profiles; stages override role defaults. Rate limits do
not authorize substitution. Group capacity is nine, batch capacity 27; the
global limit is in autopilot.config.json. Dispatches start three seconds apart.
Shared-file stages are serial. Writing agents checkpoint after each item and
reread current proofs, dependencies and sources after compaction. Read-only
roles write no extra files. Compaction starts at 200,000 total context tokens;
usage telemetry is not a billing estimate.

DeepSeek stages use the stable `deepseek-flash` API alias and maximum reasoning
through an isolated Codex home. Their required read-only `web_search` MCP tool
prefers Tavily when `TAVILY_API_KEY` is configured and otherwise uses Firecrawl.
Dispatch fails before launching if the DeepSeek key or both supported web-search
credentials are missing. Mechanical tool plans in these stages do not invoke an
LLM.

## Scaffold, audit and author

Step 1 drift review/materialization precedes parallel scaffold construction.
Every item needs a current ready/escalated record. The final gate holds unresolved
findings for the owner/operator; it does not launch a scaffold repair loop.
Preserve selected pairs and reconcile prose, plan, Phase-2 files and the consumer
ledger before clearing affected prerequisites.

Step 3a reviews scope; insufficient scope remains owner-held. Step 3b group
authors audit scaffolds and actual prerequisites, repair locally, then write
every assigned item, example, counterexample, page and proof contract. They may
insert necessary definitions/lemmas on assigned existing A pages before consumers.
Escalate substantial prerequisites, broader scope changes and unresolved
mathematics. Do not drop claims, add pairs or edit published content. Report
potential published defects to the owner with exact IDs/evidence; the serial
reconciler updates published-consumer-supplier-ledger.md.

Use tools/step1-decisions.mjs and tools/step3-decisions.mjs for current evidence.
Step 3 item decisions are recorded after authoring and bind to transitive examined
dependencies. A genuine post-baseline item created and fully authored by the
Step-3 auditor is instead certified mechanically after that successful dispatch;
it does not enter a self-review/repair/author loop. Its item and scope-delta
certificates are hash-bound, and the scope delta inherits (but cannot replace)
the approved pre-author scope decision. An approved scaffold or empty contract
cannot satisfy authoring. Refresh sufficient scope evidence after local
additions/repairs; never overwrite owner-held decisions. Authors maintain
batch-owned manifests, contracts, coverage, notes and dependency inputs. Shared
prose/plan amendments go in the group handoff.

An owner may resolve an honest Step-3 escalation by recording the item decision
`reopen` with exact repair direction and examined dependencies. Reopen is not an
acceptance or proof certificate: it only makes the item eligible for a fresh
author dispatch and suppresses the earlier escalation. The item remains open
until a later, current confidence-1 author receipt replaces it. Owner direction
and reopen receipts are part of the author-dispatch hash, so the authorized
repair cannot collide with the already-completed pre-direction call.

Step-3 auditor certification checks writes across the same transitive item and
manifest/plan inputs bound by its item hash. Changed supplier content requires
a successful covering author dispatch after those writes. Unchanged certificates
survive restart and file touches; failed recertification preserves prior receipts.
Provenance receipts use `auditor-authored-step3-bypass-v2`; v1 receipts cannot
close decisions or reuse the unchanged-hash path. They must be revalidated
against the original immutable v1 inventory baseline. No input write after
the author result's `ended_at` is accepted, including subsecond writes.

Before routing Step-3 artifact-incomplete recovery, the engine also certifies
eligible completed authors while leaving unfinished or changed additions open.
A pair with any uncertified addition receives no scope-delta certificate. This pass uses
the same V2 hash/provenance checks; it does not replace strict final certification
or any ordinary gate. Synthetic recovery is limited to the inactive units named
by the failure, and a group with a live writer is not redispatched. Completed
groups do not receive self-review jobs merely because a restart precedes issuance
of their mechanical certificates. Receipt-only closure outside that artifact
failure waits for the normal item-decision gate.

Step 4 keeps its mechanical splice and snapshot. The splice permits new local
A-page definitions/lemmas only with complete current author decisions, retained
existing inventory/order and actual owned consumers. Other scope changes require
explicit authorization. Pre-splice author checks do not demand a completed splice;
Step 4 and later gates enforce exact canonical-plan agreement.
Scaffold ID-minting policy runs only before authoring. Step 3 checks actual item
content and whole-run manifest dependencies; authored files are expected to exist
before Step 4 places their IDs in the canonical plan.

A scaffold strategy is not proof text. Scripts may format completed arguments,
not manufacture generic proofs/contracts. Structural checks and finite tests do
not establish mathematical validity. Preserve provenance and generated-leaf rules.
The finite-smoke registry includes an exact Gaussian derivative check: finite
Taylor jets are compared with polynomial differentiation, including zero and
signed coefficients. Its bounded success does not certify decay or Fourier
analysis proofs; contracts must name the actual assertion it checks.

## Review, sources and impact

Step 5a reviews actual authored mathematics directly, not scaffolds again.
Accept sound content, repair locally with fully authored suppliers, or escalate
substantial gaps. Every baseline item/page needs a direct decision. A genuine
post-baseline supplier created and fully authored by the Step-5 auditor receives
a hash-bound item/manifest/contract certificate after the successful dispatch
and does not require a self-review decision. High-risk and every static content,
dependency, source and contract gate remain mandatory. Step 5b reconciles
cross-batch dependencies, changed consumers, exact hashes, coverage, sources
and ledger.

Step-5/7/8 auditor-created certificates bind the item, manifest entry and owning
contract. Initial certification and changed-carrier recertification require a
successful author dispatch covering the latest item, manifest or contract write.
Unchanged hash-bound evidence survives restart and metadata-only file touches;
a contract-only edit requires fresh covering author evidence.
These provenance receipts use `auditor-created-stage-bypass-v2`. Legacy v1
receipts are rejected by consumers and revalidated by the certifier, retaining
the immutable v1 inventory baseline. Reuse requires the same run and baseline
hash. The latest carrier write must be no later than the dispatch's `ended_at`;
there is no post-completion timestamp allowance. Failed migration leaves the
old receipt untouched but unavailable as certification evidence.

Snapshot order is pre-author before Step 3b, post-author in Step 4, post-5a after
group review, and post-step7 after repair. Impact checks include authoring changes.
Maintain consumer inputs under briefs/tasks/frontier-dependency-ledger.md; the
engine merges them at mutable joins. Graph/hash checks do not certify proofs.
The Step 5b lead owns both impact receipts: pre-author to post-5a, and post-5a
to current content. Closed repository runtime incidents on a peer draft use the
existing `kind: "gate"` receipt with the stable ledger subject as `id` and explicit
`carrier_run` / `carrier_id`. Only fixed `breaking-runtime`, `engine-stage`,
`stage-unowned` rows qualify. The evidence must name the actual foreign draft;
the hash binds its owner's current item, contract and manifest. This receipt
resolves the runtime incident, not that draft's mathematical review. Ordinary
gate verdicts retain their own-run or claimed-published carrier rule.
Empty windows still need reviewer attribution. Historical
reviews may supply evidence only after current hash and interface reconciliation;
never reset a baseline or bulk-approve candidates to close a gate. Narrow gate
repairs retain their assigned scope.

After an initial full-text retrieval failure, search alternatives and retry at
most five times. Stop on success and reuse recorded attempts. After exhaustion,
give a complete alternative local proof and prerequisites with justified
confidence, or escalate. The owner may resolve an escalated source with the
same complete alternative-proof and exhausted-retrieval evidence, recorded as
`decided_by: owner`; do not attribute that decision to the original scaffolder.
A source drop waives unavailable backing, never results.
Temporary outages do not establish permanent unavailability. Preserve genuine
fetch, URL and source-backing evidence; a PDF page count does not establish reading.
URL sweeps that fail only with transport errors wait for network recovery;
they do not retire reviewed sources or dispatch reharvesting workers.
Compressed PDFs require mutool. Documents under four pages require the complete
short_document_reading receipt specified by the fetch tool and scaffold brief.
The dispatcher explicitly enables shell network access for workspace-write
roles assigned web research, including resumed sessions; isolated worker homes
do not inherit that setting. Web search availability alone does not enable PDF
downloads. Read-only and non-source roles retain their existing restrictions.
After repairing a worker-network configuration fault, recover fetch evidence
without erasing prior attempts or treating that fault as unavailable literature.

Foundations must never consume Recorded catalogue results directly or transitively,
including well-definedness and load-bearing forward references. Declare AC and its
exact use; keep choice-free and incompatible-axiom branches. A defective published
item blocks a new supplier only when its proof actually uses the defective clause.
Record unrelated debt without waiving structural or bootstrap checks.

## Judgment and closure

Boundary template candidates may be upheld only with an item-specific
`template_review`: `upheld:true`, reviewer `by`, a reason of at least 40
characters, current `item_sha256` from `itemHashGuard`, and `row_sha256`
of `JSON.stringify({case,status,text})` (text is the row reason or evidence).
Stale bindings, repeated review boilerplate and nonexistent proof steps fail.
The detector reports upheld candidates separately, not as mathematical approvals.

Gate-repair workers write run-local reports; shared briefs are read-only.
They preserve completed lead reviews, update only affected findings and evidence,
and finish after the named checks pass. The engine owns the full battery rerun;
repair workers do not restart unrelated edge or migration audits.
An open tool-code defect naming a failing detector holds for operator repair,
instead of triggering another content-repair pass. Risk reports drain piped
output before exiting and retain failure exit codes.

Step 6 judges frozen items using full text and dependency/pair interfaces; sibling
proofs are judged separately. Verdicts bind to item, model and context hashes.
Group readers supply Step 7 evidence. Step 7 resolves each reader concern, alert
and rejection. Only confirmed fatal findings license mathematical repair;
published repairs need separate authority. Register necessary suppliers before
consumers. A genuinely new supplier fully authored by the Step-7 adjudicator is
mechanically certified as a distinct class and receives no fabricated judge row;
existing-item repairs still require the configured rejudge route.

Step 7 is: group repairs → preflight checks → one Terra rejudge → one Astra
final-adjudication pass → snapshot → Step 8. Only the engine dispatches judges.
Final adjudicators accept or repair queued items using existing suppliers.
Within each queue, process suppliers before consumers, including transitive
prerequisites, with stable ID ordering for unrelated items. Preserve frozen
queues and append-only decisions. Legacy queue/hash conflicts require explicit
operator recovery, not an automatic new judge wave.
New prerequisites, missing paid verdicts or unresolved mathematics stop the run;
they do not trigger another sweep. A completed paid verdict made stale by a
licensed correction goes to the terminal pass, never another Terra call.
Initial defect records do not count as paid reviews.

There is no post-final repair or judging loop. The terminal pass cannot be reset
by retry. Preflight retains dependency, contract, boundary, citation and ledger
checks before judging. Repair prompts contain only unresolved findings; upheld
records and cited suppliers are not repair targets. Full reports stay on disk.
Forward-reference gates suppress inventories and drain their output before exit.
Inherited published items need not acquire a new-batch proof contract merely
to enter certification; their licence, precheck and final published-repair checks
remain mandatory. New proof-bearing items require their owning contract;
definitions explicitly marked proof-not-applicable need no new proof contract.
Contract ownership comes from its explicit `scope`, never textual dependency mentions.
Inherited Step-5 cross-group published repairs retain their original provenance.
The Step-7 guard requires their claim file to match the frozen Step-5 receipt
and their historical repaired content to match the Step-7 baseline; this
recognition grants no licence for a new edit or exemption from later certification.

Step 8 reviews scope and post-repair changes, closes impact and applies current
stamps through the tool. Genuine Step-8 auditor/adjudicator-created additions
receive the same distinct hash-bound certification and are excluded from the
judge/re-adjudication loop; edits to baseline items are not. Receipt recovery addresses only failed checks and
missing contracts; it preserves completed spine readings and valid evidence.
Coverage checks skip context hashing when the judge ledger is missing and keep
the hash cache separate from the ledger, including nonstandard filenames.
Proof-contract reports drain stdout/stderr before exit so large JSON diagnostics
remain complete when piped.
Step 9 requires contracts, ledger, pathways, readiness
and owner-report evidence before committing. New content remains draft. Reused
published identities require evidence at the pinned ancestor baseline. Only the
owner publishes and pushes. Close-out means publishable pending owner approval.

## Controls

### Historical checkpoint migration

Use a fresh run, never renumber existing runtime state. Before installation,
execute the integration checkout's `migrate-checkpoint.mjs export --run OLD
--root LIVE_REPO`. It runs the old routing check and binds current content,
contracts, decisions, published-repair handoffs and original review receipts.
Sources must be paused and inactive.

After installation run `node tools/autopilot/bin/migrate-checkpoint.mjs prepare
--source OLD --run NEW`, then `verify --run NEW` and doctor. Only new
namespaced evidence is created. Structural identities and envelope hashes are
translated; mathematical prose, verdicts and original execution receipts are
preserved. No old dispatch receipt or stage completion is copied into new state.
The engine executes a real import check, all current authored-content/review
gates, then fresh Step 5b reconciliation and closure before judgment. The original
pre-author impact baseline survives. Repairs retain normal budgets and ownership.
The private manifest hash-schema key is version-stable across step renumbering;
stage names are not a reason to invalidate unchanged reviewed mathematics.
Scope snapshots and cross-group carriers use that same schema.
If preparation stops at validation before state creation, fix the tool and use
`--resume-preparation`. It requires byte-identical derived files and unchanged
source evidence; it cannot overwrite repairs or reuse an active target.
Migration authorizes no new frontier, publication or push.

### Run controls

Always use the exact run and state directory:

```bash
node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --run RUN --state-dir .autopilot/RUN
node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts doctor --run RUN --state-dir .autopilot/RUN
```

The command also supports plan, start, pause, resume, retry, stop and report.
pause stops new dispatches, not active work. resume clears pause but does not
start a dead controller. retry re-arms unfinished work after intervention without
erasing completed coverage or lifetime judge limits. stop exits the controller
without killing workers. Stage skipping needs explicit owner authority.

Stages clear only after successful matching coverage, artifacts and gates. The
engine adopts compatible workers and waits for repair jobs before spending another
round. Restart adoption includes recorded recovery workers with empty `covers`:
they add no primary coverage but hold the whole-stage gate until they exit.
Infrastructure retries are bounded; unchanged mathematical failures hold.

An owner-authorized fatal finding discovered after Step 7 may use
`recover-step8 --authorization FILE` only while the run is paused, inactive and
has not entered Step 9. The authorization must bind the exact run,
`post-step7` baseline, required repair targets and a bounded allowlist. The
command archives successful result receipts and reopens only
`8-changes-judge`, `8-close`, `8-changes-stamp` and `8-receipt`; it preserves
Step 7 history and leaves the run paused. This is recovery from a newly
discovered defect, not an additional ordinary repair loop.
Step 5 budgets three repairs per gate/item, mechanical fixes first, then disjoint
groups or a serial writer. Failures naming only carriers outside the run hold for
their actual owners; warning inventories do not establish repair ownership.
Step 5b applies this rule to precheck, depcheck and rendercheck content failures;
foreign-consumer impact receipts remain lead-Alpha work. Precheck FAIL/REPAIR
headers identify retry subjects; PASS rows and the printed proof's citations do
not. Unknown or mixed diagnostics retain serial repair routing.
Depcheck accepts numeric Unicode escapes in quoted YAML while still detecting
undoubled TeX backslashes. Deterministic gates that read frontmatter ID lists
share `tools/frontmatter-list.mjs`; it accepts same-line and next-line flow
arrays plus indented and indentationless block sequences, and its corpus test
requires exact agreement with the renderer's YAML parser. Recognized outages can
refund a round with 20-minute backoff. Doctor checks commands/tasks, not
mathematical correctness or quotas.

Frontier selection requires strictly more than 95% of each page's same-category
prerequisites published, excluding partner/cross-category edges. Explicit in-run
dependencies require planning authorization; missing suppliers are not pulled in
automatically. Stage files hot-reload; the continuation entrypoint versions its
canonical-table import against both stage modules so reloads execute fresh code.
Configuration/imported registry changes require restart. Never hot-install this
renumbering into an existing run.
Historical RESUME files do not establish live state. Supervise every ten minutes,
intervening on blockers or nonclosing loops. Protected readiness/report bytes
must remain unchanged until close-out.
