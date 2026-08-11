# frontier-11, batch 1 — step-3 fixes

You are **Beta-frontier-11-1**. Artifacts: `research/frontier-11-batch-1.*`.

## Verdicts

- `field-extensions-and-the-complex-numbers` (54) — **INSUFFICIENT**. Read
  `research/frontier-11-alpha-step3-scaffold-review.md` **§1** in full, including
  Alpha's rulings on D3 challenges 1 and 2 and its third finding.
- `conjugacy-and-simplicity-in-the-symmetric-groups` (64) — **SUFFICIENT**. Read
  §2 anyway; change nothing there unless §2 names something.

## Required

**T1, T2 — transcendental structure and uniqueness.** Alpha ruled that your
`out-of-scope` decline of the transcendental case stands **for the
field-of-fractions construction** and **falls for the mathematics**, which is
buildable without it. Add what §1 names.

**T3 — composite of subfields.** Your `deferred` to `splitting-fields` (order 56)
was checked against the receiving page. Apply §1's ruling.

**T4 — the stem-field isomorphism.** A finding Alpha raised that was not in D3 at
all; §1 gives the exact statement.

**Coverage retags.** Three rows change disposition as a consequence. Retag them
so `coverage.json` stays true of disk, and re-run `coverage-checklist.mjs`.

## Context you need

**D1 is not yours.** The four published ℂ items
(`def-complex-numbers-and-arithmetic`, `thm-complex-numbers-form-a-field`,
`def-complex-conjugate-real-imaginary-part-and-modulus`,
`lem-complex-conjugation-and-modulus-laws`) are being relocated from order 189 to
your page **by Alpha at step 4**, by owner decision, with their ids unchanged.
Keep them in your `pages.json` item list for order 54 exactly as you have them.
**Do not create, edit, or delete any file under `items/` or `library/`.**

Per Alpha §0: do **not** build a field-of-fractions construction. It belongs with
orders 46–50 and is out of scope for this run.
