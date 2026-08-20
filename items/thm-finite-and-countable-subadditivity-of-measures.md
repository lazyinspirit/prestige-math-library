---
id: thm-finite-and-countable-subadditivity-of-measures
kind: theorem
title: "Finite and countable subadditivity of measures"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-measure, prop-measure-monotonicity, def-nonnegative-extended-series, thm-well-ordering-principle]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. Axler, Measure, Integration & Real Analysis, Theorem 2.58"
      url: "https://measure.axler.net/MIRA.pdf"
pipeline_run: null
---

## Statement

Let $\mu$ be a measure and let $(E_k)_{k\in\mathbb N}$ be measurable. Then

$$\mu\left(\bigcup_{k\in\mathbb N}E_k\right)\le\sum_{k=0}^{\infty}\mu(E_k).$$

For every $m\in\mathbb N$ one also has

$$\mu\left(\bigcup_{k<m}E_k\right)\le\sum_{k<m}\mu(E_k),$$

including $m=0$, where both sides are $0$.

## Facts & Assumptions

**Given:** A measure $\mu$ and a sequence $(E_k)$ of measurable sets.

[L1] A measure is countably additive on pairwise disjoint measurable sequences ([[def-measure]]).

[L2] If $A\subseteq B$ are measurable, then $\mu(A)\le\mu(B)$ ([[prop-measure-monotonicity]]).

[L3] A nonnegative extended series is the supremum of its finite partial sums, beginning with the empty sum $0$ ([[def-nonnegative-extended-series]]).

[L4] Every nonempty subset of $\mathbb N$ has a least element ([[thm-well-ordering-principle]]).

## Proof

**Proof technique:** direct.

1.1 Define $F_k:=E_k\setminus\bigcup_{j<k}E_j$. Then every $F_k$ is measurable, the $F_k$ are pairwise disjoint, and $F_k\subseteq E_k$. [given]

1.2 The unions of the two sequences agree: if $x\in\bigcup_kE_k$, then the nonempty set $\{k:x\in E_k\}$ has a least member $r$, and the definition gives $x\in F_r$; the reverse inclusion follows from $F_k\subseteq E_k$. [given, L4]

2.1 Countable additivity, monotonicity, and the definition of a nonnegative series give $\mu(\bigcup_kE_k)=\sum_k\mu(F_k)\le\sum_k\mu(E_k)$. [step 1.1, step 1.2, L1, L2, L3]

3.1 For $m\in\mathbb N$, apply step 2.1 to the sequence $E_0,\ldots,E_{m-1},\varnothing,\varnothing,\ldots$; its union and sum are the displayed finite union and finite sum, and when $m=0$ they are both empty and equal to $0$. [step 2.1, L1, L3] ∎
