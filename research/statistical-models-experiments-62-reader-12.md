# Step 3a reader report — batch 12

Run: `statistical-models-experiments-62`  
Role: reader  
Scope: batch `12`

## Inventory opened

The assigned manifest was `research/statistical-models-experiments-62-batch-12.pages.json`. Both listed pages and all seven listed items were opened and reviewed.

| Page | Kind | Path | Reader assessment |
|---|---|---|---|
| `randomized-treatment-assignment-and-sharp-null-tests` | A | `library/statistical-models-and-experiments/randomized-treatment-assignment-and-sharp-null-tests.md` | Summary matches the assignment model and sharp-null result after the theorem repair below. |
| `randomized-treatment-assignment-and-sharp-null-tests-examples` | B | `library/statistical-models-and-experiments/randomized-treatment-assignment-and-sharp-null-tests-examples.md` | Summary matches both examples; no page-prose defect found. |

Assigned items were checked in dependency order:

1. `lem-finite-weighted-upper-tail-pvalues-and-randomized-ties`
2. `def-finite-randomized-treatment-assignment-model`
3. `def-fisher-sharp-null-and-predeclared-test-orderings`
4. `def-finite-population-average-treatment-effect-and-weak-null`
5. `thm-fisher-sharp-null-randomization-pvalues-are-valid`
6. `cex-zero-average-treatment-effect-does-not-imply-fisher-sharp-null`
7. `ex-unequal-weighted-two-sided-randomization-test-with-ties`

The supplier context opened to verify claims and measurability included:
`def-finite-probability-space-and-event`, `def-sigma-algebra`,
`def-measurable-space`, `def-measurable-function-between-measurable-spaces`,
`def-random-element-and-real-random-variable`,
`def-law-or-distribution-of-a-random-element`,
`lem-law-of-a-random-element-is-a-probability-measure`,
`def-statistical-experiment`, `def-scientific-statistical-model-contract`
(current-run draft supplier), `def-statistic-and-estimator`, `def-p-value`,
`def-probability-measure`, and `def-borel-sigma-algebra`. I also opened
`thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique` while
checking the theorem's product extension; the repair below instead constructs
the needed extension directly from the finite assignment law.

The canonical repository instructions, `briefs/reader.md`, the batch manifest,
and the referenced source sections were also consulted.

## Repairs and evidence

### Finite product extension in the sharp-null theorem

In `thm-fisher-sharp-null-randomization-pvalues-are-valid`, the original
statement invoked `Pθ ⊗ λ` and used an independent uniform coordinate without
establishing the extension in its dependency closure. The theorem now defines
the extension on `2^X ⊗ B([0,1])` by a finite weighted sum of the Borel measures
of the sections over the assignment outcomes. Proof step 1.2 verifies Borel
sections, countable additivity and total mass one, then gives the rectangle
formula. That formula supplies the data marginal and makes the uniform
coordinate independent of the data and assignment. Step 2.1 checks
measurability and the `[0,1]` range of both p-value formulas; step 3.1 applies
the weighted-rank lemma. This closes the product-extension prerequisite
without appealing to an unlisted general product-measure theorem.

The theorem's proof contract in
`research/statistical-models-experiments-62-batch-12.proof-contracts.json` was
updated for the new step 1.2 and the resulting stratified step references,
including its boundary evidence. The theorem had no `verification.judge`
record to remove.

### Source-location corrections

The Oehlert references in the assigned weighted-tail lemma, assignment-model
definition, sharp-null definition and theorem had pointed to Chapter 13,
§13.2.3. Oehlert's table of contents identifies that location as “How well did
the blocking work?” (book p. 322); it is not the randomization-inference
section. I corrected those four references to Chapter 2, §2.4, “Randomization
for Inference.” In §2.4, Oehlert defines a randomization p-value as the
probability, under the randomization distribution, of a statistic at least as
extreme as observed (book pp. 22–24; [source](https://users.stat.umn.edu/~gary/book/fcdae.pdf)).

Holmes and Huber, Chapter 13, discusses randomization as an experimental
design strategy (their §13.4.4, especially the paragraph on randomizing to
average out nuisance factors), but it does not supply the sharp-null p-value
or randomized-tie result. I narrowed the assignment-model reference to
§§13.2 and 13.4.4 and removed that reference from the sharp-null, weighted-tail
and theorem items. The [chapter](https://www.huber.embl.de/msmb/13-chap.html)
was checked directly. Balakrishnan's Lecture 28 §28.5 remains cited for
Fisher's sharp-null randomization test; pp. 4–5 describe imputing outcomes
under the sharp null and counting assignments at least as extreme as the
observed statistic ([PDF](https://www.stat.cmu.edu/~siva/teaching/705/lec28.pdf)).
The weak-null definition's citation to Lecture 28 §§28.2–28.3 was confirmed:
§28.3 gives the finite-population average of unit potential-outcome
differences.

## Other reviewed claims

- The weighted-tail lemma correctly handles zero-weight assignments, tied
  score levels and both endpoints of `[0,1]`.
- The assignment model explicitly fixes units and schedules, retains all
  allowed assignments (including zero-probability ones), and does not assume
  no interference. Its finite full-measure set and stated conditioning
  convention are correct.
- The sharp-null and weak-null definitions preserve the distinction between
  unitwise zero effects and a zero finite-population average.
- The counterexample's false claim is correctly placed under “Statement
  refuted”; its two-unit schedule has effects `+1` and `-1`, average zero, and
  violates the Fisher sharp null.
- In the unequal-weight example the contrasts are `-3/2, 0, 3/2`, giving
  inclusive p-values `2/3, 1, 2/3`; the strict and tied masses yield an exactly
  uniform randomized p-value.
- Both page summaries reflect their assigned content. No page-prose edit was
  needed.

## Validation

Reflow and precheck were run for each edited item. The lemma and theorem
prechecks passed; the two definitions correctly returned zero proof checks
with no failures. The theorem's first precheck requested canonical proof-phase
stratification; the helper did not apply it, so I adopted the proposed
numbering and references manually, then reran reflow and precheck successfully.

Final layout command:

```text
node tools/proof-layout.mjs items/lem-finite-weighted-upper-tail-pvalues-and-randomized-ties.md items/def-finite-randomized-treatment-assignment-model.md items/def-fisher-sharp-null-and-predeclared-test-orderings.md items/thm-fisher-sharp-null-randomization-pvalues-are-valid.md
```

Result: `4 items, 9 steps, 0 defects`.

## Uneditable defects and blockers

No uneditable defects found. No blocker remains. The supplier contract and
published prerequisite claims checked for this batch had no defect requiring
an out-of-scope finding.

## Page verdicts

- **A — `randomized-treatment-assignment-and-sharp-null-tests`:** coherent
  after the theorem repair and citation corrections; the summary states the
  actual design-based scope and the weak-null limitation.
- **B — `randomized-treatment-assignment-and-sharp-null-tests-examples`:**
  both examples and the page summary are mathematically consistent.

Coverage limitation: supplier items were examined to the extent needed to
verify this batch; unrelated prerequisite branches were not audited.
