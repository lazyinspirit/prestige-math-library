# ra-enrich-01 — round 3, ONE item, and a stopping rule

Scope: **`thm-standard-maclaurin-expansions` only.** The other six items pass both
lanes on their current text and are finished. Do not touch them.

## Read this first: why you are being dispatched a third time

Terra has now rejected this item **three times, on three different steps**, and
every one of its objections has been correct:

| round | step | objection |
|---|---|---|
| 1 | 1.4 | the binomial-coefficient identification was unlicensed |
| 2 | 4.1 | the real-power law was carried in `[L16]` but never cited |
| 3 | 1.1 | `[L3]` says "$e^x$ is defined by the series", but the cited definition defines **$\exp(x)$**, and only defines $e$ as $\exp(1)$. Nothing proves $e^x=\exp(x)$ |

DeepSeek passes it every time.

**Do not read this as a noisy lane.** Read the three together: they are one
systematic defect. This item's statement uses symbols — $\binom{\alpha}{n}$,
$(1+x)^\alpha$, $e^x$ — that the library defines **separately and carefully**,
and the proof has been silently identifying each with a near-neighbour the
library treats as a different object. Round 2's sweep caught integer-vs-real
powers; it did not think to check $e^x$ against $\exp$.

So patching step 1.1 alone will very likely produce a fourth objection on a
fourth symbol. **Do not patch step 1.1 alone.**

## What to do instead: an exhaustive notation audit

Enumerate **every mathematical symbol and operation appearing in the Statement
and in every numbered proof step**. For each one, name the library item that
defines it, and confirm the proof uses it in that exact sense. Where the item
uses a symbol in a sense the library defines elsewhere, either cite the bridge or
write it.

The known-missing bridge for round 3: $e^x = \exp(x)$. It is **not** published as
a single item, but it is derivable in two steps from published material —
`def-real-power` defines $a^x$ for positive bases, `def-natural-logarithm` is the
inverse of $\exp$, and $e=\exp(1)$ gives $\log e=1$. Verify that chain yourself
against the exact published statements before using it; if it does not close as I
have described, say so.

Candidates to check explicitly, at minimum: $\exp$ vs $e^x$; $\binom{\alpha}{n}$
for real $\alpha$ vs $\binom nk$ as a count; $(1+x)^\alpha$ real vs integer
powers; $x^n$ under `def-integer-power`; $0^0$; $n!$; the radius-of-convergence
notation; and $\log(1+x)$ vs the natural logarithm.

Write the audit into your report as a table, so the next reader can see the
coverage rather than trust it.

## The stopping rule — this is binding

If, after the exhaustive audit, a **fourth distinct** objection is raised on this
item by a later rejudge, **do not repair it again.** Record it as
`confirmed_nonfatal` with the evidence and let it close on the adjudication
ledger. `CLAUDE.md` permits exactly that: a current rejection is cleared by an
Alpha exact-hash `confirmed_nonfatal` under the 30-second rule.

The reason is the one R1 exists for — each repair moves the text, forces a
rejudge, and resamples a stochastic reader that finds a fresh nitpick, an
unbounded loop converging on nothing. Three rounds of real findings has earned
this item a genuine audit; a fourth round of the same would be the loop.

**If you judge that the honest fix is to SPLIT this item** — the six collated
families in one item and the generalized binomial, the only genuinely new proof,
in another — say so plainly in your report and do not do it. That is a plan
change and it belongs to the owner. It is a legitimate finding, and it is worth
recording: this item is the largest of the seven, drew every objection in the
run, and exhausted a judge's 40,000-token reasoning budget on its first read.

## Deliverables

- The repair applied to that one file.
- The notation-audit table in `research/ra-enrich-01-alpha-report.md` under a
  round-3 heading.
- A row appended to `research/ra-enrich-01-adjudications.jsonl` against the
  round-3 post-repair hash.
- `research/ra-enrich-01-rejudge-targets.json` overwritten with just this id.
- `precheck` and `rendercheck` clean on the file.

Do not write `verification.judge` or `verification.audited`, do not edit
`library/`, `plan-spec.json`, or any other item, and do not publish.
