---
id: prop-caratheodory-measurable-sets-form-an-algebra
kind: proposition
title: "Carathéodory measurable sets form an algebra"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-caratheodory-measurable-set, lem-caratheodory-subadditive-inequality-is-automatic, def-algebra-of-subsets]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "G. Folland, Real Analysis, 2nd ed., Theorem 1.11"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "T. Tao, An Introduction to Measure Theory, Theorem 1.7.3"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Statement

The Carathéodory measurable subsets of $X$ form an algebra of subsets. In particular, $\varnothing$ is measurable, complements of measurable sets are measurable, and finite unions of measurable sets are measurable ([[def-algebra-of-subsets]]).

## Facts & Assumptions

**Given:** An outer measure $\mu^*$ on $X$ and Carathéodory measurable sets $E,F\subseteq X$.

[F1] A set $E\subseteq X$ is **Carathéodory measurable** for $\mu^*$ when $\mu^*(A)=\mu^*(A\cap E)+\mu^*(A\setminus E)$ for every $A\subseteq X$. ([[def-caratheodory-measurable-set]])

[L1] For every outer measure $\mu^*$ and all $A,E\subseteq X$, $\mu^*(A)\le\mu^*(A\cap E)+\mu^*(A\setminus E)$. ([[lem-caratheodory-subadditive-inequality-is-automatic]])

## Proof

**Proof technique:** direct.

1.1 For every test set $A$, the split by $\varnothing$ reads $\mu^*(A)=0+\mu^*(A)$, so $\varnothing$ is measurable; the identity for $X\setminus E$ is the identity for $E$ with its two summands exchanged. Applying [F1] first to $E$ and then, inside each resulting piece, to $F$ splits $A$ into the four cells $A\cap E\cap F$, $A\cap E\setminus F$, $A\cap F\setminus E$, and $A\setminus(E\cup F)$, with their outer measures summing to $\mu^*(A)$. [F1, algebra]

2.1 By subadditivity, $\mu^*(A\cap(E\cup F))$ is at most the sum of the first three cell values from step 1.1, while $A\setminus(E\cup F)$ is the fourth cell; hence $\mu^*(A)\ge\mu^*(A\cap(E\cup F))+\mu^*(A\setminus(E\cup F))$. The reverse inequality is [L1], so $E\cup F$ is measurable and the measurable family is an algebra. [step 1.1, F1, L1, algebra] ∎
