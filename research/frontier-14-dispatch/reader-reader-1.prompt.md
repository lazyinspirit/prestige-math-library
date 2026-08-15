# frontier-14 — Step 6a independent reader

You did not author this content. Verify it.

## Hard rules

- **No permission prompts of ANY kind**, from you or any subagent, and no segment
  of an `&&` chain may raise one. If blocked, **record a blocker** — never a prompt.
- **Read-only on content.** You do not edit `items/*.md`, `library/**`,
  `research/plan-spec.json`, or any batch artifact. You write exactly one file:
  `research/frontier-14-reader-<i>.md`.
- Report a defect only when you can state it concretely: a false claim, an
  unlicensed inference, a missing hypothesis, or an inaccurate citation. **Open
  the cited dependency before alleging it is too weak.**

## What to verify, in priority order

1. **Every numbered proof step.** Does each follow from an explicit fact, an
   earlier step, a given hypothesis, or elementary algebra? A step that needs a
   fact not in its inputs is a defect even if the conclusion is true.
2. **Every `[F#]`/`[A#]`/`[L#]` citation against the cited item on disk.** Does
   the restatement preserve domain, hypotheses, quantifiers, direction and
   conclusion? An inflated restatement that licenses a step the real statement
   does not is the defect class this run has produced most.
3. **Title and Statement against the proof.** A title or Statement asserting more
   than the proof gives is **fatal** — the paired judges read Statements and
   cannot see a false title. This run has already produced four.
4. **Boundary cases**: empty objects, zero/one indices, degenerate parameters,
   endpoints, nonempty choices, and *both* directions of every iff.
5. **Provenance.** `provenance.statement` / `provenance.proof` on every
   mathematical-content item. An `ai-generated` Statement may never be
   load-bearing. If an AI-generated statement's truth is in doubt, search for a
   counterexample and say what you found.

## The 30-second rule

A logical gap a competent reader closes in **30 seconds is nonfatal**. Record it
as polish, never as a fatal defect. Fatal means a concrete false claim, an
unlicensed inference, a missing hypothesis, or an inaccurate citation.

## Report

`research/frontier-14-reader-<i>.md`. For each finding: item id, exact location,
what is wrong, why, and `fatal` / `nonfatal` / `polish`. State plainly if you
found nothing in a page — a clean read is a result. End with a per-page verdict
and the count of items you actually opened.

---

## frontier-14 additions — defects that shipped, and what is different

Read `research/frontier-14-PREVENTIONS.md` in full. Four items bear directly on
your work:

**The inflated `[F#]` restatement** was the largest confirmed-fatal class last
run — ten of twenty-five step-8 rows. Open the cited item and quote its clause
exactly, or give the smallest faithful shortening. No changed domain,
quantifier, hypothesis, direction or conclusion. A clause's opening words are
not a citation. `tools/citation-fidelity.mjs` now reports quotes that do not
appear in the item they cite, and fact lines that widen what they cite.

**Boundary rows are dispositions, not boilerplate.** 2,169 of 3,144 rows last
run were `not_applicable`, one rationale recurring 124 times with only the id
substituted — and two of those false rows each hid a confirmed-fatal defect
(a division by zero at `h = 0`, a counterexample at `n = 0`).
`tools/boundary-audit.mjs` clusters reused rationales and flags a row marked
`not_applicable` on an axis the item's own text exhibits. Write the disposition
you actually determined.

**A false title is invisible to the judges** — they read Statements. A title
asserting more than the proof gives is fatal, and it is caught only by a reader
who checks title and Statement against the proof as a distinct pass.

**Proof-step display orphaning.** A step ending in a standalone display followed
by a citation line gets scrambled by precheck's stratification; it caused a fatal
defect and then reproduced it in the repair. Keep the citation inside the step's
prose.

**Findings live in files, not messages.** Whatever you report, write it to your
named output file. Eleven findings were lost last run because fix briefs were
built from an agent's closing message instead of its report, and renumbering
made the losses look like completions. Never renumber a finding id.


---

# This dispatch

## Step 6a — independent read of batch 1

You did **not** author this batch and you must not have. Read it as an adversary
who wants to find a defect before the judges do.

Scope: every item on the pages in `research/frontier-14-batch-1.pages.json`.

### What is fatal

- a **title or Statement asserting more than the proof gives** — the judges read
  Statements and cannot see a false title, so this class reaches publication
  unless you catch it. Check title, Statement and proof against each other as a
  distinct pass.
- an inference the cited dependency does not license
- a missing hypothesis, or a choice whose scope is unstated
- an `[F#]`/`[L#]` restatement wider than the item it cites. Open the cited
  item on disk. Ten of twenty-five step-8 rows last run were this.
- an invalid witness or a false example

### What is not

A gap a competent reader closes in **30 seconds** is nonfatal. Record it or
polish it; never call it fatal. This covers gaps *between steps* — a defect in
the Statement itself is never 30-second.

### Output

`research/frontier-14-reader-1.md`, findings numbered `R1-1`, `R1-2`, …
**stably**. Per finding: the item id, the exact defect, the evidence, and your
severity. Numbering is permanent — a later pass refers to these ids.

Write findings to the file. A finding that exists only in your closing message
gets dropped.

**No permission prompts of any kind**, including inside an `&&` chain.
