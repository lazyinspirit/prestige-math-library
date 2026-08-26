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
    - title: "Jacek Cichoń, Aleksander Kharazishvili, and Bogdan Węglorz, Subsets of the Real Line, Theorem 8.2"
      url: "https://ki.pwr.edu.pl/cichon/Materialy/BOOK.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. Let $V \subseteq [0,1]$ be a Vitali set. Then $V$ is
not Lebesgue measurable.

## Facts & Assumptions

**Given:** The Axiom of Choice and a Vitali set $V \subseteq [0,1]$.

[L2] Assuming countable choice, Lebesgue outer measure, Lebesgue measurability and Lebesgue measure are unchanged by translation ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]).

[L3] Assuming countable choice, $[0,1]$ and $[-1,2]$ are Lebesgue measurable with measures $1$ and $3$ respectively ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[L4] $\mathbb{Q}$ is countably infinite ([[thm-rationals-countable]]).

[L5] A measure vanishes on $\varnothing$ and is countably additive on pairwise disjoint measurable sequences ([[def-measure]]).

[L6] For every real $M$ there is a natural number $n \ge 1$ with $M < n$ ([[thm-of-archimedean]]).

## Proof

**Proof technique:** contradiction.

1.1 Enumerate $\mathbb{Q} \cap [-1,1]$ as $(q_k)_{k \in \mathbb{N}}$ by [L4]. The translates $V+q_k$ are pairwise disjoint: if $v_1+q_i=v_2+q_j$ then $v_1-v_2=q_j-q_i \in \mathbb{Q}$, so the selector property of $V$ forces $v_1=v_2$ and then $q_i=q_j$. They cover $[0,1]$, because every $x \in [0,1]$ differs by a rational in $[-1,1]$ from the unique $v \in V$ in its equivalence class, and each lies inside $[-1,2]$ because $0 \le v \le 1$ and $-1 \le q_k \le 1$. [given, L4, algebra]

2.1 Suppose, for contradiction, that $V$ is Lebesgue measurable with $\lambda(V)=0$. Then every translate $V+q_k$ is measurable with measure $0$ by [L2], and countable additivity applied to the pairwise disjoint family of step 1.1 gives $1 = \lambda([0,1]) \le \lambda\!\left(\bigcup_{k \in \mathbb{N}}(V+q_k)\right) = \sum_{k=0}^{\infty}\lambda(V+q_k)=0$, contradicting [L3]. [step 1.1, L2, L3, L5, assume-contra]

2.2 Suppose instead that $V$ is Lebesgue measurable with $\lambda(V)>0$. By [L6] choose a natural number $m \ge 1$ with $3 < m\,\lambda(V)$. The first $m$ translates of step 1.1 are pairwise disjoint and all lie inside $[-1,2]$, so [L2], [L3] and finite additivity from [L5] give $3=\lambda([-1,2]) \ge \sum_{k<m}\lambda(V+q_k)=m\,\lambda(V)$, contradicting the choice of $m$. [step 1.1, L2, L3, L5, L6, assume-contra]

3.1 Steps 2.1 and 2.2 rule out both possible values of the measure of a measurable Vitali set, so $V$ is not Lebesgue measurable. [step 2.1, step 2.2, discharge-contradiction] ∎

## Remarks

- The proof uses only countably many rational translates after the initial selector has been fixed. The countable part is not where the choice cost sits.
