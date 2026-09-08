---
id: thm-a-vitali-set-is-not-lebesgue-measurable
kind: theorem
title: "Assuming the Axiom of Choice, a Vitali set is not Lebesgue measurable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-lebesgue-outer-measure-and-measurability-are-translation-invariant,
       thm-lebesgue-measure-of-a-box-of-every-kind,
       thm-rationals-countable,
       def-measure,
       thm-of-archimedean,
       def-countable-choice,
       def-axiom-of-choice,
       def-vitali-set-on-the-unit-interval,
       thm-lebesgue-measure-is-a-complete-measure]
justified_by: []
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
  verified:
    model: Codex
    verdict: repaired-and-locally-checked
    date: 2026-09-08
    scope: "Owner-authorized dependency and choice-use repair; local checks only, no judge"
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory, Example 2.17"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "T. Tao, An Introduction to Measure Theory (GSM 126), Section 1.2"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
    - title: "Jacek Cichoń, Aleksander Kharazishvili, and Bogdan Węglorz, Subsets of the Real Line, Theorem 8.2"
      url: "https://ki.pwr.edu.pl/cichon/Materialy/BOOK.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. Let $V \subseteq [0,1]$ be a Vitali set. Then $V$ is
not Lebesgue measurable.

## Facts & Assumptions

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]) and a Vitali set
$V \subseteq [0,1]$ ([[def-vitali-set-on-the-unit-interval]]).

[L1] Each rational-difference equivalence class in $[0,1]$ meets $V$ in
exactly one point ([[def-vitali-set-on-the-unit-interval]]).

[L2] Assuming countable choice, Lebesgue outer measure, Lebesgue measurability and Lebesgue measure are unchanged by translation ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]).

[L3] Assuming countable choice, $[0,1]$ and $[-1,2]$ are Lebesgue measurable with measures $1$ and $3$ respectively ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[L4] $\mathbb{Q}$ is countably infinite ([[thm-rationals-countable]]).

[L5] A measure vanishes on $\varnothing$ and is countably additive on pairwise disjoint measurable sequences ([[def-measure]]).

[L6] For every real $M$ there is a natural number $n \ge 1$ with $M < n$ ([[thm-of-archimedean]]).

[L7] Under countable choice ([[def-countable-choice]]), Lebesgue measure is
a measure on the Lebesgue sigma-algebra
([[thm-lebesgue-measure-is-a-complete-measure]]).

## Proof

**Proof technique:** contradiction.

1.1 AC supplies countable choice: for a sequence of nonempty sets $(X_n)$, apply AC to $\{X_n:n\in\mathbb N\}$ and put $f(n)=g(X_n)$ for its choice function $g$. Thus [L7] and the countable-choice hypotheses in [L2] and [L3] apply. Finite additivity follows from [L5] by padding with empty sets; monotonicity follows by writing a measurable $B\supseteq A$ as $A\sqcup(B\setminus A)$. [given, L2, L3, L5, L7]

1.2 Take a repetition-free enumeration of $\mathbb Q$ from [L4] and retain its terms in $[-1,1]$ in their original order, obtaining $(q_k)_{k\in\mathbb N}$. There are infinitely many retained terms, since $1/(j+1)$ are distinct members for $j\in\mathbb N$; taking successive least retained indices requires no choice. The translates $V+q_k$ are pairwise disjoint: an equality $v_1+q_i=v_2+q_j$ gives $v_1-v_2\in\mathbb Q$, so [L1] gives $v_1=v_2$ and then $i=j$. They cover $[0,1]$, since each $x\in[0,1]$ has a representative $v\in V$ with $x-v\in\mathbb Q\cap[-1,1]$, and all lie inside $[-1,2]$. [L1, L4, algebra]

2.1 Suppose, for contradiction, that $V$ is Lebesgue measurable with $\lambda(V)=0$. Then every translate $V+q_k$ is measurable with measure $0$ by [L2], and countable additivity applied to the pairwise disjoint family of step 1.2 gives $1 = \lambda([0,1]) \le \lambda\!\left(\bigcup_{k \in \mathbb{N}}(V+q_k)\right) = \sum_{k=0}^{\infty}\lambda(V+q_k)=0$, contradicting [L3]. [step 1.1, step 1.2, L2, L3, L5, assume-contra]

2.2 Suppose instead that $V$ is Lebesgue measurable with $\lambda(V)>0$. Since $V\subseteq[0,1]$, step 1.1 and [L3] give $0<\lambda(V)\le1$. Apply [L6] to the real number $3/\lambda(V)$ to choose $m\ge1$ with $3<m\lambda(V)$. The first $m$ translates from step 1.2 are disjoint and lie in $[-1,2]$, so finite additivity and translation invariance give $3\ge\sum_{k<m}\lambda(V+q_k)=m\lambda(V)$, a contradiction. [step 1.1, step 1.2, L2, L3, L5, L6, assume-contra]

3.1 Steps 2.1 and 2.2 rule out both possible values of the measure of a measurable Vitali set, so $V$ is not Lebesgue measurable. [step 2.1, step 2.2, discharge-contradiction] ∎

## Remarks

- The selector is given, not constructed in this theorem. Here AC is used
  only to supply the countable choice required by the measure construction.
  Obtaining a Vitali set in the first place is a separate existence theorem.
