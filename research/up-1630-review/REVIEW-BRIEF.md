# U-P decision brief

Read `CLAUDE.md` and `README.md` fully before acting. Then read
`research/up-1630-review-plan.md`, this brief and your `agent-NN.jsonl` in
order. Do not skip ahead: finish the current item's reading, decision, local
check and receipt before beginning the next assigned item.

For each item, read its complete current Statement/Definition and proof or
recorded claim, its original U-P reason, the exact cited/dependent published
contracts and any relevant Phase-2 supplier. Independently check logical
validity, including quantifiers, choice assumptions, edge cases, proof steps
and citation scope. Consult authoritative external sources when uncertainty
remains; report exactly what was opened and read. Do not infer correctness from
a prior stamp, an external theorem title or a search hit.

Decide `accept`, `repair`, or `defer`:

- `accept`: the item and the prior U-P concern are resolved by exact evidence;
  no content edit is required. State the mathematical reason and the relevant
  supplier contract. Do not label a mere impact reference defective.
- `repair`: the full corrected argument is secure, and the smallest necessary
  local edit closes the concern. Record before/after snippets, affected use,
  invalidated claim and why the edit is minimal. Run focused precheck and
  rendercheck, inspect the diff, and remove stale old audit/judge/source-check
  stamps. Keep the item published only under the existing repo authorization;
  do not add new certification claims.
- `defer`: any substantial defect or unresolved mathematical/source question
  remains. State an exact witness or missing inference, the needed supplier or
  proof strategy, and why a secure local repair is not yet available. Keep U-P.

If you change an item's original claim under `## Statement`, `## Definition`,
`## Example`, `## Counterexample`, `## Statement refuted`, or an equivalent
kind-specific claim heading, notify the
root immediately and trace **all published direct and indirect consumers**
using exact dependency/reference edges. Read each direct use and every use
reached through a changed consumer Statement/Definition. If a direct consumer's
exact use is unaffected and its Statement/Definition stays unchanged, its
descendants may be accepted through that documented boundary after complete
path enumeration; a direct body reference to the changed source is a separate
direct use and must be read. Record `accept` for a
mathematically unaffected use, `repair-needed` only where the changed contract
requires an edit, and `defer` for uncertain uses. Send the root the complete
impact file, including exact affected use, original/current source hashes,
path, depth and any consumer Statement/Definition change. Do not blanket-mark
the closure U-P. Do not edit another agent's assigned item or the canonical
ledger/page without root coordination. If a consumer's interface changes,
repeat the same full downstream trace from that consumer.

You may author a new lemma only for a genuine missing prerequisite of your
assigned repair. First notify the root with its proposed unique ID, consuming
step and page placement to avoid collisions. Then write a complete proof and
source record, update required registry/page metadata with root coordination,
and run focused checks. If the lemma is uncertain or cannot be made available
under the repo's publication rules, defer the original item. Never invent a
published supplier, source reading or judge verdict.

Append one JSONL receipt to `agent-NN-receipts.jsonl` for each completed item,
in exact assignment order. Fields: `id`, `decision`, `current_class`,
`review_scope`, `evidence`, `sources_consulted`, `files_changed`,
`statement_change` (`none`, `actual`, `expected`), `downstream_impact_file`,
`unresolved`, `checks`. Keep evidence specific enough for independent review.
Write `agent-NN-report.md` at shard completion with repair and deferral details,
impact events, consulted primary sources and check results. The root owns the
canonical ledger and overall validation.
