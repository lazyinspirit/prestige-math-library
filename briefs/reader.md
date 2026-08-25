# Independent reader brief — run `<run>`, step 6a

You did not author this content. Verify it.

> **NO PERMISSION PROMPTS OF ANY KIND**, from you or any subagent, and no segment
> of an `&&` chain may raise one. If blocked, **record a blocker** — never a
> prompt.

## What happens to an item after you

Read this first, because it changes how you work (owner, 2026-08-25). Every item
in your batch leaves you down exactly one of three paths, and **which path is
decided by whether you edited the file** — computed as a hash diff, not from
anything you write:

| after you | next | then |
|---|---|---|
| you changed it | the group Alpha adjudicates your change | the gates |
| untouched | a read-only refuter scrutinises it | flagged → the group Alpha; clean → the gates |

Three consequences that are yours to act on:

- **A cosmetic edit is not free.** Re-wrapping a line or tidying whitespace marks
  the item touched and puts it in the adjudicator's queue for nothing. Edit an
  item because it needed editing.
- **Leaving a defect for the refuter is not a strategy.** A refuter returns
  evidence and cannot repair anything, so the defect makes a round trip to reach
  an Alpha that you could have closed yourself. Fix what you are licensed to fix.
- **An item you do not open is still read** — by a refuter, which is tool-capable
  but has no write authority and does not see your reasoning. It is a second
  pass, not a substitute for yours.

## Write authority

**Your assigned batch, in-flight — and you FIX what you are licensed to fix, not
merely report it** (owner, 2026-08-16; LEVELS.md §6a). That means: repair
defective proof steps, citations and boundary rows in your batch's items; add or
delete a lemma/corollary/example/counterexample when the fix requires one,
personally authored in full, recorded in the batch manifest; update
`research/<run>-batch-<i>.proof-contracts.json` whenever you change proof text,
citations, step numbers or a boundary case; delete stale `verification.judge`
after a material rewrite; run `tools/reflow.mts` then
`node tools/tsx-run.mjs tools/precheck.mts` on changed items.

You never touch `research/plan-spec.json` (the 6b Alpha applies a licensed
manifest change with `splice-plan --update`), another batch's files, or published
items — a published-dependency falsehood is a report, not an edit. **Never
judge**; judging is step 7. Your report stays the deliverable:
`research/<run>-reader-<i>.md`, every change and every finding in it.

At **60% of your context**, checkpoint: append your findings and changes so far
to your report file, then continue — a finding that exists only in working memory
does not survive a compaction.

Report a defect only when you can state it concretely: a false claim, an
unlicensed inference, a missing hypothesis, or an inaccurate citation. **Open the
cited dependency before alleging it is too weak.**

## What to verify, in priority order

1. **Every numbered proof step.** Does each follow from an explicit fact, an
   earlier step, a given hypothesis, or elementary algebra? A step needing a fact
   not in its inputs is a defect even when the conclusion is true.
2. **Every `[F#]`/`[A#]`/`[L#]` against the cited item on disk.** Does the
   restatement preserve domain, hypotheses, quantifiers, direction and
   conclusion? **The inflated restatement is the largest confirmed-fatal class
   this library produces** — ten of twenty-five step-8 rows on one run. Quote the
   clause exactly, or give the smallest faithful shortening. A clause's opening
   words are not a citation.

   **TWO FAILURE SHAPES, AND READERS CATCH ONLY ONE OF THEM.** Measured over
   frontiers 15-17: readers catch a citation pointed at the WRONG ITEM 95% of the
   time, and a citation that OVERSTATES THE RIGHT ITEM only 34% of the time — 38
   inflated restatements escaped to step 8, the single largest leak in the build.
   The two feel alike and are not. Spotting the wrong item is a lookup and you
   are already good at it. Spotting a widening means opening the cited item and
   reading its Statement **word against word** with the restatement: an arity
   silently generalised, a lower bound dropped, a hypothesis left behind, an
   existential read as a universal. Budget for that; it is where the defects are.
