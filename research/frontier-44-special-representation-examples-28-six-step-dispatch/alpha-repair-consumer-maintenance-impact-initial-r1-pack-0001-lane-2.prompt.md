# Separate consumer maintenance

**Proof formatting when editing items:** Separate numbered steps and the first
step after introductory prose with blank lines. Keep each complete step in one
paragraph, with single newlines inside it. End every step with valid `[tags]`;
put punctuation before the tags and use `[tags] ∎` on the final step. Preserve
mathematics and references. After final edits and any formatter, run once
before handoff: `node tools/proof-layout.mjs items/<id>.md ...`, batching all
your changed item paths in one command.
Read-only assignments report defects without editing.

**Proof repair quality for item editors.** When editing an item file, make every proof repair mathematically sound and as concise as the argument allows. State essential hypotheses and important caveats clearly; remove repeated talking points, filler, and padding that add no mathematical content. Add intermediate lemmas to satisfy unmet prerequisite if possible.

Read CLAUDE.md, README.md, the generated task and its frozen assignment fully.
The generated task is authoritative for exact identities, supplier events,
assigned existing items, output path and report schema. You are one of three
disjoint maintenance lanes. Empty lanes return honest empty decisions.

Edit only assigned items outside the immutable frontier. Published frontier
items belong to ordinary Step 5 and are not your maintenance targets. No new
items, unrelated edits, cosmetic improvements or weaker replacement claims.
This assignment is separate from Step-5 repair, judgment, adjudication and gates.
Do not launch workers, write judgments or certificates, or claim independent
review of your own repair.

Examine the exact mathematical use of every changed supplier listed in the
assignment. A candidate is not automatically defective. Leave a sound consumer
byte-for-byte unchanged. Repair only an actual invalidated claim or use, with
the smallest logically sufficient edit. Understand the statements, proof and
prerequisites; logical validity is the ground truth. Sources and earlier reviews
can be mistaken. When unsure, read authoritative arguments and check their
hypotheses. Record actual understanding, sources read and uncertainty honestly.
Unresolved uncertainty blocks completion; never invent evidence or confidence.

Keep item ownership disjoint. For necessary shared metadata work, acquire
`node tools/step5-shared-write-lock.mjs acquire --owner YOUR_DISPATCH_LABEL`,
reread the current file, make and check the minimum change, then promptly use
`release`. Exit 2 means busy: continue independent work and retry before edits.
Never hold the lock during research or waiting, or remove another owner's lock.
Record exact shared-file changes in run evidence and the task's integration
handoff. The maintenance collector currently verifies item carriers only; do
not claim it has verified shared metadata. Keep operational history out of the
canonical published-defect ledger.

Return `{run,pack,lane,input_sha256,decisions:[...]}` at the task's output path.
Copy identity and `input_sha256` exactly; the controller generates content
hashes. Each assigned item needs one decision with these fields:

- `id`, `disposition` (`sound` or `repaired`) and a specific `reason`.
- `understanding:{basis:"familiarity"|"sources",evidence,uncertainty:false,sources:[{url,read:true,evidence}]}`.
- `event_uses:[{event_key,affected_use,reason}]`, covering every exact supplier
  event assigned to that consumer.
- `affected_use`, `invalidated_claim`, `minimality` and
  `edits:[{before,after,necessity}]` for a repaired decision.

Every explanation must contain at least 40 characters of specific evidence.
Use `basis:"sources"` when source reading supports your understanding, with
nonempty actually read URLs and exact supporting evidence. Never claim
familiarity to evade required reading. For unresolved mathematics, report
`disposition:"escalated"` or `uncertainty:true`; collection must remain blocked.

Every declared edit needs its own precise necessary-repair explanation. Each
`before` snippet must occur uniquely at its sequential position in the frozen
input; `after` is its exact replacement. Account for every changed item byte.
Sound decisions use `edits:[]` and explain why every supplier event leaves the
consumer valid. Exact reconstruction checks accounting; it does not prove
mathematical necessity or minimality. You remain responsible for the argument.

The controller handles each supplier-interface event and outside consumer once;
gates or unrelated context changes do not reopen it. A necessary change to this
consumer's Statement/Definition creates another direct-consumer event. Proof-
only, citation, dependency and metadata edits do not propagate. Do not expand
a transitive closure or edit unassigned discoveries. The engine routes further
outside work to maintenance and returning frontier targets to ordinary owners.
Report unfinished work clearly. Central certification waits for required
frontier repair and maintenance closure after every writer drains.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.


---

# This dispatch

run: frontier-44-special-representation-examples-28-six-step
role: alpha-repair
label: consumer-maintenance-impact-initial-r1-pack-0001-lane-2
covers: maintenance:pack-0001:2
output: research/frontier-44-special-representation-examples-28-six-step-consumer-maintenance/pack-0001-lane-2-report.json

# Separate consumer maintenance — pack-0001, lane 2

Read CLAUDE.md and research/frontier-44-special-representation-examples-28-six-step-consumer-maintenance/pack-0001-lane-2.json. Only edit these existing items: (none). No new items. This is not Step-5 repair, judgment, adjudication, certification or a gate. Examine the exact use of each changed supplier. Leave sound consumers byte-for-byte unchanged. Make only strictly necessary smallest logically sufficient repairs; do not tidy, restyle or improve unrelated text. Read authoritative sources if unsure; report unresolved uncertainty instead of accepting it. Never invent source reading or hashes.

Write research/frontier-44-special-representation-examples-28-six-step-consumer-maintenance/pack-0001-lane-2-report.json as JSON {run,pack,lane,input_sha256:"f76f9a6c9cd36bfb86a1a599df7360a667164722da249b02042c9ec9f4b52970",decisions:[...]}; copy the controller-generated input hash exactly. Include one decision per assigned item: {id,disposition:"sound"|"repaired",reason,understanding:{basis:"familiarity"|"sources",evidence:"specific honest account",uncertainty:false,sources:[{url,read:true,evidence}]},event_uses:[{event_key,affected_use,reason}],affected_use,invalidated_claim,minimality,edits:[{before,after,necessity}]}. Every explanation must contain at least 40 characters of specific evidence. The sources array is mandatory when basis is sources; list only actually read source URLs and exact supporting evidence. Repaired decisions require the three explicit necessity explanations and a declared surgical edit list: each before snippet must uniquely occur in the frozen original at its sequential edit position; after is its exact replacement. Every edited byte must be represented, with a specific necessity explanation. Sound decisions have edits:[] and a specific mathematical reason explaining why each supplier change does not invalidate the consumer. Fields cannot establish mathematical truth; you are responsible for the argument. Identify unresolved mathematics with disposition:"escalated" or uncertainty:true (blocks collection). All content hashes are generated centrally; do not manufacture them.

If a necessary repair changes your item Statement/Definition and you discover an actual direct consumer use missing from the dependency/reference graph, record optional decision fields consumer_ids:["consumer-id"] and discovery_evidence:{"consumer-id":"exact mathematical use, at least 40 characters"}. Identify only existing direct consumers and reconcile missing load-bearing dependencies where within your assigned edit scope. A reference alone does not justify an edit. Discovery fields on a proof-only repair or sound decision never trigger downstream work.


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

Read each file ONCE per session, in the order the task gives it, and pull only the sections
and clauses you need — use the rendered evidence bundle first, and read the cited lines
rather than re-reading whole items. Budget the context you carry: this same
context is re-sent on every turn. The bundle is an entry point, never a fence: read
whatever else the mathematics requires, including other items of this frontier and the
published library, and search the web when a source must be checked.

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
