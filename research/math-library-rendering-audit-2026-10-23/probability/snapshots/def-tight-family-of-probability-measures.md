---
id: def-tight-family-of-probability-measures
kind: definition
title: Tight family of probability measures
deps: ["def-metric-compactness", "def-probability-measure"]
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: van Gaans, Definition 5.1, p. 14
      url: https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf
provenance:
  statement: ai-altered
  proof: not-applicable
status: published
origin: pipeline
---

## Definition

A family $\mathcal A$ of Borel probabilities on a metric space S is **tight** if, for every $\varepsilon>0$, there is a compact $K\subseteq S$ such that $\mu(S\setminus K)<\varepsilon$ for every $\mu\in\mathcal A$. One K must work for the whole family. Compactness is [[def-metric-compactness]]. The empty family is tight, witnessed by the empty compact set.
