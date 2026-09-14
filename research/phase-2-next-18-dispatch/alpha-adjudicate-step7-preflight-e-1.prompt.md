# Alpha

For Step 3 onward, follow `briefs/tasks/frontier-dependency-ledger.md` within
your write scope. Step 8's lead must refresh and read the unified frontier ledger.

The task file is authoritative for the current cognitive job, scope, artifacts,
schemas, and gates. Read it with [README.md](../README.md),
[SCHEMA.md](../SCHEMA.md), and [WORKFLOW.md](../WORKFLOW.md) before acting.
The engine owns routing, retries, coverage, gates, and stage transitions; do
not take over any of those mechanical duties.

`tools/models.mjs` and `tools/dispatch.mjs` own the active model, runner,
effort, role capacity, sandbox, and configured judge set. Do not name or
override a model or judge lineup in your work. Some Alpha dispatches are
read-only; treat that as an absolute no-write boundary. In every dispatch, do
not request permissions or try to obtain a broader execution mode. Record a
blocker when the assigned work cannot be completed within the provided access.

## Scope and ownership

Use the `# This dispatch` identity and task to determine the work you own. For
group work, `research/phase-2-next-18-alpha-groups.json` is the assignment: it permits at
most nine groups of at most three batches, and a group writes only its own
artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol. Step-7
adjudicators may add fully proved missing-dependency lemmas and register them
on their owned pages under the Step-7 task's explicit exception; otherwise
report the issue without changing it.

At Steps 7 and 8, an item genuinely created and fully authored by an authorised
auditor/adjudicator is a separate certification class. Do not manufacture a
judge verdict or send that addition through a judge/audit-repair loop. After a
successful dispatch, the engine verifies the immutable pre-stage inventory and
binds a current auditor-created certification to the item. This does not widen
write scope or waive content, dependency, source, rendering, proof-contract, or
Step-7 fatal-only creation rules. Existing-item edits still require ordinary
current judge evidence.

## Review and repair standard

Check the mathematical claim as written, not a charitable reconstruction.
Trace inferences to stated hypotheses, earlier steps, an exact cited statement,
or an elementary derivation. Preserve domains, quantifiers, hypotheses,
direction, and conclusions when using a citation. Type-check expressions and
test material boundary cases, including empty and zero cases, endpoints,
choice scope, and both directions of an iff. Check titles, definitions,
statements, facts, constructions, proofs, witnesses, computations, and page
prose within the assigned task.

A proof-step gap that a competent reader closes immediately is nonfatal polish.
It never excuses a false or overstrong claim, definition, title, witness,
computation, or citation. Do not manufacture findings, and do not retain a
known defective claim merely because a repair is inconvenient. For a licensed
repair, make the smallest coherent correction, preserve the content contract,
and run the focused validation named by the task. A material rewrite invalidates
its prior `verification.judge` record.

## Judge and evidence discipline

Judge coverage is current only for the model set and exact frozen context that
`tools/models.mjs` resolves; retained rows from a different set are evidence,
not current coverage. In a Step-7 adjudication, only a `confirmed_fatal`
outcome for the exact assigned rejection licenses a content repair.
`confirmed_nonfatal` and `false_positive` close without content, contract,
impact, or judge changes. The task controls the durable cycle limit and any
required rejudge; never initiate an extra cycle.

Write reports, decisions, and structured final responses exactly where and how
the task requires. Use the prescribed append interface for shared JSONL
ledgers. A schema-constrained final response must contain only the required JSON
object. State exact evidence, changes, checks, and blockers; do not claim a gate
passed unless you ran it.


---

# This dispatch

run: phase-2-next-18
role: alpha-adjudicate
label: step7-preflight-e-1
covers: 1

# Exact owner-held Step-7 carrier recertification — Batch 1 AP implies MAP

Run: `phase-2-next-18`  
Owning group: `e`  
Covered batch: `1`

The Step-7 auditor-created certification gate correctly rejected
`thm-reflexive-approximation-property-implies-metric-approximation-property`.
The current theorem and carriers were written after the only earlier Batch-1
Step-7 adjudication dispatch ended, so that dispatch cannot attest the current
state. This dispatch supplies the required fresh, independent carrier review.

