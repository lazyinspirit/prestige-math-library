---
id: cor-depth-lemma-unequal-depth-equalities
title: Unequal-depth equalities in a short exact sequence
kind: corollary
status: published
origin: pipeline
deps: [def-axiom-of-choice, thm-depth-lemma]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://websites.umich.edu/~mmustata/CAnotes.pdf
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-02-maintenance-receipts.jsonl (cor-depth-lemma-unequal-depth-equalities). No independent judge or whole-closure certification.
    delegated_by: owner
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). In the setting of `thm-depth-lemma`, the following implications hold:
$$\begin{array}{lll} a<c\Rightarrow b=a, & a>c+1\Rightarrow b=c,\\ a<b\Rightarrow c=a-1, & a>b\Rightarrow c=b,\\ b<c\Rightarrow a=b, & b>c\Rightarrow a=c+1. \end{array}$$
Only implications whose strict inequality is meaningful for the depth
conventions are asserted.

## Facts & Assumptions

**Given:** The Axiom of Choice; write $a,b,c$ for the depths of $A,B,C$ in the short exact sequence.

## Proof

**Proof technique:** direct.

1.1 The first Depth Lemma inequality and either of the other two give $a<c\Rightarrow b=a$ and $a>c+1\Rightarrow b=c$. Cyclically applying the same comparison to the remaining inequalities gives the other four displayed implications. [given]

2.1 For example, if $a<c$, then $b\ge a$ while $a\ge\min\{b,c+1\}$ forces $a\ge b$; hence $b=a$. If $a>c+1$, then $c\ge\min\{a-1,b\}$ and $a-1>c$ force $c\ge b$, while $b\ge c$; hence $b=c$. If $a<b$, then $c\ge a-1$, while $a\ge\min\{b,c+1\}$ forces $a\ge c+1$; hence $c=a-1$. The other three cases are the same comparisons. [step 1.1, algebra] ∎
