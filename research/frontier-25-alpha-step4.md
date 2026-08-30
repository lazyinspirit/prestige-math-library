# frontier-25 · Alpha step 4 adjudication

Lane: `step4-adjudicate-1`  
Run date: Sunday, August 30, 2026

I read `research/frontier-25-alpha-step4.task.md`,
`research/frontier-25-splice-refusals.json`, the owning batch scaffolds for
batches `5` and `11`, the cited target pages/items in the live
`research/plan-spec.json`, and the live output of
`node tools/validate-plan.mjs research/plan-spec.json`.

`research/frontier-25-splice-refusals.json` reports two undeclared-prerequisite
edges. In both cases the owning batch scaffold already carries the dependency,
the cited target is an earlier A page rather than an `-examples` page, and the
current canonical plan was missing the backward page edge. I applied those two
genuine backward prerequisites to `research/plan-spec.json`. No page-order
change, new page, or reroute through an examples page was needed.

## Edge dispositions

| batch | edge | evidence | disposition | edit | validation result | blocker |
|---|---|---|---|---|---|---|
| `5` | `arithmetic-functions-and-dirichlet-convolution -> finite-fields-and-cyclotomic-extensions` | `research/frontier-25-batch-5.pages.json:187-194` gives `cor-number-of-monic-irreducible-polynomials-over-a-finite-field` the deps `cor-classical-mobius-inversion` and `prop-divisor-sum-identity-for-monic-irreducibles-over-a-finite-field`. That target item is homed on the earlier A page `finite-fields-and-cyclotomic-extensions` at order `101.2` in `research/plan-spec.json:27849-27990`. Before this repair, page `348.001` in `research/plan-spec.json` declared only `bloch-schottky-and-picard-examples` and `incidence-algebras-and-mobius-inversion`, so the current page closure omitted the cited home page and the refusal in `research/frontier-25-splice-refusals.json` was genuine. | Genuine backward prerequisite. The dependency is load-bearing on the current scaffold, points to an earlier A page, and does not require a reading-order change. | Added `finite-fields-and-cyclotomic-extensions` to the canonical `requires` array for `arithmetic-functions-and-dirichlet-convolution` in `research/plan-spec.json:106557-106561`. No batch-scaffold edit was needed because `research/frontier-25-batch-5.pages.json:9-13` already carried the same edge. | Post-edit `node tools/validate-plan.mjs research/plan-spec.json` returns `OK`, with `redundant-prereq` advisories only. | none |
| `11` | `turing-machines-configurations-and-computation -> eulerian-and-hamiltonian-graphs` | `research/frontier-25-batch-11.pages.json:145-154` gives `lem-acceptance-is-configuration-reachability` the dep `def-directed-walk-trail-path-cycle-and-strong-connectivity`. That target item is homed on the earlier A page `eulerian-and-hamiltonian-graphs` at order `211` in `research/plan-spec.json:60324-60352`. Before this repair, page `597` in `research/plan-spec.json` declared only `formal-languages-encodings-and-decision-problems` and `graphs-walks-and-connectivity`, so the current page closure omitted the cited home page and the refusal in `research/frontier-25-splice-refusals.json` was genuine. | Genuine backward prerequisite. The dependency is load-bearing on the current scaffold, points to an earlier A page, and is not an examples-page seam. | Added `eulerian-and-hamiltonian-graphs` to the canonical `requires` array for `turing-machines-configurations-and-computation` in `research/plan-spec.json:134697-134701`. No batch-scaffold edit was needed because `research/frontier-25-batch-11.pages.json:9-13` already carried the same edge. | Post-edit `node tools/validate-plan.mjs research/plan-spec.json` returns `OK`, with `redundant-prereq` advisories only; one of those advisories now notes that page `597` reaches `graphs-walks-and-connectivity` through `eulerian-and-hamiltonian-graphs`. | none |

## Validation

Command run:

```bash
node tools/validate-plan.mjs research/plan-spec.json
```

Result on the post-edit bytes:

- `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 562 page(s) with item lists.`
- The command still emits `redundant-prereq` advisories, including the local
  advisory that page `turing-machines-configurations-and-computation` now
  reaches `graphs-walks-and-connectivity` through
  `eulerian-and-hamiltonian-graphs`.

## Summary

- Splice refusals in `research/frontier-25-splice-refusals.json`: `2`.
- Genuine backward prerequisites verified on current disk: `2`.
- `research/plan-spec.json` edits applied in this turn: `2`.
- Batch scaffold edits applied in this turn: `0`.
- Owner blockers: none.
