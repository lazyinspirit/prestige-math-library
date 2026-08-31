# frontier-26 · Alpha step 4 adjudication

Lane: `step4-adjudicate-5`  
Run date: Monday, August 31, 2026

I read `research/frontier-26-alpha-step4.task.md`,
`research/frontier-26-splice-refusals.json`, the owning batch scaffold
`research/frontier-26-batch-4.pages.json`, the cited target page and current
item entry in `research/plan-spec.json`, the authored item
`items/ex-the-geometric-series-has-only-one-singular-boundary-point.md`, and
the live output of `node tools/validate-plan.mjs research/plan-spec.json`.

`research/frontier-26-splice-refusals.json` contains no refusal edges. The
pre-edit validator on current disk still reported one live Step-4 dependency
edge, surfaced as a matching pair of diagnostics:

- `[b-leaf] ex-the-geometric-series-has-only-one-singular-boundary-point
  (analytic-continuation-and-monodromy-examples) depends on published
  ex-complex-geometric-power-series, which is homed on examples page
  the-complex-exponential-and-eulers-formula-examples; B pages must be leaves`
- `[undeclared-prereq] page analytic-continuation-and-monodromy-examples has an
  item depending on the-complex-exponential-and-eulers-formula-examples, which
  is NOT in the closure of its declared requires — either add it or drop the
  dependency`

## Edge review

| edge | evidence | disposition | edit | validation result | blocker |
|---|---|---|---|---|---|
| `analytic-continuation-and-monodromy-examples -> the-complex-exponential-and-eulers-formula-examples` | The batch-4 B page depends only on its A companion (`research/frontier-26-batch-4.pages.json:263-270`), but `ex-the-geometric-series-has-only-one-singular-boundary-point` still listed `ex-complex-geometric-power-series` in its scaffold deps before this repair (`research/frontier-26-batch-4.pages.json:309-316` post-edit location). The target witness is homed on the examples page `the-complex-exponential-and-eulers-formula-examples` (`research/plan-spec.json:55109-55212`), specifically item `ex-complex-geometric-power-series` (`research/plan-spec.json:55197-55209`). The current authored item already closes from A-page results and cites no examples-page witness (`items/ex-the-geometric-series-has-only-one-singular-boundary-point.md:10`, `:39-49`). | Unneeded B-page dependency. A page edge to an `-examples` page is forbidden by the task, and the present example already proves the needed radius-one/sum facts directly from A-page theorems. | Removed `ex-complex-geometric-power-series` from the owning batch scaffold at `research/frontier-26-batch-4.pages.json:312-317` and synced the same removal into `research/plan-spec.json:107284-107289`. | Post-edit `node tools/validate-plan.mjs research/plan-spec.json` returned `OK`; only repository-wide `redundant-prereq` advisories remain. | none |

## Validation

Command run:

```bash
node tools/validate-plan.mjs research/plan-spec.json
```

Result on the post-edit bytes:

- `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 594 page(s) with item lists.`
- The command still emits advisory `redundant-prereq` rows elsewhere in the repository, but no Step-4 blocking errors.

## Summary

- Splice refusals in `research/frontier-26-splice-refusals.json`: `0`.
- Live Step-4 blockers at the start of this turn: `1` underlying edge (`1`
  `[b-leaf]` row and `1` matching `[undeclared-prereq]` row).
- Backward page edges added: `0`.
- Item-level dependency removals applied: `1`.
- Owner blockers: none.
