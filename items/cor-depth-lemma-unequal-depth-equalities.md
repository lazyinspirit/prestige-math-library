---
id: cor-depth-lemma-unequal-depth-equalities
title: Unequal-depth equalities in a short exact sequence
kind: corollary
status: draft
origin: pipeline
deps: [thm-depth-lemma]
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

In the setting of `thm-depth-lemma`, the following implications hold:
$$\begin{array}{lll} a<c\Rightarrow b=a, & a>c+1\Rightarrow b=c,\\ a<b\Rightarrow c=a-1, & a>b\Rightarrow c=b,\\ b<c\Rightarrow a=b, & b>c\Rightarrow a=c+1. \end{array}$$
Only implications whose strict inequality is meaningful for the depth
conventions are asserted.

## Facts & Assumptions

**Given:** write $a,b,c$ for the depths of $A,B,C$ in the short exact sequence.

## Proof

**Proof technique:** direct.

1.1 The first Depth Lemma inequality and either of the other two give $a<c\Rightarrow b=a$ and $a>c+1\Rightarrow b=c$. Cyclically applying the same comparison to the remaining inequalities gives the other four displayed implications. [given]

2.1 For example, if $a<c$, then $b\ge a$ while $a\ge\min\{b,c+1\}$ forces $a\ge b$; hence $b=a$. If $a>c+1$, then $c\ge\min\{a-1,b\}$ and $a-1>c$ force $c\ge b$, while $b\ge c$; hence $b=c$. If $a<b$, then $c\ge a-1$, while $a\ge\min\{b,c+1\}$ forces $a\ge c+1$; hence $c=a-1$. The other three cases are the same comparisons. [step 1.1, algebra] ∎
