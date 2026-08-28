# frontier-22 - Alpha step 4 splice-refusal adjudication

Session date: Friday, August 28, 2026.

Inputs read:

- `research/frontier-22-alpha-step4.task.md`
- `research/frontier-22-splice-refusals.json`
- `research/plan-spec.json`
- `research/frontier-22-batch-4.pages.json`
- `research/frontier-22-batch-6.pages.json`
- `research/frontier-22-batch-7.pages.json`
- the related step-3 review/notes artifacts for batches `4`, `6`, and `7`

Validator note: the current `node tools/validate-plan.mjs research/plan-spec.json`
run on the pre-edit plan did not emit `[undeclared-prereq]` rows for these three
pages, because their new item graphs still lived only in the batch scaffolds.
The authoritative step-4 refusal artifact naming the disputed edges is
`research/frontier-22-splice-refusals.json`.

## Edge dispositions

| batch | edge | evidence | disposition | edit | validation result | blocker |
|---|---|---|---|---|---|---|
| `4` | `algebraic-and-spectral-graph-theory -> linear-recurrences-and-rational-generating-functions` | In `research/frontier-22-batch-4.pages.json`, `cor-trace-of-adjacency-power-counts-closed-walks` depends on `def-trace-of-a-square-matrix-over-a-commutative-ring`. That item is homed on the earlier A page `linear-recurrences-and-rational-generating-functions` at order `195`. The pre-edit page-`227` closure from `block-designs-and-finite-projective-planes`, `the-spectral-theorem-and-singular-value-decomposition`, `determinants-of-matrices-over-a-commutative-ring`, and `trees-forests-and-spanning-trees` did not reach page `195`. | Genuine backward prerequisite. | Added `linear-recurrences-and-rational-generating-functions` to the `requires` list for page `algebraic-and-spectral-graph-theory` in `research/plan-spec.json`. | Post-edit `validate-plan` lists page `227` with the new `requires` edge present. No step-4 refusal remains for this edge. | none |
| `6` | `normal-families-and-montels-theorem -> ascoli-arzela` | In `research/frontier-22-batch-6.pages.json`, both `thm-montel-theorem-for-holomorphic-functions` and `thm-chordal-arzela-ascoli-criterion-for-meromorphic-families` depend on `cor-ascoli-arzela-for-compact-metric-domains`. That item is homed on the earlier A page `ascoli-arzela` at order `285`. The pre-edit page-`331` closure from `harmonic-functions-and-the-poisson-integral`, `the-riemann-sphere-and-mobius-transformations`, `the-argument-principle-and-rouche`, and `approximation-and-compactness-in-ck` did not reach page `285`. | Genuine backward prerequisite. | Added `ascoli-arzela` to the `requires` list for page `normal-families-and-montels-theorem` in `research/plan-spec.json`. | Post-edit `validate-plan` lists page `331` with `ascoli-arzela` present. The page now only contributes `redundant-prereq` advisories, not a splice-refusal edge. | none |
| `7` | `holomorphic-inverse-and-weierstrass-preparation -> the-field-of-fractions-and-localisation` | In `research/frontier-22-batch-7.pages.json`, `def-holomorphic-germ-ring-and-its-maximal-ideal` and `prop-units-in-the-holomorphic-germ-ring` depend on `def-local-ring`, and `lem-gauss-lemma-over-a-ufd` depends on `def-field-of-fractions`. Those items are homed on the earlier A page `the-field-of-fractions-and-localisation` at order `53.2`. The pre-edit page-`353` closure from `holomorphic-functions-of-several-variables`, `inverse-and-implicit-function-theorems`, `the-argument-principle-and-rouche`, and `euclidean-domains-pids-and-unique-factorisation` did not reach page `53.2`. | Genuine backward prerequisite. | Added `the-field-of-fractions-and-localisation` to the `requires` list for page `holomorphic-inverse-and-weierstrass-preparation` in `research/plan-spec.json`. | Post-edit `validate-plan` lists page `353` with `the-field-of-fractions-and-localisation` present. No step-4 refusal remains for this edge. | none |
| `7` | `holomorphic-inverse-and-weierstrass-preparation -> constant-rank-submersions-and-regular-level-sets` | In `research/frontier-22-batch-7.pages.json`, `thm-holomorphic-constant-rank-theorem` depends on `thm-euclidean-constant-rank-normal-form`. That item is homed on the earlier A page `constant-rank-submersions-and-regular-level-sets` at order `288.00003`. The same pre-edit page-`353` closure did not reach page `288.00003`. | Genuine backward prerequisite. | Added `constant-rank-submersions-and-regular-level-sets` to the `requires` list for page `holomorphic-inverse-and-weierstrass-preparation` in `research/plan-spec.json`. | Post-edit `validate-plan` lists page `353` with `constant-rank-submersions-and-regular-level-sets` present. The remaining validator issue is outside this edge. | none |

No refused edge was a forward prerequisite, a reading-order change, a new page,
or an `-examples`-page dependency. No batch scaffold dependency was removed.

## Validation

Command run:

```bash
node tools/validate-plan.mjs research/plan-spec.json
```

Result on the post-edit bytes: `FAIL` (exit `1`).

Relevant outcome:

- The step-4 refusal edges are now carried in `research/plan-spec.json`, so
  there is no remaining splice-refusal action for batches `4`, `6`, or `7`.
- The command still emits repository-wide `redundant-prereq` advisories.
- The blocking error is unrelated to this dispatch:
  `[intra-order] subobject-lattices-generators-and-the-grothendieck-axioms: thm-the-cancellation-and-epimorphism-descriptions-of-a-generator-agree depends on def-the-axioms-ab3-and-ab3-star, which appears LATER on the same page`.

## Blocker

Step-4 splice-refusal adjudication for the assigned edges is complete. The only
remaining blocker from the required validator run is the unrelated page-local
ordering defect on `subobject-lattices-generators-and-the-grothendieck-axioms`,
which is outside the scope of this dispatch.
