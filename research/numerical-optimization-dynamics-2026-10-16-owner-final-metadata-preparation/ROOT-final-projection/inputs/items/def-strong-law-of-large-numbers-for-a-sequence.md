---
id: def-strong-law-of-large-numbers-for-a-sequence
kind: definition
title: Strong law of large numbers for a sequence
deps: ["def-partial-sums-and-sample-means", "def-almost-sure-convergence-of-random-variables", "def-expectation-of-a-nonnegative-or-integrable-random-variable"]
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Durrett, §§2.4–2.5, pp. 76–87
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
provenance:
  statement: ai-altered
  proof: not-applicable
status: published
origin: pipeline
---

## Definition

Let $(X_n)_{n\ge1}$ be integrable real random variables on one probability space, with $S_n=\sum_{k=1}^nX_k$. The **centered strong law** means $(S_n-\mathbb ES_n)/n\to0$ almost surely. If the variables have a common law, their finite expectations equal $\mu=\mathbb EX_1$, so this is equivalent to $S_n/n\to\mu$ almost surely. Independence is not part of this definition.
