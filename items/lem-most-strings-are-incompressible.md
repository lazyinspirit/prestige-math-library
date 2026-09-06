---
id: lem-most-strings-are-incompressible
kind: lemma
title: "Most finite strings are incompressible"
status: draft
origin: session
deps: [def-description-machine-and-plain-kolmogorov-complexity, def-finite-probability-space-and-event]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Shen, §5"
      url: "https://arxiv.org/pdf/1504.04955"
---
## Statement
For every description machine $M$ and integers $0\le c\le n$, at most $2^{n-c}-1$ strings of length $n$ have $C_M(x)<n-c$. Under the uniform distribution on $\{0,1\}^n$, their probability is less than $2^{-c}$.
## Proof
**Given:** $0\le c\le n$ and a description machine $M$.

1.1 There are $\sum_{i<n-c}2^i=2^{n-c}-1$ programs shorter than $n-c$, and each has at most one output under [[def-description-machine-and-plain-kolmogorov-complexity]]. [given]

2.1 Therefore no more strings can have such a description; division by $2^n$ in the uniform finite probability space [[def-finite-probability-space-and-event]] gives the bound. [step 1.1, given] ∎
