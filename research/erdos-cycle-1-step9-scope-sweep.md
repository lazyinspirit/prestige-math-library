# Erdős cycle 1 — step 9 scope-denial sweep

Run 2026-07-31. Per `LEVELS.md` and `WORKFLOW.md`, this sweep examined the
published corpus — item bodies and page summaries — for claims that would become
false if the two Erdős-cycle A/B pairs were published.

The new material supplies quantified uniform convergence and uniform Cauchy
convergence for real-valued functions; uniform function-series criteria;
Riemann-integral and derivative-limit interchange theorems; and finite-poset,
Sperner, Dilworth, Erdős--Ko--Rado, sunflower, and finite Birkhoff material.
The sweep searched these subjects together with the scope-denial phrase set,
then read every candidate paragraph in the published items and page summaries.

## Result

One global claim would be false after publication:

- `items/lem-sup-metric-is-a-metric.md` says that uniform convergence is not
  defined anywhere in the library yet. The new definition
  `def-pointwise-uniform-and-uniformly-cauchy-convergence` makes that false.

Its exact, publication-boundary correction is staged in
`research/erdos-cycle-1-publish-amendments.md`; no live published file was
changed during this draft-only cycle.

All other candidates were either mathematically negative statements, local
page-scope language (for example, “not proved on this page”), or accurate
reading-order claims. In particular, the `rem-rn-conventions-and-scope` entry
that puts uniform convergence later in its track remains true: this new page is
order 169, later than the `R^n` page at order 167. No combinatorics page summary
or published item contains a scope denial falsified by the new finite-poset
development.

No re-grep of repaired published files is owed: none was repaired. The staged
amendment is intentionally outside the owner's Step-8 GLM-5.2/GPT-5.6-Sol-only
review scope and must be reviewed only if publication is authorized.
