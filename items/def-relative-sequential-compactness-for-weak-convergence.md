---
id: def-relative-sequential-compactness-for-weak-convergence
kind: definition
title: Relative sequential compactness for weak convergence
deps: ["def-weak-convergence-of-borel-probability-measures"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: van Gaans, Theorem 5.2, p. 14 (closure of the family)
      url: https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf
provenance:
  statement: ai-altered
  proof: not-applicable
status: draft
origin: pipeline
---

## Definition

A family $\mathcal A$ of Borel probabilities on a metric space is **relatively sequentially compact for weak convergence** if every sequence from $\mathcal A$ has a subsequence converging weakly to a Borel probability on the same state space. The limit need not belong to $\mathcal A$. Weak convergence means [[def-weak-convergence-of-borel-probability-measures]].
