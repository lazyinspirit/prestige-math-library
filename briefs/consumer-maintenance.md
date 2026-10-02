# Separate consumer maintenance

**Proof repair quality for item editors.** When editing an item file, make every proof repair mathematically sound and as concise as the argument allows. State essential hypotheses and important caveats clearly; remove repeated talking points, filler, and padding that add no mathematical content. Add intermediate lemmas to satisfy unmet prerequisite if possible.

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
