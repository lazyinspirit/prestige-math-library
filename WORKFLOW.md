# Build and operations

CLAUDE.md governs agents; SCHEMA.md governs content. tools/autopilot owns every
dispatch, retry, check and transition. Stage definitions in mathlib.mts,
mathlib.step5.mts and mathlib.step7.mts are authoritative. There is no LLM
orchestrator.

## Workflow

| Step | Stages | Required result |
|---|---|---|
| 1 — scaffold | 1-drift, 1-drift-apply, 1-scaffold | Reviewed prerequisites, reconciled scope, source-backed scaffolds and readiness records |
| 2 — assign | 2-assign | Disjoint, item-load-balanced groups, each owning at most three existing batches |
| 3 — audit and author | 3a-scope, 3-baseline, 3b-author | Scope decisions, pre-author snapshot, complete authored items/pages/contracts and current item decisions |
| 4 — materialize | 4-splice, 4-baseline | Mechanical plan splice and post-author snapshot |
| 5a — review | 5a-prepare, 5a-read, 5a-split, 5a-refute, 5a-collect, 5a-adjudicate, 5a-baseline | Independent reader/refuter pass, routed group adjudication and frozen post-review evidence |
| 5b — reconcile and close | 5b-edges, 5b-cross, 5b-close | Cross-group dependency audit, impact accounting and closure receipt |
| 6 — judge | 6-scope, 6-judge | Frozen item judgments and group reader digests |
| 7 — repair | 7-baseline, 7-scope, 7.1-adjudicate through 7.10-gate, 7-freeze | Repeat frontier adjudication, frontier impact repair and stable certification to the threshold, then frontier repair/gate until green |
| 8 — certify changes | 8-scope, 8-scope-render, 8-scope-freeze, 8-changes-judge, 8-close, 8-changes-stamp, 8-receipt | Scope review, change judgments, impact closure and stamps |
| 9 — close run | 9-contract-close through 9-close-v2 | Contracts, pathways, readiness, evidence, owner report and commit |

The Step 4 splice and plan validator use a 100-item ceiling per A page, set by
the owner on 2026-09-26. Pages above that ceiling need a split into A/B pairs;
needed results must remain in the plan.

These are the only active step numbers. Historical run artifacts remain evidence,
not aliases or current instructions. Do not install this workflow under a live
engine or reuse historical receipts: use a fresh run after owner coordination.

Outside Step 7's explicitly authorized repair/gate loop, every failed gate in
Steps 1–9 is owner-held. The production executor
escalates it before consulting any stage repair hook or charging any repair
budget. Normal first-pass authoring, adjudication, repair and judging stages are
unchanged; only gate-triggered follow-up waves are forbidden. After an owner or
authorized operator changes the evidence, `retry` re-arms the gates against the
current disk state. It does not authorize an automatic repair round.

## Agents

Every agent must be impartial and honest about its mathematical understanding.
When unsure, search the web and read complete relevant arguments in authoritative
sources. Report uncertainty; never fabricate understanding, reading or checks.
Logical validity is the ground truth. Check the actual argument independently;
authoritative sources, prior decisions and judges can contain mistakes.
The dispatcher and item-judge prompt apply this rule to every role.

| Assignment | Model / effort |
|---|---|
| Step 1 scaffolding | Sol / max |
| Step 1 drift review; group Alpha | Sol / high |
| Step 3a pair scope and Step 3b pair authors | DeepSeek V4.1 Flash / max |
| Step 5a readers | Sol / high |
| Step 5a refuters | Sol / xhigh |
| Step 5a adjudicators | Sol / high |
| Step 5b agents | Sol / xhigh |
| Step 6 group readers; Step 9 agent lanes | DeepSeek V4.1 Flash / max |
| Step 8 agent lanes | Sol / max |
| Assignment | DeepSeek V4.1 Flash / max |
| Step 6 item judges; Step 7 rejudges | Sol / high |
| Step 8 item judges | Sol / xhigh |
| Step 7 batch adjudicators and three owner repair agents | Sol / xhigh |