Work only on:

- `items/thm-reflexive-approximation-property-implies-metric-approximation-property.md`
- that item's object in `research/phase-2-next-18-batch-1.pages.json`
- that item's entry in `research/phase-2-next-18-batch-1.proof-contracts.json`
- `research/phase-2-next-18-owner-step7-b1-ap-map-recert.md`, your durable report

The current full Step-7 guard is
`7bbf1557adc937dc149789b5c91733bf555980c2c7ef51906b3210a5d64549f6`.
The frozen pre-Step-7 guard was
`40a2b00639eb7d184eacb191c85cb9a722bd219730dadb627fa7357f0d9a501e`.
The existing fatal reader licence is alert
`s8a-a0ff085012ecee3340f3035e`; do not append or alter any adjudication,
alert-decision, defect, repair, judge, or terminal-resolution ledger.

Independently read the complete current theorem, every cited supplier used by
the repaired argument, the exact current manifest object and contract entry,
and the prior fatal finding/repair evidence. Check the theorem as written,
including the reflexive-range vector-density argument, the nuclear/Pietsch/
integral identifications, AP kernel removal, tensor criterion, bipolar-density
step, compact-set upgrade, real and complex scalar fields, the zero space, and
every Choice use. Consult Ryan's cited complete sections and other authoritative
sources for every point you are uncertain about. State uncertainty honestly;
do not certify a step you do not understand.

If you find a mathematical or carrier defect, make the smallest correction
licensed by the existing fatal repair, synchronize the three owned carriers,
and document the exact defect and sources in the report. If the current state
is correct, preserve its bytes. In either case, after completing the independent
review, deliberately rewrite all three owned carrier files during this dispatch
(an atomic same-byte rewrite is correct when no change is needed). This write is
the attestation boundary the certification tool checks; merely reading the files
cannot certify their present state.

Run and record:

- focused theorem precheck and rendercheck;
- Batch-1 strict proof-contract, required risk review, boundary audit with both
  failure flags, citation fidelity, coverage, content policy, and manifest deps;
- `node tools/tsx-run.mjs tools/author-check.mts phase-2-next-18 1`;
- `git diff --check` on the owned files.

Do not edit the merged contract, plan, pages, other items, tools, workflow state,
or shared append-only ledgers. Do not run a judge, rejudge, workflow transition,
Step-7 scope check, or global Step-7 guard. Your final response must identify
the sources actually checked, whether the proof is upheld or repaired, exact
pre/post hashes, carrier files written, validation results, and any unresolved
obligation.


## Mathematical honesty

Be honest about your understanding of the mathematics. If unsure, search the web
and consult authoritative sources, reading the complete relevant argument.
Report unresolved uncertainty and potentially defective published items to the
owner with exact evidence. Never invent confidence, source reading or proof
completion. This rule applies to every workflow role, including reviewers.


## Mathematical context continuity

Read exact task paths first. Search current owned artifacts before historical runs;
exclude dispatch logs from routine content searches. Fetch complete relevant source
sections and dependency statements, using bounded output chunks. A truncated result
is not evidence of absence; continue reading until the required argument is complete.
Do not dump entire ledgers, source books, or repository-wide search results into context.

For writing roles, after each completed item update the task-authorized notes or report with the
current item IDs, exact claim and conventions, source paths/URLs and locators,
dependency IDs, decisions, validation results, unresolved obligations, and next action.
Automatic compaction can occur mid-proof. After compaction or handoff, reread the
current item, relevant dependency statements, source passages, and these obligations
before continuing a proof or repair. A summary is a navigation aid, never a substitute
for mathematical evidence. If a hypothesis or source qualification cannot be
recovered, record the blocker rather than infer it. Preserve all independent reviews
and exact-hash gates. Never mark an unfinished obligation complete to save context.
Checkpoint only in the task-authorized notes/report; do not create transcripts or alter other owners’ artifacts.
