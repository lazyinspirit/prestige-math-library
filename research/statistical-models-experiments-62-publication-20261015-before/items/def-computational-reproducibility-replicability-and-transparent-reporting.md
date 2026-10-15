---
id: def-computational-reproducibility-replicability-and-transparent-reporting
kind: definition
title: Computational reproducibility, replicability, and transparent reporting
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps: []
justified_by: []
aliases: []
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "National Academies of Sciences, Engineering, and Medicine, Reproducibility and Replicability in Science (2019), Chapter 3: Understanding Reproducibility and Replicability"
      url: "https://www.nationalacademies.org/read/25303/chapter/6"
      locator: "Conclusion 3-1, printed pp. 45–46; precision and method-variation discussion, printed pp. 46–52; Box 3-2, Finding 3-1, and transparency discussion, printed pp. 53–54."
    - title: "Greg Wilson, Jennifer Bryan, Karen Cranston, Justin Kitzes, Lex Nederbragt, and Tracy K. Teal, Good enough practices in scientific computing, PLoS Computational Biology 13(6):e1005510 (2017)"
      url: "https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1005510"
      locator: "Overview; Data management; Software; Project organization and Keeping track of changes; Inadvertent sharing; and Manuscripts."
---

## Definition

This page adopts the National Academies' 2019 convention. The terms
*reproducibility* and *replicability* are used differently across fields, so
the convention is stated explicitly here.

**Computational reproducibility** means obtaining consistent results using the
same input data, computational steps, methods and code, and conditions of
analysis. Input data are the records supplied to the analysis after the stated
curation steps. Analysis conditions include the computational environment when
it can affect the result.

**Replicability** means obtaining consistent results across studies aimed at
answering the same scientific question, each using its own newly obtained data.
A second study is a replication attempt; new data alone do not establish that
the results are consistent. The comparison must account for relevant
measurement or sampling uncertainty and for material differences in methods.
"Each study's own data" identifies study-specific observations; it does not
assert probabilistic independence of the datasets or require different
investigators.

**Generalizability** concerns whether findings apply consistently in other
contexts or populations. It is a separate question from reproducing a
computation or comparing studies that address the same question.

**Transparent reporting** identifies the data and code or other computational
artifacts where sharing is lawful and ethical, and otherwise states the access
restrictions or route. It records the relevant computational environment;
data collection, cleaning, grouping, exclusions, and curation; methods; analysis
decisions and when they were made; whether analyses were exploratory or
confirmatory; and the uncertainty and limitations needed to interpret the
results. These are definitions and reporting recommendations, not a theorem
guaranteeing correctness or future replication. Reproducing a computation can
repeat an error, and careful, correct, transparent work can still fail to
replicate.
