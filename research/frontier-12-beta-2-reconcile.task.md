## Batch 2 — plan reconciliation (17 items)

`level-coverage --verify-current-context` reports
`audit-receipt-plan-reconciliation-missing` for **127** items across the run.
Alpha filled one — its own. **17 of the remaining 126 are yours.**

These are **authorship records, not adjudications**. You authored these items, so
you are the one who knows why the `deps` you wrote differ from the `deps` your
own step-2 scaffold planned. Alpha explicitly declined to fabricate them.

### What to write

`research/frontier-12-batch-2.plan-reconciliation.json` — a JSON array, one
object per item:

```json
[
  {
    "id": "...",
    "planned_deps": ["...", "..."],
    "actual_deps":  ["...", "..."],
    "reason": "..."
  }
]
```

`planned_deps` is the `deps` array in
`research/frontier-12-batch-2.pages.json`; `actual_deps` is the `deps`
frontmatter in `items/<id>.md` **as it stands now**. Copy both exactly — do not
re-sort or normalise them, and do not edit either file.

### The standard for `reason`

Alpha's single filled row is the model, in
`research/frontier-12-audit-coverage.json` under `plan_reconciliation`. It names
each added dependency, says **what the proof needed it for**, and confirms the
dependency is published and earlier in reading order.

A reason must be **specific to that item**. "Authoring revealed additional
dependencies" pasted across thirty rows is a non-answer and will be rejected. For
each added dep, say which step or Fact required it. For each removed dep, say why
the planned route was not taken — a shorter proof, a stronger published result, a
strategy change at step 5, or a step-6/8 repair.

Where a change came from an audit repair rather than your own authoring, say so
and name the stage.

### Your items

- `thm-zassenhaus-butterfly-lemma` — added: none; removed: `thm-correspondence-theorem-groups`
- `def-derived-series-solvable-group-and-derived-length` — added: `thm-well-ordering-principle`; removed: none
- `thm-subgroups-and-quotients-of-solvable-groups-are-solvable` — added: `prop-canonical-quotient-map`; removed: `def-quotient-group`
- `thm-finite-solvable-iff-composition-factors-have-prime-order` — added: `thm-derived-subgroup-is-characteristic-and-abelianization-is-universal`; removed: none
- `def-nilpotent-group-and-nilpotency-class` — added: `thm-well-ordering-principle`; removed: none
- `ex-two-composition-series-of-the-cyclic-group-of-order-twelve` — added: `thm-subgroups-of-cyclic-groups-are-cyclic`; removed: `thm-classification-of-cyclic-groups`
- `ex-composition-and-derived-series-of-s-four` — added: `thm-quotient-abelian-iff-contains-commutator-subgroup`, `thm-derived-subgroup-is-characteristic-and-abelianization-is-universal`; removed: `thm-finite-solvable-iff-composition-factors-have-prime-order`
- `fs-an-extension-of-nilpotent-groups-is-nilpotent` — added: none; removed: `thm-classification-of-cyclic-groups`
- `thm-nonzero-commutative-rings-have-invariant-basis-number` — added: `def-free-module-on-a-set-and-standard-basis`; removed: none
- `thm-snake-lemma-for-modules` — added: `def-module-homomorphism-kernel-image-and-cokernel`; removed: `thm-first-isomorphism-theorem-modules`
- `thm-injective-module-characterizations` — added: `def-quotient-module`; removed: none
- `thm-products-of-injective-modules` — added: `def-direct-sum-of-a-family-of-modules`; removed: `thm-injective-module-characterizations`
- `lem-coinduced-modules-are-injective` — added: none; removed: `thm-injective-modules-over-a-pid-are-exactly-divisible`
- `thm-module-categories-have-enough-injectives` — added: `thm-injective-modules-over-a-pid-are-exactly-divisible`; removed: none
- `cex-free-module-rank-fails-over-an-endomorphism-ring` — added: `def-linear-basis`; removed: none
- `ex-projective-nonfree-module-z-two-over-z-six` — added: `thm-free-modules-are-projective-with-choice-boundary`; removed: none
- `fs-every-projective-module-is-free` — added: `thm-free-modules-are-projective-with-choice-boundary`; removed: none

### Rules

- Write **only** `research/frontier-12-batch-2.plan-reconciliation.json`.
- Do **not** edit `items/`, `library/`, `plan-spec.json`, the audit receipt, or
  any other batch's files. The orchestrator merges the seven files into
  `research/frontier-12-audit-coverage.json`.
- Do **not** change any item's `deps` to make it match the plan. The authored
  deps are correct; the record of *why* is what is missing.
- Report the count you wrote and anything you could not explain.
