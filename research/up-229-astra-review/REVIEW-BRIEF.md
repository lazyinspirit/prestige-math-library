# Independent mathematical review brief

Read `CLAUDE.md` and `README.md` fully, then the run plan, this brief,
`COORDINATION.md`, and your `agent-NN.jsonl`. Work strictly in assignment order:
finish reading, mathematical judgment, any local edit/check, and the receipt
for an item before starting the next.

Read the complete current claim and proof or recorded assertion, its original
U-P reason, and exact load-bearing published or Phase-2 supplier contracts.
Check quantifiers, choice premises, edge cases, proof steps, and citation
scope yourself. When uncertain, consult authoritative sources and the library,
but treat logical validity as ground truth even if a source is mistaken.
Report uncertainty honestly; never claim a proof or source reading you did
not perform.

Choose one decision:

- `accept`: the current item is mathematically sound for its stated scope and
  the U-P concern is resolved. Explain the exact inference and supplier use.
- `repair`: a defect genuinely requires the smallest sound local edit, and
  the full corrected argument is secure. Record precise before/after,
  invalidated claim, affected use and minimality. Remove stale verification
  stamps, run focused precheck/rendercheck, and inspect the diff.
- `defer`: a significant defect or unresolved mathematical question remains.
  Give its exact witness or missing inference, supplier, source search, and
  proof strategy. Keep the item U-P and emit `owner_escalation` for substantial
  unmet prerequisites.

If the original claim changes under `## Statement`, `## Definition`,
`## Example`, `## Counterexample`, `## Statement refuted`, or an equivalent
kind-specific heading, immediately record an interface-change event and trace
all published direct and indirect dependency/reference consumers. Enumerate
every path, inspect exact uses, and record `accept`, `repair-needed`, or `defer`
for each consumer. A sound unchanged consumer forms an evidenced boundary,
but any independent direct reference to the changed source still requires
review. If a consumer's own claim changes, repeat the full downstream trace.
Do not label all indirect references defective merely because they are reached.

You own only your assigned item files and shard-specific receipts/events. For
another agent's item or an outside-shard published item, send a precise
cross-shard event to the root; do not edit it until the root assigns ownership.
You may create a needed definition or lemma only after the root reserves its
unique ID and page, and only with a complete valid proof and honest source
record. If integration cannot be completed, defer the consuming item.

Append one JSONL receipt per item, in exact assignment order, with `id`,
`decision`, `current_class`, `review_scope`, `evidence`, `sources_consulted`,
`files_changed`, `statement_change` (`none`, `actual`, `expected`),
`downstream_impact_file`, `unresolved`, and `checks`. Later amendments may
append a new decision for an already reviewed ID. Write `agent-NN-report.md`
when the shard finishes. Do not edit the canonical ledger, commit, run a build
or autopilot transition, or spawn further agents.
