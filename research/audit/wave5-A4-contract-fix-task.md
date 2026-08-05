# Wave 5, A4 — apply the two A3 decisions you were wrongly told not to apply

You are the `wave5-real-analysis` Audit-Beta. **My previous dispatch to you was
wrong** and your pushback was right: it scoped the three `citation-uses` errors as
contract bookkeeping and told you to edit only the contract JSON and to leave item
text alone. You correctly refused to invent `uses` entries, documented
`unused_reason`, and said the framing mis-described the problem. It did.

The correct scope is this: **A3 already adjudicated both of these and approved an
ITEM EDIT for each.** Neither is a new decision of yours to make, and neither is a
proposal to re-argue. Implement them exactly, in `items/`, and bring your contract
into line. Quoting `research/audit/wave5-A3.md`:

**1. `ex-nested-intervals-single-point` — ADD `L8` to step 2.2's tag.**

> Step 2.2 uses `[L4]` ("`0 < a < b` gives `0 < 1/b < 1/a`", strict) at
> `0 < n ≤ j+1`, nonstrict. The equality case is exactly what trichotomy
> licenses. The fact is genuinely used and merely untagged — and this
> simultaneously closes the batch's own N4 for this item. Beta's costed
> alternative (delete `[L8]`) would delete a fact the proof needs.

A3 recorded proposal 3 (delete `[L8]`) as **declined outright**. So: `L8` stays,
step 2.2's tag gains it, and the contract's two `L8` entries
(`def-complete-ordered-field`, `def-ordered-field`) get `uses: ["2.2"]`.

Before you write it, satisfy yourself that step 2.2 really does need the equality
case — if A3 is wrong about the mathematics, that is a finding and you must say so
rather than tag a fact the step does not use.

**2. `cex-nested-open-intervals-empty` — DELETE `[L5]`, renumber `L6`→`L5`.**

> No step uses it and none honestly could: the item is about *open* intervals.
> Its content lives in the first Remark, which already carries its own
> `[[thm-nested-interval-property]]` link, so nothing is lost. `[L5]` is not the
> last label, so leave no gap — `explicitTokens` matches `[FAL]\d+`
> positionally-blind, so a gap passes every tool, but a gap in a rendered Facts
> list is a reader-visible oddity for no gain.

Renumber in the fact list **and in steps 1.1 and 4.1**, per that decision. Then
drop the `L5` contract entry and renumber the old `L6` entry to `L5`, keeping its
`uses` intact. Check whether `thm-nested-interval-property` should leave `deps` —
if the Remark's `[[link]]` is now its only appearance, say what the citation rules
require rather than guessing.

## Scope

Write only: the two items above, `research/audit/wave5-real-analysis.proof-contracts.json`,
and your `research/audit/wave5-real-analysis.findings.md`. No other batch's files,
no other item, no provenance ledger.

Remove the `unused_reason` keys you added — they documented a state these edits
remove.

## Done means

`node tools/proof-contract.mjs research/audit/wave5-real-analysis.proof-contracts.json --strict`
reports **0 errors**, and `node tools/tsx-run.mjs tools/precheck.mts` is clean on
both edited items. Report both outputs verbatim. If either still fails, report the
exact failure rather than working around it — the orchestrator re-merges and
re-runs the whole A4 gate table afterwards, so a local workaround will surface
there anyway.
