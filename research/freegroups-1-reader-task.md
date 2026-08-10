# This dispatch — independent Step-6 reader, run `freegroups-1`

You are an **independent reader** for run `freegroups-1`. You did **not** author
any of this content, so every item below is foreign to you. Repo:
`/root/Projects/prestige-math-library`.

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30).** Pass
> `dangerouslyDisableSandbox: true` on every Bash call and never ask the owner to
> approve a shell command. Report a blocker instead of prompting.

## What you are auditing

The **37 new `status: draft` items** listed in
`research/freegroups-1-batch-1.pages.json`. They enrich the already-published
pair `free-groups-and-presentations` (order 60) and its `-examples` companion
(61). The 7 items already on those pages are **published** and are NOT your
scope except as cited dependencies.

Read, in this order: `CLAUDE.md`, `SCHEMA.md`,
`research/freegroups-1-RESUME.md` (decisions **D1–D7**),
`research/freegroups-1-step3-decisions.md` (**my adjudication and its binding
conditions**), then the items.

## Verify every proof step and every in-batch dependency citation

For each item: every numbered step must follow from an explicit Fact, an earlier
step, a stated hypothesis, or elementary algebra. Every `[F#]`/`[A#]`/`[L#]`
fact must reproduce the cited Definition or Statement, or be its smallest
faithful shortening — **open the cited item on disk and check it**, never trust
the restatement. A changed domain, quantifier, hypothesis, direction or
conclusion, or an invented converse, is a defect.

## Where this pair specifically goes wrong — check these hardest

1. **The van der Waerden argument**
   (`lem-formal-letters-act-by-permutations-on-reduced-words` →
   `thm-normal-form-for-the-word-quotient-model`). Is the permutation of reduced
   words genuinely well defined? Is `σ_{a^{-1}} ∘ σ_a = id` actually *verified*
   rather than asserted? Is the conclusion drawn by evaluating at the empty word,
   or does it circularly assume the normal form it is proving?

2. **`def-tietze-transformations`** must *prove or exactly cite* its equivalence
   to the classical four moves — a bare assertion is a **fatal** defect, because
   Tietze completeness is only as true as the move set is rich. Check the
   legality conditions on each inverse move, and check that the renaming
   simulation actually respects them.
   `thm-tietze-transformations-connect-finite-presentations` is **high-risk**;
   its reverse direction is the most proof-sensitive result in the run.

3. **`def-rank-of-a-finite-rank-free-group`** must state its own finite-rank
   restriction and must not hint that the general case follows. Infinite rank is
   unreachable here: `cardinal-arithmetic-and-cofinality` is at order 247 against
   this page's 60.

4. **`thm-normal-form-for-the-word-quotient-model`** must not imply it is new.
   Published `thm-reduced-words-form-the-free-group` already reaches the same
   fact by a different route (its step 2.1, invariance of `red`). It is minted
   only because no citable Statement exists.

5. **No item may rest on computability** (D2). Any reliance on decidability,
   Novikov–Boone, Dehn's decision problems as decision problems, "solvable word
   problem" as a predicate, Knuth–Bendix or Todd–Coxeter is **fatal** — this
   library has built none of it. The three `cex-delete-only-relator-rewriting-*`
   items are claims about a *specific syntactic procedure* and are legitimate;
   verify each witness by direct computation.

6. **Overstated titles and Statements are fatal.** The judges read Statements and
   cannot see a false title. Watch for "the" free group vs "a" free group, rank
   claims true only in finite rank, and presentations asserted as isomorphisms
   where only a surjection was proved.

7. **The published `def-free-group` must not be silently reconvention'd.** It
   characterises a free group abstractly by the universal property. The new
   `W(X)/~` items construct a model and *prove* it satisfies that
   characterisation. A new item redefining "free group" is fatal.

## The 30-second threshold

A logical gap a competent reader closes in 30 seconds is **nonfatal**. You may
polish it — step 6 is where polish is still allowed — but do not raise it as a
fatal defect or start a repair cycle on it.

## Your writes

You may repair in-batch proof-step and citation defects in the draft items you
audit. You must **not**: touch a published item, edit either page file, add any
id to a page's `items:`/`examples:` list, change an id, change reading order,
flip `status`, or write `verification.audited`. Alpha audits your fixes from
disk and is the sole adjudicator.

Run `node tools/tsx-run.mjs tools/precheck.mts items/<file>` on anything you
edit and leave it clean.

## Report

Your final message is the return value. Make it self-contained: every defect
found with item id and step number, its severity, what you repaired, what you
left for Alpha, and anything you could not verify.
