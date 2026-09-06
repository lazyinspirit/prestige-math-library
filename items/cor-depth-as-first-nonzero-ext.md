---
id: cor-depth-as-first-nonzero-ext
title: Depth as the first nonzero Ext degree
kind: corollary
status: draft
origin: pipeline
deps: [def-depth-with-respect-to-an-ideal, lem-maximal-regular-sequences-have-common-length-ext]
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

Let $R$ be Noetherian, let $M$ be finite, and let $I$ lie in the Jacobson
radical. Then
$$\operatorname{depth}_I(M)= \inf\{i\ge0:\operatorname{Ext}^i_R(R/I,M)\ne0\},$$
where the infimum of the empty set is $\infty$.

## Facts & Assumptions

**Given:** The ring, module, and ideal in the statement.

## Proof

**Proof technique:** direct.

1.1 If $IM=M$, depth is infinite by definition. In this case $R/I$ and $M$ have disjoint support, so all the displayed Ext groups vanish; this includes $M=0$. [given, algebra]

2.1 If $IM\ne M$, maximal regular sequences exist and the preceding lemma identifies their common length with the first nonzero Ext degree. The definition of depth gives the same length. [step 1.1] ∎
