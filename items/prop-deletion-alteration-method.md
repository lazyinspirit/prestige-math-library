---
id: prop-deletion-alteration-method
kind: proposition
title: "The deletion-alteration method converts an expected defect count into a deterministic lower bound"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-linearity-of-expectation, thm-expectation-monotonicity-and-bounds]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Matousek and J. Vondrak, The Probabilistic Method, Chapter 4"
      url: "https://www.cs.cmu.edu/~15850/handouts/matousek-vondrak-prob-ln.pdf"
    - title: "Y. Zhao, MIT 18.218 Probabilistic Method in Combinatorics, Section 6.3"
      url: "https://yufeizhao.com/pm/sp19/pmnotes.pdf"
pipeline_run: null
---

## Statement

Suppose a finite random object has integer size $Y$ and comes with a finite listed collection of $X$ defects. If a deterministic repair deletes at most one unit for every listed defect and produces an admissible object, then some repaired outcome has size at least
$$\mathbb E[Y]-\mathbb E[X].$$
Repeated or redundant listed defects are allowed; they can only weaken the lower bound.

## Facts & Assumptions

**Given:** Integer-valued random variables $X,Y$ and a repair as in the Statement.

[L1] Expectation is linear without independence, so $\mathbb E[Y-X]=\mathbb E[Y]-\mathbb E[X]$ ([[thm-linearity-of-expectation]]).

[L2] Some outcome of a finite random variable has value at least its expectation ([[thm-expectation-monotonicity-and-bounds]]).

## Proof

**Proof technique:** direct.

1.1 On every outcome, deleting at most one unit per listed defect leaves an admissible object of size at least $Y-X$. [given]

1.2 By [L2], there is an outcome with $Y-X\ge\mathbb E[Y-X]$. [L2]

2.1 Repair that outcome. Its size is at least $\mathbb E[Y-X]=\mathbb E[Y]-\mathbb E[X]$ by [L1]. Overlisting defects increases $X$ and therefore cannot invalidate the lower bound. [step 1.1, step 1.2, L1] ∎
