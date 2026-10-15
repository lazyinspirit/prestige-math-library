# Step 3a reader report — batch 52

Run: `statistical-models-experiments-62`  
Reader label: `reader-52`

## Verdicts

- **A page `valid-p-values-bonferroni-and-simultaneous-coverage`:** The page summary and its three assigned items accurately describe the claims. The mathematics and citations checked out. The page depends on `thm-p-value-superuniformity`, whose published verification record is incomplete under the current schema; see the uneditable finding below.
- **B page `valid-p-values-bonferroni-and-simultaneous-coverage-examples`:** Both examples and the summary are consistent. The finite laws, null sets, coverage, FWER, and FDR calculations are correct. No defect found.

## Opened inventory

Assigned pages:

- `library/statistical-models-and-experiments/valid-p-values-bonferroni-and-simultaneous-coverage.md`
- `library/statistical-models-and-experiments/valid-p-values-bonferroni-and-simultaneous-coverage-examples.md`

Assigned items, reviewed in dependency order:

- `def-null-valid-p-value-and-fwer-fdr`
- `thm-bonferroni-simultaneous-coverage`
- `thm-bonferroni-familywise-error-control`
- `ex-bonferroni-simultaneous-coverage-with-dependent-intervals`
- `ex-discrete-superuniform-p-value-and-global-null`

Direct item suppliers opened:

- `def-statistical-experiment`
- `def-p-value`
- `def-expectation-of-a-nonnegative-or-integrable-random-variable`
- `def-confidence-set-and-coverage`
- `lem-probability-measure-basic-identities`
- `thm-p-value-superuniformity`

Page prerequisites opened:

- `library/mathematical-statistics/finite-sample-tests-neyman-pearson-and-valid-p-values.md`
- `library/mathematical-statistics/confidence-sets-pivots-and-test-inversion.md`
- `library/probability/probability-spaces-random-variables-and-expectation.md`

Also opened `briefs/reader.md`, `research/statistical-models-experiments-62-batch-52.pages.json`, and `research/statistical-models-experiments-62-batch-52.proof-contracts.json`. Citation checks used Goeman and Solari, §3, Eqs. (11)–(13) (https://arxiv.org/pdf/1211.3313); Fithian, Lecture 26, cited PDF pages 2–4 and 9–11 (https://www.stat.berkeley.edu/~wfithian/courses/stat210a/lectures/lecture26-F21.pdf); and Gregory, Lecture 10, cited PDF pages 17–20 (https://people.stat.sc.edu/gregorkb/STAT_713_sp_2023/STAT_713_Lec_10_slides_annotated.pdf). The cited passages support the validity, union-bound, and simultaneous-coverage principles used here.

## Mathematical review

- The null-valid p-value definition preserves the pointwise superuniform condition for every parameter in the corresponding null, including the vacuous empty-null case. The FWER/FDR definitions use measurable rejection events and a bounded FDP, so the stated expectation is defined.
- The simultaneous-coverage proof constructs full-parameter confidence sets from the coordinate procedures. Their membership sections are the assumed measurable events. Complementation and finite subadditivity then give the stated bound without an independence assumption.
- The FWER proof applies superuniformity at `alpha/m` to each true null, identifies the familywise error event with the union of those rejection events, and applies finite subadditivity. It handles the empty true-null set and the endpoints of `alpha` correctly.
- In the dependent-interval example, each membership section is `[eta, eta+9/10]`; exactly nine of the ten support points cover the true parameter, and the two coverage events coincide.
- In the discrete example, each null p-value is uniform on `{1/4,1/2,3/4,1}` under its null, with CDF `floor(4u)/4 <= u`. The global-null FWER and FDR are both `1/4`; under the mixed configuration, FWER is `1/4` and FDR is `1/8`.
- The A-page summary matches the three item claims and correctly cautions that validity must be established under the stated sampling laws and that no data-dependent family-selection guarantee is proved. The B-page summary matches its two examples.
- The opened source passages match the cited mathematical principles. No citation inaccurately states the source's result or locator.

## Uneditable finding

`thm-p-value-superuniformity` is a published theorem with a proof and is a direct dependency of assigned item `thm-bonferroni-familywise-error-control`. Its frontmatter has only `verification.judge`; it has neither `verification.audited` nor `verification.verified`. `SCHEMA.md` requires one of those records for a published proved-here item and says a judge stamp alone does not meet the publication check. The proof's pointwise superuniformity argument was independently checked and is sound, but this publication-evidence defect is outside this reader's edit scope. An owner audit or a valid delegated verification record for the theorem is needed to close it.

## Edits, checks, and limitations

No assigned item or A-page prose required repair; no files were edited. Therefore no item reflow, precheck, or proof-layout command was required. The report and findings JSON are the only files created for this dispatch.

The review covered the assigned carriers, their direct suppliers used in the arguments, and the three page prerequisites. It did not re-audit the full transitive foundational dependency proofs of those suppliers. No other mathematical, citation, or page-summary defect was found in the reviewed scope.

Blocker: the missing publication verification record for `thm-p-value-superuniformity`, as reported above. No worker was running when the run status was checked.
