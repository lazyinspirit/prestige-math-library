---
id: lem-ext-depth-shift-across-a-regular-element
title: The first nonzero Ext shifts across a regular element
kind: lemma
status: published
origin: pipeline
deps: [def-regular-sequence-on-a-module, lem-ext-depth-zero-identifies-annihilated-elements, thm-long-exact-ext-sequence-in-the-second-variable]
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

Let $R$ be Noetherian, $M$ a finite $R$-module, $I$ an ideal, and
$x\in I$ an $M$-regular element with $M/xM\ne0$. If
$$d=\min\{i:\operatorname{Ext}^i_R(R/I,M)\ne0\}<\infty,$$
then the first nonzero Ext degree for $M/xM$ is $d-1$.

## Facts & Assumptions

**Given:** The data and finite integer $d$ in the statement.

## Proof

**Proof technique:** direct.

1.1 Apply $\operatorname{Ext}_R(R/I,-)$ to $0\to M\xrightarrow{x}M\to M/xM\to0$. Multiplication by $x$ on every $\operatorname{Ext}^i_R(R/I,M)$ is zero because $x$ annihilates $R/I$. The long exact sequence therefore gives $$0\to\operatorname{Ext}^i_R(R/I,M)\to \operatorname{Ext}^i_R(R/I,M/xM)\to \operatorname{Ext}^{i+1}_R(R/I,M)\to0.$$ [given, algebra]

2.1 For $i<d-1$ both outer groups vanish, while at $i=d-1$ the right-hand group is nonzero and the left-hand group is zero. This proves the shift. [step 1.1] ∎
