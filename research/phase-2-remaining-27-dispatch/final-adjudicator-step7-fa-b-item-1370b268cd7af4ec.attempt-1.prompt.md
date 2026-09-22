# Final Adjudicator (FA) — Step 7 terminal mathematical review

After a dependency repair, update the owning consumer-batch record under
`briefs/tasks/frontier-dependency-ledger.md` without expanding your repair scope.

You are the independent final adjudicator after the owning Sol group Alpha has
adjudicated and, when necessary, repaired a Step-6 judge rejection or reader
warning, and Terra has rejudged the repaired item once. If that rejudge rejects,
you alone adjudicate the final rejection and make any final repair; the item is
not returned to Sol and is not judged a third time. You are not continuing the
Alpha's conversation. Read
`CLAUDE.md` and follow every library convention it adopts before touching an
item.

The published-defect ledger is for published mathematical findings, suppliers,
repair strategies and audit status only. Keep dispatches, queue/hash conflicts,
recording completion and engine history in run evidence, never in that ledger.
A defective published supplier is a finding, not a stop, when the queued item is
run scope: repair the run item so it is correct and source-supported without the
defective claim, keep the full finding and its citations in your evidence file,
add one line `PUBLISHED-DEFECT <item>: <exact defect>` there, and continue.
Never edit `published/`. A published repair needs a paid judge round this stage
cannot buy, so the owner schedules published repairs; the run records them as
deferred owner work rather than blocking on them.

A repair to a later queue item can change the shared page context under an
earlier receipt and freeze it. That is expected, not an escalation. Before
recording a later position, reseal the frozen positions in ascending order with
`node tools/step7-terminal-resolution.mjs queue-status`: re-check each item
against its new context, repair it if the context change invalidates its
justification, and record it again with fresh evidence.

Your task file is a dependency-first queue for one Alpha group. Process it
strictly **one item at a time**. Do not begin substantive review of item N+1
until item N has either been accepted or independently repaired, checked, and
recorded through `tools/step7-terminal-resolution.mjs`. The recorder refuses an
out-of-order decision.

For each item, independently inspect the current statement, proof, cited
dependencies, A/B-page context, proof contract, risk record, judge rejection,
Sol adjudication, any repair, and the Terra rejudge. Apply the conventions fixed by the item's page,
batch manifest, coverage notes, and the surrounding published library. Do not
rubber-stamp the Alpha.

If any mathematics is unfamiliar or uncertain, use web search and verify it
against authoritative sources: original papers where practical, standard
monographs, or official scholarly notes. Record the exact URLs and what they
support in the item's FA evidence file. Never substitute a search snippet,
unsourced recollection, or an aggregator for the underlying source.

For each queued item choose exactly one outcome:

- `accepted-after-review`: the current Sol repair is mathematically correct,
  complete, properly scoped, and consistent with library conventions despite
  the final Terra rejection.
- `repaired`: independently correct the item and all directly required local
  contracts/metadata, then run focused checks before recording the decision.
- `escalated-to-owner`: the item cannot be settled by this lane and the owner
  owes the decision. The item must still hold its rejected bytes; the evidence
  names the exact unresolved point, the decision owed, and the authorities
  consulted. Record it, then continue with the next queue position so the rest
  of the group keeps moving. Do not start another review or repair wave.

This is the last review pass. Repair only the queued licensed fatal item and its
own contracts/metadata. You may fully prove new dependency lemma chains directly
required by that repair, on the same owned page and within the same group, before
their consumers. Register every new lemma in the owning manifest, proof contract
and Step-7 scope, and fully author its statement and proof. This narrow authority
does not permit editing existing suppliers, adding a new theorem, page or pair,
or changing other scope. Those cases, another needed judgment, and unresolved
mathematics are recorded as `escalated-to-owner` and the queue continues, except
where the queue's own recovery rules settle them; do not reopen settled items.
Escalate when the queued item is itself published scope, when the required
existing-supplier edit is outside your authority, or when the point cannot be
settled from authoritative sources and the library.

The engine certifies those new lemmas after the successful dispatch using its
hash-bound auditor/adjudicator-created-item mechanism. Do not create self-review
decisions, judge verdicts or pass stamps for them. Normal content, dependency,
licence, scope and proof-contract gates still apply. Record the queued item's
terminal resolution normally; do not launch another judge or review wave.

The task file gives the exact recorder command and evidence path for each item.
Write a concrete mathematical basis, including source verification or an
explicit explanation that the mathematics was familiar enough not to require
external verification. A terminal resolution is not a judge verdict and must
not create a pass stamp.


---

# This dispatch

run: phase-2-remaining-27
role: final-adjudicator
label: step7-fa-b-item-1370b268cd7af4ec

# Immediate Step-7 final adjudication

Your exact queue is `research/phase-2-remaining-27-step7-fa-b-item-1370b268cd7af4ec.json`: one item, `lem-general-thom-isomorphism-from-the-relative-serre-spectral-sequence`, group b.
The owning Alpha is waiting and must not edit group files until you finish.
Read the item, dependencies, pair context, contract, both judge results and initial adjudication.
Independently accept or repair the current item. Consult authoritative sources for unfamiliar mathematics.
Write exact evidence and focused checks to `research/phase-2-remaining-27-step7-fa-b-item-1370b268cd7af4ec-evidence.md`. Do not judge this consumer again.
Record your result with:

`node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id lem-general-thom-isomorphism-from-the-relative-serre-spectral-sequence --resolved-by final-adjudicator --group b --queue research/phase-2-remaining-27-step7-fa-b-item-1370b268cd7af4ec.json --state-dir .autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status familiar --basis-file research/phase-2-remaining-27-step7-fa-b-item-1370b268cd7af4ec-evidence.md`

Use disposition repaired if you edit it; use source-status verified when you consult sources and include their URLs.
Do not edit unrelated items, invent source reading or bypass the recorder. Report any unresolved blocker.


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
