---
id: cor-every-subset-of-r-of-positive-outer-measure-contains-a-nonmeasurable-subset
kind: corollary
title: "Every subset of $\\mathbb{R}$ of positive Lebesgue outer measure contains a nonmeasurable subset"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-vitali-sets-exist-under-choice-on-r-over-q,
       thm-steinhaus-difference-set-contains-a-ball,
       thm-rationals-countable,
       thm-lebesgue-measure-is-a-complete-measure,
       def-measure,
       def-countable-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. Tao, An Introduction to Measure Theory (GSM 126), Section 1.2"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
    - title: "Steinhaus theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Steinhaus_theorem"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. Let $A \subseteq \mathbb{R}$ satisfy
$\lambda^*(A)>0$. Then $A$ contains a subset that is not Lebesgue measurable.

## Facts & Assumptions

**Given:** The Axiom of Choice and a subset $A \subseteq \mathbb{R}$ with $\lambda^*(A)>0$.

[L0] Assuming the Axiom of Choice, a Vitali set $V\subseteq[0,1]$ exists ([[thm-vitali-sets-exist-under-choice-on-r-over-q]]).

[L2] Assuming countable choice, if a Lebesgue measurable subset of $\mathbb{R}$ has positive measure then its difference set contains an open ball about $0$ ([[thm-steinhaus-difference-set-contains-a-ball]]).

[L3] $\mathbb{Q}$ is countably infinite ([[thm-rationals-countable]]).

[L4] Assuming countable choice, $(\mathbb{R},\mathcal{L}(\mathbb{R}),\lambda)$ is a complete measure space ([[thm-lebesgue-measure-is-a-complete-measure]]).

[L5] A measure vanishes on $\varnothing$ and is countably additive on pairwise disjoint measurable sequences ([[def-measure]]).

## Proof

**Proof technique:** contradiction.

1.1 By [L0] fix a Vitali set $V \subseteq [0,1]$. For each rational $q$ put $A_q := A \cap (V+q)$. The sets $A_q$ are pairwise disjoint because the translates $V+q$ are, and they cover $A$ because the rational translates of a Vitali selector cover all of $\mathbb{R}$. [given, L0, L3, construct]

2.1 Suppose some $A_q$ were Lebesgue measurable with positive measure. Then [L2] would give an open interval about $0$ inside $A_q-A_q$. But if $x,y \in A_q \subseteq V+q$, then $x-y \in \mathbb{Q}$ implies $(x-q)-(y-q) \in \mathbb{Q}$ with both terms in $V$, so the selector property forces $x=y$; thus $A_q-A_q$ contains no nonzero rational. Every open interval about $0$ contains a nonzero rational, contradiction. Hence every measurable $A_q$ has measure $0$. [step 1.1, L2, assume-contra]

3.1 Suppose, for contradiction, that every $A_q$ is Lebesgue measurable. Then step 2.1 gives $\lambda(A_q)=0$ for every rational $q$, and by [L4] each $A_q$ is measurable with outer measure $0$. Since the family is pairwise disjoint and covers $A$, countable additivity from [L5] gives $\lambda(A)=0$, hence $\lambda^*(A)=0$, contradicting the hypothesis. Therefore at least one set $A_q$ is not Lebesgue measurable, and it is a subset of $A$. [step 1.1, step 2.1, L3, L4, L5, discharge-contradiction] ∎
