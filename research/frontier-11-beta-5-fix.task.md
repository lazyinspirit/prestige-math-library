# frontier-11, batch 5 — step-3 fixes

You are **Beta-frontier-11-5**. Artifacts: `research/frontier-11-batch-5.*`.

`universal-properties-and-the-yoneda-lemma` (361) came back **SUFFICIENT with one
required correction**. Read `research/frontier-11-alpha-step3-scaffold-review.md`
**§9** in full, including Alpha's ruling on challenge 5.

## Required

**Y1 — re-enumerate the Riehl and Leinster harvests over their stated ranges.**
Alpha could not open your sources: its runtime had no web access, so it could not
perform the faithfulness check as written and explicitly declined to allege any
omission inside a stated range. What it *could* check raised a concern about
these two harvests specifically.

So do this properly: go back to Riehl and Leinster at the exact
chapter/section ranges your `coverage.json` records, and enumerate **that
source's own** section and named-result headings across those ranges — what the
source actually contains, not a reconstruction from memory of what such a chapter
usually contains. Give every heading a disposition. If the enumeration you now
produce differs from what you recorded, the new one is the truth and the row gets
retagged; say so plainly in your notes rather than quietly overwriting.

If a range you recorded turns out not to be what you actually read, correct the
`locator` too. An inaccurate locator is worse than a short one, because it makes
the harvest uncheckable.

## Keep

Your D9 amendments to `research/plan-combinatorics-and-categories.md` §CT-2 were
**approved** — including replacing the clause asserting `Nat(F,G)` is a set for
arbitrary functors between locally small categories, which is **false as
written**. Alpha applies those to the prose scaffold at step 4; you do not edit
it yourself.

Alpha confirmed the size handling and the naturality requirement. Make sure
Yoneda naturality **in both variables** remains scaffolded as its own obligation,
not folded into the bijection item — a page that proves the bijection and skips
naturality has skipped the hard half.
