---
id: lem-greedy-set-cover-charging-bound
kind: lemma
title: "The greedy charge on each newly covered element is at most OPT divided by the remaining count"
status: draft
origin: pipeline
deps:
  - def-optimization-problem-and-approximation-ratio
  - def-greedy-set-cover
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Williamson and Shmoys, The Design of Approximation Algorithms, §1.6 Fact 1.10 and its proof, printed p. 25"
      url: "https://designofapproxalgs.com/book.pdf"
    - title: "Ghaffari, Advanced Algorithms, Lecture 1: Approximation Algorithms I, §2.1 Theorem 3, PDF pp. 2–3"
      url: "https://people.csail.mit.edu/ghaffari/AA18/Notes/S_18_01.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Let $r\ge1$ elements remain uncovered just before a weighted greedy set-cover
step, and let $\mathrm{OPT}$ be the cost of a fixed minimum cover. The chosen
price per newly covered element is at most $\mathrm{OPT}/r$. Equivalently, if
the elements are ordered by first coverage, ties within a round following the
fixed order of the universe, then the $j$-th element of this order receives
charge at most $\mathrm{OPT}/(n-j+1)$, where $n$ is the size of the universe.

## Facts & Assumptions

**Given:** A feasible weighted set-cover instance with universe $U$ of $n$ elements, listed sets with nonnegative rational costs, a run of the weighted greedy algorithm, a step of that run, and a minimum-cost cover $O^\ast$ with total cost $\mathrm{OPT}$.

[F1] While uncovered elements remain, the greedy algorithm chooses a listed set with positive newly covered count minimizing the ratio of its cost to that count, ties going to the smallest index in the input order; each set chosen in a round charges every element it newly covers the same amount, namely its cost divided by its newly covered count. All comparisons are exact in the rationals, and the listed family covers $U$. ([[def-greedy-set-cover]])

[F2] Every instance of the stated domain has at least one feasible solution, the set of values of feasible solutions is a finite nonempty set of nonnegative rationals, and its minimum in the minimization direction is attained; the optimum is therefore a well-defined nonnegative rational, denoted $\mathrm{OPT}$ for this problem. ([[def-optimization-problem-and-approximation-ratio]])

## Proof

**Proof technique:** direct.

1.1 Fix a step of the greedy run, let $R$ be the set of elements still uncovered just before it and $r=|R|\ge1$ the remaining count; let $N\subseteq R$, $N\ne\varnothing$, be the set of elements newly covered by the set chosen at this step, so the chosen price per newly covered element is $c/|N|$ for that set's cost $c$. Put $t_S=|S\cap R|$ for every set $S$ of the fixed minimum-cost cover $O^\ast$ of [F2]. Since $O^\ast$ covers $U$ and hence $R$, every element of $R$ lies in at least one $S\in O^\ast$; summing the counts $t_S$ therefore counts each element of $R$ at least once, so $\sum_{S\in O^\ast}t_S\ge r\ge1$. [F1, F2, given, construct]

2.1 Let $T=\{S\in O^\ast: t_S>0\}$. Then $T$ is nonempty because $\sum_{S\in O^\ast}t_S\ge r\ge1$, and $\sum_{S\in T}t_S=\sum_{S\in O^\ast}t_S\ge r>0$, while $\sum_{S\in T}c(S)\le\sum_{S\in O^\ast}c(S)=\mathrm{OPT}$ because all costs are nonnegative and $T\subseteq O^\ast$. The $t_S$-weighted average of the ratios $c(S)/t_S$ over $S\in T$ equals $\bigl(\sum_{S\in T}c(S)\bigr)\big/\bigl(\sum_{S\in T}t_S\bigr)$ and is therefore at least the minimum of those ratios, so that minimum is at most $\mathrm{OPT}/r$. [step 1.1, algebra]

3.1 Each $S\in T$ is a listed set of the instance and has positive newly covered count $t_S>0$ at this step, so it is a candidate in the greedy choice; by [F1] the chosen set minimizes the ratio among all candidates, so the chosen price per newly covered element satisfies $c/|N|\le\min_{S\in T}c(S)/t_S\le\mathrm{OPT}/r$. Every element newly covered at this step receives the charge $c/|N|$, hence a charge of at most $\mathrm{OPT}/r$. [F1, step 2.1, algebra]

4.1 Order the elements of $U$ by the round in which they are first covered, breaking ties within a round by the fixed order of $U$, and let $u$ be the $j$-th element of this order, covered in a round that begins with $r$ uncovered elements. Before that round exactly $n-r$ elements are already covered, all of them earlier than $u$ in the order, so $j\ge n-r+1$, that is, $r\ge n-j+1\ge1$; since the charge of $u$ is at most $\mathrm{OPT}/r$ by step 3.1 and $r\ge n-j+1>0$, it is at most $\mathrm{OPT}/(n-j+1)$. [step 1.1, step 3.1, algebra]

5.1 Consequently the price chosen in any greedy step with $r\ge1$ uncovered elements is at most $\mathrm{OPT}/r$, and the $j$-th element in first-coverage order receives charge at most $\mathrm{OPT}/(n-j+1)$ for every $j=1,\dots,n$; both bounds are ordinary inequalities of nonnegative rationals with positive denominators, so no division by zero occurs. [step 3.1, step 4.1, algebra] ∎
