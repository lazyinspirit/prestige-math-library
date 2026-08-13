# Beta FIX brief for run `frontier-12` (step 3 → 4)

> **NO PERMISSION PROMPTS OF ANY KIND (owner, 2026-07-30; broadened 2026-08-11)
> — binding on you.** The owner's wording: *"Do not ask and do not let any agents
> ask for shell command permissions, edit permissions, web search permissions,
> git permissions, or any permissions whatsoever."* It binds a **compound command
> as a whole — no segment of an `&&` chain may raise a prompt either.** Use
> command forms already allowed inside the workspace sandbox, choose
> non-escalated forms, and pass `dangerouslyDisableSandbox: true` on every Bash
> call where your runtime exposes it. Web search is part of your job and you never
> ask before searching. If an indispensable operation has no escalation-free form,
> **record a blocker in your notes** — that is the escape hatch, not a prompt.

You already scaffolded this batch on run `frontier-12`. The orchestrator has
settled the step-3 decisions and one of them changes your batch. This dispatch is
that change and **nothing else**.

**Read first:** `research/frontier-12-step3-decisions.md` — the full decision
record, including the reasoning behind the change to your batch. Then
`CLAUDE.md`, `SCHEMA.md` and `briefs/beta-scaffold.md` remain your standing
contract, and your own
`research/frontier-12-batch-4.{pages.json,notes.md,coverage.json,proof-contracts.json}`
are still your only writable outputs.

## Rules for a fix round

1. **Change only what the dispatch names.** Everything else in your scaffold was
   accepted. Do not re-litigate a decline the orchestrator did not raise, and do
   not take the opportunity to restructure a page that was not challenged.
2. **Keep all four artifacts consistent.** A change to `pages.json` that does not
   reach `coverage.json` and `proof-contracts.json` will fail the step-4 gates,
   and a coverage entry whose disposition still says `deferred` for a result you
   have now scaffolded is a false record.
3. **Item ids you already scaffolded stay stable** unless the dispatch explicitly
   reassigns them. Downstream artifacts already reference them.
4. **Leave the gates green:**
   ```
   node tools/coverage-checklist.mjs research/frontier-12-batch-4.coverage.json
   node tools/validate-plan.mjs research/plan-spec.json
   ```
   Do **not** run `tools/gates.mjs`; it fails `EPERM` in this sandbox. You may not
   edit `plan-spec.json` — the orchestrator has already made the page-level edits
   your dispatch depends on, so read it, never write it.
5. **Report** what changed, item by item, and anything you could not do.


---

# This dispatch

## Batch 4 — plan reconciliation (33 items)

`level-coverage --verify-current-context` reports
`audit-receipt-plan-reconciliation-missing` for **127** items across the run.
Alpha filled one — its own. **33 of the remaining 126 are yours.**

These are **authorship records, not adjudications**. You authored these items, so
you are the one who knows why the `deps` you wrote differ from the `deps` your
own step-2 scaffold planned. Alpha explicitly declined to fabricate them.

### What to write

`research/frontier-12-batch-4.plan-reconciliation.json` — a JSON array, one
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
`research/frontier-12-batch-4.pages.json`; `actual_deps` is the `deps`
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

