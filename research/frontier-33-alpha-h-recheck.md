# frontier-33 · Alpha group `h` · Step 3 recheck

Rechecked the current batch-19 and batch-20 manifests and coverage ledgers,
their `## Step-3 fix pass` notes, the current plan, and the published dependent-choice item and page home. The following is a current-byte review.

## Dispositions

1. **H-1 — applied repair verified; batch-19 pushback stands.** Batch 20's
   A manifest now gives `weak-choice-principles-and-sierpinskis-theorem` the
   explicit prerequisites `cardinal-arithmetic-and-cofinality`,
   `filters-and-ultrafilters`, and `compactness-in-metric-spaces`. Its four
   direct users of `def-dependent-choice` remain
   `def-multiple-and-dependent-multiple-choice`,
   `thm-choice-implies-dependent-implies-countable-choice`,
   `lem-starting-point-free-dependent-choice`, and
   `thm-dependent-choice-detects-non-well-orders`. The published definition
   is listed on `library/topology/compactness-in-metric-spaces.md`; its home is
   plan order 120, strictly earlier than the weak-choice A page at 665. The
   batch-19 fix-pass correctly makes no edit: its SET-1 and SET-4 pages do not
   use this definition. The canonical plan remains unreconciled by design;
   the non-writing splice rehearsal identifies precisely this one manifest
   `requires` addition for the engine-owned splice.

## Scope decisions

`scope-decisions refresh --run frontier-33 --group h`, followed by `check`,
found 31 current decline rows, no pending rows, and no errors. Every prior
decision remains exact against its coverage row and current page-closure
context.

## Pair verdicts

- `formal-set-theoretic-syntax-structures-and-satisfaction`: **sufficient**.
- `well-founded-relations-rank-and-the-cumulative-hierarchy`: **sufficient**.
- `weak-choice-principles-and-sierpinskis-theorem`: **sufficient**; H-1 is
  closed by the manifest's backward prerequisite.
- `club-stationary-sets-and-pressing-down`: **sufficient**.

## Current-byte checks

- `coverage-checklist --require-destination`: batch 19 has 101 harvested
  results with 0 errors and 0 warnings; batch 20 has 161 with 0 errors and
  the already-reviewed low-yield warning for weak choice.
- `source-fetch-check`: batch 19 is 8/8 and batch 20 is 14/14
  fetch-verified.
- `content-policy --manifest-only` over the two manifests: 127 scoped items,
  0 errors, 0 warnings.
- `validate-plan` on the unchanged canonical plan reports no item cycle,
  forward reference, B-page dependency, or unresolved identifier among its
  populated page inventories.
- `splice-plan --dry-run --update --accept-requires --batch 20` reports the
  sole reconciliation of the weak-choice `requires` list and stages all four
  batch-20 pages without writing the canonical plan.

## Current-context scope-decision recheck

Ten exact current `stands` decisions were retained. The 21 pending rows were
all on `weak-choice-principles-and-sierpinskis-theorem`; each now stands. Its
current order-665 manifest requires only `cardinal-arithmetic-and-cofinality`,
`filters-and-ultrafilters`, and `compactness-in-metric-spaces`. None of its
26 A-page or six B-page items depends on an item from the deferred destinations:
the Borel page (order 673), permutation-model page (689), or analysis-choice
page (697).

| Decline | Disposition | Current evidence |
|---|---|---|
| No infinitely descending power-set sequence | stands | Caicedo §7 places it after the Hartogs/power-set bounds; the selected local-GCH/Specker chain does not require it. |
| Homework 3 — h(A)=h(A squared) | stands | It is a §8 homework; the manifest uses only the explicitly scoped `X≈X`-squared specialization. |
| Sharpness of Theorem 8.2 | stands | Jech §8.2 makes it a permutation-model/ZFA-to-ZF transfer result, owned by the order-689 destination. |
| Homework 1 — finite powerset-square threshold | stands | It is not needed by the selected omega-injection Halbeisen–Shelah/Specker route. |
| Example 2.4.4 — hereditary separability | stands | Jech's countable-base application is topological and belongs to the order-697 interface. |
| Algebraic usage of D-finite | stands | Caicedo explicitly marks it as an unrelated ring-theoretic term. |
| Example 2.4.3 — sequential/neighborhood descriptions | stands | Closure, continuity, and compactness are absent from the selected graph and belong at order 697. |
| Example 2.4.6 — Borel constructions | stands | The Borel qualifications are unused; the dedicated page is order 673. |
| Homework 2 — initial ordinal into a product | stands | The selected Hartogs argument uses direct relation coding, not this factorization. |
| Theorem 8.3 regular-case lower DC separation | stands | Its model and transfer belong to Jech §8.2's order-689 permutation-model work. |
| Theorem 4 — BC implies DMC | stands | Morillon's compact-Hausdorff Baire implication is not the selected DC/DMC proof and belongs at order 697. |
| Problem 12 — ordering principle/countable-choice failure | stands | Its separation model and transfer are deferred to order 689. |
| Theorem 8.9 pointer — indexed AC with failure of W | stands | Jech requires a refined embedding-theorem transfer; it is not a Specker dependency. |
| Theorem 8.6 singular-case lower-W separation | stands | It is a separate model-theoretic sharpness result at the order-689 destination. |
| Arbitrary-square clause `X≈Y` squared | stands | Caicedo treats it separately; the manifest retains only `X≈X` squared with its stated D-finite clause. |
| Finite multiples of a D-finite set | stands | The local proof begins with an explicit omega injection and does not need cancellation. |
| Determinacy comparison after the bound | stands | It is an illustrative determinacy comparison unused by the ZF local-GCH proof. |
| Theorem 8.6 pointer — W_kappa without AC_kappa | stands | This separate model result is owned by order 689; no current item needs W_kappa. |
| Example 2.4.5 — null/meagre countable additivity | stands | The measure/category construction is absent from this graph and belongs at order 697. |
| BC — Baire for compact Hausdorff spaces | stands | No selected item invokes compact-Hausdorff Baire theory; the interface belongs at order 697. |
| Theorem 8.12 pointer — AC_kappa and W_kappa without DC_kappa | stands | The local omega ledger does not require its separate model construction or transfer. |

The exact source locators, page-closure hashes, and row-specific fuller
evidence are in `frontier-33-alpha-h-scope-decisions.json`. The required final
checker reports 31 current declines and zero errors.