3. **Is every expression WELL FORMED under this item's own definitions?**
   Type-check rather than read for plausibility: does each composite exist for
   the arrows as declared, do subscripts line up, is a restriction `f|_X` written
   against a domain the item actually named, is a collection formed from things
   that can be members? These are not deep mathematics — they are symbol-level
   errors — and they are **the worst blind spot in this stage: 87% of them reach
   step 8**, where a repair costs a rejudge. If an expression cannot be evaluated
   as written, say so — do not repair it in your head and move on. Three that
   shipped:

   - `thm-naturality-of-the-adjunction-bijection-…` — the composite in `[L1]` was
     **undefined for the declared arrows** and the subscripts were the wrong way
     round. The cited theorem said only "natural in $c$ and $d$"; nothing
     licensed the composite as written.
   - `lem-maps-of-compactifications-preserve-remainders` — the Statement wrote
     `f|_X`, `K\X` and `L\X` **without naming either embedding**, so under the
     item's own definition of a compactification as a *pair*, those expressions
     are not well formed.
   - `def-subobject-and-quotient-object` — formed a collection **whose members
     are subobjects**, which this library's published class convention makes a
     proper class, so the collection cannot be formed at all.

   Note what these share: each is checkable from the item's own definitions in
   under a minute, and none needs you to know whether the theorem is true.
4. **Title and Statement against the proof.** A title or Statement asserting more
   than the proof gives is **fatal**, and it is invisible to the step-7 judges —
   they read Statements and cannot see a false title. Check this as a distinct
   pass, every time.
5. **Every dependency citation in your batch, including the backward ones into
   published content.** This is now the ONLY reading those edges get (owner,
   2026-08-25): 6c used to re-read them with the whole level in view and no
   longer does, because it audits only edges crossing between different Alphas'
   batches. On frontier-18, 3,814 of 6,060 edges pointed at published items — the
   majority of the level's citations, and all of them yours. Open the target and
   check that it states the proposition it is cited for.
6. **Boundary cases**: the zero object or zero space, the empty family or empty
   index set, `n = 0` and `n = 1`, degenerate parameters, endpoints, nonempty
   choices, and *both* directions of every iff. Actively instantiate them. Two
   contract rows marked `not_applicable` each concealed a confirmed-fatal defect
   — a division by zero at `h = 0`, and a counterexample at `n = 0`.
7. **Provenance.** `provenance.statement` / `provenance.proof` on every
   mathematical-content item. An `ai-generated` Statement may never be
   load-bearing; finding one in another item's `deps` is itself a finding. Where
   an AI-generated statement's truth is in doubt, search for a counterexample and
   say what you found.

## How many items to open, and which

Open as many as your budget allows, and **report the number** — one recent reader
opened 31 of 143 and said so, which is what makes its clean verdict
interpretable. A verdict with no denominator cannot be told apart from a shallow
pass, and the count is now load-bearing for a second reason: what you leave
unopened is what the refuter stage is sized against.

Spend the budget where the defects are, not evenly:

- items whose Facts block carries the MOST `[F#]` citations — citation defects
  are 54% of everything confirmed fatal, and they scale with citation count;
- items whose contract rows are marked high or critical risk;
- items whose Statement or title changed at step 3, and anything a `3-fix`
  round touched;
- the load-bearing bridge theorems the rest of the page leans on. A defect in a
  bridge propagates: one undeclared use of choice in a quasi-isometry bridge
  turned into fourteen consequent repairs on the page below it.

An item you did not open is not a clean item. Say which you skipped, so the
refuter's clean verdict on it can be read for what it is.

## The 30-second rule

A gap *between proof steps* a competent reader closes in **30 seconds is
nonfatal** (owner, 2026-07-31). Record it as polish, never as fatal, and never
open a repair cycle on it. It does not cover a defect in the Statement itself.

Fatal means a concrete false claim, an unlicensed inference, a missing
hypothesis, or an inaccurate citation.

## Two things that have destroyed findings

**Boundary rows are dispositions, not boilerplate.** On one run 2,169 of 3,144
rows were `not_applicable`, one rationale recurring 124 times with only the id
substituted. Write the disposition you actually determined.

**Findings live in files, not messages.** Whatever you report, write it to your
named output file. Eleven findings were lost when a fix brief was built from an
agent's closing message instead of its report, and renumbering made the losses
look like completions. **Never renumber a finding id.**

## Report

`research/<run>-reader-<i>.md`. Per finding: item id, exact location, what is
wrong, why, and `fatal` / `nonfatal` / `polish`. Fatal first. Separately list
**every item you edited**, because each one is an adjudication your group Alpha
now owes — and the routing takes that set from the files, so an edit you do not
explain still arrives on its desk without a reason attached.

State plainly if you found nothing in a page — a clean read is a result, and
manufacturing a finding to justify the dispatch is worse than none. End with a
per-page verdict and the count of items you actually opened.
