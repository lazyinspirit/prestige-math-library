---
id: lem-depth-lemma-lower-bound-middle
title: The middle lower bound in the Depth Lemma
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

Let $(R,\mathfrak m)$ be a Noetherian local ring and let
$$0\longrightarrow A\longrightarrow B\longrightarrow C\longrightarrow0$$
be a short exact sequence of finite $R$-modules. Then
$$\operatorname{depth}_R(B)\ge \min\{\operatorname{depth}_R(A),\operatorname{depth}_R(C)\}.$$

## Facts & Assumptions

**Given:** the displayed short exact sequence; write $a,b,c$ for the depths of $A,B,C$. Depth $+\infty$ has the convention fixed in `def-depth-with-respect-to-an-ideal`.

## Proof

**Proof technique:** direct.

1.1 By `cor-depth-as-first-nonzero-ext`, $\operatorname{Ext}^i_R(R/\mathfrak m,A)$ and $\operatorname{Ext}^i_R(R/\mathfrak m,C)$ vanish for every $i<\min\{a,c\}$. [given]

2.1 Fix $i<\min\{a,c\}$. A finite partial free resolution of $R/\mathfrak m$ through degree $i+1$ exists because $R$ is Noetherian. Applying its finite free terms to the short exact sequence gives the exact cohomology fragment $$\operatorname{Ext}^i_R(R/\mathfrak m,A)\longrightarrow \operatorname{Ext}^i_R(R/\mathfrak m,B)\longrightarrow \operatorname{Ext}^i_R(R/\mathfrak m,C).$$ Its outer terms vanish by step 1.1, so the middle term vanishes. This argument is finite for each $i$ and uses no choice principle. The Ext characterization now gives $b\ge\min\{a,c\}$. [step 1.1, algebra] ∎
