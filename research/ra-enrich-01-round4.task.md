# ra-enrich-01 — round 4, FINAL. Two items, two narrow questions.

This is the last repair round. Whatever survives it closes on the adjudication
ledger as `confirmed_nonfatal`, per the stopping rule you already accepted.

## Why the stopping rule did not fire on its own

You were told a fourth distinct objection on `thm-standard-maclaurin-expansions`
closes without repair. I am overriding that for one specific reason, and only for
part 1: **both lanes now flag a defect that your round-3 repair introduced.** That
is a regression, not a resample. Publishing an item whose Remarks cite the wrong
step numbers would be shipping an error we created. The stopping rule exists to
stop an unbounded hunt for *fresh* nitpicks in unchanged text, not to protect a
mistake in the newest edit.

## Part 1 — `thm-standard-maclaurin-expansions`: bookkeeping only

Both lanes, independently:

> **Terra:** The Remarks twice miscite step 1.4: it only proves a derivative
> formula for a negative real power. Agreement with natural powers and
> identification with the counting binomial coefficient are proved in step 2.1.
>
> **DeepSeek:** Step 1.2 applies L9 to a series known only to converge on
> $|x|<R$, but L9 needs its radius; no cited fact gives radius at least $R$. The
> Remarks also attribute the integer-real power agreement and binomial-count
> match to Step 1.4, though Step 2.1 proves them.

Two fixes, both mechanical:

1. **Correct the Remarks' step references.** Your nine-phase restratification
   renumbered the steps and the Remarks were not carried across. Check **every**
   cross-reference in the item — Remarks, Facts, and step-to-step citations —
   against the current numbering, not just the two the lanes named. A renumber
   breaks references in bulk, so audit them in bulk.
2. **Cite the radius for the L9 application at step 1.2**, or restrict the step
   to where the cited radius actually holds.

**Do nothing else to this item.** No new sweep, no new facts beyond what these
two fixes require. Its mathematics has now been audited three times and the
statement is settled.

## Part 2 — `thm-analytic-sine-cosine-agree-with-right-triangle-ratios`: does it overstate?

This item passed both lanes twice. It is here because repairing
`def-radian-angle-by-unit-circle-arc-length` moved its context hash, forcing a
rejudge, and on that rejudge Terra raised something new. DeepSeek passes it.

> **Terra:** Step 8.1 is unsupported: $P=H(\cos\theta,\sin\theta)$ gives
> collinearity, but no cited fact or definition relates the triangle's interior
> angle at the origin to the unit-circle swept angle, or establishes invariance
> of that angle under positive scaling.

**This is the one objection in the whole run that could be fatal, so treat it as
the serious question it is.** The fatal class is "a title or Statement asserting
more than the proof gives".

Decide precisely what the item claims:

- If it claims only the **ratio identity** — that for the coordinate right
  triangle with vertices $(0,0),(A,0),P$, the parameter $\theta$ satisfies
  $\cos\theta=A/H$ and $\sin\theta=O/H$ — then that follows from
  $(A/H,O/H)=(\cos\theta,\sin\theta)$ and Terra is over-reading a remark. Record
  it as a **false positive with the evidence**, and change nothing. That is the
  approved statement in `research/ra-enrich-01-PLAN.md`; check it.
- If the item anywhere claims the **triangle's interior angle at the origin
  equals $\theta$**, then Terra is right that this needs angle-invariance under
  positive scaling, which the library may not publish. In that case **scope the
  claim back to what the plan approved and what the proof delivers** — do not
  invent an angle-invariance theorem to rescue a sentence.

Either outcome is acceptable. What is not acceptable is leaving an unlicensed
geometric assertion in the text because the ratio identity happens to be true.

Remember this item is the reason the whole commission exists — the owner asked
for the bridge from the power-series sine and cosine to $\cos\theta=A/H$,
$\sin\theta=O/H$. Getting its scope exactly right matters more than getting it
published tonight.

## Deliverables

- Repairs to those two files only.
- Adjudication rows appended for both, with the evidence, including a
  `false_positive` row if that is your finding on part 2.
- `research/ra-enrich-01-rejudge-targets.json` overwritten with the ids you
  actually changed — **if you change nothing on part 2, it does not go in.**
- `precheck` and `rendercheck` clean; a round-4 section in the Alpha report.

Do not write `verification.judge` or `verification.audited`, do not edit
`library/`, `plan-spec.json`, or any other item, and do not publish.