tools/models.mjs owns profiles; stages override role defaults. The owner selected
Sol for the former Terra lanes and for Steps 1 and 8. Group capacity is ten;
Step 3b pair authoring and its `alpha-high` lane can fill the 30-pair run ceiling.
The global limit in autopilot.config.json also permits 30 concurrent dispatches.
Pair prerequisites and same-batch exclusion govern which authors can run
together. DeepSeek dispatches start at least one second apart; other dispatches
start at least three seconds apart. Shared-file stages are serial
except Step 7 owner waves, which run parallel item assignments and lock only
short shared-metadata edit sections.
Writing agents checkpoint after each item and
reread current proofs, dependencies and sources after compaction. Read-only
roles write no extra files. Compaction starts at 200,000 total context tokens;
usage telemetry is not a billing estimate.

DeepSeek stages in Steps 2, 3, 6 and 9 use the stable `deepseek-flash` API alias and maximum reasoning
through an isolated Codex home. Their required read-only `web_search` MCP tool
prefers Tavily when `TAVILY_API_KEY` is configured and otherwise uses Firecrawl.
Dispatch fails before launching if the DeepSeek key or both supported web-search
credentials are missing. Mechanical tool plans in these stages do not invoke an
LLM.

## Scaffold, audit and author

Step 1 drift review/materialization precedes dependency-safe scaffold construction.
A/B pairs are packed within a category only when the resulting batch
prerequisite graph remains acyclic; a transitive supplier chain can therefore
separate two otherwise similar pairs. The A page declares its B companion in
the plan; a matching B back-reference is optional, but a conflicting one is
invalid.
A consumer batch waits for artifact-complete, stable transitive supplier batches;
independent DAG branches remain parallel. A cyclic condensed batch graph is a
planning error and blocks before dispatch. Every item needs a current
ready/escalated record. The final gate holds unresolved
findings for the owner/operator; it does not launch a scaffold repair loop.
When `research/<run>-owner-authoring-direction.md` exists, every Step-1 Beta
prompt and generated batch task names it as a mandatory, precedence-bearing
input; creating the direction after planning requires refreshing the tasks
before dispatch.
Preserve selected pairs and reconcile prose, plan, Phase-2 files and the consumer
ledger before clearing affected prerequisites.

Step 3a assigns one scope reviewer per A/B pair; insufficient scope remains owner-held.
Step 3b assigns one scaffold auditor/item author per A/B pair. Authors sharing
a batch run sequentially because manifests and proof contracts are shared.
Across batches, the executor releases a consumer only after every transitive
in-run prerequisite has successful coverage, all declared artifacts, and no
live repair writer. This directed rule keeps independent branches parallel and
prevents a later supplier write from invalidating a consumer receipt.
They audit scaffolds and actual prerequisites, repair locally, then write
every assigned item, example, counterexample, page and proof contract. They may
insert necessary definitions/lemmas on assigned existing A pages before consumers.
Escalate substantial prerequisites, broader scope changes and unresolved
mathematics. Do not drop claims, add pairs or edit published content. Report
potential published defects to the owner with exact IDs/evidence; the serial
reconciler updates published-consumer-supplier-ledger.md.

Use tools/step1-decisions.mjs and tools/step3-decisions.mjs for current evidence.
`node tools/scope-decisions.mjs check --run <run>` checks each deferred or
out-of-scope coverage row, including batches absent from the alpha-group
assignment. Such rows use the fallback `all` label and the
`alpha-all-scope-decisions.json` receipt. `prepare`, `refresh --all`, `delta`,
default `check`, and `render` use the same complete set of labels; an explicit
`--group` limits only that requested check or refresh.
Step 3 item decisions are recorded after authoring and bind to transitive examined
dependencies. During concurrent authoring, an item decision requires current
scope approval for its own A/B pair; another pair's in-progress scope edit does
not block it. The final Step 3 gate still requires all pair scopes to close.
A genuine post-baseline item created and fully authored by the
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
either a successful covering author dispatch after those writes or the owner
repair certificate described below. Unchanged certificates survive restart and
file touches; failed recertification preserves prior receipts.
Provenance receipts use `auditor-authored-step3-bypass-v2`; v1 receipts cannot
close decisions or reuse the unchanged-hash path. They must be revalidated
against the original immutable v1 inventory baseline. On the author-dispatch
path, no input write after the result's `ended_at` is accepted, including
subsecond writes.

