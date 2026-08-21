---
id: lem-semifinite-measures-have-arbitrarily-large-finite-subsets
kind: lemma
title: "Assuming countable choice, an infinite-measure set in a semifinite measure space has arbitrarily large finite-measure subsets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-finite-sigma-finite-and-semifinite-measures, def-countable-choice, thm-continuity-from-below-for-measures, thm-finite-and-countable-subadditivity-of-measures, prop-measure-of-a-set-difference, lem-extended-reals-complete, cor-archimedean-reciprocal]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "G. Folland, Real Analysis, 2nd ed., §1.3, Exercise 14"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
pipeline_run: null
---

## Statement

Assume the Axiom of Countable Choice. Let $\mu$ be semifinite and let $E$ be measurable with $\mu(E)=+\infty$. For every real $R>0$ there is measurable $F\subseteq E$ such that

$$R<\mu(F)<+\infty.$$

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, a semifinite measure $\mu$, a measurable $E$ with $\mu(E)=+\infty$, and a real $R>0$.

[L1] Semifiniteness means that every measurable set of positive measure contains a measurable subset of positive finite measure ([[def-finite-sigma-finite-and-semifinite-measures]]).

[L2] Countable choice selects one member from every nonempty natural-number-indexed family ([[def-countable-choice]]).

[L3] Measures are continuous from below on increasing measurable sequences ([[thm-continuity-from-below-for-measures]]) and countably subadditive ([[thm-finite-and-countable-subadditivity-of-measures]]).

[L4] If $A\subseteq B$, $\mu(A)<+\infty$, and $\mu(B)=+\infty$, then $\mu(B\setminus A)=+\infty$ ([[prop-measure-of-a-set-difference]]).

[L5] Every subset of $\overline{\mathbb R}$ has a supremum there ([[lem-extended-reals-complete]]).

[L6] For every real $\varepsilon>0$ there is a natural $n\ge1$ with $1/n<\varepsilon$ ([[cor-archimedean-reciprocal]]).

## Proof

**Proof technique:** contradiction.

1.1 Let $M:=\sup\{\mu(F):F\subseteq E\text{ measurable and }\mu(F)<+\infty\}$. The family is nonempty because it contains $\varnothing$, and semifiniteness makes $M>0$. [given, L1, L5]

2.1 If $M=+\infty$, the definition of supremum directly supplies a finite-measure $F\subseteq E$ with $\mu(F)>R$, so only the case $M<+\infty$ can fail the conclusion. [given, step 1.1, L5]

2.2 Suppose for contradiction that $M<+\infty$. For each $n$, the family of measurable finite-measure $F\subseteq E$ with $\mu(F)>M-1/(n+1)$ is nonempty; [L2] selects one such $F_n$ for every $n$. [step 1.1, L2, assume-contra, choose]

3.1 Put $G_n=\bigcup_{k<n+1}F_k$ and $G=\bigcup_nG_n$. Finite subadditivity makes every $G_n$ finite-measure, while $\mu(G_n)\le M$ by the definition of $M$ and $\mu(G_n)>M-1/(n+1)$ because $F_n\subseteq G_n$; [L6] shows these lower bounds approach $M$, and continuity from below gives $\mu(G)=M<+\infty$. [step 1.1, step 2.2, L3, L5, L6]

4.1 By [L4], $\mu(E\setminus G)=+\infty$. Semifiniteness supplies measurable $H\subseteq E\setminus G$ with $0<\mu(H)<+\infty$. [step 3.1, L1, L4, choose]

5.1 The disjoint set $G\cup H\subseteq E$ has finite measure $M+\mu(H)>M$, contradicting the definition of $M$. Hence $M=+\infty$, and step 2.1 gives the required $F$. [step 2.1, step 3.1, step 4.1, discharge-contradiction] ∎
