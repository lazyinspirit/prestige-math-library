---
id: lem-depth-quotient-by-regular-element
title: Depth drops by one after quotienting by a regular element
kind: lemma
status: draft
origin: pipeline
deps: [def-regular-sequence-on-a-module, cor-depth-as-first-nonzero-ext, lem-ext-depth-shift-across-a-regular-element]
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

Let $R$ be Noetherian, let $M$ be finite, let $I$ lie in the Jacobson radical,
and let $x\in I$ be $M$-regular. Then
$$\operatorname{depth}_I(M/xM)=\operatorname{depth}_I(M)-1.$$

## Facts & Assumptions

**Given:** The data and regular element in the statement.

## Proof

**Proof technique:** direct.

1.1 Regularity includes $M/xM\ne0$. Since $I$ lies in the Jacobson radical, Nakayama excludes $IM=M$ and $I(M/xM)=M/xM$; both depths are finite. [given]

2.1 The Ext shift lowers the first nonzero degree by one. Applying the Ext characterization on both sides yields the formula. [step 1.1] ∎