For an auditor-created item with a genuine successful covering author result,
an owner-held gate repair may use a current `record-item --owner --decision
repaired` receipt with the exact examined dependencies and a reason, either on
first V2 certification or on renewal. The certifier checks that this
owner decision postdates every current transitive input write, binds the current
item hash, and preserves the original successful author result as origin
evidence. It records a hash of the owner receipt in the renewed V2 certificate;
altering that receipt invalidates provenance. This path cannot certify a newly
created item lacking an original successful author dispatch, and a `reopen` or
`hold` owner decision cannot serve as a repair certificate.
Each later certification pass rechecks and retains the owner-repair binding on
an unchanged item hash. It can restore a binding omitted by an earlier V2 pass
only from a current hash-bound owner receipt and the original successful author
result; a missing or stale bound receipt blocks reuse.

Artifact-incomplete Step-3 results are owner-held and are not synthetically
redispatched. After owner-authorized correction, eligible completed authors can
still receive their mechanical V2 certificates while unfinished or changed
additions remain open. A pair with any uncertified addition receives no
scope-delta certificate. This does not replace strict final certification or
any ordinary gate.
When V2 items, scope certificates and baseline binding are unchanged, certification
preserves the receipt bytes and timestamp; recovery still refreshes pending diagnostics.

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
For the fair-coin shift, a separate finite check enumerates short binary words
and disjoint cylinder prescriptions, including empty ones, to challenge the
exact product-mass identity used in the mixing proof. It does not certify Borel
mixing or the completed-measure argument.

## Review, sources and impact

Step 5a starts with one independent reader per batch on another batch's files.
Readers may repair in-flight items and assigned A-page prose; defects they
cannot edit become routed findings. A mechanical split then partitions each
batch into touched and untouched work, and read-only refuters verify every
untouched carrier, every HIGH/CRITICAL item and every page carrier from the
current files, with exact opened/not_opened coverage. Group Alphas adjudicate
the routed obligations only: touched carriers, page carriers, reader findings
and refuter findings. An untouched, unflagged item owes no adjudication
decision and proceeds to the gate. Every HIGH/CRITICAL item needs a current
risk review from the adjudicator's own read. A genuine post-baseline supplier
created and fully authored by the Step-5 adjudicator receives a hash-bound
item/manifest/contract certificate after the successful dispatch and does not
require a self-review decision. The complete gate battery runs at
5a-adjudicate; a failing gate is an owner hold, never an agent repair round.
Step 5b reconciles cross-batch dependencies, changed consumers, exact hashes,
coverage, sources and ledger.
For a forward link used only in `## Remarks`, the 5b `orientation-reviewed`
verdict retains the visible link and `forward_refs` declaration. Its exact-use
review binds the current citing item, target item and evidence-file hashes;
the checker also verifies that every target wikilink remains in Remarks and
that the authored target is on a strictly later planned page. A load-bearing
forward use must first be repaired and receive its changed-carrier and impact
reviews before it can qualify. `lemmas-added` remains for an actual earlier
mathematical supplier, and `dropped` for a genuinely withdrawn item.

Step-5/7/8 auditor-created certificates bind the item, manifest entry and owning
contract. Initial certification requires a successful auditor/adjudicator author
dispatch. Changed-carrier recertification normally requires a successful covering
author dispatch. For an owner-held gate repair of an already certified item, the
owner may instead record an exact-carrier, evidence-hash-bound receipt with
`node tools/auditor-created-items.mjs owner-recertify --run RUN --step 5|7|8
--id ITEM --evidence research/FILE --reason TEXT`, then run `certify` again.
This preserves the original successful author result as origin evidence and
cannot certify a never-authored new item. The receipt is checked again by every
consumer; editing it or its evidence revokes certification. Unchanged hash-bound
evidence survives restart and metadata-only file touches; a contract-only edit
requires either fresh covering author evidence or this explicit owner receipt.
These provenance receipts use `auditor-created-stage-bypass-v2`. Legacy v1
receipts are rejected by consumers and revalidated by the certifier, retaining
the immutable v1 inventory baseline. Reuse requires the same run and baseline
hash. The latest carrier write must be no later than the dispatch's `ended_at`;
there is no post-completion timestamp allowance. Failed migration leaves the
old receipt untouched but unavailable as certification evidence.

