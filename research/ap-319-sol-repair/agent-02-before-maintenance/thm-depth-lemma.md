---
id: thm-depth-lemma
title: The three Depth Lemma inequalities
kind: theorem
status: published
origin: pipeline
deps: [lem-depth-lemma-lower-bound-middle, lem-depth-lemma-lower-bound-left, lem-depth-lemma-lower-bound-right]
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

Let $(R,\mathfrak m)$ be a Noetherian local ring and
$0\to A\to B\to C\to0$ a short exact sequence of finite $R$-modules. With
$a=\operatorname{depth}_R(A)$, $b=\operatorname{depth}_R(B)$, and
$c=\operatorname{depth}_R(C)$,
$$b\ge\min\{a,c\},\qquad a\ge\min\{b,c+1\},\qquad c\ge\min\{a-1,b\}.$$
The last inequality is vacuous when $a=0$.

## Facts & Assumptions

**Given:** the displayed exact sequence and depth notation.

## Proof

**Proof technique:** direct.

1.1 The middle, left, and right lower bounds are respectively `lem-depth-lemma-lower-bound-middle`, `lem-depth-lemma-lower-bound-left`, and `lem-depth-lemma-lower-bound-right`. [given]

2.1 Substituting $a,b,c$ into those three bounds gives the three displayed inequalities, including the one-degree shifts and the stated $a=0$ boundary. [step 1.1, algebra] ∎
