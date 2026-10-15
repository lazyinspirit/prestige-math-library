---
id: ex-transparent-analysis-plan-and-reproduction
kind: example
title: A documented grouping change and a new-data study
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-computational-reproducibility-replicability-and-transparent-reporting
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "National Academies of Sciences, Engineering, and Medicine, Reproducibility and Replicability in Science (2019), Chapter 3: Understanding Reproducibility and Replicability"
      url: "https://www.nationalacademies.org/read/25303/chapter/6"
      locator: "Box 3-2, printed p. 53: data curation and grouping choices can change analyses of the same raw dataset."
    - title: "Greg Wilson, Jennifer Bryan, Karen Cranston, Justin Kitzes, Lex Nederbragt, and Tracy K. Teal, Good enough practices in scientific computing, PLoS Computational Biology 13(6):e1005510 (2017)"
      url: "https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1005510"
      locator: "Data management, including raw data, intermediate products, and documented processing steps."
---

## Example

All observations below are synthetic. The descriptive question is how the mean
outcome differs between the older and younger age groups. In Study 1, the
pre-specified rule assigns ages at most 20 to the younger group and ages above
20 to the older group. The reported contrast is older-group mean minus
younger-group mean.

| Study 1 record | Age | Outcome |
|---|---:|---:|
| A | 18 | 10 |
| B | 19 | 11 |
| C | 21 | 13 |
| D | 22 | 14 |

An exploratory reanalysis of the same four rows instead uses a cut point of 18:
ages at most 18 are younger, and ages above 18 are older. This changes the
grouping rule and therefore the descriptive contrast being computed.

A separate Study 2 collects new observations while addressing the same
pre-specified age-group question and using the original cut point of 20.

| Study 2 record | Age | Outcome |
|---|---:|---:|
| E | 17 | 9 |
| F | 20 | 10 |
| G | 21 | 12 |
| H | 24 | 14 |

A transparent account states both cut points, that the second Study 1 analysis
was exploratory and chosen after inspecting the first table, and that no rows
were excluded. It gives the data and arithmetic below, marks the values as
synthetic, and makes no population, causal, or inferential claim. No software is
needed for these calculations; a computational report using software would
also identify relevant software and environment details. The Study 2 estimate
alone does not decide whether the studies' results are consistent: no
uncertainty assessment or consistency criterion is supplied here.

## Facts & Assumptions

**Given:** For a nonempty finite group $G$ of records with real outcomes
$y_i$, let $\bar y_G=|G|^{-1}\sum_{i\in G}y_i$, where $|G|$ is the number of
records; the mean of an empty group is undefined. Let $\Delta$ be the older-
group mean minus the younger-group mean, with the age cut points and the two
tables as specified in the Example.

[F1] [[def-computational-reproducibility-replicability-and-transparent-reporting]]:
computational reproducibility keeps the input data, computational steps,
methods and code, and analysis conditions the same.

[F2] [[def-computational-reproducibility-replicability-and-transparent-reporting]]:
replicability compares studies answering the same scientific question using
each study's own newly obtained data.

[A1] The two tables are constructed solely for this example; all four rows in
each study are used, group means are unweighted arithmetic means, and no
uncertainty model or consistency threshold is assumed.

## Verification

1.1 Under Study 1's pre-specified cut point of 20, the younger outcomes are $10,11$ and the older outcomes are $13,14$. Their means are $21/2$ and $27/2$, respectively, so $\Delta=27/2-21/2=3$. [given, A1, algebra]

2.1 Under the alternate cut point of 18, the younger mean is $10$ and the older mean is $(11+13+14)/3=38/3$, so the contrast is $38/3-10=8/3$. The raw rows are unchanged from step 1.1, but the grouping rule and resulting contrast differ. [given, A1, step 1.1, algebra]

2.2 Reapplying the Study 1 pre-specified grouping and the same mean calculation to the same rows returns $\Delta=3$. The table, cut point, formula, row set, and manual arithmetic are unchanged, so this illustrates the same-input computation comparison in [F1]; it concerns reproduction of the calculation, not whether the grouping or conclusion is correct. [given, F1, step 1.1, algebra]

3.1 Study 2 has its own new rows. Under the same cut point of 20, the younger mean is $(9+10)/2=19/2$ and the older mean is $(12+14)/2=13$, giving $\Delta=13-19/2=7/2$. It is a replication attempt under [F2], but these point estimates alone cannot determine consistency without uncertainty and a stated comparison criterion. [given, F2, A1, algebra] ∎