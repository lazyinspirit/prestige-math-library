# ra-enrich-01 — adjudication round 2, exactly two items

Your round-1 repairs worked: five items now pass both lanes, and the two that
were untouched still hold their original paired passes. The rejudge surfaced
**two fresh objections**, both from Terra, both on items you repaired. This is
the expected pattern — repairing a loud defect exposes a quieter one underneath
that was previously masked — not a sign the lanes are noisy.

Scope: **exactly these two items. Touch nothing else.**

## 1. `thm-standard-maclaurin-expansions` — Terra, post-repair

> Step 4.1 is not licensed by its cited facts: simplifying the product-rule
> derivative to zero requires the real-power law
> $(1+x)^{-\alpha}=(1+x)^{-\alpha-1}(1+x)$, but it cites only L10 and prior
> steps, not L16. This is not ordinary algebra for arbitrary real exponents.

The objection is specific and looks right: for an **arbitrary real** exponent,
$(1+x)^{-\alpha-1}(1+x)=(1+x)^{-\alpha}$ is the real-power addition law, not
cancellation of like terms. Check whether the item already carries that law as a
fact (Terra names it L16) and step 4.1 simply fails to cite it, or whether the
law is absent and must be added from a published item. Either way the fix is a
citation, not a change of mathematics.

## 2. `def-radian-angle-by-unit-circle-arc-length` — Terra, post-repair

> The claim that the restriction is a continuous path is unsupported: scalar
> continuity of sine and cosine does not, from any cited fact, establish
> continuity of the vector-valued map gamma. The cited vector-valued item
> licenses componentwise differentiation, not componentwise continuity.

Also specific and also plausible. You need a published fact that a map into
$\mathbb{R}^n$ is continuous when its components are — or a route through the
norm/metric on $\mathbb{R}^n$, which the library publishes. Find the exact
published statement, confirm it says what you need, and cite it. If no such fact
exists, say so rather than asserting the implication.

## How to decide severity

The 30-second rule governs: a gap a competent reader closes in thirty seconds is
**nonfatal**. Both of these plainly are — but nonfatal here still means *repair it
correctly*, because nothing is frozen and nothing is published.

**These items have now been touched twice.** The twice-touched escalation is
advisory, and here it means: be sure the repair is complete rather than locally
patching the one step Terra named. Read each proof end to end and ask whether any
*other* step leans on the same unlicensed move. A third round that surfaces a
third nitpick on the same item is the loop worth avoiding, and the way to avoid
it is to fix the class of gap, not the instance.

If after reading you judge either objection a **false positive** — the fact really
is cited, or the step really is ordinary algebra — record it as such with the
evidence and change nothing. A false positive correctly identified is a better
outcome than a cosmetic edit.

## Deliverables

- Append rows to `research/ra-enrich-01-adjudications.jsonl` with the
  `item_sha256` from the **post-repair** ledger rows you are adjudicating.
- Apply repairs to those two files only.
- Re-run `node tools/tsx-run.mjs tools/precheck.mts` on each until clean, and
  re-run `node tools/rendercheck.mjs` on both — you found nine rendering errors
  in round 1 that no judge or reader looks for, so check it again.
- Overwrite `research/ra-enrich-01-rejudge-targets.json` with only the ids you
  actually changed.
- Append a round-2 section to `research/ra-enrich-01-alpha-report.md`.

Do not write `verification.judge` or `verification.audited`, do not edit
`library/`, `plan-spec.json`, or any other item, and do not publish.