Every certification consumer checks the complete current carrier hashes, run,
batch/home and immutable baseline/origin binding, not only the normalized judge
hash. A stale latest certificate blocks closure and judge planning; it never
becomes an ordinary self-review target. A later Step 5/7/8 author may refresh an
earlier auditor-created item only with a legitimate covering dispatch from that
later step and a change in that item's own carriers. New stage baselines capture
per-item `item_carriers`; a sibling's shared manifest/contract file write cannot
promote an unchanged item. Legacy baselines remain immutable. Earlier receipts
cannot reconstruct the later boundary's missing per-item carrier snapshots,
including from a Step-3 transitive hash. Without that boundary evidence no new
cross-stage promotion is issued; existing genuine same-stage V2 certifications
retain their ordinary reuse path.
Consumers also reject a carried row whose recorded carriers show no such
candidate-specific delta, even if a successful later dispatch exists.
The new receipt records `origin_step` and `origin_baseline_sha256`;
the original baseline and receipt remain unchanged. This does not relabel any
scaffold original or preexisting file, waive owner holds, license new scope, or
replace content, dependency, contract, impact or repair-authority gates.
Unchanged earlier evidence remains usable until a later author changes its
carriers. Step-3 origin alone is not a later-stage judge waiver.
The originating receipt must still resolve to a successful dispatch with its
own run, allowed role/label, batch coverage and valid time ordering. A canonical
receipt row without that dispatch is not origin evidence. Baselines, receipts
and dispatch results are engine-owned evidence, not agent-writable attestations:
the receipt records the historical write-window check, while current hashes
are recomputed independently. Filesystem touches alone do not erase that check.
Adding or removing only `verification.judge` is also certification-neutral.
The receipt's raw item hash, guard hash and Step-5 composite remain historical audit
evidence; currency compares the judge-normalized item plus the exact manifest
and contract entries. Other verification fields remain hash-bound. Mechanical
stamp cleanup therefore needs no fresh author dispatch and preserves the prior
V2 carrier evidence.

Author provenance recognizes only the exact stage-specific emitted label families:
Step 3's hashed group-author labels for existing runs and pair-author labels for
new runs; Step 5's group and lead dispatches (historical runs may also carry
gate-batch and scoped gate/edge repair labels); Step 7's adjudication, guard, preflight, cross-group, closure,
repair and final-adjudicator queues; and Step 8's lead, changed/carried/close,
impact and receipts repairs. Roles must match the corresponding emitter.
Generic substring labels, other stages, malformed counters and reversed dispatch
windows cannot certify current carriers.
Every author result must carry an explicit coverage array. Missing, null or
non-array coverage is invalid, never global. Steps 5/7/8 retain explicit `[]`
and `["all"]` global routes; Step 3 requires the exact batch for a legacy group
dispatch or the exact A-page ID for its pair dispatch.

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

Both Step 5b impact windows use a direct boundary: review each direct
dependency and reference consumer of a changed public surface against the
source's current claim and hypotheses. A consumer whose exported interface
changes is itself a changed source in the same window; a later repair enters the
post-5a to current window. Once a direct consumer's claim and assumptions remain
licensed, its unchanged export stops propagation. This does not waive checking
its proof or a newly load-bearing premise, including AC. Both receipts still
require exact item evidence.

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
The liveness probe uses bounded backoff for transport failures and spaces
Wayback requests; an HTTP rejection remains a failed citation.
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
and rejection against the actual mathematics. A rejection is evidence requiring
adjudication, not automatic authority to rewrite a sound result.

## Step 7 repair protocol

`tools/step7-workflow.mjs` owns preparation, collection, central certification,
judgment and closure. `7-baseline` and `7-scope` freeze the immutable frontier
in `research/<run>-step7-v2/frontier.json`. Step-7 repair, adjudication,
rejudgment and item gates use only those IDs, including published items in that
frontier. Outside consumers, published or draft, never enter these mechanisms.