- `def-riemann-area-between-continuous-graphs` — added: `thm-continuous-inverse`, `thm-algebra-of-continuous-functions`, `lem-power-monotone`; removed: none
- `thm-unit-semicircle-arc-length-is-pi` — added: `def-vector-valued-derivative-and-integral`, `lem-integral-elementary-bounds`; removed: none
- `thm-circle-circumference-diameter-ratio-is-pi` — added: `def-vector-valued-derivative-and-integral`, `lem-integral-elementary-bounds`; removed: none
- `thm-archimedean-polygon-perimeter-characterization-of-pi` — added: `def-pi-via-first-positive-cosine-zero`, `thm-sine-and-cosine-derivatives`, `cor-archimedean-reciprocal`; removed: `def-sequence`
- `thm-disc-area-is-pi-r-squared` — added: `thm-linearity-of-the-integral`, `thm-ftc-second-part`, `lem-integral-elementary-bounds`; removed: none
- `thm-gregory-leibniz-series-for-pi-from-a-finite-remainder` — added: `thm-sine-and-cosine-addition-formulas`, `thm-sine-cosine-signs-monotonicity-and-ranges`, `thm-sine-and-cosine-derivatives`, `thm-linearity-of-the-integral`, `lem-derivative-of-a-power`, `thm-ftc-second-part`, `cor-trigonometric-parity-and-pythagorean-identity`, `cor-archimedean-reciprocal`; removed: none
- `lem-wallis-integrals-recurrence-and-squeeze` — added: `thm-quarter-turn-values-and-shift-formulas`, `def-pi-via-first-positive-cosine-zero`, `thm-linearity-of-the-integral`, `thm-monotonicity-of-the-integral`, `def-monoid-finite-product`, `thm-squeeze`; removed: none
- `thm-wallis-product-for-pi` — added: `def-monoid-finite-product`; removed: `def-sequence`, `thm-squeeze`
- `cor-central-binomial-coefficient-asymptotic-from-wallis` — added: `def-monoid-finite-product`, `def-pi-via-first-positive-cosine-zero`; removed: `lem-wallis-integrals-recurrence-and-squeeze`, `def-canonical-natural`
- `lem-viete-finite-cosine-product-and-nested-radicals` — added: `cor-trigonometric-parity-and-pythagorean-identity`, `def-monoid-finite-product`; removed: none
- `thm-viete-product-for-pi` — added: `cor-archimedean-reciprocal`, `def-pi-via-first-positive-cosine-zero`, `def-monoid-finite-product`; removed: `def-sequence`
- `ex-viete-first-nested-radical-approximants` — added: `thm-algebra-of-limits`; removed: none
- `fs-any-positive-zero-of-sine-characterizes-pi` — added: `thm-sine-cosine-zero-sets-and-fundamental-period`, `def-pi-via-first-positive-cosine-zero`; removed: none
- `fs-circumference-to-radius-ratio-is-pi` — added: `def-pi-via-first-positive-cosine-zero`; removed: none
- `cex-a-multiple-traversal-has-the-same-circle-trace-but-greater-length` — added: `def-vector-valued-derivative-and-integral`, `thm-sine-and-cosine-derivatives`, `cor-trigonometric-parity-and-pythagorean-identity`, `thm-sine-cosine-zero-sets-and-fundamental-period`, `lem-integral-elementary-bounds`; removed: none
- `thm-line-integrals-under-oriented-reparametrization` — added: `thm-chain-rule-for-total-derivatives`; removed: none
- `thm-scalar-and-vector-line-integral-estimates` — added: `thm-monotonicity-of-the-integral`, `thm-linearity-of-the-integral`; removed: `lem-integral-elementary-bounds`
- `thm-path-independence-iff-zero-closed-loop-integrals` — added: `def-scalar-and-vector-line-integrals-along-piecewise-c1-paths`, `thm-line-integrals-under-oriented-reparametrization`; removed: none
- `thm-path-independent-field-has-a-potential-by-line-integrals` — added: `def-scalar-and-vector-line-integrals-along-piecewise-c1-paths`, `thm-line-integrals-under-oriented-reparametrization`; removed: none
- `cor-potentials-differ-by-a-componentwise-constant` — added: `def-piecewise-c1-path-operations-and-oriented-reparametrizations`, `def-equivalence-relation`; removed: none
- `def-closed-and-exact-c1-vector-fields` — added: `lem-standard-basis-of-f-n`; removed: none
- `cor-closed-exact-and-conservative-equivalence-on-star-shaped-domains` — added: `def-closed-and-exact-c1-vector-fields`, `def-piecewise-c1-path-connected-conservative-and-path-independent`; removed: none
- `def-positive-orientation-for-elementary-region-boundaries` — added: `thm-line-integrals-under-reversal-and-concatenation`, `def-scalar-and-vector-line-integrals-along-piecewise-c1-paths`; removed: none
- `lem-green-boundary-cancellation-under-finite-gluing` — added: `def-type-i-type-ii-and-elementary-green-regions`, `def-null-and-content-zero-in-rn`, `thm-lebesgue-criterion-in-rn`, `thm-jordan-content-and-indicator-integrability`, `thm-jordan-boundary-criterion`, `thm-heine-borel-characterisation-r`, `thm-continuous-image-of-a-compact-space-is-compact`, `thm-compact-subset-is-closed-and-bounded`, `thm-heine-borel-rn`, `thm-extreme-value-metric`; removed: none
- `thm-greens-theorem-for-finite-unions-of-elementary-regions` — added: `def-type-i-type-ii-and-elementary-green-regions`, `def-scalar-and-vector-line-integrals-along-piecewise-c1-paths`; removed: none
- `ex-scalar-line-integral-over-a-unit-semicircle` — added: `thm-sine-and-cosine-derivatives`, `cor-trigonometric-parity-and-pythagorean-identity`, `thm-quarter-turn-values-and-shift-formulas`, `thm-newton-leibniz-with-interior-derivative`; removed: none
- `ex-gradient-theorem-for-a-polynomial-potential` — added: `def-scalar-and-vector-line-integrals-along-piecewise-c1-paths`, `lem-derivative-of-a-power`, `thm-newton-leibniz-with-interior-derivative`; removed: `ex-line-segment-scalar-and-vector-line-integrals`
- `ex-constructing-a-potential-on-an-open-rectangle` — added: `cor-potentials-differ-by-a-componentwise-constant`, `thm-newton-leibniz-with-interior-derivative`; removed: none
- `cex-the-one-form-y-dx-is-path-dependent` — added: `lem-derivative-of-a-power`, `thm-newton-leibniz-with-interior-derivative`; removed: none
- `cex-vortex-field-is-closed-but-not-exact-on-the-punctured-plane` — added: `def-scalar-and-vector-line-integrals-along-piecewise-c1-paths`, `thm-sine-and-cosine-derivatives`, `cor-trigonometric-parity-and-pythagorean-identity`, `lem-integral-elementary-bounds`, `def-pi-via-first-positive-cosine-zero`; removed: none
- `fs-every-closed-c1-field-on-a-connected-open-set-is-exact` — added: `def-closed-and-exact-c1-vector-fields`, `thm-gradient-theorem-for-line-integrals`, `def-scalar-and-vector-line-integrals-along-piecewise-c1-paths`, `thm-sine-and-cosine-derivatives`, `cor-trigonometric-parity-and-pythagorean-identity`, `lem-integral-elementary-bounds`, `def-pi-via-first-positive-cosine-zero`, `thm-intermediate-value`; removed: `cex-vortex-field-is-closed-but-not-exact-on-the-punctured-plane`
- `fs-vector-line-integrals-are-invariant-under-reversal` — added: `def-scalar-and-vector-line-integrals-along-piecewise-c1-paths`, `lem-integral-elementary-bounds`; removed: `ex-line-segment-scalar-and-vector-line-integrals`
- `ex-a-vector-line-integral-counts-multiple-traversals` — added: `def-scalar-and-vector-line-integrals-along-piecewise-c1-paths`, `thm-sine-and-cosine-derivatives`, `cor-trigonometric-parity-and-pythagorean-identity`, `lem-integral-elementary-bounds`; removed: `cex-vortex-field-is-closed-but-not-exact-on-the-punctured-plane`

### Rules

- Write **only** `research/frontier-12-batch-4.plan-reconciliation.json`.
- Do **not** edit `items/`, `library/`, `plan-spec.json`, the audit receipt, or
  any other batch's files. The orchestrator merges the seven files into
  `research/frontier-12-audit-coverage.json`.
- Do **not** change any item's `deps` to make it match the plan. The authored
  deps are correct; the record of *why* is what is missing.
- Report the count you wrote and anything you could not explain.
