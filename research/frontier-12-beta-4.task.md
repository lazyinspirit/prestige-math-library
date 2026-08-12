## Batch 4 of run `frontier-12` — real analysis

Two A/B pairs. You own all four pages, and you author them at step 5.

### Pair A — π, the equivalent characterizations (NO prose scaffold exists)

| | |
|---|---|
| A page | order **183** · `pi-the-equivalent-characterizations` · "pi: the Equivalent Characterizations" · `real-analysis` |
| B page | order **184** · `pi-the-equivalent-characterizations-examples` |
| requires | `arc-length-and-rectifiable-curves` (181), `sine-cosine-and-the-definition-of-pi` (179) |

No prose scaffold exists for this page — work from sources. Open
`sine-cosine-and-the-definition-of-pi` and `arc-length-and-rectifiable-curves` on
disk first and find out **exactly** how π is already defined in this library,
because this page's whole job is to prove that the other standard
characterisations agree with that one.

The characterisations to reconcile: the smallest positive zero of sine (or twice
it), half the period of the circular functions, the arc length of the unit
semicircle, the area of the unit disc, the ratio of circumference to diameter,
and the analytic series/product representations you can actually reach from
what is published (Leibniz, Wallis, Viète — include a representation only if you
can prove it here). Each equivalence is a theorem with a proof, not a remark.

This page unlocks nothing downstream. That is not a reason to build it thin — it
is a terminal page whose only value is the quality of its equivalences.

### Pair B — line integrals and the gradient theorem

| | |
|---|---|
| A page | order **241** · `line-integrals-and-the-gradient-theorem` · "Line Integrals and the Gradient Theorem" |
| B page | order **242** · `line-integrals-and-the-gradient-theorem-examples` |
| requires | `the-fundamental-theorems-of-calculus` (239), `the-total-derivative` (229), `arc-length-and-rectifiable-curves` (181) |
| prose scaffold | `research/plan-complex-analysis-track.md` |

Line integrals of scalar fields with respect to arc length, line integrals of
vector fields, parametrisation-independence and behaviour under reversal,
piecewise-smooth paths, the gradient theorem (fundamental theorem for line
integrals), conservative fields, path-independence, closed-loop characterisation,
exactness versus closedness and the standard counterexample on the punctured
plane, potential functions and how to construct one on a suitable domain.

State connectivity and smoothness hypotheses exactly. "Closed implies exact"
without simple connectedness is false, and the punctured-plane counterexample is
the reason the B page exists.

### Between your two pairs

Both rest on `arc-length-and-rectifiable-curves` (181), which is published — cite
it directly from each. 183 and 241 are not in each other's `requires` closure, so
**neither may cite the other's items** (`undeclared-prereq`).
