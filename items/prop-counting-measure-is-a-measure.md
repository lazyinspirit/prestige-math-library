---
id: prop-counting-measure-is-a-measure
kind: proposition
title: "Counting measure is a measure"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-counting-measure, def-measure, def-nonnegative-extended-series, def-countable]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. Axler, Measure, Integration & Real Analysis, Example 2.55"
      url: "https://measure.axler.net/MIRA.pdf"
pipeline_run: null
---

## Statement

For every set $X$, the counting set function $\#_X$ of [[def-counting-measure]] is a measure on $(X,\mathcal P(X))$.

## Facts & Assumptions

**Given:** A set $X$ and a pairwise disjoint sequence $(E_k)$ of subsets of $X$.

[L1] Counting measure assigns a finite set its finite cardinality and an infinite set the value $+\infty$ ([[def-counting-measure]]).

[L2] A measure must vanish at the empty set and be countably additive on pairwise disjoint measurable sequences ([[def-measure]]).

[L3] A nonnegative extended series is the supremum of its finite partial sums ([[def-nonnegative-extended-series]]).

[L4] A set is finite when it is equinumerous with a natural number, and otherwise it may be countably infinite or uncountable ([[def-countable]]).

## Proof

**Proof technique:** direct.

1.1 One has $\#_X(\varnothing)=0$. For every $n$, disjointness gives $\#_X(\bigcup_{k<n}E_k)=\sum_{k<n}\#_X(E_k)$ whenever all those sets are finite. [given, L1]

1.2 If some $E_r$ is infinite, then $\bigcup_kE_k$ is infinite and both $\#_X(\bigcup_kE_k)$ and $\sum_k\#_X(E_k)$ are $+\infty$. [given, L1, L3]

2.1 Suppose every $E_k$ is finite. If $E:=\bigcup_kE_k$ is finite, only finitely many pairwise disjoint $E_k$ can be nonempty, and step 1.1 gives $\#_X(E)=\sum_k\#_X(E_k)$. [given, step 1.1, L1, L3, L4]

2.2 Suppose every $E_k$ is finite but $E$ is infinite. For every $m\in\mathbb N$, the set $E$ contains more than $m$ distinct points; the finitely many indices of the $E_k$ containing those points have a strict upper bound $n$ (take one more than their maximum), so step 1.1 gives $\sum_{k<n}\#_X(E_k)>m$. Hence the partial sums are unbounded and their supremum is $+\infty=\#_X(E)$. [given, step 1.1, L1, L3, L4]

3.1 Steps 1.2, 2.1 and 2.2 cover all possibilities for the union, so countable additivity holds; with $\#_X(\varnothing)=0$ from step 1.1, [L2] proves that $\#_X$ is a measure. [step 1.1, step 1.2, step 2.1, step 2.2, L2] ∎
