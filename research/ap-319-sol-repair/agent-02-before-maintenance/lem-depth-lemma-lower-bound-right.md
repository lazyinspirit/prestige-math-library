---
id: lem-depth-lemma-lower-bound-right
title: The right lower bound in the Depth Lemma
kind: lemma
status: published
origin: pipeline
deps: [cor-depth-as-first-nonzero-ext]
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
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---
## Statement

Under the hypotheses of the Depth Lemma,
$$\operatorname{depth}_R(C)\ge \min\{\operatorname{depth}_R(A)-1,\operatorname{depth}_R(B)\}.$$
When $\operatorname{depth}_R(A)=0$, the right side is $-1$ and the assertion
is vacuous.

## Facts & Assumptions

**Given:** a short exact sequence $0\to A\to B\to C\to0$ of finite modules over a Noetherian local ring $(R,\mathfrak m)$; write $a,b,c$ for their depths.

## Proof

**Proof technique:** direct.

1.1 If $a=0$ there is nothing to prove. Otherwise put $s=\min\{a-1,b\}$. For every $i<s$, the Ext characterization gives $\operatorname{Ext}^i_R(R/\mathfrak m,B)=0$ and $\operatorname{Ext}^{i+1}_R(R/\mathfrak m,A)=0$. [given]

2.1 For each fixed $i<s$, a finite partial free resolution of $R/\mathfrak m$ through degree $i+2$ gives the exact fragment $$\operatorname{Ext}^{i}_R(R/\mathfrak m,B)\longrightarrow \operatorname{Ext}^{i}_R(R/\mathfrak m,C)\longrightarrow \operatorname{Ext}^{i+1}_R(R/\mathfrak m,A).$$ The outer terms vanish by step 1.1. Thus the middle term vanishes for every $i<s$, and $c\ge s$. The construction is finite for each $i$ and needs no choice principle. [step 1.1, algebra] ∎
