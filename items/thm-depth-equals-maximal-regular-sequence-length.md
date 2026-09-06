---
id: thm-depth-equals-maximal-regular-sequence-length
title: Depth equals the maximal regular-sequence length
kind: theorem
status: draft
origin: pipeline
deps: [def-depth-with-respect-to-an-ideal, cor-depth-as-first-nonzero-ext, lem-maximal-regular-sequences-have-common-length-ext]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://websites.umich.edu/~mmustata/CAnotes.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---
## Statement

Let $R$ be Noetherian, $M\ne0$ finite, and $I$ an ideal contained in the
Jacobson radical with $IM\ne M$. Then every maximal $M$-regular sequence in
$I$ has length $\operatorname{depth}_I(M)$, and this common integer is the
first degree in which $\operatorname{Ext}^*_R(R/I,M)$ is nonzero.

## Facts & Assumptions

**Given:** The hypotheses in the statement.

## Proof

**Proof technique:** direct.

1.1 By `lem-maximal-regular-sequences-have-common-length-ext`, the length of every maximal regular sequence is the first nonzero Ext degree. [given]

2.1 The Ext characterization identifies that same degree with $\operatorname{depth}_I(M)$, proving both assertions. [step 1.1] ∎
