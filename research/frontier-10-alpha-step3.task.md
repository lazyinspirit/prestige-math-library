# This dispatch — Stage 0, step 3: scaffold breadth and depth review

Review **batches 1 through 8** (12 A/B pairs). Batch 9 was spliced in at step 3
and is still scaffolding; it gets its own review when it lands, so ignore it.

`briefs/alpha.md` §"Stage 0" is your instruction set in full. Output
`research/frontier-10-alpha-step3-scaffold-review.md`.

## Read first

- `research/frontier-10-RESUME.md` — the run record
- `research/frontier-10-step3-decisions.md` — my adjudications, below
- per batch: `research/frontier-10-batch-<i>.{pages.json,notes.md,coverage.json}`

## What step 1–2 produced

12 A pages, **508 items to author**, 39 sources, 720 harvested headings all
disposed: 508 `included`, 115 `inline`, 26 `already-published`, 40 `deferred`,
31 `out-of-scope`. Step 2 gates clean.

For calibration: the previous run shipped 83 items across 20 pages and produced
the two thin pairs that caused this stage to exist. This one is far denser. Your
job is not to celebrate that — it is to find what is *still* missing.

## Things I am routing to you specifically

1. **`categories-functors-and-natural-transformations` sits at exactly 60
   items** — the ceiling, to the item. Beta-7 states unprompted that "no
   harvested result was removed merely to hit that number" and pre-specifies a
   contingency split after `prop-fully-faithful-functors-reflect-isomorphisms`
   into `categories-morphisms-and-functors` + `natural-transformations-
   equivalences-and-two-categories`. **Verify the claim, do not accept it.** If
   your review adds even one A item to that pair, the split fires — say so
   explicitly, with the cut.
2. **The 71 declines** (40 `deferred` + 31 `out-of-scope`) are where the old
   failure would hide. Since 2026-08-11 a missing prerequisite must be *built*,
   not declined, so a decline is only valid for another page's topic or a whole
   subject area the library lacks. Batch 3 flags its own most-challengeable
   declines; check those first, then the rest.
3. **Batch 8 is the enrichment** of the published `group-actions-and-cayleys-theorem`
   pair, the page the owner flagged. It adds 27 A + 12 B items to a pair that had
   6 + 0, including `thm-orbit-stabilizer`, `thm-class-equation`,
   `thm-cauchys-theorem-for-finite-groups` and `thm-cauchy-frobenius-orbit-counting`.
   The owner asked for "the orbit stabilizer theorem and its important
   consequences and examples" — judge whether the consequences are actually
   complete, and whether the 12 B items really mark the theorems' boundaries.
4. **Batch 1's `symmetric-groups-and-the-sign-homomorphism` has only 13 A
   items**, the smallest A page in the run, and batch 9 now depends on it for the
   Leibniz determinant. Check it carries enough: parity well-definedness, sign as
   a homomorphism, transpositions generating, cycle structure, conjugacy by cycle
   type.
5. **Batch 5 authored no scaffold for its change-of-variables material** pending
   batch 9's determinant interfaces. Review what it *did* scaffold; treat the
   determinant-dependent items as deferred-to-batch-9, not as missing.

## Boundaries

Author nothing. Edit no batch file, no item, no page, no `plan-spec.json`. You
return findings; the orchestrator routes them to the owning Beta and you
re-check before step 4 splices. A `sufficient` verdict on a pair is a statement
that you would be content to see it published.
