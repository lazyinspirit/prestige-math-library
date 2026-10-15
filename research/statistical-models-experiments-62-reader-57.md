# Step 3a reader report — batch 57

Run: `statistical-models-experiments-62`  
Batch: `57`

## Opened inventory

- `research/statistical-models-experiments-62-batch-57.pages.json`
- A page: `library/statistical-models-and-experiments/reproducibility-replication-and-transparent-reporting.md`
- Supplier item: `items/def-computational-reproducibility-replicability-and-transparent-reporting.md` (no item dependencies)
- B page: `library/statistical-models-and-experiments/reproducibility-replication-and-transparent-reporting-examples.md`
- Consumer item: `items/ex-transparent-analysis-plan-and-reproduction.md` (depends on the definition above)
- Proof contract: `research/statistical-models-experiments-62-batch-57.proof-contracts.json`

Items were reviewed in dependency order. The active run status reported Step 3a reader coverage incomplete, including batch 57, and no worker currently running.

## Review

The definition's terminology matches the National Academies' stated 2019 convention. Conclusion 3-1 defines computational reproducibility using the same input data, computational steps, methods and code, and analysis conditions; it defines replicability across studies addressing the same question with each study's own data, with consistency assessed in light of uncertainty and methodological differences (Chapter 3, printed pp. 45–46). The discussion of generalizability distinguishes other contexts or populations (printed p. 46). Box 3-2 covers input-data curation and explains that cleaning and grouping choices can alter analyses of the same raw data; the transparency discussion specifies reporting data preparation, planned and unplanned analyses, exploratory or confirmatory status, and uncertainty (printed pp. 53–54). Finding 3-1 expressly cautions that rigorous, correct, transparent work may still fail to replicate (printed p. 54). The cited *Good enough practices in scientific computing* supports preserving raw and intermediate data and documenting processing, and cautions against publicly sharing legally restricted data (sections “Data management” and “Inadvertent sharing”).

Sources opened:

- National Academies of Sciences, Engineering, and Medicine, [*Reproducibility and Replicability in Science*, Chapter 3](https://www.nationalacademies.org/read/25303/chapter/6), especially Conclusion 3-1 (printed pp. 45–46), Box 3-2, and Finding 3-1 (printed pp. 53–54).
- Wilson et al., [“Good enough practices in scientific computing”](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1005510), especially “Data management” and “Inadvertent sharing.”

The example's stated assumptions give nonempty groups and unweighted arithmetic means. Its calculations are correct: Study 1 at cut point 20 gives $27/2-21/2=3$; changing the cut point to 18 gives $38/3-10=8/3$; and Study 2 at cut point 20 gives $13-19/2=7/2$. Reapplying the fixed Study 1 table and calculation yields the same value, and the text confines that illustration to the computation rather than the correctness of the grouping. The two studies use their own observations and address the same stated age-group question, so “replication attempt” is appropriate; the example does not assert consistency and explicitly notes that no uncertainty assessment or consistency criterion is supplied. The synthetic-data, exclusions, exploratory-analysis, and no-causal-or-inferential-claim qualifications are consistent with the example and calculations.

The batch proof contract's citation facts and derivations correspond to the current item text. Its boundary notes are consistent with the declared group means and the explicitly listed data. The item/page dependencies and page summaries match the assigned inventory.

## Edits and defects

- Edits: none; no confirmed defect was found in the assigned items or A-page prose.
- Defects not editable: none.
- Blocker: none.

## Page verdicts

- `reproducibility-replication-and-transparent-reporting` (A): pass. The summary accurately states the adopted distinction and avoids promising correctness or replication.
- `reproducibility-replication-and-transparent-reporting-examples` (B): pass. The summary matches the example and makes no consistency claim about its study estimates.

No item was changed, so item reflow, precheck, and the final proof-layout command for changed paths were not applicable.
