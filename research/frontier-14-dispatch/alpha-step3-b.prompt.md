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

## Group Alpha **b** — batches 4, 5, 6

Three A/B pairs, one each in linear algebra, number theory and category theory.
Three distinct literatures; budget accordingly.

| batch | pair | Beta task file |
|---|---|---|
| 4 | `triangularisation-and-jordan-canonical-form` | `research/frontier-14-beta-4.task.md` |
| 5 | `quadratic-residues-and-the-legendre-symbol` | `research/frontier-14-beta-5.task.md` |
| 6 | `reflective-subcategories-and-the-adjoint-functor-theorems` | `research/frontier-14-beta-6.task.md` |

Write `research/frontier-14-alpha-b-step3-scaffold-review.md`.

### Three things specific to your batches

**1. Batch 4 must not ship existence without uniqueness.** LA-10
(`research/plan-algebra-track.md` from line ~1887) makes **uniqueness of the
Jordan form up to the order of the blocks** well-definedness obligation #21, and
it is a real theorem proved via the computable invariants — the ranks of powers
of $T-\lambda$ — not by asserting the blocks are determined. `frontier-13`
shipped a corollary with a false uniqueness clause that took two repair rounds,
so check this one specifically.

Also check the downstream contract. `modules-over-a-pid-and-canonical-forms`
(order 106, `research/plan-algebra-track-expansion.md` ~1310–1360) is designed to
carry a **mandatory agreement item** against this page's Jordan theorem, and it
records that the witness "two matrices with the same characteristic and minimal
polynomial are similar" lives on **this pair's B page** and will be restated
natively there because a B page is a leaf. Confirm that witness is scaffolded on
the B page — it is doing real work for a later page even though nothing will
ever cite it.

**2. Batch 5's two apparent drops are already checked — verify my check, do not
redo it blind.** The scaffold does not mint `thm-power-residue-criterion-modulo-
prime` or `cor-number-of-nth-roots-modulo-prime`, both of which NT-2 enumerates.
The Beta dispositioned both `already-published`, on the ground that
`thm-eulers-criterion-for-binomial-congruences` and
`cor-number-of-solutions-of-a-binomial-congruence` are **stronger** — they hold
for every modulus admitting a primitive root, with exponent
$\gcd(m,\varphi(n))$, rather than for primes only.

I verified both are published, in this page's declared closure, and do state the
stronger form. What I did **not** check is whether every place NT-2 uses the
prime-only version is correctly served by the general one, including hypotheses.
That is your check.

Separately, the Beta declined to cite `lem-integer-part` for the second
supplement because it is published but homed on
`library/real-analysis/limits-of-real-functions.md`, **outside** this page's
closure — I confirmed that, and it is the correct call. It proves the parity
directly from the division algorithm instead. Check that replacement argument is
actually complete, since it is now load-bearing for
`thm-second-supplement-to-quadratic-reciprocity`.

**3. Batch 6 carries the run's most delicate obligation.** MA-2
(`research/plan-category-theory-track.md` from line ~1164) says it outright:

> The page carries the block's most delicate proof obligation: the textbook
> initial-object lemma makes a class-indexed choice, and SE-D3 forbids it. §6
> records the repair and item 12 is where it lands.

Read §6 yourself before judging the scaffold. The three failure modes are:
scaffolding the textbook proof with the choice unremarked; quietly weakening the
theorem to dodge it; or asserting the repair closes when it does not. If the
Beta flagged that the repair does not close, that is a real finding and it is
far cheaper now than at step 8 — say so plainly rather than smoothing it over.

Also check smallness. MA-2 item 13 is explicit that wide pullbacks compute
intersections **for supplied set-indexed families**, and that SAFT keeps its
direct hypothesis for arbitrary collections rather than forming a proper-class
diagram. Local smallness, well-poweredness and the solution-set condition are
hypotheses, not background — confirm they are stated on every item that uses
them.

### Sizing

`reflective-subcategories-and-the-adjoint-functor-theorems` scaffolded 43 A
items against a design estimate of 40, and this subject expands under authoring.
It is under the 60 threshold now; say whether you expect authoring to push it
over, because a split proposed at step 3 costs a spec edit and one proposed at
step 5 costs the page.
