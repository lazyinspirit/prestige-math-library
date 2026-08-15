## Batch 1 fix task — `symmetric-polynomials` (58) · `algebraic-extensions-degree-and-finite-fields` (96)

Alpha verdicts: order 58 **insufficient**; order 96 **sufficient** (one harvest
repair). No split on either page.

### F1.1 — two resultant declines rest on a false premise (must fix)

Your Sylvester-determinant decline **is structurally correct** and stands:
`determinants-of-matrices-over-a-commutative-ring` is order 82 and
`symmetric-polynomials` is order 58, so determinants genuinely are not available.
(The orchestrator's step-3 record wrongly asserted the opposite; that error was
Alpha-corrected and the record is fixed. You were right.)

**But two declines beside it are false.** Alpha opened Milne p. 58: he does not
define the resultant by a Sylvester matrix at all. The definition is

$$\operatorname{Res}(f,g)=a^m b^n\prod_{i,j}(\alpha_i-\beta_j)$$

and **Prop 4.35(a) and (c) are proved from that product form with no determinant
anywhere** — Milne calls (a) obvious. Declining them for a determinant reason is
declining them for a reason that does not apply in the monic case.

Restore the results that follow from the product definition. Alpha counts three
provable items lost this way, one of which the design paragraph you replaced had
explicitly listed. Re-read Milne p. 58 yourself, decide the exact set from the
product definition, and update those coverage rows from `deferred`/`out-of-scope`
to `included` naming the new item ids.

Under the 2026-08-11 rule, "a determinant is unavailable" licenses a decline only
where a determinant is actually needed.

### F1.2 — harvest repair on order 96

Alpha found one harvest repair needed on
`algebraic-extensions-degree-and-finite-fields`; the pair is otherwise
sufficient. Read `research/frontier-13-alpha-a-step3-scaffold-review.md` for the
exact row and apply it.

### Confirmed — leave alone

Your other four named declines (cardinal-valued infinite tower law, geometric
constructibility, cyclotomic regular polygons, algebraic closures) cross real
subject boundaries and stand. Your 95 disk-checked published quotations and fully
populated proof-contract citations (70 contracts, 0 empty, 212 citations) are the
standard the rest of the run is being held to — do not disturb them.
