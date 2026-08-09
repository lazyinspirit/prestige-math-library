# Wave 9 A9 — scope-denial and published-claim-decay sweep

Date: 2026-08-09  
Role: audit orchestrator (owner-delegated)  
Result: complete; no A9 repair is required

## Exact scope read

I re-read the complete final text of every materially repaired Wave 9 item:

1. `def-oscillation`
2. `fs-additive-implies-linear`
3. `thm-baire-one-continuity-points`
4. `thm-continuity-set-realisation`
5. `thm-semicontinuous-evt`

I also re-read both complete page files:

- `library/real-analysis/monotone-functions-and-discontinuities.md`
- `library/real-analysis/monotone-functions-and-discontinuities-examples.md`

The second page currently consists only of its frontmatter and item ordering;
that is its complete text, not a sampled read.

## Denial-language entry grep and full-text adjudication

The entry grep covered the workflow's denial classes, including `neither`,
`no item`, `lacks`, `absent from`, `silent on`, `nowhere`, `not proved
anywhere`, `planned page`, `not claimed`, `does not`, `nothing here`, `never`,
and `none`. Every match was adjudicated against the complete file rather than
from the grep line alone.

- `def-oscillation`: the denials of a boundedness hypothesis and of a
  negative point oscillation remain true because the definition explicitly
  uses the extended reals and every point neighbourhood intersection contains
  its centre. The final empty-set exception is stated rather than denied.
- `fs-additive-implies-linear`: the AC scope statements and the denials in the
  regularity Remarks remain accurate. The Hamel coefficient map is additive,
  non-linear, discontinuous everywhere, unbounded above and below on every
  nondegenerate interval, and produced nonconstructively. Nothing claims a
  choice-free counterexample.
- `thm-baire-one-continuity-points`: the relative `G_delta`/density denials,
  nowhere-density claims, category/cardinality distinctions, and absence of a
  measure conclusion remain accurate. No page or later item has turned the
  relative continuity set into a `G_delta` dense subset of all of
  `mathbb{R}`.
- `thm-continuity-set-realisation`: the two extreme cases and the denial of a
  monotonicity guarantee remain correct. The construction is explicitly
  bounded in `[-1,1]` and claims no further regularity.
- `thm-semicontinuous-evt`: the repaired one-sided warning now says only that
  upper semicontinuity need not force attainment of the infimum. The companion
  item still witnesses exactly that and does not witness failure of boundedness
  below.
- A page: all negative summaries still match their linked items. In
  particular, the corrected one-sided-limit direction remains correct, the
  rational-continuity set remains impossible, the Dirichlet function remains
  nowhere continuous, and the two omitted measure-regularity clauses are still
  outside this page's reading-order prerequisites.
- B page: the denial-word matches occur only inside item ids in the page
  ordering and make no independent prose claim.

## Published-claim decay

I found no claim that was true at publication but falsified by Wave 8, Wave 9,
or the currently staged Wave 10 material. The Wave 8 dependency targets used
by Wave 9 remain frozen, and the exact Wave 9-to-Wave 8 reconciliation already
closed all 65 such edges. No later definition changes a quantifier,
hypothesis, or one-sided convention used by these repaired files.

## Disposition

No A9 mathematical or prose edit is licensed. No verification block was
removed, no judge call was made, and the A8 singleton targeted receipt remains
the final rejudge record. Wave 9 text is frozen for Wave 10's 29-edge
reconciliation barrier.
