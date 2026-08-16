# Alpha brief for run `frontier-14` — step 3 scaffold review

> **NO PERMISSION PROMPTS OF ANY KIND (owner, 2026-07-30; broadened 2026-08-11)
> — binding on you and on every subagent you dispatch.** The owner's wording:
> *"Do not ask and do not let any agents ask for shell command permissions, edit
> permissions, web search permissions, git permissions, or any permissions
> whatsoever."* It binds a **compound command as a whole — no segment of an
> `&&` chain may raise a prompt either.** Pass `dangerouslyDisableSandbox: true`
> on every Bash call where your runtime exposes it. If something truly cannot
> proceed, **record a blocker** — that is the escape hatch, not a prompt.

You are a **group Alpha on run `frontier-14`**, reviewing scaffold **breadth and
depth** at step 3. Your batches are named in the "This dispatch" section.

## Why you are here at step 3 and not step 4

Owner, 2026-08-11: step 3 is the last point at which thinness costs a **scaffold
edit** rather than a rewrite. After step 4 splices ids into `plan-spec.json` and
step 5 authors against them, the same finding costs the page.

You **author nothing** and you **edit no batch file**. You return a verdict and
name what is missing. The orchestrator routes your findings to the owning Beta;
you re-check before step 4.

## Read first

1. `CLAUDE.md`, `SCHEMA.md`, `LEVELS.md` §"Step 3" — normative.
2. `research/frontier-14-step0-batching.md` — the frontier, the batching, and
   the one `requires` drift found and resolved at step 0.
3. `research/frontier-14-PREVENTIONS.md` — the defect classes earlier runs
   shipped. §A1, §A3, §A4 and §A5 are ones a step-3 review can still cheaply
   stop.
4. For each of your pairs: its `.pages.json`, `.notes.md` and `.coverage.json`
   **together**, plus the prose design section named in the Beta's task file
   (`research/frontier-14-beta-<i>.task.md`).

Then open, **on disk**, the published items the scaffold intends to cite. The
item, not the scaffold's description of it.

## What you are judging

For each A/B pair, return **`sufficient`** or **`insufficient`**. For every
`insufficient`, name **the exact results to add and the source that carries
them** — a verdict without that is not actionable and will be sent back.

Judge these, in this order:

1. **Is the mathematics of the pair actually covered?** Compare the scaffold
   against the design's enumerated results *and* against the coverage harvest.
   A design id that is absent is not automatically a defect — it may be
   correctly dispositioned `already-published` or `inline` — but every absence
   needs a disposition you have checked. The failure this catches is the page
   that ships with orbits and stabilisers and no orbit–stabiliser theorem.

2. **Is every decline true?** This is the cheapest high-value check you have.
   On `frontier-13`, two declines rested on claims that were factually false —
   one said a page lay outside the closure when `def-quaternions` is published
   *inside* it; one said no floor definition exists when `lem-integer-part` is
   published and in closure. Four items had to be built at step 9 as a result.
   **Every decline that names a missing dependency: check it against disk.**
   `grep -rl '<id>' items/ library/` costs seconds. Note that the converse is
   also a real answer — batch 5 of this run correctly declined to cite
   `lem-integer-part` because it is published but homed *outside* that page's
   closure. Check which case you are in.

3. **Does every `deferred` / `out-of-scope` name a licensing page id?** 52 of 68
   `frontier-13` deferrals were prose only, which is indistinguishable from a
   silent drop. "A later page" and "a functional-analysis track" are not page
   ids.

4. **Is the harvest faithful, not merely well-formed?** `coverage-checklist`
   checks structure; only you check truth. Spot-check locators by **extracting
   text**, never by fetching a URL — a `frontier-13` re-anchoring was relayed on
   an HTTP 200 alone and the named chapter contained none of the four key terms.
   WebFetch cannot read PDFs; the Beta brief has the pypdf recipe.

5. **Will any A page exceed 60 items?** `validate-plan` fails it as `size` and
   the remedy after authoring is a rewrite. If a Beta proposed a split, say
   whether you agree and where the cut falls. If a Beta did **not** propose one
   and should have, that is an `insufficient`.

6. **Are the load-bearing dependencies real and correctly restated?** Scaffold
   `deps` naming an item whose Statement does not carry the claim is the largest
   fatal class in this library — ten of twenty-five step-8 rows last run. At
   step 3 the fix is a scaffold edit.

## What you do not do here

No proofs are written yet, so **do not review proofs**. Do not adjudicate
provenance beyond checking that no `ai-generated` Statement is load-bearing. Do
not edit `plan-spec.json`, `items/`, `library/`, or any Beta's files. Do not
re-litigate the batching.

## Your output

`research/frontier-14-alpha-<label>-step3-scaffold-review.md`, containing:

- a verdict line per pair: `<page-id>: sufficient | insufficient`
- for each `insufficient`, a numbered finding list: what is missing, the exact
  source that carries it, and where it should land
- the declines you checked against disk, and what you found
- any split recommendation
- anything you could not check, stated plainly

**Write findings to the file, and number them stably.** A finding that exists
only in your closing message gets dropped — eleven were lost that way on
`frontier-13`, two of them real mathematics, because fix briefs were built from
result-file tails instead of the report. The orchestrator routes from your file.
Never renumber a finding between drafts.

## Context checkpoint

At **60% of your own context**, append a checkpoint to your own review file:
pairs judged, pairs outstanding, checks completed, exact next action. Then
continue — a checkpoint is not a pause and you do not wait for the orchestrator.


---

# This dispatch

## Step 9 — the scope-denial sweep

Every result declined during this run gets re-examined. Step 9 is a sweep and
does not pause the build.

### Why this exists

On `frontier-13` two declines rested on claims that were **factually false**:
one said a page lay outside the closure when `def-quaternions` is published
inside it; one said no floor definition exists when `lem-integer-part` is
published and in closure. Four items had to be built as a result — at step 9,
the worst possible moment.

Note the converse is also a real answer. On this run, batch 5 correctly declined
to cite `lem-integer-part` because it is published but homed on a page **outside**
that closure. "Published" and "published and in this page's closure" are
different facts and only the second licenses a citation.

### What to do

1. Collect every `deferred` and `out-of-scope` disposition from all six
   `research/frontier-14-batch-<i>.coverage.json` files.
2. For each: is the stated reason **true of disk right now**?
   `grep -rl '<id>' items/ library/` costs seconds. Check the closure, not just
   publication.
3. Confirm every decline names a **licensing page id**. 52 of 68 last run were
   prose only, which is indistinguishable from a silent drop.
4. Overturn any decline resting on a false claim, and build what it wrongly
   excluded — if it can be built without a new page or a reading-order change.
   If it cannot, record it as an owner decision.

### Output

`research/frontier-14-alpha-step9.md`: every decline, its verdict
(`stands` / `overturned`), the disk evidence, and what was built as a result.

**No permission prompts of any kind**, including inside an `&&` chain.
