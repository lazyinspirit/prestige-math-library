---
id: def-convergence-in-probability
kind: definition
title: "Convergence in probability"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-convergence-in-measure, def-probability-measure, def-random-element-and-real-random-variable]
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Section 2.2"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Definition

For real random variables $(X_n)$ and $X$ on one probability space, write
$X_n\to X$ **in probability** when, for every $\varepsilon>0$,
$$\mathbb P(|X_n-X|>\varepsilon)\longrightarrow0.$$
This is precisely [[def-convergence-in-measure]] for the probability measure.
