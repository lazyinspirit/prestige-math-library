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
| 7 — repair | 7-baseline, 7-scope, 7-adjudicate, 7-preflight, 7-rejudge, 7-close, 7-final, 7-freeze | Licensed repairs and current terminal judgments |
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
| Scaffolding; Step 3b group authors | Astra / medium |
| Step 3a scope; group Alpha | Sol / high |
| Step 5a adjudicators and recovery | Astra / medium |
| Assignment; Step 6 readers; ordinary Step 8/9 work | Terra / high |
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
dependencies. An approved scaffold or empty contract cannot satisfy authoring.
Refresh sufficient scope evidence after local additions/repairs; never overwrite
owner-held decisions. Authors maintain batch-owned manifests, contracts, coverage,
notes and dependency inputs. Shared prose/plan amendments go in the group handoff.

Step 4 keeps its mechanical splice and snapshot. The splice permits new local
A-page definitions/lemmas only with complete current author decisions, retained
existing inventory/order and actual owned consumers. Other scope changes require
explicit authorization. Pre-splice author checks do not demand a completed splice;
Step 4 and later gates enforce exact canonical-plan agreement.

A scaffold strategy is not proof text. Scripts may format completed arguments,
not manufacture generic proofs/contracts. Structural checks and finite tests do
not establish mathematical validity. Preserve provenance and generated-leaf rules.

## Review, sources and impact

Step 5a reviews actual authored mathematics directly, not scaffolds again.
Accept sound content, repair locally with fully authored suppliers, or escalate
substantial gaps. Every item/page, including new suppliers, needs evidence;
high-risk review occurs during the same read. Step 5b reconciles cross-batch
dependencies, changed consumers, exact hashes, coverage, sources and ledger.

Snapshot order is pre-author before Step 3b, post-author in Step 4, post-5a after
group review, and post-step7 after repair. Impact checks include authoring changes.
Maintain consumer inputs under briefs/tasks/frontier-dependency-ledger.md; the
engine merges them at mutable joins. Graph/hash checks do not certify proofs.
The Step 5b lead owns both impact receipts: pre-author to post-5a, and post-5a
to current content. Empty windows still need reviewer attribution. Historical
reviews may supply evidence only after current hash and interface reconciliation;
never reset a baseline or bulk-approve candidates to close a gate. Narrow gate
repairs retain their assigned scope.

After an initial full-text retrieval failure, search alternatives and retry at
most five times. Stop on success and reuse recorded attempts. After exhaustion,
give a complete alternative local proof and prerequisites with justified
confidence, or escalate. A source drop waives unavailable backing, never results.
Temporary outages do not establish permanent unavailability. Preserve genuine
fetch, URL and source-backing evidence; a PDF page count does not establish reading.
URL sweeps that fail only with transport errors wait for network recovery;
they do not retire reviewed sources or dispatch reharvesting workers.
Compressed PDFs require mutool. Documents under four pages require the complete
short_document_reading receipt specified by the fetch tool and scaffold brief.

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
consumers and give each its own first judgment. Each repaired consumer gets one
paid Terra rejudge. Rejection goes to a fresh Astra final adjudicator, which
accepts or repairs without another consumer judge call. Never invent stamps or
repeat unchanged attempts. Preflight closes integrity before rejudgment.

Step 8 reviews scope and post-repair changes, closes impact and applies current
stamps through the tool. Step 9 requires contracts, ledger, pathways, readiness
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
round. Infrastructure retries are bounded; unchanged mathematical failures hold.
Step 5 budgets three repairs per gate/item, mechanical fixes first, then disjoint
groups or a serial writer. Recognized outages can refund a round with 20-minute
backoff. Doctor checks commands/tasks, not mathematical correctness or quotas.

Frontier selection requires strictly more than 95% of each page's same-category
prerequisites published, excluding partner/cross-category edges. Explicit in-run
dependencies require planning authorization; missing suppliers are not pulled in
automatically. Stage files hot-reload; configuration/imported registry changes
require restart. Never hot-install this renumbering into an existing run.
Historical RESUME files do not establish live state. Supervise every ten minutes,
intervening on blockers or nonclosing loops. Protected readiness/report bytes
must remain unchanged until close-out.
