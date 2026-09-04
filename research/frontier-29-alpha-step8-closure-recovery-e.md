# Frontier 29 Step 8 closure recovery — group e

## Result

Handled the one live group-e rejection tuple. Its outcome is
`confirmed_nonfatal`. The cited theorem does not literally state the product
domain claimed in proof step 2.1, but the missing restriction is an immediate
local consequence of that theorem, and the mathematical statement remains
correct.

No content, contract, impact, judge-verdict, verification, or defect-ledger
record was changed. There are no licensed repairs, rejudge targets,
cross-group alerts, or blockers.

## Exact adjudication

| item | model | context SHA-256 | guard-form item SHA-256 | outcome |
|---|---|---|---|---|
| `thm-time-dependent-vector-fields-have-local-smooth-evolution-operators` | `gpt-5.6-terra` | `081573b18fd5390fb4fe36af179a6ad5e93dd5b21ea5ab41d676126e2f8f0691` | `6dcfc61cfb9176819ce787d1b9307a3dc95f538c02d5d5f5586214cf98c8dbe9` | `confirmed_nonfatal` |

The rejection correctly observes that
`thm-fundamental-theorem-for-nonautonomous-smooth-odes` supplies a uniform
radius `h` and an open neighbourhood of initial pairs rather than explicitly
supplying `J x J x W`. Because that neighbourhood is open at the base pair,
it contains a product `J_0 x W_0`. Shrink an interval `J` about the base time
inside `J_0` and the original open time interval so that its diameter is less
than `h`. Then every initial pair `(sigma,y)` in `J x W_0` is covered by the
cited theorem, and every `t` in `J` satisfies `|t-sigma|<h`. Restricting its
smooth local solution map therefore gives the asserted common two-time
evolution domain; chart transport and uniqueness are exactly as written.

This is a short product-neighbourhood shrink and inequality, of the kind a
competent reader closes immediately. It does not make the statement,
construction, or citation direction false or overstrong, so it is nonfatal
under the dispatch standard rather than a content-repair licence.

## Sources and dependencies checked

- `items/thm-fundamental-theorem-for-nonautonomous-smooth-odes.md`: its
  statement supplies the open initial-pair neighbourhood, common time radius,
  uniqueness, and smooth local solution map used in the restriction above.
- `items/prop-chart-maps-are-diffeomorphisms-onto-euclidean-open-sets.md`: its
  statement licenses the coordinate transport used in steps 1.1 and 3.1.
- `items/def-time-dependent-vector-field-and-evolution-operator.md`: its
  convention agrees with differentiation in the first time variable and the
  identity condition at equal times.

The full 83-item group and its declared direct dependencies were also read as
required by the dispatch. The Step-7 concern concerns the autonomous flow
theorem, not this rejection, and supplies no independent evidence of a fatal
defect here.

## Disposition

- Licensed repairs: none.
- Rejudge targets: none.
- Cross-group alerts: none.
- Blockers: none.

## Checks

- `node tools/step8-guard.mjs ...`: passed; all 126 changes since the
  `pre-step8` baseline were licensed, with no created or deleted item.
- `node tools/step8-scope.mjs check --run frontier-29`: passed; 7 groups and
  755 items were partitioned, 33 remaining open rejections were routed, and
  there were no cross-group alert dispositions.
