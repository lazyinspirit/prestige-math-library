---
id: "fs-hausdorff-measure-is-countably-additive-on-all-subsets"
kind: "false-statement"
title: "Hausdorff measure is countably additive on every subset"
deps: ["thm-hausdorff-one-measure-is-lebesgue-outer-measure-on-the-line", "thm-vitali-sets-exist-under-choice-on-r-over-q", "thm-a-vitali-set-is-not-lebesgue-measurable", "def-caratheodory-measurable-set", "def-axiom-of-choice"]
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: Fremlin 264C,I; existing Vitali theorem
      url: https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
status: published
origin: "pipeline"
---

## Statement

Assume the Axiom of Choice. The assertion “$\mathcal H^s$ is countably additive on every disjoint family of arbitrary subsets of $\mathbb R^n$” is false, already for $n=s=1$.

## Facts & Assumptions

**Given:** The objects, conventions, and hypotheses in the statement above.

[F1] Under Countable Choice, $\mathcal H^1$ equals Lebesgue outer measure on every subset of the line. [[thm-hausdorff-one-measure-is-lebesgue-outer-measure-on-the-line]]

[F2] Assuming the Axiom of Choice ([[def-axiom-of-choice]]), there exists a Vitali set $V\subseteq[0,1]$. [[thm-vitali-sets-exist-under-choice-on-r-over-q]]

[F3] Carathéodory measurability of $V$ requires $\mu^*(T)=\mu^*(T\cap V)+\mu^*(T\setminus V)$ for every test set $T$. [[def-caratheodory-measurable-set]]

[F4] Assuming Choice, a Vitali set $V\subseteq[0,1]$ is not Lebesgue measurable. [[thm-a-vitali-set-is-not-lebesgue-measurable]]

## Refutation

1.1 By [F2] choose a Vitali set $V$, and by [F4] it is nonmeasurable. Therefore some $T\subseteq\mathbb R$ fails its Carathéodory splitting identity. Let $A=T\cap V$ and $B=T\setminus V$; these are disjoint and their union is $T$. Thus Lebesgue outer measure fails finite additivity on this pair. Full Choice here supplies in particular the Countable Choice hypothesis of the line comparison. [F2, F3, F4]

2.1 The line equality transfers this failure to $\mathcal H^1$. Add empty sets after $A,B$ to make a disjoint sequence; its sum is still $\mathcal H^1(A)+\mathcal H^1(B)$ and differs from $\mathcal H^1(T)$. Neither piece can be empty, since such a splitting would be automatic. Hence countable additivity on all subsets is false. [F1, step 1.1] ∎
