# Step 10 — Sigma finding S-002 and one contract desync, run `frontier-17`

You are the lead Alpha. Two narrow repairs that Tau correctly refused because
both need a role that owns `research/*.proof-contracts.json`. This is not a new
audit and nothing outside these two items is in scope.

**Why this is a hand-started dispatch.** `10-tau-guard-v2` has no
`onGateFailure` route, so the engine cannot dispatch an adjudicator for a
Sigma finding that lands outside Tau's file boundary. The owner authorised
autonomous closure of this run; the standing rules are unchanged, in
particular: **no content may be deleted, narrowed or weakened to obtain a
visual pass**, and if a repair cannot be made honestly, record a blocker
instead.

Read `research/frontier-17-tau.json` and
`research/frontier-17-sigma-initial.json` first. Tau's analysis of both items
is careful and measured; treat it as evidence, verify it from disk, and do not
redo the two repairs it already landed (S-001, S-003).

## Repair 1 — Sigma S-002, `items/thm-the-contravariant-power-set-functor-is-monadic.md`

Proof step 1.4 is written as three Markdown blocks. The reader sees the step
number and its tag chips on the first row only; the display and the continuing
prose become unnumbered rows, while later steps still cite "step 1.4" by
number. Sigma verified this at 2x; Tau verified the one-line join through the
app's own remark-gfm/remark-math/rehype-katex pipeline — identical math nodes
(9 inlineMath, brackets intact), no `katex-error`, identical rendered text,
3 paragraphs to 1, number and chips parsing.

The reason Tau stopped: the fragmentation was also hiding step 1.4's citation
of step 1.3 from `tools/precheck.mts`. The split form passes precheck; the
joined form fails it, because a step citing a phase-1 step belongs in phase 2.
Precheck prints the canonical stratification `1.4 -> 2.1, 2.1 -> 3.1,
3.1 -> 4.1`. Adopting it desynchronises the item's step-keyed proof contract —
Tau measured 10 further `proof-contract --strict` errors, repairable only in
`research/frontier-17-batch-9.proof-contracts.json` and the merged contract.

So join, renumber and contract update must land in one act:

1. Join the three blocks of step 1.4 into one numbered step. Replace the blank
   lines with spaces and change nothing else — no wording, no math, no
   citation tag.
2. Adopt the canonical stratification precheck prints. Re-run
   `node tools/tsx-run.mjs tools/precheck.mts items/thm-the-contravariant-power-set-functor-is-monadic.md`
   and iterate until clean; the repo stores the strictly stratified form.
3. Update every step-keyed row in
   `research/frontier-17-batch-9.proof-contracts.json` to the new numbering —
   the citation rows, the input map (every numbered step covered exactly once)
   and the boundary rows. Then re-merge with
   `node tools/merge-proof-contracts.mjs --run frontier-17`.
4. Renumbering changes the item text, so its `item_sha256` moves and its judge
   verdicts go stale. Do not stamp anything; the session will run the rejudge.

If the renumbering cannot be made honest — if it would misstate which step
depends on which — stop and record a blocker rather than forcing it.

## Repair 2 — contract desync on `thm-galois-group-of-an-irreducible-quartic-by-its-resolvent`

`proof-contract --strict` reports, and it is confirmed on disk:

```
ERROR citation-quote-mismatch [thm-galois-group-of-an-irreducible-quartic-by-its-resolvent]:
  L1 quote does not occur in lem-transitive-subgroups-of-s-four-and-the-resolvent-action's Statement
```

The previous Tau run repaired that lemma's Statement for Sigma S-001, changing
`$|H\cap V_4|$` to `$\lvert H\cap V_4\rvert$` so its GFM table would parse. The
consuming contract's recorded L1 quote still carries the old spelling, so the
quote no longer occurs in its source.

The mathematics is unchanged — `\lvert…\rvert` and `|…|` render identically and
mean the same thing. Update the recorded quote in
`research/frontier-17-batch-3.proof-contracts.json` to the lemma's current
Statement text, re-merge, and confirm `proof-contract --strict` is clean.
**Check first** whether the consuming item's own `[L1]` fact line carries the
stale spelling too; if it does, that is a citation-fidelity repair on the item
and is yours to make. Do not change the lemma back.

## On exit

Run and report, from the repo root:
`precheck` on both changed items, `proof-contract --strict`, `depcheck`,
`rendercheck`, `citation-fidelity`, and
`node tools/visual-repair.mjs check --run frontier-17`.

Write `research/frontier-17-alpha-step10-contract-repair.md`: each repair, the
evidence, the exact files changed, the gate results, and any id whose text
changed and therefore needs a rejudge. Reconcile S-002 in
`research/frontier-17-tau.json` only if you have genuinely closed it.

No permission prompts of any kind.
