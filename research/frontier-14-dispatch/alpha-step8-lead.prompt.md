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

## Step 8 — fatal-only adjudication of the paired-judge verdicts

You are the **lead Alpha**. You are the sole adjudicator of a judge rejection.

### The rule that governs this stage

**Only a `confirmed_fatal` adjudication licenses an edit.** A
`confirmed_nonfatal` or `false_positive` closes the rejection on its ledger row
with **no content, page, frontmatter, contract, impact, or judge mutation**.

The reason is mechanical, not stylistic: any edit is a material rewrite, so a
step-8 polish voids `verification.judge`, forces a rejudge, and resamples a
refuter — an unbounded loop converging on nothing. Cosmetic polish belonged at
step 6, where no verdict existed to void.

**Fatal repairs are deliberately uncapped.** A proof that keeps yielding real
fatal defects is either converging toward correctness or is false, and both must
run to conclusion.

### Before you adjudicate

```
node tools/touchlog.mjs snap research/frontier-14-touches.json pre-step8
```

Every adjudication row records `item_sha256` — the sha256 of the normalized item
text with the verification block excluded, **at adjudication time**. Without it
the guard cannot tell a licensed edit from an unlicensed one.

### What to do

For every rejection in `research/frontier-14-judge.jsonl`:

1. Read the frozen verdict and the current text on disk.
2. Record in `research/frontier-14-judge-adjudications.jsonl`:
   `{id, model, context_sha256, item_sha256, outcome, defect_type?}`
   — `outcome` is `confirmed_fatal` | `confirmed_nonfatal` | `false_positive`;
   fatal types are `logic`, `dependency_citation`, `other`.
3. Apply repairs for `confirmed_fatal` only.
4. Name the exact changed items for rejudge. **Only touched items rejudge** —
   an unedited page-mate is spared even though the pair's context hash moved.

### The gate

```
node tools/step8-guard.mjs --touches research/frontier-14-touches.json \
  --baseline pre-step8 --adjudications research/frontier-14-judge-adjudications.jsonl
```

Every item changed since the baseline must be licensed by a `confirmed_fatal`
row against the pre-edit state.

### Output

`research/frontier-14-alpha-step8.md`: every rejection, its adjudication, the
evidence, and for each repair what changed and why it was fatal.

**No permission prompts of any kind**, including inside an `&&` chain.
