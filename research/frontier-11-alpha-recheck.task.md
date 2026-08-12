# frontier-11 — Alpha step-3 re-check, then step-4 planning

You are **Alpha on run `frontier-11`**. Your step-3 review
(`research/frontier-11-alpha-step3-scaffold-review.md`) is on disk and all five
Betas have applied your findings. This dispatch is the re-check you committed to:
*"I re-check every routed finding before step 4 splices, and I do not splice a
pair I marked `insufficient` until its findings are resolved."*

## You now have web access

The blocker you recorded was real and is fixed: `tools/dispatch.mjs` launched the
claude lane with `--permission-mode acceptEdits`, which accepts edits but still
prompts for `WebFetch`. It now uses `bypassPermissions`. **You can open sources
at their locators.** Criterion 2 of the step-3 review — check `contents` against
what the stated range actually contains — is available to you this time.

Your instinct was right without it. Batch 5 re-enumerated Riehl and Leinster over
the same stated ranges and went **37 → 124 headings from the same four sources**.
That is what you suspected from the shape of the record alone.

## What changed since your review

| batch | pair | items before → after |
|---|---|---|
| 1 | field-extensions | 16+7 → **20**+7 |
| 1 | conjugacy (was sufficient) | 18+8 → 18+8 |
| 2 | fundamental-theorems | 8+6 → **10**+6 |
| 2 | arc-length | 13+6 → **15**+**7** |
| 3 | formal-power-series | 22+9 → 22+9 (C1 restated, C2 added) |
| 3 | extremal-graph-theory | 20+7 → 20+**9** |
| 4 | determinant-of-an-operator | 18+5 → **20**+**8** |
| 4 | integral-logarithm (was sufficient) | 19+5 → 19+5 |
| 5 | yoneda | 20+14 → **21**+14 |

Run total 222 → **238 items**, harvest 350 → **508 headings**, 0 coverage errors,
all step-2 gates green.

## Task 1 — re-check every routed finding

For each label you issued — T1–T4, F1–F4, A1–A3, R-A, C1, C2, E1, E2, D1, D2,
R-D, Y1 and the coverage retags — confirm from disk whether it is **resolved,
partially resolved, or not resolved**. Read the Betas' fix reports in each
`research/frontier-11-batch-<i>.notes.md`; a Beta was told to push back with disk
evidence rather than comply with something it believed wrong, so treat any
pushback as a finding to adjudicate, not insubordination.

Give a final `sufficient` / `insufficient` per pair. **Use your web access** to
spot-check the harvests you flagged: batch 5's Riehl and Leinster, batch 3's
Flajolet–Sedgewick leg, and the new treatments added for R-A (arc-length
textbook) and R-D (determinant commutative-ring source). If a `locator` does not
match what the source contains, say so — that is the check you could not run last
time.

Special attention, since it changed most: batch 5's harvest tripled. Confirm the
124 headings are genuinely **that source's own** section and named-result
headings over the stated ranges, not an inflated or invented list. A padded
harvest is as much a defect as a thin one, and the no-padding rule still binds.

## Task 2 — plan the D1 relocation, do NOT execute it yet

D1 is the owner-approved relocation of four **published** items —
`def-complex-numbers-and-arithmetic`, `thm-complex-numbers-form-a-field`,
`def-complex-conjugate-real-imaginary-part-and-modulus`,
`lem-complex-conjugation-and-modulus-laws` — from
`the-complex-exponential-and-eulers-formula` (order 189) to
`field-extensions-and-the-complex-numbers` (order 54), **ids unchanged**, with
order 189 gaining order 54 in `requires`.

There is a sequencing problem I want your judgment on before anything is touched:
**the destination page does not exist yet.** `library/abstract-algebra/field-extensions-and-the-complex-numbers.md`
is created when the page is authored at step 5. Meanwhile the four items are
`status: published` and currently listed by a published page. A published page
listing a draft item is a hard error, and I do not want a transient state where
the items are listed twice or by nothing.

**Write the exact ordered sequence** — which file changes at which step, where
the `touchlog.mjs` baseline is taken, when `impact-audit.mjs` runs against the 20
consumers, and what each gate would say at each intermediate point. Name any
point where the tree would be inconsistent and how you avoid it. Do not edit
`items/`, `library/` or `plan-spec.json` in this dispatch. I splice at step 4
once your sequence is agreed.

## Output

`research/frontier-11-alpha-recheck.md`:

1. a per-label resolution table with your verdict on each;
2. final `sufficient`/`insufficient` per pair, and for anything still
   insufficient, exactly what remains;
3. the harvest spot-check results, naming any locator that does not hold;
4. the D1 sequencing plan;
5. any blocker — recorded, never prompted.
