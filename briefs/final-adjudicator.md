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
