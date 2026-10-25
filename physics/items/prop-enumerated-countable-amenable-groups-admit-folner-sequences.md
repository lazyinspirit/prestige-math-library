---
id: prop-enumerated-countable-amenable-groups-admit-folner-sequences
kind: proposition
title: "Enumerated countable amenable groups admit Folner sequences"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-folner-sequence, thm-folner-criterion-for-amenability]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "C. Löh, Geometric Group Theory: An Introduction (2015 course version)"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
    - title: "Cornelia Drutu and Michael Kapovich, Lectures on Geometric Group Theory"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
---

## Statement

Let $G=\{g_1,g_2,\dots\}$ be an enumerated countable amenable group. Then $G$
admits a Folner sequence.

## Facts & Assumptions

**Given:** An enumerated countable amenable group $G=\{g_1,g_2,\dots\}$.

[L1] A Folner sequence is a sequence of finite nonempty sets with vanishing relative symmetric-difference error for each fixed group element ([[def-folner-sequence]]).

[L2] Every amenable group satisfies the Folner condition ([[thm-folner-criterion-for-amenability]]).

## Proof

**Proof technique:** direct.

1.1 For each $n\ge1$, apply [L2] to the finite test set $S_n=\{g_1,\dots,g_n\}$ and the tolerance $1/n$. This gives a finite nonempty set $F_n\subseteq G$ with $|g_iF_n\triangle F_n|<|F_n|/n$ for every $i\le n$. [L2, given, choose]

2.1 Fix $i$. Once $n\ge i$, step 1.1 gives $|g_iF_n\triangle F_n|/|F_n|<1/n$, which tends to $0$. Therefore $(F_n)$ is a Folner sequence in the sense of [L1]. [L1, step 1.1] ∎
