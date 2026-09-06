---
id: fs-normality-implies-algorithmic-randomness
kind: false-statement
title: "False: normality implies algorithmic randomness"
status: published
origin: session
deps: [def-martin-lof-test-and-random-sequence]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "A zoo of computable binary normal sequences, The Peculiarity of BinChamp"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3511067/"
---
## Statement
Every binary-normal sequence is Martin-Löf random.
## Refutation
**Given:** the computable binary Champernowne sequence $B$, which is binary normal.

1.1 For each $n$, enumerate the single cylinder $[B\upharpoonright n]$ as $U_n$. Computability of $B$ makes $(U_n)$ uniformly effectively open and its measure is $2^{-n}$. [given]

2.1 Thus $(U_n)$ is a Martin-Löf test and $B\in\bigcap_nU_n$, so $B$ is not Martin-Löf random by [[def-martin-lof-test-and-random-sequence]] despite normality. [step 1.1, given] ∎