| Part / stage | Required work |
|---|---|
| 7.1 / `7.1-adjudicate` | One Sol xhigh adjudicator per batch resolves Step-6 rejections and repairs confirmed frontier defects. |
| 7.2 / `7.2-impact` | Three Sol xhigh owner agents concurrently close disjoint frontier impact assignments; empty lanes record no-ops. |
| 7.3 / `7.3-certify` | After all frontier repairs/reviews close and writers drain, certify the stable state centrally. |
| 7.4 / `7.4-rejudge` | Sol high rejudges repaired frontier items against the stable state. |
| 7.5 / `7.5-adjudicate` | Sol xhigh batch adjudicators resolve renewed frontier rejections and repair confirmed defects. |
| 7.6 / `7.6-impact` | Three concurrent owner lanes close frontier impacts. |
| 7.7 / `7.7-certify` | Certify once after repair closure and all writers drain; repeat 7.4–7.7 until below threshold. |
| 7.8 / `7.8-gate` | Run the complete battery with item findings scoped to the frozen frontier. |
| 7.9 / `7.9-repair` | Three concurrent owner lanes repair actual frontier gate subjects; no additions. Centrally recertify after closure. |
| 7.10 / `7.10-gate` | Rerun the same scoped battery; repeat 7.9–7.10 until green. |

The threshold is `20 * unique_fatal_original_frontier_items < original_scope_size`
in the latest completed adjudication round. Count each original item once;
additions, outside consumers and smaller queues do not change the denominator.
Exactly 5% continues the loop. The threshold permits the final gate, never
unresolved defects or uncertainty. Confirmed nonfatal defects also require repair;
false positives require evidence without unnecessary edits.

New adjudication packs require `defect_type` (`logic`,
`dependency_citation` or `other`) for confirmed fatal decisions. Historical V2
omissions remain usable only when the exact row matches the frozen pack,
collected decision, hash-bound report and successful Sol xhigh dispatch.
They remain fatal and explicitly unclassified; never guess the category or
rewrite historical evidence.

A change to the original `## Statement` or `## Definition`, including a
lemma, proposition or corollary, triggers downstream examination. New packs
freeze section hashes and compare them directly after repair. Proof, citation,
dependency and metadata changes with unchanged interfaces do not propagate.
Examine direct consumers through declared dependencies and references; a
reference is a candidate for examination, not automatic repair authority.
Record exact mathematical uses and explicit discoveries, including missing
load-bearing dependencies. Repair only a genuine effect with the smallest
logically sufficient change. Continue another hop only if that consumer's
Statement/Definition changes. Never expand a blanket transitive closure through
unchanged consumers.

Frontier consumers enter Step-7 assignments, whether published or draft.
Outside consumers enter the separate durable protocol in
`tools/consumer-maintenance.mjs`, using `briefs/consumer-maintenance.md`.
After frontier writers drain, three disjoint maintenance lanes examine direct
consumer obligations before central certification. Each obligation binds the
supplier's exact Statement/Definition event and its consumer, and closes once
for that event. Step-7 gates, rejudgment and unrelated context changes cannot
requeue outside work. A genuine later supplier-interface event creates a new
obligation.

All statement changes propagate under the same direct-hop rule, including
changes made to published or draft maintenance items. A necessary maintenance
statement change emits a new event; a proof-only edit emits none. A cascade
may return to the frontier, where the ordinary frontier owner protocol handles
it. Never send a frontier item to outside maintenance, or an outside item to
Step-7 repair, adjudication, rejudgment or item gates.

For each proposed maintenance edit, record the exact `affected_use`,
`invalidated_claim`, `minimality` explanation and exact before/after snippets.
Reconstruct the resulting file from those snippets against its frozen input;
reject unreported changes. Leave a sound consumer unchanged with a specific
unaffected explanation. This mechanical evidence check does not prove that an
edit is mathematically necessary or minimal. Source reading, uncertainty and
independent reasoning requirements apply in full. Report unresolved mathematics
as a blocker. Maintenance authorizes no unrelated rewrites or new items.
Keep candidate, assigned and completed evidence distinct. Finish the required
maintenance and any frontier work it discovers before central certification.
Confirmed published defects remain in the canonical published-consumer ledger;
operational queue state belongs in run records.

Review contexts bind the reviewed item's full guard and its direct suppliers'
Statement/Definition hashes. Supplier proof-only changes do not invalidate a
consumer review. Certification still binds the complete stable content and
context. Historical packs and reports remain immutable; missing before-section
snapshots are never reconstructed by guesswork. Their historical obligations
remain recorded, while new assignments obey current frontier scope. Reuse
legacy reviews only when the original hash is reconstructible, the review
covered the required carriers, and those carriers remain unchanged.

