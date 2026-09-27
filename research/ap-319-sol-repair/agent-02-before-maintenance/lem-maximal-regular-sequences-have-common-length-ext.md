---
id: lem-maximal-regular-sequences-have-common-length-ext
title: Maximal regular sequences have a common Ext length
kind: lemma
status: published
origin: pipeline
deps: [lem-maximal-regular-sequence-stops-at-associated-prime, lem-ext-depth-zero-identifies-annihilated-elements, lem-ext-depth-shift-across-a-regular-element]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://websites.umich.edu/~mmustata/CAnotes.pdf
verification:
  audited: 2026-09-07
  precheck: pass
---
## Statement

Let $R$ be Noetherian, let $M\ne0$ be finite, and let $I$ lie in the Jacobson
radical with $IM\ne M$. Every maximal $M$-regular sequence in $I$ has length
$$\min\{i\ge0:\operatorname{Ext}^i_R(R/I,M)\ne0\},$$
so all such sequences have the same length.

## Facts & Assumptions

**Given:** The data in the statement and a maximal regular sequence $\mathbf x$ of length $r$.

## Proof

**Proof technique:** direct.

1.1 Put $Q=M/(\mathbf x)M$. Regularity makes $Q\ne0$, and Nakayama gives $IQ\ne Q$. Maximality and the stopping criterion yield $(0:_QI)\ne0$, hence $\operatorname{Ext}^0_R(R/I,Q)\ne0$. [given]

2.1 Iterating the Ext shift backwards along the $r$ quotients shows that $\operatorname{Ext}^i_R(R/I,M)=0$ for $i<r$ and is nonzero for $i=r$. Therefore the displayed minimum is $r$, independently of the sequence. [step 1.1, algebra] ∎
