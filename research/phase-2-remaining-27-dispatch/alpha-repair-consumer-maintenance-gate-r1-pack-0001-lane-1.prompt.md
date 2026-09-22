# Separate consumer maintenance

Read CLAUDE.md, README.md, the generated task and its frozen assignment fully.
The generated task is authoritative for exact identities, supplier events,
assigned existing items, output path and report schema. You are one of three
disjoint maintenance lanes. Empty lanes return honest empty decisions.

Edit only assigned items outside the immutable frontier. Published frontier
items belong to ordinary Step 7 and are not your maintenance targets. No new
items, unrelated edits, cosmetic improvements or weaker replacement claims.
This assignment is separate from Step-7 repair, judgment, adjudication and gates.
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
`node tools/step7-shared-write-lock.mjs acquire --owner YOUR_DISPATCH_LABEL`,
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


---

# This dispatch

run: phase-2-remaining-27
role: alpha-repair
label: consumer-maintenance-gate-r1-pack-0001-lane-1
covers: maintenance:pack-0001:1
output: research/phase-2-remaining-27-consumer-maintenance/pack-0001-lane-1-report.json

# Separate consumer maintenance — pack-0001, lane 1

Read CLAUDE.md and research/phase-2-remaining-27-consumer-maintenance/pack-0001-lane-1.json. Only edit these existing items: cor-continuous-extension-from-a-dense-subset-r, cor-normed-space-completions-are-uniquely-linearly-isometric, cor-p-adic-simple-root-lifting, def-canonical-natural, def-complete-metric-space, def-completion-of-a-normed-space, def-completion-of-a-number-field-at-a-prime, def-field-of-p-adic-numbers, def-metric-completion, def-metric-uniform-continuity, def-rational-local-fields, ex-completion-of-q-is-r, ex-lipschitz-extension-from-the-rationals, ex-p-adic-geometric-series, ex-polynomials-are-not-complete-in-the-supremum-norm, ex-the-same-sequence-in-real-and-p-adic-metrics, fs-cauchy-implies-convergent-in-every-metric-space, lem-completion-operations-are-well-defined, lem-number-field-completions-as-local-polynomial-factors, lem-p-adic-balls-are-clopen, rem-complete-metrizability-is-the-topological-shadow, thm-completion-of-an-absolutely-valued-field, thm-completion-universal-property-for-bounded-linear-maps, thm-decomposition-group-and-completion, thm-metric-completion-carries-a-unique-banach-space-structure, thm-metric-completion-exists, thm-metric-completion-unique, thm-metrizable-cech-complete-spaces-are-completely-metrizable, thm-number-field-places-classification, thm-p-adic-completion-agrees-with-the-fraction-field-of-zp, thm-p-adic-completion-is-a-field, thm-p-adic-digit-expansion, thm-p-adic-newton-criterion, thm-uniform-continuity-preserves-cauchy. No new items. This is not Step-7 repair, judgment, adjudication, certification or a gate. Examine the exact use of each changed supplier. Leave sound consumers byte-for-byte unchanged. Make only strictly necessary smallest logically sufficient repairs; do not tidy, restyle or improve unrelated text. Read authoritative sources if unsure; report unresolved uncertainty instead of accepting it. Never invent source reading or hashes.

Write research/phase-2-remaining-27-consumer-maintenance/pack-0001-lane-1-report.json as JSON {run,pack,lane,input_sha256:"5e43ba30e4cceaa8e0d2524cb8dca8358895ca1ad8d3e9aeb05c73a85790136a",decisions:[...]}; copy the controller-generated input hash exactly. Include one decision per assigned item: {id,disposition:"sound"|"repaired",reason,understanding:{basis:"familiarity"|"sources",evidence:"specific honest account",uncertainty:false,sources:[{url,read:true,evidence}]},event_uses:[{event_key,affected_use,reason}],affected_use,invalidated_claim,minimality,edits:[{before,after,necessity}]}. Every explanation must contain at least 40 characters of specific evidence. The sources array is mandatory when basis is sources; list only actually read source URLs and exact supporting evidence. Repaired decisions require the three explicit necessity explanations and a declared surgical edit list: each before snippet must uniquely occur in the frozen original at its sequential edit position; after is its exact replacement. Every edited byte must be represented, with a specific necessity explanation. Sound decisions have edits:[] and a specific mathematical reason explaining why each supplier change does not invalidate the consumer. Fields cannot establish mathematical truth; you are responsible for the argument. Identify unresolved mathematics with disposition:"escalated" or uncertainty:true (blocks collection). All content hashes are generated centrally; do not manufacture them.

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