All three owner lanes run concurrently in 7.2, 7.6, 7.9 and every continuation.
Assignments stay disjoint. Finish the preceding writers before continuing and
finish all required frontier reviews/repairs and separate consumer maintenance
before the one central certification pass. Later supplier statement changes requeue affected frontier
reviews before certification. Shared metadata edits use short acquire/read/edit/
release sections under `tools/step7-shared-write-lock.mjs`; never hold the lock
during research. Read shared files again after acquiring it.
A repeated pending set at any previously assigned content state holds for
operator resolution of stale evidence or oscillation. The hold neither
dispatches another identical wave nor certifies unfinished work. Historical
policy migration must preserve original evidence.

Workers record evidence and repairs; they do not certify their own dispatches
or manufacture judgments. Round identity and current hashes bind every verdict,
decision and certificate. Missing evidence, stale certification and incomplete
frontier coverage block closure. Reports copy the frozen assignment identity.
`repaired` requires a guarded item change; a contract/page-only correction
uses an `unaffected` item review, an exact reason and
`metadata_repair_only:true`. Unfamiliar mathematics needs sources actually read.
An authorized correction to an uncollected handoff preserves its original
report and attributes new review separately; `supporting_evidence` paths and
hashes bind originals and supplements without waiving dispatch or source checks.

Before 7.9, adjudicators and frontier owner agents may author a genuine unmet
prerequisite of an assigned repair. Record the missing claim, consuming proof
step and why existing items do not suffice. Fully author it with explicit
hypotheses, source evidence and honest uncertainty; use a unique ID and register
its index, page, manifest and contract with the shared-write protocol.
Preserve author-origin and certification integrity. Additions stay outside the
immutable frontier and its Step-7 rejudgment/gate loops. 7.9 and its
continuations permit no new items. Unrelated additions remain unauthorized.

`tools/step7-frontier-gate.mjs` scopes the 7.8/7.10 battery. Precheck,
rendercheck and prosecheck receive explicit frontier item paths. Supported
broad detectors expose JSON findings, partitioned by actual failing subject.
The defect ledger validates its frozen `--frontier` and excludes known outside
subjects while retaining structural/history checks. Outside-maintenance and
auditor-addition certification gates do not gate Step 7. Published frontier
items retain their ordinary frontier gates. PASS rows, inventories,
upheld records and merely cited suppliers confer no repair ownership.

Keep complete raw diagnostics, raw exit codes and explicit outside exclusions.
An outside-only result may clear the scoped gate but is not a mathematical pass
for those outside findings. Mixed results retain frontier failures; global
integrity, cycles, runtime errors, malformed output and unknown diagnostics
remain blocking. Global/tool failures require operator resolution when content
repair cannot resolve them. Gate candidates alone never seed downstream work.
Failed primary and advisory findings retain their actual subject ownership in
frozen evidence; current frontier statement changes independently trigger
impact examination.

Historical published repairs, including Step-5 cross-group repairs, retain their
original claims, provenance and content evidence. This grants no new Step-7
outside assignment or certification obligation. Keep historical licenses and
source reports intact; a scoped Step-7 pass cannot attest outside mathematics.

`7-freeze` snapshots the closed frontier state for Step 8. Historical terminal
resolution tools remain available for their original protocols, not as new
convergence shortcuts. Explicit post-freeze recovery follows the guarded
Step-8 controls below.

Step 8 reviews scope and post-repair changes, closes impact and applies current
stamps through the tool. Genuine Step-8 auditor/adjudicator-created additions
receive the same distinct hash-bound certification and are excluded from the
judge/re-adjudication loop. The same applies to legitimately refreshed earlier
auditor-created items with retained origin evidence; ordinary baseline originals
are not exempt. A missing or failed receipt gate is owner-held; it does not
launch another author. Owner-authorized correction preserves completed spine
readings and valid evidence.
Coverage checks skip context hashing when the judge ledger is missing and keep
the hash cache separate from the ledger, including nonstandard filenames.
Proof-contract reports drain stdout/stderr before exit so large JSON diagnostics
remain complete when piped.
Step 9 requires contracts, ledger, pathways, readiness
and owner-report evidence before committing. New content remains draft. Reused
published identities require evidence at the pinned ancestor baseline. Only the
owner publishes and pushes. Close-out means publishable pending owner approval.
The generated owner report counts terminal resolutions by each receipt's actual
`resolved_by` role; it never describes owner resolutions as final-adjudicator
work or invents a model endorsement.

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
pre-author impact baseline survives. Gate failures remain owner-held throughout
migration; no automatic repair budget is available.
The private manifest hash-schema key is version-stable across step renumbering;
stage names are not a reason to invalidate unchanged reviewed mathematics.
Scope snapshots and cross-group carriers use that same schema.
If preparation stops at validation before state creation, fix the tool and use
`--resume-preparation`. It requires byte-identical derived files and unchanged
source evidence; it cannot overwrite repairs or reuse an active target.
Migration authorizes no new frontier, publication or push.

