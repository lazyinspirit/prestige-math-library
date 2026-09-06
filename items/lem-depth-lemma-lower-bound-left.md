---
id: lem-depth-lemma-lower-bound-left
title: The left lower bound in the Depth Lemma
kind: lemma
status: draft
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
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---
## Statement

Under the hypotheses of the Depth Lemma,
$$\operatorname{depth}_R(A)\ge \min\{\operatorname{depth}_R(B),\operatorname{depth}_R(C)+1\}.$$

## Facts & Assumptions

**Given:** a short exact sequence $0\to A\to B\to C\to0$ of finite modules over a Noetherian local ring $(R,\mathfrak m)$; write $a,b,c$ for their depths.

## Proof

**Proof technique:** direct.

1.1 Put $s=\min\{b,c+1\}$. At $i=0<s$, left exactness gives an injection $$\operatorname{Hom}_R(R/\mathfrak m,A)\hookrightarrow \operatorname{Hom}_R(R/\mathfrak m,B),$$ whose target is zero. For $0<i<s$, the Ext characterization gives $\operatorname{Ext}^i_R(R/\mathfrak m,B)=0$ and $\operatorname{Ext}^{i-1}_R(R/\mathfrak m,C)=0$. [given]

2.1 For each fixed $0<i<s$, choose a finite partial free resolution of $R/\mathfrak m$ through degree $i+1$. Applying its finite free terms to the short exact sequence gives the exact fragment $$\operatorname{Ext}^{i-1}_R(R/\mathfrak m,C)\longrightarrow \operatorname{Ext}^{i}_R(R/\mathfrak m,A)\longrightarrow \operatorname{Ext}^{i}_R(R/\mathfrak m,B).$$ The outer terms vanish by step 1.1. Together with the separately proved $i=0$ case, this gives vanishing for every $i<s$, so $a\ge s$. [step 1.1, algebra] ∎
