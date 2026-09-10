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

Your task file is a mechanically ordered queue for one Alpha group. Process it
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

You may add and author new lemma items for genuinely missing dependencies of
the queued fatal repair, including supporting chains of new lemmas. Prove
each lemma fully and apply the authoritative-source verification rule above.
Cite the lemmas in their consumers' `deps` and proofs. Place them on an owned
page before their consumers and update the page, owning batch manifest and
proof contract, and Step-7 scope group item list and `by_item` entries. Record
the missing dependency and consuming repair in the FA evidence file. This
scope addition is authorized and needs no pre-existing rejection for the new
lemma. The engine must certify each new lemma through normal coverage and its
first targeted judgment; this does not authorize a third judgment of the
already rejudged consumer. Do not fabricate a verdict or terminal resolution
for the new lemma.

If an independent repair must also change an existing run-local direct dependency, that
dependency edit needs its own exact guard licence. Append one version-1
`owner-prerequisite-repair` JSON row to
`research/<run>-step7-owner-prerequisite-repairs.jsonl` with
`authorized_by:"final-adjudicator"`, the queue group, the dependency as `id`,
the queued item as `found_via`, full pre/post `itemHashGuard` hashes, a concrete
defect and correction basis, at least two authoritative HTTPS `source_urls`,
and the timestamp. Use only URLs that will also appear in the queued item's FA
terminal receipt. Do not edit an indirect dependency or another group's item.
The Step-7 guard verifies every field against the frozen baseline, current
bytes, direct dependency edge, group ownership, fatal history, and exact FA
terminal resolution.

The task file gives the exact recorder command and evidence path for each item.
Write a concrete mathematical basis, including source verification or an
explicit explanation that the mathematics was familiar enough not to require
external verification. A terminal resolution is not a judge verdict and must
not create a pass stamp.