### Run controls

To recover an interrupted, uncollected owner continuation or initial gate repair
wave after fixing routing, pause and stop the controller, then run
`node tools/step7-impact-recovery.mjs --run RUN --state-dir .autopilot/RUN
--reason "Explanation of the corrected routing defect"`.
The guarded operation refuses active work, completed evidence or item changes
since the pending assignment. It preserves old tasks and failed dispatches,
records their supersession, and recomputes a fresh monotonically numbered pass
from completed evidence. Initial gate recovery instead reparses the preserved
failures into a fresh base assignment, retaining prior certification as immutable
historical evidence and excluding superseded speculative seeds. It never
overwrites successful reviews, certifies
items, or resumes automatically. Resume/start the controller only after checking
the corrected assignments. Repeating the same recovery reason is idempotent.

Always use the exact run and state directory:

```bash
node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --run RUN --state-dir .autopilot/RUN
node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts doctor --run RUN --state-dir .autopilot/RUN
```

Doctor probes each dispatch plan in descriptor-only mode with that stage's
current declared unit IDs; future plans do not consume prerequisite artifacts
during this probe, while runtime planning still validates them.
The stage-table preflight checks future gate descriptors in the same mode;
runtime gate execution still reads the frozen Step 7 frontier.
pair-keyed stages therefore receive A-page IDs rather than synthetic batch
numbers. For stages whose prerequisites have not produced units yet, it retains
synthetic probes so later command flags and schemas are still checked.
Status snapshots tolerate transient parse failures in future-stage artifacts
while an earlier worker is replacing them; the owning stage's gates still
reject any malformed artifact that remains when the stage closes.

The command also supports plan, start, pause, pause-at, resume, retry, stop and
report. pause stops new dispatches, not active work; pause-at with a stage names
a durable stop that fires once that stage is stamped complete, before the next
stage dispatches anything. resume clears pause but does not
start a dead controller. retry re-arms unfinished work after intervention without
erasing completed coverage or lifetime judge limits; it does not turn a gate
failure into an automatic repair wave. stop exits the controller
without killing workers. Stage skipping needs explicit owner authority.

Stages clear only after successful matching coverage, artifacts and gates. The
engine adopts compatible workers and waits for existing in-flight work. Any
subsequent gate failure outside Step 7's authorized loop is owner-held before a
repair hook or budget can run. For every step from 1 through 9, the owner/operator
or assigned Step-7 owner repair agents must repair each rejected
item and refresh all certifications invalidated by that repair. `retry` then
reruns the rejecting gate on the repaired, recertified carrier; transition to
the next step is forbidden until it passes. Thus the universal order is
certify, gate, owner repair on rejection, recertify, and rerun the same gate.
Infrastructure retries are bounded. Step 7's mathematical and gate repeats are
explicit protocol transitions, with fresh round evidence; they do not reuse an
earlier successful dispatch as a new review.

An owner-authorized fatal finding discovered after Step 7 may use
`recover-step8 --authorization FILE` only while the run is paused, inactive and
has not entered Step 9. The authorization must bind the exact run,
`post-step7` baseline, required repair targets and a bounded allowlist. The
command archives successful result receipts and reopens only
`8-changes-judge`, `8-close`, `8-changes-stamp` and `8-receipt`; it preserves
Step 7 history and leaves the run paused. This is recovery from a newly
discovered defect, not an additional ordinary repair loop.
Step 5 gate diagnostics still identify exact items and ownership, but they no
longer dispatch gate-triggered repair groups or a serial writer. Failures naming
only foreign carriers remain with their actual owners; warning inventories do
not establish repair ownership. Precheck FAIL/REPAIR headers identify owner-held
subjects; PASS rows and the printed proof's citations do not. Unknown or mixed
diagnostics are holders too, not repair-routing authority.
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
