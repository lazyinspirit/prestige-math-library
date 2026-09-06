---
id: lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set
kind: lemma
title: "LCH Urysohn cutoff"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-compact-support-c-c-and-c-zero-on-an-lch-space, lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure, thm-urysohn-lemma]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Donald L. Cohn, Measure Theory, 2nd ed., Proposition 7.1.9"
      url: "https://math.bme.hu/~pitrik/2023_24_2/Measure_Cohn.pdf"
---

## Statement

Assuming Dependent Choice as in [[thm-urysohn-lemma]], if $K\subseteq U$ with
$K$ compact and $U$ open in an LCH space $X$, then some $f\in C_c(X)$ satisfies
$\mathbf1_K\le f\le\mathbf1_U$.

## Facts & Assumptions

**Given:** $K\subseteq U$, with $K$ compact and $U$ open.

[L1] Every compact set in an LCH space has an open neighbourhood $V$ with $K\subseteq V\subseteq\overline V\subseteq U$ and compact $\overline V$. ([[lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure]])

[L2] Under Dependent Choice, disjoint closed subsets of a normal space are separated by a continuous $[0,1]$-valued function. ([[thm-urysohn-lemma]])

## Proof

**Proof technique:** direct.

1.1 Choose $V$ as in [L1]. The compact Hausdorff space $\overline V$ is normal; apply [L2] there to $K$ and $\overline V\setminus V$, obtaining $h=1$ on $K$ and $h=0$ on $\overline V\setminus V$. [L1, L2, choose]

2.1 Extend $h$ by $0$ off $\overline V$. Continuity of $h$ on $\overline V$ and its vanishing on the boundary $\overline V\setminus V$ make the extension continuous; it is supported in $\overline V\subseteq U$, is $1$ on $K$, and belongs to $C_c(X)$. [step 1.1, construct] ∎
