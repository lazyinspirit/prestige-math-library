---
id: lem-qc-recursive-bad-rectangle-probability
kind: lemma
title: "Recursive Bad-Rectangle Probability"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - def-qc-noise-channel-model
  - def-qc-level-r-good-and-bad-rectangles
  - lem-qc-disjoint-fault-location-events-are-independent
dependency_level: 20
proof_strategy: direct
sources:
  references:
    - title: "D. Aharonov and M. Ben-Or, Fault-Tolerant Quantum Computation With Constant Error"
      url: "https://arxiv.org/pdf/quant-ph/9611025"
    - title: "John Preskill, Quantum Computation, Chapter 7: Quantum Error Correction"
      url: "https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf"
---

## Statement

Let $a\ge2$ and $1\le q<a$ be integers and let $\eta\in[0,1]$. For each integer $r\ge0$, suppose every level-$(r+1)$ rectangle has at most $a$ level-$r$ children, the family has full depth $r+1$ (every root-to-leaf path has exactly $r+1$ child edges), the leaves are single elementary locations, and sibling elementary-location sets are pairwise disjoint. A level-zero rectangle is bad exactly when its location faults, and a parent is bad only if at least $q+1$ children are bad. Under independent local faults of rate $\eta$, let $p_r$ be a uniform upper bound for the probability that a level-$r$ rectangle is bad, with $p_0=\eta$. Put $A=\binom{a}{q+1}$, the number of $(q+1)$-subsets of an $a$-element set. Then $p_{r+1}\le A p_r^{q+1}$ and $p_r\le A^{-1/q}\bigl(A^{1/q}\eta\bigr)^{(q+1)^r}$.
If $A\eta^q<1$, then $p_r\to0$ super-exponentially in $r$. No independence of child badness is inferred without the disjoint-location hypothesis.

## Facts & Assumptions


**Given:** A finite independent local fault model, a full-depth rooted hierarchy with one elementary location per leaf and pairwise disjoint sibling location sets, and a parent bad only when at least $q+1$ of at most $a$ children are bad. Prove the recurrence and closed form.

[F1] [[def-qc-noise-channel-model]]: Elementary fault indicators are mutually independent and each has probability $\eta$.

[F2] [[def-qc-level-r-good-and-bad-rectangles]]: A parent has at most $a$ disjoint child rectangles and is bad only if at least $q+1$ children are bad.

[F3] [[lem-qc-disjoint-fault-location-events-are-independent]]: Events determined by disjoint child location sets are independent.

## Proof

1.1 Fix a level-$(r+1)$ rectangle. If it is bad, then some $(q+1)$-subset $J$ of its children consists entirely of bad level-$r$ rectangles. There are at most $A=\binom{a}{q+1}$ such subsets. [given, F2]

1.2 For each fixed $J$, its child-bad events depend on pairwise disjoint location sets, so they are independent by [F3]. Each has probability at most $p_r$; hence the probability that every child in $J$ is bad is at most $p_r^{q+1}$. Since the indicator of a finite union is at most the sum of its event indicators, summing probabilities over the at most $A$ choices of $J$ proves $p_{r+1}\le A p_r^{q+1}$. [F1, F2, F3, algebra]

2.1 Set $\theta=A^{1/q}\eta$. The asserted closed form holds at $r=0$, since $A^{-1/q}\theta=\eta$. If it holds at $r$, then $p_{r+1}\le A(A^{-1/q}\theta^{(q+1)^r})^{q+1}=A^{-1/q}\theta^{(q+1)^{r+1}}$, because $1-(q+1)/q=-1/q$. Induction proves the formula for every $r$. [step 1.2, algebra]

3.1 The condition $A\eta^q<1$ is equivalent to $0\le\theta<1$. For $A\ge1$ and $q+1>1$, the exponent $(q+1)^r$ tends to infinity, so the closed-form upper bound tends to zero. [given, step 2.1, algebra] ∎

