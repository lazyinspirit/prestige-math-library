# Erdős cycle 1 — publication-amendment review

Date: 2026-07-31. This records the required fresh review of the live item
amended at the cycle-1 publication boundary.

## Item and repair

`lem-sup-metric-is-a-metric` formerly said that, without boundedness of the two
functions, the relevant supremum does not exist. GPT 5.6 Terra supplied the
counterexample $f=g=\operatorname{id}_{\mathbb{R}}$, for which the functions
are unbounded but $D(f,g)=\{0\}$. The claim was corrected: boundedness makes the
formula finite for every pair in the selected function space; it is not a
necessary condition for every individual pair to have a finite supremum.

The stale owner-audit and judge stamps were removed before this review. The
scope amendment also adds the two necessary forward references to the later
uniform-convergence definition and its supremum-metric remark.

## Final paired verdicts

Both judges received the same hash-attested frozen item/A-B/dependency context
on the corrected text.

| Model | Verdict | Reason |
|---|---|---|
| `deepseek-v4-pro` | pass | The proof derives the metric axioms from the cited definitions and lemmas, with no logical gap or citation mismatch. |
| `gpt-5.6-terra` | pass | Well-definedness and all three metric axioms are licensed by the cited facts. |

The corrected item is therefore re-stamped with the paired judge pass and the
owner audit date for this publication decision.
