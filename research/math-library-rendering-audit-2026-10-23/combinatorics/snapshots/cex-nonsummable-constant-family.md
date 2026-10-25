---
id: cex-nonsummable-constant-family
kind: counterexample
title: "An infinite family of constant series $1$ is not summable in the formal topology"
status: published
origin: session
authorship: ai-generated
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-summable-family-of-formal-series, def-formal-power-series-and-coefficient-extraction]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Counterexample

The family $(f_i)_{i\in\mathbb N}$ with $f_i=1$ for every $i$ is not summable in $R\llbracket x\rrbracket$ for any nonzero commutative ring $R$.

## Facts & Assumptions

**Given:** The hypotheses and notation of the statement above.

[F1] A family is summable exactly when, below every degree cutoff $N$, only finitely many members have a nonzero coefficient ([[def-summable-family-of-formal-series]]).

[F2] For $f=\sum a_nx^n$, coefficient extraction is evaluation: $[x^n]f=a_n$ ([[def-formal-power-series-and-coefficient-extraction]]).

## Verification

**Proof technique:** inspect the first coefficient range.

1.1 Take $N=1$. Every index $i$ contributes the nonzero coefficient $[x^0]f_i=1$, so infinitely many family members have a nonzero coefficient below $N$. [given, F1, F2]

1.2 In contrast, the family $(x^n)_{n\ge0}$ is summable: below any fixed degree $N$, only the indices $n<N$ contribute. Its coefficientwise sum is the series with every coefficient $1$. [given, F1]

2.1 Step 1.1 violates the defining local-finiteness condition, whereas step 1.2 satisfies it. The nonzero-ring hypothesis is necessary: in the zero ring, the constant series $1=0$ and the original family is summable. [step 1.1, step 1.2, given, F1, F2] ∎
