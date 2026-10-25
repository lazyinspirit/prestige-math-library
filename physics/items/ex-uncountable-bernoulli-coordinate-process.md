---
id: ex-uncountable-bernoulli-coordinate-process
kind: example
title: "An uncountable Bernoulli coordinate process"
status: published
origin: pipeline
deps: [thm-kolmogorov-extension-for-standard-borel-coordinate-spaces, cor-canonical-process-realizes-consistent-finite-dimensional-laws]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Shalizi, Building Processes, Theorem 29"
      url: "https://www.stat.cmu.edu/~cshalizi/754/notes/lecture-02.pdf"
---

## Example

Let $I$ be uncountable and give every finite $F\subseteq I$ the uniform law on $\{0,1\}^F$. Assuming AC, the extension theorem produces a probability measure on the cylinder sigma-algebra of $\{0,1\}^I$, and its coordinates are independent fair bits.

## Verification

**Given:** An uncountable set $I$ and the stated finite uniform laws.

1.1 The finite uniform laws are compatible under deletion of coordinates, so the standard-Borel extension theorem applies. [given]

2.1 The canonical-process corollary identifies each prescribed finite joint law. Thus finite coordinate events are measurable and have their product probabilities; no assertion is made about arbitrary path events. [step 1.1] ∎
