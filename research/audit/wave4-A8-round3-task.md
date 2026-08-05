# Wave 4, A8 round 3 — one rejection, on an item you already repaired

You closed rounds 1 and 2. The targeted rejudge you asked for has run: **12 calls,
11 `keep: true`**. Five items are stamped and committed. One came back rejected,
and it is yours to adjudicate.

## The rejection

`def-cofinality`, **`deepseek-v4-pro`**, current frozen context:

> Remark incorrectly states that cf(α)=α holds only at 0, 1, and all infinite
> cardinals. In fact, singular infinite cardinals do not satisfy cf(κ)=κ,
> contradicting the item's own definition of singular.

The text it names, in the first Remark of `items/def-cofinality.md`:

> …it holds only at $0$, at $1$, and at those ordinals that are already infinite
> cardinals.

`claude-sonnet-5` returned `keep: true` on the identical context.

## Why this one deserves more than the usual care

1. **It is the cross-family lane, and the same-family lane missed it.** Under the
   2026-08-05 lineup you, Audit-Beta and the certifiers are all Claude. DeepSeek
   is the only reader that is not. This is exactly the split the routing decision
   was made for, so do not discount it as the minority verdict — one lane
   disagreeing with the family is the signal that arrangement exists to produce.
2. **It alleges an internal contradiction, not a citation gap.** Two paragraphs
   below, the same Remark says a singular cardinal is "reachable from below by
   fewer than κ steps" and cites `thm-regularity-of-the-alephs` as exhibiting
   one. Read those two paragraphs against each other.
3. **`def-cofinality` is now twice-touched.** Round 1 recorded a
   `confirmed_fatal` (`deepseek-v4-pro`, `dependency_citation`) and you repaired
   it; this is a second rejection on different grounds. The twice-touched
   escalation is advisory, not blocking — but say in your report whether the item
   is converging or whether its Remarks need rewriting as a unit.

## What to do

Adjudicate from disk and record one exact-hash row in
`research/audit/wave4-judge-adjudications.jsonl` (`item_sha256` against the
pre-edit text). **A8 is fatal-only**: only `confirmed_fatal` licenses an edit.

A false mathematical claim in a Remark is load-bearing prose, not decoration — the
standing rule treats an unambiguous falsehood in a Definition, Statement, Fact,
citation, or equally load-bearing mathematical prose as repairable. If you confirm
it fatal, make the smallest correction that is true, leave the Statement and
`deps` alone unless they are themselves wrong, and dispatch a **certifier**
(`--role certifier`, read-only `claude-sonnet-5`) to read the result — you cannot
certify your own repair. Consider also dispatching a DeepSeek `--role
audit-refuter` on assembled context, since it is the lane that found this.

Do **not** write `verification.judge`; the orchestrator runs any rejudge and
`apply-judge-stamps`. Report the exact rejudge context if one is needed.

## While you are in this file

Your round-2 report flagged `thm-konig`'s Remark as probably false — "the only
ZFC constraint on $2^{\aleph_0}$ established here", when Cantor's theorem sits on
the same page — and you correctly did not repair it, because no adjudication
licensed the edit. Note whether the `def-cofinality` finding is the same defect
class: a Remark asserting a global claim that the page's own neighbouring items
falsify. If it is, say so plainly. That is a class no gate currently looks for,
and the owner needs to know whether it is one-off or systematic.

Append to `research/audit/wave4-A8-round2.md` under a new "Round 3" heading, or
write `research/audit/wave4-A8-round3.md`. Take a `touchlog` baseline before your
first edit.
