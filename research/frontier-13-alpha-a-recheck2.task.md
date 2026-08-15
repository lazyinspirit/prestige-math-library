## Group A round 2 — batches 1, 2, 5

Round-1 verdicts: 96, 68, 106 `ready-for-splice`; **58 and 57.001 `not-ready`**.

### Batch 1 (order 58) — the two findings my first brief dropped

You found F1.2 and F1.3 and they never reached Beta 1, because I wrote its task
from your closing summary rather than your report and renumbered your ids. That is
my error, now corrected. Beta 1's second pass reports:

- Grinberg locator extended to §§7.1–7.2 through Thm 7.2.7, stopping before §7.3
- **all 11 missing §7.1 rows and all 9 §7.2 rows added — Grinberg rows 9 → 29**
- coverage 110 → 130; contracts unchanged at 73 / 0 empty / 218

I verified on disk that **Definition 7.2.4 → `included` → `def-monomial-symmetric-polynomials`**
and **Theorem 7.2.7 → `included` → `thm-monomial-symmetric-polynomials-form-a-basis`**.

**Your job:** the two items that carried `literature-derived` provenance from an
excluded range now have rows — confirm the rows are *faithful*, i.e. that 7.2.4 and
7.2.7(a) actually say what those items claim. Confirm the 11 §7.1 rows point at the
right existing items (Thm 7.1.6 → `prop-symmetric-polynomials-form-a-subring`, Def
7.1.9 → `def-elementary-symmetric-polynomials`). And confirm F1.1's three
resultant items still follow from Milne's **product** definition with no
determinant.

### Batch 2 (order 57.001)

Your round-1 note said F2.1 named **two** items and only one arrived, because my
task said "Add it". Identify the second by name from your own report and state
whether it is now present. If it is still missing, that is `not-ready` and I will
dispatch it.

### Batch 5 (order 106) — already `ready-for-splice`

One step-5 obligation you recorded: the strategy names the wrong identification —
the universal property yields a unique **ℤ-module** hom while the theorem concludes
a unique **group** hom, and the reason they coincide (additivity forces
ℤ-linearity) appears nowhere. Confirm it is still recorded for the author. No
re-verification needed otherwise.
